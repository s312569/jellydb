(ns ^:figwheel-always jellydb.search
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :refer [trim]]
            [jellydb.utilities :as jdbu]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; search box
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn search-submit
  [owner]
  (let [h (fn [{:keys [status id count msg]}]
            (if (= "success" status)
              (jdbu/pub-info owner :view {:key id :total count :type "text-search"}
                             "proteins")
              (js/alert msg)))
        t (om/get-state owner :text)
        text (if t (trim t) "")]
    (if-not (= text "")
      (jdbu/post-params "/search-key" {:query text :type "text-search"} h)
      (js/alert "No search entered!"))))

(defn search
  [placeholder owner]
  (reify
    om/IInitState
    (init-state [_]
      {:text ""
       :ph placeholder})
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (om/set-state! owner :ph np)
      (om/set-state! owner :text ""))
    om/IRenderState
    (render-state [_ {:keys [text ph]}]
      (dom/div
       #js {:className "pure-g"}
       (dom/div #js {:className "pure-u-4-5"}
                (dom/div nil
                         (dom/input
                          #js {:placeholder ph
                               :className "myinput pure-u-1"
                               :type "text"
                               :value text
                               :onKeyDown #(if (= 13 (.-which %))
                                             (search-submit owner))
                               :onChange
                               #(om/set-state! owner :text
                                               (-> %  .-target .-value))})))
       (dom/div #js {:className "pure-u-1-5"}
                (dom/div nil
                         (dom/button
                          #js {:className
                               "pure-button pure-button-primary pure-u-1"
                               :onClick #(search-submit owner)}
                          "Go")))))))


