(ns jellydb.routes.proteins
  (:require [compojure.core :refer :all]
            [jellydb.models.db :as db]
            [clj-biosequence.core :as bs]))

(defroutes proteins-routes
  (GET "/proteins" []
       (proteins {}))
  (POST "/proteins" {:keys [form-params]}
       (proteins form-params)))
