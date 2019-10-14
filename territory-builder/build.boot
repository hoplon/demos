(set-env!
  :dependencies '[[adzerk/boot-cljs          "1.7.48-4"]
                   
                   
                  [compojure "1.6.1"]
                  [geocoder-clj              "0.2.4"]
                   
                  [hoplon/castra "3.0.0-alpha7"]
                  [hoplon/google-maps        "3.18.0-1"]
[hoplon "7.2.0"]
                  [hoplon/twitter-bootstrap  "0.2.0-SNAPSHOT"]
                  [org.clojure/clojure "1.10.1"]
                  [org.clojure/clojurescript "1.10.520"]
                  [pandeiro/boot-http        "0.6.3"]
                  [ring                      "1.4.0"]
                  [ring/ring-defaults        "0.1.5"]]
  :resource-paths #{"assets"}
  :source-paths   #{"src" "src/clj"})

(require
  '[adzerk.boot-cljs         :refer [cljs]]
  '[adzerk.boot-cljs-repl    :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload       :refer [reload]]
  '[hoplon.boot-hoplon       :refer [hoplon prerender]]
  '[pandeiro.boot-http       :refer [serve]])

(deftask dev
  "Build territory-builder for local development."
  []
  (comp
    (serve
      :handler 'territory-builder.core/app
      :reload true
      :port 8000)
    (watch)
    (speak)
    (hoplon)
    (reload)
    (cljs-repl)
    (cljs)))

(deftask prod
  "Build territory-builder for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (prerender)))
