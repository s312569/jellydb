(ns ^:figwheel-always jellydb.contact
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.utilities :as jdbu]
            [cljs-http.client :as http]))

(defn contact-view
  [_ owner]
  (reify
    om/IRenderState 
    (render-state [_ s]
      (dom/div
       #js {:className "annopadded hcenter"}
       "This will be the contact page."))))
