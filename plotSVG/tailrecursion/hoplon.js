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
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11261_SHARP_){return (p1__11261_SHARP_ instanceof Node);
}):(function (p1__11262_SHARP_){try{return p1__11262_SHARP_.nodeType;
}catch (e11263){if((e11263 instanceof Error))
{var _ = e11263;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11263;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11264_SHARP_){try{return cljs.core.vector_QMARK_(p1__11264_SHARP_);
}catch (e11265){if((e11265 instanceof Error))
{var _ = e11265;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11265;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11266_SHARP_){try{return cljs.core.seq_QMARK_(p1__11266_SHARP_);
}catch (e11267){if((e11267 instanceof Error))
{var _ = e11267;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11267;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_((function (p1__11268_SHARP_){if(cljs.core.truth_((function (){var and__7431__auto__ = console;if(cljs.core.truth_(and__7431__auto__))
{return console.log;
} else
{return and__7431__auto__;
}
})()))
{return console.log(p1__11268_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e11270){if((e11270 instanceof Error))
{var _ = e11270;return not_found;
} else
{if(cljs.core.constant$keyword$6)
{throw e11270;
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
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__11271_SHARP_){if(cljs.core.truth_((function (){var or__7443__auto__ = (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11271_SHARP_) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__11271_SHARP_));if(cljs.core.truth_(or__7443__auto__))
{return or__7443__auto__;
} else
{return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11271_SHARP_) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__11271_SHARP_));
}
})()))
{return unsplice(p1__11271_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11271_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function parse_args(p__11274){var vec__11276 = p__11274;var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11276,0,null);var tail = cljs.core.nthnext(vec__11276,1);var args = vec__11276;var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_,vec__11276,head,tail,args){
return (function (p1__11272_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,p1__11272_SHARP_)));
});})(kw1_QMARK_,vec__11276,head,tail,args))
;var drkw = ((function (kw1_QMARK_,mkkw,vec__11276,head,tail,args){
return (function (p1__11273_SHARP_){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.drop_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4(2,2,cljs.core.PersistentVector.EMPTY,p1__11273_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__11276,head,tail,args))
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
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__11278_SHARP_,p2__11277_SHARP_){var n = (function (){var s = cljs.core.name(p2__11277_SHARP_);var c = cljs.core.last(s);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c)))
{return s;
} else
{return s.slice(0,-1);
}
})();var p = n.substr(0,3);return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__11277_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11278_SHARP_,p)))?n:n.substr(3)));
});var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");var dos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__11279_SHARP_,p2__11280_SHARP_){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11279_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__11280_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__11303_11321 = cljs.core.seq(attr);var chunk__11304_11322 = null;var count__11305_11323 = 0;var i__11306_11324 = 0;while(true){
if((i__11306_11324 < count__11305_11323))
{var vec__11307_11325 = chunk__11304_11322.cljs$core$IIndexed$_nth$arity$2(null,i__11306_11324);var k_11326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11307_11325,0,null);var v_11327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11307_11325,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11327)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11326) : dokey.call(null,k_11326)),v_11327);
} else
{if(cljs.core.fn_QMARK_(v_11327))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11326) : onkey.call(null,k_11326)),v_11327);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11326) : dokey.call(null,k_11326)),v_11327) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11326) : dokey.call(null,k_11326)),v_11327));
} else
{}
}
}
{
var G__11328 = seq__11303_11321;
var G__11329 = chunk__11304_11322;
var G__11330 = count__11305_11323;
var G__11331 = (i__11306_11324 + 1);
seq__11303_11321 = G__11328;
chunk__11304_11322 = G__11329;
count__11305_11323 = G__11330;
i__11306_11324 = G__11331;
continue;
}
} else
{var temp__4092__auto___11332 = cljs.core.seq(seq__11303_11321);if(temp__4092__auto___11332)
{var seq__11303_11333__$1 = temp__4092__auto___11332;if(cljs.core.chunked_seq_QMARK_(seq__11303_11333__$1))
{var c__8199__auto___11334 = cljs.core.chunk_first(seq__11303_11333__$1);{
var G__11335 = cljs.core.chunk_rest(seq__11303_11333__$1);
var G__11336 = c__8199__auto___11334;
var G__11337 = cljs.core.count(c__8199__auto___11334);
var G__11338 = 0;
seq__11303_11321 = G__11335;
chunk__11304_11322 = G__11336;
count__11305_11323 = G__11337;
i__11306_11324 = G__11338;
continue;
}
} else
{var vec__11308_11339 = cljs.core.first(seq__11303_11333__$1);var k_11340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11308_11339,0,null);var v_11341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11308_11339,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11341)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11340) : dokey.call(null,k_11340)),v_11341);
} else
{if(cljs.core.fn_QMARK_(v_11341))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11340) : onkey.call(null,k_11340)),v_11341);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11340) : dokey.call(null,k_11340)),v_11341) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11340) : dokey.call(null,k_11340)),v_11341));
} else
{}
}
}
{
var G__11342 = cljs.core.next(seq__11303_11333__$1);
var G__11343 = null;
var G__11344 = 0;
var G__11345 = 0;
seq__11303_11321 = G__11342;
chunk__11304_11322 = G__11343;
count__11305_11323 = G__11344;
i__11306_11324 = G__11345;
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
return (function (){var seq__11309 = cljs.core.seq(cljs.core.deref(dos));var chunk__11310 = null;var count__11311 = 0;var i__11312 = 0;while(true){
if((i__11312 < count__11311))
{var vec__11313 = chunk__11310.cljs$core$IIndexed$_nth$arity$2(null,i__11312);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11313,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11313,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11309,chunk__11310,count__11311,i__11312,vec__11313,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11282_SHARP_,p2__11283_SHARP_,p3__11284_SHARP_,p4__11281_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11281_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11281_SHARP_));
});})(seq__11309,chunk__11310,count__11311,i__11312,vec__11313,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11346 = seq__11309;
var G__11347 = chunk__11310;
var G__11348 = count__11311;
var G__11349 = (i__11312 + 1);
seq__11309 = G__11346;
chunk__11310 = G__11347;
count__11311 = G__11348;
i__11312 = G__11349;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11309);if(temp__4092__auto__)
{var seq__11309__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11309__$1))
{var c__8199__auto__ = cljs.core.chunk_first(seq__11309__$1);{
var G__11350 = cljs.core.chunk_rest(seq__11309__$1);
var G__11351 = c__8199__auto__;
var G__11352 = cljs.core.count(c__8199__auto__);
var G__11353 = 0;
seq__11309 = G__11350;
chunk__11310 = G__11351;
count__11311 = G__11352;
i__11312 = G__11353;
continue;
}
} else
{var vec__11314 = cljs.core.first(seq__11309__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11314,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11314,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11309,chunk__11310,count__11311,i__11312,vec__11314,k,v,seq__11309__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11282_SHARP_,p2__11283_SHARP_,p3__11284_SHARP_,p4__11281_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11281_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11281_SHARP_));
});})(seq__11309,chunk__11310,count__11311,i__11312,vec__11314,k,v,seq__11309__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11354 = cljs.core.next(seq__11309__$1);
var G__11355 = null;
var G__11356 = 0;
var G__11357 = 0;
seq__11309 = G__11354;
chunk__11310 = G__11355;
count__11311 = G__11356;
i__11312 = G__11357;
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
return (function (){var seq__11315 = cljs.core.seq(cljs.core.deref(ons));var chunk__11316 = null;var count__11317 = 0;var i__11318 = 0;while(true){
if((i__11318 < count__11317))
{var vec__11319 = chunk__11316.cljs$core$IIndexed$_nth$arity$2(null,i__11318);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11319,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11319,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11358 = seq__11315;
var G__11359 = chunk__11316;
var G__11360 = count__11317;
var G__11361 = (i__11318 + 1);
seq__11315 = G__11358;
chunk__11316 = G__11359;
count__11317 = G__11360;
i__11318 = G__11361;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11315);if(temp__4092__auto__)
{var seq__11315__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11315__$1))
{var c__8199__auto__ = cljs.core.chunk_first(seq__11315__$1);{
var G__11362 = cljs.core.chunk_rest(seq__11315__$1);
var G__11363 = c__8199__auto__;
var G__11364 = cljs.core.count(c__8199__auto__);
var G__11365 = 0;
seq__11315 = G__11362;
chunk__11316 = G__11363;
count__11317 = G__11364;
i__11318 = G__11365;
continue;
}
} else
{var vec__11320 = cljs.core.first(seq__11315__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11320,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11320,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11366 = cljs.core.next(seq__11315__$1);
var G__11367 = null;
var G__11368 = 0;
var G__11369 = 0;
seq__11315 = G__11366;
chunk__11316 = G__11367;
count__11317 = G__11368;
i__11318 = G__11369;
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
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11370_SHARP_,p2__11371_SHARP_){return p1__11370_SHARP_.appendChild(p2__11371_SHARP_);
}):(function (p1__11372_SHARP_,p2__11373_SHARP_){try{return p1__11372_SHARP_.appendChild(p2__11373_SHARP_);
}catch (e11374){if((e11374 instanceof Error))
{var _ = e11374;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11374;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){jQuery(this$).empty();
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))) : tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__11380){var vec__11386 = p__11380;var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11386,0,null);var _ = cljs.core.nthnext(vec__11386,1);var kids = vec__11386;if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell)))
{tailrecursion.hoplon.replace_children_BANG_(this$,cljs.core.deref(child_cell));
cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__11386,child_cell,_,kids){
return (function (p1__11376_SHARP_,p2__11377_SHARP_,p3__11378_SHARP_,p4__11375_SHARP_){return tailrecursion.hoplon.replace_children_BANG_(this$,p4__11375_SHARP_);
});})(vec__11386,child_cell,_,kids))
);
} else
{var node_11391 = ((function (vec__11386,child_cell,_,kids){
return (function (p1__11379_SHARP_){if(typeof p1__11379_SHARP_ === 'string')
{return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__11379_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__11379_SHARP_));
} else
{if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__11379_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__11379_SHARP_))))
{return p1__11379_SHARP_;
} else
{return null;
}
}
});})(vec__11386,child_cell,_,kids))
;var seq__11387_11392 = cljs.core.seq(cljs.core.keep(node_11391,tailrecursion.hoplon.unsplice(kids)));var chunk__11388_11393 = null;var count__11389_11394 = 0;var i__11390_11395 = 0;while(true){
if((i__11390_11395 < count__11389_11394))
{var x_11396 = chunk__11388_11393.cljs$core$IIndexed$_nth$arity$2(null,i__11390_11395);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11396) : tailrecursion.hoplon.append_child.call(null,this$,x_11396));
{
var G__11397 = seq__11387_11392;
var G__11398 = chunk__11388_11393;
var G__11399 = count__11389_11394;
var G__11400 = (i__11390_11395 + 1);
seq__11387_11392 = G__11397;
chunk__11388_11393 = G__11398;
count__11389_11394 = G__11399;
i__11390_11395 = G__11400;
continue;
}
} else
{var temp__4092__auto___11401 = cljs.core.seq(seq__11387_11392);if(temp__4092__auto___11401)
{var seq__11387_11402__$1 = temp__4092__auto___11401;if(cljs.core.chunked_seq_QMARK_(seq__11387_11402__$1))
{var c__8199__auto___11403 = cljs.core.chunk_first(seq__11387_11402__$1);{
var G__11404 = cljs.core.chunk_rest(seq__11387_11402__$1);
var G__11405 = c__8199__auto___11403;
var G__11406 = cljs.core.count(c__8199__auto___11403);
var G__11407 = 0;
seq__11387_11392 = G__11404;
chunk__11388_11393 = G__11405;
count__11389_11394 = G__11406;
i__11390_11395 = G__11407;
continue;
}
} else
{var x_11408 = cljs.core.first(seq__11387_11402__$1);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11408) : tailrecursion.hoplon.append_child.call(null,this$,x_11408));
{
var G__11409 = cljs.core.next(seq__11387_11402__$1);
var G__11410 = null;
var G__11411 = 0;
var G__11412 = 0;
seq__11387_11392 = G__11409;
chunk__11388_11393 = G__11410;
count__11389_11394 = G__11411;
i__11390_11395 = G__11412;
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
var G__11420__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__11414 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11414,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11414,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11415 = this$;G__11415.hoplonIFn(attr,kids);
return G__11415;
} else
{var G__11416 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11416,attr);
tailrecursion.hoplon.add_children_BANG_(G__11416,kids);
return G__11416;
}
};
var G__11420 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11420__delegate.call(this,self__,args);};
G__11420.cljs$lang$maxFixedArity = 1;
G__11420.cljs$lang$applyTo = (function (arglist__11421){
var self__ = cljs.core.first(arglist__11421);
var args = cljs.core.rest(arglist__11421);
return G__11420__delegate(self__,args);
});
G__11420.cljs$core$IFn$_invoke$arity$variadic = G__11420__delegate;
return G__11420;
})()
;
Element.prototype.apply = (function (self__,args11413){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11413)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11422__delegate = function (args){var this$ = this;var vec__11417 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11417,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11417,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11418 = this$;G__11418.hoplonIFn(attr,kids);
return G__11418;
} else
{var G__11419 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11419,attr);
tailrecursion.hoplon.add_children_BANG_(G__11419,kids);
return G__11419;
}
};
var G__11422 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11422__delegate.call(this,args);};
G__11422.cljs$lang$maxFixedArity = 0;
G__11422.cljs$lang$applyTo = (function (arglist__11423){
var args = cljs.core.seq(arglist__11423);
return G__11422__delegate(args);
});
G__11422.cljs$core$IFn$_invoke$arity$variadic = G__11422__delegate;
return G__11422;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__11424__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new$,args);
};
var G__11424 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11424__delegate.call(this,args);};
G__11424.cljs$lang$maxFixedArity = 0;
G__11424.cljs$lang$applyTo = (function (arglist__11425){
var args = cljs.core.seq(arglist__11425);
return G__11424__delegate(args);
});
G__11424.cljs$core$IFn$_invoke$arity$variadic = G__11424__delegate;
return G__11424;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__11426__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__11426 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11426__delegate.call(this,args);};
G__11426.cljs$lang$maxFixedArity = 0;
G__11426.cljs$lang$applyTo = (function (arglist__11427){
var args = cljs.core.seq(arglist__11427);
return G__11426__delegate(args);
});
G__11426.cljs$core$IFn$_invoke$arity$variadic = G__11426__delegate;
return G__11426;
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
tailrecursion.hoplon.$text = (function $text(p1__11428_SHARP_){return document.createTextNode(p1__11428_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__11429_SHARP_){return document.createComment(p1__11429_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.initialized_QMARK_)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__11430_SHARP_){return p1__11430_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_(tailrecursion.hoplon.initialized_QMARK_,true);
var seq__11435 = cljs.core.seq(cljs.core.deref(tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__11436 = null;var count__11437 = 0;var i__11438 = 0;while(true){
if((i__11438 < count__11437))
{var f = chunk__11436.cljs$core$IIndexed$_nth$arity$2(null,i__11438);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11439 = seq__11435;
var G__11440 = chunk__11436;
var G__11441 = count__11437;
var G__11442 = (i__11438 + 1);
seq__11435 = G__11439;
chunk__11436 = G__11440;
count__11437 = G__11441;
i__11438 = G__11442;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11435);if(temp__4092__auto__)
{var seq__11435__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11435__$1))
{var c__8199__auto__ = cljs.core.chunk_first(seq__11435__$1);{
var G__11443 = cljs.core.chunk_rest(seq__11435__$1);
var G__11444 = c__8199__auto__;
var G__11445 = cljs.core.count(c__8199__auto__);
var G__11446 = 0;
seq__11435 = G__11443;
chunk__11436 = G__11444;
count__11437 = G__11445;
i__11438 = G__11446;
continue;
}
} else
{var f = cljs.core.first(seq__11435__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11447 = cljs.core.next(seq__11435__$1);
var G__11448 = null;
var G__11449 = 0;
var G__11450 = 0;
seq__11435 = G__11447;
chunk__11436 = G__11448;
count__11437 = G__11449;
i__11438 = G__11450;
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__8309__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8310__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8311__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8312__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8313__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("do!",((function (method_table__8309__auto__,prefer_table__8310__auto__,method_cache__8311__auto__,cached_hierarchy__8312__auto__,hierarchy__8313__auto__){
return (function (elem,key,val){return key;
});})(method_table__8309__auto__,prefer_table__8310__auto__,method_cache__8311__auto__,cached_hierarchy__8312__auto__,hierarchy__8313__auto__))
,cljs.core.constant$keyword$22,hierarchy__8313__auto__,method_table__8309__auto__,prefer_table__8310__auto__,method_cache__8311__auto__,cached_hierarchy__8312__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,key,val){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$11,(function() { 
var G__11451__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__11451 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11451__delegate.call(this,elem,_,args);};
G__11451.cljs$lang$maxFixedArity = 2;
G__11451.cljs$lang$applyTo = (function (arglist__11452){
var elem = cljs.core.first(arglist__11452);
arglist__11452 = cljs.core.next(arglist__11452);
var _ = cljs.core.first(arglist__11452);
var args = cljs.core.rest(arglist__11452);
return G__11451__delegate(elem,_,args);
});
G__11451.cljs$core$IFn$_invoke$arity$variadic = G__11451__delegate;
return G__11451;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$24,(function (elem,_,kvs){var e = jQuery(elem);var seq__11453 = cljs.core.seq(kvs);var chunk__11454 = null;var count__11455 = 0;var i__11456 = 0;while(true){
if((i__11456 < count__11455))
{var vec__11457 = chunk__11454.cljs$core$IIndexed$_nth$arity$2(null,i__11456);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11457,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11457,1,null);var k_11459__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11459__$1);
} else
{e.attr(k_11459__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11459__$1:v));
}
{
var G__11460 = seq__11453;
var G__11461 = chunk__11454;
var G__11462 = count__11455;
var G__11463 = (i__11456 + 1);
seq__11453 = G__11460;
chunk__11454 = G__11461;
count__11455 = G__11462;
i__11456 = G__11463;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11453);if(temp__4092__auto__)
{var seq__11453__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11453__$1))
{var c__8199__auto__ = cljs.core.chunk_first(seq__11453__$1);{
var G__11464 = cljs.core.chunk_rest(seq__11453__$1);
var G__11465 = c__8199__auto__;
var G__11466 = cljs.core.count(c__8199__auto__);
var G__11467 = 0;
seq__11453 = G__11464;
chunk__11454 = G__11465;
count__11455 = G__11466;
i__11456 = G__11467;
continue;
}
} else
{var vec__11458 = cljs.core.first(seq__11453__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11458,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11458,1,null);var k_11468__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11468__$1);
} else
{e.attr(k_11468__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11468__$1:v));
}
{
var G__11469 = cljs.core.next(seq__11453__$1);
var G__11470 = null;
var G__11471 = 0;
var G__11472 = 0;
seq__11453 = G__11469;
chunk__11454 = G__11470;
count__11455 = G__11471;
i__11456 = G__11472;
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
return (function (p1__11473_SHARP_){return cljs.core.zipmap(p1__11473_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));var seq__11474 = cljs.core.seq(clmap);var chunk__11475 = null;var count__11476 = 0;var i__11477 = 0;while(true){
if((i__11477 < count__11476))
{var vec__11478 = chunk__11475.cljs$core$IIndexed$_nth$arity$2(null,i__11477);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11478,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11478,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11480 = seq__11474;
var G__11481 = chunk__11475;
var G__11482 = count__11476;
var G__11483 = (i__11477 + 1);
seq__11474 = G__11480;
chunk__11475 = G__11481;
count__11476 = G__11482;
i__11477 = G__11483;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11474);if(temp__4092__auto__)
{var seq__11474__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11474__$1))
{var c__8199__auto__ = cljs.core.chunk_first(seq__11474__$1);{
var G__11484 = cljs.core.chunk_rest(seq__11474__$1);
var G__11485 = c__8199__auto__;
var G__11486 = cljs.core.count(c__8199__auto__);
var G__11487 = 0;
seq__11474 = G__11484;
chunk__11475 = G__11485;
count__11476 = G__11486;
i__11477 = G__11487;
continue;
}
} else
{var vec__11479 = cljs.core.first(seq__11474__$1);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11479,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11479,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11488 = cljs.core.next(seq__11474__$1);
var G__11489 = null;
var G__11490 = 0;
var G__11491 = 0;
seq__11474 = G__11488;
chunk__11475 = G__11489;
count__11476 = G__11490;
i__11477 = G__11491;
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
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$26,(function (elem,_,kvs){var e = jQuery(elem);var seq__11492 = cljs.core.seq(kvs);var chunk__11493 = null;var count__11494 = 0;var i__11495 = 0;while(true){
if((i__11495 < count__11494))
{var vec__11496 = chunk__11493.cljs$core$IIndexed$_nth$arity$2(null,i__11495);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11496,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11496,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11498 = seq__11492;
var G__11499 = chunk__11493;
var G__11500 = count__11494;
var G__11501 = (i__11495 + 1);
seq__11492 = G__11498;
chunk__11493 = G__11499;
count__11494 = G__11500;
i__11495 = G__11501;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11492);if(temp__4092__auto__)
{var seq__11492__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11492__$1))
{var c__8199__auto__ = cljs.core.chunk_first(seq__11492__$1);{
var G__11502 = cljs.core.chunk_rest(seq__11492__$1);
var G__11503 = c__8199__auto__;
var G__11504 = cljs.core.count(c__8199__auto__);
var G__11505 = 0;
seq__11492 = G__11502;
chunk__11493 = G__11503;
count__11494 = G__11504;
i__11495 = G__11505;
continue;
}
} else
{var vec__11497 = cljs.core.first(seq__11492__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11497,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11497,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11506 = cljs.core.next(seq__11492__$1);
var G__11507 = null;
var G__11508 = 0;
var G__11509 = 0;
seq__11492 = G__11506;
chunk__11493 = G__11507;
count__11494 = G__11508;
i__11495 = G__11509;
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__8309__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8310__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8311__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8312__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8313__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("on!",((function (method_table__8309__auto__,prefer_table__8310__auto__,method_cache__8311__auto__,cached_hierarchy__8312__auto__,hierarchy__8313__auto__){
return (function (elem,event,callback){return event;
});})(method_table__8309__auto__,prefer_table__8310__auto__,method_cache__8311__auto__,cached_hierarchy__8312__auto__,hierarchy__8313__auto__))
,cljs.core.constant$keyword$22,hierarchy__8313__auto__,method_table__8309__auto__,prefer_table__8310__auto__,method_cache__8311__auto__,cached_hierarchy__8312__auto__));
})();
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,event,callback){return tailrecursion.hoplon.when_dom(elem,(function (){return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(((function (pool_size){
return (function (G__11536,G__11535){return (G__11535.cljs$core$IFn$_invoke$arity$1 ? G__11535.cljs$core$IFn$_invoke$arity$1(G__11536) : G__11535.call(null,G__11536));
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift(((function (pool_size,items_seq){
return (function (G__11537,G__11538){return (G__11537.cljs$core$IFn$_invoke$arity$1 ? G__11537.cljs$core$IFn$_invoke$arity$1(G__11538) : G__11537.call(null,G__11538));
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__11510_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count){
return (function (G__11540,G__11539){return (G__11539 < G__11540);
});})(pool_size,items_seq,cur_count))
).call(null,cur_count,p1__11510_SHARP_);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__11511_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__11541,G__11543,G__11542){return (G__11541.cljs$core$IFn$_invoke$arity$2 ? G__11541.cljs$core$IFn$_invoke$arity$2(G__11542,G__11543) : G__11541.call(null,G__11542,G__11543));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__11511_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__11557,G__11555,G__11551,G__11552,G__11549,G__11553,G__11548,G__11550,G__11556,G__11554){if(cljs.core.truth_((G__11548 < G__11549)))
{var seq__11544_11558 = cljs.core.seq((G__11550.cljs$core$IFn$_invoke$arity$2 ? G__11550.cljs$core$IFn$_invoke$arity$2(G__11548,G__11549) : G__11550.call(null,G__11548,G__11549)));var chunk__11545_11559 = null;var count__11546_11560 = 0;var i__11547_11561 = 0;while(true){
if(cljs.core.truth_((i__11547_11561 < count__11546_11560)))
{var i_11562 = chunk__11545_11559.cljs$core$IIndexed$_nth$arity$2(null,i__11547_11561);var e_11563 = (G__11551.cljs$core$IFn$_invoke$arity$1 ? G__11551.cljs$core$IFn$_invoke$arity$1((G__11552.cljs$core$IFn$_invoke$arity$1 ? G__11552.cljs$core$IFn$_invoke$arity$1(i_11562) : G__11552.call(null,i_11562))) : G__11551.call(null,(G__11552.cljs$core$IFn$_invoke$arity$1 ? G__11552.cljs$core$IFn$_invoke$arity$1(i_11562) : G__11552.call(null,i_11562)))).call(null,cljs.core.constant$keyword$37,(G__11553.cljs$core$IFn$_invoke$arity$1 ? G__11553.cljs$core$IFn$_invoke$arity$1(i_11562) : G__11553.call(null,i_11562)));if(cljs.core.not(G__11554))
{G__11555.appendChild(e_11563);
} else
{G__11555.insertBefore(e_11563,G__11555.firstChild);
}
{
var G__11564 = seq__11544_11558;
var G__11565 = chunk__11545_11559;
var G__11566 = count__11546_11560;
var G__11567 = (i__11547_11561 + 1);
seq__11544_11558 = G__11564;
chunk__11545_11559 = G__11565;
count__11546_11560 = G__11566;
i__11547_11561 = G__11567;
continue;
}
} else
{var temp__4092__auto___11568 = cljs.core.seq(seq__11544_11558);if(temp__4092__auto___11568)
{var seq__11544_11569__$1 = temp__4092__auto___11568;if(cljs.core.chunked_seq_QMARK_(seq__11544_11569__$1))
{var c__8199__auto___11570 = cljs.core.chunk_first(seq__11544_11569__$1);{
var G__11571 = cljs.core.chunk_rest(seq__11544_11569__$1);
var G__11572 = c__8199__auto___11570;
var G__11573 = cljs.core.count(c__8199__auto___11570);
var G__11574 = 0;
seq__11544_11558 = G__11571;
chunk__11545_11559 = G__11572;
count__11546_11560 = G__11573;
i__11547_11561 = G__11574;
continue;
}
} else
{var i_11575 = cljs.core.first(seq__11544_11569__$1);var e_11576 = (G__11551.cljs$core$IFn$_invoke$arity$1 ? G__11551.cljs$core$IFn$_invoke$arity$1((G__11552.cljs$core$IFn$_invoke$arity$1 ? G__11552.cljs$core$IFn$_invoke$arity$1(i_11575) : G__11552.call(null,i_11575))) : G__11551.call(null,(G__11552.cljs$core$IFn$_invoke$arity$1 ? G__11552.cljs$core$IFn$_invoke$arity$1(i_11575) : G__11552.call(null,i_11575)))).call(null,cljs.core.constant$keyword$37,(G__11553.cljs$core$IFn$_invoke$arity$1 ? G__11553.cljs$core$IFn$_invoke$arity$1(i_11575) : G__11553.call(null,i_11575)));if(cljs.core.not(G__11554))
{G__11555.appendChild(e_11576);
} else
{G__11555.insertBefore(e_11576,G__11555.firstChild);
}
{
var G__11577 = cljs.core.next(seq__11544_11569__$1);
var G__11578 = null;
var G__11579 = 0;
var G__11580 = 0;
seq__11544_11558 = G__11577;
chunk__11545_11559 = G__11578;
count__11546_11560 = G__11579;
i__11547_11561 = G__11580;
continue;
}
}
} else
{}
}
break;
}
return (G__11556.cljs$core$IFn$_invoke$arity$2 ? G__11556.cljs$core$IFn$_invoke$arity$2(G__11557,G__11549) : G__11556.call(null,G__11557,G__11549));
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
var route_cell__0 = (function (){var r = (function (){var ret__8626__auto__ = tailrecursion.javelin.cell(window.location.hash);setInterval(((function (ret__8626__auto__){
return (function (){return cljs.core.reset_BANG_(ret__8626__auto__,window.location.hash);
});})(ret__8626__auto__))
,100);
return tailrecursion.javelin.lift(((function (ret__8626__auto__){
return (function (G__11590){return G__11590;
});})(ret__8626__auto__))
).call(null,ret__8626__auto__);
})();return tailrecursion.javelin.lift(((function (r){
return (function (G__11591,G__11592){if(cljs.core.truth_((G__11591.cljs$core$IFn$_invoke$arity$2 ? G__11591.cljs$core$IFn$_invoke$arity$2("",G__11592) : G__11591.call(null,"",G__11592))))
{return G__11592;
} else
{return null;
}
});})(r))
).call(null,cljs.core.not_EQ_,r);
});
var route_cell__1 = (function (setter_or_dfl){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl)))
{var setter__8627__auto__ = setter_or_dfl;var callback__8628__auto__ = (function (){var or__7443__auto__ = null;if(cljs.core.truth_(or__7443__auto__))
{return or__7443__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8627__auto__,callback__8628__auto__){
return (function (G__11594,G__11593){return G__11593.location.hash = G__11594;
});})(setter__8627__auto__,callback__8628__auto__))
).call(null,setter__8627__auto__,window);
setInterval(((function (setter__8627__auto__,callback__8628__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8627__auto__),window.location.hash))
{(callback__8628__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8628__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8628__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8627__auto__);
} else
{return null;
}
});})(setter__8627__auto__,callback__8628__auto__))
,100);
return setter__8627__auto__;
} else
{var r = route_cell.cljs$core$IFn$_invoke$arity$0();return tailrecursion.javelin.lift(((function (r){
return (function (G__11596,G__11595){var or__7443__auto__ = G__11595;if(cljs.core.truth_(or__7443__auto__))
{return or__7443__auto__;
} else
{return G__11596;
}
});})(r))
).call(null,setter_or_dfl,r);
}
});
var route_cell__2 = (function (setter,callback){var setter__8627__auto__ = setter;var callback__8628__auto__ = (function (){var or__7443__auto__ = callback;if(cljs.core.truth_(or__7443__auto__))
{return or__7443__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8627__auto__,callback__8628__auto__){
return (function (G__11598,G__11597){return G__11597.location.hash = G__11598;
});})(setter__8627__auto__,callback__8628__auto__))
).call(null,setter__8627__auto__,window);
setInterval(((function (setter__8627__auto__,callback__8628__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8627__auto__),window.location.hash))
{(callback__8628__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8628__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8628__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8627__auto__);
} else
{return null;
}
});})(setter__8627__auto__,callback__8628__auto__))
,100);
return setter__8627__auto__;
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
