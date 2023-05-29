(ns demo.async-webinar
  (:require
    [hoplon.core :as h]
    [hoplon.jquery]
    [javelin.core :refer [cell cell= defc defc= dosync]]))

(defn mouse-loc->vec
  "Given a Google Closure normalized DOM mouse event return the
  mouse x and y position as a two element vector."
  [e]
  [(.-clientX e) (.-clientY e)])

;; =============================================================================
;; Example 1

(defc ex1-content         ["Waiting for a click ...."])
(defc ex1-click-count     0)
(defn ex1 []
  (when (< @ex1-click-count 1)
    (swap! ex1-click-count inc)
    (swap! ex1-content conj "Got a click!")))

;; =============================================================================
;; Example 2

(defc ex2-content         ["Waiting for a click ...."])
(defc ex2-click-count     0)
(defn ex2 []
  (when (= @ex2-click-count 1)
    (swap! ex2-click-count inc)
    (swap! ex2-content conj "Done"))
  (when (= @ex2-click-count 0)
    (swap! ex2-click-count inc)
    (swap! ex2-content conj "Got a Click!" "Waiting for another click ....")))

;; =============================================================================
;; Example 3

(defc ex3-content           ["Waiting for a click from Button A ....."])
(defc ex3-click-count-a     0)
(defc ex3-click-count-b     0)
(defn ex3a []
  (when (= @ex3-click-count-a 0)
    (swap! ex3-click-count-a inc)
    (swap! ex3-content conj "Got a click!" "Waiting for a click from Button B ....")) )
(defn ex3b []
  (when (and (= @ex3-click-count-a 1) (= @ex3-click-count-b 0))
    (swap! ex3-click-count-b inc)
    (swap! ex3-content conj "Done!")))

;; =============================================================================
;; Example 6

(defc ex6-content           ["Click the button to start tracking the mouse."])
(defc ex6-button-name       "GO!")
(defn ex6-toggle []
  (let [new-name    (if (= @ex6-button-name "GO!") "STOP!" "GO!")]
    (reset! ex6-button-name new-name)))
(defn ex6 [e]
  (when (= @ex6-button-name "STOP!")
    (swap! ex6-content conj (str (mouse-loc->vec e)))))

;; =============================================================================
;; Example 7

(defc ex7-content         ["Click the button to start tracking the mouse."])
(defc ex7-button-name     "GO!")
(defn ex7-toggle []
  (let [new-name    (if (= @ex7-button-name "GO!") "STOP!" "GO!")]
    (reset! ex7-button-name new-name)))
(defn ex7 [e]
  (when (= @ex7-button-name "STOP!")
    (let [[_x y :as  m]   (mouse-loc->vec e)]
      (when (zero? (mod y 5))
        (swap! ex7-content conj (str m))))))

;; =============================================================================
;; Example 8

(defc ex8-content       ["Click the button ten times."])
(defc ex8-click-count   0)
(defn ex8 []
  (when (< @ex8-click-count 10)
    (swap! ex8-click-count inc)
    (when (= @ex8-click-count 1)
      (swap! ex8-content conj "1 Click!"))
    (when (> @ex8-click-count 1)
      (swap! ex8-content conj (str @ex8-click-count " clicks!")))
    (when (= @ex8-click-count 10)
      (swap! ex8-content conj "Done."))))

;; =============================================================================
;; Example 9

(defc ex9-index       0)
(defc ex9-animals     [:aardvark :beetle :cat :dog :elk :ferret
                       :goose :hippo :ibis :jellyfish :kangaroo])
(defc= ex9-card           (nth ex9-animals ex9-index))
(defn ex9-prev []
  (when (> @ex9-index 0)
    (swap! ex9-index dec)))
(defn ex9-next []
  (when (< @ex9-index (dec (count @ex9-animals)))
    (swap! ex9-index inc)))

;; =============================================================================
;; Example 10

(defc ex10-button-name  "START!")
(defc ex10-index       0)
(defn ex10 []
  (let [the-name    @ex10-button-name]
    (when (= the-name"START!")
      (reset! ex10-button-name "STOP!"))
    (when (= the-name"STOP!")
      (reset! ex10-button-name "DONE!"))))
(defc ex10-animals     [:aardvark :beetle :cat :dog :elk :ferret
                        :goose :hippo :ibis :jellyfish :kangaroo])
(defc= ex10-max        (dec (count ex10-animals)))
(defc= ex10-card           (nth ex10-animals ex10-index))
(defn ex10-prev []
  (if (> @ex10-index 0)
    (swap! ex10-index dec)
    (reset! ex10-index @ex10-max)))
(defn ex10-next []
  (if (< @ex10-index @ex10-max)
    (swap! ex10-index inc)
    (reset! ex10-index 0)))
(defn ex10-nav [k]
  (when (= @ex10-button-name "STOP!")
    (when (= k :next)
      (ex10-next))
    (when (= k :prev)
      (ex10-prev))))

(defn ex10-keys [e]
  (when (= @ex10-button-name "STOP!")
    (when (= (.-keyCode e) 39) (ex10-nav :next))
    (when (= (.-keyCode e) 37) (ex10-nav :prev))))


