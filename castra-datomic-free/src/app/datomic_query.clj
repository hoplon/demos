(ns app.datomic-query
    (:require [app.datomic-seed :as ds]
              [datomic.api :as d]))

; find all the IDs in the database
(defn fetch-ids [conn]
      (d/q '[:find ?e :where [?e :person/first-name]] (d/db conn)))

; choose a random one
(defn random-id [conn]
      (let [ids (fetch-ids conn)]
           (rand-nth (flatten (map identity ids)))))

; use pull API to fetch all attributes for the random ID
(defn fetch-random-data []
      (let [conn (ds/get-conn)]
           (d/pull (d/db conn) '[:*] (random-id conn))))
