#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.0.0"

(set-env!
 :dependencies '[[tailrecursion/boot.task "2.0.0"]
                 [tailrecursion/hoplon "5.1.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [tailrecursion/boot.notify "2.0.0-SNAPSHOT"]]
 :src-paths    #{"src"}
 :out-path     "resources/public")

(add-sync! (get-env :out-path) #{"resources/assets"})

(require '[tailrecursion.hoplon.boot :refer :all]
         '[tailrecursion.boot.core   :as    boot]
         '[tailrecursion.boot.task.notify :refer [hear]])
