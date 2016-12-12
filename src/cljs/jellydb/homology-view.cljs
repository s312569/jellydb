(ns ^:figwheel-always jellydb.homology-view
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.server :as serve]
            [jellydb.utilities :as ut]
            [cljs.pprint :as pprint]
            [clojure.string :as st]))

(defn- homology-data
  [dbr]
  (dom/tr
   nil
   (dom/td #js {:className "anno-display"
                :style #js {:width "15%"}}
           (second (st/split (get-in dbr [:hit :Hit_id]) #"\|")))
   (dom/td #js {:className "anno-display"
                :style #js {:width "10%"}}
           (pprint/cl-format nil  "~,2f" (js/parseFloat (-> (get-in dbr [:hit :hsps])
                                                            first
                                                            :Hsp_bit-score))))
   (dom/td #js {:className "anno-display"
                :style #js {:width "15%"}}
           (pprint/cl-format nil  "~,2e" (js/parseFloat (-> (get-in dbr [:hit :hsps])
                                                            first
                                                            :Hsp_evalue))))
   (dom/td #js {:className "anno-display"
                :style #js {:width "60%"}}
           (get-in dbr [:hit :Hit_def]))))

(defn- db-homologies [dbrs owner]
  (reify
    om/IInitState
    (init-state [_]
      {:name ""})
    om/IWillMount
    (will-mount [_]
      (serve/get-data-check {:type ::db-name :did (:database (first dbrs))} :name owner))
    om/IRenderState
    (render-state [_ {:keys [name]}]
      (dom/div
       nil
       (dom/div #js {:className "pure-u-5-5 thick greyed"
                     :style #js {:padding-left "10px"}}
                (str "Similar to proteins in " name))
       (dom/table
        nil
        (dom/thead
         nil
         (dom/tr
          nil
          (dom/th #js {:className "anno-display"} "Accession")
          (dom/th #js {:className "anno-display"} "Score")
          (dom/th #js {:className "anno-display"} "E-value")
          (dom/th #js {:className "anno-display"} "Description")))
        (apply dom/tbody nil (doall (map homology-data dbrs))))))))

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
         (om/build ut/waiting nil))
        (dom/div
         nil
         (dom/div #js {:className "tbpadded"} "")       
         (apply dom/div nil (map #(om/build db-homologies %) (vals homologies))))))))
