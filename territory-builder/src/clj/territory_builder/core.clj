(ns territory-builder.core
  (:gen-class)
  (:require
    [castra.middleware :as castra]
    [compojure.core :as c]
    [compojure.route :as route]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.defaults :as d]
    [ring.util.response :as response]))

(c/defroutes app-routes
  (c/GET "/" req (response/content-type (response/resource-response "index.html") "text/html"))
  (route/resources "/" {:root ""}))

(def app
  (-> app-routes
      (castra/wrap-castra 'territory-builder.api)
      (castra/wrap-castra-session "a 16-byte secret")
      (d/wrap-defaults d/api-defaults)))

(defn dev-server [& [port]]
  (-> app
      (run-jetty {:join? false :port (or port 33333)})))
