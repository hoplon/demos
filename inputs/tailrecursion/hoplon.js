// Compiled by ClojureScript 0.0-2227
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.is_ie8 = cljs.core.not((window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11044_SHARP_){return (p1__11044_SHARP_ instanceof Node);
}):(function (p1__11045_SHARP_){try{return p1__11045_SHARP_.nodeType;
}catch (e11046){if((e11046 instanceof Error))
{var _ = e11046;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11046;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11047_SHARP_){try{return cljs.core.vector_QMARK_(p1__11047_SHARP_);
}catch (e11048){if((e11048 instanceof Error))
{var _ = e11048;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11048;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11049_SHARP_){try{return cljs.core.seq_QMARK_(p1__11049_SHARP_);
}catch (e11050){if((e11050 instanceof Error))
{var _ = e11050;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11050;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_((function (p1__11051_SHARP_){if(cljs.core.truth_((function (){var and__7258__auto__ = console;if(cljs.core.truth_(and__7258__auto__))
{return console.log;
} else
{return and__7258__auto__;
}
})()))
{return console.log(p1__11051_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e11053){if((e11053 instanceof Error))
{var _ = e11053;return not_found;
} else
{if(cljs.core.constant$keyword$6)
{throw e11053;
} else
{return null;
}
}
}});
safe_nth = function(coll,index,not_found){
switch(arguments.length){
case 2:
return safe_nth__2.call(this,coll,index);
case 3:
return safe_nth__3.call(this,coll,index,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
safe_nth.cljs$core$IFn$_invoke$arity$2 = safe_nth__2;
safe_nth.cljs$core$IFn$_invoke$arity$3 = safe_nth__3;
return safe_nth;
})()
;
tailrecursion.hoplon.timeout = (function() {
var timeout = null;
var timeout__1 = (function (f){return timeout.cljs$core$IFn$_invoke$arity$2(f,0);
});
var timeout__2 = (function (f,t){return window.setTimeout(f,t);
});
timeout = function(f,t){
switch(arguments.length){
case 1:
return timeout__1.call(this,f);
case 2:
return timeout__2.call(this,f,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeout.cljs$core$IFn$_invoke$arity$1 = timeout__1;
timeout.cljs$core$IFn$_invoke$arity$2 = timeout__2;
return timeout;
})()
;
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__11054_SHARP_){if(cljs.core.truth_((function (){var or__7270__auto__ = (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11054_SHARP_) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__11054_SHARP_));if(cljs.core.truth_(or__7270__auto__))
{return or__7270__auto__;
} else
{return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11054_SHARP_) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__11054_SHARP_));
}
})()))
{return unsplice(p1__11054_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11054_SHARP_], null);
}
}),forms);
});
tailrecursion.hoplon.when_dom = (function when_dom(this$,f){if(!((this$ instanceof Element)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((function doit(){if(cljs.core.truth_(document.documentElement.contains(this$)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2(doit,20);
}
}));
}
});
tailrecursion.hoplon.parse_args = (function parse_args(p__11057){var vec__11059 = p__11057;var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11059,0,null);var tail = cljs.core.nthnext(vec__11059,1);var args = vec__11059;var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_,vec__11059,head,tail,args){
return (function (p1__11055_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,p1__11055_SHARP_)));
});})(kw1_QMARK_,vec__11059,head,tail,args))
;var drkw = ((function (kw1_QMARK_,mkkw,vec__11059,head,tail,args){
return (function (p1__11056_SHARP_){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.drop_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4(2,2,cljs.core.PersistentVector.EMPTY,p1__11056_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__11059,head,tail,args))
;if(cljs.core.map_QMARK_(head))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,tailrecursion.hoplon.unsplice(tail)], null);
} else
{if((head instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,mkkw(args)),tailrecursion.hoplon.unsplice(drkw(args))], null);
} else
{if(cljs.core.constant$keyword$6)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,tailrecursion.hoplon.unsplice(args)], null);
} else
{return null;
}
}
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__11061_SHARP_,p2__11060_SHARP_){var n = (function (){var s = cljs.core.name(p2__11060_SHARP_);var c = cljs.core.last(s);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c)))
{return s;
} else
{return s.slice(0,-1);
}
})();var p = n.substr(0,3);return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__11060_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11061_SHARP_,p)))?n:n.substr(3)));
});var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");var dos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__11062_SHARP_,p2__11063_SHARP_){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11062_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__11063_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__11086_11104 = cljs.core.seq(attr);var chunk__11087_11105 = null;var count__11088_11106 = 0;var i__11089_11107 = 0;while(true){
if((i__11089_11107 < count__11088_11106))
{var vec__11090_11108 = chunk__11087_11105.cljs$core$IIndexed$_nth$arity$2(null,i__11089_11107);var k_11109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11090_11108,0,null);var v_11110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11090_11108,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11110)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11109) : dokey.call(null,k_11109)),v_11110);
} else
{if(cljs.core.fn_QMARK_(v_11110))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11109) : onkey.call(null,k_11109)),v_11110);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11109) : dokey.call(null,k_11109)),v_11110) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11109) : dokey.call(null,k_11109)),v_11110));
} else
{}
}
}
{
var G__11111 = seq__11086_11104;
var G__11112 = chunk__11087_11105;
var G__11113 = count__11088_11106;
var G__11114 = (i__11089_11107 + 1);
seq__11086_11104 = G__11111;
chunk__11087_11105 = G__11112;
count__11088_11106 = G__11113;
i__11089_11107 = G__11114;
continue;
}
} else
{var temp__4092__auto___11115 = cljs.core.seq(seq__11086_11104);if(temp__4092__auto___11115)
{var seq__11086_11116__$1 = temp__4092__auto___11115;if(cljs.core.chunked_seq_QMARK_(seq__11086_11116__$1))
{var c__8026__auto___11117 = cljs.core.chunk_first(seq__11086_11116__$1);{
var G__11118 = cljs.core.chunk_rest(seq__11086_11116__$1);
var G__11119 = c__8026__auto___11117;
var G__11120 = cljs.core.count(c__8026__auto___11117);
var G__11121 = 0;
seq__11086_11104 = G__11118;
chunk__11087_11105 = G__11119;
count__11088_11106 = G__11120;
i__11089_11107 = G__11121;
continue;
}
} else
{var vec__11091_11122 = cljs.core.first(seq__11086_11116__$1);var k_11123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11091_11122,0,null);var v_11124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11091_11122,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11124)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11123) : dokey.call(null,k_11123)),v_11124);
} else
{if(cljs.core.fn_QMARK_(v_11124))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11123) : onkey.call(null,k_11123)),v_11124);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11123) : dokey.call(null,k_11123)),v_11124) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11123) : dokey.call(null,k_11123)),v_11124));
} else
{}
}
}
{
var G__11125 = cljs.core.next(seq__11086_11116__$1);
var G__11126 = null;
var G__11127 = 0;
var G__11128 = 0;
seq__11086_11104 = G__11125;
chunk__11087_11105 = G__11126;
count__11088_11106 = G__11127;
i__11089_11107 = G__11128;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.seq(cljs.core.deref(dos)))
{setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){var seq__11092 = cljs.core.seq(cljs.core.deref(dos));var chunk__11093 = null;var count__11094 = 0;var i__11095 = 0;while(true){
if((i__11095 < count__11094))
{var vec__11096 = chunk__11093.cljs$core$IIndexed$_nth$arity$2(null,i__11095);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11096,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11096,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11092,chunk__11093,count__11094,i__11095,vec__11096,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11065_SHARP_,p2__11066_SHARP_,p3__11067_SHARP_,p4__11064_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11064_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11064_SHARP_));
});})(seq__11092,chunk__11093,count__11094,i__11095,vec__11096,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11129 = seq__11092;
var G__11130 = chunk__11093;
var G__11131 = count__11094;
var G__11132 = (i__11095 + 1);
seq__11092 = G__11129;
chunk__11093 = G__11130;
count__11094 = G__11131;
i__11095 = G__11132;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11092);if(temp__4092__auto__)
{var seq__11092__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11092__$1))
{var c__8026__auto__ = cljs.core.chunk_first(seq__11092__$1);{
var G__11133 = cljs.core.chunk_rest(seq__11092__$1);
var G__11134 = c__8026__auto__;
var G__11135 = cljs.core.count(c__8026__auto__);
var G__11136 = 0;
seq__11092 = G__11133;
chunk__11093 = G__11134;
count__11094 = G__11135;
i__11095 = G__11136;
continue;
}
} else
{var vec__11097 = cljs.core.first(seq__11092__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11097,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11097,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11092,chunk__11093,count__11094,i__11095,vec__11097,k,v,seq__11092__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11065_SHARP_,p2__11066_SHARP_,p3__11067_SHARP_,p4__11064_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11064_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11064_SHARP_));
});})(seq__11092,chunk__11093,count__11094,i__11095,vec__11097,k,v,seq__11092__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11137 = cljs.core.next(seq__11092__$1);
var G__11138 = null;
var G__11139 = 0;
var G__11140 = 0;
seq__11092 = G__11137;
chunk__11093 = G__11138;
count__11094 = G__11139;
i__11095 = G__11140;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,0);
} else
{}
if(cljs.core.seq(cljs.core.deref(ons)))
{setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){var seq__11098 = cljs.core.seq(cljs.core.deref(ons));var chunk__11099 = null;var count__11100 = 0;var i__11101 = 0;while(true){
if((i__11101 < count__11100))
{var vec__11102 = chunk__11099.cljs$core$IIndexed$_nth$arity$2(null,i__11101);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11102,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11102,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11141 = seq__11098;
var G__11142 = chunk__11099;
var G__11143 = count__11100;
var G__11144 = (i__11101 + 1);
seq__11098 = G__11141;
chunk__11099 = G__11142;
count__11100 = G__11143;
i__11101 = G__11144;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11098);if(temp__4092__auto__)
{var seq__11098__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11098__$1))
{var c__8026__auto__ = cljs.core.chunk_first(seq__11098__$1);{
var G__11145 = cljs.core.chunk_rest(seq__11098__$1);
var G__11146 = c__8026__auto__;
var G__11147 = cljs.core.count(c__8026__auto__);
var G__11148 = 0;
seq__11098 = G__11145;
chunk__11099 = G__11146;
count__11100 = G__11147;
i__11101 = G__11148;
continue;
}
} else
{var vec__11103 = cljs.core.first(seq__11098__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11103,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11103,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11149 = cljs.core.next(seq__11098__$1);
var G__11150 = null;
var G__11151 = 0;
var G__11152 = 0;
seq__11098 = G__11149;
chunk__11099 = G__11150;
count__11100 = G__11151;
i__11101 = G__11152;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,0);
} else
{}
return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11153_SHARP_,p2__11154_SHARP_){return p1__11153_SHARP_.appendChild(p2__11154_SHARP_);
}):(function (p1__11155_SHARP_,p2__11156_SHARP_){try{return p1__11155_SHARP_.appendChild(p2__11156_SHARP_);
}catch (e11157){if((e11157 instanceof Error))
{var _ = e11157;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11157;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){jQuery(this$).empty();
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))) : tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__11163){var vec__11169 = p__11163;var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11169,0,null);var _ = cljs.core.nthnext(vec__11169,1);var kids = vec__11169;if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell)))
{tailrecursion.hoplon.replace_children_BANG_(this$,cljs.core.deref(child_cell));
cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__11169,child_cell,_,kids){
return (function (p1__11159_SHARP_,p2__11160_SHARP_,p3__11161_SHARP_,p4__11158_SHARP_){return tailrecursion.hoplon.replace_children_BANG_(this$,p4__11158_SHARP_);
});})(vec__11169,child_cell,_,kids))
);
} else
{var node_11174 = ((function (vec__11169,child_cell,_,kids){
return (function (p1__11162_SHARP_){if(typeof p1__11162_SHARP_ === 'string')
{return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__11162_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__11162_SHARP_));
} else
{if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__11162_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__11162_SHARP_))))
{return p1__11162_SHARP_;
} else
{return null;
}
}
});})(vec__11169,child_cell,_,kids))
;var seq__11170_11175 = cljs.core.seq(cljs.core.keep(node_11174,tailrecursion.hoplon.unsplice(kids)));var chunk__11171_11176 = null;var count__11172_11177 = 0;var i__11173_11178 = 0;while(true){
if((i__11173_11178 < count__11172_11177))
{var x_11179 = chunk__11171_11176.cljs$core$IIndexed$_nth$arity$2(null,i__11173_11178);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11179) : tailrecursion.hoplon.append_child.call(null,this$,x_11179));
{
var G__11180 = seq__11170_11175;
var G__11181 = chunk__11171_11176;
var G__11182 = count__11172_11177;
var G__11183 = (i__11173_11178 + 1);
seq__11170_11175 = G__11180;
chunk__11171_11176 = G__11181;
count__11172_11177 = G__11182;
i__11173_11178 = G__11183;
continue;
}
} else
{var temp__4092__auto___11184 = cljs.core.seq(seq__11170_11175);if(temp__4092__auto___11184)
{var seq__11170_11185__$1 = temp__4092__auto___11184;if(cljs.core.chunked_seq_QMARK_(seq__11170_11185__$1))
{var c__8026__auto___11186 = cljs.core.chunk_first(seq__11170_11185__$1);{
var G__11187 = cljs.core.chunk_rest(seq__11170_11185__$1);
var G__11188 = c__8026__auto___11186;
var G__11189 = cljs.core.count(c__8026__auto___11186);
var G__11190 = 0;
seq__11170_11175 = G__11187;
chunk__11171_11176 = G__11188;
count__11172_11177 = G__11189;
i__11173_11178 = G__11190;
continue;
}
} else
{var x_11191 = cljs.core.first(seq__11170_11185__$1);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11191) : tailrecursion.hoplon.append_child.call(null,this$,x_11191));
{
var G__11192 = cljs.core.next(seq__11170_11185__$1);
var G__11193 = null;
var G__11194 = 0;
var G__11195 = 0;
seq__11170_11175 = G__11192;
chunk__11171_11176 = G__11193;
count__11172_11177 = G__11194;
i__11173_11178 = G__11195;
continue;
}
}
} else
{}
}
break;
}
}
return this$;
});
tailrecursion.hoplon.on_append_BANG_ = (function on_append_BANG_(this$,f){return this$.hoplonIFn = f;
});
Element.prototype.cljs$core$IFn$ = true;
Element.prototype.call = (function() { 
var G__11203__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__11197 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11197,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11197,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11198 = this$;G__11198.hoplonIFn(attr,kids);
return G__11198;
} else
{var G__11199 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11199,attr);
tailrecursion.hoplon.add_children_BANG_(G__11199,kids);
return G__11199;
}
};
var G__11203 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11203__delegate.call(this,self__,args);};
G__11203.cljs$lang$maxFixedArity = 1;
G__11203.cljs$lang$applyTo = (function (arglist__11204){
var self__ = cljs.core.first(arglist__11204);
var args = cljs.core.rest(arglist__11204);
return G__11203__delegate(self__,args);
});
G__11203.cljs$core$IFn$_invoke$arity$variadic = G__11203__delegate;
return G__11203;
})()
;
Element.prototype.apply = (function (self__,args11196){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11196)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11205__delegate = function (args){var this$ = this;var vec__11200 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11200,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11200,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11201 = this$;G__11201.hoplonIFn(attr,kids);
return G__11201;
} else
{var G__11202 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11202,attr);
tailrecursion.hoplon.add_children_BANG_(G__11202,kids);
return G__11202;
}
};
var G__11205 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11205__delegate.call(this,args);};
G__11205.cljs$lang$maxFixedArity = 0;
G__11205.cljs$lang$applyTo = (function (arglist__11206){
var args = cljs.core.seq(arglist__11206);
return G__11205__delegate(args);
});
G__11205.cljs$core$IFn$_invoke$arity$variadic = G__11205__delegate;
return G__11205;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__11207__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new$,args);
};
var G__11207 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11207__delegate.call(this,args);};
G__11207.cljs$lang$maxFixedArity = 0;
G__11207.cljs$lang$applyTo = (function (arglist__11208){
var args = cljs.core.seq(arglist__11208);
return G__11207__delegate(args);
});
G__11207.cljs$core$IFn$_invoke$arity$variadic = G__11207__delegate;
return G__11207;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__11209__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__11209 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11209__delegate.call(this,args);};
G__11209.cljs$lang$maxFixedArity = 0;
G__11209.cljs$lang$applyTo = (function (arglist__11210){
var args = cljs.core.seq(arglist__11210);
return G__11209__delegate(args);
});
G__11209.cljs$core$IFn$_invoke$arity$variadic = G__11209__delegate;
return G__11209;
})()
;
});
tailrecursion.hoplon.html_body = tailrecursion.hoplon.make_singleton_ctor("body");
tailrecursion.hoplon.html_head = tailrecursion.hoplon.make_singleton_ctor("head");
tailrecursion.hoplon.html = tailrecursion.hoplon.make_singleton_ctor("html");
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor("a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor("abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor("acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor("address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor("applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor("area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor("article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor("aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor("audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor("b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor("base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor("basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor("bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor("bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor("big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor("blockquote");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor("br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor("button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor("canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor("caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor("center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor("cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor("code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor("col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor("colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor("command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor("data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor("datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor("dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor("del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor("details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor("dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor("dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor("div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor("dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor("dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor("em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor("embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor("eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor("fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor("figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor("figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor("font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor("footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor("form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor("frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor("frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor("h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor("h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor("h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor("h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor("h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor("h6");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor("header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor("hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor("hr");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor("i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor("iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor("img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor("input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor("ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor("isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor("kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor("keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor("label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor("legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor("li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor("link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor("map");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor("mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor("menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor("meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor("meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor("nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor("noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor("noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor("object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor("ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor("optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor("option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor("output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor("p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor("param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor("pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor("progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor("q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor("rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor("rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor("ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor("s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor("samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor("script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor("section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor("select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor("small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor("source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor("span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor("strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor("strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor("style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor("sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor("summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor("sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor("table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor("tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor("td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor("textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor("tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor("th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor("thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor("time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor("title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor("tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor("track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor("tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor("u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor("ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor("var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor("video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor("wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function $text(p1__11211_SHARP_){return document.createTextNode(p1__11211_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__11212_SHARP_){return document.createComment(p1__11212_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.initialized_QMARK_)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__11213_SHARP_){return p1__11213_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_(tailrecursion.hoplon.initialized_QMARK_,true);
var seq__11218 = cljs.core.seq(cljs.core.deref(tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__11219 = null;var count__11220 = 0;var i__11221 = 0;while(true){
if((i__11221 < count__11220))
{var f = chunk__11219.cljs$core$IIndexed$_nth$arity$2(null,i__11221);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11222 = seq__11218;
var G__11223 = chunk__11219;
var G__11224 = count__11220;
var G__11225 = (i__11221 + 1);
seq__11218 = G__11222;
chunk__11219 = G__11223;
count__11220 = G__11224;
i__11221 = G__11225;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11218);if(temp__4092__auto__)
{var seq__11218__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11218__$1))
{var c__8026__auto__ = cljs.core.chunk_first(seq__11218__$1);{
var G__11226 = cljs.core.chunk_rest(seq__11218__$1);
var G__11227 = c__8026__auto__;
var G__11228 = cljs.core.count(c__8026__auto__);
var G__11229 = 0;
seq__11218 = G__11226;
chunk__11219 = G__11227;
count__11220 = G__11228;
i__11221 = G__11229;
continue;
}
} else
{var f = cljs.core.first(seq__11218__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11230 = cljs.core.next(seq__11218__$1);
var G__11231 = null;
var G__11232 = 0;
var G__11233 = 0;
seq__11218 = G__11230;
chunk__11219 = G__11231;
count__11220 = G__11232;
i__11221 = G__11233;
continue;
}
}
} else
{return null;
}
}
break;
}
}),0);
});
tailrecursion.hoplon.by_id = (function by_id(id){return document.getElementById(cljs.core.name(id));
});
tailrecursion.hoplon.val_id = (function val_id(id){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.by_id(id),cljs.core.constant$keyword$11) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(id),cljs.core.constant$keyword$11));
});
tailrecursion.hoplon.rel = (function rel(other,event){var os = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(jQuery(other).offset());var ox = (os.cljs$core$IFn$_invoke$arity$1 ? os.cljs$core$IFn$_invoke$arity$1("left") : os.call(null,"left"));var oy = (os.cljs$core$IFn$_invoke$arity$1 ? os.cljs$core$IFn$_invoke$arity$1("top") : os.call(null,"top"));return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$20,(event.pageX - ox),cljs.core.constant$keyword$21,(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function relx(other,event){return cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel(other,event));
});
tailrecursion.hoplon.rely = (function rely(other,event){return cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel(other,event));
});
tailrecursion.hoplon.rel_event = (function rel_event(rel_to,tag,handler){return (function (event){(event[(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"X")] = tailrecursion.hoplon.relx(rel_to,event));
(event[(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"Y")] = tailrecursion.hoplon.rely(rel_to,event));
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));
});
});
tailrecursion.hoplon.text_val_BANG_ = (function() {
var text_val_BANG_ = null;
var text_val_BANG___1 = (function (e){return e.val();
});
var text_val_BANG___2 = (function (e,v){return e.val((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
});
text_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return text_val_BANG___1.call(this,e);
case 2:
return text_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = text_val_BANG___1;
text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = text_val_BANG___2;
return text_val_BANG_;
})()
;
tailrecursion.hoplon.check_val_BANG_ = (function() {
var check_val_BANG_ = null;
var check_val_BANG___1 = (function (e){return e.is(":checked");
});
var check_val_BANG___2 = (function (e,v){return e.prop("checked",cljs.core.boolean$(v));
});
check_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return check_val_BANG___1.call(this,e);
case 2:
return check_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = check_val_BANG___1;
check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = check_val_BANG___2;
return check_val_BANG_;
})()
;
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__8136__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8137__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8138__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8139__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8140__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("do!",((function (method_table__8136__auto__,prefer_table__8137__auto__,method_cache__8138__auto__,cached_hierarchy__8139__auto__,hierarchy__8140__auto__){
return (function (elem,key,val){return key;
});})(method_table__8136__auto__,prefer_table__8137__auto__,method_cache__8138__auto__,cached_hierarchy__8139__auto__,hierarchy__8140__auto__))
,cljs.core.constant$keyword$22,hierarchy__8140__auto__,method_table__8136__auto__,prefer_table__8137__auto__,method_cache__8138__auto__,cached_hierarchy__8139__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,key,val){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$11,(function() { 
var G__11234__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__11234 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11234__delegate.call(this,elem,_,args);};
G__11234.cljs$lang$maxFixedArity = 2;
G__11234.cljs$lang$applyTo = (function (arglist__11235){
var elem = cljs.core.first(arglist__11235);
arglist__11235 = cljs.core.next(arglist__11235);
var _ = cljs.core.first(arglist__11235);
var args = cljs.core.rest(arglist__11235);
return G__11234__delegate(elem,_,args);
});
G__11234.cljs$core$IFn$_invoke$arity$variadic = G__11234__delegate;
return G__11234;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$24,(function (elem,_,kvs){var e = jQuery(elem);var seq__11236 = cljs.core.seq(kvs);var chunk__11237 = null;var count__11238 = 0;var i__11239 = 0;while(true){
if((i__11239 < count__11238))
{var vec__11240 = chunk__11237.cljs$core$IIndexed$_nth$arity$2(null,i__11239);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11240,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11240,1,null);var k_11242__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11242__$1);
} else
{e.attr(k_11242__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11242__$1:v));
}
{
var G__11243 = seq__11236;
var G__11244 = chunk__11237;
var G__11245 = count__11238;
var G__11246 = (i__11239 + 1);
seq__11236 = G__11243;
chunk__11237 = G__11244;
count__11238 = G__11245;
i__11239 = G__11246;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11236);if(temp__4092__auto__)
{var seq__11236__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11236__$1))
{var c__8026__auto__ = cljs.core.chunk_first(seq__11236__$1);{
var G__11247 = cljs.core.chunk_rest(seq__11236__$1);
var G__11248 = c__8026__auto__;
var G__11249 = cljs.core.count(c__8026__auto__);
var G__11250 = 0;
seq__11236 = G__11247;
chunk__11237 = G__11248;
count__11238 = G__11249;
i__11239 = G__11250;
continue;
}
} else
{var vec__11241 = cljs.core.first(seq__11236__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11241,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11241,1,null);var k_11251__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11251__$1);
} else
{e.attr(k_11251__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11251__$1:v));
}
{
var G__11252 = cljs.core.next(seq__11236__$1);
var G__11253 = null;
var G__11254 = 0;
var G__11255 = 0;
seq__11236 = G__11252;
chunk__11237 = G__11253;
count__11238 = G__11254;
i__11239 = G__11255;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$25,(function (elem,_,kvs){var elem__$1 = jQuery(elem);var __GT_map = ((function (elem__$1){
return (function (p1__11256_SHARP_){return cljs.core.zipmap(p1__11256_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));var seq__11257 = cljs.core.seq(clmap);var chunk__11258 = null;var count__11259 = 0;var i__11260 = 0;while(true){
if((i__11260 < count__11259))
{var vec__11261 = chunk__11258.cljs$core$IIndexed$_nth$arity$2(null,i__11260);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11261,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11261,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11263 = seq__11257;
var G__11264 = chunk__11258;
var G__11265 = count__11259;
var G__11266 = (i__11260 + 1);
seq__11257 = G__11263;
chunk__11258 = G__11264;
count__11259 = G__11265;
i__11260 = G__11266;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11257);if(temp__4092__auto__)
{var seq__11257__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11257__$1))
{var c__8026__auto__ = cljs.core.chunk_first(seq__11257__$1);{
var G__11267 = cljs.core.chunk_rest(seq__11257__$1);
var G__11268 = c__8026__auto__;
var G__11269 = cljs.core.count(c__8026__auto__);
var G__11270 = 0;
seq__11257 = G__11267;
chunk__11258 = G__11268;
count__11259 = G__11269;
i__11260 = G__11270;
continue;
}
} else
{var vec__11262 = cljs.core.first(seq__11257__$1);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11262,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11262,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11271 = cljs.core.next(seq__11257__$1);
var G__11272 = null;
var G__11273 = 0;
var G__11274 = 0;
seq__11257 = G__11271;
chunk__11258 = G__11272;
count__11259 = G__11273;
i__11260 = G__11274;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$26,(function (elem,_,kvs){var e = jQuery(elem);var seq__11275 = cljs.core.seq(kvs);var chunk__11276 = null;var count__11277 = 0;var i__11278 = 0;while(true){
if((i__11278 < count__11277))
{var vec__11279 = chunk__11276.cljs$core$IIndexed$_nth$arity$2(null,i__11278);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11279,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11279,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11281 = seq__11275;
var G__11282 = chunk__11276;
var G__11283 = count__11277;
var G__11284 = (i__11278 + 1);
seq__11275 = G__11281;
chunk__11276 = G__11282;
count__11277 = G__11283;
i__11278 = G__11284;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11275);if(temp__4092__auto__)
{var seq__11275__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11275__$1))
{var c__8026__auto__ = cljs.core.chunk_first(seq__11275__$1);{
var G__11285 = cljs.core.chunk_rest(seq__11275__$1);
var G__11286 = c__8026__auto__;
var G__11287 = cljs.core.count(c__8026__auto__);
var G__11288 = 0;
seq__11275 = G__11285;
chunk__11276 = G__11286;
count__11277 = G__11287;
i__11278 = G__11288;
continue;
}
} else
{var vec__11280 = cljs.core.first(seq__11275__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11280,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11280,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11289 = cljs.core.next(seq__11275__$1);
var G__11290 = null;
var G__11291 = 0;
var G__11292 = 0;
seq__11275 = G__11289;
chunk__11276 = G__11290;
count__11277 = G__11291;
i__11278 = G__11292;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$27,(function (elem,_,v){return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$28,(function (elem,_,v){if(cljs.core.truth_(v))
{return jQuery(elem).hide().slideDown("fast");
} else
{return jQuery(elem).slideUp("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$29,(function (elem,_,v){if(cljs.core.truth_(v))
{return jQuery(elem).hide().fadeIn("fast");
} else
{return jQuery(elem).fadeOut("fast");
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$30,(function (elem,_,v){return setTimeout((function (){if(cljs.core.truth_(v))
{return jQuery(elem).focus();
} else
{return jQuery(elem).focusout();
}
}),0);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$31,(function (elem,_,___$1){return jQuery(elem).select();
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$32,(function (elem,_,v){if(cljs.core.truth_(v))
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$30,v) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$30,v));
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$31,v) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$31,v));
} else
{return null;
}
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$33,(function (elem,_,v){return jQuery(elem).text((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$34,(function (elem,_,v){return jQuery(elem).html(v);
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$35,(function (elem,_,v){if(cljs.core.truth_(v))
{var body = jQuery("body,html");var elem__$1 = jQuery(elem);return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,elem__$1.offset().top], null)));
} else
{return null;
}
}));
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__8136__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8137__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8138__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8139__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8140__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("on!",((function (method_table__8136__auto__,prefer_table__8137__auto__,method_cache__8138__auto__,cached_hierarchy__8139__auto__,hierarchy__8140__auto__){
return (function (elem,event,callback){return event;
});})(method_table__8136__auto__,prefer_table__8137__auto__,method_cache__8138__auto__,cached_hierarchy__8139__auto__,hierarchy__8140__auto__))
,cljs.core.constant$keyword$22,hierarchy__8140__auto__,method_table__8136__auto__,prefer_table__8137__auto__,method_cache__8138__auto__,cached_hierarchy__8139__auto__));
})();
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,event,callback){return tailrecursion.hoplon.when_dom(elem,(function (){return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(((function (pool_size){
return (function (G__11319,G__11318){return (G__11318.cljs$core$IFn$_invoke$arity$1 ? G__11318.cljs$core$IFn$_invoke$arity$1(G__11319) : G__11318.call(null,G__11319));
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift(((function (pool_size,items_seq){
return (function (G__11320,G__11321){return (G__11320.cljs$core$IFn$_invoke$arity$1 ? G__11320.cljs$core$IFn$_invoke$arity$1(G__11321) : G__11320.call(null,G__11321));
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__11293_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count){
return (function (G__11322,G__11323){return (G__11322 < G__11323);
});})(pool_size,items_seq,cur_count))
).call(null,p1__11293_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__11294_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__11324,G__11326,G__11325){return (G__11324.cljs$core$IFn$_invoke$arity$2 ? G__11324.cljs$core$IFn$_invoke$arity$2(G__11325,G__11326) : G__11324.call(null,G__11325,G__11326));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__11294_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__11340,G__11338,G__11334,G__11335,G__11332,G__11336,G__11331,G__11333,G__11339,G__11337){if(cljs.core.truth_((G__11331 < G__11332)))
{var seq__11327_11341 = cljs.core.seq((G__11333.cljs$core$IFn$_invoke$arity$2 ? G__11333.cljs$core$IFn$_invoke$arity$2(G__11331,G__11332) : G__11333.call(null,G__11331,G__11332)));var chunk__11328_11342 = null;var count__11329_11343 = 0;var i__11330_11344 = 0;while(true){
if(cljs.core.truth_((i__11330_11344 < count__11329_11343)))
{var i_11345 = chunk__11328_11342.cljs$core$IIndexed$_nth$arity$2(null,i__11330_11344);var e_11346 = (G__11334.cljs$core$IFn$_invoke$arity$1 ? G__11334.cljs$core$IFn$_invoke$arity$1((G__11335.cljs$core$IFn$_invoke$arity$1 ? G__11335.cljs$core$IFn$_invoke$arity$1(i_11345) : G__11335.call(null,i_11345))) : G__11334.call(null,(G__11335.cljs$core$IFn$_invoke$arity$1 ? G__11335.cljs$core$IFn$_invoke$arity$1(i_11345) : G__11335.call(null,i_11345)))).call(null,cljs.core.constant$keyword$37,(G__11336.cljs$core$IFn$_invoke$arity$1 ? G__11336.cljs$core$IFn$_invoke$arity$1(i_11345) : G__11336.call(null,i_11345)));if(cljs.core.not(G__11337))
{G__11338.appendChild(e_11346);
} else
{G__11338.insertBefore(e_11346,G__11338.firstChild);
}
{
var G__11347 = seq__11327_11341;
var G__11348 = chunk__11328_11342;
var G__11349 = count__11329_11343;
var G__11350 = (i__11330_11344 + 1);
seq__11327_11341 = G__11347;
chunk__11328_11342 = G__11348;
count__11329_11343 = G__11349;
i__11330_11344 = G__11350;
continue;
}
} else
{var temp__4092__auto___11351 = cljs.core.seq(seq__11327_11341);if(temp__4092__auto___11351)
{var seq__11327_11352__$1 = temp__4092__auto___11351;if(cljs.core.chunked_seq_QMARK_(seq__11327_11352__$1))
{var c__8026__auto___11353 = cljs.core.chunk_first(seq__11327_11352__$1);{
var G__11354 = cljs.core.chunk_rest(seq__11327_11352__$1);
var G__11355 = c__8026__auto___11353;
var G__11356 = cljs.core.count(c__8026__auto___11353);
var G__11357 = 0;
seq__11327_11341 = G__11354;
chunk__11328_11342 = G__11355;
count__11329_11343 = G__11356;
i__11330_11344 = G__11357;
continue;
}
} else
{var i_11358 = cljs.core.first(seq__11327_11352__$1);var e_11359 = (G__11334.cljs$core$IFn$_invoke$arity$1 ? G__11334.cljs$core$IFn$_invoke$arity$1((G__11335.cljs$core$IFn$_invoke$arity$1 ? G__11335.cljs$core$IFn$_invoke$arity$1(i_11358) : G__11335.call(null,i_11358))) : G__11334.call(null,(G__11335.cljs$core$IFn$_invoke$arity$1 ? G__11335.cljs$core$IFn$_invoke$arity$1(i_11358) : G__11335.call(null,i_11358)))).call(null,cljs.core.constant$keyword$37,(G__11336.cljs$core$IFn$_invoke$arity$1 ? G__11336.cljs$core$IFn$_invoke$arity$1(i_11358) : G__11336.call(null,i_11358)));if(cljs.core.not(G__11337))
{G__11338.appendChild(e_11359);
} else
{G__11338.insertBefore(e_11359,G__11338.firstChild);
}
{
var G__11360 = cljs.core.next(seq__11327_11352__$1);
var G__11361 = null;
var G__11362 = 0;
var G__11363 = 0;
seq__11327_11341 = G__11360;
chunk__11328_11342 = G__11361;
count__11329_11343 = G__11362;
i__11330_11344 = G__11363;
continue;
}
}
} else
{}
}
break;
}
return (G__11339.cljs$core$IFn$_invoke$arity$2 ? G__11339.cljs$core$IFn$_invoke$arity$2(G__11340,G__11332) : G__11339.call(null,G__11340,G__11332));
} else
{return null;
}
});})(p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
).call(null,tailrecursion.javelin.cell(pool_size),p,tpl,ith_item,cur_count,show_ith_QMARK_,pool_size,cljs.core.range,cljs.core.reset_BANG_,reverse_QMARK_);
});})(d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
);
return d;
});
/**
* Manage the URL hash via Javelin cells. There are three arities:
* 
* - When called with no arguments this function returns a formula cell whose
* value is the URL hash or nil.
* 
* - When called with a single string argument, the argument is taken as the
* default value, which is returned in place of nil when there is no hash.
* 
* - When a single cell argument is provided, the URL hash is kept synced to the
* value of the cell.
* 
* - When a cell and a callback function are both provided, the URL hash is kept
* synced to the value of the cell as above, and any attempt to change the hash
* other than via the setter cell causes the callback to be called. The callback
* should be a function of one argument, the requested URL hash.
*/
tailrecursion.hoplon.route_cell = (function() {
var route_cell = null;
var route_cell__0 = (function (){var r = (function (){var ret__8453__auto__ = tailrecursion.javelin.cell(window.location.hash);setInterval(((function (ret__8453__auto__){
return (function (){return cljs.core.reset_BANG_(ret__8453__auto__,window.location.hash);
});})(ret__8453__auto__))
,100);
return tailrecursion.javelin.lift(((function (ret__8453__auto__){
return (function (G__11373){return G__11373;
});})(ret__8453__auto__))
).call(null,ret__8453__auto__);
})();return tailrecursion.javelin.lift(((function (r){
return (function (G__11374,G__11375){if(cljs.core.truth_((G__11374.cljs$core$IFn$_invoke$arity$2 ? G__11374.cljs$core$IFn$_invoke$arity$2("",G__11375) : G__11374.call(null,"",G__11375))))
{return G__11375;
} else
{return null;
}
});})(r))
).call(null,cljs.core.not_EQ_,r);
});
var route_cell__1 = (function (setter_or_dfl){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl)))
{var setter__8454__auto__ = setter_or_dfl;var callback__8455__auto__ = (function (){var or__7270__auto__ = null;if(cljs.core.truth_(or__7270__auto__))
{return or__7270__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8454__auto__,callback__8455__auto__){
return (function (G__11376,G__11377){return G__11376.location.hash = G__11377;
});})(setter__8454__auto__,callback__8455__auto__))
).call(null,window,setter__8454__auto__);
setInterval(((function (setter__8454__auto__,callback__8455__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8454__auto__),window.location.hash))
{(callback__8455__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8455__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8455__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8454__auto__);
} else
{return null;
}
});})(setter__8454__auto__,callback__8455__auto__))
,100);
return setter__8454__auto__;
} else
{var r = route_cell.cljs$core$IFn$_invoke$arity$0();return tailrecursion.javelin.lift(((function (r){
return (function (G__11379,G__11378){var or__7270__auto__ = G__11378;if(cljs.core.truth_(or__7270__auto__))
{return or__7270__auto__;
} else
{return G__11379;
}
});})(r))
).call(null,setter_or_dfl,r);
}
});
var route_cell__2 = (function (setter,callback){var setter__8454__auto__ = setter;var callback__8455__auto__ = (function (){var or__7270__auto__ = callback;if(cljs.core.truth_(or__7270__auto__))
{return or__7270__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8454__auto__,callback__8455__auto__){
return (function (G__11380,G__11381){return G__11380.location.hash = G__11381;
});})(setter__8454__auto__,callback__8455__auto__))
).call(null,window,setter__8454__auto__);
setInterval(((function (setter__8454__auto__,callback__8455__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8454__auto__),window.location.hash))
{(callback__8455__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8455__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8455__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8454__auto__);
} else
{return null;
}
});})(setter__8454__auto__,callback__8455__auto__))
,100);
return setter__8454__auto__;
});
route_cell = function(setter,callback){
switch(arguments.length){
case 0:
return route_cell__0.call(this);
case 1:
return route_cell__1.call(this,setter);
case 2:
return route_cell__2.call(this,setter,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
route_cell.cljs$core$IFn$_invoke$arity$0 = route_cell__0;
route_cell.cljs$core$IFn$_invoke$arity$1 = route_cell__1;
route_cell.cljs$core$IFn$_invoke$arity$2 = route_cell__2;
return route_cell;
})()
;
