(ns ^:figwheel-always jellydb.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [ajax.core :refer [GET POST]]
            [clojure.browser.repl :as repl]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.utilities :as jdbu]
            [jellydb.search :refer [search]]
            [jellydb.proteins :as proteins]
            [jellydb.links :refer [nav-links]]
            [jellydb.datasets :refer [datasets-view]]
            [jellydb.contact :refer [contact-view]]
            [jellydb.server :as serve]
            [jellydb.home :as home]
            [jellydb.blast :as blast]
            [cljs-http.client :as http]))

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
                        (om/build nav-links (:view view)))))))

(defn outer
  [app owner]
  (om/component
   (dom/div nil
            (dom/div {:id "data"}
                     (om/build app-view app)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; main
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export init []
  (om/root outer
           nil
           {:target (. js/document (getElementById "t"))
            :shared @serve/app-state}))

;; (defn main []
;;   (let [req-chan     (chan)
;;         pub-chan     (chan)
;;         notif-chan   (pub pub-chan :topic)]
;;     (om/root
;;      outer
;;      nil
;;      {:shared {:req-chan   req-chan
;;                :notif-chan notif-chan
;;                :pub-chan   pub-chan}
;;       :target (. js/document (getElementById "t"))})))

;;(main)

