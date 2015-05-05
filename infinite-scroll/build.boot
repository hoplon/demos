(load-file "../build.util.clj")
(require '[build.util :as build])

(set-env!
  :dependencies (build/deps)
  :resource-paths #{"assets"}
  :source-paths   #{"src"})

(require
  '[adzerk.boot-cljs          :refer [cljs]]
  '[adzerk.boot-reload        :refer [reload]]
  '[adzerk.boot-cljs-repl     :refer [cljs-repl start-repl]]
  '[tailrecursion.boot-hoplon :refer [hoplon prerender]]
  '[pandeiro.boot-http        :refer [serve]])

(deftask dev
  "Build project for local development."
  []
  (comp
    (serve)
    (watch)
    (speak)
    (hoplon)
    (reload)
    (cljs-repl)
    (cljs)))

(deftask prod
  "Build project for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (prerender)))

