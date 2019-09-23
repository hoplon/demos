(defproject
  boot-project
  "0.0.0-SNAPSHOT"
  :dependencies
  [[adzerk/boot-cljs "1.7.228-1"]
   [com.cemerick/piggieback "0.2.1" :scope "test"]
   [weasel "0.7.0" :scope "test"]
   [org.clojure/tools.nrepl "0.2.12" :scope "test"]
    
    
   [compojure "1.6.0-beta1"]
    
[hoplon "7.2.0"]
   [org.clojure/clojure "1.10.1"]
   [org.clojure/clojurescript "1.10.520"]
   [pandeiro/boot-http "0.7.3"]
   [http-kit "2.2.0"]
   [javax.servlet/servlet-api "2.5"]
   [ring/ring-defaults "0.2.1"]]
  :source-paths
  ["src" "assets"])