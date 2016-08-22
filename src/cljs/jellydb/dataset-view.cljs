(ns ^:figwheel-always jellydb.dataset-view
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.server :as serve]
            [jellydb.utilities :as ut]))

(defn- get-ekey
  [owner table]
  (ut/log (om/get-state owner :dataset))
  (serve/search-key {:type ::dataset :table table :did (:id (om/get-state owner :dataset))}
                    (fn [x]
                      (if (= :success (:status x))
                        (om/set-state! owner :ekey (:key x))
                        (ut/error-redirect x)))))

(defn- download-link
  [table text owner]
  (dom/a #js {:href "#" :className "flinka"
              :onClick #(get-ekey owner table)}
         text))

(defn dataset-view [protein owner]
  (reify
    om/IInitState
    (init-state [_]
      {:dataset nil
       :ekey nil
       :abview false})
    om/IWillMount
    (will-mount [_]
      (serve/get-data-check {:type ::dataset :dataset (:dataset protein)}
                            :dataset
                            owner))
    om/IRenderState
    (render-state [_ {:keys [dataset ekey abview]}]
      (if-not dataset
        (dom/div
         nil
         (dom/div #js {:className "tbpadded"} "")
         (dom/div #js {:className "tbpadded"} "")
         (om/build ut/waiting nil))
        (dom/div
         nil
         (dom/iframe
          #js {:id "downloadframe"
               :src (if ekey (str "/fetch?k=" ekey) "")}
          (om/set-state! owner :ekey nil))
         (dom/div #js {:className "tbpadded"} "")
         (dom/div #js {:className "tbpadded"} "")         
         (dom/div #js {:className "pure-u-5-5 thick hcenter greyed"} "Assembly")
         (dom/div #js {:className "pure-u-1-5 thick"} "Dataset ID:")
         (dom/div #js {:className "pure-u-4-5"} (:id dataset))
         (dom/div #js {:className "pure-u-1-5 thick"} "Dataset Name:")
         (dom/div #js {:className "pure-u-4-5"} (:name dataset))
         (dom/div #js {:className "pure-u-1-5 thick"} "Abstract:")
         (dom/div #js {:className "pure-u-4-5"} (if abview
                                                  (:abstract dataset)
                                                  (subs (:abstract dataset) 0 3)))
         (dom/div #js {:className "pure-u-1-5 thick"} " ")
         (dom/div #js {:className "pure-u-4-5 protsumm"}
                  (if abview
                    (dom/a #js {:className "flinka"
                                :onClick #(om/set-state! owner :abview false)}
                           "Less")
                    (dom/a #js {:className "flinka"
                                :onClick #(om/set-state! owner :abview true)}
                           "More")))
         (dom/div #js {:className "pure-u-1-5 thick"} "Date:")
         (dom/div #js {:className "pure-u-4-5"} (str (:time dataset)))
         (dom/div #js {:className "pure-u-1-5 thick"} "Submitted by:")
         (dom/div #js {:className "pure-u-4-5"}
                  (str (:first dataset) " " (:last dataset)))
         (dom/div #js {:className "pure-u-1-5 thick"} "Email:")
         (dom/div #js {:className "pure-u-4-5"} (:email dataset))
         (dom/div #js {:className "pure-u-1-5 thick"} "Download:")
         (dom/div
          #js {:className "pure-u-4-5"}
          (download-link :contigs "Contigs" owner)
          " | "
          (download-link :mrnas "mRNA" owner)
          " | "
          (download-link :cdss "CDS" owner)
          " | "
          (download-link :peptides "Proteins" owner)))))))
