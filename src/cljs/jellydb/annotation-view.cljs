(ns ^:figwheel-always jellydb.annotation-view
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.server :as serve]
            [jellydb.utilities :as ut]
            [quil.core :as q :include-macros true]))

;; drawing annotations

(defn- draw [locations l]
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
    (doseq [{:keys [start end]} locations]
      (let [wp (/ start l)
            fx (+ (* w wp) ym)
            fw (* (/ (- end start) l) w)]
        (q/rect fx ym (if (< fw 1) 1 fw) h)))))

(defn- init-sketch [{:keys [ac locations seq-length] :as m}]
  (q/sketch
   :draw (fn [] (draw locations seq-length))
   :host ac
   :size [100 20]))

;; ;; components

(defn- annotation-link [ips owner]
  (reify
    om/IInitState
    (init-state [_]
      {:url (condp = (get-in ips [:signature :library :library])
              "PFAM" "http://pfam.xfam.org/family/"
              "GO Term" "https://www.ebi.ac.uk/QuickGO/GTerm?id="
              "Reactome" "http://www.reactome.org/content/detail/"
              "MetaCyc" "http://biocyc.org/META/NEW-IMAGE?type=PATHWAY&object="
              "KEGG" "http://www.genome.jp/kegg-bin/show_pathway?ec"
              "PANTHER" "http://www.pantherdb.org/panther/family.do?clsAccession="
              "PROSITE_PROFILES" "http://prosite.expasy.org/"
              "SUPERFAMILY" "http://supfam.cs.bris.ac.uk/SUPERFAMILY/cgi-bin/scop.cgi?ipid="
              nil)})
    om/IRenderState
    (render-state [_ {:keys [url]}]
      (let [acc (get-in ips [:signature :ac])]
        (if url
          (dom/a #js {:href (str url acc)
                      :target "_blank"}
                 acc)
          (dom/div nil acc))))))

