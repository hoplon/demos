(ns app.db
    (:require
      [mount.core :refer [defstate start]]
      [environ.core :refer [env]]
      [datomic.api :as d]))

; 12-factor - obtain uri from env
(def uri (if-let [env-uri (env :datomic-uri)]
                  env-uri
                  "datomic:mem://castra"))

; the connection can be required in other namespaces
(defstate datomic-conn :start (d/connect uri))

(defn create-schema
  "Create a Datomic schema (simple example)"
  [conn]
  (let [schema [{:db/id                 #db/id[:db.part/db]
                 :db/ident              :person/first-name
                 :db/valueType          :db.type/string
                 :db/cardinality        :db.cardinality/one
                 :db/doc                "The first name of the person"
                 :db.install/_attribute :db.part/db}

                {:db/id                 #db/id[:db.part/db]
                 :db/ident              :person/last-name
                 :db/valueType          :db.type/string
                 :db/cardinality        :db.cardinality/one
                 :db/doc                "The last name of the person"
                 :db.install/_attribute :db.part/db}

                {:db/id                 #db/id[:db.part/db]
                 :db/ident              :person/email
                 :db/valueType          :db.type/string
                 :db/cardinality        :db.cardinality/one
                 :db/unique             :db.unique/value
                 :db/doc                "The email of the person"
                 :db.install/_attribute :db.part/db}]]

 @(d/transact conn schema)))

(defn insert-seed-data [conn n]
  (let [first (rand-nth ["Alice" "Bob" "Claire" "Dustin" "Ellen" "Fred" "Georgia"])
        last (str "4Datomic-" n)
        email (str (clojure.string/lower-case first) "." (clojure.string/lower-case last) "@email-server.com")
        data {:db/id             (d/tempid :db.part/user)
              :person/first-name first
              :person/last-name  last
              :person/email      email}]
   @(d/transact conn (conj [] data))))

(defn seed-db []
  (if-let [db (d/create-database uri)]
    (let [conn (d/connect uri)]
      (create-schema conn)
      (doall (map #(insert-seed-data conn %) (range 256))))))


; hook for mount to initiate from
(defn init []
  (seed-db) ; not usually required ... demo only
  (start))