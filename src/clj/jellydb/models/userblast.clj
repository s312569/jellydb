(ns jellydb.models.userblast
  (:require [clj-blast.core :as bl]
            [jellydb.models.utilities :refer [working-file sequences->file]]
            [clojure.string :refer [split]]
            [biodb.core :as bdb]
            [clojure.java.io :refer [reader]]
            [clojure.edn :as edn]
            [fs.core :refer [delete]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; user blast searches
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def blast-dbs {:jdb-prot {:file "/home/jason/Dropbox/jellydb/resources/blast/jdb-prot"
                           :table :peptides
                           :type "prot"}
                :jdb-cds {:file "/home/jason/Dropbox/jellydb/resources/blast/jdb-cds"
                          :table :cdss
                          :type "nucl"}
                :jdb-mrna {:file "/home/jason/Dropbox/jellydb/resources/blast/jdb-mrna"
                           :table :mrnas
                           :type "nucl"}})

;; (defn- make-jdb-blast-dbs
;;   []
;;   (map (fn [{:keys [file table type]}]
;;          (get-sequences {:table table :func #(bl/create-blastdb % file type) :type ::db-gen}))
;;        blast-dbs))

(defmethod bdb/table-spec :user-blast
  [q]
  (vector [:accession :varchar "PRIMARY KEY"]
          [:hit :text "NOT NULL"]))

(defmethod bdb/prep-sequences :user-blast
  [q]
  (->> (:coll q)
       (map #(hash-map :accession (apply str (drop 4 (:Hit_id %)))
                       :hit (pr-str
                             (update-in % [:Hit_id] (fn [x] (apply str (drop 4 x)))))))))

(defmethod bdb/restore-sequence :user-blast
  [q]
  (edn/read-string (:hit q)))

(defn run-blast
  [{:keys [database text program evalue gapped return]}]
  (future
    (let [s [{:description "User submitted sequence" :sequence text :accession "1"}]
          f (working-file "blast")
          p (if (= program "blastn")
              {"-evalue" evalue "-max_target_seqs" return "-ungapped"
               (condp = gapped "Yes" false "No" true)}
              {"-evalue" evalue "-max_target_seqs" return})
          db (bdb/db-spec {:dbname (working-file "blast-db") :dbtype :sqlite})
          blasts (bl/blast s program (:file (blast-dbs database)) f :params p)]
      (try
        (bdb/create-table! db :sequences :user-blast)
        (doall (map #(with-open [r (reader %)]
                       (->> (bl/iteration-seq r)
                            first
                            bl/hit-seq
                            (bdb/insert-sequences! db :sequences :user-blast)))
                    blasts))
        {:file (str (:subname db))
         :count (bdb/query-sequences db ["select accession from sequences"] :user-blast
                                     :apply-func #(count %))
         :dbspec db}
        (finally (dorun (map delete blasts)))))))


(defn get-blast-hits
  [dbspec offset]
  (let [q ["select * from sequences order by accession OFFSET ? limit 20" offset]]
    (bdb/query-sequences dbspec q :user-blast)))

