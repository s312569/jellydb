(ns jellydb.models.utilities
  (:require [jdbc.pool.c3p0 :as pool]
            [clj-biosequence.core :as bs]
            [taoensso.nippy :as nip]
            [clojure.string :as st]
            [clojure.java.jdbc :as db]
            [clojure.java.io :as io])
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
;; db utilities
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def spec
  (pool/make-datasource-spec
   {:classname "org.postgresql.Driver"
    :subprotocol "postgresql"
    :user "jason"
    :password "7004jason"
    :subname (str "//" "127.0.0.1" ":" "5432" "/" "jellydb")}))

(defmulti row->biosequence (fn [hm] (cond (:id hm)
                                          :contig
                                          (:hash hm)
                                          :hash)))

(defmethod row->biosequence nil
  [hm]
  (bs/map->fastaSequence (assoc hm :alphabet
                                (keyword (:alphabet hm)))))

(defmethod row->biosequence :hash
  [hm]
  (nip/thaw (Base64/decodeBase64 (:hash hm))))

(defmethod row->biosequence :contig
  [hm]
  (bs/map->fastaSequence (assoc hm :alphabet
                                (keyword (:alphabet hm))
                                :acc
                                (str (:id hm)))))

(defmulti get-biosequence (fn [q] (:table q)))

(defmethod get-biosequence :contigs
  [q]
  (let [id (-> (st/split (:acc q) #"\|") second Integer/parseInt)
        qu (str "select * from contigs where id=" id)]
    (db/query spec qu
              :row-fn row->biosequence
              :result-set-fn first)))

(defmethod get-biosequence :blasts
  [q]
  (let [qu (str "select * from blasts where acc='" (:acc q) "'")]
    (db/query spec qu
              :row-fn row->biosequence
              :result-set-fn first)))

(defmethod get-biosequence :default
  [q]
  (let [qu (str "select * from " (name (:table q)) "  where acc='" (:acc q) "'")]
    (db/query spec qu
              :row-fn row->biosequence
              :result-set-fn first)))

(defmulti all-biosequence (fn [q] (:table q)))

(defmethod all-biosequence :ips
  [q]
  (let [qu (str "select * from " (name (:table q)))]
    (db/query spec qu
              :row-fn #(->> (row->biosequence %)))))

(defmethod all-biosequence :peps
  [q]
  (let [qu (str "select * from " (name (:table q)))]
    (db/query spec qu
              :row-fn #(->> (row->biosequence %)))))

(defn query->file
  ([query file] (query->file query file bs/fasta-string))
  ([query file func]
   (with-open [w (io/writer file)]
     (db/query spec query
               :row-fn #(as-> (row->biosequence %)
                            r
                          (bs/fasta-string r)
                          (.write w (str r "\n")))))
   file))

(defn query-db
  [q & rest]
  (apply db/query spec q rest))

