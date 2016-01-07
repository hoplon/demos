(ns castra-notify-chat.user-api
  (:refer-clojure :exclude [assert])
  (:require
    [castra.core :refer [ex defrpc *session*]]
    [notify.notification-api :refer :all]))

(defmacro assert [expr & [msg]]
  `(when-not ~expr (throw (ex (or ~msg "Server error.") {:from ::assert}))))

(def users-atom (atom {"able"    {:pass "able"}
                       "baker"   {:pass "baker"}
                       "charlie" {:pass "charlie"}}))

(def user-sessions (atom {}))

(defn notify-user! [user type value]
  (let [session-id (get-in @user-sessions [user :session-id])]
    (when session-id
      (add-notification! session-id type value))))

(defn notify-group! [group type value]
  (let [f (first group)]
    (when f
      (notify-user! f type value)
      (recur (next group) type value))))

(defn notify-users! [type value]
  (notify-group! (keys @user-sessions) type value))

(comment defn notify-users! [type value]
  (let [ks (keys @user-session)]
    (loop [ks]
      (let [f (first ks)]
        (when f
          (notify-user! f type value)
          (recur (next ks)))))))

(defn activate-user! [user]
  (let [session-id (get-session-id)]
    (swap! user-sessions assoc-in [user :session-id] session-id)
    (notify-users! :activate-user user)))

(defn deactivate-user! [user session-id]
  (notify-users! :deactivate-user user)
  (swap! user-sessions dissoc user))

(defn get-pass [users user] (get-in users [user :pass]))

(defn login? []
  (:user @*session*))

(defn do-login! [user]
  (try
    (if-let [other-id (get-in @user-sessions [user :session-id])]
      (deactivate-user! user other-id))
    (let [old-user (:user @*session*)]
      (if old-user
        (deactivate-user! old-user (get-session-id))))
    (swap! *session*
           (fn [session]
             (assoc session :user user)))
    (activate-user! user)
    (catch Exception e
      (.printStackTrace e)
      (throw (ex (str "server error: " (.getMessage e)) {})))))

(defn login! [user pass]
  (assert (= pass (get-pass @users-atom user)) "Bad username/password.")
  (do-login! user))

(defn register! [user pass1 pass2]
  (assert (= pass1 pass2) "Passwords don't match.")
  (swap! users-atom (fn [users]
                      (assert (not (get users user)) "Username not available.")
                      (assoc users user {:pass pass1})))
  (do-login! user))

(defn logoff! []
  (try
    (let [user (:user @*session*)]
      (if user
        (let [session-id (get-in @user-sessions [user :session-id])]
          (if session-id
              (if (= session-id (get-session-id))
                (do
                  (deactivate-user! user session-id)
                  (swap! *session* dissoc :user))
                nil)
            nil))
        nil))
    (catch Exception e
      (.printStackTrace e)
      (throw (ex (str "server error: " (.getMessage e)) {})))))

(defn session-startup! []
  (let [user (:user @*session*)]
    (if user
      (let [session-id (get-in @user-sessions [user :session-id])]
        (if (= session-id (get-session-id))
          user
          (do
            (swap! *session* dissoc :user)
            nil)))
      nil)))

(defrpc session-startup [last-id]
        {:rpc/pre [(identify-session!)]}
        (if-let [user (session-startup!)]
          {:user user :buddies (into #{} (keys @user-sessions))}
          {}))

(defrpc login [user pass]
        {:rpc/pre [(get-session-id)
                   (login! user pass)]}
        {:user user :buddies (into #{} (keys @user-sessions))})

(defrpc register [user pass1 pass2]
        {:rpc/pre [(get-session-id)
                   (register! user pass1 pass2)]}
        {:user user :buddies (into #{} (keys @user-sessions))})

(defrpc logoff [t]
        {:rpc/pre [(get-session-id)
                   (logoff!)]}
        {})
