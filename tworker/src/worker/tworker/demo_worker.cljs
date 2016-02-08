(ns tworker.demo-worker
  (:require-macros
    [aaworker.worker-macros :refer [deflpc!]])
  (:require
    [aaworker.api :as api]))

(set! cljs.core/*print-fn* #(.log js/console %))

(def clicks (atom 0))

(deflpc! click []
        (if (< 2 @clicks)
          (throw "too many clicks!")
          (do
            (if (= 2 @clicks)
              (api/send-notice :alert "Enough clicks already!"))
            (do
              (swap! clicks + 1)
              @clicks))))

(defn main []
  (api/process-requests))