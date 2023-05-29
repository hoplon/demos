(ns demo.tictactoe.advanced
  (:require
    [hoplon.core :as h]
    [demo.tictactoe.element :as tictactoe]
    [javelin.core :refer [cell cell= defc defc= dosync]]))

(defc winners nil)

(h/defelem board
  [_ [page]]
  (h/div
    (h/h2 "Small Board")
    (tictactoe/game {:size "3"})
    (h/h2 "Big Board")
    (tictactoe/game {:size "5"})
    (h/h2 "Wire Up A Scoreboard")
    (tictactoe/game {:size "3" :history winners :style "float:left"})
    (tictactoe/scoreboard {:history winners})
    (h/div {:style "clear:both"}
      (h/div {:style "padding-top: 20px;padding-bottom:50px;"}
        (h/a {:href "https://github.com/hoplon/demos/blob/master/tictactoe/src/demo/tictactoe/advanced.cljs"}
          "Source Code")
        " "
        (h/a {:href "#" :click #(reset! page :index)} "Index")))))
