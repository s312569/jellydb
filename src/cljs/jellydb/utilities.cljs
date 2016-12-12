(ns ^:figwheel-always jellydb.utilities
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! chan sub put! unsub close! timeout]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

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

(defn select
  [{:keys [records label label-func value-func
           classname selected onchange-func disabled
           width]}
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
          :className (or classname "")
          :style #js {:width (or width "")}}
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

(defn nav-links
  [current]
  (let [ls {"Home" "/" "Blast" "/blast" "Datasets" "#"}]
    (apply dom/div
           nil
           (->> (mapcat (fn [[k v]]
                          [(dom/a #js {:href v} k)
                           (dom/span nil " | ")])
                        (dissoc ls current))
                drop-last))))
