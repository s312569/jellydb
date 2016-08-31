(ns ^:figwheel-always jellydb.blast
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! >! timeout close! chan put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :refer [trim split-lines]]
            [jellydb.proteins :as psv]
            [jellydb.utilities :as ut]
            [jellydb.server :as serve]
            [clj-fasta.core :as fa]))

;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ;; blast query
;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn return-select
  [{:keys [change]} owner]
  (reify
      om/IInitState
    (init-state [_]
      {:selected "250"})
    om/IRenderState
    (render-state [_ {:keys [selected]}]
      (dom/div
       #js {:className "pure-u-6-24 pure-u-md-6-24"}
       (om/build ut/select
                 {:label "Hits"
                  :label-func :value
                  :value-func :value
                  :classname "pure-u-23-24"
                  :selected selected
                  :onchange-func (fn [x]
                                   (om/set-state! owner :selected (-> x .-target .-value))
                                   (put! change [:return (om/get-state owner :selected)]))
                  :records '({:value "50"}
                             {:value "100"}
                             {:value "250"}
                             {:value "500"}
                             {:value "750"}
                             {:value "1000"})})))))

(defn gapped-select
  [{:keys [change]} owner]
  (om/component
   (dom/div
    #js {:className "pure-u-9-24 pure-u-md-9-24"}
    (om/build ut/select
              {:label "Gapped"
               :label-func :value
               :value-func :value
               :classname "pure-u-23-24"
               :onchange-func #(put! change [:gapped (-> % .-target .-value)])
               :records '({:value "Yes"}
                          {:value "No"})}))))

(defn matrix-select
  [{:keys [program change]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:dna-program #{"blastp" "blastx"}})
    om/IRenderState
    (render-state [_ {:keys [dna-program]}]
      (dom/div
       #js {:className "pure-u-9-24 pure-u-md-9-24"}
       (om/build ut/select
                 {:label "Matrix"
                  :label-func :value
                  :value-func :value
                  :disabled (if (dna-program program) true false)
                  :classname "pure-u-23-24"
                  :onchange-func #(put! change [:matrix (-> % .-target .-value)])
                  :records '({:value "BLOSUM62"}
                             {:value "BLOSUM80"} 
                             {:value "BLOSUM50"}
                             {:value "BLOSUM45"}
                             {:value "PAM250"}
                             {:value "BLOSUM90"}
                             {:value "PAM30"}
                             {:value "PAM70"})})))))

