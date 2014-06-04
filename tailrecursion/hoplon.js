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
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11308_SHARP_){return (p1__11308_SHARP_ instanceof Node);
}):(function (p1__11309_SHARP_){try{return p1__11309_SHARP_.nodeType;
}catch (e11310){if((e11310 instanceof Error))
{var _ = e11310;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11310;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11311_SHARP_){try{return cljs.core.vector_QMARK_(p1__11311_SHARP_);
}catch (e11312){if((e11312 instanceof Error))
{var _ = e11312;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11312;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11313_SHARP_){try{return cljs.core.seq_QMARK_(p1__11313_SHARP_);
}catch (e11314){if((e11314 instanceof Error))
{var _ = e11314;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11314;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_((function (p1__11315_SHARP_){if(cljs.core.truth_((function (){var and__7442__auto__ = console;if(cljs.core.truth_(and__7442__auto__))
{return console.log;
} else
{return and__7442__auto__;
}
})()))
{return console.log(p1__11315_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e11317){if((e11317 instanceof Error))
{var _ = e11317;return not_found;
} else
{if(cljs.core.constant$keyword$6)
{throw e11317;
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
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__11318_SHARP_){if(cljs.core.truth_((function (){var or__7454__auto__ = (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11318_SHARP_) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__11318_SHARP_));if(cljs.core.truth_(or__7454__auto__))
{return or__7454__auto__;
} else
{return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11318_SHARP_) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__11318_SHARP_));
}
})()))
{return unsplice(p1__11318_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11318_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function parse_args(p__11321){var vec__11323 = p__11321;var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11323,0,null);var tail = cljs.core.nthnext(vec__11323,1);var args = vec__11323;var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_,vec__11323,head,tail,args){
return (function (p1__11319_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,p1__11319_SHARP_)));
});})(kw1_QMARK_,vec__11323,head,tail,args))
;var drkw = ((function (kw1_QMARK_,mkkw,vec__11323,head,tail,args){
return (function (p1__11320_SHARP_){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.drop_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4(2,2,cljs.core.PersistentVector.EMPTY,p1__11320_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__11323,head,tail,args))
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
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__11325_SHARP_,p2__11324_SHARP_){var n = (function (){var s = cljs.core.name(p2__11324_SHARP_);var c = cljs.core.last(s);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c)))
{return s;
} else
{return s.slice(0,-1);
}
})();var p = n.substr(0,3);return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__11324_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11325_SHARP_,p)))?n:n.substr(3)));
});var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");var dos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__11326_SHARP_,p2__11327_SHARP_){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11326_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__11327_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__11350_11368 = cljs.core.seq(attr);var chunk__11351_11369 = null;var count__11352_11370 = 0;var i__11353_11371 = 0;while(true){
if((i__11353_11371 < count__11352_11370))
{var vec__11354_11372 = chunk__11351_11369.cljs$core$IIndexed$_nth$arity$2(null,i__11353_11371);var k_11373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11354_11372,0,null);var v_11374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11354_11372,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11374)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11373) : dokey.call(null,k_11373)),v_11374);
} else
{if(cljs.core.fn_QMARK_(v_11374))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11373) : onkey.call(null,k_11373)),v_11374);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11373) : dokey.call(null,k_11373)),v_11374) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11373) : dokey.call(null,k_11373)),v_11374));
} else
{}
}
}
{
var G__11375 = seq__11350_11368;
var G__11376 = chunk__11351_11369;
var G__11377 = count__11352_11370;
var G__11378 = (i__11353_11371 + 1);
seq__11350_11368 = G__11375;
chunk__11351_11369 = G__11376;
count__11352_11370 = G__11377;
i__11353_11371 = G__11378;
continue;
}
} else
{var temp__4092__auto___11379 = cljs.core.seq(seq__11350_11368);if(temp__4092__auto___11379)
{var seq__11350_11380__$1 = temp__4092__auto___11379;if(cljs.core.chunked_seq_QMARK_(seq__11350_11380__$1))
{var c__8210__auto___11381 = cljs.core.chunk_first(seq__11350_11380__$1);{
var G__11382 = cljs.core.chunk_rest(seq__11350_11380__$1);
var G__11383 = c__8210__auto___11381;
var G__11384 = cljs.core.count(c__8210__auto___11381);
var G__11385 = 0;
seq__11350_11368 = G__11382;
chunk__11351_11369 = G__11383;
count__11352_11370 = G__11384;
i__11353_11371 = G__11385;
continue;
}
} else
{var vec__11355_11386 = cljs.core.first(seq__11350_11380__$1);var k_11387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11355_11386,0,null);var v_11388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11355_11386,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11388)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11387) : dokey.call(null,k_11387)),v_11388);
} else
{if(cljs.core.fn_QMARK_(v_11388))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11387) : onkey.call(null,k_11387)),v_11388);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11387) : dokey.call(null,k_11387)),v_11388) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11387) : dokey.call(null,k_11387)),v_11388));
} else
{}
}
}
{
var G__11389 = cljs.core.next(seq__11350_11380__$1);
var G__11390 = null;
var G__11391 = 0;
var G__11392 = 0;
seq__11350_11368 = G__11389;
chunk__11351_11369 = G__11390;
count__11352_11370 = G__11391;
i__11353_11371 = G__11392;
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
return (function (){var seq__11356 = cljs.core.seq(cljs.core.deref(dos));var chunk__11357 = null;var count__11358 = 0;var i__11359 = 0;while(true){
if((i__11359 < count__11358))
{var vec__11360 = chunk__11357.cljs$core$IIndexed$_nth$arity$2(null,i__11359);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11360,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11360,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11356,chunk__11357,count__11358,i__11359,vec__11360,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11329_SHARP_,p2__11330_SHARP_,p3__11331_SHARP_,p4__11328_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11328_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11328_SHARP_));
});})(seq__11356,chunk__11357,count__11358,i__11359,vec__11360,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11393 = seq__11356;
var G__11394 = chunk__11357;
var G__11395 = count__11358;
var G__11396 = (i__11359 + 1);
seq__11356 = G__11393;
chunk__11357 = G__11394;
count__11358 = G__11395;
i__11359 = G__11396;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11356);if(temp__4092__auto__)
{var seq__11356__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11356__$1))
{var c__8210__auto__ = cljs.core.chunk_first(seq__11356__$1);{
var G__11397 = cljs.core.chunk_rest(seq__11356__$1);
var G__11398 = c__8210__auto__;
var G__11399 = cljs.core.count(c__8210__auto__);
var G__11400 = 0;
seq__11356 = G__11397;
chunk__11357 = G__11398;
count__11358 = G__11399;
i__11359 = G__11400;
continue;
}
} else
{var vec__11361 = cljs.core.first(seq__11356__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11361,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11361,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11356,chunk__11357,count__11358,i__11359,vec__11361,k,v,seq__11356__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11329_SHARP_,p2__11330_SHARP_,p3__11331_SHARP_,p4__11328_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11328_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11328_SHARP_));
});})(seq__11356,chunk__11357,count__11358,i__11359,vec__11361,k,v,seq__11356__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11401 = cljs.core.next(seq__11356__$1);
var G__11402 = null;
var G__11403 = 0;
var G__11404 = 0;
seq__11356 = G__11401;
chunk__11357 = G__11402;
count__11358 = G__11403;
i__11359 = G__11404;
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
return (function (){var seq__11362 = cljs.core.seq(cljs.core.deref(ons));var chunk__11363 = null;var count__11364 = 0;var i__11365 = 0;while(true){
if((i__11365 < count__11364))
{var vec__11366 = chunk__11363.cljs$core$IIndexed$_nth$arity$2(null,i__11365);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11366,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11366,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11405 = seq__11362;
var G__11406 = chunk__11363;
var G__11407 = count__11364;
var G__11408 = (i__11365 + 1);
seq__11362 = G__11405;
chunk__11363 = G__11406;
count__11364 = G__11407;
i__11365 = G__11408;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11362);if(temp__4092__auto__)
{var seq__11362__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11362__$1))
{var c__8210__auto__ = cljs.core.chunk_first(seq__11362__$1);{
var G__11409 = cljs.core.chunk_rest(seq__11362__$1);
var G__11410 = c__8210__auto__;
var G__11411 = cljs.core.count(c__8210__auto__);
var G__11412 = 0;
seq__11362 = G__11409;
chunk__11363 = G__11410;
count__11364 = G__11411;
i__11365 = G__11412;
continue;
}
} else
{var vec__11367 = cljs.core.first(seq__11362__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11367,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11367,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11413 = cljs.core.next(seq__11362__$1);
var G__11414 = null;
var G__11415 = 0;
var G__11416 = 0;
seq__11362 = G__11413;
chunk__11363 = G__11414;
count__11364 = G__11415;
i__11365 = G__11416;
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
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11417_SHARP_,p2__11418_SHARP_){return p1__11417_SHARP_.appendChild(p2__11418_SHARP_);
}):(function (p1__11419_SHARP_,p2__11420_SHARP_){try{return p1__11419_SHARP_.appendChild(p2__11420_SHARP_);
}catch (e11421){if((e11421 instanceof Error))
{var _ = e11421;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11421;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){jQuery(this$).empty();
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))) : tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__11427){var vec__11433 = p__11427;var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11433,0,null);var _ = cljs.core.nthnext(vec__11433,1);var kids = vec__11433;if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell)))
{tailrecursion.hoplon.replace_children_BANG_(this$,cljs.core.deref(child_cell));
cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__11433,child_cell,_,kids){
return (function (p1__11423_SHARP_,p2__11424_SHARP_,p3__11425_SHARP_,p4__11422_SHARP_){return tailrecursion.hoplon.replace_children_BANG_(this$,p4__11422_SHARP_);
});})(vec__11433,child_cell,_,kids))
);
} else
{var node_11438 = ((function (vec__11433,child_cell,_,kids){
return (function (p1__11426_SHARP_){if(typeof p1__11426_SHARP_ === 'string')
{return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__11426_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__11426_SHARP_));
} else
{if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__11426_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__11426_SHARP_))))
{return p1__11426_SHARP_;
} else
{return null;
}
}
});})(vec__11433,child_cell,_,kids))
;var seq__11434_11439 = cljs.core.seq(cljs.core.keep(node_11438,tailrecursion.hoplon.unsplice(kids)));var chunk__11435_11440 = null;var count__11436_11441 = 0;var i__11437_11442 = 0;while(true){
if((i__11437_11442 < count__11436_11441))
{var x_11443 = chunk__11435_11440.cljs$core$IIndexed$_nth$arity$2(null,i__11437_11442);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11443) : tailrecursion.hoplon.append_child.call(null,this$,x_11443));
{
var G__11444 = seq__11434_11439;
var G__11445 = chunk__11435_11440;
var G__11446 = count__11436_11441;
var G__11447 = (i__11437_11442 + 1);
seq__11434_11439 = G__11444;
chunk__11435_11440 = G__11445;
count__11436_11441 = G__11446;
i__11437_11442 = G__11447;
continue;
}
} else
{var temp__4092__auto___11448 = cljs.core.seq(seq__11434_11439);if(temp__4092__auto___11448)
{var seq__11434_11449__$1 = temp__4092__auto___11448;if(cljs.core.chunked_seq_QMARK_(seq__11434_11449__$1))
{var c__8210__auto___11450 = cljs.core.chunk_first(seq__11434_11449__$1);{
var G__11451 = cljs.core.chunk_rest(seq__11434_11449__$1);
var G__11452 = c__8210__auto___11450;
var G__11453 = cljs.core.count(c__8210__auto___11450);
var G__11454 = 0;
seq__11434_11439 = G__11451;
chunk__11435_11440 = G__11452;
count__11436_11441 = G__11453;
i__11437_11442 = G__11454;
continue;
}
} else
{var x_11455 = cljs.core.first(seq__11434_11449__$1);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11455) : tailrecursion.hoplon.append_child.call(null,this$,x_11455));
{
var G__11456 = cljs.core.next(seq__11434_11449__$1);
var G__11457 = null;
var G__11458 = 0;
var G__11459 = 0;
seq__11434_11439 = G__11456;
chunk__11435_11440 = G__11457;
count__11436_11441 = G__11458;
i__11437_11442 = G__11459;
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
var G__11467__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__11461 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11461,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11461,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11462 = this$;G__11462.hoplonIFn(attr,kids);
return G__11462;
} else
{var G__11463 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11463,attr);
tailrecursion.hoplon.add_children_BANG_(G__11463,kids);
return G__11463;
}
};
var G__11467 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11467__delegate.call(this,self__,args);};
G__11467.cljs$lang$maxFixedArity = 1;
G__11467.cljs$lang$applyTo = (function (arglist__11468){
var self__ = cljs.core.first(arglist__11468);
var args = cljs.core.rest(arglist__11468);
return G__11467__delegate(self__,args);
});
G__11467.cljs$core$IFn$_invoke$arity$variadic = G__11467__delegate;
return G__11467;
})()
;
Element.prototype.apply = (function (self__,args11460){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11460)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11469__delegate = function (args){var this$ = this;var vec__11464 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11464,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11464,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11465 = this$;G__11465.hoplonIFn(attr,kids);
return G__11465;
} else
{var G__11466 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11466,attr);
tailrecursion.hoplon.add_children_BANG_(G__11466,kids);
return G__11466;
}
};
var G__11469 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11469__delegate.call(this,args);};
G__11469.cljs$lang$maxFixedArity = 0;
G__11469.cljs$lang$applyTo = (function (arglist__11470){
var args = cljs.core.seq(arglist__11470);
return G__11469__delegate(args);
});
G__11469.cljs$core$IFn$_invoke$arity$variadic = G__11469__delegate;
return G__11469;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__11471__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new$,args);
};
var G__11471 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11471__delegate.call(this,args);};
G__11471.cljs$lang$maxFixedArity = 0;
G__11471.cljs$lang$applyTo = (function (arglist__11472){
var args = cljs.core.seq(arglist__11472);
return G__11471__delegate(args);
});
G__11471.cljs$core$IFn$_invoke$arity$variadic = G__11471__delegate;
return G__11471;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__11473__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__11473 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11473__delegate.call(this,args);};
G__11473.cljs$lang$maxFixedArity = 0;
G__11473.cljs$lang$applyTo = (function (arglist__11474){
var args = cljs.core.seq(arglist__11474);
return G__11473__delegate(args);
});
G__11473.cljs$core$IFn$_invoke$arity$variadic = G__11473__delegate;
return G__11473;
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
tailrecursion.hoplon.$text = (function $text(p1__11475_SHARP_){return document.createTextNode(p1__11475_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__11476_SHARP_){return document.createComment(p1__11476_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.initialized_QMARK_)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__11477_SHARP_){return p1__11477_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_(tailrecursion.hoplon.initialized_QMARK_,true);
var seq__11482 = cljs.core.seq(cljs.core.deref(tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__11483 = null;var count__11484 = 0;var i__11485 = 0;while(true){
if((i__11485 < count__11484))
{var f = chunk__11483.cljs$core$IIndexed$_nth$arity$2(null,i__11485);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11486 = seq__11482;
var G__11487 = chunk__11483;
var G__11488 = count__11484;
var G__11489 = (i__11485 + 1);
seq__11482 = G__11486;
chunk__11483 = G__11487;
count__11484 = G__11488;
i__11485 = G__11489;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11482);if(temp__4092__auto__)
{var seq__11482__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11482__$1))
{var c__8210__auto__ = cljs.core.chunk_first(seq__11482__$1);{
var G__11490 = cljs.core.chunk_rest(seq__11482__$1);
var G__11491 = c__8210__auto__;
var G__11492 = cljs.core.count(c__8210__auto__);
var G__11493 = 0;
seq__11482 = G__11490;
chunk__11483 = G__11491;
count__11484 = G__11492;
i__11485 = G__11493;
continue;
}
} else
{var f = cljs.core.first(seq__11482__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11494 = cljs.core.next(seq__11482__$1);
var G__11495 = null;
var G__11496 = 0;
var G__11497 = 0;
seq__11482 = G__11494;
chunk__11483 = G__11495;
count__11484 = G__11496;
i__11485 = G__11497;
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__8320__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8321__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8322__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8323__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8324__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("do!",((function (method_table__8320__auto__,prefer_table__8321__auto__,method_cache__8322__auto__,cached_hierarchy__8323__auto__,hierarchy__8324__auto__){
return (function (elem,key,val){return key;
});})(method_table__8320__auto__,prefer_table__8321__auto__,method_cache__8322__auto__,cached_hierarchy__8323__auto__,hierarchy__8324__auto__))
,cljs.core.constant$keyword$22,hierarchy__8324__auto__,method_table__8320__auto__,prefer_table__8321__auto__,method_cache__8322__auto__,cached_hierarchy__8323__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,key,val){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$11,(function() { 
var G__11498__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__11498 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11498__delegate.call(this,elem,_,args);};
G__11498.cljs$lang$maxFixedArity = 2;
G__11498.cljs$lang$applyTo = (function (arglist__11499){
var elem = cljs.core.first(arglist__11499);
arglist__11499 = cljs.core.next(arglist__11499);
var _ = cljs.core.first(arglist__11499);
var args = cljs.core.rest(arglist__11499);
return G__11498__delegate(elem,_,args);
});
G__11498.cljs$core$IFn$_invoke$arity$variadic = G__11498__delegate;
return G__11498;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$24,(function (elem,_,kvs){var e = jQuery(elem);var seq__11500 = cljs.core.seq(kvs);var chunk__11501 = null;var count__11502 = 0;var i__11503 = 0;while(true){
if((i__11503 < count__11502))
{var vec__11504 = chunk__11501.cljs$core$IIndexed$_nth$arity$2(null,i__11503);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11504,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11504,1,null);var k_11506__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11506__$1);
} else
{e.attr(k_11506__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11506__$1:v));
}
{
var G__11507 = seq__11500;
var G__11508 = chunk__11501;
var G__11509 = count__11502;
var G__11510 = (i__11503 + 1);
seq__11500 = G__11507;
chunk__11501 = G__11508;
count__11502 = G__11509;
i__11503 = G__11510;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11500);if(temp__4092__auto__)
{var seq__11500__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11500__$1))
{var c__8210__auto__ = cljs.core.chunk_first(seq__11500__$1);{
var G__11511 = cljs.core.chunk_rest(seq__11500__$1);
var G__11512 = c__8210__auto__;
var G__11513 = cljs.core.count(c__8210__auto__);
var G__11514 = 0;
seq__11500 = G__11511;
chunk__11501 = G__11512;
count__11502 = G__11513;
i__11503 = G__11514;
continue;
}
} else
{var vec__11505 = cljs.core.first(seq__11500__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11505,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11505,1,null);var k_11515__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11515__$1);
} else
{e.attr(k_11515__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11515__$1:v));
}
{
var G__11516 = cljs.core.next(seq__11500__$1);
var G__11517 = null;
var G__11518 = 0;
var G__11519 = 0;
seq__11500 = G__11516;
chunk__11501 = G__11517;
count__11502 = G__11518;
i__11503 = G__11519;
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
return (function (p1__11520_SHARP_){return cljs.core.zipmap(p1__11520_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));var seq__11521 = cljs.core.seq(clmap);var chunk__11522 = null;var count__11523 = 0;var i__11524 = 0;while(true){
if((i__11524 < count__11523))
{var vec__11525 = chunk__11522.cljs$core$IIndexed$_nth$arity$2(null,i__11524);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11525,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11525,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11527 = seq__11521;
var G__11528 = chunk__11522;
var G__11529 = count__11523;
var G__11530 = (i__11524 + 1);
seq__11521 = G__11527;
chunk__11522 = G__11528;
count__11523 = G__11529;
i__11524 = G__11530;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11521);if(temp__4092__auto__)
{var seq__11521__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11521__$1))
{var c__8210__auto__ = cljs.core.chunk_first(seq__11521__$1);{
var G__11531 = cljs.core.chunk_rest(seq__11521__$1);
var G__11532 = c__8210__auto__;
var G__11533 = cljs.core.count(c__8210__auto__);
var G__11534 = 0;
seq__11521 = G__11531;
chunk__11522 = G__11532;
count__11523 = G__11533;
i__11524 = G__11534;
continue;
}
} else
{var vec__11526 = cljs.core.first(seq__11521__$1);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11526,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11526,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11535 = cljs.core.next(seq__11521__$1);
var G__11536 = null;
var G__11537 = 0;
var G__11538 = 0;
seq__11521 = G__11535;
chunk__11522 = G__11536;
count__11523 = G__11537;
i__11524 = G__11538;
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
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$26,(function (elem,_,kvs){var e = jQuery(elem);var seq__11539 = cljs.core.seq(kvs);var chunk__11540 = null;var count__11541 = 0;var i__11542 = 0;while(true){
if((i__11542 < count__11541))
{var vec__11543 = chunk__11540.cljs$core$IIndexed$_nth$arity$2(null,i__11542);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11543,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11543,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11545 = seq__11539;
var G__11546 = chunk__11540;
var G__11547 = count__11541;
var G__11548 = (i__11542 + 1);
seq__11539 = G__11545;
chunk__11540 = G__11546;
count__11541 = G__11547;
i__11542 = G__11548;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11539);if(temp__4092__auto__)
{var seq__11539__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11539__$1))
{var c__8210__auto__ = cljs.core.chunk_first(seq__11539__$1);{
var G__11549 = cljs.core.chunk_rest(seq__11539__$1);
var G__11550 = c__8210__auto__;
var G__11551 = cljs.core.count(c__8210__auto__);
var G__11552 = 0;
seq__11539 = G__11549;
chunk__11540 = G__11550;
count__11541 = G__11551;
i__11542 = G__11552;
continue;
}
} else
{var vec__11544 = cljs.core.first(seq__11539__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11544,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11544,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11553 = cljs.core.next(seq__11539__$1);
var G__11554 = null;
var G__11555 = 0;
var G__11556 = 0;
seq__11539 = G__11553;
chunk__11540 = G__11554;
count__11541 = G__11555;
i__11542 = G__11556;
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__8320__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8321__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8322__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8323__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8324__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("on!",((function (method_table__8320__auto__,prefer_table__8321__auto__,method_cache__8322__auto__,cached_hierarchy__8323__auto__,hierarchy__8324__auto__){
return (function (elem,event,callback){return event;
});})(method_table__8320__auto__,prefer_table__8321__auto__,method_cache__8322__auto__,cached_hierarchy__8323__auto__,hierarchy__8324__auto__))
,cljs.core.constant$keyword$22,hierarchy__8324__auto__,method_table__8320__auto__,prefer_table__8321__auto__,method_cache__8322__auto__,cached_hierarchy__8323__auto__));
})();
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,event,callback){return tailrecursion.hoplon.when_dom(elem,(function (){return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(((function (pool_size){
return (function (G__11583,G__11582){return (G__11582.cljs$core$IFn$_invoke$arity$1 ? G__11582.cljs$core$IFn$_invoke$arity$1(G__11583) : G__11582.call(null,G__11583));
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift(((function (pool_size,items_seq){
return (function (G__11584,G__11585){return (G__11584.cljs$core$IFn$_invoke$arity$1 ? G__11584.cljs$core$IFn$_invoke$arity$1(G__11585) : G__11584.call(null,G__11585));
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__11557_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count){
return (function (G__11586,G__11587){return (G__11586 < G__11587);
});})(pool_size,items_seq,cur_count))
).call(null,p1__11557_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__11558_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__11590,G__11588,G__11589){return (G__11588.cljs$core$IFn$_invoke$arity$2 ? G__11588.cljs$core$IFn$_invoke$arity$2(G__11589,G__11590) : G__11588.call(null,G__11589,G__11590));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,p1__11558_SHARP_,tailrecursion.hoplon.safe_nth,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__11604,G__11602,G__11598,G__11599,G__11596,G__11600,G__11595,G__11597,G__11603,G__11601){if(cljs.core.truth_((G__11595 < G__11596)))
{var seq__11591_11605 = cljs.core.seq((G__11597.cljs$core$IFn$_invoke$arity$2 ? G__11597.cljs$core$IFn$_invoke$arity$2(G__11595,G__11596) : G__11597.call(null,G__11595,G__11596)));var chunk__11592_11606 = null;var count__11593_11607 = 0;var i__11594_11608 = 0;while(true){
if(cljs.core.truth_((i__11594_11608 < count__11593_11607)))
{var i_11609 = chunk__11592_11606.cljs$core$IIndexed$_nth$arity$2(null,i__11594_11608);var e_11610 = (G__11598.cljs$core$IFn$_invoke$arity$1 ? G__11598.cljs$core$IFn$_invoke$arity$1((G__11599.cljs$core$IFn$_invoke$arity$1 ? G__11599.cljs$core$IFn$_invoke$arity$1(i_11609) : G__11599.call(null,i_11609))) : G__11598.call(null,(G__11599.cljs$core$IFn$_invoke$arity$1 ? G__11599.cljs$core$IFn$_invoke$arity$1(i_11609) : G__11599.call(null,i_11609)))).call(null,cljs.core.constant$keyword$37,(G__11600.cljs$core$IFn$_invoke$arity$1 ? G__11600.cljs$core$IFn$_invoke$arity$1(i_11609) : G__11600.call(null,i_11609)));if(cljs.core.not(G__11601))
{G__11602.appendChild(e_11610);
} else
{G__11602.insertBefore(e_11610,G__11602.firstChild);
}
{
var G__11611 = seq__11591_11605;
var G__11612 = chunk__11592_11606;
var G__11613 = count__11593_11607;
var G__11614 = (i__11594_11608 + 1);
seq__11591_11605 = G__11611;
chunk__11592_11606 = G__11612;
count__11593_11607 = G__11613;
i__11594_11608 = G__11614;
continue;
}
} else
{var temp__4092__auto___11615 = cljs.core.seq(seq__11591_11605);if(temp__4092__auto___11615)
{var seq__11591_11616__$1 = temp__4092__auto___11615;if(cljs.core.chunked_seq_QMARK_(seq__11591_11616__$1))
{var c__8210__auto___11617 = cljs.core.chunk_first(seq__11591_11616__$1);{
var G__11618 = cljs.core.chunk_rest(seq__11591_11616__$1);
var G__11619 = c__8210__auto___11617;
var G__11620 = cljs.core.count(c__8210__auto___11617);
var G__11621 = 0;
seq__11591_11605 = G__11618;
chunk__11592_11606 = G__11619;
count__11593_11607 = G__11620;
i__11594_11608 = G__11621;
continue;
}
} else
{var i_11622 = cljs.core.first(seq__11591_11616__$1);var e_11623 = (G__11598.cljs$core$IFn$_invoke$arity$1 ? G__11598.cljs$core$IFn$_invoke$arity$1((G__11599.cljs$core$IFn$_invoke$arity$1 ? G__11599.cljs$core$IFn$_invoke$arity$1(i_11622) : G__11599.call(null,i_11622))) : G__11598.call(null,(G__11599.cljs$core$IFn$_invoke$arity$1 ? G__11599.cljs$core$IFn$_invoke$arity$1(i_11622) : G__11599.call(null,i_11622)))).call(null,cljs.core.constant$keyword$37,(G__11600.cljs$core$IFn$_invoke$arity$1 ? G__11600.cljs$core$IFn$_invoke$arity$1(i_11622) : G__11600.call(null,i_11622)));if(cljs.core.not(G__11601))
{G__11602.appendChild(e_11623);
} else
{G__11602.insertBefore(e_11623,G__11602.firstChild);
}
{
var G__11624 = cljs.core.next(seq__11591_11616__$1);
var G__11625 = null;
var G__11626 = 0;
var G__11627 = 0;
seq__11591_11605 = G__11624;
chunk__11592_11606 = G__11625;
count__11593_11607 = G__11626;
i__11594_11608 = G__11627;
continue;
}
}
} else
{}
}
break;
}
return (G__11603.cljs$core$IFn$_invoke$arity$2 ? G__11603.cljs$core$IFn$_invoke$arity$2(G__11604,G__11596) : G__11603.call(null,G__11604,G__11596));
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
var route_cell__0 = (function (){var r = (function (){var ret__8637__auto__ = tailrecursion.javelin.cell(window.location.hash);setInterval(((function (ret__8637__auto__){
return (function (){return cljs.core.reset_BANG_(ret__8637__auto__,window.location.hash);
});})(ret__8637__auto__))
,100);
return tailrecursion.javelin.lift(((function (ret__8637__auto__){
return (function (G__11637){return G__11637;
});})(ret__8637__auto__))
).call(null,ret__8637__auto__);
})();return tailrecursion.javelin.lift(((function (r){
return (function (G__11638,G__11639){if(cljs.core.truth_((G__11638.cljs$core$IFn$_invoke$arity$2 ? G__11638.cljs$core$IFn$_invoke$arity$2("",G__11639) : G__11638.call(null,"",G__11639))))
{return G__11639;
} else
{return null;
}
});})(r))
).call(null,cljs.core.not_EQ_,r);
});
var route_cell__1 = (function (setter_or_dfl){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl)))
{var setter__8638__auto__ = setter_or_dfl;var callback__8639__auto__ = (function (){var or__7454__auto__ = null;if(cljs.core.truth_(or__7454__auto__))
{return or__7454__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8638__auto__,callback__8639__auto__){
return (function (G__11640,G__11641){return G__11640.location.hash = G__11641;
});})(setter__8638__auto__,callback__8639__auto__))
).call(null,window,setter__8638__auto__);
setInterval(((function (setter__8638__auto__,callback__8639__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8638__auto__),window.location.hash))
{(callback__8639__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8639__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8639__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8638__auto__);
} else
{return null;
}
});})(setter__8638__auto__,callback__8639__auto__))
,100);
return setter__8638__auto__;
} else
{var r = route_cell.cljs$core$IFn$_invoke$arity$0();return tailrecursion.javelin.lift(((function (r){
return (function (G__11643,G__11642){var or__7454__auto__ = G__11642;if(cljs.core.truth_(or__7454__auto__))
{return or__7454__auto__;
} else
{return G__11643;
}
});})(r))
).call(null,setter_or_dfl,r);
}
});
var route_cell__2 = (function (setter,callback){var setter__8638__auto__ = setter;var callback__8639__auto__ = (function (){var or__7454__auto__ = callback;if(cljs.core.truth_(or__7454__auto__))
{return or__7454__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8638__auto__,callback__8639__auto__){
return (function (G__11644,G__11645){return G__11644.location.hash = G__11645;
});})(setter__8638__auto__,callback__8639__auto__))
).call(null,window,setter__8638__auto__);
setInterval(((function (setter__8638__auto__,callback__8639__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8638__auto__),window.location.hash))
{(callback__8639__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8639__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8639__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8638__auto__);
} else
{return null;
}
});})(setter__8638__auto__,callback__8639__auto__))
,100);
return setter__8638__auto__;
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
