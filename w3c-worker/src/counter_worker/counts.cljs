(ns counter-worker.counts)

(def i (atom 0))

(defn timed-count []
  (swap! i + 1)
  (.postMessage js/self @i)
  (.setTimeout js/self timed-count 500))

(defn main []
  (timed-count))
