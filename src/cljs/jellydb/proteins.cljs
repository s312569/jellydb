(ns ^:figwheel-always jellydb.proteins
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [jellydb.protein :as p]
            [jellydb.search :refer [search]]
            [jellydb.utilities :as jdbu]))

;; server calls

(defn- get-export-key
  [owner type]
  (let [h (fn [{:keys [status id msg]}]
            (if (= "success" status)
              (om/set-state! owner :ekey id)
              (js/alert msg)))]
    (if-let [ids (-> (om/get-state owner :selected) seq)]
      (jdbu/post-params "/search-key" {:ids (vec ids) :type type} h)
      (h {:status "fail" :msg "No sequences selected."}))))

(defn- get-fasta-key
  [owner type]
  (let [h (fn [{:keys [status count id msg]}]
            (if (= "success" status)
              (do (om/set-state! owner :total count)
                  (om/set-state! owner :key id))
              (js/alert msg)))]
    (if-let [ids (-> (om/get-state owner :selected) seq)]
      (jdbu/post-params "/search-key" {:ids (vec ids) :type type} h)
      (h {:status "fail" :msg "No sequences selected."}))))

(defn- serve-proteins
  [owner]
  (let [o (om/get-state owner :start)
        k (om/get-state owner :key)
        h (fn [{:keys [status proteins]}]
            (if (= "success" status)
              (om/set-state! owner :proteins proteins)
              (throw (js/Error. "Can not initialise proteins."))))
        params {:offset (- (* 20 o) 20) :key k}]
    (jdbu/post-params "/proteins" params h)))

(defn- search-info
  [owner]
  (let [k (om/get-state owner :key)
        t (om/get-state owner :total)
        h (fn [{:keys [status info]}]
            (if (= "success" status)
              (om/set-state! owner :search-info info)
              (throw (js/Error. "Error in retrieving search information."))))]
    (jdbu/post-params "/search-info" {:key k :total t} h)))

(defn- select-all
  [owner]
  (let [k (om/get-state owner :key)
        h (fn [{:keys [status info]}]
            (if (= "success" status)
              (let [ds (om/get-state owner :dont-show)
                    i (remove (set ds) info)]
                (om/set-state! owner :selected i))
              (throw (js/Error. "Error in retrieving search information."))))]
    (jdbu/post-params "/select-all" {:key k} h)))

;; components

(defn- export
  [_ owner]
  (om/component
   (let [r '({:value "placeholder" :name "Other functions"
              :disabled true}
             {:value "peps" :name "Export selected sequences as protein"}
             {:value "cds" :name "Export selected sequences as CDS"}
             {:value "mrnas" :name "Export selected sequences as mRNA"}
             {:value "only-selected" :name "Only show selected"})]
     (dom/div
      #js {:style #js {:float "right"}}
      (om/build jdbu/select {:label-func :name
                             :value-func :value
                             :selected "placeholder"
                             :classname "myinput small-text"
                             :onchange-func
                             #(jdbu/pub-info owner :export (-> % .-target .-value))
                             :records r})))))

(defn- nav
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:start 1
       :total 0})
    om/IWillMount
    (will-mount [_]
      (jdbu/change-state! owner :pos :start)
      (jdbu/change-state! owner :total :total :func #(int (Math/ceil (/ % 20)))))
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (jdbu/change-state! owner :pos :start)
      (jdbu/change-state! owner :total :total :func #(int (Math/ceil (/ % 20)))))
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

(defn- protein [protein owner]
  (reify
    om/IInitState
    (init-state [_]
      {:protein protein
       :selected (:checked protein)
       :visible "none"})
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (om/set-state! owner :selected (:checked np))
      (om/set-state! owner :protein np)
      (om/set-state! owner :visible "none"))
    om/IRenderState
    (render-state [_ {:keys [selected visible acc protein]}]
      (dom/div
       #js {:className "pdisplay"}
       (dom/div
        #js {:className "pure-g"}
        (dom/div
         #js {:className "pure-u-1-24"}
         (dom/input
          #js {:type "checkbox"
               :checked selected
               :onChange (fn [_]
                           (jdbu/pub-info owner :selected (:acc protein))
                           (om/set-state! owner :selected (not selected)))}))
        (dom/div
         #js {:className "pure-u-23-24 thick"}
         (str (:acc protein) " - " (if (> (count (:description protein)) 70)
                                     (str (->> (:description protein)
                                               (take 70)
                                               (apply str))
                                          " ...")
                                     (:description protein)))))
       (dom/div
        #js {:className "pure-g"}
        (dom/div
         #js {:className "pure-u-1-24"}
         "")
        (dom/div
         #js {:className "pure-u-5-24 protsumm"}
         (str (count (:sequence protein)) " amino acid protein"))
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
                  (om/build p/protein-view protein))))))))

