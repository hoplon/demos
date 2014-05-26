(ns vform.core
  (:require [tailrecursion.javelin :refer [defc=]]))

(defmacro defv [i c v]
    `(defc= ~i {:valid? (if (~v ~c) true false)
                :value ~c}))
