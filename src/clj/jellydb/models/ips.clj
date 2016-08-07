(ns jellydb.models.ips
  (:require [clojure.string :as st]
            [clj-interproscan.core :as ips]
            [jellydb.models.db :refer all]))




(defn ips-sequences
  [f]
  (let [c (atom 0)]
    (with-open [r (-> (bs/init-fasta-file f :iupacAminoAcids)
                      bs/bs-reader)]
      (-> (pmap #(ip/ips  % (str f "-ips.out-" (swap! c inc))
                          :appl '("ProDom" "Hamap" "SMART" "ProSiteProfiles" "ProSitePatterns" "SUPERFAMILY" "Gene3D" "PIRSF" "Pfam" "TMHMM" "SignalP_EUK"))
                (->> (bs/biosequence-seq r)
                     (partition-all 10000)))
          (bs/index-combine-files (str f "-ips.combined"))))))
