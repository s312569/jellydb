(ns jellydb.routes.home
  (:require [compojure.core :refer :all]
            [jellydb.views.layout :as layout]
            [hiccup.page :refer [include-js]]))

(defn home
  []
  (layout/common
   [:div {:id "outer"}]
   (include-js "js/react-v0.11.1.js")
   (include-js "js/out/goog/base.js")
   (include-js "/js/app.js")
   (include-js "/js/out/processing.js")
   [:script {:type "text/javascript"} "goog.require(\"jellydb.core\");"]))

(defroutes home-routes
  (GET "/" [] (home)))
