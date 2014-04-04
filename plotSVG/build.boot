#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.3.1"

(set-env!
  :dependencies (read-string (slurp "../deps.edn"))
  :out-path     "resources/public"
  :src-paths    #{"src"})

(require
  '[tailrecursion.hoplon.boot      :refer :all]
  '[tailrecursion.boot.task.ring   :refer [dev-server]]
  '[tailrecursion.boot.task.notify :refer [hear]])

(deftask development
  "Build foop for development."
  []
  (comp (watch) (hear) (hoplon {:prerender false}) (dev-server)))

(deftask production
  "Build foop for production."
  []
  (hoplon {:optimizations :advanced}))
