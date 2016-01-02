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
            [cljs-http.client :as http]))

;; components

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; home
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn home
  [app owner]
  (om/component
   (dom/div
    nil
    (dom/div {:id "search"} (om/build search {}))
    (dom/div
     #js {:style #js {:clear "both"}}
     (dom/div
      #js {:className "padded hcenter"}
      "Welcome to JellyDB containing jellyfish transcriptomic
      sequences and proteomics data.")
     (dom/a #js {:onClick #(put! (:pub-chan (om/get-shared owner))
                                 {:topic :view :view "blast"
                                  :data nil})}
            "Blast")))))

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
               (condp = (:view view)
                 "home" (om/build home (:data view))
                 "blast" (om/build blast-view (:data view))
                 "blast-waiting" (om/build blast-waiting (:data view))
                 "proteins" (om/build proteins-view (:data view))
                 "proteins-reset" (om/build proteins-reset (:data view)))))))

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
