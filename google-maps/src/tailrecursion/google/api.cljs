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

(defn- dom2str [elem] (.-innerHTML (div elem)))
(defn- indexed [coll] (map-indexed vector coll))

(defn delay-until [ready? f & args]
  #(cell= (when ready? (~(memoize (fn [] (or (apply f args) ::ok)))))))

(defelem google-map [{:keys [center opts pins pin-click map-click ready fit-pins] :as attr} [elem]]
  (with-let [elem (or elem (div (dissoc attr :center :opts :pins :pin-click :map-click :ready :fit-pins)))]
    (ensure-maps
      (delay-until (or ready (cell true))
        #(let [maps         (.. js/google -maps)
               Map          (.-Map maps)
               Event        (.-event maps)
               LatLng       (.-LatLng maps)
               Marker       (.-Marker maps)
               InfoWindow   (.-InfoWindow maps)
               LatLngBounds (.-LatLngBounds maps)
               opts         (cell= (let [{:keys [lat lon]} center]
                                     (clj->js (merge {} opts {:center (LatLng. lat lon)}))))
               map          (Map. elem @opts)
               selected-pin (cell nil)
               bounds       (cell= (with-let [b (LatLngBounds.)]
                                     (doseq [{:keys [lat lon]} pins]
                                       (.extend b (LatLng. lat lon)))))
               do-bounds    (fn [] (.fitBounds map @bounds))]
           (.addListener Event map "click"
             (fn []
               (reset! selected-pin nil)
               (when map-click (map-click map))))
           (cell= (.setOptions map opts))
           (cell-doseq [[i {:keys [lat lon info opts] :as pin}] (cell= (indexed pins))]
             (let [marker  (Marker. (clj->js {}))
                   iwindow (InfoWindow. (clj->js {}))]
               (.addListener Event marker "click"
                 (fn []
                   (reset! selected-pin (if (= @selected-pin @i) nil @i))
                   (when pin-click (pin-click map marker iwindow @pin))))
               (cell= (if-not (and info (= selected-pin i))
                        (.close iwindow)
                        (.open iwindow map marker)))
               (cell= (doto iwindow (.setContent (dom2str info)) .close))
               (cell= (let [map (when lat map)
                            pos (when lat (LatLng. lat lon))
                            opt (clj->js (merge {} opts {:map map :position pos}))]
                        (.close iwindow)
                        (.setOptions marker opt)
                        (when (and map fit-pins) (do-bounds)))))))))))