(defn select-all-none
  [{:keys [count all]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:selected :none})
    om/IWillReceiveProps
    (will-receive-props [_ {:keys [count all]}]
      (cond (= count 0)
            (om/set-state! owner :selected :none)
            (= count all)
            (om/set-state! owner :selected :all)
            (> count 0)
            (om/set-state! owner :selected :both)))
    om/IRenderState
    (render-state [_ {:keys [selected]}]
      (dom/div
       #js {:className "tbpadded"}
       "Select: "
       (dom/a #js {:onClick
                   #(do (jdbu/pub-info owner :all-none :all)
                        (om/set-state! owner :selected :all))
                   :className (if (= selected :all)
                                "flinki" "flinka")}
              "All")
       " | "
       (dom/a #js {:onClick
                   #(do (jdbu/pub-info owner :all-none :none)
                        (om/set-state! owner :selected :none))
                   :className (if (= selected :none)
                                "flinki" "flinka")}
              "None")))))

;; loops

(defn- checked? [p owner]
  (assoc p :checked
         (if (some (set (list (:acc p)))
                   (om/get-state owner :selected))
           true false)))

(defn protein-serve
  [owner e]
  (om/set-state! owner :start
                 ((:data e)
                  (om/get-state owner :start)))
  (serve-proteins owner))

(defn selected-loop
  [owner e]
  (if (some #(= (:data e) %) (om/get-state owner :selected))
    (om/update-state! owner :selected
                      (fn [x] (-> (remove #(= (:data e) %) x) vec)))
    (om/update-state! owner :selected #(conj % (:data e)))))

(defn export-loop
  [owner e]
  (condp = (:data e)
    "only-selected" (get-fasta-key owner "ids-fetch")
    (do (get-export-key owner (:data e))
        (om/set-state! owner :ekey ""))))

(defn all-none-loop
  [owner e]
  (condp = (:data e)
    :all (select-all owner)
    :none (om/set-state! owner :selected [])))

(defn- shown?
  [owner p]
  (let [ds (om/get-state owner :dont-show)
        pid (:acc p)]
    (not (some #{pid} ds))))

(defn proteins-view [{:keys [key total type]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:start 1
       :total total
       :proteins nil
       :selected []
       :type type
       :key key
       :ekey ""
       :search-info nil})
    om/IWillMount
    (will-mount [_]
      (serve-proteins owner)
      (search-info owner)
      (jdbu/register-loop owner :nav protein-serve)
      (jdbu/register-loop owner :export export-loop)
      (jdbu/register-loop owner :selected selected-loop)
      (jdbu/register-loop owner :pos (fn [o e]
                                       (jdbu/put-state o e :start)))
      (jdbu/register-loop owner :total (fn [o e]
                                         (jdbu/put-state o e :total)))
      (jdbu/register-loop owner :all-none all-none-loop))
    om/IWillUnmount
    (will-unmount [_]
      (jdbu/unsubscribe owner :nav :selected :export :pos :total :all-none))
    om/IWillUpdate 
    (will-update [_ np ns]
      (when-not (= (:key ns) (:key (om/get-render-state owner)))
        (serve-proteins owner)
        (search-info owner)))
    om/IWillReceiveProps
    (will-receive-props [_ {:keys [key total type]}]
      (om/set-state! owner :key key)
      (om/set-state! owner :type type)
      (om/set-state! owner :total total)
      (om/set-state! owner :selected [])
      (om/set-state! owner :ekey "")
      (serve-proteins owner)
      (search-info owner))
    om/IRenderState
    (render-state [_ {:keys [proteins total type selected ekey search-info] :as m}]
      (if (< 0 total)
        (dom/div
         nil
         (dom/iframe #js {:id "downloadframe"
                          :src (if-not (= ekey "")
                                 (do (jdbu/log ekey)
                                     (str "/fetch?k=" ekey))
                                 "")})
         (if (= type "text-search")
           (om/build search "Search again ..."))
         (dom/div #js {:className "thick padded"} search-info)
         (om/build nav nil)
         (om/build select-all-none {:count (count selected) :all total})
         (apply dom/div #js {:className "padded"}
                (om/build-all protein
                              (->> (filter #(shown? owner %) proteins)
                                   (map #(checked? % owner)))))
         (om/build nav nil))
        (dom/div
         nil
         (condp = type
           "text-search"
           (dom/div nil
                    (om/build search "Search again ...")
                    (dom/div #js {:className "thick padded"} search-info))
           "blast"
           (dom/div nil
                    (dom/div #js {:className "thick padded"} search-info)
                    (dom/div
                     #js {:className "pure-form pure-form-stacked"}
                     (dom/div #js {:className "padded"}
                              (dom/button
                               #js {:className
                                    "pure-button pure-button-primary pure-u-1"
                                    :onClick
                                    #(jdbu/pub-info owner :view nil "blast")}
                               "New search"))))))))))

(defn proteins-reset [k owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (jdbu/pub-info owner :view k "proteins"))
    om/IRenderState
    (render-state [_ state]
      (dom/div nil ""))))
