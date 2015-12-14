(ns ^:figwheel-always jellydb.protein
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [ajax.core :refer [GET POST]]
            [clojure.browser.repl :as repl]
            [cljs.core.async :refer [put! <! >! chan pub sub close! unsub]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [quil.core :as q :include-macros true]
            [cljs-http.client :as http]
            [jellydb.utilities :as jdbu]))

;; server calls

(defn- get-protein
  [owner]
  (letfn [(h [{:keys [status protein msg]}]
            (if (= "success" status)
              (om/set-state! owner :peptide protein)
              (js/alert msg)))]
    (GET "/peptide" {:error-handler jdbu/error-handler
                     :params {:id (om/get-state owner :accession)}
                     :handler h
                     :response-format :json
                     :keywords? true})))

;; drawing annotations

(defn draw [intervals l]
  (q/smooth)
  (q/background 255 255 255)
  (q/no-stroke)
  (let [line-width 900
        ym (* (q/width) 0.01)
        xm (* (q/height) 0.05)
        h (* (q/height) 0.90)
        w (* (q/width) 0.98)]
    (q/fill 113 142 164 80)
    (q/rect xm ym w h)
    (q/fill 113 142 164)
    (doseq [[s e] intervals]
      (let [wp (/ s l)
            fx (+ (* w wp) ym)
            fw (* (/ (- e s) l) w)]
        (q/rect fx ym (if (< fw 1) 1 fw) h)))))

(defn init-sketch [{:keys [id intervals sequence]}]
  (q/sketch
   :draw (fn [] (draw intervals (count sequence)))
   :host id
   :size [100 20]))

;; components

(defn anno-link [ips owner]
  (reify
    om/IInitState
    (init-state [_]
      {:url (condp = (:library (:library ips))
              "PFAM" "http://pfam.xfam.org/family/"
              "GO Term" "https://www.ebi.ac.uk/QuickGO/GTerm?id="
              "Reactome" "http://www.reactome.org/content/detail/"
              "MetaCyc" "http://biocyc.org/META/NEW-IMAGE?type=PATHWAY&object="
              "KEGG" "http://www.genome.jp/kegg-bin/show_pathway?ec"
              "PANTHER" "http://www.pantherdb.org/panther/family.do?clsAccession="
              "PROSITE_PROFILES" "http://prosite.expasy.org/"
              "SUPERFAMILY"
              "http://supfam.cs.bris.ac.uk/SUPERFAMILY/cgi-bin/scop.cgi?ipid="
              nil)})
    om/IRenderState
    (render-state [_ {:keys [url]}]
      (if url
        (dom/a #js {:href (str url (:accession ips))
                    :target "_blank"}
               (:accession ips))
        (dom/div nil (if (re-find #"^(TMhelix)" (:accession ips))
                       "TMhelix"
                       (:accession ips)))))))

(defn anno-th [name owner]
  (om/component
   (dom/th #js {:className "anno-display"} name)))

(defn anno-header [fields owner]
  (om/component
   (apply dom/tr
          nil
          (om/build-all anno-th fields))))

(defn anno-td [data owner]
  (om/component
   (dom/tr nil
           (dom/td #js {:className "anno-display"
                        :style #js {:width "20%"}}
                   (first data))
           (dom/td #js {:className "anno-display"
                        :style #js {:width "15%"}}
                   (second data))
           (dom/td #js {:className "anno-display"
                        :style #js {:width "50%"}}
                   (nth data 2))
           (dom/td #js {:className "anno-display"
                        :style #js {:width "15%"}
                        :title (str (nth data 3))}
                   (last data)))))

(defn anno-data [ips owner]
  (reify
    om/IInitState
    (init-state [_]
      {:ips ips})
    om/IDidMount
    (did-mount [_]
      (init-sketch (om/get-state owner :ips)))
    om/IRenderState
    (render-state [_ {:keys [ips]}]
      (om/build anno-td (:data ips)))))

(defn anno-display [ips owner]
  (reify
    om/IInitState
    (init-state [_]
      {:ips ips})
    om/IRenderState
    (render-state [_ {:keys [ips]}]
      (if (seq ips)
        (dom/div
         nil
         (dom/div #js {:className "pure-u-5-5 thick hcenter greyed"}
                  (:type (first ips)))
         (dom/div
          #js {:className "pure-u-5-5 tbpadded"}
          (dom/table
           nil
           (dom/thead nil
                      (om/build anno-header (:headers (first ips))))
           (apply dom/tbody nil (om/build-all anno-data ips)))))))))

;; protein display

(defn- intervals? [i]
  (if (> (count i) 1)
    "Intervals" "Interval"))

(defn process-ips [peptide]
  (map #(hash-map :sequence (:sequence peptide)
                  :accession (:accession %)
                  :id (str (:acc peptide) "-" (:accession %))
                  :intervals (:intervals %)
                  :headers (list "Accession" "Database"
                                 "Signature" (intervals? (:intervals %)))
                  :data (list (om/build anno-link %)
                              (:library (:library %))
                              (:signature %)
                              (->> (map (fn [x]
                                          (str (first x) "-" (second x)))
                                        (:intervals %))
                                   (interpose "; ")
                                   (apply str))
                              (dom/canvas
                               #js {:id (str (:acc peptide) "-" (:accession %))
                                    :width "100" :height "30"}))
                  :type "Annotations")
       (:ips-data (:ips peptide))))

