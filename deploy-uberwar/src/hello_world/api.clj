(ns hello-world.api
  (:require [hello-world.rules :refer [allow]])
  (:require [tailrecursion.castra :refer [defrpc]]))

(defrpc doit []
  {:rpc/pre [(allow)]}
  (java.util.Date.))
