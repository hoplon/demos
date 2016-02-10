(ns duracell.demo-worker
  (:require-macros
    [aaworker.worker-macros :refer [deflpc! deflapc!]])
  (:require
    [aaworker.api :as api]
    [durable-cells.core :as dc]))

(set! cljs.core/*print-fn* #(.log js/console %))

(deflapc! load-txt []
          (dc/load-cell success failure "txt"))

(deflapc! save-txt [value]
          (dc/save-cell success failure "txt" value))

(defn main []
  (dc/start "myDB1"))