(ns hello-world.api
  (:require [hello-world.rules :refer [allow]])
  (:require [castra.core :refer [defrpc]]))

(defrpc doit []
  {:rpc/pre [(allow)]}
  (java.util.Date.))
