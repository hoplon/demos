(ns demo.validated-form
  (:require-macros [vform.core :refer [defv]])
  (:require
    [hoplon.core :as h]
    [hoplon.jquery]
    [javelin.core :refer [cell cell= defc defc= dosync]]))

;; input cells

(defc form-name nil)
(defc form-email nil)

;; helpers / validators

(defn validate-presence [v] (seq v))

(defn validate-regexp [r]
  (fn [v] (re-matches r (or v ""))))

;; formula cells

(defv form-name-valid? form-name validate-presence)
(defv form-email-valid? form-email (validate-regexp #"(?i)\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b"))

(defc= is-form-valid? (and (:valid? form-name-valid?) (:valid? form-email-valid?)))

(defc= form-data {:name form-name
                  :email form-email})

;; operations

(defn submit-form [_] (js/alert (str "Send: " (pr-str @form-data))))

;; custom elements

(h/defelem cell-input [{:keys [cell] :as attrs}]
  (let [target-value #(h/do! (-> % .-currentTarget) :value)]
    (h/input (-> attrs
               (dissoc :cell)
               (assoc :type (:type attrs "text")
                 :value cell
                 :input #(reset! cell (target-value %)))))))

(h/defelem form-group [{:keys [valid?] :as attrs} body]
  (let [dirty? (fn [v] (-> v nil? not))]
    ((h/div (dissoc attrs :valid?) body)
     :class (cell= {:form-group true
                    :has-error (and (dirty? (:value valid?)) (not (:valid? valid?)))}))))

(h/defelem input-control [attrs]
  ((cell-input attrs) :class {:form-control true}))

;; interface
(h/defelem validated-form []
  (h/div :class "site-wrapper"
    (h/div :class "site-wrapper-inner"
      (h/div :class "cover-container"
        (h/div :class "inner cover"
          (h/form :submit submit-form
            (form-group :valid? form-name-valid?
              (h/label "Name")
              (input-control :cell form-name))
            (form-group :valid? form-email-valid?
              (h/label "Email")
              (input-control :cell form-email))
            (h/div :class "text-right"
              (h/button :class "btn btn-primary"
                :type "submit"
                :disabled (cell= (not is-form-valid?)) "Submit"))))))))

(defn mount-components []
  (.replaceChildren (.getElementById js/document "app")
    (validated-form)))

(defn start []
  (mount-components)
  (js/console.log "Starting..."))

(defn stop []
  (js/console.log "Stopping..."))

(defn init []
  (js/console.log "Initializing...")
  (start))
