#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.5.0"

(load-file "../build.util.clj")
(require '[build.util :as build])

(set-env!
  :dependencies (build/deps)
  :out-path     "resources/public"
  :src-paths    #{"src"})

;; Static resources synced to output dir
(add-sync! (get-env :out-path) #{"resources/assets"})

(require
  '[tailrecursion.hoplon.boot :refer :all]
  '[tailrecursion.castra.task :refer [castra-dev-server]])

(deftask uberwar
  "Build project war file."
  []
  (set-env!
    :src-paths #{"resources"}
    :lein      '{:war-resources-path "public"
                 :plugins            [[lein-ring "0.8.7"]]
                 :ring               {:handler hello-world.core/app}})
  (comp
    (hoplon {:optimizations :advanced})
    (lein "clean")
    (lein "ring" "uberwar" "hello.war")))

(deftask development
  "Start local dev server."
  []
  (comp
    (castra-dev-server 'hello-world.api)
    (watch)
    (hoplon {:prerender false})))
