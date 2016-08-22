(ns ^:figwheel-always jellydb.homology-view
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.server :as serve]
            [jellydb.utilities :as ut]))

(defn- homology-data
  [dbr]
  (dom/tr
   nil
   (dom/td #js {:className "anno-display"
                :style #js {:width "15%"}}
           (get-in dbr [:hit :Hit_id]))
   (dom/td #js {:className "anno-display"
                :style #js {:width "10%"}}
           (-> (get-in dbr [:hit :hsps])
               first
               :Hsp_bit-score))
   (dom/td #js {:className "anno-display"
                :style #js {:width "15%"}}
           (-> (get-in dbr [:hit :hsps])
               first
               :Hsp_evalue))
   (dom/td #js {:className "anno-display"
                :style #js {:width "60%"}}
           (get-in dbr [:hit :Hit_def]))))

(defn- db-homologies
  [dbrs]
  (dom/div
   nil
   (dom/div #js {:className "pure-u-5-5 thick greyed"}
            (str "Similar to proteins in " (:database (first dbrs))))
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
    (apply dom/tbody nil (doall (map homology-data dbrs))))))

(defn homology-view [protein owner]
  (reify
    om/IInitState
    (init-state [_]
      {:homologies nil})
    om/IWillMount
    (will-mount [_]
      (serve/get-data-check {:type ::blasts :accession (:accession protein)}
                            :homologies owner))
    om/IRenderState
    (render-state [_ {:keys [homologies]}]
      (if-not homologies
        (dom/div
         nil
         (dom/div #js {:className "tbpadded"} "")
         (dom/div #js {:className "tbpadded"} "")
         (om/build ut/waiting nil))
        (dom/div
         nil
         (dom/div #js {:className "tbpadded"} "")
         (dom/div #js {:className "tbpadded"} "")       
         (apply dom/div nil (map db-homologies (vals homologies))))))))
