// Compiled by ClojureScript 0.0-2227
goog.provide('hoplon.google.api');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
hoplon.google.api.queued = (function queued(load_fn){var callbacks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);var status = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);return ((function (callbacks,status){
return (function (callback){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$61,cljs.core.deref(status)))
{return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(callbacks,cljs.core.conj,callback);
if(cljs.core.truth_(cljs.core.deref(status)))
{return null;
} else
{cljs.core.reset_BANG_(status,cljs.core.constant$keyword$62);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(((function (callbacks,status){
return (function (){cljs.core.reset_BANG_(status,cljs.core.constant$keyword$61);
var seq__9800 = cljs.core.seq(cljs.core.deref(callbacks));var chunk__9801 = null;var count__9802 = 0;var i__9803 = 0;while(true){
if((i__9803 < count__9802))
{var f = chunk__9801.cljs$core$IIndexed$_nth$arity$2(null,i__9803);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__9804 = seq__9800;
var G__9805 = chunk__9801;
var G__9806 = count__9802;
var G__9807 = (i__9803 + 1);
seq__9800 = G__9804;
chunk__9801 = G__9805;
count__9802 = G__9806;
i__9803 = G__9807;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9800);if(temp__4092__auto__)
{var seq__9800__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9800__$1))
{var c__8397__auto__ = cljs.core.chunk_first(seq__9800__$1);{
var G__9808 = cljs.core.chunk_rest(seq__9800__$1);
var G__9809 = c__8397__auto__;
var G__9810 = cljs.core.count(c__8397__auto__);
var G__9811 = 0;
seq__9800 = G__9808;
chunk__9801 = G__9809;
count__9802 = G__9810;
i__9803 = G__9811;
continue;
}
} else
{var f = cljs.core.first(seq__9800__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__9812 = cljs.core.next(seq__9800__$1);
var G__9813 = null;
var G__9814 = 0;
var G__9815 = 0;
seq__9800 = G__9812;
chunk__9801 = G__9813;
count__9802 = G__9814;
i__9803 = G__9815;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(callbacks,status))
) : load_fn.call(null,((function (callbacks,status){
return (function (){cljs.core.reset_BANG_(status,cljs.core.constant$keyword$61);
var seq__9800 = cljs.core.seq(cljs.core.deref(callbacks));var chunk__9801 = null;var count__9802 = 0;var i__9803 = 0;while(true){
if((i__9803 < count__9802))
{var f = chunk__9801.cljs$core$IIndexed$_nth$arity$2(null,i__9803);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__9816 = seq__9800;
var G__9817 = chunk__9801;
var G__9818 = count__9802;
var G__9819 = (i__9803 + 1);
seq__9800 = G__9816;
chunk__9801 = G__9817;
count__9802 = G__9818;
i__9803 = G__9819;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9800);if(temp__4092__auto__)
{var seq__9800__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9800__$1))
{var c__8397__auto__ = cljs.core.chunk_first(seq__9800__$1);{
var G__9820 = cljs.core.chunk_rest(seq__9800__$1);
var G__9821 = c__8397__auto__;
var G__9822 = cljs.core.count(c__8397__auto__);
var G__9823 = 0;
seq__9800 = G__9820;
chunk__9801 = G__9821;
count__9802 = G__9822;
i__9803 = G__9823;
continue;
}
} else
{var f = cljs.core.first(seq__9800__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__9824 = cljs.core.next(seq__9800__$1);
var G__9825 = null;
var G__9826 = 0;
var G__9827 = 0;
seq__9800 = G__9824;
chunk__9801 = G__9825;
count__9802 = G__9826;
i__9803 = G__9827;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(callbacks,status))
));
}
}
});
;})(callbacks,status))
});
hoplon.google.api.api_key = tailrecursion.javelin.cell(null);
hoplon.google.api.maps_version = tailrecursion.javelin.cell("3");
hoplon.google.api.maps_options = tailrecursion.javelin.cell(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$63,"sensor=false"], null));
hoplon.google.api.api_url = tailrecursion.javelin.lift((function (G__9828){return ("http://www.google.com/jsapi?key="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9828));
})).call(null,hoplon.google.api.api_key);
hoplon.google.api.ensure_api = hoplon.google.api.queued((function (callback){return tailrecursion.hoplon.add_initfn_BANG_((function (){return jQuery.getScript(cljs.core.deref(hoplon.google.api.api_url),callback);
}));
}));
hoplon.google.api.ensure_maps = hoplon.google.api.queued((function (callback){return (hoplon.google.api.ensure_api.cljs$core$IFn$_invoke$arity$1 ? hoplon.google.api.ensure_api.cljs$core$IFn$_invoke$arity$1((function (){return google.load("maps",cljs.core.deref(hoplon.google.api.maps_version),cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(hoplon.google.api.maps_options),cljs.core.constant$keyword$64,callback)));
})) : hoplon.google.api.ensure_api.call(null,(function (){return google.load("maps",cljs.core.deref(hoplon.google.api.maps_version),cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(hoplon.google.api.maps_options),cljs.core.constant$keyword$64,callback)));
})));
}));
hoplon.google.api.dom2str = (function dom2str(elem){return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(elem) : tailrecursion.hoplon.div.call(null,elem)).innerHTML;
});
hoplon.google.api.indexed = (function indexed(coll){return cljs.core.map_indexed(cljs.core.vector,coll);
});
/**
* @param {...*} var_args
*/
hoplon.google.api.delay_until = (function() { 
var delay_until__delegate = function (ready_QMARK_,f,args){return (function (){return tailrecursion.javelin.lift((function (G__9832,G__9831){if(cljs.core.truth_(G__9831))
{return (G__9832.cljs$core$IFn$_invoke$arity$0 ? G__9832.cljs$core$IFn$_invoke$arity$0() : G__9832.call(null));
} else
{return null;
}
})).call(null,cljs.core.memoize((function (){var or__7641__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);if(cljs.core.truth_(or__7641__auto__))
{return or__7641__auto__;
} else
{return cljs.core.constant$keyword$65;
}
})),ready_QMARK_);
});
};
var delay_until = function (ready_QMARK_,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return delay_until__delegate.call(this,ready_QMARK_,f,args);};
delay_until.cljs$lang$maxFixedArity = 2;
delay_until.cljs$lang$applyTo = (function (arglist__9833){
var ready_QMARK_ = cljs.core.first(arglist__9833);
arglist__9833 = cljs.core.next(arglist__9833);
var f = cljs.core.first(arglist__9833);
var args = cljs.core.rest(arglist__9833);
return delay_until__delegate(ready_QMARK_,f,args);
});
delay_until.cljs$core$IFn$_invoke$arity$variadic = delay_until__delegate;
return delay_until;
})()
;
hoplon.google.api.visible_QMARK_ = (function visible_QMARK_(elem){var c = tailrecursion.javelin.cell(null);setInterval(((function (c){
return (function (){return cljs.core.reset_BANG_(c,jQuery(elem).is(":visible"));
});})(c))
,100);
return c;
});
/**
* @param {...*} var_args
*/
hoplon.google.api.google_map = (function() { 
var google_map__delegate = function (args__8680__auto__){var vec__9879 = tailrecursion.hoplon.parse_args(args__8680__auto__);var map__9880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9879,0,null);var map__9880__$1 = ((cljs.core.seq_QMARK_(map__9880))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9880):map__9880);var attr = map__9880__$1;var fit_pins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.constant$keyword$66);var map_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.constant$keyword$67);var pin_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.constant$keyword$68);var pins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.constant$keyword$69);var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.constant$keyword$70);var center = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9880__$1,cljs.core.constant$keyword$71);var vec__9881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9879,1,null);var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9881,0,null);var elem__$1 = (function (){var or__7641__auto__ = elem;if(cljs.core.truth_(or__7641__auto__))
{return or__7641__auto__;
} else
{return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.constant$keyword$71,cljs.core.array_seq([cljs.core.constant$keyword$70,cljs.core.constant$keyword$69,cljs.core.constant$keyword$68,cljs.core.constant$keyword$67,cljs.core.constant$keyword$72,cljs.core.constant$keyword$66], 0))) : tailrecursion.hoplon.div.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.constant$keyword$71,cljs.core.array_seq([cljs.core.constant$keyword$70,cljs.core.constant$keyword$69,cljs.core.constant$keyword$68,cljs.core.constant$keyword$67,cljs.core.constant$keyword$72,cljs.core.constant$keyword$66], 0))));
}
})();var visible_QMARK__9924 = hoplon.google.api.visible_QMARK_(elem__$1);(hoplon.google.api.ensure_maps.cljs$core$IFn$_invoke$arity$1 ? hoplon.google.api.ensure_maps.cljs$core$IFn$_invoke$arity$1(hoplon.google.api.delay_until(visible_QMARK__9924,((function (visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (){var maps = google.maps;var Map = maps.Map;var Event = maps.event;var LatLng = maps.LatLng;var Marker = maps.Marker;var InfoWindow = maps.InfoWindow;var LatLngBounds = maps.LatLngBounds;var lat_lng = ((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (p1__6564_SHARP_,p2__6565_SHARP_){return (new LatLng(parseFloat(p1__6564_SHARP_),parseFloat(p2__6565_SHARP_)));
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
;var opts__$1 = tailrecursion.javelin.lift(((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9887,G__9886,G__9884,G__9883,G__9885){var map__9882 = G__9883;var map__9882__$1 = ((cljs.core.seq_QMARK_(map__9882))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9882):map__9882);var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9882__$1,cljs.core.constant$keyword$73);var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9882__$1,cljs.core.constant$keyword$74);return (G__9884.cljs$core$IFn$_invoke$arity$1 ? G__9884.cljs$core$IFn$_invoke$arity$1((G__9885.cljs$core$IFn$_invoke$arity$3 ? G__9885.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,G__9886,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$71,(G__9887.cljs$core$IFn$_invoke$arity$2 ? G__9887.cljs$core$IFn$_invoke$arity$2(lat,lon) : G__9887.call(null,lat,lon))], null)) : G__9885.call(null,cljs.core.PersistentArrayMap.EMPTY,G__9886,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$71,(G__9887.cljs$core$IFn$_invoke$arity$2 ? G__9887.cljs$core$IFn$_invoke$arity$2(lat,lon) : G__9887.call(null,lat,lon))], null)))) : G__9884.call(null,(G__9885.cljs$core$IFn$_invoke$arity$3 ? G__9885.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,G__9886,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$71,(G__9887.cljs$core$IFn$_invoke$arity$2 ? G__9887.cljs$core$IFn$_invoke$arity$2(lat,lon) : G__9887.call(null,lat,lon))], null)) : G__9885.call(null,cljs.core.PersistentArrayMap.EMPTY,G__9886,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$71,(G__9887.cljs$core$IFn$_invoke$arity$2 ? G__9887.cljs$core$IFn$_invoke$arity$2(lat,lon) : G__9887.call(null,lat,lon))], null)))));
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,lat_lng,opts,cljs.core.clj__GT_js,center,cljs.core.merge);var map = (new Map(elem__$1,cljs.core.deref(opts__$1)));var bounds = tailrecursion.javelin.lift(((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9896,G__9895,G__9894){var b = (new G__9894());var seq__9888_9925 = cljs.core.seq(G__9895);var chunk__9889_9926 = null;var count__9890_9927 = 0;var i__9891_9928 = 0;while(true){
if(cljs.core.truth_((i__9891_9928 < count__9890_9927)))
{var map__9892_9929 = chunk__9889_9926.cljs$core$IIndexed$_nth$arity$2(null,i__9891_9928);var map__9892_9930__$1 = ((cljs.core.seq_QMARK_(map__9892_9929))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9892_9929):map__9892_9929);var lon_9931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9892_9930__$1,cljs.core.constant$keyword$73);var lat_9932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9892_9930__$1,cljs.core.constant$keyword$74);b.extend((G__9896.cljs$core$IFn$_invoke$arity$2 ? G__9896.cljs$core$IFn$_invoke$arity$2(lat_9932,lon_9931) : G__9896.call(null,lat_9932,lon_9931)));
{
var G__9933 = seq__9888_9925;
var G__9934 = chunk__9889_9926;
var G__9935 = count__9890_9927;
var G__9936 = (i__9891_9928 + 1);
seq__9888_9925 = G__9933;
chunk__9889_9926 = G__9934;
count__9890_9927 = G__9935;
i__9891_9928 = G__9936;
continue;
}
} else
{var temp__4092__auto___9937 = cljs.core.seq(seq__9888_9925);if(temp__4092__auto___9937)
{var seq__9888_9938__$1 = temp__4092__auto___9937;if(cljs.core.chunked_seq_QMARK_(seq__9888_9938__$1))
{var c__8397__auto___9939 = cljs.core.chunk_first(seq__9888_9938__$1);{
var G__9940 = cljs.core.chunk_rest(seq__9888_9938__$1);
var G__9941 = c__8397__auto___9939;
var G__9942 = cljs.core.count(c__8397__auto___9939);
var G__9943 = 0;
seq__9888_9925 = G__9940;
chunk__9889_9926 = G__9941;
count__9890_9927 = G__9942;
i__9891_9928 = G__9943;
continue;
}
} else
{var map__9893_9944 = cljs.core.first(seq__9888_9938__$1);var map__9893_9945__$1 = ((cljs.core.seq_QMARK_(map__9893_9944))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9893_9944):map__9893_9944);var lon_9946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9893_9945__$1,cljs.core.constant$keyword$73);var lat_9947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9893_9945__$1,cljs.core.constant$keyword$74);b.extend((G__9896.cljs$core$IFn$_invoke$arity$2 ? G__9896.cljs$core$IFn$_invoke$arity$2(lat_9947,lon_9946) : G__9896.call(null,lat_9947,lon_9946)));
{
var G__9948 = cljs.core.next(seq__9888_9938__$1);
var G__9949 = null;
var G__9950 = 0;
var G__9951 = 0;
seq__9888_9925 = G__9948;
chunk__9889_9926 = G__9949;
count__9890_9927 = G__9950;
i__9891_9928 = G__9951;
continue;
}
}
} else
{}
}
break;
}
return b;
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,lat_lng,pins,LatLngBounds);Event.addListener(map,"click",((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (){if(cljs.core.truth_(map_click))
{return (map_click.cljs$core$IFn$_invoke$arity$1 ? map_click.cljs$core$IFn$_invoke$arity$1(map) : map_click.call(null,map));
} else
{return null;
}
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
);
tailrecursion.javelin.lift(((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9898,G__9897){return G__9897.setOptions(G__9898);
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,opts__$1,map);
tailrecursion.javelin.lift(((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9902,G__9901,G__9903,G__9900,G__9904,G__9899){if(cljs.core.truth_((function (){var and__7629__auto__ = G__9899;if(cljs.core.truth_(and__7629__auto__))
{return (G__9900.cljs$core$IFn$_invoke$arity$1 ? G__9900.cljs$core$IFn$_invoke$arity$1(G__9901) : G__9900.call(null,G__9901));
} else
{return and__7629__auto__;
}
})()))
{return (G__9902.cljs$core$IFn$_invoke$arity$1 ? G__9902.cljs$core$IFn$_invoke$arity$1(((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (){return G__9903.fitBounds(G__9904);
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
) : G__9902.call(null,((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (){return G__9903.fitBounds(G__9904);
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
)).call(null);
} else
{return null;
}
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.google.api.delay_until,visible_QMARK__9924),pins,map,cljs.core.seq,bounds,fit_pins);
return tailrecursion.javelin.cell_doseq_STAR_(tailrecursion.javelin.lift(((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9905,G__9906){return (G__9905.cljs$core$IFn$_invoke$arity$1 ? G__9905.cljs$core$IFn$_invoke$arity$1(G__9906) : G__9905.call(null,G__9906));
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,hoplon.google.api.indexed,pins),((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (item__8823__auto__){var vec__9907 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9910){var vec__9908 = G__9910;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9908,0,null);var map__9909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9908,1,null);var map__9909__$1 = ((cljs.core.seq_QMARK_(map__9909))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9909):map__9909);var pin = map__9909__$1;var opts__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9909__$1,cljs.core.constant$keyword$70);var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9909__$1,cljs.core.constant$keyword$75);var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9909__$1,cljs.core.constant$keyword$73);var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9909__$1,cljs.core.constant$keyword$74);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,lat,lon,info,opts__$2,pin], null);
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,item__8823__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9907,0,null);var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9907,1,null);var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9907,2,null);var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9907,3,null);var opts__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9907,4,null);var pin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9907,5,null);var marker = (new Marker(cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.EMPTY)));var iwindow = (new InfoWindow(cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.EMPTY)));Event.addListener(marker,"click",((function (marker,iwindow,vec__9907,i,lat,lon,info,opts__$2,pin,maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (){if(cljs.core.truth_(cljs.core.deref(info)))
{iwindow.open(map,marker);
} else
{}
if(cljs.core.truth_(pin_click))
{return (pin_click.cljs$core$IFn$_invoke$arity$4 ? pin_click.cljs$core$IFn$_invoke$arity$4(map,marker,iwindow,cljs.core.deref(pin)) : pin_click.call(null,map,marker,iwindow,cljs.core.deref(pin)));
} else
{return null;
}
});})(marker,iwindow,vec__9907,i,lat,lon,info,opts__$2,pin,maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
);
tailrecursion.javelin.lift(((function (marker,iwindow,vec__9907,i,lat,lon,info,opts__$2,pin,maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9912,G__9914,G__9913){var G__9911 = G__9912;G__9911.setContent((G__9913.cljs$core$IFn$_invoke$arity$1 ? G__9913.cljs$core$IFn$_invoke$arity$1(G__9914) : G__9913.call(null,G__9914)));
G__9911.close();
return G__9911;
});})(marker,iwindow,vec__9907,i,lat,lon,info,opts__$2,pin,maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,iwindow,info,hoplon.google.api.dom2str);
return tailrecursion.javelin.lift(((function (marker,iwindow,vec__9907,i,lat,lon,info,opts__$2,pin,maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9918,G__9917,G__9921,G__9922,G__9916,G__9919,G__9923,G__9915,G__9920){var map__$1 = (cljs.core.truth_(G__9915)?G__9916:null);var pos = (cljs.core.truth_(G__9915)?(G__9917.cljs$core$IFn$_invoke$arity$2 ? G__9917.cljs$core$IFn$_invoke$arity$2(G__9915,G__9918) : G__9917.call(null,G__9915,G__9918)):null);var opt = (G__9919.cljs$core$IFn$_invoke$arity$1 ? G__9919.cljs$core$IFn$_invoke$arity$1((G__9920.cljs$core$IFn$_invoke$arity$3 ? G__9920.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,G__9921,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,map__$1,cljs.core.constant$keyword$77,pos], null)) : G__9920.call(null,cljs.core.PersistentArrayMap.EMPTY,G__9921,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,map__$1,cljs.core.constant$keyword$77,pos], null)))) : G__9919.call(null,(G__9920.cljs$core$IFn$_invoke$arity$3 ? G__9920.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,G__9921,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,map__$1,cljs.core.constant$keyword$77,pos], null)) : G__9920.call(null,cljs.core.PersistentArrayMap.EMPTY,G__9921,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,map__$1,cljs.core.constant$keyword$77,pos], null)))));G__9922.close();
return G__9923.setOptions(opt);
});})(marker,iwindow,vec__9907,i,lat,lon,info,opts__$2,pin,maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,lon,lat_lng,opts__$2,iwindow,map,cljs.core.clj__GT_js,marker,lat,cljs.core.merge);
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
);
});})(visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
)) : hoplon.google.api.ensure_maps.call(null,hoplon.google.api.delay_until(visible_QMARK__9924,((function (visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (){var maps = google.maps;var Map = maps.Map;var Event = maps.event;var LatLng = maps.LatLng;var Marker = maps.Marker;var InfoWindow = maps.InfoWindow;var LatLngBounds = maps.LatLngBounds;var lat_lng = ((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (p1__6564_SHARP_,p2__6565_SHARP_){return (new LatLng(parseFloat(p1__6564_SHARP_),parseFloat(p2__6565_SHARP_)));
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
;var opts__$1 = tailrecursion.javelin.lift(((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9887,G__9886,G__9884,G__9883,G__9885){var map__9882 = G__9883;var map__9882__$1 = ((cljs.core.seq_QMARK_(map__9882))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9882):map__9882);var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9882__$1,cljs.core.constant$keyword$73);var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9882__$1,cljs.core.constant$keyword$74);return (G__9884.cljs$core$IFn$_invoke$arity$1 ? G__9884.cljs$core$IFn$_invoke$arity$1((G__9885.cljs$core$IFn$_invoke$arity$3 ? G__9885.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,G__9886,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$71,(G__9887.cljs$core$IFn$_invoke$arity$2 ? G__9887.cljs$core$IFn$_invoke$arity$2(lat,lon) : G__9887.call(null,lat,lon))], null)) : G__9885.call(null,cljs.core.PersistentArrayMap.EMPTY,G__9886,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$71,(G__9887.cljs$core$IFn$_invoke$arity$2 ? G__9887.cljs$core$IFn$_invoke$arity$2(lat,lon) : G__9887.call(null,lat,lon))], null)))) : G__9884.call(null,(G__9885.cljs$core$IFn$_invoke$arity$3 ? G__9885.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,G__9886,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$71,(G__9887.cljs$core$IFn$_invoke$arity$2 ? G__9887.cljs$core$IFn$_invoke$arity$2(lat,lon) : G__9887.call(null,lat,lon))], null)) : G__9885.call(null,cljs.core.PersistentArrayMap.EMPTY,G__9886,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$71,(G__9887.cljs$core$IFn$_invoke$arity$2 ? G__9887.cljs$core$IFn$_invoke$arity$2(lat,lon) : G__9887.call(null,lat,lon))], null)))));
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,lat_lng,opts,cljs.core.clj__GT_js,center,cljs.core.merge);var map = (new Map(elem__$1,cljs.core.deref(opts__$1)));var bounds = tailrecursion.javelin.lift(((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9896,G__9895,G__9894){var b = (new G__9894());var seq__9888_9952 = cljs.core.seq(G__9895);var chunk__9889_9953 = null;var count__9890_9954 = 0;var i__9891_9955 = 0;while(true){
if(cljs.core.truth_((i__9891_9955 < count__9890_9954)))
{var map__9892_9956 = chunk__9889_9953.cljs$core$IIndexed$_nth$arity$2(null,i__9891_9955);var map__9892_9957__$1 = ((cljs.core.seq_QMARK_(map__9892_9956))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9892_9956):map__9892_9956);var lon_9958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9892_9957__$1,cljs.core.constant$keyword$73);var lat_9959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9892_9957__$1,cljs.core.constant$keyword$74);b.extend((G__9896.cljs$core$IFn$_invoke$arity$2 ? G__9896.cljs$core$IFn$_invoke$arity$2(lat_9959,lon_9958) : G__9896.call(null,lat_9959,lon_9958)));
{
var G__9960 = seq__9888_9952;
var G__9961 = chunk__9889_9953;
var G__9962 = count__9890_9954;
var G__9963 = (i__9891_9955 + 1);
seq__9888_9952 = G__9960;
chunk__9889_9953 = G__9961;
count__9890_9954 = G__9962;
i__9891_9955 = G__9963;
continue;
}
} else
{var temp__4092__auto___9964 = cljs.core.seq(seq__9888_9952);if(temp__4092__auto___9964)
{var seq__9888_9965__$1 = temp__4092__auto___9964;if(cljs.core.chunked_seq_QMARK_(seq__9888_9965__$1))
{var c__8397__auto___9966 = cljs.core.chunk_first(seq__9888_9965__$1);{
var G__9967 = cljs.core.chunk_rest(seq__9888_9965__$1);
var G__9968 = c__8397__auto___9966;
var G__9969 = cljs.core.count(c__8397__auto___9966);
var G__9970 = 0;
seq__9888_9952 = G__9967;
chunk__9889_9953 = G__9968;
count__9890_9954 = G__9969;
i__9891_9955 = G__9970;
continue;
}
} else
{var map__9893_9971 = cljs.core.first(seq__9888_9965__$1);var map__9893_9972__$1 = ((cljs.core.seq_QMARK_(map__9893_9971))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9893_9971):map__9893_9971);var lon_9973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9893_9972__$1,cljs.core.constant$keyword$73);var lat_9974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9893_9972__$1,cljs.core.constant$keyword$74);b.extend((G__9896.cljs$core$IFn$_invoke$arity$2 ? G__9896.cljs$core$IFn$_invoke$arity$2(lat_9974,lon_9973) : G__9896.call(null,lat_9974,lon_9973)));
{
var G__9975 = cljs.core.next(seq__9888_9965__$1);
var G__9976 = null;
var G__9977 = 0;
var G__9978 = 0;
seq__9888_9952 = G__9975;
chunk__9889_9953 = G__9976;
count__9890_9954 = G__9977;
i__9891_9955 = G__9978;
continue;
}
}
} else
{}
}
break;
}
return b;
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,lat_lng,pins,LatLngBounds);Event.addListener(map,"click",((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (){if(cljs.core.truth_(map_click))
{return (map_click.cljs$core$IFn$_invoke$arity$1 ? map_click.cljs$core$IFn$_invoke$arity$1(map) : map_click.call(null,map));
} else
{return null;
}
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
);
tailrecursion.javelin.lift(((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9898,G__9897){return G__9897.setOptions(G__9898);
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,opts__$1,map);
tailrecursion.javelin.lift(((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9902,G__9901,G__9903,G__9900,G__9904,G__9899){if(cljs.core.truth_((function (){var and__7629__auto__ = G__9899;if(cljs.core.truth_(and__7629__auto__))
{return (G__9900.cljs$core$IFn$_invoke$arity$1 ? G__9900.cljs$core$IFn$_invoke$arity$1(G__9901) : G__9900.call(null,G__9901));
} else
{return and__7629__auto__;
}
})()))
{return (G__9902.cljs$core$IFn$_invoke$arity$1 ? G__9902.cljs$core$IFn$_invoke$arity$1(((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (){return G__9903.fitBounds(G__9904);
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
) : G__9902.call(null,((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (){return G__9903.fitBounds(G__9904);
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
)).call(null);
} else
{return null;
}
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.google.api.delay_until,visible_QMARK__9924),pins,map,cljs.core.seq,bounds,fit_pins);
return tailrecursion.javelin.cell_doseq_STAR_(tailrecursion.javelin.lift(((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9905,G__9906){return (G__9905.cljs$core$IFn$_invoke$arity$1 ? G__9905.cljs$core$IFn$_invoke$arity$1(G__9906) : G__9905.call(null,G__9906));
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,hoplon.google.api.indexed,pins),((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (item__8823__auto__){var vec__9907 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9910){var vec__9908 = G__9910;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9908,0,null);var map__9909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9908,1,null);var map__9909__$1 = ((cljs.core.seq_QMARK_(map__9909))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9909):map__9909);var pin = map__9909__$1;var opts__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9909__$1,cljs.core.constant$keyword$70);var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9909__$1,cljs.core.constant$keyword$75);var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9909__$1,cljs.core.constant$keyword$73);var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9909__$1,cljs.core.constant$keyword$74);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,lat,lon,info,opts__$2,pin], null);
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,item__8823__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9907,0,null);var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9907,1,null);var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9907,2,null);var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9907,3,null);var opts__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9907,4,null);var pin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9907,5,null);var marker = (new Marker(cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.EMPTY)));var iwindow = (new InfoWindow(cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.EMPTY)));Event.addListener(marker,"click",((function (marker,iwindow,vec__9907,i,lat,lon,info,opts__$2,pin,maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (){if(cljs.core.truth_(cljs.core.deref(info)))
{iwindow.open(map,marker);
} else
{}
if(cljs.core.truth_(pin_click))
{return (pin_click.cljs$core$IFn$_invoke$arity$4 ? pin_click.cljs$core$IFn$_invoke$arity$4(map,marker,iwindow,cljs.core.deref(pin)) : pin_click.call(null,map,marker,iwindow,cljs.core.deref(pin)));
} else
{return null;
}
});})(marker,iwindow,vec__9907,i,lat,lon,info,opts__$2,pin,maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
);
tailrecursion.javelin.lift(((function (marker,iwindow,vec__9907,i,lat,lon,info,opts__$2,pin,maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9912,G__9914,G__9913){var G__9911 = G__9912;G__9911.setContent((G__9913.cljs$core$IFn$_invoke$arity$1 ? G__9913.cljs$core$IFn$_invoke$arity$1(G__9914) : G__9913.call(null,G__9914)));
G__9911.close();
return G__9911;
});})(marker,iwindow,vec__9907,i,lat,lon,info,opts__$2,pin,maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,iwindow,info,hoplon.google.api.dom2str);
return tailrecursion.javelin.lift(((function (marker,iwindow,vec__9907,i,lat,lon,info,opts__$2,pin,maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem){
return (function (G__9918,G__9917,G__9921,G__9922,G__9916,G__9919,G__9923,G__9915,G__9920){var map__$1 = (cljs.core.truth_(G__9915)?G__9916:null);var pos = (cljs.core.truth_(G__9915)?(G__9917.cljs$core$IFn$_invoke$arity$2 ? G__9917.cljs$core$IFn$_invoke$arity$2(G__9915,G__9918) : G__9917.call(null,G__9915,G__9918)):null);var opt = (G__9919.cljs$core$IFn$_invoke$arity$1 ? G__9919.cljs$core$IFn$_invoke$arity$1((G__9920.cljs$core$IFn$_invoke$arity$3 ? G__9920.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,G__9921,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,map__$1,cljs.core.constant$keyword$77,pos], null)) : G__9920.call(null,cljs.core.PersistentArrayMap.EMPTY,G__9921,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,map__$1,cljs.core.constant$keyword$77,pos], null)))) : G__9919.call(null,(G__9920.cljs$core$IFn$_invoke$arity$3 ? G__9920.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,G__9921,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,map__$1,cljs.core.constant$keyword$77,pos], null)) : G__9920.call(null,cljs.core.PersistentArrayMap.EMPTY,G__9921,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,map__$1,cljs.core.constant$keyword$77,pos], null)))));G__9922.close();
return G__9923.setOptions(opt);
});})(marker,iwindow,vec__9907,i,lat,lon,info,opts__$2,pin,maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
).call(null,lon,lat_lng,opts__$2,iwindow,map,cljs.core.clj__GT_js,marker,lat,cljs.core.merge);
});})(maps,Map,Event,LatLng,Marker,InfoWindow,LatLngBounds,lat_lng,opts__$1,map,bounds,visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
);
});})(visible_QMARK__9924,elem__$1,vec__9879,map__9880,map__9880__$1,attr,fit_pins,map_click,pin_click,pins,opts,center,vec__9881,elem))
)));
return elem__$1;
};
var google_map = function (var_args){
var args__8680__auto__ = null;if (arguments.length > 0) {
  args__8680__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return google_map__delegate.call(this,args__8680__auto__);};
google_map.cljs$lang$maxFixedArity = 0;
google_map.cljs$lang$applyTo = (function (arglist__9979){
var args__8680__auto__ = cljs.core.seq(arglist__9979);
return google_map__delegate(args__8680__auto__);
});
google_map.cljs$core$IFn$_invoke$arity$variadic = google_map__delegate;
return google_map;
})()
;
