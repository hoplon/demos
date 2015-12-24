(set-env!
  :dependencies '[[adzerk/boot-cljs          "1.7.170-3"]
                  [adzerk/boot-reload        "0.4.2"]
                  [compojure                 "1.4.0"]
                  [hoplon/boot-hoplon        "0.1.10"]
                  [hoplon/castra             "3.0.0-alpha3"]
                  [hoplon/notify             "0.0.1-SNAPSHOT"]
                  [hoplon/hoplon             "6.0.0-alpha11"]
                  [org.clojure/clojure       "1.7.0"]
                  [org.clojure/clojurescript "1.7.189"]
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
    (serve
      :port    8000
      :handler 'simple-notifications.handler/app
      :reload  true)
    (watch)
    (speak)
    (hoplon)
    (reload)
    (cljs)))

(deftask prod
  "Build simple-notifications for production deployment."
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
