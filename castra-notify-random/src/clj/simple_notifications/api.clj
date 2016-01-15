(ns simple-notifications.api
  (:require
    [castra.core :refer [defrpc]]
    [notify.notification-api :refer :all]))

(defn client-initialization [session-id])

(defrpc session-startup [last-ack & [session-id]]
        {:rpc/pre [(nil? session-id) (identify-session!)]}
        (let [session-id (or session-id (get-session-id))]
          (make-session! last-ack session-id)
          (client-initialization session-id)
          (get-notifications last-ack session-id)))

(defrpc get-random [last-ack & [session-id]]
        {:rpc/pre [(nil? session-id) (identify-session!)]}
        (let [session-id (or session-id (get-session-id))]
          (make-session! last-ack session-id)
          (add-notification! session-id :random (rand-int 100))
          (get-notifications last-ack session-id)))
