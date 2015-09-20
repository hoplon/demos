(ns territory-builder.api
  (:require
    [castra.core :refer [defrpc]]
    [geocoder.google :as google]
    [territory-builder.rules :refer [allow deny]]))

(def polygons (atom []))
;(add-watch polygons :state (fn [k r o n] (println n)))
(defn get-polygon [id]
  (first (filter #(= (:id %) id) @polygons)))
(defn get-all-polygons []
  @polygons)
(defn new-polygon [path]
  (swap! polygons conj {:path path :id (inc (count @polygons)) :status :incomplete}))
(defn update-polygon [id polygon]
  (let [poly    (get-polygon id)
        ndx     (.indexOf @polygons poly)]
    (swap! polygons assoc-in [ndx] polygon)))
(defn make-polygon-incomplete [id]
  (reset! polygons (let [polys   (mapv #(assoc % :status :complete) @polygons)
                        poly    (first (filter #(= (:id %) id) polys))
                        ndx     (.indexOf polys poly)
                        npoly   (assoc poly :status :incomplete)
                        npolys  (assoc-in polys [ndx] npoly)]
                    npolys)))
(defn delete-all-polygons []
  (reset! polygons []))

(defrpc get-state []
  {:rpc [(allow)]}
  {:polygons @polygons})

(defrpc add-point [point polygon-id]
  {:rpc [(allow)]
   :rpc/query [(get-state)]}
  (let [poly  (get-polygon polygon-id)
        path  (or (:path poly) [])
        npath (conj path point)
        npoly (assoc poly :path npath)
        id    (:id poly)]
    (when id
      (update-polygon id npoly))
    (when (not id)
      (new-polygon npath))))

(defrpc finalize-polygon [polygon-id]
  {:rpc [(allow)]
   :rpc/query [(get-state)]}
  (let [poly    (first (filter #(= (:id %) polygon-id) @polygons))
        npoly   (assoc poly :status :complete)]
    (update-polygon polygon-id npoly)))

(defrpc clear-polygons []
  {:rpc         [(allow)]
   :rpc/query   [(get-state)]}
  (delete-all-polygons))

(defrpc edit-polygon [polygon-id]
  {:rpc         [(allow)]
   :rpc/query   [(get-state)]}
  (make-polygon-incomplete polygon-id))

(defrpc pop-polygon-path [polygon-id]
  {:rpc         [(allow)]
   :rpc/query   [(get-state)] }
  (let [poly    (get-polygon polygon-id)
        path    (:path poly)
        npath   (pop path)
        npoly   (assoc poly :path npath)]
    (update-polygon polygon-id npoly)))

(defrpc address->latlng [address]
  {:rpc         [(allow)]}
  (let    [res   (-> (first (google/geocode-address address)) :geometry :location)]
    (if res {:lat (:lat res) :lon (:lng res)})))
