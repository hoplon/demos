(ns demo.counter
  (:require
    [hoplon.core :as h]
    [hoplon.goog]
    [javelin.core :as j]))


(h/defelem swap-button
  [{:keys [state func] :or {func identity} :as attr} kids]
  (let [attr (dissoc attr :state :func)]
    (h/button (assoc attr :click #(swap! state func))
      kids)))


(h/defelem counter
  [attr _]
  (let [my-count (j/cell 0)]
    (h/div attr
      (h/label (h/text "~{my-count}"))
      (swap-button :state my-count :func inc "+")
      (swap-button :state my-count :func dec "-"))))


(h/defelem counters
  [{:keys [size] :or {size 10} :as attr} _]
  (let [last-clicked (j/cell nil)
        attr         (dissoc attr :size)]
    (h/div attr
      (h/h1 "A Counting Widget!")
      (h/p {:toggle last-clicked}
        (h/text "Last clicked item was ~{last-clicked}"))
      (h/loop-tpl :bindings [i (j/cell= (range 0 size))]
        (counter :click #(reset! last-clicked @i))))))


(defn mount-components
  []
  (h/body
    (h/p "Inspired by " (h/a :href "https://github.com/swannodette/om/tree/master/examples/counters" "the Om demo of the same name."))))


(defn start
  []
  (mount-components)
  (js/console.log "Starting..."))


(defn stop
  []
  (js/console.log "Stopping..."))


(defn init
  []
  (js/console.log "Initializing...")
  (start))
