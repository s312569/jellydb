(ns jellydb.models.blast
  (:require [clj-blast.core :as bl]
            [jellydb.models.utilities :refer [working-file sequences->file]]
            [jellydb.models.db :refer :all]
            [clojure.string :refer [split]]
            [biodb.core :as bdb]
            [clojure.java.io :refer [reader]]
            [clojure.edn :as edn]
            [me.raynes.fs :as fs]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; importing
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- parse-id
  [id]
  (if (re-find #"^gnl\|" id)
    (second (split id #"\|" 2))
    id))

(defn blast-dataset
  [did]
  (let [func #(doall
               (map (fn [x]
                      {:files (bl/blast % "blastp" (:file x) (working-file "blast")
                                        :params {"-max_target_seqs" "1"})
                       :did (:did x)})
                    (internal-blast-dbs did)))
        blasts (apply-to-dataset {:table :peptides :func func :did did})]
    (doseq [{:keys [files did]} blasts]
      (try
        (dorun (map (fn [file]
                      (with-open [r (reader file)]
                        (->> (bl/iteration-seq r)
                             (map #(bl/hit-seq % :evalue 10e-5))
                             (map first)
                             (remove nil?)
                             (map #(update-in % [:Hit_id] parse-id))
                             (map #(hash-map :hit % :database did
                                             :hitid (:Hit_id %)
                                             :accession (:query-accession %)))
                             (insert-sequences :blasts))))
                    files))
        (finally
          (dorun (map fs/delete files)))))))

;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ;; databases
;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defn blast-out-file
;;   []
;;   (let [f (-> (io/resource "blast/blasts")
;;               fs/absolute-path
;;               (str "/")
;;               (str "blast-" (ut/new-uuid)))]
;;     (if-not (fs/exists? f)
;;       f
;;       (blast-out-file))))

;; (defn- blast-path
;;   []
;;   (str (fs/absolute-path (io/resource "blast")) "/"))

;; (defn- all-to-file
;;   [table file]
;;   (ut/all-biosequence {:table table :func #(bs/biosequence->file % file :append false)}))

;; (def dbs {:sp {:path (str (blast-path) "swissprot")
;;                :type :iupacAminoAcids}
;;           :jdb-prot {:path (str (blast-path) "jdb-prot")
;;                      :generate :peps
;;                      :type :iupacAminoAcids}
;;           :jdb-cds {:path (str (blast-path) "jdb-cds")
;;                     :generate :cds
;;                     :type :iupacNucleicAcids}
;;           :jdb-mrna {:path (str (blast-path) "jdb-mrna")
;;                      :generate :mrnas
;;                      :type :iupacNucleicAcids}})

;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ;; generate blast dbs
;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defn- run-makeblastdb
;;   [file stype]
;;   (let [res @(sh/sh ["makeblastdb" "-in" file "-dbtype" stype "-parse_seqids"]
;;                     {:dir (blast-path)})]
;;     (if (= 0 (:exit res))
;;       true
;;       (throw (Exception. (str "Exception: " (:err res)))))))

;; (defn- delete-indexes
;;   []
;;   (let [ds (doall
;;             (->> (mapcat #(fs/glob (str (blast-path) "*." %))
;;                          '("phr" "pin" "pog" "psd" "psi" "psq"))
;;                  (map fs/absolute-path)
;;                  (map fs/delete)))]
;;     (if-not (every? true? ds)
;;       (throw (Exception. (str "Something wrong in index deletion."))))))

;; (defn- generate-blast-files
;;   []
;;   (delete-indexes)
;;   (doseq [db (vals dbs)]
;;     (if (:generate db)
;;       (ut/all-biosequence {:table (:generate db)
;;                            :func #(bs/biosequence->file % (:path db) :append false)}))
;;     (run-makeblastdb (:path db) (if (= :iupacAminoAcids (:type db))
;;                                   "prot" "nucl"))))

;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ;; blast sequences
;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defn run-blast
;;   [bs program db params]
;;   (let [f (blast-out-file)
;;         database ((keyword db) dbs)]
;;     (future (bl/blast bs program (bl/init-blast-db (:path database) (:type database))
;;                       f :params params))))

;; (defn blast-sequences
;;   [f db]
;;   (let [c (atom 0)
;;         database (db dbs)]
;;     (with-open [r (-> (bs/init-fasta-file f :iupacAminoAcids)
;;                       bs/bs-reader)]
;;       (-> (pmap #(bl/blast %
;;                            "blastp"
;;                            (bl/init-blast-db (:path database) (:type database))
;;                            (str f "-blast.out-" (swap! c inc)))
;;                 (partition-all 10000 (bs/biosequence-seq r)))
;;           (bs/index-combine-files (str f "-blast-combined"))))))
