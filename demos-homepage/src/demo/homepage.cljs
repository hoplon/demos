(ns demo.homepage
  (:require-macros
    [macros.core :refer [demo-dirs]])
  (:require
    [hoplon.twitter.bootstrap :refer [container]]
    [clojure.string :as str]
    [hoplon.core :as h]
    [hoplon.goog]
    [javelin.core :refer [cell cell= dosync]]))

(def url:hoplon         "https://hoplon.io")
(def url:hoplon-demos   "https://github.com/hoplon/demos")
(def url:hoplon-slack   "https://clojurians.slack.com/messages/hoplon/")
(def url:clojurians     "http://clojurians.net/")

(h/defelem demo-item [_ [name]]
  (h/li :class "list-group-item"
    (h/a :href name name)))

(h/defelem copyright-footer [_ _]
  (h/div :css {:padding "30px 0px"}
    (h/div :css {:text-align "center"}
      "Copyright © Alan Dipert and Micha Niskin. All rights reserved.")))

(h/defelem homepage []
  (h/div
    (h/div :class "jumbotron"
      (container :class "lambda"
        (h/h1 "Hoplon Demos")
        (h/p "A simpler way to program the web, with examples!")))
    (container
      (h/div :col {:sm 6}
        (h/p "Check out the demos, then try these links:")
        (h/ul
          (h/li "The " (h/a :href url:hoplon "Hoplon website."))
          (h/li "Source code for all demos is " (h/a :href url:hoplon-demos   "here."))
          (h/li
            "Join the " (h/a :href url:hoplon-slack "Hoplon Slack channel.") " "
            "Grab an invite to Slack " (h/a :href url:clojurians "here")  " if you are not registered.")))
      (h/div :col {:sm 6}
        (h/ul :class "list-group"
          (mapv demo-item (demo-dirs)))))
    (h/hr)
    (copyright-footer)))

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (homepage)))

(defn start []
  (mount-components)
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start))
