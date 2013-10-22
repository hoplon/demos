;; Copyright (c) Alan Dipert and Micha Niskin. All rights reserved.
;; The use and distribution terms for this software are covered by the
;; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;; which can be found in the file epl-v10.html at the root of this distribution.
;; By using this software in any fashion, you are agreeing to be bound by
;; the terms of this license.
;; You must not remove this notice, or any other, from this software.

(ns demo.api.chat
  (:refer-clojure                 :exclude  [defn swap!])
  (:use     [demo.http.rules      :exclude  [assert]])
  (:require [tailrecursion.castra :refer    [defn ex error *session*]]
            [alandipert.enduro    :refer    [swap! file-atom]]))

;;; utility ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn call      [f & args]  (apply f args))
(defn apply-all [fns coll]  (mapv #(%1 %2) (cycle fns) coll))
(defn every-kv? [fn-map m]  (->> m (merge-with call fn-map) vals (every? identity)))
(defn map-kv    [kfn vfn m] (into (empty m) (map (fn [[k v]] [(kfn k) (vfn v)]) m)))
(defn map-k     [kfn m]     (map-kv kfn identity m))
(defn map-v     [vfn m]     (map-kv identity vfn m))

;;; internal ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def initial-db-value
  {:users
   {"able"    {:pass "able"}
    "baker"   {:pass "baker"}
    "charlie" {:pass "charlie"}}
   :messages
   {#{"able" "baker"}
    '({:from  "able"
       :text  "oh you know, chatting and stuff"} 
      {:from  "baker"
       :text  "hi, what's on your mind?"} 
      {:from  "able"
       :text  "hello"})}})

(def db (file-atom initial-db-value "data/db.clj"))

#_(set-validator! db
  (fn [db-val]
    (let [users       (->> db-val :users keys set)
          exists?     #(and (string? %) (contains? users %))
          all-exist?  #(and (set? %) (every? exists? %))
          user-ok?    {:pass string?}
          mesg-ok?    {:from exists?, :text string?}]
      (and (->> db-val :users     keys (every? string?)) 
           (->> db-val :users     vals (every? #(every-kv? user-ok? %))) 
           (->> db-val :messages  keys (every? all-exist?))
           (->> db-val :messages  vals (every? #(every-kv? mesg-ok? %)))))))

(defn new-message [db-val from conv text]
  {:from from, :conv conv, :text text})

(defn add-message [db-val from conv text]
  (let [cons* #(cons %2 (or %1 '()))]
    (update-in db-val [:messages conv] cons* (new-message db-val from conv text))))

;;; public ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-state [& [user]]
  {:rpc [(nil? user)
         (logged-in?)]}
  (let [user    (or user (:user @*session*)) 
        users   (->> @db :users keys sort)
        convos  (->> (->> @db :messages keys (filter #(contains? % user)))
                  (select-keys (:messages @db))
                  (map-v (comp reverse (partial take 10))))]
    (when user {:user user, :users users, :messages convos})))

(defn register [user pass1 pass2]
  {:rpc [(register! db user pass1 pass2)]}
  (get-state user))

(defn login [user pass]
  {:rpc [(login! db user pass)]}
  (get-state user))

(defn logout []
  {:rpc [(logout!)]}
  nil)

(defn send-message [from conv text]
  {:rpc [(logged-in?)]}
  (swap! db add-message from conv text)
  (get-state from))

