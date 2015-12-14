(ns ^:figwheel-always jellydb.utilities
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]))

(defn numbered-format [sequence]
  (let [l (count sequence)
        r (partition-all 70 (range 1 (+ 1 l)))
        n (let [c (atom 0)]
            (map #(->> (map (fn [x]
                              (let [n (-> (swap! c (fn [x] (+ x 10)))
                                          str
                                          count)]
                                (str (apply str (repeat (- 10 n) " "))
                                     @c)))
                            (partition 10 %))
                       (apply str))
                 r))
        d (map #(->> (map (fn [x]
                            (if (= 0 (mod x 10))
                              "|" "-")) %)
                     (apply str))
               r)
        s (->> (partition-all 70 sequence)
               (map #(apply str %)))]
    (->> (interleave n d s)
         (interpose \newline)
         (apply str))))

(defn fasta-format [peptide key]
  (str ">"
       (->> (subs (:description peptide) 0 67)
            (map #(apply str %))
            (apply str))
       "..."
       \newline
       (->> (partition-all 70 (key peptide))
            (map #(apply str %))
            (interpose \newline)
            (apply str))))

(defn change
  [e owner]
  (om/set-state! owner :text (-> e .-target .-value)))

(defn log
  [m]
  (.log js/console m))

(defn print-state
  ([owner] (print-state owner nil))
  ([owner not-keys]
   (->> (if not-keys
          (apply dissoc (om/get-state owner) not-keys)
          (om/get-state owner))
        (map (fn [[k v]]
               (str k ":" v " ")))
        (apply str))))

(defn pub-info
  [owner topic data]
  (put! (:pub-chan (om/get-shared owner))
        {:topic topic :data data}))

(defn error-handler
  [{:keys [status status-text]}]
  (log (str "Something bad happened: " status " " status-text)))
