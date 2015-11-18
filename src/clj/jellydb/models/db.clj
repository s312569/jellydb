(ns jellydb.models.db
  (:require [clojure.java.jdbc :as db]
            [jellydb.models.transdecode :as td]
            [jellydb.models.blast :as bl]
            [jellydb.models.ips :as ip]
            [clojure.string :as st]
            [clj-biosequence.core :as bs]
            [clojure.java.io :as io]
            [taoensso.nippy :as nip]
            [clojure.data.json :as json]
            [clojure.edn :as edn]
            [fs.core :as fs]
            [jdbc.pool.c3p0 :as pool])
  (:import [org.apache.commons.codec.binary Base64]
           [org.postgresql.util PGobject]))

(def working-directory "/home/jason/Dropbox/jellydb/resources/working/")
(def req-key-map (atom {}))

(def spec
  (pool/make-datasource-spec
   {:classname "org.postgresql.Driver"
    :subprotocol "postgresql"
    :user "jason"
    :password "7004jason"
    :subname (str "//" "127.0.0.1" ":" "5432" "/" "jellydb")}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; utilities
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- submitter-query
  [hm]
  (str "select id from submitters where "
       (->> (map (fn [[k v]] (str (name k) "=" "'" v "'"))
                 hm)
            (interpose " and ")
            (apply str))))

(defn- submitter-exists?
  [hm]
  (:id (db/query spec (submitter-query hm)
                 :result-set-fn first)))

(defn- new-uuid 
  "Retrieve a type 4 (pseudo randomly generated) UUID. The UUID is
  generated using a cryptographically strong pseudo random number
  generator."
  []
  (str (java.util.UUID/randomUUID)))

(defn temp-directory
  [did prefix]
  (let [p (str working-directory prefix "-" did "-" (new-uuid))]
    (if (and (not (fs/directory? p))
             (fs/mkdir p))
      p
      (temp-directory did prefix))))

(defn temp-file
  ([dir prefix] (temp-file dir prefix nil))
  ([dir prefix suffix]
   (let [p (io/file (str dir "/" prefix "-" (new-uuid)
                         (if suffix (str "." suffix))))]
     (if (and (not (fs/file? p))
              (fs/create p))
       (fs/absolute-path p)
       (temp-file dir prefix)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; inserting things
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- insert-dataset
  [sub ds s]
  (let [sid (or (submitter-exists? sub)
                (-> (db/insert! s :submitters sub)
                    first
                    :id))
        did (-> (db/insert! s :assemblies
                            (-> (dissoc ds :pmid)
                                (assoc :submitter sid)))
                first
                :id)]
    (apply db/insert! s :pmids (map #(hash-map :did did :pmid %)
                                    (:pmid ds)))
    did))

(defmulti insert-coll (fn [table did coll]
                        (if (or (= table :ips)
                                (= table :blasts))
                          :hash)))

(defmethod insert-coll :hash
  [table _ coll]
  (dorun
   (apply db/insert! spec table
          (map #(hash-map :acc (bs/accession %)
                          :hash (Base64/encodeBase64String (nip/freeze %)))
               coll))))

(defmethod insert-coll :default
  [table did coll]
  (dorun
   (apply db/insert! spec table (map #(assoc %
                                             :alphabet
                                             (name (:alphabet %))
                                             :dataset
                                             did)
                                     coll))))

(defn- save-file
  [f did table]
  (with-open [r (bs/bs-reader f)]
    (insert-coll table did (bs/biosequence-seq r))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; getting stuff
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti get-biosequence (fn [q] (:table q)))
(defmulti row->biosequence (fn [hm] (cond (:id hm)
                                          :contig
                                          (:hash hm)
                                          :hash)))

(defmethod row->biosequence nil
  [hm]
  (bs/map->fastaSequence (assoc hm :alphabet
                                (keyword (:alphabet hm)))))

(defmethod row->biosequence :hash
  [hm]
  (nip/thaw (Base64/decodeBase64 (:hash hm))))

(defmethod row->biosequence :contig
  [hm]
  (bs/map->fastaSequence (assoc hm :alphabet
                                (keyword (:alphabet hm))
                                :acc
                                (str "jdb|" (:id hm))
                                :description
                                (str (:acc hm) " " (:description hm)))))

(defmethod get-biosequence :contigs
  [q]
  (let [id (-> (st/split (:acc q) #"\|") second Integer/parseInt)
        qu (str "select * from contigs where id=" id)]
    (db/query spec qu
              :row-fn row->biosequence
              :result-set-fn first)))

(defmethod get-biosequence :blasts
  [q]
  (let [qu (str "select * from blasts where acc='" (:acc q) "'")]
    (db/query spec qu
              :row-fn row->biosequence
              :result-set-fn first)))

(defmethod get-biosequence :default
  [q]
  (let [qu (str "select * from " (name (:table q)) "  where acc='" (:acc q) "'")]
    (db/query spec qu
              :row-fn row->biosequence
              :result-set-fn first)))

(defn query->file
  ([query file] (query->file query file bs/fasta-string))
  ([query file func]
   (db/query spec query
             :row-fn row->biosequence
             :result-set-fn #(bs/biosequence->file
                              %
                              file
                              :append false
                              :func func))))

(defn paginated-bs-query
  ([q] (paginated-bs-query q 0))
  ([q offset]
   (let [q (str q " order by acc OFFSET " offset " limit 20")]
     (db/query spec q :row-fn row->biosequence))))

(defn query-db
  [q & rest]
  (apply db/query spec q rest))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; currently used by frontend
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn bs->fasta
  [{:keys [acc description sequence]}]
  (str ">" acc " " description "\n" sequence "\n"))

(defn get-all-proteins
  [o]
  (if-let [q (str "select array_to_json(array_agg(row_to_json(t))) from (select * from peps order by acc OFFSET " o " limit 20) t")]
    {:status "success" :proteins (db/query spec q
                                           :row-fn #(-> (:array_to_json %)
                                                        .getValue
                                                        json/read-str)
                                           :result-set-fn first)}))

(defn count-query
  []
  (let [q "select count(*) from peps"]
    (merge {:status "success"} (db/query spec q :result-set-fn first))))

(defn fasta-proteins
  [req-id]
  (let [q (->> (get @req-key-map req-id)
               (map #(str "'" % "'"))
               (interpose #",")
               (apply str))]
    (if q
      (let [r (apply str (db/query spec
                                   (str "select * from peps where acc in (" q ")")
                                   :row-fn #(-> (row->biosequence %)
                                                bs->fasta)))]
        (swap! req-key-map dissoc req-id)
        r)
      {:status "fail" :msg "ERROR MESSAGE!"})))

(defn proteins-key
  [req-ids]
  (let [id (new-uuid)]
    (if-not (get req-key-map id)
      (do (swap! req-key-map assoc id req-ids)
          {:status :success :id id})
      (proteins-key req-ids))))

(defn get-assembly [id]
  (let [q (str "select * from assemblies where id=" id)]
    (query-db q :result-set-fn first)))

(defn get-pep [id]
  (let [s (select-keys (get-biosequence {:acc id :table :peps})
                       [:description :sequence])
        ss (->> (partition-all 55 (:sequence s))
                (map #(apply str %))
                (interpose "\n")
                (apply str))
        assembly (query-db )]
    {:status "success"
     :protein {:description (:description s)
               :sequence ss}}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; importing
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- expand-init
  [did f]
  (save-file (bs/init-fasta-file (str f ".transdecoder.pep")
                                 :iupacAminoAcids)
             did
             :peps)
  (save-file (bs/init-fasta-file (str f ".transdecoder.mRNA")
                                 :iupacNucleicAcids)
             did
             :mrnas)
  (save-file (bs/init-fasta-file (str f ".transdecoder.cds")
                                 :iupacNucleicAcids)
             did
             :cds))

(defn- extract-cds
  [did]
  (let [d (temp-directory did "decode")
        f (query->file (str "select * from contigs where dataset=" did)
                       (temp-file d "contigs"))]
    (try
      (->> (td/predict f d)
           (expand-init did))
      (catch Exception e
        (fs/delete-dir d)
        (throw e))
      (finally
        (fs/delete-dir d)))))

(defn- blast-peps
  [did]
  (let [d (temp-directory did "blast")
        b (-> (query->file (str "select * from peps where dataset=" did)
                           (temp-file d "peps"))
              bl/blast-sequences)]
    (try
      (with-open [r (bs/bs-reader b)]
        (insert-coll :blasts did (bs/biosequence-seq r)))
      (catch Exception e
        (fs/delete-dir d)
        (throw e))
      (finally
        (fs/delete-dir d)))))

(defn- ips-peps
  [did]
  (let [d (temp-directory did "ips")
        ip (-> (query->file (str "select * from peps where dataset=" did)
                            (temp-file d "ips")
                            #(-> (assoc % :sequence
                                        (st/replace (:sequence %) #"\*" ""))
                                 bs/fasta-string))
               ip/ips-sequences)]
    (try
      (with-open [r (bs/bs-reader ip)]
        (insert-coll :ips did (bs/biosequence-seq r)))
      (catch Exception e
        (fs/delete-dir d)
        (throw e))
      (finally
        (fs/delete-dir d)))))

(defn import-assembled-fasta
  [file & {:keys [submitter dataset]
           :or [submitter {first "" last "" email "" address ""}
                dataset {name "" abstract "" pmid () species ""}]}]
  "Imports an assembly."
  (db/with-db-transaction [s spec]
    (let [did (insert-dataset submitter dataset s)]
      (with-open [r (-> (bs/init-fasta-file file :iupacNucleicAcids)
                        bs/bs-reader)]
        (->> (bs/biosequence-seq r)
             (insert-coll :contigs did)))
      (extract-cds did)
      (blast-peps did)
      (ips-peps did))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; tables
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn create-database
  []
  (db/db-do-commands spec
                     (db/create-table-ddl
                      :submitters
                      [:id :serial "PRIMARY KEY"]
                      [:first :varchar "NOT NULL"]
                      [:last :varchar "NOT NULL"]
                      [:email :varchar]
                      [:address :varchar]))
  (db/db-do-commands spec
                     (db/create-table-ddl
                      :assemblies
                      [:id :serial "PRIMARY KEY"]
                      [:name :varchar "NOT NULL"]
                      [:abstract :text "NOT NULL"]
                      [:submitter :varchar "NOT NULL"]
                      [:time :timestamp "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]
                      [:species :varchar "NOT NULL"]))
  (db/db-do-commands spec
                     (db/create-table-ddl
                      :pmids
                      [:did :integer "NOT NULL"]
                      [:pmid :integer "NOT NULL"]))
  (db/db-do-commands spec
                     (db/create-table-ddl
                      :mrnas
                      [:acc :varchar "PRIMARY KEY"]
                      [:dataset :integer "NOT NULL"]
                      [:description :text]
                      [:alphabet :varchar "NOT NULL"]
                      [:sequence :text "NOT NULL"]))
  (db/db-do-commands spec
                     (db/create-table-ddl
                      :cds
                      [:acc :varchar "PRIMARY KEY"]
                      [:dataset :integer "NOT NULL"]
                      [:description :text]
                      [:alphabet :varchar "NOT NULL"]
                      [:sequence :text "NOT NULL"]))
  (db/db-do-commands spec
                     (db/create-table-ddl
                      :peps
                      [:acc :varchar "PRIMARY KEY"]
                      [:dataset :integer "NOT NULL"]
                      [:description :text]
                      [:alphabet :varchar "NOT NULL"]
                      [:sequence :text "NOT NULL"]))
  (db/db-do-commands spec
                     (db/create-table-ddl
                      :contigs
                      [:id :serial "PRIMARY KEY"]
                      [:acc :varchar "NOT NULL"]
                      [:dataset :integer "NOT NULL"]
                      [:description :text]
                      [:alphabet :varchar "NOT NULL"]
                      [:sequence :text "NOT NULL"]))
  (db/db-do-commands spec
                     (db/create-table-ddl
                      :blasts
                      [:acc :varchar "PRIMARY KEY"]
                      [:time :timestamp "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]
                      [:hash :text "NOT NULL"]))
  (db/db-do-commands spec
                     (db/create-table-ddl
                      :ips
                      [:acc :varchar "PRIMARY KEY"]
                      [:time :timestamp "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]
                      [:hash :text "NOT NULL"])))

(defn delete-database
  []
  (map #(try
          (db/db-do-commands spec
                             (db/drop-table-ddl %))
          (catch Exception _))
       '(:pmids :assemblies :submitters :mrnas :cds :peps :contigs
         :blasts :ips)))

;; (import-assembled-fasta "/home/jason/Dropbox/jellydb/resources/test-data/Trinity.fasta"
;;                               :submitter {:first "Jason"
;;                                           :last "Mulvenna"
;;                                           :email "jason.mulvenna@gmail.com"
;;                                           :address "QIMR Berghofer"}
;;                               :dataset {:name "Test"
;;                                         :abstract "Test"
;;                                         :pmid '(12 12 12)
;;                                         :species "S. pecies"})
