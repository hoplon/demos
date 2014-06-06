#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.5.0"

(load-file "../build.util.clj")
(require '[build.util :as build])

(set-env!
  :dependencies (build/deps)
  :out-path     "resources/public"
  :src-paths    #{"src"})

(require
  '[tailrecursion.hoplon.boot      :refer :all]
  '[tailrecursion.boot.task.notify :refer [hear]]
  '[tailrecursion.boot.task.ring   :refer [dev-server]])

(add-sync! (get-env :out-path) #{"assets"})

(deftask local []
  (set-env!
    :src-paths #{"../../hoplon/contrib/jquery.daterangepicker/src"})
  identity)

(deftask development
  "Build project for development, local dev server."
  []
  (set-env!
    :dependencies (read-string (slurp "../deps/jquery.daterangepicker.edn")))
  (comp (watch) (hear) (hoplon {:prerender false}) (dev-server)))

(deftask production
  "Build project for production."
  []
  (set-env!
    :dependencies (read-string (slurp "../deps/jquery.daterangepicker.edn")))
  (hoplon {:optimizations :advanced}))
