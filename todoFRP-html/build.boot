#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.2.1"

(set-env!
  :dependencies (read-string (slurp "../deps.edn"))
  :out-path     "resources/public"
  :src-paths    #{"src"})

(add-sync! (get-env :out-path) #{"resources/assets"})

(require
  '[tailrecursion.hoplon.boot      :refer :all]
  '[tailrecursion.boot.task.ring   :refer [dev-server]]
  '[tailrecursion.boot.task.notify :refer [hear]])

(deftask development []
  (comp (watch) (hear) (hoplon {:prerender false}) (dev-server)))

(deftask production
  "Build foop for production."
  []
  (hoplon {:optimizations :advanced}))
