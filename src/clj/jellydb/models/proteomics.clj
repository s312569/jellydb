(ns jellydb.models.proteomics
  (:require [clojure.java.io :as io]
            [jellydb.models.db :as db]
            [jellydb.models.utilities :as ut]
            [clj-fasta.core :as fa]
            [me.raynes.fs :as fs]
            [clj-tandem.core :as xt]
            [clj-commons-exec :as exec]
            [clojure.string :as st]
            [clj-pepxml.core :as pep]
            [biodb.core :as bdb]
            [clj-mzml.core :as mzml]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; testing
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def test-pds {:dir "/home/jason/Dropbox/raw-proteomics-data/dbs-for-testing/test-data/chironex-20130410"
               :name "Test proteomics dataset"
               :abstract "This is an abstract"
               :tissue "Tentacle"
               :enzyme "[RK]|{P}"
               :species "Chironex fleckeri"
               :varmods nil
               :conmods "57.021464@C"
               :targets [1]
               :pmid ["12345" "45678"]})

(def test-submitter {:first "Jason"
                     :last "Mulvenna"
                     :email "jason.mulvenna@gmail.com"
                     :address "QIMR Berghofer"})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; utilities
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- new-ext
  [file oe ne]
  (str (fs/file (fs/parent file) (str (fs/base-name file oe) ne))))

