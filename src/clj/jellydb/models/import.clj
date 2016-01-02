(ns jellydb.models.import
  (:require [clojure.java.jdbc :as db]
            [jellydb.models.transdecode :as td]
            [jellydb.models.blast :as bl]
            [jellydb.models.ips :as ip]
            [jellydb.models.db :as jdb]
            [jellydb.models.utilities :as ut]
            [clojure.string :as st]
            [clj-biosequence.core :as bs]
            [clj-biosequence.interproscan :as ips]
            [clj-biosequence.blast :as blast]
            [clojure.java.io :as io]
            [taoensso.nippy :as nip]
            [clojure.data.json :as json]
            [clojure.edn :as edn]
            [fs.core :as fs]
            [jdbc.pool.c3p0 :as pool])
  (:import [org.apache.commons.codec.binary Base64]
           [org.postgresql.util PGobject]))

(def working-directory "/home/jason/Dropbox/jellydb/resources/working/")

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

(defn temp-directory
  [did prefix]
  (let [p (str working-directory prefix "-" did "-" (ut/new-uuid))]
    (if (and (not (fs/directory? p))
             (fs/mkdir p))
      p
      (temp-directory did prefix))))

(defn temp-file
  ([dir prefix] (temp-file dir prefix nil))
  ([dir prefix suffix]
   (let [p (io/file (str dir "/" prefix "-" (ut/new-uuid)
                         (if suffix (str "." suffix))))]
     (if (and (not (fs/file? p))
              (fs/create p))
       (fs/absolute-path p)
       (temp-file dir prefix)))))

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
    (insert-coll table did
                 (map #(assoc % :acc
                              (-> (st/replace (bs/accession %)
                                              #"\."
                                              "")
                                  (st/replace #"\|" "")))
                      (bs/biosequence-seq r)))))

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
        f (jdb/query->file (str "select * from contigs where dataset=" did)
                           (temp-file d "contigs"))]
    (try
      (->> (td/predict f d)
           (expand-init did))
      (catch Exception e
        (fs/delete-dir d)
        (throw e))
      (finally
        (fs/delete-dir d)
        ))))

(defn- blast-peps
  [did]
  (let [d (temp-directory did "blast")
        b (-> (jdb/query->file (str "select * from peps where dataset=" did)
                           (temp-file d "peps"))
              (bl/blast-sequences ))]
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
        ip (-> (jdb/query->file (str "select * from peps where dataset=" did)
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
;;                                         :abstract "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test "
;;                                         :pmid '(12 12 12)
;;                                         :species "S. pecies"})
