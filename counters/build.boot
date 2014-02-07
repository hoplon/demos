#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.0.0"

(set-env!
 :dependencies '[[tailrecursion/boot.task "2.0.0"]
                 [tailrecursion/hoplon "5.1.1"]
                 [tailrecursion/boot.notify "2.0.0-SNAPSHOT"]
                 [org.clojure/clojurescript "0.0-2138"]]
 :src-paths    #{"src"}
 :out-path     "resources/public")

(require '[tailrecursion.hoplon.boot      :refer :all]
         '[tailrecursion.boot.task.notify :refer [hear]])
