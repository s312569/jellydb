(ns jellydb.models.db
  (:require [clojure.java.io :refer [reader]]
            [biodb.core :as bdb]
            [clj-fasta.core :refer [fasta-seq fasta->file]]
            [clojure.java.jdbc :as db]
            [clj-interproscan.core :as ips]
            [jellydb.models.userblast :as bl]
            [jellydb.models.utilities :as ut]
            [clojure.string :as string]
            [clojure.edn :as edn]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; spec
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def dbspec (bdb/db-spec {:dbname "jellydb"
                          :dbtype :postgres
                          :user "jason"
                          :password "7004jason"}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; creation
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(declare fasta-insert)

(defn- import-swissprot
  []
  (let [f "/home/jason/Dropbox/jellydb/resources/internal-blast/swissprot"]
    (bdb/with-transaction [con dbspec]
      (let [sid (->> (bdb/insert-sequences! con :submitters :submitter
                                            [{:first "DB"
                                              :last "Maintainer"
                                              :email ""
                                              :address "Here"}])
                     first
                     :id)
            did (->> (bdb/insert-sequences! con :datasets :dataset
                                            [{:name "SwissProt"
                                              :abstract "SwissProt data"
                                              :species "All"
                                              :submitter sid
                                              :type "proteins"}])
                     first
                     :id)]
        (fasta-insert [f] :swissprots :swissprot did con)
        (bdb/insert-sequences! con :blastfiles :blast-file
                               [{:did did :file f :type "prot"}])))))

(def tables {:submitters :submitter
             :datasets :dataset
             :pmids :pmid
             :peptides :peptide
             :mrnas :mrna
             :cdss :cds
             :contigs :contig
             :blasts :jdb-blast
             :interproscan :ips
             :blastfiles :blast-file
             :swissprots :swissprot
             :annotations :annotation
             :msmspeptides :msms-peptide
             :pdatasets :pdataset
             :ppmids :ppmid})

(defn apply-to-dataset
  [{:keys [table func did] :as m}]
  (let [q [(str "select * from " (name table) " where dataset=?") did]]
    (bdb/query-sequences dbspec q (tables table) :apply-func func)))

(defn- table-type
  [table]
  (tables table))

(defn create-database
  []
  (map (fn [[k v]] (bdb/create-table! dbspec k v)))
  (import-swissprot))

(defn delete-database
  []
  (map #(try
          (db/db-do-commands dbspec (db/drop-table-ddl %))
          (catch Exception _))
       (keys tables)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; db methods
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; fasta insert

(defn fasta-insert
  [files table type dataset dbspec]
  (doseq [f files]
    (with-open [r (reader f)]
      (bdb/insert-sequences! dbspec table type
                             (map #(assoc % :dataset dataset)
                                  (fasta-seq r))))))

;; defaults

(defmethod bdb/prep-sequences :default
  [q]
  (:coll q))

(defmethod bdb/restore-sequence :default
  [q]
  (dissoc q :type))

;; annotations

(defmethod bdb/table-spec :annotation
  [q]
  (vector [:accession :varchar "PRIMARY KEY"]
          [:description :varchar "NOT NULL"]
          [:evidence :varchar]
          [:score :decimal]
          [:database :varchar]))

;; blast files

(defmethod bdb/table-spec :blast-file
  [q]
  (vector [:did :integer "PRIMARY KEY"]
          [:file :varchar "NOT NULL"]
          [:type :varchar "NOT NULL"]))

;; submitter

(defmethod bdb/table-spec :submitter
  [q]
  (vector [:id :serial "PRIMARY KEY"]
          [:first :varchar "NOT NULL"]
          [:last :varchar "NOT NULL"]
          [:email :varchar]
          [:address :varchar]))

;; assemblies

(defmethod bdb/table-spec :dataset
  [q]
  (vector [:id :serial "PRIMARY KEY"]
          [:name :varchar "NOT NULL"]
          [:type :text "NOT NULL"]
          [:abstract :text "NOT NULL"]
          [:submitter :integer "NOT NULL"]
          [:time :timestamp "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]
          [:species :varchar "NOT NULL"]))

;; pmid

(defmethod bdb/table-spec :pmid
  [q]
  (vector [:did :integer "NOT NULL"]
          [:pmid :integer "NOT NULL"]))

;; swissprot

(defmethod bdb/table-spec :swissprot
  [q]
  (vector [:accession :varchar "PRIMARY KEY"]
          [:dataset :integer "NOT NULL"]
          [:description :text]
          [:sequence :text "NOT NULL"]))

;; peptides

(defmethod bdb/table-spec :peptide
  [q]
  (vector [:accession :varchar "PRIMARY KEY"]
          [:dataset :integer "NOT NULL"]
          [:description :text]
          [:sequence :text "NOT NULL"]))

;; mrna

(defmethod bdb/table-spec :mrna
  [q]
  (vector [:accession :varchar "PRIMARY KEY"]
          [:dataset :integer "NOT NULL"]
          [:description :text]
          [:sequence :text "NOT NULL"]))

;; cds

(defmethod bdb/table-spec :cds
  [q]
  (vector [:accession :varchar "PRIMARY KEY"]
          [:dataset :integer "NOT NULL"]
          [:description :text]
          [:sequence :text "NOT NULL"]))

;; contigs

(defmethod bdb/table-spec :contig
  [q]
  (vector [:id :serial "PRIMARY KEY"]
          [:accession :varchar "NOT NULL"]
          [:dataset :integer "NOT NULL"]
          [:description :text]
          [:sequence :text "NOT NULL"]))

(defmethod bdb/restore-sequence :contig
  [q]
  (-> (assoc q :original-accession (:accession q))
      (assoc :accession (:id q))
      (dissoc :type)))

;; blasts

(defmethod bdb/table-spec :jdb-blast
  [q]
  (vector [:id :serial "PRIMARY KEY"]
          [:accession :text "NOT NULL"]
          [:database :integer "NOT NULL"]
          [:hit :text "NOT NULL"]))

(defmethod bdb/prep-sequences :jdb-blast
  [q]
  (->> (:coll q)
       (map #(assoc % :hit (pr-str (:hit %))))))

(defmethod bdb/restore-sequence :jdb-blast
  [q]
  (assoc (dissoc q :type) :hit (edn/read-string (:hit q))))

;; ms peptides

(defmethod bdb/table-spec :msms-peptide
  [q]
  (vector [:id :serial "PRIMARY KEY"]
          [:accession :text "NOT NULL"]
          [:dataset :integer "NOT NULL"]
          [:src :binary "NOT NULL"]))

(defmethod bdb/prep-sequences :msms-peptide
  [q]
  (->> (:coll q)
       (map #(hash-map :accession (:protein %)
                       :dataset (:dataset %)
                       :src (bdb/freeze %)))))

(defmethod bdb/restore-sequence :msms-peptide
  [q]
  (bdb/thaw (:src (dissoc q :type))))

;; proteomics datasets

(defmethod bdb/table-spec :pdataset
  [q]
  (vector [:id :serial "PRIMARY KEY"]
          [:name :varchar "NOT NULL"]
          [:abstract :text "NOT NULL"]
          [:submitter :integer "NOT NULL"]
          [:time :timestamp "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]
          [:species :varchar "NOT NULL"]
          [:tissue :text "NOT NULL"]
          [:enzyme :text "NOT NULL"]
          [:varmods :text]
          [:conmods :text]))

;; proteomics pubmed

(defmethod bdb/table-spec :ppmid
  [q]
  (vector [:did :integer "NOT NULL"]
          [:pmid :integer "NOT NULL"]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; getting sequences
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti get-sequences (fn [m]
                          (if (:search-type m)
                            (vector (:type m) (:search-type m))
                            (:type m))))

(defn get-custom
  [q type & {:keys [apply-func] :or {apply-func nil}}]
  (if apply-func
    (bdb/query-sequences dbspec q type :apply-func apply-func)
    (bdb/get-sequences dbspec q type)))

(defn- get-annotated-sequences
  [{:keys [table where order offset limit parameters apply-func select]}]
  (let [q (->> (cons (str "select "
                          (if-not select
                            (str (name table)
                                 ".accession, dataset, annotations.description,"
                                 "sequence, evidence, score, database")
                            select)
                          " from " (name table)
                          " left join annotations on "
                          (name table) ".accession=annotations.accession"
                          (if where (str " where " where))
                          (if order (str " order by " (name order)))
                          (if limit (str " limit " limit))
                          (if offset (str " offset " offset)))
                     parameters)
               (remove nil?)
               vec)]
    (if apply-func
      (bdb/query-sequences dbspec q (table-type table) :apply-func apply-func)
      (bdb/query-sequences dbspec q (table-type table)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; proteins for display
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod get-sequences [:by-key :text-proteins]
  [{:keys [data offset] :as m}]
  (get-annotated-sequences {:table :peptides
                            :where "peptides.accession ILIKE ?
                                    or annotations.description ILIKE ?"
                            :order :accession
                            :offset offset
                            :limit 20
                            :parameters [(str "%" data "%") (str "%" data "%")]}))

(defmethod get-sequences [:jellydb.proteins/select-all :text-proteins]
  [{:keys [data] :as m}]
  (get-annotated-sequences {:table :peptides
                            :select "peptides.accession"
                            :where "peptides.accession ILIKE ?
                                    or annotations.description ILIKE ?"
                            :parameters [(str "%" data "%") (str "%" data "%")]
                            :apply-func #(vec (map :accession %))}))


(defmethod get-sequences [:by-key :only-selected]
  [{:keys [data offset] :as m}]
  (let [ids (take 20 (drop offset data))]
    (get-annotated-sequences {:table :peptides
                              :where " peptides.accession in (?)"
                              :parameters [(->> (interpose "," ids) (apply str))]})))

(defmethod get-sequences [:jellydb.proteins/select-all :only-selected]
  [{:keys [data] :as m}]
  (:data m))

(defmethod get-sequences [:by-key :blast-search]
  [{:keys [offset file] :as m}]
  (let [blasts (bl/get-blast-hits file offset)]
    (bdb/get-sequences dbspec :peptides :peptide (keys blasts)
                       :select [:dataset :annotations.description
                                :peptides.accession
                                :sequence :evidence :score :database]
                       :join "left join annotations on peptides.accession=annotations.accession"
                       :apply-func #(doall
                                     (->> (map (fn [x]
                                                 (merge x (blasts (:accession x))))
                                               %)
                                          (sort-by :Hit_num <))))))

(defmethod get-sequences [:jellydb.proteins/select-all :blast-search]
  [{:keys [file] :as m}]
  (bl/select-all-blasts file))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; dna
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(let [join #(str "left join annotations on " (name %)
                 ".accession=annotations.accession")
      select [:dataset :annotations.description :sequence :evidence
              :score :database]]

  (defmethod get-sequences :jellydb.proteins/cds
    [{:keys [accessions] :as m}]
    (bdb/get-sequences dbspec :cdss :cds accessions
                       :select (conj select :cdss.accession) 
                       :join (join :cdss)))

  (defmethod get-sequences :jellydb.proteins/mrna
    [{:keys [accessions]}]
    (bdb/get-sequences dbspec :mrnas :mrna accessions
                       :select (conj select :mrnas.accession) 
                       :join (join :mrnas))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; annotations
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(derive :jellydb.proteins/annotations? :jellydb.annotation-view/ips)

(defmethod get-sequences :jellydb.annotation-view/ips
  [{:keys [accessions]}]
  (if-let [i (seq (bdb/get-sequences dbspec :interproscan :ips accessions))]
    (vec (->> (first i) ips/any-seq))
    []))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; proteomics
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(derive :jellydb.proteins/proteomics? :jellydb.proteomics/proteomics)

(defn- peptide-report
  [c]
  {:count (count c)
   :peps (map #(select-keys [:num_missed_cleavages :peptide :hyperscore
                             :massdiff :hit_rank :interprophet-prob
                             :dataset]))})

(defmethod get-sequences :jellydb.proteomics/proteomics
  [{:keys [accessions]}]
  (let [q ["select pdatasets.id,name,tissue,species,count(msmspeptides.id) as mcount
            from pdatasets
            inner join msmspeptides on msmspeptides.dataset=pdatasets.id
            where msmspeptides.accession=?
            group by pdatasets.id"
           (first accessions)]
        r (bdb/query-sequences dbspec q :default)]
    (if (seq r)
      (vector (first r))
      [])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; datasets
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod get-sequences :jellydb.dataset-view/dataset
  [{:keys [dataset] :as m}]
  (let [q ["select d.id,d.name,d.type,d.abstract,d.submitter,d.time,d.species,s.first,s.last,s.email,s.address from datasets d, submitters s where d.submitter = s.id and d.id=?" dataset]]
    (bdb/query-sequences dbspec q :jdb-blast)))

(defmethod get-sequences :jellydb.homology-view/db-name
  [{:keys [did] :as m}]
  (let [q ["select name from datasets where id=?" did]]
    (bdb/query-sequences dbspec q :jdb-blast :apply-func #(:name (first %)))))

(defmethod get-sequences :db-id
  [{:keys [name]}]
  (let [q ["select id from datasets where name=?" name]]
    (bdb/query-sequences dbspec q :default :apply-func #(:id (first %)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; blasts
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(derive :jellydb.proteins/homologies? :jellydb.homology-view/blasts)

(defmethod get-sequences :jellydb.homology-view/blasts
  [{:keys [accessions] :as m}]
  (bdb/get-sequences dbspec :blasts :jdb-blast accessions
                     :apply-func #(group-by :database %)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; file retrieval and generation
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod get-sequences [:file-retrieval :selected-export]
  [{:keys [table selected func] :as m}]
  (bdb/get-sequences dbspec table (table-type table) selected
                     :select (conj [:dataset :annotations.description :sequence
                                    :evidence :score :database]
                                   (str table ".accession"))
                     :join (str "left join annotations on "
                                table ".accession=annotations.accession")
                     :apply-func func))

(defmethod get-sequences [:file-retrieval :dataset-retrieval]
  [{:keys [table did func] :as m}]
  (get-annotated-sequences
   {:table table :where "dataset=?" :parameters [did] :apply-func func}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; blast database management
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn make-jdb-blast-dbs
  []
  (map (fn [{:keys [file table type]}]
         (get-annotated-sequences
          {:table table :apply-func #(bl/create-blastdb % file type)}))
       (vals bl/blast-dbs)))

(defn internal-blast-dbs
  [did]
  (bdb/query-sequences dbspec ["select * from blastfiles where did!=?" did] :blast-file))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; counting results
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti count-results :type)

(defmethod count-results :text
  [{:keys [data] :as m}]
  (get-annotated-sequences {:table :peptides
                            :select "count(peptides.accession)"
                            :where "peptides.accession ILIKE ?
                                    or annotations.description ILIKE ?"
                            :parameters [(str "%" data "%") (str "%" data "%")]
                            :apply-func #(:count (first %))}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; inserting
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn insert-sequences
  [table coll]
  (bdb/insert-sequences! dbspec table (table-type table) coll))

(defn insert-or-retrieve-submitter
  ([{:keys [first-name last-name email] :as m}]
   (insert-or-retrieve-submitter m dbspec))
  ([{:keys [first-name last-name email] :as m} dbspec]
   (let [qu ["select id from submitters where first=? and last=? and email=?"
             first-name last-name email]]
     (or (-> (bdb/query-sequences dbspec qu :submitter) first :id)
         (-> (bdb/insert-sequences! dbspec :submitters :submitter [m] true)
             first
             :id)))))

(defmulti insert-dataset (fn [m] (:type m)))
(defmulti insert-pmid (fn [m] (:type m)))
