(ns ^:figwheel-always jellydb.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [ajax.core :refer [GET POST]]
            [clojure.browser.repl :as repl]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.proteins :as psv]
            [jellydb.protein :as pv]
            [jellydb.utilities :as jdbu]
            [cljs-http.client :as http]))

;; components

(defn search-submit
  [owner]
  (let [text (om/get-state owner :text)]
    (if-not (= text "")
      (do (put! (:pub-chan (om/get-shared owner))
                {:topic :view :view "proteins"
                 :data text})
          (om/set-state! owner :text ""))
      (js/alert "No search entered!"))))

(defn search
  [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:text ""})
    om/IRenderState
    (render-state [_ {:keys [text]}]
      (dom/div
       #js {:className "pure-g"}
       (dom/div #js {:className "pure-u-4-5"}
                (dom/div #js {:className "padded"}
                         (dom/input
                          #js {:placeholder "Search for sequences ..."
                               :className "myinput pure-u-1"
                               :type "text"
                               :value text
                               :onKeyDown #(if (= 13 (.-which %))
                                             (search-submit owner))
                               :onChange #(jdbu/change % owner)})))
       (dom/div #js {:className "pure-u-1-5"}
                (dom/div #js {:className "padded"}
                         (dom/button
                          #js {:className
                               "pure-button pure-button-primary pure-u-1"
                               :onClick #(search-submit owner)}
                          "Go")))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; home
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn home
  [app owner]
  (om/component
   (dom/div #js {:style #js {:clear "both"}}
            (dom/p nil "Home"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; app control
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn app-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:view "home"
       :data nil})
    om/IDidMount
    (did-mount [_]
      (let [events (sub (:notif-chan (om/get-shared owner)) :view (chan))]
        (go
          (loop [e (<! events)]
            (om/set-state! owner :view (:view e))
            (om/set-state! owner :data (:data e))
            (recur (<! events))))))
    om/IRenderState
    (render-state [_ {:keys [view data]}]
      (dom/div nil
               (condp = view
                 "home" (om/build home {})
                 "proteins" (om/build psv/proteins-view data))))))

(defn outer
  [app owner]
  (om/component
   (dom/div nil
            (dom/div {:id "search"} (om/build search {}))
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
