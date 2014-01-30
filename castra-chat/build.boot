#!/usr/bin/env boot

#tailrecursion.boot.core/version "2.0.0"

(set-env!
  :dependencies '[[tailrecursion/boot.task   "2.0.0"]
                  [tailrecursion/hoplon      "5.0.0"]
                  [org.clojure/clojurescript "0.0-2138"]]
  :out-path     "resources/public"
  :src-paths    #{"src/hoplon" "src/castra" "src/cljs"})

;; Static assets
(add-sync! (get-env :out-path) #{"src/static"})

(require
  '[demo.core :as demo]
  '[tailrecursion.hoplon.boot :refer :all])

(deftask server
  "Start castra dev server (port 33333)."
  [& [port]]
  (with-pre-wrap
    (demo/run-task (or port 33333) "resources/public")))
