(ns demo.datomic.db
    (:require
      [mount.core :refer [defstate start]]
      [environ.core :refer [env]]
      [datomic.api :as d]
      [demo.datomic.seed :refer [seed-db]]))

; 12-factor - obtain uri from env
(def uri (if-let [env-uri (env :datomic-uri)]
            env-uri
            "datomic:mem://castra"))

; the connection can be required in other namespaces
(defstate datomic-conn :start (d/connect uri))

; hook for mount to initiate from
(defn init []
  (seed-db uri) ; not usually required ... demo only
  (start))