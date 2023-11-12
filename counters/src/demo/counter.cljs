(ns demo.counter
  (:require
    [hoplon.core :as h]
    [hoplon.dom]
    ; [hoplon.goog-spec :as hs]
    ; [hoplon.jquery]
    ; [hoplon.jquery-spec :as hs]
    [javelin.core :as j]))

; (hs/spec!)

(j/defc show? false)
(def default-value "default value")
(j/defc value default-value)
(j/defc checkbox-a false)
(j/defc checkbox-b true)
(j/defc class-map {:a true
                   :b false})
(j/defc class-string "a b c")
(def next-class-string
  {"a b c" "a c"
   "a c" "a b c"})

(j/defc class-vector [:a :b :c])
(def next-class-vector
  {[:a :b :c] [:a :c]
   [:a :c ] [:a :b :c]})

(j/defc focus? false)
(j/defc select? false)
(j/defc text "some text")
(j/defc html (h/a :href "#" "some link"))
(j/defc html2 (h/a :href "#" "some link"))
(j/defc html-txt "<span>This is a span</span>")
(j/defc scroll-to-end false)
(j/defc random-attrs {:a "x"
                     :b "y"})

(j/defc radio-input "b")

(defn mount-components []
  (h/body
    (h/button :click #(reset! scroll-to-end true)
      "Go to end")


    (h/p (h/text "value: ~{value}"))
    (h/input :value value
      :change #(reset! value @%))
    (h/button :click #(reset! value default-value) "Click me to reset to default value")
    (h/div
      (h/label (h/input :type "checkbox"
                 :click #(do (swap! checkbox-a not) true)
                 :value checkbox-a)
        "A")
      (h/label (h/input :type "checkbox"
                 :click #(do (reset! checkbox-b (-> % .-target .-checked)) true)
                 :value checkbox-b)
        "B"))
    (h/p (h/text "a: ~{checkbox-a} b: ~{checkbox-b}"))

    (h/h2 "Radio")
    (h/label
      (h/input
        :type "radio"
        :click #(reset! radio-input (.getAttribute (.-target %) "data-id"))

        ;; You need to check each input to se if it is checked.
        :checked (j/cell= (= "a" radio-input))
        :data-id "a"
        :name "radio-group")
      "a")

    (h/label
      (h/input
        :type "radio"
        :click #(reset! radio-input (.getAttribute (.-target %) "data-id"))
        :checked (j/cell= (= "b" radio-input))
        :data-id "b"
        :name "radio-group")
      "b")
    (h/p (h/text "Selected radio: ~{radio-input}"))

    (h/p :class class-map
      (h/text "class ~{class-map}"))
    (h/button :click #(swap! class-map (fn [m] (-> m (update :a not) (update :b not)))) "Click me to toggle a and b")

    ; FIXME: doesn't remove classes
    (h/p :smart-class class-string
      (h/text "class ~{class-string}"))
    (h/button :click #(swap! class-string (fn [s] (get next-class-string s))) "Click me to toggle b")

    ; FIXME: doesn't remove classes
    (h/p :smart-class class-vector
      (h/text "class ~{class-vector}"))
    (h/button :click #(swap! class-vector (fn [s] (get next-class-vector s))) "Click me to toggle b")

    (h/p (h/text "show?: ~{show?}"))
    (h/p :toggle show? "Toggle")
    (h/button :click #(swap! show? not) "Click me to toggle show?")

    (h/p (h/text "show?: ~{show?}"))
    (h/p :fade-toggle show? "Fade toggle")
    (h/button :click #(swap! show? not) "Click me to toggle show?")

    ; FIXME: doesn't exist on goog
    (h/p (h/text "show?: ~{show?}"))
    (h/p :slide-toggle show? "Slide toggle")
    (h/button :click #(swap! show? not) "Click me to toggle show?")

    ; (h/p "space")
    ; (h/p "space")
    ; (h/p "space")
    ; (h/p "space")
    ; (h/p "space")
    ; (h/p "space")
    ; (h/p "space")
    ; (h/p "space")
    ; (h/p "space")
    ; (h/p "space")
    ; (h/p "space")

    ; FIXME: throws on goog
    (h/p (h/text "focus?: ~{focus?}"))
    (h/input :focus focus?
      :change #(reset! value @%))
    (h/button :click #(swap! focus? not) "Click me to toggle focus")

    ; FIXME: throws on goog
    (h/p (h/text "select?: ~{select?}"))
    (h/input :select select?
      :value "sample"
      :change #(reset! value @%))
    (h/button :click #(swap! select? not) "Click me to toggle select")

    ; FIXME: throws on goog
    (h/p (h/text "focus?: ~{focus?}"))
    (h/input :focus-select focus?
      :change #(reset! value @%))
    (h/button :click #(swap! focus? not) "Click me to toggle focus")

    (h/p :text text)
    (h/input :placeholder "type here to change the text"
      :value text
      :keyup #(reset! text @%))
    
    ; FIXME: doesn't work on goog
    (h/p :html html
      "this will not show")
    (h/p :html html-txt
      "this will not show too")
    (h/h2 "dangerous")
    (h/p :dangerous-html html2
      "this will not show too")
    (h/p :dangerous-html html-txt
      "this will not show too")
    (h/button :click #(reset! html-txt "<strong>This is a strong</strong>")
      "Make span strong")

    
    
    ; FIXME: throws on goog
    (h/p :scroll-to scroll-to-end
      "The end")
    (h/p :attr random-attrs
      "Random attrs")

    (h/p :css {:color "red"
               :font-size "20px"}
      "Custom css")))


(defn start
  []
  (mount-components)
  (js/console.log "Starting..."))


(defn stop
  []
  (js/console.log "Stopping..."))


(defn init
  []
  (js/console.log "Initializing...")
  (start))
