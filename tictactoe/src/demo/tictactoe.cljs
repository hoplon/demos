(ns demo.tictactoe
  (:require
    [hoplon.core :as h]
    [hoplon.goog]
    [demo.tictactoe.advanced :as advanced]
    [demo.tictactoe.basic :as basic]
    [javelin.core :refer [cell cell= dosync]]))

(defonce page (cell :index))

(h/defelem index
  []
  (h/div
    (h/h1 "Tic Tac Toe in Hoplon")
    (h/p
      (h/a {:href "https://hoplon.io"} "Hoplon")
      " is a set of libraries and tools for creating dynamic web applications.")
    (h/p "This project demonstrates a Hoplon Tic Tac Toe in two ways:")
    (h/ol
      (h/li
        (h/a {:href "#" :click #(reset! page :basic)} "basic.cljs")
        " - a simple game of Tic Tac Toe.")
      (h/li
        (h/a {:href "#" :click #(reset! page :advanced)} "advanced.cljs")
        " - games of Tic Tac Toe with different sizes and score"))
    (h/p
      (h/a
        {:href "https://github.com/hoplon/demos/tree/master/tictactoe"}
        "Source Code"))))

(h/defelem tictactoe []
  (h/div
    (h/case-tpl page
      :index (index)
      :basic (basic/board page)
      :advanced (advanced/board page)
      (h/a {:href "#" :click #(reset! page :index)} "Index"))))

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (tictactoe)))

(defn start []
  (mount-components)
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start))
