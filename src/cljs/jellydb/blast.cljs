(ns ^:figwheel-always jellydb.blast
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! >! timeout close!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :refer [trim]]
            [jellydb.proteins :as psv]
            [jellydb.utilities :as jdbu]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; blast query
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def dna-db #{"jdb-cds" "jdb-mrna"})
(def prot-db #{"jdb-prot"})
(def dna-program #{"blastn"})
(def prot-program #{"blastp" "blastx"})

(defn sequence-box
  [_ owner]
  (om/component
   (dom/div
    #js {:className "pure-u-5-5 pure-u-md-5-5"}
    (dom/label nil "Blast sequence")
    (dom/textarea
     #js {:rows 10
          :className "myinput pure-u-1"
          :placeholder "Enter sequences one at a time."
          :onChange #(jdbu/pub-info owner :text (-> % .-target .-value))}))))

(defn matrix-select
  [p owner]
  (om/component
   (dom/div
    #js {:className "pure-u-9-24 pure-u-md-9-24"}
    (om/build jdbu/select
              {:label "Matrix"
               :label-func :value
               :value-func :value
               :disabled (if (dna-program p) true false)
               :classname "pure-u-23-24"
               :onchange-func #(jdbu/pub-info owner :matrix
                                              (-> % .-target .-value))
               :records '({:value "BLOSUM62"}
                          {:value "BLOSUM80"} 
                          {:value "BLOSUM50"}
                          {:value "BLOSUM45"}
                          {:value "PAM250"}
                          {:value "BLOSUM90"}
                          {:value "PAM30"}
                          {:value "PAM70"})}))))

(defn gapped-select
  [_ owner]
  (om/component
   (dom/div
    #js {:className "pure-u-9-24 pure-u-md-9-24"}
    (om/build jdbu/select
              {:label "Gapped"
               :label-func :value
               :value-func :value
               :classname "pure-u-23-24"
               :onchange-func #(jdbu/pub-info owner :gapped
                                              (-> % .-target .-value))
               :records '({:value "Yes"}
                          {:value "No"})}))))

(defn return-select
  [_ owner]
  (reify
      om/IInitState
    (init-state [_]
      {:selected "250"})
    om/IRenderState
    (render-state [_ {:keys [selected]}]
      (dom/div
       #js {:className "pure-u-6-24 pure-u-md-6-24"}
       (om/build jdbu/select
                 {:label "Hits"
                  :label-func :value
                  :value-func :value
                  :classname "pure-u-23-24"
                  :selected selected
                  :onchange-func #(do
                                    (jdbu/pub-info owner :return
                                                   (-> % .-target .-value))
                                    (om/set-state! owner :selected
                                                   (-> % .-target .-value)))
                  :records '({:value "50"}
                             {:value "100"}
                             {:value "250"}
                             {:value "500"}
                             {:value "750"}
                             {:value "1000"})})))))

(defn program-select
  [s owner]
  (om/component
   (dom/div
    #js {:className "pure-u-9-24 pure-u-md-9-24"}
    (om/build jdbu/select
              {:label "Program"
               :label-func :name
               :value-func :value
               :classname "pure-u-23-24"
               :onchange-func #(jdbu/pub-info owner :program
                                              (-> % .-target .-value))
               :records '({:value "blastp" :name "BLASTp"}
                          {:value "blastn" :name "BLASTn"}
                          {:value "blastx" :name "BLASTx"})}))))

(defn database-select
  [p owner]
  (reify
    om/IInitState
    (init-state [_]
      {:selected "jdb-prot"
       :dna-options '({:value "jdb-cds" :name "CDS"}
                      {:value "jdb-mrna" :name "mRNA"})
       :prot-options '({:value "jdb-prot" :name "Predicted proteins"})})
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (cond (and (prot-program np) (dna-db (om/get-state owner :selected)))
            (do (om/set-state! owner :selected "jdb-prot")
                (jdbu/pub-info owner :database "jdb-prot"))
            (and (dna-program np) (prot-db (om/get-state owner :selected)))
            (do (om/set-state! owner :selected "jdb-cds")
                (jdbu/pub-info owner :database "jdb-cds"))))
    om/IRenderState
    (render-state [_ {:keys [selected prot-options dna-options]}]
      (dom/div
       #js {:className "pure-u-9-24 pure-u-md-9-24"}
       (om/build jdbu/select
                 {:label "Database"
                  :label-func :name
                  :value-func :value
                  :classname "pure-u-23-24"
                  :selected (om/get-state owner :selected)
                  :onchange-func #(do
                                    (jdbu/pub-info owner :database
                                                   (-> % .-target .-value))
                                    (om/set-state! owner :selected
                                                   (-> % .-target .-value)))
                  :records (if (dna-program p)
                             (concat dna-options
                                     (map #(assoc % :disabled true)
                                          prot-options))
                             (concat prot-options
                                     (map #(assoc % :disabled true)
                                          dna-options)))})))))

