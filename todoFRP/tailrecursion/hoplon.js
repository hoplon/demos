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
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11106_SHARP_){return (p1__11106_SHARP_ instanceof Node);
}):(function (p1__11107_SHARP_){try{return p1__11107_SHARP_.nodeType;
}catch (e11108){if((e11108 instanceof Error))
{var _ = e11108;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11108;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__11109_SHARP_){try{return cljs.core.vector_QMARK_(p1__11109_SHARP_);
}catch (e11110){if((e11110 instanceof Error))
{var _ = e11110;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11110;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__11111_SHARP_){try{return cljs.core.seq_QMARK_(p1__11111_SHARP_);
}catch (e11112){if((e11112 instanceof Error))
{var _ = e11112;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11112;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_((function (p1__11113_SHARP_){if(cljs.core.truth_((function (){var and__7257__auto__ = console;if(cljs.core.truth_(and__7257__auto__))
{return console.log;
} else
{return and__7257__auto__;
}
})()))
{return console.log(p1__11113_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e11115){if((e11115 instanceof Error))
{var _ = e11115;return not_found;
} else
{if(cljs.core.constant$keyword$6)
{throw e11115;
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
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__11116_SHARP_){if(cljs.core.truth_((function (){var or__7269__auto__ = (tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11116_SHARP_) : tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__11116_SHARP_));if(cljs.core.truth_(or__7269__auto__))
{return or__7269__auto__;
} else
{return (tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(p1__11116_SHARP_) : tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__11116_SHARP_));
}
})()))
{return unsplice(p1__11116_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11116_SHARP_], null);
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
tailrecursion.hoplon.parse_args = (function parse_args(p__11119){var vec__11121 = p__11119;var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11121,0,null);var tail = cljs.core.nthnext(vec__11121,1);var args = vec__11121;var kw1_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_,vec__11121,head,tail,args){
return (function (p1__11117_SHARP_){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.take_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,p1__11117_SHARP_)));
});})(kw1_QMARK_,vec__11121,head,tail,args))
;var drkw = ((function (kw1_QMARK_,mkkw,vec__11121,head,tail,args){
return (function (p1__11118_SHARP_){return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.drop_while(kw1_QMARK_,cljs.core.partition.cljs$core$IFn$_invoke$arity$4(2,2,cljs.core.PersistentVector.EMPTY,p1__11118_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__11121,head,tail,args))
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
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__11123_SHARP_,p2__11122_SHARP_){var n = (function (){var s = cljs.core.name(p2__11122_SHARP_);var c = cljs.core.last(s);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",c)))
{return s;
} else
{return s.slice(0,-1);
}
})();var p = n.substr(0,3);return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p2__11122_SHARP_),((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11123_SHARP_,p)))?n:n.substr(3)));
});var dokey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"do-");var onkey = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(key_STAR_,"on-");var dos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__11124_SHARP_,p2__11125_SHARP_){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.into(cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11124_SHARP_,/ /)),clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__11125_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__11148_11166 = cljs.core.seq(attr);var chunk__11149_11167 = null;var count__11150_11168 = 0;var i__11151_11169 = 0;while(true){
if((i__11151_11169 < count__11150_11168))
{var vec__11152_11170 = chunk__11149_11167.cljs$core$IIndexed$_nth$arity$2(null,i__11151_11169);var k_11171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11152_11170,0,null);var v_11172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11152_11170,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11172)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11171) : dokey.call(null,k_11171)),v_11172);
} else
{if(cljs.core.fn_QMARK_(v_11172))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11171) : onkey.call(null,k_11171)),v_11172);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11171) : dokey.call(null,k_11171)),v_11172) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11171) : dokey.call(null,k_11171)),v_11172));
} else
{}
}
}
{
var G__11173 = seq__11148_11166;
var G__11174 = chunk__11149_11167;
var G__11175 = count__11150_11168;
var G__11176 = (i__11151_11169 + 1);
seq__11148_11166 = G__11173;
chunk__11149_11167 = G__11174;
count__11150_11168 = G__11175;
i__11151_11169 = G__11176;
continue;
}
} else
{var temp__4092__auto___11177 = cljs.core.seq(seq__11148_11166);if(temp__4092__auto___11177)
{var seq__11148_11178__$1 = temp__4092__auto___11177;if(cljs.core.chunked_seq_QMARK_(seq__11148_11178__$1))
{var c__8025__auto___11179 = cljs.core.chunk_first(seq__11148_11178__$1);{
var G__11180 = cljs.core.chunk_rest(seq__11148_11178__$1);
var G__11181 = c__8025__auto___11179;
var G__11182 = cljs.core.count(c__8025__auto___11179);
var G__11183 = 0;
seq__11148_11166 = G__11180;
chunk__11149_11167 = G__11181;
count__11150_11168 = G__11182;
i__11151_11169 = G__11183;
continue;
}
} else
{var vec__11153_11184 = cljs.core.first(seq__11148_11178__$1);var k_11185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11153_11184,0,null);var v_11186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11153_11184,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(v_11186)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dos,cljs.core.assoc,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11185) : dokey.call(null,k_11185)),v_11186);
} else
{if(cljs.core.fn_QMARK_(v_11186))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ons,cljs.core.assoc,(onkey.cljs$core$IFn$_invoke$arity$1 ? onkey.cljs$core$IFn$_invoke$arity$1(k_11185) : onkey.call(null,k_11185)),v_11186);
} else
{if(cljs.core.constant$keyword$6)
{(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11185) : dokey.call(null,k_11185)),v_11186) : tailrecursion.hoplon.do_BANG_.call(null,this$,(dokey.cljs$core$IFn$_invoke$arity$1 ? dokey.cljs$core$IFn$_invoke$arity$1(k_11185) : dokey.call(null,k_11185)),v_11186));
} else
{}
}
}
{
var G__11187 = cljs.core.next(seq__11148_11178__$1);
var G__11188 = null;
var G__11189 = 0;
var G__11190 = 0;
seq__11148_11166 = G__11187;
chunk__11149_11167 = G__11188;
count__11150_11168 = G__11189;
i__11151_11169 = G__11190;
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
return (function (){var seq__11154 = cljs.core.seq(cljs.core.deref(dos));var chunk__11155 = null;var count__11156 = 0;var i__11157 = 0;while(true){
if((i__11157 < count__11156))
{var vec__11158 = chunk__11155.cljs$core$IIndexed$_nth$arity$2(null,i__11157);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11158,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11158,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11154,chunk__11155,count__11156,i__11157,vec__11158,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11127_SHARP_,p2__11128_SHARP_,p3__11129_SHARP_,p4__11126_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11126_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11126_SHARP_));
});})(seq__11154,chunk__11155,count__11156,i__11157,vec__11158,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11191 = seq__11154;
var G__11192 = chunk__11155;
var G__11193 = count__11156;
var G__11194 = (i__11157 + 1);
seq__11154 = G__11191;
chunk__11155 = G__11192;
count__11156 = G__11193;
i__11157 = G__11194;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11154);if(temp__4092__auto__)
{var seq__11154__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11154__$1))
{var c__8025__auto__ = cljs.core.chunk_first(seq__11154__$1);{
var G__11195 = cljs.core.chunk_rest(seq__11154__$1);
var G__11196 = c__8025__auto__;
var G__11197 = cljs.core.count(c__8025__auto__);
var G__11198 = 0;
seq__11154 = G__11195;
chunk__11155 = G__11196;
count__11156 = G__11197;
i__11157 = G__11198;
continue;
}
} else
{var vec__11159 = cljs.core.first(seq__11154__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11159,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11159,1,null);(tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,cljs.core.deref(v)) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref(v)));
cljs.core.add_watch(v,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (seq__11154,chunk__11155,count__11156,i__11157,vec__11159,k,v,seq__11154__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__11127_SHARP_,p2__11128_SHARP_,p3__11129_SHARP_,p4__11126_SHARP_){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,p4__11126_SHARP_) : tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__11126_SHARP_));
});})(seq__11154,chunk__11155,count__11156,i__11157,vec__11159,k,v,seq__11154__$1,temp__4092__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__11199 = cljs.core.next(seq__11154__$1);
var G__11200 = null;
var G__11201 = 0;
var G__11202 = 0;
seq__11154 = G__11199;
chunk__11155 = G__11200;
count__11156 = G__11201;
i__11157 = G__11202;
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
return (function (){var seq__11160 = cljs.core.seq(cljs.core.deref(ons));var chunk__11161 = null;var count__11162 = 0;var i__11163 = 0;while(true){
if((i__11163 < count__11162))
{var vec__11164 = chunk__11161.cljs$core$IIndexed$_nth$arity$2(null,i__11163);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11164,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11164,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11203 = seq__11160;
var G__11204 = chunk__11161;
var G__11205 = count__11162;
var G__11206 = (i__11163 + 1);
seq__11160 = G__11203;
chunk__11161 = G__11204;
count__11162 = G__11205;
i__11163 = G__11206;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11160);if(temp__4092__auto__)
{var seq__11160__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11160__$1))
{var c__8025__auto__ = cljs.core.chunk_first(seq__11160__$1);{
var G__11207 = cljs.core.chunk_rest(seq__11160__$1);
var G__11208 = c__8025__auto__;
var G__11209 = cljs.core.count(c__8025__auto__);
var G__11210 = 0;
seq__11160 = G__11207;
chunk__11161 = G__11208;
count__11162 = G__11209;
i__11163 = G__11210;
continue;
}
} else
{var vec__11165 = cljs.core.first(seq__11160__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11165,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11165,1,null);(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$,k,v) : tailrecursion.hoplon.on_BANG_.call(null,this$,k,v));
{
var G__11211 = cljs.core.next(seq__11160__$1);
var G__11212 = null;
var G__11213 = 0;
var G__11214 = 0;
seq__11160 = G__11211;
chunk__11161 = G__11212;
count__11162 = G__11213;
i__11163 = G__11214;
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
tailrecursion.hoplon.append_child = ((cljs.core.not(tailrecursion.hoplon.is_ie8))?(function (p1__11215_SHARP_,p2__11216_SHARP_){return p1__11215_SHARP_.appendChild(p2__11216_SHARP_);
}):(function (p1__11217_SHARP_,p2__11218_SHARP_){try{return p1__11217_SHARP_.appendChild(p2__11218_SHARP_);
}catch (e11219){if((e11219 instanceof Error))
{var _ = e11219;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11219;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){jQuery(this$).empty();
return (tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.add_children_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))) : tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_(new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null))));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__11225){var vec__11231 = p__11225;var child_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11231,0,null);var _ = cljs.core.nthnext(vec__11231,1);var kids = vec__11231;if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(child_cell)))
{tailrecursion.hoplon.replace_children_BANG_(this$,cljs.core.deref(child_cell));
cljs.core.add_watch(child_cell,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),((function (vec__11231,child_cell,_,kids){
return (function (p1__11221_SHARP_,p2__11222_SHARP_,p3__11223_SHARP_,p4__11220_SHARP_){return tailrecursion.hoplon.replace_children_BANG_(this$,p4__11220_SHARP_);
});})(vec__11231,child_cell,_,kids))
);
} else
{var node_11236 = ((function (vec__11231,child_cell,_,kids){
return (function (p1__11224_SHARP_){if(typeof p1__11224_SHARP_ === 'string')
{return (tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.$text.cljs$core$IFn$_invoke$arity$1(p1__11224_SHARP_) : tailrecursion.hoplon.$text.call(null,p1__11224_SHARP_));
} else
{if(cljs.core.truth_((tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__11224_SHARP_) : tailrecursion.hoplon.node_QMARK_.call(null,p1__11224_SHARP_))))
{return p1__11224_SHARP_;
} else
{return null;
}
}
});})(vec__11231,child_cell,_,kids))
;var seq__11232_11237 = cljs.core.seq(cljs.core.keep(node_11236,tailrecursion.hoplon.unsplice(kids)));var chunk__11233_11238 = null;var count__11234_11239 = 0;var i__11235_11240 = 0;while(true){
if((i__11235_11240 < count__11234_11239))
{var x_11241 = chunk__11233_11238.cljs$core$IIndexed$_nth$arity$2(null,i__11235_11240);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11241) : tailrecursion.hoplon.append_child.call(null,this$,x_11241));
{
var G__11242 = seq__11232_11237;
var G__11243 = chunk__11233_11238;
var G__11244 = count__11234_11239;
var G__11245 = (i__11235_11240 + 1);
seq__11232_11237 = G__11242;
chunk__11233_11238 = G__11243;
count__11234_11239 = G__11244;
i__11235_11240 = G__11245;
continue;
}
} else
{var temp__4092__auto___11246 = cljs.core.seq(seq__11232_11237);if(temp__4092__auto___11246)
{var seq__11232_11247__$1 = temp__4092__auto___11246;if(cljs.core.chunked_seq_QMARK_(seq__11232_11247__$1))
{var c__8025__auto___11248 = cljs.core.chunk_first(seq__11232_11247__$1);{
var G__11249 = cljs.core.chunk_rest(seq__11232_11247__$1);
var G__11250 = c__8025__auto___11248;
var G__11251 = cljs.core.count(c__8025__auto___11248);
var G__11252 = 0;
seq__11232_11237 = G__11249;
chunk__11233_11238 = G__11250;
count__11234_11239 = G__11251;
i__11235_11240 = G__11252;
continue;
}
} else
{var x_11253 = cljs.core.first(seq__11232_11247__$1);(tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.append_child.cljs$core$IFn$_invoke$arity$2(this$,x_11253) : tailrecursion.hoplon.append_child.call(null,this$,x_11253));
{
var G__11254 = cljs.core.next(seq__11232_11247__$1);
var G__11255 = null;
var G__11256 = 0;
var G__11257 = 0;
seq__11232_11237 = G__11254;
chunk__11233_11238 = G__11255;
count__11234_11239 = G__11256;
i__11235_11240 = G__11257;
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
var G__11265__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__11259 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11259,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11259,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11260 = this$;G__11260.hoplonIFn(attr,kids);
return G__11260;
} else
{var G__11261 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11261,attr);
tailrecursion.hoplon.add_children_BANG_(G__11261,kids);
return G__11261;
}
};
var G__11265 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11265__delegate.call(this,self__,args);};
G__11265.cljs$lang$maxFixedArity = 1;
G__11265.cljs$lang$applyTo = (function (arglist__11266){
var self__ = cljs.core.first(arglist__11266);
var args = cljs.core.rest(arglist__11266);
return G__11265__delegate(self__,args);
});
G__11265.cljs$core$IFn$_invoke$arity$variadic = G__11265__delegate;
return G__11265;
})()
;
Element.prototype.apply = (function (self__,args11258){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11258)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__11267__delegate = function (args){var this$ = this;var vec__11262 = tailrecursion.hoplon.parse_args(args);var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11262,0,null);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11262,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__11263 = this$;G__11263.hoplonIFn(attr,kids);
return G__11263;
} else
{var G__11264 = this$;tailrecursion.hoplon.add_attributes_BANG_(G__11264,attr);
tailrecursion.hoplon.add_children_BANG_(G__11264,kids);
return G__11264;
}
};
var G__11267 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11267__delegate.call(this,args);};
G__11267.cljs$lang$maxFixedArity = 0;
G__11267.cljs$lang$applyTo = (function (arglist__11268){
var args = cljs.core.seq(arglist__11268);
return G__11267__delegate(args);
});
G__11267.cljs$core$IFn$_invoke$arity$variadic = G__11267__delegate;
return G__11267;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__11269__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new$,args);
};
var G__11269 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11269__delegate.call(this,args);};
G__11269.cljs$lang$maxFixedArity = 0;
G__11269.cljs$lang$applyTo = (function (arglist__11270){
var args = cljs.core.seq(arglist__11270);
return G__11269__delegate(args);
});
G__11269.cljs$core$IFn$_invoke$arity$variadic = G__11269__delegate;
return G__11269;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__11271__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),args);
};
var G__11271 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11271__delegate.call(this,args);};
G__11271.cljs$lang$maxFixedArity = 0;
G__11271.cljs$lang$applyTo = (function (arglist__11272){
var args = cljs.core.seq(arglist__11272);
return G__11271__delegate(args);
});
G__11271.cljs$core$IFn$_invoke$arity$variadic = G__11271__delegate;
return G__11271;
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
tailrecursion.hoplon.$text = (function $text(p1__11273_SHARP_){return document.createTextNode(p1__11273_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__11274_SHARP_){return document.createComment(p1__11274_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.initialized_QMARK_)))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__11275_SHARP_){return p1__11275_SHARP_.preventDefault();
}));
cljs.core.reset_BANG_(tailrecursion.hoplon.initialized_QMARK_,true);
var seq__11280 = cljs.core.seq(cljs.core.deref(tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__11281 = null;var count__11282 = 0;var i__11283 = 0;while(true){
if((i__11283 < count__11282))
{var f = chunk__11281.cljs$core$IIndexed$_nth$arity$2(null,i__11283);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11284 = seq__11280;
var G__11285 = chunk__11281;
var G__11286 = count__11282;
var G__11287 = (i__11283 + 1);
seq__11280 = G__11284;
chunk__11281 = G__11285;
count__11282 = G__11286;
i__11283 = G__11287;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11280);if(temp__4092__auto__)
{var seq__11280__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11280__$1))
{var c__8025__auto__ = cljs.core.chunk_first(seq__11280__$1);{
var G__11288 = cljs.core.chunk_rest(seq__11280__$1);
var G__11289 = c__8025__auto__;
var G__11290 = cljs.core.count(c__8025__auto__);
var G__11291 = 0;
seq__11280 = G__11288;
chunk__11281 = G__11289;
count__11282 = G__11290;
i__11283 = G__11291;
continue;
}
} else
{var f = cljs.core.first(seq__11280__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11292 = cljs.core.next(seq__11280__$1);
var G__11293 = null;
var G__11294 = 0;
var G__11295 = 0;
seq__11280 = G__11292;
chunk__11281 = G__11293;
count__11282 = G__11294;
i__11283 = G__11295;
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
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__8135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8136__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8137__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8138__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8139__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("do!",((function (method_table__8135__auto__,prefer_table__8136__auto__,method_cache__8137__auto__,cached_hierarchy__8138__auto__,hierarchy__8139__auto__){
return (function (elem,key,val){return key;
});})(method_table__8135__auto__,prefer_table__8136__auto__,method_cache__8137__auto__,cached_hierarchy__8138__auto__,hierarchy__8139__auto__))
,cljs.core.constant$keyword$22,hierarchy__8139__auto__,method_table__8135__auto__,prefer_table__8136__auto__,method_cache__8137__auto__,cached_hierarchy__8138__auto__));
})();
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,key,val){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)) : tailrecursion.hoplon.do_BANG_.call(null,elem,cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap.fromArray([key,val], true, false)));
}));
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$11,(function() { 
var G__11296__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__11296 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__11296__delegate.call(this,elem,_,args);};
G__11296.cljs$lang$maxFixedArity = 2;
G__11296.cljs$lang$applyTo = (function (arglist__11297){
var elem = cljs.core.first(arglist__11297);
arglist__11297 = cljs.core.next(arglist__11297);
var _ = cljs.core.first(arglist__11297);
var args = cljs.core.rest(arglist__11297);
return G__11296__delegate(elem,_,args);
});
G__11296.cljs$core$IFn$_invoke$arity$variadic = G__11296__delegate;
return G__11296;
})()
);
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$24,(function (elem,_,kvs){var e = jQuery(elem);var seq__11298 = cljs.core.seq(kvs);var chunk__11299 = null;var count__11300 = 0;var i__11301 = 0;while(true){
if((i__11301 < count__11300))
{var vec__11302 = chunk__11299.cljs$core$IIndexed$_nth$arity$2(null,i__11301);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11302,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11302,1,null);var k_11304__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11304__$1);
} else
{e.attr(k_11304__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11304__$1:v));
}
{
var G__11305 = seq__11298;
var G__11306 = chunk__11299;
var G__11307 = count__11300;
var G__11308 = (i__11301 + 1);
seq__11298 = G__11305;
chunk__11299 = G__11306;
count__11300 = G__11307;
i__11301 = G__11308;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11298);if(temp__4092__auto__)
{var seq__11298__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11298__$1))
{var c__8025__auto__ = cljs.core.chunk_first(seq__11298__$1);{
var G__11309 = cljs.core.chunk_rest(seq__11298__$1);
var G__11310 = c__8025__auto__;
var G__11311 = cljs.core.count(c__8025__auto__);
var G__11312 = 0;
seq__11298 = G__11309;
chunk__11299 = G__11310;
count__11300 = G__11311;
i__11301 = G__11312;
continue;
}
} else
{var vec__11303 = cljs.core.first(seq__11298__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11303,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11303,1,null);var k_11313__$1 = cljs.core.name(k);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v))
{e.removeAttr(k_11313__$1);
} else
{e.attr(k_11313__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_11313__$1:v));
}
{
var G__11314 = cljs.core.next(seq__11298__$1);
var G__11315 = null;
var G__11316 = 0;
var G__11317 = 0;
seq__11298 = G__11314;
chunk__11299 = G__11315;
count__11300 = G__11316;
i__11301 = G__11317;
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
return (function (p1__11318_SHARP_){return cljs.core.zipmap(p1__11318_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));var seq__11319 = cljs.core.seq(clmap);var chunk__11320 = null;var count__11321 = 0;var i__11322 = 0;while(true){
if((i__11322 < count__11321))
{var vec__11323 = chunk__11320.cljs$core$IIndexed$_nth$arity$2(null,i__11322);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11323,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11323,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11325 = seq__11319;
var G__11326 = chunk__11320;
var G__11327 = count__11321;
var G__11328 = (i__11322 + 1);
seq__11319 = G__11325;
chunk__11320 = G__11326;
count__11321 = G__11327;
i__11322 = G__11328;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11319);if(temp__4092__auto__)
{var seq__11319__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11319__$1))
{var c__8025__auto__ = cljs.core.chunk_first(seq__11319__$1);{
var G__11329 = cljs.core.chunk_rest(seq__11319__$1);
var G__11330 = c__8025__auto__;
var G__11331 = cljs.core.count(c__8025__auto__);
var G__11332 = 0;
seq__11319 = G__11329;
chunk__11320 = G__11330;
count__11321 = G__11331;
i__11322 = G__11332;
continue;
}
} else
{var vec__11324 = cljs.core.first(seq__11319__$1);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11324,0,null);var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11324,1,null);elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));
{
var G__11333 = cljs.core.next(seq__11319__$1);
var G__11334 = null;
var G__11335 = 0;
var G__11336 = 0;
seq__11319 = G__11333;
chunk__11320 = G__11334;
count__11321 = G__11335;
i__11322 = G__11336;
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
tailrecursion.hoplon.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$26,(function (elem,_,kvs){var e = jQuery(elem);var seq__11337 = cljs.core.seq(kvs);var chunk__11338 = null;var count__11339 = 0;var i__11340 = 0;while(true){
if((i__11340 < count__11339))
{var vec__11341 = chunk__11338.cljs$core$IIndexed$_nth$arity$2(null,i__11340);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11341,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11341,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11343 = seq__11337;
var G__11344 = chunk__11338;
var G__11345 = count__11339;
var G__11346 = (i__11340 + 1);
seq__11337 = G__11343;
chunk__11338 = G__11344;
count__11339 = G__11345;
i__11340 = G__11346;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11337);if(temp__4092__auto__)
{var seq__11337__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11337__$1))
{var c__8025__auto__ = cljs.core.chunk_first(seq__11337__$1);{
var G__11347 = cljs.core.chunk_rest(seq__11337__$1);
var G__11348 = c__8025__auto__;
var G__11349 = cljs.core.count(c__8025__auto__);
var G__11350 = 0;
seq__11337 = G__11347;
chunk__11338 = G__11348;
count__11339 = G__11349;
i__11340 = G__11350;
continue;
}
} else
{var vec__11342 = cljs.core.first(seq__11337__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11342,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11342,1,null);e.css(cljs.core.name(k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__11351 = cljs.core.next(seq__11337__$1);
var G__11352 = null;
var G__11353 = 0;
var G__11354 = 0;
seq__11337 = G__11351;
chunk__11338 = G__11352;
count__11339 = G__11353;
i__11340 = G__11354;
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
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__8135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8136__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__8137__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8138__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8139__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$7,cljs.core.constant$keyword$22], null),cljs.core.constant$keyword$23,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("on!",((function (method_table__8135__auto__,prefer_table__8136__auto__,method_cache__8137__auto__,cached_hierarchy__8138__auto__,hierarchy__8139__auto__){
return (function (elem,event,callback){return event;
});})(method_table__8135__auto__,prefer_table__8136__auto__,method_cache__8137__auto__,cached_hierarchy__8138__auto__,hierarchy__8139__auto__))
,cljs.core.constant$keyword$22,hierarchy__8139__auto__,method_table__8135__auto__,prefer_table__8136__auto__,method_cache__8137__auto__,cached_hierarchy__8138__auto__));
})();
tailrecursion.hoplon.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (elem,event,callback){return tailrecursion.hoplon.when_dom(elem,(function (){return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell(0);var items_seq = tailrecursion.javelin.lift(((function (pool_size){
return (function (G__11381,G__11380){return (G__11380.cljs$core$IFn$_invoke$arity$1 ? G__11380.cljs$core$IFn$_invoke$arity$1(G__11381) : G__11380.call(null,G__11381));
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift(((function (pool_size,items_seq){
return (function (G__11382,G__11383){return (G__11382.cljs$core$IFn$_invoke$arity$1 ? G__11382.cljs$core$IFn$_invoke$arity$1(G__11383) : G__11382.call(null,G__11383));
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__11355_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count){
return (function (G__11385,G__11384){return (G__11384 < G__11385);
});})(pool_size,items_seq,cur_count))
).call(null,cur_count,p1__11355_SHARP_);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__11356_SHARP_){return tailrecursion.javelin.lift(((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__11386,G__11388,G__11387){return (G__11386.cljs$core$IFn$_invoke$arity$2 ? G__11386.cljs$core$IFn$_invoke$arity$2(G__11387,G__11388) : G__11386.call(null,G__11387,G__11388));
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__11356_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$0() : tailrecursion.hoplon.span.call(null));tailrecursion.hoplon.when_dom(d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift(((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__11402,G__11400,G__11396,G__11397,G__11394,G__11398,G__11393,G__11395,G__11401,G__11399){if(cljs.core.truth_((G__11393 < G__11394)))
{var seq__11389_11403 = cljs.core.seq((G__11395.cljs$core$IFn$_invoke$arity$2 ? G__11395.cljs$core$IFn$_invoke$arity$2(G__11393,G__11394) : G__11395.call(null,G__11393,G__11394)));var chunk__11390_11404 = null;var count__11391_11405 = 0;var i__11392_11406 = 0;while(true){
if(cljs.core.truth_((i__11392_11406 < count__11391_11405)))
{var i_11407 = chunk__11390_11404.cljs$core$IIndexed$_nth$arity$2(null,i__11392_11406);var e_11408 = (G__11396.cljs$core$IFn$_invoke$arity$1 ? G__11396.cljs$core$IFn$_invoke$arity$1((G__11397.cljs$core$IFn$_invoke$arity$1 ? G__11397.cljs$core$IFn$_invoke$arity$1(i_11407) : G__11397.call(null,i_11407))) : G__11396.call(null,(G__11397.cljs$core$IFn$_invoke$arity$1 ? G__11397.cljs$core$IFn$_invoke$arity$1(i_11407) : G__11397.call(null,i_11407)))).call(null,cljs.core.constant$keyword$37,(G__11398.cljs$core$IFn$_invoke$arity$1 ? G__11398.cljs$core$IFn$_invoke$arity$1(i_11407) : G__11398.call(null,i_11407)));if(cljs.core.not(G__11399))
{G__11400.appendChild(e_11408);
} else
{G__11400.insertBefore(e_11408,G__11400.firstChild);
}
{
var G__11409 = seq__11389_11403;
var G__11410 = chunk__11390_11404;
var G__11411 = count__11391_11405;
var G__11412 = (i__11392_11406 + 1);
seq__11389_11403 = G__11409;
chunk__11390_11404 = G__11410;
count__11391_11405 = G__11411;
i__11392_11406 = G__11412;
continue;
}
} else
{var temp__4092__auto___11413 = cljs.core.seq(seq__11389_11403);if(temp__4092__auto___11413)
{var seq__11389_11414__$1 = temp__4092__auto___11413;if(cljs.core.chunked_seq_QMARK_(seq__11389_11414__$1))
{var c__8025__auto___11415 = cljs.core.chunk_first(seq__11389_11414__$1);{
var G__11416 = cljs.core.chunk_rest(seq__11389_11414__$1);
var G__11417 = c__8025__auto___11415;
var G__11418 = cljs.core.count(c__8025__auto___11415);
var G__11419 = 0;
seq__11389_11403 = G__11416;
chunk__11390_11404 = G__11417;
count__11391_11405 = G__11418;
i__11392_11406 = G__11419;
continue;
}
} else
{var i_11420 = cljs.core.first(seq__11389_11414__$1);var e_11421 = (G__11396.cljs$core$IFn$_invoke$arity$1 ? G__11396.cljs$core$IFn$_invoke$arity$1((G__11397.cljs$core$IFn$_invoke$arity$1 ? G__11397.cljs$core$IFn$_invoke$arity$1(i_11420) : G__11397.call(null,i_11420))) : G__11396.call(null,(G__11397.cljs$core$IFn$_invoke$arity$1 ? G__11397.cljs$core$IFn$_invoke$arity$1(i_11420) : G__11397.call(null,i_11420)))).call(null,cljs.core.constant$keyword$37,(G__11398.cljs$core$IFn$_invoke$arity$1 ? G__11398.cljs$core$IFn$_invoke$arity$1(i_11420) : G__11398.call(null,i_11420)));if(cljs.core.not(G__11399))
{G__11400.appendChild(e_11421);
} else
{G__11400.insertBefore(e_11421,G__11400.firstChild);
}
{
var G__11422 = cljs.core.next(seq__11389_11414__$1);
var G__11423 = null;
var G__11424 = 0;
var G__11425 = 0;
seq__11389_11403 = G__11422;
chunk__11390_11404 = G__11423;
count__11391_11405 = G__11424;
i__11392_11406 = G__11425;
continue;
}
}
} else
{}
}
break;
}
return (G__11401.cljs$core$IFn$_invoke$arity$2 ? G__11401.cljs$core$IFn$_invoke$arity$2(G__11402,G__11394) : G__11401.call(null,G__11402,G__11394));
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
var route_cell__0 = (function (){var r = (function (){var ret__8452__auto__ = tailrecursion.javelin.cell(window.location.hash);setInterval(((function (ret__8452__auto__){
return (function (){return cljs.core.reset_BANG_(ret__8452__auto__,window.location.hash);
});})(ret__8452__auto__))
,100);
return tailrecursion.javelin.lift(((function (ret__8452__auto__){
return (function (G__11435){return G__11435;
});})(ret__8452__auto__))
).call(null,ret__8452__auto__);
})();return tailrecursion.javelin.lift(((function (r){
return (function (G__11436,G__11437){if(cljs.core.truth_((G__11436.cljs$core$IFn$_invoke$arity$2 ? G__11436.cljs$core$IFn$_invoke$arity$2("",G__11437) : G__11436.call(null,"",G__11437))))
{return G__11437;
} else
{return null;
}
});})(r))
).call(null,cljs.core.not_EQ_,r);
});
var route_cell__1 = (function (setter_or_dfl){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_(setter_or_dfl)))
{var setter__8453__auto__ = setter_or_dfl;var callback__8454__auto__ = (function (){var or__7269__auto__ = null;if(cljs.core.truth_(or__7269__auto__))
{return or__7269__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8453__auto__,callback__8454__auto__){
return (function (G__11438,G__11439){return G__11438.location.hash = G__11439;
});})(setter__8453__auto__,callback__8454__auto__))
).call(null,window,setter__8453__auto__);
setInterval(((function (setter__8453__auto__,callback__8454__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8453__auto__),window.location.hash))
{(callback__8454__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8454__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8454__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8453__auto__);
} else
{return null;
}
});})(setter__8453__auto__,callback__8454__auto__))
,100);
return setter__8453__auto__;
} else
{var r = route_cell.cljs$core$IFn$_invoke$arity$0();return tailrecursion.javelin.lift(((function (r){
return (function (G__11441,G__11440){var or__7269__auto__ = G__11440;if(cljs.core.truth_(or__7269__auto__))
{return or__7269__auto__;
} else
{return G__11441;
}
});})(r))
).call(null,setter_or_dfl,r);
}
});
var route_cell__2 = (function (setter,callback){var setter__8453__auto__ = setter;var callback__8454__auto__ = (function (){var or__7269__auto__ = callback;if(cljs.core.truth_(or__7269__auto__))
{return or__7269__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.lift(((function (setter__8453__auto__,callback__8454__auto__){
return (function (G__11442,G__11443){return G__11442.location.hash = G__11443;
});})(setter__8453__auto__,callback__8454__auto__))
).call(null,window,setter__8453__auto__);
setInterval(((function (setter__8453__auto__,callback__8454__auto__){
return (function (){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(setter__8453__auto__),window.location.hash))
{(callback__8454__auto__.cljs$core$IFn$_invoke$arity$1 ? callback__8454__auto__.cljs$core$IFn$_invoke$arity$1(window.location.hash) : callback__8454__auto__.call(null,window.location.hash));
return window.location.hash = cljs.core.deref(setter__8453__auto__);
} else
{return null;
}
});})(setter__8453__auto__,callback__8454__auto__))
,100);
return setter__8453__auto__;
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
