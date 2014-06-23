(ns castra.core
  (:gen-class)
  (:require
   [ring.middleware.resource        :refer [wrap-resource]]
   [ring.middleware.session         :refer [wrap-session]]
   [ring.middleware.session.cookie  :refer [cookie-store]]
   [ring.middleware.file            :refer [wrap-file]]
   [ring.middleware.index-file      :refer [wrap-index-paths]]
   [ring.middleware.file-info       :refer [wrap-file-info]]
   [ring.adapter.jetty              :refer [run-jetty]]
   [tailrecursion.castra.handler    :refer [castra]]))

(def app
  (->
    (castra  'castra.api)
    (wrap-session {:store (cookie-store {:key "a 16-byte secret"})})
    (wrap-resource "/public/")    
    (wrap-index-paths "index.html")    
    (wrap-file-info)))

(defn dev-server [& [port]]
  (->
    (castra  'castra.api)
    (wrap-session {:store (cookie-store {:key "a 16-byte secret"})})
    (wrap-file "resources/public")
    (wrap-file-info)
    (run-jetty {:join? false :port (or port 33333)})))
