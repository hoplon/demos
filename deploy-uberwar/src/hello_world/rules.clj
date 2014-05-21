(ns hello-world.rules  
  (:require
    [tailrecursion.castra :refer [ex auth *request* *session*]]))

(def allow (constantly true))
(def deny  #(throw (ex auth "Not Allowed.")))