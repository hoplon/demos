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
}catch (e9449){if((e9449 instanceof Error))
{var _ = e9449;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e9449;
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
return (function (p1__9450_SHARP_,p2__9451_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9450_SHARP_,p2__9451_SHARP_,p2__9451_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop(queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__9452 = ((continue_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reducer,siblings,children):siblings);
queue = G__9452;
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
var seq__9457 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,srcs));var chunk__9458 = null;var count__9459 = 0;var i__9460 = 0;while(true){
if((i__9460 < count__9459))
{var src = chunk__9458.cljs$core$IIndexed$_nth$arity$2(null,i__9460);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9461 = seq__9457;
var G__9462 = chunk__9458;
var G__9463 = count__9459;
var G__9464 = (i__9460 + 1);
seq__9457 = G__9461;
chunk__9458 = G__9462;
count__9459 = G__9463;
i__9460 = G__9464;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9457);if(temp__4092__auto__)
{var seq__9457__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9457__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__9457__$1);{
var G__9465 = cljs.core.chunk_rest(seq__9457__$1);
var G__9466 = c__8023__auto__;
var G__9467 = cljs.core.count(c__8023__auto__);
var G__9468 = 0;
seq__9457 = G__9465;
chunk__9458 = G__9466;
count__9459 = G__9467;
i__9460 = G__9468;
continue;
}
} else
{var src = cljs.core.first(seq__9457__$1);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9469 = cljs.core.next(seq__9457__$1);
var G__9470 = null;
var G__9471 = 0;
var G__9472 = 0;
seq__9457 = G__9469;
chunk__9458 = G__9470;
count__9459 = G__9471;
i__9460 = G__9472;
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
var set_formula_BANG___delegate = function (this$,p__9477){var vec__9498 = p__9477;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9498,0,null);var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9498,1,null);tailrecursion.javelin.destroy_cell_BANG_(this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f):cljs.core.vec(sources));
var seq__9499_9518 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__9500_9519 = null;var count__9501_9520 = 0;var i__9502_9521 = 0;while(true){
if((i__9502_9521 < count__9501_9520))
{var source_9522 = chunk__9500_9519.cljs$core$IIndexed$_nth$arity$2(null,i__9502_9521);source_9522.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9522.sinks,this$);
if((source_9522.rank > this$.rank))
{var seq__9503_9523 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9499_9518,chunk__9500_9519,count__9501_9520,i__9502_9521,source_9522,vec__9498,f,sources){
return (function (p1__9473_SHARP_){return p1__9473_SHARP_.sinks;
});})(seq__9499_9518,chunk__9500_9519,count__9501_9520,i__9502_9521,source_9522,vec__9498,f,sources))
,source_9522));var chunk__9504_9524 = null;var count__9505_9525 = 0;var i__9506_9526 = 0;while(true){
if((i__9506_9526 < count__9505_9525))
{var dep_9527 = chunk__9504_9524.cljs$core$IIndexed$_nth$arity$2(null,i__9506_9526);dep_9527.rank = tailrecursion.javelin.next_rank();
{
var G__9528 = seq__9503_9523;
var G__9529 = chunk__9504_9524;
var G__9530 = count__9505_9525;
var G__9531 = (i__9506_9526 + 1);
seq__9503_9523 = G__9528;
chunk__9504_9524 = G__9529;
count__9505_9525 = G__9530;
i__9506_9526 = G__9531;
continue;
}
} else
{var temp__4092__auto___9532 = cljs.core.seq(seq__9503_9523);if(temp__4092__auto___9532)
{var seq__9503_9533__$1 = temp__4092__auto___9532;if(cljs.core.chunked_seq_QMARK_(seq__9503_9533__$1))
{var c__8023__auto___9534 = cljs.core.chunk_first(seq__9503_9533__$1);{
var G__9535 = cljs.core.chunk_rest(seq__9503_9533__$1);
var G__9536 = c__8023__auto___9534;
var G__9537 = cljs.core.count(c__8023__auto___9534);
var G__9538 = 0;
seq__9503_9523 = G__9535;
chunk__9504_9524 = G__9536;
count__9505_9525 = G__9537;
i__9506_9526 = G__9538;
continue;
}
} else
{var dep_9539 = cljs.core.first(seq__9503_9533__$1);dep_9539.rank = tailrecursion.javelin.next_rank();
{
var G__9540 = cljs.core.next(seq__9503_9533__$1);
var G__9541 = null;
var G__9542 = 0;
var G__9543 = 0;
seq__9503_9523 = G__9540;
chunk__9504_9524 = G__9541;
count__9505_9525 = G__9542;
i__9506_9526 = G__9543;
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
var G__9544 = seq__9499_9518;
var G__9545 = chunk__9500_9519;
var G__9546 = count__9501_9520;
var G__9547 = (i__9502_9521 + 1);
seq__9499_9518 = G__9544;
chunk__9500_9519 = G__9545;
count__9501_9520 = G__9546;
i__9502_9521 = G__9547;
continue;
}
} else
{var temp__4092__auto___9548 = cljs.core.seq(seq__9499_9518);if(temp__4092__auto___9548)
{var seq__9499_9549__$1 = temp__4092__auto___9548;if(cljs.core.chunked_seq_QMARK_(seq__9499_9549__$1))
{var c__8023__auto___9550 = cljs.core.chunk_first(seq__9499_9549__$1);{
var G__9551 = cljs.core.chunk_rest(seq__9499_9549__$1);
var G__9552 = c__8023__auto___9550;
var G__9553 = cljs.core.count(c__8023__auto___9550);
var G__9554 = 0;
seq__9499_9518 = G__9551;
chunk__9500_9519 = G__9552;
count__9501_9520 = G__9553;
i__9502_9521 = G__9554;
continue;
}
} else
{var source_9555 = cljs.core.first(seq__9499_9549__$1);source_9555.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9555.sinks,this$);
if((source_9555.rank > this$.rank))
{var seq__9507_9556 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9499_9518,chunk__9500_9519,count__9501_9520,i__9502_9521,source_9555,seq__9499_9549__$1,temp__4092__auto___9548,vec__9498,f,sources){
return (function (p1__9473_SHARP_){return p1__9473_SHARP_.sinks;
});})(seq__9499_9518,chunk__9500_9519,count__9501_9520,i__9502_9521,source_9555,seq__9499_9549__$1,temp__4092__auto___9548,vec__9498,f,sources))
,source_9555));var chunk__9508_9557 = null;var count__9509_9558 = 0;var i__9510_9559 = 0;while(true){
if((i__9510_9559 < count__9509_9558))
{var dep_9560 = chunk__9508_9557.cljs$core$IIndexed$_nth$arity$2(null,i__9510_9559);dep_9560.rank = tailrecursion.javelin.next_rank();
{
var G__9561 = seq__9507_9556;
var G__9562 = chunk__9508_9557;
var G__9563 = count__9509_9558;
var G__9564 = (i__9510_9559 + 1);
seq__9507_9556 = G__9561;
chunk__9508_9557 = G__9562;
count__9509_9558 = G__9563;
i__9510_9559 = G__9564;
continue;
}
} else
{var temp__4092__auto___9565__$1 = cljs.core.seq(seq__9507_9556);if(temp__4092__auto___9565__$1)
{var seq__9507_9566__$1 = temp__4092__auto___9565__$1;if(cljs.core.chunked_seq_QMARK_(seq__9507_9566__$1))
{var c__8023__auto___9567 = cljs.core.chunk_first(seq__9507_9566__$1);{
var G__9568 = cljs.core.chunk_rest(seq__9507_9566__$1);
var G__9569 = c__8023__auto___9567;
var G__9570 = cljs.core.count(c__8023__auto___9567);
var G__9571 = 0;
seq__9507_9556 = G__9568;
chunk__9508_9557 = G__9569;
count__9509_9558 = G__9570;
i__9510_9559 = G__9571;
continue;
}
} else
{var dep_9572 = cljs.core.first(seq__9507_9566__$1);dep_9572.rank = tailrecursion.javelin.next_rank();
{
var G__9573 = cljs.core.next(seq__9507_9566__$1);
var G__9574 = null;
var G__9575 = 0;
var G__9576 = 0;
seq__9507_9556 = G__9573;
chunk__9508_9557 = G__9574;
count__9509_9558 = G__9575;
i__9510_9559 = G__9576;
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
var G__9577 = cljs.core.next(seq__9499_9549__$1);
var G__9578 = null;
var G__9579 = 0;
var G__9580 = 0;
seq__9499_9518 = G__9577;
chunk__9500_9519 = G__9578;
count__9501_9520 = G__9579;
i__9502_9521 = G__9580;
continue;
}
}
} else
{}
}
break;
}
var compute = ((function (vec__9498,f,sources){
return (function (p1__9474_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9474_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9474_SHARP_)));
});})(vec__9498,f,sources))
;var thunk = ((function (compute,vec__9498,f,sources){
return (function (){var x = this$.state;var y = compute(this$.sources);var seq__9511_9581 = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$.watches,cljs.core.constant$keyword$18));var chunk__9512_9582 = null;var count__9513_9583 = 0;var i__9514_9584 = 0;while(true){
if((i__9514_9584 < count__9513_9583))
{var vec__9515_9585 = chunk__9512_9582.cljs$core$IIndexed$_nth$arity$2(null,i__9514_9584);var k_9586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9515_9585,0,null);var f_9587__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9515_9585,1,null);(f_9587__$1.cljs$core$IFn$_invoke$arity$4 ? f_9587__$1.cljs$core$IFn$_invoke$arity$4(k_9586,this$,x,y) : f_9587__$1.call(null,k_9586,this$,x,y));
{
var G__9588 = seq__9511_9581;
var G__9589 = chunk__9512_9582;
var G__9590 = count__9513_9583;
var G__9591 = (i__9514_9584 + 1);
seq__9511_9581 = G__9588;
chunk__9512_9582 = G__9589;
count__9513_9583 = G__9590;
i__9514_9584 = G__9591;
continue;
}
} else
{var temp__4092__auto___9592 = cljs.core.seq(seq__9511_9581);if(temp__4092__auto___9592)
{var seq__9511_9593__$1 = temp__4092__auto___9592;if(cljs.core.chunked_seq_QMARK_(seq__9511_9593__$1))
{var c__8023__auto___9594 = cljs.core.chunk_first(seq__9511_9593__$1);{
var G__9595 = cljs.core.chunk_rest(seq__9511_9593__$1);
var G__9596 = c__8023__auto___9594;
var G__9597 = cljs.core.count(c__8023__auto___9594);
var G__9598 = 0;
seq__9511_9581 = G__9595;
chunk__9512_9582 = G__9596;
count__9513_9583 = G__9597;
i__9514_9584 = G__9598;
continue;
}
} else
{var vec__9516_9599 = cljs.core.first(seq__9511_9593__$1);var k_9600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9516_9599,0,null);var f_9601__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9516_9599,1,null);(f_9601__$1.cljs$core$IFn$_invoke$arity$4 ? f_9601__$1.cljs$core$IFn$_invoke$arity$4(k_9600,this$,x,y) : f_9601__$1.call(null,k_9600,this$,x,y));
{
var G__9602 = cljs.core.next(seq__9511_9593__$1);
var G__9603 = null;
var G__9604 = 0;
var G__9605 = 0;
seq__9511_9581 = G__9602;
chunk__9512_9582 = G__9603;
count__9513_9583 = G__9604;
i__9514_9584 = G__9605;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute,vec__9498,f,sources))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch(this$,cljs.core.constant$keyword$18,(cljs.core.truth_(f)?((function (compute,thunk,err_mesg,vec__9498,f,sources){
return (function (){throw (new Error(err_mesg));
});})(compute,thunk,err_mesg,vec__9498,f,sources))
:((function (compute,thunk,err_mesg,vec__9498,f,sources){
return (function (p1__9476_SHARP_,p2__9475_SHARP_){return tailrecursion.javelin.propagate_BANG_(p2__9475_SHARP_);
});})(compute,thunk,err_mesg,vec__9498,f,sources))
));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:((function (compute,thunk,err_mesg,vec__9498,f,sources){
return (function (){return cljs.core.deref(this$);
});})(compute,thunk,err_mesg,vec__9498,f,sources))
);
var G__9517 = this$;tailrecursion.javelin.propagate_BANG_(G__9517);
return G__9517;
};
var set_formula_BANG_ = function (this$,var_args){
var p__9477 = null;if (arguments.length > 1) {
  p__9477 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__9477);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__9606){
var this$ = cljs.core.first(arglist__9606);
var p__9477 = cljs.core.rest(arglist__9606);
return set_formula_BANG___delegate(this$,p__9477);
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
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__7834__auto__,writer__7835__auto__,opt__7836__auto__){return cljs.core._write(writer__7835__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__9607 = cljs.core.seq(self__.watches);var chunk__9608 = null;var count__9609 = 0;var i__9610 = 0;while(true){
if((i__9610 < count__9609))
{var vec__9611 = chunk__9608.cljs$core$IIndexed$_nth$arity$2(null,i__9610);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9611,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9611,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9613 = seq__9607;
var G__9614 = chunk__9608;
var G__9615 = count__9609;
var G__9616 = (i__9610 + 1);
seq__9607 = G__9613;
chunk__9608 = G__9614;
count__9609 = G__9615;
i__9610 = G__9616;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9607);if(temp__4092__auto__)
{var seq__9607__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9607__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__9607__$1);{
var G__9617 = cljs.core.chunk_rest(seq__9607__$1);
var G__9618 = c__8023__auto__;
var G__9619 = cljs.core.count(c__8023__auto__);
var G__9620 = 0;
seq__9607 = G__9617;
chunk__9608 = G__9618;
count__9609 = G__9619;
i__9610 = G__9620;
continue;
}
} else
{var vec__9612 = cljs.core.first(seq__9607__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9612,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9612,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9621 = cljs.core.next(seq__9607__$1);
var G__9622 = null;
var G__9623 = 0;
var G__9624 = 0;
seq__9607 = G__9621;
chunk__9608 = G__9622;
count__9609 = G__9623;
i__9610 = G__9624;
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
var G__9625__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$19) : tailrecursion.javelin.cell.call(null,cljs.core.constant$keyword$19)),cljs.core.array_seq([f,sources], 0));
};
var G__9625 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9625__delegate.call(this,sources);};
G__9625.cljs$lang$maxFixedArity = 0;
G__9625.cljs$lang$applyTo = (function (arglist__9626){
var sources = cljs.core.seq(arglist__9626);
return G__9625__delegate(sources);
});
G__9625.cljs$core$IFn$_invoke$arity$variadic = G__9625__delegate;
return G__9625;
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
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__7255__auto__ = tailrecursion.javelin.cell_QMARK_(c);if(cljs.core.truth_(and__7255__auto__))
{return c.input_QMARK_;
} else
{return and__7255__auto__;
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
return (function (p1__9627_SHARP_,p2__9628_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__9627_SHARP_,p2__9628_SHARP_),p2__9628_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__9630_SHARP_,p2__9629_SHARP_){return cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__9630_SHARP_,p2__9629_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9632__delegate = function (rest__9631_SHARP_){var news = diff(cljs.core.deref(olds),rest__9631_SHARP_);cljs.core.reset_BANG_(olds,rest__9631_SHARP_);
return news;
};
var G__9632 = function (var_args){
var rest__9631_SHARP_ = null;if (arguments.length > 0) {
  rest__9631_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9632__delegate.call(this,rest__9631_SHARP_);};
G__9632.cljs$lang$maxFixedArity = 0;
G__9632.cljs$lang$applyTo = (function (arglist__9633){
var rest__9631_SHARP_ = cljs.core.seq(arglist__9633);
return G__9632__delegate(rest__9631_SHARP_);
});
G__9632.cljs$core$IFn$_invoke$arity$variadic = G__9632__delegate;
return G__9632;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.lift(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9634){
var cells = cljs.core.seq(arglist__9634);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift(cljs.core.seq).call(null,c);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__9635_SHARP_){return tailrecursion.javelin.lift(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__9635_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,cljs.core.count(cljs.core.deref(cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items,f){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(cljs.core.seq).call(null,items);var cur_count = tailrecursion.javelin.lift(cljs.core.count).call(null,items_seq);var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__9636_SHARP_){return tailrecursion.javelin.lift(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__9636_SHARP_);
});})(pool_size,items_seq,cur_count))
;return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){if((pool_size__$1 < cur_count__$1))
{var seq__9641_9645 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));var chunk__9642_9646 = null;var count__9643_9647 = 0;var i__9644_9648 = 0;while(true){
if((i__9644_9648 < count__9643_9647))
{var i_9649 = chunk__9642_9646.cljs$core$IIndexed$_nth$arity$2(null,i__9644_9648);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9649) : ith_item__$1.call(null,i_9649))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9649) : ith_item__$1.call(null,i_9649))));
{
var G__9650 = seq__9641_9645;
var G__9651 = chunk__9642_9646;
var G__9652 = count__9643_9647;
var G__9653 = (i__9644_9648 + 1);
seq__9641_9645 = G__9650;
chunk__9642_9646 = G__9651;
count__9643_9647 = G__9652;
i__9644_9648 = G__9653;
continue;
}
} else
{var temp__4092__auto___9654 = cljs.core.seq(seq__9641_9645);if(temp__4092__auto___9654)
{var seq__9641_9655__$1 = temp__4092__auto___9654;if(cljs.core.chunked_seq_QMARK_(seq__9641_9655__$1))
{var c__8023__auto___9656 = cljs.core.chunk_first(seq__9641_9655__$1);{
var G__9657 = cljs.core.chunk_rest(seq__9641_9655__$1);
var G__9658 = c__8023__auto___9656;
var G__9659 = cljs.core.count(c__8023__auto___9656);
var G__9660 = 0;
seq__9641_9645 = G__9657;
chunk__9642_9646 = G__9658;
count__9643_9647 = G__9659;
i__9644_9648 = G__9660;
continue;
}
} else
{var i_9661 = cljs.core.first(seq__9641_9655__$1);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9661) : ith_item__$1.call(null,i_9661))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9661) : ith_item__$1.call(null,i_9661))));
{
var G__9662 = cljs.core.next(seq__9641_9655__$1);
var G__9663 = null;
var G__9664 = 0;
var G__9665 = 0;
seq__9641_9645 = G__9662;
chunk__9642_9646 = G__9663;
count__9643_9647 = G__9664;
i__9644_9648 = G__9665;
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
