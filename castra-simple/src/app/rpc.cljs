(ns app.rpc
  (:require-macros
    [tailrecursion.javelin :refer [defc defc=]])
  (:require [tailrecursion.castra :refer [mkremote]]))

(defc state {:random nil})
(defc error nil)
(defc loading [])

(defc= random-number (get state :random))

(def get-state
  (mkremote 'app.api/get-state state error loading))

(defn init []
  (get-state)
  (js/setInterval get-state 1000))