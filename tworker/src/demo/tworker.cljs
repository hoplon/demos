(ns demo.tworker
  (:require
    [aaworker.lpc :as lpc]
    [hoplon.core :as h]
    [hoplon.jquery]
    [javelin.core :refer [cell cell= defc defc= dosync]]))

(defc state 0)
(defc error nil)
(defc loading nil)

(def clear-error! #(reset! error nil))
(defc= loading? (seq loading))

(lpc/new-worker! "js/worker.js")
(def click (lpc/mklocal! 'click "js/worker.js" state error loading))

(defn click-it [] (click))

(h/defelem tworker []
  (h/div
    (h/div
      :id "error"
      :click clear-error!
      :slide-toggle error
      :css {:display "none"}
      (h/text "~{error}"))
    (h/p state
      (h/text " ")
      (h/button :click click-it "Click!"))))

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (tworker)))

(defn start []
  (mount-components)
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start))
