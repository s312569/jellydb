(ns ^:figwheel-always jellydb.links
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jellydb.utilities :as jdbu]))

(defn make-link
  [{:keys [t v]} owner]
  (dom/a #js {:className "flinka"
              :onClick #(jdbu/pub-info owner :view nil v)}
         t))

(defmulti links (fn [x y] (str x)))

(defmethod links "blast"
  [v o]
  (om/component
   (let [links (vector {:t "Home" :v "home"}
                       {:t "Datasets" :v "datasets"}
                       {:t "Contact" :v "contact"})]
     (apply dom/div nil
            (->> (map #(make-link % o) links)
                 (interpose " | "))))))

(defmethod links "datasets"
  [v o]
  (om/component
   (let [links (vector {:t "Home" :v "home"}
                       {:t "Blast" :v "blast"}
                       {:t "Contact" :v "contact"})]
     (apply dom/div nil
            (->> (map #(make-link % o) links)
                 (interpose " | "))))))

(defmethod links "contact"
  [v o]
  (om/component
   (let [links (vector {:t "Home" :v "home"}
                       {:t "Blast" :v "blast"}
                       {:t "Datasets" :v "datasets"})]
     (apply dom/div nil
            (->> (map #(make-link % o) links)
                 (interpose " | "))))))

(defmethod links "proteins"
  [v o]
  (om/component
   (let [links (vector {:t "Home" :v "home"}
                       {:t "Blast" :v "blast"}
                       {:t "Datasets" :v "datasets"}
                       {:t "Contact" :v "contact"})]
     (apply dom/div nil
            (->> (map #(make-link % o) links)
                 (interpose " | "))))))

(defmethod links :default
  [v o]
  (om/component
   (dom/div nil "")))

(defn nav-links
  [view owner]
  (reify
    om/IInitState
    (init-state [_]
      {:view view})
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (om/set-state! owner :view np))
    om/IRenderState
    (render-state [_ {:keys [view]}]
      (om/build links view))))
        
