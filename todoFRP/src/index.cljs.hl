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

(declare route state editing)

(defn dissocv [v i]
  (let [z (- (dec (count v)) i)]
    (cond (neg?   z) v
          (zero?  z) (pop v)
          (pos?   z) (into (subvec v 0 i) (subvec v (inc i))))))

(defn reactive-info [todos i todo]
  [(cell= (= editing i))
   (cell= (:completed todo))
   (cell= (:text      todo))
   (cell= (and (not (empty? (:text todo)))
               (or (= "#/" route)
                   (and (= "#/active" route) (not (:completed todo)))
                   (and (= "#/completed" route) (:completed todo)))))])

;; public ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def state        (-> (cell []) (local-storage ::store)))
(def loaded?      (cell false))
(def editing      (cell nil))
(def route        (route-cell 100 "#/"))
(def completed    (cell= (filter :completed state)))
(def active       (cell= (remove :completed state)))
(def plural-item  (cell= (pluralize "item" (count active))))
(def loop-todos   (thing-looper state 50 reactive-info :done? loaded? :reverse? true))

(def todo         (fn [t]   {:completed false :text t}))
(def destroy!     (fn [i]   (swap! state dissocv i)))
(def done!        (fn [i v] (swap! state assoc-in [i :completed] v)))
(def clear-done!  (fn [& _] (swap! state #(vec (remove :completed %)))))
(def new!         (fn [t]   (when (not (empty? t)) (swap! state conj (todo t)))))
(def all-done!    (fn [v]   (swap! state #(mapv (fn [x] (assoc x :completed v)) %))))
(def editing!     (fn [i v] (reset! editing (if v i nil))))
(def text!        (fn [i v] (if (empty? v) (destroy! i) (swap! state assoc-in [i :text] v))))

;; page ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(with-frp
  (html
    :lang "en"
    (head
      (html-meta :charset "utf-8")
      (html-meta :http-equiv "X-UA-Compatible" :content "IE=edge,chrome=1")
      (link :rel "stylesheet" :href "../assets/base.css")
      (title "Hoplon • TodoMVC (~(count active))"))
    (body
      (div
        (section
          :id "todoapp"
          (header
            :id "header"
            (h1 "todos")
            (form
              :on-submit [#(do (new! ~:new-todo) (do! ~@:new-todo :value ""))]
              (input
                :id "new-todo"
                :type "text"
                :autofocus "autofocus"
                :do-attr [:placeholder (if loaded? "What needs to be done?" "Loading...")]
                :on-focusout [#(do! ~@:new-todo :value "")])))
          (section
            :id "main"
            :do-toggle [(not (and (empty? active) (empty? completed)))]
            (input
              :id "toggle-all"
              :type "checkbox"
              :do-attr [:checked (empty? active)]
              :on-click [#(all-done! ~:toggle-all)])
            (label
              :for "toggle-all"
              "Mark all as complete")
            (ul
              :id "todo-list"
              :loop [loop-todos i edit? done? text show? done# edit#]
              (li
                :style "display:none;"
                :do-class [:completed done? :editing edit?] 
                :do-toggle [show?]
                (div 
                  :class "view"
                  :on-dblclick [#(editing! i true)]
                  (input
                    :id done# 
                    :type "checkbox"
                    :class "toggle"
                    :do-attr [:checked done?] 
                    :on-click [#(done! i ~done#)])
                  (label "~{text}")
                  (button
                    :type "submit"
                    :class "destroy"
                    :on-click  [#(destroy! i)]))
                (form
                  :on-submit [#(editing! i false)]
                  (input
                    :id edit#
                    :type "text"
                    :class "edit"
                    :do-value [text]
                    :do-focus [edit?]
                    :on-focusout [#(when @edit? (editing! i false))]
                    :on-change [#(when @edit? (text! i ~edit#))])))))
          (footer 
            :id "footer"
            :do-toggle [(not (and (empty? active) (empty? completed)))]
            (span 
              :id "todo-count"
              (strong "~(count active) ")
              (span "~{plural-item} left"))
            (ul
              :id "filters"
              (li (a :href "#/"          :do-class [:selected (= "#/" route)]          "All"))
              (li (a :href "#/active"    :do-class [:selected (= "#/active" route)]    "Active"))
              (li (a :href "#/completed" :do-class [:selected (= "#/completed" route)] "Completed")))
            (button
              :type      "submit"
              :id        "clear-completed"
              :on-click  [#(clear-done!)]
              "Clear completed (~(count completed))")))
        (footer
          :id "info" 
          (p "Double-click to edit a todo")
          (p "Part of " (a :href "http://github.com/tailrecursion/hoplon-demos/" "hoplon-demos"))))))) 
