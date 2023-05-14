(ns demo.inputs
  (:require
    [hoplon.core :as h]
    [hoplon.goog]
    [javelin.core :refer [cell cell= defc]]))

;; Cells for each input example.
(defc text-input "")
(defc range-input 20)
(defc select-input "green")
(defc multi-select #{"green"})
(defc check-box true)
(defc radio-input "b")

(h/defelem inputs []
  
  (h/div
    (h/h1
      "Inputs and state in Hoplon")
    (h/p
     "Each input example has a corresponding Javelin cell.
      When you change the input its cell is updated.")
    (h/h2 "A simple text input")
    (h/p "This shows that you can have more than one field pointing to the same
      cell. Edit one input and see everything change in sync.")
    (h/input
      :type "text"
      :placeholder "Type something here"

      ;; The cell is used as the value of the input.
      :value text-input

      ;; The on-keyup event fires on every keystroke for demo purposes. In
      ;; practice you should only update on-blur or on-change.
      :keyup #(reset! text-input @%))
      ;; On all the examples we are using the event to get the value of the
      ;; input. So no id is necessary.

    ;; This second input is just to show that you can point two inputs to the
    ;; same cell and update them in sync. It's the same as the first input.
    (h/input
      :type "text"
      :placeholder "Type something here"
      :value text-input
      :keyup #(reset! text-input @%))
    (h/p (h/text "Value of text input: ~{text-input}"))

    (h/h2 "A range input")
    (h/p "Every example gets the value from a cell and updates it when it changes.")
    (h/input
      :style "width:400px"
      :type "range" :min 0 :max 100 :step 1
      :value range-input
      :input #(reset! range-input @%))
    (h/p (h/text "Value of range input: ~{range-input}"))

    (h/h2 "A select input")
    (h/select
      :change #(reset! select-input @%)
      :value select-input
      (h/option :selected (cell= (= select-input "blue")) :value "blue"  "blue")
      (h/option :selected (cell= (= select-input "green")) :value "green" "green")
      (h/option :selected (cell= (= select-input "gold")) :value "gold" "gold")
      (h/option :selected (cell= (= select-input "indigo")) :value "indigo" "indigo"))
    (h/p (h/text "Value of select input: ~{select-input}"))

    (h/h2 "Multiple select input")
    (h/select

      ;; The handler is more complex here because of the parsing of the
      ;; selectedOptions object. The cell is a set in this case.
      :change #(let [options (.. % -target -selectedOptions)
                     l (.-length options)]
                 (reset! multi-select
                   (set
                     (for [i (range l)]
                       (.-value (.item options i))))))
      :multiple "true"

      ;; You need to check each option value against the multi-select cell to
      ;; se if it should be selected.
      (h/option :selected (cell= (multi-select "blue")) :value "blue" "blue")
      (h/option :selected (cell= (multi-select "green")) :value "green" "green")
      (h/option :selected (cell= (multi-select "gold")) :value "gold" "gold")
      (h/option :selected (cell= (multi-select "indigo")) :value "indigo" "indigo"))
    (h/p (h/text "Value of multiple select input: ~{multi-select}"))

    (h/h2 "A checkbox")
    (h/label
      (h/input
        :type "checkbox"

        ;; On checkboxes you need to return true from the handler or the
        ;; checkbox will not uncheck (at the moment).
        :click #(do
                  (swap! check-box not)
                  true)
        :value check-box)
        "Checkbox")
    (h/p (h/text "Value of checkbox: ~{check-box}"))

    (h/h2 "A radio button")

    ;; Radio buttons require more code, but work fine with cells too.
    (h/label
      (h/input
        :type "radio"
        :click #(reset! radio-input (.getAttribute (.-target %) "data-id"))

        ;; You need to check each input to se if it is checked.
        :checked (cell= (= "a" radio-input))
        :data-id "a"
        :name "radio-group")
      "a")

    (h/label
      (h/input
        :type "radio"
        :click #(reset! radio-input (.getAttribute (.-target %) "data-id"))
        :checked (cell= (= "b" radio-input))
        :data-id "b"
        :name "radio-group")
      "b")
    (h/p (h/text "Selected radio: ~{radio-input}"))))

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (inputs)))

(defn start []
  (mount-components)
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start))
