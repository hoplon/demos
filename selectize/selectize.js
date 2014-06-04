// Compiled by ClojureScript 0.0-2227
goog.provide('selectize');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
selectize.wrap_render = (function wrap_render(selectize_attrs){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(selectize_attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$38], null),(function (render){return cljs.core.reduce_kv((function (m,k,f){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.comp.cljs$core$IFn$_invoke$arity$3((function (p1__6559_SHARP_){return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(p1__6559_SHARP_) : tailrecursion.hoplon.div.call(null,p1__6559_SHARP_)).innerHTML;
}),f,cljs.core.js__GT_clj));
}),cljs.core.PersistentArrayMap.EMPTY,render);
}));
});
/**
* @param {...*} var_args
*/
selectize.selectize = (function() { 
var selectize__$1__delegate = function (args__8491__auto__){var vec__9539 = tailrecursion.hoplon.parse_args(args__8491__auto__);var map__9540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9539,0,null);var map__9540__$1 = ((cljs.core.seq_QMARK_(map__9540))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9540):map__9540);var attrs = map__9540__$1;var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9540__$1,cljs.core.constant$keyword$38);var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9540__$1,cljs.core.constant$keyword$25);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9540__$1,cljs.core.constant$keyword$39);var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9540__$1,cljs.core.constant$keyword$40);var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9539,1,null);var s = (tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$39,id,cljs.core.constant$keyword$25,("selectized "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)),options) : tailrecursion.hoplon.select.call(null,cljs.core.constant$keyword$39,id,cljs.core.constant$keyword$25,("selectized "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)),options));var new_attrs_9541 = selectize.wrap_render(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,(cljs.core.truth_(cell)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$41,((function (s,vec__9539,map__9540,map__9540__$1,attrs,render,class$,id,cell,options){
return (function (p1__6560_SHARP_){return cljs.core.reset_BANG_(cell,p1__6560_SHARP_);
});})(s,vec__9539,map__9540,map__9540__$1,attrs,render,class$,id,cell,options))
], null):null)], 0)));tailrecursion.hoplon.add_initfn_BANG_(((function (new_attrs_9541,s,vec__9539,map__9540,map__9540__$1,attrs,render,class$,id,cell,options){
return (function (){return jQuery(s).selectize(cljs.core.clj__GT_js(new_attrs_9541));
});})(new_attrs_9541,s,vec__9539,map__9540,map__9540__$1,attrs,render,class$,id,cell,options))
);
return s;
};
var selectize__$1 = function (var_args){
var args__8491__auto__ = null;if (arguments.length > 0) {
  args__8491__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return selectize__$1__delegate.call(this,args__8491__auto__);};
selectize__$1.cljs$lang$maxFixedArity = 0;
selectize__$1.cljs$lang$applyTo = (function (arglist__9542){
var args__8491__auto__ = cljs.core.seq(arglist__9542);
return selectize__$1__delegate(args__8491__auto__);
});
selectize__$1.cljs$core$IFn$_invoke$arity$variadic = selectize__$1__delegate;
return selectize__$1;
})()
;
