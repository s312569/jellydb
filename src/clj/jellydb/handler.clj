(ns jellydb.handler
  (:require [compojure.route :as route]
            [compojure.core :refer [GET POST defroutes routes]]
            [ring.util.response :refer [resource-response response content-type
                                        header]]
            [jellydb.models.webapi :as wa]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [jellydb.routes.home :refer [home-routes]]
            [jellydb.routes.proteins :refer [proteins-routes]]
            [jellydb.routes.blast :refer [blast-routes]]
            [jellydb.server :as wss]))

(defroutes app-routes
  (route/resources "/")
  ;; (POST  "/proteins" req
  ;;        (let [p (:body req)
  ;;              m (merge p (get @db/req-key-map (:key p)))]
  ;;          (println m)
  ;;          (response (db/return-results m))))
  ;; (POST "/search-key" req
  ;;       (let [p (:body req)]
  ;;         (response (db/get-key p))))
  ;; (POST "/blast-check" req
  ;;       (let [p (:body req)]
  ;;         (response (db/check-blast p))))
  ;; (POST "/select-all" req
  ;;       (let [p (:body req)]
  ;;         (response (db/select-all (merge p (get @db/req-key-map (:key p)))))))
  ;; (POST "/search-info" req
  ;;       (let [p (:body req)]
  ;;         (response (db/search-data (merge p (get @db/req-key-map (:key p)))))))
  (GET "/fetch" [k]
       (-> (wa/dataset-sequences k)
           response
           (content-type "text/plain")
           (header "Content-Disposition"
                   "attachment; filename=sequences.fasta")))
  (GET "/error" [m]
       (do
         (println m)
         (str "There was an error:" m)))
  (GET  "/chsk" req (:ring-ajax-get-or-ws-handshake @wss/websocket req))
  (POST "/chsk" req (:ring-ajax-post @wss/websocket req))
  (route/not-found "Not Found"))

(def app
  (-> (routes home-routes proteins-routes blast-routes app-routes)
      (wrap-defaults (assoc site-defaults :security {:anti-forgery false}))))
