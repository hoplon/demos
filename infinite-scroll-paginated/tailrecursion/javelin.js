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
}catch (e9416){if((e9416 instanceof Error))
{var _ = e9416;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e9416;
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
return (function (p1__9417_SHARP_,p2__9418_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9417_SHARP_,p2__9418_SHARP_,p2__9418_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop(queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__9419 = ((continue_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reducer,siblings,children):siblings);
queue = G__9419;
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
var seq__9424 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,srcs));var chunk__9425 = null;var count__9426 = 0;var i__9427 = 0;while(true){
if((i__9427 < count__9426))
{var src = chunk__9425.cljs$core$IIndexed$_nth$arity$2(null,i__9427);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9428 = seq__9424;
var G__9429 = chunk__9425;
var G__9430 = count__9426;
var G__9431 = (i__9427 + 1);
seq__9424 = G__9428;
chunk__9425 = G__9429;
count__9426 = G__9430;
i__9427 = G__9431;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9424);if(temp__4092__auto__)
{var seq__9424__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9424__$1))
{var c__8022__auto__ = cljs.core.chunk_first(seq__9424__$1);{
var G__9432 = cljs.core.chunk_rest(seq__9424__$1);
var G__9433 = c__8022__auto__;
var G__9434 = cljs.core.count(c__8022__auto__);
var G__9435 = 0;
seq__9424 = G__9432;
chunk__9425 = G__9433;
count__9426 = G__9434;
i__9427 = G__9435;
continue;
}
} else
{var src = cljs.core.first(seq__9424__$1);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9436 = cljs.core.next(seq__9424__$1);
var G__9437 = null;
var G__9438 = 0;
var G__9439 = 0;
seq__9424 = G__9436;
chunk__9425 = G__9437;
count__9426 = G__9438;
i__9427 = G__9439;
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
var set_formula_BANG___delegate = function (this$,p__9444){var vec__9465 = p__9444;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9465,0,null);var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9465,1,null);tailrecursion.javelin.destroy_cell_BANG_(this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f):cljs.core.vec(sources));
var seq__9466_9485 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__9467_9486 = null;var count__9468_9487 = 0;var i__9469_9488 = 0;while(true){
if((i__9469_9488 < count__9468_9487))
{var source_9489 = chunk__9467_9486.cljs$core$IIndexed$_nth$arity$2(null,i__9469_9488);source_9489.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9489.sinks,this$);
if((source_9489.rank > this$.rank))
{var seq__9470_9490 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9466_9485,chunk__9467_9486,count__9468_9487,i__9469_9488,source_9489,vec__9465,f,sources){
return (function (p1__9440_SHARP_){return p1__9440_SHARP_.sinks;
});})(seq__9466_9485,chunk__9467_9486,count__9468_9487,i__9469_9488,source_9489,vec__9465,f,sources))
,source_9489));var chunk__9471_9491 = null;var count__9472_9492 = 0;var i__9473_9493 = 0;while(true){
if((i__9473_9493 < count__9472_9492))
{var dep_9494 = chunk__9471_9491.cljs$core$IIndexed$_nth$arity$2(null,i__9473_9493);dep_9494.rank = tailrecursion.javelin.next_rank();
{
var G__9495 = seq__9470_9490;
var G__9496 = chunk__9471_9491;
var G__9497 = count__9472_9492;
var G__9498 = (i__9473_9493 + 1);
seq__9470_9490 = G__9495;
chunk__9471_9491 = G__9496;
count__9472_9492 = G__9497;
i__9473_9493 = G__9498;
continue;
}
} else
{var temp__4092__auto___9499 = cljs.core.seq(seq__9470_9490);if(temp__4092__auto___9499)
{var seq__9470_9500__$1 = temp__4092__auto___9499;if(cljs.core.chunked_seq_QMARK_(seq__9470_9500__$1))
{var c__8022__auto___9501 = cljs.core.chunk_first(seq__9470_9500__$1);{
var G__9502 = cljs.core.chunk_rest(seq__9470_9500__$1);
var G__9503 = c__8022__auto___9501;
var G__9504 = cljs.core.count(c__8022__auto___9501);
var G__9505 = 0;
seq__9470_9490 = G__9502;
chunk__9471_9491 = G__9503;
count__9472_9492 = G__9504;
i__9473_9493 = G__9505;
continue;
}
} else
{var dep_9506 = cljs.core.first(seq__9470_9500__$1);dep_9506.rank = tailrecursion.javelin.next_rank();
{
var G__9507 = cljs.core.next(seq__9470_9500__$1);
var G__9508 = null;
var G__9509 = 0;
var G__9510 = 0;
seq__9470_9490 = G__9507;
chunk__9471_9491 = G__9508;
count__9472_9492 = G__9509;
i__9473_9493 = G__9510;
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
var G__9511 = seq__9466_9485;
var G__9512 = chunk__9467_9486;
var G__9513 = count__9468_9487;
var G__9514 = (i__9469_9488 + 1);
seq__9466_9485 = G__9511;
chunk__9467_9486 = G__9512;
count__9468_9487 = G__9513;
i__9469_9488 = G__9514;
continue;
}
} else
{var temp__4092__auto___9515 = cljs.core.seq(seq__9466_9485);if(temp__4092__auto___9515)
{var seq__9466_9516__$1 = temp__4092__auto___9515;if(cljs.core.chunked_seq_QMARK_(seq__9466_9516__$1))
{var c__8022__auto___9517 = cljs.core.chunk_first(seq__9466_9516__$1);{
var G__9518 = cljs.core.chunk_rest(seq__9466_9516__$1);
var G__9519 = c__8022__auto___9517;
var G__9520 = cljs.core.count(c__8022__auto___9517);
var G__9521 = 0;
seq__9466_9485 = G__9518;
chunk__9467_9486 = G__9519;
count__9468_9487 = G__9520;
i__9469_9488 = G__9521;
continue;
}
} else
{var source_9522 = cljs.core.first(seq__9466_9516__$1);source_9522.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9522.sinks,this$);
if((source_9522.rank > this$.rank))
{var seq__9474_9523 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9466_9485,chunk__9467_9486,count__9468_9487,i__9469_9488,source_9522,seq__9466_9516__$1,temp__4092__auto___9515,vec__9465,f,sources){
return (function (p1__9440_SHARP_){return p1__9440_SHARP_.sinks;
});})(seq__9466_9485,chunk__9467_9486,count__9468_9487,i__9469_9488,source_9522,seq__9466_9516__$1,temp__4092__auto___9515,vec__9465,f,sources))
,source_9522));var chunk__9475_9524 = null;var count__9476_9525 = 0;var i__9477_9526 = 0;while(true){
if((i__9477_9526 < count__9476_9525))
{var dep_9527 = chunk__9475_9524.cljs$core$IIndexed$_nth$arity$2(null,i__9477_9526);dep_9527.rank = tailrecursion.javelin.next_rank();
{
var G__9528 = seq__9474_9523;
var G__9529 = chunk__9475_9524;
var G__9530 = count__9476_9525;
var G__9531 = (i__9477_9526 + 1);
seq__9474_9523 = G__9528;
chunk__9475_9524 = G__9529;
count__9476_9525 = G__9530;
i__9477_9526 = G__9531;
continue;
}
} else
{var temp__4092__auto___9532__$1 = cljs.core.seq(seq__9474_9523);if(temp__4092__auto___9532__$1)
{var seq__9474_9533__$1 = temp__4092__auto___9532__$1;if(cljs.core.chunked_seq_QMARK_(seq__9474_9533__$1))
{var c__8022__auto___9534 = cljs.core.chunk_first(seq__9474_9533__$1);{
var G__9535 = cljs.core.chunk_rest(seq__9474_9533__$1);
var G__9536 = c__8022__auto___9534;
var G__9537 = cljs.core.count(c__8022__auto___9534);
var G__9538 = 0;
seq__9474_9523 = G__9535;
chunk__9475_9524 = G__9536;
count__9476_9525 = G__9537;
i__9477_9526 = G__9538;
continue;
}
} else
{var dep_9539 = cljs.core.first(seq__9474_9533__$1);dep_9539.rank = tailrecursion.javelin.next_rank();
{
var G__9540 = cljs.core.next(seq__9474_9533__$1);
var G__9541 = null;
var G__9542 = 0;
var G__9543 = 0;
seq__9474_9523 = G__9540;
chunk__9475_9524 = G__9541;
count__9476_9525 = G__9542;
i__9477_9526 = G__9543;
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
var G__9544 = cljs.core.next(seq__9466_9516__$1);
var G__9545 = null;
var G__9546 = 0;
var G__9547 = 0;
seq__9466_9485 = G__9544;
chunk__9467_9486 = G__9545;
count__9468_9487 = G__9546;
i__9469_9488 = G__9547;
continue;
}
}
} else
{}
}
break;
}
var compute = ((function (vec__9465,f,sources){
return (function (p1__9441_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9441_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9441_SHARP_)));
});})(vec__9465,f,sources))
;var thunk = ((function (compute,vec__9465,f,sources){
return (function (){var x = this$.state;var y = compute(this$.sources);var seq__9478_9548 = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$.watches,cljs.core.constant$keyword$18));var chunk__9479_9549 = null;var count__9480_9550 = 0;var i__9481_9551 = 0;while(true){
if((i__9481_9551 < count__9480_9550))
{var vec__9482_9552 = chunk__9479_9549.cljs$core$IIndexed$_nth$arity$2(null,i__9481_9551);var k_9553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9482_9552,0,null);var f_9554__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9482_9552,1,null);(f_9554__$1.cljs$core$IFn$_invoke$arity$4 ? f_9554__$1.cljs$core$IFn$_invoke$arity$4(k_9553,this$,x,y) : f_9554__$1.call(null,k_9553,this$,x,y));
{
var G__9555 = seq__9478_9548;
var G__9556 = chunk__9479_9549;
var G__9557 = count__9480_9550;
var G__9558 = (i__9481_9551 + 1);
seq__9478_9548 = G__9555;
chunk__9479_9549 = G__9556;
count__9480_9550 = G__9557;
i__9481_9551 = G__9558;
continue;
}
} else
{var temp__4092__auto___9559 = cljs.core.seq(seq__9478_9548);if(temp__4092__auto___9559)
{var seq__9478_9560__$1 = temp__4092__auto___9559;if(cljs.core.chunked_seq_QMARK_(seq__9478_9560__$1))
{var c__8022__auto___9561 = cljs.core.chunk_first(seq__9478_9560__$1);{
var G__9562 = cljs.core.chunk_rest(seq__9478_9560__$1);
var G__9563 = c__8022__auto___9561;
var G__9564 = cljs.core.count(c__8022__auto___9561);
var G__9565 = 0;
seq__9478_9548 = G__9562;
chunk__9479_9549 = G__9563;
count__9480_9550 = G__9564;
i__9481_9551 = G__9565;
continue;
}
} else
{var vec__9483_9566 = cljs.core.first(seq__9478_9560__$1);var k_9567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9483_9566,0,null);var f_9568__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9483_9566,1,null);(f_9568__$1.cljs$core$IFn$_invoke$arity$4 ? f_9568__$1.cljs$core$IFn$_invoke$arity$4(k_9567,this$,x,y) : f_9568__$1.call(null,k_9567,this$,x,y));
{
var G__9569 = cljs.core.next(seq__9478_9560__$1);
var G__9570 = null;
var G__9571 = 0;
var G__9572 = 0;
seq__9478_9548 = G__9569;
chunk__9479_9549 = G__9570;
count__9480_9550 = G__9571;
i__9481_9551 = G__9572;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute,vec__9465,f,sources))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch(this$,cljs.core.constant$keyword$18,(cljs.core.truth_(f)?((function (compute,thunk,err_mesg,vec__9465,f,sources){
return (function (){throw (new Error(err_mesg));
});})(compute,thunk,err_mesg,vec__9465,f,sources))
:((function (compute,thunk,err_mesg,vec__9465,f,sources){
return (function (p1__9443_SHARP_,p2__9442_SHARP_){return tailrecursion.javelin.propagate_BANG_(p2__9442_SHARP_);
});})(compute,thunk,err_mesg,vec__9465,f,sources))
));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:((function (compute,thunk,err_mesg,vec__9465,f,sources){
return (function (){return cljs.core.deref(this$);
});})(compute,thunk,err_mesg,vec__9465,f,sources))
);
var G__9484 = this$;tailrecursion.javelin.propagate_BANG_(G__9484);
return G__9484;
};
var set_formula_BANG_ = function (this$,var_args){
var p__9444 = null;if (arguments.length > 1) {
  p__9444 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__9444);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__9573){
var this$ = cljs.core.first(arglist__9573);
var p__9444 = cljs.core.rest(arglist__9573);
return set_formula_BANG___delegate(this$,p__9444);
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
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__7833__auto__,writer__7834__auto__,opt__7835__auto__){return cljs.core._write(writer__7834__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__9574 = cljs.core.seq(self__.watches);var chunk__9575 = null;var count__9576 = 0;var i__9577 = 0;while(true){
if((i__9577 < count__9576))
{var vec__9578 = chunk__9575.cljs$core$IIndexed$_nth$arity$2(null,i__9577);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9578,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9578,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9580 = seq__9574;
var G__9581 = chunk__9575;
var G__9582 = count__9576;
var G__9583 = (i__9577 + 1);
seq__9574 = G__9580;
chunk__9575 = G__9581;
count__9576 = G__9582;
i__9577 = G__9583;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9574);if(temp__4092__auto__)
{var seq__9574__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9574__$1))
{var c__8022__auto__ = cljs.core.chunk_first(seq__9574__$1);{
var G__9584 = cljs.core.chunk_rest(seq__9574__$1);
var G__9585 = c__8022__auto__;
var G__9586 = cljs.core.count(c__8022__auto__);
var G__9587 = 0;
seq__9574 = G__9584;
chunk__9575 = G__9585;
count__9576 = G__9586;
i__9577 = G__9587;
continue;
}
} else
{var vec__9579 = cljs.core.first(seq__9574__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9579,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9579,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9588 = cljs.core.next(seq__9574__$1);
var G__9589 = null;
var G__9590 = 0;
var G__9591 = 0;
seq__9574 = G__9588;
chunk__9575 = G__9589;
count__9576 = G__9590;
i__9577 = G__9591;
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
var G__9592__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$19) : tailrecursion.javelin.cell.call(null,cljs.core.constant$keyword$19)),cljs.core.array_seq([f,sources], 0));
};
var G__9592 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9592__delegate.call(this,sources);};
G__9592.cljs$lang$maxFixedArity = 0;
G__9592.cljs$lang$applyTo = (function (arglist__9593){
var sources = cljs.core.seq(arglist__9593);
return G__9592__delegate(sources);
});
G__9592.cljs$core$IFn$_invoke$arity$variadic = G__9592__delegate;
return G__9592;
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
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__7254__auto__ = tailrecursion.javelin.cell_QMARK_(c);if(cljs.core.truth_(and__7254__auto__))
{return c.input_QMARK_;
} else
{return and__7254__auto__;
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
return (function (p1__9594_SHARP_,p2__9595_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__9594_SHARP_,p2__9595_SHARP_),p2__9595_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__9597_SHARP_,p2__9596_SHARP_){return cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__9597_SHARP_,p2__9596_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9599__delegate = function (rest__9598_SHARP_){var news = diff(cljs.core.deref(olds),rest__9598_SHARP_);cljs.core.reset_BANG_(olds,rest__9598_SHARP_);
return news;
};
var G__9599 = function (var_args){
var rest__9598_SHARP_ = null;if (arguments.length > 0) {
  rest__9598_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9599__delegate.call(this,rest__9598_SHARP_);};
G__9599.cljs$lang$maxFixedArity = 0;
G__9599.cljs$lang$applyTo = (function (arglist__9600){
var rest__9598_SHARP_ = cljs.core.seq(arglist__9600);
return G__9599__delegate(rest__9598_SHARP_);
});
G__9599.cljs$core$IFn$_invoke$arity$variadic = G__9599__delegate;
return G__9599;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.lift(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9601){
var cells = cljs.core.seq(arglist__9601);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift(cljs.core.seq).call(null,c);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__9602_SHARP_){return tailrecursion.javelin.lift(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__9602_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,cljs.core.count(cljs.core.deref(cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items,f){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(cljs.core.seq).call(null,items);var cur_count = tailrecursion.javelin.lift(cljs.core.count).call(null,items_seq);var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__9603_SHARP_){return tailrecursion.javelin.lift(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__9603_SHARP_);
});})(pool_size,items_seq,cur_count))
;return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){if((pool_size__$1 < cur_count__$1))
{var seq__9608_9612 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));var chunk__9609_9613 = null;var count__9610_9614 = 0;var i__9611_9615 = 0;while(true){
if((i__9611_9615 < count__9610_9614))
{var i_9616 = chunk__9609_9613.cljs$core$IIndexed$_nth$arity$2(null,i__9611_9615);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9616) : ith_item__$1.call(null,i_9616))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9616) : ith_item__$1.call(null,i_9616))));
{
var G__9617 = seq__9608_9612;
var G__9618 = chunk__9609_9613;
var G__9619 = count__9610_9614;
var G__9620 = (i__9611_9615 + 1);
seq__9608_9612 = G__9617;
chunk__9609_9613 = G__9618;
count__9610_9614 = G__9619;
i__9611_9615 = G__9620;
continue;
}
} else
{var temp__4092__auto___9621 = cljs.core.seq(seq__9608_9612);if(temp__4092__auto___9621)
{var seq__9608_9622__$1 = temp__4092__auto___9621;if(cljs.core.chunked_seq_QMARK_(seq__9608_9622__$1))
{var c__8022__auto___9623 = cljs.core.chunk_first(seq__9608_9622__$1);{
var G__9624 = cljs.core.chunk_rest(seq__9608_9622__$1);
var G__9625 = c__8022__auto___9623;
var G__9626 = cljs.core.count(c__8022__auto___9623);
var G__9627 = 0;
seq__9608_9612 = G__9624;
chunk__9609_9613 = G__9625;
count__9610_9614 = G__9626;
i__9611_9615 = G__9627;
continue;
}
} else
{var i_9628 = cljs.core.first(seq__9608_9622__$1);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9628) : ith_item__$1.call(null,i_9628))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9628) : ith_item__$1.call(null,i_9628))));
{
var G__9629 = cljs.core.next(seq__9608_9622__$1);
var G__9630 = null;
var G__9631 = 0;
var G__9632 = 0;
seq__9608_9612 = G__9629;
chunk__9609_9613 = G__9630;
count__9610_9614 = G__9631;
i__9611_9615 = G__9632;
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
