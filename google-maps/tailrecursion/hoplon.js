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
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11441_SHARP_){return (p1__11441_SHARP_ instanceof Node);
}):(function (p1__11442_SHARP_){try{return p1__11442_SHARP_.nodeType;
}catch (e11443){if((e11443 instanceof Error))
{var _ = e11443;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11443;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11444_SHARP_){try{return cljs.core.vector_QMARK_(p1__11444_SHARP_);
}catch (e11445){if((e11445 instanceof Error))
{var _ = e11445;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11445;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11446_SHARP_){try{return cljs.core.seq_QMARK_(p1__11446_SHARP_);
}catch (e11447){if((e11447 instanceof Error))
{var _ = e11447;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11447;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_((function (p1__11448_SHARP_){if(cljs.core.truth_((function (){var and__7629__auto__ = console;if(cljs.core.truth_(and__7629__auto__))
{return console.log;
} else
{return and__7629__auto__;
}
})()))
{return console.log(p1__11448_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e11450){if((e11450 instanceof Error))
{var _ = e11450;return not_found;
} else
{if(cljs.core.constant$keyword$6)
{throw e11450;
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
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__11451_SHARP_){if(cljs.core.truth_((function (){var or__7641__auto__ = (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11451_SHARP_) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__11451_SHARP_));if(cljs.core.truth_(or__7641__auto__))
{return or__7641__auto__;
} else
{return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11451_SHARP_) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__11451_SHARP_));
}
})()))
{return unsplice(p1__11451_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11451_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function parse_args(p__11454){var vec__11456 = p__11454;var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11456,0,null);var tail = cljs.core.nthnext(vec__11456,1);var args = vec__11456;var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_,vec__11456,head,tail,args){
return (function (p1__11452_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,p1__11452_SHARP_)));
});})(kw1_QMARK_,vec__11456,head,tail,args))
;var drkw = ((function (kw1_QMARK_,mkkw,vec__11456,head,tail,args){
return (function (p1__11453_SHARP_){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.drop_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4(2,2,cljs.core.PersistentVector.EMPTY,p1__11453_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__11456,head,tail,args))
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
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__11458_SHARP_,p2__11457_SHARP_){var n = (function (){var s = cljs.core.name(p2__11457_SHARP_);var c = cljs.core.last(s);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c)))
{return s;
} else
{return s.slice(0,-1);
}
})();var p = n.substr(0,3);return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__11457_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11458_SHARP_,p)))?n:n.substr(3)));
});var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");var dos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__11459_SHARP_,p2__11460_SHARP_){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11459_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__11460_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__11483_11501 = cljs.core.seq(attr);var chunk__11484_11502 = null;var count__11485_11503 = 0;var i__11486_11504 = 0;while(true){
if((i__11486_11504 < count__11485_11503))
{var vec__11487_11505 = chunk__11484_11502.cljs$core$IIndexed$_nth$arity$2(null,i__11486_11504);var k_11506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11487_11505,0,null);var v_11507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11487_11505,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11507)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11506) : dokey.call(null,k_11506)),v_11507);
} else
{if(cljs.core.fn_QMARK_(v_11507))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11506) : onkey.call(null,k_11506)),v_11507);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11506) : dokey.call(null,k_11506)),v_11507) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11506) : dokey.call(null,k_11506)),v_11507));
} else
{}
}
}
{
var G__11508 = seq__11483_11501;
var G__11509 = chunk__11484_11502;
var G__11510 = count__11485_11503;
var G__11511 = (i__11486_11504 + 1);
seq__11483_11501 = G__11508;
chunk__11484_11502 = G__11509;
count__11485_11503 = G__11510;
i__11486_11504 = G__11511;
continue;
}
} else
{var temp__4092__auto___11512 = cljs.core.seq(seq__11483_11501);if(temp__4092__auto___11512)
{var seq__11483_11513__$1 = temp__4092__auto___11512;if(cljs.core.chunked_seq_QMARK_(seq__11483_11513__$1))
{var c__8397__auto___11514 = cljs.core.chunk_first(seq__11483_11513__$1);{
var G__11515 = cljs.core.chunk_rest(seq__11483_11513__$1);
var G__11516 = c__8397__auto___11514;
var G__11517 = cljs.core.count(c__8397__auto___11514);
var G__11518 = 0;
seq__11483_11501 = G__11515;
chunk__11484_11502 = G__11516;
count__11485_11503 = G__11517;
i__11486_11504 = G__11518;
continue;
}
} else
{var vec__11488_11519 = cljs.core.first(seq__11483_11513__$1);var k_11520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11488_11519,0,null);var v_11521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11488_11519,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11521)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11520) : dokey.call(null,k_11520)),v_11521);
} else
{if(cljs.core.fn_QMARK_(v_11521))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11520) : onkey.call(null,k_11520)),v_11521);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11520) : dokey.call(null,k_11520)),v_11521) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11520) : dokey.call(null,k_11520)),v_11521));
} else
{}
}
}
{
var G__11522 = cljs.core.next(seq__11483_11513__$1);
var G__11523 = null;
var G__11524 = 0;
var G__11525 = 0;
seq__11483_11501 = G__11522;
chunk__11484_11502 = G__11523;
count__11485_11503 = G__11524;
i__11486_11504 = G__11525;
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
return (function (){var seq__11489 = cljs.core.seq(cljs.core.deref(dos));var chunk__11490 = null;var count__11491 = 0;var i__11492 = 0;while(true){
if((i__11492 < count__11491))
{var vec__11493 = chunk__11490.cljs$core$IIndexed$_nth$arity$2(null,i__11492);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11493,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11493,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11489,chunk__11490,count__11491,i__11492,vec__11493,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11462_SHARP_,p2__11463_SHARP_,p3__11464_SHARP_,p4__11461_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11461_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11461_SHARP_));
});})(seq__11489,chunk__11490,count__11491,i__11492,vec__11493,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11526 = seq__11489;
var G__11527 = chunk__11490;
var G__11528 = count__11491;
var G__11529 = (i__11492 + 1);
seq__11489 = G__11526;
chunk__11490 = G__11527;
count__11491 = G__11528;
i__11492 = G__11529;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11489);if(temp__4092__auto__)
{var seq__11489__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11489__$1))
{var c__8397__auto__ = cljs.core.chunk_first(seq__11489__$1);{
var G__11530 = cljs.core.chunk_rest(seq__11489__$1);
var G__11531 = c__8397__auto__;
var G__11532 = cljs.core.count(c__8397__auto__);
var G__11533 = 0;
seq__11489 = G__11530;
chunk__11490 = G__11531;
count__11491 = G__11532;
i__11492 = G__11533;
continue;
}
} else
{var vec__11494 = cljs.core.first(seq__11489__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11494,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11494,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11489,chunk__11490,count__11491,i__11492,vec__11494,k,v,seq__11489__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11462_SHARP_,p2__11463_SHARP_,p3__11464_SHARP_,p4__11461_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11461_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11461_SHARP_));
});})(seq__11489,chunk__11490,count__11491,i__11492,vec__11494,k,v,seq__11489__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11534 = cljs.core.next(seq__11489__$1);
var G__11535 = null;
var G__11536 = 0;
var G__11537 = 0;
seq__11489 = G__11534;
chunk__11490 = G__11535;
count__11491 = G__11536;
i__11492 = G__11537;
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
return (function (){var seq__11495 = cljs.core.seq(cljs.core.deref(ons));var chunk__11496 = null;var count__11497 = 0;var i__11498 = 0;while(true){
if((i__11498 < count__11497))
{var vec__11499 = chunk__11496.cljs$core$IIndexed$_nth$arity$2(null,i__11498);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11499,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11499,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11538 = seq__11495;
var G__11539 = chunk__11496;
var G__11540 = count__11497;
var G__11541 = (i__11498 + 1);
seq__11495 = G__11538;
chunk__11496 = G__11539;
count__11497 = G__11540;
i__11498 = G__11541;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11495);if(temp__4092__auto__)
{var seq__11495__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11495__$1))
{var c__8397__auto__ = cljs.core.chunk_first(seq__11495__$1);{
var G__11542 = cljs.core.chunk_rest(seq__11495__$1);
var G__11543 = c__8397__auto__;
var G__11544 = cljs.core.count(c__8397__auto__);
var G__11545 = 0;
seq__11495 = G__11542;
chunk__11496 = G__11543;
count__11497 = G__11544;
i__11498 = G__11545;
continue;
}
} else
{var vec__11500 = cljs.core.first(seq__11495__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11500,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11500,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11546 = cljs.core.next(seq__11495__$1);
var G__11547 = null;
var G__11548 = 0;
var G__11549 = 0;
seq__11495 = G__11546;
chunk__11496 = G__11547;
count__11497 = G__11548;
i__11498 = G__11549;
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
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11550_SHARP_,p2__11551_SHARP_){return p1__11550_SHARP_.appendChild(p2__11551_SHARP_);
}):(function (p1__11552_SHARP_,p2__11553_SHARP_){try{return p1__11552_SHARP_.appendChild(p2__11553_SHARP_);
}catch (e11554){if((e11554 instanceof Error))
{var _ = e11554;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11554;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){jQuery(this$).empty();
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))) : tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__11560){var vec__11566 = p__11560;var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11566,0,null);var _ = cljs.core.nthnext(vec__11566,1);var kids = vec__11566;if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell)))
{tailrecursion.hoplon.replace_children_BANG_(this$,cljs.core.deref(child_cell));
cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__11566,child_cell,_,kids){
return (function (p1__11556_SHARP_,p2__11557_SHARP_,p3__11558_SHARP_,p4__11555_SHARP_){return tailrecursion.hoplon.replace_children_BANG_(this$,p4__11555_SHARP_);
});})(vec__11566,child_cell,_,kids))
);
} else
{var node_11571 = ((function (vec__11566,child_cell,_,kids){
return (function (p1__11559_SHARP_){if(typeof p1__11559_SHARP_ === 'string')
{return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__11559_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__11559_SHARP_));
} else
{if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__11559_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__11559_SHARP_))))
{return p1__11559_SHARP_;
} else
{return null;
}
}
});})(vec__11566,child_cell,_,kids))
;var seq__11567_11572 = cljs.core.seq(cljs.core.keep(node_11571,tailrecursion.hoplon.unsplice(kids)));var chunk__11568_11573 = null;var count__11569_11574 = 0;var i__11570_11575 = 0;while(true){
if((i__11570_11575 < count__11569_11574))
{var x_11576 = chunk__11568_11573.cljs$core$IIndexed$_nth$arity$2(null,i__11570_11575);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11576) : tailrecursion.hoplon.append_child.call(null,this$,x_11576));
{
var G__11577 = seq__11567_11572;
var G__11578 = chunk__11568_11573;
var G__11579 = count__11569_11574;
var G__11580 = (i__11570_11575 + 1);
seq__11567_11572 = G__11577;
chunk__11568_11573 = G__11578;
count__11569_11574 = G__11579;
i__11570_11575 = G__11580;
continue;
}
} else
{var temp__4092__auto___11581 = cljs.core.seq(seq__11567_11572);if(temp__4092__auto___11581)
{var seq__11567_11582__$1 = temp__4092__auto___11581;if(cljs.core.chunked_seq_QMARK_(seq__11567_11582__$1))
{var c__8397__auto___11583 = cljs.core.chunk_first(seq__11567_11582__$1);{
var G__11584 = cljs.core.chunk_rest(seq__11567_11582__$1);
var G__11585 = c__8397__auto___11583;
var G__11586 = cljs.core.count(c__8397__auto___11583);
var G__11587 = 0;
seq__11567_11572 = G__11584;
chunk__11568_11573 = G__11585;
count__11569_11574 = G__11586;
i__11570_11575 = G__11587;
continue;
}
} else
{var x_11588 = cljs.core.first(seq__11567_11582__$1);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11588) : tailrecursion.hoplon.append_child.call(null,this$,x_11588));
{
var G__11589 = cljs.core.next(seq__11567_11582__$1);
var G__11590 = null;
var G__11591 = 0;
var G__11592 = 0;
seq__11567_11572 = G__11589;
chunk__11568_11573 = G__11590;
count__11569_11574 = G__11591;
i__11570_11575 = G__11592;
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
var G__11600__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__11594 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11594,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11594,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11595 = this$;G__11595.hoplonIFn(attr,kids);
return G__11595;
} else
{var G__11596 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11596,attr);
tailrecursion.hoplon.add_children_BANG_(G__11596,kids);
return G__11596;
}
};
var G__11600 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11600__delegate.call(this,self__,args);};
G__11600.cljs$lang$maxFixedArity = 1;
G__11600.cljs$lang$applyTo = (function (arglist__11601){
var self__ = cljs.core.first(arglist__11601);
var args = cljs.core.rest(arglist__11601);
return G__11600__delegate(self__,args);
});
G__11600.cljs$core$IFn$_invoke$arity$variadic = G__11600__delegate;
return G__11600;
})()
;
Element.prototype.apply = (function (self__,args11593){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11593)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11602__delegate = function (args){var this$ = this;var vec__11597 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11597,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11597,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11598 = this$;G__11598.hoplonIFn(attr,kids);
return G__11598;
} else
{var G__11599 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11599,attr);
tailrecursion.hoplon.add_children_BANG_(G__11599,kids);
return G__11599;
}
};
var G__11602 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11602__delegate.call(this,args);};
G__11602.cljs$lang$maxFixedArity = 0;
G__11602.cljs$lang$applyTo = (function (arglist__11603){
var args = cljs.core.seq(arglist__11603);
return G__11602__delegate(args);
});
G__11602.cljs$core$IFn$_invoke$arity$variadic = G__11602__delegate;
return G__11602;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__11604__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new$,args);
};
var G__11604 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11604__delegate.call(this,args);};
G__11604.cljs$lang$maxFixedArity = 0;
G__11604.cljs$lang$applyTo = (function (arglist__11605){
var args = cljs.core.seq(arglist__11605);
return G__11604__delegate(args);
});
G__11604.cljs$core$IFn$_invoke$arity$variadic = G__11604__delegate;
return G__11604;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__11606__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__11606 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11606__delegate.call(this,args);};
G__11606.cljs$lang$maxFixedArity = 0;
G__11606.cljs$lang$applyTo = (function (arglist__11607){
var args = cljs.core.seq(arglist__11607);
return G__11606__delegate(args);
});
G__11606.cljs$core$IFn$_invoke$arity$variadic = G__11606__delegate;
return G__11606;
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
tailrecursion.hoplon.$text = (function $text(p1__11608_SHARP_){return document.createTextNode(p1__11608_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__11609_SHARP_){return document.createComment(p1__11609_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.initialized_QMARK_)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__11610_SHARP_){return p1__11610_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_(tailrecursion.hoplon.initialized_QMARK_,true);
var seq__11615 = cljs.core.seq(cljs.core.deref(tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__11616 = null;var count__11617 = 0;var i__11618 = 0;while(true){
if((i__11618 < count__11617))
{var f = chunk__11616.cljs$core$IIndexed$_nth$arity$2(null,i__11618);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11619 = seq__11615;
var G__11620 = chunk__11616;
var G__11621 = count__11617;
var G__11622 = (i__11618 + 1);
seq__11615 = G__11619;
chunk__11616 = G__11620;
count__11617 = G__11621;
i__11618 = G__11622;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11615);if(temp__4092__auto__)
{var seq__11615__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11615__$1))
{var c__8397__auto__ = cljs.core.chunk_first(seq__11615__$1);{
var G__11623 = cljs.core.chunk_rest(seq__11615__$1);
var G__11624 = c__8397__auto__;
var G__11625 = cljs.core.count(c__8397__auto__);
var G__11626 = 0;
seq__11615 = G__11623;
chunk__11616 = G__11624;
count__11617 = G__11625;
i__11618 = G__11626;
continue;
}
} else
{var f = cljs.core.first(seq__11615__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11627 = cljs.core.next(seq__11615__$1);
var G__11628 = null;
var G__11629 = 0;
var G__11630 = 0;
seq__11615 = G__11627;
chunk__11616 = G__11628;
count__11617 = G__11629;
i__11618 = G__11630;
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__8507__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8508__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8509__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8510__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8511__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("do!",((function (method_table__8507__auto__,prefer_table__8508__auto__,method_cache__8509__auto__,cached_hierarchy__8510__auto__,hierarchy__8511__auto__){
return (function (elem,key,val){return key;
});})(method_table__8507__auto__,prefer_table__8508__auto__,method_cache__8509__auto__,cached_hierarchy__8510__auto__,hierarchy__8511__auto__))
,cljs.core.constant$keyword$22,hierarchy__8511__auto__,method_table__8507__auto__,prefer_table__8508__auto__,method_cache__8509__auto__,cached_hierarchy__8510__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,key,val){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$11,(function() { 
var G__11631__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__11631 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11631__delegate.call(this,elem,_,args);};
G__11631.cljs$lang$maxFixedArity = 2;
G__11631.cljs$lang$applyTo = (function (arglist__11632){
var elem = cljs.core.first(arglist__11632);
arglist__11632 = cljs.core.next(arglist__11632);
var _ = cljs.core.first(arglist__11632);
var args = cljs.core.rest(arglist__11632);
return G__11631__delegate(elem,_,args);
});
G__11631.cljs$core$IFn$_invoke$arity$variadic = G__11631__delegate;
return G__11631;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$24,(function (elem,_,kvs){var e = jQuery(elem);var seq__11633 = cljs.core.seq(kvs);var chunk__11634 = null;var count__11635 = 0;var i__11636 = 0;while(true){
if((i__11636 < count__11635))
{var vec__11637 = chunk__11634.cljs$core$IIndexed$_nth$arity$2(null,i__11636);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11637,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11637,1,null);var k_11639__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11639__$1);
} else
{e.attr(k_11639__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11639__$1:v));
}
{
var G__11640 = seq__11633;
var G__11641 = chunk__11634;
var G__11642 = count__11635;
var G__11643 = (i__11636 + 1);
seq__11633 = G__11640;
chunk__11634 = G__11641;
count__11635 = G__11642;
i__11636 = G__11643;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11633);if(temp__4092__auto__)
{var seq__11633__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11633__$1))
{var c__8397__auto__ = cljs.core.chunk_first(seq__11633__$1);{
var G__11644 = cljs.core.chunk_rest(seq__11633__$1);
var G__11645 = c__8397__auto__;
var G__11646 = cljs.core.count(c__8397__auto__);
var G__11647 = 0;
seq__11633 = G__11644;
chunk__11634 = G__11645;
count__11635 = G__11646;
i__11636 = G__11647;
continue;
}
} else
{var vec__11638 = cljs.core.first(seq__11633__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11638,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11638,1,null);var k_11648__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11648__$1);
} else
{e.attr(k_11648__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11648__$1:v));
}
{
var G__11649 = cljs.core.next(seq__11633__$1);
var G__11650 = null;
var G__11651 = 0;
var G__11652 = 0;
seq__11633 = G__11649;
chunk__11634 = G__11650;
count__11635 = G__11651;
i__11636 = G__11652;
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
return (function (p1__11653_SHARP_){return cljs.core.zipmap(p1__11653_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));var seq__11654 = cljs.core.seq(clmap);var chunk__11655 = null;var count__11656 = 0;var i__11657 = 0;while(true){
if((i__11657 < count__11656))
{var vec__11658 = chunk__11655.cljs$core$IIndexed$_nth$arity$2(null,i__11657);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11658,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11658,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11660 = seq__11654;
var G__11661 = chunk__11655;
var G__11662 = count__11656;
var G__11663 = (i__11657 + 1);
seq__11654 = G__11660;
chunk__11655 = G__11661;
count__11656 = G__11662;
i__11657 = G__11663;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11654);if(temp__4092__auto__)
{var seq__11654__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11654__$1))
{var c__8397__auto__ = cljs.core.chunk_first(seq__11654__$1);{
var G__11664 = cljs.core.chunk_rest(seq__11654__$1);
var G__11665 = c__8397__auto__;
var G__11666 = cljs.core.count(c__8397__auto__);
var G__11667 = 0;
seq__11654 = G__11664;
chunk__11655 = G__11665;
count__11656 = G__11666;
i__11657 = G__11667;
continue;
}
} else
{var vec__11659 = cljs.core.first(seq__11654__$1);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11659,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11659,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11668 = cljs.core.next(seq__11654__$1);
var G__11669 = null;
var G__11670 = 0;
var G__11671 = 0;
seq__11654 = G__11668;
chunk__11655 = G__11669;
count__11656 = G__11670;
i__11657 = G__11671;
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
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$26,(function (elem,_,kvs){var e = jQuery(elem);var seq__11672 = cljs.core.seq(kvs);var chunk__11673 = null;var count__11674 = 0;var i__11675 = 0;while(true){
if((i__11675 < count__11674))
{var vec__11676 = chunk__11673.cljs$core$IIndexed$_nth$arity$2(null,i__11675);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11676,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11676,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11678 = seq__11672;
var G__11679 = chunk__11673;
var G__11680 = count__11674;
var G__11681 = (i__11675 + 1);
seq__11672 = G__11678;
chunk__11673 = G__11679;
count__11674 = G__11680;
i__11675 = G__11681;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11672);if(temp__4092__auto__)
{var seq__11672__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11672__$1))
{var c__8397__auto__ = cljs.core.chunk_first(seq__11672__$1);{
var G__11682 = cljs.core.chunk_rest(seq__11672__$1);
var G__11683 = c__8397__auto__;
var G__11684 = cljs.core.count(c__8397__auto__);
var G__11685 = 0;
seq__11672 = G__11682;
chunk__11673 = G__11683;
count__11674 = G__11684;
i__11675 = G__11685;
continue;
}
} else
{var vec__11677 = cljs.core.first(seq__11672__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11677,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11677,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11686 = cljs.core.next(seq__11672__$1);
var G__11687 = null;
var G__11688 = 0;
var G__11689 = 0;
seq__11672 = G__11686;
chunk__11673 = G__11687;
count__11674 = G__11688;
i__11675 = G__11689;
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__8507__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8508__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8509__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8510__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8511__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("on!",((function (method_table__8507__auto__,prefer_table__8508__auto__,method_cache__8509__auto__,cached_hierarchy__8510__auto__,hierarchy__8511__auto__){
return (function (elem,event,callback){return event;
});})(method_table__8507__auto__,prefer_table__8508__auto__,method_cache__8509__auto__,cached_hierarchy__8510__auto__,hierarchy__8511__auto__))
,cljs.core.constant$keyword$22,hierarchy__8511__auto__,method_table__8507__auto__,prefer_table__8508__auto__,method_cache__8509__auto__,cached_hierarchy__8510__auto__));
})();
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,event,callback){return tailrecursion.hoplon.when_dom(elem,(function (){return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(((function (pool_size){
return (function (G__11716,G__11715){return (G__11715.cljs$core$IFn$_invoke$arity$1 ? G__11715.cljs$core$IFn$_invoke$arity$1(G__11716) : G__11715.call(null,G__11716));
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift(((function (pool_size,items_seq){
return (function (G__11717,G__11718){return (G__11717.cljs$core$IFn$_invoke$arity$1 ? G__11717.cljs$core$IFn$_invoke$arity$1(G__11718) : G__11717.call(null,G__11718));
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__11690_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count){
return (function (G__11720,G__11719){return (G__11719 < G__11720);
});})(pool_size,items_seq,cur_count))
).call(null,cur_count,p1__11690_SHARP_);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__11691_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__11721,G__11723,G__11722){return (G__11721.cljs$core$IFn$_invoke$arity$2 ? G__11721.cljs$core$IFn$_invoke$arity$2(G__11722,G__11723) : G__11721.call(null,G__11722,G__11723));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__11691_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__11737,G__11735,G__11731,G__11732,G__11729,G__11733,G__11728,G__11730,G__11736,G__11734){if(cljs.core.truth_((G__11728 < G__11729)))
{var seq__11724_11738 = cljs.core.seq((G__11730.cljs$core$IFn$_invoke$arity$2 ? G__11730.cljs$core$IFn$_invoke$arity$2(G__11728,G__11729) : G__11730.call(null,G__11728,G__11729)));var chunk__11725_11739 = null;var count__11726_11740 = 0;var i__11727_11741 = 0;while(true){
if(cljs.core.truth_((i__11727_11741 < count__11726_11740)))
{var i_11742 = chunk__11725_11739.cljs$core$IIndexed$_nth$arity$2(null,i__11727_11741);var e_11743 = (G__11731.cljs$core$IFn$_invoke$arity$1 ? G__11731.cljs$core$IFn$_invoke$arity$1((G__11732.cljs$core$IFn$_invoke$arity$1 ? G__11732.cljs$core$IFn$_invoke$arity$1(i_11742) : G__11732.call(null,i_11742))) : G__11731.call(null,(G__11732.cljs$core$IFn$_invoke$arity$1 ? G__11732.cljs$core$IFn$_invoke$arity$1(i_11742) : G__11732.call(null,i_11742)))).call(null,cljs.core.constant$keyword$37,(G__11733.cljs$core$IFn$_invoke$arity$1 ? G__11733.cljs$core$IFn$_invoke$arity$1(i_11742) : G__11733.call(null,i_11742)));if(cljs.core.not(G__11734))
{G__11735.appendChild(e_11743);
} else
{G__11735.insertBefore(e_11743,G__11735.firstChild);
}
{
var G__11744 = seq__11724_11738;
var G__11745 = chunk__11725_11739;
var G__11746 = count__11726_11740;
var G__11747 = (i__11727_11741 + 1);
seq__11724_11738 = G__11744;
chunk__11725_11739 = G__11745;
count__11726_11740 = G__11746;
i__11727_11741 = G__11747;
continue;
}
} else
{var temp__4092__auto___11748 = cljs.core.seq(seq__11724_11738);if(temp__4092__auto___11748)
{var seq__11724_11749__$1 = temp__4092__auto___11748;if(cljs.core.chunked_seq_QMARK_(seq__11724_11749__$1))
{var c__8397__auto___11750 = cljs.core.chunk_first(seq__11724_11749__$1);{
var G__11751 = cljs.core.chunk_rest(seq__11724_11749__$1);
var G__11752 = c__8397__auto___11750;
var G__11753 = cljs.core.count(c__8397__auto___11750);
var G__11754 = 0;
seq__11724_11738 = G__11751;
chunk__11725_11739 = G__11752;
count__11726_11740 = G__11753;
i__11727_11741 = G__11754;
continue;
}
} else
{var i_11755 = cljs.core.first(seq__11724_11749__$1);var e_11756 = (G__11731.cljs$core$IFn$_invoke$arity$1 ? G__11731.cljs$core$IFn$_invoke$arity$1((G__11732.cljs$core$IFn$_invoke$arity$1 ? G__11732.cljs$core$IFn$_invoke$arity$1(i_11755) : G__11732.call(null,i_11755))) : G__11731.call(null,(G__11732.cljs$core$IFn$_invoke$arity$1 ? G__11732.cljs$core$IFn$_invoke$arity$1(i_11755) : G__11732.call(null,i_11755)))).call(null,cljs.core.constant$keyword$37,(G__11733.cljs$core$IFn$_invoke$arity$1 ? G__11733.cljs$core$IFn$_invoke$arity$1(i_11755) : G__11733.call(null,i_11755)));if(cljs.core.not(G__11734))
{G__11735.appendChild(e_11756);
} else
{G__11735.insertBefore(e_11756,G__11735.firstChild);
}
{
var G__11757 = cljs.core.next(seq__11724_11749__$1);
var G__11758 = null;
var G__11759 = 0;
var G__11760 = 0;
seq__11724_11738 = G__11757;
chunk__11725_11739 = G__11758;
count__11726_11740 = G__11759;
i__11727_11741 = G__11760;
continue;
}
}
} else
{}
}
break;
}
return (G__11736.cljs$core$IFn$_invoke$arity$2 ? G__11736.cljs$core$IFn$_invoke$arity$2(G__11737,G__11729) : G__11736.call(null,G__11737,G__11729));
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
var route_cell__0 = (function (){var r = (function (){var ret__8824__auto__ = tailrecursion.javelin.cell(window.location.hash);setInterval(((function (ret__8824__auto__){
return (function (){return cljs.core.reset_BANG_(ret__8824__auto__,window.location.hash);
});})(ret__8824__auto__))
,100);
return tailrecursion.javelin.lift(((function (ret__8824__auto__){
return (function (G__11770){return G__11770;
});})(ret__8824__auto__))
).call(null,ret__8824__auto__);
})();return tailrecursion.javelin.lift(((function (r){
return (function (G__11771,G__11772){if(cljs.core.truth_((G__11771.cljs$core$IFn$_invoke$arity$2 ? G__11771.cljs$core$IFn$_invoke$arity$2("",G__11772) : G__11771.call(null,"",G__11772))))
{return G__11772;
} else
{return null;
}
});})(r))
).call(null,cljs.core.not_EQ_,r);
});
var route_cell__1 = (function (setter_or_dfl){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl)))
{var setter__8825__auto__ = setter_or_dfl;var callback__8826__auto__ = (function (){var or__7641__auto__ = null;if(cljs.core.truth_(or__7641__auto__))
{return or__7641__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8825__auto__,callback__8826__auto__){
return (function (G__11774,G__11773){return G__11773.location.hash = G__11774;
});})(setter__8825__auto__,callback__8826__auto__))
).call(null,setter__8825__auto__,window);
setInterval(((function (setter__8825__auto__,callback__8826__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8825__auto__),window.location.hash))
{(callback__8826__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8826__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8826__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8825__auto__);
} else
{return null;
}
});})(setter__8825__auto__,callback__8826__auto__))
,100);
return setter__8825__auto__;
} else
{var r = route_cell.cljs$core$IFn$_invoke$arity$0();return tailrecursion.javelin.lift(((function (r){
return (function (G__11776,G__11775){var or__7641__auto__ = G__11775;if(cljs.core.truth_(or__7641__auto__))
{return or__7641__auto__;
} else
{return G__11776;
}
});})(r))
).call(null,setter_or_dfl,r);
}
});
var route_cell__2 = (function (setter,callback){var setter__8825__auto__ = setter;var callback__8826__auto__ = (function (){var or__7641__auto__ = callback;if(cljs.core.truth_(or__7641__auto__))
{return or__7641__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8825__auto__,callback__8826__auto__){
return (function (G__11778,G__11777){return G__11777.location.hash = G__11778;
});})(setter__8825__auto__,callback__8826__auto__))
).call(null,setter__8825__auto__,window);
setInterval(((function (setter__8825__auto__,callback__8826__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8825__auto__),window.location.hash))
{(callback__8826__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8826__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8826__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8825__auto__);
} else
{return null;
}
});})(setter__8825__auto__,callback__8826__auto__))
,100);
return setter__8825__auto__;
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
