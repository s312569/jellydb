(ns acme.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [ajax.core :refer [GET POST]]
            [clojure.browser.repl :as repl]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; utilities
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(enable-console-print!)

(defn change
  [e owner]
  (om/set-state! owner :text (-> e .-target .-value)))

(defn log
  [m]
  (.log js/console m))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; server calls
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn error-handler
  [{:keys [status status-text]}]
  (log (str "Something bad happened: " status " " status-text)))

(defn fetch-proteins
  [s o c]
  (letfn [(h [r]
            (put! c r))]
    (GET "/proteins" {:params {:o (- (* 20 o) 20)}
                      :handler h
                      :error-handler error-handler
                      :response-format :json
                      :keywords? true})))

(defn count-proteins
  [s c]
  (letfn [(h [r]
            (let [n (.ceil js/Math (/ (:count r) 20))]
              (put! c {:topic :total-prot :total n})))]
    (GET "/protein-count" {:handler h
                           :error-handler error-handler
                           :response-format :json
                           :keywords? true}))) 

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; search box
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn search
  [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:text ""})
    om/IRenderState
    (render-state [_ state]
      (dom/div
       #js {:className "pure-g"}
       (dom/div #js {:className "pure-u-4-5"}
                (dom/div #js {:className "padded"}
                         (dom/input
                          #js {:placeholder "Search for sequences ..."
                               :className "myinput pure-u-1"
                               :type "text"
                               :value (om/get-state owner :text)
                               :onChange #(change % owner)})))
       (dom/div #js {:className "pure-u-1-5"}
                (dom/div #js {:className "padded"}
                         (dom/button
                          #js {:className
                               "pure-button pure-button-primary pure-u-1"
                               :onClick
                               #(put! (:pub-chan (om/get-shared owner))
                                      {:topic :view :view :proteins
                                       :data (om/get-state owner :text)})}
                          "Go")))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; export
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-fasta-key
  [owner]
  (letfn [(h [r]
            (put! (:pub-chan (om/get-shared owner))
                  (merge {:topic :export} r)))]
    (if-let [ids (-> (om/get-state owner :sel-prots) seq)]
      (POST "/id-submit" {:error-handler error-handler
                          :params {:i (vec ids)}
                          :handler h
                          :response-format :json
                          :keywords? true})
      (h {:status "fail" :msg "No sequences selected."}))))

(defn export-cb-select-loop
  [owner]
  (let [events (sub (:notif-chan (om/get-shared owner)) :selected (chan))]
    (go
      (loop [e (<! events)]
        (if (some #(= (:acc e) %) (om/get-state owner :sel-prots))
          (om/update-state! owner :sel-prots
                            (fn [x] (-> (remove #(= (:acc e) %) x) vec)))
          (om/update-state! owner :sel-prots #(conj % (:acc e))))
        (recur (<! events))))))

(defn export-is-selected?-loop
  [owner]
  (let [events (sub (:notif-chan (om/get-shared owner)) :selected? (chan))]
    (go
      (loop [e (<! events)]
        (if (some #(= (:acc e) %) (om/get-state owner :sel-prots))
          (put! (:chan e) {:acc (:acc e) :checked true})
          (put! (:chan e) {:acc (:acc e) :checked false}))
        (recur (<! events))))))

(defn export-hidden-src-loop
  [owner]
  )

(defn export
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:sel-prots []
       :src ""})
    om/IDidMount
    (did-mount [_]
      (export-cb-select-loop owner)
      (export-is-selected?-loop owner)
      (let [events (sub (:notif-chan (om/get-shared owner)) :export (chan))]
        (go
          (loop [e (<! events)]
            (log "j")
            (condp = (:status e)
              "success" (om/set-state! owner :src (str "/fetch?k=" (:id e)))
              "fail" (js/alert (:msg e)))
            (recur (<! events))))))
    om/IRenderState
    (render-state [_ state]
      (dom/div
       nil
       (dom/iframe #js {:id "downloadframe"
                        :src (om/get-state owner :src)})
       (dom/div
        #js {:style #js {:float "right"}}
        (dom/select
         #js {:style #js {:font-size "85%"}
              :className "myinput"
              :onChange (fn [_] (get-fasta-key owner))}
         (dom/option #js {:value "" :disabled ""}
                     "Export selected as ...")
         (dom/option #js {:value "fasta"} "Fasta")))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; navigation
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn nav
  [hash owner]
  (reify
    om/IInitState
    (init-state [_]
      {:start 1
       :total 0})
    om/IDidMount
    (did-mount [_]
      (let [events (sub (:notif-chan (om/get-shared owner)) :pos (chan))]
        (go
          (loop [e (<! events)]
            (log "pos")
            (om/set-state! owner :start (:start e))
            (recur (<! events)))))
      (let [events (sub (:notif-chan (om/get-shared owner)) :total-prot (chan))]
        (go
          (loop [e (<! events)]
            (om/set-state! owner :total (:total e))
            (recur (<! events))))))
    om/IRenderState
    (render-state [_ {:keys [start total]}]
      (dom/div
       #js {:className "pure-g padded"}
       (dom/div
        #js {:className "pure-u-1-2"}
        (dom/button #js {:style #js {:font-size "85%"}
                         :className "pure-button"
                         :disabled (if (= 1 start)
                                     true false)
                         :onClick #(put! (:pub-chan (om/get-shared owner))
                                         {:topic :nav :func (fn [_] 1)})}
                    "<<")
        (dom/button #js {:style #js {:font-size "85%"}
                         :className "pure-button"
                         :disabled (if (= 1 start)
                                     true false)
                         :onClick #(put! (:pub-chan (om/get-shared owner))
                                         {:topic :nav :func dec})}
                    "<")
        (dom/button #js {:style #js {:font-size "85%"}
                         :className "pure-button"
                         :type "submit" :disabled "true"}
                    (str "Page " start " of " total))
        (dom/button #js {:style #js {:font-size "85%"}
                         :className "pure-button"
                         :disabled (if (= start total)
                                     true false)
                         :onClick #(put! (:pub-chan (om/get-shared owner))
                                         {:topic :nav :func inc})}
                    ">")
        (dom/button #js {:style #js {:font-size "85%"}
                         :className "pure-button"
                         :disabled (if (= total start)
                                     true false)
                         :onClick #(put!
                                    (:pub-chan (om/get-shared owner))
                                    {:topic :nav :func (fn [_]
                                                         total)})}
                    ">>"))
       (dom/div #js {:className "pure-u-1-2"}
                (om/build export {}))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; proteins view
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn protein [{:keys [acc description sequence]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:checked false})
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (let [c (chan)]
        (put! (:pub-chan (om/get-shared owner))
              {:topic :selected? :acc (:acc np) :chan c})
        (go
          (let [r (<! c)]
            (if-not (= (:checked r)
                       (om/get-state owner :checked))
              (om/set-state! owner :checked (:checked r)))))))
    om/IRenderState
    (render-state [_ state]
      (dom/label
       #js {:className "protsumm"}
       (dom/input
        #js {:className "protsumm" :type "checkbox"
             :checked (:checked state)
             :onChange (fn [_]
                         (put! (:pub-chan (om/get-shared owner))
                               {:topic :selected :acc acc})
                         (om/set-state! owner :checked (not (:checked state))))}
        (dom/a #js {:href "#" :width "100%"}
               description)
        (dom/div nil (dom/span #js {:style #js {:paddingRight "15px"}}
                               (str (count sequence) " amino acid protein"))
                 (dom/span nil (str "JellyDB accession: " acc)))
        (dom/div nil (dom/a
                      #js {:href "#"}
                      "Something else")))))))

(defn protein-list [proteins owner]
  (om/component
   (dom/div
    nil
    (om/build nav {})
    (apply dom/div #js {:style #js {:clear "both"}}
           (om/build-all protein proteins))
    (om/build nav {}))))

(defn protein-view [search owner]
  (reify
    om/IInitState
    (init-state [_]
      {:start 1
       :proteins (chan)
       :search search})
    om/IWillMount
    (will-mount [_]
      (fetch-proteins (om/get-state owner :search)
                      (om/get-state owner :start)
                      (om/get-state owner :proteins))
      (go (om/set-state! owner :new (<! (om/get-state owner :proteins))))
      (count-proteins (om/get-state owner :search)
                      (:pub-chan (om/get-shared owner))))
    om/IDidMount
    (did-mount [_]
      (let [events (sub (:notif-chan (om/get-shared owner)) :nav (chan))]
        (go
          (loop [e (<! events)]
            (log "pv")
            (om/set-state! owner :start
                           ((:func e) (om/get-state owner :start)))
            (fetch-proteins (om/get-state owner :search)
                            (om/get-state owner :start)
                            (om/get-state owner :proteins))
            (om/set-state! owner :new (<! (om/get-state owner :proteins)))
            (put! (:pub-chan (om/get-shared owner))
                  {:topic :pos :start (om/get-state owner :start)})
            (recur (<! events))))))
    om/IRenderState
    (render-state [_ {:keys [new]}]
      (dom/div nil
               (om/build protein-list new)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; home
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn home
  [app owner]
  (om/component
   (dom/div #js {:style #js {:clear "both"}}
            (dom/p nil "Home"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; app control
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn app-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:view :home})
    om/IDidMount
    (did-mount [_]
      (let [events (sub (:notif-chan (om/get-shared owner)) :view (chan))]
        (go
          (loop [e (<! events)]
            (log (str e))
            (om/set-state! owner :view (:view e))
            (om/set-state! owner :data (:data e))
            (recur (<! events))))))
    om/IRenderState
    (render-state [_ {:keys [view data]}]
      (dom/div nil
               (condp = view
                 :home (om/build home {})
                 :proteins (om/build protein-view data))))))

(defn outer
  [app owner]
  (om/component
   (dom/div nil
            (dom/div {:id "search"} (om/build search {}))
            (dom/div {:id "data"} (om/build app-view app)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; main
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn main []
  (let [req-chan     (chan)
        pub-chan     (chan)
        notif-chan   (pub pub-chan :topic)]
    ;; server loop
    (om/root
     outer
     app-state
     {:shared {:req-chan   req-chan
               :notif-chan notif-chan
               :pub-chan   pub-chan}
      :target (. js/document (getElementById "t"))})))

(main)