(defn database-select
  [{:keys [program change]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:dna-program #{"blastn"}
       :dna-db #{"jdb-cds" "jdb-mrna"}
       :selected :jdb-prot
       :dna-options [{:value "jdb-cds" :name "CDS"} {:value "jdb-mrna" :name "mRNA"}]
       :prot-options [{:value "jdb-prot" :name "Predicted proteins"}]})
    om/IWillReceiveProps
    (will-receive-props [_ {:keys [program]}]
      (let [dna-db (om/get-state owner :dna-db)
            dna-program (om/get-state owner :dna-program)]
        (cond (and (dna-program program)
                   (not (dna-db (om/get-state owner :selected))))
              (do (om/set-state! owner :selected "jdb-cds")
                  (put! change [:database "jdb-cds"]))
              (and (not (dna-program program))
                   (dna-db (om/get-state owner :selected)))
              (do (om/set-state! owner :selected "jdb-prot")
                  (put! change [:database "jdb-prot"])))))
    om/IRenderState
    (render-state [_ {:keys [selected prot-options dna-options dna-program dna-db]}]
      (dom/div
       #js {:className "pure-u-9-24 pure-u-md-9-24"}
       (om/build ut/select
                 {:label "Database"
                  :label-func :name
                  :value-func :value
                  :classname "pure-u-23-24"
                  :selected (om/get-state owner :selected)
                  :onchange-func
                  (fn [x]
                    (om/set-state! owner :selected (keyword (-> x .-target .-value)))
                    (put! change [:database (om/get-state owner :selected)]))
                  :records (if (dna-program program)
                             (concat dna-options
                                     (map #(assoc % :disabled true) prot-options))
                             (concat prot-options
                                     (map #(assoc % :disabled true) dna-options)))})))))

(defn program-select
  [{:keys [change]} owner]
  (om/component
   (dom/div
    #js {:className "pure-u-9-24 pure-u-md-9-24"}
    (om/build ut/select
              {:label "Program"
               :label-func :name
               :value-func :value
               :selected (om/get-state owner :selected)
               :classname "pure-u-23-24"
               :onchange-func #(put! change [:program (-> % .-target .-value)])
               :records '({:value "blastp" :name "BLASTp"}
                          {:value "blastn" :name "BLASTn"}
                          {:value "blastx" :name "BLASTx"})}))))

(defn sequence-box
  [{:keys [change]} owner]
  (om/component
   (dom/div
    #js {:className "pure-u-5-5 pure-u-md-5-5"}
    (dom/label nil "Blast sequence")
    (dom/textarea
     #js {:rows 10
          :className "myinput pure-u-1"
          :placeholder "Enter sequences one at a time."
          :onChange #(put! change [:text (-> % .-target .-value)])}))))

(defn evalue-select
  [{:keys [change]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:selected "1"})
    om/IRenderState
    (render-state [_ {:keys [selected]}]
      (dom/div
       #js {:className "pure-u-6-24 pure-u-md-6-24"}
       (om/build ut/select
                 {:label "Maximum E-value"
                  :label-func :name
                  :value-func :value
                  :selected selected
                  :classname "pure-u-23-24"
                  :onchange-func (fn [x]
                                   (om/set-state! owner :selected (-> x .-target .-value))
                                   (put! change [:evalue (om/get-state owner :selected)]))
                  :records [{:value "0.01" :name "0.01"}
                            {:value "0.1" :name "0.1"}
                            {:value "1" :name "1"}
                            {:value "10" :name "10"}
                            {:value "100" :name "100"}]})))))

(defn blast-waiting [{:keys [key]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:count 1
       :done? false})
    om/IDidMount
    (did-mount [_]
      (go
        (loop [c (<! (timeout 5000))]
          (serve/get-data {:key key :type ::blast-done?}
                          #(do (ut/log %)
                               (if (= :success (:status %))
                                 (om/set-state! owner :done? (:result %))
                                 (ut/error-redirect %))))
          (if-not (om/get-state owner :done?) (recur (<! (timeout 5000))))))
      (go
        (loop [c (<! (timeout 5000))]
          (om/set-state! owner :count (inc (om/get-state owner :count)))
          (recur (<! (timeout 5000))))))
    om/IRenderState
    (render-state [_ {:keys [count done?] :as s}]
      (ut/log key s)
      (if done?
        (set! js/window.location (str "/prots/" key "/" 0))
        (dom/div
         nil
         (dom/div nil "Running search")
         (dom/div #js {:className "loader"} ""))))))

;; (defn- check-blast-input
;;   [text program]
;;   (let [allowed (if (#{"blastx" "blastp"} program)
;;                   (re-pattern "[^ A B C D E F G H I K L M N P Q R S T V W X Y Z *]")
;;                   (re-pattern "[^ A C G T R Y S W K M B D H V N . -]"))]
;;     (if-let [v (if (= \> (first value))
;;                  (-> (split-lines value) second)
;;                  value)]
;;       (cond (= (trim v) "")
;;             "No sequence entered."
;;             ()))))

(defn blast-submit
  [{:keys [text program] :as state} owner]
  (if (= (trim text) "")
    (js/alert "No sequence entered!")
    (serve/search-key {:type ::blast :data (-> (dissoc state :change)
                                               (dissoc state :key))}
                      #(if (= :success (:status %))
                         (om/set-state! owner :key (:key %))
                         (ut/error-redirect %)))))

(defn blast
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:text nil
       :program "blastp"
       :database :jdb-prot
       :matrix "BLOSUM62"
       :evalue "1"
       :gapped "Yes"
       :return "250"
       :key nil
       :change (chan)})
    om/IWillMount
    (will-mount [_]
      (let [change (om/get-state owner :change)]
        (go
          (loop []
            (let [c (<! change)]
              (apply om/set-state! owner c)
              (recur))))))
    om/IRenderState
    (render-state [_ {:keys [key] :as s}]
      (if key
        (om/build blast-waiting s)
        (dom/div
         #js {:className "annopadded"}
         (dom/div
          #js {:className "pure-form pure-form-stacked"}
          (dom/fieldset
           nil
           (dom/div
            #js {:className "pure-g"}
            (om/build sequence-box s)
            (om/build program-select s)
            (om/build database-select s)
            (om/build evalue-select s)
;;            (om/build matrix-select s)
            (om/build gapped-select s)
            (om/build return-select s)
            (dom/div #js {:className "padded pure-u-1-1"}
                     (dom/button
                      #js {:className
                           "pure-button pure-button-primary pure-u-1"
                           :onClick #(blast-submit s owner)}
                      "Go"))))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; init
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export init [key]
  (om/root blast nil
           {:target (. js/document (getElementById "t"))}))

