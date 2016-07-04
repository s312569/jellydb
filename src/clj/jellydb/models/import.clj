(ns jellydb.models.import
  (:require [clojure.java.jdbc :as db]
;;            [jellydb.models.blast :as bl]
;;            [jellydb.models.ips :as ip]
;;            [jellydb.models.db :as jdb]
            [jellydb.models.utilities :as ut]
            [clojure.string :as string]
            [biodb.core :as bdb]
            [clj-fasta.core :as fa]
            [clj-interproscan.core :as ips]
            [clj-blast.core :as bl]
            [clojure.java.io :as io]
            [taoensso.nippy :as nip]
            [me.raynes.fs :as fs]
            [clj-commons-exec :as sh]
            [jdbc.pool.c3p0 :as pool]
            [clojure.edn :as edn])
  (:import [org.apache.commons.codec.binary Base64]
           [org.postgresql.util PGobject]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; database
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def dbspec (bdb/db-spec {:dbname "jellydb"
                          :dbtype :postgres
                          :user "jason"
                          :password "7004jason"}))

(defn default-insert
  [files table type dataset dbspec]
  (doseq [f files]
    (with-open [r (io/reader f)]
      (bdb/insert-sequences! dbspec table type
                             (map #(assoc % :dataset dataset)
                                  (fa/fasta-seq r))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; db methods
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; defaults

(defmethod bdb/prep-sequences :default
  [q]
  (:coll q))

(defmethod bdb/restore-sequence :default
  [q]
  (dissoc q :type))

;; submitter

(defmethod bdb/table-spec :submitter
  [q]
  (vector [:id :serial "PRIMARY KEY"]
          [:first :varchar "NOT NULL"]
          [:last :varchar "NOT NULL"]
          [:email :varchar]
          [:address :varchar]))

(defn insert-or-retrieve-submitter
  ([{:keys [submitter] :as m}] (insert-or-retrieve-submitter m dbspec))
  ([{:keys [submitter]} dbspec]
   (if-not submitter (throw (Exception. "Submitter cannot be null")))
   (let [qu ["select id from submitters where first=? and last=? and email=?"
             (:first submitter) (:last submitter) (:email submitter)]]
     (or (-> (bdb/query-sequences dbspec qu :submitter) first :id)
         (-> (bdb/insert-sequences! dbspec :submitters :submitter [submitter])
             first
             :id)))))

;; assemblies

(defmethod bdb/table-spec :dataset
  [q]
  (vector [:id :serial "PRIMARY KEY"]
          [:name :varchar "NOT NULL"]
          [:type :text "NOT NULL"]
          [:abstract :text "NOT NULL"]
          [:submitter :varchar "NOT NULL"]
          [:time :timestamp "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]
          [:species :varchar "NOT NULL"]))

(defn insert-dataset
  ([{:keys [dataset] :as m} submitter] (insert-dataset m submitter dbspec))
  ([{:keys [dataset]} submitter dbspec]
   (db/with-db-transaction [con dbspec]
     (let [did (-> (bdb/insert-sequences! con :datasets :dataset
                                          [(-> (dissoc dataset :pmid)
                                               (assoc :submitter submitter)
                                               (update-in [:type] name))])
                   first :id)]
       (if-not did
         (throw (Exception. "Something wrong in dataset insert."))
         (bdb/insert-sequences! con :pmids :pmid
                                (map #(hash-map :did did
                                                :pmid (if (integer? %)
                                                        %
                                                        (Integer/parseInt %)))
                                     (:pmid dataset))))
       did))))

;; pmid

(defmethod bdb/table-spec :pmid
  [q]
  (vector [:did :integer "NOT NULL"]
          [:pmid :integer "NOT NULL"]))

;; peptides

(defmethod bdb/table-spec :peptide
  [q]
  (vector [:accession :varchar "PRIMARY KEY"]
          [:dataset :integer "NOT NULL"]
          [:description :text]
          [:sequence :text "NOT NULL"]))

(defn import-peptides
  ([files did] (import-peptides files did dbspec))
  ([files did dbspec]
   (default-insert files :peptides :peptide did dbspec)))

;; mrna

(defmethod bdb/table-spec :mrna
  [q]
  (vector [:accession :varchar "PRIMARY KEY"]
          [:dataset :integer "NOT NULL"]
          [:description :text]
          [:sequence :text "NOT NULL"]))

(defn import-mrnas
  ([files did] (import-mrnas files did dbspec))
  ([files did dbspec]
   (default-insert files :mrnas :mrna did dbspec)))

;; cds

(defmethod bdb/table-spec :cds
  [q]
  (vector [:accession :varchar "PRIMARY KEY"]
          [:dataset :integer "NOT NULL"]
          [:description :text]
          [:sequence :text "NOT NULL"]))

(defn import-cdss
  ([files did] (import-cdss files did dbspec))
  ([files did dbspec]
   (default-insert files :cdss :cds did dbspec)))

;; contigs

(defmethod bdb/table-spec :contig
  [q]
  (vector [:id :serial "PRIMARY KEY"]
          [:accession :varchar "NOT NULL"]
          [:dataset :integer "NOT NULL"]
          [:description :text]
          [:sequence :text "NOT NULL"]))

(defmethod bdb/restore-sequence :contig
  [q]
  (-> (assoc q :original-accession (:accession q))
      (assoc :accession (:id q))
      (dissoc :type)))

(defn insert-contigs
  ([{:keys [files] :as m} dataset] (insert-contigs m dataset dbspec))
  ([{:keys [files]} dataset dbspec]
   (default-insert files :contigs :contig dataset dbspec)))

;; blasts

(defmethod bdb/table-spec :blast
  [q]
  (vector [:accession :text "PRIMARY KEY"]
          [:database :text "NOT NULL"]
          [:hit :text "NOT NULL"]))

(defmethod bdb/prep-sequences :blast
  [q]
  (->> (:coll q)
       (map #(assoc % :hit (pr-str (:hit %))))))

;; create

(defn create-database
  []
  (bdb/create-table! dbspec :submitters :submitter)
  (bdb/create-table! dbspec :datasets :dataset)
  (bdb/create-table! dbspec :pmids :pmid)
  (bdb/create-table! dbspec :peptides :peptide)
  (bdb/create-table! dbspec :mrnas :mrna)
  (bdb/create-table! dbspec :cdss :cds)
  (bdb/create-table! dbspec :contigs :contig)
  (bdb/create-table! dbspec :blasts :blast))

(defn delete-database
  []
  (map #(try
          (db/db-do-commands dbspec
                             (db/drop-table-ddl %))
          (catch Exception _))
       [:pmids :datasets :submitters :peptides :contigs :blasts
        :mrnas :cdss]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; import
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- transdecode
  [did]
  (let [tf (ut/working-file "tdec")
        func
        (fn [x]
          (fa/fasta->file x tf)
          (and (let [res @(sh/sh ["TransDecoder.LongOrfs" "-t" (str tf)]
                                 {:dir ut/working-directory})]
                 (if-not (= 0 (:exit res))
                   (throw (Exception. (str "Exception: " (:err res))))
                   true))
               (let [res @(sh/sh ["TransDecoder.Predict" "-t" (str tf)]
                                 {:dir ut/working-directory})]
                 (if-not (= 0 (:exit res))
                   (throw (Exception. (str "Exception: " (:err res))))
                   true)))
          x)]
    (try
      (bdb/query-sequences dbspec ["select * from contigs where dataset=?" did] :contig
                           :apply-func func)
      (db/with-db-transaction [con dbspec]
        (import-peptides [(str tf ".transdecoder.pep")] did con)
        (import-mrnas [(str tf ".transdecoder.mRNA")] did con)
        (import-cdss [(str tf ".transdecoder.cds")] did con))
      (finally
        (fs/delete tf)
        (doseq [f [".transdecoder.pep"
                   ".transdecoder.mRNA"
                   ".transdecoder.cds"
                   ".transdecoder.bed"
                   ".transdecoder.gff3"]]
          (fs/delete (str tf f)))
        (fs/delete-dir (str tf ".transdecoder_dir"))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; blast
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def blast-dbs [{:file "/home/jason/Dropbox/jellydb/resources/blast/test"
                 :name "test"
                 :id-parse #(if (re-find #"^gnl\|" %)
                              (second (string/split % #"\|" 2))
                              %)}])

(defn blast-dataset
  [did]
  (let [func #(doall
               (map
                (fn [x]
                  (let [tf (ut/working-file (str (:name x)))]
                    {:files (bl/blast % "blastp" (:file x) (ut/working-file (:name x))
                                      :params {"-max_target_seqs" "1"})
                     :db x}))
                blast-dbs))
        blasts (bdb/query-sequences dbspec
                                    ["select * from peptides where dataset=?" did]
                                    :peptide
                                    :apply-func func)]
    (doseq [{:keys [files db]} blasts]
      (doall (map (fn [file]
                    (println file)
                    (with-open [r (io/reader file)]
                      (println (->> (bl/iteration-seq r)
                                    (map #(bl/hit-seq % :evalue 10e-5))
                                    (map first)
                                    (remove nil?)
                                    (map #(update-in % [:Hit_id] (:id-parse db)))
                                    (map #(hash-map :hit % :database (:name db)
                                                    :accession (:Hit_id %)))
                                    first))))
                  files)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; import
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti import-dataset (fn [m] (get-in m [:dataset :type])))

(defmethod import-dataset :assembly
  [m]
  (let [sid (atom nil)
        did (atom nil)]
    (db/with-db-transaction [con dbspec]
      (reset! sid (insert-or-retrieve-submitter m con))
      (reset! did (insert-dataset m @sid con))
      (insert-contigs m @did con))
    (transdecode @did)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; utilities
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defn temp-directory
;;   [did prefix]
;;   (if-not (fs/exists? working-directory)
;;     (throw (Exception. (str "Working directory does not exist (" working-directory ")."))))
;;   (let [p (str working-directory prefix "-" did "-" (ut/new-uuid))]
;;     (if (and (not (fs/directory? p))
;;              (fs/mkdir p))
;;       p
;;       (temp-directory did prefix))))

;; (defn- submitter-query
;;   [hm]
;;   (str "select id from submitters where "
;;        (->> (map (fn [[k v]] (str (name k) "=" "'" v "'"))
;;                  hm)
;;             (interpose " and ")
;;             (apply str))))

;; (defn- submitter-exists?
;;   [hm]
;;   (:id (db/query spec (submitter-query hm)
;;                  :result-set-fn first)))

;; (defn- insert-dataset
;;   [sub ds s]
;;   (let [sid (or (submitter-exists? sub)
;;                 (-> (db/insert! s :submitters sub)
;;                     first
;;                     :id))
;;         did (-> (db/insert! s :assemblies
;;                             (-> (dissoc ds :pmid)
;;                                 (assoc :submitter sid)))
;;                 first
;;                 :id)]
;;     (apply db/insert! s :pmids (map #(hash-map :did did :pmid %)
;;                                     (:pmid ds)))
;;     did))

;; (defmulti insert-coll (fn [table did coll]
;;                         (if (or (= table :ips)
;;                                 (= table :blasts))
;;                           :hash)))

;; (defmethod insert-coll :hash
;;   [table _ coll]
;;   (dorun
;;    (apply db/insert! spec table
;;           (map #(hash-map :acc (bs/accession %)
;;                           :hash (Base64/encodeBase64String (nip/freeze %)))
;;                coll))))

;; (defmethod insert-coll :default
;;   [table did coll]
;;   (dorun
;;    (apply db/insert! spec table (map #(assoc %
;;                                              :alphabet
;;                                              (name (:alphabet %))
;;                                              :dataset
;;                                              did)
;;                                      coll))))

;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ;; importing
;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defn- expand-init
;;   [did f]
;;   (letfn [(fix-id [i]
;;             (-> (replace i #"\." "")
;;                 (replace #"\|" "")))
;;           (import-seqs [file field]
;;             (with-open [r (-> (bs/init-fasta-file file :iupacNucleicAcids)
;;                               bs/bs-reader)]
;;               (doall (->> (bs/biosequence-seq r)
;;                           (map #(ut/update-db :peps {field (:sequence %)}
;;                                               ["acc=?" (fix-id (bs/accession %))]))))))
;;           (save-file [f did table]
;;             (with-open [r (bs/bs-reader f)]
;;               (insert-coll table did
;;                            (map #(assoc % :acc (fix-id (bs/accession %)))
;;                                 (bs/biosequence-seq r)))))]
;;     (save-file (bs/init-fasta-file (str f ".transdecoder.pep") :iupacAminoAcids) did :peps)
;;     (import-seqs (str f ".transdecoder.mRNA") :mrna)
;;     (import-seqs (str f ".transdecoder.cds") :cds)))

;; (defn- extract-cds
;;   [did]
;;   (let [d (temp-directory did "decode")
;;         f (ut/all-biosequence {:table :contigs
;;                                :func #(bs/biosequence->file % (temp-file d "contigs")
;;                                                             :append false)})]
;;     (try
;;       (->> (td/predict f d)
;;            (expand-init did))
;;       (catch Exception e
;;         (fs/delete-dir d)
;;         (throw e))
;;       (finally
;;         (fs/delete-dir d)))))

;; (defn- blast-peps
;;   [did]
;;   (let [d (temp-directory did "blast")
;;         b (-> (ut/all-biosequence {:table :peps
;;                                    :func #(bs/biosequence->file % (temp-file d "peps")
;;                                                                 :append false)})
;;               (bl/blast-sequences :sp))]
;;     (try
;;       (with-open [r (bs/bs-reader b)]
;;         (insert-coll :blasts did (bs/biosequence-seq r)))
;;       (catch Exception e
;;         (fs/delete-dir d)
;;         (throw e))
;;       (finally
;;         (fs/delete-dir d)))))

;; (defn- update-descriptions
;;   [did]
;;   (letfn [(update-pep [bl]
;;             (if-let [h (-> (blast/hit-seq bl) first)]
;;               (if (and (-> (blast/hit-bit-scores h) first)
;;                        (< 50.0 (-> (blast/hit-bit-scores h) first)))
;;                 (ut/update-db :peps
;;                               {:description
;;                                (str "Similar to "
;;                                     (-> (blast/hit-def h) (split #"OS=") first trim))}
;;                               ["acc = ?" (bs/accession bl)]))))]
;;     (ut/query-db (str "select blasts.acc, blasts.time,blasts.hash from blasts,peps where blasts.acc=peps.acc and peps.dataset=" did)
;;                  :row-fn ut/row->biosequence
;;                  :result-set-fn #(doall (map update-pep %)))))

;; (defn- ips-peps
;;   [did]
;;   (let [d (temp-directory did "ips")
;;         ip (-> (ut/all-biosequence {:table :peps
;;                                     :func (fn [x]
;;                                             (bs/biosequence->file
;;                                              (map #(-> (assoc % :sequence
;;                                                               (replace (:sequence %)
;;                                                                        #"\*" "")))
;;                                                   x)
;;                                              (temp-file d "ips")
;;                                              :append false))})
;;                ip/ips-sequences)]
;;     (try
;;       (with-open [r (bs/bs-reader ip)]
;;         (insert-coll :ips did (bs/biosequence-seq r)))
;;       (catch Exception e
;;         (fs/delete-dir d)
;;         (throw e))
;;       (finally
;;         (fs/delete-dir d)))))

;; (defn import-assembled-fasta
;;   [file & {:keys [submitter dataset]
;;            :or [submitter {first "" last "" email "" address ""}
;;                 dataset {name "" abstract "" pmid () species ""}]}]
;;   "Imports an assembly."
;;   (db/with-db-transaction [s spec]
;;     (let [did (insert-dataset submitter dataset s)]
;;       (with-open [r (-> (bs/init-fasta-file file :iupacNucleicAcids)
;;                         bs/bs-reader)]
;;         (->> (bs/biosequence-seq r)
;;              (insert-coll :contigs did)))
;;       (extract-cds did)
;;       (blast-peps did)
;;       (update-descriptions did)
;;       (ips-peps did))))

;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ;; tables
;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def test-submit
  {:files ["/home/jason/Dropbox/jellydb/resources/test-data/test.fasta"]
   :submitter {:first "Jason"
               :last "Mulvenna"
               :email "jason.mulvenna@gmail.com"
               :address "QIMR Berghofer"}
   :dataset {:name "test"
             :abstract "this is an abstract"
             :pmid ["123456" "78910"]
             :species "S. pecies"
             :type :assembly}})


;; (import-assembled-fasta "/home/jason/Dropbox/jellydb/resources/test-data/chironex.fasta"
;;                               :submitter {:first "Jason"
;;                                           :last "Mulvenna"
;;                                           :email "jason.mulvenna@gmail.com"
;;                                           :address "QIMR Berghofer"}
;;                               :dataset {:name "Tentacle transcriptome and proteome of the box jellyfish"
;;                                         :abstract "The box jellyfish, Chironex fleckeri, is the largest and most dangerous cubozoan jellyfish to humans. It produces potent and rapid-acting venom and its sting causes severe localized and systemic effects that are potentially life-threatening. In this study, a combined transcriptomic and proteomic approach was used to identify C. fleckeri proteins that elicit toxic effects in envenoming. More than 40,000,000 Illumina reads were used to de novo assemble ∼ 34,000 contiguous cDNA sequences and ∼ 20,000 proteins were predicted based on homology searches, protein motifs, gene ontology and biological pathway mapping. More than 170 potential toxin proteins were identified from the transcriptome on the basis of homology to known toxins in publicly available sequence databases. MS/MS analysis of C. fleckeri venom identified over 250 proteins, including a subset of the toxins predicted from analysis of the transcriptome. Potential toxins identified using MS/MS included metalloproteinases, an alpha-macroglobulin domain containing protein, two CRISP proteins and a turripeptide-like protease inhibitor. Nine novel examples of a taxonomically restricted family of potent cnidarian pore-forming toxins were also identified. Members of this toxin family are potently haemolytic and cause pain, inflammation, dermonecrosis, cardiovascular collapse and death in experimental animals, suggesting that these toxins are responsible for many of the symptoms of C. fleckeri envenomation. This study provides the first overview of a box jellyfish transcriptome which, coupled with venom proteomics data, enhances our current understanding of box jellyfish venom composition and the molecular structure and function of cnidarian toxins. The generated data represent a useful resource to guide future comparative studies, novel protein/peptide discovery and the development of more effective treatments for jellyfish stings in humans."
;;                                         :pmid '(26014501)
;;                                         :species "Chironex fleckeri"})
