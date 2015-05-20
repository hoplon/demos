;; Copyright (c) Alan Dipert and Micha Niskin. All rights reserved.
;; The use and distribution terms for this software are covered by the
;; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;; which can be found in the file epl-v10.html at the root of this distribution.
;; By using this software in any fashion, you are agreeing to be bound by
;; the terms of this license.
;; You must not remove this notice, or any other, from this software.

(ns demo.core
  (:require
    [ring.adapter.jetty               :refer [run-jetty]]
    [ring.middleware.session          :refer  [wrap-session]]
    [ring.middleware.session.cookie   :refer  [cookie-store]]
    [compojure.core :as c]
    [compojure.route :as route]
    [ring.middleware.defaults :as d]
    [ring.util.response :as response]
    [tailrecursion.castra.handler :as castra]))

(def server (atom nil))

(c/defroutes app-routes
  (c/GET "/" req (response/content-type (response/resource-response "index.html") "text/html") )
  (c/POST "/" req (castra/castra 'demo.api.chat))
  (route/resources "/" {:root ""}))

(def handler
  (-> app-routes
      (wrap-session  {:store  (cookie-store  {:key "a 16-byte secret"})})
      (d/wrap-defaults d/api-defaults)))

(defn app [port]
  (-> handler
      (run-jetty {:join? false :port port})))

(defn start-server
  "Start castra demo server (port 33333)."
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
