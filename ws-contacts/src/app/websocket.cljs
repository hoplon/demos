(ns app.websocket
  (:require
   [taoensso.sente  :as sente]
   ))

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" ; Note the same URL as before
                                  {})]
     (def chsk       chsk)
     (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
     (def chsk-send! send-fn) ; ChannelSocket's send API fn
     (def chsk-state state)   ; Watchable, read-only atom
     )

;;;; Routing handlers

(defmulti event-msg-handler :id) ; Dispatch on event-id
;; Wrap for logging, catching, etc.:
(defn     event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
          (event-msg-handler ev-msg))

(defmethod event-msg-handler :default ; Fallback
           [{:as ev-msg :keys [id event]}]
         (.log js/console (str "Unhandled event: " id))
         )

(defmethod event-msg-handler :chsk/handshake
           [{:as ev-msg :keys [?data]}]
           (let [[?uid ?csrf-token ?handshake-data] ?data]
                ;(.log js/console (str "Handshake: " ?data))
                ))

(def opening (atom #(.log js/console "channel socket opened")))

(defmethod event-msg-handler :chsk/state
           [{:as ev-msg :keys [?data]}]
           (if (:open? (?data 1))
             (@opening))
           (comment if (= ?data {:first-open? true})
                    (.log js/console "Channel socket successfully established!")
                    (.log js/console (str "Channel socket state change: " ?data))))

(defmulti chsk-recv (fn [id ?data] id))

(defmethod event-msg-handler :chsk/recv
           [{:as ev-msg :keys [?data]}]
           (chsk-recv (?data 0) (?data 1)))

(def router_ (atom nil))
(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
      (stop-router!)
      (reset! router_ (sente/start-chsk-router! ch-chsk event-msg-handler*)))

(defn on-open [f] (reset! opening f))

(defn start! []
      (start-router!))
