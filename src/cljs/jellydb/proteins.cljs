(ns ^:figwheel-always jellydb.proteins
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! chan]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [jellydb.search :as ts]
            [jellydb.server :as serve]
            [jellydb.annotation-view :as ann]
            [jellydb.utilities :as ut]
            [jellydb.dataset-view :as data]
            [jellydb.homology-view :refer [homology-view]]
            [jellydb.blast-view :refer [blast-output-view]]
            [jellydb.proteomics :refer [proteomics-view]]
            [secretary.core :as sec :refer-macros [defroute]]
            [accountant.core :as acc]))

(defonce app-state (atom {:offset 0 :key nil :selected []}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; select all|none
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- select-all
  [app owner]
  (serve/get-data {:type ::select-all :key (:key @app)}
                  (fn [x]
                    (om/transact! app #(assoc % :selected (:data x)))
                    (om/set-state! owner :waiting false))))

(defn select-all-none
  [{:keys [selected scount] :as app} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:waiting false})
    om/IRenderState
    (render-state [_ {:keys [waiting]}]
      (dom/div
       #js {:className "tbpadded" :style #js {:text-align "left"}}
       "Select: "
       (if waiting
         (dom/div
          #js {:className "pure-u-5-24"}
          (dom/span
           #js {:id "escapingBallG"}
           (dom/div #js {:id "escapingBall_1" :className "escapingBallG"})))
         (dom/div
          #js {:className "pure-u-5-24"}
          (dom/a #js {:onClick #(if-not (= (:scount @app) (count (:selected @app)))
                                  (do (om/set-state! owner :waiting true)
                                      (select-all app owner)))
                      :className (if (= scount (count selected))
                                   "flinki" "flinka")}
                 "All")
          " | "
          (dom/a #js {:onClick #(if (seq (:selected @app))
                                  (om/transact! app (fn [x] (assoc x :selected []))))
                      :className (if (seq selected)
                                   "flinka" "flinki")}
                 "None")))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; sequence views
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- numbered-format [sequence]
  (let [l (count sequence)
        r (partition-all 70 (range 1 (+ 1 l)))
        n (let [c (atom 0)]
            (map #(->> (map (fn [x]
                              (let [n (-> (swap! c (fn [x] (+ x 10)))
                                          str
                                          count)]
                                (str (apply str (repeat (- 10 n) " "))
                                     @c)))
                            (partition 10 %))
                       (apply str))
                 r))
        d (map #(->> (map (fn [x]
                            (if (= 0 (mod x 10))
                              "|" "-")) %)
                     (apply str))
               r)
        s (->> (partition-all 70 sequence)
               (map #(apply str %)))]
    (->> (interleave n d s)
         (interpose \newline)
         (apply str))))

