(ns ^:figwheel-always jellydb.proteomics
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! chan]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [jellydb.server :as serve]
            [jellydb.utilities :as ut]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; components
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- peptides-view
  [peptides owner]
  (om/component
   (dom/div
    #js {:style #js {:font-size "small"}}
    (dom/table
     #js {:className "pure-table pure-table-horizontal pure-table-striped"}
     (dom/thead
      nil
      (dom/th nil "Peptide")
      (dom/th nil "Mass")
      (dom/th nil "Delta")
      (dom/th nil "Rank")
      (dom/th nil "iProphet")
      (dom/th nil "Hyperscore"))
     (apply
      dom/tbody
      nil
      (map #(dom/tr
             nil
             (dom/td nil (:peptide %))
             (dom/td nil (ut/round-n {:n (:calc_neutral_pep_mass %)}))
             (dom/td nil (ut/round-n {:n (:massdiff %)
                                      :figs 3}))
             (dom/td nil (:hit_rank %))
             (dom/td nil (ut/round-n {:n (:interprophet-prob %)}))
             (dom/td nil (:hyperscore %)))
           peptides))))))

(defn- show-datasets
  [ds owner]
  (reify
    om/IInitState
    (init-state [_]
      {:bvisible false
       :peptides []})
    om/IWillMount
    (will-mount [_]
      (serve/get-data-check {:type ::peptides :dataset (:id ds)
                             :accession (:accession ds)}
                            :peptides owner))
    om/IRenderState
    (render-state [_ {:keys [bvisible peptides]}]
      (dom/div
       nil
       (dom/div #js {:className "pure-u-1-24"} (:id ds))
       (dom/div #js {:className "pure-u-8-24"} (:name ds))
       (dom/div #js {:className "pure-u-5-24"} (:tissue ds))
       (dom/div #js {:className "pure-u-7-24" :style #js {:font-style "italic"}}
                (:species ds))
       (dom/a #js {:className "pure-u-3-24 flinka"
                   :onClick #(om/set-state! owner :bvisible (not bvisible))}
              (:mcount ds))
       (if bvisible
         (dom/div #js {:className "pure-u-5-5"
                       :style #js {:width "90%"
                                   :margin "auto"
                                   :display "block"}}
                  (om/build peptides-view peptides)))))))

(defn- proteomics
  [{:keys [accession datasets]} owner]
  (reify
    om/IInitState
    (init-state [_]
      (if (seq datasets)
        {:headers ["Header" "Header2" "Header3"]
         :description "Proteomics"
         :data (map #(assoc % :accession accession ) datasets)}
        {}))
    om/IRenderState
    (render-state [_ {:keys [data headers description]}]
      (dom/div
       nil
       (dom/div #js {:className "pure-u-5-5 thick hcenter greyed"}
                "Detected in proteomics datasets")
       (dom/div #js {:className "pure-u-1-24 thick"} "ID")
       (dom/div #js {:className "pure-u-8-24 thick"} "Name")
       (dom/div #js {:className "pure-u-5-24 thick"} "Tissue")
       (dom/div #js {:className "pure-u-7-24 thick"} "Species")
       (dom/div #js {:className "pure-u-3-24 thick"} "Peptides")
       (apply dom/div nil (om/build-all show-datasets data))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; api
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn proteomics-view
  [protein owner]
  (reify
    om/IInitState
    (init-state [_]
      {:accession (:accession protein)
       :datasets nil})
    om/IWillMount
    (will-mount [_]
      (serve/get-data-check {:accession (:accession protein) :type ::proteomics}
                            :datasets owner))
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (when-not (= (om/get-state owner :accession) (:accession np))
        (om/set-state! owner :accession (:accession np))
        (serve/get-data-check {:accession (:accession np) :type ::proteomics}
                              :datasets owner)))
    om/IRenderState
    (render-state [_ {:keys [datasets accession]}]
      (if-not (seq datasets)
        (dom/div
         nil
         (dom/div #js {:className "tbpadded"} "")
         (om/build ut/waiting nil))
        (dom/div
         nil
         (dom/div #js {:className "tbpadded"} "")
         (om/build proteomics {:accession accession :datasets datasets}))))))
