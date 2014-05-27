(ns tailrecursion.google.api
  (:require
   [tailrecursion.hoplon :refer [div p h3]]
   [tailrecursion.javelin :refer [cell deref*]])
  (:require-macros
   [tailrecursion.hoplon :refer [with-init! with-timeout defelem]]
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

(defn- dom2str [elem]
  (.-innerHTML (div elem)))

(defelem google-map [{:keys [center opts pins pin-click map-click] :as attr} _]
  (with-let [elem (div (dissoc attr :center :opts :pins :pin-click :map-click))]
    (ensure-maps
      #(let [Map        (.. js/google -maps -Map)
             LatLng     (.. js/google -maps -LatLng)
             Marker     (.. js/google -maps -Marker)
             InfoWindow (.. js/google -maps -InfoWindow)
             Event      (.. js/google -maps -event)
             opts       (cell= (let [{:keys [lat lon]} center]
                                 (clj->js (merge {} opts {:center (LatLng. lat lon)}))))
             map        (Map. elem @opts)]
         (.addListener Event map "click"
           (fn [] (when map-click (map-click map))))
         (cell= (.setOptions map opts))
         (cell-doseq [{:keys [lat lon content] :as pin} pins]
           (let [marker (Marker. (clj->js {}))
                 info   (InfoWindow. (clj->js {}))]
             (.addListener Event marker "click"
               (fn []
                 (when (:content @pin) (.open info map marker))
                 (when pin-click (pin-click @pin))))
             (cell= (.setContent info (dom2str content)))
             (cell= (let [map (when lat map)
                          pos (when lat (LatLng. lat lon))
                          pin (dissoc pin :lat :lon :content)]
                      (.setOptions marker (clj->js (merge {} pin {:map map :position pos})))))))))))
