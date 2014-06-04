// Compiled by ClojureScript 0.0-2227
goog.provide('tailrecursion.hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon.reload');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon.reload');
tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit = (function hoploninit(){tailrecursion.hoplon.reload.reload_all();
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.app_pages._index_DOT_html.swap_button = (function() { 
var swap_button__delegate = function (args__8302__auto__){var vec__9437 = tailrecursion.hoplon.parse_args(args__8302__auto__);var map__9438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9437,0,null);var map__9438__$1 = ((cljs.core.seq_QMARK_(map__9438))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9438):map__9438);var attr = map__9438__$1;var func = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9438__$1,cljs.core.constant$keyword$42,cljs.core.identity);var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9438__$1,cljs.core.constant$keyword$43);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9437,1,null);var attr__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.constant$keyword$43,cljs.core.array_seq([cljs.core.constant$keyword$42], 0));return (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$44,((function (attr__$1,vec__9437,map__9438,map__9438__$1,attr,func,state,kids){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,tailrecursion.javelin.deref_STAR_(func));
});})(attr__$1,vec__9437,map__9438,map__9438__$1,attr,func,state,kids))
) : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$44,((function (attr__$1,vec__9437,map__9438,map__9438__$1,attr,func,state,kids){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,tailrecursion.javelin.deref_STAR_(func));
});})(attr__$1,vec__9437,map__9438,map__9438__$1,attr,func,state,kids))
)).call(null,attr__$1,kids);
};
var swap_button = function (var_args){
var args__8302__auto__ = null;if (arguments.length > 0) {
  args__8302__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return swap_button__delegate.call(this,args__8302__auto__);};
swap_button.cljs$lang$maxFixedArity = 0;
swap_button.cljs$lang$applyTo = (function (arglist__9466){
var args__8302__auto__ = cljs.core.seq(arglist__9466);
return swap_button__delegate(args__8302__auto__);
});
swap_button.cljs$core$IFn$_invoke$arity$variadic = swap_button__delegate;
return swap_button;
})()
;
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.app_pages._index_DOT_html.counter = (function() { 
var counter__delegate = function (args__8302__auto__){var vec__9442 = tailrecursion.hoplon.parse_args(args__8302__auto__);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9442,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9442,1,null);var my_count = tailrecursion.javelin.cell(0);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(attr,(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8327__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8327__auto__,my_count,vec__9442,attr,_){
return (function (G__9444,G__9443){return G__9443.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9444));
});})(t__8327__auto__,my_count,vec__9442,attr,_))
).call(null,my_count,t__8327__auto__);
return t__8327__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8327__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8327__auto__,my_count,vec__9442,attr,_){
return (function (G__9444,G__9443){return G__9443.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9444));
});})(t__8327__auto__,my_count,vec__9442,attr,_))
).call(null,my_count,t__8327__auto__);
return t__8327__auto__;
})())),tailrecursion.hoplon.app_pages._index_DOT_html.swap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$43,my_count,cljs.core.constant$keyword$42,cljs.core.inc,"+"], 0)),tailrecursion.hoplon.app_pages._index_DOT_html.swap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$43,my_count,cljs.core.constant$keyword$42,cljs.core.dec,"-"], 0))) : tailrecursion.hoplon.div.call(null,attr,(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8327__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8327__auto__,my_count,vec__9442,attr,_){
return (function (G__9444,G__9443){return G__9443.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9444));
});})(t__8327__auto__,my_count,vec__9442,attr,_))
).call(null,my_count,t__8327__auto__);
return t__8327__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8327__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8327__auto__,my_count,vec__9442,attr,_){
return (function (G__9444,G__9443){return G__9443.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9444));
});})(t__8327__auto__,my_count,vec__9442,attr,_))
).call(null,my_count,t__8327__auto__);
return t__8327__auto__;
})())),tailrecursion.hoplon.app_pages._index_DOT_html.swap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$43,my_count,cljs.core.constant$keyword$42,cljs.core.inc,"+"], 0)),tailrecursion.hoplon.app_pages._index_DOT_html.swap_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$43,my_count,cljs.core.constant$keyword$42,cljs.core.dec,"-"], 0))));
};
var counter = function (var_args){
var args__8302__auto__ = null;if (arguments.length > 0) {
  args__8302__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return counter__delegate.call(this,args__8302__auto__);};
counter.cljs$lang$maxFixedArity = 0;
counter.cljs$lang$applyTo = (function (arglist__9467){
var args__8302__auto__ = cljs.core.seq(arglist__9467);
return counter__delegate(args__8302__auto__);
});
counter.cljs$core$IFn$_invoke$arity$variadic = counter__delegate;
return counter;
})()
;
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.app_pages._index_DOT_html.counters = (function() { 
var counters__delegate = function (args__8302__auto__){var vec__9453 = tailrecursion.hoplon.parse_args(args__8302__auto__);var map__9454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9453,0,null);var map__9454__$1 = ((cljs.core.seq_QMARK_(map__9454))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9454):map__9454);var attr = map__9454__$1;var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9454__$1,cljs.core.constant$keyword$45,10);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9453,1,null);var last_clicked = tailrecursion.javelin.cell(null);var attr__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attr,cljs.core.constant$keyword$45);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(attr__$1,(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1("A Counting Widget!") : tailrecursion.hoplon.h1.call(null,"A Counting Widget!")),(tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$27,last_clicked,(function (){var t__8327__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8327__auto__,last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_){
return (function (G__9456,G__9455){return G__9455.nodeValue = ("Last clicked item was "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9456));
});})(t__8327__auto__,last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_))
).call(null,last_clicked,t__8327__auto__);
return t__8327__auto__;
})()) : tailrecursion.hoplon.p.call(null,cljs.core.constant$keyword$27,last_clicked,(function (){var t__8327__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8327__auto__,last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_){
return (function (G__9456,G__9455){return G__9455.nodeValue = ("Last clicked item was "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9456));
});})(t__8327__auto__,last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_))
).call(null,last_clicked,t__8327__auto__);
return t__8327__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_){
return (function (G__9457,G__9458){return (G__9457.cljs$core$IFn$_invoke$arity$2 ? G__9457.cljs$core$IFn$_invoke$arity$2(0,G__9458) : G__9457.call(null,0,G__9458));
});})(last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_))
).call(null,cljs.core.range,size),null,((function (last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_){
return (function (item__8313__auto__){var vec__9459 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_){
return (function (G__9460){var i = G__9460;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null);
});})(last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_))
).call(null,item__8313__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9459,0,null);return tailrecursion.hoplon.app_pages._index_DOT_html.counter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$44,((function (vec__9459,i,last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_){
return (function (){return cljs.core.reset_BANG_(last_clicked,cljs.core.deref(i));
});})(vec__9459,i,last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_))
], 0));
});})(last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_))
)) : tailrecursion.hoplon.div.call(null,attr__$1,(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1("A Counting Widget!") : tailrecursion.hoplon.h1.call(null,"A Counting Widget!")),(tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$27,last_clicked,(function (){var t__8327__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8327__auto__,last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_){
return (function (G__9456,G__9455){return G__9455.nodeValue = ("Last clicked item was "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9456));
});})(t__8327__auto__,last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_))
).call(null,last_clicked,t__8327__auto__);
return t__8327__auto__;
})()) : tailrecursion.hoplon.p.call(null,cljs.core.constant$keyword$27,last_clicked,(function (){var t__8327__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8327__auto__,last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_){
return (function (G__9456,G__9455){return G__9455.nodeValue = ("Last clicked item was "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9456));
});})(t__8327__auto__,last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_))
).call(null,last_clicked,t__8327__auto__);
return t__8327__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_){
return (function (G__9457,G__9458){return (G__9457.cljs$core$IFn$_invoke$arity$2 ? G__9457.cljs$core$IFn$_invoke$arity$2(0,G__9458) : G__9457.call(null,0,G__9458));
});})(last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_))
).call(null,cljs.core.range,size),null,((function (last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_){
return (function (item__8313__auto__){var vec__9459 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_){
return (function (G__9460){var i = G__9460;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null);
});})(last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_))
).call(null,item__8313__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9459,0,null);return tailrecursion.hoplon.app_pages._index_DOT_html.counter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$44,((function (vec__9459,i,last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_){
return (function (){return cljs.core.reset_BANG_(last_clicked,cljs.core.deref(i));
});})(vec__9459,i,last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_))
], 0));
});})(last_clicked,attr__$1,vec__9453,map__9454,map__9454__$1,attr,size,_))
)));
};
var counters = function (var_args){
var args__8302__auto__ = null;if (arguments.length > 0) {
  args__8302__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return counters__delegate.call(this,args__8302__auto__);};
counters.cljs$lang$maxFixedArity = 0;
counters.cljs$lang$applyTo = (function (arglist__9468){
var args__8302__auto__ = cljs.core.seq(arglist__9468);
return counters__delegate(args__8302__auto__);
});
counters.cljs$core$IFn$_invoke$arity$variadic = counters__delegate;
return counters;
})()
;
(tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$46,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$46,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"]))),(meta.cljs$core$IFn$_invoke$arity$2 ? meta.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$48,"UTF-8") : meta.call(null,cljs.core.constant$keyword$48,"UTF-8")),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Counters") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Counters"))], null);
})()) : tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$46,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$46,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"]))),(meta.cljs$core$IFn$_invoke$arity$2 ? meta.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$48,"UTF-8") : meta.call(null,cljs.core.constant$keyword$48,"UTF-8")),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Counters") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Counters"))], null);
})())),(tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9461 = tailrecursion.hoplon.app_pages._index_DOT_html.counters.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$45,10], 0));return G__9461;
})(),(function (){var G__9463 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$47,"https://github.com/tailrecursion/hoplon-demos/blob/master/counters/src/index.cljs.hl","Source code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$47,"https://github.com/tailrecursion/hoplon-demos/blob/master/counters/src/index.cljs.hl","Source code"));var G__9462 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__9463) : tailrecursion.hoplon.p.call(null,G__9463));return G__9462;
})(),(function (){var G__9465 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$47,"https://github.com/swannodette/om/tree/master/examples/counters","the Om demo of the same name.") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$47,"https://github.com/swannodette/om/tree/master/examples/counters","the Om demo of the same name."));var G__9464 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2("Inspired by ",G__9465) : tailrecursion.hoplon.p.call(null,"Inspired by ",G__9465));return G__9464;
})()) : tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9461 = tailrecursion.hoplon.app_pages._index_DOT_html.counters.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$45,10], 0));return G__9461;
})(),(function (){var G__9463 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$47,"https://github.com/tailrecursion/hoplon-demos/blob/master/counters/src/index.cljs.hl","Source code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$47,"https://github.com/tailrecursion/hoplon-demos/blob/master/counters/src/index.cljs.hl","Source code"));var G__9462 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__9463) : tailrecursion.hoplon.p.call(null,G__9463));return G__9462;
})(),(function (){var G__9465 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$47,"https://github.com/swannodette/om/tree/master/examples/counters","the Om demo of the same name.") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$47,"https://github.com/swannodette/om/tree/master/examples/counters","the Om demo of the same name."));var G__9464 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2("Inspired by ",G__9465) : tailrecursion.hoplon.p.call(null,"Inspired by ",G__9465));return G__9464;
})()))) : tailrecursion.hoplon.html.call(null,(tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$46,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$46,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"]))),(meta.cljs$core$IFn$_invoke$arity$2 ? meta.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$48,"UTF-8") : meta.call(null,cljs.core.constant$keyword$48,"UTF-8")),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Counters") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Counters"))], null);
})()) : tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$46,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$46,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"]))),(meta.cljs$core$IFn$_invoke$arity$2 ? meta.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$48,"UTF-8") : meta.call(null,cljs.core.constant$keyword$48,"UTF-8")),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Counters") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Counters"))], null);
})())),(tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9461 = tailrecursion.hoplon.app_pages._index_DOT_html.counters.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$45,10], 0));return G__9461;
})(),(function (){var G__9463 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$47,"https://github.com/tailrecursion/hoplon-demos/blob/master/counters/src/index.cljs.hl","Source code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$47,"https://github.com/tailrecursion/hoplon-demos/blob/master/counters/src/index.cljs.hl","Source code"));var G__9462 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__9463) : tailrecursion.hoplon.p.call(null,G__9463));return G__9462;
})(),(function (){var G__9465 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$47,"https://github.com/swannodette/om/tree/master/examples/counters","the Om demo of the same name.") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$47,"https://github.com/swannodette/om/tree/master/examples/counters","the Om demo of the same name."));var G__9464 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2("Inspired by ",G__9465) : tailrecursion.hoplon.p.call(null,"Inspired by ",G__9465));return G__9464;
})()) : tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9461 = tailrecursion.hoplon.app_pages._index_DOT_html.counters.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$45,10], 0));return G__9461;
})(),(function (){var G__9463 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$47,"https://github.com/tailrecursion/hoplon-demos/blob/master/counters/src/index.cljs.hl","Source code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$47,"https://github.com/tailrecursion/hoplon-demos/blob/master/counters/src/index.cljs.hl","Source code"));var G__9462 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__9463) : tailrecursion.hoplon.p.call(null,G__9463));return G__9462;
})(),(function (){var G__9465 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$47,"https://github.com/swannodette/om/tree/master/examples/counters","the Om demo of the same name.") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$47,"https://github.com/swannodette/om/tree/master/examples/counters","the Om demo of the same name."));var G__9464 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2("Inspired by ",G__9465) : tailrecursion.hoplon.p.call(null,"Inspired by ",G__9465));return G__9464;
})()))));
return tailrecursion.hoplon.init();
});
goog.exportSymbol('tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit', tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit);
