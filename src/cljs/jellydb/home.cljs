(ns ^:figwheel-always jellydb.home
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.utilities :as jdbu]
            [jellydb.search :refer [search]]
            [jellydb.links :refer [nav-links]]
            [jellydb.server :as serve]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; home
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn home
  [app owner]
  (om/component
   (dom/div
    #js {:className "hcenter"}
    (dom/div
     #js {:style #js {:clear "both"}}
     (dom/div #js {:className "padded"} "")
     (dom/div
      #js {:className "hdisplay hcenter"}
      (dom/h3 nil "Welcome to JellyDB")
      (dom/p nil "Welcome to JellyDB containing jellyfish transcriptomic
      sequences and proteomics data. Welcome to JellyDB containing
      jellyfish transcriptomic sequences and proteomics data. Welcome
      to JellyDB containing jellyfish transcriptomic sequences and
      proteomics data.")
      (dom/a #js {:onClick #(jdbu/pub-info owner :view nil "contact")
                  :className "flinka"}
             "Contact us."))
     (dom/div
      #js {:className "pure-g"}
      (dom/div
       #js {:className "pure-u-1-1"}
       (dom/div
        #js {:className "hdisplay hcenter"}
        (om/build search "Search for sequences ...")))
      (dom/div
       #js {:className "pure-u-11-24"
            :onClick #(jdbu/pub-info owner :view nil "blast")}
       (dom/div
        #js {:className "hdisplay hcenter my-cursor"}
        (dom/h1 nil "Blast")
        (dom/img #js {:src "/imgs/alignment-image-p532.png"
                      :style #js {:width "100%"
                                  :height "100px"}})
        (dom/p nil
               "Blast protein and nucleic acid sequences against the
               JellyDB.")))
      (dom/div #js {:className "pure-u-2-24"} "")
      (dom/div
       #js {:className "pure-u-11-24"
            :onClick #(jdbu/pub-info owner :view nil "datasets")}
       (dom/div
        #js {:className "hdisplay hcenter my-cursor"}
        (dom/h1 nil "Download Datasets")
        (dom/img #js {:src "/imgs/alignment-image-p532.png"
                      :style #js {:width "100%"
                                  :height "100px"}})
        (dom/p nil
               "Download annotated transcriptomic and proteomic
               datasets.")))
      (dom/div
       #js {:className "pure-u-1-1"}
       (dom/div
        #js {:className "hdisplay hcenter"}
        (dom/h1 nil "Database statistics")
        (dom/p nil
               "Database statistics here"))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; init
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export init []
  (om/root home
           nil
           {:target (. js/document (getElementById "t"))
            :shared @serve/app-state}))
