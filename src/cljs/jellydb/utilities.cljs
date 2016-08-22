(ns ^:figwheel-always jellydb.utilities
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! chan sub put! unsub close! timeout]]
            [ajax.core :refer [POST]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

;; json

(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))

;; logging

(defn log
  [& s]
  (.log js/console (apply str s)))

(defn print-state
  ([owner] (print-state owner nil))
  ([owner not-keys]
   (log (->> (if not-keys
               (apply dissoc (om/get-state owner) not-keys)
               (om/get-state owner))
             (map (fn [[k v]]
                    (str k ":" v " ")))
             (apply str)))))

;; errors

(defn error-redirect
  [m]
  (set! js/window.location (str "/error?m=" (:message m))))

;; components

(defn waiting
  [_ owner]
  (om/component
   (dom/div
    #js {:style #js {:position "absolute" :top "50%" :left "50%"
                     :-webkit-animation "fadein 2s"
                     :-moz-animation "fadein 2s"
                     :-ms-animation "fadein 2s"
                     :-o-animation "fadein 2s"
                     :animation "fadein 2s"}}
    (dom/i #js {:className "fa fa-refresh fa-spin fa-fw"}))))

;; info control

;;new

;; old

(defn pub-info
  ([owner topic data] (pub-info owner topic data nil))
  ([owner topic data view]
   (if view
     (put! (:pub-chan (om/get-shared owner))
           {:topic topic :data data :view view})
     (put! (:pub-chan (om/get-shared owner))
           {:topic topic :data data}))))

(defn change-state!
  [owner topic state & {:keys [data func]
                        :or {data nil
                             func identity}}]
  (let [c (chan)]
    (go
      (put! (:pub-chan (om/get-shared owner))
            (if data
              {:topic topic :chan c :data data}
              {:topic topic :chan c}))
      (let [v (<! c)]
        (if-not (= (func v) (om/get-state owner state))
          (om/set-state! owner state (func v)))
        (close! c)))))

(defn put-state
  [owner e state]
  (put! (:chan e) (om/get-state owner state)))

(defn register-loop
  [owner topic func]
  (let [c (chan)
        nc (:notif-chan (om/get-shared owner))
        events (sub nc topic c)]
    (go
      (loop [e (<! events)]
        (when-not (= (:data e) :end)
          (func owner e)
          (recur (<! events)))
        (unsub nc topic c)))))

(defn unsubscribe
  [owner & topics]
  (let [pc (:pub-chan (om/get-shared owner))]
    (doseq [t topics]
      (put! pc {:topic t :data :end}))))

;; components

(defn select
  [{:keys [records label label-func value-func
           classname selected onchange-func disabled]}
   owner]
  (om/component
   (dom/div
    nil
    (if label (dom/label nil label))
    (apply
     dom/select
     #js {:onChange onchange-func
          :value selected
          :disabled (or disabled false)
          :className (or classname "")}
     (map #(cond (:disabled %)
                 (dom/option
                  #js {:value (value-func %)
                       :disabled "true"}
                  (label-func %))
                 :else
                 (dom/option
                  #js {:value (value-func %)}
                  (label-func %)))
          records)))))
