(ns app.handler
  (:require [compojure.core :as c]
            [compojure.route :as route]
            [ring.middleware.defaults :as d]
            [ring.util.response :as response]
            [taoensso.sente     :as sente]
            [taoensso.sente.server-adapters.http-kit :refer (sente-web-server-adapter)]
            ))

;;;; Server-side setup

(defn mkuid [x]
  (let [cid (:client-id x)]
    cid))

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! sente-web-server-adapter {:user-id-fn mkuid})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

(defn broadcast [msg-id data]
  (let [uids (:any @connected-uids)
        msg [msg-id data]]
    (doseq [uid uids]
      (chsk-send! uid msg))))

(c/defroutes app-routes
             (c/GET "/" req (response/content-type (response/resource-response "index.html") "text/html"))
             (route/resources "/" {:root ""})
             (c/GET  "/chsk"  req (ring-ajax-get-or-ws-handshake req))
             (c/POST "/chsk"  req (ring-ajax-post                req))
             )

(def routes
  (-> app-routes
      (d/wrap-defaults d/site-defaults)))

(defmulti event-msg-handler :id) ; Dispatch on event-id
;; Wrap for logging, catching, etc.:
(defn     event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  ;(println "Event:" event)
  (event-msg-handler ev-msg)
  )

(defmethod event-msg-handler :default ; Fallback
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  ;(println "Unhandled event:" event)
  )

(defonce router_ (atom nil))

(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_ (sente/start-chsk-router! ch-chsk event-msg-handler*)))

(start-router!)
