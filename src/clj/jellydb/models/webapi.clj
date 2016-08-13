(ns jellydb.models.webapi
  (:require [jellydb.models.blast :refer [blast-dataset]]
            [jellydb.models.ips :as ip]
            [jellydb.models.db :refer :all]
            [jellydb.server :as serve]
            [jellydb.models.utilities :as ut]
            [biodb.core :as bdb]
            [clj-fasta.core :refer [fasta->file]]
            [me.raynes.fs :refer [delete delete-dir]]
            [clj-commons-exec :refer [sh]]))

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
;; text search
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



