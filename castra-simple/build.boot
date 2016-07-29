(set-env!
  :dependencies '[[adzerk/boot-cljs          "1.7.228-1"]
                  [com.cemerick/piggieback "0.2.1" :scope "test"]
                  [weasel "0.7.0" :scope "test"]
                  [org.clojure/tools.nrepl "0.2.12" :scope "test"]
                  [adzerk/boot-cljs-repl     "0.3.3"]
                  [adzerk/boot-reload        "0.4.12"]
                  [compojure                 "1.6.0-beta1"]
                  [hoplon/boot-hoplon        "0.2.2"]
                  [hoplon/castra             "3.0.0-alpha4"]
                  [hoplon                    "6.0.0-alpha16"]
                  [org.clojure/clojure       "1.9.0-alpha10"]
                  [org.clojure/clojurescript "1.9.93"]
                  [pandeiro/boot-http        "0.7.3"]
                  [ring                      "1.5.0"]
                  [javax.servlet/servlet-api "2.5"]
                  [ring/ring-defaults        "0.2.1"]]
  :source-paths   #{"src"}
  :resource-paths #{"assets"})

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload    :refer [reload]]
  '[hoplon.boot-hoplon    :refer [hoplon prerender]]
  '[pandeiro.boot-http    :refer [serve]])

(deftask dev
  "Build ws-simple for local development."
  []
  (comp
    (serve
      :handler 'app.handler/app
      :reload true
      :port 8000)
    (watch)
    (speak)
    (hoplon)
    (reload)
    (cljs-repl)
    (cljs)))

(deftask prod
  "Build ws-simple for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (prerender)))
