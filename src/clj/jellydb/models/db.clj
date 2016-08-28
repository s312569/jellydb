(ns jellydb.models.db
  (:require [clojure.java.io :refer [reader]]
            [biodb.core :as bdb]
            [clj-fasta.core :refer [fasta-seq]]
            [clojure.java.jdbc :as db]
            [clj-interproscan.core :as ips]
            [clojure.edn :as edn]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; spec
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def dbspec (bdb/db-spec {:dbname "jellydb"
                          :dbtype :postgres
                          :user "jason"
                          :password "7004jason"}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; creation
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn create-database
  []
  (bdb/create-table! dbspec :submitters :submitter)
  (bdb/create-table! dbspec :datasets :dataset)
  (bdb/create-table! dbspec :pmids :pmid)
  (bdb/create-table! dbspec :peptides :peptide)
  (bdb/create-table! dbspec :mrnas :mrna)
  (bdb/create-table! dbspec :cdss :cds)
  (bdb/create-table! dbspec :contigs :contig)
  (bdb/create-table! dbspec :blasts :jdb-blast)
  (bdb/create-table! dbspec :interproscan :ips))

(defn delete-database
  []
  (map #(try
          (db/db-do-commands dbspec
                             (db/drop-table-ddl %))
          (catch Exception _))
       [:pmids :datasets :submitters :peptides :contigs :blasts
        :mrnas :cdss :interproscan]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; db methods
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; fasta insert

(defn fasta-insert
  [files table type dataset dbspec]
  (doseq [f files]
    (with-open [r (reader f)]
      (bdb/insert-sequences! dbspec table type
                             (map #(assoc % :dataset dataset)
                                  (fasta-seq r))))))

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

;; assemblies

(defmethod bdb/table-spec :dataset
  [q]
  (vector [:id :serial "PRIMARY KEY"]
          [:name :varchar "NOT NULL"]
          [:type :text "NOT NULL"]
          [:abstract :text "NOT NULL"]
          [:submitter :integer "NOT NULL"]
          [:time :timestamp "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]
          [:species :varchar "NOT NULL"]))

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

;; mrna

(defmethod bdb/table-spec :mrna
  [q]
  (vector [:accession :varchar "PRIMARY KEY"]
          [:dataset :integer "NOT NULL"]
          [:description :text]
          [:sequence :text "NOT NULL"]))

;; cds

(defmethod bdb/table-spec :cds
  [q]
  (vector [:accession :varchar "PRIMARY KEY"]
          [:dataset :integer "NOT NULL"]
          [:description :text]
          [:sequence :text "NOT NULL"]))

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

;; blasts

(defmethod bdb/table-spec :jdb-blast
  [q]
  (vector [:id :serial "PRIMARY KEY"]
          [:accession :text "NOT NULL"]
          [:database :text "NOT NULL"]
          [:hit :text "NOT NULL"]))

(defmethod bdb/prep-sequences :jdb-blast
  [q]
  (->> (:coll q)
       (map #(assoc % :hit (pr-str (:hit %))))))

(defmethod bdb/restore-sequence :jdb-blast
  [q]
  (assoc (dissoc q :type) :hit (edn/read-string (:hit q))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; dataset level
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- table-type
  [table]
  ({:submitters :submitter
    :datasets :dataset
    :pmids :pmid
    :peptides :peptide
    :mrnas :mrna
    :cdss :cds
    :contigs :contig
    :blasts :jdb-blast
    :interproscan :ips}
   table))

(defn apply-to-dataset
  [{:keys [table func did] :as m}]
  (let [q [(str "select * from " (name table) " where dataset=?") did]]
    (bdb/query-sequences dbspec q (table-type table) :apply-func func)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; getting sequences
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti get-sequences (fn [m]
                          (if (:search-type m)
                            (vector (:type m) (:search-type m))
                            (:type m))))

(defmethod get-sequences [:by-key :text-proteins]
  [{:keys [data offset] :as m}]
  (let [q ["select * from peptides where accession ILIKE ? OR description ILIKE ? order by accession OFFSET ? limit 20" (str "%" data "%") (str "%" data "%") offset]]
    (bdb/query-sequences dbspec q :peptide)))

(defmethod get-sequences [:by-key :only-selected]
  [{:keys [data offset] :as m}]
  (let [ids (take 20 (drop offset data))]
    (bdb/get-sequences dbspec :peptides :peptide ids)))

(defmethod get-sequences [:jellydb.proteins/select-all :text-proteins]
  [{:keys [data] :as m}]
  (let [q ["select accession from peptides where accession ILIKE ? OR description ILIKE ?"
           (str "%" data "%") (str "%" data "%")]]
    (bdb/query-sequences dbspec q :peptide :apply-func #(vec (map :accession %)))))

(defmethod get-sequences [:jellydb.proteins/select-all :only-selected]
  [{:keys [data] :as m}]
  (:data m))

(defmethod get-sequences :jellydb.proteins/cds
  [{:keys [accessions] :as m}]
  (bdb/get-sequences dbspec :cdss :cds accessions))

(defmethod get-sequences :jellydb.proteins/mrna
  [{:keys [accessions]}]
  (bdb/get-sequences dbspec :mrnas :mrna accessions))

(defmethod get-sequences :jellydb.annotation-view/ips
  [{:keys [accessions]}]
  (vec (->> (bdb/get-sequences dbspec :interproscan :ips accessions)
            first
            ips/any-seq)))

(defmethod get-sequences :jellydb.dataset-view/dataset
  [{:keys [dataset] :as m}]
  (let [q ["select d.id,d.name,d.type,d.abstract,d.submitter,d.time,d.species,s.first,s.last,s.email,s.address from datasets d, submitters s where d.submitter = s.id and d.id=?" dataset]]
    (bdb/query-sequences dbspec q :jdb-blast)))

(defmethod get-sequences :jellydb.homology-view/blasts
  [{:keys [accessions] :as m}]
  (bdb/get-sequences dbspec :blasts :jdb-blast accessions
                     :apply-func #(group-by :database %)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; file retrieval and generation
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod get-sequences [:file-retrieval :selected-export]
  [{:keys [table selected func] :as m}]
  (bdb/get-sequences dbspec table (table-type table) selected :apply-func func))

(defmethod get-sequences [:file-retrieval :dataset-retrieval]
  [{:keys [table did func] :as m}]
  (apply-to-dataset {:table table :did did :func func}))

(defmethod get-sequences :jellydb.models.blast/db-gen
  [{:keys [table func]}]
  (let [q [(str "select * from " (name table))]]
    (bdb/query-sequences dbspec q (table-type table) :apply-func func)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; counting results
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti count-results :type)

(defmethod count-results :text
  [{:keys [data] :as m}]
  (let [q ["select count(*) from peptides where accession ILIKE ? OR description ILIKE ?"
           (str "%" data "%") (str "%" data "%")]]
    (bdb/query-sequences dbspec q :default :apply-func #(-> (first %) :count))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; inserting
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti insert-sequences (fn [table c] table))

(defmethod insert-sequences :blasts
  [table c]
  (bdb/insert-sequences! dbspec table :jdb-blast c))

(defmethod insert-sequences :interproscan
  [table c]
  (bdb/insert-sequences! dbspec table :ips c))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; blasting
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ;; construct peptides
;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defn get-assembly [id]
;;   (let [q (str "select * from assemblies where id=" id)]
;;     (ut/query-db q :result-set-fn first)))

;; (defn get-submitter [id]
;;   (let [q (str "select * from submitters where id=" id)]
;;     (ut/query-db q :result-set-fn first)))

;; (defn get-blasts [id]
;;   (let [q (str "select * from submitters where id=" id)]
;;     (ut/query-db q :result-set-fn first)))

;; (defn- hm-hash [h id]
;;   (let [s (ips/signature (first h))
;;         e (ips/entry s)]
;;     (if (bs/description s)
;;       {:signature (st/lower-case (bs/description s))
;;        :intervals (mapcat #(->> (bs/intervals %)
;;                                 (map (fn [x]
;;                                        (vector (bs/start x) (bs/end x)))))
;;                           h)
;;        :library (ips/library s)
;;        :accession (bs/accession s)
;;        :type (if e (ips/entry-type e))
;;        :name (if e (ips/entry-name e))
;;        :go-terms (->> (if e (ips/ips-go-terms e))
;;                       (map #(hash-map :go-accession (bs/accession %)
;;                                       :component (ips/category %)
;;                                       :name (ips/go-name %)))
;;                       seq)
;;        :pathways (->> (if e (ips/pathways e))
;;                       (remove nil?)
;;                       (map #(hash-map :path-accession (bs/accession %)
;;                                       :name (ips/pathway-name %)
;;                                       :db (ips/pathway-database %)))
;;                       seq)})))

;; (defn- fix-gos [ips-data]
;;   (let [f (fn [x k ak]
;;             (->> (mapcat #(let [i (:intervals %)]
;;                             (map (fn [x] (assoc x :intervals i))
;;                                  (k %)))
;;                          x)
;;                  (group-by #(ak %))
;;                  vals))
;;         g (f ips-data :go-terms :go-accession)
;;         p (f ips-data :pathways :path-accession)]
;;     {:ips-data (map #(dissoc % :go-terms :pathways) ips-data)
;;      :go-terms (map #(assoc (first %) :intervals (mapcat :intervals %))
;;                     g)
;;      :pathways (map #(assoc (first %) :intervals (mapcat :intervals %))
;;                     p)}))

;; (defn- ips-data [i id]
;;   (if-let [h (->> (map #(group-by (fn [x] (-> (ips/signature x) bs/accession))
;;                                   %)
;;                        (list (ips/hmmer-3-seq i)
;;                              (ips/panther-seq i)
;;                              (ips/tmhmm-seq i)
;;                              (ips/profile-seq i)
;;                              (ips/superfamily-seq i)))
;;                   (mapcat vals)
;;                   (remove #(not (seq %))))]
;;     (->> (map #(hm-hash % id) h)
;;          (remove nil?)
;;          fix-gos)))

;; (defn get-pep [id]
;;   (let [s (as-> (select-keys (ut/get-biosequence {:acc id :table :peps})
;;                              [:description :sequence :dataset :acc :mrna :cds])
;;               r
;;             (assoc r :sequence (:sequence r))
;;             (assoc r :ips (-> (ut/get-biosequence {:table :ips :acc id})
;;                               (ips-data id)))
;;             (merge r (get-assembly (:dataset r)))
;;             (assoc r :submitter (get-submitter (:submitter r)))
;;             (assoc r :homologies
;;                    (->> (ut/get-biosequence {:table :blasts :acc id})
;;                         blast/hit-seq
;;                         (map (fn [x]
;;                                {:hacc (blast/hit-accession x)
;;                                 :hdef (blast/hit-def x)
;;                                 :bits
;;                                 (clojure.pprint/cl-format
;;                                  nil
;;                                  "~,2e"
;;                                  (-> (blast/hit-bit-scores x)
;;                                      first))
;;                                 :eval
;;                                 (clojure.pprint/cl-format
;;                                  nil
;;                                  "~,2e"
;;                                  (-> (blast/hit-e-values x)
;;                                      first))})))))]
;;     s))

;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ;; file export
;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defmulti return-file (fn [m] (:type m)))

;; (defmethod return-file :default
;;   [{:keys [ids id type] :as m}]
;;   (do (swap! req-key-map dissoc id)
;;       (let [q (->> (map #(str "'" % "'") ids)
;;                    (interpose #",")
;;                    (apply str))
;;             qu (str "acc in (" q ")")]
;;         (if q
;;           (ut/biosequence-query {:table (keyword type)
;;                                  :where qu
;;                                  :func #(->> (map bs/fasta-string %)
;;                                              (interpose \newline)
;;                                              (apply str))})))))

;; (defmethod return-file "dataset-download"
;;   [{:keys [did table id]}]
;;   (let [q (str "dataset=" did)]
;;     (do (swap! req-key-map dissoc id)
;;         (ut/biosequence-query {:table (keyword table)
;;                                :where q
;;                                :func #(->> (map bs/fasta-string %)
;;                                            (interpose \newline)
;;                                            (apply str))}))))

;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ;; blast search
;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defn- fasta-string?
;;   [s]
;;   (= \> (first s)))

;; (defn- string->fasta-bioseq
;;   [s alphabet]
;;   (with-open [r (-> (bs/init-fasta-string s alphabet))]
;;     (-> (bs/biosequence-seq r) first)))

;; (defn- submit-blast
;;   [{:keys [program text database matrix evalue gapped return]}]
;;   (let [alphabet (if (= "blastp" program)
;;                    :iupacAminoAcids
;;                    :iupacNucleicAcids)
;;         matrix (if (#{"blastp" "blastx"} program)
;;                  {"-matrix" matrix} {})
;;         gapped (if (= "No" gapped)
;;                  {"-ungapped" "true"
;;                   "-comp_based_stats" "F"}
;;                  {})
;;         bs (-> (if (fasta-string? text)
;;                  (string->fasta-bioseq text)
;;                  (bs/init-fasta-sequence "User_submitted_sequence"
;;                                          "Submitted sequence"
;;                                          alphabet text))
;;                list)]
;;     {:result (bl/run-blast bs program database (merge {"-evalue" evalue
;;                                                        "-max_target_seqs" return}
;;                                                       matrix
;;                                                       gapped))
;;      :query (first bs)
;;      :database database
;;      :program program
;;      :type "blast"}))

;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ;; search info and results
;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defmulti return-results (fn [m] (:type m)))

;; (defn- hsps
;;   [h]
;;   (map #(hash-map :bits (blast/get-hsp-value % :Hsp_bit-score)
;;                   :evalue (blast/get-hsp-value % :Hsp_evalue)
;;                   :identity (blast/get-hsp-value % :Hsp_identity)
;;                   :positive (blast/get-hsp-value % :Hsp_positive)
;;                   :number (blast/get-hsp-value % :Hsp_num)
;;                   :alignment (blast/hsp-alignment %))
;;        (blast/hsp-seq h)))

;; (defmethod return-results "blast"
;;   [m]
;;   {:status "success"
;;    :proteins (with-open [r (-> @(:result m)
;;                                bs/index-biosequence-file
;;                                bs/bs-reader)]
;;                (->> (bs/biosequence-seq r)
;;                     first
;;                     blast/hit-seq
;;                     (drop (:offset m))
;;                     (take 20)
;;                     (map #(let [p (get-pep (blast/hit-accession %))]
;;                             (assoc p
;;                                    :blast {:length
;;                                            (blast/get-hit-value % :Hit_len)
;;                                            :def (blast/hit-def %)
;;                                            :hsps (hsps %)})))))})



;; (defmethod return-results "ids-fetch"
;;   [{:keys [ids offset] :as m}]
;;   (println m)
;;   {:status "success"
;;    :proteins (let [q (->> (map #(str "'" % "'") ids)
;;                           (interpose #",")
;;                           (apply str))]
;;                (ut/query-db (str "select acc from peps where "
;;                                  " acc in (" q ") "
;;                                  " order by acc OFFSET "
;;                                  offset " limit 20")
;;                             :row-fn #(get-pep (:acc %))))})

;; ;; search count

;; (defmulti count-results (fn [m] (:type m)))

;; (defmethod count-results "blast"
;;   [m]
;;   (with-open [r (-> @(:result m)
;;                     bs/index-biosequence-file
;;                     bs/bs-reader)]
;;     (->> (bs/biosequence-seq r)
;;          first
;;          blast/hit-seq
;;          count)))

;; (defmethod count-results "text-search"
;;   [{:keys [query]}]
;;   (ut/query-db (str "select count(*) from peps where "
;;                     " acc ILIKE '%" query "%' OR "
;;                     " description ILIKE '%" query "%'")
;;                :result-set-fn #(:count (first %))))

;; ;; search info

;; (defmulti search-data (fn [m] (:type m)))

;; (defmethod search-data "blast"
;;   [m]
;;   (if (< 0 (:total m))
;;     {:status "success"
;;      :info (str "Showing " (:total m)
;;                 (if (< 1 (:total m))
;;                   " results " " result ")
;;                 " from " (:program m)
;;                 " search of '" (bs/accession (:query m))
;;                 "' against '" (:database m)
;;                 "' database:")}
;;     {:status "success"
;;      :info (str "No results found for " (:program m)
;;                 " search of '" (bs/accession (:query m))
;;                 "' against '" (:database m)
;;                 "' database.")}))

;; (defmethod search-data "text-search"
;;   [m]
;;   (if (< 0 (:total m))
;;     {:status "success"
;;      :info (str "Showing " (:total m)
;;                 (if (< 1 (:total m))
;;                   " results " " result ")
;;                 "for query '" (:query m)
;;                 "'.")}
;;     {:status "success"
;;      :info (str "No results for query '" (:query m) "',")}))

;; (defmethod search-data "ids-fetch"
;;   [m]
;;   {:status "success"
;;    :info (str "Showing " (:total m) " selected proteins.")})

;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ;; api
;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defmulti get-key (fn [m] (:type m)))

;; (defmethod get-key "blast"
;;   [m]
;;   (let [r (submit-blast m)]
;;     (loop [id (ut/new-uuid)]
;;       (if-not (get @req-key-map id)
;;         (do (swap! req-key-map assoc id r)
;;             {:status "success" :id id})
;;         (recur (ut/new-uuid))))))

;; (defmethod get-key "text-search"
;;   [m]
;;   (loop [id (ut/new-uuid)]
;;     (if-not (get @req-key-map id)
;;       (do (swap! req-key-map assoc id m)
;;           {:status "success" :id id :count (count-results m)})
;;       (recur (ut/new-uuid)))))

;; (defmethod get-key "ids-fetch"
;;   [m]
;;   (loop [id (ut/new-uuid)]
;;     (if-not (get @req-key-map id)
;;       (do (swap! req-key-map assoc id m)
;;           {:status "success" :id id :count (count (:ids m))})
;;       (recur (ut/new-uuid)))))

;; (defmethod get-key :default
;;   [m]
;;   (loop [id (ut/new-uuid)]
;;     (if-not (get req-key-map id)
;;       (do (swap! req-key-map assoc id m)
;;           {:status :success :id id})
;;       (recur m))))

;; (defmulti select-all (fn [m] (:type m)))

;; (defmethod select-all "blast"
;;   [{:keys [result]}]
;;   {:status "success"
;;    :info (with-open [r (-> @result
;;                            bs/index-biosequence-file
;;                            bs/bs-reader)]
;;            (->> (bs/biosequence-seq r)
;;                 first
;;                 blast/hit-seq
;;                 (map #(blast/hit-accession %))
;;                 vec))})

;; (defmethod select-all "text-search"
;;   [{:keys [query]}]
;;   {:status "success"
;;    :info (ut/query-db (str "select acc from peps where "
;;                            " acc ILIKE '%" query "%' OR "
;;                            " description ILIKE '%" query "%' ")
;;                       :row-fn :acc
;;                       :result-set-fn vec)})

;; (defmethod select-all "ids-fetch"
;;   [m]
;;   {:status "success"
;;    :info (:ids m)})

;; (defn check-blast
;;   [m]
;;   (let [f (get @req-key-map (:key m))]
;;     (if (future-done? (:result f))
;;       {:status "success" :state (count-results f)}
;;       {:status "success" :state "Not done"})))