(defn run-external
  ([comm] (run-external comm nil))
  ([comm log-file]
   (let [o @(exec/sh comm)]
     (if-not (= 0 (:exit o))
       (do (if log-file (spit log-file (:out o) :append true))
           (throw (Exception. (str "Error: Problem executing " (first comm)
                                   " - " "Error out: " (:out o)))))
       (do (if log-file (spit log-file (:out o) :append true))
           (:out o))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; pipeline
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- make-reversed
  [s]
  (vector s {:accession (str "rev_" (:accession s))
             :description (str "rev_" (:description s))
             :sequence (->> (apply str (reverse (:sequence s))))}))

(defn- generate-db
  [{:keys [target] :as m}]
  (try (println (str "Generating DB from dataset " target " ..."))
       (assoc m :db (str
                     (db/get-sequences
                      {:type :file-retrieval
                       :search-type :dataset-retrieval
                       :table :peptides
                       :did target
                       :func
                       #(fa/fasta->file (mapcat make-reversed %)
                                        (ut/working-file "proteomics")
                                        :append false)})))
       (finally (println "Database generation done!"))))

(defn- get-sfiles
  [{:keys [dir] :as m}]
  (try (println "Getting spectra files ...")
       (assoc m :sfiles (->> (fs/glob (str dir "/*.mzML")) (map str)))
       (finally (println "Spectra files done!"))))

(defn- index-mzmls
  [{:keys [sfiles] :as m}]
  (try (println "Indexing mzML files ...")
       (assoc m :sfiles (doall (->> (pmap #(vector % (mzml/index-mzml-file %))
                                          sfiles)
                                    (into {}))))
       (finally (println "Indexing mzML files done!"))))

(defn- tandem-search
  [{:keys [sfiles db] :as m}]
  (try (println "Running X! Tandem searches ...")
       (assoc m :tfiles
              (doall
               (->> (map #(xt/xtandem db % {} :outfile (new-ext % "mzML" "xtML"))
                         (keys sfiles))
                    (map str))))
       (finally (println "X! Tandem searches done!"))))

(defn- tandem2pepxml
  [{:keys [tfiles log-file] :as m}]
  (try (println "Converting X! Tandem files to pepxml ...")
       (assoc m :pfiles
              (doall
               (map #(let [nf (new-ext % "xtML" "pepxml")]
                       (run-external ["Tandem2XML" % nf] log-file)
                       nf)
                    tfiles)))
       (finally (println "Pepxml conversion done!"))))

(defn- xinteract
  [{:keys [dir log-file] :as m}]
  (try (println "Running xinteract ...")
       (let [out (str (fs/file dir "interact.tandem.pep.xml"))]
         (assoc m :xinteract-file
                (do (run-external
                     (concat ["xinteract" "-OARPd" "-drev_" (str "-N"out)]
                             (doall (map str (fs/glob (str dir "/" "*.pepxml")))))
                     log-file)
                    out)))
       (finally (println "xinteract done!"))))

(defn- interprophet
  [{:keys [xinteract-file dir log-file] :as m}]
  (try (println "Running interprophet ...")
       (let [out (str (fs/file dir "iprophet.pep.xml"))]
         (assoc m :interprophet-file
                (do (run-external ["InterProphetParser" "DECOY=rev_" "THREADS=4"
                                   xinteract-file out]
                                  log-file)
                    out)))
       (finally (println "Interprophet done!"))))

(defn- protein-prophet
  [{:keys [interprophet-file dir log-file] :as m}]
  (try (println "Running proteinProphet ...")
       (let [out (str (fs/file dir "iprophet.prot.xml"))]
         (assoc m :prot-proph-file
                (do (run-external ["ProteinProphet" interprophet-file
                                   out "IPROPHET"]
                                  log-file)
                    out)))
       (finally (println "proteinProphet done!"))))

(defn- mayu
  [{:keys [dir log-file db interprophet-file] :as m}]
  (try (println "Running Mayu ...")
       (let [out (str (fs/file dir "mayu"))]
         (-> (assoc m :mayu-file
                    (do (run-external ["Mayu.pl" "-A" interprophet-file
                                       "-C" db "-E" "rev_" "-G" "0.01"
                                       "-H" "51" "-I" "2"
                                       "-P" "pepFDR=0.01:t" "-M" out "-v"]
                                      log-file)
                        (str out "_psm_pepFDR0.01_t_1.07.csv")))
             (assoc :mayu-score
                    (with-open [r (io/reader
                                   (str out "_psm_pepFDR0.01_t_1.07.csv"))]
                      (->> (line-seq r)
                           rest
                           (map #(st/split % #","))
                           (map #(nth % 4))
                           (map #(Float/parseFloat %))
                           (apply min))))))
       (finally (println "Mayu done!"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; pepxml and mzml fusion
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- process-msms-run
  [{:keys [sfiles dir mayu-score dataset] :as m} coll]
  (if (not (float? mayu-score))
    (throw (Exception. "Search hash does not contain a valid mayu score.")))
  (let [[info & spects] coll
        imz (-> (fs/file dir (fs/base-name (pep/spectrum-path info)))
                str
                sfiles)]
    (->> (filter #(not (seq (re-seq #"^rev_"
                                    (-> (pep/hit-protein-accession %) first))))
                 spects)
         (filter #(>= (-> (pep/interprophet-prob %) first) mayu-score))
         
         (map #(merge (-> (pep/peptide-hit-info %) first)
                      {:interprophet-prob (-> (pep/interprophet-prob %) first)
                       :hyperscore (-> (pep/hyperscore %) first)
                       :dataset dataset}
                      (let [s (->> (-> (pep/scan-start-end %) first (- 1))
                                   (mzml/get-spectra-by-index imz)
                                   first)]
                        {:mzarray (-> (mzml/mz-array s) first :array)
                         :intensity (-> (mzml/intensity-array s) first :array)}))))))

(defn- save-peptides
  [{:keys [interprophet-file] :as m}]
  (try (println "Storing peptides in db ...")
       (with-open [r (io/reader interprophet-file)]
         (->> (pep/msms-run-seq r)
              (mapcat #(process-msms-run m %))
              (group-by :protein)
              (mapcat (fn [[k v]]
                        (->> (group-by :peptide v)
                             (map second)
                             (map #(sort-by :hyperscore > %))
                             (map first))))
              (db/insert-sequences :msmspeptides)))
       (finally (println "Peptide serialisation done!"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; dataset and pmids
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod db/insert-dataset :msms
  [{:keys [dataset dbspec] :as m}]
  (try (println "Inserting dataset ...")
       (let [did (-> (bdb/insert-sequences! dbspec :pdatasets :pdataset
                                            [dataset] true)
                     first
                     :id)]
         (if-not did
           (throw (Exception. "Something wrong in dataset insert.")))
         did)
       (finally (println "Dataset done!"))))

(defmethod db/insert-pmid :msms
  [{:keys [pmid dbspec] :as m}]
  (try (println "Inserting PMIDs ...")
       (if (seq pmid)
         (bdb/insert-sequences! dbspec :ppmids :ppmid pmid))
       (finally (println "PMIDs done!"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; main
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn process-directory
  [{:keys [targets] :as m} submitter]
  (let [sid (atom nil)
        did (atom nil)]
    (bdb/with-transaction [con db/dbspec]
      (println "Inserting submitter ...")
      (reset! sid (db/insert-or-retrieve-submitter submitter con))
      (println "Submitter done!")
      (reset! did (db/insert-dataset {:dataset (-> (dissoc m :targets)
                                                   (dissoc :dir)
                                                   (dissoc :pmid)
                                                   (assoc :submitter @sid))
                                      :dbspec con
                                      :type :msms}))
      (db/insert-pmid {:pmid (->> (map #(hash-map :pmid (Integer/parseInt %)
                                                  :did @did)
                                       (:pmid m)))
                       :dbspec db/dbspec
                       :type :msms})
      (println "Running pipeline ...")
      (let [rm (-> (get-sfiles m)
                   index-mzmls)]
        (map #(let [ml (-> (assoc rm :log-file (ut/working-file "search-log"))
                           (assoc :dataset @did)
                           (assoc :target %))]
                (-> (generate-db ml)
                    tandem-search
                    tandem2pepxml
                    xinteract
                    interprophet
                    protein-prophet
                    mayu
                    save-peptides))
             targets)))))