(defn process-gos [peptide]
  (map (fn [x]
         {:sequence (:sequence peptide)
          :accession (:go-accession x)
          :id (str (:acc peptide) "-" (:go-accession x))
          :intervals (:intervals x)
          :type "GO Terms"
          :headers (list "Accession" "Component" "Name"
                         (intervals? (:intervals x)))
          :data (list
                 (om/build anno-link
                           {:accession (:go-accession x)
                            :library {:library "GO Term"}})
                 (condp = (:component x)
                   "MOLECULAR_FUNCTION" "MF"
                   "CELLULAR_COMPONENT" "CC"
                   "BIOLOGICAL_PROCESS" "BP")
                 (:name x)
                 (->> (map (fn [x]
                             (str (first x) "-" (second x)))
                           (:intervals x))
                      (interpose "; ")
                      (apply str))
                 (dom/canvas
                  #js {:id (str (:acc peptide) "-" (:go-accession x))
                       :width "100" :height "30"}))})
       (:go-terms (:ips peptide))))

(defn process-paths [peptide]
  (map (fn [x]
         {:sequence (:sequence peptide)
          :accession (:path-accession x)
          :id (str (:acc peptide) "-" (:path-accession x))
          :intervals (:intervals x)
          :type "Pathways"
          :headers (list "Accession" "Database" "Name"
                         (intervals? (:intervals x)))
          :data (list
                 (om/build anno-link
                           {:accession (:path-accession x)
                            :library {:library (:db x)}})
                 (:db x)
                 (:name x)
                 (->> (map (fn [x]
                             (str (first x) "-" (second x)))
                           (:intervals x))
                      (interpose "; ")
                      (apply str))
                 (dom/canvas
                  #js {:id (str (:acc peptide) "-" (:path-accession x))
                       :width "100" :height "30"}))})
       (:pathways (:ips peptide))))

(defn psview [peptide owner]
  (reify
      om/IInitState
      (init-state [_]
        {:format :ladder})
      om/IRenderState
      (render-state [_ {:keys [format]}]
        (dom/div #js {:className "tbpadded"}
                 (dom/div
                   #js {:className "tbpadded"}
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
                    (jdbu/numbered-format (:sequence peptide))
                    (jdbu/fasta-format peptide :sequence)))))))

(defn cdsview [peptide owner]
  (reify
      om/IInitState
      (init-state [_]
        {:format :ladder})
      om/IRenderState
      (render-state [_ {:keys [format]}]
        (dom/div #js {:className "tbpadded"}
                 (dom/div
                   #js {:className "tbpadded"}
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
                    (jdbu/numbered-format (:cds peptide))
                    (jdbu/fasta-format peptide :cds)))))))

(defn mrnaview [peptide owner]
  (reify
      om/IInitState
      (init-state [_]
        {:format :ladder})
      om/IRenderState
      (render-state [_ {:keys [format]}]
        (dom/div #js {:className "tbpadded"}
                 (dom/div
                  #js {:className "tbpadded"}
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
                    (jdbu/numbered-format (:mrna peptide))
                    (jdbu/fasta-format peptide :mrna)))))))

