(ns ^:figwheel-always jellydb.datasets
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.utilities :as jdbu]
            [cljs-http.client :as http]))

(defn datasets-view
  [_ owner]
  (reify
    om/IRenderState 
    (render-state [_ s]
      (dom/div
       #js {:className "annopadded hcenter"}
       "This will be the datatsets page."))))
