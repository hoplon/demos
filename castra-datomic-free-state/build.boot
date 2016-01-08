(set-env!
  :dependencies '[[adzerk/boot-cljs          "1.7.170-3"]
                  [adzerk/boot-cljs-repl     "0.3.0"]
                  [adzerk/boot-reload        "0.4.2"]
                  [compojure                 "1.4.0"]
                  [hoplon/boot-hoplon        "0.1.9"]
                  [hoplon/castra             "3.0.0-alpha3"]
                  [hoplon                    "6.0.0-alpha11"]
                  [com.cemerick/piggieback   "0.2.1" :scope "test"]
                  [weasel                    "0.7.0" :scope "test"]
                  [org.clojure/tools.nrepl   "0.2.12" :scope "test"]
                  [org.clojure/clojure       "1.7.0"]
                  [org.clojure/clojurescript "1.7.122"]
                  [org.clojure/tools.logging "0.3.1"]
                  [environ                   "1.0.1"]
                  [mount                     "0.1.7"]
                  [pandeiro/boot-http        "0.7.1-SNAPSHOT"]
                  [ring                      "1.4.0"]
                  [ring/ring-defaults        "0.1.5"]
                  [com.datomic/datomic-free  "0.9.5344"]]
  :source-paths   #{"src/hoplon" "src/castra" "src/cljs"}
  :resource-paths #{"assets"})

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload    :refer [reload]]
  '[hoplon.boot-hoplon    :refer [hoplon prerender]]
  '[pandeiro.boot-http    :refer [serve]])

(deftask dev
         "Build castra-datomic-free-state for local development."
         []
         (comp
           (serve
             :init 'demo.datomic.db/init
             :handler 'demo.core/handler
             :reload true
             :port 8000)
           (watch)
           (speak)
           (hoplon)
           (reload)
           (cljs-repl)
           (cljs)))

(deftask prod
         "Build castra-datomic-free-state for production deployment."
         []
         (comp
           (hoplon)
           (cljs :optimizations :advanced)
           (prerender)))
