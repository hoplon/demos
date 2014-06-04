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
}catch (e9834){if((e9834 instanceof Error))
{var _ = e9834;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e9834;
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
return (function (p1__9835_SHARP_,p2__9836_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9835_SHARP_,p2__9836_SHARP_,p2__9836_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop(queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__9837 = ((continue_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reducer,siblings,children):siblings);
queue = G__9837;
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
var seq__9842 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,srcs));var chunk__9843 = null;var count__9844 = 0;var i__9845 = 0;while(true){
if((i__9845 < count__9844))
{var src = chunk__9843.cljs$core$IIndexed$_nth$arity$2(null,i__9845);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9846 = seq__9842;
var G__9847 = chunk__9843;
var G__9848 = count__9844;
var G__9849 = (i__9845 + 1);
seq__9842 = G__9846;
chunk__9843 = G__9847;
count__9844 = G__9848;
i__9845 = G__9849;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9842);if(temp__4092__auto__)
{var seq__9842__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9842__$1))
{var c__8199__auto__ = cljs.core.chunk_first(seq__9842__$1);{
var G__9850 = cljs.core.chunk_rest(seq__9842__$1);
var G__9851 = c__8199__auto__;
var G__9852 = cljs.core.count(c__8199__auto__);
var G__9853 = 0;
seq__9842 = G__9850;
chunk__9843 = G__9851;
count__9844 = G__9852;
i__9845 = G__9853;
continue;
}
} else
{var src = cljs.core.first(seq__9842__$1);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9854 = cljs.core.next(seq__9842__$1);
var G__9855 = null;
var G__9856 = 0;
var G__9857 = 0;
seq__9842 = G__9854;
chunk__9843 = G__9855;
count__9844 = G__9856;
i__9845 = G__9857;
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
var set_formula_BANG___delegate = function (this$,p__9862){var vec__9883 = p__9862;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9883,0,null);var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9883,1,null);tailrecursion.javelin.destroy_cell_BANG_(this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f):cljs.core.vec(sources));
var seq__9884_9903 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__9885_9904 = null;var count__9886_9905 = 0;var i__9887_9906 = 0;while(true){
if((i__9887_9906 < count__9886_9905))
{var source_9907 = chunk__9885_9904.cljs$core$IIndexed$_nth$arity$2(null,i__9887_9906);source_9907.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9907.sinks,this$);
if((source_9907.rank > this$.rank))
{var seq__9888_9908 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9884_9903,chunk__9885_9904,count__9886_9905,i__9887_9906,source_9907,vec__9883,f,sources){
return (function (p1__9858_SHARP_){return p1__9858_SHARP_.sinks;
});})(seq__9884_9903,chunk__9885_9904,count__9886_9905,i__9887_9906,source_9907,vec__9883,f,sources))
,source_9907));var chunk__9889_9909 = null;var count__9890_9910 = 0;var i__9891_9911 = 0;while(true){
if((i__9891_9911 < count__9890_9910))
{var dep_9912 = chunk__9889_9909.cljs$core$IIndexed$_nth$arity$2(null,i__9891_9911);dep_9912.rank = tailrecursion.javelin.next_rank();
{
var G__9913 = seq__9888_9908;
var G__9914 = chunk__9889_9909;
var G__9915 = count__9890_9910;
var G__9916 = (i__9891_9911 + 1);
seq__9888_9908 = G__9913;
chunk__9889_9909 = G__9914;
count__9890_9910 = G__9915;
i__9891_9911 = G__9916;
continue;
}
} else
{var temp__4092__auto___9917 = cljs.core.seq(seq__9888_9908);if(temp__4092__auto___9917)
{var seq__9888_9918__$1 = temp__4092__auto___9917;if(cljs.core.chunked_seq_QMARK_(seq__9888_9918__$1))
{var c__8199__auto___9919 = cljs.core.chunk_first(seq__9888_9918__$1);{
var G__9920 = cljs.core.chunk_rest(seq__9888_9918__$1);
var G__9921 = c__8199__auto___9919;
var G__9922 = cljs.core.count(c__8199__auto___9919);
var G__9923 = 0;
seq__9888_9908 = G__9920;
chunk__9889_9909 = G__9921;
count__9890_9910 = G__9922;
i__9891_9911 = G__9923;
continue;
}
} else
{var dep_9924 = cljs.core.first(seq__9888_9918__$1);dep_9924.rank = tailrecursion.javelin.next_rank();
{
var G__9925 = cljs.core.next(seq__9888_9918__$1);
var G__9926 = null;
var G__9927 = 0;
var G__9928 = 0;
seq__9888_9908 = G__9925;
chunk__9889_9909 = G__9926;
count__9890_9910 = G__9927;
i__9891_9911 = G__9928;
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
var G__9929 = seq__9884_9903;
var G__9930 = chunk__9885_9904;
var G__9931 = count__9886_9905;
var G__9932 = (i__9887_9906 + 1);
seq__9884_9903 = G__9929;
chunk__9885_9904 = G__9930;
count__9886_9905 = G__9931;
i__9887_9906 = G__9932;
continue;
}
} else
{var temp__4092__auto___9933 = cljs.core.seq(seq__9884_9903);if(temp__4092__auto___9933)
{var seq__9884_9934__$1 = temp__4092__auto___9933;if(cljs.core.chunked_seq_QMARK_(seq__9884_9934__$1))
{var c__8199__auto___9935 = cljs.core.chunk_first(seq__9884_9934__$1);{
var G__9936 = cljs.core.chunk_rest(seq__9884_9934__$1);
var G__9937 = c__8199__auto___9935;
var G__9938 = cljs.core.count(c__8199__auto___9935);
var G__9939 = 0;
seq__9884_9903 = G__9936;
chunk__9885_9904 = G__9937;
count__9886_9905 = G__9938;
i__9887_9906 = G__9939;
continue;
}
} else
{var source_9940 = cljs.core.first(seq__9884_9934__$1);source_9940.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9940.sinks,this$);
if((source_9940.rank > this$.rank))
{var seq__9892_9941 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9884_9903,chunk__9885_9904,count__9886_9905,i__9887_9906,source_9940,seq__9884_9934__$1,temp__4092__auto___9933,vec__9883,f,sources){
return (function (p1__9858_SHARP_){return p1__9858_SHARP_.sinks;
});})(seq__9884_9903,chunk__9885_9904,count__9886_9905,i__9887_9906,source_9940,seq__9884_9934__$1,temp__4092__auto___9933,vec__9883,f,sources))
,source_9940));var chunk__9893_9942 = null;var count__9894_9943 = 0;var i__9895_9944 = 0;while(true){
if((i__9895_9944 < count__9894_9943))
{var dep_9945 = chunk__9893_9942.cljs$core$IIndexed$_nth$arity$2(null,i__9895_9944);dep_9945.rank = tailrecursion.javelin.next_rank();
{
var G__9946 = seq__9892_9941;
var G__9947 = chunk__9893_9942;
var G__9948 = count__9894_9943;
var G__9949 = (i__9895_9944 + 1);
seq__9892_9941 = G__9946;
chunk__9893_9942 = G__9947;
count__9894_9943 = G__9948;
i__9895_9944 = G__9949;
continue;
}
} else
{var temp__4092__auto___9950__$1 = cljs.core.seq(seq__9892_9941);if(temp__4092__auto___9950__$1)
{var seq__9892_9951__$1 = temp__4092__auto___9950__$1;if(cljs.core.chunked_seq_QMARK_(seq__9892_9951__$1))
{var c__8199__auto___9952 = cljs.core.chunk_first(seq__9892_9951__$1);{
var G__9953 = cljs.core.chunk_rest(seq__9892_9951__$1);
var G__9954 = c__8199__auto___9952;
var G__9955 = cljs.core.count(c__8199__auto___9952);
var G__9956 = 0;
seq__9892_9941 = G__9953;
chunk__9893_9942 = G__9954;
count__9894_9943 = G__9955;
i__9895_9944 = G__9956;
continue;
}
} else
{var dep_9957 = cljs.core.first(seq__9892_9951__$1);dep_9957.rank = tailrecursion.javelin.next_rank();
{
var G__9958 = cljs.core.next(seq__9892_9951__$1);
var G__9959 = null;
var G__9960 = 0;
var G__9961 = 0;
seq__9892_9941 = G__9958;
chunk__9893_9942 = G__9959;
count__9894_9943 = G__9960;
i__9895_9944 = G__9961;
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
var G__9962 = cljs.core.next(seq__9884_9934__$1);
var G__9963 = null;
var G__9964 = 0;
var G__9965 = 0;
seq__9884_9903 = G__9962;
chunk__9885_9904 = G__9963;
count__9886_9905 = G__9964;
i__9887_9906 = G__9965;
continue;
}
}
} else
{}
}
break;
}
var compute = ((function (vec__9883,f,sources){
return (function (p1__9859_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9859_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9859_SHARP_)));
});})(vec__9883,f,sources))
;var thunk = ((function (compute,vec__9883,f,sources){
return (function (){var x = this$.state;var y = compute(this$.sources);var seq__9896_9966 = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$.watches,cljs.core.constant$keyword$18));var chunk__9897_9967 = null;var count__9898_9968 = 0;var i__9899_9969 = 0;while(true){
if((i__9899_9969 < count__9898_9968))
{var vec__9900_9970 = chunk__9897_9967.cljs$core$IIndexed$_nth$arity$2(null,i__9899_9969);var k_9971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9900_9970,0,null);var f_9972__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9900_9970,1,null);(f_9972__$1.cljs$core$IFn$_invoke$arity$4 ? f_9972__$1.cljs$core$IFn$_invoke$arity$4(k_9971,this$,x,y) : f_9972__$1.call(null,k_9971,this$,x,y));
{
var G__9973 = seq__9896_9966;
var G__9974 = chunk__9897_9967;
var G__9975 = count__9898_9968;
var G__9976 = (i__9899_9969 + 1);
seq__9896_9966 = G__9973;
chunk__9897_9967 = G__9974;
count__9898_9968 = G__9975;
i__9899_9969 = G__9976;
continue;
}
} else
{var temp__4092__auto___9977 = cljs.core.seq(seq__9896_9966);if(temp__4092__auto___9977)
{var seq__9896_9978__$1 = temp__4092__auto___9977;if(cljs.core.chunked_seq_QMARK_(seq__9896_9978__$1))
{var c__8199__auto___9979 = cljs.core.chunk_first(seq__9896_9978__$1);{
var G__9980 = cljs.core.chunk_rest(seq__9896_9978__$1);
var G__9981 = c__8199__auto___9979;
var G__9982 = cljs.core.count(c__8199__auto___9979);
var G__9983 = 0;
seq__9896_9966 = G__9980;
chunk__9897_9967 = G__9981;
count__9898_9968 = G__9982;
i__9899_9969 = G__9983;
continue;
}
} else
{var vec__9901_9984 = cljs.core.first(seq__9896_9978__$1);var k_9985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9901_9984,0,null);var f_9986__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9901_9984,1,null);(f_9986__$1.cljs$core$IFn$_invoke$arity$4 ? f_9986__$1.cljs$core$IFn$_invoke$arity$4(k_9985,this$,x,y) : f_9986__$1.call(null,k_9985,this$,x,y));
{
var G__9987 = cljs.core.next(seq__9896_9978__$1);
var G__9988 = null;
var G__9989 = 0;
var G__9990 = 0;
seq__9896_9966 = G__9987;
chunk__9897_9967 = G__9988;
count__9898_9968 = G__9989;
i__9899_9969 = G__9990;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute,vec__9883,f,sources))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch(this$,cljs.core.constant$keyword$18,(cljs.core.truth_(f)?((function (compute,thunk,err_mesg,vec__9883,f,sources){
return (function (){throw (new Error(err_mesg));
});})(compute,thunk,err_mesg,vec__9883,f,sources))
:((function (compute,thunk,err_mesg,vec__9883,f,sources){
return (function (p1__9861_SHARP_,p2__9860_SHARP_){return tailrecursion.javelin.propagate_BANG_(p2__9860_SHARP_);
});})(compute,thunk,err_mesg,vec__9883,f,sources))
));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:((function (compute,thunk,err_mesg,vec__9883,f,sources){
return (function (){return cljs.core.deref(this$);
});})(compute,thunk,err_mesg,vec__9883,f,sources))
);
var G__9902 = this$;tailrecursion.javelin.propagate_BANG_(G__9902);
return G__9902;
};
var set_formula_BANG_ = function (this$,var_args){
var p__9862 = null;if (arguments.length > 1) {
  p__9862 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__9862);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__9991){
var this$ = cljs.core.first(arglist__9991);
var p__9862 = cljs.core.rest(arglist__9991);
return set_formula_BANG___delegate(this$,p__9862);
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
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__8010__auto__,writer__8011__auto__,opt__8012__auto__){return cljs.core._write(writer__8011__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__9992 = cljs.core.seq(self__.watches);var chunk__9993 = null;var count__9994 = 0;var i__9995 = 0;while(true){
if((i__9995 < count__9994))
{var vec__9996 = chunk__9993.cljs$core$IIndexed$_nth$arity$2(null,i__9995);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9996,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9996,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__9998 = seq__9992;
var G__9999 = chunk__9993;
var G__10000 = count__9994;
var G__10001 = (i__9995 + 1);
seq__9992 = G__9998;
chunk__9993 = G__9999;
count__9994 = G__10000;
i__9995 = G__10001;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9992);if(temp__4092__auto__)
{var seq__9992__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9992__$1))
{var c__8199__auto__ = cljs.core.chunk_first(seq__9992__$1);{
var G__10002 = cljs.core.chunk_rest(seq__9992__$1);
var G__10003 = c__8199__auto__;
var G__10004 = cljs.core.count(c__8199__auto__);
var G__10005 = 0;
seq__9992 = G__10002;
chunk__9993 = G__10003;
count__9994 = G__10004;
i__9995 = G__10005;
continue;
}
} else
{var vec__9997 = cljs.core.first(seq__9992__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9997,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9997,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__10006 = cljs.core.next(seq__9992__$1);
var G__10007 = null;
var G__10008 = 0;
var G__10009 = 0;
seq__9992 = G__10006;
chunk__9993 = G__10007;
count__9994 = G__10008;
i__9995 = G__10009;
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
var G__10010__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$19) : tailrecursion.javelin.cell.call(null,cljs.core.constant$keyword$19)),cljs.core.array_seq([f,sources], 0));
};
var G__10010 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10010__delegate.call(this,sources);};
G__10010.cljs$lang$maxFixedArity = 0;
G__10010.cljs$lang$applyTo = (function (arglist__10011){
var sources = cljs.core.seq(arglist__10011);
return G__10010__delegate(sources);
});
G__10010.cljs$core$IFn$_invoke$arity$variadic = G__10010__delegate;
return G__10010;
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
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__7431__auto__ = tailrecursion.javelin.cell_QMARK_(c);if(cljs.core.truth_(and__7431__auto__))
{return c.input_QMARK_;
} else
{return and__7431__auto__;
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
return (function (p1__10012_SHARP_,p2__10013_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__10012_SHARP_,p2__10013_SHARP_),p2__10013_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__10015_SHARP_,p2__10014_SHARP_){return cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__10015_SHARP_,p2__10014_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__10017__delegate = function (rest__10016_SHARP_){var news = diff(cljs.core.deref(olds),rest__10016_SHARP_);cljs.core.reset_BANG_(olds,rest__10016_SHARP_);
return news;
};
var G__10017 = function (var_args){
var rest__10016_SHARP_ = null;if (arguments.length > 0) {
  rest__10016_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10017__delegate.call(this,rest__10016_SHARP_);};
G__10017.cljs$lang$maxFixedArity = 0;
G__10017.cljs$lang$applyTo = (function (arglist__10018){
var rest__10016_SHARP_ = cljs.core.seq(arglist__10018);
return G__10017__delegate(rest__10016_SHARP_);
});
G__10017.cljs$core$IFn$_invoke$arity$variadic = G__10017__delegate;
return G__10017;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.lift(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10019){
var cells = cljs.core.seq(arglist__10019);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift(cljs.core.seq).call(null,c);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__10020_SHARP_){return tailrecursion.javelin.lift(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__10020_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,cljs.core.count(cljs.core.deref(cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items,f){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(cljs.core.seq).call(null,items);var cur_count = tailrecursion.javelin.lift(cljs.core.count).call(null,items_seq);var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__10021_SHARP_){return tailrecursion.javelin.lift(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__10021_SHARP_);
});})(pool_size,items_seq,cur_count))
;return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){if((pool_size__$1 < cur_count__$1))
{var seq__10026_10030 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));var chunk__10027_10031 = null;var count__10028_10032 = 0;var i__10029_10033 = 0;while(true){
if((i__10029_10033 < count__10028_10032))
{var i_10034 = chunk__10027_10031.cljs$core$IIndexed$_nth$arity$2(null,i__10029_10033);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10034) : ith_item__$1.call(null,i_10034))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10034) : ith_item__$1.call(null,i_10034))));
{
var G__10035 = seq__10026_10030;
var G__10036 = chunk__10027_10031;
var G__10037 = count__10028_10032;
var G__10038 = (i__10029_10033 + 1);
seq__10026_10030 = G__10035;
chunk__10027_10031 = G__10036;
count__10028_10032 = G__10037;
i__10029_10033 = G__10038;
continue;
}
} else
{var temp__4092__auto___10039 = cljs.core.seq(seq__10026_10030);if(temp__4092__auto___10039)
{var seq__10026_10040__$1 = temp__4092__auto___10039;if(cljs.core.chunked_seq_QMARK_(seq__10026_10040__$1))
{var c__8199__auto___10041 = cljs.core.chunk_first(seq__10026_10040__$1);{
var G__10042 = cljs.core.chunk_rest(seq__10026_10040__$1);
var G__10043 = c__8199__auto___10041;
var G__10044 = cljs.core.count(c__8199__auto___10041);
var G__10045 = 0;
seq__10026_10030 = G__10042;
chunk__10027_10031 = G__10043;
count__10028_10032 = G__10044;
i__10029_10033 = G__10045;
continue;
}
} else
{var i_10046 = cljs.core.first(seq__10026_10040__$1);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10046) : ith_item__$1.call(null,i_10046))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10046) : ith_item__$1.call(null,i_10046))));
{
var G__10047 = cljs.core.next(seq__10026_10040__$1);
var G__10048 = null;
var G__10049 = 0;
var G__10050 = 0;
seq__10026_10030 = G__10047;
chunk__10027_10031 = G__10048;
count__10028_10032 = G__10049;
i__10029_10033 = G__10050;
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