(h/defelem async-webinar []
  (h/div
    (h/<!-- "Example 1")
    (h/div {:id "ex1" :class "example"}
      (h/h2 "Example 1")
      (h/table
        (h/tbody
          (h/tr
            (h/td {:class "left"}
              (h/button {:id "ex1-button" :click ex1} "Click me"))
            (h/td {:id "ex1-display" :class "display"}
              (h/div {:id "ex1-messages"}
                (h/loop-tpl :bindings [x ex1-content]
                  (h/p (h/text "~{x}")))))))))
    (h/<!-- "Example 2")
    (h/div {:id "ex2" :class "example"}
      (h/h2 "Example 2")
      (h/table
        (h/tbody
          (h/tr
            (h/td {:class "left"}
              (h/button {:id "ex2-button" :click ex2} "Click me"))
            (h/td
              {:id "ex2-display" :class "display"}
              (h/div
                {:id "ex2-messages"}
                (h/loop-tpl :bindings [x ex2-content]
                  (h/p (h/text "~{x}")))))))))
    (h/<!-- "Example 3")
    (h/div {:id "ex3" :class "example"}
      (h/h2 "Example 3")
      (h/table
        (h/tbody
          (h/tr
            (h/td
              {:class "left"}
              (h/button {:id "ex3-button-a" :click ex3a} "Button A")
              (h/button {:id "ex3-button-b" :click ex3b} "Button B"))
            (h/td
              {:id "ex3-display" :class "display"}
              (h/div
                {:id "ex3-messages"}
                (h/loop-tpl :bindings [x ex3-content]
                  (h/p (h/text "~{x}")))))))))
    (h/<!-- "Example 4")
    (h/div
      {:id "ex4" :class "example"}
      (h/h2 "Example 4")
      (h/table
        (h/tbody
          (h/tr
            (h/td {:class "left"} (h/button {:id "ex4-button-a"} "Go!"))
            (h/td
              {:id "ex4-display" :class "display"}
              (h/div {:id "ex4-messages"}
                "Not reproduced because it seemed explicitly core.async-centric"))))))
    (h/<!-- "Example 5")
    (h/div
      {:id "ex5" :class "example"}
      (h/h2 "Example 5")
      (h/table
        (h/tbody
          (h/tr
            (h/td {:class "left"} (h/button {:id "ex5-button"} "Go!"))
            (h/td {:id "ex5-display" :class "display"}
              (h/div {:id "ex5-messages"}
                "Not reproduced because it seemed explicitly core.async-centric"))))))
    (h/<!-- "Example 6")
    (h/div
      {:id "ex6" :class "example" :mousemove ex6}
      (h/h2 "Example 6")
      (h/table
        (h/tbody
          (h/tr
            (h/td {:class "left"}
              (h/button {:id "ex6-button"
                         :click ex6-toggle}
                (h/text "~{ex6-button-name}")))
            (h/td {:id "ex6-display" :class "display"}
              (h/div {:class "scrolling"}
                (h/div {:id "ex6-messages"}
                  (h/loop-tpl :bindings [x ex6-content]
                    (h/p (h/text "~{x}"))))))))))
    (h/<!-- "Example 7")
    (h/div {:id "ex7" :class "example" :mousemove ex7}
      (h/h2 "Example 7")
      (h/table
        (h/tbody
          (h/tr
            (h/td {:class "left"}
              (h/button {:id "ex7-button"
                         :click ex7-toggle}
                (h/text ex7-button-name)))
            (h/td {:id "ex7-display" :class "display"}
              (h/div {:class "scrolling"}
                (h/div {:id "ex7-messages"}
                  (h/loop-tpl :bindings [x ex7-content]
                    (h/p (h/text "~{x}"))))))))))
    (h/<!-- "Example 8")
    (h/div {:id "ex8" :class "example"}
      (h/h2 "Example 8")
      (h/table
        (h/tbody
          (h/tr
            (h/td {:class "left"}
              (h/button {:id "ex8-button" :click ex8}
                "Click me!"))
            (h/td {:id "ex8-display" :class "display card"}
              (h/div {:class "scrolling"}
                (h/div {:id "ex8-messages"}
                  (h/loop-tpl :bindings [x ex8-content]
                    (h/p (h/text "~{x}"))))))))))
    (h/<!-- "Example 9")
    (h/div {:id "ex9" :class "example"}
      (h/h2 "Example 9")
      (h/table
        (h/tbody
          (h/tr
            (h/td {:class "left"}
              (h/button {:id "ex9-button-prev"
                         :click ex9-prev,
                         :class (cell= {:disabled (= ex9-index 0)})}
                "Previous")
              (h/button
                {:id "ex9-button-next"
                 :click ex9-next,
                 :class (cell= {:disabled (= ex9-index (dec (count ex9-animals)))})}
                "Next"))
            (h/td {:id "ex9-card",
                   :class "display card"}
              (h/text ex9-card))))))
    (h/<!-- "Example 10")
    (h/div
      {:id "ex10" :class "example" :keydown ex10-keys}
      (h/h2 "Example 10")
      (h/table
        (h/tbody
          (h/tr
            (h/td {:class "left"}
              (h/button
                {:id "ex10-button-start-stop",
                 :click ex10}
                (h/text ex10-button-name))
              (h/button
                {:id "ex10-button-prev"
                 :click #(ex10-nav :prev)
                 :class (cell= {:disabled (not= ex10-button-name "STOP!")})}
                "Previous")
              (h/button
                {:id "ex10-button-next"
                 :click #(ex10-nav :next)
                 :class (cell= {:disabled (not= ex10-button-name "STOP!")})}
                "Next"))
            (h/td {:id "ex10-card",
                   :class "display card"}
              (h/text ex10-card))))))))

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (async-webinar)))

(defn start []
  (mount-components)
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start))
