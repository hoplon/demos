(set-env!
  :dependencies '[ [adzerk/boot-cljs "2.1.5"]
                  [compojure "1.6.1"]

                  [hoplon/castra "3.0.0-alpha7"]
                  [hoplon/notify             "0.2.0"]
                  [hoplon/hoplon "7.2.0"]
                  [org.clojure/clojure "1.10.1"]
                  [org.clojure/clojurescript "1.10.520"]
                  [pandeiro/boot-http        "0.8.3"]
                  [ring                      "1.4.0"]
                  [ring/ring-defaults        "0.1.5"]
                  [adzerk/cljs-console       "0.1.1"]]
  :resource-paths #{"assets" "src/clj"}
  :source-paths   #{"src/hl"})

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[hoplon.boot-hoplon    :refer [hoplon prerender]]
  '[pandeiro.boot-http    :refer [serve]])

(deftask dev
  "castra-chat reworked to use notify."
  []
  (comp
    (watch)
    (hoplon)
    (cljs)
    (serve
      :port    8000
      :handler 'castra-notify-chat.handler/app
      :reload  true)
    (speak)))

(deftask prod
  "Build castra-notify-chat for production deployment."
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
        (web :serve 'castra-notify-chat.handler/app)
        (war)))
