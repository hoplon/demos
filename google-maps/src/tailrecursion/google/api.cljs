(ns tailrecursion.google.api
  (:require
   [tailrecursion.hoplon :refer [div]]
   [tailrecursion.javelin :refer [cell]])
  (:require-macros
   [tailrecursion.hoplon :refer [with-init! defelem]]
   [tailrecursion.javelin :refer [defc defc= cell= cell-doseq with-let]]))

(defn queued [load-fn]
  (let [callbacks (atom [])
        status    (atom nil)]
    (fn [callback]
      (if (= :complete @status)
        (callback)
        (do (swap! callbacks conj callback)
            (when-not @status
              (reset! status :loading)
              (load-fn #(do (reset! status :complete)
                            (doseq [f @callbacks] (f))))))))))

(defc  api-key      nil)
(defc  maps-version "3")
(defc  maps-options {:other_params "sensor=false"})
(defc= api-url      (str "http://www.google.com/jsapi?key=" api-key))

(def ensure-api
  (queued
    (fn [callback]
      (with-init! (.getScript js/jQuery @api-url callback)))))

(def ensure-maps
  (queued
    (fn [callback]
      (ensure-api
        #(.load js/google "maps" @maps-version
           (clj->js (assoc @maps-options :callback callback)))))))

(defelem google-map [{:keys [lat lon opts pins] :as attr} _]
  (with-let [elem (div (dissoc attr :lat :lon :opts :pins))]
    (ensure-maps
      #(let [Map    (.. js/google -maps -Map)
             LatLng (.. js/google -maps -LatLng)
             Marker (.. js/google -maps -Marker)
             map    (Map. elem (clj->js (merge {} opts {:center (LatLng. lat lon)})))]
         (cell-doseq [[lat lon] pins]
           (let [p (Marker. (clj->js {}))]
             (cell= (if-not lat
                      (.setMap p nil)
                      (doto p (.setMap map) (.setPosition (LatLng. lat lon)))))))))))
