(ns ^:figwheel-always jellydb.blast-view
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :refer [split]]
            [jellydb.utilities :as jdbu]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; blast output view
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- alignment [as owner]
  (om/component
   (dom/pre nil as)))

(defn- fix-alignment [as]
  (let [ls (split as #"\n+")]
    (->> (map (fn [x y]
                (str x y))
              (apply concat
                     (repeat (list "Query  " "       " "Hit    ")))
              ls)
         (map (fn [x y]
                (str y x))
              (apply concat (repeat (list \newline \newline
                                          (str \newline \newline)))))
         (apply str))))

(defn hsp [hsp]
  (om/component
   (dom/div
    nil
    (dom/div
     #js {:className "pure-u-5-5 thick hcenter greyed"}
     (str "HSP " (:Hsp_num hsp)))
    (dom/div
     #js {:className "pure-u-5-5 tbpadded"}
     (str "Identity: " (:Hsp_identity hsp) "; "
          "Positive: " (:Hsp_positive hsp) "; "
          "Bits: " (:Hsp_bit-score hsp) "; "
          "E-value: " (:Hsp_evalue hsp)))
    (dom/div
     #js {:className "pure-u-5-5 tbpadded"}
     (om/build alignment (:alignment hsp))))))

(defn blast-output-view [peptide owner]
  (om/component
   (dom/div
    nil
    (dom/div #js {:className "tbpadded"} "")
    (apply dom/div #js {:className "tbpadded"} (om/build-all hsp (:hsps peptide))))))
