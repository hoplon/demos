(set-env!
  :description "A Hoplon demo that shows a simple castra/notify example."
  :dependencies '[[adzerk/boot-cljs          "1.7.228-1"]
                  [adzerk/boot-reload        "0.4.5"]
                  [compojure                 "1.4.0"]
                  [hoplon/boot-hoplon        "0.1.13"]
                  [hoplon/castra             "3.0.0-alpha3"]
                  [hoplon/notify             "0.2.0"]
                  [hoplon/hoplon             "6.0.0-alpha13"]
                  [org.clojure/clojure       "1.8.0"]
                  [org.clojure/clojurescript "1.7.228"]
                  [pandeiro/boot-http        "0.7.0"]
                  [ring                      "1.4.0"]
                  [ring/ring-defaults        "0.1.5"]
                  [adzerk/cljs-console       "0.1.1"]]
  :resource-paths #{"assets" "src/clj"}
  :source-paths   #{"src/cljs" "src/hl"})

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-reload    :refer [reload]]
  '[hoplon.boot-hoplon    :refer [hoplon prerender]]
  '[pandeiro.boot-http    :refer [serve]])

(deftask dev
  "castra-simple reworked to use notify."
  []
  (comp
    (watch)
    (hoplon)
    (reload)
    (cljs)
    (serve
      :port    8000
      :handler 'simple-notifications.handler/app
      :reload  true)
    (speak)))

(deftask prod
  "Build castra-notify-random for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (prerender)))

(deftask make-war
  "Build a war for deployment"
  []
  (comp (hoplon)
        (cljs :optimizations :advanced)
        (uber :as-jars true)
        (web :serve 'simple-notifications.handler/app)
        (war)))
