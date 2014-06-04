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
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10841_SHARP_){return (p1__10841_SHARP_ instanceof Node);
}):(function (p1__10842_SHARP_){try{return p1__10842_SHARP_.nodeType;
}catch (e10843){if((e10843 instanceof Error))
{var _ = e10843;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10843;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__10844_SHARP_){try{return cljs.core.vector_QMARK_(p1__10844_SHARP_);
}catch (e10845){if((e10845 instanceof Error))
{var _ = e10845;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10845;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__10846_SHARP_){try{return cljs.core.seq_QMARK_(p1__10846_SHARP_);
}catch (e10847){if((e10847 instanceof Error))
{var _ = e10847;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10847;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_((function (p1__10848_SHARP_){if(cljs.core.truth_((function (){var and__7254__auto__ = console;if(cljs.core.truth_(and__7254__auto__))
{return console.log;
} else
{return and__7254__auto__;
}
})()))
{return console.log(p1__10848_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e10850){if((e10850 instanceof Error))
{var _ = e10850;return not_found;
} else
{if(cljs.core.constant$keyword$6)
{throw e10850;
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
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__10851_SHARP_){if(cljs.core.truth_((function (){var or__7266__auto__ = (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__10851_SHARP_) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__10851_SHARP_));if(cljs.core.truth_(or__7266__auto__))
{return or__7266__auto__;
} else
{return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__10851_SHARP_) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__10851_SHARP_));
}
})()))
{return unsplice(p1__10851_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10851_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function parse_args(p__10854){var vec__10856 = p__10854;var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10856,0,null);var tail = cljs.core.nthnext(vec__10856,1);var args = vec__10856;var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_,vec__10856,head,tail,args){
return (function (p1__10852_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,p1__10852_SHARP_)));
});})(kw1_QMARK_,vec__10856,head,tail,args))
;var drkw = ((function (kw1_QMARK_,mkkw,vec__10856,head,tail,args){
return (function (p1__10853_SHARP_){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.drop_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4(2,2,cljs.core.PersistentVector.EMPTY,p1__10853_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__10856,head,tail,args))
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
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__10858_SHARP_,p2__10857_SHARP_){var n = (function (){var s = cljs.core.name(p2__10857_SHARP_);var c = cljs.core.last(s);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c)))
{return s;
} else
{return s.slice(0,-1);
}
})();var p = n.substr(0,3);return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__10857_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__10858_SHARP_,p)))?n:n.substr(3)));
});var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");var dos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__10859_SHARP_,p2__10860_SHARP_){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__10859_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__10860_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__10883_10901 = cljs.core.seq(attr);var chunk__10884_10902 = null;var count__10885_10903 = 0;var i__10886_10904 = 0;while(true){
if((i__10886_10904 < count__10885_10903))
{var vec__10887_10905 = chunk__10884_10902.cljs$core$IIndexed$_nth$arity$2(null,i__10886_10904);var k_10906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10887_10905,0,null);var v_10907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10887_10905,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_10907)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_10906) : dokey.call(null,k_10906)),v_10907);
} else
{if(cljs.core.fn_QMARK_(v_10907))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_10906) : onkey.call(null,k_10906)),v_10907);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_10906) : dokey.call(null,k_10906)),v_10907) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_10906) : dokey.call(null,k_10906)),v_10907));
} else
{}
}
}
{
var G__10908 = seq__10883_10901;
var G__10909 = chunk__10884_10902;
var G__10910 = count__10885_10903;
var G__10911 = (i__10886_10904 + 1);
seq__10883_10901 = G__10908;
chunk__10884_10902 = G__10909;
count__10885_10903 = G__10910;
i__10886_10904 = G__10911;
continue;
}
} else
{var temp__4092__auto___10912 = cljs.core.seq(seq__10883_10901);if(temp__4092__auto___10912)
{var seq__10883_10913__$1 = temp__4092__auto___10912;if(cljs.core.chunked_seq_QMARK_(seq__10883_10913__$1))
{var c__8022__auto___10914 = cljs.core.chunk_first(seq__10883_10913__$1);{
var G__10915 = cljs.core.chunk_rest(seq__10883_10913__$1);
var G__10916 = c__8022__auto___10914;
var G__10917 = cljs.core.count(c__8022__auto___10914);
var G__10918 = 0;
seq__10883_10901 = G__10915;
chunk__10884_10902 = G__10916;
count__10885_10903 = G__10917;
i__10886_10904 = G__10918;
continue;
}
} else
{var vec__10888_10919 = cljs.core.first(seq__10883_10913__$1);var k_10920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10888_10919,0,null);var v_10921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10888_10919,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_10921)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_10920) : dokey.call(null,k_10920)),v_10921);
} else
{if(cljs.core.fn_QMARK_(v_10921))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_10920) : onkey.call(null,k_10920)),v_10921);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_10920) : dokey.call(null,k_10920)),v_10921) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_10920) : dokey.call(null,k_10920)),v_10921));
} else
{}
}
}
{
var G__10922 = cljs.core.next(seq__10883_10913__$1);
var G__10923 = null;
var G__10924 = 0;
var G__10925 = 0;
seq__10883_10901 = G__10922;
chunk__10884_10902 = G__10923;
count__10885_10903 = G__10924;
i__10886_10904 = G__10925;
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
return (function (){var seq__10889 = cljs.core.seq(cljs.core.deref(dos));var chunk__10890 = null;var count__10891 = 0;var i__10892 = 0;while(true){
if((i__10892 < count__10891))
{var vec__10893 = chunk__10890.cljs$core$IIndexed$_nth$arity$2(null,i__10892);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10893,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10893,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__10889,chunk__10890,count__10891,i__10892,vec__10893,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__10862_SHARP_,p2__10863_SHARP_,p3__10864_SHARP_,p4__10861_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__10861_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__10861_SHARP_));
});})(seq__10889,chunk__10890,count__10891,i__10892,vec__10893,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__10926 = seq__10889;
var G__10927 = chunk__10890;
var G__10928 = count__10891;
var G__10929 = (i__10892 + 1);
seq__10889 = G__10926;
chunk__10890 = G__10927;
count__10891 = G__10928;
i__10892 = G__10929;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10889);if(temp__4092__auto__)
{var seq__10889__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__10889__$1))
{var c__8022__auto__ = cljs.core.chunk_first(seq__10889__$1);{
var G__10930 = cljs.core.chunk_rest(seq__10889__$1);
var G__10931 = c__8022__auto__;
var G__10932 = cljs.core.count(c__8022__auto__);
var G__10933 = 0;
seq__10889 = G__10930;
chunk__10890 = G__10931;
count__10891 = G__10932;
i__10892 = G__10933;
continue;
}
} else
{var vec__10894 = cljs.core.first(seq__10889__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10894,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10894,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__10889,chunk__10890,count__10891,i__10892,vec__10894,k,v,seq__10889__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__10862_SHARP_,p2__10863_SHARP_,p3__10864_SHARP_,p4__10861_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__10861_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__10861_SHARP_));
});})(seq__10889,chunk__10890,count__10891,i__10892,vec__10894,k,v,seq__10889__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__10934 = cljs.core.next(seq__10889__$1);
var G__10935 = null;
var G__10936 = 0;
var G__10937 = 0;
seq__10889 = G__10934;
chunk__10890 = G__10935;
count__10891 = G__10936;
i__10892 = G__10937;
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
return (function (){var seq__10895 = cljs.core.seq(cljs.core.deref(ons));var chunk__10896 = null;var count__10897 = 0;var i__10898 = 0;while(true){
if((i__10898 < count__10897))
{var vec__10899 = chunk__10896.cljs$core$IIndexed$_nth$arity$2(null,i__10898);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10899,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10899,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__10938 = seq__10895;
var G__10939 = chunk__10896;
var G__10940 = count__10897;
var G__10941 = (i__10898 + 1);
seq__10895 = G__10938;
chunk__10896 = G__10939;
count__10897 = G__10940;
i__10898 = G__10941;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__10895);if(temp__4092__auto__)
{var seq__10895__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__10895__$1))
{var c__8022__auto__ = cljs.core.chunk_first(seq__10895__$1);{
var G__10942 = cljs.core.chunk_rest(seq__10895__$1);
var G__10943 = c__8022__auto__;
var G__10944 = cljs.core.count(c__8022__auto__);
var G__10945 = 0;
seq__10895 = G__10942;
chunk__10896 = G__10943;
count__10897 = G__10944;
i__10898 = G__10945;
continue;
}
} else
{var vec__10900 = cljs.core.first(seq__10895__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10900,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10900,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__10946 = cljs.core.next(seq__10895__$1);
var G__10947 = null;
var G__10948 = 0;
var G__10949 = 0;
seq__10895 = G__10946;
chunk__10896 = G__10947;
count__10897 = G__10948;
i__10898 = G__10949;
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
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__10950_SHARP_,p2__10951_SHARP_){return p1__10950_SHARP_.appendChild(p2__10951_SHARP_);
}):(function (p1__10952_SHARP_,p2__10953_SHARP_){try{return p1__10952_SHARP_.appendChild(p2__10953_SHARP_);
}catch (e10954){if((e10954 instanceof Error))
{var _ = e10954;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e10954;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){jQuery(this$).empty();
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))) : tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__10960){var vec__10966 = p__10960;var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10966,0,null);var _ = cljs.core.nthnext(vec__10966,1);var kids = vec__10966;if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell)))
{tailrecursion.hoplon.replace_children_BANG_(this$,cljs.core.deref(child_cell));
cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__10966,child_cell,_,kids){
return (function (p1__10956_SHARP_,p2__10957_SHARP_,p3__10958_SHARP_,p4__10955_SHARP_){return tailrecursion.hoplon.replace_children_BANG_(this$,p4__10955_SHARP_);
});})(vec__10966,child_cell,_,kids))
);
} else
{var node_10971 = ((function (vec__10966,child_cell,_,kids){
return (function (p1__10959_SHARP_){if(typeof p1__10959_SHARP_ === 'string')
{return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__10959_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__10959_SHARP_));
} else
{if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__10959_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__10959_SHARP_))))
{return p1__10959_SHARP_;
} else
{return null;
}
}
});})(vec__10966,child_cell,_,kids))
;var seq__10967_10972 = cljs.core.seq(cljs.core.keep(node_10971,tailrecursion.hoplon.unsplice(kids)));var chunk__10968_10973 = null;var count__10969_10974 = 0;var i__10970_10975 = 0;while(true){
if((i__10970_10975 < count__10969_10974))
{var x_10976 = chunk__10968_10973.cljs$core$IIndexed$_nth$arity$2(null,i__10970_10975);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_10976) : tailrecursion.hoplon.append_child.call(null,this$,x_10976));
{
var G__10977 = seq__10967_10972;
var G__10978 = chunk__10968_10973;
var G__10979 = count__10969_10974;
var G__10980 = (i__10970_10975 + 1);
seq__10967_10972 = G__10977;
chunk__10968_10973 = G__10978;
count__10969_10974 = G__10979;
i__10970_10975 = G__10980;
continue;
}
} else
{var temp__4092__auto___10981 = cljs.core.seq(seq__10967_10972);if(temp__4092__auto___10981)
{var seq__10967_10982__$1 = temp__4092__auto___10981;if(cljs.core.chunked_seq_QMARK_(seq__10967_10982__$1))
{var c__8022__auto___10983 = cljs.core.chunk_first(seq__10967_10982__$1);{
var G__10984 = cljs.core.chunk_rest(seq__10967_10982__$1);
var G__10985 = c__8022__auto___10983;
var G__10986 = cljs.core.count(c__8022__auto___10983);
var G__10987 = 0;
seq__10967_10972 = G__10984;
chunk__10968_10973 = G__10985;
count__10969_10974 = G__10986;
i__10970_10975 = G__10987;
continue;
}
} else
{var x_10988 = cljs.core.first(seq__10967_10982__$1);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_10988) : tailrecursion.hoplon.append_child.call(null,this$,x_10988));
{
var G__10989 = cljs.core.next(seq__10967_10982__$1);
var G__10990 = null;
var G__10991 = 0;
var G__10992 = 0;
seq__10967_10972 = G__10989;
chunk__10968_10973 = G__10990;
count__10969_10974 = G__10991;
i__10970_10975 = G__10992;
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
var G__11000__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__10994 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10994,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10994,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__10995 = this$;G__10995.hoplonIFn(attr,kids);
return G__10995;
} else
{var G__10996 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__10996,attr);
tailrecursion.hoplon.add_children_BANG_(G__10996,kids);
return G__10996;
}
};
var G__11000 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11000__delegate.call(this,self__,args);};
G__11000.cljs$lang$maxFixedArity = 1;
G__11000.cljs$lang$applyTo = (function (arglist__11001){
var self__ = cljs.core.first(arglist__11001);
var args = cljs.core.rest(arglist__11001);
return G__11000__delegate(self__,args);
});
G__11000.cljs$core$IFn$_invoke$arity$variadic = G__11000__delegate;
return G__11000;
})()
;
Element.prototype.apply = (function (self__,args10993){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10993)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11002__delegate = function (args){var this$ = this;var vec__10997 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10997,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10997,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__10998 = this$;G__10998.hoplonIFn(attr,kids);
return G__10998;
} else
{var G__10999 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__10999,attr);
tailrecursion.hoplon.add_children_BANG_(G__10999,kids);
return G__10999;
}
};
var G__11002 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11002__delegate.call(this,args);};
G__11002.cljs$lang$maxFixedArity = 0;
G__11002.cljs$lang$applyTo = (function (arglist__11003){
var args = cljs.core.seq(arglist__11003);
return G__11002__delegate(args);
});
G__11002.cljs$core$IFn$_invoke$arity$variadic = G__11002__delegate;
return G__11002;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__11004__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new$,args);
};
var G__11004 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11004__delegate.call(this,args);};
G__11004.cljs$lang$maxFixedArity = 0;
G__11004.cljs$lang$applyTo = (function (arglist__11005){
var args = cljs.core.seq(arglist__11005);
return G__11004__delegate(args);
});
G__11004.cljs$core$IFn$_invoke$arity$variadic = G__11004__delegate;
return G__11004;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__11006__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__11006 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11006__delegate.call(this,args);};
G__11006.cljs$lang$maxFixedArity = 0;
G__11006.cljs$lang$applyTo = (function (arglist__11007){
var args = cljs.core.seq(arglist__11007);
return G__11006__delegate(args);
});
G__11006.cljs$core$IFn$_invoke$arity$variadic = G__11006__delegate;
return G__11006;
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
tailrecursion.hoplon.$text = (function $text(p1__11008_SHARP_){return document.createTextNode(p1__11008_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__11009_SHARP_){return document.createComment(p1__11009_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.initialized_QMARK_)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__11010_SHARP_){return p1__11010_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_(tailrecursion.hoplon.initialized_QMARK_,true);
var seq__11015 = cljs.core.seq(cljs.core.deref(tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__11016 = null;var count__11017 = 0;var i__11018 = 0;while(true){
if((i__11018 < count__11017))
{var f = chunk__11016.cljs$core$IIndexed$_nth$arity$2(null,i__11018);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11019 = seq__11015;
var G__11020 = chunk__11016;
var G__11021 = count__11017;
var G__11022 = (i__11018 + 1);
seq__11015 = G__11019;
chunk__11016 = G__11020;
count__11017 = G__11021;
i__11018 = G__11022;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11015);if(temp__4092__auto__)
{var seq__11015__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11015__$1))
{var c__8022__auto__ = cljs.core.chunk_first(seq__11015__$1);{
var G__11023 = cljs.core.chunk_rest(seq__11015__$1);
var G__11024 = c__8022__auto__;
var G__11025 = cljs.core.count(c__8022__auto__);
var G__11026 = 0;
seq__11015 = G__11023;
chunk__11016 = G__11024;
count__11017 = G__11025;
i__11018 = G__11026;
continue;
}
} else
{var f = cljs.core.first(seq__11015__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11027 = cljs.core.next(seq__11015__$1);
var G__11028 = null;
var G__11029 = 0;
var G__11030 = 0;
seq__11015 = G__11027;
chunk__11016 = G__11028;
count__11017 = G__11029;
i__11018 = G__11030;
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__8132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("do!",((function (method_table__8132__auto__,prefer_table__8133__auto__,method_cache__8134__auto__,cached_hierarchy__8135__auto__,hierarchy__8136__auto__){
return (function (elem,key,val){return key;
});})(method_table__8132__auto__,prefer_table__8133__auto__,method_cache__8134__auto__,cached_hierarchy__8135__auto__,hierarchy__8136__auto__))
,cljs.core.constant$keyword$22,hierarchy__8136__auto__,method_table__8132__auto__,prefer_table__8133__auto__,method_cache__8134__auto__,cached_hierarchy__8135__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,key,val){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$11,(function() { 
var G__11031__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__11031 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11031__delegate.call(this,elem,_,args);};
G__11031.cljs$lang$maxFixedArity = 2;
G__11031.cljs$lang$applyTo = (function (arglist__11032){
var elem = cljs.core.first(arglist__11032);
arglist__11032 = cljs.core.next(arglist__11032);
var _ = cljs.core.first(arglist__11032);
var args = cljs.core.rest(arglist__11032);
return G__11031__delegate(elem,_,args);
});
G__11031.cljs$core$IFn$_invoke$arity$variadic = G__11031__delegate;
return G__11031;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$24,(function (elem,_,kvs){var e = jQuery(elem);var seq__11033 = cljs.core.seq(kvs);var chunk__11034 = null;var count__11035 = 0;var i__11036 = 0;while(true){
if((i__11036 < count__11035))
{var vec__11037 = chunk__11034.cljs$core$IIndexed$_nth$arity$2(null,i__11036);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11037,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11037,1,null);var k_11039__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11039__$1);
} else
{e.attr(k_11039__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11039__$1:v));
}
{
var G__11040 = seq__11033;
var G__11041 = chunk__11034;
var G__11042 = count__11035;
var G__11043 = (i__11036 + 1);
seq__11033 = G__11040;
chunk__11034 = G__11041;
count__11035 = G__11042;
i__11036 = G__11043;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11033);if(temp__4092__auto__)
{var seq__11033__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11033__$1))
{var c__8022__auto__ = cljs.core.chunk_first(seq__11033__$1);{
var G__11044 = cljs.core.chunk_rest(seq__11033__$1);
var G__11045 = c__8022__auto__;
var G__11046 = cljs.core.count(c__8022__auto__);
var G__11047 = 0;
seq__11033 = G__11044;
chunk__11034 = G__11045;
count__11035 = G__11046;
i__11036 = G__11047;
continue;
}
} else
{var vec__11038 = cljs.core.first(seq__11033__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11038,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11038,1,null);var k_11048__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11048__$1);
} else
{e.attr(k_11048__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11048__$1:v));
}
{
var G__11049 = cljs.core.next(seq__11033__$1);
var G__11050 = null;
var G__11051 = 0;
var G__11052 = 0;
seq__11033 = G__11049;
chunk__11034 = G__11050;
count__11035 = G__11051;
i__11036 = G__11052;
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
return (function (p1__11053_SHARP_){return cljs.core.zipmap(p1__11053_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));var seq__11054 = cljs.core.seq(clmap);var chunk__11055 = null;var count__11056 = 0;var i__11057 = 0;while(true){
if((i__11057 < count__11056))
{var vec__11058 = chunk__11055.cljs$core$IIndexed$_nth$arity$2(null,i__11057);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11058,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11058,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11060 = seq__11054;
var G__11061 = chunk__11055;
var G__11062 = count__11056;
var G__11063 = (i__11057 + 1);
seq__11054 = G__11060;
chunk__11055 = G__11061;
count__11056 = G__11062;
i__11057 = G__11063;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11054);if(temp__4092__auto__)
{var seq__11054__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11054__$1))
{var c__8022__auto__ = cljs.core.chunk_first(seq__11054__$1);{
var G__11064 = cljs.core.chunk_rest(seq__11054__$1);
var G__11065 = c__8022__auto__;
var G__11066 = cljs.core.count(c__8022__auto__);
var G__11067 = 0;
seq__11054 = G__11064;
chunk__11055 = G__11065;
count__11056 = G__11066;
i__11057 = G__11067;
continue;
}
} else
{var vec__11059 = cljs.core.first(seq__11054__$1);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11059,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11059,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11068 = cljs.core.next(seq__11054__$1);
var G__11069 = null;
var G__11070 = 0;
var G__11071 = 0;
seq__11054 = G__11068;
chunk__11055 = G__11069;
count__11056 = G__11070;
i__11057 = G__11071;
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
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$26,(function (elem,_,kvs){var e = jQuery(elem);var seq__11072 = cljs.core.seq(kvs);var chunk__11073 = null;var count__11074 = 0;var i__11075 = 0;while(true){
if((i__11075 < count__11074))
{var vec__11076 = chunk__11073.cljs$core$IIndexed$_nth$arity$2(null,i__11075);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11076,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11076,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11078 = seq__11072;
var G__11079 = chunk__11073;
var G__11080 = count__11074;
var G__11081 = (i__11075 + 1);
seq__11072 = G__11078;
chunk__11073 = G__11079;
count__11074 = G__11080;
i__11075 = G__11081;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11072);if(temp__4092__auto__)
{var seq__11072__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11072__$1))
{var c__8022__auto__ = cljs.core.chunk_first(seq__11072__$1);{
var G__11082 = cljs.core.chunk_rest(seq__11072__$1);
var G__11083 = c__8022__auto__;
var G__11084 = cljs.core.count(c__8022__auto__);
var G__11085 = 0;
seq__11072 = G__11082;
chunk__11073 = G__11083;
count__11074 = G__11084;
i__11075 = G__11085;
continue;
}
} else
{var vec__11077 = cljs.core.first(seq__11072__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11077,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11077,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11086 = cljs.core.next(seq__11072__$1);
var G__11087 = null;
var G__11088 = 0;
var G__11089 = 0;
seq__11072 = G__11086;
chunk__11073 = G__11087;
count__11074 = G__11088;
i__11075 = G__11089;
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__8132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("on!",((function (method_table__8132__auto__,prefer_table__8133__auto__,method_cache__8134__auto__,cached_hierarchy__8135__auto__,hierarchy__8136__auto__){
return (function (elem,event,callback){return event;
});})(method_table__8132__auto__,prefer_table__8133__auto__,method_cache__8134__auto__,cached_hierarchy__8135__auto__,hierarchy__8136__auto__))
,cljs.core.constant$keyword$22,hierarchy__8136__auto__,method_table__8132__auto__,prefer_table__8133__auto__,method_cache__8134__auto__,cached_hierarchy__8135__auto__));
})();
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,event,callback){return tailrecursion.hoplon.when_dom(elem,(function (){return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(((function (pool_size){
return (function (G__11116,G__11115){return (G__11115.cljs$core$IFn$_invoke$arity$1 ? G__11115.cljs$core$IFn$_invoke$arity$1(G__11116) : G__11115.call(null,G__11116));
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift(((function (pool_size,items_seq){
return (function (G__11117,G__11118){return (G__11117.cljs$core$IFn$_invoke$arity$1 ? G__11117.cljs$core$IFn$_invoke$arity$1(G__11118) : G__11117.call(null,G__11118));
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__11090_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count){
return (function (G__11119,G__11120){return (G__11119 < G__11120);
});})(pool_size,items_seq,cur_count))
).call(null,p1__11090_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__11091_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__11121,G__11123,G__11122){return (G__11121.cljs$core$IFn$_invoke$arity$2 ? G__11121.cljs$core$IFn$_invoke$arity$2(G__11122,G__11123) : G__11121.call(null,G__11122,G__11123));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__11091_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__11137,G__11135,G__11131,G__11132,G__11129,G__11133,G__11128,G__11130,G__11136,G__11134){if(cljs.core.truth_((G__11128 < G__11129)))
{var seq__11124_11138 = cljs.core.seq((G__11130.cljs$core$IFn$_invoke$arity$2 ? G__11130.cljs$core$IFn$_invoke$arity$2(G__11128,G__11129) : G__11130.call(null,G__11128,G__11129)));var chunk__11125_11139 = null;var count__11126_11140 = 0;var i__11127_11141 = 0;while(true){
if(cljs.core.truth_((i__11127_11141 < count__11126_11140)))
{var i_11142 = chunk__11125_11139.cljs$core$IIndexed$_nth$arity$2(null,i__11127_11141);var e_11143 = (G__11131.cljs$core$IFn$_invoke$arity$1 ? G__11131.cljs$core$IFn$_invoke$arity$1((G__11132.cljs$core$IFn$_invoke$arity$1 ? G__11132.cljs$core$IFn$_invoke$arity$1(i_11142) : G__11132.call(null,i_11142))) : G__11131.call(null,(G__11132.cljs$core$IFn$_invoke$arity$1 ? G__11132.cljs$core$IFn$_invoke$arity$1(i_11142) : G__11132.call(null,i_11142)))).call(null,cljs.core.constant$keyword$37,(G__11133.cljs$core$IFn$_invoke$arity$1 ? G__11133.cljs$core$IFn$_invoke$arity$1(i_11142) : G__11133.call(null,i_11142)));if(cljs.core.not(G__11134))
{G__11135.appendChild(e_11143);
} else
{G__11135.insertBefore(e_11143,G__11135.firstChild);
}
{
var G__11144 = seq__11124_11138;
var G__11145 = chunk__11125_11139;
var G__11146 = count__11126_11140;
var G__11147 = (i__11127_11141 + 1);
seq__11124_11138 = G__11144;
chunk__11125_11139 = G__11145;
count__11126_11140 = G__11146;
i__11127_11141 = G__11147;
continue;
}
} else
{var temp__4092__auto___11148 = cljs.core.seq(seq__11124_11138);if(temp__4092__auto___11148)
{var seq__11124_11149__$1 = temp__4092__auto___11148;if(cljs.core.chunked_seq_QMARK_(seq__11124_11149__$1))
{var c__8022__auto___11150 = cljs.core.chunk_first(seq__11124_11149__$1);{
var G__11151 = cljs.core.chunk_rest(seq__11124_11149__$1);
var G__11152 = c__8022__auto___11150;
var G__11153 = cljs.core.count(c__8022__auto___11150);
var G__11154 = 0;
seq__11124_11138 = G__11151;
chunk__11125_11139 = G__11152;
count__11126_11140 = G__11153;
i__11127_11141 = G__11154;
continue;
}
} else
{var i_11155 = cljs.core.first(seq__11124_11149__$1);var e_11156 = (G__11131.cljs$core$IFn$_invoke$arity$1 ? G__11131.cljs$core$IFn$_invoke$arity$1((G__11132.cljs$core$IFn$_invoke$arity$1 ? G__11132.cljs$core$IFn$_invoke$arity$1(i_11155) : G__11132.call(null,i_11155))) : G__11131.call(null,(G__11132.cljs$core$IFn$_invoke$arity$1 ? G__11132.cljs$core$IFn$_invoke$arity$1(i_11155) : G__11132.call(null,i_11155)))).call(null,cljs.core.constant$keyword$37,(G__11133.cljs$core$IFn$_invoke$arity$1 ? G__11133.cljs$core$IFn$_invoke$arity$1(i_11155) : G__11133.call(null,i_11155)));if(cljs.core.not(G__11134))
{G__11135.appendChild(e_11156);
} else
{G__11135.insertBefore(e_11156,G__11135.firstChild);
}
{
var G__11157 = cljs.core.next(seq__11124_11149__$1);
var G__11158 = null;
var G__11159 = 0;
var G__11160 = 0;
seq__11124_11138 = G__11157;
chunk__11125_11139 = G__11158;
count__11126_11140 = G__11159;
i__11127_11141 = G__11160;
continue;
}
}
} else
{}
}
break;
}
return (G__11136.cljs$core$IFn$_invoke$arity$2 ? G__11136.cljs$core$IFn$_invoke$arity$2(G__11137,G__11129) : G__11136.call(null,G__11137,G__11129));
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
var route_cell__0 = (function (){var r = (function (){var ret__8449__auto__ = tailrecursion.javelin.cell(window.location.hash);setInterval(((function (ret__8449__auto__){
return (function (){return cljs.core.reset_BANG_(ret__8449__auto__,window.location.hash);
});})(ret__8449__auto__))
,100);
return tailrecursion.javelin.lift(((function (ret__8449__auto__){
return (function (G__11170){return G__11170;
});})(ret__8449__auto__))
).call(null,ret__8449__auto__);
})();return tailrecursion.javelin.lift(((function (r){
return (function (G__11171,G__11172){if(cljs.core.truth_((G__11171.cljs$core$IFn$_invoke$arity$2 ? G__11171.cljs$core$IFn$_invoke$arity$2("",G__11172) : G__11171.call(null,"",G__11172))))
{return G__11172;
} else
{return null;
}
});})(r))
).call(null,cljs.core.not_EQ_,r);
});
var route_cell__1 = (function (setter_or_dfl){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl)))
{var setter__8450__auto__ = setter_or_dfl;var callback__8451__auto__ = (function (){var or__7266__auto__ = null;if(cljs.core.truth_(or__7266__auto__))
{return or__7266__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8450__auto__,callback__8451__auto__){
return (function (G__11173,G__11174){return G__11173.location.hash = G__11174;
});})(setter__8450__auto__,callback__8451__auto__))
).call(null,window,setter__8450__auto__);
setInterval(((function (setter__8450__auto__,callback__8451__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8450__auto__),window.location.hash))
{(callback__8451__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8451__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8451__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8450__auto__);
} else
{return null;
}
});})(setter__8450__auto__,callback__8451__auto__))
,100);
return setter__8450__auto__;
} else
{var r = route_cell.cljs$core$IFn$_invoke$arity$0();return tailrecursion.javelin.lift(((function (r){
return (function (G__11176,G__11175){var or__7266__auto__ = G__11175;if(cljs.core.truth_(or__7266__auto__))
{return or__7266__auto__;
} else
{return G__11176;
}
});})(r))
).call(null,setter_or_dfl,r);
}
});
var route_cell__2 = (function (setter,callback){var setter__8450__auto__ = setter;var callback__8451__auto__ = (function (){var or__7266__auto__ = callback;if(cljs.core.truth_(or__7266__auto__))
{return or__7266__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8450__auto__,callback__8451__auto__){
return (function (G__11177,G__11178){return G__11177.location.hash = G__11178;
});})(setter__8450__auto__,callback__8451__auto__))
).call(null,window,setter__8450__auto__);
setInterval(((function (setter__8450__auto__,callback__8451__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8450__auto__),window.location.hash))
{(callback__8451__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8451__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8451__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8450__auto__);
} else
{return null;
}
});})(setter__8450__auto__,callback__8451__auto__))
,100);
return setter__8450__auto__;
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
