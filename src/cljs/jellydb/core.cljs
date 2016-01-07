(ns ^:figwheel-always jellydb.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [ajax.core :refer [GET POST]]
            [clojure.browser.repl :as repl]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.utilities :as jdbu]
            [jellydb.blast :refer [blast-view blast-waiting]]
            [jellydb.search :refer [search]]
            [jellydb.proteins :refer [proteins-view proteins-reset]]
            [jellydb.links :refer [nav-links]]
            [jellydb.datasets :refer [datasets-view]]
            [jellydb.contact :refer [contact-view]]
            [cljs-http.client :as http]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; home
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn home
  [app owner]
  (om/component
   (dom/div
    #js {:className "hcenter"}
    (dom/div
     #js {:style #js {:clear "both"}}
     (dom/div #js {:className "padded"} "")
     (dom/div
      #js {:className "hdisplay hcenter"}
      (dom/h3 nil "Welcome to JellyDB")
      (dom/p nil "Welcome to JellyDB containing jellyfish transcriptomic
      sequences and proteomics data. Welcome to JellyDB containing
      jellyfish transcriptomic sequences and proteomics data. Welcome
      to JellyDB containing jellyfish transcriptomic sequences and
      proteomics data.")
      (dom/a #js {:onClick #(jdbu/pub-info owner :view nil "contact")
                  :className "flinka"}
             "Contact us."))
     (dom/div
      #js {:className "pure-g"}
      (dom/div
       #js {:className "pure-u-1-1"}
       (dom/div
        #js {:className "hdisplay hcenter"}
        (om/build search "Search for sequences ...")))
      (dom/div
       #js {:className "pure-u-11-24"
            :onClick #(jdbu/pub-info owner :view nil "blast")}
       (dom/div
        #js {:className "hdisplay hcenter my-cursor"}
        (dom/h1 nil "Blast")
        (dom/img #js {:src "/imgs/alignment-image-p532.png"
                      :style #js {:width "100%"
                                  :height "100px"}})
        (dom/p nil
               "Blast protein and nucleic acid sequences against the
               JellyDB.")))
      (dom/div #js {:className "pure-u-2-24"} "")
      (dom/div
       #js {:className "pure-u-11-24"
            :onClick #(jdbu/pub-info owner :view nil "datasets")}
       (dom/div
        #js {:className "hdisplay hcenter my-cursor"}
        (dom/h1 nil "Download Datasets")
        (dom/img #js {:src "/imgs/alignment-image-p532.png"
                      :style #js {:width "100%"
                                  :height "100px"}})
        (dom/p nil
               "Download annotated transcriptomic and proteomic
               datasets.")))
      (dom/div
       #js {:className "pure-u-1-1"}
       (dom/div
        #js {:className "hdisplay hcenter"}
        (dom/h1 nil "Database statistics")
        (dom/p nil
               "Database statistics here"))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; app control
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn view-loop
  [o e]
  (om/set-state! o :view {:view (:view e) :data (:data e)}))

(defn app-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:view {:view "home" :data nil}})
    om/IDidMount
    (did-mount [_]
      (jdbu/register-loop owner :view view-loop))
    om/IWillUnmount
    (will-unmount [_]
      (jdbu/unsubscribe owner :view))
    om/IRenderState
    (render-state [_ {:keys [view]}]
      (dom/div nil
               (dom/div #js {:className "hcenter"}
                        (om/build nav-links (:view view)))
               (condp = (:view view)
                 "home" (om/build home (:data view))
                 "blast" (om/build blast-view (:data view))
                 "blast-waiting" (om/build blast-waiting (:data view))
                 "proteins" (om/build proteins-view (:data view))
                 "proteins-reset" (om/build proteins-reset (:data view))
                 "datasets" (om/build datasets-view (:data view))
                 "contact" (om/build contact-view (:data view)))))))

(defn outer
  [app owner]
  (om/component
   (dom/div nil
            (dom/div {:id "data"}
                     (om/build app-view app)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; main
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn main []
  (let [req-chan     (chan)
        pub-chan     (chan)
        notif-chan   (pub pub-chan :topic)]
    (om/root
     outer
     nil
     {:shared {:req-chan   req-chan
               :notif-chan notif-chan
               :pub-chan   pub-chan}
      :target (. js/document (getElementById "t"))})))

(main)
