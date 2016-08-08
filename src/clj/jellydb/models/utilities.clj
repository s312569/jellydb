(ns jellydb.models.utilities
  (:require [jdbc.pool.c3p0 :as pool]
            [taoensso.nippy :as nip]
            [clojure.string :as st]
            [clojure.java.jdbc :as db]
            [clojure.java.io :as io]
            [me.raynes.fs :as fs])
  (:import [org.apache.commons.codec.binary Base64]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; getting stuff
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn new-uuid
  "Retrieve a type 4 (pseudo randomly generated) UUID. The UUID is
  generated using a cryptographically strong pseudo random number
  generator."
  []
  (str (java.util.UUID/randomUUID)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; working file
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def working-directory "/home/jason/Dropbox/jellydb/resources/working/")

(defn working-file
  ([prefix] (working-file prefix 10))
  ([prefix timeouts]
   (if-not (fs/directory? working-directory) (fs/mkdirs working-directory))
   (loop [p (io/file (str working-directory "/" prefix "-" (new-uuid)))
          c (atom 0)]
     (if (> @c timeouts)
       (throw (Exception. "Can't create temporary file."))
       (if (not (fs/file? p))
         (fs/absolute p)
         (recur (io/file (str working-directory "/" prefix "-" (new-uuid)))
                (swap! c inc)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; sequences
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn de-asterisk
  [fs]
  (update-in fs [:sequence] #(st/replace % #"\*" "")))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; db utilities
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (def spec
;;   (pool/make-datasource-spec
;;    {:classname "org.postgresql.Driver"
;;     :subprotocol "postgresql"
;;     :user "jason"
;;     :password "7004jason"
;;     :subname (str "//" "127.0.0.1" ":" "5432" "/" "jellydb")}))

;; (defmulti row->biosequence (fn [hm] (cond (:id hm)
;;                                           :contig
;;                                           (:hash hm)
;;                                           :hash)))

;; (defmethod row->biosequence nil
;;   [hm]
;;   (bs/map->fastaSequence (assoc hm :alphabet
;;                                 (keyword (:alphabet hm)))))

;; (defmethod row->biosequence :hash
;;   [hm]
;;   (nip/thaw (Base64/decodeBase64 (:hash hm))))

;; (defmethod row->biosequence :contig
;;   [hm]
;;   (bs/map->fastaSequence (assoc hm :alphabet
;;                                 (keyword (:alphabet hm))
;;                                 :acc
;;                                 (str (:id hm)))))

;; (defn- pep->mrna
;;   [m]
;;   (->> (-> (select-keys m [:acc :dataset :description :alphabet])
;;            (assoc :sequence (:mrna m)))
;;        row->biosequence))

;; (defn- pep->cds
;;   [m]
;;   (->> (-> (select-keys m [:acc :dataset :description :alphabet])
;;            (assoc :sequence (:cds m)))
;;        row->biosequence))

;; (defmulti get-biosequence (fn [q] (:table q)))

;; (defmethod get-biosequence :contigs
;;   [q]
;;   (let [id (-> (st/split (:acc q) #"\|") second Integer/parseInt)
;;         qu (str "select * from contigs where id=" id)]
;;     (db/query spec qu
;;               :row-fn row->biosequence
;;               :result-set-fn first)))

;; (defmethod get-biosequence :cds
;;   [q]
;;   (let [qu (str "select * from peps where acc='" (:acc q) "'")]
;;     (db/query spec qu
;;               :row-fn pep->cds
;;               :result-set-fn first)))

;; (defmethod get-biosequence :mrnas
;;   [q]
;;   (let [qu (str "select * from peps where acc='" (:acc q) "'")]
;;     (db/query spec qu
;;               :row-fn pep->mrna
;;               :result-set-fn first)))

;; (defmethod get-biosequence :default
;;   [q]
;;   (let [qu (str "select * from " (name (:table q)) "  where acc='" (:acc q) "'")]
;;     (db/query spec qu
;;               :row-fn row->biosequence
;;               :result-set-fn first)))

;; (defmulti all-biosequence (fn [q] (:table q)))

;; (defmethod all-biosequence :default
;;   [{:keys [table func] :or {table nil func identity}}]
;;   (let [qu (str "select * from " (name table))]
;;     (db/query spec qu
;;               :row-fn row->biosequence
;;               :result-set-fn func)))

;; (defmethod all-biosequence :cds
;;   [{:keys [table func] :or {table nil func identity}}]
;;   (let [qu (str "select * from peps")]
;;     (db/query spec qu
;;               :row-fn pep->cds
;;               :result-set-fn func)))

;; (defmethod all-biosequence :mrnas
;;   [{:keys [table func] :or {table nil func identity}}]
;;   (let [qu (str "select * from peps")]
;;     (db/query spec qu
;;               :row-fn pep->mrna 
;;               :result-set-fn func)))

;; (defmulti biosequence-query (fn [q] (:table q)))

;; (defmethod biosequence-query :default
;;   [{:keys [table func where] :or {table nil func identity where nil}}]
;;   (let [q (str "select * from " (name table) (if where (str " where " where)))]
;;     (db/query spec q :row-fn row->biosequence :result-set-fn func)))

;; (defmethod biosequence-query :cds
;;   [{:keys [table func where] :or {table nil func identity where nil}}]
;;   (let [q (str "select * from peps " (if where (str " where " where)))]
;;     (db/query spec q :row-fn pep->cds :result-set-fn func)))

;; (defmethod biosequence-query :mrnas
;;   [{:keys [table func where] :or {table nil func identity where nil}}]
;;   (let [q (str "select * from peps " (if where (str " where " where)))]
;;     (db/query spec q :row-fn pep->mrna :result-set-fn func)))

;; (defn query-db
;;   [q & rest]
;;   (apply db/query spec q rest))

;; (defn update-db
;;   [table m v]
;;   (db/update! spec table m v))
