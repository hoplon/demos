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
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11057_SHARP_){return (p1__11057_SHARP_ instanceof Node);
}):(function (p1__11058_SHARP_){try{return p1__11058_SHARP_.nodeType;
}catch (e11059){if((e11059 instanceof Error))
{var _ = e11059;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11059;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11060_SHARP_){try{return cljs.core.vector_QMARK_(p1__11060_SHARP_);
}catch (e11061){if((e11061 instanceof Error))
{var _ = e11061;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11061;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11062_SHARP_){try{return cljs.core.seq_QMARK_(p1__11062_SHARP_);
}catch (e11063){if((e11063 instanceof Error))
{var _ = e11063;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11063;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_((function (p1__11064_SHARP_){if(cljs.core.truth_((function (){var and__7440__auto__ = console;if(cljs.core.truth_(and__7440__auto__))
{return console.log;
} else
{return and__7440__auto__;
}
})()))
{return console.log(p1__11064_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e11066){if((e11066 instanceof Error))
{var _ = e11066;return not_found;
} else
{if(cljs.core.constant$keyword$6)
{throw e11066;
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
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__11067_SHARP_){if(cljs.core.truth_((function (){var or__7452__auto__ = (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11067_SHARP_) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__11067_SHARP_));if(cljs.core.truth_(or__7452__auto__))
{return or__7452__auto__;
} else
{return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11067_SHARP_) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__11067_SHARP_));
}
})()))
{return unsplice(p1__11067_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11067_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function parse_args(p__11070){var vec__11072 = p__11070;var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11072,0,null);var tail = cljs.core.nthnext(vec__11072,1);var args = vec__11072;var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_,vec__11072,head,tail,args){
return (function (p1__11068_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,p1__11068_SHARP_)));
});})(kw1_QMARK_,vec__11072,head,tail,args))
;var drkw = ((function (kw1_QMARK_,mkkw,vec__11072,head,tail,args){
return (function (p1__11069_SHARP_){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.drop_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4(2,2,cljs.core.PersistentVector.EMPTY,p1__11069_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__11072,head,tail,args))
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
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__11074_SHARP_,p2__11073_SHARP_){var n = (function (){var s = cljs.core.name(p2__11073_SHARP_);var c = cljs.core.last(s);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c)))
{return s;
} else
{return s.slice(0,-1);
}
})();var p = n.substr(0,3);return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__11073_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11074_SHARP_,p)))?n:n.substr(3)));
});var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");var dos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__11075_SHARP_,p2__11076_SHARP_){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11075_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__11076_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__11099_11117 = cljs.core.seq(attr);var chunk__11100_11118 = null;var count__11101_11119 = 0;var i__11102_11120 = 0;while(true){
if((i__11102_11120 < count__11101_11119))
{var vec__11103_11121 = chunk__11100_11118.cljs$core$IIndexed$_nth$arity$2(null,i__11102_11120);var k_11122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11103_11121,0,null);var v_11123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11103_11121,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11123)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11122) : dokey.call(null,k_11122)),v_11123);
} else
{if(cljs.core.fn_QMARK_(v_11123))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11122) : onkey.call(null,k_11122)),v_11123);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11122) : dokey.call(null,k_11122)),v_11123) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11122) : dokey.call(null,k_11122)),v_11123));
} else
{}
}
}
{
var G__11124 = seq__11099_11117;
var G__11125 = chunk__11100_11118;
var G__11126 = count__11101_11119;
var G__11127 = (i__11102_11120 + 1);
seq__11099_11117 = G__11124;
chunk__11100_11118 = G__11125;
count__11101_11119 = G__11126;
i__11102_11120 = G__11127;
continue;
}
} else
{var temp__4092__auto___11128 = cljs.core.seq(seq__11099_11117);if(temp__4092__auto___11128)
{var seq__11099_11129__$1 = temp__4092__auto___11128;if(cljs.core.chunked_seq_QMARK_(seq__11099_11129__$1))
{var c__8208__auto___11130 = cljs.core.chunk_first(seq__11099_11129__$1);{
var G__11131 = cljs.core.chunk_rest(seq__11099_11129__$1);
var G__11132 = c__8208__auto___11130;
var G__11133 = cljs.core.count(c__8208__auto___11130);
var G__11134 = 0;
seq__11099_11117 = G__11131;
chunk__11100_11118 = G__11132;
count__11101_11119 = G__11133;
i__11102_11120 = G__11134;
continue;
}
} else
{var vec__11104_11135 = cljs.core.first(seq__11099_11129__$1);var k_11136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11104_11135,0,null);var v_11137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11104_11135,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11137)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11136) : dokey.call(null,k_11136)),v_11137);
} else
{if(cljs.core.fn_QMARK_(v_11137))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11136) : onkey.call(null,k_11136)),v_11137);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11136) : dokey.call(null,k_11136)),v_11137) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11136) : dokey.call(null,k_11136)),v_11137));
} else
{}
}
}
{
var G__11138 = cljs.core.next(seq__11099_11129__$1);
var G__11139 = null;
var G__11140 = 0;
var G__11141 = 0;
seq__11099_11117 = G__11138;
chunk__11100_11118 = G__11139;
count__11101_11119 = G__11140;
i__11102_11120 = G__11141;
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
return (function (){var seq__11105 = cljs.core.seq(cljs.core.deref(dos));var chunk__11106 = null;var count__11107 = 0;var i__11108 = 0;while(true){
if((i__11108 < count__11107))
{var vec__11109 = chunk__11106.cljs$core$IIndexed$_nth$arity$2(null,i__11108);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11109,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11109,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11105,chunk__11106,count__11107,i__11108,vec__11109,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11078_SHARP_,p2__11079_SHARP_,p3__11080_SHARP_,p4__11077_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11077_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11077_SHARP_));
});})(seq__11105,chunk__11106,count__11107,i__11108,vec__11109,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11142 = seq__11105;
var G__11143 = chunk__11106;
var G__11144 = count__11107;
var G__11145 = (i__11108 + 1);
seq__11105 = G__11142;
chunk__11106 = G__11143;
count__11107 = G__11144;
i__11108 = G__11145;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11105);if(temp__4092__auto__)
{var seq__11105__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11105__$1))
{var c__8208__auto__ = cljs.core.chunk_first(seq__11105__$1);{
var G__11146 = cljs.core.chunk_rest(seq__11105__$1);
var G__11147 = c__8208__auto__;
var G__11148 = cljs.core.count(c__8208__auto__);
var G__11149 = 0;
seq__11105 = G__11146;
chunk__11106 = G__11147;
count__11107 = G__11148;
i__11108 = G__11149;
continue;
}
} else
{var vec__11110 = cljs.core.first(seq__11105__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11110,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11110,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11105,chunk__11106,count__11107,i__11108,vec__11110,k,v,seq__11105__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11078_SHARP_,p2__11079_SHARP_,p3__11080_SHARP_,p4__11077_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11077_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11077_SHARP_));
});})(seq__11105,chunk__11106,count__11107,i__11108,vec__11110,k,v,seq__11105__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11150 = cljs.core.next(seq__11105__$1);
var G__11151 = null;
var G__11152 = 0;
var G__11153 = 0;
seq__11105 = G__11150;
chunk__11106 = G__11151;
count__11107 = G__11152;
i__11108 = G__11153;
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
return (function (){var seq__11111 = cljs.core.seq(cljs.core.deref(ons));var chunk__11112 = null;var count__11113 = 0;var i__11114 = 0;while(true){
if((i__11114 < count__11113))
{var vec__11115 = chunk__11112.cljs$core$IIndexed$_nth$arity$2(null,i__11114);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11154 = seq__11111;
var G__11155 = chunk__11112;
var G__11156 = count__11113;
var G__11157 = (i__11114 + 1);
seq__11111 = G__11154;
chunk__11112 = G__11155;
count__11113 = G__11156;
i__11114 = G__11157;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11111);if(temp__4092__auto__)
{var seq__11111__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11111__$1))
{var c__8208__auto__ = cljs.core.chunk_first(seq__11111__$1);{
var G__11158 = cljs.core.chunk_rest(seq__11111__$1);
var G__11159 = c__8208__auto__;
var G__11160 = cljs.core.count(c__8208__auto__);
var G__11161 = 0;
seq__11111 = G__11158;
chunk__11112 = G__11159;
count__11113 = G__11160;
i__11114 = G__11161;
continue;
}
} else
{var vec__11116 = cljs.core.first(seq__11111__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11116,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11116,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11162 = cljs.core.next(seq__11111__$1);
var G__11163 = null;
var G__11164 = 0;
var G__11165 = 0;
seq__11111 = G__11162;
chunk__11112 = G__11163;
count__11113 = G__11164;
i__11114 = G__11165;
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
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11166_SHARP_,p2__11167_SHARP_){return p1__11166_SHARP_.appendChild(p2__11167_SHARP_);
}):(function (p1__11168_SHARP_,p2__11169_SHARP_){try{return p1__11168_SHARP_.appendChild(p2__11169_SHARP_);
}catch (e11170){if((e11170 instanceof Error))
{var _ = e11170;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11170;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){jQuery(this$).empty();
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))) : tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__11176){var vec__11182 = p__11176;var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11182,0,null);var _ = cljs.core.nthnext(vec__11182,1);var kids = vec__11182;if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell)))
{tailrecursion.hoplon.replace_children_BANG_(this$,cljs.core.deref(child_cell));
cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__11182,child_cell,_,kids){
return (function (p1__11172_SHARP_,p2__11173_SHARP_,p3__11174_SHARP_,p4__11171_SHARP_){return tailrecursion.hoplon.replace_children_BANG_(this$,p4__11171_SHARP_);
});})(vec__11182,child_cell,_,kids))
);
} else
{var node_11187 = ((function (vec__11182,child_cell,_,kids){
return (function (p1__11175_SHARP_){if(typeof p1__11175_SHARP_ === 'string')
{return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__11175_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__11175_SHARP_));
} else
{if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__11175_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__11175_SHARP_))))
{return p1__11175_SHARP_;
} else
{return null;
}
}
});})(vec__11182,child_cell,_,kids))
;var seq__11183_11188 = cljs.core.seq(cljs.core.keep(node_11187,tailrecursion.hoplon.unsplice(kids)));var chunk__11184_11189 = null;var count__11185_11190 = 0;var i__11186_11191 = 0;while(true){
if((i__11186_11191 < count__11185_11190))
{var x_11192 = chunk__11184_11189.cljs$core$IIndexed$_nth$arity$2(null,i__11186_11191);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11192) : tailrecursion.hoplon.append_child.call(null,this$,x_11192));
{
var G__11193 = seq__11183_11188;
var G__11194 = chunk__11184_11189;
var G__11195 = count__11185_11190;
var G__11196 = (i__11186_11191 + 1);
seq__11183_11188 = G__11193;
chunk__11184_11189 = G__11194;
count__11185_11190 = G__11195;
i__11186_11191 = G__11196;
continue;
}
} else
{var temp__4092__auto___11197 = cljs.core.seq(seq__11183_11188);if(temp__4092__auto___11197)
{var seq__11183_11198__$1 = temp__4092__auto___11197;if(cljs.core.chunked_seq_QMARK_(seq__11183_11198__$1))
{var c__8208__auto___11199 = cljs.core.chunk_first(seq__11183_11198__$1);{
var G__11200 = cljs.core.chunk_rest(seq__11183_11198__$1);
var G__11201 = c__8208__auto___11199;
var G__11202 = cljs.core.count(c__8208__auto___11199);
var G__11203 = 0;
seq__11183_11188 = G__11200;
chunk__11184_11189 = G__11201;
count__11185_11190 = G__11202;
i__11186_11191 = G__11203;
continue;
}
} else
{var x_11204 = cljs.core.first(seq__11183_11198__$1);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11204) : tailrecursion.hoplon.append_child.call(null,this$,x_11204));
{
var G__11205 = cljs.core.next(seq__11183_11198__$1);
var G__11206 = null;
var G__11207 = 0;
var G__11208 = 0;
seq__11183_11188 = G__11205;
chunk__11184_11189 = G__11206;
count__11185_11190 = G__11207;
i__11186_11191 = G__11208;
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
var G__11216__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__11210 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11210,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11210,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11211 = this$;G__11211.hoplonIFn(attr,kids);
return G__11211;
} else
{var G__11212 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11212,attr);
tailrecursion.hoplon.add_children_BANG_(G__11212,kids);
return G__11212;
}
};
var G__11216 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11216__delegate.call(this,self__,args);};
G__11216.cljs$lang$maxFixedArity = 1;
G__11216.cljs$lang$applyTo = (function (arglist__11217){
var self__ = cljs.core.first(arglist__11217);
var args = cljs.core.rest(arglist__11217);
return G__11216__delegate(self__,args);
});
G__11216.cljs$core$IFn$_invoke$arity$variadic = G__11216__delegate;
return G__11216;
})()
;
Element.prototype.apply = (function (self__,args11209){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11209)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11218__delegate = function (args){var this$ = this;var vec__11213 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11213,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11213,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11214 = this$;G__11214.hoplonIFn(attr,kids);
return G__11214;
} else
{var G__11215 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11215,attr);
tailrecursion.hoplon.add_children_BANG_(G__11215,kids);
return G__11215;
}
};
var G__11218 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11218__delegate.call(this,args);};
G__11218.cljs$lang$maxFixedArity = 0;
G__11218.cljs$lang$applyTo = (function (arglist__11219){
var args = cljs.core.seq(arglist__11219);
return G__11218__delegate(args);
});
G__11218.cljs$core$IFn$_invoke$arity$variadic = G__11218__delegate;
return G__11218;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__11220__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new$,args);
};
var G__11220 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11220__delegate.call(this,args);};
G__11220.cljs$lang$maxFixedArity = 0;
G__11220.cljs$lang$applyTo = (function (arglist__11221){
var args = cljs.core.seq(arglist__11221);
return G__11220__delegate(args);
});
G__11220.cljs$core$IFn$_invoke$arity$variadic = G__11220__delegate;
return G__11220;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__11222__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__11222 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11222__delegate.call(this,args);};
G__11222.cljs$lang$maxFixedArity = 0;
G__11222.cljs$lang$applyTo = (function (arglist__11223){
var args = cljs.core.seq(arglist__11223);
return G__11222__delegate(args);
});
G__11222.cljs$core$IFn$_invoke$arity$variadic = G__11222__delegate;
return G__11222;
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
tailrecursion.hoplon.$text = (function $text(p1__11224_SHARP_){return document.createTextNode(p1__11224_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__11225_SHARP_){return document.createComment(p1__11225_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.initialized_QMARK_)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__11226_SHARP_){return p1__11226_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_(tailrecursion.hoplon.initialized_QMARK_,true);
var seq__11231 = cljs.core.seq(cljs.core.deref(tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__11232 = null;var count__11233 = 0;var i__11234 = 0;while(true){
if((i__11234 < count__11233))
{var f = chunk__11232.cljs$core$IIndexed$_nth$arity$2(null,i__11234);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11235 = seq__11231;
var G__11236 = chunk__11232;
var G__11237 = count__11233;
var G__11238 = (i__11234 + 1);
seq__11231 = G__11235;
chunk__11232 = G__11236;
count__11233 = G__11237;
i__11234 = G__11238;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11231);if(temp__4092__auto__)
{var seq__11231__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11231__$1))
{var c__8208__auto__ = cljs.core.chunk_first(seq__11231__$1);{
var G__11239 = cljs.core.chunk_rest(seq__11231__$1);
var G__11240 = c__8208__auto__;
var G__11241 = cljs.core.count(c__8208__auto__);
var G__11242 = 0;
seq__11231 = G__11239;
chunk__11232 = G__11240;
count__11233 = G__11241;
i__11234 = G__11242;
continue;
}
} else
{var f = cljs.core.first(seq__11231__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11243 = cljs.core.next(seq__11231__$1);
var G__11244 = null;
var G__11245 = 0;
var G__11246 = 0;
seq__11231 = G__11243;
chunk__11232 = G__11244;
count__11233 = G__11245;
i__11234 = G__11246;
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__8318__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8319__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8320__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8321__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8322__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("do!",((function (method_table__8318__auto__,prefer_table__8319__auto__,method_cache__8320__auto__,cached_hierarchy__8321__auto__,hierarchy__8322__auto__){
return (function (elem,key,val){return key;
});})(method_table__8318__auto__,prefer_table__8319__auto__,method_cache__8320__auto__,cached_hierarchy__8321__auto__,hierarchy__8322__auto__))
,cljs.core.constant$keyword$22,hierarchy__8322__auto__,method_table__8318__auto__,prefer_table__8319__auto__,method_cache__8320__auto__,cached_hierarchy__8321__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,key,val){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$11,(function() { 
var G__11247__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__11247 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11247__delegate.call(this,elem,_,args);};
G__11247.cljs$lang$maxFixedArity = 2;
G__11247.cljs$lang$applyTo = (function (arglist__11248){
var elem = cljs.core.first(arglist__11248);
arglist__11248 = cljs.core.next(arglist__11248);
var _ = cljs.core.first(arglist__11248);
var args = cljs.core.rest(arglist__11248);
return G__11247__delegate(elem,_,args);
});
G__11247.cljs$core$IFn$_invoke$arity$variadic = G__11247__delegate;
return G__11247;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$24,(function (elem,_,kvs){var e = jQuery(elem);var seq__11249 = cljs.core.seq(kvs);var chunk__11250 = null;var count__11251 = 0;var i__11252 = 0;while(true){
if((i__11252 < count__11251))
{var vec__11253 = chunk__11250.cljs$core$IIndexed$_nth$arity$2(null,i__11252);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11253,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11253,1,null);var k_11255__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11255__$1);
} else
{e.attr(k_11255__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11255__$1:v));
}
{
var G__11256 = seq__11249;
var G__11257 = chunk__11250;
var G__11258 = count__11251;
var G__11259 = (i__11252 + 1);
seq__11249 = G__11256;
chunk__11250 = G__11257;
count__11251 = G__11258;
i__11252 = G__11259;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11249);if(temp__4092__auto__)
{var seq__11249__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11249__$1))
{var c__8208__auto__ = cljs.core.chunk_first(seq__11249__$1);{
var G__11260 = cljs.core.chunk_rest(seq__11249__$1);
var G__11261 = c__8208__auto__;
var G__11262 = cljs.core.count(c__8208__auto__);
var G__11263 = 0;
seq__11249 = G__11260;
chunk__11250 = G__11261;
count__11251 = G__11262;
i__11252 = G__11263;
continue;
}
} else
{var vec__11254 = cljs.core.first(seq__11249__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11254,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11254,1,null);var k_11264__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11264__$1);
} else
{e.attr(k_11264__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11264__$1:v));
}
{
var G__11265 = cljs.core.next(seq__11249__$1);
var G__11266 = null;
var G__11267 = 0;
var G__11268 = 0;
seq__11249 = G__11265;
chunk__11250 = G__11266;
count__11251 = G__11267;
i__11252 = G__11268;
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
return (function (p1__11269_SHARP_){return cljs.core.zipmap(p1__11269_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));var seq__11270 = cljs.core.seq(clmap);var chunk__11271 = null;var count__11272 = 0;var i__11273 = 0;while(true){
if((i__11273 < count__11272))
{var vec__11274 = chunk__11271.cljs$core$IIndexed$_nth$arity$2(null,i__11273);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11274,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11274,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11276 = seq__11270;
var G__11277 = chunk__11271;
var G__11278 = count__11272;
var G__11279 = (i__11273 + 1);
seq__11270 = G__11276;
chunk__11271 = G__11277;
count__11272 = G__11278;
i__11273 = G__11279;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11270);if(temp__4092__auto__)
{var seq__11270__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11270__$1))
{var c__8208__auto__ = cljs.core.chunk_first(seq__11270__$1);{
var G__11280 = cljs.core.chunk_rest(seq__11270__$1);
var G__11281 = c__8208__auto__;
var G__11282 = cljs.core.count(c__8208__auto__);
var G__11283 = 0;
seq__11270 = G__11280;
chunk__11271 = G__11281;
count__11272 = G__11282;
i__11273 = G__11283;
continue;
}
} else
{var vec__11275 = cljs.core.first(seq__11270__$1);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11275,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11275,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11284 = cljs.core.next(seq__11270__$1);
var G__11285 = null;
var G__11286 = 0;
var G__11287 = 0;
seq__11270 = G__11284;
chunk__11271 = G__11285;
count__11272 = G__11286;
i__11273 = G__11287;
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
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$26,(function (elem,_,kvs){var e = jQuery(elem);var seq__11288 = cljs.core.seq(kvs);var chunk__11289 = null;var count__11290 = 0;var i__11291 = 0;while(true){
if((i__11291 < count__11290))
{var vec__11292 = chunk__11289.cljs$core$IIndexed$_nth$arity$2(null,i__11291);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11292,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11292,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11294 = seq__11288;
var G__11295 = chunk__11289;
var G__11296 = count__11290;
var G__11297 = (i__11291 + 1);
seq__11288 = G__11294;
chunk__11289 = G__11295;
count__11290 = G__11296;
i__11291 = G__11297;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11288);if(temp__4092__auto__)
{var seq__11288__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11288__$1))
{var c__8208__auto__ = cljs.core.chunk_first(seq__11288__$1);{
var G__11298 = cljs.core.chunk_rest(seq__11288__$1);
var G__11299 = c__8208__auto__;
var G__11300 = cljs.core.count(c__8208__auto__);
var G__11301 = 0;
seq__11288 = G__11298;
chunk__11289 = G__11299;
count__11290 = G__11300;
i__11291 = G__11301;
continue;
}
} else
{var vec__11293 = cljs.core.first(seq__11288__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11293,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11293,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11302 = cljs.core.next(seq__11288__$1);
var G__11303 = null;
var G__11304 = 0;
var G__11305 = 0;
seq__11288 = G__11302;
chunk__11289 = G__11303;
count__11290 = G__11304;
i__11291 = G__11305;
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__8318__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8319__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8320__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8321__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8322__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("on!",((function (method_table__8318__auto__,prefer_table__8319__auto__,method_cache__8320__auto__,cached_hierarchy__8321__auto__,hierarchy__8322__auto__){
return (function (elem,event,callback){return event;
});})(method_table__8318__auto__,prefer_table__8319__auto__,method_cache__8320__auto__,cached_hierarchy__8321__auto__,hierarchy__8322__auto__))
,cljs.core.constant$keyword$22,hierarchy__8322__auto__,method_table__8318__auto__,prefer_table__8319__auto__,method_cache__8320__auto__,cached_hierarchy__8321__auto__));
})();
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,event,callback){return tailrecursion.hoplon.when_dom(elem,(function (){return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(((function (pool_size){
return (function (G__11332,G__11331){return (G__11331.cljs$core$IFn$_invoke$arity$1 ? G__11331.cljs$core$IFn$_invoke$arity$1(G__11332) : G__11331.call(null,G__11332));
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift(((function (pool_size,items_seq){
return (function (G__11333,G__11334){return (G__11333.cljs$core$IFn$_invoke$arity$1 ? G__11333.cljs$core$IFn$_invoke$arity$1(G__11334) : G__11333.call(null,G__11334));
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__11306_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count){
return (function (G__11336,G__11335){return (G__11335 < G__11336);
});})(pool_size,items_seq,cur_count))
).call(null,cur_count,p1__11306_SHARP_);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__11307_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__11337,G__11339,G__11338){return (G__11337.cljs$core$IFn$_invoke$arity$2 ? G__11337.cljs$core$IFn$_invoke$arity$2(G__11338,G__11339) : G__11337.call(null,G__11338,G__11339));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__11307_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__11353,G__11351,G__11347,G__11348,G__11345,G__11349,G__11344,G__11346,G__11352,G__11350){if(cljs.core.truth_((G__11344 < G__11345)))
{var seq__11340_11354 = cljs.core.seq((G__11346.cljs$core$IFn$_invoke$arity$2 ? G__11346.cljs$core$IFn$_invoke$arity$2(G__11344,G__11345) : G__11346.call(null,G__11344,G__11345)));var chunk__11341_11355 = null;var count__11342_11356 = 0;var i__11343_11357 = 0;while(true){
if(cljs.core.truth_((i__11343_11357 < count__11342_11356)))
{var i_11358 = chunk__11341_11355.cljs$core$IIndexed$_nth$arity$2(null,i__11343_11357);var e_11359 = (G__11347.cljs$core$IFn$_invoke$arity$1 ? G__11347.cljs$core$IFn$_invoke$arity$1((G__11348.cljs$core$IFn$_invoke$arity$1 ? G__11348.cljs$core$IFn$_invoke$arity$1(i_11358) : G__11348.call(null,i_11358))) : G__11347.call(null,(G__11348.cljs$core$IFn$_invoke$arity$1 ? G__11348.cljs$core$IFn$_invoke$arity$1(i_11358) : G__11348.call(null,i_11358)))).call(null,cljs.core.constant$keyword$37,(G__11349.cljs$core$IFn$_invoke$arity$1 ? G__11349.cljs$core$IFn$_invoke$arity$1(i_11358) : G__11349.call(null,i_11358)));if(cljs.core.not(G__11350))
{G__11351.appendChild(e_11359);
} else
{G__11351.insertBefore(e_11359,G__11351.firstChild);
}
{
var G__11360 = seq__11340_11354;
var G__11361 = chunk__11341_11355;
var G__11362 = count__11342_11356;
var G__11363 = (i__11343_11357 + 1);
seq__11340_11354 = G__11360;
chunk__11341_11355 = G__11361;
count__11342_11356 = G__11362;
i__11343_11357 = G__11363;
continue;
}
} else
{var temp__4092__auto___11364 = cljs.core.seq(seq__11340_11354);if(temp__4092__auto___11364)
{var seq__11340_11365__$1 = temp__4092__auto___11364;if(cljs.core.chunked_seq_QMARK_(seq__11340_11365__$1))
{var c__8208__auto___11366 = cljs.core.chunk_first(seq__11340_11365__$1);{
var G__11367 = cljs.core.chunk_rest(seq__11340_11365__$1);
var G__11368 = c__8208__auto___11366;
var G__11369 = cljs.core.count(c__8208__auto___11366);
var G__11370 = 0;
seq__11340_11354 = G__11367;
chunk__11341_11355 = G__11368;
count__11342_11356 = G__11369;
i__11343_11357 = G__11370;
continue;
}
} else
{var i_11371 = cljs.core.first(seq__11340_11365__$1);var e_11372 = (G__11347.cljs$core$IFn$_invoke$arity$1 ? G__11347.cljs$core$IFn$_invoke$arity$1((G__11348.cljs$core$IFn$_invoke$arity$1 ? G__11348.cljs$core$IFn$_invoke$arity$1(i_11371) : G__11348.call(null,i_11371))) : G__11347.call(null,(G__11348.cljs$core$IFn$_invoke$arity$1 ? G__11348.cljs$core$IFn$_invoke$arity$1(i_11371) : G__11348.call(null,i_11371)))).call(null,cljs.core.constant$keyword$37,(G__11349.cljs$core$IFn$_invoke$arity$1 ? G__11349.cljs$core$IFn$_invoke$arity$1(i_11371) : G__11349.call(null,i_11371)));if(cljs.core.not(G__11350))
{G__11351.appendChild(e_11372);
} else
{G__11351.insertBefore(e_11372,G__11351.firstChild);
}
{
var G__11373 = cljs.core.next(seq__11340_11365__$1);
var G__11374 = null;
var G__11375 = 0;
var G__11376 = 0;
seq__11340_11354 = G__11373;
chunk__11341_11355 = G__11374;
count__11342_11356 = G__11375;
i__11343_11357 = G__11376;
continue;
}
}
} else
{}
}
break;
}
return (G__11352.cljs$core$IFn$_invoke$arity$2 ? G__11352.cljs$core$IFn$_invoke$arity$2(G__11353,G__11345) : G__11352.call(null,G__11353,G__11345));
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
var route_cell__0 = (function (){var r = (function (){var ret__8635__auto__ = tailrecursion.javelin.cell(window.location.hash);setInterval(((function (ret__8635__auto__){
return (function (){return cljs.core.reset_BANG_(ret__8635__auto__,window.location.hash);
});})(ret__8635__auto__))
,100);
return tailrecursion.javelin.lift(((function (ret__8635__auto__){
return (function (G__11386){return G__11386;
});})(ret__8635__auto__))
).call(null,ret__8635__auto__);
})();return tailrecursion.javelin.lift(((function (r){
return (function (G__11387,G__11388){if(cljs.core.truth_((G__11387.cljs$core$IFn$_invoke$arity$2 ? G__11387.cljs$core$IFn$_invoke$arity$2("",G__11388) : G__11387.call(null,"",G__11388))))
{return G__11388;
} else
{return null;
}
});})(r))
).call(null,cljs.core.not_EQ_,r);
});
var route_cell__1 = (function (setter_or_dfl){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl)))
{var setter__8636__auto__ = setter_or_dfl;var callback__8637__auto__ = (function (){var or__7452__auto__ = null;if(cljs.core.truth_(or__7452__auto__))
{return or__7452__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8636__auto__,callback__8637__auto__){
return (function (G__11390,G__11389){return G__11389.location.hash = G__11390;
});})(setter__8636__auto__,callback__8637__auto__))
).call(null,setter__8636__auto__,window);
setInterval(((function (setter__8636__auto__,callback__8637__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8636__auto__),window.location.hash))
{(callback__8637__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8637__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8637__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8636__auto__);
} else
{return null;
}
});})(setter__8636__auto__,callback__8637__auto__))
,100);
return setter__8636__auto__;
} else
{var r = route_cell.cljs$core$IFn$_invoke$arity$0();return tailrecursion.javelin.lift(((function (r){
return (function (G__11392,G__11391){var or__7452__auto__ = G__11391;if(cljs.core.truth_(or__7452__auto__))
{return or__7452__auto__;
} else
{return G__11392;
}
});})(r))
).call(null,setter_or_dfl,r);
}
});
var route_cell__2 = (function (setter,callback){var setter__8636__auto__ = setter;var callback__8637__auto__ = (function (){var or__7452__auto__ = callback;if(cljs.core.truth_(or__7452__auto__))
{return or__7452__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8636__auto__,callback__8637__auto__){
return (function (G__11394,G__11393){return G__11393.location.hash = G__11394;
});})(setter__8636__auto__,callback__8637__auto__))
).call(null,setter__8636__auto__,window);
setInterval(((function (setter__8636__auto__,callback__8637__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8636__auto__),window.location.hash))
{(callback__8637__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8637__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8637__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8636__auto__);
} else
{return null;
}
});})(setter__8636__auto__,callback__8637__auto__))
,100);
return setter__8636__auto__;
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
