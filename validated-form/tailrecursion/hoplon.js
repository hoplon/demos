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
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10860_SHARP_){return (p1__10860_SHARP_ instanceof Node);
}):(function (p1__10861_SHARP_){try{return p1__10861_SHARP_.nodeType;
}catch (e10862){if((e10862 instanceof Error))
{var _ = e10862;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10862;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__10863_SHARP_){try{return cljs.core.vector_QMARK_(p1__10863_SHARP_);
}catch (e10864){if((e10864 instanceof Error))
{var _ = e10864;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10864;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__10865_SHARP_){try{return cljs.core.seq_QMARK_(p1__10865_SHARP_);
}catch (e10866){if((e10866 instanceof Error))
{var _ = e10866;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10866;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_((function (p1__10867_SHARP_){if(cljs.core.truth_((function (){var and__7255__auto__ = console;if(cljs.core.truth_(and__7255__auto__))
{return console.log;
} else
{return and__7255__auto__;
}
})()))
{return console.log(p1__10867_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e10869){if((e10869 instanceof Error))
{var _ = e10869;return not_found;
} else
{if(cljs.core.constant$keyword$6)
{throw e10869;
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
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__10870_SHARP_){if(cljs.core.truth_((function (){var or__7267__auto__ = (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__10870_SHARP_) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__10870_SHARP_));if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__10870_SHARP_) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__10870_SHARP_));
}
})()))
{return unsplice(p1__10870_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10870_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function parse_args(p__10873){var vec__10875 = p__10873;var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10875,0,null);var tail = cljs.core.nthnext(vec__10875,1);var args = vec__10875;var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_,vec__10875,head,tail,args){
return (function (p1__10871_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,p1__10871_SHARP_)));
});})(kw1_QMARK_,vec__10875,head,tail,args))
;var drkw = ((function (kw1_QMARK_,mkkw,vec__10875,head,tail,args){
return (function (p1__10872_SHARP_){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.drop_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4(2,2,cljs.core.PersistentVector.EMPTY,p1__10872_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__10875,head,tail,args))
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
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__10877_SHARP_,p2__10876_SHARP_){var n = (function (){var s = cljs.core.name(p2__10876_SHARP_);var c = cljs.core.last(s);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c)))
{return s;
} else
{return s.slice(0,-1);
}
})();var p = n.substr(0,3);return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__10876_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__10877_SHARP_,p)))?n:n.substr(3)));
});var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");var dos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__10878_SHARP_,p2__10879_SHARP_){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__10878_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__10879_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__10902_10920 = cljs.core.seq(attr);var chunk__10903_10921 = null;var count__10904_10922 = 0;var i__10905_10923 = 0;while(true){
if((i__10905_10923 < count__10904_10922))
{var vec__10906_10924 = chunk__10903_10921.cljs$core$IIndexed$_nth$arity$2(null,i__10905_10923);var k_10925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10906_10924,0,null);var v_10926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10906_10924,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_10926)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_10925) : dokey.call(null,k_10925)),v_10926);
} else
{if(cljs.core.fn_QMARK_(v_10926))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_10925) : onkey.call(null,k_10925)),v_10926);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_10925) : dokey.call(null,k_10925)),v_10926) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_10925) : dokey.call(null,k_10925)),v_10926));
} else
{}
}
}
{
var G__10927 = seq__10902_10920;
var G__10928 = chunk__10903_10921;
var G__10929 = count__10904_10922;
var G__10930 = (i__10905_10923 + 1);
seq__10902_10920 = G__10927;
chunk__10903_10921 = G__10928;
count__10904_10922 = G__10929;
i__10905_10923 = G__10930;
continue;
}
} else
{var temp__4092__auto___10931 = cljs.core.seq(seq__10902_10920);if(temp__4092__auto___10931)
{var seq__10902_10932__$1 = temp__4092__auto___10931;if(cljs.core.chunked_seq_QMARK_(seq__10902_10932__$1))
{var c__8023__auto___10933 = cljs.core.chunk_first(seq__10902_10932__$1);{
var G__10934 = cljs.core.chunk_rest(seq__10902_10932__$1);
var G__10935 = c__8023__auto___10933;
var G__10936 = cljs.core.count(c__8023__auto___10933);
var G__10937 = 0;
seq__10902_10920 = G__10934;
chunk__10903_10921 = G__10935;
count__10904_10922 = G__10936;
i__10905_10923 = G__10937;
continue;
}
} else
{var vec__10907_10938 = cljs.core.first(seq__10902_10932__$1);var k_10939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10907_10938,0,null);var v_10940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10907_10938,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_10940)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_10939) : dokey.call(null,k_10939)),v_10940);
} else
{if(cljs.core.fn_QMARK_(v_10940))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_10939) : onkey.call(null,k_10939)),v_10940);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_10939) : dokey.call(null,k_10939)),v_10940) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_10939) : dokey.call(null,k_10939)),v_10940));
} else
{}
}
}
{
var G__10941 = cljs.core.next(seq__10902_10932__$1);
var G__10942 = null;
var G__10943 = 0;
var G__10944 = 0;
seq__10902_10920 = G__10941;
chunk__10903_10921 = G__10942;
count__10904_10922 = G__10943;
i__10905_10923 = G__10944;
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
return (function (){var seq__10908 = cljs.core.seq(cljs.core.deref(dos));var chunk__10909 = null;var count__10910 = 0;var i__10911 = 0;while(true){
if((i__10911 < count__10910))
{var vec__10912 = chunk__10909.cljs$core$IIndexed$_nth$arity$2(null,i__10911);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10912,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10912,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__10908,chunk__10909,count__10910,i__10911,vec__10912,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__10881_SHARP_,p2__10882_SHARP_,p3__10883_SHARP_,p4__10880_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__10880_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__10880_SHARP_));
});})(seq__10908,chunk__10909,count__10910,i__10911,vec__10912,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__10945 = seq__10908;
var G__10946 = chunk__10909;
var G__10947 = count__10910;
var G__10948 = (i__10911 + 1);
seq__10908 = G__10945;
chunk__10909 = G__10946;
count__10910 = G__10947;
i__10911 = G__10948;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10908);if(temp__4092__auto__)
{var seq__10908__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__10908__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__10908__$1);{
var G__10949 = cljs.core.chunk_rest(seq__10908__$1);
var G__10950 = c__8023__auto__;
var G__10951 = cljs.core.count(c__8023__auto__);
var G__10952 = 0;
seq__10908 = G__10949;
chunk__10909 = G__10950;
count__10910 = G__10951;
i__10911 = G__10952;
continue;
}
} else
{var vec__10913 = cljs.core.first(seq__10908__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10913,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10913,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__10908,chunk__10909,count__10910,i__10911,vec__10913,k,v,seq__10908__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__10881_SHARP_,p2__10882_SHARP_,p3__10883_SHARP_,p4__10880_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__10880_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__10880_SHARP_));
});})(seq__10908,chunk__10909,count__10910,i__10911,vec__10913,k,v,seq__10908__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__10953 = cljs.core.next(seq__10908__$1);
var G__10954 = null;
var G__10955 = 0;
var G__10956 = 0;
seq__10908 = G__10953;
chunk__10909 = G__10954;
count__10910 = G__10955;
i__10911 = G__10956;
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
return (function (){var seq__10914 = cljs.core.seq(cljs.core.deref(ons));var chunk__10915 = null;var count__10916 = 0;var i__10917 = 0;while(true){
if((i__10917 < count__10916))
{var vec__10918 = chunk__10915.cljs$core$IIndexed$_nth$arity$2(null,i__10917);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10918,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10918,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__10957 = seq__10914;
var G__10958 = chunk__10915;
var G__10959 = count__10916;
var G__10960 = (i__10917 + 1);
seq__10914 = G__10957;
chunk__10915 = G__10958;
count__10916 = G__10959;
i__10917 = G__10960;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10914);if(temp__4092__auto__)
{var seq__10914__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__10914__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__10914__$1);{
var G__10961 = cljs.core.chunk_rest(seq__10914__$1);
var G__10962 = c__8023__auto__;
var G__10963 = cljs.core.count(c__8023__auto__);
var G__10964 = 0;
seq__10914 = G__10961;
chunk__10915 = G__10962;
count__10916 = G__10963;
i__10917 = G__10964;
continue;
}
} else
{var vec__10919 = cljs.core.first(seq__10914__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10919,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10919,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__10965 = cljs.core.next(seq__10914__$1);
var G__10966 = null;
var G__10967 = 0;
var G__10968 = 0;
seq__10914 = G__10965;
chunk__10915 = G__10966;
count__10916 = G__10967;
i__10917 = G__10968;
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
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10969_SHARP_,p2__10970_SHARP_){return p1__10969_SHARP_.appendChild(p2__10970_SHARP_);
}):(function (p1__10971_SHARP_,p2__10972_SHARP_){try{return p1__10971_SHARP_.appendChild(p2__10972_SHARP_);
}catch (e10973){if((e10973 instanceof Error))
{var _ = e10973;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10973;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){jQuery(this$).empty();
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))) : tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__10979){var vec__10985 = p__10979;var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10985,0,null);var _ = cljs.core.nthnext(vec__10985,1);var kids = vec__10985;if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell)))
{tailrecursion.hoplon.replace_children_BANG_(this$,cljs.core.deref(child_cell));
cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__10985,child_cell,_,kids){
return (function (p1__10975_SHARP_,p2__10976_SHARP_,p3__10977_SHARP_,p4__10974_SHARP_){return tailrecursion.hoplon.replace_children_BANG_(this$,p4__10974_SHARP_);
});})(vec__10985,child_cell,_,kids))
);
} else
{var node_10990 = ((function (vec__10985,child_cell,_,kids){
return (function (p1__10978_SHARP_){if(typeof p1__10978_SHARP_ === 'string')
{return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__10978_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__10978_SHARP_));
} else
{if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__10978_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__10978_SHARP_))))
{return p1__10978_SHARP_;
} else
{return null;
}
}
});})(vec__10985,child_cell,_,kids))
;var seq__10986_10991 = cljs.core.seq(cljs.core.keep(node_10990,tailrecursion.hoplon.unsplice(kids)));var chunk__10987_10992 = null;var count__10988_10993 = 0;var i__10989_10994 = 0;while(true){
if((i__10989_10994 < count__10988_10993))
{var x_10995 = chunk__10987_10992.cljs$core$IIndexed$_nth$arity$2(null,i__10989_10994);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_10995) : tailrecursion.hoplon.append_child.call(null,this$,x_10995));
{
var G__10996 = seq__10986_10991;
var G__10997 = chunk__10987_10992;
var G__10998 = count__10988_10993;
var G__10999 = (i__10989_10994 + 1);
seq__10986_10991 = G__10996;
chunk__10987_10992 = G__10997;
count__10988_10993 = G__10998;
i__10989_10994 = G__10999;
continue;
}
} else
{var temp__4092__auto___11000 = cljs.core.seq(seq__10986_10991);if(temp__4092__auto___11000)
{var seq__10986_11001__$1 = temp__4092__auto___11000;if(cljs.core.chunked_seq_QMARK_(seq__10986_11001__$1))
{var c__8023__auto___11002 = cljs.core.chunk_first(seq__10986_11001__$1);{
var G__11003 = cljs.core.chunk_rest(seq__10986_11001__$1);
var G__11004 = c__8023__auto___11002;
var G__11005 = cljs.core.count(c__8023__auto___11002);
var G__11006 = 0;
seq__10986_10991 = G__11003;
chunk__10987_10992 = G__11004;
count__10988_10993 = G__11005;
i__10989_10994 = G__11006;
continue;
}
} else
{var x_11007 = cljs.core.first(seq__10986_11001__$1);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11007) : tailrecursion.hoplon.append_child.call(null,this$,x_11007));
{
var G__11008 = cljs.core.next(seq__10986_11001__$1);
var G__11009 = null;
var G__11010 = 0;
var G__11011 = 0;
seq__10986_10991 = G__11008;
chunk__10987_10992 = G__11009;
count__10988_10993 = G__11010;
i__10989_10994 = G__11011;
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
var G__11019__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__11013 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11013,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11013,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11014 = this$;G__11014.hoplonIFn(attr,kids);
return G__11014;
} else
{var G__11015 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11015,attr);
tailrecursion.hoplon.add_children_BANG_(G__11015,kids);
return G__11015;
}
};
var G__11019 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11019__delegate.call(this,self__,args);};
G__11019.cljs$lang$maxFixedArity = 1;
G__11019.cljs$lang$applyTo = (function (arglist__11020){
var self__ = cljs.core.first(arglist__11020);
var args = cljs.core.rest(arglist__11020);
return G__11019__delegate(self__,args);
});
G__11019.cljs$core$IFn$_invoke$arity$variadic = G__11019__delegate;
return G__11019;
})()
;
Element.prototype.apply = (function (self__,args11012){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11012)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11021__delegate = function (args){var this$ = this;var vec__11016 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11016,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11016,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11017 = this$;G__11017.hoplonIFn(attr,kids);
return G__11017;
} else
{var G__11018 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11018,attr);
tailrecursion.hoplon.add_children_BANG_(G__11018,kids);
return G__11018;
}
};
var G__11021 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11021__delegate.call(this,args);};
G__11021.cljs$lang$maxFixedArity = 0;
G__11021.cljs$lang$applyTo = (function (arglist__11022){
var args = cljs.core.seq(arglist__11022);
return G__11021__delegate(args);
});
G__11021.cljs$core$IFn$_invoke$arity$variadic = G__11021__delegate;
return G__11021;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__11023__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new$,args);
};
var G__11023 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11023__delegate.call(this,args);};
G__11023.cljs$lang$maxFixedArity = 0;
G__11023.cljs$lang$applyTo = (function (arglist__11024){
var args = cljs.core.seq(arglist__11024);
return G__11023__delegate(args);
});
G__11023.cljs$core$IFn$_invoke$arity$variadic = G__11023__delegate;
return G__11023;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__11025__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__11025 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11025__delegate.call(this,args);};
G__11025.cljs$lang$maxFixedArity = 0;
G__11025.cljs$lang$applyTo = (function (arglist__11026){
var args = cljs.core.seq(arglist__11026);
return G__11025__delegate(args);
});
G__11025.cljs$core$IFn$_invoke$arity$variadic = G__11025__delegate;
return G__11025;
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
tailrecursion.hoplon.$text = (function $text(p1__11027_SHARP_){return document.createTextNode(p1__11027_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__11028_SHARP_){return document.createComment(p1__11028_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.initialized_QMARK_)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__11029_SHARP_){return p1__11029_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_(tailrecursion.hoplon.initialized_QMARK_,true);
var seq__11034 = cljs.core.seq(cljs.core.deref(tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__11035 = null;var count__11036 = 0;var i__11037 = 0;while(true){
if((i__11037 < count__11036))
{var f = chunk__11035.cljs$core$IIndexed$_nth$arity$2(null,i__11037);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11038 = seq__11034;
var G__11039 = chunk__11035;
var G__11040 = count__11036;
var G__11041 = (i__11037 + 1);
seq__11034 = G__11038;
chunk__11035 = G__11039;
count__11036 = G__11040;
i__11037 = G__11041;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11034);if(temp__4092__auto__)
{var seq__11034__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11034__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__11034__$1);{
var G__11042 = cljs.core.chunk_rest(seq__11034__$1);
var G__11043 = c__8023__auto__;
var G__11044 = cljs.core.count(c__8023__auto__);
var G__11045 = 0;
seq__11034 = G__11042;
chunk__11035 = G__11043;
count__11036 = G__11044;
i__11037 = G__11045;
continue;
}
} else
{var f = cljs.core.first(seq__11034__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11046 = cljs.core.next(seq__11034__$1);
var G__11047 = null;
var G__11048 = 0;
var G__11049 = 0;
seq__11034 = G__11046;
chunk__11035 = G__11047;
count__11036 = G__11048;
i__11037 = G__11049;
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__8133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8136__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("do!",((function (method_table__8133__auto__,prefer_table__8134__auto__,method_cache__8135__auto__,cached_hierarchy__8136__auto__,hierarchy__8137__auto__){
return (function (elem,key,val){return key;
});})(method_table__8133__auto__,prefer_table__8134__auto__,method_cache__8135__auto__,cached_hierarchy__8136__auto__,hierarchy__8137__auto__))
,cljs.core.constant$keyword$22,hierarchy__8137__auto__,method_table__8133__auto__,prefer_table__8134__auto__,method_cache__8135__auto__,cached_hierarchy__8136__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,key,val){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$11,(function() { 
var G__11050__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__11050 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11050__delegate.call(this,elem,_,args);};
G__11050.cljs$lang$maxFixedArity = 2;
G__11050.cljs$lang$applyTo = (function (arglist__11051){
var elem = cljs.core.first(arglist__11051);
arglist__11051 = cljs.core.next(arglist__11051);
var _ = cljs.core.first(arglist__11051);
var args = cljs.core.rest(arglist__11051);
return G__11050__delegate(elem,_,args);
});
G__11050.cljs$core$IFn$_invoke$arity$variadic = G__11050__delegate;
return G__11050;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$24,(function (elem,_,kvs){var e = jQuery(elem);var seq__11052 = cljs.core.seq(kvs);var chunk__11053 = null;var count__11054 = 0;var i__11055 = 0;while(true){
if((i__11055 < count__11054))
{var vec__11056 = chunk__11053.cljs$core$IIndexed$_nth$arity$2(null,i__11055);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11056,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11056,1,null);var k_11058__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11058__$1);
} else
{e.attr(k_11058__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11058__$1:v));
}
{
var G__11059 = seq__11052;
var G__11060 = chunk__11053;
var G__11061 = count__11054;
var G__11062 = (i__11055 + 1);
seq__11052 = G__11059;
chunk__11053 = G__11060;
count__11054 = G__11061;
i__11055 = G__11062;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11052);if(temp__4092__auto__)
{var seq__11052__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11052__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__11052__$1);{
var G__11063 = cljs.core.chunk_rest(seq__11052__$1);
var G__11064 = c__8023__auto__;
var G__11065 = cljs.core.count(c__8023__auto__);
var G__11066 = 0;
seq__11052 = G__11063;
chunk__11053 = G__11064;
count__11054 = G__11065;
i__11055 = G__11066;
continue;
}
} else
{var vec__11057 = cljs.core.first(seq__11052__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11057,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11057,1,null);var k_11067__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11067__$1);
} else
{e.attr(k_11067__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11067__$1:v));
}
{
var G__11068 = cljs.core.next(seq__11052__$1);
var G__11069 = null;
var G__11070 = 0;
var G__11071 = 0;
seq__11052 = G__11068;
chunk__11053 = G__11069;
count__11054 = G__11070;
i__11055 = G__11071;
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
return (function (p1__11072_SHARP_){return cljs.core.zipmap(p1__11072_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));var seq__11073 = cljs.core.seq(clmap);var chunk__11074 = null;var count__11075 = 0;var i__11076 = 0;while(true){
if((i__11076 < count__11075))
{var vec__11077 = chunk__11074.cljs$core$IIndexed$_nth$arity$2(null,i__11076);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11077,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11077,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11079 = seq__11073;
var G__11080 = chunk__11074;
var G__11081 = count__11075;
var G__11082 = (i__11076 + 1);
seq__11073 = G__11079;
chunk__11074 = G__11080;
count__11075 = G__11081;
i__11076 = G__11082;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11073);if(temp__4092__auto__)
{var seq__11073__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11073__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__11073__$1);{
var G__11083 = cljs.core.chunk_rest(seq__11073__$1);
var G__11084 = c__8023__auto__;
var G__11085 = cljs.core.count(c__8023__auto__);
var G__11086 = 0;
seq__11073 = G__11083;
chunk__11074 = G__11084;
count__11075 = G__11085;
i__11076 = G__11086;
continue;
}
} else
{var vec__11078 = cljs.core.first(seq__11073__$1);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11078,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11078,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11087 = cljs.core.next(seq__11073__$1);
var G__11088 = null;
var G__11089 = 0;
var G__11090 = 0;
seq__11073 = G__11087;
chunk__11074 = G__11088;
count__11075 = G__11089;
i__11076 = G__11090;
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
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$26,(function (elem,_,kvs){var e = jQuery(elem);var seq__11091 = cljs.core.seq(kvs);var chunk__11092 = null;var count__11093 = 0;var i__11094 = 0;while(true){
if((i__11094 < count__11093))
{var vec__11095 = chunk__11092.cljs$core$IIndexed$_nth$arity$2(null,i__11094);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11095,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11095,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11097 = seq__11091;
var G__11098 = chunk__11092;
var G__11099 = count__11093;
var G__11100 = (i__11094 + 1);
seq__11091 = G__11097;
chunk__11092 = G__11098;
count__11093 = G__11099;
i__11094 = G__11100;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11091);if(temp__4092__auto__)
{var seq__11091__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11091__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__11091__$1);{
var G__11101 = cljs.core.chunk_rest(seq__11091__$1);
var G__11102 = c__8023__auto__;
var G__11103 = cljs.core.count(c__8023__auto__);
var G__11104 = 0;
seq__11091 = G__11101;
chunk__11092 = G__11102;
count__11093 = G__11103;
i__11094 = G__11104;
continue;
}
} else
{var vec__11096 = cljs.core.first(seq__11091__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11096,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11096,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11105 = cljs.core.next(seq__11091__$1);
var G__11106 = null;
var G__11107 = 0;
var G__11108 = 0;
seq__11091 = G__11105;
chunk__11092 = G__11106;
count__11093 = G__11107;
i__11094 = G__11108;
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__8133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8136__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("on!",((function (method_table__8133__auto__,prefer_table__8134__auto__,method_cache__8135__auto__,cached_hierarchy__8136__auto__,hierarchy__8137__auto__){
return (function (elem,event,callback){return event;
});})(method_table__8133__auto__,prefer_table__8134__auto__,method_cache__8135__auto__,cached_hierarchy__8136__auto__,hierarchy__8137__auto__))
,cljs.core.constant$keyword$22,hierarchy__8137__auto__,method_table__8133__auto__,prefer_table__8134__auto__,method_cache__8135__auto__,cached_hierarchy__8136__auto__));
})();
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,event,callback){return tailrecursion.hoplon.when_dom(elem,(function (){return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(((function (pool_size){
return (function (G__11135,G__11134){return (G__11134.cljs$core$IFn$_invoke$arity$1 ? G__11134.cljs$core$IFn$_invoke$arity$1(G__11135) : G__11134.call(null,G__11135));
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift(((function (pool_size,items_seq){
return (function (G__11136,G__11137){return (G__11136.cljs$core$IFn$_invoke$arity$1 ? G__11136.cljs$core$IFn$_invoke$arity$1(G__11137) : G__11136.call(null,G__11137));
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__11109_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count){
return (function (G__11138,G__11139){return (G__11138 < G__11139);
});})(pool_size,items_seq,cur_count))
).call(null,p1__11109_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__11110_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__11140,G__11142,G__11141){return (G__11140.cljs$core$IFn$_invoke$arity$2 ? G__11140.cljs$core$IFn$_invoke$arity$2(G__11141,G__11142) : G__11140.call(null,G__11141,G__11142));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__11110_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__11156,G__11154,G__11150,G__11151,G__11148,G__11152,G__11147,G__11149,G__11155,G__11153){if(cljs.core.truth_((G__11147 < G__11148)))
{var seq__11143_11157 = cljs.core.seq((G__11149.cljs$core$IFn$_invoke$arity$2 ? G__11149.cljs$core$IFn$_invoke$arity$2(G__11147,G__11148) : G__11149.call(null,G__11147,G__11148)));var chunk__11144_11158 = null;var count__11145_11159 = 0;var i__11146_11160 = 0;while(true){
if(cljs.core.truth_((i__11146_11160 < count__11145_11159)))
{var i_11161 = chunk__11144_11158.cljs$core$IIndexed$_nth$arity$2(null,i__11146_11160);var e_11162 = (G__11150.cljs$core$IFn$_invoke$arity$1 ? G__11150.cljs$core$IFn$_invoke$arity$1((G__11151.cljs$core$IFn$_invoke$arity$1 ? G__11151.cljs$core$IFn$_invoke$arity$1(i_11161) : G__11151.call(null,i_11161))) : G__11150.call(null,(G__11151.cljs$core$IFn$_invoke$arity$1 ? G__11151.cljs$core$IFn$_invoke$arity$1(i_11161) : G__11151.call(null,i_11161)))).call(null,cljs.core.constant$keyword$37,(G__11152.cljs$core$IFn$_invoke$arity$1 ? G__11152.cljs$core$IFn$_invoke$arity$1(i_11161) : G__11152.call(null,i_11161)));if(cljs.core.not(G__11153))
{G__11154.appendChild(e_11162);
} else
{G__11154.insertBefore(e_11162,G__11154.firstChild);
}
{
var G__11163 = seq__11143_11157;
var G__11164 = chunk__11144_11158;
var G__11165 = count__11145_11159;
var G__11166 = (i__11146_11160 + 1);
seq__11143_11157 = G__11163;
chunk__11144_11158 = G__11164;
count__11145_11159 = G__11165;
i__11146_11160 = G__11166;
continue;
}
} else
{var temp__4092__auto___11167 = cljs.core.seq(seq__11143_11157);if(temp__4092__auto___11167)
{var seq__11143_11168__$1 = temp__4092__auto___11167;if(cljs.core.chunked_seq_QMARK_(seq__11143_11168__$1))
{var c__8023__auto___11169 = cljs.core.chunk_first(seq__11143_11168__$1);{
var G__11170 = cljs.core.chunk_rest(seq__11143_11168__$1);
var G__11171 = c__8023__auto___11169;
var G__11172 = cljs.core.count(c__8023__auto___11169);
var G__11173 = 0;
seq__11143_11157 = G__11170;
chunk__11144_11158 = G__11171;
count__11145_11159 = G__11172;
i__11146_11160 = G__11173;
continue;
}
} else
{var i_11174 = cljs.core.first(seq__11143_11168__$1);var e_11175 = (G__11150.cljs$core$IFn$_invoke$arity$1 ? G__11150.cljs$core$IFn$_invoke$arity$1((G__11151.cljs$core$IFn$_invoke$arity$1 ? G__11151.cljs$core$IFn$_invoke$arity$1(i_11174) : G__11151.call(null,i_11174))) : G__11150.call(null,(G__11151.cljs$core$IFn$_invoke$arity$1 ? G__11151.cljs$core$IFn$_invoke$arity$1(i_11174) : G__11151.call(null,i_11174)))).call(null,cljs.core.constant$keyword$37,(G__11152.cljs$core$IFn$_invoke$arity$1 ? G__11152.cljs$core$IFn$_invoke$arity$1(i_11174) : G__11152.call(null,i_11174)));if(cljs.core.not(G__11153))
{G__11154.appendChild(e_11175);
} else
{G__11154.insertBefore(e_11175,G__11154.firstChild);
}
{
var G__11176 = cljs.core.next(seq__11143_11168__$1);
var G__11177 = null;
var G__11178 = 0;
var G__11179 = 0;
seq__11143_11157 = G__11176;
chunk__11144_11158 = G__11177;
count__11145_11159 = G__11178;
i__11146_11160 = G__11179;
continue;
}
}
} else
{}
}
break;
}
return (G__11155.cljs$core$IFn$_invoke$arity$2 ? G__11155.cljs$core$IFn$_invoke$arity$2(G__11156,G__11148) : G__11155.call(null,G__11156,G__11148));
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
var route_cell__0 = (function (){var r = (function (){var ret__8450__auto__ = tailrecursion.javelin.cell(window.location.hash);setInterval(((function (ret__8450__auto__){
return (function (){return cljs.core.reset_BANG_(ret__8450__auto__,window.location.hash);
});})(ret__8450__auto__))
,100);
return tailrecursion.javelin.lift(((function (ret__8450__auto__){
return (function (G__11189){return G__11189;
});})(ret__8450__auto__))
).call(null,ret__8450__auto__);
})();return tailrecursion.javelin.lift(((function (r){
return (function (G__11190,G__11191){if(cljs.core.truth_((G__11190.cljs$core$IFn$_invoke$arity$2 ? G__11190.cljs$core$IFn$_invoke$arity$2("",G__11191) : G__11190.call(null,"",G__11191))))
{return G__11191;
} else
{return null;
}
});})(r))
).call(null,cljs.core.not_EQ_,r);
});
var route_cell__1 = (function (setter_or_dfl){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl)))
{var setter__8451__auto__ = setter_or_dfl;var callback__8452__auto__ = (function (){var or__7267__auto__ = null;if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8451__auto__,callback__8452__auto__){
return (function (G__11192,G__11193){return G__11192.location.hash = G__11193;
});})(setter__8451__auto__,callback__8452__auto__))
).call(null,window,setter__8451__auto__);
setInterval(((function (setter__8451__auto__,callback__8452__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8451__auto__),window.location.hash))
{(callback__8452__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8452__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8452__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8451__auto__);
} else
{return null;
}
});})(setter__8451__auto__,callback__8452__auto__))
,100);
return setter__8451__auto__;
} else
{var r = route_cell.cljs$core$IFn$_invoke$arity$0();return tailrecursion.javelin.lift(((function (r){
return (function (G__11195,G__11194){var or__7267__auto__ = G__11194;if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return G__11195;
}
});})(r))
).call(null,setter_or_dfl,r);
}
});
var route_cell__2 = (function (setter,callback){var setter__8451__auto__ = setter;var callback__8452__auto__ = (function (){var or__7267__auto__ = callback;if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8451__auto__,callback__8452__auto__){
return (function (G__11196,G__11197){return G__11196.location.hash = G__11197;
});})(setter__8451__auto__,callback__8452__auto__))
).call(null,window,setter__8451__auto__);
setInterval(((function (setter__8451__auto__,callback__8452__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8451__auto__),window.location.hash))
{(callback__8452__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8452__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8452__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8451__auto__);
} else
{return null;
}
});})(setter__8451__auto__,callback__8452__auto__))
,100);
return setter__8451__auto__;
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
