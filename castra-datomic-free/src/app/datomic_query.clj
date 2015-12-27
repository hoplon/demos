(ns app.datomic-query
    (:require [datomic.api :as d]))

; find all the IDs in the database
(defn- fetch-ids [conn]
       (d/q '[:find ?e :where [?e :person/first-name]] (d/db conn)))

; choose a random one
(defn- random-id [conn]
       (rand-nth (flatten (map identity (fetch-ids conn)))))

; use pull API to fetch all attributes for a random ID
(defn fetch-random-data [conn]
      (d/pull (d/db conn) '[:*] (random-id conn)))