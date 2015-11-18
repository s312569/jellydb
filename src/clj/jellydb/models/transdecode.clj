(ns jellydb.models.transdecode
  (:require [clj-biosequence.core :as bs]
            [clojure.java.io :as io]
            [fs.core :as fs]
            [clj-commons-exec :as sh]
            [clojure.string :as str]))

(defn predict
  [f d]
  (and (let [res @(sh/sh ["TransDecoder.LongOrfs" "-t" f]
                         {:dir d})]
         (if (and (= 0 (:exit res)))
           true
           (throw (Exception. (str "Exception: "
                                   (:err res))))))
       (let [res @(sh/sh ["TransDecoder.Predict" "-t" f]
                         {:dir d})]
         (if (and (= 0 (:exit res)))
           true
           (throw (Exception. (str "Exception: "
                                   (:err res)))))))
  f)
