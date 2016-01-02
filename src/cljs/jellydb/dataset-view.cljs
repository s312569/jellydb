(ns ^:figwheel-always jellydb.dataset-view
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.utilities :as jdbu]))

(defn download-sequences
  [owner table]
  (let [h (fn [{:keys [status id msg]}]
            (if (= "success" status)
              (om/set-state! owner :ekey id)
              (js/alert msg)))]
    (jdbu/post-params "/search-key"
                      {:did (om/get-state owner :dataset)
                       :table table
                       :type "dataset-download"}
                      h)))

(defn dataset-view [{:keys [dataset abstract time name submitter]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:ab-view false
       :dataset dataset
       :abstract abstract
       :time time
       :name name
       :ekey ""
       :submitter submitter})
    om/IRenderState
    (render-state [_ {:keys [dataset abstract time name submitter ab-view
                             ekey]}]
      (dom/div
       #js {:className "annopadded"}
       (dom/div #js {:className "pure-g"}
                (dom/iframe #js {:id "downloadframe"
                                 :src (if-not (= ekey "")
                                        (str "/fetch?k=" ekey)
                                        "")})
                (dom/div #js {:className "pure-u-5-5 thick hcenter greyed"}
                         "Assembly")
                (dom/div #js {:className "pure-u-1-5 thick"} "Dataset ID:")
                (dom/div #js {:className "pure-u-4-5"} dataset)
                (dom/div #js {:className "pure-u-1-5 thick"} "Dataset Name:")
                (dom/div #js {:className "pure-u-4-5"} name)
                (dom/div #js {:className "pure-u-1-5 thick"} "Abstract:")
                (dom/div #js {:className "pure-u-4-5"} (if ab-view
                                                         abstract
                                                         (subs abstract 0 3)))
                (dom/div #js {:className "pure-u-1-5 thick"} " ")
                (dom/div #js {:className "pure-u-4-5 protsumm"}
                         (if ab-view
                           (dom/a #js {:className "flinka flinka"
                                       :onClick #(om/set-state! owner
                                                                :ab-view false)}
                                  "Less")
                           (dom/a #js {:className "flinka flinka"
                                       :onClick #(om/set-state! owner
                                                                :ab-view true)}
                                  "More")))
                (dom/div #js {:className "pure-u-1-5 thick"} "Date:")
                (dom/div #js {:className "pure-u-4-5"} time)
                (dom/div #js {:className "pure-u-1-5 thick"} "Submitted by:")
                (dom/div #js {:className "pure-u-4-5"}
                         (str (:first submitter) " " (:last submitter)))
                (dom/div #js {:className "pure-u-1-5 thick"} "Email:")
                (dom/div #js {:className "pure-u-4-5"} (:email submitter))
                (dom/div #js {:className "pure-u-1-5 thick"} "Address:")
                (dom/div #js {:className "pure-u-4-5"} (:address submitter))
                (dom/div #js {:className "pure-u-1-5 thick"} "Download:")
                (dom/div
                 #js {:className "pure-u-4-5"}
                 (dom/a #js {:href "#" :className "flinka"
                             :onClick #(download-sequences owner "contigs")}
                        "Contigs") " | "
                 (dom/a #js {:href "#" :className "flinka"
                             :onClick #(download-sequences owner "mrnas")}
                        "mRNAs") " | "
                 (dom/a #js {:href "#" :className "flinka"
                             :onClick #(download-sequences owner "cds")}
                        "Predicted ORFs (nucleotide)") " | "
                 (dom/a #js {:href "#" :className "flinka"
                             :onClick #(download-sequences owner "peps")}
                        "Predicted ORFs (protein)")))))))
