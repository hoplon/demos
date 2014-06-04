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
}catch (e9897){if((e9897 instanceof Error))
{var _ = e9897;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e9897;
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
return (function (p1__9898_SHARP_,p2__9899_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9898_SHARP_,p2__9899_SHARP_,p2__9899_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop(queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__9900 = ((continue_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reducer,siblings,children):siblings);
queue = G__9900;
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
var seq__9905 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,srcs));var chunk__9906 = null;var count__9907 = 0;var i__9908 = 0;while(true){
if((i__9908 < count__9907))
{var src = chunk__9906.cljs$core$IIndexed$_nth$arity$2(null,i__9908);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9909 = seq__9905;
var G__9910 = chunk__9906;
var G__9911 = count__9907;
var G__9912 = (i__9908 + 1);
seq__9905 = G__9909;
chunk__9906 = G__9910;
count__9907 = G__9911;
i__9908 = G__9912;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9905);if(temp__4092__auto__)
{var seq__9905__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9905__$1))
{var c__8210__auto__ = cljs.core.chunk_first(seq__9905__$1);{
var G__9913 = cljs.core.chunk_rest(seq__9905__$1);
var G__9914 = c__8210__auto__;
var G__9915 = cljs.core.count(c__8210__auto__);
var G__9916 = 0;
seq__9905 = G__9913;
chunk__9906 = G__9914;
count__9907 = G__9915;
i__9908 = G__9916;
continue;
}
} else
{var src = cljs.core.first(seq__9905__$1);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9917 = cljs.core.next(seq__9905__$1);
var G__9918 = null;
var G__9919 = 0;
var G__9920 = 0;
seq__9905 = G__9917;
chunk__9906 = G__9918;
count__9907 = G__9919;
i__9908 = G__9920;
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
var set_formula_BANG___delegate = function (this$,p__9925){var vec__9946 = p__9925;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9946,0,null);var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9946,1,null);tailrecursion.javelin.destroy_cell_BANG_(this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f):cljs.core.vec(sources));
var seq__9947_9966 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__9948_9967 = null;var count__9949_9968 = 0;var i__9950_9969 = 0;while(true){
if((i__9950_9969 < count__9949_9968))
{var source_9970 = chunk__9948_9967.cljs$core$IIndexed$_nth$arity$2(null,i__9950_9969);source_9970.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9970.sinks,this$);
if((source_9970.rank > this$.rank))
{var seq__9951_9971 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9947_9966,chunk__9948_9967,count__9949_9968,i__9950_9969,source_9970,vec__9946,f,sources){
return (function (p1__9921_SHARP_){return p1__9921_SHARP_.sinks;
});})(seq__9947_9966,chunk__9948_9967,count__9949_9968,i__9950_9969,source_9970,vec__9946,f,sources))
,source_9970));var chunk__9952_9972 = null;var count__9953_9973 = 0;var i__9954_9974 = 0;while(true){
if((i__9954_9974 < count__9953_9973))
{var dep_9975 = chunk__9952_9972.cljs$core$IIndexed$_nth$arity$2(null,i__9954_9974);dep_9975.rank = tailrecursion.javelin.next_rank();
{
var G__9976 = seq__9951_9971;
var G__9977 = chunk__9952_9972;
var G__9978 = count__9953_9973;
var G__9979 = (i__9954_9974 + 1);
seq__9951_9971 = G__9976;
chunk__9952_9972 = G__9977;
count__9953_9973 = G__9978;
i__9954_9974 = G__9979;
continue;
}
} else
{var temp__4092__auto___9980 = cljs.core.seq(seq__9951_9971);if(temp__4092__auto___9980)
{var seq__9951_9981__$1 = temp__4092__auto___9980;if(cljs.core.chunked_seq_QMARK_(seq__9951_9981__$1))
{var c__8210__auto___9982 = cljs.core.chunk_first(seq__9951_9981__$1);{
var G__9983 = cljs.core.chunk_rest(seq__9951_9981__$1);
var G__9984 = c__8210__auto___9982;
var G__9985 = cljs.core.count(c__8210__auto___9982);
var G__9986 = 0;
seq__9951_9971 = G__9983;
chunk__9952_9972 = G__9984;
count__9953_9973 = G__9985;
i__9954_9974 = G__9986;
continue;
}
} else
{var dep_9987 = cljs.core.first(seq__9951_9981__$1);dep_9987.rank = tailrecursion.javelin.next_rank();
{
var G__9988 = cljs.core.next(seq__9951_9981__$1);
var G__9989 = null;
var G__9990 = 0;
var G__9991 = 0;
seq__9951_9971 = G__9988;
chunk__9952_9972 = G__9989;
count__9953_9973 = G__9990;
i__9954_9974 = G__9991;
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
var G__9992 = seq__9947_9966;
var G__9993 = chunk__9948_9967;
var G__9994 = count__9949_9968;
var G__9995 = (i__9950_9969 + 1);
seq__9947_9966 = G__9992;
chunk__9948_9967 = G__9993;
count__9949_9968 = G__9994;
i__9950_9969 = G__9995;
continue;
}
} else
{var temp__4092__auto___9996 = cljs.core.seq(seq__9947_9966);if(temp__4092__auto___9996)
{var seq__9947_9997__$1 = temp__4092__auto___9996;if(cljs.core.chunked_seq_QMARK_(seq__9947_9997__$1))
{var c__8210__auto___9998 = cljs.core.chunk_first(seq__9947_9997__$1);{
var G__9999 = cljs.core.chunk_rest(seq__9947_9997__$1);
var G__10000 = c__8210__auto___9998;
var G__10001 = cljs.core.count(c__8210__auto___9998);
var G__10002 = 0;
seq__9947_9966 = G__9999;
chunk__9948_9967 = G__10000;
count__9949_9968 = G__10001;
i__9950_9969 = G__10002;
continue;
}
} else
{var source_10003 = cljs.core.first(seq__9947_9997__$1);source_10003.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_10003.sinks,this$);
if((source_10003.rank > this$.rank))
{var seq__9955_10004 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9947_9966,chunk__9948_9967,count__9949_9968,i__9950_9969,source_10003,seq__9947_9997__$1,temp__4092__auto___9996,vec__9946,f,sources){
return (function (p1__9921_SHARP_){return p1__9921_SHARP_.sinks;
});})(seq__9947_9966,chunk__9948_9967,count__9949_9968,i__9950_9969,source_10003,seq__9947_9997__$1,temp__4092__auto___9996,vec__9946,f,sources))
,source_10003));var chunk__9956_10005 = null;var count__9957_10006 = 0;var i__9958_10007 = 0;while(true){
if((i__9958_10007 < count__9957_10006))
{var dep_10008 = chunk__9956_10005.cljs$core$IIndexed$_nth$arity$2(null,i__9958_10007);dep_10008.rank = tailrecursion.javelin.next_rank();
{
var G__10009 = seq__9955_10004;
var G__10010 = chunk__9956_10005;
var G__10011 = count__9957_10006;
var G__10012 = (i__9958_10007 + 1);
seq__9955_10004 = G__10009;
chunk__9956_10005 = G__10010;
count__9957_10006 = G__10011;
i__9958_10007 = G__10012;
continue;
}
} else
{var temp__4092__auto___10013__$1 = cljs.core.seq(seq__9955_10004);if(temp__4092__auto___10013__$1)
{var seq__9955_10014__$1 = temp__4092__auto___10013__$1;if(cljs.core.chunked_seq_QMARK_(seq__9955_10014__$1))
{var c__8210__auto___10015 = cljs.core.chunk_first(seq__9955_10014__$1);{
var G__10016 = cljs.core.chunk_rest(seq__9955_10014__$1);
var G__10017 = c__8210__auto___10015;
var G__10018 = cljs.core.count(c__8210__auto___10015);
var G__10019 = 0;
seq__9955_10004 = G__10016;
chunk__9956_10005 = G__10017;
count__9957_10006 = G__10018;
i__9958_10007 = G__10019;
continue;
}
} else
{var dep_10020 = cljs.core.first(seq__9955_10014__$1);dep_10020.rank = tailrecursion.javelin.next_rank();
{
var G__10021 = cljs.core.next(seq__9955_10014__$1);
var G__10022 = null;
var G__10023 = 0;
var G__10024 = 0;
seq__9955_10004 = G__10021;
chunk__9956_10005 = G__10022;
count__9957_10006 = G__10023;
i__9958_10007 = G__10024;
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
var G__10025 = cljs.core.next(seq__9947_9997__$1);
var G__10026 = null;
var G__10027 = 0;
var G__10028 = 0;
seq__9947_9966 = G__10025;
chunk__9948_9967 = G__10026;
count__9949_9968 = G__10027;
i__9950_9969 = G__10028;
continue;
}
}
} else
{}
}
break;
}
var compute = ((function (vec__9946,f,sources){
return (function (p1__9922_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9922_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9922_SHARP_)));
});})(vec__9946,f,sources))
;var thunk = ((function (compute,vec__9946,f,sources){
return (function (){var x = this$.state;var y = compute(this$.sources);var seq__9959_10029 = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$.watches,cljs.core.constant$keyword$18));var chunk__9960_10030 = null;var count__9961_10031 = 0;var i__9962_10032 = 0;while(true){
if((i__9962_10032 < count__9961_10031))
{var vec__9963_10033 = chunk__9960_10030.cljs$core$IIndexed$_nth$arity$2(null,i__9962_10032);var k_10034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9963_10033,0,null);var f_10035__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9963_10033,1,null);(f_10035__$1.cljs$core$IFn$_invoke$arity$4 ? f_10035__$1.cljs$core$IFn$_invoke$arity$4(k_10034,this$,x,y) : f_10035__$1.call(null,k_10034,this$,x,y));
{
var G__10036 = seq__9959_10029;
var G__10037 = chunk__9960_10030;
var G__10038 = count__9961_10031;
var G__10039 = (i__9962_10032 + 1);
seq__9959_10029 = G__10036;
chunk__9960_10030 = G__10037;
count__9961_10031 = G__10038;
i__9962_10032 = G__10039;
continue;
}
} else
{var temp__4092__auto___10040 = cljs.core.seq(seq__9959_10029);if(temp__4092__auto___10040)
{var seq__9959_10041__$1 = temp__4092__auto___10040;if(cljs.core.chunked_seq_QMARK_(seq__9959_10041__$1))
{var c__8210__auto___10042 = cljs.core.chunk_first(seq__9959_10041__$1);{
var G__10043 = cljs.core.chunk_rest(seq__9959_10041__$1);
var G__10044 = c__8210__auto___10042;
var G__10045 = cljs.core.count(c__8210__auto___10042);
var G__10046 = 0;
seq__9959_10029 = G__10043;
chunk__9960_10030 = G__10044;
count__9961_10031 = G__10045;
i__9962_10032 = G__10046;
continue;
}
} else
{var vec__9964_10047 = cljs.core.first(seq__9959_10041__$1);var k_10048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9964_10047,0,null);var f_10049__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9964_10047,1,null);(f_10049__$1.cljs$core$IFn$_invoke$arity$4 ? f_10049__$1.cljs$core$IFn$_invoke$arity$4(k_10048,this$,x,y) : f_10049__$1.call(null,k_10048,this$,x,y));
{
var G__10050 = cljs.core.next(seq__9959_10041__$1);
var G__10051 = null;
var G__10052 = 0;
var G__10053 = 0;
seq__9959_10029 = G__10050;
chunk__9960_10030 = G__10051;
count__9961_10031 = G__10052;
i__9962_10032 = G__10053;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute,vec__9946,f,sources))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch(this$,cljs.core.constant$keyword$18,(cljs.core.truth_(f)?((function (compute,thunk,err_mesg,vec__9946,f,sources){
return (function (){throw (new Error(err_mesg));
});})(compute,thunk,err_mesg,vec__9946,f,sources))
:((function (compute,thunk,err_mesg,vec__9946,f,sources){
return (function (p1__9924_SHARP_,p2__9923_SHARP_){return tailrecursion.javelin.propagate_BANG_(p2__9923_SHARP_);
});})(compute,thunk,err_mesg,vec__9946,f,sources))
));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:((function (compute,thunk,err_mesg,vec__9946,f,sources){
return (function (){return cljs.core.deref(this$);
});})(compute,thunk,err_mesg,vec__9946,f,sources))
);
var G__9965 = this$;tailrecursion.javelin.propagate_BANG_(G__9965);
return G__9965;
};
var set_formula_BANG_ = function (this$,var_args){
var p__9925 = null;if (arguments.length > 1) {
  p__9925 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__9925);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__10054){
var this$ = cljs.core.first(arglist__10054);
var p__9925 = cljs.core.rest(arglist__10054);
return set_formula_BANG___delegate(this$,p__9925);
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
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__8021__auto__,writer__8022__auto__,opt__8023__auto__){return cljs.core._write(writer__8022__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__10055 = cljs.core.seq(self__.watches);var chunk__10056 = null;var count__10057 = 0;var i__10058 = 0;while(true){
if((i__10058 < count__10057))
{var vec__10059 = chunk__10056.cljs$core$IIndexed$_nth$arity$2(null,i__10058);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10059,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10059,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__10061 = seq__10055;
var G__10062 = chunk__10056;
var G__10063 = count__10057;
var G__10064 = (i__10058 + 1);
seq__10055 = G__10061;
chunk__10056 = G__10062;
count__10057 = G__10063;
i__10058 = G__10064;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10055);if(temp__4092__auto__)
{var seq__10055__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__10055__$1))
{var c__8210__auto__ = cljs.core.chunk_first(seq__10055__$1);{
var G__10065 = cljs.core.chunk_rest(seq__10055__$1);
var G__10066 = c__8210__auto__;
var G__10067 = cljs.core.count(c__8210__auto__);
var G__10068 = 0;
seq__10055 = G__10065;
chunk__10056 = G__10066;
count__10057 = G__10067;
i__10058 = G__10068;
continue;
}
} else
{var vec__10060 = cljs.core.first(seq__10055__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10060,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10060,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__10069 = cljs.core.next(seq__10055__$1);
var G__10070 = null;
var G__10071 = 0;
var G__10072 = 0;
seq__10055 = G__10069;
chunk__10056 = G__10070;
count__10057 = G__10071;
i__10058 = G__10072;
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
var G__10073__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$19) : tailrecursion.javelin.cell.call(null,cljs.core.constant$keyword$19)),cljs.core.array_seq([f,sources], 0));
};
var G__10073 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10073__delegate.call(this,sources);};
G__10073.cljs$lang$maxFixedArity = 0;
G__10073.cljs$lang$applyTo = (function (arglist__10074){
var sources = cljs.core.seq(arglist__10074);
return G__10073__delegate(sources);
});
G__10073.cljs$core$IFn$_invoke$arity$variadic = G__10073__delegate;
return G__10073;
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
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__7442__auto__ = tailrecursion.javelin.cell_QMARK_(c);if(cljs.core.truth_(and__7442__auto__))
{return c.input_QMARK_;
} else
{return and__7442__auto__;
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
return (function (p1__10075_SHARP_,p2__10076_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__10075_SHARP_,p2__10076_SHARP_),p2__10076_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__10078_SHARP_,p2__10077_SHARP_){return cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__10078_SHARP_,p2__10077_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__10080__delegate = function (rest__10079_SHARP_){var news = diff(cljs.core.deref(olds),rest__10079_SHARP_);cljs.core.reset_BANG_(olds,rest__10079_SHARP_);
return news;
};
var G__10080 = function (var_args){
var rest__10079_SHARP_ = null;if (arguments.length > 0) {
  rest__10079_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10080__delegate.call(this,rest__10079_SHARP_);};
G__10080.cljs$lang$maxFixedArity = 0;
G__10080.cljs$lang$applyTo = (function (arglist__10081){
var rest__10079_SHARP_ = cljs.core.seq(arglist__10081);
return G__10080__delegate(rest__10079_SHARP_);
});
G__10080.cljs$core$IFn$_invoke$arity$variadic = G__10080__delegate;
return G__10080;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.lift(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10082){
var cells = cljs.core.seq(arglist__10082);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift(cljs.core.seq).call(null,c);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__10083_SHARP_){return tailrecursion.javelin.lift(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__10083_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,cljs.core.count(cljs.core.deref(cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items,f){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(cljs.core.seq).call(null,items);var cur_count = tailrecursion.javelin.lift(cljs.core.count).call(null,items_seq);var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__10084_SHARP_){return tailrecursion.javelin.lift(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__10084_SHARP_);
});})(pool_size,items_seq,cur_count))
;return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){if((pool_size__$1 < cur_count__$1))
{var seq__10089_10093 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));var chunk__10090_10094 = null;var count__10091_10095 = 0;var i__10092_10096 = 0;while(true){
if((i__10092_10096 < count__10091_10095))
{var i_10097 = chunk__10090_10094.cljs$core$IIndexed$_nth$arity$2(null,i__10092_10096);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10097) : ith_item__$1.call(null,i_10097))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10097) : ith_item__$1.call(null,i_10097))));
{
var G__10098 = seq__10089_10093;
var G__10099 = chunk__10090_10094;
var G__10100 = count__10091_10095;
var G__10101 = (i__10092_10096 + 1);
seq__10089_10093 = G__10098;
chunk__10090_10094 = G__10099;
count__10091_10095 = G__10100;
i__10092_10096 = G__10101;
continue;
}
} else
{var temp__4092__auto___10102 = cljs.core.seq(seq__10089_10093);if(temp__4092__auto___10102)
{var seq__10089_10103__$1 = temp__4092__auto___10102;if(cljs.core.chunked_seq_QMARK_(seq__10089_10103__$1))
{var c__8210__auto___10104 = cljs.core.chunk_first(seq__10089_10103__$1);{
var G__10105 = cljs.core.chunk_rest(seq__10089_10103__$1);
var G__10106 = c__8210__auto___10104;
var G__10107 = cljs.core.count(c__8210__auto___10104);
var G__10108 = 0;
seq__10089_10093 = G__10105;
chunk__10090_10094 = G__10106;
count__10091_10095 = G__10107;
i__10092_10096 = G__10108;
continue;
}
} else
{var i_10109 = cljs.core.first(seq__10089_10103__$1);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10109) : ith_item__$1.call(null,i_10109))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10109) : ith_item__$1.call(null,i_10109))));
{
var G__10110 = cljs.core.next(seq__10089_10103__$1);
var G__10111 = null;
var G__10112 = 0;
var G__10113 = 0;
seq__10089_10093 = G__10110;
chunk__10090_10094 = G__10111;
count__10091_10095 = G__10112;
i__10092_10096 = G__10113;
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
