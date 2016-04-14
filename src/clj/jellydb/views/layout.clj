(ns jellydb.views.layout
  (:require [hiccup.page :refer [html5 include-css include-js]]))

(defn common [& body]
  (html5
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:content "width=device-width, initial-scale=1.0"
            :name "viewport"}]
    ;; [:link {:href "http://yui.yahooapis.com/pure/0.6.0/pure-min.css" :rel "stylesheet"}]
    ;; [:link {:rel "stylesheet" :href "http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css"}]
    [:title "JellyDB"]
    (include-css "/css/pure-release-0.6.0/pure-min.css")
    (include-css "/css/pure-release-0.6.0/grids-responsive-min.css")
    (include-css "/css/layout.css")
    (include-css "/css/proteins.css")
    (include-css "/css/buttons.css")
    (include-css "/css/loader.css")
    (include-css "/css/home-links.css")]
    [:body
     [:div {:id "layout"}
      [:div {:id "main"}
       [:div {:class "header"}
        [:h1 "JellyDB"]
        [:h2 "A jellyfish sequence server"]]
       [:div {:class "content" :id "t" :overflow "hidden"}
        body]]]
     [:footer {:class "container"}
      [:div {:id "footer-bottom" :class "grid12 first"}
       [:p ""]]]]))
