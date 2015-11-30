(ns ^:figwheel-always jellydb.protein
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [ajax.core :refer [GET POST]]
            [clojure.browser.repl :as repl]
            [cljs.core.async :refer [put! <! >! chan pub sub close! unsub]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [jellydb.utilities :as jdbu]))

;; server calls

(defn- get-protein
  [owner]
  (letfn [(h [{:keys [status protein msg]}]
            (if (= "success" status)
              (om/set-state! owner :peptide protein)
              (js/alert msg)))]
    (GET "/peptide" {:error-handler jdbu/error-handler
                     :params {:id (om/get-state owner :accession)}
                     :handler h
                     :response-format :json
                     :keywords? true})))

;; components

(defn protein-view [acc owner]
  (reify
    om/IInitState
    (init-state [_]
      {:accession acc
       :peptide nil})
    om/IWillMount
    (will-mount [_]
      (get-protein owner))
    om/IRenderState
    (render-state [_ {:keys [accession peptide]}]
      (dom/div nil
               (dom/div
                #js {:className "thick padded"}
                (str accession " - " (:description peptide)))
               (dom/div
                #js {:className "pure-g"}
                (dom/div #js {:className "pure-u-1-5 thick padded"}
                         "Accession:")
                (dom/div #js {:className "pure-u-3-5 padded"}
                         accession))
               (dom/div
                #js {:className "pure-g"}
                (dom/div #js {:className "pure-u-1-5 thick padded"}
                         "Description:")
                (dom/div #js {:className "pure-u-3-5 padded"}
                         (:description peptide)))
               (dom/div
                #js {:className "pure-g"}
                (dom/div #js {:className "pure-u-1-5 thick padded"}
                         "Species:")
                (dom/div #js {:className "pure-u-3-5 padded"}
                         (:species peptide)))
               (dom/div
                #js {:className "pure-g"}
                (dom/div #js {:className "pure-u-1-5 thick padded"}
                         "Protein sequence:")
                (dom/div #js {:className "pure-u-3-5 padded"}
                         (:sequence peptide)))
               (dom/div
                #js {:className "pure-g"}
                (dom/div #js {:className "pure-u-1-5 thick padded"}
                         "CDS:")
                (dom/div #js {:className "pure-u-3-5 padded"}
                         (:cds peptide)))
               (dom/div
                #js {:className "pure-g"}
                (dom/div #js {:className "pure-u-1-5 thick padded"}
                         "mRNA sequence:")
                (dom/div #js {:className "pure-u-3-5 padded"}
                         (:mrna peptide)))))))
