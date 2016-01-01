(ns app.api
  (:require
    [app.datomic-query :refer [fetch-random-data]]
    [castra.core :refer [defrpc]]))

(defrpc get-state []
  {:random (fetch-random-data)})
