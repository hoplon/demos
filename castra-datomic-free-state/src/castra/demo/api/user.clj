(ns demo.api.user
    (:require
      [demo.datomic.api :refer [fetch-random-record fetch-record update-record!]]
      [castra.core :refer [defrpc]]))

(defrpc get-random-user []
  (fetch-random-record))

(defrpc get-user [id]
  (fetch-record id))

(defrpc update-user [user-data]
  {:rpc/pre [(update-record! user-data)]}
  (fetch-record (:db/id user-data)))