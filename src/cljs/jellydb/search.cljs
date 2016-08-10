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

(defn get-search-key
  [owner text]
  (ut/log "here")
  (serve/search-key {:type :text :data text}
                    #(if (= "success" (:status %))
                       (do (om/set-state! owner :skey (:key %))
                           (ut/log (:key %)))
                       false)))

(defn search-button
  [text owner]
  (reify
    om/IInitState
    (init-state [_]
      {:skey nil})
    om/IRenderState
    (render-state [_ {:keys [skey]}]
      (dom/div
       #js {:className "pure-u-1-5"}
       (dom/input #js {:type "hidden" :value skey :name "searchkey"})
       (dom/input
        #js {:className
             (if-not (= text "")
               "pure-button pure-button-primary pure-u-1"
               "pure-button pure-button-primary pure-u-1 pure-button-disabled")
             :type "submit"
             :onSubmit (fn [_] (get-search-key owner text))
             :value "Go"})))))

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
        (dom/form
         #js {:method "POST" :action "/proteins" :className "pure-form pure-g"}
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
                         #(om/set-state! owner :text
                                         (-> %  .-target .-value))})))
         (om/build search-button t))))))


