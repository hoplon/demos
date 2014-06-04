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
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11314_SHARP_){return (p1__11314_SHARP_ instanceof Node);
}):(function (p1__11315_SHARP_){try{return p1__11315_SHARP_.nodeType;
}catch (e11316){if((e11316 instanceof Error))
{var _ = e11316;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11316;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11317_SHARP_){try{return cljs.core.vector_QMARK_(p1__11317_SHARP_);
}catch (e11318){if((e11318 instanceof Error))
{var _ = e11318;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11318;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11319_SHARP_){try{return cljs.core.seq_QMARK_(p1__11319_SHARP_);
}catch (e11320){if((e11320 instanceof Error))
{var _ = e11320;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11320;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_((function (p1__11321_SHARP_){if(cljs.core.truth_((function (){var and__7624__auto__ = console;if(cljs.core.truth_(and__7624__auto__))
{return console.log;
} else
{return and__7624__auto__;
}
})()))
{return console.log(p1__11321_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e11323){if((e11323 instanceof Error))
{var _ = e11323;return not_found;
} else
{if(cljs.core.constant$keyword$6)
{throw e11323;
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
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__11324_SHARP_){if(cljs.core.truth_((function (){var or__7636__auto__ = (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11324_SHARP_) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__11324_SHARP_));if(cljs.core.truth_(or__7636__auto__))
{return or__7636__auto__;
} else
{return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11324_SHARP_) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__11324_SHARP_));
}
})()))
{return unsplice(p1__11324_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11324_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function parse_args(p__11327){var vec__11329 = p__11327;var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11329,0,null);var tail = cljs.core.nthnext(vec__11329,1);var args = vec__11329;var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_,vec__11329,head,tail,args){
return (function (p1__11325_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,p1__11325_SHARP_)));
});})(kw1_QMARK_,vec__11329,head,tail,args))
;var drkw = ((function (kw1_QMARK_,mkkw,vec__11329,head,tail,args){
return (function (p1__11326_SHARP_){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.drop_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4(2,2,cljs.core.PersistentVector.EMPTY,p1__11326_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__11329,head,tail,args))
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
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__11331_SHARP_,p2__11330_SHARP_){var n = (function (){var s = cljs.core.name(p2__11330_SHARP_);var c = cljs.core.last(s);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c)))
{return s;
} else
{return s.slice(0,-1);
}
})();var p = n.substr(0,3);return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__11330_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11331_SHARP_,p)))?n:n.substr(3)));
});var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");var dos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__11332_SHARP_,p2__11333_SHARP_){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11332_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__11333_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__11356_11374 = cljs.core.seq(attr);var chunk__11357_11375 = null;var count__11358_11376 = 0;var i__11359_11377 = 0;while(true){
if((i__11359_11377 < count__11358_11376))
{var vec__11360_11378 = chunk__11357_11375.cljs$core$IIndexed$_nth$arity$2(null,i__11359_11377);var k_11379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11360_11378,0,null);var v_11380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11360_11378,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11380)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11379) : dokey.call(null,k_11379)),v_11380);
} else
{if(cljs.core.fn_QMARK_(v_11380))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11379) : onkey.call(null,k_11379)),v_11380);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11379) : dokey.call(null,k_11379)),v_11380) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11379) : dokey.call(null,k_11379)),v_11380));
} else
{}
}
}
{
var G__11381 = seq__11356_11374;
var G__11382 = chunk__11357_11375;
var G__11383 = count__11358_11376;
var G__11384 = (i__11359_11377 + 1);
seq__11356_11374 = G__11381;
chunk__11357_11375 = G__11382;
count__11358_11376 = G__11383;
i__11359_11377 = G__11384;
continue;
}
} else
{var temp__4092__auto___11385 = cljs.core.seq(seq__11356_11374);if(temp__4092__auto___11385)
{var seq__11356_11386__$1 = temp__4092__auto___11385;if(cljs.core.chunked_seq_QMARK_(seq__11356_11386__$1))
{var c__8392__auto___11387 = cljs.core.chunk_first(seq__11356_11386__$1);{
var G__11388 = cljs.core.chunk_rest(seq__11356_11386__$1);
var G__11389 = c__8392__auto___11387;
var G__11390 = cljs.core.count(c__8392__auto___11387);
var G__11391 = 0;
seq__11356_11374 = G__11388;
chunk__11357_11375 = G__11389;
count__11358_11376 = G__11390;
i__11359_11377 = G__11391;
continue;
}
} else
{var vec__11361_11392 = cljs.core.first(seq__11356_11386__$1);var k_11393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11361_11392,0,null);var v_11394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11361_11392,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11394)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11393) : dokey.call(null,k_11393)),v_11394);
} else
{if(cljs.core.fn_QMARK_(v_11394))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11393) : onkey.call(null,k_11393)),v_11394);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11393) : dokey.call(null,k_11393)),v_11394) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11393) : dokey.call(null,k_11393)),v_11394));
} else
{}
}
}
{
var G__11395 = cljs.core.next(seq__11356_11386__$1);
var G__11396 = null;
var G__11397 = 0;
var G__11398 = 0;
seq__11356_11374 = G__11395;
chunk__11357_11375 = G__11396;
count__11358_11376 = G__11397;
i__11359_11377 = G__11398;
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
return (function (){var seq__11362 = cljs.core.seq(cljs.core.deref(dos));var chunk__11363 = null;var count__11364 = 0;var i__11365 = 0;while(true){
if((i__11365 < count__11364))
{var vec__11366 = chunk__11363.cljs$core$IIndexed$_nth$arity$2(null,i__11365);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11366,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11366,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11362,chunk__11363,count__11364,i__11365,vec__11366,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11335_SHARP_,p2__11336_SHARP_,p3__11337_SHARP_,p4__11334_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11334_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11334_SHARP_));
});})(seq__11362,chunk__11363,count__11364,i__11365,vec__11366,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11399 = seq__11362;
var G__11400 = chunk__11363;
var G__11401 = count__11364;
var G__11402 = (i__11365 + 1);
seq__11362 = G__11399;
chunk__11363 = G__11400;
count__11364 = G__11401;
i__11365 = G__11402;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11362);if(temp__4092__auto__)
{var seq__11362__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11362__$1))
{var c__8392__auto__ = cljs.core.chunk_first(seq__11362__$1);{
var G__11403 = cljs.core.chunk_rest(seq__11362__$1);
var G__11404 = c__8392__auto__;
var G__11405 = cljs.core.count(c__8392__auto__);
var G__11406 = 0;
seq__11362 = G__11403;
chunk__11363 = G__11404;
count__11364 = G__11405;
i__11365 = G__11406;
continue;
}
} else
{var vec__11367 = cljs.core.first(seq__11362__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11367,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11367,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11362,chunk__11363,count__11364,i__11365,vec__11367,k,v,seq__11362__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11335_SHARP_,p2__11336_SHARP_,p3__11337_SHARP_,p4__11334_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11334_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11334_SHARP_));
});})(seq__11362,chunk__11363,count__11364,i__11365,vec__11367,k,v,seq__11362__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11407 = cljs.core.next(seq__11362__$1);
var G__11408 = null;
var G__11409 = 0;
var G__11410 = 0;
seq__11362 = G__11407;
chunk__11363 = G__11408;
count__11364 = G__11409;
i__11365 = G__11410;
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
return (function (){var seq__11368 = cljs.core.seq(cljs.core.deref(ons));var chunk__11369 = null;var count__11370 = 0;var i__11371 = 0;while(true){
if((i__11371 < count__11370))
{var vec__11372 = chunk__11369.cljs$core$IIndexed$_nth$arity$2(null,i__11371);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11372,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11372,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11411 = seq__11368;
var G__11412 = chunk__11369;
var G__11413 = count__11370;
var G__11414 = (i__11371 + 1);
seq__11368 = G__11411;
chunk__11369 = G__11412;
count__11370 = G__11413;
i__11371 = G__11414;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11368);if(temp__4092__auto__)
{var seq__11368__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11368__$1))
{var c__8392__auto__ = cljs.core.chunk_first(seq__11368__$1);{
var G__11415 = cljs.core.chunk_rest(seq__11368__$1);
var G__11416 = c__8392__auto__;
var G__11417 = cljs.core.count(c__8392__auto__);
var G__11418 = 0;
seq__11368 = G__11415;
chunk__11369 = G__11416;
count__11370 = G__11417;
i__11371 = G__11418;
continue;
}
} else
{var vec__11373 = cljs.core.first(seq__11368__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11373,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11373,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11419 = cljs.core.next(seq__11368__$1);
var G__11420 = null;
var G__11421 = 0;
var G__11422 = 0;
seq__11368 = G__11419;
chunk__11369 = G__11420;
count__11370 = G__11421;
i__11371 = G__11422;
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
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11423_SHARP_,p2__11424_SHARP_){return p1__11423_SHARP_.appendChild(p2__11424_SHARP_);
}):(function (p1__11425_SHARP_,p2__11426_SHARP_){try{return p1__11425_SHARP_.appendChild(p2__11426_SHARP_);
}catch (e11427){if((e11427 instanceof Error))
{var _ = e11427;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11427;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){jQuery(this$).empty();
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))) : tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__11433){var vec__11439 = p__11433;var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11439,0,null);var _ = cljs.core.nthnext(vec__11439,1);var kids = vec__11439;if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell)))
{tailrecursion.hoplon.replace_children_BANG_(this$,cljs.core.deref(child_cell));
cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__11439,child_cell,_,kids){
return (function (p1__11429_SHARP_,p2__11430_SHARP_,p3__11431_SHARP_,p4__11428_SHARP_){return tailrecursion.hoplon.replace_children_BANG_(this$,p4__11428_SHARP_);
});})(vec__11439,child_cell,_,kids))
);
} else
{var node_11444 = ((function (vec__11439,child_cell,_,kids){
return (function (p1__11432_SHARP_){if(typeof p1__11432_SHARP_ === 'string')
{return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__11432_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__11432_SHARP_));
} else
{if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__11432_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__11432_SHARP_))))
{return p1__11432_SHARP_;
} else
{return null;
}
}
});})(vec__11439,child_cell,_,kids))
;var seq__11440_11445 = cljs.core.seq(cljs.core.keep(node_11444,tailrecursion.hoplon.unsplice(kids)));var chunk__11441_11446 = null;var count__11442_11447 = 0;var i__11443_11448 = 0;while(true){
if((i__11443_11448 < count__11442_11447))
{var x_11449 = chunk__11441_11446.cljs$core$IIndexed$_nth$arity$2(null,i__11443_11448);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11449) : tailrecursion.hoplon.append_child.call(null,this$,x_11449));
{
var G__11450 = seq__11440_11445;
var G__11451 = chunk__11441_11446;
var G__11452 = count__11442_11447;
var G__11453 = (i__11443_11448 + 1);
seq__11440_11445 = G__11450;
chunk__11441_11446 = G__11451;
count__11442_11447 = G__11452;
i__11443_11448 = G__11453;
continue;
}
} else
{var temp__4092__auto___11454 = cljs.core.seq(seq__11440_11445);if(temp__4092__auto___11454)
{var seq__11440_11455__$1 = temp__4092__auto___11454;if(cljs.core.chunked_seq_QMARK_(seq__11440_11455__$1))
{var c__8392__auto___11456 = cljs.core.chunk_first(seq__11440_11455__$1);{
var G__11457 = cljs.core.chunk_rest(seq__11440_11455__$1);
var G__11458 = c__8392__auto___11456;
var G__11459 = cljs.core.count(c__8392__auto___11456);
var G__11460 = 0;
seq__11440_11445 = G__11457;
chunk__11441_11446 = G__11458;
count__11442_11447 = G__11459;
i__11443_11448 = G__11460;
continue;
}
} else
{var x_11461 = cljs.core.first(seq__11440_11455__$1);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11461) : tailrecursion.hoplon.append_child.call(null,this$,x_11461));
{
var G__11462 = cljs.core.next(seq__11440_11455__$1);
var G__11463 = null;
var G__11464 = 0;
var G__11465 = 0;
seq__11440_11445 = G__11462;
chunk__11441_11446 = G__11463;
count__11442_11447 = G__11464;
i__11443_11448 = G__11465;
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
var G__11473__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__11467 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11467,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11467,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11468 = this$;G__11468.hoplonIFn(attr,kids);
return G__11468;
} else
{var G__11469 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11469,attr);
tailrecursion.hoplon.add_children_BANG_(G__11469,kids);
return G__11469;
}
};
var G__11473 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11473__delegate.call(this,self__,args);};
G__11473.cljs$lang$maxFixedArity = 1;
G__11473.cljs$lang$applyTo = (function (arglist__11474){
var self__ = cljs.core.first(arglist__11474);
var args = cljs.core.rest(arglist__11474);
return G__11473__delegate(self__,args);
});
G__11473.cljs$core$IFn$_invoke$arity$variadic = G__11473__delegate;
return G__11473;
})()
;
Element.prototype.apply = (function (self__,args11466){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11466)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11475__delegate = function (args){var this$ = this;var vec__11470 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11470,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11470,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11471 = this$;G__11471.hoplonIFn(attr,kids);
return G__11471;
} else
{var G__11472 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11472,attr);
tailrecursion.hoplon.add_children_BANG_(G__11472,kids);
return G__11472;
}
};
var G__11475 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11475__delegate.call(this,args);};
G__11475.cljs$lang$maxFixedArity = 0;
G__11475.cljs$lang$applyTo = (function (arglist__11476){
var args = cljs.core.seq(arglist__11476);
return G__11475__delegate(args);
});
G__11475.cljs$core$IFn$_invoke$arity$variadic = G__11475__delegate;
return G__11475;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__11477__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new$,args);
};
var G__11477 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11477__delegate.call(this,args);};
G__11477.cljs$lang$maxFixedArity = 0;
G__11477.cljs$lang$applyTo = (function (arglist__11478){
var args = cljs.core.seq(arglist__11478);
return G__11477__delegate(args);
});
G__11477.cljs$core$IFn$_invoke$arity$variadic = G__11477__delegate;
return G__11477;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__11479__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__11479 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11479__delegate.call(this,args);};
G__11479.cljs$lang$maxFixedArity = 0;
G__11479.cljs$lang$applyTo = (function (arglist__11480){
var args = cljs.core.seq(arglist__11480);
return G__11479__delegate(args);
});
G__11479.cljs$core$IFn$_invoke$arity$variadic = G__11479__delegate;
return G__11479;
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
tailrecursion.hoplon.$text = (function $text(p1__11481_SHARP_){return document.createTextNode(p1__11481_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__11482_SHARP_){return document.createComment(p1__11482_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.initialized_QMARK_)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__11483_SHARP_){return p1__11483_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_(tailrecursion.hoplon.initialized_QMARK_,true);
var seq__11488 = cljs.core.seq(cljs.core.deref(tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__11489 = null;var count__11490 = 0;var i__11491 = 0;while(true){
if((i__11491 < count__11490))
{var f = chunk__11489.cljs$core$IIndexed$_nth$arity$2(null,i__11491);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11492 = seq__11488;
var G__11493 = chunk__11489;
var G__11494 = count__11490;
var G__11495 = (i__11491 + 1);
seq__11488 = G__11492;
chunk__11489 = G__11493;
count__11490 = G__11494;
i__11491 = G__11495;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11488);if(temp__4092__auto__)
{var seq__11488__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11488__$1))
{var c__8392__auto__ = cljs.core.chunk_first(seq__11488__$1);{
var G__11496 = cljs.core.chunk_rest(seq__11488__$1);
var G__11497 = c__8392__auto__;
var G__11498 = cljs.core.count(c__8392__auto__);
var G__11499 = 0;
seq__11488 = G__11496;
chunk__11489 = G__11497;
count__11490 = G__11498;
i__11491 = G__11499;
continue;
}
} else
{var f = cljs.core.first(seq__11488__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11500 = cljs.core.next(seq__11488__$1);
var G__11501 = null;
var G__11502 = 0;
var G__11503 = 0;
seq__11488 = G__11500;
chunk__11489 = G__11501;
count__11490 = G__11502;
i__11491 = G__11503;
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__8502__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8503__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8504__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8505__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8506__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("do!",((function (method_table__8502__auto__,prefer_table__8503__auto__,method_cache__8504__auto__,cached_hierarchy__8505__auto__,hierarchy__8506__auto__){
return (function (elem,key,val){return key;
});})(method_table__8502__auto__,prefer_table__8503__auto__,method_cache__8504__auto__,cached_hierarchy__8505__auto__,hierarchy__8506__auto__))
,cljs.core.constant$keyword$22,hierarchy__8506__auto__,method_table__8502__auto__,prefer_table__8503__auto__,method_cache__8504__auto__,cached_hierarchy__8505__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,key,val){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$11,(function() { 
var G__11504__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__11504 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11504__delegate.call(this,elem,_,args);};
G__11504.cljs$lang$maxFixedArity = 2;
G__11504.cljs$lang$applyTo = (function (arglist__11505){
var elem = cljs.core.first(arglist__11505);
arglist__11505 = cljs.core.next(arglist__11505);
var _ = cljs.core.first(arglist__11505);
var args = cljs.core.rest(arglist__11505);
return G__11504__delegate(elem,_,args);
});
G__11504.cljs$core$IFn$_invoke$arity$variadic = G__11504__delegate;
return G__11504;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$24,(function (elem,_,kvs){var e = jQuery(elem);var seq__11506 = cljs.core.seq(kvs);var chunk__11507 = null;var count__11508 = 0;var i__11509 = 0;while(true){
if((i__11509 < count__11508))
{var vec__11510 = chunk__11507.cljs$core$IIndexed$_nth$arity$2(null,i__11509);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11510,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11510,1,null);var k_11512__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11512__$1);
} else
{e.attr(k_11512__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11512__$1:v));
}
{
var G__11513 = seq__11506;
var G__11514 = chunk__11507;
var G__11515 = count__11508;
var G__11516 = (i__11509 + 1);
seq__11506 = G__11513;
chunk__11507 = G__11514;
count__11508 = G__11515;
i__11509 = G__11516;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11506);if(temp__4092__auto__)
{var seq__11506__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11506__$1))
{var c__8392__auto__ = cljs.core.chunk_first(seq__11506__$1);{
var G__11517 = cljs.core.chunk_rest(seq__11506__$1);
var G__11518 = c__8392__auto__;
var G__11519 = cljs.core.count(c__8392__auto__);
var G__11520 = 0;
seq__11506 = G__11517;
chunk__11507 = G__11518;
count__11508 = G__11519;
i__11509 = G__11520;
continue;
}
} else
{var vec__11511 = cljs.core.first(seq__11506__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11511,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11511,1,null);var k_11521__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11521__$1);
} else
{e.attr(k_11521__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11521__$1:v));
}
{
var G__11522 = cljs.core.next(seq__11506__$1);
var G__11523 = null;
var G__11524 = 0;
var G__11525 = 0;
seq__11506 = G__11522;
chunk__11507 = G__11523;
count__11508 = G__11524;
i__11509 = G__11525;
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
return (function (p1__11526_SHARP_){return cljs.core.zipmap(p1__11526_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));var seq__11527 = cljs.core.seq(clmap);var chunk__11528 = null;var count__11529 = 0;var i__11530 = 0;while(true){
if((i__11530 < count__11529))
{var vec__11531 = chunk__11528.cljs$core$IIndexed$_nth$arity$2(null,i__11530);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11531,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11531,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11533 = seq__11527;
var G__11534 = chunk__11528;
var G__11535 = count__11529;
var G__11536 = (i__11530 + 1);
seq__11527 = G__11533;
chunk__11528 = G__11534;
count__11529 = G__11535;
i__11530 = G__11536;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11527);if(temp__4092__auto__)
{var seq__11527__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11527__$1))
{var c__8392__auto__ = cljs.core.chunk_first(seq__11527__$1);{
var G__11537 = cljs.core.chunk_rest(seq__11527__$1);
var G__11538 = c__8392__auto__;
var G__11539 = cljs.core.count(c__8392__auto__);
var G__11540 = 0;
seq__11527 = G__11537;
chunk__11528 = G__11538;
count__11529 = G__11539;
i__11530 = G__11540;
continue;
}
} else
{var vec__11532 = cljs.core.first(seq__11527__$1);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11532,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11532,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11541 = cljs.core.next(seq__11527__$1);
var G__11542 = null;
var G__11543 = 0;
var G__11544 = 0;
seq__11527 = G__11541;
chunk__11528 = G__11542;
count__11529 = G__11543;
i__11530 = G__11544;
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
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$26,(function (elem,_,kvs){var e = jQuery(elem);var seq__11545 = cljs.core.seq(kvs);var chunk__11546 = null;var count__11547 = 0;var i__11548 = 0;while(true){
if((i__11548 < count__11547))
{var vec__11549 = chunk__11546.cljs$core$IIndexed$_nth$arity$2(null,i__11548);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11549,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11549,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11551 = seq__11545;
var G__11552 = chunk__11546;
var G__11553 = count__11547;
var G__11554 = (i__11548 + 1);
seq__11545 = G__11551;
chunk__11546 = G__11552;
count__11547 = G__11553;
i__11548 = G__11554;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11545);if(temp__4092__auto__)
{var seq__11545__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11545__$1))
{var c__8392__auto__ = cljs.core.chunk_first(seq__11545__$1);{
var G__11555 = cljs.core.chunk_rest(seq__11545__$1);
var G__11556 = c__8392__auto__;
var G__11557 = cljs.core.count(c__8392__auto__);
var G__11558 = 0;
seq__11545 = G__11555;
chunk__11546 = G__11556;
count__11547 = G__11557;
i__11548 = G__11558;
continue;
}
} else
{var vec__11550 = cljs.core.first(seq__11545__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11550,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11550,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11559 = cljs.core.next(seq__11545__$1);
var G__11560 = null;
var G__11561 = 0;
var G__11562 = 0;
seq__11545 = G__11559;
chunk__11546 = G__11560;
count__11547 = G__11561;
i__11548 = G__11562;
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__8502__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8503__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8504__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8505__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8506__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("on!",((function (method_table__8502__auto__,prefer_table__8503__auto__,method_cache__8504__auto__,cached_hierarchy__8505__auto__,hierarchy__8506__auto__){
return (function (elem,event,callback){return event;
});})(method_table__8502__auto__,prefer_table__8503__auto__,method_cache__8504__auto__,cached_hierarchy__8505__auto__,hierarchy__8506__auto__))
,cljs.core.constant$keyword$22,hierarchy__8506__auto__,method_table__8502__auto__,prefer_table__8503__auto__,method_cache__8504__auto__,cached_hierarchy__8505__auto__));
})();
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,event,callback){return tailrecursion.hoplon.when_dom(elem,(function (){return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(((function (pool_size){
return (function (G__11589,G__11588){return (G__11588.cljs$core$IFn$_invoke$arity$1 ? G__11588.cljs$core$IFn$_invoke$arity$1(G__11589) : G__11588.call(null,G__11589));
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift(((function (pool_size,items_seq){
return (function (G__11590,G__11591){return (G__11590.cljs$core$IFn$_invoke$arity$1 ? G__11590.cljs$core$IFn$_invoke$arity$1(G__11591) : G__11590.call(null,G__11591));
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__11563_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count){
return (function (G__11592,G__11593){return (G__11592 < G__11593);
});})(pool_size,items_seq,cur_count))
).call(null,p1__11563_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__11564_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__11594,G__11596,G__11595){return (G__11594.cljs$core$IFn$_invoke$arity$2 ? G__11594.cljs$core$IFn$_invoke$arity$2(G__11595,G__11596) : G__11594.call(null,G__11595,G__11596));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__11564_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__11610,G__11608,G__11604,G__11605,G__11602,G__11606,G__11601,G__11603,G__11609,G__11607){if(cljs.core.truth_((G__11601 < G__11602)))
{var seq__11597_11611 = cljs.core.seq((G__11603.cljs$core$IFn$_invoke$arity$2 ? G__11603.cljs$core$IFn$_invoke$arity$2(G__11601,G__11602) : G__11603.call(null,G__11601,G__11602)));var chunk__11598_11612 = null;var count__11599_11613 = 0;var i__11600_11614 = 0;while(true){
if(cljs.core.truth_((i__11600_11614 < count__11599_11613)))
{var i_11615 = chunk__11598_11612.cljs$core$IIndexed$_nth$arity$2(null,i__11600_11614);var e_11616 = (G__11604.cljs$core$IFn$_invoke$arity$1 ? G__11604.cljs$core$IFn$_invoke$arity$1((G__11605.cljs$core$IFn$_invoke$arity$1 ? G__11605.cljs$core$IFn$_invoke$arity$1(i_11615) : G__11605.call(null,i_11615))) : G__11604.call(null,(G__11605.cljs$core$IFn$_invoke$arity$1 ? G__11605.cljs$core$IFn$_invoke$arity$1(i_11615) : G__11605.call(null,i_11615)))).call(null,cljs.core.constant$keyword$37,(G__11606.cljs$core$IFn$_invoke$arity$1 ? G__11606.cljs$core$IFn$_invoke$arity$1(i_11615) : G__11606.call(null,i_11615)));if(cljs.core.not(G__11607))
{G__11608.appendChild(e_11616);
} else
{G__11608.insertBefore(e_11616,G__11608.firstChild);
}
{
var G__11617 = seq__11597_11611;
var G__11618 = chunk__11598_11612;
var G__11619 = count__11599_11613;
var G__11620 = (i__11600_11614 + 1);
seq__11597_11611 = G__11617;
chunk__11598_11612 = G__11618;
count__11599_11613 = G__11619;
i__11600_11614 = G__11620;
continue;
}
} else
{var temp__4092__auto___11621 = cljs.core.seq(seq__11597_11611);if(temp__4092__auto___11621)
{var seq__11597_11622__$1 = temp__4092__auto___11621;if(cljs.core.chunked_seq_QMARK_(seq__11597_11622__$1))
{var c__8392__auto___11623 = cljs.core.chunk_first(seq__11597_11622__$1);{
var G__11624 = cljs.core.chunk_rest(seq__11597_11622__$1);
var G__11625 = c__8392__auto___11623;
var G__11626 = cljs.core.count(c__8392__auto___11623);
var G__11627 = 0;
seq__11597_11611 = G__11624;
chunk__11598_11612 = G__11625;
count__11599_11613 = G__11626;
i__11600_11614 = G__11627;
continue;
}
} else
{var i_11628 = cljs.core.first(seq__11597_11622__$1);var e_11629 = (G__11604.cljs$core$IFn$_invoke$arity$1 ? G__11604.cljs$core$IFn$_invoke$arity$1((G__11605.cljs$core$IFn$_invoke$arity$1 ? G__11605.cljs$core$IFn$_invoke$arity$1(i_11628) : G__11605.call(null,i_11628))) : G__11604.call(null,(G__11605.cljs$core$IFn$_invoke$arity$1 ? G__11605.cljs$core$IFn$_invoke$arity$1(i_11628) : G__11605.call(null,i_11628)))).call(null,cljs.core.constant$keyword$37,(G__11606.cljs$core$IFn$_invoke$arity$1 ? G__11606.cljs$core$IFn$_invoke$arity$1(i_11628) : G__11606.call(null,i_11628)));if(cljs.core.not(G__11607))
{G__11608.appendChild(e_11629);
} else
{G__11608.insertBefore(e_11629,G__11608.firstChild);
}
{
var G__11630 = cljs.core.next(seq__11597_11622__$1);
var G__11631 = null;
var G__11632 = 0;
var G__11633 = 0;
seq__11597_11611 = G__11630;
chunk__11598_11612 = G__11631;
count__11599_11613 = G__11632;
i__11600_11614 = G__11633;
continue;
}
}
} else
{}
}
break;
}
return (G__11609.cljs$core$IFn$_invoke$arity$2 ? G__11609.cljs$core$IFn$_invoke$arity$2(G__11610,G__11602) : G__11609.call(null,G__11610,G__11602));
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
var route_cell__0 = (function (){var r = (function (){var ret__8819__auto__ = tailrecursion.javelin.cell(window.location.hash);setInterval(((function (ret__8819__auto__){
return (function (){return cljs.core.reset_BANG_(ret__8819__auto__,window.location.hash);
});})(ret__8819__auto__))
,100);
return tailrecursion.javelin.lift(((function (ret__8819__auto__){
return (function (G__11643){return G__11643;
});})(ret__8819__auto__))
).call(null,ret__8819__auto__);
})();return tailrecursion.javelin.lift(((function (r){
return (function (G__11644,G__11645){if(cljs.core.truth_((G__11644.cljs$core$IFn$_invoke$arity$2 ? G__11644.cljs$core$IFn$_invoke$arity$2("",G__11645) : G__11644.call(null,"",G__11645))))
{return G__11645;
} else
{return null;
}
});})(r))
).call(null,cljs.core.not_EQ_,r);
});
var route_cell__1 = (function (setter_or_dfl){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl)))
{var setter__8820__auto__ = setter_or_dfl;var callback__8821__auto__ = (function (){var or__7636__auto__ = null;if(cljs.core.truth_(or__7636__auto__))
{return or__7636__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8820__auto__,callback__8821__auto__){
return (function (G__11646,G__11647){return G__11646.location.hash = G__11647;
});})(setter__8820__auto__,callback__8821__auto__))
).call(null,window,setter__8820__auto__);
setInterval(((function (setter__8820__auto__,callback__8821__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8820__auto__),window.location.hash))
{(callback__8821__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8821__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8821__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8820__auto__);
} else
{return null;
}
});})(setter__8820__auto__,callback__8821__auto__))
,100);
return setter__8820__auto__;
} else
{var r = route_cell.cljs$core$IFn$_invoke$arity$0();return tailrecursion.javelin.lift(((function (r){
return (function (G__11649,G__11648){var or__7636__auto__ = G__11648;if(cljs.core.truth_(or__7636__auto__))
{return or__7636__auto__;
} else
{return G__11649;
}
});})(r))
).call(null,setter_or_dfl,r);
}
});
var route_cell__2 = (function (setter,callback){var setter__8820__auto__ = setter;var callback__8821__auto__ = (function (){var or__7636__auto__ = callback;if(cljs.core.truth_(or__7636__auto__))
{return or__7636__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8820__auto__,callback__8821__auto__){
return (function (G__11650,G__11651){return G__11650.location.hash = G__11651;
});})(setter__8820__auto__,callback__8821__auto__))
).call(null,window,setter__8820__auto__);
setInterval(((function (setter__8820__auto__,callback__8821__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8820__auto__),window.location.hash))
{(callback__8821__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8821__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8821__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8820__auto__);
} else
{return null;
}
});})(setter__8820__auto__,callback__8821__auto__))
,100);
return setter__8820__auto__;
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
