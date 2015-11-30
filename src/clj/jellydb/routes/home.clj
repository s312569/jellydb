(ns jellydb.routes.home
  (:require [compojure.core :refer :all]
            [jellydb.views.layout :as layout]
            [hiccup.page :refer [include-js]]))

(defn home
  []
  (layout/common
   [:div {:id "outer"}]
   (include-js "http://fb.me/react-0.11.1.js")
   (include-js "js/out/goog/base.js")
   (include-js "/js/jquery-1.11.2.min.js")
   (include-js "/js/app.js")
   [:script {:type "text/javascript"} "goog.require(\"jellydb.core\");"]))

(defroutes home-routes
  (GET "/" [] (home)))
