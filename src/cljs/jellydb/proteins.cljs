(ns ^:figwheel-always jellydb.proteins
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [ajax.core :refer [GET POST]]
            [clojure.browser.repl :as repl]
            [cljs.core.async :refer [put! <! >! chan pub sub close! unsub]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [jellydb.protein :as p]
            [jellydb.utilities :as jdbu]))

;; server calls

(defn- get-fasta-key
  [owner]
  (letfn [(h [{:keys [status id msg]}]
            (if (= "success" status)
              (om/set-state! owner :key id)
              (js/alert msg)))]
    (if-let [ids (-> (om/get-state owner :selected) seq)]
      (POST "/id-submit" {:error-handler jdbu/error-handler
                          :params {:i (vec ids)}
                          :handler h
                          :response-format :json
                          :keywords? true})
      (h {:status "fail" :msg "No sequences selected."}))))

(defn- serve-proteins
  [owner]
  (let [o (om/get-state owner :start)
        h (fn [{:keys [status proteins] :as r}]
            (if (= "success" status)
              (om/set-state! owner :proteins proteins)
              (throw (js/Error. "Can not initialise proteins."))))]
    (GET "/proteins" {:params {:o (- (* 20 o) 20)}
                      :handler h
                      :error-handler jdbu/error-handler
                      :response-format :json
                      :keywords? true})))

(defn- init-total-proteins
  [owner]
  (letfn [(h [{:keys [status count] :as r}]
            (if (= "success" status)
              (om/set-state! owner :total (.ceil js/Math (/ count 20)))
              (throw (js/Error. "Error in total protein determination."))))]
    (GET "/protein-count" {:handler h
                           :error-handler jdbu/error-handler
                           :response-format :json
                           :keywords? true})))

;; loops

(defn change-state!
  [owner topic state]
  (let [c (chan)]
    (go
      (put! (:pub-chan (om/get-shared owner)) {:topic topic :chan c})
      (let [v (<! c)]
        (if-not (= v (om/get-state owner state))
          (om/set-state! owner state v))))))

(defn request-loop
  [owner topic state]
  (let [c (chan)
        nc (:notif-chan (om/get-shared owner))
        events (sub nc topic c)]
    (go
      (loop [e (<! events)]
        (when-not (= (:data e) :end)
          (>! (:chan e) (om/get-state owner state))
          (recur (<! events)))
        (unsub nc topic c)))))

(defn- protein-loop
  [owner]
  (let [c (chan)
        nc (:notif-chan (om/get-shared owner))
        events (sub nc :nav c)]
        (go
          (loop [e (<! events)]
            (when-not (= (:data e) :end)
              (om/set-state! owner :start
                             ((:data e) (om/get-state owner :start)))
              (serve-proteins owner)
              (recur (<! events)))
            (unsub nc :nav c)))))

