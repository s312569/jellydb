(ns jellydb.models.webapi
  (:require [jellydb.models.db :refer :all]
            [jellydb.server :as serve]
            [jellydb.models.utilities :as ut]
            [jellydb.models.userblast :as bl]
            [clj-fasta.core :as fasta]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; search keys
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def search-keys (atom {}))

(defn- new-key
  [data]
  (loop [id (ut/new-uuid)
         c 0]
    (if (<= c 10)
      (if-not (get @search-keys id)
        (do (swap! search-keys assoc id data)
            {:status :success :key id})
        (recur (ut/new-uuid) (inc c)))
      {:status :failure :message "Could not obtain search key"})))

(defmethod serve/get-data :search
  [{:keys [key] :as m}]
  (let [r (@search-keys key)]
    (if r
      {:status :success :data r}
      {:status :failure :message "Search key doesn't exist."})))

(defmethod serve/get-data :by-key
  [{:keys [key] :as m}]
  (if-let [r (get-sequences (merge m (@search-keys key)))]
    {:status :success :data r}
    {:status :failure :message "Something amiss in search retrieval."}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; blast search
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod serve/search-key :jellydb.blast/blast
  [{:keys [data] :as m}]
  (let [f (bl/run-blast data)]
    (new-key {:search-type :blast-search :data (:data m) :future f})))

(defmethod serve/get-data :jellydb.blast/blast-done?
  [{:keys [key] :as m}]
  (if-let [s (@search-keys key)]
    (if (future-done? (:future s))
      (let [br @(:future s)]
        (swap! search-keys #(-> (update-in % [key] (fn [x] (merge x br)))
                                (update-in [key] (fn [x] (dissoc x :future)))))
        {:status :success :result true})
      {:status :success :result false})
    {:status :failure :message "Blast key doesn't exist."}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; text search
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod serve/search-key :text
  [{:keys [data] :as m}]
  (let [qc (count-results m)]
    (new-key {:search-type :text-proteins :data data :count qc})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; selected functions
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod serve/search-key :jellydb.proteins/show-selected
  [{:keys [data]}]
  (new-key {:search-type :only-selected :data data :count (count data)}))

(defmethod serve/get-data :jellydb.proteins/select-all
  [{:keys [key] :as m}]
  (if-let [r (get-sequences (merge m (@search-keys key)))]
    {:status :success :data r}
    {:status :failure :message "Something amiss in sequence selected retrieval."}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; sequence retrieval
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(derive :jellydb.proteins/cds :jellydb.proteins/dna)
(derive :jellydb.proteins/mrna :jellydb.proteins/dna)
(derive :jellydb.proteins/annotations? :jellydb.annotation-view/ips)
(derive :jellydb.proteins/homologies? :jellydb.homology-view/blasts)

(defmethod serve/get-data :jellydb.proteins/dna
  [{:keys [accession] :as m}]
  (if-let [r (get-sequences (assoc m :accessions [accession]))]
    {:status :success :data (first r)}
    {:status :failure :message "Something wrong with sequence retrieval by accession."}))

(defmethod serve/get-data :jellydb.annotation-view/ips
  [{:keys [accession] :as m}]
  (if-let [r (get-sequences (assoc m :accessions [accession]))]
    {:status :success :data r}
    {:status :failure :message "Something wrong with ips retrieval by accession."}))

(defmethod serve/get-data :jellydb.proteins/annotations?
  [{:keys [accession] :as m}]
  (if-let [r (get-sequences (assoc m :accessions [accession]))]
    {:status :success :data (if (seq r) true false)}
    {:status :failure :message "Something wrong with annotations query."}))

(defmethod serve/get-data :jellydb.dataset-view/dataset
  [{:keys [dataset] :as m}]
  (if-let [r (get-sequences m)]
    {:status :success :data (first r)}
    {:status :failure :message "Something wrong with dataset retrieval."}))

(defmethod serve/get-data :jellydb.homology-view/db-name
  [{:keys [did] :as m}]
  (if-let [r (get-sequences m)]
    {:status :success :data r}
    {:status :failure :message "Something wrong with dataset name retrieval."}))

(defmethod serve/get-data :jellydb.homology-view/blasts
  [{:keys [accession] :as m}]
  (if-let [r (get-sequences (assoc m :accessions [accession]))]
    {:status :success :data r}
    {:status :failure :message "Something wrong with blast retrieval by accession."}))

(defmethod serve/get-data :jellydb.proteins/homologies?
  [{:keys [accession] :as m}]
  (let [r (get-sequences (assoc m :accessions [accession]))]
    (if r
      {:status :success :data (if (> (count r) 0) true false)}
      {:status :failure :message "Something wrong with annotations query."})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; file retrieval 
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod serve/search-key :jellydb.dataset-view/dataset
  [{:keys [table did] :as m}]
  (new-key {:search-type :dataset-retrieval :table table :did did}))

(defmethod serve/search-key :jellydb.proteins/export
  [{:keys [table data] :as m}]
  (new-key {:search-type :selected-export :table table :selected data}))

(defmulti get-key-result :search-type)

(defmethod get-key-result :dataset-retrieval
  [m]
  (get-sequences
   (assoc m :func (partial ut/sequences->file (ut/working-file "dls")))))

(defmethod get-key-result :selected-export
  [m]
  (get-sequences
   (assoc m :func (partial ut/sequences->file (ut/working-file "els")))))

(defn dataset-sequences
  [key]
  (let [m (@search-keys key)]
    (get-key-result (assoc m :type :file-retrieval))))
