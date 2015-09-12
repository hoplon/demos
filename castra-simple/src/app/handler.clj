(ns app.handler
  (:require
    [compojure.core :as c]
    [compojure.route :as route]
    [ring.middleware.defaults :as d]
    [ring.util.response :as response]
    [tailrecursion.castra.handler :as castra]))

(c/defroutes app-routes
  (c/GET "/" req (response/content-type (response/resource-response "index.html") "text/html"))
  (c/POST "/" req (castra/castra 'app.api))
  (route/resources "/" {:root ""}))

(def app
  (d/wrap-defaults app-routes d/api-defaults))
