(ns demo.contacts
  (:require
    [clojure.string :as str]
    [hoplon.core :as h]
    [hoplon.goog]
    [javelin.core :refer [cell cell= dosync]]))

(def my-contacts
  (cell #{{:first "Ben" :last "Bitdiddle" :email "benb@mit.edu"}
          {:first "Alyssa" :middle-initial "P" :last "Hacker" :email "aphacker@mit.edu"}
          {:first "Eva" :middle "Lu" :last "Ator" :email "eval@mit.edu"}
          {:first "Louis" :last "Reasoner" :email "prolog@mit.edu"}
          {:first "Cy" :middle-initial "D" :last "Effect" :email "bugs@mit.edu"}
          {:first "Lem" :middle-initial "E" :last "Tweakit" :email "morebugs@mit.edu"}}))

(defn middle-name [{:keys [middle middle-initial]}]
  (cond
    middle (str " " middle)
    middle-initial (str " " middle-initial ".")))

(defn display-name [{:keys [first last] :as contact}]
  (str last ", " first (middle-name contact)))

(h/defelem contact-list [{:keys [from sorted-by] :or {sorted-by identity}}]
  (h/loop-tpl :bindings [contact (cell= (sort-by sorted-by from))]
    (h/li (h/span (cell= (display-name contact)))
        (h/button :click #(swap! from disj @contact) "Delete"))))

(defn parse-contact [contact-str]
  (let [[first middle last :as parts] (str/split contact-str #"\s+")
        [first last middle] (if (nil? last) [first middle] [first last middle])
        middle (when middle (str/replace middle "." ""))
        c (if middle (count middle) 0)]
    (when (>= (count parts) 2)
      (cond-> {:first first :last last}
        (== c 1) (assoc :middle-initial middle)
        (>= c 2) (assoc :middle middle)))))

(h/defelem contact-input [{:keys [to]} [label]]
  (let [new-contact (cell "")
        parsed      (cell= (parse-contact new-contact))]
    (h/div
      (h/input
        :value new-contact
        :input #(reset! new-contact @%))
      (h/button
        :click #(when-let [c @parsed]
                  (dosync (swap! to conj c)
                          (reset! new-contact "")))
        :disabled (cell= (not parsed))
        label)
      (h/pre (cell= (pr-str parsed))))))

(h/defelem contact []
  (h/div
    (h/h2 "Contact list")
    (h/ul (contact-list :from my-contacts :sorted-by :last))
    (contact-input :to my-contacts "Add contact")
    (h/hr)
    (h/p (h/em "Note: The Add contact button is disabled until you enter a valid contact.  A valid contact consists of two or three whitespace-delimited names."))
    (h/a :href "https://github.com/tailrecursion/hoplon-demos/tree/master/contacts" "Source code on Github")))

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (contact)))

(defn start []
  (mount-components)
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start))
