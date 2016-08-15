(defproject
  boot-project
  "0.0.0-SNAPSHOT"
  :dependencies
  [[adzerk/boot-cljs "1.7.228-1"]
   [com.cemerick/piggieback "0.2.1" :scope "test"]
   [weasel "0.7.0" :scope "test"]
   [org.clojure/tools.nrepl "0.2.12" :scope "test"]
   [adzerk/boot-cljs-repl "0.3.3"]
   [adzerk/boot-reload "0.4.12"]
   [compojure "1.6.0-beta1"]
   [hoplon/boot-hoplon "0.2.2"]
   [hoplon "6.0.0-alpha16"]
   [org.clojure/clojure "1.9.0-alpha10"]
   [org.clojure/clojurescript "1.9.93"]
   [pandeiro/boot-http "0.7.3"]
   [http-kit "2.2.0"]
   [javax.servlet/servlet-api "2.5"]
   [ring/ring-defaults "0.2.1"]]
  :source-paths
  ["src" "assets"])