// Compiled by ClojureScript 0.0-2227
goog.provide('flickr');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
/**
* Given a search query and a callback function, a JSONP request to the Flickr
* API is made. For each search result the link to the flickr page and the URL
* of the image are returned as {:link <link URL>, :image <image URL>}.
*/
flickr.image_search = (function image_search(query,success,fail){var js__GT_clj = (function (p1__5373_SHARP_){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__5373_SHARP_,cljs.core.array_seq([cljs.core.constant$keyword$12,true], 0));
});var data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$38,query,cljs.core.constant$keyword$39,cljs.core.constant$keyword$41,cljs.core.constant$keyword$40,cljs.core.constant$keyword$42], null);var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";var ajax = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$43,url,cljs.core.constant$keyword$44,"jsonp",cljs.core.constant$keyword$45,2000,cljs.core.constant$keyword$46,data], null));var parse = ((function (js__GT_clj,data,url,ajax){
return (function (p__9539){var map__9540 = p__9539;var map__9540__$1 = ((cljs.core.seq_QMARK_(map__9540))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9540):map__9540);var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9540__$1,cljs.core.constant$keyword$47);var map__9541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9540__$1,cljs.core.constant$keyword$48);var map__9541__$1 = ((cljs.core.seq_QMARK_(map__9541))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9541):map__9541);var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9541__$1,cljs.core.constant$keyword$49);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$47,link,cljs.core.constant$keyword$50,m], null);
});})(js__GT_clj,data,url,ajax))
;var G__9542 = jQuery.ajax(ajax);G__9542.fail(((function (G__9542,js__GT_clj,data,url,ajax,parse){
return (function() { 
var G__9543__delegate = function (rest__5374_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fail,rest__5374_SHARP_);
};
var G__9543 = function (var_args){
var rest__5374_SHARP_ = null;if (arguments.length > 0) {
  rest__5374_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9543__delegate.call(this,rest__5374_SHARP_);};
G__9543.cljs$lang$maxFixedArity = 0;
G__9543.cljs$lang$applyTo = (function (arglist__9544){
var rest__5374_SHARP_ = cljs.core.seq(arglist__9544);
return G__9543__delegate(rest__5374_SHARP_);
});
G__9543.cljs$core$IFn$_invoke$arity$variadic = G__9543__delegate;
return G__9543;
})()
;})(G__9542,js__GT_clj,data,url,ajax,parse))
);
G__9542.done(((function (G__9542,js__GT_clj,data,url,ajax,parse){
return (function (p1__5375_SHARP_){return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse,cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(js__GT_clj(p1__5375_SHARP_)))) : success.call(null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parse,cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(js__GT_clj(p1__5375_SHARP_)))));
});})(G__9542,js__GT_clj,data,url,ajax,parse))
);
return G__9542;
});
