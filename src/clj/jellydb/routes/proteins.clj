(ns jellydb.routes.proteins
  (:require [compojure.core :refer :all]
            [jellydb.models.db :as db]
            [clj-biosequence.core :as bs]
            [jellydb.views.layout :as layout]
            [hiccup.page :refer [include-js]]))

(defn- proteins
  [form-data]
  (layout/common
   (include-js "http://fb.me/react-0.11.1.js")
   (include-js "js/out/goog/base.js")
   (include-js "/js/app.js")
   (include-js "/js/out/processing.js")
   [:script {:type "text/javascript"} "goog.require(\"jellydb.core\");"]))

(defroutes proteins-routes
  (GET "/psearch" []
       (proteins [] (proteins))))
