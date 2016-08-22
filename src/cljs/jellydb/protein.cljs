(ns ^:figwheel-always jellydb.protein
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.dataset-view :refer [dataset-view]]
            [jellydb.blast-view :refer [blast-output-view]]
            [jellydb.utilities :as jdbu]))

;; (defn set-visible [owner key]
;;   (let [acc (:acc (om/get-state owner :peptide))
;;         bc (om/get-state owner :been-closed)]
;;     (om/set-state! owner :currentv key)
;;     (om/set-state! owner :visible "block")
;;     (om/set-state! owner :been-closed (remove #{acc} bc))))

;; (defn set-invisible [owner]
;;   (om/set-state! owner :visible "none")
;;   (om/set-state! owner :currentv nil))

;; (defn protein-view [peptide owner]
;;   (reify
;;     om/IInitState
;;     (init-state [_]
;;       {:peptide peptide
;;        :visible (if (:blast peptide)
;;                   "block" "none")
;;        :currentv (if (:blast peptide)
;;                    :blast)
;;        :been-closed []})
;;     om/IWillReceiveProps
;;     (will-receive-props [_ np]
;;       (let [op (om/get-props owner)]
;;         (om/set-state! owner :peptide np)
;;         (om/set-state! owner :currentv :protein)
;;         (cond (some #{(:acc np)} (om/get-state owner :been-closed))
;;               (set-invisible owner)
;;               (:blast np)
;;               (set-visible owner :blast)
;;               (not (= (:acc np) (:acc (:peptide op))))
;;               (set-invisible owner))))
;;     om/IRenderState
;;     (render-state [_ {:keys [peptide currentv accession visible]}]
;;       (let [annos (hash-map :ips (process-ips peptide)
;;                             :gos (process-gos peptide)
;;                             :paths (process-paths peptide))
;;             is-annos? (or (seq (:ips annos))
;;                           (seq (:gos annos))
;;                           (seq (:paths annos)))]
;;         (dom/div
;;          nil
;;          (dom/div
;;           #js {:className "pure-menu pure-menu-horizontal"
;;                :style #js {:position "relative"}}
;;           (dom/ul
;;            #js {:className "pure-menu-list"}
;;            (if (:blast peptide)
;;              (dom/li #js {:className (if (= currentv :blast)
;;                                      "pure-menu-item mselected "
;;                                      "pure-menu-item my-cursor")}
;;                      (dom/a
;;                       #js {:className "pure-menu-link"
;;                            :onClick #(set-visible owner :blast)}
;;                       "Blast output")))
;;            (dom/li #js {:className (if (= currentv :protein)
;;                                      "pure-menu-item mselected "
;;                                      "pure-menu-item my-cursor")}
;;                    (dom/a
;;                     #js {:className "pure-menu-link"
;;                          :onClick #(set-visible owner :protein)}
;;                     "Protein"))
;;            (dom/li #js {:className (if (= currentv :cds)
;;                                      "pure-menu-item mselected"
;;                                      "pure-menu-item my-cursor")}
;;                    (dom/a
;;                     #js {:className "pure-menu-link"
;;                          :onClick #(set-visible owner :cds)}
;;                     "CDS"))
;;            (dom/li #js {:className (if (= currentv :mrna)
;;                                      "pure-menu-item mselected"
;;                                      "pure-menu-item my-cursor")}
;;                    (dom/a
;;                     #js {:className "pure-menu-link"
;;                          :onClick #(set-visible owner :mrna)}
;;                     "mRNA"))
;;            (dom/li #js {:className
;;                         (if (= currentv :annotation)
;;                           "pure-menu-item mselected"
;;                           "pure-menu-item my-cursor")}
;;                    (dom/a
;;                     #js {:className (if-not is-annos?
;;                                       "pure-menu-item pure-menu-disabled my-text"
;;                                       "pure-menu-link")
;;                          :onClick #(if is-annos?
;;                                      (set-visible owner :annotation)
;;                                      false)}
;;                     "Annotations"))
;;            (dom/li #js {:className
;;                         (if (= currentv :homologies)
;;                           "pure-menu-item mselected"
;;                           "pure-menu-item my-cursor")}
;;                    (dom/a
;;                     #js {:className (if-not (seq (:homologies peptide))
;;                                       "pure-menu-item pure-menu-disabled my-text"
;;                                       "pure-menu-link")
;;                          :onClick #(if (seq (:homologies peptide))
;;                                      (set-visible owner :homologies)
;;                                      false)}
;;                     "Homologies"))
;;            (dom/li #js {:className
;;                         (if (= currentv :dataset)
;;                           "pure-menu-item mselected"
;;                           "pure-menu-item my-cursor")}
;;                    (dom/a
;;                     #js {:className "pure-menu-link"
;;                          :onClick #(set-visible owner :dataset)}
;;                     "Datasets"))))
;;          (dom/div
;;           #js {:style #js {:display visible
;;                            :position "relative"}}
;;           (dom/div #js {:style #js {:position "absolute"
;;                                     :top "15"
;;                                     :right "10"
;;                                     :color "#cad2d3"}}
;;                    (dom/a
;;                     #js {:onClick
;;                          #(let [a (conj (om/get-state owner :been-closed)
;;                                         (:acc peptide))]
;;                             (om/set-state! owner :visible "none")
;;                             (om/set-state! owner :currentv nil)
;;                             (om/set-state! owner :been-closed a))
;;                          :style #js {:cursor "pointer"}}
;;                     "Close"))
;;           (condp = currentv
;;             :protein (om/build psview peptide)
;;             :cds (om/build cdsview peptide)
;;             :mrna (om/build mrnaview peptide)
;;             :annotation (om/build annotations annos)
;;             :dataset (om/build dataset-view peptide)
;;             :homologies (om/build homology-view peptide)
;;             :blast (om/build blast-output-view peptide)
;;             nil)))))))
