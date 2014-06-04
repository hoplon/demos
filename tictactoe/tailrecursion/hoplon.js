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
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11779_SHARP_){return (p1__11779_SHARP_ instanceof Node);
}):(function (p1__11780_SHARP_){try{return p1__11780_SHARP_.nodeType;
}catch (e11781){if((e11781 instanceof Error))
{var _ = e11781;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11781;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11782_SHARP_){try{return cljs.core.vector_QMARK_(p1__11782_SHARP_);
}catch (e11783){if((e11783 instanceof Error))
{var _ = e11783;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11783;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11784_SHARP_){try{return cljs.core.seq_QMARK_(p1__11784_SHARP_);
}catch (e11785){if((e11785 instanceof Error))
{var _ = e11785;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11785;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_((function (p1__11786_SHARP_){if(cljs.core.truth_((function (){var and__7798__auto__ = console;if(cljs.core.truth_(and__7798__auto__))
{return console.log;
} else
{return and__7798__auto__;
}
})()))
{return console.log(p1__11786_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e11788){if((e11788 instanceof Error))
{var _ = e11788;return not_found;
} else
{if(cljs.core.constant$keyword$6)
{throw e11788;
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
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__11789_SHARP_){if(cljs.core.truth_((function (){var or__7810__auto__ = (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11789_SHARP_) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__11789_SHARP_));if(cljs.core.truth_(or__7810__auto__))
{return or__7810__auto__;
} else
{return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11789_SHARP_) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__11789_SHARP_));
}
})()))
{return unsplice(p1__11789_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11789_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function parse_args(p__11792){var vec__11794 = p__11792;var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11794,0,null);var tail = cljs.core.nthnext(vec__11794,1);var args = vec__11794;var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_,vec__11794,head,tail,args){
return (function (p1__11790_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,p1__11790_SHARP_)));
});})(kw1_QMARK_,vec__11794,head,tail,args))
;var drkw = ((function (kw1_QMARK_,mkkw,vec__11794,head,tail,args){
return (function (p1__11791_SHARP_){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.drop_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4(2,2,cljs.core.PersistentVector.EMPTY,p1__11791_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__11794,head,tail,args))
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
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__11796_SHARP_,p2__11795_SHARP_){var n = (function (){var s = cljs.core.name(p2__11795_SHARP_);var c = cljs.core.last(s);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c)))
{return s;
} else
{return s.slice(0,-1);
}
})();var p = n.substr(0,3);return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__11795_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11796_SHARP_,p)))?n:n.substr(3)));
});var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");var dos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__11797_SHARP_,p2__11798_SHARP_){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11797_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__11798_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__11821_11839 = cljs.core.seq(attr);var chunk__11822_11840 = null;var count__11823_11841 = 0;var i__11824_11842 = 0;while(true){
if((i__11824_11842 < count__11823_11841))
{var vec__11825_11843 = chunk__11822_11840.cljs$core$IIndexed$_nth$arity$2(null,i__11824_11842);var k_11844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11825_11843,0,null);var v_11845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11825_11843,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11845)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11844) : dokey.call(null,k_11844)),v_11845);
} else
{if(cljs.core.fn_QMARK_(v_11845))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11844) : onkey.call(null,k_11844)),v_11845);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11844) : dokey.call(null,k_11844)),v_11845) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11844) : dokey.call(null,k_11844)),v_11845));
} else
{}
}
}
{
var G__11846 = seq__11821_11839;
var G__11847 = chunk__11822_11840;
var G__11848 = count__11823_11841;
var G__11849 = (i__11824_11842 + 1);
seq__11821_11839 = G__11846;
chunk__11822_11840 = G__11847;
count__11823_11841 = G__11848;
i__11824_11842 = G__11849;
continue;
}
} else
{var temp__4092__auto___11850 = cljs.core.seq(seq__11821_11839);if(temp__4092__auto___11850)
{var seq__11821_11851__$1 = temp__4092__auto___11850;if(cljs.core.chunked_seq_QMARK_(seq__11821_11851__$1))
{var c__8566__auto___11852 = cljs.core.chunk_first(seq__11821_11851__$1);{
var G__11853 = cljs.core.chunk_rest(seq__11821_11851__$1);
var G__11854 = c__8566__auto___11852;
var G__11855 = cljs.core.count(c__8566__auto___11852);
var G__11856 = 0;
seq__11821_11839 = G__11853;
chunk__11822_11840 = G__11854;
count__11823_11841 = G__11855;
i__11824_11842 = G__11856;
continue;
}
} else
{var vec__11826_11857 = cljs.core.first(seq__11821_11851__$1);var k_11858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11826_11857,0,null);var v_11859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11826_11857,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11859)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11858) : dokey.call(null,k_11858)),v_11859);
} else
{if(cljs.core.fn_QMARK_(v_11859))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11858) : onkey.call(null,k_11858)),v_11859);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11858) : dokey.call(null,k_11858)),v_11859) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11858) : dokey.call(null,k_11858)),v_11859));
} else
{}
}
}
{
var G__11860 = cljs.core.next(seq__11821_11851__$1);
var G__11861 = null;
var G__11862 = 0;
var G__11863 = 0;
seq__11821_11839 = G__11860;
chunk__11822_11840 = G__11861;
count__11823_11841 = G__11862;
i__11824_11842 = G__11863;
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
return (function (){var seq__11827 = cljs.core.seq(cljs.core.deref(dos));var chunk__11828 = null;var count__11829 = 0;var i__11830 = 0;while(true){
if((i__11830 < count__11829))
{var vec__11831 = chunk__11828.cljs$core$IIndexed$_nth$arity$2(null,i__11830);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11831,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11831,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11827,chunk__11828,count__11829,i__11830,vec__11831,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11800_SHARP_,p2__11801_SHARP_,p3__11802_SHARP_,p4__11799_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11799_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11799_SHARP_));
});})(seq__11827,chunk__11828,count__11829,i__11830,vec__11831,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11864 = seq__11827;
var G__11865 = chunk__11828;
var G__11866 = count__11829;
var G__11867 = (i__11830 + 1);
seq__11827 = G__11864;
chunk__11828 = G__11865;
count__11829 = G__11866;
i__11830 = G__11867;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11827);if(temp__4092__auto__)
{var seq__11827__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11827__$1))
{var c__8566__auto__ = cljs.core.chunk_first(seq__11827__$1);{
var G__11868 = cljs.core.chunk_rest(seq__11827__$1);
var G__11869 = c__8566__auto__;
var G__11870 = cljs.core.count(c__8566__auto__);
var G__11871 = 0;
seq__11827 = G__11868;
chunk__11828 = G__11869;
count__11829 = G__11870;
i__11830 = G__11871;
continue;
}
} else
{var vec__11832 = cljs.core.first(seq__11827__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11832,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11832,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11827,chunk__11828,count__11829,i__11830,vec__11832,k,v,seq__11827__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11800_SHARP_,p2__11801_SHARP_,p3__11802_SHARP_,p4__11799_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11799_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11799_SHARP_));
});})(seq__11827,chunk__11828,count__11829,i__11830,vec__11832,k,v,seq__11827__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11872 = cljs.core.next(seq__11827__$1);
var G__11873 = null;
var G__11874 = 0;
var G__11875 = 0;
seq__11827 = G__11872;
chunk__11828 = G__11873;
count__11829 = G__11874;
i__11830 = G__11875;
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
return (function (){var seq__11833 = cljs.core.seq(cljs.core.deref(ons));var chunk__11834 = null;var count__11835 = 0;var i__11836 = 0;while(true){
if((i__11836 < count__11835))
{var vec__11837 = chunk__11834.cljs$core$IIndexed$_nth$arity$2(null,i__11836);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11837,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11837,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11876 = seq__11833;
var G__11877 = chunk__11834;
var G__11878 = count__11835;
var G__11879 = (i__11836 + 1);
seq__11833 = G__11876;
chunk__11834 = G__11877;
count__11835 = G__11878;
i__11836 = G__11879;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11833);if(temp__4092__auto__)
{var seq__11833__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11833__$1))
{var c__8566__auto__ = cljs.core.chunk_first(seq__11833__$1);{
var G__11880 = cljs.core.chunk_rest(seq__11833__$1);
var G__11881 = c__8566__auto__;
var G__11882 = cljs.core.count(c__8566__auto__);
var G__11883 = 0;
seq__11833 = G__11880;
chunk__11834 = G__11881;
count__11835 = G__11882;
i__11836 = G__11883;
continue;
}
} else
{var vec__11838 = cljs.core.first(seq__11833__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11838,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11838,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11884 = cljs.core.next(seq__11833__$1);
var G__11885 = null;
var G__11886 = 0;
var G__11887 = 0;
seq__11833 = G__11884;
chunk__11834 = G__11885;
count__11835 = G__11886;
i__11836 = G__11887;
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
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11888_SHARP_,p2__11889_SHARP_){return p1__11888_SHARP_.appendChild(p2__11889_SHARP_);
}):(function (p1__11890_SHARP_,p2__11891_SHARP_){try{return p1__11890_SHARP_.appendChild(p2__11891_SHARP_);
}catch (e11892){if((e11892 instanceof Error))
{var _ = e11892;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11892;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){jQuery(this$).empty();
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))) : tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__11898){var vec__11904 = p__11898;var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11904,0,null);var _ = cljs.core.nthnext(vec__11904,1);var kids = vec__11904;if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell)))
{tailrecursion.hoplon.replace_children_BANG_(this$,cljs.core.deref(child_cell));
cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__11904,child_cell,_,kids){
return (function (p1__11894_SHARP_,p2__11895_SHARP_,p3__11896_SHARP_,p4__11893_SHARP_){return tailrecursion.hoplon.replace_children_BANG_(this$,p4__11893_SHARP_);
});})(vec__11904,child_cell,_,kids))
);
} else
{var node_11909 = ((function (vec__11904,child_cell,_,kids){
return (function (p1__11897_SHARP_){if(typeof p1__11897_SHARP_ === 'string')
{return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__11897_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__11897_SHARP_));
} else
{if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__11897_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__11897_SHARP_))))
{return p1__11897_SHARP_;
} else
{return null;
}
}
});})(vec__11904,child_cell,_,kids))
;var seq__11905_11910 = cljs.core.seq(cljs.core.keep(node_11909,tailrecursion.hoplon.unsplice(kids)));var chunk__11906_11911 = null;var count__11907_11912 = 0;var i__11908_11913 = 0;while(true){
if((i__11908_11913 < count__11907_11912))
{var x_11914 = chunk__11906_11911.cljs$core$IIndexed$_nth$arity$2(null,i__11908_11913);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11914) : tailrecursion.hoplon.append_child.call(null,this$,x_11914));
{
var G__11915 = seq__11905_11910;
var G__11916 = chunk__11906_11911;
var G__11917 = count__11907_11912;
var G__11918 = (i__11908_11913 + 1);
seq__11905_11910 = G__11915;
chunk__11906_11911 = G__11916;
count__11907_11912 = G__11917;
i__11908_11913 = G__11918;
continue;
}
} else
{var temp__4092__auto___11919 = cljs.core.seq(seq__11905_11910);if(temp__4092__auto___11919)
{var seq__11905_11920__$1 = temp__4092__auto___11919;if(cljs.core.chunked_seq_QMARK_(seq__11905_11920__$1))
{var c__8566__auto___11921 = cljs.core.chunk_first(seq__11905_11920__$1);{
var G__11922 = cljs.core.chunk_rest(seq__11905_11920__$1);
var G__11923 = c__8566__auto___11921;
var G__11924 = cljs.core.count(c__8566__auto___11921);
var G__11925 = 0;
seq__11905_11910 = G__11922;
chunk__11906_11911 = G__11923;
count__11907_11912 = G__11924;
i__11908_11913 = G__11925;
continue;
}
} else
{var x_11926 = cljs.core.first(seq__11905_11920__$1);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11926) : tailrecursion.hoplon.append_child.call(null,this$,x_11926));
{
var G__11927 = cljs.core.next(seq__11905_11920__$1);
var G__11928 = null;
var G__11929 = 0;
var G__11930 = 0;
seq__11905_11910 = G__11927;
chunk__11906_11911 = G__11928;
count__11907_11912 = G__11929;
i__11908_11913 = G__11930;
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
var G__11938__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__11932 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11933 = this$;G__11933.hoplonIFn(attr,kids);
return G__11933;
} else
{var G__11934 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11934,attr);
tailrecursion.hoplon.add_children_BANG_(G__11934,kids);
return G__11934;
}
};
var G__11938 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11938__delegate.call(this,self__,args);};
G__11938.cljs$lang$maxFixedArity = 1;
G__11938.cljs$lang$applyTo = (function (arglist__11939){
var self__ = cljs.core.first(arglist__11939);
var args = cljs.core.rest(arglist__11939);
return G__11938__delegate(self__,args);
});
G__11938.cljs$core$IFn$_invoke$arity$variadic = G__11938__delegate;
return G__11938;
})()
;
Element.prototype.apply = (function (self__,args11931){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11931)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11940__delegate = function (args){var this$ = this;var vec__11935 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11935,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11935,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11936 = this$;G__11936.hoplonIFn(attr,kids);
return G__11936;
} else
{var G__11937 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11937,attr);
tailrecursion.hoplon.add_children_BANG_(G__11937,kids);
return G__11937;
}
};
var G__11940 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11940__delegate.call(this,args);};
G__11940.cljs$lang$maxFixedArity = 0;
G__11940.cljs$lang$applyTo = (function (arglist__11941){
var args = cljs.core.seq(arglist__11941);
return G__11940__delegate(args);
});
G__11940.cljs$core$IFn$_invoke$arity$variadic = G__11940__delegate;
return G__11940;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__11942__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new$,args);
};
var G__11942 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11942__delegate.call(this,args);};
G__11942.cljs$lang$maxFixedArity = 0;
G__11942.cljs$lang$applyTo = (function (arglist__11943){
var args = cljs.core.seq(arglist__11943);
return G__11942__delegate(args);
});
G__11942.cljs$core$IFn$_invoke$arity$variadic = G__11942__delegate;
return G__11942;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__11944__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__11944 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11944__delegate.call(this,args);};
G__11944.cljs$lang$maxFixedArity = 0;
G__11944.cljs$lang$applyTo = (function (arglist__11945){
var args = cljs.core.seq(arglist__11945);
return G__11944__delegate(args);
});
G__11944.cljs$core$IFn$_invoke$arity$variadic = G__11944__delegate;
return G__11944;
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
tailrecursion.hoplon.$text = (function $text(p1__11946_SHARP_){return document.createTextNode(p1__11946_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__11947_SHARP_){return document.createComment(p1__11947_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.initialized_QMARK_)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__11948_SHARP_){return p1__11948_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_(tailrecursion.hoplon.initialized_QMARK_,true);
var seq__11953 = cljs.core.seq(cljs.core.deref(tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__11954 = null;var count__11955 = 0;var i__11956 = 0;while(true){
if((i__11956 < count__11955))
{var f = chunk__11954.cljs$core$IIndexed$_nth$arity$2(null,i__11956);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11957 = seq__11953;
var G__11958 = chunk__11954;
var G__11959 = count__11955;
var G__11960 = (i__11956 + 1);
seq__11953 = G__11957;
chunk__11954 = G__11958;
count__11955 = G__11959;
i__11956 = G__11960;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11953);if(temp__4092__auto__)
{var seq__11953__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11953__$1))
{var c__8566__auto__ = cljs.core.chunk_first(seq__11953__$1);{
var G__11961 = cljs.core.chunk_rest(seq__11953__$1);
var G__11962 = c__8566__auto__;
var G__11963 = cljs.core.count(c__8566__auto__);
var G__11964 = 0;
seq__11953 = G__11961;
chunk__11954 = G__11962;
count__11955 = G__11963;
i__11956 = G__11964;
continue;
}
} else
{var f = cljs.core.first(seq__11953__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11965 = cljs.core.next(seq__11953__$1);
var G__11966 = null;
var G__11967 = 0;
var G__11968 = 0;
seq__11953 = G__11965;
chunk__11954 = G__11966;
count__11955 = G__11967;
i__11956 = G__11968;
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__8676__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8677__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8678__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8679__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8680__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("do!",((function (method_table__8676__auto__,prefer_table__8677__auto__,method_cache__8678__auto__,cached_hierarchy__8679__auto__,hierarchy__8680__auto__){
return (function (elem,key,val){return key;
});})(method_table__8676__auto__,prefer_table__8677__auto__,method_cache__8678__auto__,cached_hierarchy__8679__auto__,hierarchy__8680__auto__))
,cljs.core.constant$keyword$22,hierarchy__8680__auto__,method_table__8676__auto__,prefer_table__8677__auto__,method_cache__8678__auto__,cached_hierarchy__8679__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,key,val){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$11,(function() { 
var G__11969__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__11969 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11969__delegate.call(this,elem,_,args);};
G__11969.cljs$lang$maxFixedArity = 2;
G__11969.cljs$lang$applyTo = (function (arglist__11970){
var elem = cljs.core.first(arglist__11970);
arglist__11970 = cljs.core.next(arglist__11970);
var _ = cljs.core.first(arglist__11970);
var args = cljs.core.rest(arglist__11970);
return G__11969__delegate(elem,_,args);
});
G__11969.cljs$core$IFn$_invoke$arity$variadic = G__11969__delegate;
return G__11969;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$24,(function (elem,_,kvs){var e = jQuery(elem);var seq__11971 = cljs.core.seq(kvs);var chunk__11972 = null;var count__11973 = 0;var i__11974 = 0;while(true){
if((i__11974 < count__11973))
{var vec__11975 = chunk__11972.cljs$core$IIndexed$_nth$arity$2(null,i__11974);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11975,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11975,1,null);var k_11977__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11977__$1);
} else
{e.attr(k_11977__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11977__$1:v));
}
{
var G__11978 = seq__11971;
var G__11979 = chunk__11972;
var G__11980 = count__11973;
var G__11981 = (i__11974 + 1);
seq__11971 = G__11978;
chunk__11972 = G__11979;
count__11973 = G__11980;
i__11974 = G__11981;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11971);if(temp__4092__auto__)
{var seq__11971__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11971__$1))
{var c__8566__auto__ = cljs.core.chunk_first(seq__11971__$1);{
var G__11982 = cljs.core.chunk_rest(seq__11971__$1);
var G__11983 = c__8566__auto__;
var G__11984 = cljs.core.count(c__8566__auto__);
var G__11985 = 0;
seq__11971 = G__11982;
chunk__11972 = G__11983;
count__11973 = G__11984;
i__11974 = G__11985;
continue;
}
} else
{var vec__11976 = cljs.core.first(seq__11971__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11976,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11976,1,null);var k_11986__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11986__$1);
} else
{e.attr(k_11986__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11986__$1:v));
}
{
var G__11987 = cljs.core.next(seq__11971__$1);
var G__11988 = null;
var G__11989 = 0;
var G__11990 = 0;
seq__11971 = G__11987;
chunk__11972 = G__11988;
count__11973 = G__11989;
i__11974 = G__11990;
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
return (function (p1__11991_SHARP_){return cljs.core.zipmap(p1__11991_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));var seq__11992 = cljs.core.seq(clmap);var chunk__11993 = null;var count__11994 = 0;var i__11995 = 0;while(true){
if((i__11995 < count__11994))
{var vec__11996 = chunk__11993.cljs$core$IIndexed$_nth$arity$2(null,i__11995);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11996,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11996,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11998 = seq__11992;
var G__11999 = chunk__11993;
var G__12000 = count__11994;
var G__12001 = (i__11995 + 1);
seq__11992 = G__11998;
chunk__11993 = G__11999;
count__11994 = G__12000;
i__11995 = G__12001;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11992);if(temp__4092__auto__)
{var seq__11992__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11992__$1))
{var c__8566__auto__ = cljs.core.chunk_first(seq__11992__$1);{
var G__12002 = cljs.core.chunk_rest(seq__11992__$1);
var G__12003 = c__8566__auto__;
var G__12004 = cljs.core.count(c__8566__auto__);
var G__12005 = 0;
seq__11992 = G__12002;
chunk__11993 = G__12003;
count__11994 = G__12004;
i__11995 = G__12005;
continue;
}
} else
{var vec__11997 = cljs.core.first(seq__11992__$1);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11997,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11997,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__12006 = cljs.core.next(seq__11992__$1);
var G__12007 = null;
var G__12008 = 0;
var G__12009 = 0;
seq__11992 = G__12006;
chunk__11993 = G__12007;
count__11994 = G__12008;
i__11995 = G__12009;
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
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$26,(function (elem,_,kvs){var e = jQuery(elem);var seq__12010 = cljs.core.seq(kvs);var chunk__12011 = null;var count__12012 = 0;var i__12013 = 0;while(true){
if((i__12013 < count__12012))
{var vec__12014 = chunk__12011.cljs$core$IIndexed$_nth$arity$2(null,i__12013);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12014,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12014,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__12016 = seq__12010;
var G__12017 = chunk__12011;
var G__12018 = count__12012;
var G__12019 = (i__12013 + 1);
seq__12010 = G__12016;
chunk__12011 = G__12017;
count__12012 = G__12018;
i__12013 = G__12019;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__12010);if(temp__4092__auto__)
{var seq__12010__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__12010__$1))
{var c__8566__auto__ = cljs.core.chunk_first(seq__12010__$1);{
var G__12020 = cljs.core.chunk_rest(seq__12010__$1);
var G__12021 = c__8566__auto__;
var G__12022 = cljs.core.count(c__8566__auto__);
var G__12023 = 0;
seq__12010 = G__12020;
chunk__12011 = G__12021;
count__12012 = G__12022;
i__12013 = G__12023;
continue;
}
} else
{var vec__12015 = cljs.core.first(seq__12010__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12015,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12015,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__12024 = cljs.core.next(seq__12010__$1);
var G__12025 = null;
var G__12026 = 0;
var G__12027 = 0;
seq__12010 = G__12024;
chunk__12011 = G__12025;
count__12012 = G__12026;
i__12013 = G__12027;
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__8676__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8677__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8678__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8679__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8680__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("on!",((function (method_table__8676__auto__,prefer_table__8677__auto__,method_cache__8678__auto__,cached_hierarchy__8679__auto__,hierarchy__8680__auto__){
return (function (elem,event,callback){return event;
});})(method_table__8676__auto__,prefer_table__8677__auto__,method_cache__8678__auto__,cached_hierarchy__8679__auto__,hierarchy__8680__auto__))
,cljs.core.constant$keyword$22,hierarchy__8680__auto__,method_table__8676__auto__,prefer_table__8677__auto__,method_cache__8678__auto__,cached_hierarchy__8679__auto__));
})();
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,event,callback){return tailrecursion.hoplon.when_dom(elem,(function (){return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(((function (pool_size){
return (function (G__12054,G__12053){return (G__12053.cljs$core$IFn$_invoke$arity$1 ? G__12053.cljs$core$IFn$_invoke$arity$1(G__12054) : G__12053.call(null,G__12054));
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift(((function (pool_size,items_seq){
return (function (G__12055,G__12056){return (G__12055.cljs$core$IFn$_invoke$arity$1 ? G__12055.cljs$core$IFn$_invoke$arity$1(G__12056) : G__12055.call(null,G__12056));
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__12028_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count){
return (function (G__12057,G__12058){return (G__12057 < G__12058);
});})(pool_size,items_seq,cur_count))
).call(null,p1__12028_SHARP_,cur_count);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__12029_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__12061,G__12059,G__12060){return (G__12059.cljs$core$IFn$_invoke$arity$2 ? G__12059.cljs$core$IFn$_invoke$arity$2(G__12060,G__12061) : G__12059.call(null,G__12060,G__12061));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,p1__12029_SHARP_,tailrecursion.hoplon.safe_nth,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__12075,G__12073,G__12069,G__12070,G__12067,G__12071,G__12066,G__12068,G__12074,G__12072){if(cljs.core.truth_((G__12066 < G__12067)))
{var seq__12062_12076 = cljs.core.seq((G__12068.cljs$core$IFn$_invoke$arity$2 ? G__12068.cljs$core$IFn$_invoke$arity$2(G__12066,G__12067) : G__12068.call(null,G__12066,G__12067)));var chunk__12063_12077 = null;var count__12064_12078 = 0;var i__12065_12079 = 0;while(true){
if(cljs.core.truth_((i__12065_12079 < count__12064_12078)))
{var i_12080 = chunk__12063_12077.cljs$core$IIndexed$_nth$arity$2(null,i__12065_12079);var e_12081 = (G__12069.cljs$core$IFn$_invoke$arity$1 ? G__12069.cljs$core$IFn$_invoke$arity$1((G__12070.cljs$core$IFn$_invoke$arity$1 ? G__12070.cljs$core$IFn$_invoke$arity$1(i_12080) : G__12070.call(null,i_12080))) : G__12069.call(null,(G__12070.cljs$core$IFn$_invoke$arity$1 ? G__12070.cljs$core$IFn$_invoke$arity$1(i_12080) : G__12070.call(null,i_12080)))).call(null,cljs.core.constant$keyword$37,(G__12071.cljs$core$IFn$_invoke$arity$1 ? G__12071.cljs$core$IFn$_invoke$arity$1(i_12080) : G__12071.call(null,i_12080)));if(cljs.core.not(G__12072))
{G__12073.appendChild(e_12081);
} else
{G__12073.insertBefore(e_12081,G__12073.firstChild);
}
{
var G__12082 = seq__12062_12076;
var G__12083 = chunk__12063_12077;
var G__12084 = count__12064_12078;
var G__12085 = (i__12065_12079 + 1);
seq__12062_12076 = G__12082;
chunk__12063_12077 = G__12083;
count__12064_12078 = G__12084;
i__12065_12079 = G__12085;
continue;
}
} else
{var temp__4092__auto___12086 = cljs.core.seq(seq__12062_12076);if(temp__4092__auto___12086)
{var seq__12062_12087__$1 = temp__4092__auto___12086;if(cljs.core.chunked_seq_QMARK_(seq__12062_12087__$1))
{var c__8566__auto___12088 = cljs.core.chunk_first(seq__12062_12087__$1);{
var G__12089 = cljs.core.chunk_rest(seq__12062_12087__$1);
var G__12090 = c__8566__auto___12088;
var G__12091 = cljs.core.count(c__8566__auto___12088);
var G__12092 = 0;
seq__12062_12076 = G__12089;
chunk__12063_12077 = G__12090;
count__12064_12078 = G__12091;
i__12065_12079 = G__12092;
continue;
}
} else
{var i_12093 = cljs.core.first(seq__12062_12087__$1);var e_12094 = (G__12069.cljs$core$IFn$_invoke$arity$1 ? G__12069.cljs$core$IFn$_invoke$arity$1((G__12070.cljs$core$IFn$_invoke$arity$1 ? G__12070.cljs$core$IFn$_invoke$arity$1(i_12093) : G__12070.call(null,i_12093))) : G__12069.call(null,(G__12070.cljs$core$IFn$_invoke$arity$1 ? G__12070.cljs$core$IFn$_invoke$arity$1(i_12093) : G__12070.call(null,i_12093)))).call(null,cljs.core.constant$keyword$37,(G__12071.cljs$core$IFn$_invoke$arity$1 ? G__12071.cljs$core$IFn$_invoke$arity$1(i_12093) : G__12071.call(null,i_12093)));if(cljs.core.not(G__12072))
{G__12073.appendChild(e_12094);
} else
{G__12073.insertBefore(e_12094,G__12073.firstChild);
}
{
var G__12095 = cljs.core.next(seq__12062_12087__$1);
var G__12096 = null;
var G__12097 = 0;
var G__12098 = 0;
seq__12062_12076 = G__12095;
chunk__12063_12077 = G__12096;
count__12064_12078 = G__12097;
i__12065_12079 = G__12098;
continue;
}
}
} else
{}
}
break;
}
return (G__12074.cljs$core$IFn$_invoke$arity$2 ? G__12074.cljs$core$IFn$_invoke$arity$2(G__12075,G__12067) : G__12074.call(null,G__12075,G__12067));
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
var route_cell__0 = (function (){var r = (function (){var ret__8993__auto__ = tailrecursion.javelin.cell(window.location.hash);setInterval(((function (ret__8993__auto__){
return (function (){return cljs.core.reset_BANG_(ret__8993__auto__,window.location.hash);
});})(ret__8993__auto__))
,100);
return tailrecursion.javelin.lift(((function (ret__8993__auto__){
return (function (G__12108){return G__12108;
});})(ret__8993__auto__))
).call(null,ret__8993__auto__);
})();return tailrecursion.javelin.lift(((function (r){
return (function (G__12109,G__12110){if(cljs.core.truth_((G__12109.cljs$core$IFn$_invoke$arity$2 ? G__12109.cljs$core$IFn$_invoke$arity$2("",G__12110) : G__12109.call(null,"",G__12110))))
{return G__12110;
} else
{return null;
}
});})(r))
).call(null,cljs.core.not_EQ_,r);
});
var route_cell__1 = (function (setter_or_dfl){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl)))
{var setter__8994__auto__ = setter_or_dfl;var callback__8995__auto__ = (function (){var or__7810__auto__ = null;if(cljs.core.truth_(or__7810__auto__))
{return or__7810__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8994__auto__,callback__8995__auto__){
return (function (G__12112,G__12111){return G__12111.location.hash = G__12112;
});})(setter__8994__auto__,callback__8995__auto__))
).call(null,setter__8994__auto__,window);
setInterval(((function (setter__8994__auto__,callback__8995__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8994__auto__),window.location.hash))
{(callback__8995__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8995__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8995__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8994__auto__);
} else
{return null;
}
});})(setter__8994__auto__,callback__8995__auto__))
,100);
return setter__8994__auto__;
} else
{var r = route_cell.cljs$core$IFn$_invoke$arity$0();return tailrecursion.javelin.lift(((function (r){
return (function (G__12114,G__12113){var or__7810__auto__ = G__12113;if(cljs.core.truth_(or__7810__auto__))
{return or__7810__auto__;
} else
{return G__12114;
}
});})(r))
).call(null,setter_or_dfl,r);
}
});
var route_cell__2 = (function (setter,callback){var setter__8994__auto__ = setter;var callback__8995__auto__ = (function (){var or__7810__auto__ = callback;if(cljs.core.truth_(or__7810__auto__))
{return or__7810__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8994__auto__,callback__8995__auto__){
return (function (G__12116,G__12115){return G__12115.location.hash = G__12116;
});})(setter__8994__auto__,callback__8995__auto__))
).call(null,setter__8994__auto__,window);
setInterval(((function (setter__8994__auto__,callback__8995__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8994__auto__),window.location.hash))
{(callback__8995__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8995__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8995__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8994__auto__);
} else
{return null;
}
});})(setter__8994__auto__,callback__8995__auto__))
,100);
return setter__8994__auto__;
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
