(ns chart (:require [clojure.string :as str] [tailrecursion.hoplon.svg :as svg] [tailrecursion.javelin :refer [alts! cell-map propagate! next-rank deref* lift cell input? cell-doseq* bf-seq destroy-cell! last-rank set-cell! set-formula! cell?]] [tailrecursion.hoplon :refer [script do! track article noscript command h4 h3 mark basefont h5 span input h2 th label h6 pre nav vector?* address sup h1 table font option datalist u safe-nth on! footer select q samp source summary li p td noframes node? iframe rel tr s *initfns* add-attributes! colgroup relx html dfn optgroup tbody text-val! ul hgroup sub strong data progress loop-tpl* acronym append-child replace-children! img details fieldset html-head em html-time rt when-dom video keygen div val-id dt ol link init form is-ie8 check-val! menu timeout del a parse-args area legend hr dir header param meter tfoot blockquote eventsource b dl figcaption caption route-cell style rel-event abbr ruby applet html-meta bdi embed rp figure on-append! canvas section object strike title button output audio initialized? add-children! dd bdo cite code kbd big seq?* frame rely col tt i ins thead unsplice isindex frameset center spliced base $text by-id $comment br textarea wbr html-map small add-initfn! html-body aside html-var]]) (:require-macros [tailrecursion.javelin :refer [cell-doseq cell= defc defc= mx with-let prop-cell mx2 cell-let set-cell!= macroexpand-all]] [tailrecursion.hoplon :refer [with-init! body text defelem loop-tpl head with-timeout with-interval def-values flatten-expr]]))

(defrecord Chart [width height min-x max-x min-y max-y])

(defn config [& {:keys [width height min-x max-x min-y max-y]}] (Chart. width height min-x max-x min-y max-y))

(defn rel-coord [{:keys [width height min-x max-x min-y max-y]} x y] (let [w (- max-x min-x) h (- max-y min-y) dw (- x min-x) dh (- y min-y)] [(* width (/ dw w)) (* height (- 1 (/ dh h)))]))

(defelem container [{:keys [chart], :as attr} kids] (cell-let [{:keys [width height]} chart] (svg/svg (assoc (dissoc attr :chart) :width width :height height) kids)))

(defelem point-circle [{:keys [chart x y], :as attr} _] (let [coord (cell= (rel-coord chart x y))] ((svg/circle :cx (cell= (first coord)) :cy (cell= (second coord))) (dissoc attr :chart :x :y) (svg/title (text "[~{x}, ~{y}]")))))

(defelem point-rect [{:keys [chart x y width height], :as attr} _] (let [coord (cell= (rel-coord chart x y))] ((svg/rect :x (cell= (- (first coord) (/ width 2))) :y (cell= (- (second coord) (/ height 2)))) (dissoc attr :chart :x :y) (svg/title (text "[~{x}, ~{y}]")))))

(defelem points-rect [{:keys [chart data width height], :as attr} _] (svg/g (loop-tpl :bindings [[x y] data] ((point-rect :chart chart :x x :y y :width width :height height) (dissoc attr :chart :data :width :height)))))

(defelem points-circle [{:keys [chart data], :as attr} _] (svg/g (loop-tpl :bindings [[x y] data] ((point-circle :chart chart :x x :y y) (dissoc attr :chart :data)))))

(defelem polygon [{:keys [chart data], :as attr} _] (let [start (cell= (str "0," (:height chart))) end (cell= (str (:width chart) "," (:height chart))) rels (cell= (for [[x y] data] (let [[x' y'] (rel-coord chart x y)] (str x' "," y')))) points (cell= (str start " " (str/join " " rels) " " end))] ((svg/polygon :points points) (dissoc attr :chart :data))))

(defelem polyline [{:keys [chart data], :as attr} _] (let [rels (cell= (for [[x y] data] (let [[x' y'] (rel-coord chart x y)] (str x' "," y')))) points (cell= (str/join " " rels))] ((svg/polyline :points points) (dissoc attr :chart :data))))
