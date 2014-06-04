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
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10976_SHARP_){return (p1__10976_SHARP_ instanceof Node);
}):(function (p1__10977_SHARP_){try{return p1__10977_SHARP_.nodeType;
}catch (e10978){if((e10978 instanceof Error))
{var _ = e10978;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10978;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__10979_SHARP_){try{return cljs.core.vector_QMARK_(p1__10979_SHARP_);
}catch (e10980){if((e10980 instanceof Error))
{var _ = e10980;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10980;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__10981_SHARP_){try{return cljs.core.seq_QMARK_(p1__10981_SHARP_);
}catch (e10982){if((e10982 instanceof Error))
{var _ = e10982;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10982;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_((function (p1__10983_SHARP_){if(cljs.core.truth_((function (){var and__7251__auto__ = console;if(cljs.core.truth_(and__7251__auto__))
{return console.log;
} else
{return and__7251__auto__;
}
})()))
{return console.log(p1__10983_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e10985){if((e10985 instanceof Error))
{var _ = e10985;return not_found;
} else
{if(cljs.core.constant$keyword$6)
{throw e10985;
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
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__10986_SHARP_){if(cljs.core.truth_((function (){var or__7263__auto__ = (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__10986_SHARP_) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__10986_SHARP_));if(cljs.core.truth_(or__7263__auto__))
{return or__7263__auto__;
} else
{return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__10986_SHARP_) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__10986_SHARP_));
}
})()))
{return unsplice(p1__10986_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10986_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function parse_args(p__10989){var vec__10991 = p__10989;var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10991,0,null);var tail = cljs.core.nthnext(vec__10991,1);var args = vec__10991;var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_,vec__10991,head,tail,args){
return (function (p1__10987_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,p1__10987_SHARP_)));
});})(kw1_QMARK_,vec__10991,head,tail,args))
;var drkw = ((function (kw1_QMARK_,mkkw,vec__10991,head,tail,args){
return (function (p1__10988_SHARP_){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.drop_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4(2,2,cljs.core.PersistentVector.EMPTY,p1__10988_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__10991,head,tail,args))
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
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__10993_SHARP_,p2__10992_SHARP_){var n = (function (){var s = cljs.core.name(p2__10992_SHARP_);var c = cljs.core.last(s);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c)))
{return s;
} else
{return s.slice(0,-1);
}
})();var p = n.substr(0,3);return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__10992_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__10993_SHARP_,p)))?n:n.substr(3)));
});var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");var dos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__10994_SHARP_,p2__10995_SHARP_){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__10994_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__10995_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__11018_11036 = cljs.core.seq(attr);var chunk__11019_11037 = null;var count__11020_11038 = 0;var i__11021_11039 = 0;while(true){
if((i__11021_11039 < count__11020_11038))
{var vec__11022_11040 = chunk__11019_11037.cljs$core$IIndexed$_nth$arity$2(null,i__11021_11039);var k_11041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11022_11040,0,null);var v_11042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11022_11040,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11042)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11041) : dokey.call(null,k_11041)),v_11042);
} else
{if(cljs.core.fn_QMARK_(v_11042))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11041) : onkey.call(null,k_11041)),v_11042);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11041) : dokey.call(null,k_11041)),v_11042) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11041) : dokey.call(null,k_11041)),v_11042));
} else
{}
}
}
{
var G__11043 = seq__11018_11036;
var G__11044 = chunk__11019_11037;
var G__11045 = count__11020_11038;
var G__11046 = (i__11021_11039 + 1);
seq__11018_11036 = G__11043;
chunk__11019_11037 = G__11044;
count__11020_11038 = G__11045;
i__11021_11039 = G__11046;
continue;
}
} else
{var temp__4092__auto___11047 = cljs.core.seq(seq__11018_11036);if(temp__4092__auto___11047)
{var seq__11018_11048__$1 = temp__4092__auto___11047;if(cljs.core.chunked_seq_QMARK_(seq__11018_11048__$1))
{var c__8019__auto___11049 = cljs.core.chunk_first(seq__11018_11048__$1);{
var G__11050 = cljs.core.chunk_rest(seq__11018_11048__$1);
var G__11051 = c__8019__auto___11049;
var G__11052 = cljs.core.count(c__8019__auto___11049);
var G__11053 = 0;
seq__11018_11036 = G__11050;
chunk__11019_11037 = G__11051;
count__11020_11038 = G__11052;
i__11021_11039 = G__11053;
continue;
}
} else
{var vec__11023_11054 = cljs.core.first(seq__11018_11048__$1);var k_11055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11023_11054,0,null);var v_11056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11023_11054,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11056)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11055) : dokey.call(null,k_11055)),v_11056);
} else
{if(cljs.core.fn_QMARK_(v_11056))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11055) : onkey.call(null,k_11055)),v_11056);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11055) : dokey.call(null,k_11055)),v_11056) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11055) : dokey.call(null,k_11055)),v_11056));
} else
{}
}
}
{
var G__11057 = cljs.core.next(seq__11018_11048__$1);
var G__11058 = null;
var G__11059 = 0;
var G__11060 = 0;
seq__11018_11036 = G__11057;
chunk__11019_11037 = G__11058;
count__11020_11038 = G__11059;
i__11021_11039 = G__11060;
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
return (function (){var seq__11024 = cljs.core.seq(cljs.core.deref(dos));var chunk__11025 = null;var count__11026 = 0;var i__11027 = 0;while(true){
if((i__11027 < count__11026))
{var vec__11028 = chunk__11025.cljs$core$IIndexed$_nth$arity$2(null,i__11027);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11028,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11028,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11024,chunk__11025,count__11026,i__11027,vec__11028,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__10997_SHARP_,p2__10998_SHARP_,p3__10999_SHARP_,p4__10996_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__10996_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__10996_SHARP_));
});})(seq__11024,chunk__11025,count__11026,i__11027,vec__11028,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11061 = seq__11024;
var G__11062 = chunk__11025;
var G__11063 = count__11026;
var G__11064 = (i__11027 + 1);
seq__11024 = G__11061;
chunk__11025 = G__11062;
count__11026 = G__11063;
i__11027 = G__11064;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11024);if(temp__4092__auto__)
{var seq__11024__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11024__$1))
{var c__8019__auto__ = cljs.core.chunk_first(seq__11024__$1);{
var G__11065 = cljs.core.chunk_rest(seq__11024__$1);
var G__11066 = c__8019__auto__;
var G__11067 = cljs.core.count(c__8019__auto__);
var G__11068 = 0;
seq__11024 = G__11065;
chunk__11025 = G__11066;
count__11026 = G__11067;
i__11027 = G__11068;
continue;
}
} else
{var vec__11029 = cljs.core.first(seq__11024__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11029,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11029,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11024,chunk__11025,count__11026,i__11027,vec__11029,k,v,seq__11024__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__10997_SHARP_,p2__10998_SHARP_,p3__10999_SHARP_,p4__10996_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__10996_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__10996_SHARP_));
});})(seq__11024,chunk__11025,count__11026,i__11027,vec__11029,k,v,seq__11024__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11069 = cljs.core.next(seq__11024__$1);
var G__11070 = null;
var G__11071 = 0;
var G__11072 = 0;
seq__11024 = G__11069;
chunk__11025 = G__11070;
count__11026 = G__11071;
i__11027 = G__11072;
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
return (function (){var seq__11030 = cljs.core.seq(cljs.core.deref(ons));var chunk__11031 = null;var count__11032 = 0;var i__11033 = 0;while(true){
if((i__11033 < count__11032))
{var vec__11034 = chunk__11031.cljs$core$IIndexed$_nth$arity$2(null,i__11033);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11034,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11034,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11073 = seq__11030;
var G__11074 = chunk__11031;
var G__11075 = count__11032;
var G__11076 = (i__11033 + 1);
seq__11030 = G__11073;
chunk__11031 = G__11074;
count__11032 = G__11075;
i__11033 = G__11076;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11030);if(temp__4092__auto__)
{var seq__11030__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11030__$1))
{var c__8019__auto__ = cljs.core.chunk_first(seq__11030__$1);{
var G__11077 = cljs.core.chunk_rest(seq__11030__$1);
var G__11078 = c__8019__auto__;
var G__11079 = cljs.core.count(c__8019__auto__);
var G__11080 = 0;
seq__11030 = G__11077;
chunk__11031 = G__11078;
count__11032 = G__11079;
i__11033 = G__11080;
continue;
}
} else
{var vec__11035 = cljs.core.first(seq__11030__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11035,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11035,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11081 = cljs.core.next(seq__11030__$1);
var G__11082 = null;
var G__11083 = 0;
var G__11084 = 0;
seq__11030 = G__11081;
chunk__11031 = G__11082;
count__11032 = G__11083;
i__11033 = G__11084;
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
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11085_SHARP_,p2__11086_SHARP_){return p1__11085_SHARP_.appendChild(p2__11086_SHARP_);
}):(function (p1__11087_SHARP_,p2__11088_SHARP_){try{return p1__11087_SHARP_.appendChild(p2__11088_SHARP_);
}catch (e11089){if((e11089 instanceof Error))
{var _ = e11089;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11089;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){jQuery(this$).empty();
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))) : tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__11095){var vec__11101 = p__11095;var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11101,0,null);var _ = cljs.core.nthnext(vec__11101,1);var kids = vec__11101;if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell)))
{tailrecursion.hoplon.replace_children_BANG_(this$,cljs.core.deref(child_cell));
cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__11101,child_cell,_,kids){
return (function (p1__11091_SHARP_,p2__11092_SHARP_,p3__11093_SHARP_,p4__11090_SHARP_){return tailrecursion.hoplon.replace_children_BANG_(this$,p4__11090_SHARP_);
});})(vec__11101,child_cell,_,kids))
);
} else
{var node_11106 = ((function (vec__11101,child_cell,_,kids){
return (function (p1__11094_SHARP_){if(typeof p1__11094_SHARP_ === 'string')
{return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__11094_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__11094_SHARP_));
} else
{if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__11094_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__11094_SHARP_))))
{return p1__11094_SHARP_;
} else
{return null;
}
}
});})(vec__11101,child_cell,_,kids))
;var seq__11102_11107 = cljs.core.seq(cljs.core.keep(node_11106,tailrecursion.hoplon.unsplice(kids)));var chunk__11103_11108 = null;var count__11104_11109 = 0;var i__11105_11110 = 0;while(true){
if((i__11105_11110 < count__11104_11109))
{var x_11111 = chunk__11103_11108.cljs$core$IIndexed$_nth$arity$2(null,i__11105_11110);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11111) : tailrecursion.hoplon.append_child.call(null,this$,x_11111));
{
var G__11112 = seq__11102_11107;
var G__11113 = chunk__11103_11108;
var G__11114 = count__11104_11109;
var G__11115 = (i__11105_11110 + 1);
seq__11102_11107 = G__11112;
chunk__11103_11108 = G__11113;
count__11104_11109 = G__11114;
i__11105_11110 = G__11115;
continue;
}
} else
{var temp__4092__auto___11116 = cljs.core.seq(seq__11102_11107);if(temp__4092__auto___11116)
{var seq__11102_11117__$1 = temp__4092__auto___11116;if(cljs.core.chunked_seq_QMARK_(seq__11102_11117__$1))
{var c__8019__auto___11118 = cljs.core.chunk_first(seq__11102_11117__$1);{
var G__11119 = cljs.core.chunk_rest(seq__11102_11117__$1);
var G__11120 = c__8019__auto___11118;
var G__11121 = cljs.core.count(c__8019__auto___11118);
var G__11122 = 0;
seq__11102_11107 = G__11119;
chunk__11103_11108 = G__11120;
count__11104_11109 = G__11121;
i__11105_11110 = G__11122;
continue;
}
} else
{var x_11123 = cljs.core.first(seq__11102_11117__$1);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11123) : tailrecursion.hoplon.append_child.call(null,this$,x_11123));
{
var G__11124 = cljs.core.next(seq__11102_11117__$1);
var G__11125 = null;
var G__11126 = 0;
var G__11127 = 0;
seq__11102_11107 = G__11124;
chunk__11103_11108 = G__11125;
count__11104_11109 = G__11126;
i__11105_11110 = G__11127;
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
var G__11135__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__11129 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11129,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11129,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11130 = this$;G__11130.hoplonIFn(attr,kids);
return G__11130;
} else
{var G__11131 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11131,attr);
tailrecursion.hoplon.add_children_BANG_(G__11131,kids);
return G__11131;
}
};
var G__11135 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11135__delegate.call(this,self__,args);};
G__11135.cljs$lang$maxFixedArity = 1;
G__11135.cljs$lang$applyTo = (function (arglist__11136){
var self__ = cljs.core.first(arglist__11136);
var args = cljs.core.rest(arglist__11136);
return G__11135__delegate(self__,args);
});
G__11135.cljs$core$IFn$_invoke$arity$variadic = G__11135__delegate;
return G__11135;
})()
;
Element.prototype.apply = (function (self__,args11128){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11128)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11137__delegate = function (args){var this$ = this;var vec__11132 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11132,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11132,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11133 = this$;G__11133.hoplonIFn(attr,kids);
return G__11133;
} else
{var G__11134 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11134,attr);
tailrecursion.hoplon.add_children_BANG_(G__11134,kids);
return G__11134;
}
};
var G__11137 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11137__delegate.call(this,args);};
G__11137.cljs$lang$maxFixedArity = 0;
G__11137.cljs$lang$applyTo = (function (arglist__11138){
var args = cljs.core.seq(arglist__11138);
return G__11137__delegate(args);
});
G__11137.cljs$core$IFn$_invoke$arity$variadic = G__11137__delegate;
return G__11137;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__11139__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new$,args);
};
var G__11139 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11139__delegate.call(this,args);};
G__11139.cljs$lang$maxFixedArity = 0;
G__11139.cljs$lang$applyTo = (function (arglist__11140){
var args = cljs.core.seq(arglist__11140);
return G__11139__delegate(args);
});
G__11139.cljs$core$IFn$_invoke$arity$variadic = G__11139__delegate;
return G__11139;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__11141__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__11141 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11141__delegate.call(this,args);};
G__11141.cljs$lang$maxFixedArity = 0;
G__11141.cljs$lang$applyTo = (function (arglist__11142){
var args = cljs.core.seq(arglist__11142);
return G__11141__delegate(args);
});
G__11141.cljs$core$IFn$_invoke$arity$variadic = G__11141__delegate;
return G__11141;
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
tailrecursion.hoplon.$text = (function $text(p1__11143_SHARP_){return document.createTextNode(p1__11143_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__11144_SHARP_){return document.createComment(p1__11144_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.initialized_QMARK_)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__11145_SHARP_){return p1__11145_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_(tailrecursion.hoplon.initialized_QMARK_,true);
var seq__11150 = cljs.core.seq(cljs.core.deref(tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__11151 = null;var count__11152 = 0;var i__11153 = 0;while(true){
if((i__11153 < count__11152))
{var f = chunk__11151.cljs$core$IIndexed$_nth$arity$2(null,i__11153);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11154 = seq__11150;
var G__11155 = chunk__11151;
var G__11156 = count__11152;
var G__11157 = (i__11153 + 1);
seq__11150 = G__11154;
chunk__11151 = G__11155;
count__11152 = G__11156;
i__11153 = G__11157;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11150);if(temp__4092__auto__)
{var seq__11150__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11150__$1))
{var c__8019__auto__ = cljs.core.chunk_first(seq__11150__$1);{
var G__11158 = cljs.core.chunk_rest(seq__11150__$1);
var G__11159 = c__8019__auto__;
var G__11160 = cljs.core.count(c__8019__auto__);
var G__11161 = 0;
seq__11150 = G__11158;
chunk__11151 = G__11159;
count__11152 = G__11160;
i__11153 = G__11161;
continue;
}
} else
{var f = cljs.core.first(seq__11150__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11162 = cljs.core.next(seq__11150__$1);
var G__11163 = null;
var G__11164 = 0;
var G__11165 = 0;
seq__11150 = G__11162;
chunk__11151 = G__11163;
count__11152 = G__11164;
i__11153 = G__11165;
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__8129__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8130__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8131__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8133__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("do!",((function (method_table__8129__auto__,prefer_table__8130__auto__,method_cache__8131__auto__,cached_hierarchy__8132__auto__,hierarchy__8133__auto__){
return (function (elem,key,val){return key;
});})(method_table__8129__auto__,prefer_table__8130__auto__,method_cache__8131__auto__,cached_hierarchy__8132__auto__,hierarchy__8133__auto__))
,cljs.core.constant$keyword$22,hierarchy__8133__auto__,method_table__8129__auto__,prefer_table__8130__auto__,method_cache__8131__auto__,cached_hierarchy__8132__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,key,val){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$11,(function() { 
var G__11166__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__11166 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11166__delegate.call(this,elem,_,args);};
G__11166.cljs$lang$maxFixedArity = 2;
G__11166.cljs$lang$applyTo = (function (arglist__11167){
var elem = cljs.core.first(arglist__11167);
arglist__11167 = cljs.core.next(arglist__11167);
var _ = cljs.core.first(arglist__11167);
var args = cljs.core.rest(arglist__11167);
return G__11166__delegate(elem,_,args);
});
G__11166.cljs$core$IFn$_invoke$arity$variadic = G__11166__delegate;
return G__11166;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$24,(function (elem,_,kvs){var e = jQuery(elem);var seq__11168 = cljs.core.seq(kvs);var chunk__11169 = null;var count__11170 = 0;var i__11171 = 0;while(true){
if((i__11171 < count__11170))
{var vec__11172 = chunk__11169.cljs$core$IIndexed$_nth$arity$2(null,i__11171);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11172,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11172,1,null);var k_11174__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11174__$1);
} else
{e.attr(k_11174__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11174__$1:v));
}
{
var G__11175 = seq__11168;
var G__11176 = chunk__11169;
var G__11177 = count__11170;
var G__11178 = (i__11171 + 1);
seq__11168 = G__11175;
chunk__11169 = G__11176;
count__11170 = G__11177;
i__11171 = G__11178;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11168);if(temp__4092__auto__)
{var seq__11168__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11168__$1))
{var c__8019__auto__ = cljs.core.chunk_first(seq__11168__$1);{
var G__11179 = cljs.core.chunk_rest(seq__11168__$1);
var G__11180 = c__8019__auto__;
var G__11181 = cljs.core.count(c__8019__auto__);
var G__11182 = 0;
seq__11168 = G__11179;
chunk__11169 = G__11180;
count__11170 = G__11181;
i__11171 = G__11182;
continue;
}
} else
{var vec__11173 = cljs.core.first(seq__11168__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11173,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11173,1,null);var k_11183__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11183__$1);
} else
{e.attr(k_11183__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11183__$1:v));
}
{
var G__11184 = cljs.core.next(seq__11168__$1);
var G__11185 = null;
var G__11186 = 0;
var G__11187 = 0;
seq__11168 = G__11184;
chunk__11169 = G__11185;
count__11170 = G__11186;
i__11171 = G__11187;
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
return (function (p1__11188_SHARP_){return cljs.core.zipmap(p1__11188_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));var seq__11189 = cljs.core.seq(clmap);var chunk__11190 = null;var count__11191 = 0;var i__11192 = 0;while(true){
if((i__11192 < count__11191))
{var vec__11193 = chunk__11190.cljs$core$IIndexed$_nth$arity$2(null,i__11192);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11193,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11193,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11195 = seq__11189;
var G__11196 = chunk__11190;
var G__11197 = count__11191;
var G__11198 = (i__11192 + 1);
seq__11189 = G__11195;
chunk__11190 = G__11196;
count__11191 = G__11197;
i__11192 = G__11198;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11189);if(temp__4092__auto__)
{var seq__11189__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11189__$1))
{var c__8019__auto__ = cljs.core.chunk_first(seq__11189__$1);{
var G__11199 = cljs.core.chunk_rest(seq__11189__$1);
var G__11200 = c__8019__auto__;
var G__11201 = cljs.core.count(c__8019__auto__);
var G__11202 = 0;
seq__11189 = G__11199;
chunk__11190 = G__11200;
count__11191 = G__11201;
i__11192 = G__11202;
continue;
}
} else
{var vec__11194 = cljs.core.first(seq__11189__$1);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11194,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11194,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11203 = cljs.core.next(seq__11189__$1);
var G__11204 = null;
var G__11205 = 0;
var G__11206 = 0;
seq__11189 = G__11203;
chunk__11190 = G__11204;
count__11191 = G__11205;
i__11192 = G__11206;
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
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$26,(function (elem,_,kvs){var e = jQuery(elem);var seq__11207 = cljs.core.seq(kvs);var chunk__11208 = null;var count__11209 = 0;var i__11210 = 0;while(true){
if((i__11210 < count__11209))
{var vec__11211 = chunk__11208.cljs$core$IIndexed$_nth$arity$2(null,i__11210);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11211,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11211,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11213 = seq__11207;
var G__11214 = chunk__11208;
var G__11215 = count__11209;
var G__11216 = (i__11210 + 1);
seq__11207 = G__11213;
chunk__11208 = G__11214;
count__11209 = G__11215;
i__11210 = G__11216;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11207);if(temp__4092__auto__)
{var seq__11207__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11207__$1))
{var c__8019__auto__ = cljs.core.chunk_first(seq__11207__$1);{
var G__11217 = cljs.core.chunk_rest(seq__11207__$1);
var G__11218 = c__8019__auto__;
var G__11219 = cljs.core.count(c__8019__auto__);
var G__11220 = 0;
seq__11207 = G__11217;
chunk__11208 = G__11218;
count__11209 = G__11219;
i__11210 = G__11220;
continue;
}
} else
{var vec__11212 = cljs.core.first(seq__11207__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11212,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11212,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11221 = cljs.core.next(seq__11207__$1);
var G__11222 = null;
var G__11223 = 0;
var G__11224 = 0;
seq__11207 = G__11221;
chunk__11208 = G__11222;
count__11209 = G__11223;
i__11210 = G__11224;
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__8129__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8130__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8131__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8133__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("on!",((function (method_table__8129__auto__,prefer_table__8130__auto__,method_cache__8131__auto__,cached_hierarchy__8132__auto__,hierarchy__8133__auto__){
return (function (elem,event,callback){return event;
});})(method_table__8129__auto__,prefer_table__8130__auto__,method_cache__8131__auto__,cached_hierarchy__8132__auto__,hierarchy__8133__auto__))
,cljs.core.constant$keyword$22,hierarchy__8133__auto__,method_table__8129__auto__,prefer_table__8130__auto__,method_cache__8131__auto__,cached_hierarchy__8132__auto__));
})();
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,event,callback){return tailrecursion.hoplon.when_dom(elem,(function (){return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(((function (pool_size){
return (function (G__11251,G__11250){return (G__11250.cljs$core$IFn$_invoke$arity$1 ? G__11250.cljs$core$IFn$_invoke$arity$1(G__11251) : G__11250.call(null,G__11251));
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift(((function (pool_size,items_seq){
return (function (G__11252,G__11253){return (G__11252.cljs$core$IFn$_invoke$arity$1 ? G__11252.cljs$core$IFn$_invoke$arity$1(G__11253) : G__11252.call(null,G__11253));
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__11225_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count){
return (function (G__11255,G__11254){return (G__11254 < G__11255);
});})(pool_size,items_seq,cur_count))
).call(null,cur_count,p1__11225_SHARP_);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__11226_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__11256,G__11258,G__11257){return (G__11256.cljs$core$IFn$_invoke$arity$2 ? G__11256.cljs$core$IFn$_invoke$arity$2(G__11257,G__11258) : G__11256.call(null,G__11257,G__11258));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__11226_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__11272,G__11270,G__11266,G__11267,G__11264,G__11268,G__11263,G__11265,G__11271,G__11269){if(cljs.core.truth_((G__11263 < G__11264)))
{var seq__11259_11273 = cljs.core.seq((G__11265.cljs$core$IFn$_invoke$arity$2 ? G__11265.cljs$core$IFn$_invoke$arity$2(G__11263,G__11264) : G__11265.call(null,G__11263,G__11264)));var chunk__11260_11274 = null;var count__11261_11275 = 0;var i__11262_11276 = 0;while(true){
if(cljs.core.truth_((i__11262_11276 < count__11261_11275)))
{var i_11277 = chunk__11260_11274.cljs$core$IIndexed$_nth$arity$2(null,i__11262_11276);var e_11278 = (G__11266.cljs$core$IFn$_invoke$arity$1 ? G__11266.cljs$core$IFn$_invoke$arity$1((G__11267.cljs$core$IFn$_invoke$arity$1 ? G__11267.cljs$core$IFn$_invoke$arity$1(i_11277) : G__11267.call(null,i_11277))) : G__11266.call(null,(G__11267.cljs$core$IFn$_invoke$arity$1 ? G__11267.cljs$core$IFn$_invoke$arity$1(i_11277) : G__11267.call(null,i_11277)))).call(null,cljs.core.constant$keyword$37,(G__11268.cljs$core$IFn$_invoke$arity$1 ? G__11268.cljs$core$IFn$_invoke$arity$1(i_11277) : G__11268.call(null,i_11277)));if(cljs.core.not(G__11269))
{G__11270.appendChild(e_11278);
} else
{G__11270.insertBefore(e_11278,G__11270.firstChild);
}
{
var G__11279 = seq__11259_11273;
var G__11280 = chunk__11260_11274;
var G__11281 = count__11261_11275;
var G__11282 = (i__11262_11276 + 1);
seq__11259_11273 = G__11279;
chunk__11260_11274 = G__11280;
count__11261_11275 = G__11281;
i__11262_11276 = G__11282;
continue;
}
} else
{var temp__4092__auto___11283 = cljs.core.seq(seq__11259_11273);if(temp__4092__auto___11283)
{var seq__11259_11284__$1 = temp__4092__auto___11283;if(cljs.core.chunked_seq_QMARK_(seq__11259_11284__$1))
{var c__8019__auto___11285 = cljs.core.chunk_first(seq__11259_11284__$1);{
var G__11286 = cljs.core.chunk_rest(seq__11259_11284__$1);
var G__11287 = c__8019__auto___11285;
var G__11288 = cljs.core.count(c__8019__auto___11285);
var G__11289 = 0;
seq__11259_11273 = G__11286;
chunk__11260_11274 = G__11287;
count__11261_11275 = G__11288;
i__11262_11276 = G__11289;
continue;
}
} else
{var i_11290 = cljs.core.first(seq__11259_11284__$1);var e_11291 = (G__11266.cljs$core$IFn$_invoke$arity$1 ? G__11266.cljs$core$IFn$_invoke$arity$1((G__11267.cljs$core$IFn$_invoke$arity$1 ? G__11267.cljs$core$IFn$_invoke$arity$1(i_11290) : G__11267.call(null,i_11290))) : G__11266.call(null,(G__11267.cljs$core$IFn$_invoke$arity$1 ? G__11267.cljs$core$IFn$_invoke$arity$1(i_11290) : G__11267.call(null,i_11290)))).call(null,cljs.core.constant$keyword$37,(G__11268.cljs$core$IFn$_invoke$arity$1 ? G__11268.cljs$core$IFn$_invoke$arity$1(i_11290) : G__11268.call(null,i_11290)));if(cljs.core.not(G__11269))
{G__11270.appendChild(e_11291);
} else
{G__11270.insertBefore(e_11291,G__11270.firstChild);
}
{
var G__11292 = cljs.core.next(seq__11259_11284__$1);
var G__11293 = null;
var G__11294 = 0;
var G__11295 = 0;
seq__11259_11273 = G__11292;
chunk__11260_11274 = G__11293;
count__11261_11275 = G__11294;
i__11262_11276 = G__11295;
continue;
}
}
} else
{}
}
break;
}
return (G__11271.cljs$core$IFn$_invoke$arity$2 ? G__11271.cljs$core$IFn$_invoke$arity$2(G__11272,G__11264) : G__11271.call(null,G__11272,G__11264));
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
var route_cell__0 = (function (){var r = (function (){var ret__8446__auto__ = tailrecursion.javelin.cell(window.location.hash);setInterval(((function (ret__8446__auto__){
return (function (){return cljs.core.reset_BANG_(ret__8446__auto__,window.location.hash);
});})(ret__8446__auto__))
,100);
return tailrecursion.javelin.lift(((function (ret__8446__auto__){
return (function (G__11305){return G__11305;
});})(ret__8446__auto__))
).call(null,ret__8446__auto__);
})();return tailrecursion.javelin.lift(((function (r){
return (function (G__11306,G__11307){if(cljs.core.truth_((G__11306.cljs$core$IFn$_invoke$arity$2 ? G__11306.cljs$core$IFn$_invoke$arity$2("",G__11307) : G__11306.call(null,"",G__11307))))
{return G__11307;
} else
{return null;
}
});})(r))
).call(null,cljs.core.not_EQ_,r);
});
var route_cell__1 = (function (setter_or_dfl){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl)))
{var setter__8447__auto__ = setter_or_dfl;var callback__8448__auto__ = (function (){var or__7263__auto__ = null;if(cljs.core.truth_(or__7263__auto__))
{return or__7263__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8447__auto__,callback__8448__auto__){
return (function (G__11309,G__11308){return G__11308.location.hash = G__11309;
});})(setter__8447__auto__,callback__8448__auto__))
).call(null,setter__8447__auto__,window);
setInterval(((function (setter__8447__auto__,callback__8448__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8447__auto__),window.location.hash))
{(callback__8448__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8448__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8448__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8447__auto__);
} else
{return null;
}
});})(setter__8447__auto__,callback__8448__auto__))
,100);
return setter__8447__auto__;
} else
{var r = route_cell.cljs$core$IFn$_invoke$arity$0();return tailrecursion.javelin.lift(((function (r){
return (function (G__11311,G__11310){var or__7263__auto__ = G__11310;if(cljs.core.truth_(or__7263__auto__))
{return or__7263__auto__;
} else
{return G__11311;
}
});})(r))
).call(null,setter_or_dfl,r);
}
});
var route_cell__2 = (function (setter,callback){var setter__8447__auto__ = setter;var callback__8448__auto__ = (function (){var or__7263__auto__ = callback;if(cljs.core.truth_(or__7263__auto__))
{return or__7263__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8447__auto__,callback__8448__auto__){
return (function (G__11313,G__11312){return G__11312.location.hash = G__11313;
});})(setter__8447__auto__,callback__8448__auto__))
).call(null,setter__8447__auto__,window);
setInterval(((function (setter__8447__auto__,callback__8448__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8447__auto__),window.location.hash))
{(callback__8448__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8448__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8448__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8447__auto__);
} else
{return null;
}
});})(setter__8447__auto__,callback__8448__auto__))
,100);
return setter__8447__auto__;
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
