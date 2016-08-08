(ns jellydb.models.import
  (:require [jellydb.models.blast :refer [blast-dataset]]
            [jellydb.models.ips :as ip]
            [jellydb.models.db :refer :all]
            [jellydb.models.utilities :refer [working-directory working-file]]
            [biodb.core :as bdb]
            [clj-fasta.core :refer [fasta->file]]
            [me.raynes.fs :refer [delete delete-dir]]
            [clj-commons-exec :refer [sh]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; importing functions
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- insert-dataset
  ([{:keys [dataset] :as m} submitter] (insert-dataset m submitter dbspec))
  ([{:keys [dataset]} submitter dbspec]
   (bdb/with-transaction [con dbspec]
     (let [did (-> (bdb/insert-sequences! con :datasets :dataset
                                          [(-> (dissoc dataset :pmid)
                                               (assoc :submitter submitter)
                                               (update-in [:type] name))])
                   first :id)]
       (if-not did
         (throw (Exception. "Something wrong in dataset insert."))
         (bdb/insert-sequences! con :pmids :pmid
                                (map #(hash-map :did did
                                                :pmid (if (integer? %)
                                                        %
                                                        (Integer/parseInt %)))
                                     (:pmid dataset))))
       did))))

(defn- insert-or-retrieve-submitter
  ([{:keys [submitter] :as m}] (insert-or-retrieve-submitter m dbspec))
  ([{:keys [submitter]} dbspec]
   (if-not submitter (throw (Exception. "Submitter cannot be null")))
   (let [qu ["select id from submitters where first=? and last=? and email=?"
             (:first submitter) (:last submitter) (:email submitter)]]
     (or (-> (bdb/query-sequences dbspec qu :submitter) first :id)
         (-> (bdb/insert-sequences! dbspec :submitters :submitter [submitter])
             first
             :id)))))

(defn- insert-contigs
  ([{:keys [files] :as m} dataset] (insert-contigs m dataset dbspec))
  ([{:keys [files]} dataset dbspec]
   (fasta-insert files :contigs :contig dataset dbspec)))

(defn- import-peptides
  ([files did] (import-peptides files did dbspec))
  ([files did dbspec]
   (fasta-insert files :peptides :peptide did dbspec)))
 
(defn- import-mrnas
  ([files did] (import-mrnas files did dbspec))
  ([files did dbspec]
   (fasta-insert files :mrnas :mrna did dbspec)))

(defn- import-cdss
  ([files did] (import-cdss files did dbspec))
  ([files did dbspec]
   (fasta-insert files :cdss :cds did dbspec)))

(defn- transdecode
  [did con]
  (let [tf (working-file "tdec")
        func
        (fn [x]
          (fasta->file x tf)
          (and (let [res @(sh ["TransDecoder.LongOrfs" "-t" (str tf)]
                                 {:dir working-directory})]
                 (not (if-not (= 0 (:exit res))
                        (throw (Exception. (:err res))))))
               (let [res @(sh ["TransDecoder.Predict" "-t" (str tf)]
                                 {:dir working-directory})]
                 (not (if-not (= 0 (:exit res))
                        (throw (Exception. (str "Exception: " (:err res))))))))
          x)]
    (try
      (apply-to-dataset {:table :contigs :did did :func func})
      (import-peptides [(str tf ".transdecoder.pep")] did con)
      (import-mrnas [(str tf ".transdecoder.mRNA")] did con)
      (import-cdss [(str tf ".transdecoder.cds")] did con)
      (finally
        (delete tf)
        (doseq [f [".transdecoder.pep"
                   ".transdecoder.mRNA"
                   ".transdecoder.cds"
                   ".transdecoder.bed"
                   ".transdecoder.gff3"]]
          (delete (str tf f)))
        (delete-dir (str tf ".transdecoder_dir"))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; import api
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti import-dataset (fn [m] (get-in m [:dataset :type])))

(defmethod import-dataset :assembly
  [m]
  (let [sid (atom nil)
        did (atom nil)]
    (bdb/with-transaction [con dbspec]
      (reset! sid (insert-or-retrieve-submitter m con))
      (reset! did (insert-dataset m @sid con))
      (insert-contigs m @did con))
    (bdb/with-transaction [con dbspec]
      (transdecode @did con))
    (bdb/with-transaction [con dbspec]
      (blast-dataset @did))
    (bdb/with-transaction [con dbspec]
      (ip/ips-dataset @did))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; testing
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def test-submit
  {:files ["/home/jason/Dropbox/jellydb/resources/test-data/test.fasta"]
   :submitter {:first "Jason"
               :last "Mulvenna"
               :email "jason.mulvenna@gmail.com"
               :address "QIMR Berghofer"}
   :dataset {:name "test"
             :abstract "this is an abstract"
             :pmid ["123456" "78910"]
             :species "S. pecies"
             :type :assembly}})
