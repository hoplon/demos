// Compiled by ClojureScript 0.0-2227
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11202_SHARP_){return (p1__11202_SHARP_ instanceof Node);
}):(function (p1__11203_SHARP_){try{return p1__11203_SHARP_.nodeType;
}catch (e11204){if((e11204 instanceof Error))
{var _ = e11204;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11204;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11205_SHARP_){try{return cljs.core.vector_QMARK_(p1__11205_SHARP_);
}catch (e11206){if((e11206 instanceof Error))
{var _ = e11206;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11206;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11207_SHARP_){try{return cljs.core.seq_QMARK_(p1__11207_SHARP_);
}catch (e11208){if((e11208 instanceof Error))
{var _ = e11208;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11208;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_((function (p1__11209_SHARP_){if(cljs.core.truth_((function (){var and__7255__auto__ = console;if(cljs.core.truth_(and__7255__auto__))
{return console.log;
} else
{return and__7255__auto__;
}
})()))
{return console.log(p1__11209_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e11211){if((e11211 instanceof Error))
{var _ = e11211;return not_found;
} else
{if(cljs.core.constant$keyword$6)
{throw e11211;
} else
{return null;
}
}
}});
safe_nth = function(coll,index,not_found){
switch(arguments.length){
case 2:
return safe_nth__2.call(this,coll,index);
case 3:
return safe_nth__3.call(this,coll,index,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
safe_nth.cljs$core$IFn$_invoke$arity$2 = safe_nth__2;
safe_nth.cljs$core$IFn$_invoke$arity$3 = safe_nth__3;
return safe_nth;
})()
;
tailrecursion.hoplon.timeout = (function() {
var timeout = null;
var timeout__1 = (function (f){return timeout.cljs$core$IFn$_invoke$arity$2(f,0);
});
var timeout__2 = (function (f,t){return window.setTimeout(f,t);
});
timeout = function(f,t){
switch(arguments.length){
case 1:
return timeout__1.call(this,f);
case 2:
return timeout__2.call(this,f,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeout.cljs$core$IFn$_invoke$arity$1 = timeout__1;
timeout.cljs$core$IFn$_invoke$arity$2 = timeout__2;
return timeout;
})()
;
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__11212_SHARP_){if(cljs.core.truth_((function (){var or__7267__auto__ = (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11212_SHARP_) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__11212_SHARP_));if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11212_SHARP_) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__11212_SHARP_));
}
})()))
{return unsplice(p1__11212_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11212_SHARP_], null);
}
}),forms);
});
tailrecursion.hoplon.when_dom = (function when_dom(this$,f){if(!((this$ instanceof Element)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((function doit(){if(cljs.core.truth_(document.documentElement.contains(this$)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2(doit,20);
}
}));
}
});
tailrecursion.hoplon.parse_args = (function parse_args(p__11215){var vec__11217 = p__11215;var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11217,0,null);var tail = cljs.core.nthnext(vec__11217,1);var args = vec__11217;var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_,vec__11217,head,tail,args){
return (function (p1__11213_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,p1__11213_SHARP_)));
});})(kw1_QMARK_,vec__11217,head,tail,args))
;var drkw = ((function (kw1_QMARK_,mkkw,vec__11217,head,tail,args){
return (function (p1__11214_SHARP_){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.drop_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4(2,2,cljs.core.PersistentVector.EMPTY,p1__11214_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__11217,head,tail,args))
;if(cljs.core.map_QMARK_(head))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,tailrecursion.hoplon.unsplice(tail)], null);
} else
{if((head instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,mkkw(args)),tailrecursion.hoplon.unsplice(drkw(args))], null);
} else
{if(cljs.core.constant$keyword$6)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,tailrecursion.hoplon.unsplice(args)], null);
} else
{return null;
}
}
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__11219_SHARP_,p2__11218_SHARP_){var n = (function (){var s = cljs.core.name(p2__11218_SHARP_);var c = cljs.core.last(s);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c)))
{return s;
} else
{return s.slice(0,-1);
}
})();var p = n.substr(0,3);return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__11218_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11219_SHARP_,p)))?n:n.substr(3)));
});var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");var dos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__11220_SHARP_,p2__11221_SHARP_){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11220_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__11221_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__11244_11262 = cljs.core.seq(attr);var chunk__11245_11263 = null;var count__11246_11264 = 0;var i__11247_11265 = 0;while(true){
if((i__11247_11265 < count__11246_11264))
{var vec__11248_11266 = chunk__11245_11263.cljs$core$IIndexed$_nth$arity$2(null,i__11247_11265);var k_11267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11248_11266,0,null);var v_11268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11248_11266,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11268)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11267) : dokey.call(null,k_11267)),v_11268);
} else
{if(cljs.core.fn_QMARK_(v_11268))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11267) : onkey.call(null,k_11267)),v_11268);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11267) : dokey.call(null,k_11267)),v_11268) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11267) : dokey.call(null,k_11267)),v_11268));
} else
{}
}
}
{
var G__11269 = seq__11244_11262;
var G__11270 = chunk__11245_11263;
var G__11271 = count__11246_11264;
var G__11272 = (i__11247_11265 + 1);
seq__11244_11262 = G__11269;
chunk__11245_11263 = G__11270;
count__11246_11264 = G__11271;
i__11247_11265 = G__11272;
continue;
}
} else
{var temp__4092__auto___11273 = cljs.core.seq(seq__11244_11262);if(temp__4092__auto___11273)
{var seq__11244_11274__$1 = temp__4092__auto___11273;if(cljs.core.chunked_seq_QMARK_(seq__11244_11274__$1))
{var c__8023__auto___11275 = cljs.core.chunk_first(seq__11244_11274__$1);{
var G__11276 = cljs.core.chunk_rest(seq__11244_11274__$1);
var G__11277 = c__8023__auto___11275;
var G__11278 = cljs.core.count(c__8023__auto___11275);
var G__11279 = 0;
seq__11244_11262 = G__11276;
chunk__11245_11263 = G__11277;
count__11246_11264 = G__11278;
i__11247_11265 = G__11279;
continue;
}
} else
{var vec__11249_11280 = cljs.core.first(seq__11244_11274__$1);var k_11281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11249_11280,0,null);var v_11282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11249_11280,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11282)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11281) : dokey.call(null,k_11281)),v_11282);
} else
{if(cljs.core.fn_QMARK_(v_11282))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11281) : onkey.call(null,k_11281)),v_11282);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11281) : dokey.call(null,k_11281)),v_11282) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11281) : dokey.call(null,k_11281)),v_11282));
} else
{}
}
}
{
var G__11283 = cljs.core.next(seq__11244_11274__$1);
var G__11284 = null;
var G__11285 = 0;
var G__11286 = 0;
seq__11244_11262 = G__11283;
chunk__11245_11263 = G__11284;
count__11246_11264 = G__11285;
i__11247_11265 = G__11286;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.seq(cljs.core.deref(dos)))
{setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){var seq__11250 = cljs.core.seq(cljs.core.deref(dos));var chunk__11251 = null;var count__11252 = 0;var i__11253 = 0;while(true){
if((i__11253 < count__11252))
{var vec__11254 = chunk__11251.cljs$core$IIndexed$_nth$arity$2(null,i__11253);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11254,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11254,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11250,chunk__11251,count__11252,i__11253,vec__11254,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11223_SHARP_,p2__11224_SHARP_,p3__11225_SHARP_,p4__11222_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11222_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11222_SHARP_));
});})(seq__11250,chunk__11251,count__11252,i__11253,vec__11254,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11287 = seq__11250;
var G__11288 = chunk__11251;
var G__11289 = count__11252;
var G__11290 = (i__11253 + 1);
seq__11250 = G__11287;
chunk__11251 = G__11288;
count__11252 = G__11289;
i__11253 = G__11290;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11250);if(temp__4092__auto__)
{var seq__11250__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11250__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__11250__$1);{
var G__11291 = cljs.core.chunk_rest(seq__11250__$1);
var G__11292 = c__8023__auto__;
var G__11293 = cljs.core.count(c__8023__auto__);
var G__11294 = 0;
seq__11250 = G__11291;
chunk__11251 = G__11292;
count__11252 = G__11293;
i__11253 = G__11294;
continue;
}
} else
{var vec__11255 = cljs.core.first(seq__11250__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11255,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11255,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11250,chunk__11251,count__11252,i__11253,vec__11255,k,v,seq__11250__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11223_SHARP_,p2__11224_SHARP_,p3__11225_SHARP_,p4__11222_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11222_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11222_SHARP_));
});})(seq__11250,chunk__11251,count__11252,i__11253,vec__11255,k,v,seq__11250__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11295 = cljs.core.next(seq__11250__$1);
var G__11296 = null;
var G__11297 = 0;
var G__11298 = 0;
seq__11250 = G__11295;
chunk__11251 = G__11296;
count__11252 = G__11297;
i__11253 = G__11298;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,0);
} else
{}
if(cljs.core.seq(cljs.core.deref(ons)))
{setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){var seq__11256 = cljs.core.seq(cljs.core.deref(ons));var chunk__11257 = null;var count__11258 = 0;var i__11259 = 0;while(true){
if((i__11259 < count__11258))
{var vec__11260 = chunk__11257.cljs$core$IIndexed$_nth$arity$2(null,i__11259);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11260,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11260,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11299 = seq__11256;
var G__11300 = chunk__11257;
var G__11301 = count__11258;
var G__11302 = (i__11259 + 1);
seq__11256 = G__11299;
chunk__11257 = G__11300;
count__11258 = G__11301;
i__11259 = G__11302;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11256);if(temp__4092__auto__)
{var seq__11256__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11256__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__11256__$1);{
var G__11303 = cljs.core.chunk_rest(seq__11256__$1);
var G__11304 = c__8023__auto__;
var G__11305 = cljs.core.count(c__8023__auto__);
var G__11306 = 0;
seq__11256 = G__11303;
chunk__11257 = G__11304;
count__11258 = G__11305;
i__11259 = G__11306;
continue;
}
} else
{var vec__11261 = cljs.core.first(seq__11256__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11261,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11261,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11307 = cljs.core.next(seq__11256__$1);
var G__11308 = null;
var G__11309 = 0;
var G__11310 = 0;
seq__11256 = G__11307;
chunk__11257 = G__11308;
count__11258 = G__11309;
i__11259 = G__11310;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,0);
} else
{}
return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11311_SHARP_,p2__11312_SHARP_){return p1__11311_SHARP_.appendChild(p2__11312_SHARP_);
}):(function (p1__11313_SHARP_,p2__11314_SHARP_){try{return p1__11313_SHARP_.appendChild(p2__11314_SHARP_);
}catch (e11315){if((e11315 instanceof Error))
{var _ = e11315;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11315;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){jQuery(this$).empty();
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))) : tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__11321){var vec__11327 = p__11321;var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11327,0,null);var _ = cljs.core.nthnext(vec__11327,1);var kids = vec__11327;if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell)))
{tailrecursion.hoplon.replace_children_BANG_(this$,cljs.core.deref(child_cell));
cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__11327,child_cell,_,kids){
return (function (p1__11317_SHARP_,p2__11318_SHARP_,p3__11319_SHARP_,p4__11316_SHARP_){return tailrecursion.hoplon.replace_children_BANG_(this$,p4__11316_SHARP_);
});})(vec__11327,child_cell,_,kids))
);
} else
{var node_11332 = ((function (vec__11327,child_cell,_,kids){
return (function (p1__11320_SHARP_){if(typeof p1__11320_SHARP_ === 'string')
{return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__11320_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__11320_SHARP_));
} else
{if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__11320_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__11320_SHARP_))))
{return p1__11320_SHARP_;
} else
{return null;
}
}
});})(vec__11327,child_cell,_,kids))
;var seq__11328_11333 = cljs.core.seq(cljs.core.keep(node_11332,tailrecursion.hoplon.unsplice(kids)));var chunk__11329_11334 = null;var count__11330_11335 = 0;var i__11331_11336 = 0;while(true){
if((i__11331_11336 < count__11330_11335))
{var x_11337 = chunk__11329_11334.cljs$core$IIndexed$_nth$arity$2(null,i__11331_11336);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11337) : tailrecursion.hoplon.append_child.call(null,this$,x_11337));
{
var G__11338 = seq__11328_11333;
var G__11339 = chunk__11329_11334;
var G__11340 = count__11330_11335;
var G__11341 = (i__11331_11336 + 1);
seq__11328_11333 = G__11338;
chunk__11329_11334 = G__11339;
count__11330_11335 = G__11340;
i__11331_11336 = G__11341;
continue;
}
} else
{var temp__4092__auto___11342 = cljs.core.seq(seq__11328_11333);if(temp__4092__auto___11342)
{var seq__11328_11343__$1 = temp__4092__auto___11342;if(cljs.core.chunked_seq_QMARK_(seq__11328_11343__$1))
{var c__8023__auto___11344 = cljs.core.chunk_first(seq__11328_11343__$1);{
var G__11345 = cljs.core.chunk_rest(seq__11328_11343__$1);
var G__11346 = c__8023__auto___11344;
var G__11347 = cljs.core.count(c__8023__auto___11344);
var G__11348 = 0;
seq__11328_11333 = G__11345;
chunk__11329_11334 = G__11346;
count__11330_11335 = G__11347;
i__11331_11336 = G__11348;
continue;
}
} else
{var x_11349 = cljs.core.first(seq__11328_11343__$1);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11349) : tailrecursion.hoplon.append_child.call(null,this$,x_11349));
{
var G__11350 = cljs.core.next(seq__11328_11343__$1);
var G__11351 = null;
var G__11352 = 0;
var G__11353 = 0;
seq__11328_11333 = G__11350;
chunk__11329_11334 = G__11351;
count__11330_11335 = G__11352;
i__11331_11336 = G__11353;
continue;
}
}
} else
{}
}
break;
}
}
return this$;
});
tailrecursion.hoplon.on_append_BANG_ = (function on_append_BANG_(this$,f){return this$.hoplonIFn = f;
});
Element.prototype.cljs$core$IFn$ = true;
Element.prototype.call = (function() { 
var G__11361__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__11355 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11355,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11355,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11356 = this$;G__11356.hoplonIFn(attr,kids);
return G__11356;
} else
{var G__11357 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11357,attr);
tailrecursion.hoplon.add_children_BANG_(G__11357,kids);
return G__11357;
}
};
var G__11361 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11361__delegate.call(this,self__,args);};
G__11361.cljs$lang$maxFixedArity = 1;
G__11361.cljs$lang$applyTo = (function (arglist__11362){
var self__ = cljs.core.first(arglist__11362);
var args = cljs.core.rest(arglist__11362);
return G__11361__delegate(self__,args);
});
G__11361.cljs$core$IFn$_invoke$arity$variadic = G__11361__delegate;
return G__11361;
})()
;
Element.prototype.apply = (function (self__,args11354){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11354)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11363__delegate = function (args){var this$ = this;var vec__11358 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11358,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11358,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11359 = this$;G__11359.hoplonIFn(attr,kids);
return G__11359;
} else
{var G__11360 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11360,attr);
tailrecursion.hoplon.add_children_BANG_(G__11360,kids);
return G__11360;
}
};
var G__11363 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11363__delegate.call(this,args);};
G__11363.cljs$lang$maxFixedArity = 0;
G__11363.cljs$lang$applyTo = (function (arglist__11364){
var args = cljs.core.seq(arglist__11364);
return G__11363__delegate(args);
});
G__11363.cljs$core$IFn$_invoke$arity$variadic = G__11363__delegate;
return G__11363;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__11365__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new$,args);
};
var G__11365 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11365__delegate.call(this,args);};
G__11365.cljs$lang$maxFixedArity = 0;
G__11365.cljs$lang$applyTo = (function (arglist__11366){
var args = cljs.core.seq(arglist__11366);
return G__11365__delegate(args);
});
G__11365.cljs$core$IFn$_invoke$arity$variadic = G__11365__delegate;
return G__11365;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__11367__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__11367 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11367__delegate.call(this,args);};
G__11367.cljs$lang$maxFixedArity = 0;
G__11367.cljs$lang$applyTo = (function (arglist__11368){
var args = cljs.core.seq(arglist__11368);
return G__11367__delegate(args);
});
G__11367.cljs$core$IFn$_invoke$arity$variadic = G__11367__delegate;
return G__11367;
})()
;
});
tailrecursion.hoplon.html_body = tailrecursion.hoplon.make_singleton_ctor("body");
tailrecursion.hoplon.html_head = tailrecursion.hoplon.make_singleton_ctor("head");
tailrecursion.hoplon.html = tailrecursion.hoplon.make_singleton_ctor("html");
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor("a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor("abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor("acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor("address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor("applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor("area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor("article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor("aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor("audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor("b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor("base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor("basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor("bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor("bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor("big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor("blockquote");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor("br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor("button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor("canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor("caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor("center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor("cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor("code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor("col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor("colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor("command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor("data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor("datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor("dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor("del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor("details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor("dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor("dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor("div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor("dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor("dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor("em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor("embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor("eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor("fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor("figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor("figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor("font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor("footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor("form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor("frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor("frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor("h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor("h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor("h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor("h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor("h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor("h6");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor("header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor("hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor("hr");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor("i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor("iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor("img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor("input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor("ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor("isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor("kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor("keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor("label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor("legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor("li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor("link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor("map");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor("mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor("menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor("meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor("meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor("nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor("noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor("noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor("object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor("ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor("optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor("option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor("output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor("p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor("param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor("pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor("progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor("q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor("rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor("rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor("ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor("s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor("samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor("script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor("section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor("select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor("small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor("source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor("span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor("strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor("strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor("style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor("sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor("summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor("sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor("table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor("tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor("td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor("textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor("tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor("th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor("thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor("time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor("title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor("tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor("track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor("tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor("u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor("ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor("var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor("video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor("wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function $text(p1__11369_SHARP_){return document.createTextNode(p1__11369_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__11370_SHARP_){return document.createComment(p1__11370_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.initialized_QMARK_)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__11371_SHARP_){return p1__11371_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_(tailrecursion.hoplon.initialized_QMARK_,true);
var seq__11376 = cljs.core.seq(cljs.core.deref(tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__11377 = null;var count__11378 = 0;var i__11379 = 0;while(true){
if((i__11379 < count__11378))
{var f = chunk__11377.cljs$core$IIndexed$_nth$arity$2(null,i__11379);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11380 = seq__11376;
var G__11381 = chunk__11377;
var G__11382 = count__11378;
var G__11383 = (i__11379 + 1);
seq__11376 = G__11380;
chunk__11377 = G__11381;
count__11378 = G__11382;
i__11379 = G__11383;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11376);if(temp__4092__auto__)
{var seq__11376__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11376__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__11376__$1);{
var G__11384 = cljs.core.chunk_rest(seq__11376__$1);
var G__11385 = c__8023__auto__;
var G__11386 = cljs.core.count(c__8023__auto__);
var G__11387 = 0;
seq__11376 = G__11384;
chunk__11377 = G__11385;
count__11378 = G__11386;
i__11379 = G__11387;
continue;
}
} else
{var f = cljs.core.first(seq__11376__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11388 = cljs.core.next(seq__11376__$1);
var G__11389 = null;
var G__11390 = 0;
var G__11391 = 0;
seq__11376 = G__11388;
chunk__11377 = G__11389;
count__11378 = G__11390;
i__11379 = G__11391;
continue;
}
}
} else
{return null;
}
}
break;
}
}),0);
});
tailrecursion.hoplon.by_id = (function by_id(id){return document.getElementById(cljs.core.name(id));
});
tailrecursion.hoplon.val_id = (function val_id(id){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.by_id(id),cljs.core.constant$keyword$11) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(id),cljs.core.constant$keyword$11));
});
tailrecursion.hoplon.rel = (function rel(other,event){var os = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(jQuery(other).offset());var ox = (os.cljs$core$IFn$_invoke$arity$1 ? os.cljs$core$IFn$_invoke$arity$1("left") : os.call(null,"left"));var oy = (os.cljs$core$IFn$_invoke$arity$1 ? os.cljs$core$IFn$_invoke$arity$1("top") : os.call(null,"top"));return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$20,(event.pageX - ox),cljs.core.constant$keyword$21,(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function relx(other,event){return cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel(other,event));
});
tailrecursion.hoplon.rely = (function rely(other,event){return cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel(other,event));
});
tailrecursion.hoplon.rel_event = (function rel_event(rel_to,tag,handler){return (function (event){(event[(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"X")] = tailrecursion.hoplon.relx(rel_to,event));
(event[(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"Y")] = tailrecursion.hoplon.rely(rel_to,event));
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));
});
});
tailrecursion.hoplon.text_val_BANG_ = (function() {
var text_val_BANG_ = null;
var text_val_BANG___1 = (function (e){return e.val();
});
var text_val_BANG___2 = (function (e,v){return e.val((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
});
text_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return text_val_BANG___1.call(this,e);
case 2:
return text_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = text_val_BANG___1;
text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = text_val_BANG___2;
return text_val_BANG_;
})()
;
tailrecursion.hoplon.check_val_BANG_ = (function() {
var check_val_BANG_ = null;
var check_val_BANG___1 = (function (e){return e.is(":checked");
});
var check_val_BANG___2 = (function (e,v){return e.prop("checked",cljs.core.boolean$(v));
});
check_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return check_val_BANG___1.call(this,e);
case 2:
return check_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = check_val_BANG___1;
check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = check_val_BANG___2;
return check_val_BANG_;
})()
;
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__8133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8136__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("do!",((function (method_table__8133__auto__,prefer_table__8134__auto__,method_cache__8135__auto__,cached_hierarchy__8136__auto__,hierarchy__8137__auto__){
return (function (elem,key,val){return key;
});})(method_table__8133__auto__,prefer_table__8134__auto__,method_cache__8135__auto__,cached_hierarchy__8136__auto__,hierarchy__8137__auto__))
,cljs.core.constant$keyword$22,hierarchy__8137__auto__,method_table__8133__auto__,prefer_table__8134__auto__,method_cache__8135__auto__,cached_hierarchy__8136__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,key,val){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$11,(function() { 
var G__11392__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__11392 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11392__delegate.call(this,elem,_,args);};
G__11392.cljs$lang$maxFixedArity = 2;
G__11392.cljs$lang$applyTo = (function (arglist__11393){
var elem = cljs.core.first(arglist__11393);
arglist__11393 = cljs.core.next(arglist__11393);
var _ = cljs.core.first(arglist__11393);
var args = cljs.core.rest(arglist__11393);
return G__11392__delegate(elem,_,args);
});
G__11392.cljs$core$IFn$_invoke$arity$variadic = G__11392__delegate;
return G__11392;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$24,(function (elem,_,kvs){var e = jQuery(elem);var seq__11394 = cljs.core.seq(kvs);var chunk__11395 = null;var count__11396 = 0;var i__11397 = 0;while(true){
if((i__11397 < count__11396))
{var vec__11398 = chunk__11395.cljs$core$IIndexed$_nth$arity$2(null,i__11397);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11398,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11398,1,null);var k_11400__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11400__$1);
} else
{e.attr(k_11400__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11400__$1:v));
}
{
var G__11401 = seq__11394;
var G__11402 = chunk__11395;
var G__11403 = count__11396;
var G__11404 = (i__11397 + 1);
seq__11394 = G__11401;
chunk__11395 = G__11402;
count__11396 = G__11403;
i__11397 = G__11404;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11394);if(temp__4092__auto__)
{var seq__11394__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11394__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__11394__$1);{
var G__11405 = cljs.core.chunk_rest(seq__11394__$1);
var G__11406 = c__8023__auto__;
var G__11407 = cljs.core.count(c__8023__auto__);
var G__11408 = 0;
seq__11394 = G__11405;
chunk__11395 = G__11406;
count__11396 = G__11407;
i__11397 = G__11408;
continue;
}
} else
{var vec__11399 = cljs.core.first(seq__11394__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11399,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11399,1,null);var k_11409__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11409__$1);
} else
{e.attr(k_11409__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11409__$1:v));
}
{
var G__11410 = cljs.core.next(seq__11394__$1);
var G__11411 = null;
var G__11412 = 0;
var G__11413 = 0;
seq__11394 = G__11410;
chunk__11395 = G__11411;
count__11396 = G__11412;
i__11397 = G__11413;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$25,(function (elem,_,kvs){var elem__$1 = jQuery(elem);var __GT_map = ((function (elem__$1){
return (function (p1__11414_SHARP_){return cljs.core.zipmap(p1__11414_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));var seq__11415 = cljs.core.seq(clmap);var chunk__11416 = null;var count__11417 = 0;var i__11418 = 0;while(true){
if((i__11418 < count__11417))
{var vec__11419 = chunk__11416.cljs$core$IIndexed$_nth$arity$2(null,i__11418);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11419,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11419,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11421 = seq__11415;
var G__11422 = chunk__11416;
var G__11423 = count__11417;
var G__11424 = (i__11418 + 1);
seq__11415 = G__11421;
chunk__11416 = G__11422;
count__11417 = G__11423;
i__11418 = G__11424;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11415);if(temp__4092__auto__)
{var seq__11415__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11415__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__11415__$1);{
var G__11425 = cljs.core.chunk_rest(seq__11415__$1);
var G__11426 = c__8023__auto__;
var G__11427 = cljs.core.count(c__8023__auto__);
var G__11428 = 0;
seq__11415 = G__11425;
chunk__11416 = G__11426;
count__11417 = G__11427;
i__11418 = G__11428;
continue;
}
} else
{var vec__11420 = cljs.core.first(seq__11415__$1);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11420,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11420,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11429 = cljs.core.next(seq__11415__$1);
var G__11430 = null;
var G__11431 = 0;
var G__11432 = 0;
seq__11415 = G__11429;
chunk__11416 = G__11430;
count__11417 = G__11431;
i__11418 = G__11432;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$26,(function (elem,_,kvs){var e = jQuery(elem);var seq__11433 = cljs.core.seq(kvs);var chunk__11434 = null;var count__11435 = 0;var i__11436 = 0;while(true){
if((i__11436 < count__11435))
{var vec__11437 = chunk__11434.cljs$core$IIndexed$_nth$arity$2(null,i__11436);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11437,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11437,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11439 = seq__11433;
var G__11440 = chunk__11434;
var G__11441 = count__11435;
var G__11442 = (i__11436 + 1);
seq__11433 = G__11439;
chunk__11434 = G__11440;
count__11435 = G__11441;
i__11436 = G__11442;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11433);if(temp__4092__auto__)
{var seq__11433__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11433__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__11433__$1);{
var G__11443 = cljs.core.chunk_rest(seq__11433__$1);
var G__11444 = c__8023__auto__;
var G__11445 = cljs.core.count(c__8023__auto__);
var G__11446 = 0;
seq__11433 = G__11443;
chunk__11434 = G__11444;
count__11435 = G__11445;
i__11436 = G__11446;
continue;
}
} else
{var vec__11438 = cljs.core.first(seq__11433__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11438,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11438,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11447 = cljs.core.next(seq__11433__$1);
var G__11448 = null;
var G__11449 = 0;
var G__11450 = 0;
seq__11433 = G__11447;
chunk__11434 = G__11448;
count__11435 = G__11449;
i__11436 = G__11450;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$27,(function (elem,_,v){return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$28,(function (elem,_,v){if(cljs.core.truth_(v))
{return jQuery(elem).hide().slideDown("fast");
} else
{return jQuery(elem).slideUp("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$29,(function (elem,_,v){if(cljs.core.truth_(v))
{return jQuery(elem).hide().fadeIn("fast");
} else
{return jQuery(elem).fadeOut("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$30,(function (elem,_,v){return setTimeout((function (){if(cljs.core.truth_(v))
{return jQuery(elem).focus();
} else
{return jQuery(elem).focusout();
}
}),0);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$31,(function (elem,_,___$1){return jQuery(elem).select();
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$32,(function (elem,_,v){if(cljs.core.truth_(v))
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$30,v) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$30,v));
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$31,v) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$31,v));
} else
{return null;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$33,(function (elem,_,v){return jQuery(elem).text((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$34,(function (elem,_,v){return jQuery(elem).html(v);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$35,(function (elem,_,v){if(cljs.core.truth_(v))
{var body = jQuery("body,html");var elem__$1 = jQuery(elem);return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,elem__$1.offset().top], null)));
} else
{return null;
}
}));
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__8133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8136__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("on!",((function (method_table__8133__auto__,prefer_table__8134__auto__,method_cache__8135__auto__,cached_hierarchy__8136__auto__,hierarchy__8137__auto__){
return (function (elem,event,callback){return event;
});})(method_table__8133__auto__,prefer_table__8134__auto__,method_cache__8135__auto__,cached_hierarchy__8136__auto__,hierarchy__8137__auto__))
,cljs.core.constant$keyword$22,hierarchy__8137__auto__,method_table__8133__auto__,prefer_table__8134__auto__,method_cache__8135__auto__,cached_hierarchy__8136__auto__));
})();
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,event,callback){return tailrecursion.hoplon.when_dom(elem,(function (){return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(((function (pool_size){
return (function (G__11477,G__11476){return (G__11476.cljs$core$IFn$_invoke$arity$1 ? G__11476.cljs$core$IFn$_invoke$arity$1(G__11477) : G__11476.call(null,G__11477));
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift(((function (pool_size,items_seq){
return (function (G__11478,G__11479){return (G__11478.cljs$core$IFn$_invoke$arity$1 ? G__11478.cljs$core$IFn$_invoke$arity$1(G__11479) : G__11478.call(null,G__11479));
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__11451_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count){
return (function (G__11480,G__11481){return (G__11480 < G__11481);
});})(pool_size,items_seq,cur_count))
).call(null,p1__11451_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__11452_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__11482,G__11484,G__11483){return (G__11482.cljs$core$IFn$_invoke$arity$2 ? G__11482.cljs$core$IFn$_invoke$arity$2(G__11483,G__11484) : G__11482.call(null,G__11483,G__11484));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__11452_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__11498,G__11496,G__11492,G__11493,G__11490,G__11494,G__11489,G__11491,G__11497,G__11495){if(cljs.core.truth_((G__11489 < G__11490)))
{var seq__11485_11499 = cljs.core.seq((G__11491.cljs$core$IFn$_invoke$arity$2 ? G__11491.cljs$core$IFn$_invoke$arity$2(G__11489,G__11490) : G__11491.call(null,G__11489,G__11490)));var chunk__11486_11500 = null;var count__11487_11501 = 0;var i__11488_11502 = 0;while(true){
if(cljs.core.truth_((i__11488_11502 < count__11487_11501)))
{var i_11503 = chunk__11486_11500.cljs$core$IIndexed$_nth$arity$2(null,i__11488_11502);var e_11504 = (G__11492.cljs$core$IFn$_invoke$arity$1 ? G__11492.cljs$core$IFn$_invoke$arity$1((G__11493.cljs$core$IFn$_invoke$arity$1 ? G__11493.cljs$core$IFn$_invoke$arity$1(i_11503) : G__11493.call(null,i_11503))) : G__11492.call(null,(G__11493.cljs$core$IFn$_invoke$arity$1 ? G__11493.cljs$core$IFn$_invoke$arity$1(i_11503) : G__11493.call(null,i_11503)))).call(null,cljs.core.constant$keyword$37,(G__11494.cljs$core$IFn$_invoke$arity$1 ? G__11494.cljs$core$IFn$_invoke$arity$1(i_11503) : G__11494.call(null,i_11503)));if(cljs.core.not(G__11495))
{G__11496.appendChild(e_11504);
} else
{G__11496.insertBefore(e_11504,G__11496.firstChild);
}
{
var G__11505 = seq__11485_11499;
var G__11506 = chunk__11486_11500;
var G__11507 = count__11487_11501;
var G__11508 = (i__11488_11502 + 1);
seq__11485_11499 = G__11505;
chunk__11486_11500 = G__11506;
count__11487_11501 = G__11507;
i__11488_11502 = G__11508;
continue;
}
} else
{var temp__4092__auto___11509 = cljs.core.seq(seq__11485_11499);if(temp__4092__auto___11509)
{var seq__11485_11510__$1 = temp__4092__auto___11509;if(cljs.core.chunked_seq_QMARK_(seq__11485_11510__$1))
{var c__8023__auto___11511 = cljs.core.chunk_first(seq__11485_11510__$1);{
var G__11512 = cljs.core.chunk_rest(seq__11485_11510__$1);
var G__11513 = c__8023__auto___11511;
var G__11514 = cljs.core.count(c__8023__auto___11511);
var G__11515 = 0;
seq__11485_11499 = G__11512;
chunk__11486_11500 = G__11513;
count__11487_11501 = G__11514;
i__11488_11502 = G__11515;
continue;
}
} else
{var i_11516 = cljs.core.first(seq__11485_11510__$1);var e_11517 = (G__11492.cljs$core$IFn$_invoke$arity$1 ? G__11492.cljs$core$IFn$_invoke$arity$1((G__11493.cljs$core$IFn$_invoke$arity$1 ? G__11493.cljs$core$IFn$_invoke$arity$1(i_11516) : G__11493.call(null,i_11516))) : G__11492.call(null,(G__11493.cljs$core$IFn$_invoke$arity$1 ? G__11493.cljs$core$IFn$_invoke$arity$1(i_11516) : G__11493.call(null,i_11516)))).call(null,cljs.core.constant$keyword$37,(G__11494.cljs$core$IFn$_invoke$arity$1 ? G__11494.cljs$core$IFn$_invoke$arity$1(i_11516) : G__11494.call(null,i_11516)));if(cljs.core.not(G__11495))
{G__11496.appendChild(e_11517);
} else
{G__11496.insertBefore(e_11517,G__11496.firstChild);
}
{
var G__11518 = cljs.core.next(seq__11485_11510__$1);
var G__11519 = null;
var G__11520 = 0;
var G__11521 = 0;
seq__11485_11499 = G__11518;
chunk__11486_11500 = G__11519;
count__11487_11501 = G__11520;
i__11488_11502 = G__11521;
continue;
}
}
} else
{}
}
break;
}
return (G__11497.cljs$core$IFn$_invoke$arity$2 ? G__11497.cljs$core$IFn$_invoke$arity$2(G__11498,G__11490) : G__11497.call(null,G__11498,G__11490));
} else
{return null;
}
});})(p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
).call(null,tailrecursion.javelin.cell(pool_size),p,tpl,ith_item,cur_count,show_ith_QMARK_,pool_size,cljs.core.range,cljs.core.reset_BANG_,reverse_QMARK_);
});})(d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
);
return d;
});
/**
* Manage the URL hash via Javelin cells. There are three arities:
* 
* - When called with no arguments this function returns a formula cell whose
* value is the URL hash or nil.
* 
* - When called with a single string argument, the argument is taken as the
* default value, which is returned in place of nil when there is no hash.
* 
* - When a single cell argument is provided, the URL hash is kept synced to the
* value of the cell.
* 
* - When a cell and a callback function are both provided, the URL hash is kept
* synced to the value of the cell as above, and any attempt to change the hash
* other than via the setter cell causes the callback to be called. The callback
* should be a function of one argument, the requested URL hash.
*/
tailrecursion.hoplon.route_cell = (function() {
var route_cell = null;
var route_cell__0 = (function (){var r = (function (){var ret__8450__auto__ = tailrecursion.javelin.cell(window.location.hash);setInterval(((function (ret__8450__auto__){
return (function (){return cljs.core.reset_BANG_(ret__8450__auto__,window.location.hash);
});})(ret__8450__auto__))
,100);
return tailrecursion.javelin.lift(((function (ret__8450__auto__){
return (function (G__11531){return G__11531;
});})(ret__8450__auto__))
).call(null,ret__8450__auto__);
})();return tailrecursion.javelin.lift(((function (r){
return (function (G__11532,G__11533){if(cljs.core.truth_((G__11532.cljs$core$IFn$_invoke$arity$2 ? G__11532.cljs$core$IFn$_invoke$arity$2("",G__11533) : G__11532.call(null,"",G__11533))))
{return G__11533;
} else
{return null;
}
});})(r))
).call(null,cljs.core.not_EQ_,r);
});
var route_cell__1 = (function (setter_or_dfl){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl)))
{var setter__8451__auto__ = setter_or_dfl;var callback__8452__auto__ = (function (){var or__7267__auto__ = null;if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8451__auto__,callback__8452__auto__){
return (function (G__11534,G__11535){return G__11534.location.hash = G__11535;
});})(setter__8451__auto__,callback__8452__auto__))
).call(null,window,setter__8451__auto__);
setInterval(((function (setter__8451__auto__,callback__8452__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8451__auto__),window.location.hash))
{(callback__8452__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8452__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8452__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8451__auto__);
} else
{return null;
}
});})(setter__8451__auto__,callback__8452__auto__))
,100);
return setter__8451__auto__;
} else
{var r = route_cell.cljs$core$IFn$_invoke$arity$0();return tailrecursion.javelin.lift(((function (r){
return (function (G__11537,G__11536){var or__7267__auto__ = G__11536;if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return G__11537;
}
});})(r))
).call(null,setter_or_dfl,r);
}
});
var route_cell__2 = (function (setter,callback){var setter__8451__auto__ = setter;var callback__8452__auto__ = (function (){var or__7267__auto__ = callback;if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8451__auto__,callback__8452__auto__){
return (function (G__11538,G__11539){return G__11538.location.hash = G__11539;
});})(setter__8451__auto__,callback__8452__auto__))
).call(null,window,setter__8451__auto__);
setInterval(((function (setter__8451__auto__,callback__8452__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8451__auto__),window.location.hash))
{(callback__8452__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8452__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8452__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8451__auto__);
} else
{return null;
}
});})(setter__8451__auto__,callback__8452__auto__))
,100);
return setter__8451__auto__;
});
route_cell = function(setter,callback){
switch(arguments.length){
case 0:
return route_cell__0.call(this);
case 1:
return route_cell__1.call(this,setter);
case 2:
return route_cell__2.call(this,setter,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
route_cell.cljs$core$IFn$_invoke$arity$0 = route_cell__0;
route_cell.cljs$core$IFn$_invoke$arity$1 = route_cell__1;
route_cell.cljs$core$IFn$_invoke$arity$2 = route_cell__2;
return route_cell;
})()
;
