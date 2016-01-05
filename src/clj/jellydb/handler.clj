(ns jellydb.handler
  (:require [compojure.route :as route]
            [compojure.core :refer [GET POST defroutes routes]]
            [ring.util.response :refer [resource-response response content-type
                                        header]]
            [ring.middleware.json :as middleware]
            [jellydb.models.db :as db]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [jellydb.routes.home :refer [home-routes]]
            [jellydb.routes.proteins :refer [proteins-routes]]))

(defn init []
  (println "jellydb is starting"))

(defn destroy []
  (println "jellydb is shutting down"))

(defroutes app-routes
  (route/resources "/")
  (POST  "/proteins" req
         (let [p (:body req)
               m (merge p (get @db/req-key-map (:key p)))]
           (println m)
           (response (db/return-results m))))
  (POST "/search-key" req
        (let [p (:body req)]
          (response (db/get-key p))))
  (POST "/blast-check" req
        (let [p (:body req)]
          (response (db/check-blast p))))
  (POST "/select-all" req
        (let [p (:body req)]
          (response (db/select-all (merge p (get @db/req-key-map (:key p)))))))
  (POST "/search-info" req
        (let [p (:body req)]
          (response (db/search-data (merge p (get @db/req-key-map (:key p)))))))
  (GET "/fetch" [k]
       (let [m (assoc (get @db/req-key-map k) :id k)]
         (-> (db/return-file m)
             response
             (content-type "application/octet-stream")
             (header "Content-Disposition"
                     "attachment; filename=sequences.fasta"))))
  (route/not-found "Not Found"))

(def app
  (-> (routes home-routes app-routes)
      (middleware/wrap-json-body {:keywords? true})
      (middleware/wrap-json-response)
      (wrap-defaults (assoc site-defaults :security {:anti-forgery false}))))
