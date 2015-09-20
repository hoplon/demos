(ns vform.core
  (:require [javelin.core :refer [defc=]]))

(defmacro defv [i c v]
  `(defc= ~i {:valid? (if (~v ~c) true false)
              :value ~c}))
