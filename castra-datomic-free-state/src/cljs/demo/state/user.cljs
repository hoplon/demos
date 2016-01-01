(ns demo.state.user
  (:require-macros
    [javelin.core :refer [defc defc=]])
  (:require
    [javelin.core]
    [castra.core :refer [mkremote]]))

(defc state {})
(defc error nil)
(defc loading [])

(def get-random-user
  (mkremote 'demo.api.user/get-random-user state error loading))

(def get-user
  (mkremote 'demo.api.user/get-user state error loading))

(def update-user
  (mkremote 'demo.api.user/update-user state error loading))
