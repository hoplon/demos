#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.2.1"

(set-env!
  :dependencies '[[tailrecursion/boot.task   "2.1.0"]
                  [tailrecursion/hoplon      "5.3.0"]
                  [tailrecursion/boot.notify "2.0.0-SNAPSHOT"]
                  [tailrecursion/boot.ring   "0.1.0-SNAPSHOT"]
                  [org.clojure/clojurescript "0.0-2156"]]
  :out-path     "resources/public"
  :src-paths    #{"src/hoplon" "src/castra" "src/cljs"})

;; Static assets
(add-sync! (get-env :out-path) #{"src/static"})

(require
  '[demo.core :as demo]
  '[tailrecursion.castra.handler   :as c]
  '[tailrecursion.boot.task.ring   :as r]
  '[tailrecursion.hoplon.boot      :refer :all]
  '[tailrecursion.boot.task.notify :refer :all])

(deftask castra
  [& specs]
  (r/ring-task (fn [_] (apply c/castra specs))))

(deftask server
  "Start castra dev server (port 8000)."
  []
  (comp (r/head) (r/dev-mode) (r/session-cookie) (r/files) (castra 'demo.api.chat) (r/jetty)))

(deftask chat-demo
  "Build the castra chat demo. Server on port 8000."
  []
  (comp (watch) (hoplon {:prerender false}) (server)))
