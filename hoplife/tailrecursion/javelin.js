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
}catch (e9791){if((e9791 instanceof Error))
{var _ = e9791;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e9791;
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
return (function (p1__9792_SHARP_,p2__9793_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9792_SHARP_,p2__9793_SHARP_,p2__9793_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop(queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__9794 = ((continue_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reducer,siblings,children):siblings);
queue = G__9794;
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
var seq__9799 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,srcs));var chunk__9800 = null;var count__9801 = 0;var i__9802 = 0;while(true){
if((i__9802 < count__9801))
{var src = chunk__9800.cljs$core$IIndexed$_nth$arity$2(null,i__9802);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9803 = seq__9799;
var G__9804 = chunk__9800;
var G__9805 = count__9801;
var G__9806 = (i__9802 + 1);
seq__9799 = G__9803;
chunk__9800 = G__9804;
count__9801 = G__9805;
i__9802 = G__9806;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9799);if(temp__4092__auto__)
{var seq__9799__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9799__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__9799__$1);{
var G__9807 = cljs.core.chunk_rest(seq__9799__$1);
var G__9808 = c__8023__auto__;
var G__9809 = cljs.core.count(c__8023__auto__);
var G__9810 = 0;
seq__9799 = G__9807;
chunk__9800 = G__9808;
count__9801 = G__9809;
i__9802 = G__9810;
continue;
}
} else
{var src = cljs.core.first(seq__9799__$1);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9811 = cljs.core.next(seq__9799__$1);
var G__9812 = null;
var G__9813 = 0;
var G__9814 = 0;
seq__9799 = G__9811;
chunk__9800 = G__9812;
count__9801 = G__9813;
i__9802 = G__9814;
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
var set_formula_BANG___delegate = function (this$,p__9819){var vec__9840 = p__9819;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9840,0,null);var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9840,1,null);tailrecursion.javelin.destroy_cell_BANG_(this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f):cljs.core.vec(sources));
var seq__9841_9860 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__9842_9861 = null;var count__9843_9862 = 0;var i__9844_9863 = 0;while(true){
if((i__9844_9863 < count__9843_9862))
{var source_9864 = chunk__9842_9861.cljs$core$IIndexed$_nth$arity$2(null,i__9844_9863);source_9864.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9864.sinks,this$);
if((source_9864.rank > this$.rank))
{var seq__9845_9865 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9841_9860,chunk__9842_9861,count__9843_9862,i__9844_9863,source_9864,vec__9840,f,sources){
return (function (p1__9815_SHARP_){return p1__9815_SHARP_.sinks;
});})(seq__9841_9860,chunk__9842_9861,count__9843_9862,i__9844_9863,source_9864,vec__9840,f,sources))
,source_9864));var chunk__9846_9866 = null;var count__9847_9867 = 0;var i__9848_9868 = 0;while(true){
if((i__9848_9868 < count__9847_9867))
{var dep_9869 = chunk__9846_9866.cljs$core$IIndexed$_nth$arity$2(null,i__9848_9868);dep_9869.rank = tailrecursion.javelin.next_rank();
{
var G__9870 = seq__9845_9865;
var G__9871 = chunk__9846_9866;
var G__9872 = count__9847_9867;
var G__9873 = (i__9848_9868 + 1);
seq__9845_9865 = G__9870;
chunk__9846_9866 = G__9871;
count__9847_9867 = G__9872;
i__9848_9868 = G__9873;
continue;
}
} else
{var temp__4092__auto___9874 = cljs.core.seq(seq__9845_9865);if(temp__4092__auto___9874)
{var seq__9845_9875__$1 = temp__4092__auto___9874;if(cljs.core.chunked_seq_QMARK_(seq__9845_9875__$1))
{var c__8023__auto___9876 = cljs.core.chunk_first(seq__9845_9875__$1);{
var G__9877 = cljs.core.chunk_rest(seq__9845_9875__$1);
var G__9878 = c__8023__auto___9876;
var G__9879 = cljs.core.count(c__8023__auto___9876);
var G__9880 = 0;
seq__9845_9865 = G__9877;
chunk__9846_9866 = G__9878;
count__9847_9867 = G__9879;
i__9848_9868 = G__9880;
continue;
}
} else
{var dep_9881 = cljs.core.first(seq__9845_9875__$1);dep_9881.rank = tailrecursion.javelin.next_rank();
{
var G__9882 = cljs.core.next(seq__9845_9875__$1);
var G__9883 = null;
var G__9884 = 0;
var G__9885 = 0;
seq__9845_9865 = G__9882;
chunk__9846_9866 = G__9883;
count__9847_9867 = G__9884;
i__9848_9868 = G__9885;
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
var G__9886 = seq__9841_9860;
var G__9887 = chunk__9842_9861;
var G__9888 = count__9843_9862;
var G__9889 = (i__9844_9863 + 1);
seq__9841_9860 = G__9886;
chunk__9842_9861 = G__9887;
count__9843_9862 = G__9888;
i__9844_9863 = G__9889;
continue;
}
} else
{var temp__4092__auto___9890 = cljs.core.seq(seq__9841_9860);if(temp__4092__auto___9890)
{var seq__9841_9891__$1 = temp__4092__auto___9890;if(cljs.core.chunked_seq_QMARK_(seq__9841_9891__$1))
{var c__8023__auto___9892 = cljs.core.chunk_first(seq__9841_9891__$1);{
var G__9893 = cljs.core.chunk_rest(seq__9841_9891__$1);
var G__9894 = c__8023__auto___9892;
var G__9895 = cljs.core.count(c__8023__auto___9892);
var G__9896 = 0;
seq__9841_9860 = G__9893;
chunk__9842_9861 = G__9894;
count__9843_9862 = G__9895;
i__9844_9863 = G__9896;
continue;
}
} else
{var source_9897 = cljs.core.first(seq__9841_9891__$1);source_9897.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9897.sinks,this$);
if((source_9897.rank > this$.rank))
{var seq__9849_9898 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9841_9860,chunk__9842_9861,count__9843_9862,i__9844_9863,source_9897,seq__9841_9891__$1,temp__4092__auto___9890,vec__9840,f,sources){
return (function (p1__9815_SHARP_){return p1__9815_SHARP_.sinks;
});})(seq__9841_9860,chunk__9842_9861,count__9843_9862,i__9844_9863,source_9897,seq__9841_9891__$1,temp__4092__auto___9890,vec__9840,f,sources))
,source_9897));var chunk__9850_9899 = null;var count__9851_9900 = 0;var i__9852_9901 = 0;while(true){
if((i__9852_9901 < count__9851_9900))
{var dep_9902 = chunk__9850_9899.cljs$core$IIndexed$_nth$arity$2(null,i__9852_9901);dep_9902.rank = tailrecursion.javelin.next_rank();
{
var G__9903 = seq__9849_9898;
var G__9904 = chunk__9850_9899;
var G__9905 = count__9851_9900;
var G__9906 = (i__9852_9901 + 1);
seq__9849_9898 = G__9903;
chunk__9850_9899 = G__9904;
count__9851_9900 = G__9905;
i__9852_9901 = G__9906;
continue;
}
} else
{var temp__4092__auto___9907__$1 = cljs.core.seq(seq__9849_9898);if(temp__4092__auto___9907__$1)
{var seq__9849_9908__$1 = temp__4092__auto___9907__$1;if(cljs.core.chunked_seq_QMARK_(seq__9849_9908__$1))
{var c__8023__auto___9909 = cljs.core.chunk_first(seq__9849_9908__$1);{
var G__9910 = cljs.core.chunk_rest(seq__9849_9908__$1);
var G__9911 = c__8023__auto___9909;
var G__9912 = cljs.core.count(c__8023__auto___9909);
var G__9913 = 0;
seq__9849_9898 = G__9910;
chunk__9850_9899 = G__9911;
count__9851_9900 = G__9912;
i__9852_9901 = G__9913;
continue;
}
} else
{var dep_9914 = cljs.core.first(seq__9849_9908__$1);dep_9914.rank = tailrecursion.javelin.next_rank();
{
var G__9915 = cljs.core.next(seq__9849_9908__$1);
var G__9916 = null;
var G__9917 = 0;
var G__9918 = 0;
seq__9849_9898 = G__9915;
chunk__9850_9899 = G__9916;
count__9851_9900 = G__9917;
i__9852_9901 = G__9918;
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
var G__9919 = cljs.core.next(seq__9841_9891__$1);
var G__9920 = null;
var G__9921 = 0;
var G__9922 = 0;
seq__9841_9860 = G__9919;
chunk__9842_9861 = G__9920;
count__9843_9862 = G__9921;
i__9844_9863 = G__9922;
continue;
}
}
} else
{}
}
break;
}
var compute = ((function (vec__9840,f,sources){
return (function (p1__9816_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9816_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9816_SHARP_)));
});})(vec__9840,f,sources))
;var thunk = ((function (compute,vec__9840,f,sources){
return (function (){var x = this$.state;var y = compute(this$.sources);var seq__9853_9923 = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$.watches,cljs.core.constant$keyword$18));var chunk__9854_9924 = null;var count__9855_9925 = 0;var i__9856_9926 = 0;while(true){
if((i__9856_9926 < count__9855_9925))
{var vec__9857_9927 = chunk__9854_9924.cljs$core$IIndexed$_nth$arity$2(null,i__9856_9926);var k_9928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9857_9927,0,null);var f_9929__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9857_9927,1,null);(f_9929__$1.cljs$core$IFn$_invoke$arity$4 ? f_9929__$1.cljs$core$IFn$_invoke$arity$4(k_9928,this$,x,y) : f_9929__$1.call(null,k_9928,this$,x,y));
{
var G__9930 = seq__9853_9923;
var G__9931 = chunk__9854_9924;
var G__9932 = count__9855_9925;
var G__9933 = (i__9856_9926 + 1);
seq__9853_9923 = G__9930;
chunk__9854_9924 = G__9931;
count__9855_9925 = G__9932;
i__9856_9926 = G__9933;
continue;
}
} else
{var temp__4092__auto___9934 = cljs.core.seq(seq__9853_9923);if(temp__4092__auto___9934)
{var seq__9853_9935__$1 = temp__4092__auto___9934;if(cljs.core.chunked_seq_QMARK_(seq__9853_9935__$1))
{var c__8023__auto___9936 = cljs.core.chunk_first(seq__9853_9935__$1);{
var G__9937 = cljs.core.chunk_rest(seq__9853_9935__$1);
var G__9938 = c__8023__auto___9936;
var G__9939 = cljs.core.count(c__8023__auto___9936);
var G__9940 = 0;
seq__9853_9923 = G__9937;
chunk__9854_9924 = G__9938;
count__9855_9925 = G__9939;
i__9856_9926 = G__9940;
continue;
}
} else
{var vec__9858_9941 = cljs.core.first(seq__9853_9935__$1);var k_9942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9858_9941,0,null);var f_9943__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9858_9941,1,null);(f_9943__$1.cljs$core$IFn$_invoke$arity$4 ? f_9943__$1.cljs$core$IFn$_invoke$arity$4(k_9942,this$,x,y) : f_9943__$1.call(null,k_9942,this$,x,y));
{
var G__9944 = cljs.core.next(seq__9853_9935__$1);
var G__9945 = null;
var G__9946 = 0;
var G__9947 = 0;
seq__9853_9923 = G__9944;
chunk__9854_9924 = G__9945;
count__9855_9925 = G__9946;
i__9856_9926 = G__9947;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute,vec__9840,f,sources))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch(this$,cljs.core.constant$keyword$18,(cljs.core.truth_(f)?((function (compute,thunk,err_mesg,vec__9840,f,sources){
return (function (){throw (new Error(err_mesg));
});})(compute,thunk,err_mesg,vec__9840,f,sources))
:((function (compute,thunk,err_mesg,vec__9840,f,sources){
return (function (p1__9818_SHARP_,p2__9817_SHARP_){return tailrecursion.javelin.propagate_BANG_(p2__9817_SHARP_);
});})(compute,thunk,err_mesg,vec__9840,f,sources))
));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:((function (compute,thunk,err_mesg,vec__9840,f,sources){
return (function (){return cljs.core.deref(this$);
});})(compute,thunk,err_mesg,vec__9840,f,sources))
);
var G__9859 = this$;tailrecursion.javelin.propagate_BANG_(G__9859);
return G__9859;
};
var set_formula_BANG_ = function (this$,var_args){
var p__9819 = null;if (arguments.length > 1) {
  p__9819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__9819);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__9948){
var this$ = cljs.core.first(arglist__9948);
var p__9819 = cljs.core.rest(arglist__9948);
return set_formula_BANG___delegate(this$,p__9819);
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
var this$__$1 = this;var seq__9949 = cljs.core.seq(self__.watches);var chunk__9950 = null;var count__9951 = 0;var i__9952 = 0;while(true){
if((i__9952 < count__9951))
{var vec__9953 = chunk__9950.cljs$core$IIndexed$_nth$arity$2(null,i__9952);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9953,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9953,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9955 = seq__9949;
var G__9956 = chunk__9950;
var G__9957 = count__9951;
var G__9958 = (i__9952 + 1);
seq__9949 = G__9955;
chunk__9950 = G__9956;
count__9951 = G__9957;
i__9952 = G__9958;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9949);if(temp__4092__auto__)
{var seq__9949__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9949__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__9949__$1);{
var G__9959 = cljs.core.chunk_rest(seq__9949__$1);
var G__9960 = c__8023__auto__;
var G__9961 = cljs.core.count(c__8023__auto__);
var G__9962 = 0;
seq__9949 = G__9959;
chunk__9950 = G__9960;
count__9951 = G__9961;
i__9952 = G__9962;
continue;
}
} else
{var vec__9954 = cljs.core.first(seq__9949__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9954,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9954,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9963 = cljs.core.next(seq__9949__$1);
var G__9964 = null;
var G__9965 = 0;
var G__9966 = 0;
seq__9949 = G__9963;
chunk__9950 = G__9964;
count__9951 = G__9965;
i__9952 = G__9966;
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
var G__9967__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$19) : tailrecursion.javelin.cell.call(null,cljs.core.constant$keyword$19)),cljs.core.array_seq([f,sources], 0));
};
var G__9967 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9967__delegate.call(this,sources);};
G__9967.cljs$lang$maxFixedArity = 0;
G__9967.cljs$lang$applyTo = (function (arglist__9968){
var sources = cljs.core.seq(arglist__9968);
return G__9967__delegate(sources);
});
G__9967.cljs$core$IFn$_invoke$arity$variadic = G__9967__delegate;
return G__9967;
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
return (function (p1__9969_SHARP_,p2__9970_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__9969_SHARP_,p2__9970_SHARP_),p2__9970_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__9972_SHARP_,p2__9971_SHARP_){return cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__9972_SHARP_,p2__9971_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__9974__delegate = function (rest__9973_SHARP_){var news = diff(cljs.core.deref(olds),rest__9973_SHARP_);cljs.core.reset_BANG_(olds,rest__9973_SHARP_);
return news;
};
var G__9974 = function (var_args){
var rest__9973_SHARP_ = null;if (arguments.length > 0) {
  rest__9973_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9974__delegate.call(this,rest__9973_SHARP_);};
G__9974.cljs$lang$maxFixedArity = 0;
G__9974.cljs$lang$applyTo = (function (arglist__9975){
var rest__9973_SHARP_ = cljs.core.seq(arglist__9975);
return G__9974__delegate(rest__9973_SHARP_);
});
G__9974.cljs$core$IFn$_invoke$arity$variadic = G__9974__delegate;
return G__9974;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.lift(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9976){
var cells = cljs.core.seq(arglist__9976);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift(cljs.core.seq).call(null,c);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__9977_SHARP_){return tailrecursion.javelin.lift(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__9977_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,cljs.core.count(cljs.core.deref(cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items,f){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(cljs.core.seq).call(null,items);var cur_count = tailrecursion.javelin.lift(cljs.core.count).call(null,items_seq);var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__9978_SHARP_){return tailrecursion.javelin.lift(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__9978_SHARP_);
});})(pool_size,items_seq,cur_count))
;return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){if((pool_size__$1 < cur_count__$1))
{var seq__9983_9987 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));var chunk__9984_9988 = null;var count__9985_9989 = 0;var i__9986_9990 = 0;while(true){
if((i__9986_9990 < count__9985_9989))
{var i_9991 = chunk__9984_9988.cljs$core$IIndexed$_nth$arity$2(null,i__9986_9990);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9991) : ith_item__$1.call(null,i_9991))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_9991) : ith_item__$1.call(null,i_9991))));
{
var G__9992 = seq__9983_9987;
var G__9993 = chunk__9984_9988;
var G__9994 = count__9985_9989;
var G__9995 = (i__9986_9990 + 1);
seq__9983_9987 = G__9992;
chunk__9984_9988 = G__9993;
count__9985_9989 = G__9994;
i__9986_9990 = G__9995;
continue;
}
} else
{var temp__4092__auto___9996 = cljs.core.seq(seq__9983_9987);if(temp__4092__auto___9996)
{var seq__9983_9997__$1 = temp__4092__auto___9996;if(cljs.core.chunked_seq_QMARK_(seq__9983_9997__$1))
{var c__8023__auto___9998 = cljs.core.chunk_first(seq__9983_9997__$1);{
var G__9999 = cljs.core.chunk_rest(seq__9983_9997__$1);
var G__10000 = c__8023__auto___9998;
var G__10001 = cljs.core.count(c__8023__auto___9998);
var G__10002 = 0;
seq__9983_9987 = G__9999;
chunk__9984_9988 = G__10000;
count__9985_9989 = G__10001;
i__9986_9990 = G__10002;
continue;
}
} else
{var i_10003 = cljs.core.first(seq__9983_9997__$1);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10003) : ith_item__$1.call(null,i_10003))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10003) : ith_item__$1.call(null,i_10003))));
{
var G__10004 = cljs.core.next(seq__9983_9997__$1);
var G__10005 = null;
var G__10006 = 0;
var G__10007 = 0;
seq__9983_9987 = G__10004;
chunk__9984_9988 = G__10005;
count__9985_9989 = G__10006;
i__9986_9990 = G__10007;
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