(defn- anno-th [name owner]
  (om/component
   (dom/th #js {:className "anno-display"} name)))

(defn- annotation-tds
  [{:keys [link database signature host canvas sketch]} owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (init-sketch sketch))
    om/IRenderState
    (render-state [_ _]
      (dom/tr
       nil
       (dom/td #js {:className "anno-display"
                    :style #js {:width "20%"}}
               link)
       (dom/td #js {:className "anno-display"
                    :style #js {:width "15%"}}
               database)
       (dom/td #js {:className "anno-display"
                    :style #js {:width "50%"}}
               signature)
       (dom/td #js {:className "anno-display"
                    :style #js {:width "15%"}
                    :title "Title"}
               canvas)))))

(defn- render-annotations
  [{:keys [headers description data]}]
  (dom/div
   nil
   (dom/div #js {:className "pure-u-5-5 thick hcenter greyed"} description)
   (dom/div
    #js {:className "pure-u-5-5 tbpadded"}
    (dom/table
     nil
     (dom/thead nil (apply dom/tr nil (om/build-all anno-th headers)))
     (apply
      dom/tbody
      nil
      (om/build-all annotation-tds data))))))

(defmulti annotation-desc (fn [i] (get-in i [:signature :library :library])))

(defmethod annotation-desc :default
  [i]
  (get-in i [:signature :entry :desc]))

(defmethod annotation-desc "SUPERFAMILY"
  [i]
  (get-in i [:signature :name]))

(defmethod annotation-desc "PFAM"
  [i]
  (get-in i [:signature :desc]))

(defmulti annotations-data (fn [m] (get-in m [:signature :library :library])))

(defmethod annotations-data :default
  [i]
  (let [host (str (get-in i [:signature :ac]) "-" (gensym))]
    {:link (om/build annotation-link i)
     :database (get-in i [:signature :library :library])
     :signature (annotation-desc i)
     :sketch {:ac host :locations (:locations i)
              :seq-length (:sl i)}
     :canvas (dom/canvas #js {:id host :width "100" :height "30"})}))

(defmethod annotations-data "TMHMM"
  [i]
  (let [host (str (get-in i [:signature :ac]) "-" (gensym))]
      {:link "TMHelix"
       :database "TMHMM"
       :signature "Trans-membrane helix"
       :sketch {:ac host :locations (:locations i)
                :seq-length (:sl i)}
       :canvas (dom/canvas #js {:id host :width "100" :height "30"})}))

(defn annotations
  [{:keys [protein ipss]} owner]
  (reify
    om/IInitState
    (init-state [_]
      (if (seq ipss)
        (let [sl (count (:sequence protein))]
          {:headers ["Accession" "Database" "Signature" "Interval(s)"]
           :description "Annotations"
           :data (map annotations-data (map #(assoc % :sl sl) ipss))})
        {}))
    om/IRenderState
    (render-state [_ m]
      (if (:data m) (render-annotations m)))))

(defn go-terms
  [{:keys [protein ipss]} owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [gos (->> (mapcat #(let [l (map (fn [x] (select-keys x [:start :end]))
                                           (:locations %))
                                    gs (get-in % [:signature :entry :gos])]
                                (map (fn [x] (assoc x :locations l)) gs))
                             ipss)
                     frequencies
                     keys)]
        (if (seq gos)
          {:headers ["Accession" "Component" "Name" "Interval(s)"]
           :description "GO Terms"
           :data
           (map (fn [i]
                  (let [host (str (gensym) "-" (:id i))]
                    {:link
                     (dom/a
                      #js {:href (str "https://www.ebi.ac.uk/QuickGO/GTerm?id=" (:id i))
                           :target "_blank"}
                      (:id i))
                     :database (condp = (:category i)
                                 "MOLECULAR_FUNCTION" "MF"
                                 "CELLULAR_COMPONENT" "CC"
                                 "BIOLOGICAL_PROCESS" "BP")
                     :signature (:name i)
                     :sketch {:ac host :locations (:locations i)
                              :seq-length (count (:sequence protein))}
                     :canvas (dom/canvas #js {:id host :width "100" :height "30"})}))
                gos)}
          {})))
    om/IRenderState
    (render-state [_ m]
      (if (:data m) (render-annotations m)))))

(defn pathways
  [{:keys [protein ipss]} owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [ps (->> (mapcat #(let [l (map (fn [x] (select-keys x [:start :end]))
                                          (:locations %))
                                   gs (get-in % [:signature :entry :pathways])]
                               (map (fn [x] (assoc x :locations l)) gs))
                            ipss)
                    frequencies
                    keys)]
        (if (seq ps)
          {:headers ["Accession" "Database" "Name" "Interval(s)"]
           :description "Pathways"
           :data (map (fn [i]
                        (let [host (str (:ac i) "-" (:id i))]
                          {:link (om/build annotation-link {:signature
                                                            {:library {:library (:db i)}
                                                             :ac (:id i)}})
                           :database (:db i)
                           :signature (:name i)
                           :sketch {:ac host :locations (:locations i)
                                    :seq-length (count (:sequence protein))}
                           :canvas (dom/canvas #js {:id host :width "100" :height "30"})}))
                      ps)}
          {})))
    om/IRenderState
    (render-state [_ m]
      (if (:data m) (render-annotations m)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; api
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn annotation-view
  [protein owner]
  (reify
    om/IInitState
    (init-state [_]
      {:accession (:accession protein)
       :ips nil})
    om/IWillMount
    (will-mount [_]
      (serve/get-data-check {:accession (:accession protein) :type ::ips} :ips owner))
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (when-not (= (om/get-state owner :accession) (:accession np))
        (om/set-state! owner :accession (:accession np))
        (serve/get-data-check {:accession (:accession np) :type ::ips} :ips owner)))
    om/IRenderState
    (render-state [_ {:keys [ips accession]}]
      (if-not ips
        (dom/div
         nil
         (dom/div #js {:className "tbpadded"} "")
         (om/build ut/waiting nil))
        (dom/div
         nil
         (dom/div #js {:className "tbpadded"} "")
         (om/build annotations {:protein protein :ipss ips})
         (om/build go-terms {:protein protein :ipss ips})
         (om/build pathways {:protein protein :ipss ips}))))))
