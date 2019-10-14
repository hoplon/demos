(set-env!
  :dependencies '[[adzerk/boot-cljs          "1.7.48-4"]
                   
                   
                  [compojure "1.6.1"]
                   
                  [hoplon/castra "3.0.0-alpha7"]
                  [hoplon/hoplon "7.2.0"]
                  [org.clojure/clojure "1.10.1"]
                  [org.clojure/clojurescript "1.10.520"]
                  [pandeiro/boot-http        "0.6.3"]
                  [ring                      "1.4.0"]
                  [ring/ring-defaults        "0.1.5"]]
  :source-paths   #{"src"})

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload    :refer [reload]]
  '[hoplon.boot-hoplon    :refer [hoplon prerender]]
  '[pandeiro.boot-http    :refer [serve]])

(deftask dev
  "Build castra-chat for local development."
  []
  (comp
    (serve
      :handler 'hello-world.core/app
      :reload true
      :port 8000)
    (watch)
    (speak)
    (hoplon)
    (reload)
    (cljs-repl)
    (cljs)))

(deftask prod
  "Build castra-chat for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (prerender)))
