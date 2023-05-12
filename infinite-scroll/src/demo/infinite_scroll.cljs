(ns demo.infinite-scroll
  (:require
    [hoplon.core :as h]
    [hoplon.goog]
    [javelin.core :refer [cell cell= dosync defc defc=]]))

(defn new-image
  [random]
  (str "https://picsum.photos/280/200?random=" random))

(def   random-index (atom -1))
(defc  images    "The current list of image urls."           [])
(defc  loading  "A vector of in-progress async calls."       [])
(defc= loading? "True if there are in-progress async calls." (seq loading))

(defmethod h/on! :scroll-end
  ;; Add the :scroll-end attribute, which fires its callback when the element is
  ;; scrolled down as far as it can go--to the bottom.
  [elem _ callback]
  (h/on! elem :scroll
    #(let [el (.-target %)
           ch (.-clientHeight el)
           sh (.-scrollHeight el)
           st (.-scrollTop    el)
           at-end? (= ch (- sh st))]
       (when at-end? (callback %)))))

(defn fetch-images!
  "Append more images"
  []
  (when-not @loading?
    (swap! loading conj :loading)
    (h/with-timeout 500
      (swap! loading pop)
      (swap! images into [(new-image (swap! random-index inc))
                          (new-image (swap! random-index inc))
                          (new-image (swap! random-index inc))
                          (new-image (swap! random-index inc))
                          (new-image (swap! random-index inc))
                          (new-image (swap! random-index inc))
                          (new-image (swap! random-index inc))
                          (new-image (swap! random-index inc))
                          (new-image (swap! random-index inc))
                          (new-image (swap! random-index inc))]))))

(h/defelem infinite-scroll []
  (h/div :id "container"
    (h/h2 "Infinite Scroll ")
    (h/p "Scroll down to see more images...")
    (h/div :id "wrapper"
      (h/div :id "loading" :style "display:none" :toggle loading? "LOADING IMAGES...")
      (h/div :id "scroll" :scroll-end fetch-images!
        (h/loop-tpl :bindings [image images]
          (h/div (h/img :src image)))))

    (h/p (h/a :href "https://github.com/hoplon/demos/tree/master/infinite-scroll" "Source Code"))))

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (infinite-scroll)))

(defn start []
  (mount-components)
  (fetch-images!)
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start))
