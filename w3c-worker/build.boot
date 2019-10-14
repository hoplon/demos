(set-env!
  :dependencies '[[adzerk/boot-cljs                          "1.7.228-1"]
                   
                   
                  [com.cemerick/piggieback                   "0.2.1"]
                  [weasel                                    "0.7.0"]
                  [org.clojure/tools.nrepl                   "0.2.12"]
                   
                  [hoplon/hoplon "7.2.0"]
                  [org.clojure/clojure "1.10.1"]
                  [org.clojure/clojurescript "1.10.520"]
                  [tailrecursion/boot-jetty                  "0.1.3"]]
  :source-paths   #{"src"})

(require
  '[adzerk.boot-cljs         :refer [cljs]]
  '[adzerk.boot-cljs-repl    :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload       :refer [reload]]
  '[hoplon.boot-hoplon       :refer [hoplon prerender]]
  '[tailrecursion.boot-jetty :refer [serve]])

(deftask dev
  "Build for local development."
  []
  (comp
    (watch)
    (speak)
    (hoplon)
    (cljs :optimizations :simple)
    (serve :port 9000)))
