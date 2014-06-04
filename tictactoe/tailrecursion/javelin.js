// Compiled by ClojureScript 0.0-2227
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');
goog.require('tailrecursion.priority_map');
/**
* Like tree-seq but traversal is breadth-first instead of depth-first.
*/
tailrecursion.javelin.bf_seq = (function bf_seq(branch_QMARK_,children,root){var walk = (function walk(queue){var temp__4092__auto__ = cljs.core.peek(queue);if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;return (new cljs.core.LazySeq(null,((function (node,temp__4092__auto__){
return (function (){return cljs.core.cons(node,walk(cljs.core.into(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
});})(node,temp__4092__auto__))
,null,null));
} else
{return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.safe_nth = (function safe_nth(coll,i){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,i);
}catch (e10368){if((e10368 instanceof Error))
{var _ = e10368;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10368;
} else
{return null;
}
}
}});
tailrecursion.javelin.last_rank = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0);
tailrecursion.javelin.next_rank = (function next_rank(){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.deref_STAR_ = (function deref_STAR_(x){if(cljs.core.truth_((tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : tailrecursion.javelin.cell_QMARK_.call(null,x))))
{return cljs.core.deref(x);
} else
{return x;
}
});
tailrecursion.javelin.propagate_BANG_ = (function propagate_BANG_(cell){var queue = tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cell,cell.rank], 0));while(true){
if(cljs.core.seq(queue))
{var next = cljs.core.key(cljs.core.peek(queue));var value = next.thunk.call(null);var continue_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,next.prev);var reducer = ((function (queue,next,value,continue_QMARK_){
return (function (p1__10369_SHARP_,p2__10370_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10369_SHARP_,p2__10370_SHARP_,p2__10370_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop(queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__10371 = ((continue_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reducer,siblings,children):siblings);
queue = G__10371;
continue;
}
} else
{return null;
}
break;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function destroy_cell_BANG_(this$){var srcs = this$.sources;this$.sources = cljs.core.PersistentVector.EMPTY;
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
var seq__10376 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,srcs));var chunk__10377 = null;var count__10378 = 0;var i__10379 = 0;while(true){
if((i__10379 < count__10378))
{var src = chunk__10377.cljs$core$IIndexed$_nth$arity$2(null,i__10379);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__10380 = seq__10376;
var G__10381 = chunk__10377;
var G__10382 = count__10378;
var G__10383 = (i__10379 + 1);
seq__10376 = G__10380;
chunk__10377 = G__10381;
count__10378 = G__10382;
i__10379 = G__10383;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10376);if(temp__4092__auto__)
{var seq__10376__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__10376__$1))
{var c__8566__auto__ = cljs.core.chunk_first(seq__10376__$1);{
var G__10384 = cljs.core.chunk_rest(seq__10376__$1);
var G__10385 = c__8566__auto__;
var G__10386 = cljs.core.count(c__8566__auto__);
var G__10387 = 0;
seq__10376 = G__10384;
chunk__10377 = G__10385;
count__10378 = G__10386;
i__10379 = G__10387;
continue;
}
} else
{var src = cljs.core.first(seq__10376__$1);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__10388 = cljs.core.next(seq__10376__$1);
var G__10389 = null;
var G__10390 = 0;
var G__10391 = 0;
seq__10376 = G__10388;
chunk__10377 = G__10389;
count__10378 = G__10390;
i__10379 = G__10391;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.set_formula_BANG_ = (function() { 
var set_formula_BANG___delegate = function (this$,p__10396){var vec__10417 = p__10396;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10417,0,null);var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10417,1,null);tailrecursion.javelin.destroy_cell_BANG_(this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f):cljs.core.vec(sources));
var seq__10418_10437 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__10419_10438 = null;var count__10420_10439 = 0;var i__10421_10440 = 0;while(true){
if((i__10421_10440 < count__10420_10439))
{var source_10441 = chunk__10419_10438.cljs$core$IIndexed$_nth$arity$2(null,i__10421_10440);source_10441.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_10441.sinks,this$);
if((source_10441.rank > this$.rank))
{var seq__10422_10442 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__10418_10437,chunk__10419_10438,count__10420_10439,i__10421_10440,source_10441,vec__10417,f,sources){
return (function (p1__10392_SHARP_){return p1__10392_SHARP_.sinks;
});})(seq__10418_10437,chunk__10419_10438,count__10420_10439,i__10421_10440,source_10441,vec__10417,f,sources))
,source_10441));var chunk__10423_10443 = null;var count__10424_10444 = 0;var i__10425_10445 = 0;while(true){
if((i__10425_10445 < count__10424_10444))
{var dep_10446 = chunk__10423_10443.cljs$core$IIndexed$_nth$arity$2(null,i__10425_10445);dep_10446.rank = tailrecursion.javelin.next_rank();
{
var G__10447 = seq__10422_10442;
var G__10448 = chunk__10423_10443;
var G__10449 = count__10424_10444;
var G__10450 = (i__10425_10445 + 1);
seq__10422_10442 = G__10447;
chunk__10423_10443 = G__10448;
count__10424_10444 = G__10449;
i__10425_10445 = G__10450;
continue;
}
} else
{var temp__4092__auto___10451 = cljs.core.seq(seq__10422_10442);if(temp__4092__auto___10451)
{var seq__10422_10452__$1 = temp__4092__auto___10451;if(cljs.core.chunked_seq_QMARK_(seq__10422_10452__$1))
{var c__8566__auto___10453 = cljs.core.chunk_first(seq__10422_10452__$1);{
var G__10454 = cljs.core.chunk_rest(seq__10422_10452__$1);
var G__10455 = c__8566__auto___10453;
var G__10456 = cljs.core.count(c__8566__auto___10453);
var G__10457 = 0;
seq__10422_10442 = G__10454;
chunk__10423_10443 = G__10455;
count__10424_10444 = G__10456;
i__10425_10445 = G__10457;
continue;
}
} else
{var dep_10458 = cljs.core.first(seq__10422_10452__$1);dep_10458.rank = tailrecursion.javelin.next_rank();
{
var G__10459 = cljs.core.next(seq__10422_10452__$1);
var G__10460 = null;
var G__10461 = 0;
var G__10462 = 0;
seq__10422_10442 = G__10459;
chunk__10423_10443 = G__10460;
count__10424_10444 = G__10461;
i__10425_10445 = G__10462;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__10463 = seq__10418_10437;
var G__10464 = chunk__10419_10438;
var G__10465 = count__10420_10439;
var G__10466 = (i__10421_10440 + 1);
seq__10418_10437 = G__10463;
chunk__10419_10438 = G__10464;
count__10420_10439 = G__10465;
i__10421_10440 = G__10466;
continue;
}
} else
{var temp__4092__auto___10467 = cljs.core.seq(seq__10418_10437);if(temp__4092__auto___10467)
{var seq__10418_10468__$1 = temp__4092__auto___10467;if(cljs.core.chunked_seq_QMARK_(seq__10418_10468__$1))
{var c__8566__auto___10469 = cljs.core.chunk_first(seq__10418_10468__$1);{
var G__10470 = cljs.core.chunk_rest(seq__10418_10468__$1);
var G__10471 = c__8566__auto___10469;
var G__10472 = cljs.core.count(c__8566__auto___10469);
var G__10473 = 0;
seq__10418_10437 = G__10470;
chunk__10419_10438 = G__10471;
count__10420_10439 = G__10472;
i__10421_10440 = G__10473;
continue;
}
} else
{var source_10474 = cljs.core.first(seq__10418_10468__$1);source_10474.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_10474.sinks,this$);
if((source_10474.rank > this$.rank))
{var seq__10426_10475 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__10418_10437,chunk__10419_10438,count__10420_10439,i__10421_10440,source_10474,seq__10418_10468__$1,temp__4092__auto___10467,vec__10417,f,sources){
return (function (p1__10392_SHARP_){return p1__10392_SHARP_.sinks;
});})(seq__10418_10437,chunk__10419_10438,count__10420_10439,i__10421_10440,source_10474,seq__10418_10468__$1,temp__4092__auto___10467,vec__10417,f,sources))
,source_10474));var chunk__10427_10476 = null;var count__10428_10477 = 0;var i__10429_10478 = 0;while(true){
if((i__10429_10478 < count__10428_10477))
{var dep_10479 = chunk__10427_10476.cljs$core$IIndexed$_nth$arity$2(null,i__10429_10478);dep_10479.rank = tailrecursion.javelin.next_rank();
{
var G__10480 = seq__10426_10475;
var G__10481 = chunk__10427_10476;
var G__10482 = count__10428_10477;
var G__10483 = (i__10429_10478 + 1);
seq__10426_10475 = G__10480;
chunk__10427_10476 = G__10481;
count__10428_10477 = G__10482;
i__10429_10478 = G__10483;
continue;
}
} else
{var temp__4092__auto___10484__$1 = cljs.core.seq(seq__10426_10475);if(temp__4092__auto___10484__$1)
{var seq__10426_10485__$1 = temp__4092__auto___10484__$1;if(cljs.core.chunked_seq_QMARK_(seq__10426_10485__$1))
{var c__8566__auto___10486 = cljs.core.chunk_first(seq__10426_10485__$1);{
var G__10487 = cljs.core.chunk_rest(seq__10426_10485__$1);
var G__10488 = c__8566__auto___10486;
var G__10489 = cljs.core.count(c__8566__auto___10486);
var G__10490 = 0;
seq__10426_10475 = G__10487;
chunk__10427_10476 = G__10488;
count__10428_10477 = G__10489;
i__10429_10478 = G__10490;
continue;
}
} else
{var dep_10491 = cljs.core.first(seq__10426_10485__$1);dep_10491.rank = tailrecursion.javelin.next_rank();
{
var G__10492 = cljs.core.next(seq__10426_10485__$1);
var G__10493 = null;
var G__10494 = 0;
var G__10495 = 0;
seq__10426_10475 = G__10492;
chunk__10427_10476 = G__10493;
count__10428_10477 = G__10494;
i__10429_10478 = G__10495;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__10496 = cljs.core.next(seq__10418_10468__$1);
var G__10497 = null;
var G__10498 = 0;
var G__10499 = 0;
seq__10418_10437 = G__10496;
chunk__10419_10438 = G__10497;
count__10420_10439 = G__10498;
i__10421_10440 = G__10499;
continue;
}
}
} else
{}
}
break;
}
var compute = ((function (vec__10417,f,sources){
return (function (p1__10393_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__10393_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__10393_SHARP_)));
});})(vec__10417,f,sources))
;var thunk = ((function (compute,vec__10417,f,sources){
return (function (){var x = this$.state;var y = compute(this$.sources);var seq__10430_10500 = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$.watches,cljs.core.constant$keyword$18));var chunk__10431_10501 = null;var count__10432_10502 = 0;var i__10433_10503 = 0;while(true){
if((i__10433_10503 < count__10432_10502))
{var vec__10434_10504 = chunk__10431_10501.cljs$core$IIndexed$_nth$arity$2(null,i__10433_10503);var k_10505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10434_10504,0,null);var f_10506__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10434_10504,1,null);(f_10506__$1.cljs$core$IFn$_invoke$arity$4 ? f_10506__$1.cljs$core$IFn$_invoke$arity$4(k_10505,this$,x,y) : f_10506__$1.call(null,k_10505,this$,x,y));
{
var G__10507 = seq__10430_10500;
var G__10508 = chunk__10431_10501;
var G__10509 = count__10432_10502;
var G__10510 = (i__10433_10503 + 1);
seq__10430_10500 = G__10507;
chunk__10431_10501 = G__10508;
count__10432_10502 = G__10509;
i__10433_10503 = G__10510;
continue;
}
} else
{var temp__4092__auto___10511 = cljs.core.seq(seq__10430_10500);if(temp__4092__auto___10511)
{var seq__10430_10512__$1 = temp__4092__auto___10511;if(cljs.core.chunked_seq_QMARK_(seq__10430_10512__$1))
{var c__8566__auto___10513 = cljs.core.chunk_first(seq__10430_10512__$1);{
var G__10514 = cljs.core.chunk_rest(seq__10430_10512__$1);
var G__10515 = c__8566__auto___10513;
var G__10516 = cljs.core.count(c__8566__auto___10513);
var G__10517 = 0;
seq__10430_10500 = G__10514;
chunk__10431_10501 = G__10515;
count__10432_10502 = G__10516;
i__10433_10503 = G__10517;
continue;
}
} else
{var vec__10435_10518 = cljs.core.first(seq__10430_10512__$1);var k_10519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10435_10518,0,null);var f_10520__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10435_10518,1,null);(f_10520__$1.cljs$core$IFn$_invoke$arity$4 ? f_10520__$1.cljs$core$IFn$_invoke$arity$4(k_10519,this$,x,y) : f_10520__$1.call(null,k_10519,this$,x,y));
{
var G__10521 = cljs.core.next(seq__10430_10512__$1);
var G__10522 = null;
var G__10523 = 0;
var G__10524 = 0;
seq__10430_10500 = G__10521;
chunk__10431_10501 = G__10522;
count__10432_10502 = G__10523;
i__10433_10503 = G__10524;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute,vec__10417,f,sources))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch(this$,cljs.core.constant$keyword$18,(cljs.core.truth_(f)?((function (compute,thunk,err_mesg,vec__10417,f,sources){
return (function (){throw (new Error(err_mesg));
});})(compute,thunk,err_mesg,vec__10417,f,sources))
:((function (compute,thunk,err_mesg,vec__10417,f,sources){
return (function (p1__10395_SHARP_,p2__10394_SHARP_){return tailrecursion.javelin.propagate_BANG_(p2__10394_SHARP_);
});})(compute,thunk,err_mesg,vec__10417,f,sources))
));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:((function (compute,thunk,err_mesg,vec__10417,f,sources){
return (function (){return cljs.core.deref(this$);
});})(compute,thunk,err_mesg,vec__10417,f,sources))
);
var G__10436 = this$;tailrecursion.javelin.propagate_BANG_(G__10436);
return G__10436;
};
var set_formula_BANG_ = function (this$,var_args){
var p__10396 = null;if (arguments.length > 1) {
  p__10396 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__10396);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__10525){
var this$ = cljs.core.first(arglist__10525);
var p__10396 = cljs.core.rest(arglist__10525);
return set_formula_BANG___delegate(this$,p__10396);
});
set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_formula_BANG___delegate;
return set_formula_BANG_;
})()
;

/**
* @constructor
*/
tailrecursion.javelin.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.input_QMARK_ = input_QMARK_;
this.cljs$lang$protocol_mask$partition1$ = 98306;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
})
tailrecursion.javelin.Cell.cljs$lang$type = true;
tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__8377__auto__,writer__8378__auto__,opt__8379__auto__){return cljs.core._write(writer__8378__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__10526 = cljs.core.seq(self__.watches);var chunk__10527 = null;var count__10528 = 0;var i__10529 = 0;while(true){
if((i__10529 < count__10528))
{var vec__10530 = chunk__10527.cljs$core$IIndexed$_nth$arity$2(null,i__10529);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10530,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10530,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__10532 = seq__10526;
var G__10533 = chunk__10527;
var G__10534 = count__10528;
var G__10535 = (i__10529 + 1);
seq__10526 = G__10532;
chunk__10527 = G__10533;
count__10528 = G__10534;
i__10529 = G__10535;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10526);if(temp__4092__auto__)
{var seq__10526__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__10526__$1))
{var c__8566__auto__ = cljs.core.chunk_first(seq__10526__$1);{
var G__10536 = cljs.core.chunk_rest(seq__10526__$1);
var G__10537 = c__8566__auto__;
var G__10538 = cljs.core.count(c__8566__auto__);
var G__10539 = 0;
seq__10526 = G__10536;
chunk__10527 = G__10537;
count__10528 = G__10538;
i__10529 = G__10539;
continue;
}
} else
{var vec__10531 = cljs.core.first(seq__10526__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10531,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10531,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__10540 = cljs.core.next(seq__10526__$1);
var G__10541 = null;
var G__10542 = 0;
var G__10543 = 0;
seq__10526 = G__10540;
chunk__10527 = G__10541;
count__10528 = G__10542;
i__10529 = G__10543;
continue;
}
}
} else
{return null;
}
}
break;
}
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});
tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){var self__ = this;
var this$__$1 = this;return cljs.core.reset_BANG_(this$__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(this$__$1.state) : f.call(null,this$__$1.state)));
});
tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){var self__ = this;
var this$__$1 = this;return cljs.core.reset_BANG_(this$__$1,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$__$1.state,a) : f.call(null,this$__$1.state,a)));
});
tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){var self__ = this;
var this$__$1 = this;return cljs.core.reset_BANG_(this$__$1,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(this$__$1.state,a,b) : f.call(null,this$__$1.state,a,b)));
});
tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){var self__ = this;
var this$__$1 = this;return cljs.core.reset_BANG_(this$__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs));
});
tailrecursion.javelin.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){var self__ = this;
var this$__$1 = this;var old_value = this$__$1.state;this$__$1.state = new_value;
if((this$__$1.watches == null))
{} else
{cljs.core._notify_watches(this$__$1,old_value,new_value);
}
return new_value;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1.state;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});
tailrecursion.javelin.__GT_Cell = (function __GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_){return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_));
});
tailrecursion.javelin.lift = (function lift(f){return (function() { 
var G__10544__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$19) : tailrecursion.javelin.cell.call(null,cljs.core.constant$keyword$19)),cljs.core.array_seq([f,sources], 0));
};
var G__10544 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10544__delegate.call(this,sources);};
G__10544.cljs$lang$maxFixedArity = 0;
G__10544.cljs$lang$applyTo = (function (arglist__10545){
var sources = cljs.core.seq(arglist__10545);
return G__10544__delegate(sources);
});
G__10544.cljs$core$IFn$_invoke$arity$variadic = G__10544__delegate;
return G__10544;
})()
;
});
tailrecursion.javelin.cell = (function cell(x){return tailrecursion.javelin.set_formula_BANG_((new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.cell_QMARK_ = (function cell_QMARK_(c){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),tailrecursion.javelin.Cell))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__7798__auto__ = tailrecursion.javelin.cell_QMARK_(c);if(cljs.core.truth_(and__7798__auto__))
{return c.input_QMARK_;
} else
{return and__7798__auto__;
}
})()))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.set_cell_BANG_ = (function set_cell_BANG_(c,x){c.state = x;
return tailrecursion.javelin.set_formula_BANG_(c);
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (cells){var olds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.constant$keyword$19));var tag_neq = ((function (olds){
return (function (p1__10546_SHARP_,p2__10547_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__10546_SHARP_,p2__10547_SHARP_),p2__10547_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__10549_SHARP_,p2__10548_SHARP_){return cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__10549_SHARP_,p2__10548_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__10551__delegate = function (rest__10550_SHARP_){var news = diff(cljs.core.deref(olds),rest__10550_SHARP_);cljs.core.reset_BANG_(olds,rest__10550_SHARP_);
return news;
};
var G__10551 = function (var_args){
var rest__10550_SHARP_ = null;if (arguments.length > 0) {
  rest__10550_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10551__delegate.call(this,rest__10550_SHARP_);};
G__10551.cljs$lang$maxFixedArity = 0;
G__10551.cljs$lang$applyTo = (function (arglist__10552){
var rest__10550_SHARP_ = cljs.core.seq(arglist__10552);
return G__10551__delegate(rest__10550_SHARP_);
});
G__10551.cljs$core$IFn$_invoke$arity$variadic = G__10551__delegate;
return G__10551;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.lift(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10553){
var cells = cljs.core.seq(arglist__10553);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift(cljs.core.seq).call(null,c);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__10554_SHARP_){return tailrecursion.javelin.lift(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__10554_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,cljs.core.count(cljs.core.deref(cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items,f){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(cljs.core.seq).call(null,items);var cur_count = tailrecursion.javelin.lift(cljs.core.count).call(null,items_seq);var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__10555_SHARP_){return tailrecursion.javelin.lift(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__10555_SHARP_);
});})(pool_size,items_seq,cur_count))
;return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){if((pool_size__$1 < cur_count__$1))
{var seq__10560_10564 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));var chunk__10561_10565 = null;var count__10562_10566 = 0;var i__10563_10567 = 0;while(true){
if((i__10563_10567 < count__10562_10566))
{var i_10568 = chunk__10561_10565.cljs$core$IIndexed$_nth$arity$2(null,i__10563_10567);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10568) : ith_item__$1.call(null,i_10568))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10568) : ith_item__$1.call(null,i_10568))));
{
var G__10569 = seq__10560_10564;
var G__10570 = chunk__10561_10565;
var G__10571 = count__10562_10566;
var G__10572 = (i__10563_10567 + 1);
seq__10560_10564 = G__10569;
chunk__10561_10565 = G__10570;
count__10562_10566 = G__10571;
i__10563_10567 = G__10572;
continue;
}
} else
{var temp__4092__auto___10573 = cljs.core.seq(seq__10560_10564);if(temp__4092__auto___10573)
{var seq__10560_10574__$1 = temp__4092__auto___10573;if(cljs.core.chunked_seq_QMARK_(seq__10560_10574__$1))
{var c__8566__auto___10575 = cljs.core.chunk_first(seq__10560_10574__$1);{
var G__10576 = cljs.core.chunk_rest(seq__10560_10574__$1);
var G__10577 = c__8566__auto___10575;
var G__10578 = cljs.core.count(c__8566__auto___10575);
var G__10579 = 0;
seq__10560_10564 = G__10576;
chunk__10561_10565 = G__10577;
count__10562_10566 = G__10578;
i__10563_10567 = G__10579;
continue;
}
} else
{var i_10580 = cljs.core.first(seq__10560_10574__$1);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10580) : ith_item__$1.call(null,i_10580))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10580) : ith_item__$1.call(null,i_10580))));
{
var G__10581 = cljs.core.next(seq__10560_10574__$1);
var G__10582 = null;
var G__10583 = 0;
var G__10584 = 0;
seq__10560_10564 = G__10581;
chunk__10561_10565 = G__10582;
count__10562_10566 = G__10583;
i__10563_10567 = G__10584;
continue;
}
}
} else
{}
}
break;
}
return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else
{return null;
}
});})(pool_size,items_seq,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
