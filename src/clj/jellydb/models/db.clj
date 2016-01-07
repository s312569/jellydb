(ns jellydb.models.db
  (:require [jellydb.models.utilities :as ut]
            [jellydb.models.blast :as bl]
            [clojure.string :as st]
            [clj-biosequence.core :as bs]
            [clj-biosequence.interproscan :as ips]
            [clj-biosequence.blast :as blast]
            [clojure.data.json :as json])
  (:import [org.postgresql.util PGobject]))

(def req-key-map (atom {}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; construct peptides
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-assembly [id]
  (let [q (str "select * from assemblies where id=" id)]
    (ut/query-db q :result-set-fn first)))

(defn get-submitter [id]
  (let [q (str "select * from submitters where id=" id)]
    (ut/query-db q :result-set-fn first)))

(defn get-blasts [id]
  (let [q (str "select * from submitters where id=" id)]
    (ut/query-db q :result-set-fn first)))

(defn- hm-hash [h id]
  (let [s (ips/signature (first h))
        e (ips/entry s)]
    (if (bs/description s)
      {:signature (st/lower-case (bs/description s))
       :intervals (mapcat #(->> (bs/intervals %)
                                (map (fn [x]
                                       (vector (bs/start x) (bs/end x)))))
                          h)
       :library (ips/library s)
       :accession (bs/accession s)
       :type (if e (ips/entry-type e))
       :name (if e (ips/entry-name e))
       :go-terms (->> (if e (ips/ips-go-terms e))
                      (map #(hash-map :go-accession (bs/accession %)
                                      :component (ips/category %)
                                      :name (ips/go-name %)))
                      seq)
       :pathways (->> (if e (ips/pathways e))
                      (remove nil?)
                      (map #(hash-map :path-accession (bs/accession %)
                                      :name (ips/pathway-name %)
                                      :db (ips/pathway-database %)))
                      seq)})))

