(ns app.api
    (:require
      [app.datomic-query :as dq]
      [datomic.api :as d]
      [castra.core :refer [defrpc]]))

(defrpc get-state []
        {:random (dq/fetch-random-data)})

