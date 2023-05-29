(ns hoplon.twitter.bootstrap
  (:require
    [hoplon.core :as h]
    [javelin.core :refer [cell cell=]]))

(def ^:private cols-prefixes
  (for [i [:xs :sm :md :lg] j (range 1 13)]
    [(str "col-" (name i)) j]))

(defn- mkreset [sep]
  (->> cols-prefixes
    (map (fn [[k v]] [(keyword (str k sep v)) false]))
    (into {} )))

(def ^:private cols-seps
  {:col "-" :push "-push-" :pull "-pull-" :offset "-offset-"})

(def ^:private cols-reset
  (->> cols-seps (map #(vector (key %) (mkreset (val %)))) (into {})))

(defn- mkcol-key [key m]
  (reduce-kv #(assoc %1 (keyword (str "col-" (name %2) (cols-seps key) %3)) true) {} m))

(defn- do-classes [elem key val]
  (h/do! elem :class (merge (cols-reset key) (mkcol-key key val))))

(defmethod h/do! :col    [elem key val] (do-classes elem key val))
(defmethod h/do! :offset [elem key val] (do-classes elem key val))
(defmethod h/do! :push   [elem key val] (do-classes elem key val))
(defmethod h/do! :pull   [elem key val] (do-classes elem key val))

(defmethod h/do! :success [elem _ val] (h/do! elem :class {:has-success (boolean val)}))
(defmethod h/do! :warning [elem _ val] (h/do! elem :class {:has-warning (boolean val)}))
(defmethod h/do! :error   [elem _ val] (h/do! elem :class {:has-error   (boolean val)}))

(h/defelem container       [attr kids] (h/div :class "container" attr kids))
(h/defelem form-horizontal [attr kids] (h/form :role "form" :class "form-horizontal" attr kids))
(h/defelem control-label   [attr kids] (h/label :class "control-label" attr kids))
(h/defelem form-group      [attr kids] (h/div :class "form-group" attr kids))
(h/defelem checkbox        [attr kids] (h/div :class "checkbox" attr kids))

(h/defelem active
  [{:keys [state]} [kid]]
  (kid :class (cell= {:active state})))

(h/defelem deck
  [{:keys [state]} kids]
  (->> kids
    (map-indexed #(active :state (cell= (= %1 state)) %2))))

(h/defelem selector
  [{:keys [state event]} kids]
  (->> kids
    (deck :state state)
    (map-indexed #(%2 event (fn [_] (reset! state %1))))))

(h/defelem tab-tab [attr [txt]] (h/a :href "javascript:void(0)" txt))
(h/defelem content [attr kids]  (h/div kids))
(h/defelem tab     [attr kids]  [(tab-tab (:name attr)) (content kids)])

(def ^:private trans (partial apply map vector))

(h/defelem tabs
  [{:keys [state]} kids]
  (let [[trigs ctnrs] (trans (partition 2 kids))
        state (or state (cell 0))
        trigs (selector :state state :event :click (map h/li trigs))
        ctnrs (deck :state state (map #(% :class "tab-pane") ctnrs))]
    [(h/ul :class "nav nav-tabs" trigs)
     (h/div :class "tab-content" ctnrs)]))
