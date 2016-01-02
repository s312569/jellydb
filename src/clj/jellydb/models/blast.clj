(ns jellydb.models.blast
  (:require [clojure.string :as st]
            [clj-biosequence.core :as bs]
            [clj-biosequence.blast :as bl]
            [clojure.java.io :as io]
            [clj-commons-exec :as sh]
            [jellydb.models.utilities :as ut]
            [fs.core :as fs]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; databases
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn blast-out-file
  []
  (let [f (-> (io/resource "blast/blasts")
              fs/absolute-path
              (str "/")
              (str "blast-" (ut/new-uuid)))]
    (if-not (fs/exists? f)
      f
      (blast-out-file))))

(defn- blast-path
  []
  (str (fs/absolute-path (io/resource "blast"))
       "/"))

(def dbs {:sp {:path (str (blast-path) "swissprot")
               :db #(bl/init-blast-db (str (blast-path) "swissprot")
                                      :iupacAminoAcids)
               :type :iupacAminoAcids
               :query nil}
          :jdb-prot {:path (str (blast-path) "jdb-prot")
                     :db #(bl/init-blast-db (str (blast-path) "jdb-prot")
                                            :iupacAminoAcids)
                     :type :iupacAminoAcids
                     :query "select * from peps"}
          :jdb-cds {:path (str (blast-path) "jdb-cds")
                    :db #(bl/init-blast-db (str (blast-path) "jdb-cds")
                                           :iupacAminoAcids)
                    :type :iupacNucleicAcids
                    :query "select * from cds"}
          :jdb-mrna {:path (str (blast-path) "jdb-mrna")
                     :db #(bl/init-blast-db (str (blast-path) "jdb-mrna")
                                            :iupacAminoAcids)
                     :type :iupacNucleicAcids
                     :query "select * from mrnas"}})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; generate blast dbs
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- run-makeblastdb
  [file stype]
  (let [res @(sh/sh ["makeblastdb" "-in" file "-dbtype" stype "-parse_seqids"]
                    {:dir (blast-path)})]
    (if (= 0 (:exit res))
      true
      (throw (Exception. (str "Exception: " (:err res)))))))

(defn- delete-indexes
  []
  (let [ds (doall
            (->> (mapcat #(fs/glob (str (blast-path) "*." %))
                         '("phr" "pin" "pog" "psd" "psi" "psq"))
                 (map fs/absolute-path)
                 (map fs/delete)))]
    (if-not (every? true? ds)
      (throw (Exception. (str "Something wrong in index deletion."))))))

(defn- generate-blast-files
  []
  (delete-indexes)
  (doseq [db (vals dbs)]
    (if (:query db)
      (ut/query->file (:query db) (:path db)))
    (run-makeblastdb (:path db) (if (= :iupacAminoAcids (:type db))
                                  "prot" "nucl"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; blast sequences
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn run-blast
  [bs program db params]
  (let [f (blast-out-file)]
    (future (bl/blast bs program ((:db ((keyword db) dbs))) f :params params))))

(defn blast-sequences
  [f db]
  (let [c (atom 0)]
    (with-open [r (-> (bs/init-fasta-file f :iupacAminoAcids)
                      bs/bs-reader)]
      (-> (pmap #(bl/blast %
                           "blastp"
                           (db dbs)
                           (str f "-blast.out-" (swap! c inc)))
                (partition-all 10000 (bs/biosequence-seq r)))
          (bs/index-combine-files (str f "-blast-combined"))))))
