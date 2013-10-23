;; Copyright (c) Alan Dipert and Micha Niskin. All rights reserved.
;; The use and distribution terms for this software are covered by the
;; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;; which can be found in the file epl-v10.html at the root of this distribution.
;; By using this software in any fashion, you are agreeing to be bound by
;; the terms of this license.
;; You must not remove this notice, or any other, from this software.

(page index.html
  (:refer-clojure :exclude [nth])
  (:require
    [tailrecursion.hoplon.util          :refer [nth name pluralize route-cell]]
    [tailrecursion.hoplon.storage-atom  :refer [local-storage]]))

;; internal ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(declare route state)

(defn reactive-info [todos i todo]
  [(cell= (:editing   todo))
   (cell= (:completed todo))
   (cell= (:text      todo))
   (cell= (and (not (empty? (:text todo)))
               (or (= "#/" route)
                   (and (= "#/active" route) (not (:completed todo)))
                   (and (= "#/completed" route) (:completed todo)))))])

;; public ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def state        (local-storage (-> 50 (repeat nil) vec cell) ::store))
(def route        (route-cell 50 "#/"))
(def completed    (cell= (filter :completed state)))
(def active       (cell= (remove :completed state)))
(def plural-item  (cell= (pluralize "item" (count active))))
(def loop-todos   (thing-looper state reactive-info))

(def todo         #(hash-map :editing false :completed false :text %))
(def update!      #(swap! state (fn [x] (vec (apply %1 (vec (filter map? x)) %&)))))
(def new!         #(when (not (empty? %)) (update! (partial into [(todo %)]))))
(def editing!     #(update! (partial map-indexed (fn [i v] (assoc v :editing (if (= i %1) %2 false))))))
(def done!        #(update! assoc-in [%1 :completed] %2))
(def all-done!    #(update! (partial map (fn [x] (assoc x :completed %)))))
(def clear-done!  (fn [& _] (update! (partial remove :completed))))
(def destroy!     #(update! (fn [x] (concat (take % x) (drop (inc %) x)))))
(def text!        #(if (empty? %2) (destroy! %1) (update! assoc-in [%1 :text] %2)))

;; page ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(html
  {:lang "en"}
  (head
    (meta {:charset "utf-8"})
    (meta {:http-equiv "X-UA-Compatible" :content "IE=edge,chrome=1"})
    (title "Hoplon • TodoMVC")
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
              {:on-submit [#(do (new! ~:new-todo) (do! ~@:new-todo :value ""))]}
              (input
                {:id          "new-todo"
                 :type        "text"
                 :placeholder "What needs to be done?"
                 :autofocus   "autofocus"
                 :on-focusout [#(do! ~@:new-todo :value "")]})))
          (section
            {:id        "main"
             :do-toggle [(not (and (empty? active) (empty? completed)))]}
            (input
              {:id        "toggle-all"
               :type      "checkbox"
               :do-attr   [:checked (empty? active)]
               :on-click  [#(all-done! ~:toggle-all)]})
            (label {:for "toggle-all"} "Mark all as complete")
            (ul
              {:id   "todo-list"
               :loop [loop-todos i edit? done? text show? complete# edit#]}
              (li
                {:do-class  [:completed done? :editing edit?]
                 :do-toggle [show?]}
                (div
                  {:class       "view"
                   :on-dblclick [#(editing! i true)]}
                  (input
                    {:id        complete#
                     :type      "checkbox"
                     :class     "toggle"
                     :do-attr   [:checked done?]
                     :on-click  [#(done! i ~complete#)]})
                  (label "~{text}")
                  (button
                    {:type      "submit"
                     :class     "destroy"
                     :on-click  [#(destroy! i)]}))
                (form
                  {:on-submit [#(editing! i false)]}
                  (input
                    {:id          edit#
                     :type        "text"
                     :class       "edit"
                     :do-value    [text]
                     :do-focus    [edit?]
                     :on-focusout [#(editing! i false)]
                     :on-change   [#(text! i ~edit#)]})))))
          (footer
            {:id        "footer"
             :do-toggle [(not (and (empty? active) (empty? completed)))]}
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
               :on-click  [#(clear-done!)]}
              "Clear completed (~(count completed))")))
        (footer
          {:id "info"}
          (p "Double-click to edit a todo")
          (p "Part of " (a {:href "http://github.com/tailrecursion/hoplon-demos/"} "hoplon-demos")))))))
