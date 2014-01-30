#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.0.0"

(set-env!
  :dependencies '[[tailrecursion/boot.task   "2.0.0"]
                  [tailrecursion/hoplon      "5.0.0"]
                  [org.clojure/clojurescript "0.0-2138"]]
  :out-path     "resources/public"
  :src-paths    #{"src"})

(require '[tailrecursion.hoplon.boot :refer :all])
