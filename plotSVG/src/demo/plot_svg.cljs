(ns demo.plot-svg
  (:require
    [clojure.string :as str]
    [hoplon.core :as h]
    [hoplon.jquery]
    [demo.chart :as c]
    [javelin.core :refer [cell cell= defc defc= dosync]]))

(defn by-id [id]
  (.getElementById js/document (name id)))

(defn val-id [id]
  (h/do! (by-id id) :value))

;; Source code
(def   src-url "https://github.com/hoplon/demos/blob/master/plotSVG")

;; colors
(def   c1      "#006666")
(def   c2      "#660066")

;; returns a seq of random [x y] pairs, 0 <= y <= 9
(defn data! []
  (vec (for [x (range 0 11)] [x (rand-int 11)])))

;; push a random value onto the end of a data series
(defn add! [data]
  (conj data [(-> data last first inc) (rand-int 11)]))

;; two data series
(defc  data1   (data!))
(defc  data2   (data!))

;; user configurations "knobs"
(defc  pwidth  400)
(defc  paused? false)

;; "clipped" data (moving strip-chart)
(defc= series1 (take-last 10 data1))
(defc= series2 (take-last 10 data2))

;; configure the plotting envelope (linear scale)
(defc= chart1
  (let [min-x (max (ffirst series1) (ffirst series2))
        max-x (min (first (last series1)) (first (last series2)))]
    (c/config
      :width pwidth :height   200
      :min-x  min-x :max-x  max-x
      :min-y      0 :max-y     10)))

(h/defelem plot-svg []
  (h/div :css {:width       "400px"
               :margin      "0 auto"
               :text-align  "center"
               :padding     "20px"
               :font-family "sans-serif"}

      (h/h2 "Hoplon • Chart Demo")

      (h/hr)

      (h/p
        "Click the plot area to pause/play. "
        "Hover over a point to see its coordinates. "
        "Slide the slider to adjust plot width.")

      (c/container
        :chart    chart1
        :css      (cell= {:border      "1px solid black"
                          :margin-left (str "-" (- (/ (:width chart1) 2) 200) "px")})
        :click #(swap! paused? not)

        ;; draw shading first so it doesn't cover lines or points
        (c/polygon :chart chart1 :data series1 :css {:fill c1 :stroke "none" :fill-opacity 0.5})
        (c/polygon :chart chart1 :data series2 :css {:fill c2 :stroke "none" :fill-opacity 0.5})

        ;; draw lines
        (c/polyline :chart chart1 :data series1 :css {:fill "none" :stroke c1 :stroke-width 2})
        (c/polyline :chart chart1 :data series2 :css {:fill "none" :stroke c2 :stroke-width 2})

        ;; draw points last so they're not covered by lines or shading
        (c/points-circle :chart chart1 :data series1 :r 3 :css {:stroke c1 :fill c1})
        (c/points-rect :chart chart1 :data series2 :width 6 :height 6 :css {:stroke c2 :fill c2}))

      (h/br)

      ;; slider that lets the user change the width of the plot
      (h/input
        :id "w" :style "width:400px"
        :type "range" :min 400 :max 800 :step 1 :value 400
        :change #(reset! pwidth (val-id "w")))

      (h/p (h/a :href src-url "Source Code"))))

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (plot-svg)))

(defn start []
  (mount-components)
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start)
  ;; add data random data points every 1000ms
  (h/with-init!
    (h/with-interval 1000
      (when-not @paused?
        (swap! data1 add!)
        (swap! data2 add!)))))
