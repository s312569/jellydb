(ns jellydb.models.proteomics
  (:require [clojure.java.io :as io]
            [jellydb.models.db :as db]
            [jellydb.models.utilities :as ut]
            [clj-fasta.core :as fa]
            [me.raynes.fs :as fs]
            [clj-tandem.core :as xt]
            [clj-commons-exec :as exec]
            [clojure.string :as st]))

(def test-pds {:dir "/home/jason/Dropbox/jellydb/resources/test-data/chironex-20130410"
               :alkylation :iaa
               :enzyme :trypsin
               :var-mods nil
               :con-mods nil
               :dataset 1})

(def enzyme-parameter
  {:trypsin "[RK]|{P}"})

(def alkylation-parameter
  {:iaa "57.021464@C"})

;; utilities

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

;; pipeline

(defn- make-reversed
  [s]
  (vector s {:accession (str "rev_" (:accession s))
             :description (str "rev_" (:description s))
             :sequence (->> (apply str (reverse (:sequence s))))}))

(defn- generate-db
  [{:keys [dataset] :as m}]
  (assoc m :db (str (db/get-sequences {:type :file-retrieval
                                       :search-type :dataset-retrieval
                                       :table :peptides
                                       :did dataset
                                       :func
                                       #(fa/fasta->file (mapcat make-reversed %)
                                                        (ut/working-file "proteomics")
                                                        :append false)}))))

(defn- get-sfiles
  [{:keys [dir] :as m}]
  (assoc m :sfiles (->> (fs/glob (str dir "/*.mzML")) (map str))))

(defn- tandem-search
  [{:keys [sfiles db] :as m}]
  (assoc m :tfiles
         (doall
          (->> (map #(xt/xtandem db % {} :outfile (new-ext % "mzML" "xtML")) sfiles)
               (map str)))))

(defn- tandem2pepxml
  [{:keys [tfiles log-file] :as m}]
  (assoc m :pfiles
         (doall
          (map #(let [nf (new-ext % "xtML" "pepxml")]
                  (run-external ["Tandem2XML" % nf] log-file)
                  nf)
               tfiles))))

(defn- xinteract
  [{:keys [dir log-file] :as m}]
  (let [out (str (fs/file dir "interact.tandem.pep.xml"))]
    (assoc m :xinteract-file
           (do (run-external
                (concat ["xinteract" "-OARPd" "-drev_" (str "-N"out)]
                        (doall (map str (fs/glob (str dir "/" "*.pepxml")))))
                log-file)
               out))))

(defn- interprophet
  [{:keys [xinteract-file dir log-file] :as m}]
  (let [out (str (fs/file dir "iprophet.pep.xml"))]
    (assoc m :interprophet-file
           (do (run-external ["InterProphetParser" "DECOY=rev_" "THREADS=4" xinteract-file out]
                             log-file)
               out))))

(defn- protein-prophet
  [{:keys [interprophet-file dir log-file] :as m}]
  (let [out (str (fs/file dir "iprophet.prot.xml"))]
    (assoc m :prot-proph-file
           (do (run-external ["ProteinProphet" interprophet-file out "IPROPHET"]
                             log-file)
               out))))

(defn- mayu
  [{:keys [dir log-file db interprophet-file] :as m}]
  (let [out (str (fs/file dir "mayu"))]
    (-> (assoc m :mayu-file
               (do (run-external ["Mayu.pl" "-A" interprophet-file
                                  "-C" db "-E" "rev_" "-G" "0.01"
                                  "-H" "51" "-I" "2"
                                  "-P" "protFDR=0.01:t" "-M" out "-v"]
                                 log-file)
                   (str out "_psm_protFDR0.01_t_1.07.csv")))
        (assoc :mayu-score
               (with-open [r (io/reader (str out "_psm_protFDR0.01_t_1.07.csv"))]
                 (->> (line-seq r)
                      rest
                      (map #(st/split % #","))
                      (map #(nth % 4))
                      (map #(Float/parseFloat %))
                      (apply min)))))))

(defn process-directory
  [{:keys [dir alkylation enzyme var-mods con-mods dataset] :as m}]
  (let [ml (assoc m :log-file (ut/working-file "search-log"))]
    (-> (generate-db ml)
        get-sfiles
        tandem-search
        tandem2pepxml
        xinteract
        interprophet
        protein-prophet
        mayu)))
