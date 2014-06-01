#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.4.0"

(set-env!
  :dependencies (into
                  (read-string (slurp "../deps.edn"))
                  (read-string (slurp "deps.edn")))
  :out-path     "resources/public"
  :src-paths    #{"src"})

(require
  '[tailrecursion.hoplon.boot      :refer :all]
  '[tailrecursion.boot.task.notify :refer [hear]]
  '[tailrecursion.boot.task.ring   :refer [dev-server]])

(add-sync! (get-env :out-path) #{"assets"})

(deftask development
  "Build project for development, local dev server."
  []
  (comp (watch) (hear) (hoplon {:prerender false}) (dev-server)))

(deftask production
  "Build project for production."
  []
  (hoplon {:optimizations :advanced}))
