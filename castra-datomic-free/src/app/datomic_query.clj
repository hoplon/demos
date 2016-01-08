(ns app.datomic-query
  (:require
    [datomic.api :as d]
    [app.db :refer [datomic-conn]]))

(defn- fetch-ids
  "Find all the IDs in the database"
  []
  (d/q '[:find ?e :where [?e :person/first-name]] (d/db datomic-conn)))

(defn- random-id
  "Choose a random ID from the database"
  []
  (rand-nth (flatten (map identity (fetch-ids)))))

(defn fetch-random-data
  "Use the pull API to fetch all attributes for a random ID"
  []
  (d/pull (d/db datomic-conn) '[:*] (random-id)))
