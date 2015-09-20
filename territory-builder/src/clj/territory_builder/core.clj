(ns territory-builder.core
  (:gen-class)
  (:require
   [ring.middleware.resource        :refer [wrap-resource]]
   [ring.middleware.session         :refer [wrap-session]]
   [ring.middleware.file            :refer [wrap-file]]
   [ring.middleware.index-file      :refer [wrap-index-paths]]
   [ring.middleware.file-info       :refer [wrap-file-info]]
   [ring.adapter.jetty              :refer [run-jetty]]
   [castra.middleware :as castra]))

(c/defroutes app-routes
  (c/GET "/" req (response/content-type (response/resource-response "index.html") "text/html"))
  (route/resources "/" {:root ""}))

(def app
  (-> app-routes
      (d/wrap-defaults d/api-defaults)
      (castra/wrap-castra-session "a 16-byte secret")
      (castra/wrap-castra 'territory-builder.api)))

(defn dev-server [& [port]]
  (-> app
      (run-jetty {:join? false :port (or port 33333)})))