(defn- fix-gos [ips-data]
  (let [f (fn [x k ak]
            (->> (mapcat #(let [i (:intervals %)]
                            (map (fn [x] (assoc x :intervals i))
                                 (k %)))
                         x)
                 (group-by #(ak %))
                 vals))
        g (f ips-data :go-terms :go-accession)
        p (f ips-data :pathways :path-accession)]
    {:ips-data (map #(dissoc % :go-terms :pathways) ips-data)
     :go-terms (map #(assoc (first %) :intervals (mapcat :intervals %))
                    g)
     :pathways (map #(assoc (first %) :intervals (mapcat :intervals %))
                    p)}))

(defn- ips-data [i id]
  (if-let [h (->> (map #(group-by (fn [x] (-> (ips/signature x) bs/accession))
                                  %)
                       (list (ips/hmmer-3-seq i)
                             (ips/panther-seq i)
                             (ips/tmhmm-seq i)
                             (ips/profile-seq i)
                             (ips/superfamily-seq i)))
                  (mapcat vals)
                  (remove #(not (seq %))))]
    (->> (map #(hm-hash % id) h)
         (remove nil?)
         fix-gos)))

(defn get-pep [id]
  (let [s (as-> (select-keys (ut/get-biosequence {:acc id :table :peps})
                             [:description :sequence :dataset :acc :mrna :cds])
              r
            (assoc r :sequence (:sequence r))
            (assoc r :ips (-> (ut/get-biosequence {:table :ips :acc id})
                              (ips-data id)))
            (merge r (get-assembly (:dataset r)))
            (assoc r :submitter (get-submitter (:submitter r)))
            (assoc r :homologies
                   (->> (ut/get-biosequence {:table :blasts :acc id})
                        blast/hit-seq
                        (map (fn [x]
                               {:hacc (blast/hit-accession x)
                                :hdef (blast/hit-def x)
                                :bits
                                (clojure.pprint/cl-format
                                 nil
                                 "~,2e"
                                 (-> (blast/hit-bit-scores x)
                                     first))
                                :eval
                                (clojure.pprint/cl-format
                                 nil
                                 "~,2e"
                                 (-> (blast/hit-e-values x)
                                     first))})))))]
    s))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; file export
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti return-file (fn [m] (:type m)))

(defmethod return-file :default
  [{:keys [ids id type] :as m}]
  (do (swap! req-key-map dissoc id)
      (let [q (->> (map #(str "'" % "'") ids)
                   (interpose #",")
                   (apply str))
            qu (str "acc in (" q ")")]
        (if q
          (ut/biosequence-query {:table (keyword type)
                                 :where qu
                                 :func #(->> (map bs/fasta-string %)
                                             (interpose \newline)
                                             (apply str))})))))

(defmethod return-file "dataset-download"
  [{:keys [did table id]}]
  (let [q (str "dataset=" did)]
    (do (swap! req-key-map dissoc id)
        (ut/biosequence-query {:table (keyword table)
                               :where q
                               :func #(->> (map bs/fasta-string %)
                                           (interpose \newline)
                                           (apply str))}))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; blast search
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- fasta-string?
  [s]
  (= \> (first s)))

(defn- string->fasta-bioseq
  [s alphabet]
  (with-open [r (-> (bs/init-fasta-string s alphabet))]
    (-> (bs/biosequence-seq r) first)))

(defn- submit-blast
  [{:keys [program text database matrix evalue gapped return]}]
  (let [alphabet (if (= "blastp" program)
                   :iupacAminoAcids
                   :iupacNucleicAcids)
        matrix (if (#{"blastp" "blastx"} program)
                 {"-matrix" matrix} {})
        gapped (if (= "No" gapped)
                 {"-ungapped" "true"
                  "-comp_based_stats" "F"}
                 {})
        bs (-> (if (fasta-string? text)
                 (string->fasta-bioseq text)
                 (bs/init-fasta-sequence "User_submitted_sequence"
                                         "Submitted sequence"
                                         alphabet text))
               list)]
    {:result (bl/run-blast bs program database (merge {"-evalue" evalue
                                                       "-max_target_seqs" return}
                                                      matrix
                                                      gapped))
     :query (first bs)
     :database database
     :program program
     :type "blast"}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; search info and results
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti return-results (fn [m] (:type m)))

(defn- hsps
  [h]
  (map #(hash-map :bits (blast/get-hsp-value % :Hsp_bit-score)
                  :evalue (blast/get-hsp-value % :Hsp_evalue)
                  :identity (blast/get-hsp-value % :Hsp_identity)
                  :positive (blast/get-hsp-value % :Hsp_positive)
                  :number (blast/get-hsp-value % :Hsp_num)
                  :alignment (blast/hsp-alignment %))
       (blast/hsp-seq h)))

(defmethod return-results "blast"
  [m]
  {:status "success"
   :proteins (with-open [r (-> @(:result m)
                               bs/index-biosequence-file
                               bs/bs-reader)]
               (->> (bs/biosequence-seq r)
                    first
                    blast/hit-seq
                    (drop (:offset m))
                    (take 20)
                    (map #(let [p (get-pep (blast/hit-accession %))]
                            (assoc p
                                   :blast {:length
                                           (blast/get-hit-value % :Hit_len)
                                           :def (blast/hit-def %)
                                           :hsps (hsps %)})))))})

(defmethod return-results "text-search"
  [{:keys [query offset]}]
  {:status "success"
   :proteins (ut/query-db (str "select acc from peps where "
                               " acc ILIKE '%" query "%' OR "
                               " description ILIKE '%" query "%' "
                               " order by acc OFFSET "
                               offset " limit 20")
                          :row-fn #(get-pep (:acc %)))})

(defmethod return-results "ids-fetch"
  [{:keys [ids offset] :as m}]
  (println m)
  {:status "success"
   :proteins (let [q (->> (map #(str "'" % "'") ids)
                          (interpose #",")
                          (apply str))]
               (ut/query-db (str "select acc from peps where "
                                 " acc in (" q ") "
                                 " order by acc OFFSET "
                                 offset " limit 20")
                            :row-fn #(get-pep (:acc %))))})

;; search count

(defmulti count-results (fn [m] (:type m)))

(defmethod count-results "blast"
  [m]
  (with-open [r (-> @(:result m)
                    bs/index-biosequence-file
                    bs/bs-reader)]
    (->> (bs/biosequence-seq r)
         first
         blast/hit-seq
         count)))

(defmethod count-results "text-search"
  [{:keys [query]}]
  (ut/query-db (str "select count(*) from peps where "
                    " acc ILIKE '%" query "%' OR "
                    " description ILIKE '%" query "%'")
               :result-set-fn #(:count (first %))))

;; search info

(defmulti search-data (fn [m] (:type m)))

(defmethod search-data "blast"
  [m]
  (if (< 0 (:total m))
    {:status "success"
     :info (str "Showing " (:total m)
                (if (< 1 (:total m))
                  " results " " result ")
                " from " (:program m)
                " search of '" (bs/accession (:query m))
                "' against '" (:database m)
                "' database:")}
    {:status "success"
     :info (str "No results found for " (:program m)
                " search of '" (bs/accession (:query m))
                "' against '" (:database m)
                "' database.")}))

(defmethod search-data "text-search"
  [m]
  (if (< 0 (:total m))
    {:status "success"
     :info (str "Showing " (:total m)
                (if (< 1 (:total m))
                  " results " " result ")
                "for query '" (:query m)
                "'.")}
    {:status "success"
     :info (str "No results for query '" (:query m) "',")}))

(defmethod search-data "ids-fetch"
  [m]
  {:status "success"
   :info (str "Showing " (:total m) " selected proteins.")})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; api
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti get-key (fn [m] (:type m)))

(defmethod get-key "blast"
  [m]
  (let [r (submit-blast m)]
    (loop [id (ut/new-uuid)]
      (if-not (get @req-key-map id)
        (do (swap! req-key-map assoc id r)
            {:status "success" :id id})
        (recur (ut/new-uuid))))))

(defmethod get-key "text-search"
  [m]
  (loop [id (ut/new-uuid)]
    (if-not (get @req-key-map id)
      (do (swap! req-key-map assoc id m)
          {:status "success" :id id :count (count-results m)})
      (recur (ut/new-uuid)))))

(defmethod get-key "ids-fetch"
  [m]
  (loop [id (ut/new-uuid)]
    (if-not (get @req-key-map id)
      (do (swap! req-key-map assoc id m)
          {:status "success" :id id :count (count (:ids m))})
      (recur (ut/new-uuid)))))

(defmethod get-key :default
  [m]
  (loop [id (ut/new-uuid)]
    (if-not (get req-key-map id)
      (do (swap! req-key-map assoc id m)
          {:status :success :id id})
      (recur m))))

(defmulti select-all (fn [m] (:type m)))

(defmethod select-all "blast"
  [{:keys [result]}]
  {:status "success"
   :info (with-open [r (-> @result
                           bs/index-biosequence-file
                           bs/bs-reader)]
           (->> (bs/biosequence-seq r)
                first
                blast/hit-seq
                (map #(blast/hit-accession %))
                vec))})

(defmethod select-all "text-search"
  [{:keys [query]}]
  {:status "success"
   :info (ut/query-db (str "select acc from peps where "
                           " acc ILIKE '%" query "%' OR "
                           " description ILIKE '%" query "%' ")
                      :row-fn :acc
                      :result-set-fn vec)})

(defmethod select-all "ids-fetch"
  [m]
  {:status "success"
   :info (:ids m)})

(defn check-blast
  [m]
  (let [f (get @req-key-map (:key m))]
    (if (future-done? (:result f))
      {:status "success" :state (count-results f)}
      {:status "success" :state "Not done"})))
