(ns demo.core
    (:require
      [castra.middleware :as castra]
      [compojure.core :as c]
      [compojure.route :as route]
      [ring.adapter.jetty :refer [run-jetty]]
      [ring.middleware.defaults :as d]
      [ring.util.response :as response]))

(def server (atom nil))

(c/defroutes app-routes
  (c/GET "/" req (response/content-type (response/resource-response "index.html") "text/html") )
  (route/resources "/" {:root ""}))

(def handler
  (-> app-routes
    (castra/wrap-castra 'demo.api.user)
    (castra/wrap-castra-session "a 16-byte secret")
    (d/wrap-defaults d/api-defaults)))

(defn app [port]
  (-> handler
    (run-jetty {:join? false :port port})))

(defn start-server
  "Start castra demo server."
  [port]
  (swap! server #(or % (app port))))

(defn run-task
  [port]
  (start-server port)
  (fn [continue]
    (fn [event]
      (continue event))))

(defn -main
  "I don't do a whole lot."
  [& args])


