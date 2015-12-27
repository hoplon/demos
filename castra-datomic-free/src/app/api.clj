(ns app.api
    (:require
      [app.datomic-seed :as ds]
      [app.datomic-query :as dq]
      [castra.core :refer [defrpc]]))

(defrpc get-state []
        {:random (dq/fetch-random-data (ds/get-conn))})

