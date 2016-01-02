(ns ^:figwheel-always jellydb.sequence-views
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

;; protein formats

(defn- numbered-format [sequence]
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

(defn- fasta-format [peptide key]
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

;; views

(defn psview [peptide owner]
  (reify
    om/IInitState
    (init-state [_]
      {:format :fasta})
    om/IRenderState
    (render-state [_ {:keys [format]}]
      (dom/div #js {:className "tbpadded"}
               (dom/div
                #js {:className "tbpadded"}
                (dom/a #js {:onClick
                            #(om/set-state! owner :format :fasta)
                            :className
                            (if (= format :fasta)
                              "flinki" "flinka")}
                       "Fasta")
                "|"
                (dom/a #js {:onClick
                            #(om/set-state! owner :format :ladder)
                            :className
                            (if (= format :ladder)
                              "flinki" "flinka")}
                       "Numbered"))
               (dom/pre
                #js {:className "sequence-fixed"}
                (if (= format :ladder)
                  (numbered-format (:sequence peptide))
                  (fasta-format peptide :sequence)))))))

(defn cdsview [peptide owner]
  (reify
    om/IInitState
    (init-state [_]
      {:format :fasta})
    om/IRenderState
    (render-state [_ {:keys [format]}]
      (dom/div #js {:className "tbpadded"}
               (dom/div
                #js {:className "tbpadded"}
                (dom/a #js {:onClick
                            #(om/set-state! owner :format :fasta)
                            :className
                            (if (= format :fasta)
                              "flinki" "flinka")}
                       "Fasta")
                "|"
                (dom/a #js {:onClick
                            #(om/set-state! owner :format :ladder)
                            :className
                            (if (= format :ladder)
                              "flinki" "flinka")}
                       "Numbered"))
               (dom/pre
                #js {:className "sequence-fixed"}
                (if (= format :ladder)
                  (numbered-format (:cds peptide))
                  (fasta-format peptide :cds)))))))

(defn mrnaview [peptide owner]
  (reify
    om/IInitState
    (init-state [_]
      {:format :fasta})
    om/IRenderState
    (render-state [_ {:keys [format]}]
      (dom/div #js {:className "tbpadded"}
               (dom/div
                #js {:className "tbpadded"}
                (dom/a #js {:onClick
                            #(om/set-state! owner :format :fasta)
                            :className
                            (if (= format :fasta)
                              "flinki" "flinka")}
                       "Fasta")
                "|"
                (dom/a #js {:onClick
                            #(om/set-state! owner :format :ladder)
                            :className
                            (if (= format :ladder)
                              "flinki" "flinka")}
                       "Numbered"))
               (dom/pre
                #js {:className "sequence-fixed"}
                (if (= format :ladder)
                  (numbered-format (:mrna peptide))
                  (fasta-format peptide :mrna)))))))
