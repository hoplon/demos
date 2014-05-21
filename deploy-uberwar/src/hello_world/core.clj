(ns hello-world.core
  (:gen-class)
  (:require
   [ring.middleware.resource        :refer [wrap-resource]]
   [ring.middleware.session         :refer [wrap-session]]
   [ring.middleware.session.cookie  :refer [cookie-store]]
   [ring.middleware.file-info       :refer [wrap-file-info]]
   [tailrecursion.castra.handler    :refer [castra]]))

(def app
  (->
    (castra 'hello-world.api)
    (wrap-session {:store (cookie-store {:key "a 16-byte secret"})})
    (wrap-resource "public")    
    (wrap-file-info)))
