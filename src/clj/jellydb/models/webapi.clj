(ns jellydb.models.webapi
  (:require [jellydb.models.db :refer :all]
            [jellydb.server :as serve]
            [jellydb.models.utilities :as ut]
            [clj-fasta.core :as fasta]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; search keys
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def search-keys (atom {}))

(defmethod serve/get-data :search
  [{:keys [key] :as m}]
  (let [r (@search-keys key)]
    (if r
      {:status :success :data r}
      {:status :failure :message "Search key doesn't exist."})))

(defn- new-key
  [data]
  (loop [id (ut/new-uuid)]
      (if-not (get @search-keys id)
        (do (swap! search-keys assoc id data)
            {:status :success :key id})
        (recur (ut/new-uuid)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; dataset retrieval
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod serve/search-key :jellydb.dataset-view/dataset
  [{:keys [table did] :as m}]
  (println m)
  (new-key {:type :dataset-retrieval :table table :did did}))

(defn- jdb-fasta-string
  [s]
  (if (:original-accession s)
    (fasta/fasta-string (assoc s :accession (:original-accession s)))
    (fasta/fasta-string s)))

(defn dataset-sequences
  [key]
  (let [d (@search-keys key)]
    (apply-to-dataset
     (assoc d :func #(let [f (ut/working-file "dls")]
                       (fasta/fasta->file % f :func jdb-fasta-string))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; text search
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod serve/search-key :text
  [{:keys [data] :as m}]
  (let [qc (count-results m)]
    (new-key {:type :text-search :data data :count qc})))

(defmethod serve/get-data :text-proteins
  [{:keys [key offset] :as m}]
  (if-let [r (get-sequences (assoc m :data (:data (@search-keys key))))]
    {:status :success :data r}
    {:status :failure :message "Something amiss in sequence retrieval."}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; sequence retrieval
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(derive :jellydb.proteins/cds :jellydb.proteins/dna)
(derive :jellydb.proteins/mrna :jellydb.proteins/dna)
(derive :jellydb.proteins/annotations? :jellydb.annotation-view/ips)

(defmethod serve/get-data :jellydb.proteins/dna
  [{:keys [accession] :as m}]
  (if-let [r (get-sequences (assoc m :accessions [accession]))]
    {:status :success :data (first r)}
    {:status :failure :message "Something wrong with sequence retrieval by accession."}))

(defmethod serve/get-data :jellydb.annotation-view/ips
  [{:keys [accession] :as m}]
  (if-let [r (get-sequences (assoc m :accessions [accession]))]
    {:status :success :data r}
    {:status :failure :message "Something wrong with sequence retrieval by accession."}))

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