(defn- selected-loop
  [owner]
  (let [c (chan)
        nc (:notif-chan (om/get-shared owner))
        events (sub nc :selected c)]
    (go
      (loop [e (<! events)]
        (when-not (= (:data e) :end)
          (if (some #(= (:data e) %) (om/get-state owner :selected))
            (om/update-state! owner :selected
                              (fn [x] (-> (remove #(= (:data e) %) x) vec)))
            (om/update-state! owner :selected #(conj % (:data e))))
          (recur (<! events)))
        (unsub nc :selected c)))))

(defn- export-loop 
  [owner]
  (let [c (chan)
        nc (:notif-chan (om/get-shared owner))
        events (sub nc :export c)]
        (go
          (loop [e (<! events)]
            (when-not (= (:data e) :end)
              (get-fasta-key owner)
              (om/set-state! owner :key "")
              (recur (<! events)))
            (unsub nc :export c)))))

;; components

(defn- export
  [_ owner]
  (om/component
   (dom/div
    #js {:style #js {:float "right"}}
    (dom/select
     #js {:style #js {:font-size "85%"}
          :value ""
          :className "myinput"
          :onChange #(jdbu/pub-info owner :export (-> % .-target .-value))}
     (dom/option #js {:value "" :disabled ""}
                 "Export selected as ...")
     (dom/option #js {:value "fasta"} "Fasta")))))

(defn- nav
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:start 1
       :total 0})
    om/IWillMount
    (will-mount [_]
      (change-state! owner :pos :start)
      (change-state! owner :total :total))
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (change-state! owner :pos :start)
      (change-state! owner :total :total))
    om/IRenderState
    (render-state [_ {:keys [start total]}]
      (dom/div
       #js {:className "pure-g padded"}
       (dom/div
        #js {:className "pure-u-1-2"}
        (dom/button #js {:style #js {:font-size "85%"}
                         :className "pure-button"
                         :disabled (if (= 1 start) true false)
                         :onClick #(jdbu/pub-info owner :nav (fn [_] 1))}
                    "<<")
        (dom/button #js {:style #js {:font-size "85%"}
                         :className "pure-button"
                         :disabled (if (= 1 start) true false)
                         :onClick #(jdbu/pub-info owner :nav dec)}
                    "<")
        (dom/button #js {:className "buttondisplay"
                         :disabled "true"}
                    (str "Page " start " of " total))
        (dom/button #js {:style #js {:font-size "85%"}
                         :className "pure-button"
                         :disabled (if (= start total) true false)
                         :onClick #(jdbu/pub-info owner :nav inc)}
                    ">")
        (dom/button #js {:style #js {:font-size "85%"}
                         :className "pure-button"
                         :disabled (if (= total start) true false)
                         :onClick #(jdbu/pub-info owner :nav  (fn [_] total))}
                    ">>"))
       (dom/div #js {:className "pure-u-1-2"}
                (om/build export nil))))))

(defn- protein [{:keys [acc description sequence checked]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:selected checked
       :acc acc
       :visible "none"})
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (om/set-state! owner :selected checked)
      (om/set-state! owner :acc (:acc np)))
    om/IRenderState
    (render-state [_ {:keys [selected visible acc]}]
      (dom/div
       #js {:className "pdisplay"}
       (dom/div
        #js {:className "pure-g"}
        (dom/div
         #js {:className "pure-u-1-24"}
         (dom/input
          #js {:type "checkbox"
               :checked checked
               :onChange (fn [_]
                           (jdbu/pub-info owner :selected acc)
                           (om/set-state! owner :selected (not selected)))}))
        (dom/div
         #js {:className "pure-u-23-24"}
         description))
       (dom/div
        #js {:className "pure-g"}
        (dom/div
         #js {:className "pure-u-1-24"}
         "")
        (dom/div
         #js {:className "pure-u-5-24 protsumm"}
         (str (count sequence) " amino acid protein"))
        (dom/div
         #js {:className "pure-u-18-24 protsumm"}
         (str "JellyDB accession: " acc)))
       (dom/div
        #js {:className "pure-g"}
        (dom/div
         #js {:className "pure-u-1-24"}
         "")
        (dom/div
         #js {:className "pure-u-23-24"}
         (dom/div nil
                  (om/build p/protein-view acc))))))))

(defn- init-view-state [owner np]
  (om/set-state! owner :search np)
  (om/set-state! owner :start 1)
  (om/set-state! owner :selected [])
  (om/set-state! owner :key "")
  (init-total-proteins owner)
  (serve-proteins owner))

(defn- checked? [p owner]
  (assoc p :checked
         (if (some (set (list (:acc p)))
                   (om/get-state owner :selected))
           true false)))

(defn proteins-view [search owner]
  (reify
    om/IInitState
    (init-state [_]
      {:start 1
       :total 0
       :proteins nil
       :selected []
       :search nil
       :key ""})
    om/IWillMount
    (will-mount [_]
      (init-view-state owner search)
      (protein-loop owner)
      (export-loop owner)
      (selected-loop owner)
      (request-loop owner :pos :start)
      (request-loop owner :total :total))
    om/IWillUnmount
    (will-unmount [_]
      (let [pc (:pub-chan (om/get-shared owner))]
        (put! pc {:topic :nav :data :end})
        (put! pc {:topic :selected :data :end})
        (put! pc {:topic :export :data :end})
        (put! pc {:topic :pos :data :end})
        (put! pc {:topic :total :data :end})
        (put! pc {:topic :display :data :end})))
    om/IRenderState
    (render-state [_ {:keys [proteins key search visible acc]}]
      (dom/div nil
               (dom/iframe #js {:id "downloadframe"
                                :src (if-not (= key "")
                                       (str "/fetch?k=" key)
                                       "")})
               (dom/div
                #js {:className "thick padded"}
                (str "Showing results matching \"" search "\"."))
               (om/build nav nil)
               (apply dom/div #js {:className "padded"}
                      (om/build-all protein
                                    (map #(checked? % owner) proteins)))
               (om/build nav nil)))))
