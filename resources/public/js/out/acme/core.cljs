(ns ^:figwheel-always acme.core
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

(defn change
  [e owner]
  (om/set-state! owner :text (-> e .-target .-value)))

(defn log
  [m]
  (.log js/console m))

(defn request-loop
  [owner topic state]
  (let [events (sub (:notif-chan (om/get-shared owner)) topic (chan))]
    (go
      (loop [e (<! events)]
        (>! (:chan e) (om/get-state owner state))
        (recur (<! events))))))

(defn change-state!
  [owner topic state]
  (let [c (chan)]
    (go
      (put! (:pub-chan (om/get-shared owner)) {:topic topic :chan c})
      (let [v (<! c)]
        (if-not (= v (om/get-state owner :state))
          (om/set-state! owner state v))))))

(defn pub-info
  [owner topic data]
  (put! (:pub-chan (om/get-shared owner))
        {:topic topic :data data}))

(defn error-handler
  [{:keys [status status-text]}]
  (log (str "Something bad happened: " status " " status-text)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; proteins view
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; server calls

(defn get-fasta-key
  [owner]
  (letfn [(h [{:keys [status id msg]}]
            (if (= "success" status)
              (om/set-state! owner :key id)
              (js/alert msg)))]
    (if-let [ids (-> (om/get-state owner :selected) seq)]
      (POST "/id-submit" {:error-handler error-handler
                          :params {:i (vec ids)}
                          :handler h
                          :response-format :json
                          :keywords? true})
      (h {:status "fail" :msg "No sequences selected."}))))

(defn serve-proteins
  [owner]
  (let [o (om/get-state owner :start)
        h (fn [{:keys [status proteins] :as r}]
            (if (= "success" status)
              (om/set-state! owner :proteins proteins)
              (throw (js/Error. "Can not initialise proteins."))))]
    (GET "/proteins" {:params {:o (- (* 20 o) 20)}
                      :handler h
                      :error-handler error-handler
                      :response-format :json
                      :keywords? true})))

(defn init-total-proteins
  [owner]
  (letfn [(h [{:keys [status count] :as r}]
            (if (= "success" status)
              (om/set-state! owner :total (.ceil js/Math (/ count 20)))
              (throw (js/Error. "Error in total protein determination."))))]
    (GET "/protein-count" {:handler h
                           :error-handler error-handler
                           :response-format :json
                           :keywords? true})))

(defn get-peptide
  [owner]
  (letfn [(h [{:keys [status protein msg]}]
            (if (= "success" status)
              (om/set-state! owner :peptide protein)
              (js/alert msg)))]
    (GET "/peptide" {:error-handler error-handler
                     :params {:id (om/get-state owner :accession)}
                     :handler h
                     :response-format :json
                     :keywords? true})))

;; loops

(defn check-if-checked
  [owner np]
  (let [c (chan)]
    (go
      (put! (:pub-chan (om/get-shared owner)) {:topic :selected?
                                               :data (:acc np)
                                               :chan c})
      (let [r (<! c)]
        (if-not (= r (om/get-state owner :checked))
          (om/set-state! owner :checked r))))))

(defn protein-loop
  [owner]
  (let [events (sub (:notif-chan (om/get-shared owner)) :nav (chan))]
        (go
          (loop [e (<! events)]
            (om/set-state! owner :start ((:data e) (om/get-state owner :start)))
            (serve-proteins owner)
            (recur (<! events))))))

(defn selected-loop
  [owner]
  (let [events (sub (:notif-chan (om/get-shared owner)) :selected (chan))]
    (go
      (loop [e (<! events)]
        (if (some #(= (:data e) %) (om/get-state owner :selected))
          (om/update-state! owner :selected
                            (fn [x] (-> (remove #(= (:data e) %) x) vec)))
          (om/update-state! owner :selected #(conj % (:data e))))
        (recur (<! events))))))

(defn is-selected?-loop
  [owner]
  (let [events (sub (:notif-chan (om/get-shared owner)) :selected? (chan))]
    (go
      (loop [e (<! events)]
        (let [v (some #(= (:data e) %) (om/get-state owner :selected))]
          (if v
            (put! (:chan e) true)
            (put! (:chan e) false)))
        (recur (<! events))))))

(defn export-loop
  [owner]
  (let [events (sub (:notif-chan (om/get-shared owner)) :export (chan))]
        (go
          (loop [e (<! events)]
            (get-fasta-key owner)
            (om/set-state! owner :key "")
            (recur (<! events))))))

;; components

(defn search-submit
  [owner]
  (let [text (om/get-state owner :text)]
    (if-not (= text "")
      (do (put! (:pub-chan (om/get-shared owner))
                {:topic :view :view :proteins
                 :data text})
          (om/set-state! owner :text ""))
      (js/alert "No search entered!"))))

(defn search
  [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:text ""})
    om/IRenderState
    (render-state [_ {:keys [text]}]
      (dom/div
       #js {:className "pure-g"}
       (dom/div #js {:className "pure-u-4-5"}
                (dom/div #js {:className "padded"}
                         (dom/input
                          #js {:placeholder "Search for sequences ..."
                               :className "myinput pure-u-1"
                               :type "text"
                               :value text
                               :onKeyDown #(if (= 13 (.-which %))
                                             (search-submit owner))
                               :onChange #(change % owner)})))
       (dom/div #js {:className "pure-u-1-5"}
                (dom/div #js {:className "padded"}
                         (dom/button
                          #js {:className
                               "pure-button pure-button-primary pure-u-1"
                               :onClick #(search-submit owner)}
                          "Go")))))))

(defn export
  [_ owner]
  (om/component
   (dom/div
    #js {:style #js {:float "right"}}
    (dom/select
     #js {:style #js {:font-size "85%"}
          :value ""
          :className "myinput"
          :onChange #(pub-info owner :export (-> % .-target .-value))}
     (dom/option #js {:value "" :disabled ""}
                 "Export selected as ...")
     (dom/option #js {:value "fasta"} "Fasta")))))

(defn nav
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:start 1
       :total 0})
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
                         :onClick #(pub-info owner :nav (fn [_] 1))}
                    "<<")
        (dom/button #js {:style #js {:font-size "85%"}
                         :className "pure-button"
                         :disabled (if (= 1 start) true false)
                         :onClick #(pub-info owner :nav dec)}
                    "<")
        (dom/button #js {:className "buttondisplay"
                         :disabled "true"}
                    (str "Page " start " of " total))
        (dom/button #js {:style #js {:font-size "85%"}
                         :className "pure-button"
                         :disabled (if (= start total) true false)
                         :onClick #(pub-info owner :nav inc)}
                    ">")
        (dom/button #js {:style #js {:font-size "85%"}
                         :className "pure-button"
                         :disabled (if (= total start) true false)
                         :onClick #(pub-info owner :nav  (fn [_] total))}
                    ">>"))
       (dom/div #js {:className "pure-u-1-2"}
                (om/build export nil))))))

(defn protein [{:keys [acc description sequence]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:checked false})
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (check-if-checked owner np))
    om/IRenderState
    (render-state [_ {:keys [checked]}]
      (dom/label
       #js {:className "protsumm"}
       (dom/input
        #js {:className "protsumm" :type "checkbox"
             :checked checked
             :onChange (fn [_]
                         (pub-info owner :selected acc)
                         (om/set-state! owner :checked (not checked)))}
        (dom/a #js {:width "100%"
                    :onClick #(put! (:pub-chan (om/get-shared owner))
                                    {:topic :view :view :protein
                                     :data acc})}
               description)
        (dom/div nil (dom/span #js {:style #js {:paddingRight "15px"}}
                               (str (count sequence) " amino acid protein"))
                 (dom/span nil (str "JellyDB accession: " acc)))
        (dom/div nil (dom/a
                      #js {:href "#"}
                      "Something else")))))))

(defn proteins-view [search owner]
  (reify
    om/IInitState
    (init-state [_]
      {:start 1
       :total 0
       :proteins nil
       :selected []
       :search search
       :key ""})
    om/IWillMount
    (will-mount [_]
      (serve-proteins owner)
      (init-total-proteins owner)
      (request-loop owner :pos :start)
      (request-loop owner :total :total)
      (protein-loop owner)
      (selected-loop owner)
      (is-selected?-loop owner)
      (export-loop owner))
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (om/set-state! owner :search np))
    om/IRenderState
    (render-state [_ {:keys [proteins key search]}]
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
                      (om/build-all protein proteins))
               (om/build nav nil)))))

(defn protein-view [acc owner]
  (reify
    om/IInitState
    (init-state [_]
      {:accession acc
       :peptide nil})
    om/IWillMount
    (will-mount [_]
      (get-peptide owner))
    om/IRenderState
    (render-state [_ {:keys [accession peptide]}]
      (dom/div nil
               (dom/div
                #js {:className "thick padded"}
                (str accession " - " (:description peptide)))
               (dom/div
                #js {:className "pure-g"}
                (dom/div #js {:className "pure-u-1-5 thick padded"}
                         "Accession:")
                (dom/div #js {:className "pure-u-3-5 padded"}
                         accession))
               (dom/div
                #js {:className "pure-g"}
                (dom/div #js {:className "pure-u-1-5 thick padded"}
                         "Description:")
                (dom/div #js {:className "pure-u-3-5 padded"}
                         (:description peptide)))
               (dom/div
                #js {:className "pure-g"}
                (dom/div #js {:className "pure-u-1-5 thick padded"}
                         "Protein sequence:")
                (dom/div #js {:className "pure-u-3-5 padded"}
                         (:sequence peptide)))))))

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
      {:view :home
       :data nil})
    om/IDidMount
    (did-mount [_]
      (let [events (sub (:notif-chan (om/get-shared owner)) :view (chan))]
        (go
          (loop [e (<! events)]
            (om/set-state! owner :view (:view e))
            (om/set-state! owner :data (:data e))
            (recur (<! events))))))
    om/IRenderState
    (render-state [_ {:keys [view data]}]
      (dom/div nil
               (condp = view
                 :home (om/build home {})
                 :proteins (om/build proteins-view data)
                 :protein (om/build protein-view data))))))

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
    (om/root
     outer
     nil
     {:shared {:req-chan   req-chan
               :notif-chan notif-chan
               :pub-chan   pub-chan}
      :target (. js/document (getElementById "t"))})))

(main)
