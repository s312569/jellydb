(ns ^:figwheel-always jellydb.annotation-view
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.server :as serve]
            [jellydb.utilities :as ut]
            [quil.core :as q :include-macros true]))

;; drawing annotations

;; (defn- draw [intervals l]
;;   (q/smooth)
;;   (q/background 255 255 255)
;;   (q/no-stroke)
;;   (let [line-width 900
;;         ym (* (q/width) 0.01)
;;         xm (* (q/height) 0.05)
;;         h (* (q/height) 0.90)
;;         w (* (q/width) 0.98)]
;;     (q/fill 113 142 164 80)
;;     (q/rect xm ym w h)
;;     (q/fill 113 142 164)
;;     (doseq [[s e] intervals]
;;       (let [wp (/ s l)
;;             fx (+ (* w wp) ym)
;;             fw (* (/ (- e s) l) w)]
;;         (q/rect fx ym (if (< fw 1) 1 fw) h)))))

;; (defn- init-sketch [{:keys [id intervals sequence]}]
;;   (q/sketch
;;    :draw (fn [] (draw intervals (count sequence)))
;;    :host id
;;    :size [100 20]))

;; ;; components

;; (defn- anno-link [ips owner]
;;   (reify
;;     om/IInitState
;;     (init-state [_]
;;       {:url (condp = (:library (:library ips))
;;               "PFAM" "http://pfam.xfam.org/family/"
;;               "GO Term" "https://www.ebi.ac.uk/QuickGO/GTerm?id="
;;               "Reactome" "http://www.reactome.org/content/detail/"
;;               "MetaCyc" "http://biocyc.org/META/NEW-IMAGE?type=PATHWAY&object="
;;               "KEGG" "http://www.genome.jp/kegg-bin/show_pathway?ec"
;;               "PANTHER" "http://www.pantherdb.org/panther/family.do?clsAccession="
;;               "PROSITE_PROFILES" "http://prosite.expasy.org/"
;;               "SUPERFAMILY"
;;               "http://supfam.cs.bris.ac.uk/SUPERFAMILY/cgi-bin/scop.cgi?ipid="
;;               nil)})
;;     om/IRenderState
;;     (render-state [_ {:keys [url]}]
;;       (if url
;;         (dom/a #js {:href (str url (:accession ips))
;;                     :target "_blank"}
;;                (:accession ips))
;;         (dom/div nil (if (re-find #"^(TMhelix)" (:accession ips))
;;                        "TMhelix"
;;                        (:accession ips)))))))

;; (defn- anno-th [name owner]
;;   (om/component
;;    (dom/th #js {:className "anno-display"} name)))

;; (defn- anno-header [fields owner]
;;   (om/component
;;    (apply dom/tr
;;           nil
;;           (om/build-all anno-th fields))))

;; (defn- anno-td [data owner]
;;   (om/component
;;    (dom/tr nil
;;            (dom/td #js {:className "anno-display"
;;                         :style #js {:width "20%"}}
;;                    (first data))
;;            (dom/td #js {:className "anno-display"
;;                         :style #js {:width "15%"}}
;;                    (second data))
;;            (dom/td #js {:className "anno-display"
;;                         :style #js {:width "50%"}}
;;                    (nth data 2))
;;            (dom/td #js {:className "anno-display"
;;                         :style #js {:width "15%"}
;;                         :title (str (nth data 3))}
;;                    (last data)))))

;; (defn- anno-data [ips owner]
;;   (reify
;;     om/IInitState
;;     (init-state [_]
;;       {:ips ips})
;;     om/IDidMount
;;     (did-mount [_]
;;       (init-sketch (om/get-state owner :ips)))
;;     om/IRenderState
;;     (render-state [_ {:keys [ips]}]
;;       (om/build anno-td (:data ips)))))

;; (defn- anno-display [ips owner]
;;   (reify
;;     om/IInitState
;;     (init-state [_]
;;       {:ips ips})
;;     om/IRenderState
;;     (render-state [_ {:keys [ips]}]
;;       (if (seq ips)
;;         (dom/div
;;          nil
;;          (dom/div #js {:className "pure-u-5-5 thick hcenter greyed"}
;;                   (:type (first ips)))
;;          (dom/div
;;           #js {:className "pure-u-5-5 tbpadded"}
;;           (dom/table
;;            nil
;;            (dom/thead nil
;;                       (om/build anno-header (:headers (first ips))))
;;            (apply dom/tbody nil (om/build-all anno-data ips)))))))))

;; ;; protein display

;; (defn- intervals? [i]
;;   (if (> (count i) 1)
;;     "Intervals" "Interval"))

;; (defn process-ips [peptide]
;;   (map #(hash-map :sequence (:sequence peptide)
;;                   :accession (:accession %)
;;                   :id (str (:acc peptide) "-" (:accession %))
;;                   :intervals (:intervals %)
;;                   :headers (list "Accession" "Database"
;;                                  "Signature" (intervals? (:intervals %)))
;;                   :data (list (om/build anno-link %)
;;                               (:library (:library %))
;;                               (:signature %)
;;                               (->> (map (fn [x]
;;                                           (str (first x) "-" (second x)))
;;                                         (:intervals %))
;;                                    (interpose "; ")
;;                                    (apply str))
;;                               (dom/canvas
;;                                #js {:id (str (:acc peptide) "-" (:accession %))
;;                                     :width "100" :height "30"}))
;;                   :type "Annotations")
;;        (:ips-data (:ips peptide))))

