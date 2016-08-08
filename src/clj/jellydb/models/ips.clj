(ns jellydb.models.ips
  (:require [clojure.string :as st]
            [clojure.java.io :as io]
            [clj-interproscan.core :as ips]
            [clj-fasta.core :as fa]
            [jellydb.models.db :refer :all]
            [fs.core :as fs]
            [jellydb.models.utilities :as ut]
            [biodb.core :as bdb]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; importing
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- ips-func
  [coll]
  (let [ft (ut/working-file (str "ips-input-"))]
    (try
      (ips/ips (map ut/de-asterisk coll) ft
               {:appl ["ProDom" "Hamap" "SMART" "ProSiteProfiles"
                       "ProSitePatterns" "SUPERFAMILY" "Gene3D"
                       "PIRSF" "Pfam" "TMHMM" "SignalP_EUK"]})
      (finally
        (fs/delete ft)))))

(defn ips-dataset
  [did]
  (let [ipss (apply-to-dataset {:table :peptides :did did :func ips-func})]
    (try
      (dorun (map #(with-open [r (io/reader %)]
                     (->> (ips/ips-seq r)
                          (insert-sequences :interproscan)))
                  ipss))
      (finally
        (doseq [f ipss]
          (fs/delete f))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; testing
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn peptides->file
  [did]
  (apply-to-dataset {:table :peptides
                     :did did
                     :func #(fa/fasta->file % "/home/jason/Dropbox/jellydb/resources/test-data/peps-test.fa"
                                            :func (fn [x]
                                                    (-> (ut/de-asterisk x)
                                                        (fa/fasta-string))))}))
