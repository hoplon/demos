(ns demo.chart
  (:require
    [hoplon.core :as h]
    [javelin.core :refer [cell cell= dosync cell-let]]
    [clojure.string :as str]
    [hoplon.svg :as svg]))

(defrecord Chart [width height min-x max-x min-y max-y])

(defn config [& {:keys [width height min-x max-x min-y max-y]}]
  (Chart. width height min-x max-x min-y max-y))

(defn rel-coord [{:keys [width height min-x max-x min-y max-y]} x y]
  (let [w  (- max-x min-x)
        h  (- max-y min-y)
        dw (- x min-x)
        dh (- y min-y)]
    [(* width (/ dw w)) (* height (- 1 (/ dh h)))]))

(h/defelem container [{:keys [chart] :as attr} kids]
  (cell-let [{:keys [width height]} chart]
    (svg/svg (assoc (dissoc attr :chart) :width width :height height) kids)))

(h/defelem point-circle [{:keys [chart x y] :as attr} _]
  (let [coord (cell= (rel-coord chart x y))]
    ((svg/circle
       :cx  (cell= (first coord))
       :cy  (cell= (second coord)))
     (dissoc attr :chart :x :y)
     (svg/title (h/text "[~{x}, ~{y}]")))))

(h/defelem point-rect [{:keys [chart x y width height] :as attr} _]
  (let [coord (cell= (rel-coord chart x y))]
    ((svg/rect
       :x (cell= (- (first coord) (/ width 2)))
       :y (cell= (- (second coord) (/ height 2))))
     (dissoc attr :chart :x :y)
     (svg/title (h/text "[~{x}, ~{y}]")))))

(h/defelem points-rect [{:keys [chart data width height] :as attr} _]
  (svg/g
    (h/loop-tpl :bindings [[x y] data]
      ((point-rect :chart chart :x x :y y :width width :height height)
       (dissoc attr :chart :data :width :height)))))

(h/defelem points-circle [{:keys [chart data] :as attr} _]
  (svg/g
    (h/loop-tpl :bindings [[x y] data]
      ((point-circle :chart chart :x x :y y) (dissoc attr :chart :data)))))

(h/defelem polygon [{:keys [chart data] :as attr} _]
  (let [start  (cell= (str "0," (:height chart)))
        end    (cell= (str (:width chart) "," (:height chart)))
        rels   (cell= (for [[x y] data]
                        (let [[x' y'] (rel-coord chart x y)]
                          (str x' "," y'))))
        points (cell= (str start " " (str/join " " rels) " " end))]
    ((svg/polygon :points points) (dissoc attr :chart :data))))

(h/defelem polyline [{:keys [chart data] :as attr} _]
  (let [rels   (cell= (for [[x y] data]
                        (let [[x' y'] (rel-coord chart x y)]
                          (str x' "," y'))))
        points (cell= (str/join " " rels))]
    ((svg/polyline :points points) (dissoc attr :chart :data))))
