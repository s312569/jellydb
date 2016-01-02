(ns jellydb.views.layout
  (:require [hiccup.page :refer [html5 include-css include-js]]))

(defn common [& body]
  (html5
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:content "width=device-width, initial-scale=1.0"
            :name "viewport"}]
    [:link {:href "http://yui.yahooapis.com/pure/0.6.0/pure-min.css" :rel "stylesheet"}]
    [:link {:rel "stylesheet" :href "http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css"}]
    [:title "JellyDB"]
    (include-css "/css/layout.css")
    (include-css "/css/proteins.css")
    (include-css "/css/buttons.css")
    (include-css "/css/loader.css")]
    [:body
     [:div {:id "layout"}
      [:a {:href "#menu" :id "menuLink" :class "menu-link"}
       [:span]]
      [:div {:id "menu"}
       [:div {:class "pure-menu"}
        [:a {:class "pure-menu-heading" :href "#"} "JellyDB"]
        [:ul {:class "pure-menu-list"}
         [:li {:class "pure-menu-item"}
          [:a {:href "#" :class "pure-menu-link"} "Home"]]
         [:li {:class "pure-menu-item"}
          [:a {:href "#" :class "pure-menu-link"} "Blast"]]
         [:li {:class "pure-menu-item"}
          [:a {:href "#" :class "pure-menu-link"} "Contact"]]
         [:li {:class "pure-menu-item"}
          [:a {:href "#" :class "pure-menu-link"} "Download Data"]]
         [:li {:class "pure-menu-item"}
          [:a {:href "#" :class "pure-menu-link"} "Something else"]]]]]
      [:div {:id "main"}
       [:div {:class "header"}
        [:h1 "JellyDB"]
        [:h2 "A jellyfish sequence server"]]
       [:div {:class "content" :id "t" :overflow "hidden"}
        body]]]
     [:footer {:class "container"}
      [:div {:id "footer-bottom" :class "grid12 first"}
       [:p "2013 Copyright Info"]]]]))
