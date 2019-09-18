(set-env!
  :dependencies '[[adzerk/boot-cljs          "2.1.5"]
                  [compojure                 "1.6.1"]
                  [hoplon/boot-hoplon        "0.3.0"]
                  [hoplon/castra             "3.0.0-alpha7"]
                  [hoplon/hoplon             "7.2.0"]
                  [org.clojure/clojure       "1.10.1"]
                  [org.clojure/clojurescript "1.10.520"]
                  [pandeiro/boot-http        "0.8.3"]
                  [ring                      "1.7.1"]
                  [ring/ring-defaults        "0.3.2"]]
  :source-paths   #{"src/hoplon" "src/castra" "src/cljs"}
  :resource-paths #{"assets"})

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[hoplon.boot-hoplon    :refer [hoplon prerender]]
  '[pandeiro.boot-http    :refer [serve]])

(deftask dev
  "Build castra-chat for local development."
  []
  (comp
    (serve
      :handler 'demo.core/handler
      :reload true
      :port 8000)
    (watch)
    (speak)
    (hoplon)
    (cljs)))

(deftask prod
  "Build castra-chat for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (prerender)))
