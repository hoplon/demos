(set-env!
  :dependencies '[[adzerk/boot-cljs                          "1.7.228-1"]
                  [hoplon/boot-hoplon                        "0.1.13"]
                  [hoplon/hoplon                             "6.0.0-alpha13"]
                  [org.clojure/clojure                       "1.8.0"]
                  [org.clojure/clojurescript                 "1.7.228"]
                  [tailrecursion/boot-jetty                  "0.1.3"]
                  [aatree/durable-cells                      "0.1.0"]]
  :source-paths   #{"src/client" "src/worker"})

(require
  '[adzerk.boot-cljs         :refer [cljs]]
  '[hoplon.boot-hoplon       :refer [hoplon prerender]]
  '[tailrecursion.boot-jetty :refer [serve]])

(deftask dev
  "Build for local development."
  []
  (comp
    (watch)
    (speak)
    (hoplon)
    (cljs :optimizations :simple)
    (target)
    (serve :port 8000 :init-params {"org.eclipse.jetty.servlet.Default.useFileMappedBuffer" "false"})))

(deftask prod
  "Build for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (prerender)))
