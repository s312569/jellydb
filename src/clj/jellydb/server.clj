(ns jellydb.server
  (:require [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :refer (sente-web-server-adapter)])
  (:import java.net.URI))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; the server
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defonce router_ (atom nil))

(defn- user-id
  [r]
  (get-in r [:session :cemerick.friend/identity :current]))

(defonce websocket
  (let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
                connected-uids]}
        (sente/make-channel-socket! sente-web-server-adapter
                                    {:user-id-fn user-id})]
    (atom {:ring-ajax-post ajax-post-fn
           :ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn
           :ch-chsk ch-recv
           :chsk-send! send-fn
           :connected-uids connected-uids})))

(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id)

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defn  stop-router!
  []
  (when-let [stop-f @router_] (stop-f)))

(defn start-router!
  []
  (stop-router!)
  (reset! router_
          (sente/start-server-chsk-router!
           (:ch-chsk @websocket) event-msg-handler)))

(defonce _start-once (start-router!))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; broadcasting
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- fix-bids
  [uid data]
  (let [bids (:bids data)]
    (-> (assoc data :bids bids)
        (assoc :user-bids (filter #(= uid (:username %)) bids)))))

(defmulti broadcast-prep-data (fn [uid data] (:type data)))

(defmethod broadcast-prep-data :project
  [uid resp]
  (update-in resp [:data] #(fix-bids uid %)))

(defmethod broadcast-prep-data :projects
  [uid resp]
  (update-in resp [:data] (fn [x] (map #(fix-bids uid %) x))))

(defmethod broadcast-prep-data :default
  [uid resp]
  resp)

(defn broadcast-update!
  [data]
  (doseq [uid (:any @(:connected-uids @websocket))]
    ((:chsk-send! @websocket) uid
     [::update (broadcast-prep-data uid data)])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; event handlers
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod -event-msg-handler
  :default
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (println (str "Unhandled event jason: " event))
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-from-server event}))))

(defmethod -event-msg-handler
  :chsk/ws-ping
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid (:uid     session)]
    (println (str "This is a ping: " event))
    (when ?reply-fn
      (?reply-fn {:ping-event event}))))

(defmulti save-data :type)

(defmethod -event-msg-handler :biomarket.server/save
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [resp (save-data
              (assoc (:data ?data) :username (user-id ring-req) :type (:type ?data)))]
    (when ?reply-fn
      (?reply-fn resp))))

(defmulti search-key :type)

(defmethod -event-msg-handler :biomarket.server/search
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [resp (search-key
              (assoc (:data ?data) :username (user-id ring-req) :type (:type ?data)))]
    (when ?reply-fn
      (?reply-fn resp))))

(defmulti get-data :type)

(defmethod -event-msg-handler :biomarket.server/get
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [resp (->> (get-data
                   (assoc ?data :username (user-id ring-req) :type (:type ?data)))
                  (broadcast-prep-data (user-id ring-req)))]
    (when ?reply-fn
      (?reply-fn resp))))



