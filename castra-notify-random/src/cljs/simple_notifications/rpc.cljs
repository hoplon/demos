(ns simple-notifications.rpc
  (:require-macros
    [javelin.core :refer [defc]])
  (:require
    [castra.core :refer [mkremote]]
    [notify.notification-rpc :as nrpc]))

(defc random [])

(nrpc/register-notification! :random
                             (fn [value]
                               (swap! random
                                      (fn [old]
                                        (let [old (conj old value)]
                                          (if (< 3 (count old))
                                            (subvec old 1)
                                            old))))))

(def session-startup
  (mkremote 'simple-notifications.api/session-startup
            nrpc/server-notifications
            nrpc/error
            nrpc/loading))

(def get-random
  (mkremote 'simple-notifications.api/get-random
            nrpc/server-notifications
            nrpc/error
            nrpc/loading))

(def msg-count (atom 0))

(defn randomer []
  (swap! msg-count (fn [old]
                     (if (= 0 (mod old 10))
                       (get-random @nrpc/last-id)
                       (nrpc/poll-server))
                     (+ 1 old))))

(defn init []
  (session-startup @nrpc/last-id)
  (js/setInterval randomer 300))
