;; Copyright (c) Alan Dipert and Micha Niskin. All rights reserved.
;; The use and distribution terms for this software are covered by the
;; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;; which can be found in the file epl-v10.html at the root of this distribution.
;; By using this software in any fashion, you are agreeing to be bound by
;; the terms of this license.
;; You must not remove this notice, or any other, from this software.

(ns hoplon-demo-todofrp
  (:require-macros
    [tailrecursion.hoplon               :refer [with-frp]]
    [tailrecursion.javelin              :refer [cell= with-let]])
  (:require
    [tailrecursion.javelin              :refer [cell]]
    [tailrecursion.hoplon         :as d :refer [thing-looper value!]]
    [tailrecursion.hoplon.util          :refer [pluralize]]
    [tailrecursion.hoplon.storage-atom  :refer [local-storage]]))

;; internal ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(declare route state active? deleted? completed?)

(defn interval [f msec]
  (.setInterval js/window f msec))

(defn route-cell [msec default]
  (let [hash  #(.-hash (.-location js/window))] 
    (with-let [ret (cell (hash))] 
              (interval #(let [h (hash)] (reset! ret (if (empty? h) default h))) msec))))

(defn- update-state! [todos]
  (let [grouped (group-by deleted? todos)]
    (reset! state (into (get grouped false) (get grouped true)))))

(defn- reactive-info [todos i todo]
  (let [cellval #(cell= (get todo %))]
    (conj (mapv cellval [:editing :completed :text])
          (cell= (and (not (deleted? todo))
                      (or (= "#/" route)
                          (and (= "#/active" route) (active? todo))
                          (and (= "#/completed" route) (completed? todo))))))))

(def deleted?     #(empty? (:text (if (map? %) % (nth @state %)))))
(def completed?   #(:completed (if (map? %) % (nth @state %))))
(def active?      #(and (not (deleted? %)) (not (completed? %))))
(def clear        #(assoc % :editing false :completed false :text ""))
(def dfl-state    (vec (repeat 50 {:editing false :completed true :text ""})))

;; public ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def state        (local-storage (cell dfl-state) ::store))
(def route        (route-cell 50 "#/"))
(def editing-new  (cell ""))
(def live-ones    (cell= (filter (complement deleted?) state)))
(def completed    (cell= (filter completed? live-ones)))
(def active       (cell= (filter (complement completed?) live-ones)))
(def plural-item  (cell= (pluralize "item" (count active))))
(def loop-todos   (thing-looper state reactive-info))

(defn new-item! [text]
  (if (not (empty? text))
    (update-state! (into [(assoc (clear (peek @state)) :text text)] (pop @state)))))

(defn set-editing! [i v]
  (update-state! (-> (mapv #(assoc % :editing false) @state)
                   (assoc-in [i :editing] v))))

(defn set-completed! [i v]
  (update-state! (assoc-in @state [i :completed] v)))

(defn set-all-completed! [v]
  (update-state! (mapv #(assoc % :completed v) @state)))

(defn set-text! [i v]
  (update-state! (assoc-in (vec @state) [i :text] v)))

(defn clear-completed! [& _]
  (update-state! (mapv #(if (completed? %) (clear %) %) @state)))

(html
  {:lang "en"}
  (head
    (meta {:charset "utf-8"})
    (meta {:http-equiv "X-UA-Compatible" :content "IE=edge,chrome=1"})
    (title ($text "Hoplon • TodoMVC"))
    (link {:rel "stylesheet" :href "../assets/base.css"}))
  (body
    (with-frp
      (div
        (section
          {:id "todoapp"}
          (header
            {:id "header"}
            (h1 "todos")
            (form
              {:on-submit [#(do (new-item! @editing-new) (reset! editing-new ""))]}
              (input
                {:type        "text"
                 :id          "new-todo"
                 :placeholder "What needs to be done?"
                 :autofocus   "autofocus"
                 :do-value    [editing-new]
                 :on-keypress [#(reset! editing-new ~:new-todo)]
                 :on-focusout [#(reset! editing-new "")]})))
          (section
            {:id "main"
             :do-class [:hidden (and (empty? active) (empty? completed))]}
            (input
              {:type      "checkbox"
               :id        "toggle-all"
               :do-attr   [:checked (empty? active)]
               :on-click  [#(set-all-completed! (value! (.-target %)))]})
            (label {:for "toggle-all"} "Mark all as complete")
            (ul
              {:id "todo-list"
               :loop [loop-todos idx is-editing is-completed text is-visible]}
              (li
                {:do-class [:completed is-completed
                            :hidden (not is-visible)
                            :editing is-editing]}
                (div
                  {:class       "view"
                   :on-dblclick [#(set-editing! idx true)]}
                  (input
                    {:type      "checkbox"
                     :class     "toggle"
                     :do-attr   [:checked is-completed]
                     :on-click  [#(set-completed! idx (value! (.-target %)))]})
                  (label "~{text}")
                  (button
                    {:type      "submit"
                     :class     "destroy"
                     :on-click  [#(set-text! idx "")]}))
                (form
                  {:on-submit [#(set-editing! idx false)]}
                  (input
                    {:type        "text"
                     :class       "edit"
                     :do-value    [text]
                     :do-focus    [is-editing]
                     :on-focusout [#(set-editing! idx false)]
                     :on-change   [#(set-text! idx (value! (.-target %)))]})))))
          (footer
            {:id        "footer"
             :do-class  [:hidden (and (empty? active) (empty? completed))]}
            (span
              {:id "todo-count"}
              (strong "~(count active) ")
              (span "~{plural-item} left"))
            (ul
              {:id "filters"}
              (li (a {:href "#/"          :do-class [:selected (= "#/"          route)]} "All"))
              (li (a {:href "#/active"    :do-class [:selected (= "#/active"    route)]} "Active"))
              (li (a {:href "#/completed" :do-class [:selected (= "#/completed" route)]} "Completed")))
            (button
              {:type      "submit"
               :id        "clear-completed"
               :on-click  [#(clear-completed!)]}
              "Clear completed (~(count completed))")))
        (footer
          {:id "info"}
          (p "Double-click to edit a todo")
          (p "Part of " (a {:href "http://github.com/tailrecursion/hoplon-demos/"} "hoplon-demos")))))))
