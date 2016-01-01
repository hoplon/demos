(ns demo.datomic.api
    (:require
      [demo.datomic.db :refer [conn]]
      [datomic.api :as d]))

(defn- fetch-ids
       "Find all the IDs in the database"
       []
       (d/q '[:find ?e :where [?e :person/first-name]] (d/db conn)))

(defn- random-id
       "Choose a random ID from the database"
       []
       (rand-nth (flatten (map identity (fetch-ids)))))

(defn fetch-record
      "Use the pull API to fetch all attributes for a random ID"
      [id]
      (println "Fetching record for id:" id)
      (d/pull (d/db conn) '[:*] id))

(defn fetch-random-record
      "Use the pull API to fetch all attributes for a random ID"
      []
      (fetch-record (random-id)))

(defn update-record!
      [user-data]
      (println "Updating record for data:" user-data)
      (let [email (str (clojure.string/lower-case (:person/first-name user-data)) "."
                       (clojure.string/lower-case (:person/last-name user-data)) "@email-server.com")
            data (assoc user-data :person/email email)
            noop (println "Updating with " data)]
           @(d/transact conn (conj [] data))))