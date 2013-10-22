;; Copyright (c) Alan Dipert and Micha Niskin. All rights reserved.
;; The use and distribution terms for this software are covered by the
;; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;; which can be found in the file epl-v10.html at the root of this distribution.
;; By using this software in any fashion, you are agreeing to be bound by
;; the terms of this license.
;; You must not remove this notice, or any other, from this software.

(ns demo.http.rules
  (:refer-clojure :exclude [assert])
  (:require
    [alandipert.enduro :as e]
    [tailrecursion.castra :refer [ex auth *request* *session*]]))

;;; utility ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmacro assert [expr & [msg]]
  `(when-not ~expr (throw (ex auth (or ~msg "Server error.")))))

;;; internal ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-pass   [db-val user]  (get-in db-val [:users user :pass]))
(defn available? [db-val user]  (nil? (get-in db-val [:users user])))
(defn do-login!  [user]         (swap! *session* assoc :user user))

;;; public ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn allow       []      (constantly true))
(defn deny        []      (throw (ex auth "Permission denied.")))
(defn logout!     []      (swap! *session* assoc :user nil))
(defn logged-in?  []      (or (get @*session* :user)
                              (throw (ex auth {:state nil} "Please log in."))))
(defn self?       [user]  (assert (= (str user) (str (:user @*session*)))))

(defn register! [db user pass1 pass2]
  (assert (= pass1 pass2) "Passwords don't match.")
  (e/swap! db #(do (assert (available? % user) "Username not available.")
                   (assoc-in % [:users user] {:pass pass1})))
  (do-login! user))

(defn login! [db user pass]
  (assert (= pass (get-pass @db user)) "Bad username/password.")
  (do-login! user))
