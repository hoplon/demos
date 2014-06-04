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
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10987_SHARP_){return (p1__10987_SHARP_ instanceof Node);
}):(function (p1__10988_SHARP_){try{return p1__10988_SHARP_.nodeType;
}catch (e10989){if((e10989 instanceof Error))
{var _ = e10989;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10989;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__10990_SHARP_){try{return cljs.core.vector_QMARK_(p1__10990_SHARP_);
}catch (e10991){if((e10991 instanceof Error))
{var _ = e10991;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10991;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__10992_SHARP_){try{return cljs.core.seq_QMARK_(p1__10992_SHARP_);
}catch (e10993){if((e10993 instanceof Error))
{var _ = e10993;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10993;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_((function (p1__10994_SHARP_){if(cljs.core.truth_((function (){var and__7438__auto__ = console;if(cljs.core.truth_(and__7438__auto__))
{return console.log;
} else
{return and__7438__auto__;
}
})()))
{return console.log(p1__10994_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e10996){if((e10996 instanceof Error))
{var _ = e10996;return not_found;
} else
{if(cljs.core.constant$keyword$6)
{throw e10996;
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
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__10997_SHARP_){if(cljs.core.truth_((function (){var or__7450__auto__ = (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__10997_SHARP_) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__10997_SHARP_));if(cljs.core.truth_(or__7450__auto__))
{return or__7450__auto__;
} else
{return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__10997_SHARP_) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__10997_SHARP_));
}
})()))
{return unsplice(p1__10997_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10997_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function parse_args(p__11000){var vec__11002 = p__11000;var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11002,0,null);var tail = cljs.core.nthnext(vec__11002,1);var args = vec__11002;var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_,vec__11002,head,tail,args){
return (function (p1__10998_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,p1__10998_SHARP_)));
});})(kw1_QMARK_,vec__11002,head,tail,args))
;var drkw = ((function (kw1_QMARK_,mkkw,vec__11002,head,tail,args){
return (function (p1__10999_SHARP_){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.drop_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4(2,2,cljs.core.PersistentVector.EMPTY,p1__10999_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__11002,head,tail,args))
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
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__11004_SHARP_,p2__11003_SHARP_){var n = (function (){var s = cljs.core.name(p2__11003_SHARP_);var c = cljs.core.last(s);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c)))
{return s;
} else
{return s.slice(0,-1);
}
})();var p = n.substr(0,3);return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__11003_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11004_SHARP_,p)))?n:n.substr(3)));
});var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");var dos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__11005_SHARP_,p2__11006_SHARP_){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11005_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__11006_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__11029_11047 = cljs.core.seq(attr);var chunk__11030_11048 = null;var count__11031_11049 = 0;var i__11032_11050 = 0;while(true){
if((i__11032_11050 < count__11031_11049))
{var vec__11033_11051 = chunk__11030_11048.cljs$core$IIndexed$_nth$arity$2(null,i__11032_11050);var k_11052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11033_11051,0,null);var v_11053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11033_11051,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11053)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11052) : dokey.call(null,k_11052)),v_11053);
} else
{if(cljs.core.fn_QMARK_(v_11053))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11052) : onkey.call(null,k_11052)),v_11053);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11052) : dokey.call(null,k_11052)),v_11053) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11052) : dokey.call(null,k_11052)),v_11053));
} else
{}
}
}
{
var G__11054 = seq__11029_11047;
var G__11055 = chunk__11030_11048;
var G__11056 = count__11031_11049;
var G__11057 = (i__11032_11050 + 1);
seq__11029_11047 = G__11054;
chunk__11030_11048 = G__11055;
count__11031_11049 = G__11056;
i__11032_11050 = G__11057;
continue;
}
} else
{var temp__4092__auto___11058 = cljs.core.seq(seq__11029_11047);if(temp__4092__auto___11058)
{var seq__11029_11059__$1 = temp__4092__auto___11058;if(cljs.core.chunked_seq_QMARK_(seq__11029_11059__$1))
{var c__8206__auto___11060 = cljs.core.chunk_first(seq__11029_11059__$1);{
var G__11061 = cljs.core.chunk_rest(seq__11029_11059__$1);
var G__11062 = c__8206__auto___11060;
var G__11063 = cljs.core.count(c__8206__auto___11060);
var G__11064 = 0;
seq__11029_11047 = G__11061;
chunk__11030_11048 = G__11062;
count__11031_11049 = G__11063;
i__11032_11050 = G__11064;
continue;
}
} else
{var vec__11034_11065 = cljs.core.first(seq__11029_11059__$1);var k_11066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11034_11065,0,null);var v_11067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11034_11065,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11067)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11066) : dokey.call(null,k_11066)),v_11067);
} else
{if(cljs.core.fn_QMARK_(v_11067))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11066) : onkey.call(null,k_11066)),v_11067);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11066) : dokey.call(null,k_11066)),v_11067) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11066) : dokey.call(null,k_11066)),v_11067));
} else
{}
}
}
{
var G__11068 = cljs.core.next(seq__11029_11059__$1);
var G__11069 = null;
var G__11070 = 0;
var G__11071 = 0;
seq__11029_11047 = G__11068;
chunk__11030_11048 = G__11069;
count__11031_11049 = G__11070;
i__11032_11050 = G__11071;
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
return (function (){var seq__11035 = cljs.core.seq(cljs.core.deref(dos));var chunk__11036 = null;var count__11037 = 0;var i__11038 = 0;while(true){
if((i__11038 < count__11037))
{var vec__11039 = chunk__11036.cljs$core$IIndexed$_nth$arity$2(null,i__11038);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11039,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11039,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11035,chunk__11036,count__11037,i__11038,vec__11039,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11008_SHARP_,p2__11009_SHARP_,p3__11010_SHARP_,p4__11007_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11007_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11007_SHARP_));
});})(seq__11035,chunk__11036,count__11037,i__11038,vec__11039,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11072 = seq__11035;
var G__11073 = chunk__11036;
var G__11074 = count__11037;
var G__11075 = (i__11038 + 1);
seq__11035 = G__11072;
chunk__11036 = G__11073;
count__11037 = G__11074;
i__11038 = G__11075;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11035);if(temp__4092__auto__)
{var seq__11035__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11035__$1))
{var c__8206__auto__ = cljs.core.chunk_first(seq__11035__$1);{
var G__11076 = cljs.core.chunk_rest(seq__11035__$1);
var G__11077 = c__8206__auto__;
var G__11078 = cljs.core.count(c__8206__auto__);
var G__11079 = 0;
seq__11035 = G__11076;
chunk__11036 = G__11077;
count__11037 = G__11078;
i__11038 = G__11079;
continue;
}
} else
{var vec__11040 = cljs.core.first(seq__11035__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11040,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11040,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11035,chunk__11036,count__11037,i__11038,vec__11040,k,v,seq__11035__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11008_SHARP_,p2__11009_SHARP_,p3__11010_SHARP_,p4__11007_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11007_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11007_SHARP_));
});})(seq__11035,chunk__11036,count__11037,i__11038,vec__11040,k,v,seq__11035__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11080 = cljs.core.next(seq__11035__$1);
var G__11081 = null;
var G__11082 = 0;
var G__11083 = 0;
seq__11035 = G__11080;
chunk__11036 = G__11081;
count__11037 = G__11082;
i__11038 = G__11083;
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
return (function (){var seq__11041 = cljs.core.seq(cljs.core.deref(ons));var chunk__11042 = null;var count__11043 = 0;var i__11044 = 0;while(true){
if((i__11044 < count__11043))
{var vec__11045 = chunk__11042.cljs$core$IIndexed$_nth$arity$2(null,i__11044);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11045,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11045,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11084 = seq__11041;
var G__11085 = chunk__11042;
var G__11086 = count__11043;
var G__11087 = (i__11044 + 1);
seq__11041 = G__11084;
chunk__11042 = G__11085;
count__11043 = G__11086;
i__11044 = G__11087;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11041);if(temp__4092__auto__)
{var seq__11041__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11041__$1))
{var c__8206__auto__ = cljs.core.chunk_first(seq__11041__$1);{
var G__11088 = cljs.core.chunk_rest(seq__11041__$1);
var G__11089 = c__8206__auto__;
var G__11090 = cljs.core.count(c__8206__auto__);
var G__11091 = 0;
seq__11041 = G__11088;
chunk__11042 = G__11089;
count__11043 = G__11090;
i__11044 = G__11091;
continue;
}
} else
{var vec__11046 = cljs.core.first(seq__11041__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11046,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11046,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11092 = cljs.core.next(seq__11041__$1);
var G__11093 = null;
var G__11094 = 0;
var G__11095 = 0;
seq__11041 = G__11092;
chunk__11042 = G__11093;
count__11043 = G__11094;
i__11044 = G__11095;
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
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11096_SHARP_,p2__11097_SHARP_){return p1__11096_SHARP_.appendChild(p2__11097_SHARP_);
}):(function (p1__11098_SHARP_,p2__11099_SHARP_){try{return p1__11098_SHARP_.appendChild(p2__11099_SHARP_);
}catch (e11100){if((e11100 instanceof Error))
{var _ = e11100;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11100;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){jQuery(this$).empty();
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))) : tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__11106){var vec__11112 = p__11106;var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11112,0,null);var _ = cljs.core.nthnext(vec__11112,1);var kids = vec__11112;if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell)))
{tailrecursion.hoplon.replace_children_BANG_(this$,cljs.core.deref(child_cell));
cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__11112,child_cell,_,kids){
return (function (p1__11102_SHARP_,p2__11103_SHARP_,p3__11104_SHARP_,p4__11101_SHARP_){return tailrecursion.hoplon.replace_children_BANG_(this$,p4__11101_SHARP_);
});})(vec__11112,child_cell,_,kids))
);
} else
{var node_11117 = ((function (vec__11112,child_cell,_,kids){
return (function (p1__11105_SHARP_){if(typeof p1__11105_SHARP_ === 'string')
{return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__11105_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__11105_SHARP_));
} else
{if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__11105_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__11105_SHARP_))))
{return p1__11105_SHARP_;
} else
{return null;
}
}
});})(vec__11112,child_cell,_,kids))
;var seq__11113_11118 = cljs.core.seq(cljs.core.keep(node_11117,tailrecursion.hoplon.unsplice(kids)));var chunk__11114_11119 = null;var count__11115_11120 = 0;var i__11116_11121 = 0;while(true){
if((i__11116_11121 < count__11115_11120))
{var x_11122 = chunk__11114_11119.cljs$core$IIndexed$_nth$arity$2(null,i__11116_11121);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11122) : tailrecursion.hoplon.append_child.call(null,this$,x_11122));
{
var G__11123 = seq__11113_11118;
var G__11124 = chunk__11114_11119;
var G__11125 = count__11115_11120;
var G__11126 = (i__11116_11121 + 1);
seq__11113_11118 = G__11123;
chunk__11114_11119 = G__11124;
count__11115_11120 = G__11125;
i__11116_11121 = G__11126;
continue;
}
} else
{var temp__4092__auto___11127 = cljs.core.seq(seq__11113_11118);if(temp__4092__auto___11127)
{var seq__11113_11128__$1 = temp__4092__auto___11127;if(cljs.core.chunked_seq_QMARK_(seq__11113_11128__$1))
{var c__8206__auto___11129 = cljs.core.chunk_first(seq__11113_11128__$1);{
var G__11130 = cljs.core.chunk_rest(seq__11113_11128__$1);
var G__11131 = c__8206__auto___11129;
var G__11132 = cljs.core.count(c__8206__auto___11129);
var G__11133 = 0;
seq__11113_11118 = G__11130;
chunk__11114_11119 = G__11131;
count__11115_11120 = G__11132;
i__11116_11121 = G__11133;
continue;
}
} else
{var x_11134 = cljs.core.first(seq__11113_11128__$1);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11134) : tailrecursion.hoplon.append_child.call(null,this$,x_11134));
{
var G__11135 = cljs.core.next(seq__11113_11128__$1);
var G__11136 = null;
var G__11137 = 0;
var G__11138 = 0;
seq__11113_11118 = G__11135;
chunk__11114_11119 = G__11136;
count__11115_11120 = G__11137;
i__11116_11121 = G__11138;
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
var G__11146__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__11140 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11140,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11140,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11141 = this$;G__11141.hoplonIFn(attr,kids);
return G__11141;
} else
{var G__11142 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11142,attr);
tailrecursion.hoplon.add_children_BANG_(G__11142,kids);
return G__11142;
}
};
var G__11146 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11146__delegate.call(this,self__,args);};
G__11146.cljs$lang$maxFixedArity = 1;
G__11146.cljs$lang$applyTo = (function (arglist__11147){
var self__ = cljs.core.first(arglist__11147);
var args = cljs.core.rest(arglist__11147);
return G__11146__delegate(self__,args);
});
G__11146.cljs$core$IFn$_invoke$arity$variadic = G__11146__delegate;
return G__11146;
})()
;
Element.prototype.apply = (function (self__,args11139){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11139)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11148__delegate = function (args){var this$ = this;var vec__11143 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11143,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11143,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11144 = this$;G__11144.hoplonIFn(attr,kids);
return G__11144;
} else
{var G__11145 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11145,attr);
tailrecursion.hoplon.add_children_BANG_(G__11145,kids);
return G__11145;
}
};
var G__11148 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11148__delegate.call(this,args);};
G__11148.cljs$lang$maxFixedArity = 0;
G__11148.cljs$lang$applyTo = (function (arglist__11149){
var args = cljs.core.seq(arglist__11149);
return G__11148__delegate(args);
});
G__11148.cljs$core$IFn$_invoke$arity$variadic = G__11148__delegate;
return G__11148;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__11150__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new$,args);
};
var G__11150 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11150__delegate.call(this,args);};
G__11150.cljs$lang$maxFixedArity = 0;
G__11150.cljs$lang$applyTo = (function (arglist__11151){
var args = cljs.core.seq(arglist__11151);
return G__11150__delegate(args);
});
G__11150.cljs$core$IFn$_invoke$arity$variadic = G__11150__delegate;
return G__11150;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__11152__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__11152 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11152__delegate.call(this,args);};
G__11152.cljs$lang$maxFixedArity = 0;
G__11152.cljs$lang$applyTo = (function (arglist__11153){
var args = cljs.core.seq(arglist__11153);
return G__11152__delegate(args);
});
G__11152.cljs$core$IFn$_invoke$arity$variadic = G__11152__delegate;
return G__11152;
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
tailrecursion.hoplon.$text = (function $text(p1__11154_SHARP_){return document.createTextNode(p1__11154_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__11155_SHARP_){return document.createComment(p1__11155_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.initialized_QMARK_)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__11156_SHARP_){return p1__11156_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_(tailrecursion.hoplon.initialized_QMARK_,true);
var seq__11161 = cljs.core.seq(cljs.core.deref(tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__11162 = null;var count__11163 = 0;var i__11164 = 0;while(true){
if((i__11164 < count__11163))
{var f = chunk__11162.cljs$core$IIndexed$_nth$arity$2(null,i__11164);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11165 = seq__11161;
var G__11166 = chunk__11162;
var G__11167 = count__11163;
var G__11168 = (i__11164 + 1);
seq__11161 = G__11165;
chunk__11162 = G__11166;
count__11163 = G__11167;
i__11164 = G__11168;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11161);if(temp__4092__auto__)
{var seq__11161__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11161__$1))
{var c__8206__auto__ = cljs.core.chunk_first(seq__11161__$1);{
var G__11169 = cljs.core.chunk_rest(seq__11161__$1);
var G__11170 = c__8206__auto__;
var G__11171 = cljs.core.count(c__8206__auto__);
var G__11172 = 0;
seq__11161 = G__11169;
chunk__11162 = G__11170;
count__11163 = G__11171;
i__11164 = G__11172;
continue;
}
} else
{var f = cljs.core.first(seq__11161__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11173 = cljs.core.next(seq__11161__$1);
var G__11174 = null;
var G__11175 = 0;
var G__11176 = 0;
seq__11161 = G__11173;
chunk__11162 = G__11174;
count__11163 = G__11175;
i__11164 = G__11176;
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__8316__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8317__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8318__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8319__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8320__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("do!",((function (method_table__8316__auto__,prefer_table__8317__auto__,method_cache__8318__auto__,cached_hierarchy__8319__auto__,hierarchy__8320__auto__){
return (function (elem,key,val){return key;
});})(method_table__8316__auto__,prefer_table__8317__auto__,method_cache__8318__auto__,cached_hierarchy__8319__auto__,hierarchy__8320__auto__))
,cljs.core.constant$keyword$22,hierarchy__8320__auto__,method_table__8316__auto__,prefer_table__8317__auto__,method_cache__8318__auto__,cached_hierarchy__8319__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,key,val){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$11,(function() { 
var G__11177__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__11177 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11177__delegate.call(this,elem,_,args);};
G__11177.cljs$lang$maxFixedArity = 2;
G__11177.cljs$lang$applyTo = (function (arglist__11178){
var elem = cljs.core.first(arglist__11178);
arglist__11178 = cljs.core.next(arglist__11178);
var _ = cljs.core.first(arglist__11178);
var args = cljs.core.rest(arglist__11178);
return G__11177__delegate(elem,_,args);
});
G__11177.cljs$core$IFn$_invoke$arity$variadic = G__11177__delegate;
return G__11177;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$24,(function (elem,_,kvs){var e = jQuery(elem);var seq__11179 = cljs.core.seq(kvs);var chunk__11180 = null;var count__11181 = 0;var i__11182 = 0;while(true){
if((i__11182 < count__11181))
{var vec__11183 = chunk__11180.cljs$core$IIndexed$_nth$arity$2(null,i__11182);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11183,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11183,1,null);var k_11185__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11185__$1);
} else
{e.attr(k_11185__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11185__$1:v));
}
{
var G__11186 = seq__11179;
var G__11187 = chunk__11180;
var G__11188 = count__11181;
var G__11189 = (i__11182 + 1);
seq__11179 = G__11186;
chunk__11180 = G__11187;
count__11181 = G__11188;
i__11182 = G__11189;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11179);if(temp__4092__auto__)
{var seq__11179__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11179__$1))
{var c__8206__auto__ = cljs.core.chunk_first(seq__11179__$1);{
var G__11190 = cljs.core.chunk_rest(seq__11179__$1);
var G__11191 = c__8206__auto__;
var G__11192 = cljs.core.count(c__8206__auto__);
var G__11193 = 0;
seq__11179 = G__11190;
chunk__11180 = G__11191;
count__11181 = G__11192;
i__11182 = G__11193;
continue;
}
} else
{var vec__11184 = cljs.core.first(seq__11179__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11184,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11184,1,null);var k_11194__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11194__$1);
} else
{e.attr(k_11194__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11194__$1:v));
}
{
var G__11195 = cljs.core.next(seq__11179__$1);
var G__11196 = null;
var G__11197 = 0;
var G__11198 = 0;
seq__11179 = G__11195;
chunk__11180 = G__11196;
count__11181 = G__11197;
i__11182 = G__11198;
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
return (function (p1__11199_SHARP_){return cljs.core.zipmap(p1__11199_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));var seq__11200 = cljs.core.seq(clmap);var chunk__11201 = null;var count__11202 = 0;var i__11203 = 0;while(true){
if((i__11203 < count__11202))
{var vec__11204 = chunk__11201.cljs$core$IIndexed$_nth$arity$2(null,i__11203);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11204,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11204,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11206 = seq__11200;
var G__11207 = chunk__11201;
var G__11208 = count__11202;
var G__11209 = (i__11203 + 1);
seq__11200 = G__11206;
chunk__11201 = G__11207;
count__11202 = G__11208;
i__11203 = G__11209;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11200);if(temp__4092__auto__)
{var seq__11200__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11200__$1))
{var c__8206__auto__ = cljs.core.chunk_first(seq__11200__$1);{
var G__11210 = cljs.core.chunk_rest(seq__11200__$1);
var G__11211 = c__8206__auto__;
var G__11212 = cljs.core.count(c__8206__auto__);
var G__11213 = 0;
seq__11200 = G__11210;
chunk__11201 = G__11211;
count__11202 = G__11212;
i__11203 = G__11213;
continue;
}
} else
{var vec__11205 = cljs.core.first(seq__11200__$1);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11205,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11205,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11214 = cljs.core.next(seq__11200__$1);
var G__11215 = null;
var G__11216 = 0;
var G__11217 = 0;
seq__11200 = G__11214;
chunk__11201 = G__11215;
count__11202 = G__11216;
i__11203 = G__11217;
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
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$26,(function (elem,_,kvs){var e = jQuery(elem);var seq__11218 = cljs.core.seq(kvs);var chunk__11219 = null;var count__11220 = 0;var i__11221 = 0;while(true){
if((i__11221 < count__11220))
{var vec__11222 = chunk__11219.cljs$core$IIndexed$_nth$arity$2(null,i__11221);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11222,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11222,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11224 = seq__11218;
var G__11225 = chunk__11219;
var G__11226 = count__11220;
var G__11227 = (i__11221 + 1);
seq__11218 = G__11224;
chunk__11219 = G__11225;
count__11220 = G__11226;
i__11221 = G__11227;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11218);if(temp__4092__auto__)
{var seq__11218__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11218__$1))
{var c__8206__auto__ = cljs.core.chunk_first(seq__11218__$1);{
var G__11228 = cljs.core.chunk_rest(seq__11218__$1);
var G__11229 = c__8206__auto__;
var G__11230 = cljs.core.count(c__8206__auto__);
var G__11231 = 0;
seq__11218 = G__11228;
chunk__11219 = G__11229;
count__11220 = G__11230;
i__11221 = G__11231;
continue;
}
} else
{var vec__11223 = cljs.core.first(seq__11218__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11223,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11223,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11232 = cljs.core.next(seq__11218__$1);
var G__11233 = null;
var G__11234 = 0;
var G__11235 = 0;
seq__11218 = G__11232;
chunk__11219 = G__11233;
count__11220 = G__11234;
i__11221 = G__11235;
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__8316__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8317__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8318__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8319__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8320__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("on!",((function (method_table__8316__auto__,prefer_table__8317__auto__,method_cache__8318__auto__,cached_hierarchy__8319__auto__,hierarchy__8320__auto__){
return (function (elem,event,callback){return event;
});})(method_table__8316__auto__,prefer_table__8317__auto__,method_cache__8318__auto__,cached_hierarchy__8319__auto__,hierarchy__8320__auto__))
,cljs.core.constant$keyword$22,hierarchy__8320__auto__,method_table__8316__auto__,prefer_table__8317__auto__,method_cache__8318__auto__,cached_hierarchy__8319__auto__));
})();
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,event,callback){return tailrecursion.hoplon.when_dom(elem,(function (){return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(((function (pool_size){
return (function (G__11262,G__11261){return (G__11261.cljs$core$IFn$_invoke$arity$1 ? G__11261.cljs$core$IFn$_invoke$arity$1(G__11262) : G__11261.call(null,G__11262));
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift(((function (pool_size,items_seq){
return (function (G__11263,G__11264){return (G__11263.cljs$core$IFn$_invoke$arity$1 ? G__11263.cljs$core$IFn$_invoke$arity$1(G__11264) : G__11263.call(null,G__11264));
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__11236_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count){
return (function (G__11266,G__11265){return (G__11265 < G__11266);
});})(pool_size,items_seq,cur_count))
).call(null,cur_count,p1__11236_SHARP_);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__11237_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__11267,G__11269,G__11268){return (G__11267.cljs$core$IFn$_invoke$arity$2 ? G__11267.cljs$core$IFn$_invoke$arity$2(G__11268,G__11269) : G__11267.call(null,G__11268,G__11269));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__11237_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__11283,G__11281,G__11277,G__11278,G__11275,G__11279,G__11274,G__11276,G__11282,G__11280){if(cljs.core.truth_((G__11274 < G__11275)))
{var seq__11270_11284 = cljs.core.seq((G__11276.cljs$core$IFn$_invoke$arity$2 ? G__11276.cljs$core$IFn$_invoke$arity$2(G__11274,G__11275) : G__11276.call(null,G__11274,G__11275)));var chunk__11271_11285 = null;var count__11272_11286 = 0;var i__11273_11287 = 0;while(true){
if(cljs.core.truth_((i__11273_11287 < count__11272_11286)))
{var i_11288 = chunk__11271_11285.cljs$core$IIndexed$_nth$arity$2(null,i__11273_11287);var e_11289 = (G__11277.cljs$core$IFn$_invoke$arity$1 ? G__11277.cljs$core$IFn$_invoke$arity$1((G__11278.cljs$core$IFn$_invoke$arity$1 ? G__11278.cljs$core$IFn$_invoke$arity$1(i_11288) : G__11278.call(null,i_11288))) : G__11277.call(null,(G__11278.cljs$core$IFn$_invoke$arity$1 ? G__11278.cljs$core$IFn$_invoke$arity$1(i_11288) : G__11278.call(null,i_11288)))).call(null,cljs.core.constant$keyword$37,(G__11279.cljs$core$IFn$_invoke$arity$1 ? G__11279.cljs$core$IFn$_invoke$arity$1(i_11288) : G__11279.call(null,i_11288)));if(cljs.core.not(G__11280))
{G__11281.appendChild(e_11289);
} else
{G__11281.insertBefore(e_11289,G__11281.firstChild);
}
{
var G__11290 = seq__11270_11284;
var G__11291 = chunk__11271_11285;
var G__11292 = count__11272_11286;
var G__11293 = (i__11273_11287 + 1);
seq__11270_11284 = G__11290;
chunk__11271_11285 = G__11291;
count__11272_11286 = G__11292;
i__11273_11287 = G__11293;
continue;
}
} else
{var temp__4092__auto___11294 = cljs.core.seq(seq__11270_11284);if(temp__4092__auto___11294)
{var seq__11270_11295__$1 = temp__4092__auto___11294;if(cljs.core.chunked_seq_QMARK_(seq__11270_11295__$1))
{var c__8206__auto___11296 = cljs.core.chunk_first(seq__11270_11295__$1);{
var G__11297 = cljs.core.chunk_rest(seq__11270_11295__$1);
var G__11298 = c__8206__auto___11296;
var G__11299 = cljs.core.count(c__8206__auto___11296);
var G__11300 = 0;
seq__11270_11284 = G__11297;
chunk__11271_11285 = G__11298;
count__11272_11286 = G__11299;
i__11273_11287 = G__11300;
continue;
}
} else
{var i_11301 = cljs.core.first(seq__11270_11295__$1);var e_11302 = (G__11277.cljs$core$IFn$_invoke$arity$1 ? G__11277.cljs$core$IFn$_invoke$arity$1((G__11278.cljs$core$IFn$_invoke$arity$1 ? G__11278.cljs$core$IFn$_invoke$arity$1(i_11301) : G__11278.call(null,i_11301))) : G__11277.call(null,(G__11278.cljs$core$IFn$_invoke$arity$1 ? G__11278.cljs$core$IFn$_invoke$arity$1(i_11301) : G__11278.call(null,i_11301)))).call(null,cljs.core.constant$keyword$37,(G__11279.cljs$core$IFn$_invoke$arity$1 ? G__11279.cljs$core$IFn$_invoke$arity$1(i_11301) : G__11279.call(null,i_11301)));if(cljs.core.not(G__11280))
{G__11281.appendChild(e_11302);
} else
{G__11281.insertBefore(e_11302,G__11281.firstChild);
}
{
var G__11303 = cljs.core.next(seq__11270_11295__$1);
var G__11304 = null;
var G__11305 = 0;
var G__11306 = 0;
seq__11270_11284 = G__11303;
chunk__11271_11285 = G__11304;
count__11272_11286 = G__11305;
i__11273_11287 = G__11306;
continue;
}
}
} else
{}
}
break;
}
return (G__11282.cljs$core$IFn$_invoke$arity$2 ? G__11282.cljs$core$IFn$_invoke$arity$2(G__11283,G__11275) : G__11282.call(null,G__11283,G__11275));
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
var route_cell__0 = (function (){var r = (function (){var ret__8633__auto__ = tailrecursion.javelin.cell(window.location.hash);setInterval(((function (ret__8633__auto__){
return (function (){return cljs.core.reset_BANG_(ret__8633__auto__,window.location.hash);
});})(ret__8633__auto__))
,100);
return tailrecursion.javelin.lift(((function (ret__8633__auto__){
return (function (G__11316){return G__11316;
});})(ret__8633__auto__))
).call(null,ret__8633__auto__);
})();return tailrecursion.javelin.lift(((function (r){
return (function (G__11317,G__11318){if(cljs.core.truth_((G__11317.cljs$core$IFn$_invoke$arity$2 ? G__11317.cljs$core$IFn$_invoke$arity$2("",G__11318) : G__11317.call(null,"",G__11318))))
{return G__11318;
} else
{return null;
}
});})(r))
).call(null,cljs.core.not_EQ_,r);
});
var route_cell__1 = (function (setter_or_dfl){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl)))
{var setter__8634__auto__ = setter_or_dfl;var callback__8635__auto__ = (function (){var or__7450__auto__ = null;if(cljs.core.truth_(or__7450__auto__))
{return or__7450__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8634__auto__,callback__8635__auto__){
return (function (G__11320,G__11319){return G__11319.location.hash = G__11320;
});})(setter__8634__auto__,callback__8635__auto__))
).call(null,setter__8634__auto__,window);
setInterval(((function (setter__8634__auto__,callback__8635__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8634__auto__),window.location.hash))
{(callback__8635__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8635__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8635__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8634__auto__);
} else
{return null;
}
});})(setter__8634__auto__,callback__8635__auto__))
,100);
return setter__8634__auto__;
} else
{var r = route_cell.cljs$core$IFn$_invoke$arity$0();return tailrecursion.javelin.lift(((function (r){
return (function (G__11322,G__11321){var or__7450__auto__ = G__11321;if(cljs.core.truth_(or__7450__auto__))
{return or__7450__auto__;
} else
{return G__11322;
}
});})(r))
).call(null,setter_or_dfl,r);
}
});
var route_cell__2 = (function (setter,callback){var setter__8634__auto__ = setter;var callback__8635__auto__ = (function (){var or__7450__auto__ = callback;if(cljs.core.truth_(or__7450__auto__))
{return or__7450__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8634__auto__,callback__8635__auto__){
return (function (G__11324,G__11323){return G__11323.location.hash = G__11324;
});})(setter__8634__auto__,callback__8635__auto__))
).call(null,setter__8634__auto__,window);
setInterval(((function (setter__8634__auto__,callback__8635__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8634__auto__),window.location.hash))
{(callback__8635__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8635__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8635__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8634__auto__);
} else
{return null;
}
});})(setter__8634__auto__,callback__8635__auto__))
,100);
return setter__8634__auto__;
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
