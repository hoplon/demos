(set-env!
  :dependencies '[[adzerk/boot-cljs          "1.7.48-4"]
                  [adzerk/boot-cljs-repl     "0.1.9"]
                  [adzerk/boot-reload        "0.3.2"]
                  [hoplon/boot-hoplon        "0.1.10"]
                  [hoplon/google-maps        "3.18.0-1"]
                  [hoplon/hoplon             "6.0.0-alpha10"]
                  [hoplon/twitter-bootstrap  "0.2.0-SNAPSHOT"]
                  [org.clojure/clojure       "1.7.0"]
                  [org.clojure/clojurescript "1.10.520"]
                  [tailrecursion/boot-jetty  "0.1.0"]]
  :resource-paths #{"assets"}
  :source-paths   #{"src"})

(require
  '[adzerk.boot-cljs         :refer [cljs]]
  '[adzerk.boot-cljs-repl    :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload       :refer [reload]]
  '[hoplon.boot-hoplon       :refer [hoplon prerender]]
  '[tailrecursion.boot-jetty :refer [serve]])

(deftask dev
  "Build google-maps for local development."
  []
  (comp
    (watch)
    (speak)
    (hoplon)
    (reload)
    (cljs-repl)
    (cljs)
    (serve :port 8000)))

(deftask prod
  "Build google-maps for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (prerender)))