(defn- fasta-format [{:keys [accession description sequence]}]
  (str ">"
       accession " "
       (->> (subs description 0 67)
            (map #(apply str %))
            (apply str))
       "..."
       \newline
       (->> (partition-all 70 sequence)
            (map #(apply str %))
            (interpose \newline)
            (apply str))))

(defmulti get-sequence :type)

(defmethod get-sequence ::protein
  [{:keys [protein]} owner]
  (om/set-state! owner :sequence (:sequence protein)))

(defmethod get-sequence :default
  [{:keys [protein type]} owner]
  (serve/get-data {:accession (:accession protein) :type type}
                  #(if (= :success (:status %))
                     (om/set-state! owner :sequence (:sequence (:data %)))
                     (ut/error-redirect %))))

(defn sequence-view [{:keys [protein type] :as m} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:format :fasta
       :sequence nil})
    om/IWillMount
    (will-mount [_]
      (get-sequence m owner))
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (get-sequence np owner)
      (om/set-state! owner :format :fasta))
    om/IRenderState
    (render-state [_ {:keys [format sequence]}]
      (if-not sequence
        (om/build ut/waiting nil)
        (dom/div
         nil
         (dom/div
          nil
          (dom/a #js {:onClick
                      #(om/set-state! owner :format :fasta)
                      :className
                      (if (= format :fasta)
                        "flinki" "flinka")}
                 "Fasta")
          "|"
          (dom/a #js {:onClick
                      #(om/set-state! owner :format :ladder)
                      :className
                      (if (= format :ladder)
                        "flinki" "flinka")}
                 "Numbered"))
         (dom/pre
          #js {:className "sequence-fixed"}
          (if (= format :ladder)
            (numbered-format sequence)
            (fasta-format {:description (:description protein) :sequence sequence
                           :accession (:accession protein)}))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; protein card
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti score-desc (fn [a] (:database a)))

(defmethod score-desc :default
  [a]
  " Score: ")

(defmethod score-desc "SwissProt"
  [a]
  " Bit score: ")

(defmethod score-desc "SUPERFAMILY"
  [a]
  " Evalue: ")

(defn- protein-lower-info
  [protein]
  (dom/div
   #js {:className "pure-u-1-1"}
   (dom/div #js {:className "pure-u-1-24"} "")
   (dom/div
    #js {:className "pure-u-23-24 protsumm" :style #js {:text-align "left"}}
    (str (count (:sequence protein)) " amino acid protein; "
         (if (:evidence protein)
           (str "Annotation evidence: " (:evidence protein) ";"
                (score-desc protein) (:score protein) ";"
                " Database: " (:database protein)))))))

(defn- protein-cb
  [protein]
  (let [selected? (fn [accession]
                    (let [s (:selected @app-state)]
                      (if (some #{accession} s)
                        true
                        false)))]
    (dom/div
     #js {:className "pure-u-1-24"}
     (dom/input
      #js {:type "checkbox"
           :checked (selected? (:accession protein))
           :onChange
           #(let [accession (:accession protein)]
              (if (selected? accession)
                (swap! app-state
                       (fn [x] (assoc x :selected
                                      (vec (remove #{accession} (:selected x))))))
                (swap! app-state
                       (fn [x] (assoc x :selected
                                      (vec (conj (:selected x) accession)))))))}))))

(defn- protein-description
  [protein]
  (let [tf #(if (> (count %) 70) (str (->> % (take 70) (apply str)) " ...") %)]
    (dom/div
     #js {:className "pure-u-23-24 thick" :style #js {:text-align "left"}}
     (str (:accession protein) " - " (tf (:description protein))))))

(defmulti menu-disabled? (fn [t o] t))

(defmethod menu-disabled? :default
  [_ _]
  false)

(defmethod menu-disabled? :annotation
  [t o]
  (not (om/get-state o ::annotations?)))

(defmethod menu-disabled? :homology
  [t o]
  (not (om/get-state o ::homologies?)))

(defmethod menu-disabled? :proteomics
  [t o]
  (not (om/get-state o ::proteomics?)))

(defn- bottom-link
  [[text tag] owner]
  (let [cs (om/get-state owner :visible)
        dis? (menu-disabled? tag owner)]
    (dom/li
     #js {:className (cond (= cs tag)
                           "pure-menu-item mselected my-cursor"
                           dis?
                           "pure-menu-item pure-menu-disabled"
                           :else
                           "pure-menu-item my-cursor")}
     (if-not dis?
       (dom/a
        #js {:className "pure-menu-link"
             :disabled "true"
             :onClick (fn [x]
                        (and (not dis?)
                             (if (= tag cs)
                               (om/set-state! owner :visible :none)
                               (om/set-state! owner :visible tag))))}
        text)
       text))))

(defn- bottom-menu
  [protein owner]
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
        (map #(bottom-link % owner) views)))))))

(defn- bottom-view
  [protein owner]
  (let [visible (om/get-state owner :visible)]
    (if (= visible :none)
      (dom/div nil "")
      (dom/div
       #js {:className "pure-u-1-1"}
       (dom/div
        #js {:className "pure-u-23-24"}
        (dom/div
         #js {:style #js {:position "relative"}}
         (if-not (= visible :none)
           (dom/div
            #js {:style #js {:position "absolute" :top "-10" :right "10" :color "#cad2d3"}}
            (dom/a
             #js {:onClick #(om/set-state! owner :visible :none)
                  :style #js {:cursor "pointer"}}
             "Close")))
         (dom/div
          #js {:className "tbpadded" :style #js {:text-align "left"}}
          (condp = visible
            :protein (om/build sequence-view {:protein protein :type ::protein})
            :cds (om/build sequence-view {:protein protein :type ::cds})
            :mrna (om/build sequence-view {:protein protein :type ::mrna})
            :annotation (om/build ann/annotation-view protein)
            :dataset (om/build data/dataset-view protein)
            :homology (om/build homology-view protein)
            :blast (om/build blast-output-view protein)
            :proteomics (om/build proteomics-view protein)
            nil))))))))

(defn- protein [protein owner]
  (reify
    om/IInitState
    (init-state [_]
      {:visible (if (:Hit_id protein) :blast :none)
       :views (let [v  [["Protein" :protein]
                        ["CDS" :cds]
                        ["mRNA" :mrna]
                        ["Annotations" :annotation]
                        ["Homologies" :homology]
                        ["Proteomics" :proteomics]
                        ["Datasets" :dataset]]]
                (if (:Hit_id protein)
                  (-> (cons ["Blast" :blast] v)
                      vec)
                  v))
       ::annotations? false
       ::homologies? false
       ::proteomics? false})
    om/IWillMount
    (will-mount [_]
      (doseq [t [::annotations? ::homologies? ::proteomics?]]
        (serve/get-data-check {:type t :accession (:accession protein)}
                              t
                              owner)))
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (om/set-state! owner :visible :none)
      (doseq [t [::annotations? ::homologies? ::proteomics?]]
        (serve/get-data-check {:type t :accession (:accession protein)}
                              t
                              owner)))
    om/IRenderState
    (render-state [_ {:keys [visible views]}]
      (dom/div
       #js {:className "pdisplay"}
       (dom/div
        #js {:className "pure-u-1-1"}
        (protein-cb protein)
        (protein-description protein)
        (protein-lower-info protein)
        (bottom-menu protein owner)
        (bottom-view protein owner))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; navigation
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti more-action (fn [v owner] v))

(defmethod more-action :default
  [v owner]
  (serve/search-key {:type ::export :table v :data (@app-state :selected)}
                    (fn [x]
                      (if (= :success (:status x))
                        (om/set-state! owner :ekey (:key x))
                        (ut/error-redirect x)))))

(defmethod more-action :only
  [v owner]
  (serve/search-key {:type ::show-selected :data (@app-state :selected)}
                    (fn [x]
                      (if (= :success (:status x))
                        (om/set-state! owner :redirect
                                       (str "/prots/" (:key x) "/" 0))))))

(defn- export
  [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:ekey nil
       :redirect false})
    om/IRenderState
    (render-state [_ {:keys [ekey redirect]}]
      (if redirect
        (do (acc/navigate! redirect)
            (om/set-state! owner :redirect false)
            (dom/div nil ""))
        (if-not (seq (:selected app))
          (apply
           dom/select
           #js {:style #js {:width "260px"}
                :className "myinput small-text"
                :value "placeholder"}
           [(dom/option #js {:value "placeholder" :disabled true :selected true}
                        "More ...")
            (dom/optgroup
             #js {:label "Select some sequences to access"}
             nil)
            (dom/optgroup
             #js {:label "more actions"}
             nil)])
          (let [r '({:value "placeholder" :name "More ..." :disabled true}
                    {:value "peptides" :name "Export selected sequences as proteins"}
                    {:value "cdss" :name "Export selected sequences as CDS"}
                    {:value "mrnas" :name "Export selected sequences as mRNAs"}
                    {:value "only" :name "Only show selected."})]
            (dom/div
             #js {:style #js {:float "right"}}
             (dom/iframe #js {:className "downloadframe"
                              :src (if ekey (str "/fetch?k=" ekey) "")}
                         "")
             (om/set-state! owner :ekey nil)
             (om/build ut/select {:label-func :name
                                  :value-func :value
                                  :selected "placeholder"
                                  :classname "myinput small-text"
                                  :width "260px"
                                  :onchange-func
                                  #(let [v (keyword (-> % .-target .-value))]
                                     (more-action v owner))
                                  :records r}))))))))

(defn navigation
  [{:keys [offset key scount] :as app} owner]
  (om/component
   (dom/div
    #js {:className "pure-u-1-1 padded"}
    (dom/div
     #js {:className "pure-u-1-2" :style #js {:text-align "left"}}
     (let [dis? (if (= 0 offset) true false)]
       (dom/a #js {:style #js {:font-size "85%"}
                   :className "pure-button"
                   :disabled dis?
                   :href (if dis? "#" (str "/prots/" key "/" 0))}
              "<<"))
     (let [dis? (if (= 0 offset) true false)]
       (dom/a #js {:style #js {:font-size "85%"}
                   :className "pure-button"
                   :disabled dis?
                   :href (if dis? "#" (str "/prots/" key "/" (- offset 20)))}
              "<"))
     (dom/button #js {:className "buttondisplay"
                      :disabled "true"}
                 (str (+ offset 1) " to "
                      (if (> (+ offset 20) scount) scount (+ offset 20))
                      " of " scount))
     (let [dis? (if (>= (+ offset 20) scount) true false)]
       (dom/a #js {:style #js {:font-size "85%"}
                   :className "pure-button"
                   :disabled dis?
                   :href (if dis? "#" (str "/prots/" key "/" (+ offset 20)))}
              ">"))
     (let [dis? (if (>= (+ 20 offset) scount) true false)]
       (dom/a #js {:style #js {:font-size "85%"}
                   :className "pure-button"
                   :disabled dis?
                   :href (if dis? "#" (str "/prots/" key "/" (* (quot scount 20) 20)))}
              ">>")))
    (dom/div #js {:className "pure-u-1-2" :style #js {:text-align "right"}}
             (om/build export app)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; outer 
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-proteins
  [{:keys [key offset]} owner]
  (if key
    (serve/get-data {:type :by-key :key key :offset offset}
                    #(if (= :success (:status %))
                       (do (om/set-state! owner :prots (:data %))
                           (om/set-state! owner :offset offset)
                           (om/set-state! owner :key key))
                       (ut/error-redirect %)))))

