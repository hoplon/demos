(ns app.api
  (:refer-clojure :exclude [defn])
  (:require [tailrecursion.castra :refer [defn]]))

(defn get-state []
  {:random (rand-int 100)})
