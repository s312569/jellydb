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

;; (defroutes app-routes
;;   (GET  "/" [] (resource-response "index.html" {:root "public"}))
;;   (GET  "/proteins" [o] (response (db/get-all-proteins 0)))
;;   (route/resources "/")
;;   (route/not-found "Page not found"))

(defn init []
  (println "jellydb is starting"))

(defn destroy []
  (println "jellydb is shutting down"))

(defroutes app-routes
  (route/resources "/")
  (GET  "/proteins" [o]
        (response (db/get-all-proteins o)))
  (POST "/id-submit" req
        (let [p (:body req)]
          (response (db/proteins-key (last p)))))
  (GET "/peptide" [id]
       (response (db/get-pep id)))
  (GET "/fetch" [k]
       (-> (db/fasta-proteins k)
           response
           (content-type "application/octet-stream")
           (header "Content-Disposition" "attachment; filename=sequences.fasta")))
  (GET "/protein-count" []
       (response (db/count-query)))
  (route/not-found "Not Found"))

(def app
  (-> (routes home-routes app-routes)
      (middleware/wrap-json-body)
      (middleware/wrap-json-response)
      (wrap-defaults (assoc site-defaults :security {:anti-forgery false}))))
