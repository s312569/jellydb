(ns ^:figwheel-always jellydb.utilities
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]))

(defn change
  [e owner]
  (om/set-state! owner :text (-> e .-target .-value)))

(defn log
  [m]
  (.log js/console m))

(defn print-state
  ([owner] (print-state owner nil))
  ([owner not-keys]
   (->> (if not-keys
          (apply dissoc (om/get-state owner) not-keys)
          (om/get-state owner))
        (map (fn [[k v]]
               (str k ":" v " ")))
        (apply str))))

(defn pub-info
  [owner topic data]
  (put! (:pub-chan (om/get-shared owner))
        {:topic topic :data data}))

(defn error-handler
  [{:keys [status status-text]}]
  (log (str "Something bad happened: " status " " status-text)))
