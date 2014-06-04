(ns hoplon.twitter.bootstrap (:require [tailrecursion.javelin :refer [alts! cell-map propagate! next-rank deref* lift cell input? cell-doseq* bf-seq destroy-cell! last-rank set-cell! set-formula! cell?]] [tailrecursion.hoplon :refer [script do! track article noscript command h4 h3 mark basefont h5 span input h2 th label h6 pre nav vector?* address sup h1 table font option datalist u safe-nth on! footer select q samp source summary li p td noframes node? iframe rel tr s *initfns* add-attributes! colgroup relx html dfn optgroup tbody text-val! ul hgroup sub strong data progress loop-tpl* acronym append-child replace-children! img details fieldset html-head em html-time rt when-dom video keygen div val-id dt ol link init form is-ie8 check-val! menu timeout del a parse-args area legend hr dir header param meter tfoot blockquote eventsource b dl figcaption caption route-cell style rel-event abbr ruby applet html-meta bdi embed rp figure on-append! canvas section object strike title button output audio initialized? add-children! dd bdo cite code kbd big seq?* frame rely col tt i ins thead unsplice isindex frameset center spliced base $text by-id $comment br textarea wbr html-map small add-initfn! html-body aside html-var]]) (:require-macros [tailrecursion.javelin :refer [cell-doseq cell= defc defc= mx with-let prop-cell mx2 cell-let set-cell!= macroexpand-all]] [tailrecursion.hoplon :refer [with-init! body text defelem loop-tpl head with-timeout with-interval def-values flatten-expr]]))

(js/jQuery (fn* [] (.append (js/jQuery "head") (link :rel "stylesheet" :type "text/css" :href "//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"))))

(def cols-prefixes (for [i [:xs :sm :md :lg] j (range 1 13)] [(str "col-" (name i)) j]))

(defn- mkreset [sep] (->> cols-prefixes (map (fn [[k v]] [(keyword (str k sep v)) false])) (into {})))

(def cols-seps {:col "-", :push "-push-", :pull "-pull-", :offset "-offset-"})

(def cols-reset (->> cols-seps (map (fn* [p1__5364#] (vector (key p1__5364#) (mkreset (val p1__5364#))))) (into {})))

(defn- mkcol-key [key m] (reduce-kv (fn* [p1__5365# p2__5366# p3__5367#] (assoc p1__5365# (keyword (str "col-" (name p2__5366#) (cols-seps key) p3__5367#)) true)) {} m))

(defn- do-classes [elem key val] (do! elem :class (merge (cols-reset key) (mkcol-key key val))))

(defmethod do! :col [elem key val] (do-classes elem key val))

(defmethod do! :offset [elem key val] (do-classes elem key val))

(defmethod do! :push [elem key val] (do-classes elem key val))

(defmethod do! :pull [elem key val] (do-classes elem key val))

(defmethod do! :success [elem _ val] (do! elem :class {:has-success (boolean val)}))

(defmethod do! :warning [elem _ val] (do! elem :class {:has-warning (boolean val)}))

(defmethod do! :error [elem _ val] (do! elem :class {:has-error (boolean val)}))

(defelem container [attr kids] ((div :class "container") attr kids))

(defelem form-horizontal [attr kids] ((form :role "form" :class "form-horizontal") attr kids))

(defelem control-label [attr kids] ((label :class "control-label") attr kids))

(defelem form-group [attr kids] ((div :class "form-group") attr kids))

(defelem checkbox [attr kids] ((div :class "checkbox") attr kids))

(defelem active [{:keys [state]} [kid]] (kid :class (cell= {:active state})))

(defelem deck [{:keys [state]} kids] (->> kids (map-indexed (fn* [p1__5368# p2__5369#] (active :state (cell= (= p1__5368# state)) p2__5369#)))))

(defelem selector [{:keys [state event]} kids] (->> kids (deck :state state) (map-indexed (fn* [p1__5371# p2__5370#] (p2__5370# event (fn [_] (reset! state p1__5371#)))))))

(defelem tab-tab [attr [txt]] (a :href "javascript:void(0)" txt))

(defelem content [attr kids] (div kids))

(defelem tab [attr kids] [(tab-tab (:name attr)) (content kids)])

(def trans (partial apply map vector))

(defelem tabs [{:keys [state]} kids] (let [[trigs ctnrs] (trans (partition 2 kids)) state (or state (cell 0)) trigs (selector :state state :event :click (map li trigs)) ctnrs (deck :state state (map (fn* [p1__5372#] (p1__5372# :class "tab-pane")) ctnrs))] [(ul :class "nav nav-tabs" trigs) (div :class "tab-content" ctnrs)]))
