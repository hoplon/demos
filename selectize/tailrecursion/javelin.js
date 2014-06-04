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
}catch (e9646){if((e9646 instanceof Error))
{var _ = e9646;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e9646;
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
return (function (p1__9647_SHARP_,p2__9648_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9647_SHARP_,p2__9648_SHARP_,p2__9648_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop(queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__9649 = ((continue_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reducer,siblings,children):siblings);
queue = G__9649;
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
var seq__9654 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,srcs));var chunk__9655 = null;var count__9656 = 0;var i__9657 = 0;while(true){
if((i__9657 < count__9656))
{var src = chunk__9655.cljs$core$IIndexed$_nth$arity$2(null,i__9657);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9658 = seq__9654;
var G__9659 = chunk__9655;
var G__9660 = count__9656;
var G__9661 = (i__9657 + 1);
seq__9654 = G__9658;
chunk__9655 = G__9659;
count__9656 = G__9660;
i__9657 = G__9661;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9654);if(temp__4092__auto__)
{var seq__9654__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9654__$1))
{var c__8208__auto__ = cljs.core.chunk_first(seq__9654__$1);{
var G__9662 = cljs.core.chunk_rest(seq__9654__$1);
var G__9663 = c__8208__auto__;
var G__9664 = cljs.core.count(c__8208__auto__);
var G__9665 = 0;
seq__9654 = G__9662;
chunk__9655 = G__9663;
count__9656 = G__9664;
i__9657 = G__9665;
continue;
}
} else
{var src = cljs.core.first(seq__9654__$1);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9666 = cljs.core.next(seq__9654__$1);
var G__9667 = null;
var G__9668 = 0;
var G__9669 = 0;
seq__9654 = G__9666;
chunk__9655 = G__9667;
count__9656 = G__9668;
i__9657 = G__9669;
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
var set_formula_BANG___delegate = function (this$,p__9674){var vec__9695 = p__9674;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9695,0,null);var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9695,1,null);tailrecursion.javelin.destroy_cell_BANG_(this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f):cljs.core.vec(sources));
var seq__9696_9715 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__9697_9716 = null;var count__9698_9717 = 0;var i__9699_9718 = 0;while(true){
if((i__9699_9718 < count__9698_9717))
{var source_9719 = chunk__9697_9716.cljs$core$IIndexed$_nth$arity$2(null,i__9699_9718);source_9719.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9719.sinks,this$);
if((source_9719.rank > this$.rank))
{var seq__9700_9720 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9696_9715,chunk__9697_9716,count__9698_9717,i__9699_9718,source_9719,vec__9695,f,sources){
return (function (p1__9670_SHARP_){return p1__9670_SHARP_.sinks;
});})(seq__9696_9715,chunk__9697_9716,count__9698_9717,i__9699_9718,source_9719,vec__9695,f,sources))
,source_9719));var chunk__9701_9721 = null;var count__9702_9722 = 0;var i__9703_9723 = 0;while(true){
if((i__9703_9723 < count__9702_9722))
{var dep_9724 = chunk__9701_9721.cljs$core$IIndexed$_nth$arity$2(null,i__9703_9723);dep_9724.rank = tailrecursion.javelin.next_rank();
{
var G__9725 = seq__9700_9720;
var G__9726 = chunk__9701_9721;
var G__9727 = count__9702_9722;
var G__9728 = (i__9703_9723 + 1);
seq__9700_9720 = G__9725;
chunk__9701_9721 = G__9726;
count__9702_9722 = G__9727;
i__9703_9723 = G__9728;
continue;
}
} else
{var temp__4092__auto___9729 = cljs.core.seq(seq__9700_9720);if(temp__4092__auto___9729)
{var seq__9700_9730__$1 = temp__4092__auto___9729;if(cljs.core.chunked_seq_QMARK_(seq__9700_9730__$1))
{var c__8208__auto___9731 = cljs.core.chunk_first(seq__9700_9730__$1);{
var G__9732 = cljs.core.chunk_rest(seq__9700_9730__$1);
var G__9733 = c__8208__auto___9731;
var G__9734 = cljs.core.count(c__8208__auto___9731);
var G__9735 = 0;
seq__9700_9720 = G__9732;
chunk__9701_9721 = G__9733;
count__9702_9722 = G__9734;
i__9703_9723 = G__9735;
continue;
}
} else
{var dep_9736 = cljs.core.first(seq__9700_9730__$1);dep_9736.rank = tailrecursion.javelin.next_rank();
{
var G__9737 = cljs.core.next(seq__9700_9730__$1);
var G__9738 = null;
var G__9739 = 0;
var G__9740 = 0;
seq__9700_9720 = G__9737;
chunk__9701_9721 = G__9738;
count__9702_9722 = G__9739;
i__9703_9723 = G__9740;
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
var G__9741 = seq__9696_9715;
var G__9742 = chunk__9697_9716;
var G__9743 = count__9698_9717;
var G__9744 = (i__9699_9718 + 1);
seq__9696_9715 = G__9741;
chunk__9697_9716 = G__9742;
count__9698_9717 = G__9743;
i__9699_9718 = G__9744;
continue;
}
} else
{var temp__4092__auto___9745 = cljs.core.seq(seq__9696_9715);if(temp__4092__auto___9745)
{var seq__9696_9746__$1 = temp__4092__auto___9745;if(cljs.core.chunked_seq_QMARK_(seq__9696_9746__$1))
{var c__8208__auto___9747 = cljs.core.chunk_first(seq__9696_9746__$1);{
var G__9748 = cljs.core.chunk_rest(seq__9696_9746__$1);
var G__9749 = c__8208__auto___9747;
var G__9750 = cljs.core.count(c__8208__auto___9747);
var G__9751 = 0;
seq__9696_9715 = G__9748;
chunk__9697_9716 = G__9749;
count__9698_9717 = G__9750;
i__9699_9718 = G__9751;
continue;
}
} else
{var source_9752 = cljs.core.first(seq__9696_9746__$1);source_9752.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9752.sinks,this$);
if((source_9752.rank > this$.rank))
{var seq__9704_9753 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9696_9715,chunk__9697_9716,count__9698_9717,i__9699_9718,source_9752,seq__9696_9746__$1,temp__4092__auto___9745,vec__9695,f,sources){
return (function (p1__9670_SHARP_){return p1__9670_SHARP_.sinks;
});})(seq__9696_9715,chunk__9697_9716,count__9698_9717,i__9699_9718,source_9752,seq__9696_9746__$1,temp__4092__auto___9745,vec__9695,f,sources))
,source_9752));var chunk__9705_9754 = null;var count__9706_9755 = 0;var i__9707_9756 = 0;while(true){
if((i__9707_9756 < count__9706_9755))
{var dep_9757 = chunk__9705_9754.cljs$core$IIndexed$_nth$arity$2(null,i__9707_9756);dep_9757.rank = tailrecursion.javelin.next_rank();
{
var G__9758 = seq__9704_9753;
var G__9759 = chunk__9705_9754;
var G__9760 = count__9706_9755;
var G__9761 = (i__9707_9756 + 1);
seq__9704_9753 = G__9758;
chunk__9705_9754 = G__9759;
count__9706_9755 = G__9760;
i__9707_9756 = G__9761;
continue;
}
} else
{var temp__4092__auto___9762__$1 = cljs.core.seq(seq__9704_9753);if(temp__4092__auto___9762__$1)
{var seq__9704_9763__$1 = temp__4092__auto___9762__$1;if(cljs.core.chunked_seq_QMARK_(seq__9704_9763__$1))
{var c__8208__auto___9764 = cljs.core.chunk_first(seq__9704_9763__$1);{
var G__9765 = cljs.core.chunk_rest(seq__9704_9763__$1);
var G__9766 = c__8208__auto___9764;
var G__9767 = cljs.core.count(c__8208__auto___9764);
var G__9768 = 0;
seq__9704_9753 = G__9765;
chunk__9705_9754 = G__9766;
count__9706_9755 = G__9767;
i__9707_9756 = G__9768;
continue;
}
} else
{var dep_9769 = cljs.core.first(seq__9704_9763__$1);dep_9769.rank = tailrecursion.javelin.next_rank();
{
var G__9770 = cljs.core.next(seq__9704_9763__$1);
var G__9771 = null;
var G__9772 = 0;
var G__9773 = 0;
seq__9704_9753 = G__9770;
chunk__9705_9754 = G__9771;
count__9706_9755 = G__9772;
i__9707_9756 = G__9773;
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
var G__9774 = cljs.core.next(seq__9696_9746__$1);
var G__9775 = null;
var G__9776 = 0;
var G__9777 = 0;
seq__9696_9715 = G__9774;
chunk__9697_9716 = G__9775;
count__9698_9717 = G__9776;
i__9699_9718 = G__9777;
continue;
}
}
} else
{}
}
break;
}
var compute = ((function (vec__9695,f,sources){
return (function (p1__9671_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9671_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9671_SHARP_)));
});})(vec__9695,f,sources))
;var thunk = ((function (compute,vec__9695,f,sources){
return (function (){var x = this$.state;var y = compute(this$.sources);var seq__9708_9778 = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$.watches,cljs.core.constant$keyword$18));var chunk__9709_9779 = null;var count__9710_9780 = 0;var i__9711_9781 = 0;while(true){
if((i__9711_9781 < count__9710_9780))
{var vec__9712_9782 = chunk__9709_9779.cljs$core$IIndexed$_nth$arity$2(null,i__9711_9781);var k_9783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9712_9782,0,null);var f_9784__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9712_9782,1,null);(f_9784__$1.cljs$core$IFn$_invoke$arity$4 ? f_9784__$1.cljs$core$IFn$_invoke$arity$4(k_9783,this$,x,y) : f_9784__$1.call(null,k_9783,this$,x,y));
{
var G__9785 = seq__9708_9778;
var G__9786 = chunk__9709_9779;
var G__9787 = count__9710_9780;
var G__9788 = (i__9711_9781 + 1);
seq__9708_9778 = G__9785;
chunk__9709_9779 = G__9786;
count__9710_9780 = G__9787;
i__9711_9781 = G__9788;
continue;
}
} else
{var temp__4092__auto___9789 = cljs.core.seq(seq__9708_9778);if(temp__4092__auto___9789)
{var seq__9708_9790__$1 = temp__4092__auto___9789;if(cljs.core.chunked_seq_QMARK_(seq__9708_9790__$1))
{var c__8208__auto___9791 = cljs.core.chunk_first(seq__9708_9790__$1);{
var G__9792 = cljs.core.chunk_rest(seq__9708_9790__$1);
var G__9793 = c__8208__auto___9791;
var G__9794 = cljs.core.count(c__8208__auto___9791);
var G__9795 = 0;
seq__9708_9778 = G__9792;
chunk__9709_9779 = G__9793;
count__9710_9780 = G__9794;
i__9711_9781 = G__9795;
continue;
}
} else
{var vec__9713_9796 = cljs.core.first(seq__9708_9790__$1);var k_9797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9713_9796,0,null);var f_9798__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9713_9796,1,null);(f_9798__$1.cljs$core$IFn$_invoke$arity$4 ? f_9798__$1.cljs$core$IFn$_invoke$arity$4(k_9797,this$,x,y) : f_9798__$1.call(null,k_9797,this$,x,y));
{
var G__9799 = cljs.core.next(seq__9708_9790__$1);
var G__9800 = null;
var G__9801 = 0;
var G__9802 = 0;
seq__9708_9778 = G__9799;
chunk__9709_9779 = G__9800;
count__9710_9780 = G__9801;
i__9711_9781 = G__9802;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute,vec__9695,f,sources))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch(this$,cljs.core.constant$keyword$18,(cljs.core.truth_(f)?((function (compute,thunk,err_mesg,vec__9695,f,sources){
return (function (){throw (new Error(err_mesg));
});})(compute,thunk,err_mesg,vec__9695,f,sources))
:((function (compute,thunk,err_mesg,vec__9695,f,sources){
return (function (p1__9673_SHARP_,p2__9672_SHARP_){return tailrecursion.javelin.propagate_BANG_(p2__9672_SHARP_);
});})(compute,thunk,err_mesg,vec__9695,f,sources))
));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:((function (compute,thunk,err_mesg,vec__9695,f,sources){
return (function (){return cljs.core.deref(this$);
});})(compute,thunk,err_mesg,vec__9695,f,sources))
);
var G__9714 = this$;tailrecursion.javelin.propagate_BANG_(G__9714);
return G__9714;
};
var set_formula_BANG_ = function (this$,var_args){
var p__9674 = null;if (arguments.length > 1) {
  p__9674 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__9674);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__9803){
var this$ = cljs.core.first(arglist__9803);
var p__9674 = cljs.core.rest(arglist__9803);
return set_formula_BANG___delegate(this$,p__9674);
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
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__8019__auto__,writer__8020__auto__,opt__8021__auto__){return cljs.core._write(writer__8020__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__9804 = cljs.core.seq(self__.watches);var chunk__9805 = null;var count__9806 = 0;var i__9807 = 0;while(true){
if((i__9807 < count__9806))
{var vec__9808 = chunk__9805.cljs$core$IIndexed$_nth$arity$2(null,i__9807);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9808,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9808,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9810 = seq__9804;
var G__9811 = chunk__9805;
var G__9812 = count__9806;
var G__9813 = (i__9807 + 1);
seq__9804 = G__9810;
chunk__9805 = G__9811;
count__9806 = G__9812;
i__9807 = G__9813;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9804);if(temp__4092__auto__)
{var seq__9804__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9804__$1))
{var c__8208__auto__ = cljs.core.chunk_first(seq__9804__$1);{
var G__9814 = cljs.core.chunk_rest(seq__9804__$1);
var G__9815 = c__8208__auto__;
var G__9816 = cljs.core.count(c__8208__auto__);
var G__9817 = 0;
seq__9804 = G__9814;
chunk__9805 = G__9815;
count__9806 = G__9816;
i__9807 = G__9817;
continue;
}
} else
{var vec__9809 = cljs.core.first(seq__9804__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9809,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9809,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9818 = cljs.core.next(seq__9804__$1);
var G__9819 = null;
var G__9820 = 0;
var G__9821 = 0;
seq__9804 = G__9818;
chunk__9805 = G__9819;
count__9806 = G__9820;
i__9807 = G__9821;
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
var G__9822__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$19) : tailrecursion.javelin.cell.call(null,cljs.core.constant$keyword$19)),cljs.core.array_seq([f,sources], 0));
};
var G__9822 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9822__delegate.call(this,sources);};
G__9822.cljs$lang$maxFixedArity = 0;
G__9822.cljs$lang$applyTo = (function (arglist__9823){
var sources = cljs.core.seq(arglist__9823);
return G__9822__delegate(sources);
});
G__9822.cljs$core$IFn$_invoke$arity$variadic = G__9822__delegate;
return G__9822;
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
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__7440__auto__ = tailrecursion.javelin.cell_QMARK_(c);if(cljs.core.truth_(and__7440__auto__))
{return c.input_QMARK_;
} else
{return and__7440__auto__;
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
return (function (p1__9824_SHARP_,p2__9825_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__9824_SHARP_,p2__9825_SHARP_),p2__9825_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__9827_SHARP_,p2__9826_SHARP_){return cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__9827_SHARP_,p2__9826_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9829__delegate = function (rest__9828_SHARP_){var news = diff(cljs.core.deref(olds),rest__9828_SHARP_);cljs.core.reset_BANG_(olds,rest__9828_SHARP_);
return news;
};
var G__9829 = function (var_args){
var rest__9828_SHARP_ = null;if (arguments.length > 0) {
  rest__9828_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9829__delegate.call(this,rest__9828_SHARP_);};
G__9829.cljs$lang$maxFixedArity = 0;
G__9829.cljs$lang$applyTo = (function (arglist__9830){
var rest__9828_SHARP_ = cljs.core.seq(arglist__9830);
return G__9829__delegate(rest__9828_SHARP_);
});
G__9829.cljs$core$IFn$_invoke$arity$variadic = G__9829__delegate;
return G__9829;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.lift(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9831){
var cells = cljs.core.seq(arglist__9831);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift(cljs.core.seq).call(null,c);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__9832_SHARP_){return tailrecursion.javelin.lift(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__9832_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,cljs.core.count(cljs.core.deref(cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items,f){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(cljs.core.seq).call(null,items);var cur_count = tailrecursion.javelin.lift(cljs.core.count).call(null,items_seq);var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__9833_SHARP_){return tailrecursion.javelin.lift(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__9833_SHARP_);
});})(pool_size,items_seq,cur_count))
;return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){if((pool_size__$1 < cur_count__$1))
{var seq__9838_9842 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));var chunk__9839_9843 = null;var count__9840_9844 = 0;var i__9841_9845 = 0;while(true){
if((i__9841_9845 < count__9840_9844))
{var i_9846 = chunk__9839_9843.cljs$core$IIndexed$_nth$arity$2(null,i__9841_9845);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9846) : ith_item__$1.call(null,i_9846))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9846) : ith_item__$1.call(null,i_9846))));
{
var G__9847 = seq__9838_9842;
var G__9848 = chunk__9839_9843;
var G__9849 = count__9840_9844;
var G__9850 = (i__9841_9845 + 1);
seq__9838_9842 = G__9847;
chunk__9839_9843 = G__9848;
count__9840_9844 = G__9849;
i__9841_9845 = G__9850;
continue;
}
} else
{var temp__4092__auto___9851 = cljs.core.seq(seq__9838_9842);if(temp__4092__auto___9851)
{var seq__9838_9852__$1 = temp__4092__auto___9851;if(cljs.core.chunked_seq_QMARK_(seq__9838_9852__$1))
{var c__8208__auto___9853 = cljs.core.chunk_first(seq__9838_9852__$1);{
var G__9854 = cljs.core.chunk_rest(seq__9838_9852__$1);
var G__9855 = c__8208__auto___9853;
var G__9856 = cljs.core.count(c__8208__auto___9853);
var G__9857 = 0;
seq__9838_9842 = G__9854;
chunk__9839_9843 = G__9855;
count__9840_9844 = G__9856;
i__9841_9845 = G__9857;
continue;
}
} else
{var i_9858 = cljs.core.first(seq__9838_9852__$1);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9858) : ith_item__$1.call(null,i_9858))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9858) : ith_item__$1.call(null,i_9858))));
{
var G__9859 = cljs.core.next(seq__9838_9852__$1);
var G__9860 = null;
var G__9861 = 0;
var G__9862 = 0;
seq__9838_9842 = G__9859;
chunk__9839_9843 = G__9860;
count__9840_9844 = G__9861;
i__9841_9845 = G__9862;
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