(defn dataset-view [{:keys [dataset abstract time name submitter]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:ab-view false
       :dataset dataset
       :abstract abstract
       :time time
       :name name
       :submitter submitter})
    om/IRenderState
    (render-state [_ {:keys [dataset abstract time name submitter ab-view]}]
      (dom/div
       #js {:className "annopadded"}
       (dom/div #js {:className "pure-g"}
                (dom/div #js {:className "pure-u-5-5 thick hcenter greyed"}
                         "Assembly")
                (dom/div #js {:className "pure-u-1-5 thick"} "Dataset ID:")
                (dom/div #js {:className "pure-u-4-5"} dataset)
                (dom/div #js {:className "pure-u-1-5 thick"} "Dataset Name:")
                (dom/div #js {:className "pure-u-4-5"} name)
                (dom/div #js {:className "pure-u-1-5 thick"} "Abstract:")
                (dom/div #js {:className "pure-u-4-5"} (if ab-view
                                                         abstract
                                                         (subs abstract 0 3)))
                (dom/div #js {:className "pure-u-1-5 thick"} " ")
                (dom/div #js {:className "pure-u-4-5 protsumm"}
                         (if ab-view
                           (dom/a #js {:className "flinka flinka"
                                       :onClick #(om/set-state! owner
                                                                :ab-view false)}
                                  "Less")
                           (dom/a #js {:className "flinka flinka"
                                       :onClick #(om/set-state! owner
                                                                :ab-view true)}
                                  "More")))
                (dom/div #js {:className "pure-u-1-5 thick"} "Date:")
                (dom/div #js {:className "pure-u-4-5"} time)
                (dom/div #js {:className "pure-u-1-5 thick"} "Submitted by:")
                (dom/div #js {:className "pure-u-4-5"}
                         (str (:first submitter) " " (:last submitter)))
                (dom/div #js {:className "pure-u-1-5 thick"} "Email:")
                (dom/div #js {:className "pure-u-4-5"} (:email submitter))
                (dom/div #js {:className "pure-u-1-5 thick"} "Address:")
                (dom/div #js {:className "pure-u-4-5"} (:address submitter))
                (dom/div #js {:className "pure-u-1-5 thick"} "Download:")
                (dom/div
                 #js {:className "pure-u-4-5"}
                 (dom/a #js {:href "#" :className "flinka"}
                        "Contigs") " | "
                 (dom/a #js {:href "#" :className "flinka"}
                        "mRNAs") " | "
                 (dom/a #js {:href "#" :className "flinka"}
                        "Predicted ORFs (nucleotide)") " | "
                 (dom/a #js {:href "#" :className "flinka"}
                        "Predicted ORFs (protein)")))))))

(defn- blast-data [data owner]
  (om/component
   (dom/tr nil
           (dom/td #js {:className "anno-display"
                        :style #js {:width "15%"}}
                   (:hacc data))
           (dom/td #js {:className "anno-display"
                        :style #js {:width "10%"}}
                   (:bits data))
           (dom/td #js {:className "anno-display"
                        :style #js {:width "10%"}}
                   (:eval data))
           (dom/td #js {:className "anno-display"
                        :style #js {:width "65%"}}
                   (:hdef data)))))

(defn- blast-table [ms owner]
  (om/component
   (dom/table
    nil
    (dom/thead
     nil
     (dom/tr
      nil
      (dom/th #js {:className "anno-display"} "Accession")
      (dom/th #js {:className "anno-display"} "Bit Score")
      (dom/th #js {:className "anno-display"} "E-value")
      (dom/th #js {:className "anno-display"} "Description")))
    (apply dom/tbody nil (om/build-all blast-data ms)))))

(defn blast-view [{:keys [blasts acc]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:blasts blasts})
    om/IRenderState
    (render-state [_ {:keys [blasts]}]
      (jdbu/log (str blasts))
      (dom/div
       #js {:className "annopadded"}
       (dom/div #js {:className "pure-u-5-5 thick hcenter greyed"}
                "Similar to proteins in SwissProt:")
       (om/build blast-table blasts)))))

(defn annotations [annos owner]
  (om/component
   (dom/div
    #js {:className "annopadded"}
    (if (seq (:ips annos))
      (om/build anno-display (:ips annos)))
    (if (seq (:gos annos))
      (om/build anno-display (:gos annos)))
    (if (seq (:paths annos))
      (om/build anno-display (:paths annos))))))

(defn set-visible [owner key]
  (om/set-state! owner :currentv key)
  (om/set-state! owner :visible "block"))

(defn protein-view [acc owner]
  (reify
    om/IInitState
    (init-state [_]
      {:accession acc
       :peptide nil
       :visible "none"
       :currentv nil})
    om/IWillMount
    (will-mount [_]
      (get-protein owner))
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (let [op (om/get-props owner)]
        (om/set-state! owner :accession np)
        (get-protein owner)
        (om/set-state! owner :currentv :protein)
        (if-not (= np (:accession op))
          (om/set-state! owner :visible "none"))
        (if (= "none" (om/get-state owner :visible))
          (om/set-state! owner :currentv nil))))
    om/IRenderState
    (render-state [_ {:keys [peptide currentv accession visible]}]
      (let [annos (hash-map :ips (process-ips peptide)
                            :gos (process-gos peptide)
                            :paths (process-paths peptide))
            is-annos? (or (seq (:ips annos))
                          (seq (:gos annos))
                          (seq (:paths annos)))]
        (dom/div
         nil
         (dom/div
          #js {:className "pure-menu pure-menu-horizontal"
               :style #js {:position "relative"}}
          (dom/ul
           #js {:className "pure-menu-list"}
           (dom/li #js {:className (if (= currentv :protein)
                                     "pure-menu-item mselected "
                                     "pure-menu-item")}
                   (dom/a
                    #js {:className "pure-menu-link"
                         :onClick #(set-visible owner :protein)}
                    "Protein"))
           (dom/li #js {:className (if (= currentv :cds)
                                     "pure-menu-item mselected"
                                     "pure-menu-item")}
                   (dom/a
                    #js {:className "pure-menu-link"
                         :onClick #(set-visible owner :cds)}
                    "CDS"))
           (dom/li #js {:className (if (= currentv :mrna)
                                     "pure-menu-item mselected"
                                     "pure-menu-item")}
                   (dom/a
                    #js {:className "pure-menu-link"
                         :onClick #(set-visible owner :mrna)}
                    "mRNA"))
           (dom/li #js {:className
                        (if-not is-annos?
                          "pure-menu-item pure-menu-disabled"
                          (if (= currentv :annotation)
                            "pure-menu-item mselected"
                            "pure-menu-item"))}
                   (dom/a
                    #js {:className "pure-menu-link"
                         :onClick #(if is-annos?
                                     (set-visible owner :annotation)
                                     false)}
                    "Annotations"))
           (dom/li #js {:className
                        (if-not (seq (:blasts peptide))
                          "pure-menu-item pure-menu-disabled"
                          (if (= currentv :blast)
                            "pure-menu-item mselected"
                            "pure-menu-item"))}
                   (dom/a
                    #js {:className "pure-menu-link"
                         :onClick #(if (seq (:blasts peptide))
                                     (set-visible owner :blast)
                                     false)}
                    "Homologies"))
           (dom/li #js {:className
                        (if (= currentv :dataset)
                          "pure-menu-item mselected"
                          "pure-menu-item")}
                   (dom/a
                    #js {:className "pure-menu-link"
                         :onClick #(set-visible owner :dataset)}
                    "Datasets"))))
         (dom/div
          #js {:style #js {:display visible
                           :position "relative"}}
          (dom/div #js {:style #js {:position "absolute"
                                    :top "15"
                                    :right "10"
                                    :color "#cad2d3"}}
                   (dom/a
                    #js {:onClick
                         #(do
                            (om/set-state! owner :visible "none")
                            (om/set-state! owner :currentv nil))
                         :style #js {:cursor "pointer"}}
                    "Close"))
          (condp = currentv
            :protein (om/build psview peptide)
            :cds (om/build cdsview peptide)
            :mrna (om/build mrnaview peptide)
            :annotation (om/build annotations annos)
            :dataset (om/build dataset-view peptide)
            :blast (om/build blast-view peptide)
            nil)))))))
