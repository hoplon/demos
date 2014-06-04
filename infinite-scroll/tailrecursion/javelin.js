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
}catch (e9576){if((e9576 instanceof Error))
{var _ = e9576;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e9576;
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
return (function (p1__9577_SHARP_,p2__9578_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9577_SHARP_,p2__9578_SHARP_,p2__9578_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop(queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__9579 = ((continue_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reducer,siblings,children):siblings);
queue = G__9579;
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
var seq__9584 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,srcs));var chunk__9585 = null;var count__9586 = 0;var i__9587 = 0;while(true){
if((i__9587 < count__9586))
{var src = chunk__9585.cljs$core$IIndexed$_nth$arity$2(null,i__9587);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9588 = seq__9584;
var G__9589 = chunk__9585;
var G__9590 = count__9586;
var G__9591 = (i__9587 + 1);
seq__9584 = G__9588;
chunk__9585 = G__9589;
count__9586 = G__9590;
i__9587 = G__9591;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9584);if(temp__4092__auto__)
{var seq__9584__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9584__$1))
{var c__8206__auto__ = cljs.core.chunk_first(seq__9584__$1);{
var G__9592 = cljs.core.chunk_rest(seq__9584__$1);
var G__9593 = c__8206__auto__;
var G__9594 = cljs.core.count(c__8206__auto__);
var G__9595 = 0;
seq__9584 = G__9592;
chunk__9585 = G__9593;
count__9586 = G__9594;
i__9587 = G__9595;
continue;
}
} else
{var src = cljs.core.first(seq__9584__$1);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9596 = cljs.core.next(seq__9584__$1);
var G__9597 = null;
var G__9598 = 0;
var G__9599 = 0;
seq__9584 = G__9596;
chunk__9585 = G__9597;
count__9586 = G__9598;
i__9587 = G__9599;
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
var set_formula_BANG___delegate = function (this$,p__9604){var vec__9625 = p__9604;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9625,0,null);var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9625,1,null);tailrecursion.javelin.destroy_cell_BANG_(this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f):cljs.core.vec(sources));
var seq__9626_9645 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__9627_9646 = null;var count__9628_9647 = 0;var i__9629_9648 = 0;while(true){
if((i__9629_9648 < count__9628_9647))
{var source_9649 = chunk__9627_9646.cljs$core$IIndexed$_nth$arity$2(null,i__9629_9648);source_9649.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9649.sinks,this$);
if((source_9649.rank > this$.rank))
{var seq__9630_9650 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9626_9645,chunk__9627_9646,count__9628_9647,i__9629_9648,source_9649,vec__9625,f,sources){
return (function (p1__9600_SHARP_){return p1__9600_SHARP_.sinks;
});})(seq__9626_9645,chunk__9627_9646,count__9628_9647,i__9629_9648,source_9649,vec__9625,f,sources))
,source_9649));var chunk__9631_9651 = null;var count__9632_9652 = 0;var i__9633_9653 = 0;while(true){
if((i__9633_9653 < count__9632_9652))
{var dep_9654 = chunk__9631_9651.cljs$core$IIndexed$_nth$arity$2(null,i__9633_9653);dep_9654.rank = tailrecursion.javelin.next_rank();
{
var G__9655 = seq__9630_9650;
var G__9656 = chunk__9631_9651;
var G__9657 = count__9632_9652;
var G__9658 = (i__9633_9653 + 1);
seq__9630_9650 = G__9655;
chunk__9631_9651 = G__9656;
count__9632_9652 = G__9657;
i__9633_9653 = G__9658;
continue;
}
} else
{var temp__4092__auto___9659 = cljs.core.seq(seq__9630_9650);if(temp__4092__auto___9659)
{var seq__9630_9660__$1 = temp__4092__auto___9659;if(cljs.core.chunked_seq_QMARK_(seq__9630_9660__$1))
{var c__8206__auto___9661 = cljs.core.chunk_first(seq__9630_9660__$1);{
var G__9662 = cljs.core.chunk_rest(seq__9630_9660__$1);
var G__9663 = c__8206__auto___9661;
var G__9664 = cljs.core.count(c__8206__auto___9661);
var G__9665 = 0;
seq__9630_9650 = G__9662;
chunk__9631_9651 = G__9663;
count__9632_9652 = G__9664;
i__9633_9653 = G__9665;
continue;
}
} else
{var dep_9666 = cljs.core.first(seq__9630_9660__$1);dep_9666.rank = tailrecursion.javelin.next_rank();
{
var G__9667 = cljs.core.next(seq__9630_9660__$1);
var G__9668 = null;
var G__9669 = 0;
var G__9670 = 0;
seq__9630_9650 = G__9667;
chunk__9631_9651 = G__9668;
count__9632_9652 = G__9669;
i__9633_9653 = G__9670;
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
var G__9671 = seq__9626_9645;
var G__9672 = chunk__9627_9646;
var G__9673 = count__9628_9647;
var G__9674 = (i__9629_9648 + 1);
seq__9626_9645 = G__9671;
chunk__9627_9646 = G__9672;
count__9628_9647 = G__9673;
i__9629_9648 = G__9674;
continue;
}
} else
{var temp__4092__auto___9675 = cljs.core.seq(seq__9626_9645);if(temp__4092__auto___9675)
{var seq__9626_9676__$1 = temp__4092__auto___9675;if(cljs.core.chunked_seq_QMARK_(seq__9626_9676__$1))
{var c__8206__auto___9677 = cljs.core.chunk_first(seq__9626_9676__$1);{
var G__9678 = cljs.core.chunk_rest(seq__9626_9676__$1);
var G__9679 = c__8206__auto___9677;
var G__9680 = cljs.core.count(c__8206__auto___9677);
var G__9681 = 0;
seq__9626_9645 = G__9678;
chunk__9627_9646 = G__9679;
count__9628_9647 = G__9680;
i__9629_9648 = G__9681;
continue;
}
} else
{var source_9682 = cljs.core.first(seq__9626_9676__$1);source_9682.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9682.sinks,this$);
if((source_9682.rank > this$.rank))
{var seq__9634_9683 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9626_9645,chunk__9627_9646,count__9628_9647,i__9629_9648,source_9682,seq__9626_9676__$1,temp__4092__auto___9675,vec__9625,f,sources){
return (function (p1__9600_SHARP_){return p1__9600_SHARP_.sinks;
});})(seq__9626_9645,chunk__9627_9646,count__9628_9647,i__9629_9648,source_9682,seq__9626_9676__$1,temp__4092__auto___9675,vec__9625,f,sources))
,source_9682));var chunk__9635_9684 = null;var count__9636_9685 = 0;var i__9637_9686 = 0;while(true){
if((i__9637_9686 < count__9636_9685))
{var dep_9687 = chunk__9635_9684.cljs$core$IIndexed$_nth$arity$2(null,i__9637_9686);dep_9687.rank = tailrecursion.javelin.next_rank();
{
var G__9688 = seq__9634_9683;
var G__9689 = chunk__9635_9684;
var G__9690 = count__9636_9685;
var G__9691 = (i__9637_9686 + 1);
seq__9634_9683 = G__9688;
chunk__9635_9684 = G__9689;
count__9636_9685 = G__9690;
i__9637_9686 = G__9691;
continue;
}
} else
{var temp__4092__auto___9692__$1 = cljs.core.seq(seq__9634_9683);if(temp__4092__auto___9692__$1)
{var seq__9634_9693__$1 = temp__4092__auto___9692__$1;if(cljs.core.chunked_seq_QMARK_(seq__9634_9693__$1))
{var c__8206__auto___9694 = cljs.core.chunk_first(seq__9634_9693__$1);{
var G__9695 = cljs.core.chunk_rest(seq__9634_9693__$1);
var G__9696 = c__8206__auto___9694;
var G__9697 = cljs.core.count(c__8206__auto___9694);
var G__9698 = 0;
seq__9634_9683 = G__9695;
chunk__9635_9684 = G__9696;
count__9636_9685 = G__9697;
i__9637_9686 = G__9698;
continue;
}
} else
{var dep_9699 = cljs.core.first(seq__9634_9693__$1);dep_9699.rank = tailrecursion.javelin.next_rank();
{
var G__9700 = cljs.core.next(seq__9634_9693__$1);
var G__9701 = null;
var G__9702 = 0;
var G__9703 = 0;
seq__9634_9683 = G__9700;
chunk__9635_9684 = G__9701;
count__9636_9685 = G__9702;
i__9637_9686 = G__9703;
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
var G__9704 = cljs.core.next(seq__9626_9676__$1);
var G__9705 = null;
var G__9706 = 0;
var G__9707 = 0;
seq__9626_9645 = G__9704;
chunk__9627_9646 = G__9705;
count__9628_9647 = G__9706;
i__9629_9648 = G__9707;
continue;
}
}
} else
{}
}
break;
}
var compute = ((function (vec__9625,f,sources){
return (function (p1__9601_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9601_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9601_SHARP_)));
});})(vec__9625,f,sources))
;var thunk = ((function (compute,vec__9625,f,sources){
return (function (){var x = this$.state;var y = compute(this$.sources);var seq__9638_9708 = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$.watches,cljs.core.constant$keyword$18));var chunk__9639_9709 = null;var count__9640_9710 = 0;var i__9641_9711 = 0;while(true){
if((i__9641_9711 < count__9640_9710))
{var vec__9642_9712 = chunk__9639_9709.cljs$core$IIndexed$_nth$arity$2(null,i__9641_9711);var k_9713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9642_9712,0,null);var f_9714__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9642_9712,1,null);(f_9714__$1.cljs$core$IFn$_invoke$arity$4 ? f_9714__$1.cljs$core$IFn$_invoke$arity$4(k_9713,this$,x,y) : f_9714__$1.call(null,k_9713,this$,x,y));
{
var G__9715 = seq__9638_9708;
var G__9716 = chunk__9639_9709;
var G__9717 = count__9640_9710;
var G__9718 = (i__9641_9711 + 1);
seq__9638_9708 = G__9715;
chunk__9639_9709 = G__9716;
count__9640_9710 = G__9717;
i__9641_9711 = G__9718;
continue;
}
} else
{var temp__4092__auto___9719 = cljs.core.seq(seq__9638_9708);if(temp__4092__auto___9719)
{var seq__9638_9720__$1 = temp__4092__auto___9719;if(cljs.core.chunked_seq_QMARK_(seq__9638_9720__$1))
{var c__8206__auto___9721 = cljs.core.chunk_first(seq__9638_9720__$1);{
var G__9722 = cljs.core.chunk_rest(seq__9638_9720__$1);
var G__9723 = c__8206__auto___9721;
var G__9724 = cljs.core.count(c__8206__auto___9721);
var G__9725 = 0;
seq__9638_9708 = G__9722;
chunk__9639_9709 = G__9723;
count__9640_9710 = G__9724;
i__9641_9711 = G__9725;
continue;
}
} else
{var vec__9643_9726 = cljs.core.first(seq__9638_9720__$1);var k_9727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9643_9726,0,null);var f_9728__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9643_9726,1,null);(f_9728__$1.cljs$core$IFn$_invoke$arity$4 ? f_9728__$1.cljs$core$IFn$_invoke$arity$4(k_9727,this$,x,y) : f_9728__$1.call(null,k_9727,this$,x,y));
{
var G__9729 = cljs.core.next(seq__9638_9720__$1);
var G__9730 = null;
var G__9731 = 0;
var G__9732 = 0;
seq__9638_9708 = G__9729;
chunk__9639_9709 = G__9730;
count__9640_9710 = G__9731;
i__9641_9711 = G__9732;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute,vec__9625,f,sources))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch(this$,cljs.core.constant$keyword$18,(cljs.core.truth_(f)?((function (compute,thunk,err_mesg,vec__9625,f,sources){
return (function (){throw (new Error(err_mesg));
});})(compute,thunk,err_mesg,vec__9625,f,sources))
:((function (compute,thunk,err_mesg,vec__9625,f,sources){
return (function (p1__9603_SHARP_,p2__9602_SHARP_){return tailrecursion.javelin.propagate_BANG_(p2__9602_SHARP_);
});})(compute,thunk,err_mesg,vec__9625,f,sources))
));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:((function (compute,thunk,err_mesg,vec__9625,f,sources){
return (function (){return cljs.core.deref(this$);
});})(compute,thunk,err_mesg,vec__9625,f,sources))
);
var G__9644 = this$;tailrecursion.javelin.propagate_BANG_(G__9644);
return G__9644;
};
var set_formula_BANG_ = function (this$,var_args){
var p__9604 = null;if (arguments.length > 1) {
  p__9604 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__9604);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__9733){
var this$ = cljs.core.first(arglist__9733);
var p__9604 = cljs.core.rest(arglist__9733);
return set_formula_BANG___delegate(this$,p__9604);
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
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__8017__auto__,writer__8018__auto__,opt__8019__auto__){return cljs.core._write(writer__8018__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__9734 = cljs.core.seq(self__.watches);var chunk__9735 = null;var count__9736 = 0;var i__9737 = 0;while(true){
if((i__9737 < count__9736))
{var vec__9738 = chunk__9735.cljs$core$IIndexed$_nth$arity$2(null,i__9737);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9738,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9738,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9740 = seq__9734;
var G__9741 = chunk__9735;
var G__9742 = count__9736;
var G__9743 = (i__9737 + 1);
seq__9734 = G__9740;
chunk__9735 = G__9741;
count__9736 = G__9742;
i__9737 = G__9743;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9734);if(temp__4092__auto__)
{var seq__9734__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9734__$1))
{var c__8206__auto__ = cljs.core.chunk_first(seq__9734__$1);{
var G__9744 = cljs.core.chunk_rest(seq__9734__$1);
var G__9745 = c__8206__auto__;
var G__9746 = cljs.core.count(c__8206__auto__);
var G__9747 = 0;
seq__9734 = G__9744;
chunk__9735 = G__9745;
count__9736 = G__9746;
i__9737 = G__9747;
continue;
}
} else
{var vec__9739 = cljs.core.first(seq__9734__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9739,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9739,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9748 = cljs.core.next(seq__9734__$1);
var G__9749 = null;
var G__9750 = 0;
var G__9751 = 0;
seq__9734 = G__9748;
chunk__9735 = G__9749;
count__9736 = G__9750;
i__9737 = G__9751;
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
var G__9752__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$19) : tailrecursion.javelin.cell.call(null,cljs.core.constant$keyword$19)),cljs.core.array_seq([f,sources], 0));
};
var G__9752 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9752__delegate.call(this,sources);};
G__9752.cljs$lang$maxFixedArity = 0;
G__9752.cljs$lang$applyTo = (function (arglist__9753){
var sources = cljs.core.seq(arglist__9753);
return G__9752__delegate(sources);
});
G__9752.cljs$core$IFn$_invoke$arity$variadic = G__9752__delegate;
return G__9752;
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
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__7438__auto__ = tailrecursion.javelin.cell_QMARK_(c);if(cljs.core.truth_(and__7438__auto__))
{return c.input_QMARK_;
} else
{return and__7438__auto__;
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
return (function (p1__9754_SHARP_,p2__9755_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__9754_SHARP_,p2__9755_SHARP_),p2__9755_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__9757_SHARP_,p2__9756_SHARP_){return cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__9757_SHARP_,p2__9756_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9759__delegate = function (rest__9758_SHARP_){var news = diff(cljs.core.deref(olds),rest__9758_SHARP_);cljs.core.reset_BANG_(olds,rest__9758_SHARP_);
return news;
};
var G__9759 = function (var_args){
var rest__9758_SHARP_ = null;if (arguments.length > 0) {
  rest__9758_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9759__delegate.call(this,rest__9758_SHARP_);};
G__9759.cljs$lang$maxFixedArity = 0;
G__9759.cljs$lang$applyTo = (function (arglist__9760){
var rest__9758_SHARP_ = cljs.core.seq(arglist__9760);
return G__9759__delegate(rest__9758_SHARP_);
});
G__9759.cljs$core$IFn$_invoke$arity$variadic = G__9759__delegate;
return G__9759;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.lift(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9761){
var cells = cljs.core.seq(arglist__9761);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift(cljs.core.seq).call(null,c);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__9762_SHARP_){return tailrecursion.javelin.lift(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__9762_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,cljs.core.count(cljs.core.deref(cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items,f){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(cljs.core.seq).call(null,items);var cur_count = tailrecursion.javelin.lift(cljs.core.count).call(null,items_seq);var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__9763_SHARP_){return tailrecursion.javelin.lift(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__9763_SHARP_);
});})(pool_size,items_seq,cur_count))
;return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){if((pool_size__$1 < cur_count__$1))
{var seq__9768_9772 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));var chunk__9769_9773 = null;var count__9770_9774 = 0;var i__9771_9775 = 0;while(true){
if((i__9771_9775 < count__9770_9774))
{var i_9776 = chunk__9769_9773.cljs$core$IIndexed$_nth$arity$2(null,i__9771_9775);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9776) : ith_item__$1.call(null,i_9776))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9776) : ith_item__$1.call(null,i_9776))));
{
var G__9777 = seq__9768_9772;
var G__9778 = chunk__9769_9773;
var G__9779 = count__9770_9774;
var G__9780 = (i__9771_9775 + 1);
seq__9768_9772 = G__9777;
chunk__9769_9773 = G__9778;
count__9770_9774 = G__9779;
i__9771_9775 = G__9780;
continue;
}
} else
{var temp__4092__auto___9781 = cljs.core.seq(seq__9768_9772);if(temp__4092__auto___9781)
{var seq__9768_9782__$1 = temp__4092__auto___9781;if(cljs.core.chunked_seq_QMARK_(seq__9768_9782__$1))
{var c__8206__auto___9783 = cljs.core.chunk_first(seq__9768_9782__$1);{
var G__9784 = cljs.core.chunk_rest(seq__9768_9782__$1);
var G__9785 = c__8206__auto___9783;
var G__9786 = cljs.core.count(c__8206__auto___9783);
var G__9787 = 0;
seq__9768_9772 = G__9784;
chunk__9769_9773 = G__9785;
count__9770_9774 = G__9786;
i__9771_9775 = G__9787;
continue;
}
} else
{var i_9788 = cljs.core.first(seq__9768_9782__$1);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9788) : ith_item__$1.call(null,i_9788))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9788) : ith_item__$1.call(null,i_9788))));
{
var G__9789 = cljs.core.next(seq__9768_9782__$1);
var G__9790 = null;
var G__9791 = 0;
var G__9792 = 0;
seq__9768_9772 = G__9789;
chunk__9769_9773 = G__9790;
count__9770_9774 = G__9791;
i__9771_9775 = G__9792;
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
