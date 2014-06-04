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
}catch (e9687){if((e9687 instanceof Error))
{var _ = e9687;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e9687;
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
return (function (p1__9688_SHARP_,p2__9689_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9688_SHARP_,p2__9689_SHARP_,p2__9689_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop(queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__9690 = ((continue_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reducer,siblings,children):siblings);
queue = G__9690;
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
var seq__9695 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,srcs));var chunk__9696 = null;var count__9697 = 0;var i__9698 = 0;while(true){
if((i__9698 < count__9697))
{var src = chunk__9696.cljs$core$IIndexed$_nth$arity$2(null,i__9698);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9699 = seq__9695;
var G__9700 = chunk__9696;
var G__9701 = count__9697;
var G__9702 = (i__9698 + 1);
seq__9695 = G__9699;
chunk__9696 = G__9700;
count__9697 = G__9701;
i__9698 = G__9702;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9695);if(temp__4092__auto__)
{var seq__9695__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9695__$1))
{var c__8025__auto__ = cljs.core.chunk_first(seq__9695__$1);{
var G__9703 = cljs.core.chunk_rest(seq__9695__$1);
var G__9704 = c__8025__auto__;
var G__9705 = cljs.core.count(c__8025__auto__);
var G__9706 = 0;
seq__9695 = G__9703;
chunk__9696 = G__9704;
count__9697 = G__9705;
i__9698 = G__9706;
continue;
}
} else
{var src = cljs.core.first(seq__9695__$1);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9707 = cljs.core.next(seq__9695__$1);
var G__9708 = null;
var G__9709 = 0;
var G__9710 = 0;
seq__9695 = G__9707;
chunk__9696 = G__9708;
count__9697 = G__9709;
i__9698 = G__9710;
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
var set_formula_BANG___delegate = function (this$,p__9715){var vec__9736 = p__9715;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9736,0,null);var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9736,1,null);tailrecursion.javelin.destroy_cell_BANG_(this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f):cljs.core.vec(sources));
var seq__9737_9756 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__9738_9757 = null;var count__9739_9758 = 0;var i__9740_9759 = 0;while(true){
if((i__9740_9759 < count__9739_9758))
{var source_9760 = chunk__9738_9757.cljs$core$IIndexed$_nth$arity$2(null,i__9740_9759);source_9760.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9760.sinks,this$);
if((source_9760.rank > this$.rank))
{var seq__9741_9761 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9737_9756,chunk__9738_9757,count__9739_9758,i__9740_9759,source_9760,vec__9736,f,sources){
return (function (p1__9711_SHARP_){return p1__9711_SHARP_.sinks;
});})(seq__9737_9756,chunk__9738_9757,count__9739_9758,i__9740_9759,source_9760,vec__9736,f,sources))
,source_9760));var chunk__9742_9762 = null;var count__9743_9763 = 0;var i__9744_9764 = 0;while(true){
if((i__9744_9764 < count__9743_9763))
{var dep_9765 = chunk__9742_9762.cljs$core$IIndexed$_nth$arity$2(null,i__9744_9764);dep_9765.rank = tailrecursion.javelin.next_rank();
{
var G__9766 = seq__9741_9761;
var G__9767 = chunk__9742_9762;
var G__9768 = count__9743_9763;
var G__9769 = (i__9744_9764 + 1);
seq__9741_9761 = G__9766;
chunk__9742_9762 = G__9767;
count__9743_9763 = G__9768;
i__9744_9764 = G__9769;
continue;
}
} else
{var temp__4092__auto___9770 = cljs.core.seq(seq__9741_9761);if(temp__4092__auto___9770)
{var seq__9741_9771__$1 = temp__4092__auto___9770;if(cljs.core.chunked_seq_QMARK_(seq__9741_9771__$1))
{var c__8025__auto___9772 = cljs.core.chunk_first(seq__9741_9771__$1);{
var G__9773 = cljs.core.chunk_rest(seq__9741_9771__$1);
var G__9774 = c__8025__auto___9772;
var G__9775 = cljs.core.count(c__8025__auto___9772);
var G__9776 = 0;
seq__9741_9761 = G__9773;
chunk__9742_9762 = G__9774;
count__9743_9763 = G__9775;
i__9744_9764 = G__9776;
continue;
}
} else
{var dep_9777 = cljs.core.first(seq__9741_9771__$1);dep_9777.rank = tailrecursion.javelin.next_rank();
{
var G__9778 = cljs.core.next(seq__9741_9771__$1);
var G__9779 = null;
var G__9780 = 0;
var G__9781 = 0;
seq__9741_9761 = G__9778;
chunk__9742_9762 = G__9779;
count__9743_9763 = G__9780;
i__9744_9764 = G__9781;
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
var G__9782 = seq__9737_9756;
var G__9783 = chunk__9738_9757;
var G__9784 = count__9739_9758;
var G__9785 = (i__9740_9759 + 1);
seq__9737_9756 = G__9782;
chunk__9738_9757 = G__9783;
count__9739_9758 = G__9784;
i__9740_9759 = G__9785;
continue;
}
} else
{var temp__4092__auto___9786 = cljs.core.seq(seq__9737_9756);if(temp__4092__auto___9786)
{var seq__9737_9787__$1 = temp__4092__auto___9786;if(cljs.core.chunked_seq_QMARK_(seq__9737_9787__$1))
{var c__8025__auto___9788 = cljs.core.chunk_first(seq__9737_9787__$1);{
var G__9789 = cljs.core.chunk_rest(seq__9737_9787__$1);
var G__9790 = c__8025__auto___9788;
var G__9791 = cljs.core.count(c__8025__auto___9788);
var G__9792 = 0;
seq__9737_9756 = G__9789;
chunk__9738_9757 = G__9790;
count__9739_9758 = G__9791;
i__9740_9759 = G__9792;
continue;
}
} else
{var source_9793 = cljs.core.first(seq__9737_9787__$1);source_9793.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9793.sinks,this$);
if((source_9793.rank > this$.rank))
{var seq__9745_9794 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9737_9756,chunk__9738_9757,count__9739_9758,i__9740_9759,source_9793,seq__9737_9787__$1,temp__4092__auto___9786,vec__9736,f,sources){
return (function (p1__9711_SHARP_){return p1__9711_SHARP_.sinks;
});})(seq__9737_9756,chunk__9738_9757,count__9739_9758,i__9740_9759,source_9793,seq__9737_9787__$1,temp__4092__auto___9786,vec__9736,f,sources))
,source_9793));var chunk__9746_9795 = null;var count__9747_9796 = 0;var i__9748_9797 = 0;while(true){
if((i__9748_9797 < count__9747_9796))
{var dep_9798 = chunk__9746_9795.cljs$core$IIndexed$_nth$arity$2(null,i__9748_9797);dep_9798.rank = tailrecursion.javelin.next_rank();
{
var G__9799 = seq__9745_9794;
var G__9800 = chunk__9746_9795;
var G__9801 = count__9747_9796;
var G__9802 = (i__9748_9797 + 1);
seq__9745_9794 = G__9799;
chunk__9746_9795 = G__9800;
count__9747_9796 = G__9801;
i__9748_9797 = G__9802;
continue;
}
} else
{var temp__4092__auto___9803__$1 = cljs.core.seq(seq__9745_9794);if(temp__4092__auto___9803__$1)
{var seq__9745_9804__$1 = temp__4092__auto___9803__$1;if(cljs.core.chunked_seq_QMARK_(seq__9745_9804__$1))
{var c__8025__auto___9805 = cljs.core.chunk_first(seq__9745_9804__$1);{
var G__9806 = cljs.core.chunk_rest(seq__9745_9804__$1);
var G__9807 = c__8025__auto___9805;
var G__9808 = cljs.core.count(c__8025__auto___9805);
var G__9809 = 0;
seq__9745_9794 = G__9806;
chunk__9746_9795 = G__9807;
count__9747_9796 = G__9808;
i__9748_9797 = G__9809;
continue;
}
} else
{var dep_9810 = cljs.core.first(seq__9745_9804__$1);dep_9810.rank = tailrecursion.javelin.next_rank();
{
var G__9811 = cljs.core.next(seq__9745_9804__$1);
var G__9812 = null;
var G__9813 = 0;
var G__9814 = 0;
seq__9745_9794 = G__9811;
chunk__9746_9795 = G__9812;
count__9747_9796 = G__9813;
i__9748_9797 = G__9814;
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
var G__9815 = cljs.core.next(seq__9737_9787__$1);
var G__9816 = null;
var G__9817 = 0;
var G__9818 = 0;
seq__9737_9756 = G__9815;
chunk__9738_9757 = G__9816;
count__9739_9758 = G__9817;
i__9740_9759 = G__9818;
continue;
}
}
} else
{}
}
break;
}
var compute = ((function (vec__9736,f,sources){
return (function (p1__9712_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9712_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9712_SHARP_)));
});})(vec__9736,f,sources))
;var thunk = ((function (compute,vec__9736,f,sources){
return (function (){var x = this$.state;var y = compute(this$.sources);var seq__9749_9819 = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$.watches,cljs.core.constant$keyword$18));var chunk__9750_9820 = null;var count__9751_9821 = 0;var i__9752_9822 = 0;while(true){
if((i__9752_9822 < count__9751_9821))
{var vec__9753_9823 = chunk__9750_9820.cljs$core$IIndexed$_nth$arity$2(null,i__9752_9822);var k_9824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9753_9823,0,null);var f_9825__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9753_9823,1,null);(f_9825__$1.cljs$core$IFn$_invoke$arity$4 ? f_9825__$1.cljs$core$IFn$_invoke$arity$4(k_9824,this$,x,y) : f_9825__$1.call(null,k_9824,this$,x,y));
{
var G__9826 = seq__9749_9819;
var G__9827 = chunk__9750_9820;
var G__9828 = count__9751_9821;
var G__9829 = (i__9752_9822 + 1);
seq__9749_9819 = G__9826;
chunk__9750_9820 = G__9827;
count__9751_9821 = G__9828;
i__9752_9822 = G__9829;
continue;
}
} else
{var temp__4092__auto___9830 = cljs.core.seq(seq__9749_9819);if(temp__4092__auto___9830)
{var seq__9749_9831__$1 = temp__4092__auto___9830;if(cljs.core.chunked_seq_QMARK_(seq__9749_9831__$1))
{var c__8025__auto___9832 = cljs.core.chunk_first(seq__9749_9831__$1);{
var G__9833 = cljs.core.chunk_rest(seq__9749_9831__$1);
var G__9834 = c__8025__auto___9832;
var G__9835 = cljs.core.count(c__8025__auto___9832);
var G__9836 = 0;
seq__9749_9819 = G__9833;
chunk__9750_9820 = G__9834;
count__9751_9821 = G__9835;
i__9752_9822 = G__9836;
continue;
}
} else
{var vec__9754_9837 = cljs.core.first(seq__9749_9831__$1);var k_9838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9754_9837,0,null);var f_9839__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9754_9837,1,null);(f_9839__$1.cljs$core$IFn$_invoke$arity$4 ? f_9839__$1.cljs$core$IFn$_invoke$arity$4(k_9838,this$,x,y) : f_9839__$1.call(null,k_9838,this$,x,y));
{
var G__9840 = cljs.core.next(seq__9749_9831__$1);
var G__9841 = null;
var G__9842 = 0;
var G__9843 = 0;
seq__9749_9819 = G__9840;
chunk__9750_9820 = G__9841;
count__9751_9821 = G__9842;
i__9752_9822 = G__9843;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute,vec__9736,f,sources))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch(this$,cljs.core.constant$keyword$18,(cljs.core.truth_(f)?((function (compute,thunk,err_mesg,vec__9736,f,sources){
return (function (){throw (new Error(err_mesg));
});})(compute,thunk,err_mesg,vec__9736,f,sources))
:((function (compute,thunk,err_mesg,vec__9736,f,sources){
return (function (p1__9714_SHARP_,p2__9713_SHARP_){return tailrecursion.javelin.propagate_BANG_(p2__9713_SHARP_);
});})(compute,thunk,err_mesg,vec__9736,f,sources))
));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:((function (compute,thunk,err_mesg,vec__9736,f,sources){
return (function (){return cljs.core.deref(this$);
});})(compute,thunk,err_mesg,vec__9736,f,sources))
);
var G__9755 = this$;tailrecursion.javelin.propagate_BANG_(G__9755);
return G__9755;
};
var set_formula_BANG_ = function (this$,var_args){
var p__9715 = null;if (arguments.length > 1) {
  p__9715 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__9715);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__9844){
var this$ = cljs.core.first(arglist__9844);
var p__9715 = cljs.core.rest(arglist__9844);
return set_formula_BANG___delegate(this$,p__9715);
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
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__7836__auto__,writer__7837__auto__,opt__7838__auto__){return cljs.core._write(writer__7837__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__9845 = cljs.core.seq(self__.watches);var chunk__9846 = null;var count__9847 = 0;var i__9848 = 0;while(true){
if((i__9848 < count__9847))
{var vec__9849 = chunk__9846.cljs$core$IIndexed$_nth$arity$2(null,i__9848);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9849,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9849,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9851 = seq__9845;
var G__9852 = chunk__9846;
var G__9853 = count__9847;
var G__9854 = (i__9848 + 1);
seq__9845 = G__9851;
chunk__9846 = G__9852;
count__9847 = G__9853;
i__9848 = G__9854;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9845);if(temp__4092__auto__)
{var seq__9845__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9845__$1))
{var c__8025__auto__ = cljs.core.chunk_first(seq__9845__$1);{
var G__9855 = cljs.core.chunk_rest(seq__9845__$1);
var G__9856 = c__8025__auto__;
var G__9857 = cljs.core.count(c__8025__auto__);
var G__9858 = 0;
seq__9845 = G__9855;
chunk__9846 = G__9856;
count__9847 = G__9857;
i__9848 = G__9858;
continue;
}
} else
{var vec__9850 = cljs.core.first(seq__9845__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9850,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9850,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9859 = cljs.core.next(seq__9845__$1);
var G__9860 = null;
var G__9861 = 0;
var G__9862 = 0;
seq__9845 = G__9859;
chunk__9846 = G__9860;
count__9847 = G__9861;
i__9848 = G__9862;
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
var G__9863__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$19) : tailrecursion.javelin.cell.call(null,cljs.core.constant$keyword$19)),cljs.core.array_seq([f,sources], 0));
};
var G__9863 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9863__delegate.call(this,sources);};
G__9863.cljs$lang$maxFixedArity = 0;
G__9863.cljs$lang$applyTo = (function (arglist__9864){
var sources = cljs.core.seq(arglist__9864);
return G__9863__delegate(sources);
});
G__9863.cljs$core$IFn$_invoke$arity$variadic = G__9863__delegate;
return G__9863;
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
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__7257__auto__ = tailrecursion.javelin.cell_QMARK_(c);if(cljs.core.truth_(and__7257__auto__))
{return c.input_QMARK_;
} else
{return and__7257__auto__;
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
return (function (p1__9865_SHARP_,p2__9866_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__9865_SHARP_,p2__9866_SHARP_),p2__9866_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__9868_SHARP_,p2__9867_SHARP_){return cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__9868_SHARP_,p2__9867_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9870__delegate = function (rest__9869_SHARP_){var news = diff(cljs.core.deref(olds),rest__9869_SHARP_);cljs.core.reset_BANG_(olds,rest__9869_SHARP_);
return news;
};
var G__9870 = function (var_args){
var rest__9869_SHARP_ = null;if (arguments.length > 0) {
  rest__9869_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9870__delegate.call(this,rest__9869_SHARP_);};
G__9870.cljs$lang$maxFixedArity = 0;
G__9870.cljs$lang$applyTo = (function (arglist__9871){
var rest__9869_SHARP_ = cljs.core.seq(arglist__9871);
return G__9870__delegate(rest__9869_SHARP_);
});
G__9870.cljs$core$IFn$_invoke$arity$variadic = G__9870__delegate;
return G__9870;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.lift(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9872){
var cells = cljs.core.seq(arglist__9872);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift(cljs.core.seq).call(null,c);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__9873_SHARP_){return tailrecursion.javelin.lift(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__9873_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,cljs.core.count(cljs.core.deref(cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items,f){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(cljs.core.seq).call(null,items);var cur_count = tailrecursion.javelin.lift(cljs.core.count).call(null,items_seq);var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__9874_SHARP_){return tailrecursion.javelin.lift(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__9874_SHARP_);
});})(pool_size,items_seq,cur_count))
;return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){if((pool_size__$1 < cur_count__$1))
{var seq__9879_9883 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));var chunk__9880_9884 = null;var count__9881_9885 = 0;var i__9882_9886 = 0;while(true){
if((i__9882_9886 < count__9881_9885))
{var i_9887 = chunk__9880_9884.cljs$core$IIndexed$_nth$arity$2(null,i__9882_9886);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9887) : ith_item__$1.call(null,i_9887))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9887) : ith_item__$1.call(null,i_9887))));
{
var G__9888 = seq__9879_9883;
var G__9889 = chunk__9880_9884;
var G__9890 = count__9881_9885;
var G__9891 = (i__9882_9886 + 1);
seq__9879_9883 = G__9888;
chunk__9880_9884 = G__9889;
count__9881_9885 = G__9890;
i__9882_9886 = G__9891;
continue;
}
} else
{var temp__4092__auto___9892 = cljs.core.seq(seq__9879_9883);if(temp__4092__auto___9892)
{var seq__9879_9893__$1 = temp__4092__auto___9892;if(cljs.core.chunked_seq_QMARK_(seq__9879_9893__$1))
{var c__8025__auto___9894 = cljs.core.chunk_first(seq__9879_9893__$1);{
var G__9895 = cljs.core.chunk_rest(seq__9879_9893__$1);
var G__9896 = c__8025__auto___9894;
var G__9897 = cljs.core.count(c__8025__auto___9894);
var G__9898 = 0;
seq__9879_9883 = G__9895;
chunk__9880_9884 = G__9896;
count__9881_9885 = G__9897;
i__9882_9886 = G__9898;
continue;
}
} else
{var i_9899 = cljs.core.first(seq__9879_9893__$1);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9899) : ith_item__$1.call(null,i_9899))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9899) : ith_item__$1.call(null,i_9899))));
{
var G__9900 = cljs.core.next(seq__9879_9893__$1);
var G__9901 = null;
var G__9902 = 0;
var G__9903 = 0;
seq__9879_9883 = G__9900;
chunk__9880_9884 = G__9901;
count__9881_9885 = G__9902;
i__9882_9886 = G__9903;
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
