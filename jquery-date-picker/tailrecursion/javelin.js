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
}catch (e9903){if((e9903 instanceof Error))
{var _ = e9903;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e9903;
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
return (function (p1__9904_SHARP_,p2__9905_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9904_SHARP_,p2__9905_SHARP_,p2__9905_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop(queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__9906 = ((continue_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reducer,siblings,children):siblings);
queue = G__9906;
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
var seq__9911 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,srcs));var chunk__9912 = null;var count__9913 = 0;var i__9914 = 0;while(true){
if((i__9914 < count__9913))
{var src = chunk__9912.cljs$core$IIndexed$_nth$arity$2(null,i__9914);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9915 = seq__9911;
var G__9916 = chunk__9912;
var G__9917 = count__9913;
var G__9918 = (i__9914 + 1);
seq__9911 = G__9915;
chunk__9912 = G__9916;
count__9913 = G__9917;
i__9914 = G__9918;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9911);if(temp__4092__auto__)
{var seq__9911__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9911__$1))
{var c__8392__auto__ = cljs.core.chunk_first(seq__9911__$1);{
var G__9919 = cljs.core.chunk_rest(seq__9911__$1);
var G__9920 = c__8392__auto__;
var G__9921 = cljs.core.count(c__8392__auto__);
var G__9922 = 0;
seq__9911 = G__9919;
chunk__9912 = G__9920;
count__9913 = G__9921;
i__9914 = G__9922;
continue;
}
} else
{var src = cljs.core.first(seq__9911__$1);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__9923 = cljs.core.next(seq__9911__$1);
var G__9924 = null;
var G__9925 = 0;
var G__9926 = 0;
seq__9911 = G__9923;
chunk__9912 = G__9924;
count__9913 = G__9925;
i__9914 = G__9926;
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
var set_formula_BANG___delegate = function (this$,p__9931){var vec__9952 = p__9931;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9952,0,null);var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9952,1,null);tailrecursion.javelin.destroy_cell_BANG_(this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f):cljs.core.vec(sources));
var seq__9953_9972 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__9954_9973 = null;var count__9955_9974 = 0;var i__9956_9975 = 0;while(true){
if((i__9956_9975 < count__9955_9974))
{var source_9976 = chunk__9954_9973.cljs$core$IIndexed$_nth$arity$2(null,i__9956_9975);source_9976.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_9976.sinks,this$);
if((source_9976.rank > this$.rank))
{var seq__9957_9977 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9953_9972,chunk__9954_9973,count__9955_9974,i__9956_9975,source_9976,vec__9952,f,sources){
return (function (p1__9927_SHARP_){return p1__9927_SHARP_.sinks;
});})(seq__9953_9972,chunk__9954_9973,count__9955_9974,i__9956_9975,source_9976,vec__9952,f,sources))
,source_9976));var chunk__9958_9978 = null;var count__9959_9979 = 0;var i__9960_9980 = 0;while(true){
if((i__9960_9980 < count__9959_9979))
{var dep_9981 = chunk__9958_9978.cljs$core$IIndexed$_nth$arity$2(null,i__9960_9980);dep_9981.rank = tailrecursion.javelin.next_rank();
{
var G__9982 = seq__9957_9977;
var G__9983 = chunk__9958_9978;
var G__9984 = count__9959_9979;
var G__9985 = (i__9960_9980 + 1);
seq__9957_9977 = G__9982;
chunk__9958_9978 = G__9983;
count__9959_9979 = G__9984;
i__9960_9980 = G__9985;
continue;
}
} else
{var temp__4092__auto___9986 = cljs.core.seq(seq__9957_9977);if(temp__4092__auto___9986)
{var seq__9957_9987__$1 = temp__4092__auto___9986;if(cljs.core.chunked_seq_QMARK_(seq__9957_9987__$1))
{var c__8392__auto___9988 = cljs.core.chunk_first(seq__9957_9987__$1);{
var G__9989 = cljs.core.chunk_rest(seq__9957_9987__$1);
var G__9990 = c__8392__auto___9988;
var G__9991 = cljs.core.count(c__8392__auto___9988);
var G__9992 = 0;
seq__9957_9977 = G__9989;
chunk__9958_9978 = G__9990;
count__9959_9979 = G__9991;
i__9960_9980 = G__9992;
continue;
}
} else
{var dep_9993 = cljs.core.first(seq__9957_9987__$1);dep_9993.rank = tailrecursion.javelin.next_rank();
{
var G__9994 = cljs.core.next(seq__9957_9987__$1);
var G__9995 = null;
var G__9996 = 0;
var G__9997 = 0;
seq__9957_9977 = G__9994;
chunk__9958_9978 = G__9995;
count__9959_9979 = G__9996;
i__9960_9980 = G__9997;
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
var G__9998 = seq__9953_9972;
var G__9999 = chunk__9954_9973;
var G__10000 = count__9955_9974;
var G__10001 = (i__9956_9975 + 1);
seq__9953_9972 = G__9998;
chunk__9954_9973 = G__9999;
count__9955_9974 = G__10000;
i__9956_9975 = G__10001;
continue;
}
} else
{var temp__4092__auto___10002 = cljs.core.seq(seq__9953_9972);if(temp__4092__auto___10002)
{var seq__9953_10003__$1 = temp__4092__auto___10002;if(cljs.core.chunked_seq_QMARK_(seq__9953_10003__$1))
{var c__8392__auto___10004 = cljs.core.chunk_first(seq__9953_10003__$1);{
var G__10005 = cljs.core.chunk_rest(seq__9953_10003__$1);
var G__10006 = c__8392__auto___10004;
var G__10007 = cljs.core.count(c__8392__auto___10004);
var G__10008 = 0;
seq__9953_9972 = G__10005;
chunk__9954_9973 = G__10006;
count__9955_9974 = G__10007;
i__9956_9975 = G__10008;
continue;
}
} else
{var source_10009 = cljs.core.first(seq__9953_10003__$1);source_10009.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_10009.sinks,this$);
if((source_10009.rank > this$.rank))
{var seq__9961_10010 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__9953_9972,chunk__9954_9973,count__9955_9974,i__9956_9975,source_10009,seq__9953_10003__$1,temp__4092__auto___10002,vec__9952,f,sources){
return (function (p1__9927_SHARP_){return p1__9927_SHARP_.sinks;
});})(seq__9953_9972,chunk__9954_9973,count__9955_9974,i__9956_9975,source_10009,seq__9953_10003__$1,temp__4092__auto___10002,vec__9952,f,sources))
,source_10009));var chunk__9962_10011 = null;var count__9963_10012 = 0;var i__9964_10013 = 0;while(true){
if((i__9964_10013 < count__9963_10012))
{var dep_10014 = chunk__9962_10011.cljs$core$IIndexed$_nth$arity$2(null,i__9964_10013);dep_10014.rank = tailrecursion.javelin.next_rank();
{
var G__10015 = seq__9961_10010;
var G__10016 = chunk__9962_10011;
var G__10017 = count__9963_10012;
var G__10018 = (i__9964_10013 + 1);
seq__9961_10010 = G__10015;
chunk__9962_10011 = G__10016;
count__9963_10012 = G__10017;
i__9964_10013 = G__10018;
continue;
}
} else
{var temp__4092__auto___10019__$1 = cljs.core.seq(seq__9961_10010);if(temp__4092__auto___10019__$1)
{var seq__9961_10020__$1 = temp__4092__auto___10019__$1;if(cljs.core.chunked_seq_QMARK_(seq__9961_10020__$1))
{var c__8392__auto___10021 = cljs.core.chunk_first(seq__9961_10020__$1);{
var G__10022 = cljs.core.chunk_rest(seq__9961_10020__$1);
var G__10023 = c__8392__auto___10021;
var G__10024 = cljs.core.count(c__8392__auto___10021);
var G__10025 = 0;
seq__9961_10010 = G__10022;
chunk__9962_10011 = G__10023;
count__9963_10012 = G__10024;
i__9964_10013 = G__10025;
continue;
}
} else
{var dep_10026 = cljs.core.first(seq__9961_10020__$1);dep_10026.rank = tailrecursion.javelin.next_rank();
{
var G__10027 = cljs.core.next(seq__9961_10020__$1);
var G__10028 = null;
var G__10029 = 0;
var G__10030 = 0;
seq__9961_10010 = G__10027;
chunk__9962_10011 = G__10028;
count__9963_10012 = G__10029;
i__9964_10013 = G__10030;
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
var G__10031 = cljs.core.next(seq__9953_10003__$1);
var G__10032 = null;
var G__10033 = 0;
var G__10034 = 0;
seq__9953_9972 = G__10031;
chunk__9954_9973 = G__10032;
count__9955_9974 = G__10033;
i__9956_9975 = G__10034;
continue;
}
}
} else
{}
}
break;
}
var compute = ((function (vec__9952,f,sources){
return (function (p1__9928_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__9928_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__9928_SHARP_)));
});})(vec__9952,f,sources))
;var thunk = ((function (compute,vec__9952,f,sources){
return (function (){var x = this$.state;var y = compute(this$.sources);var seq__9965_10035 = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$.watches,cljs.core.constant$keyword$18));var chunk__9966_10036 = null;var count__9967_10037 = 0;var i__9968_10038 = 0;while(true){
if((i__9968_10038 < count__9967_10037))
{var vec__9969_10039 = chunk__9966_10036.cljs$core$IIndexed$_nth$arity$2(null,i__9968_10038);var k_10040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9969_10039,0,null);var f_10041__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9969_10039,1,null);(f_10041__$1.cljs$core$IFn$_invoke$arity$4 ? f_10041__$1.cljs$core$IFn$_invoke$arity$4(k_10040,this$,x,y) : f_10041__$1.call(null,k_10040,this$,x,y));
{
var G__10042 = seq__9965_10035;
var G__10043 = chunk__9966_10036;
var G__10044 = count__9967_10037;
var G__10045 = (i__9968_10038 + 1);
seq__9965_10035 = G__10042;
chunk__9966_10036 = G__10043;
count__9967_10037 = G__10044;
i__9968_10038 = G__10045;
continue;
}
} else
{var temp__4092__auto___10046 = cljs.core.seq(seq__9965_10035);if(temp__4092__auto___10046)
{var seq__9965_10047__$1 = temp__4092__auto___10046;if(cljs.core.chunked_seq_QMARK_(seq__9965_10047__$1))
{var c__8392__auto___10048 = cljs.core.chunk_first(seq__9965_10047__$1);{
var G__10049 = cljs.core.chunk_rest(seq__9965_10047__$1);
var G__10050 = c__8392__auto___10048;
var G__10051 = cljs.core.count(c__8392__auto___10048);
var G__10052 = 0;
seq__9965_10035 = G__10049;
chunk__9966_10036 = G__10050;
count__9967_10037 = G__10051;
i__9968_10038 = G__10052;
continue;
}
} else
{var vec__9970_10053 = cljs.core.first(seq__9965_10047__$1);var k_10054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9970_10053,0,null);var f_10055__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9970_10053,1,null);(f_10055__$1.cljs$core$IFn$_invoke$arity$4 ? f_10055__$1.cljs$core$IFn$_invoke$arity$4(k_10054,this$,x,y) : f_10055__$1.call(null,k_10054,this$,x,y));
{
var G__10056 = cljs.core.next(seq__9965_10047__$1);
var G__10057 = null;
var G__10058 = 0;
var G__10059 = 0;
seq__9965_10035 = G__10056;
chunk__9966_10036 = G__10057;
count__9967_10037 = G__10058;
i__9968_10038 = G__10059;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute,vec__9952,f,sources))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch(this$,cljs.core.constant$keyword$18,(cljs.core.truth_(f)?((function (compute,thunk,err_mesg,vec__9952,f,sources){
return (function (){throw (new Error(err_mesg));
});})(compute,thunk,err_mesg,vec__9952,f,sources))
:((function (compute,thunk,err_mesg,vec__9952,f,sources){
return (function (p1__9930_SHARP_,p2__9929_SHARP_){return tailrecursion.javelin.propagate_BANG_(p2__9929_SHARP_);
});})(compute,thunk,err_mesg,vec__9952,f,sources))
));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:((function (compute,thunk,err_mesg,vec__9952,f,sources){
return (function (){return cljs.core.deref(this$);
});})(compute,thunk,err_mesg,vec__9952,f,sources))
);
var G__9971 = this$;tailrecursion.javelin.propagate_BANG_(G__9971);
return G__9971;
};
var set_formula_BANG_ = function (this$,var_args){
var p__9931 = null;if (arguments.length > 1) {
  p__9931 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__9931);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__10060){
var this$ = cljs.core.first(arglist__10060);
var p__9931 = cljs.core.rest(arglist__10060);
return set_formula_BANG___delegate(this$,p__9931);
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
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__8203__auto__,writer__8204__auto__,opt__8205__auto__){return cljs.core._write(writer__8204__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__10061 = cljs.core.seq(self__.watches);var chunk__10062 = null;var count__10063 = 0;var i__10064 = 0;while(true){
if((i__10064 < count__10063))
{var vec__10065 = chunk__10062.cljs$core$IIndexed$_nth$arity$2(null,i__10064);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10065,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10065,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__10067 = seq__10061;
var G__10068 = chunk__10062;
var G__10069 = count__10063;
var G__10070 = (i__10064 + 1);
seq__10061 = G__10067;
chunk__10062 = G__10068;
count__10063 = G__10069;
i__10064 = G__10070;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10061);if(temp__4092__auto__)
{var seq__10061__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__10061__$1))
{var c__8392__auto__ = cljs.core.chunk_first(seq__10061__$1);{
var G__10071 = cljs.core.chunk_rest(seq__10061__$1);
var G__10072 = c__8392__auto__;
var G__10073 = cljs.core.count(c__8392__auto__);
var G__10074 = 0;
seq__10061 = G__10071;
chunk__10062 = G__10072;
count__10063 = G__10073;
i__10064 = G__10074;
continue;
}
} else
{var vec__10066 = cljs.core.first(seq__10061__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10066,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10066,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__10075 = cljs.core.next(seq__10061__$1);
var G__10076 = null;
var G__10077 = 0;
var G__10078 = 0;
seq__10061 = G__10075;
chunk__10062 = G__10076;
count__10063 = G__10077;
i__10064 = G__10078;
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
var G__10079__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$19) : tailrecursion.javelin.cell.call(null,cljs.core.constant$keyword$19)),cljs.core.array_seq([f,sources], 0));
};
var G__10079 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10079__delegate.call(this,sources);};
G__10079.cljs$lang$maxFixedArity = 0;
G__10079.cljs$lang$applyTo = (function (arglist__10080){
var sources = cljs.core.seq(arglist__10080);
return G__10079__delegate(sources);
});
G__10079.cljs$core$IFn$_invoke$arity$variadic = G__10079__delegate;
return G__10079;
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
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__7624__auto__ = tailrecursion.javelin.cell_QMARK_(c);if(cljs.core.truth_(and__7624__auto__))
{return c.input_QMARK_;
} else
{return and__7624__auto__;
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
return (function (p1__10081_SHARP_,p2__10082_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__10081_SHARP_,p2__10082_SHARP_),p2__10082_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__10084_SHARP_,p2__10083_SHARP_){return cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__10084_SHARP_,p2__10083_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__10086__delegate = function (rest__10085_SHARP_){var news = diff(cljs.core.deref(olds),rest__10085_SHARP_);cljs.core.reset_BANG_(olds,rest__10085_SHARP_);
return news;
};
var G__10086 = function (var_args){
var rest__10085_SHARP_ = null;if (arguments.length > 0) {
  rest__10085_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10086__delegate.call(this,rest__10085_SHARP_);};
G__10086.cljs$lang$maxFixedArity = 0;
G__10086.cljs$lang$applyTo = (function (arglist__10087){
var rest__10085_SHARP_ = cljs.core.seq(arglist__10087);
return G__10086__delegate(rest__10085_SHARP_);
});
G__10086.cljs$core$IFn$_invoke$arity$variadic = G__10086__delegate;
return G__10086;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.lift(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10088){
var cells = cljs.core.seq(arglist__10088);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift(cljs.core.seq).call(null,c);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__10089_SHARP_){return tailrecursion.javelin.lift(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__10089_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,cljs.core.count(cljs.core.deref(cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items,f){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(cljs.core.seq).call(null,items);var cur_count = tailrecursion.javelin.lift(cljs.core.count).call(null,items_seq);var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__10090_SHARP_){return tailrecursion.javelin.lift(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__10090_SHARP_);
});})(pool_size,items_seq,cur_count))
;return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){if((pool_size__$1 < cur_count__$1))
{var seq__10095_10099 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));var chunk__10096_10100 = null;var count__10097_10101 = 0;var i__10098_10102 = 0;while(true){
if((i__10098_10102 < count__10097_10101))
{var i_10103 = chunk__10096_10100.cljs$core$IIndexed$_nth$arity$2(null,i__10098_10102);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10103) : ith_item__$1.call(null,i_10103))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10103) : ith_item__$1.call(null,i_10103))));
{
var G__10104 = seq__10095_10099;
var G__10105 = chunk__10096_10100;
var G__10106 = count__10097_10101;
var G__10107 = (i__10098_10102 + 1);
seq__10095_10099 = G__10104;
chunk__10096_10100 = G__10105;
count__10097_10101 = G__10106;
i__10098_10102 = G__10107;
continue;
}
} else
{var temp__4092__auto___10108 = cljs.core.seq(seq__10095_10099);if(temp__4092__auto___10108)
{var seq__10095_10109__$1 = temp__4092__auto___10108;if(cljs.core.chunked_seq_QMARK_(seq__10095_10109__$1))
{var c__8392__auto___10110 = cljs.core.chunk_first(seq__10095_10109__$1);{
var G__10111 = cljs.core.chunk_rest(seq__10095_10109__$1);
var G__10112 = c__8392__auto___10110;
var G__10113 = cljs.core.count(c__8392__auto___10110);
var G__10114 = 0;
seq__10095_10099 = G__10111;
chunk__10096_10100 = G__10112;
count__10097_10101 = G__10113;
i__10098_10102 = G__10114;
continue;
}
} else
{var i_10115 = cljs.core.first(seq__10095_10109__$1);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10115) : ith_item__$1.call(null,i_10115))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10115) : ith_item__$1.call(null,i_10115))));
{
var G__10116 = cljs.core.next(seq__10095_10109__$1);
var G__10117 = null;
var G__10118 = 0;
var G__10119 = 0;
seq__10095_10099 = G__10116;
chunk__10096_10100 = G__10117;
count__10097_10101 = G__10118;
i__10098_10102 = G__10119;
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
