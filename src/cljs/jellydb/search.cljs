(ns ^:figwheel-always jellydb.search
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.server :as serve]
            [jellydb.utilities :as ut]
            [clojure.string :refer [trim]]
            [jellydb.utilities :as jdbu]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; search box
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- search-button
  [text owner]
  (reify
    om/IInitState
    (init-state [_]
      {:skey nil
       :clicked nil})
    om/IRenderState
    (render-state [_ {:keys [skey clicked]}]
      (if skey
        (set! js/window.location (str "/prots/" skey "/" 0)))
      (dom/div
       #js {:className "pure-u-1-5"}
       (dom/button
        #js {:className
             (if-not (= text "")
               "pure-button pure-button-primary pure-u-1"
               "pure-button pure-button-primary pure-u-1 pure-button-disabled")
             :onClick
             #(if-not (= text "")
                (do (om/set-state! owner :clicked true)
                    (serve/search-key {:type :text :data text}
                                      (fn [x] (if (= :success (:status x))
                                                (om/set-state! owner :skey (:key x))
                                                (ut/error-redirect))))))}
        (if clicked
          (dom/i #js {:className "fa fa-spinner fa-spin" :aria-hidden "true"})
          "Go"))))))

(defn search
  [placeholder owner]
  (reify
    om/IInitState
    (init-state [_]
      {:text ""
       :ph placeholder})
    om/IRenderState
    (render-state [_ {:keys [text ph]}]
      (let [t (trim text)]
        (dom/div
         nil
         (dom/div
          #js {:className "pure-u-4-5"}
          (dom/div nil
                   (dom/input
                    #js {:name "search"
                         :placeholder ph
                         :className "myinput pure-u-1"
                         :type "text"
                         :value (str t)
                         :onChange
                         #(om/set-state! owner :text (-> %  .-target .-value))})))
         (om/build search-button t))))))


