(ns app.datomic-seed
    (:require [datomic.api :as d]))

(def uri "datomic:mem://castra")

; datomic schema (simple example)
(defn create-schema [conn]
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
            last (str "Datomic" n)
            email (str (clojure.string/lower-case first) "." (clojure.string/lower-case last) "@email-server.com")
            data {:db/id             (d/tempid :db.part/user)
                  :person/first-name first
                  :person/last-name  last
                  :person/email      email}]
           @(d/transact conn (conj [] data))))

(defn seed-db []
      (if (d/create-database uri)
        (let [conn (d/connect uri)]
             (println "Seeding DB")
             (create-schema conn)
             (doall (map #(insert-seed-data conn %) (range 256))))))

(defn get-conn []
      (seed-db)
      (d/connect uri))