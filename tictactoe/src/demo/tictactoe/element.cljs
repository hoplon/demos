(ns demo.tictactoe.element
  (:require
    [hoplon.core :as h]
    [javelin.core :refer [cell cell= defc defc=]]))

(def transpose (partial apply map vector))
(def diagonal  (partial map (comp first drop) (range)))
(def indexed   (partial map-indexed vector))
(def new-game  #(vec (repeat % nil)))

(h/defelem scoreboard
  [{:keys [history]} _]
  (let [sorted (cell= (indexed (->> history (sort-by second) reverse)))]
    (h/table :class "score"
      (h/tr (h/th "rank") (h/th "player") (h/th "score"))
      (h/loop-tpl :bindings [[rank [player score]] sorted]
        (h/tr
          (h/td :align "center" (h/text "~(inc rank)"))
          (h/td :align "center" (h/text "~{player}"))
          (h/td :align "center" (h/text "~{score}")))))))

(h/defelem game
  [{:keys [size history] :or {size 3 history (cell [])} :as attr} _]
  (let [rowsize   (js/parseInt size)
        sizen     (* rowsize rowsize)
        game      (cell  (new-game sizen))
        rows      (cell= (partition rowsize game))
        columns   (cell= (transpose rows))
        diagonals (cell= [(diagonal rows) (diagonal (map reverse rows))])
        runs      (cell= (concat rows columns diagonals))
        winner    (cell= (->> runs
                              (map set)
                              (remove #(contains? % nil))
                              (filter #(= 1 (count %)))
                              ffirst))
        moves     (cell= (->> (indexed game)
                              (filter (comp nil? second))
                              (map first)))
        no-moves? (cell= (not (seq moves)))
        over      (cell= (cond winner    (str winner " won!")
                               no-moves? "Cat's game."))
        ai!       (fn []
                    (when-not @over
                      (swap! game assoc (rand-nth @moves) "O")))
        play!     (fn [i j]
                    (let [idx (+ (* i rowsize) j)]
                      (when (and (not @over)
                                 (nil? (get @game idx)))
                        (swap! game assoc idx "X"))))]
    (reset! history {"X" 0 "O" 0 "cat" 0})
    (cell=
      (when (or winner no-moves?)
        (swap! ~(cell history) update-in [(or winner "cat")] inc)))
    (h/div (dissoc attr :size :history)
      (h/table :class "tictac"
        (h/loop-tpl :bindings [[i row] (cell= (indexed rows))]
          (h/tr
            (h/loop-tpl :bindings [[j x] (cell= (indexed row))]
              (h/td :click #(and (play! @i @j) (ai!)) (h/text "~{x}"))))))
     (h/div :toggle over
       (h/p (h/text "~{over}"))
       (h/button :click #(reset! game (new-game sizen)) "Play Again")))))
