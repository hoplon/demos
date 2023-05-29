(ns demo.lens
  (:require
    [hoplon.core :as h]
    [aautil.dewdrop :as lens]
    [hoplon.goog]
    [javelin.core :refer [cell cell= defc defc= dosync]]))

(set! cljs.core/*print-fn* #(.log js/console %))

(defc composite-data {"A" "Apple" "B" "Boy"})
(defc lens-key "A")

(def keyed-lens (lens/atom-key-lens lens-key))
(def keyed-view (lens/lview keyed-lens composite-data))

(defn revalue [_ _] @keyed-view)

(defc= value
       (revalue lens-key composite-data)
       (fn [item] (reset! keyed-view item)))

(h/defelem lens
  []
  (h/div
    (h/p (h/text "data: ~{composite-data}"))
    (h/p (h/text "key: ")
       (h/input
         :type "text"
         :value lens-key
         :keyup #(reset! lens-key @%)))
    (h/p (h/text "valuesss: ")
       (h/input
         :type "text"
         :value value
         :keyup #(reset! value @%)))
    (h/p (h/a :href "https://github.com/hoplon/demos/tree/master/lens" "Source code"))))

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (lens)))

(defn start []
  (mount-components)
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start))
