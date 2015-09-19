(set-env!
  :dependencies '[[adzerk/boot-cljs          "1.7.48-3"]
                  [adzerk/boot-cljs-repl     "0.1.9"]
                  [adzerk/boot-reload        "0.3.2"]
                  [hoplon/boot-hoplon        "0.1.9"]
                  [hoplon/hoplon             "6.0.0-alpha10"]
                  [org.clojure/clojure       "1.7.0"]
                  [org.clojure/clojurescript "1.7.122"]
                  [tailrecursion/boot-jetty  "0.1.0"]]
  :source-paths   #{"src"}
  :resource-paths #{"assets"})

(require
  '[adzerk.boot-cljs         :refer [cljs]]
  '[adzerk.boot-cljs-repl    :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload       :refer [reload]]
  '[hoplon.boot-hoplon       :refer [hoplon html2cljs prerender]]
  '[tailrecursion.boot-jetty :refer [serve]])

(deftask dev
  "Build project for local development."
  []
  (comp
    (watch)
    (speak)
    (show :fileset true)
    (html2cljs :file "index.html.hl")
    (hoplon)
    (cljs-repl)
    (cljs)
    (reload)
    (serve :port 8000)))

(deftask prod
  "Build project for production deployment."
  []
  (comp
    (html2cljs :file "index.html.hl")
    (hoplon)
    (cljs :optimizations :advanced)
    (prerender)))
