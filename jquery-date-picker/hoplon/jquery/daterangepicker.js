// Compiled by ClojureScript 0.0-2227
goog.provide('hoplon.jquery.daterangepicker');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
hoplon.jquery.daterangepicker.create = (function create(elem,opts){return elem.dateRangePicker(cljs.core.clj__GT_js((function (){var or__7636__auto__ = opts;if(cljs.core.truth_(or__7636__auto__))
{return or__7636__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
});
hoplon.jquery.daterangepicker.destroy = (function destroy(elem){var e = elem;if(cljs.core.truth_(e.destroy))
{e.destroy();
} else
{}
return e;
});
hoplon.jquery.daterangepicker.on_change_BANG_ = (function on_change_BANG_(state){return (function (_,dates){return cljs.core.reset_BANG_(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dates["date1"]),(dates["date2"])], null));
});
});
/**
* @param {...*} var_args
*/
hoplon.jquery.daterangepicker.daterange = (function() { 
var daterange__delegate = function (args__8675__auto__){var vec__9729 = tailrecursion.hoplon.parse_args(args__8675__auto__);var map__9730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9729,0,null);var map__9730__$1 = ((cljs.core.seq_QMARK_(map__9730))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9730):map__9730);var attr = map__9730__$1;var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9730__$1,cljs.core.constant$keyword$38);var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9730__$1,cljs.core.constant$keyword$39);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9729,1,null);var elem = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attr,cljs.core.constant$keyword$38)) : tailrecursion.hoplon.input.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attr,cljs.core.constant$keyword$38))).call(null,cljs.core.constant$keyword$40,hoplon.jquery.daterangepicker.on_change_BANG_(state));tailrecursion.hoplon.add_initfn_BANG_(((function (elem,vec__9729,map__9730,map__9730__$1,attr,opts,state,_){
return (function (){return tailrecursion.javelin.lift(((function (elem,vec__9729,map__9730,map__9730__$1,attr,opts,state,_){
return (function (G__9736,G__9735,G__9734,G__9733,G__9732){var G__9731 = (G__9732.cljs$core$IFn$_invoke$arity$1 ? G__9732.cljs$core$IFn$_invoke$arity$1(G__9733) : G__9732.call(null,G__9733));(G__9734.cljs$core$IFn$_invoke$arity$1 ? G__9734.cljs$core$IFn$_invoke$arity$1(G__9731) : G__9734.call(null,G__9731));
(G__9735.cljs$core$IFn$_invoke$arity$2 ? G__9735.cljs$core$IFn$_invoke$arity$2(G__9731,G__9736) : G__9735.call(null,G__9731,G__9736));
return G__9731;
});})(elem,vec__9729,map__9730,map__9730__$1,attr,opts,state,_))
).call(null,opts,hoplon.jquery.daterangepicker.create,hoplon.jquery.daterangepicker.destroy,elem,jQuery);
});})(elem,vec__9729,map__9730,map__9730__$1,attr,opts,state,_))
);
return elem;
};
var daterange = function (var_args){
var args__8675__auto__ = null;if (arguments.length > 0) {
  args__8675__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return daterange__delegate.call(this,args__8675__auto__);};
daterange.cljs$lang$maxFixedArity = 0;
daterange.cljs$lang$applyTo = (function (arglist__9737){
var args__8675__auto__ = cljs.core.seq(arglist__9737);
return daterange__delegate(args__8675__auto__);
});
daterange.cljs$core$IFn$_invoke$arity$variadic = daterange__delegate;
return daterange;
})()
;
