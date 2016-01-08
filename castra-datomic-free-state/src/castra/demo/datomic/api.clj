(ns demo.datomic.api
  (:require
    [demo.datomic.db :refer [datomic-conn]]
    [datomic.api :as d]))

(defn- fetch-ids
   "Find all the IDs in the database"
   []
   (d/q '[:find ?e :where [?e :person/first-name]] (d/db datomic-conn)))

(defn- random-id
  "Choose a random ID from the database"
  []
  (rand-nth (flatten (map identity (fetch-ids)))))

(defn fetch-record
  "Use the pull API to fetch all attributes for a random ID"
  [id]
  (println "Fetching record for id:" id)
  (d/pull (d/db datomic-conn) '[:*] id))

(defn fetch-random-record
  "Use the pull API to fetch all attributes for a random ID"
  []
  (fetch-record (random-id)))

(defn update-record!
  "Update the record and change a property on the server to show that we also did something!"
  [user-data]
  (let [email (str (clojure.string/lower-case (:person/first-name user-data)) "."
                   (clojure.string/lower-case (:person/last-name user-data)) "@email-server.com")
    data (assoc user-data :person/email email)
    noop (println "Updating with " data)]
   @(d/transact datomic-conn (conj [] data))))