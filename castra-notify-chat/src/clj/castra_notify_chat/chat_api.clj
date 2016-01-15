(ns castra-notify-chat.chat-api
  (:refer-clojure :exclude [assert])
  (:require
    [castra-notify-chat.user-api :refer :all]
    [castra.core :refer [ex defrpc *session*]]
    [notify.notification-api :refer :all]))

(defrpc send-message [conv text]
        {:rpc/pre [(get-session-id)
                   (login?)]}
        (notify-group! conv :message [(:user @*session*) conv text])
        {:user (:user @*session*) :buddies (into #{} (keys @user-sessions))})
