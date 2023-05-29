(ns demo.todo-frp
  (:require
    [hoplon.core :as h]
    [hoplon.storage-atom :refer [local-storage]]
    [hoplon.jquery]
    [javelin.core :refer [cell cell= defc defc= dosync with-let]]))

;; utility functions ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn pluralize
  [word count]
  (str word (when (not= 1 count) "s")))

(def mapv-indexed (comp vec map-indexed))

(defn dissocv [v i]
  (let [z (- (dec (count v)) i)]
    (cond (neg?  z) v
          (zero? z) (pop v)
          (pos?  z) (into (subvec v 0 i) (subvec v (inc i))))))

(defn decorate [todo route editing i]
  (let [{done? :completed text :text} todo]
    (-> todo
        (assoc :editing (= editing i)
               :visible (and (not (empty? text))
                             (or (= "#/" route)
                                 (and (= "#/active" route) (not done?))
                                 (and (= "#/completed" route) done?)))))))

(defn route-cell
  "Defines a cell whose value is the URI fragment."
  [& [default]]
  (let [c (cell (.. js/window -location -hash))]
    (with-let [_ (cell= (or (and (seq c) c) default))]
      (-> js/window
          (.addEventListener "hashchange" #(reset! c (.. js/window -location -hash)))))))

;; persisted state cell (AKA: stem cell) ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def   state        (-> (cell []) (local-storage ::store)))

;; local state cells ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defc  loaded?      false)
(defc  editing      nil)
(def   route        (route-cell "#/"))

;; formula cells (computed state) ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defc= completed    (filter :completed state))
(defc= active       (remove :completed state))
(defc= plural-item  (pluralize "item" (count active)))
(defc= todos        (mapv-indexed #(list %1 (decorate %2 route editing %1)) state))
(defc= reverse-todos (reverse todos))

;; state transition functions ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn  todo        [t]   {:completed false :text t})
(defn  destroy!    [i]   (swap! state dissocv i))
(defn  done!       [i v] (swap! state update-in [i :completed] not))
(defn  clear-done! [& _] (swap! state #(vec (remove :completed %))))
(defn  new!        [t]   (when (seq t) (swap! state conj (todo t))))
(defn  all-done!   [v]   (swap! state #(mapv (fn [x] (assoc x :completed v)) %)))
(defn  editing!    [i v] (reset! editing (if v i nil)))
(defn  text!       [i v] (if (empty? v) (destroy! i) (swap! state assoc-in [i :text] v)))

(h/defelem todo-mvc []
  (h/div
    (h/section :id "todoapp"
      (h/header :id "header"
        (h/h1 "todos")
        (let [new-todo-txt (cell "")]
          (h/form
            :submit #(do (new! @new-todo-txt)
                       (reset! new-todo-txt "")
                       (.preventDefault %))
            (h/input
              :id "new-todo"
              :type "text"
              :autofocus true
              :placeholder "What needs to be done?"
              :value new-todo-txt
              :change #(reset! new-todo-txt @%)
              :blur   #(reset! new-todo-txt "")))))
      (h/section
        :id "main"
        :toggle (cell= (not (and (empty? active) (empty? completed))))
        (h/input
          :id "toggle-all"
          :type "checkbox"
          :attr (cell= {:checked (seq active)})
          :click #(all-done! true))
        (h/label :for "toggle-all"
          "Mark all as complete")
        (h/ul :id "todo-list"
          (h/loop-tpl
            :bindings [[i {edit? :editing done? :completed todo-text :text show? :visible}] reverse-todos]
            (h/li
              :class (cell= {:completed done? :editing edit?})
              :toggle show?
              (h/div :class "view"
                :dblclick #(editing! @i true)
                (h/input
                  :type "checkbox"
                  :class "toggle"
                  :attr (cell= {:checked done?})
                  :click #(done! @i @%))
                (h/label (h/text "~{todo-text}"))
                (h/button
                  :type  "submit"
                  :class "destroy"
                  :click #(destroy! @i)))
              (h/form
                :submit #(do (editing! @i false)
                           (.preventDefault %))
                (h/input
                  :type   "text"
                  :class  "edit"
                  :value  todo-text
                  :focus  edit?
                  :blur   #(when @edit? (editing! @i false))
                  :change #(when @edit? (text! @i @%))))))))
      (h/footer
        :id "footer"
        :toggle (cell= (not (and (empty? active) (empty? completed))))
        (h/span :id "todo-count"
          (h/strong (h/text "~(count active) "))
          (h/span (h/text "~{plural-item} left")))
        (h/ul :id "filters"
          (h/li (h/a :href "#/"          :class (cell= {:selected (= "#/" route)})          "All"))
          (h/li (h/a :href "#/active"    :class (cell= {:selected (= "#/active" route)})    "Active"))
          (h/li (h/a :href "#/completed" :class (cell= {:selected (= "#/completed" route)}) "Completed")))
        (h/button
          :type  "submit"
          :id    "clear-completed"
          :click #(clear-done!)
          (h/text "Clear completed (~(count completed))"))))
    (h/footer :id "info"
      (h/p "Double-click to edit a todo")
      (h/p "Part of " (h/a :href "http://github.com/hoplon/demos/" "Hoplon demos"))))

  )

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (todo-mvc)))

(defn start []
  (mount-components)
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start))