;; (defn process-gos [peptide]
;;   (map (fn [x]
;;          {:sequence (:sequence peptide)
;;           :accession (:go-accession x)
;;           :id (str (:acc peptide) "-" (:go-accession x))
;;           :intervals (:intervals x)
;;           :type "GO Terms"
;;           :headers (list "Accession" "Component" "Name"
;;                          (intervals? (:intervals x)))
;;           :data (list
;;                  (om/build anno-link
;;                            {:accession (:go-accession x)
;;                             :library {:library "GO Term"}})
;;                  (condp = (:component x)
;;                    "MOLECULAR_FUNCTION" "MF"
;;                    "CELLULAR_COMPONENT" "CC"
;;                    "BIOLOGICAL_PROCESS" "BP")
;;                  (:name x)
;;                  (->> (map (fn [x]
;;                              (str (first x) "-" (second x)))
;;                            (:intervals x))
;;                       (interpose "; ")
;;                       (apply str))
;;                  (dom/canvas
;;                   #js {:id (str (:acc peptide) "-" (:go-accession x))
;;                        :width "100" :height "30"}))})
;;        (:go-terms (:ips peptide))))

;; (defn process-paths [peptide]
;;   (map (fn [x]
;;          {:sequence (:sequence peptide)
;;           :accession (:path-accession x)
;;           :id (str (:acc peptide) "-" (:path-accession x))
;;           :intervals (:intervals x)
;;           :type "Pathways"
;;           :headers (list "Accession" "Database" "Name"
;;                          (intervals? (:intervals x)))
;;           :data (list
;;                  (om/build anno-link
;;                            {:accession (:path-accession x)
;;                             :library {:library (:db x)}})
;;                  (:db x)
;;                  (:name x)
;;                  (->> (map (fn [x]
;;                              (str (first x) "-" (second x)))
;;                            (:intervals x))
;;                       (interpose "; ")
;;                       (apply str))
;;                  (dom/canvas
;;                   #js {:id (str (:acc peptide) "-" (:path-accession x))
;;                        :width "100" :height "30"}))})
;;        (:pathways (:ips peptide))))

;; (defn annotations [annos owner]
;;   (om/component
;;    (dom/div
;;     #js {:className "annopadded"}
;;     (if (seq (:ips annos))
;;       (om/build anno-display (:ips annos)))
;;     (if (seq (:gos annos))
;;       (om/build anno-display (:gos annos)))
;;     (if (seq (:paths annos))
;;       (om/build anno-display (:paths annos))))))

;; (defn- anno-display [ips owner]
;;   (reify
;;     om/IInitState
;;     (init-state [_]
;;       {:ips ips})
;;     om/IRenderState
;;     (render-state [_ {:keys [ips]}]
;;       (if (seq ips)
;;         (dom/div
;;          nil
;;          (dom/div #js {:className "pure-u-5-5 thick hcenter greyed"}
;;                   (:type (first ips)))
;;          (dom/div
;;           #js {:className "pure-u-5-5 tbpadded"}
;;           (dom/table
;;            nil
;;            (dom/thead nil
;;                       (om/build anno-header (:headers (first ips))))
;;            (apply dom/tbody nil (om/build-all anno-data ips)))))))))

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
        (om/build ut/waiting nil)
        (dom/div
         #js {:className "tbpadded" :style #js {:text-align "left"}}
         (dom/div
          #js {:className "tbpadded"}
          (str ips)))))))
