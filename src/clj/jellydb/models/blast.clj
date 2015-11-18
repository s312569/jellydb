(ns jellydb.models.blast
  (:require [clojure.string :as st]
            [clj-biosequence.core :as bs]
            [clj-biosequence.blast :as bl]
            [fs.core :as fs]))

(def swissprot-db (bl/init-blast-db "/home/jason/Dropbox/jellydb/resources/blast/swissprot" :iupacAminoAcids))

(defn blast-sequences
  [f]
  (let [c (atom 0)]
    (with-open [r (-> (bs/init-fasta-file f :iupacAminoAcids)
                      bs/bs-reader)]
      (-> (pmap #(bl/blast %
                           "blastp"
                           swissprot-db
                           (str f "-blast.out-" (swap! c inc)))
                (partition-all 10000 (bs/biosequence-seq r)))
          (bs/index-combine-files (str f "-blast-combined"))))))


