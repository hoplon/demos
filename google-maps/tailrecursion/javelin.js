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
}catch (e10030){if((e10030 instanceof Error))
{var _ = e10030;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10030;
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
return (function (p1__10031_SHARP_,p2__10032_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10031_SHARP_,p2__10032_SHARP_,p2__10032_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop(queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__10033 = ((continue_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reducer,siblings,children):siblings);
queue = G__10033;
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
var seq__10038 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,srcs));var chunk__10039 = null;var count__10040 = 0;var i__10041 = 0;while(true){
if((i__10041 < count__10040))
{var src = chunk__10039.cljs$core$IIndexed$_nth$arity$2(null,i__10041);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__10042 = seq__10038;
var G__10043 = chunk__10039;
var G__10044 = count__10040;
var G__10045 = (i__10041 + 1);
seq__10038 = G__10042;
chunk__10039 = G__10043;
count__10040 = G__10044;
i__10041 = G__10045;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10038);if(temp__4092__auto__)
{var seq__10038__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__10038__$1))
{var c__8397__auto__ = cljs.core.chunk_first(seq__10038__$1);{
var G__10046 = cljs.core.chunk_rest(seq__10038__$1);
var G__10047 = c__8397__auto__;
var G__10048 = cljs.core.count(c__8397__auto__);
var G__10049 = 0;
seq__10038 = G__10046;
chunk__10039 = G__10047;
count__10040 = G__10048;
i__10041 = G__10049;
continue;
}
} else
{var src = cljs.core.first(seq__10038__$1);src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
{
var G__10050 = cljs.core.next(seq__10038__$1);
var G__10051 = null;
var G__10052 = 0;
var G__10053 = 0;
seq__10038 = G__10050;
chunk__10039 = G__10051;
count__10040 = G__10052;
i__10041 = G__10053;
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
var set_formula_BANG___delegate = function (this$,p__10058){var vec__10079 = p__10058;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10079,0,null);var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10079,1,null);tailrecursion.javelin.destroy_cell_BANG_(this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f):cljs.core.vec(sources));
var seq__10080_10099 = cljs.core.seq(cljs.core.filter(tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__10081_10100 = null;var count__10082_10101 = 0;var i__10083_10102 = 0;while(true){
if((i__10083_10102 < count__10082_10101))
{var source_10103 = chunk__10081_10100.cljs$core$IIndexed$_nth$arity$2(null,i__10083_10102);source_10103.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_10103.sinks,this$);
if((source_10103.rank > this$.rank))
{var seq__10084_10104 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__10080_10099,chunk__10081_10100,count__10082_10101,i__10083_10102,source_10103,vec__10079,f,sources){
return (function (p1__10054_SHARP_){return p1__10054_SHARP_.sinks;
});})(seq__10080_10099,chunk__10081_10100,count__10082_10101,i__10083_10102,source_10103,vec__10079,f,sources))
,source_10103));var chunk__10085_10105 = null;var count__10086_10106 = 0;var i__10087_10107 = 0;while(true){
if((i__10087_10107 < count__10086_10106))
{var dep_10108 = chunk__10085_10105.cljs$core$IIndexed$_nth$arity$2(null,i__10087_10107);dep_10108.rank = tailrecursion.javelin.next_rank();
{
var G__10109 = seq__10084_10104;
var G__10110 = chunk__10085_10105;
var G__10111 = count__10086_10106;
var G__10112 = (i__10087_10107 + 1);
seq__10084_10104 = G__10109;
chunk__10085_10105 = G__10110;
count__10086_10106 = G__10111;
i__10087_10107 = G__10112;
continue;
}
} else
{var temp__4092__auto___10113 = cljs.core.seq(seq__10084_10104);if(temp__4092__auto___10113)
{var seq__10084_10114__$1 = temp__4092__auto___10113;if(cljs.core.chunked_seq_QMARK_(seq__10084_10114__$1))
{var c__8397__auto___10115 = cljs.core.chunk_first(seq__10084_10114__$1);{
var G__10116 = cljs.core.chunk_rest(seq__10084_10114__$1);
var G__10117 = c__8397__auto___10115;
var G__10118 = cljs.core.count(c__8397__auto___10115);
var G__10119 = 0;
seq__10084_10104 = G__10116;
chunk__10085_10105 = G__10117;
count__10086_10106 = G__10118;
i__10087_10107 = G__10119;
continue;
}
} else
{var dep_10120 = cljs.core.first(seq__10084_10114__$1);dep_10120.rank = tailrecursion.javelin.next_rank();
{
var G__10121 = cljs.core.next(seq__10084_10114__$1);
var G__10122 = null;
var G__10123 = 0;
var G__10124 = 0;
seq__10084_10104 = G__10121;
chunk__10085_10105 = G__10122;
count__10086_10106 = G__10123;
i__10087_10107 = G__10124;
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
var G__10125 = seq__10080_10099;
var G__10126 = chunk__10081_10100;
var G__10127 = count__10082_10101;
var G__10128 = (i__10083_10102 + 1);
seq__10080_10099 = G__10125;
chunk__10081_10100 = G__10126;
count__10082_10101 = G__10127;
i__10083_10102 = G__10128;
continue;
}
} else
{var temp__4092__auto___10129 = cljs.core.seq(seq__10080_10099);if(temp__4092__auto___10129)
{var seq__10080_10130__$1 = temp__4092__auto___10129;if(cljs.core.chunked_seq_QMARK_(seq__10080_10130__$1))
{var c__8397__auto___10131 = cljs.core.chunk_first(seq__10080_10130__$1);{
var G__10132 = cljs.core.chunk_rest(seq__10080_10130__$1);
var G__10133 = c__8397__auto___10131;
var G__10134 = cljs.core.count(c__8397__auto___10131);
var G__10135 = 0;
seq__10080_10099 = G__10132;
chunk__10081_10100 = G__10133;
count__10082_10101 = G__10134;
i__10083_10102 = G__10135;
continue;
}
} else
{var source_10136 = cljs.core.first(seq__10080_10130__$1);source_10136.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_10136.sinks,this$);
if((source_10136.rank > this$.rank))
{var seq__10088_10137 = cljs.core.seq(tailrecursion.javelin.bf_seq(cljs.core.identity,((function (seq__10080_10099,chunk__10081_10100,count__10082_10101,i__10083_10102,source_10136,seq__10080_10130__$1,temp__4092__auto___10129,vec__10079,f,sources){
return (function (p1__10054_SHARP_){return p1__10054_SHARP_.sinks;
});})(seq__10080_10099,chunk__10081_10100,count__10082_10101,i__10083_10102,source_10136,seq__10080_10130__$1,temp__4092__auto___10129,vec__10079,f,sources))
,source_10136));var chunk__10089_10138 = null;var count__10090_10139 = 0;var i__10091_10140 = 0;while(true){
if((i__10091_10140 < count__10090_10139))
{var dep_10141 = chunk__10089_10138.cljs$core$IIndexed$_nth$arity$2(null,i__10091_10140);dep_10141.rank = tailrecursion.javelin.next_rank();
{
var G__10142 = seq__10088_10137;
var G__10143 = chunk__10089_10138;
var G__10144 = count__10090_10139;
var G__10145 = (i__10091_10140 + 1);
seq__10088_10137 = G__10142;
chunk__10089_10138 = G__10143;
count__10090_10139 = G__10144;
i__10091_10140 = G__10145;
continue;
}
} else
{var temp__4092__auto___10146__$1 = cljs.core.seq(seq__10088_10137);if(temp__4092__auto___10146__$1)
{var seq__10088_10147__$1 = temp__4092__auto___10146__$1;if(cljs.core.chunked_seq_QMARK_(seq__10088_10147__$1))
{var c__8397__auto___10148 = cljs.core.chunk_first(seq__10088_10147__$1);{
var G__10149 = cljs.core.chunk_rest(seq__10088_10147__$1);
var G__10150 = c__8397__auto___10148;
var G__10151 = cljs.core.count(c__8397__auto___10148);
var G__10152 = 0;
seq__10088_10137 = G__10149;
chunk__10089_10138 = G__10150;
count__10090_10139 = G__10151;
i__10091_10140 = G__10152;
continue;
}
} else
{var dep_10153 = cljs.core.first(seq__10088_10147__$1);dep_10153.rank = tailrecursion.javelin.next_rank();
{
var G__10154 = cljs.core.next(seq__10088_10147__$1);
var G__10155 = null;
var G__10156 = 0;
var G__10157 = 0;
seq__10088_10137 = G__10154;
chunk__10089_10138 = G__10155;
count__10090_10139 = G__10156;
i__10091_10140 = G__10157;
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
var G__10158 = cljs.core.next(seq__10080_10130__$1);
var G__10159 = null;
var G__10160 = 0;
var G__10161 = 0;
seq__10080_10099 = G__10158;
chunk__10081_10100 = G__10159;
count__10082_10101 = G__10160;
i__10083_10102 = G__10161;
continue;
}
}
} else
{}
}
break;
}
var compute = ((function (vec__10079,f,sources){
return (function (p1__10055_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_(cljs.core.peek(p1__10055_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.deref_STAR_,cljs.core.pop(p1__10055_SHARP_)));
});})(vec__10079,f,sources))
;var thunk = ((function (compute,vec__10079,f,sources){
return (function (){var x = this$.state;var y = compute(this$.sources);var seq__10092_10162 = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$.watches,cljs.core.constant$keyword$18));var chunk__10093_10163 = null;var count__10094_10164 = 0;var i__10095_10165 = 0;while(true){
if((i__10095_10165 < count__10094_10164))
{var vec__10096_10166 = chunk__10093_10163.cljs$core$IIndexed$_nth$arity$2(null,i__10095_10165);var k_10167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10096_10166,0,null);var f_10168__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10096_10166,1,null);(f_10168__$1.cljs$core$IFn$_invoke$arity$4 ? f_10168__$1.cljs$core$IFn$_invoke$arity$4(k_10167,this$,x,y) : f_10168__$1.call(null,k_10167,this$,x,y));
{
var G__10169 = seq__10092_10162;
var G__10170 = chunk__10093_10163;
var G__10171 = count__10094_10164;
var G__10172 = (i__10095_10165 + 1);
seq__10092_10162 = G__10169;
chunk__10093_10163 = G__10170;
count__10094_10164 = G__10171;
i__10095_10165 = G__10172;
continue;
}
} else
{var temp__4092__auto___10173 = cljs.core.seq(seq__10092_10162);if(temp__4092__auto___10173)
{var seq__10092_10174__$1 = temp__4092__auto___10173;if(cljs.core.chunked_seq_QMARK_(seq__10092_10174__$1))
{var c__8397__auto___10175 = cljs.core.chunk_first(seq__10092_10174__$1);{
var G__10176 = cljs.core.chunk_rest(seq__10092_10174__$1);
var G__10177 = c__8397__auto___10175;
var G__10178 = cljs.core.count(c__8397__auto___10175);
var G__10179 = 0;
seq__10092_10162 = G__10176;
chunk__10093_10163 = G__10177;
count__10094_10164 = G__10178;
i__10095_10165 = G__10179;
continue;
}
} else
{var vec__10097_10180 = cljs.core.first(seq__10092_10174__$1);var k_10181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10097_10180,0,null);var f_10182__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10097_10180,1,null);(f_10182__$1.cljs$core$IFn$_invoke$arity$4 ? f_10182__$1.cljs$core$IFn$_invoke$arity$4(k_10181,this$,x,y) : f_10182__$1.call(null,k_10181,this$,x,y));
{
var G__10183 = cljs.core.next(seq__10092_10174__$1);
var G__10184 = null;
var G__10185 = 0;
var G__10186 = 0;
seq__10092_10162 = G__10183;
chunk__10093_10163 = G__10184;
count__10094_10164 = G__10185;
i__10095_10165 = G__10186;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute,vec__10079,f,sources))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch(this$,cljs.core.constant$keyword$18,(cljs.core.truth_(f)?((function (compute,thunk,err_mesg,vec__10079,f,sources){
return (function (){throw (new Error(err_mesg));
});})(compute,thunk,err_mesg,vec__10079,f,sources))
:((function (compute,thunk,err_mesg,vec__10079,f,sources){
return (function (p1__10057_SHARP_,p2__10056_SHARP_){return tailrecursion.javelin.propagate_BANG_(p2__10056_SHARP_);
});})(compute,thunk,err_mesg,vec__10079,f,sources))
));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:((function (compute,thunk,err_mesg,vec__10079,f,sources){
return (function (){return cljs.core.deref(this$);
});})(compute,thunk,err_mesg,vec__10079,f,sources))
);
var G__10098 = this$;tailrecursion.javelin.propagate_BANG_(G__10098);
return G__10098;
};
var set_formula_BANG_ = function (this$,var_args){
var p__10058 = null;if (arguments.length > 1) {
  p__10058 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__10058);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__10187){
var this$ = cljs.core.first(arglist__10187);
var p__10058 = cljs.core.rest(arglist__10187);
return set_formula_BANG___delegate(this$,p__10058);
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
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__8208__auto__,writer__8209__auto__,opt__8210__auto__){return cljs.core._write(writer__8209__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__10188 = cljs.core.seq(self__.watches);var chunk__10189 = null;var count__10190 = 0;var i__10191 = 0;while(true){
if((i__10191 < count__10190))
{var vec__10192 = chunk__10189.cljs$core$IIndexed$_nth$arity$2(null,i__10191);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10192,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10192,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__10194 = seq__10188;
var G__10195 = chunk__10189;
var G__10196 = count__10190;
var G__10197 = (i__10191 + 1);
seq__10188 = G__10194;
chunk__10189 = G__10195;
count__10190 = G__10196;
i__10191 = G__10197;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10188);if(temp__4092__auto__)
{var seq__10188__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__10188__$1))
{var c__8397__auto__ = cljs.core.chunk_first(seq__10188__$1);{
var G__10198 = cljs.core.chunk_rest(seq__10188__$1);
var G__10199 = c__8397__auto__;
var G__10200 = cljs.core.count(c__8397__auto__);
var G__10201 = 0;
seq__10188 = G__10198;
chunk__10189 = G__10199;
count__10190 = G__10200;
i__10191 = G__10201;
continue;
}
} else
{var vec__10193 = cljs.core.first(seq__10188__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10193,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10193,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__10202 = cljs.core.next(seq__10188__$1);
var G__10203 = null;
var G__10204 = 0;
var G__10205 = 0;
seq__10188 = G__10202;
chunk__10189 = G__10203;
count__10190 = G__10204;
i__10191 = G__10205;
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
var G__10206__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.javelin.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$19) : tailrecursion.javelin.cell.call(null,cljs.core.constant$keyword$19)),cljs.core.array_seq([f,sources], 0));
};
var G__10206 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10206__delegate.call(this,sources);};
G__10206.cljs$lang$maxFixedArity = 0;
G__10206.cljs$lang$applyTo = (function (arglist__10207){
var sources = cljs.core.seq(arglist__10207);
return G__10206__delegate(sources);
});
G__10206.cljs$core$IFn$_invoke$arity$variadic = G__10206__delegate;
return G__10206;
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
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__7629__auto__ = tailrecursion.javelin.cell_QMARK_(c);if(cljs.core.truth_(and__7629__auto__))
{return c.input_QMARK_;
} else
{return and__7629__auto__;
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
return (function (p1__10208_SHARP_,p2__10209_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__10208_SHARP_,p2__10209_SHARP_),p2__10209_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__10211_SHARP_,p2__10210_SHARP_){return cljs.core.distinct(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__10211_SHARP_,p2__10210_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__10213__delegate = function (rest__10212_SHARP_){var news = diff(cljs.core.deref(olds),rest__10212_SHARP_);cljs.core.reset_BANG_(olds,rest__10212_SHARP_);
return news;
};
var G__10213 = function (var_args){
var rest__10212_SHARP_ = null;if (arguments.length > 0) {
  rest__10212_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10213__delegate.call(this,rest__10212_SHARP_);};
G__10213.cljs$lang$maxFixedArity = 0;
G__10213.cljs$lang$applyTo = (function (arglist__10214){
var rest__10212_SHARP_ = cljs.core.seq(arglist__10214);
return G__10213__delegate(rest__10212_SHARP_);
});
G__10213.cljs$core$IFn$_invoke$arity$variadic = G__10213__delegate;
return G__10213;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tailrecursion.javelin.lift(proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10215){
var cells = cljs.core.seq(arglist__10215);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift(cljs.core.seq).call(null,c);return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__10216_SHARP_){return tailrecursion.javelin.lift(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__10216_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,cljs.core.count(cljs.core.deref(cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items,f){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(cljs.core.seq).call(null,items);var cur_count = tailrecursion.javelin.lift(cljs.core.count).call(null,items_seq);var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__10217_SHARP_){return tailrecursion.javelin.lift(tailrecursion.javelin.safe_nth).call(null,items_seq,p1__10217_SHARP_);
});})(pool_size,items_seq,cur_count))
;return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){if((pool_size__$1 < cur_count__$1))
{var seq__10222_10226 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));var chunk__10223_10227 = null;var count__10224_10228 = 0;var i__10225_10229 = 0;while(true){
if((i__10225_10229 < count__10224_10228))
{var i_10230 = chunk__10223_10227.cljs$core$IIndexed$_nth$arity$2(null,i__10225_10229);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10230) : ith_item__$1.call(null,i_10230))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10230) : ith_item__$1.call(null,i_10230))));
{
var G__10231 = seq__10222_10226;
var G__10232 = chunk__10223_10227;
var G__10233 = count__10224_10228;
var G__10234 = (i__10225_10229 + 1);
seq__10222_10226 = G__10231;
chunk__10223_10227 = G__10232;
count__10224_10228 = G__10233;
i__10225_10229 = G__10234;
continue;
}
} else
{var temp__4092__auto___10235 = cljs.core.seq(seq__10222_10226);if(temp__4092__auto___10235)
{var seq__10222_10236__$1 = temp__4092__auto___10235;if(cljs.core.chunked_seq_QMARK_(seq__10222_10236__$1))
{var c__8397__auto___10237 = cljs.core.chunk_first(seq__10222_10236__$1);{
var G__10238 = cljs.core.chunk_rest(seq__10222_10236__$1);
var G__10239 = c__8397__auto___10237;
var G__10240 = cljs.core.count(c__8397__auto___10237);
var G__10241 = 0;
seq__10222_10226 = G__10238;
chunk__10223_10227 = G__10239;
count__10224_10228 = G__10240;
i__10225_10229 = G__10241;
continue;
}
} else
{var i_10242 = cljs.core.first(seq__10222_10236__$1);(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1((ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10242) : ith_item__$1.call(null,i_10242))) : f__$1.call(null,(ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_10242) : ith_item__$1.call(null,i_10242))));
{
var G__10243 = cljs.core.next(seq__10222_10236__$1);
var G__10244 = null;
var G__10245 = 0;
var G__10246 = 0;
seq__10222_10226 = G__10243;
chunk__10223_10227 = G__10244;
count__10224_10228 = G__10245;
i__10225_10229 = G__10246;
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
