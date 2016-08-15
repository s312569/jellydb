(ns ^:figwheel-always jellydb.proteins
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! chan]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [jellydb.search :as ts]
            [jellydb.server :as serve]
            [jellydb.utilities :as ut]
            [secretary.core :as sec :refer-macros [defroute]]
            [accountant.core :as acc]))

(defonce app-state (atom {:offset 0 :key nil :selected []}))

;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ;; server calls
;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defn- get-export-key
;;   [owner type]
;;   (let [h (fn [{:keys [status id msg]}]
;;             (if (= "success" status)
;;               (om/set-state! owner :ekey id)
;;               (js/alert msg)))]
;;     (if-let [ids (-> (om/get-state owner :selected) seq)]
;;       (jdbu/post-params "/search-key" {:ids (vec ids) :type type} h)
;;       (h {:status "fail" :msg "No sequences selected."}))))

;; (defn- get-fasta-key
;;   [owner type]
;;   (let [h (fn [{:keys [status count id msg]}]
;;             (if (= "success" status)
;;               (do (om/set-state! owner :total count)
;;                   (om/set-state! owner :key id))
;;               (js/alert msg)))]
;;     (if-let [ids (-> (om/get-state owner :selected) seq)]
;;       (jdbu/post-params "/search-key" {:ids (vec ids) :type type} h)
;;       (h {:status "fail" :msg "No sequences selected."}))))

;; (defn- serve-proteins
;;   [owner]
;;   (let [o (om/get-state owner :start)
;;         k (om/get-state owner :key)
;;         h (fn [{:keys [status proteins]}]
;;             (if (= "success" status)
;;               (do (om/set-state! owner :proteins proteins)
;;                   (om/set-state! owner :showing :proteins))
;;               (throw (js/Error. "Can not initialise proteins."))))
;;         params {:offset (- (* 20 o) 20) :key k}]
;;     (jdbu/post-params "/proteins" params h)))

;; (defn- search-info
;;   [owner]
;;   (let [k (om/get-state owner :key)
;;         t (om/get-state owner :total)
;;         h (fn [{:keys [status info]}]
;;             (if (= "success" status)
;;               (om/set-state! owner :search-info info)
;;               (throw (js/Error. "Error in retrieving search information."))))]
;;     (jdbu/post-params "/search-info" {:key k :total t} h)))

;; (defn- select-all
;;   [owner]
;;   (let [k (om/get-state owner :key)
;;         h (fn [{:keys [status info]}]
;;             (if (= "success" status)
;;               (do (om/set-state! owner :selected info)
;;                   (jdbu/pub-info owner :all-done-done :done))
;;               (throw (js/Error. "Error in retrieving search information."))))]
;;     (jdbu/post-params "/select-all" {:key k} h)))

;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ;; export dropdown
;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defn- export
;;   [_ owner]
;;   (om/component
;;    (let [r '({:value "placeholder" :name "Other functions"
;;               :disabled true}
;;              {:value "peps" :name "Export selected sequences as protein"}
;;              {:value "cds" :name "Export selected sequences as CDS"}
;;              {:value "mrnas" :name "Export selected sequences as mRNA"}
;;              {:value "only-selected" :name "Only show selected"})]
;;      (dom/div
;;       #js {:style #js {:float "right"}}
;;       (om/build jdbu/select {:label-func :name
;;                              :value-func :value
;;                              :selected "placeholder"
;;                              :classname "myinput small-text"
;;                              :onchange-func
;;                              #(jdbu/pub-info owner :export (-> % .-target .-value))
;;                              :records r})))))

