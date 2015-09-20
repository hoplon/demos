(set-env!
  :dependencies '[[adzerk/boot-cljs          "1.7.48-4"]
                  [adzerk/boot-cljs-repl     "0.1.9"]
                  [adzerk/boot-reload        "0.3.2"]
                  [compojure                 "1.4.0"]
                  [hoplon/boot-hoplon        "0.1.10"]
                  [hoplon/castra             "3.0.0-SNAPSHOT"]
                  [hoplon                    "6.0.0-alpha10"]
                  [org.clojure/clojure       "1.7.0"]
                  [org.clojure/clojurescript "1.7.122"]
                  [pandeiro/boot-http        "0.6.3"]
                  [ring                      "1.4.0"]
                  [ring/ring-defaults        "0.1.5"]]
  :source-paths   #{"src"}
  :resource-paths #{"assets"})

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload    :refer [reload]]
  '[hoplon.boot-hoplon    :refer [hoplon prerender]]
  '[pandeiro.boot-http    :refer [serve]])

(deftask dev
  "Build castra-simple for local development."
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
  "Build castra-simple for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (prerender)))
