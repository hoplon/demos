#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.4.1"

(load-file "../build.util.clj")
(require '[build.util :as build])

(set-env!
  :dependencies (build/deps)
  :out-path     "resources/public"
  :src-paths    #{"src"})

(add-sync! (get-env :out-path) #{"assets"})

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
