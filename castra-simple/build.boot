#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.4.1"

(load-file "../build.util.clj")
(require '[build.util :as build])

(set-env!
  :dependencies (build/deps)
  :out-path     "resources/public"
  :src-paths    #{"src"})

;; Static resources (css, images, etc.):
(add-sync! (get-env :out-path) #{"assets"})

(require '[tailrecursion.hoplon.boot :refer :all]
         '[tailrecursion.castra.task :as c])

(deftask development
  "Build castra-simple for development."
  []
  (comp (watch) (hoplon {:prerender false}) (c/castra-dev-server 'app.api)))

(deftask production
  "Build castra-simple for production."
  []
  (hoplon {:optimizations :advanced}))
