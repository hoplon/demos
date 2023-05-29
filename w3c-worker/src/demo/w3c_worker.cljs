(ns demo.w3c-worker
  (:require
    [clojure.string :as str]
    [hoplon.core :as h]
    [hoplon.goog]
    [javelin.core :refer [cell cell= defc defc= dosync]]))

(defc counter nil)
(def w (atom nil))

(defn start-worker []
  (if (not @w)
    (reset! w (js/Worker. "js/worker.js"))
    (println "already exists!"))
  (set! (.-onmessage @w) #(reset! counter (.-data %))))

(defn stop-worker []
  (when @w
    (.terminate @w)
    (reset! w nil)))

(h/defelem w3c-worker []
  (h/div
    (h/p (h/text "Count numbers: ~{counter}"))
    (h/button :click start-worker "Start worker")
    (h/button :click stop-worker "Stop worker")))

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (w3c-worker)))

(defn start []
  (mount-components)
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start))
