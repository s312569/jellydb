(ns jellydb.routes.proteins
  (:require [compojure.core :refer :all]
            [jellydb.models.db :as db]
            [clj-biosequence.core :as bs]
            [jellydb.views.layout :as layout]
            [hiccup.page :refer [include-js]]))

(defn- protein-string
  [p]
  [:label {:class "protsumm"}
   [:input {:class "protsumm" :type "checkbox"
            :id "selected"
            :name "selected" :value (bs/accession p)}]
   [:a {:href "#" :width "100%"}
    (bs/description p)]
   [:div
    [:span {:style "padding-RIGHT: 15px"}
     (str (count (bs/bs-seq p)) " amino acid protein")]
    [:span (str "JellyDB accession: " (bs/accession p))]]
   [:div
    [:a {:href "#"} "Something else"]]])

(defn- merge-disabled
  [p h]
  (if p (merge h {:disabled "true"}) h))

(defn- export-drop
  []
  [:select {:name "export" :id "export"}
   [:option {:value "" :selected "" :disabled ""}
    "Export as ..."]
   [:option {:value "fasta"} "Fasta"]
   [:option {:value "xml"} "XML"]
   [:option {:value "more"} "More"]])

(defn- page-nav
  [page total]
  [:div
   [:span {:style "float:left"}
    (export-drop)]
   [:span {:style "float:right"}
    [:button (merge-disabled
              (>= page total)
              {:type "submit" :name "page" :value total}) ">>"]]
   [:span {:style "float:right"}
    [:button (merge-disabled
              (>= page total)
              {:type "submit" :name "page" :value (+ page 1)}) ">"]]
   [:span {:style "float:right"}
    [:button {:type "submit" :disabled "true"} (str "Page " page " of " total)]]
   [:span {:style "float:right"}
    [:button (merge-disabled
              (= page 1)
              {:type "submit" :name "page" :value (- page 1)}) "<"]]
   [:span {:style "float:right"}
    [:button (merge-disabled
              (= page 1)
              {:type "submit" :name "page" :value "1"}) "<<"]]])

(defn- get-query
  [form-data]
  (if-not (form-data "search")
    (vector "select * from peps"
            (int (Math/ceil (/ (db/query-db "select count(*) from peps"
                                :row-fn :count
                                :result-set-fn first)
                               20))))
    ""))

(defn- gather-selected
  [form-data]
  (let [s (form-data "selected")
        p (form-data "selections")]
    (if s
      (->> (if (string? s)
             (list p s)
             (cons p s))
           (remove nil?)
           (interpose ",")
           (apply str))
      p)))

(defn- proteins
  [form-data]
  "This will clean and assemble searches as well"
  (layout/common
   (include-js "http://fb.me/react-0.11.1.js")
   (include-js "js/out/goog/base.js")
   (include-js "/js/jquery-1.11.2.min.js")
   (include-js "/js/ui.js")
   (include-js "/js/app.js")
   [:script {:type "text/javascript"} "goog.require(\"acme.core\");"]))

(defroutes proteins-routes
  (GET "/proteins" []
       (proteins {})))
