(ns demo.datomic.db
    (:require
      [mount.core :refer [defstate start]]
      [demo.datomic.seed :refer [get-conn]]))

; could load this from a resource file or the env
(def uri "datomic:mem://castra")

; the connection can be required in other namespaces
(defstate conn :start (get-conn uri))

; hook for mount to initiate from
(defn init [] (start))
