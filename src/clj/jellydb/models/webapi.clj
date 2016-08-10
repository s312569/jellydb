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

(defmethod serve/search-key :text
  [{:keys [data] :as m}]
  (println @search-keys)
  (loop [id (ut/new-uuid)]
    (if-not (get @search-keys id)
      (do (swap! search-keys assoc id data)
          {:status "success" :key id}))
    (recur (ut/new-uuid))))




