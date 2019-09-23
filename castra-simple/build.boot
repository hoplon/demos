(set-env!
  :dependencies '[[adzerk/boot-cljs          "1.7.228-1"]
                  [com.cemerick/piggieback "0.2.1" :scope "test"]
                  [weasel "0.7.0" :scope "test"]
                  [org.clojure/tools.nrepl "0.2.12" :scope "test"]
                  [compojure                 "1.6.0-beta1"]
                  [hoplon/boot-hoplon "0.3.0"]
                  [hoplon/castra "3.0.0-alpha7"]
                  [hoplon "7.2.0"]
                  [org.clojure/clojure "1.10.1"]
                  [org.clojure/clojurescript "1.10.520"]
                  [pandeiro/boot-http        "0.7.3"]
                  [ring                      "1.5.0"]
                  [javax.servlet/servlet-api "2.5"]
                  [ring/ring-defaults        "0.2.1"]]
  :source-paths   #{"src"}
  :resource-paths #{"assets"})

(require
  '[adzerk.boot-cljs      :refer [cljs]]
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
    (cljs)))

(deftask prod
  "Build ws-simple for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (prerender)))
