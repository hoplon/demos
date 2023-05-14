(ns demo.infinite-scroll-paginated
  (:require
    [hoplon.core :as h]
    [hoplon.jquery]
    [javelin.core :refer [cell cell= dosync defc defc=]]
    [clojure.string :as str]))

(defn generate-numbers
  "This generates a data vector with ten maps of sequential numbers.
  Example: [{:number \"0\"} {:number \"1\"} ... {:number \"9\"}]"
  [n]
  (vec (map (fn [x] {:number (str x)}) (range (* (dec n) 10)
                                         (+ (* (dec n) 10) 10)))))
(defn generate-data
  "This generates a page map with this format
  {\"1\" {:page 1, :data [...]}}"
  [n]
  {(str n) {:page n
            :data (generate-numbers n)}})

(def fake-api
  "This is a vector of pages from 1 to 99"
  (into {} (map generate-data (range 1 100))))

;; The application starts here.

(defc  state "The current state, a vector of loaded pages."         [])
(defc  error "It will be a error message when a page is not found." nil)
(defc  loading "When it isn't empty, something is loading."         [])

(defc= loading? "True when there is something loading" (seq loading))

(defc= sorted-state
  "A vector of pages sorted by page"
  (vec (sort-by :page state)))

(defc  pages-loaded "Page numbers of loaded pages." [])

(defc= prev-page
  "Previous page that should be loaded (when scrolling up)."
  (dec (apply min pages-loaded)))

(defc= next-page
  "Next page number that should be loaded."
  (inc (apply max pages-loaded)))

(defc  last-scroll "Last scroll position" 0)
(defc  hash-scroll "When false disable the handler to scroll on hashchange." true)
(defc  timeout-id "Last setTimeout id so we can cancel it if needed." 0)

(defn get-page
  "Get a page from the fake api and run a callback on the result."
  [p callback]
  (callback (fake-api p)))

(defn fetch-page!
  "Put the page p on the state and on the pages-loaded."
  [p]
  (when-not @loading?
    (reset! error nil)
    (swap! loading conj :loading)
    (let [q (str p)]
      (get-page q
        #(do
           (swap! loading pop)
           (when %
             (swap! state conj %)
             (swap! pages-loaded conj p))
           (when-not % (reset! error "Sem mais páginas")))))))

(defn fetch-next-page!
  "Put the next page on the state and pages-loaded."
  []
  (fetch-page! @next-page))

(defn fetch-prev-page!
  "Put the previous page on the state and pages-loaded and fix the scroll
  position."
  []
  (let [p @prev-page]
    (fetch-page! p)
    (.scrollTop (js/jQuery js/window)
               (+ (.scrollTop (js/jQuery js/window))
                  (.height (js/jQuery (str "#page-" p)))))))

(defn mostly-visible
  "Returns true if the element is the most visible on screen."
  [el]
  (let [w               (js/jQuery js/window)
        vertical-scroll (.scrollTop w)
        window-height   (.height w)
        el-top          (.-top (.offset (js/jQuery el)))
        el-height       (.height (js/jQuery el))
        el-bottom       (+ el-top el-height)]
    (and (> (- el-bottom (* el-height 0.25)) vertical-scroll)
         (< el-top (+ vertical-scroll (* 0.5 window-height))))))



(h/defelem infinite-scroll-paginated []
  (h/div
    (h/div :id "header"
      (h/h1 "Infinite Scrolling")
      (h/p "Scroll down to see more pages..."))
    (h/div :id "wrapper"
      (h/div :id "loading" :toggle loading? "LOADING IMAGES...")
      (h/div :id "error" :toggle error
        "No more pages: "
        (h/a :href "javascript:void(0)" :click fetch-next-page! "try again"))
      (h/div
        (h/loop-tpl :bindings [{p :page d :data} sorted-state]
          (h/div
            :id (cell= (str "page-" p))
            :class "item-page"
            :data-url (cell= (str "#/page/" p))
            (h/h1 :id (cell= (str "page-" p))
              (h/text "Page: ~{p}"))
            (h/loop-tpl :bindings [{it :number} d]
              (h/div
                :css {:height 100}
                (h/h2 (h/text "Number: ~{it}"))))))))))

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (infinite-scroll-paginated)))

(defn start []
  (mount-components)
  (if (= (.-length (.-hash (.-location js/window))) 0)
    (fetch-page! 1)
    (fetch-page! (js/parseInt (last (str/split (.-hash (.-location js/window)) #"/")))))

  (h/on! js/window :scroll
    #(let [w               (js/jQuery js/window)
           vertical-scroll (.scrollTop w)
           window-height   (.height w)
           document-height (.height (js/jQuery js/document))
           at-end?         (>= vertical-scroll
                             (* 0.9 (- document-height window-height)))
           header-height   (.height (js/jQuery "#header"))
           at-begin?       (= vertical-scroll 0)]
       ;; This part of code checks what is the page most visible on screen and
       ;; changes the hash if that changed. It disables the scroll on
       ;; hashchange event and reenables it after.
       (when (> (.abs js/Math (- vertical-scroll @last-scroll))
               (* 0.1 window-height))
         (reset! last-scroll vertical-scroll)
         (.each (js/jQuery ".item-page")
           (fn [i v]
             (if (mostly-visible v)
               (do
                 (js/clearTimeout @timeout-id)
                 (reset! hash-scroll false)
                 (set! (.-hash (.-location js/window))
                   (.attr (js/jQuery v) "data-url"))
                 (reset! timeout-id (js/setTimeout
                                      (fn [] (reset! hash-scroll true))
                                      500)))))))
       ;; This checks if we are scrolling near the end of the page or at the
       ;; beginning. Them it loads the next or previous page.
       (if at-end?
         (fetch-next-page!)
         (when at-begin?
           (fetch-prev-page!)))))

  ;; This part makes the page scroll on hashchange if the page asked is already
  ;; loaded and triggers a reload when it isn't.
  (h/on! js/window :hashchange
    #(when @hash-scroll
       (let [p (last (str/split (.-hash (.-location js/window)) #"/"))
             el (js/jQuery (str "#page-"p))]
         (if (> (.-length el) 0)
           (let [position (.position el)
                 tp (.-top position)
                 b (js/jQuery "html,body")]
             (.animate b (clj->js {:scrollTop tp})))
           (do
             (reset! last-scroll 0)
             (.reload (.-location js/window) true))))))
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start))
