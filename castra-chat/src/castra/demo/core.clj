(ns demo.core
  (:require
    [ring.adapter.jetty               :refer [run-jetty]]
    [ring.middleware.resource         :refer [wrap-resource]]
    [ring.middleware.session          :refer [wrap-session]]
    [ring.middleware.session.cookie   :refer [cookie-store]]
    [ring.middleware.file             :refer [wrap-file]]
    [ring.middleware.file-info        :refer [wrap-file-info]]
    [tailrecursion.castra.handler     :refer [castra]]))

(def server (atom nil))

(defn app [& [port]] 
  (->
    (castra 'demo.api.chat)
    (wrap-session {:store (cookie-store {:key "a 16-byte secret"})})
    (wrap-file "resources/public")
    (wrap-file-info)
    (run-jetty {:join? false :port (or port 3000)})))

(defn start-server
  "Start castra demo server (port 33333)."
  [& [port]]
  (swap! server #(or % (app port))))

(defn run-task [boot]
  (start-server 33333)
  (fn [continue]
    (fn [event]
      (continue event))))

(defn -main
  "I don't do a whole lot."
  [& args])
