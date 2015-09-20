(set-env!
  :dependencies '[[adzerk/boot-cljs           "1.7.48-4"]
                  [adzerk/boot-cljs-repl      "0.1.9"]
                  [adzerk/boot-reload         "0.3.2"]
                  [hoplon/boot-hoplon         "0.1.9"]
                  [hoplon/hoplon              "6.0.0-alpha10"]
                  [org.clojure/clojure        "1.7.0"]
                  [org.clojure/clojurescript  "1.7.122"]
                  [tailrecursion/boot-heredoc "0.1.0"]
                  [tailrecursion/boot-jetty   "0.1.0"]]
  :source-paths   #{"src"})

(require
  '[adzerk.boot-cljs           :refer [cljs]]
  '[adzerk.boot-cljs-repl      :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload         :refer [reload]]
  '[hoplon.boot-hoplon         :refer [hoplon prerender]]
  '[boot.heredoc :refer [heredoc]]
  '[tailrecursion.boot-jetty   :refer [serve]])

(deftask dev
  "Build hoplife for local development."
  []
  (comp
    (watch)
    (speak)
    (heredoc)
    (hoplon)
    (reload)
    (cljs-repl)
    (cljs)
    (serve :port 8000)))

(deftask prod
  "Build hoplife for production deployment."
  []
  (comp
    (heredoc)
    (hoplon)
    (cljs :optimizations :advanced)
    (prerender)))
