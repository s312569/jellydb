(ns jellydb.models.ips
  (:require [clojure.string :as st]
            [clj-biosequence.core :as bs]
            [clj-biosequence.interproscan :as ip]))

(defn ips-sequences
  [f]
  (let [c (atom 0)]
    (with-open [r (-> (bs/init-fasta-file f :iupacAminoAcids)
                      bs/bs-reader)]
      (-> (pmap #(ip/ips  % (str f "-ips.out-" (swap! c inc))
                          :appl nil)
                (->> (bs/biosequence-seq r)
                     (partition-all 10000)))
          (bs/index-combine-files (str f "-ips.combined"))))))
