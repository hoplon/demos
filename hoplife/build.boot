#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.5.0"

(load-file "../build.util.clj")
(require '[build.util :as build])

(set-env!
  :dependencies (build/deps)
  :src-paths    #{"src"}
  :out-path     "resources/public")

(add-sync! (get-env :out-path) #{"resources/assets"})

(require
 '[tailrecursion.hoplon.boot      :refer :all]
 '[tailrecursion.boot.task        :refer :all]
 '[tailrecursion.boot.task.notify :refer [hear]]
 '[tailrecursion.boot.task.ring   :refer [dev-server]])

(deftask production
  "Build for production"
  [& args]
  (comp (hoplon {:optimizations :advanced})))

(deftask development
  "Build for development"
  [& args]
  (comp
   (watch)
   #_(hear)
   (hoplon {:prerender false})
   (dev-server)))
