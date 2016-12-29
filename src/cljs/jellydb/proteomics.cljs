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

(defn proteomics
  [{:keys [protein peptides]} owner]
  (reify
    om/IInitState
    (init-state [_]
      (if (seq peptides)
        {:headers ["Header" "Header2" "Header3"]
         :description "Proteomics"
         :data peptides}
        {}))
    om/IRenderState
    (render-state [_ {:keys [data headers description]}]
      (dom/div
       nil
       (dom/div #js {:className "pure-u-5-5 thick hcenter greyed"} description)
       (dom/div
        #js {:className "pure-u-5-5 tbpadded"}
        (dom/div nil "This is where they go"))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; api
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn proteomics-view
  [protein owner]
  (reify
    om/IInitState
    (init-state [_]
      {:accession (:accession protein)
       :peptides nil})
    om/IWillMount
    (will-mount [_]
      (serve/get-data-check {:accession (:accession protein) :type ::proteomics}
                            :peptides owner))
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (when-not (= (om/get-state owner :accession) (:accession np))
        (om/set-state! owner :accession (:accession np))
        (serve/get-data-check {:accession (:accession np) :type ::proteomics}
                              :peptides owner)))
    om/IRenderState
    (render-state [_ {:keys [peptides]}]
      (ut/log peptides)
      (if-not (seq peptides)
        (dom/div
         nil
         (dom/div #js {:className "tbpadded"} "")
         (om/build ut/waiting nil))
        (dom/div
         nil
         (dom/div #js {:className "tbpadded"} "")
         (om/build proteomics {:protein protein :peptides peptides}))))))
