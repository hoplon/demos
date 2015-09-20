(ns hello-world.rules
  (:require
    [castra.core :refer [ex *request* *session*]]))

(def allow (constantly true))
(def deny  #(throw (ex "Please log in." {:state nil})))
