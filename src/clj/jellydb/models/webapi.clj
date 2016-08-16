(ns jellydb.models.webapi
  (:require [jellydb.models.db :refer :all]
            [jellydb.server :as serve]
            [jellydb.models.utilities :as ut]))

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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; text search
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod serve/search-key :text
  [{:keys [data] :as m}]
  (let [qc (count-results m)]
    (loop [id (ut/new-uuid)]
      (if-not (get @search-keys id)
        (do (swap! search-keys assoc id {:data data :count qc})
            {:status "success" :key id})
        (recur (ut/new-uuid))))))

(defmethod serve/get-data :text-proteins
  [{:keys [key offset] :as m}]
  (if-let [r (get-results (assoc m :data (:data (@search-keys key))))]
    {:status :success :data r}
    {:status :failure :message "Something amiss in sequence retrieval."}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; sequence retrieval
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(derive :jellydb.proteins/cds :jellydb.proteins/dna)
(derive :jellydb.proteins/mrna :jellydb.proteins/dna)

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


