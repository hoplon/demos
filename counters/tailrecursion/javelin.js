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
}catch (e9565){if((e9565 instanceof Error))
{var _ = e9565;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e9565;
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
return (function (p1__9566_SHARP_,p2__9567_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9566_SHARP_,p2__9567_SHARP_,p2__9567_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop(queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__9568 = ((continue_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reducer,siblings,children):siblings);
queue = G__9568;
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
var seq__9573 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,srcs));var chunk__9574 = null;var count__9575 = 0;var i__9576 = 0;while(true){
if((i__9576 < count__9575))
{var src = chunk__9574.cljs$core$IIndexed$_nth$arity$2(null,i__9576);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9577 = seq__9573;
var G__9578 = chunk__9574;
var G__9579 = count__9575;
var G__9580 = (i__9576 + 1);
seq__9573 = G__9577;
chunk__9574 = G__9578;
count__9575 = G__9579;
i__9576 = G__9580;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9573);if(temp__4092__auto__)
{var seq__9573__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9573__$1))
{var c__8019__auto__ = cljs.core.chunk_first(seq__9573__$1);{
var G__9581 = cljs.core.chunk_rest(seq__9573__$1);
var G__9582 = c__8019__auto__;
var G__9583 = cljs.core.count(c__8019__auto__);
var G__9584 = 0;
seq__9573 = G__9581;
chunk__9574 = G__9582;
count__9575 = G__9583;
i__9576 = G__9584;
continue;
}
} else
{var src = cljs.core.first(seq__9573__$1);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9585 = cljs.core.next(seq__9573__$1);
var G__9586 = null;
var G__9587 = 0;
var G__9588 = 0;
seq__9573 = G__9585;
chunk__9574 = G__9586;
count__9575 = G__9587;
i__9576 = G__9588;
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
var set_formula_BANG___delegate = function (this$,p__9593){var vec__9614 = p__9593;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9614,0,null);var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9614,1,null);tailrecursion.javelin.destroy_cell_BANG_(this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f):cljs.core.vec(sources));
var seq__9615_9634 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__9616_9635 = null;var count__9617_9636 = 0;var i__9618_9637 = 0;while(true){
if((i__9618_9637 < count__9617_9636))
{var source_9638 = chunk__9616_9635.cljs$core$IIndexed$_nth$arity$2(null,i__9618_9637);source_9638.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9638.sinks,this$);
if((source_9638.rank > this$.rank))
{var seq__9619_9639 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9615_9634,chunk__9616_9635,count__9617_9636,i__9618_9637,source_9638,vec__9614,f,sources){
return (function (p1__9589_SHARP_){return p1__9589_SHARP_.sinks;
});})(seq__9615_9634,chunk__9616_9635,count__9617_9636,i__9618_9637,source_9638,vec__9614,f,sources))
,source_9638));var chunk__9620_9640 = null;var count__9621_9641 = 0;var i__9622_9642 = 0;while(true){
if((i__9622_9642 < count__9621_9641))
{var dep_9643 = chunk__9620_9640.cljs$core$IIndexed$_nth$arity$2(null,i__9622_9642);dep_9643.rank = tailrecursion.javelin.next_rank();
{
var G__9644 = seq__9619_9639;
var G__9645 = chunk__9620_9640;
var G__9646 = count__9621_9641;
var G__9647 = (i__9622_9642 + 1);
seq__9619_9639 = G__9644;
chunk__9620_9640 = G__9645;
count__9621_9641 = G__9646;
i__9622_9642 = G__9647;
continue;
}
} else
{var temp__4092__auto___9648 = cljs.core.seq(seq__9619_9639);if(temp__4092__auto___9648)
{var seq__9619_9649__$1 = temp__4092__auto___9648;if(cljs.core.chunked_seq_QMARK_(seq__9619_9649__$1))
{var c__8019__auto___9650 = cljs.core.chunk_first(seq__9619_9649__$1);{
var G__9651 = cljs.core.chunk_rest(seq__9619_9649__$1);
var G__9652 = c__8019__auto___9650;
var G__9653 = cljs.core.count(c__8019__auto___9650);
var G__9654 = 0;
seq__9619_9639 = G__9651;
chunk__9620_9640 = G__9652;
count__9621_9641 = G__9653;
i__9622_9642 = G__9654;
continue;
}
} else
{var dep_9655 = cljs.core.first(seq__9619_9649__$1);dep_9655.rank = tailrecursion.javelin.next_rank();
{
var G__9656 = cljs.core.next(seq__9619_9649__$1);
var G__9657 = null;
var G__9658 = 0;
var G__9659 = 0;
seq__9619_9639 = G__9656;
chunk__9620_9640 = G__9657;
count__9621_9641 = G__9658;
i__9622_9642 = G__9659;
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
var G__9660 = seq__9615_9634;
var G__9661 = chunk__9616_9635;
var G__9662 = count__9617_9636;
var G__9663 = (i__9618_9637 + 1);
seq__9615_9634 = G__9660;
chunk__9616_9635 = G__9661;
count__9617_9636 = G__9662;
i__9618_9637 = G__9663;
continue;
}
} else
{var temp__4092__auto___9664 = cljs.core.seq(seq__9615_9634);if(temp__4092__auto___9664)
{var seq__9615_9665__$1 = temp__4092__auto___9664;if(cljs.core.chunked_seq_QMARK_(seq__9615_9665__$1))
{var c__8019__auto___9666 = cljs.core.chunk_first(seq__9615_9665__$1);{
var G__9667 = cljs.core.chunk_rest(seq__9615_9665__$1);
var G__9668 = c__8019__auto___9666;
var G__9669 = cljs.core.count(c__8019__auto___9666);
var G__9670 = 0;
seq__9615_9634 = G__9667;
chunk__9616_9635 = G__9668;
count__9617_9636 = G__9669;
i__9618_9637 = G__9670;
continue;
}
} else
{var source_9671 = cljs.core.first(seq__9615_9665__$1);source_9671.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9671.sinks,this$);
if((source_9671.rank > this$.rank))
{var seq__9623_9672 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9615_9634,chunk__9616_9635,count__9617_9636,i__9618_9637,source_9671,seq__9615_9665__$1,temp__4092__auto___9664,vec__9614,f,sources){
return (function (p1__9589_SHARP_){return p1__9589_SHARP_.sinks;
});})(seq__9615_9634,chunk__9616_9635,count__9617_9636,i__9618_9637,source_9671,seq__9615_9665__$1,temp__4092__auto___9664,vec__9614,f,sources))
,source_9671));var chunk__9624_9673 = null;var count__9625_9674 = 0;var i__9626_9675 = 0;while(true){
if((i__9626_9675 < count__9625_9674))
{var dep_9676 = chunk__9624_9673.cljs$core$IIndexed$_nth$arity$2(null,i__9626_9675);dep_9676.rank = tailrecursion.javelin.next_rank();
{
var G__9677 = seq__9623_9672;
var G__9678 = chunk__9624_9673;
var G__9679 = count__9625_9674;
var G__9680 = (i__9626_9675 + 1);
seq__9623_9672 = G__9677;
chunk__9624_9673 = G__9678;
count__9625_9674 = G__9679;
i__9626_9675 = G__9680;
continue;
}
} else
{var temp__4092__auto___9681__$1 = cljs.core.seq(seq__9623_9672);if(temp__4092__auto___9681__$1)
{var seq__9623_9682__$1 = temp__4092__auto___9681__$1;if(cljs.core.chunked_seq_QMARK_(seq__9623_9682__$1))
{var c__8019__auto___9683 = cljs.core.chunk_first(seq__9623_9682__$1);{
var G__9684 = cljs.core.chunk_rest(seq__9623_9682__$1);
var G__9685 = c__8019__auto___9683;
var G__9686 = cljs.core.count(c__8019__auto___9683);
var G__9687 = 0;
seq__9623_9672 = G__9684;
chunk__9624_9673 = G__9685;
count__9625_9674 = G__9686;
i__9626_9675 = G__9687;
continue;
}
} else
{var dep_9688 = cljs.core.first(seq__9623_9682__$1);dep_9688.rank = tailrecursion.javelin.next_rank();
{
var G__9689 = cljs.core.next(seq__9623_9682__$1);
var G__9690 = null;
var G__9691 = 0;
var G__9692 = 0;
seq__9623_9672 = G__9689;
chunk__9624_9673 = G__9690;
count__9625_9674 = G__9691;
i__9626_9675 = G__9692;
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
var G__9693 = cljs.core.next(seq__9615_9665__$1);
var G__9694 = null;
var G__9695 = 0;
var G__9696 = 0;
seq__9615_9634 = G__9693;
chunk__9616_9635 = G__9694;
count__9617_9636 = G__9695;
i__9618_9637 = G__9696;
continue;
}
}
} else
{}
}
break;
}
var compute = ((function (vec__9614,f,sources){
return (function (p1__9590_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9590_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9590_SHARP_)));
});})(vec__9614,f,sources))
;var thunk = ((function (compute,vec__9614,f,sources){
return (function (){var x = this$.state;var y = compute(this$.sources);var seq__9627_9697 = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$.watches,cljs.core.constant$keyword$18));var chunk__9628_9698 = null;var count__9629_9699 = 0;var i__9630_9700 = 0;while(true){
if((i__9630_9700 < count__9629_9699))
{var vec__9631_9701 = chunk__9628_9698.cljs$core$IIndexed$_nth$arity$2(null,i__9630_9700);var k_9702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9631_9701,0,null);var f_9703__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9631_9701,1,null);(f_9703__$1.cljs$core$IFn$_invoke$arity$4 ? f_9703__$1.cljs$core$IFn$_invoke$arity$4(k_9702,this$,x,y) : f_9703__$1.call(null,k_9702,this$,x,y));
{
var G__9704 = seq__9627_9697;
var G__9705 = chunk__9628_9698;
var G__9706 = count__9629_9699;
var G__9707 = (i__9630_9700 + 1);
seq__9627_9697 = G__9704;
chunk__9628_9698 = G__9705;
count__9629_9699 = G__9706;
i__9630_9700 = G__9707;
continue;
}
} else
{var temp__4092__auto___9708 = cljs.core.seq(seq__9627_9697);if(temp__4092__auto___9708)
{var seq__9627_9709__$1 = temp__4092__auto___9708;if(cljs.core.chunked_seq_QMARK_(seq__9627_9709__$1))
{var c__8019__auto___9710 = cljs.core.chunk_first(seq__9627_9709__$1);{
var G__9711 = cljs.core.chunk_rest(seq__9627_9709__$1);
var G__9712 = c__8019__auto___9710;
var G__9713 = cljs.core.count(c__8019__auto___9710);
var G__9714 = 0;
seq__9627_9697 = G__9711;
chunk__9628_9698 = G__9712;
count__9629_9699 = G__9713;
i__9630_9700 = G__9714;
continue;
}
} else
{var vec__9632_9715 = cljs.core.first(seq__9627_9709__$1);var k_9716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9632_9715,0,null);var f_9717__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9632_9715,1,null);(f_9717__$1.cljs$core$IFn$_invoke$arity$4 ? f_9717__$1.cljs$core$IFn$_invoke$arity$4(k_9716,this$,x,y) : f_9717__$1.call(null,k_9716,this$,x,y));
{
var G__9718 = cljs.core.next(seq__9627_9709__$1);
var G__9719 = null;
var G__9720 = 0;
var G__9721 = 0;
seq__9627_9697 = G__9718;
chunk__9628_9698 = G__9719;
count__9629_9699 = G__9720;
i__9630_9700 = G__9721;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute,vec__9614,f,sources))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch(this$,cljs.core.constant$keyword$18,(cljs.core.truth_(f)?((function (compute,thunk,err_mesg,vec__9614,f,sources){
return (function (){throw (new Error(err_mesg));
});})(compute,thunk,err_mesg,vec__9614,f,sources))
:((function (compute,thunk,err_mesg,vec__9614,f,sources){
return (function (p1__9592_SHARP_,p2__9591_SHARP_){return tailrecursion.javelin.propagate_BANG_(p2__9591_SHARP_);
});})(compute,thunk,err_mesg,vec__9614,f,sources))
));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:((function (compute,thunk,err_mesg,vec__9614,f,sources){
return (function (){return cljs.core.deref(this$);
});})(compute,thunk,err_mesg,vec__9614,f,sources))
);
var G__9633 = this$;tailrecursion.javelin.propagate_BANG_(G__9633);
return G__9633;
};
var set_formula_BANG_ = function (this$,var_args){
var p__9593 = null;if (arguments.length > 1) {
  p__9593 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__9593);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__9722){
var this$ = cljs.core.first(arglist__9722);
var p__9593 = cljs.core.rest(arglist__9722);
return set_formula_BANG___delegate(this$,p__9593);
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
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__7830__auto__,writer__7831__auto__,opt__7832__auto__){return cljs.core._write(writer__7831__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__9723 = cljs.core.seq(self__.watches);var chunk__9724 = null;var count__9725 = 0;var i__9726 = 0;while(true){
if((i__9726 < count__9725))
{var vec__9727 = chunk__9724.cljs$core$IIndexed$_nth$arity$2(null,i__9726);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9727,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9727,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9729 = seq__9723;
var G__9730 = chunk__9724;
var G__9731 = count__9725;
var G__9732 = (i__9726 + 1);
seq__9723 = G__9729;
chunk__9724 = G__9730;
count__9725 = G__9731;
i__9726 = G__9732;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9723);if(temp__4092__auto__)
{var seq__9723__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9723__$1))
{var c__8019__auto__ = cljs.core.chunk_first(seq__9723__$1);{
var G__9733 = cljs.core.chunk_rest(seq__9723__$1);
var G__9734 = c__8019__auto__;
var G__9735 = cljs.core.count(c__8019__auto__);
var G__9736 = 0;
seq__9723 = G__9733;
chunk__9724 = G__9734;
count__9725 = G__9735;
i__9726 = G__9736;
continue;
}
} else
{var vec__9728 = cljs.core.first(seq__9723__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9728,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9728,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9737 = cljs.core.next(seq__9723__$1);
var G__9738 = null;
var G__9739 = 0;
var G__9740 = 0;
seq__9723 = G__9737;
chunk__9724 = G__9738;
count__9725 = G__9739;
i__9726 = G__9740;
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
var G__9741__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$19) : tailrecursion.javelin.cell.call(null,cljs.core.constant$keyword$19)),cljs.core.array_seq([f,sources], 0));
};
var G__9741 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9741__delegate.call(this,sources);};
G__9741.cljs$lang$maxFixedArity = 0;
G__9741.cljs$lang$applyTo = (function (arglist__9742){
var sources = cljs.core.seq(arglist__9742);
return G__9741__delegate(sources);
});
G__9741.cljs$core$IFn$_invoke$arity$variadic = G__9741__delegate;
return G__9741;
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
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__7251__auto__ = tailrecursion.javelin.cell_QMARK_(c);if(cljs.core.truth_(and__7251__auto__))
{return c.input_QMARK_;
} else
{return and__7251__auto__;
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
return (function (p1__9743_SHARP_,p2__9744_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__9743_SHARP_,p2__9744_SHARP_),p2__9744_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__9746_SHARP_,p2__9745_SHARP_){return cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__9746_SHARP_,p2__9745_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9748__delegate = function (rest__9747_SHARP_){var news = diff(cljs.core.deref(olds),rest__9747_SHARP_);cljs.core.reset_BANG_(olds,rest__9747_SHARP_);
return news;
};
var G__9748 = function (var_args){
var rest__9747_SHARP_ = null;if (arguments.length > 0) {
  rest__9747_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9748__delegate.call(this,rest__9747_SHARP_);};
G__9748.cljs$lang$maxFixedArity = 0;
G__9748.cljs$lang$applyTo = (function (arglist__9749){
var rest__9747_SHARP_ = cljs.core.seq(arglist__9749);
return G__9748__delegate(rest__9747_SHARP_);
});
G__9748.cljs$core$IFn$_invoke$arity$variadic = G__9748__delegate;
return G__9748;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.lift(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9750){
var cells = cljs.core.seq(arglist__9750);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift(cljs.core.seq).call(null,c);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__9751_SHARP_){return tailrecursion.javelin.lift(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__9751_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,cljs.core.count(cljs.core.deref(cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items,f){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(cljs.core.seq).call(null,items);var cur_count = tailrecursion.javelin.lift(cljs.core.count).call(null,items_seq);var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__9752_SHARP_){return tailrecursion.javelin.lift(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__9752_SHARP_);
});})(pool_size,items_seq,cur_count))
;return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){if((pool_size__$1 < cur_count__$1))
{var seq__9757_9761 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));var chunk__9758_9762 = null;var count__9759_9763 = 0;var i__9760_9764 = 0;while(true){
if((i__9760_9764 < count__9759_9763))
{var i_9765 = chunk__9758_9762.cljs$core$IIndexed$_nth$arity$2(null,i__9760_9764);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9765) : ith_item__$1.call(null,i_9765))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9765) : ith_item__$1.call(null,i_9765))));
{
var G__9766 = seq__9757_9761;
var G__9767 = chunk__9758_9762;
var G__9768 = count__9759_9763;
var G__9769 = (i__9760_9764 + 1);
seq__9757_9761 = G__9766;
chunk__9758_9762 = G__9767;
count__9759_9763 = G__9768;
i__9760_9764 = G__9769;
continue;
}
} else
{var temp__4092__auto___9770 = cljs.core.seq(seq__9757_9761);if(temp__4092__auto___9770)
{var seq__9757_9771__$1 = temp__4092__auto___9770;if(cljs.core.chunked_seq_QMARK_(seq__9757_9771__$1))
{var c__8019__auto___9772 = cljs.core.chunk_first(seq__9757_9771__$1);{
var G__9773 = cljs.core.chunk_rest(seq__9757_9771__$1);
var G__9774 = c__8019__auto___9772;
var G__9775 = cljs.core.count(c__8019__auto___9772);
var G__9776 = 0;
seq__9757_9761 = G__9773;
chunk__9758_9762 = G__9774;
count__9759_9763 = G__9775;
i__9760_9764 = G__9776;
continue;
}
} else
{var i_9777 = cljs.core.first(seq__9757_9771__$1);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9777) : ith_item__$1.call(null,i_9777))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9777) : ith_item__$1.call(null,i_9777))));
{
var G__9778 = cljs.core.next(seq__9757_9771__$1);
var G__9779 = null;
var G__9780 = 0;
var G__9781 = 0;
seq__9757_9761 = G__9778;
chunk__9758_9762 = G__9779;
count__9759_9763 = G__9780;
i__9760_9764 = G__9781;
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
