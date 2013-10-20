(ns demo.state.chat
  (:require-macros
    [tailrecursion.javelin :refer [defc defc= cell=]])
  (:require
    [clojure.set           :as cs]
    [clojure.string        :as s]
    [tailrecursion.javelin :as j :refer [cell]]
    [tailrecursion.castra  :as c :refer [mkremote]]
    [tailrecursion.hoplon  :as h :refer [thing-looper]]))

(set! cljs.core/*print-fn* #(.log js/console %))

(defn pad           [n & [pad]]   #(or (seq %) (repeat n pad)))

(defc state         {})
(defc error         nil)
(defc loading       [])
(defc active-chat   nil)

(defc= loaded?      (not= {} state))
(defc= loading?     (seq loading))
(defc= logged-in?   (not (or (nil? state) (= {} state))))
(defc= show-chat?   (and loaded? logged-in?))
(defc= show-login?  (and loaded? (not logged-in?)))

(defc= user         (:user state))
(defc= buddies      ((pad 10) (:users state)))
(defc= convs        ((pad 10) (sort (keys (:messages state)))))
(defc= msgs         ((pad 10) (get-in state [:messages active-chat])))

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

(def loop-buddies
  (thing-looper buddies (fn [buddies i buddy] [buddy])))

(def loop-convs
  (thing-looper
    convs
    (fn [convs i conv]
      [conv, (cell= (s/join ", " (disj conv user)))])))

(def loop-msgs
  (thing-looper
    msgs
    (fn [msgs i msg]
      [(cell= (str (:from msg)))
       (cell= (str (:text msg)))])))

(cell= (let [s (get-in error [:data :state] ::nope)]
         (if-not (= ::nope s) (reset! ~state s))))

(defn init []
  (get-state) 
  (js/setInterval #(if @logged-in? (get-state)) 200))
