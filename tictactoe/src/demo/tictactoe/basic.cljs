(ns demo.tictactoe.basic
  (:require
    [hoplon.core :as h]
    [javelin.core :refer [cell cell= defc defc= dosync]]))

(def transpose (partial apply map vector))
(def diagonal  (partial map (comp first drop) (range)))
(def indexed   (partial map-indexed vector))
(def new-game  (vec (repeat 9 nil)))

(defc  game      new-game)
(defc  undos     ())
(defc= rows      (partition 3 game))
(defc= columns   (transpose rows))
(defc= diagonals [(diagonal rows) (diagonal (map reverse rows))])
(defc= runs      (concat rows columns diagonals))
(defc= winner    (->> runs
                      (map set)
                      (remove #(contains? % nil))
                      (filter #(= 1 (count %)))
                      ffirst))
(defc= moves     (->> (indexed game)
                      (filter (comp nil? second))
                      (map first)))
(defc= no-moves? (not (seq moves)))
(defc= over      (cond winner    (str winner " won!")
                       no-moves? "Cat's game."))

(defn undo! []
  (when (seq @undos)
    (reset! game (peek @undos))
    (swap! undos pop)))

(defn ai! []
  (when-not @over
    (swap! game assoc (rand-nth @moves) "O")))

(defn play! [i j]
  (let [idx (+ (* i 3) j)]
    (when (and (not @over) (nil? (get @game idx)))
      (swap! undos conj @game)
      (swap! game assoc idx "X"))))

(defn reset-game! []
  (reset! game new-game)
  (reset! undos ()))

(h/defelem board
  [_ [page]]
  (h/div
    (h/table :class "tictac"
      (h/loop-tpl :bindings [[i row] (cell= (indexed rows))]
        (h/tr
          (h/loop-tpl :bindings [[j x] (cell= (indexed row))]
            (h/td :click #(and (play! @i @j) (ai!)) (h/text "~{x}"))))))
    (h/div :toggle (cell= (and (not over) (seq undos)))
      (h/button :click undo! "Undo"))
    (h/div :toggle over
      (h/p (h/text "~{over}"))
      (h/button :click reset-game! "Play Again"))
    (h/a :href "https://github.com/hoplon/demos/blob/master/tictactoe/src/demo/tictactoe/basic.cljs"
      "Source Code")
    " "
    (h/a {:href "#" :click #(reset! page :index)} " Index")))
