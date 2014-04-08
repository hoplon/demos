#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.3.1"

(set-env!
  :dependencies (read-string (slurp "../deps.edn"))
  :out-path     "resources/public"
  :src-paths    #{"src"})

;; Static resources (css, images, etc.):
(add-sync! (get-env :out-path) #{"assets"})

(require '[tailrecursion.hoplon.boot      :refer :all]
         '[tailrecursion.castra.handler   :as c]
         '[tailrecursion.boot.task.ring   :as r])

(deftask castra
  [& specs]
  (r/ring-task (fn [_] (apply c/castra specs))))

(deftask development
  "Build castra-simple for development."
  []
  (comp (watch) (hoplon {:prerender false})
        (r/head) (r/dev-mode) (r/session-cookie) (r/files)
        (castra 'app.api) (r/jetty)))

(deftask production
  "Build castra-simple for production."
  []
  (hoplon {:optimizations :advanced}))
