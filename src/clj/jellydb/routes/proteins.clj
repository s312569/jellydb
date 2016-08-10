(ns jellydb.routes.proteins
  (:require [compojure.core :refer :all]
            [jellydb.models.db :as db]
            [jellydb.views.layout :as layout]
            [hiccup.page :refer [include-js]]))

(defn- proteins
  [{:keys [search key]}]
  (layout/common
   (include-js "js/react-v0.11.1.js")
   (include-js "js/out/goog/base.js")
   (include-js "/js/app.js")
   (include-js "/js/out/processing.js")
   (str "<script>jellydb.proteins.init(\"" key "\");</script>")))

(defroutes proteins-routes
  (POST "/proteins" request
        ;;(proteins (:params request))
        (str request)
        ))
