(set-env!
  :dependencies '[ [adzerk/boot-cljs "2.1.5"]
                  [compojure "1.6.1"]
                   
                  [hoplon/castra "3.0.0-alpha7"]
[hoplon "7.2.0"]
                  [com.cemerick/piggieback   "0.2.2" :scope "test"]
                  [weasel                    "0.7.0" :scope "test"]
                  [org.clojure/tools.nrepl   "0.2.13" :scope "test"]
                  [org.clojure/clojure "1.10.1"]
                  [org.clojure/clojurescript "1.10.520"]
                  [org.clojure/tools.logging "0.5.0"]
                  [environ                   "1.1.0"]
                  [mount                     "0.1.16"]
                  [pandeiro/boot-http        "0.8.3"]
                  [ring                      "1.4.0"]
                  [ring/ring-defaults        "0.3.2"]
                  [com.datomic/datomic-free  "0.9.5697"]]
  :source-paths   #{"src"}
  :resource-paths #{"assets"})

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[hoplon.boot-hoplon    :refer [hoplon prerender]]
  '[pandeiro.boot-http    :refer [serve]])

(deftask dev
  "Build castra-datomic-free for local development."
  []
  (comp
    (serve
      :init 'app.db/init
      :handler 'app.handler/app
      :reload true
      :port 8000)
    (watch)
    (speak)
    (hoplon)
    (cljs)))

(deftask prod
  "Build castra-datomic-free for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (prerender)))
