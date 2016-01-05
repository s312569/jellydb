(ns jellydb.models.import
  (:require [clojure.java.jdbc :as db]
            [jellydb.models.transdecode :as td]
            [jellydb.models.blast :as bl]
            [jellydb.models.ips :as ip]
            [jellydb.models.db :as jdb]
            [jellydb.models.utilities :as ut]
            [clojure.string :refer [replace split trim]]
            [clj-biosequence.core :as bs]
            [clj-biosequence.interproscan :as ips]
            [clj-biosequence.blast :as blast]
            [clojure.java.io :as io]
            [taoensso.nippy :as nip]
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
  (if-not (fs/exists? working-directory)
    (throw (Exception. (str "Working directory does not exist (" working-directory ")."))))
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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; importing
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- expand-init
  [did f]
  (letfn [(fix-id [i]
            (-> (replace i #"\." "")
                (replace #"\|" "")))
          (import-seqs [file field]
            (with-open [r (-> (bs/init-fasta-file file :iupacNucleicAcids)
                              bs/bs-reader)]
              (doall (->> (bs/biosequence-seq r)
                          (map #(ut/update-db :peps {field (:sequence %)}
                                              ["acc=?" (fix-id (bs/accession %))]))))))
          (save-file [f did table]
            (with-open [r (bs/bs-reader f)]
              (insert-coll table did
                           (map #(assoc % :acc (fix-id (bs/accession %)))
                                (bs/biosequence-seq r)))))]
    (save-file (bs/init-fasta-file (str f ".transdecoder.pep") :iupacAminoAcids) did :peps)
    (import-seqs (str f ".transdecoder.mRNA") :mrna)
    (import-seqs (str f ".transdecoder.cds") :cds)))

(defn- extract-cds
  [did]
  (let [d (temp-directory did "decode")
        f (ut/all-biosequence {:table :contigs
                               :func #(bs/biosequence->file % (temp-file d "contigs")
                                                            :append false)})]
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
        b (-> (ut/all-biosequence {:table :peps
                                   :func #(bs/biosequence->file % (temp-file d "peps")
                                                                :append false)})
              (bl/blast-sequences :sp))]
    (try
      (with-open [r (bs/bs-reader b)]
        (insert-coll :blasts did (bs/biosequence-seq r)))
      (catch Exception e
        (fs/delete-dir d)
        (throw e))
      (finally
        (fs/delete-dir d)))))

(defn- update-descriptions
  [did]
  (letfn [(update-pep [bl]
            (if-let [h (-> (blast/hit-seq bl) first)]
              (if (and (-> (blast/hit-bit-scores h) first)
                       (< 50.0 (-> (blast/hit-bit-scores h) first)))
                (ut/update-db :peps
                              {:description
                               (str "Similar to "
                                    (-> (blast/hit-def h) (split #"OS=") first trim))}
                              ["acc = ?" (bs/accession bl)]))))]
    (ut/query-db (str "select blasts.acc, blasts.time,blasts.hash from blasts,peps where blasts.acc=peps.acc and peps.dataset=" did)
                 :row-fn ut/row->biosequence
                 :result-set-fn #(doall (map update-pep %)))))

(defn- ips-peps
  [did]
  (let [d (temp-directory did "ips")
        ip (-> (ut/all-biosequence {:table :peps
                                    :func (fn [x]
                                            (bs/biosequence->file
                                             (map #(-> (assoc % :sequence
                                                              (replace (:sequence %)
                                                                       #"\*" "")))
                                                  x)
                                             (temp-file d "ips")
                                             :append false))})
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
      (update-descriptions did)
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
                      :peps
                      [:acc :varchar "PRIMARY KEY"]
                      [:dataset :integer "NOT NULL"]
                      [:description :text]
                      [:alphabet :varchar "NOT NULL"]
                      [:sequence :text "NOT NULL"]
                      [:mrna :text]
                      [:cds :text]))
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

;; (import-assembled-fasta "/home/jason/Dropbox/jellydb/resources/test-data/test.fasta"
;;                               :submitter {:first "Jason"
;;                                           :last "Mulvenna"
;;                                           :email "jason.mulvenna@gmail.com"
;;                                           :address "QIMR Berghofer"}
;;                               :dataset {:name "Test"
;;                                         :abstract "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test "
;;                                         :pmid '(12 12 12)
;;                                         :species "S. pecies"})

;; (import-assembled-fasta "/home/jason/Dropbox/jellydb/resources/test-data/chironex.fasta"
;;                               :submitter {:first "Jason"
;;                                           :last "Mulvenna"
;;                                           :email "jason.mulvenna@gmail.com"
;;                                           :address "QIMR Berghofer"}
;;                               :dataset {:name "Tentacle transcriptome and proteome of the box jellyfish"
;;                                         :abstract "The box jellyfish, Chironex fleckeri, is the largest and most dangerous cubozoan jellyfish to humans. It produces potent and rapid-acting venom and its sting causes severe localized and systemic effects that are potentially life-threatening. In this study, a combined transcriptomic and proteomic approach was used to identify C. fleckeri proteins that elicit toxic effects in envenoming. More than 40,000,000 Illumina reads were used to de novo assemble ∼ 34,000 contiguous cDNA sequences and ∼ 20,000 proteins were predicted based on homology searches, protein motifs, gene ontology and biological pathway mapping. More than 170 potential toxin proteins were identified from the transcriptome on the basis of homology to known toxins in publicly available sequence databases. MS/MS analysis of C. fleckeri venom identified over 250 proteins, including a subset of the toxins predicted from analysis of the transcriptome. Potential toxins identified using MS/MS included metalloproteinases, an alpha-macroglobulin domain containing protein, two CRISP proteins and a turripeptide-like protease inhibitor. Nine novel examples of a taxonomically restricted family of potent cnidarian pore-forming toxins were also identified. Members of this toxin family are potently haemolytic and cause pain, inflammation, dermonecrosis, cardiovascular collapse and death in experimental animals, suggesting that these toxins are responsible for many of the symptoms of C. fleckeri envenomation. This study provides the first overview of a box jellyfish transcriptome which, coupled with venom proteomics data, enhances our current understanding of box jellyfish venom composition and the molecular structure and function of cnidarian toxins. The generated data represent a useful resource to guide future comparative studies, novel protein/peptide discovery and the development of more effective treatments for jellyfish stings in humans."
;;                                         :pmid '(26014501)
;;                                         :species "Chironex fleckeri"})
