(ns app.datomic-query
  (:require
    [datomic.api :as d]))

(defn- fetch-ids
  "Find all the IDs in the database"
  [conn]
  (d/q '[:find ?e :where [?e :person/first-name]] (d/db conn)))

(defn- random-id
  "Choose a random ID from the database"
  [conn]
  (rand-nth (flatten (map identity (fetch-ids conn)))))

(defn fetch-random-data
  "Use the pull API to fetch all attributes for a random ID"
  [conn]
  (d/pull (d/db conn) '[:*] (random-id conn)))
