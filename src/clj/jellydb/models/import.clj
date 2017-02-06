(ns jellydb.models.import
  (:require [jellydb.models.blast :refer [blast-dataset]]
            [jellydb.models.ips :as ip]
            [jellydb.models.db :refer :all]
            [jellydb.models.utilities :refer [working-directory working-file]]
            [jellydb.models.userblast :as bl]
            [biodb.core :as bdb]
            [clj-fasta.core :refer [fasta->file]]
            [clj-interproscan.core :as ips]
            [me.raynes.fs :refer [delete delete-dir]]
            [clj-commons-exec :refer [sh]]
            [clojure.string :as st]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; importing functions
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod insert-dataset :sequence
  [{:keys [dataset dbspec] :as m}]
  (let [did (-> (bdb/insert-sequences! dbspec :datasets :dataset [dataset] true)
                first
                :id)]
    (if-not did
      (throw (Exception. "Something wrong in dataset insert.")))
    did))

(defmethod insert-pmid :sequence
  [{:keys [pmid dbspec] :as m}]
  (if (seq pmid)
    (bdb/insert-sequences! dbspec :pmids :pmid pmid)))

(defn- insert-contigs
  ([{:keys [files] :as m} dataset] (insert-contigs m dataset dbspec))
  ([{:keys [files]} dataset dbspec]
   (fasta-insert files :contigs :contig dataset dbspec)))

(defn- import-peptides
  ([files did] (import-peptides files did dbspec))
  ([files did dbspec]
   (fasta-insert files :peptides :peptide did dbspec)))
 
(defn- import-mrnas
  ([files did] (import-mrnas files did dbspec))
  ([files did dbspec]
   (fasta-insert files :mrnas :mrna did dbspec)))

(defn- import-cdss
  ([files did] (import-cdss files did dbspec))
  ([files did dbspec]
   (fasta-insert files :cdss :cds did dbspec)))

(defn- transdecode
  [did con]
  (let [tf (working-file "tdec")
        func
        (fn [x]
          (fasta->file x tf)
          (and (let [res @(sh ["TransDecoder.LongOrfs" "-t" (str tf)]
                                 {:dir working-directory})]
                 (not (if-not (= 0 (:exit res))
                        (throw (Exception. (:err res))))))
               (let [res @(sh ["TransDecoder.Predict" "-t" (str tf)]
                                 {:dir working-directory})]
                 (not (if-not (= 0 (:exit res))
                        (throw (Exception. (str "Exception: " (:err res))))))))
          x)]
    (try
      (apply-to-dataset {:table :contigs :did did :func func})
      (import-peptides [(str tf ".transdecoder.pep")] did con)
      (import-mrnas [(str tf ".transdecoder.mRNA")] did con)
      (import-cdss [(str tf ".transdecoder.cds")] did con)
      (finally
        (delete tf)
        (doseq [f [".transdecoder.pep"
                   ".transdecoder.mRNA"
                   ".transdecoder.cds"
                   ".transdecoder.bed"
                   ".transdecoder.gff3"]]
          (delete (str tf f)))
        (delete-dir (str tf ".transdecoder_dir"))))))

(defn- internal-blast-db
  [did {:keys [species]}]
  (let [f (str "/home/jason/Dropbox/jellydb/resources/internal-blast/"
               (-> (st/lower-case species)
                   (st/replace #"\s" "-"))
               "-"
               did)
        fu #(fasta->file % f :append false)]
    (apply-to-dataset {:table :peptides :func fu :did did})
    (bl/create-blastdb-from-file f "prot")
    (bdb/insert-sequences! dbspec :blastfiles :blast-file
                           [{:did did :file f :type "prot"}])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; annotating
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- ips-designation
  [s]
  (let [l (last (st/split s #"\s+"))]
    (str s
         (cond (#{"domain" "Domain"} l)
               "-containing protein"
               (#{"protein" "Protein"} l)
               ""
               (#{"family" "Family"} l)
               " protein"
               :else
               "-containing protein"))))

(defmulti ips-description (fn [i] (get-in i [:signature :library :library])))

(defmethod ips-description :default
  [i]
  (ips-designation (get-in i [:signature :entry :desc])))

(defmethod ips-description "PROSITE_PROFILES"
  [i]
  (ips-designation (get-in i [:signature :desc])))

(defmethod ips-description "PFAM"
  [i]
  (ips-designation (get-in i [:signature :desc])))

(defmethod ips-description "SUPERFAMILY"
  [i]
  (ips-designation (get-in i [:signature :name])))

(defmulti ips-score (fn [i] (get-in i [:signature :library :library])))

(defmethod ips-score :default
  [i]
  (:score i))

(defmethod ips-score "PROSITE_PROFILES"
  [i]
  (-> (:locations i)
      first
      :score))

(defmethod ips-score "PFAM"
  [i]
  (:score i))

(defmethod ips-score "SUPERFAMILY"
  [i]
  (:evalue i))

(defn- ordered-ips-get
  [ic]
  (if-let [f (fn [t] (-> (filter #(= t (get-in % [:signature :library :library])) ic)
                         first))]
    (or (f "PFAM")
        (f "SUPERFAMILY")
        (f "PROSITE_PROFILES")
        (let [gid (f "GENE3D")]
          (if (get-in gid [:signature :entry :desc])
            gid)))))

(defn- swissprot?
  [acc]
  (if-let [b (get-custom ["select hit from blasts,datasets
                           where accession=?
                                 and blasts.database=datasets.id
                                 and datasets.name='SwissProt'"
                          acc]
                         :jdb-blast
                         :apply-func #(-> (first %) :hit))]
    {:description (second (re-find #"(.*)\sOS=" (:Hit_def b)))
     :accession acc
     :evidence "By similarity"
     :score (-> (:hsps b) first :Hsp_bit-score)
     :database "SwissProt"}))

(defn- ips?
  [acc]
  (if-let [i (-> (get-sequences {:type :jellydb.annotation-view/ips :accessions [acc]})
                 ordered-ips-get)]
    {:description (ips-description i)
     :accession acc
     :evidence "By similarity"
     :score (Float/parseFloat (ips-score i))
     :database (get-in i [:signature :library :library])}))

(defn- annotation
  [accession]
  (or (swissprot? accession) (ips? accession)
      {:description "Hypothetical protein"
       :accession accession
       :evidence nil
       :score nil
       :database nil}))

(defn- annotate
  [did]
  (bdb/with-transaction [con dbspec]
    (apply-to-dataset {:table :peptides :did did
                       :func #(->> (map (fn [x] (annotation (:accession x))) %)
                                   (remove nil?)
                                   (insert-sequences :annotations con))})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; import api
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti import-dataset (fn [m _] (get-in m [:dataset :type])))

(defmethod import-dataset :assembly
  [{:keys [dataset] :as m} submitter]
  (let [sid (atom nil)
        did (atom nil)]
    (bdb/with-transaction [con dbspec]
      (reset! sid (insert-or-retrieve-submitter submitter con))
      (reset! did (insert-dataset {:dataset (-> (dissoc dataset :pmid)
                                                (assoc :submitter @sid)
                                                (update-in [:type] name))
                                   :dbspec con
                                   :type :sequence}))
      (insert-pmid {:pmid (->> (map #(hash-map :pmid (Integer/parseInt %)
                                               :did @did)
                                    (:pmid dataset)))
                    :dbspec con
                    :type :sequence})
      (insert-contigs m @did con))
    (println "Successfully saved submitter, dataset pmids and contigs")
    (bdb/with-transaction [con dbspec]
      (transdecode @did con))
    (println "Successfully transdecoded and saved peptides.")
    (bdb/with-transaction [con dbspec]
      (internal-blast-db @did dataset))
    (println "Internal blast completed.")
    (bdb/with-transaction [con dbspec]
      (blast-dataset @did))
    (println "Dataset blast completed.")
    (bdb/with-transaction [con dbspec]
      (ip/ips-dataset @did))
    (println "Interproscan completed.")
    (annotate @did)
    (println "Successfully annotated sequences.")))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; testing
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def test-submit {:files ["/home/jason/Dropbox/raw-proteomics-data/jellydb-data/cubozoa/chironex_fleckeri/good.Trinity.fasta"]
                  :dataset {:name "test"
                            :abstract "this is an abstract"
                            :pmid ["123456" "78910"]
                            :species "Chironex fleckeri"
                            :type :assembly}})

(def test-submitter {:first "Jason"
                     :last "Mulvenna"
                     :email "jason.mulvenna@gmail.com"
                     :address "QIMR Berghofer"})


