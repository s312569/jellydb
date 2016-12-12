(ns jellydb.models.proteomics
  (:require [clojure.java.io :as io]
            [jellydb.models.db :as db]
            [jellydb.models.utilities :as ut]
            [clj-fasta.core :as fa]
            [me.raynes.fs :as fs]
            [clj-tandem.core :as xt]
            [clj-commons-exec :as exec]))

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

(defn process-params
  [m]
  )

;; utilities

(defn- new-ext
  [file oe ne]
  (str (fs/file (fs/parent file) (str (fs/base-name file oe) ne))))

(defn run-external
  [comm]
  (try
    (let [o @(exec/sh comm)]
      (if-not (= 0 (:exit o))
        (println
         (throw
          (Exception.
           (str "Error: Problem executing " (first comm) " - " "Error out: " (:out o)))))
        (:out o)))))

;; pipeline

(defn- make-reversed
  [s]
  (vector s {:accession (str (:accession s) "_rev")
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
  [{:keys [tfiles] :as m}]
  (assoc m :pfiles
         (doall
          (map #(let [nf (new-ext % "xtML" "pepxml")]
                  (run-external ["Tandem2XML" % nf])
                  nf)
               tfiles))))

(defn- xinteract
  [{:keys [pfiles] :as m}]
  (let [odir (fs/parent (first pfiles))
        out (str (fs/file odir "interact.tandem.pep.xml"))]
    (assoc m :xinteract (run-external
                         (concat ["xinteract" "-OARPd" "-drev_" (str "-N"out)]
                                 (doall (map str (fs/glob (str odir "/" "*.pepxml")))))))))

(defn process-directory
  [{:keys [dir alkylation enzyme var-mods con-mods dataset] :as m}]
  (-> (generate-db m)
      get-sfiles
      tandem-search
      tandem2pepxml
      xinteract))
