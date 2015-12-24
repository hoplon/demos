(ns simple-notifications.api
  (:require
    [castra.core :refer [defrpc]]
    [server-notifications.notification-api :refer :all]))

(defn client-initialization [session-id])

(defrpc session-startup [last-id & [session-id]]
        {:rpc/pre [(nil? session-id) (identify-session!)]}
        (let [session-id (or session-id (get-session-id))]
          (client-initialization session-id)
          (get-notifications last-id [session-id])))

(defrpc get-random [last-id & [session-id]]
        {:rpc/pre [(nil? session-id) (identify-session!)]}
        (let [session-id (or session-id (get-session-id))]
          (add-notification! session-id :random (rand-int 100))
          (get-notifications last-id [session-id])))