;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ;; select all|none
;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defn all-none-spinner
;;   [_ owner]
;;   (om/component
;;    (dom/div
;;     #js {:className "pure-u-2-24"}
;;     (dom/div
;;      #js {:id "escapingBallG"}
;;      (dom/div #js {:id "escapingBall_1" :className "escapingBallG"})))))

;; (defn all-none-do
;;   [k owner]
;;   (if (= k :all)
;;     (om/set-state! owner :showing :spinner)
;;     (om/set-state! owner :showing :links))
;;   (jdbu/pub-info owner :all-none k)
;;   (om/set-state! owner :selected k))

;; (defn select-all-none
;;   [{:keys [count all]} owner]
;;   (reify
;;     om/IInitState
;;     (init-state [_]
;;       {:selected :none
;;        :showing :links})
;;     om/IWillMount
;;     (will-mount [_]
;;       (jdbu/register-loop owner :all-done-done
;;                           (fn [o e]
;;                             (om/set-state! owner :showing :links))))
;;     om/IWillUnmount
;;     (will-unmount [_]
;;       (jdbu/unsubscribe owner :all-done-done))
;;     om/IWillReceiveProps
;;     (will-receive-props [_ {:keys [count all]}]
;;       (cond (= count 0)
;;             (om/set-state! owner :selected :none)
;;             (= count all)
;;             (om/set-state! owner :selected :all)
;;             (> count 0)
;;             (om/set-state! owner :selected :both)))
;;     om/IRenderState
;;     (render-state [_ {:keys [selected showing]}]
;;       (dom/div
;;        #js {:className "tbpadded"}
;;        "Select: "
;;        (condp = showing
;;          :links (dom/div #js {:className "pure-u-4-24"}
;;                          (dom/a #js {:onClick #(all-none-do :all owner)
;;                                      :className (if (= selected :all)
;;                                                   "flinki" "flinka")}
;;                                 "All")
;;                          " | "
;;                          (dom/a #js {:onClick #(all-none-do :none owner)
;;                                      :className (if (= selected :none)
;;                                                   "flinki" "flinka")}
;;                                 "None"))
;;          :spinner (om/build all-none-spinner nil))))))

;; (defn- download-frame
;;   [ekey _]
;;   (om/component
;;    (dom/iframe #js {:id "downloadframe"
;;                     :src (if-not (= ekey "")
;;                            (str "/fetch?k=" ekey)
;;                            "")})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; protein card
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- protein-lower-info
  [protein]
  (dom/div
   #js {:className "pure-u-1-1"}
   (dom/div #js {:className "pure-u-1-24"} "")
   (dom/div
    #js {:className "pure-u-5-24 protsumm" :style #js {:text-align "left"}}
    (str (count (:sequence protein)) " amino acid protein"))
   (dom/div
    #js {:className "pure-u-18-24 protsumm" :style #js {:text-align "left"}}
    (str "JellyDB accession: " (:accession protein)))))

(defn selected?
  [accession]
  (let [s (:selected @app-state)]
    (if (some #{accession} s)
      true
      false)))

(defn fix-selected
  [accession]
  (if (selected? accession)
    (swap! app-state #(assoc % :selected (vec (remove #{accession} (:selected %)))))
    (swap! app-state #(assoc % :selected (vec (conj (:selected %) accession))))))

(defn- protein-cb
  [protein]
  (let [s (selected? (:accession protein))]
    (dom/div
     #js {:className "pure-u-1-24"}
     (dom/input
      #js {:type "checkbox"
           :checked s
           :onChange #(fix-selected (:accession protein))}))))

(defn- protein-description
  [protein]
  (dom/div
   #js {:className "pure-u-23-24 thick" :style #js {:text-align "left"}}
   (str (:accession protein) " - " (if (> (count (:description protein)) 70)
                                     (str (->> (:description protein)
                                               (take 70)
                                               (apply str))
                                          " ...")
                                     (:description protein)))))

(defn- bottom-link
  [text tag owner]
  (let [cs (om/get-state owner :visible)]
    (dom/li
     #js {:className (if (= cs tag)
                       "pure-menu-item mselected "
                       "pure-menu-item my-cursor")}
     (dom/a
      #js {:className "pure-menu-link"
           :onClick (fn [x]
                      (if (= tag cs)
                        (om/set-state! owner :visible :none)
                        (om/set-state! owner :visible tag)))}
      text))))

(defn- bottom-menu
  [owner]
  (let [views (om/get-state owner :views)]
    (dom/div
     #js {:className "pure-u-1-1"}
     (dom/div #js {:className "pure-u-1-24"} "")
     (dom/div
      #js {:className "pure-u-23-24" :style #js {:text-align "left"}}
      (dom/div
       #js {:className "pure-menu pure-menu-horizontal"
            :style #js {:position "relative"}}
       (apply
        dom/ul
        #js {:className "pure-menu-list"}
        (map (fn [[text tag]] (bottom-link text tag owner)) views)))))))

(defn- bottom-view
  [owner]
  (let [visible (om/get-state owner :visible)]
    (dom/div
     #js {:className "pure-u-1-1"}
     (dom/div
      #js {:style #js {:position "relative"}}
      (if-not (= visible :none)
        (dom/div
         #js {:style #js {:position "absolute" :top "15" :right "10" :color "#cad2d3"}}
         (dom/a
          #js {:onClick #(om/set-state! owner :visible :none)
               :style #js {:cursor "pointer"}}
          "Close")))
      (condp = visible
        :protein "protein"
        :cds "cds"
        :mrna "mrna"
        :annotation "annotation"
        :dataset "dataset"
        :homology "homology"
        :blast "blast"
        nil)))))

(defn- protein [protein owner]
  (reify
    om/IInitState
    (init-state [_]
      {:visible :none
       :views [["Protein" :protein] ["CDS" :cds] ["mRNA" :mrna]
               ["Annotations" :annotation] ["Homologies" :homology]
               ["Datasets" :dataset]]})
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (om/set-state! owner :visible :none))
    om/IRenderState
    (render-state [_ {:keys [visible views]}]
      (dom/div
       #js {:className "pdisplay"}
       (dom/div
        #js {:className "pure-g"}
        (protein-cb protein)
        (protein-description protein)
        (protein-lower-info protein)
        (bottom-menu owner)
        (bottom-view owner))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; navigation
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn navigation
  [{:keys [offset key count] :as app} owner]
  (om/component
   (dom/div
    #js {:className "pure-u-1-1 padded"}
    (dom/div
     #js {:className "pure-u-1-2" :style #js {:text-align "left"}}
     (dom/a #js {:style #js {:font-size "85%"}
                 :className "pure-button"
                 :disabled (if (= 0 offset) true false)
                 :href (str "/prots/" key "/" 0)}
            "<<")
     (dom/a #js {:style #js {:font-size "85%"}
                 :className "pure-button"
                 :disabled (if (= 0 offset) true false)
                 :href (str "/prots/" key "/" (- offset 20))}
            "<")
     (dom/button #js {:className "buttondisplay"
                      :disabled "true"}
                 (str (+ offset 1) " to " (+ offset 20) " of " count))
     (dom/a #js {:style #js {:font-size "85%"}
                 :className "pure-button"
                 :disabled (if (>= (+ offset 20) count) true false)
                 :href (str "/prots/" key "/" (+ offset 20))}
            ">")
    (dom/a #js {:style #js {:font-size "85%"}
                :className "pure-button"
                :disabled (if (>= (+ 20 offset) count) true false)
                :href (str "/prots/" key "/" (* (quot count 20) 20))}
           ">>"))
    (dom/div #js {:className "pure-u-1-2" :style #js {:text-align "right"}}
             ;;(om/build export nil)
             "Export"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; outer 
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-proteins
  [{:keys [key offset]} owner]
  (serve/get-data {:type :text-proteins :key key :offset offset}
                  #(if (= :success (:status %))
                     (om/set-state! owner :prots (:data %))
                     (ut/error-redirect))))

(defn search-report
  [{:keys [search] :as search-data}]
  (dom/div
   #js {:className "pure-u-1-1"}
   (if search
     (dom/p nil (str "Showing results for search '" search "'"))
     (dom/p nil ""))))

(defn search-box
  []
  (dom/div
   #js {:className "pure-u-1-1"}
   (dom/div
    #js {:className "hdisplay hcenter"}
    (om/build ts/search "New search ..."))))

(defn proteins
  [{:keys [offset key] :as app} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:prots nil})
    om/IWillMount
    (will-mount [_]
      (get-proteins app owner))
    om/IWillReceiveProps
    (will-receive-props [_ app]
      (get-proteins app owner))
    om/IRenderState
    (render-state [_ {:keys [prots]}]
      (dom/div
       #js {:className "pure-u-1-1"}
       (om/build navigation app)
       (if-not prots
         (dom/div
          #js {:className "pure-u-1-1 padded"}
          (dom/div nil (dom/i #js {:className "fa fa-spinner fa-spin fa-3x"})))
         (apply
          dom/div
          #js {:className "pure-u-1-1 padded"}
          (om/build-all protein prots)))
       (om/build navigation app)))))

(defn protein-outer
  [{:keys [offset key] :as app} owner]
  (om/component
   (dom/div
    #js {:className "hcenter"}
    (dom/div
     #js {:style #js {:clear "both"}}
     (dom/div
      #js {:className "pure-g padded"}
      (search-box)
      (search-report app)
      (om/build proteins app))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; routing
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(acc/configure-navigation! {:nav-handler (fn [path]
                                           (sec/dispatch! path))
                            :path-exists? (fn [path]
                                            (sec/locate-route path))})

(defroute "/prots/:key/:offset" [key offset]
  (js/console.log (str "User: " key))
  (js/console.log offset)
  (swap! app-state #(assoc % :offset (js/parseInt offset))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; init
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-search
  [key]
  (serve/get-data {:type :search :key key}
                  #(if (= :success (:status %))
                     (reset! app-state {:offset 0 :key key :selected []
                                        :count (:count (:data %))
                                        :search (:data (:data %))})
                     (ut/error-redirect))))

(defn ^:export init [key]
  (get-search key)
  (om/root protein-outer app-state
           {:target (. js/document (getElementById "t"))}))
