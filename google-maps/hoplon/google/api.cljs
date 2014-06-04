(ns hoplon.google.api (:require [tailrecursion.javelin :refer [alts! cell-map propagate! next-rank deref* lift cell input? cell-doseq* bf-seq destroy-cell! last-rank set-cell! set-formula! cell?]] [tailrecursion.hoplon :refer [script do! track article noscript command h4 h3 mark basefont h5 span input h2 th label h6 pre nav vector?* address sup h1 table font option datalist u safe-nth on! footer select q samp source summary li p td noframes node? iframe rel tr s *initfns* add-attributes! colgroup relx html dfn optgroup tbody text-val! ul hgroup sub strong data progress loop-tpl* acronym append-child replace-children! img details fieldset html-head em html-time rt when-dom video keygen div val-id dt ol link init form is-ie8 check-val! menu timeout del a parse-args area legend hr dir header param meter tfoot blockquote eventsource b dl figcaption caption route-cell style rel-event abbr ruby applet html-meta bdi embed rp figure on-append! canvas section object strike title button output audio initialized? add-children! dd bdo cite code kbd big seq?* frame rely col tt i ins thead unsplice isindex frameset center spliced base $text by-id $comment br textarea wbr html-map small add-initfn! html-body aside html-var]]) (:require-macros [tailrecursion.javelin :refer [cell-doseq cell= defc defc= mx with-let prop-cell mx2 cell-let set-cell!= macroexpand-all]] [tailrecursion.hoplon :refer [with-init! body text defelem loop-tpl head with-timeout with-interval def-values flatten-expr]]))

(defn queued [load-fn] (let [callbacks (atom []) status (atom nil)] (fn [callback] (if (= :complete (clojure.core/deref status)) (callback) (do (swap! callbacks conj callback) (when-not (clojure.core/deref status) (reset! status :loading) (load-fn (fn* [] (do (reset! status :complete) (doseq [f (clojure.core/deref callbacks)] (f)))))))))))

(defc api-key nil)

(defc maps-version "3")

(defc maps-options {:other_params "sensor=false"})

(defc= api-url (str "http://www.google.com/jsapi?key=" api-key))

(def ensure-api (queued (fn [callback] (with-init! (.getScript js/jQuery (clojure.core/deref api-url) callback)))))

(def ensure-maps (queued (fn [callback] (ensure-api (fn* [] (.load js/google "maps" (clojure.core/deref maps-version) (clj->js (assoc (clojure.core/deref maps-options) :callback callback))))))))

(defn- dom2str [elem] (.-innerHTML (div elem)))

(defn- indexed [coll] (map-indexed vector coll))

(defn delay-until [ready? f & args] (fn* [] (cell= (when ready? ((clojure.core/unquote (memoize (fn [] (or (apply f args) :tailrecursion.boot.user/ok)))))))))

(defn visible? [elem] (with-let [c (cell nil)] (with-interval 100 (reset! c (.is (js/jQuery elem) ":visible")))))

(defelem google-map [{:keys [center opts pins pin-click map-click fit-pins], :as attr} [elem]] (with-let [elem (or elem (div (dissoc attr :center :opts :pins :pin-click :map-click :ready :fit-pins)))] (let [visible? (visible? elem)] (ensure-maps (delay-until visible? (fn [] (let [maps (.. js/google -maps) Map (.-Map maps) Event (.-event maps) LatLng (.-LatLng maps) Marker (.-Marker maps) InfoWindow (.-InfoWindow maps) LatLngBounds (.-LatLngBounds maps) lat-lng (fn* [p1__6564# p2__6565#] (LatLng. (js/parseFloat p1__6564#) (js/parseFloat p2__6565#))) opts (cell= (let [{:keys [lat lon]} center] (clj->js (merge {} opts {:center (lat-lng lat lon)})))) map (Map. elem (clojure.core/deref opts)) bounds (cell= (with-let [b (LatLngBounds.)] (doseq [{:keys [lat lon]} pins] (.extend b (lat-lng lat lon)))))] (.addListener Event map "click" (fn* [] (when map-click (map-click map)))) (cell= (.setOptions map opts)) (cell= (when (and fit-pins (seq pins)) (((clojure.core/unquote (partial delay-until visible?)) (fn* [] (.fitBounds map bounds)))))) (cell-doseq [[i {:keys [lat lon info opts], :as pin}] (cell= (indexed pins))] (let [marker (Marker. (clj->js {})) iwindow (InfoWindow. (clj->js {}))] (.addListener Event marker "click" (fn [] (when (clojure.core/deref info) (.open iwindow map marker)) (when pin-click (pin-click map marker iwindow (clojure.core/deref pin))))) (cell= (doto iwindow (.setContent (dom2str info)) .close)) (cell= (let [map (when lat map) pos (when lat (lat-lng lat lon)) opt (clj->js (merge {} opts {:map map, :position pos}))] (.close iwindow) (.setOptions marker opt))))))))))))
