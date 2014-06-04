(defproject
 boot-project
 "0.1.0-SNAPSHOT"
 :dependencies
 [[org.clojure/clojure "1.5.1"]
  [tailrecursion/boot.core "2.4.0" :exclusions [[org.clojure/clojure]]]
  [tailrecursion/boot.task "2.2.1"]
  [tailrecursion/hoplon "5.10.3"]
  [tailrecursion/boot.notify "2.0.2"]
  [tailrecursion/boot.ring "0.1.0"]
  [org.clojure/clojurescript "0.0-2227"]
  [io.hoplon/jquery.daterangepicker "0.1.0"]
  [io.hoplon/twitter.bootstrap "0.1.0"]]
 :source-paths
 ["src"])
