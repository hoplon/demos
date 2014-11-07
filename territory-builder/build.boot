#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.5.0"

(load-file "../build.util.clj")
(require '[build.util :as build])

(set-env!
  :dependencies (build/deps)
  :out-path     "resources/public"
  :src-paths    #{"src" "src/clj"})

(require
  '[tailrecursion.hoplon.boot      :refer :all]
  '[tailrecursion.boot.task.notify :refer [hear]]
  '[tailrecursion.castra.task      :refer [castra-dev-server]]
  '[tailrecursion.boot.task.ring   :refer [dev-server]])

(add-sync! (get-env :out-path) #{"assets"})

(deftask castra
  "launch castra server"
  []
  (castra-dev-server 'castra.api))

(deftask development
  "Build project for development, local dev server."
  []
  (comp (watch) (hear) (hoplon {:pretty-print true :source-map true :prerender false}) (castra)))

(deftask production
  "Build project for production."
  []
  (hoplon {:optimizations :advanced}))