(defn evalue-select
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:selected "1"})
    om/IRenderState
    (render-state [_ {:keys [selected]}]
      (dom/div
       #js {:className "pure-u-6-24 pure-u-md-6-24"}
       (om/build jdbu/select
                 {:label "Maximum E-value"
                  :label-func :name
                  :value-func :value
                  :selected selected
                  :classname "pure-u-23-24"
                  :onchange-func #(do
                                    (jdbu/pub-info owner :evalue
                                                   (-> % .-target .-value))
                                    (om/set-state! owner :selected
                                                   (-> % .-target .-value)))
                  :records (list
                            {:value "0.01" :name "0.01"}
                            {:value "0.1" :name "0.1"}
                            {:value "1" :name "1"}
                            {:value "10" :name "10"}
                            {:value "100" :name "100"})})))))

(defn blast-submit
  [owner]
  (let [text (let [t (om/get-state owner :text)]
               (if t (trim t) ""))
        ev (om/get-state owner :evalue)
        db (om/get-state owner :database)
        p (om/get-state owner :program)
        m (om/get-state owner :matrix)
        g (om/get-state owner :gapped)
        r (om/get-state owner :return)
        h (fn [{:keys [status id msg]}]
            (if (= "success" status)
              (om/set-state! owner :key id)
              (js/alert msg)))
        params {:text text :evalue ev :database db :program p
                :matrix m :gapped g :return r :type :blast}]
    (if (= (trim text) "")
      (js/alert "No sequence entered!")
      (jdbu/post-params "/search-key" params h))))

(defn- init-loops
  [owner]
  (jdbu/register-loop owner :program
                      (fn [o e]
                        (om/set-state! o :program (:data e))))
  (jdbu/register-loop owner :database
                      (fn [o e]
                        (om/set-state! o :database (:data e))))
  (jdbu/register-loop owner :evalue
                      (fn [o e]
                        (om/set-state! o :evalue (:data e))))
  (jdbu/register-loop owner :text
                      (fn [o e]
                        (om/set-state! o :text (:data e))))
  (jdbu/register-loop owner :matrix
                      (fn [o e]
                        (om/set-state! o :matrix (:data e))))
  (jdbu/register-loop owner :gapped
                      (fn [o e]
                        (om/set-state! o :gapped (:data e))))
  (jdbu/register-loop owner :return
                      (fn [o e]
                        (om/set-state! o :return (:data e)))))

(defn blast-view
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:text nil
       :program "blastp"
       :database "jdb-prot"
       :matrix "BLOSUM62"
       :evalue "1"
       :gapped "Yes"
       :return "250"
       :key nil})
    om/IWillMount
    (will-mount [_]
      (init-loops owner))
    om/IWillUpdate
    (will-update [_ np {:keys [key]}]
      (if key
        (jdbu/pub-info owner :view key "blast-waiting")))
    om/IWillUnmount
    (will-unmount [_]
      (jdbu/unsubscribe owner :program :database :evalue
                        :text :matrix :gapped :return))
    om/IRenderState
    (render-state [_ {:keys [text key database evalue program]}]
      (dom/div
       #js {:className "annopadded"}
       (dom/div
        #js {:className "pure-form pure-form-stacked"}
        (dom/fieldset
         nil
         (dom/div
          #js {:className "pure-g"}
          (om/build sequence-box nil)
          (om/build program-select program)
          (om/build database-select program)
          (om/build evalue-select evalue)
          (om/build matrix-select program)
          (om/build gapped-select nil)
          (om/build return-select nil)
          (dom/div #js {:className "padded"}
                   (dom/button
                    #js {:className
                         "pure-button pure-button-primary pure-u-1"
                         :onClick #(blast-submit owner)}
                    "Go")))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; blast waiting
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn check-blast
  [owner]
  (letfn [(h [{:keys [status state]}]
            (if (= "success" status)
              (om/set-state! owner :done state)))]
    (jdbu/post-params "/blast-check" {:key (om/get-state owner :key)} h)))

(defn waiting-loop
  [owner]
  (go
    (loop [c (<! (timeout 5000))]
      (let [d? (check-blast owner)]
        (if-not (= "Not done" (om/get-state owner :done))
          (do (jdbu/pub-info owner :view
                             {:key (om/get-state owner :key)
                              :total (om/get-state owner :done)}
                             "proteins"))
          (recur (<! (timeout 5000))))))))

(defn blast-waiting [key owner]
  (reify
    om/IInitState
    (init-state [_]
      {:key key
       :done "Not done"
       :waiting nil})
    om/IDidMount
    (did-mount [_]
      (om/set-state! owner :waiting (waiting-loop owner)))
    om/IWillUnmount
    (will-unmount [_]
      (close! (om/get-state owner :waiting)))
    om/IRenderState
    (render-state [_ {:keys [key test]}]
      (dom/div #js {:className "loader"}
               "Running search"))))
