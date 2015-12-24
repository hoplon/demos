;; Copyright (c) Alan Dipert and Micha Niskin. All rights reserved.
;; The use and distribution terms for this software are covered by the
;; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;; which can be found in the file epl-v10.html at the root of this distribution.
;; By using this software in any fashion, you are agreeing to be bound by
;; the terms of this license.
;; You must not remove this notice, or any other, from this software.

(ns simple-notifications.core
  (:require
    [simple-notifications.handler          :as handler]
    [ring.adapter.jetty             :refer [run-jetty]]))

(def server (atom nil))

(defn app [port public-path]
  (run-jetty handler/app {:join? false :port port}))

(defn start-server
  "Start castra demo server (port 33333)."
  [port public-path]
  (swap! server #(or % (app port public-path))))
