(ns jellydb.routes.home
  (:require [compojure.core :refer :all]
            [jellydb.views.layout :as layout]
            [hiccup.page :refer [include-js]]))

(defn home
  []
  (layout/common
   [:div.hcenter
    [:div {:style "clear:both"}
     [:div.padded ""]
     [:div.hcenter.hdisplay
      [:h3 "Welcome to JellyDB"]
      [:p "Welcome to JellyDB containing jellyfish transcriptomic
           sequences and proteomics data. Welcome to JellyDB
           containing jellyfish transcriptomic sequences and
           proteomics data. Welcome to JellyDB containing jellyfish
           transcriptomic sequences and proteomics data."]
      [:a.flinka {:href "#"} "Contact us."]]
     [:div.pure-g
      [:div.pure-u-1-1
       [:div.hdisplay.hcenter "Search for sequences ..."]]
      [:a {:href "#"}
       [:div.pure-u-11-24
        [:h1 "Blast"]
        [:img {:src "/imgs/alignment-image-p532.png"
               :style "width:100%;height:100px"}]
        [:p "Blast protein and nucleic acid sequences against the
             JellyDB."]]]
      [:div.pure-u-2-24 ""]
      [:a {:href "#"}
       [:div.pure-u-11-24
        [:div.hdisplay.hcenter.my-cursor
         [:h1 "Download Datasets"]
         [:img {:src "/imgs/alignment-image-p532.png"
                :style "width:100%;height:100px"}]
         [:p "Download annotated transcriptomic and proteomic
              datasets."]]]]
      [:div.pure-u-1-1
       [:div.hdisplay.hcenter
        [:h1 "Database statistics"]
        [:p "Database statistics here"]]]]]]))

(defroutes home-routes
  (GET "/" [] (home)))
