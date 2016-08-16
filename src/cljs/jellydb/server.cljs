(ns ^:figwheel-always jellydb.server
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan pub sub unsub]]
            [clojure.string :as str]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.utilities :as ut]
            [taoensso.sente  :as sente :refer (cb-success?)]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; websocket server
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defonce app-state
  (let [req-chan (chan)
        pub-chan (chan)
        notif-chan (pub pub-chan :topic)
        {:keys [chsk ch-recv send-fn state]}
        (sente/make-channel-socket! "/chsk" {:type :auto})]
    (atom {:mounted-projects {}
           :req-chan req-chan
           :notif-chan notif-chan
           :pub-chan pub-chan
           :chsk chsk
           :ch-chsk ch-recv
           :chsk-send! send-fn
           :chsk-state state})))

(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id)

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defonce router_ (atom nil))

(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))

(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-client-chsk-router!
     (:ch-chsk @app-state) event-msg-handler)))

(defonce _start-once (start-router!))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; utilities
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn save-data
  ([{:keys [type data] :as m}] (save-data m nil))
  ([{:keys [type data] :as m} rf]
   ((:chsk-send! @app-state)
    [::save m] 5000 rf)))

(defn get-data
  [{:keys [type] :as m} rf]
  ((:chsk-send! @app-state) [::get m] 5000 rf))

(defn get-data-check
  [m t o]
  (get-data m #(if (= :success (:status %))
                 (om/set-state! o t (:data %))
                 (ut/error-redirect))))

(defn search-key
  [{:keys [type data] :as m} rf]
  ((:chsk-send! @app-state) [::search m] 5000 rf))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; publishing events
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn default-publish
  [{:keys [type data]} topic]
  (put! (:pub-chan @app-state)
        {:topic topic :type type :data data}))

(defmulti publish-update :type)

(defmethod publish-update :default
  [{:keys [type data]}]
  (ut/log "Unhandled publish: " data))

(defmethod publish-update :project
  [{:keys [type data]}]
  (put! (:pub-chan @app-state)
        {:topic {:project (:id data)} :type type :data data}))

(defmethod publish-update :skills
  [{:keys [type data]}]
  (put! (:pub-chan @app-state)
        {:topic {:skills (:uid data)} :type type :data (dissoc data :uid)}))

(defmethod publish-update :amend-project-status
  [{:keys [type data]}]
  (put! (:pub-chan @app-state)
        {:topic :amend-project-status :type type :data data}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; broadcast receipt
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti dispatch-broadcast first)

(defmethod dispatch-broadcast :biomarket.server/update
  [[type data]]
  (publish-update data))

(defmethod dispatch-broadcast :default
  [recvd]
  (ut/log "Unhandled dispatch: " recvd))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; handlers
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event]}]
  (ut/log (str "Unhandled event: " event)))

(defmethod -event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (:first-open? ?data)
    (ut/log (str "Channel socket successfully established!: " ?data))
    (ut/log (str "Channel socket state change: " ?data))))

(defmethod -event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (dispatch-broadcast ?data))

(defmethod -event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (ut/log (str "Handshake: " ?data))))
