(ns castra.rules
  (:require
    [tailrecursion.castra :refer [ex auth *request* *session*]]))

(def allow (constantly true))
(def deny  #(throw (ex auth "Access Denied!")))

