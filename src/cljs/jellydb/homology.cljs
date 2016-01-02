(ns ^:figwheel-always jellydb.homology
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn- homology-data [data owner]
  (om/component
   (dom/tr nil
           (dom/td #js {:className "anno-display"
                        :style #js {:width "15%"}}
                   (:hacc data))
           (dom/td #js {:className "anno-display"
                        :style #js {:width "10%"}}
                   (:bits data))
           (dom/td #js {:className "anno-display"
                        :style #js {:width "10%"}}
                   (:eval data))
           (dom/td #js {:className "anno-display"
                        :style #js {:width "65%"}}
                   (:hdef data)))))

(defn- homology-table [ms owner]
  (om/component
   (dom/table
    nil
    (dom/thead
     nil
     (dom/tr
      nil
      (dom/th #js {:className "anno-display"} "Accession")
      (dom/th #js {:className "anno-display"} "Bit Score")
      (dom/th #js {:className "anno-display"} "E-value")
      (dom/th #js {:className "anno-display"} "Description")))
    (apply dom/tbody nil (om/build-all homology-data ms)))))

(defn homology-view [{:keys [homologies acc]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:homologies homologies})
    om/IRenderState
    (render-state [_ {:keys [homologies]}]
      (dom/div
       #js {:className "annopadded"}
       (dom/div #js {:className "pure-u-5-5 thick hcenter greyed"}
                "Similar to proteins in SwissProt:")
       (om/build homology-table homologies)))))
