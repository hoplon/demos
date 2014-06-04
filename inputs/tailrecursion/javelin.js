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
}catch (e9633){if((e9633 instanceof Error))
{var _ = e9633;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e9633;
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
return (function (p1__9634_SHARP_,p2__9635_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9634_SHARP_,p2__9635_SHARP_,p2__9635_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop(queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__9636 = ((continue_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reducer,siblings,children):siblings);
queue = G__9636;
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
var seq__9641 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,srcs));var chunk__9642 = null;var count__9643 = 0;var i__9644 = 0;while(true){
if((i__9644 < count__9643))
{var src = chunk__9642.cljs$core$IIndexed$_nth$arity$2(null,i__9644);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9645 = seq__9641;
var G__9646 = chunk__9642;
var G__9647 = count__9643;
var G__9648 = (i__9644 + 1);
seq__9641 = G__9645;
chunk__9642 = G__9646;
count__9643 = G__9647;
i__9644 = G__9648;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9641);if(temp__4092__auto__)
{var seq__9641__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9641__$1))
{var c__8026__auto__ = cljs.core.chunk_first(seq__9641__$1);{
var G__9649 = cljs.core.chunk_rest(seq__9641__$1);
var G__9650 = c__8026__auto__;
var G__9651 = cljs.core.count(c__8026__auto__);
var G__9652 = 0;
seq__9641 = G__9649;
chunk__9642 = G__9650;
count__9643 = G__9651;
i__9644 = G__9652;
continue;
}
} else
{var src = cljs.core.first(seq__9641__$1);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9653 = cljs.core.next(seq__9641__$1);
var G__9654 = null;
var G__9655 = 0;
var G__9656 = 0;
seq__9641 = G__9653;
chunk__9642 = G__9654;
count__9643 = G__9655;
i__9644 = G__9656;
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
var set_formula_BANG___delegate = function (this$,p__9661){var vec__9682 = p__9661;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9682,0,null);var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9682,1,null);tailrecursion.javelin.destroy_cell_BANG_(this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f):cljs.core.vec(sources));
var seq__9683_9702 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__9684_9703 = null;var count__9685_9704 = 0;var i__9686_9705 = 0;while(true){
if((i__9686_9705 < count__9685_9704))
{var source_9706 = chunk__9684_9703.cljs$core$IIndexed$_nth$arity$2(null,i__9686_9705);source_9706.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9706.sinks,this$);
if((source_9706.rank > this$.rank))
{var seq__9687_9707 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9683_9702,chunk__9684_9703,count__9685_9704,i__9686_9705,source_9706,vec__9682,f,sources){
return (function (p1__9657_SHARP_){return p1__9657_SHARP_.sinks;
});})(seq__9683_9702,chunk__9684_9703,count__9685_9704,i__9686_9705,source_9706,vec__9682,f,sources))
,source_9706));var chunk__9688_9708 = null;var count__9689_9709 = 0;var i__9690_9710 = 0;while(true){
if((i__9690_9710 < count__9689_9709))
{var dep_9711 = chunk__9688_9708.cljs$core$IIndexed$_nth$arity$2(null,i__9690_9710);dep_9711.rank = tailrecursion.javelin.next_rank();
{
var G__9712 = seq__9687_9707;
var G__9713 = chunk__9688_9708;
var G__9714 = count__9689_9709;
var G__9715 = (i__9690_9710 + 1);
seq__9687_9707 = G__9712;
chunk__9688_9708 = G__9713;
count__9689_9709 = G__9714;
i__9690_9710 = G__9715;
continue;
}
} else
{var temp__4092__auto___9716 = cljs.core.seq(seq__9687_9707);if(temp__4092__auto___9716)
{var seq__9687_9717__$1 = temp__4092__auto___9716;if(cljs.core.chunked_seq_QMARK_(seq__9687_9717__$1))
{var c__8026__auto___9718 = cljs.core.chunk_first(seq__9687_9717__$1);{
var G__9719 = cljs.core.chunk_rest(seq__9687_9717__$1);
var G__9720 = c__8026__auto___9718;
var G__9721 = cljs.core.count(c__8026__auto___9718);
var G__9722 = 0;
seq__9687_9707 = G__9719;
chunk__9688_9708 = G__9720;
count__9689_9709 = G__9721;
i__9690_9710 = G__9722;
continue;
}
} else
{var dep_9723 = cljs.core.first(seq__9687_9717__$1);dep_9723.rank = tailrecursion.javelin.next_rank();
{
var G__9724 = cljs.core.next(seq__9687_9717__$1);
var G__9725 = null;
var G__9726 = 0;
var G__9727 = 0;
seq__9687_9707 = G__9724;
chunk__9688_9708 = G__9725;
count__9689_9709 = G__9726;
i__9690_9710 = G__9727;
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
var G__9728 = seq__9683_9702;
var G__9729 = chunk__9684_9703;
var G__9730 = count__9685_9704;
var G__9731 = (i__9686_9705 + 1);
seq__9683_9702 = G__9728;
chunk__9684_9703 = G__9729;
count__9685_9704 = G__9730;
i__9686_9705 = G__9731;
continue;
}
} else
{var temp__4092__auto___9732 = cljs.core.seq(seq__9683_9702);if(temp__4092__auto___9732)
{var seq__9683_9733__$1 = temp__4092__auto___9732;if(cljs.core.chunked_seq_QMARK_(seq__9683_9733__$1))
{var c__8026__auto___9734 = cljs.core.chunk_first(seq__9683_9733__$1);{
var G__9735 = cljs.core.chunk_rest(seq__9683_9733__$1);
var G__9736 = c__8026__auto___9734;
var G__9737 = cljs.core.count(c__8026__auto___9734);
var G__9738 = 0;
seq__9683_9702 = G__9735;
chunk__9684_9703 = G__9736;
count__9685_9704 = G__9737;
i__9686_9705 = G__9738;
continue;
}
} else
{var source_9739 = cljs.core.first(seq__9683_9733__$1);source_9739.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9739.sinks,this$);
if((source_9739.rank > this$.rank))
{var seq__9691_9740 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9683_9702,chunk__9684_9703,count__9685_9704,i__9686_9705,source_9739,seq__9683_9733__$1,temp__4092__auto___9732,vec__9682,f,sources){
return (function (p1__9657_SHARP_){return p1__9657_SHARP_.sinks;
});})(seq__9683_9702,chunk__9684_9703,count__9685_9704,i__9686_9705,source_9739,seq__9683_9733__$1,temp__4092__auto___9732,vec__9682,f,sources))
,source_9739));var chunk__9692_9741 = null;var count__9693_9742 = 0;var i__9694_9743 = 0;while(true){
if((i__9694_9743 < count__9693_9742))
{var dep_9744 = chunk__9692_9741.cljs$core$IIndexed$_nth$arity$2(null,i__9694_9743);dep_9744.rank = tailrecursion.javelin.next_rank();
{
var G__9745 = seq__9691_9740;
var G__9746 = chunk__9692_9741;
var G__9747 = count__9693_9742;
var G__9748 = (i__9694_9743 + 1);
seq__9691_9740 = G__9745;
chunk__9692_9741 = G__9746;
count__9693_9742 = G__9747;
i__9694_9743 = G__9748;
continue;
}
} else
{var temp__4092__auto___9749__$1 = cljs.core.seq(seq__9691_9740);if(temp__4092__auto___9749__$1)
{var seq__9691_9750__$1 = temp__4092__auto___9749__$1;if(cljs.core.chunked_seq_QMARK_(seq__9691_9750__$1))
{var c__8026__auto___9751 = cljs.core.chunk_first(seq__9691_9750__$1);{
var G__9752 = cljs.core.chunk_rest(seq__9691_9750__$1);
var G__9753 = c__8026__auto___9751;
var G__9754 = cljs.core.count(c__8026__auto___9751);
var G__9755 = 0;
seq__9691_9740 = G__9752;
chunk__9692_9741 = G__9753;
count__9693_9742 = G__9754;
i__9694_9743 = G__9755;
continue;
}
} else
{var dep_9756 = cljs.core.first(seq__9691_9750__$1);dep_9756.rank = tailrecursion.javelin.next_rank();
{
var G__9757 = cljs.core.next(seq__9691_9750__$1);
var G__9758 = null;
var G__9759 = 0;
var G__9760 = 0;
seq__9691_9740 = G__9757;
chunk__9692_9741 = G__9758;
count__9693_9742 = G__9759;
i__9694_9743 = G__9760;
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
var G__9761 = cljs.core.next(seq__9683_9733__$1);
var G__9762 = null;
var G__9763 = 0;
var G__9764 = 0;
seq__9683_9702 = G__9761;
chunk__9684_9703 = G__9762;
count__9685_9704 = G__9763;
i__9686_9705 = G__9764;
continue;
}
}
} else
{}
}
break;
}
var compute = ((function (vec__9682,f,sources){
return (function (p1__9658_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9658_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9658_SHARP_)));
});})(vec__9682,f,sources))
;var thunk = ((function (compute,vec__9682,f,sources){
return (function (){var x = this$.state;var y = compute(this$.sources);var seq__9695_9765 = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$.watches,cljs.core.constant$keyword$18));var chunk__9696_9766 = null;var count__9697_9767 = 0;var i__9698_9768 = 0;while(true){
if((i__9698_9768 < count__9697_9767))
{var vec__9699_9769 = chunk__9696_9766.cljs$core$IIndexed$_nth$arity$2(null,i__9698_9768);var k_9770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9699_9769,0,null);var f_9771__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9699_9769,1,null);(f_9771__$1.cljs$core$IFn$_invoke$arity$4 ? f_9771__$1.cljs$core$IFn$_invoke$arity$4(k_9770,this$,x,y) : f_9771__$1.call(null,k_9770,this$,x,y));
{
var G__9772 = seq__9695_9765;
var G__9773 = chunk__9696_9766;
var G__9774 = count__9697_9767;
var G__9775 = (i__9698_9768 + 1);
seq__9695_9765 = G__9772;
chunk__9696_9766 = G__9773;
count__9697_9767 = G__9774;
i__9698_9768 = G__9775;
continue;
}
} else
{var temp__4092__auto___9776 = cljs.core.seq(seq__9695_9765);if(temp__4092__auto___9776)
{var seq__9695_9777__$1 = temp__4092__auto___9776;if(cljs.core.chunked_seq_QMARK_(seq__9695_9777__$1))
{var c__8026__auto___9778 = cljs.core.chunk_first(seq__9695_9777__$1);{
var G__9779 = cljs.core.chunk_rest(seq__9695_9777__$1);
var G__9780 = c__8026__auto___9778;
var G__9781 = cljs.core.count(c__8026__auto___9778);
var G__9782 = 0;
seq__9695_9765 = G__9779;
chunk__9696_9766 = G__9780;
count__9697_9767 = G__9781;
i__9698_9768 = G__9782;
continue;
}
} else
{var vec__9700_9783 = cljs.core.first(seq__9695_9777__$1);var k_9784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9700_9783,0,null);var f_9785__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9700_9783,1,null);(f_9785__$1.cljs$core$IFn$_invoke$arity$4 ? f_9785__$1.cljs$core$IFn$_invoke$arity$4(k_9784,this$,x,y) : f_9785__$1.call(null,k_9784,this$,x,y));
{
var G__9786 = cljs.core.next(seq__9695_9777__$1);
var G__9787 = null;
var G__9788 = 0;
var G__9789 = 0;
seq__9695_9765 = G__9786;
chunk__9696_9766 = G__9787;
count__9697_9767 = G__9788;
i__9698_9768 = G__9789;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute,vec__9682,f,sources))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch(this$,cljs.core.constant$keyword$18,(cljs.core.truth_(f)?((function (compute,thunk,err_mesg,vec__9682,f,sources){
return (function (){throw (new Error(err_mesg));
});})(compute,thunk,err_mesg,vec__9682,f,sources))
:((function (compute,thunk,err_mesg,vec__9682,f,sources){
return (function (p1__9660_SHARP_,p2__9659_SHARP_){return tailrecursion.javelin.propagate_BANG_(p2__9659_SHARP_);
});})(compute,thunk,err_mesg,vec__9682,f,sources))
));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:((function (compute,thunk,err_mesg,vec__9682,f,sources){
return (function (){return cljs.core.deref(this$);
});})(compute,thunk,err_mesg,vec__9682,f,sources))
);
var G__9701 = this$;tailrecursion.javelin.propagate_BANG_(G__9701);
return G__9701;
};
var set_formula_BANG_ = function (this$,var_args){
var p__9661 = null;if (arguments.length > 1) {
  p__9661 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__9661);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__9790){
var this$ = cljs.core.first(arglist__9790);
var p__9661 = cljs.core.rest(arglist__9790);
return set_formula_BANG___delegate(this$,p__9661);
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
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__7837__auto__,writer__7838__auto__,opt__7839__auto__){return cljs.core._write(writer__7838__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__9791 = cljs.core.seq(self__.watches);var chunk__9792 = null;var count__9793 = 0;var i__9794 = 0;while(true){
if((i__9794 < count__9793))
{var vec__9795 = chunk__9792.cljs$core$IIndexed$_nth$arity$2(null,i__9794);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9795,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9795,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9797 = seq__9791;
var G__9798 = chunk__9792;
var G__9799 = count__9793;
var G__9800 = (i__9794 + 1);
seq__9791 = G__9797;
chunk__9792 = G__9798;
count__9793 = G__9799;
i__9794 = G__9800;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9791);if(temp__4092__auto__)
{var seq__9791__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9791__$1))
{var c__8026__auto__ = cljs.core.chunk_first(seq__9791__$1);{
var G__9801 = cljs.core.chunk_rest(seq__9791__$1);
var G__9802 = c__8026__auto__;
var G__9803 = cljs.core.count(c__8026__auto__);
var G__9804 = 0;
seq__9791 = G__9801;
chunk__9792 = G__9802;
count__9793 = G__9803;
i__9794 = G__9804;
continue;
}
} else
{var vec__9796 = cljs.core.first(seq__9791__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9796,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9796,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9805 = cljs.core.next(seq__9791__$1);
var G__9806 = null;
var G__9807 = 0;
var G__9808 = 0;
seq__9791 = G__9805;
chunk__9792 = G__9806;
count__9793 = G__9807;
i__9794 = G__9808;
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
var G__9809__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$19) : tailrecursion.javelin.cell.call(null,cljs.core.constant$keyword$19)),cljs.core.array_seq([f,sources], 0));
};
var G__9809 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9809__delegate.call(this,sources);};
G__9809.cljs$lang$maxFixedArity = 0;
G__9809.cljs$lang$applyTo = (function (arglist__9810){
var sources = cljs.core.seq(arglist__9810);
return G__9809__delegate(sources);
});
G__9809.cljs$core$IFn$_invoke$arity$variadic = G__9809__delegate;
return G__9809;
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
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__7258__auto__ = tailrecursion.javelin.cell_QMARK_(c);if(cljs.core.truth_(and__7258__auto__))
{return c.input_QMARK_;
} else
{return and__7258__auto__;
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
return (function (p1__9811_SHARP_,p2__9812_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__9811_SHARP_,p2__9812_SHARP_),p2__9812_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__9814_SHARP_,p2__9813_SHARP_){return cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__9814_SHARP_,p2__9813_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9816__delegate = function (rest__9815_SHARP_){var news = diff(cljs.core.deref(olds),rest__9815_SHARP_);cljs.core.reset_BANG_(olds,rest__9815_SHARP_);
return news;
};
var G__9816 = function (var_args){
var rest__9815_SHARP_ = null;if (arguments.length > 0) {
  rest__9815_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9816__delegate.call(this,rest__9815_SHARP_);};
G__9816.cljs$lang$maxFixedArity = 0;
G__9816.cljs$lang$applyTo = (function (arglist__9817){
var rest__9815_SHARP_ = cljs.core.seq(arglist__9817);
return G__9816__delegate(rest__9815_SHARP_);
});
G__9816.cljs$core$IFn$_invoke$arity$variadic = G__9816__delegate;
return G__9816;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.lift(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9818){
var cells = cljs.core.seq(arglist__9818);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift(cljs.core.seq).call(null,c);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__9819_SHARP_){return tailrecursion.javelin.lift(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__9819_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,cljs.core.count(cljs.core.deref(cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items,f){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(cljs.core.seq).call(null,items);var cur_count = tailrecursion.javelin.lift(cljs.core.count).call(null,items_seq);var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__9820_SHARP_){return tailrecursion.javelin.lift(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__9820_SHARP_);
});})(pool_size,items_seq,cur_count))
;return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){if((pool_size__$1 < cur_count__$1))
{var seq__9825_9829 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));var chunk__9826_9830 = null;var count__9827_9831 = 0;var i__9828_9832 = 0;while(true){
if((i__9828_9832 < count__9827_9831))
{var i_9833 = chunk__9826_9830.cljs$core$IIndexed$_nth$arity$2(null,i__9828_9832);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9833) : ith_item__$1.call(null,i_9833))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9833) : ith_item__$1.call(null,i_9833))));
{
var G__9834 = seq__9825_9829;
var G__9835 = chunk__9826_9830;
var G__9836 = count__9827_9831;
var G__9837 = (i__9828_9832 + 1);
seq__9825_9829 = G__9834;
chunk__9826_9830 = G__9835;
count__9827_9831 = G__9836;
i__9828_9832 = G__9837;
continue;
}
} else
{var temp__4092__auto___9838 = cljs.core.seq(seq__9825_9829);if(temp__4092__auto___9838)
{var seq__9825_9839__$1 = temp__4092__auto___9838;if(cljs.core.chunked_seq_QMARK_(seq__9825_9839__$1))
{var c__8026__auto___9840 = cljs.core.chunk_first(seq__9825_9839__$1);{
var G__9841 = cljs.core.chunk_rest(seq__9825_9839__$1);
var G__9842 = c__8026__auto___9840;
var G__9843 = cljs.core.count(c__8026__auto___9840);
var G__9844 = 0;
seq__9825_9829 = G__9841;
chunk__9826_9830 = G__9842;
count__9827_9831 = G__9843;
i__9828_9832 = G__9844;
continue;
}
} else
{var i_9845 = cljs.core.first(seq__9825_9839__$1);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9845) : ith_item__$1.call(null,i_9845))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9845) : ith_item__$1.call(null,i_9845))));
{
var G__9846 = cljs.core.next(seq__9825_9839__$1);
var G__9847 = null;
var G__9848 = 0;
var G__9849 = 0;
seq__9825_9829 = G__9846;
chunk__9826_9830 = G__9847;
count__9827_9831 = G__9848;
i__9828_9832 = G__9849;
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