(def dbname {:jdb-mrna "mRNA" :jdb-cds "CDS" :jdb-prot "predicted proteins"})

(defn proteins
  [{:keys [offset key] :as app} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:key key
       :offset offset})
    om/IWillMount
    (will-mount [_]
      (get-proteins app owner))
    om/IWillReceiveProps
    (will-receive-props [_ app]
      (cond (or (not (= (:key app) (om/get-state owner :key)))
                (not (= (:offset app) (om/get-state owner :offset))))
            (get-proteins app owner)))
    om/IRenderState
    (render-state [_ {:keys [prots ekey]}]
      (dom/div
       #js {:className "pure-u-1-1"}
       (om/build navigation app)
       (om/build select-all-none app)
       (if-not prots
         (dom/div
          #js {:className "pure-u-1-1 padded"}
          (dom/div nil (dom/i #js {:className "fa fa-spinner fa-spin fa-3x"})))
         (apply
          dom/div
          #js {:className "pure-u-1-1 padded"}
          (om/build-all protein prots)))
       (om/build navigation app)))))

(defmulti no-results :search-type)

(defmethod no-results :default
  [s]
  (dom/div
   #js {:className "pure-u-1-1"}
   (dom/p nil "")))

(defmethod no-results :text-proteins
  [{:keys [search] :as search-data}]
  (dom/div
   #js {:className "pure-u-1-1"}
   (dom/p nil "No results for search of '" search "'.")))

(defmethod no-results :blast-search
  [{:keys [search] :as search-data}]
  (dom/div
   #js {:className "pure-u-1-1"}
   (dom/p nil (str "No results for blast search of " (dbname (:database search))
                   " database using " (:program search)
                   " and minimum e-value of " (:evalue search) "."))
   (dom/a #js {:href "/blast" :className "pure-button pure-button-primary"}
          "New BLAST search")))

(defmulti search-report :search-type)

(defmethod search-report :default
  [s]
  (dom/div
   #js {:className "pure-u-1-1"}
   (dom/p nil "")))

(defmethod search-report :text-proteins
  [{:keys [search] :as search-data}]
  (dom/div
   #js {:className "pure-u-1-1"}
   (dom/p nil (str "Showing results for search '" search "'"))))

(defmethod search-report :blast-search
  [{:keys [search] :as search-data}]
  (dom/div
   #js {:className "pure-u-1-1"}
   (dom/p nil (str "Blast search of " (dbname (:database search))
                   " database using " (:program search)
                   " and minimum e-value of " (:evalue search) "."))))

(defn protein-outer
  [{:keys [offset key scount] :as app} owner]
  (om/component
   (dom/div
    #js {:className "hcenter"}
    (dom/div
     #js {:className "pure-g"}
     (dom/div
      #js {:className "pure-u-1-1"}
      (ut/nav-links "Proteins"))
     (dom/div
      #js {:style #js {:clear "both"}}
      (dom/div
       #js {:className "padded"}
       (dom/div
        #js {:className "pure-u-1-1"}
        (dom/div
         #js {:className "hdisplay hcenter"}
         (om/build ts/search "New search ...")))
       (if (> scount 0)
         (dom/div
          nil
          (search-report app)
          (om/build proteins app))
         (no-results app))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; routing
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(acc/configure-navigation! {:nav-handler (fn [path] (sec/dispatch! path))
                            :path-exists? (fn [path] (sec/locate-route path))})

(declare get-search)

(defroute "/prots/:key/:offset" [key offset]
  (if (= key (@app-state :key))
    (swap! app-state #(assoc % :offset (js/parseInt offset)))
    (get-search key)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; init
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-search
  [key]
  (reset! app-state {:offset 0 :key nil :selected []})
  (serve/get-data {:type :search :key key}
                  #(if (= :success (:status %))
                     (reset! app-state {:offset 0 :key key :selected []
                                        :scount (:count (:data %))
                                        :search (:data (:data %))
                                        :search-type (:search-type (:data %))})
                     (ut/error-redirect %))))

(defn ^:export init [key]
  (get-search key)
  (om/root protein-outer app-state
           {:target (. js/document (getElementById "t"))}))
