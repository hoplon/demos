;; Copyright (c) Alan Dipert and Micha Niskin. All rights reserved.
;; The use and distribution terms for this software are covered by the
;; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;; which can be found in the file epl-v10.html at the root of this distribution.
;; By using this software in any fashion, you are agreeing to be bound by
;; the terms of this license.
;; You must not remove this notice, or any other, from this software.

(ns demo.state.chat
  (:require-macros
    [javelin.core :refer [defc defc= cell=]])
  (:require
    [clojure.set    :as cs]
    [clojure.string :as s]
    [javelin.core   :as j :refer [cell]]
    [castra.core    :as c :refer [mkremote]]))

(set! cljs.core/*print-fn* #(.log js/console %))

(defc state         {})
(defc error         nil)
(defc= error-message (when error (.-message error)))
(defc loading       [])
(defc active-chat   nil)

(defc= loaded?      (not= {} state))
(defc= loading?     (seq loading))
(defc= logged-in?   (not (or (nil? state) (= {} state))))
(defc= show-chat?   (and loaded? logged-in?))
(defc= show-login?  (and loaded? (not logged-in?)))
(defc= user         (:user state))
(defc= buddies      (:users state))
(defc= convs        (sort-by #(vec (sort %)) (keys (:messages state))))
(defc= msgs         (get-in state [:messages active-chat]))
(defc= loop-convs   (mapv (fn [x] [x, (s/join ", " (disj x user))]) convs))

(def clear-error!   #(reset! error nil))
(def switch-chat!   #(reset! active-chat @%))
(def toggle-chat*   #(cond (contains? %1 %2) (disj %1 %2) %1 (conj %1 %2) :_ #{@user %2}))
(def toggle-chat!   #(swap! active-chat toggle-chat* @%))

(def get-state      (mkremote 'demo.api.chat/get-state      state error (cell nil)))
(def register!      (mkremote 'demo.api.chat/register       state error loading))
(def login!         (mkremote 'demo.api.chat/login          state error loading))
(def logout!        (mkremote 'demo.api.chat/logout         state error loading))
(def send-message*  (mkremote 'demo.api.chat/send-message   state error loading))
(def send-message!  #(send-message* @user @active-chat %))

(cell=
  (let [s (get (ex-data error) :state ::nope)]
    (when-not (= ::nope s)
      (reset! ~(cell state) s))))

(defn init []
  (get-state)
  (js/setInterval #(if @logged-in? (get-state)) 200))
