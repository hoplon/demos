(ns demo.hoplife
  (:require
    [hoplon.core :as h]
    [hoplon.goog]
    [javelin.core :refer [cell cell= defc]]))

(def   default    #{[2 1] [2 2] [0 1] [1 2] [2 0] [13 11] [12 11] [11 11]})
(def   +size+     16)
(def   +interval+ 100)
(defc  running?   true)
(defc  alive      default)

;; See http://clj-me.cgrand.net/2011/08/19/conways-game-of-life/
;; Slightly modified to be toroidal
(defn neighbours [[x y]]
  (for [dx [-1 0 1] dy (if (zero? dx) [-1 1] [-1 0 1])]
    [(mod (+ dx x) +size+) (mod (+ dy y) +size+)]))

(defn step [cells]
  (set (for [[loc n] (frequencies (mapcat neighbours cells))
             :when (or (= n 3) (and (= n 2) (cells loc)))]
         loc)))

(defn click [cells xy]
  ((if (contains? cells xy) disj conj) cells xy))

(h/defelem hoplife []
  (h/div
    (h/h2 "Hoplife ")
    (h/button :click #(swap! running? not) :text (cell= (if running? "Stop" "Start")))
    (h/button :click #(swap! alive into default) "Reset")
    (h/table
      (for [x (range +size+)]
        (h/tr (for [y (range +size+)]
                (h/td :click #(swap! alive click [x y])
                  :class (cell= {"alive" (contains? alive [x y])}))))))
    (h/p (h/a :href "https://github.com/hoplon/demos/tree/master/hoplife" "Source Code"))))

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (hoplife)))

(defn start []
  (mount-components)
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start)
  (h/with-init!
    (h/with-interval +interval+
      (when @running?
        (swap! alive step)))))
