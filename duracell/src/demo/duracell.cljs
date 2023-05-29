(ns demo.duracell
  (:require
    [durable-cells.core :refer [open-durable-cells! error ready]]
    [hoplon.core :as h]
    [hoplon.jquery]
    [javelin.core :refer [cell cell= dosync defc]]))

(set! cljs.core/*print-fn* #(.log js/console %))

(def clear-error! #(reset! error nil))
(defc txt nil)

(open-durable-cells! {"txt" txt})

(h/defelem duracell []
  (h/div
    :css {:display "none"}
    :toggle ready
    (h/div
      :id "error"
      :click clear-error!
      :slide-toggle error
      :css {:display "none"}
      (h/text "~{error}"))
    (h/h2 (h/text "IndexedDB Demo: Duracell"))
    (h/p (h/input
           :type "text"
           :value txt
           :keyup #(reset! txt @%)))
    (h/p (h/text "Type something and then refresh the page--nothing is lost."))))

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (duracell)))

(defn start []
  (mount-components)
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start))
