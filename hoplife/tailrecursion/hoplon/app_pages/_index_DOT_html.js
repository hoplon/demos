// Compiled by ClojureScript 0.0-2227
goog.provide('tailrecursion.hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon.reload');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon.reload');
tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit = (function hoploninit(){tailrecursion.hoplon.reload.reload_all();
tailrecursion.hoplon.app_pages._index_DOT_html.default$ = cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,11], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [11,11], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [13,11], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,0], null)], true);
tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_ = 16;
tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_interval_PLUS_ = 100;
tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_ = tailrecursion.javelin.cell(true);
tailrecursion.hoplon.app_pages._index_DOT_html.alive = tailrecursion.javelin.cell(tailrecursion.hoplon.app_pages._index_DOT_html.default$);
tailrecursion.hoplon.app_pages._index_DOT_html.neighbours = (function neighbours(p__9529){var vec__9537 = p__9529;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9537,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9537,1,null);var iter__7992__auto__ = ((function (vec__9537,x,y){
return (function iter__9538(s__9539){return (new cljs.core.LazySeq(null,((function (vec__9537,x,y){
return (function (){var s__9539__$1 = s__9539;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9539__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var dx = cljs.core.first(xs__4579__auto__);var iterys__7988__auto__ = ((function (s__9539__$1,dx,xs__4579__auto__,temp__4092__auto__,vec__9537,x,y){
return (function iter__9540(s__9541){return (new cljs.core.LazySeq(null,((function (s__9539__$1,dx,xs__4579__auto__,temp__4092__auto__,vec__9537,x,y){
return (function (){var s__9541__$1 = s__9541;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9541__$1);if(temp__4092__auto____$1)
{var s__9541__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9541__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9541__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9543 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9542 = 0;while(true){
if((i__9542 < size__7991__auto__))
{var dy = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9542);cljs.core.chunk_append(b__9543,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((dx + x),tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_),cljs.core.mod((dy + y),tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_)], null));
{
var G__9650 = (i__9542 + 1);
i__9542 = G__9650;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9543),iter__9540(cljs.core.chunk_rest(s__9541__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9543),null);
}
} else
{var dy = cljs.core.first(s__9541__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((dx + x),tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_),cljs.core.mod((dy + y),tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_)], null),iter__9540(cljs.core.rest(s__9541__$2)));
}
} else
{return null;
}
break;
}
});})(s__9539__$1,dx,xs__4579__auto__,temp__4092__auto__,vec__9537,x,y))
,null,null));
});})(s__9539__$1,dx,xs__4579__auto__,temp__4092__auto__,vec__9537,x,y))
;var fs__7989__auto__ = cljs.core.seq(iterys__7988__auto__((((dx === 0))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,1], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0,1], null))));if(fs__7989__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7989__auto__,iter__9538(cljs.core.rest(s__9539__$1)));
} else
{{
var G__9651 = cljs.core.rest(s__9539__$1);
s__9539__$1 = G__9651;
continue;
}
}
} else
{return null;
}
break;
}
});})(vec__9537,x,y))
,null,null));
});})(vec__9537,x,y))
;return iter__7992__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1,0,1], null));
});
tailrecursion.hoplon.app_pages._index_DOT_html.step = (function step(cells){return cljs.core.set((function (){var iter__7992__auto__ = (function iter__9552(s__9553){return (new cljs.core.LazySeq(null,(function (){var s__9553__$1 = s__9553;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9553__$1);if(temp__4092__auto__)
{var s__9553__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9553__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9553__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9555 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9554 = 0;while(true){
if((i__9554 < size__7991__auto__))
{var vec__9558 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9554);var loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9558,0,null);var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9558,1,null);if(cljs.core.truth_((function (){var or__7267__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,3);if(or__7267__auto__)
{return or__7267__auto__;
} else
{var and__7255__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,2);if(and__7255__auto__)
{return (cells.cljs$core$IFn$_invoke$arity$1 ? cells.cljs$core$IFn$_invoke$arity$1(loc) : cells.call(null,loc));
} else
{return and__7255__auto__;
}
}
})()))
{cljs.core.chunk_append(b__9555,loc);
{
var G__9652 = (i__9554 + 1);
i__9554 = G__9652;
continue;
}
} else
{{
var G__9653 = (i__9554 + 1);
i__9554 = G__9653;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9555),iter__9552(cljs.core.chunk_rest(s__9553__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9555),null);
}
} else
{var vec__9559 = cljs.core.first(s__9553__$2);var loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,0,null);var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,1,null);if(cljs.core.truth_((function (){var or__7267__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,3);if(or__7267__auto__)
{return or__7267__auto__;
} else
{var and__7255__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,2);if(and__7255__auto__)
{return (cells.cljs$core$IFn$_invoke$arity$1 ? cells.cljs$core$IFn$_invoke$arity$1(loc) : cells.call(null,loc));
} else
{return and__7255__auto__;
}
}
})()))
{return cljs.core.cons(loc,iter__9552(cljs.core.rest(s__9553__$2)));
} else
{{
var G__9654 = cljs.core.rest(s__9553__$2);
s__9553__$1 = G__9654;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7992__auto__(cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.neighbours,cells)));
})());
});
tailrecursion.hoplon.app_pages._index_DOT_html.click = (function click(cells,xy){return ((cljs.core.contains_QMARK_(cells,xy))?cljs.core.disj:cljs.core.conj).call(null,cells,xy);
});
tailrecursion.hoplon.add_initfn_BANG_((function (){return setInterval((function (){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_)))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.step);
} else
{return null;
}
}),tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_interval_PLUS_);
}));
(tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplife") : tailrecursion.hoplon.title.call(null,"Hoplife")),(tailrecursion.hoplon.style.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.style.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"text/css","table,th,td { margin:0; padding:0; border-spacing:0; }\ntable       { border:1px solid black; }\ntd          { width:16px; height:16px; cursor:pointer; }\ntd.alive    { background-color: black; }") : tailrecursion.hoplon.style.call(null,cljs.core.constant$keyword$39,"text/css","table,th,td { margin:0; padding:0; border-spacing:0; }\ntable       { border:1px solid black; }\ntd          { width:16px; height:16px; cursor:pointer; }\ntd.alive    { background-color: black; }"))], null);
})()) : tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplife") : tailrecursion.hoplon.title.call(null,"Hoplife")),(tailrecursion.hoplon.style.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.style.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"text/css","table,th,td { margin:0; padding:0; border-spacing:0; }\ntable       { border:1px solid black; }\ntd          { width:16px; height:16px; cursor:pointer; }\ntd.alive    { background-color: black; }") : tailrecursion.hoplon.style.call(null,cljs.core.constant$keyword$39,"text/css","table,th,td { margin:0; padding:0; border-spacing:0; }\ntable       { border:1px solid black; }\ntd          { width:16px; height:16px; cursor:pointer; }\ntd.alive    { background-color: black; }"))], null);
})())),(tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9560 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_,cljs.core.not);
}),cljs.core.constant$keyword$33,tailrecursion.javelin.lift((function (G__9561){if(cljs.core.truth_(G__9561))
{return "Stop";
} else
{return "Start";
}
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_)) : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_,cljs.core.not);
}),cljs.core.constant$keyword$33,tailrecursion.javelin.lift((function (G__9561){if(cljs.core.truth_(G__9561))
{return "Stop";
} else
{return "Start";
}
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_)));return G__9560;
})(),(function (){var G__9562 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,cljs.core.into,tailrecursion.hoplon.app_pages._index_DOT_html.default$);
}),"Reset") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,cljs.core.into,tailrecursion.hoplon.app_pages._index_DOT_html.default$);
}),"Reset"));return G__9562;
})(),(function (){var G__9563 = (tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = (function iter__9564(s__9565){return (new cljs.core.LazySeq(null,(function (){var s__9565__$1 = s__9565;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9565__$1);if(temp__4092__auto__)
{var s__9565__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9565__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9565__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9567 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9566 = 0;while(true){
if((i__9566 < size__7991__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9566);cljs.core.chunk_append(b__9567,(tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9655 = (i__9610 + 1);
i__9610 = G__9655;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9656 = (i__9610 + 1);
i__9610 = G__9656;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())));
{
var G__9657 = (i__9566 + 1);
i__9566 = G__9657;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),iter__9564(cljs.core.chunk_rest(s__9565__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),null);
}
} else
{var x = cljs.core.first(s__9565__$2);return cljs.core.cons((tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9658 = (i__9630 + 1);
i__9630 = G__9658;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9659 = (i__9630 + 1);
i__9630 = G__9659;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())),iter__9564(cljs.core.rest(s__9565__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.table.call(null,(function (){var iter__7992__auto__ = (function iter__9564(s__9565){return (new cljs.core.LazySeq(null,(function (){var s__9565__$1 = s__9565;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9565__$1);if(temp__4092__auto__)
{var s__9565__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9565__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9565__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9567 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9566 = 0;while(true){
if((i__9566 < size__7991__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9566);cljs.core.chunk_append(b__9567,(tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9660 = (i__9610 + 1);
i__9610 = G__9660;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9661 = (i__9610 + 1);
i__9610 = G__9661;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())));
{
var G__9662 = (i__9566 + 1);
i__9566 = G__9662;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),iter__9564(cljs.core.chunk_rest(s__9565__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),null);
}
} else
{var x = cljs.core.first(s__9565__$2);return cljs.core.cons((tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9663 = (i__9630 + 1);
i__9630 = G__9663;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9664 = (i__9630 + 1);
i__9630 = G__9664;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())),iter__9564(cljs.core.rest(s__9565__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()));return G__9563;
})(),(function (){var G__9649 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$43,"https://github.com/tailrecursion/hoplon-demos/tree/master/hoplife","Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$43,"https://github.com/tailrecursion/hoplon-demos/tree/master/hoplife","Source Code"));var G__9648 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__9649) : tailrecursion.hoplon.p.call(null,G__9649));return G__9648;
})()) : tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9560 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_,cljs.core.not);
}),cljs.core.constant$keyword$33,tailrecursion.javelin.lift((function (G__9561){if(cljs.core.truth_(G__9561))
{return "Stop";
} else
{return "Start";
}
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_)) : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_,cljs.core.not);
}),cljs.core.constant$keyword$33,tailrecursion.javelin.lift((function (G__9561){if(cljs.core.truth_(G__9561))
{return "Stop";
} else
{return "Start";
}
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_)));return G__9560;
})(),(function (){var G__9562 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,cljs.core.into,tailrecursion.hoplon.app_pages._index_DOT_html.default$);
}),"Reset") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,cljs.core.into,tailrecursion.hoplon.app_pages._index_DOT_html.default$);
}),"Reset"));return G__9562;
})(),(function (){var G__9563 = (tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = (function iter__9564(s__9565){return (new cljs.core.LazySeq(null,(function (){var s__9565__$1 = s__9565;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9565__$1);if(temp__4092__auto__)
{var s__9565__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9565__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9565__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9567 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9566 = 0;while(true){
if((i__9566 < size__7991__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9566);cljs.core.chunk_append(b__9567,(tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9665 = (i__9610 + 1);
i__9610 = G__9665;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9666 = (i__9610 + 1);
i__9610 = G__9666;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())));
{
var G__9667 = (i__9566 + 1);
i__9566 = G__9667;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),iter__9564(cljs.core.chunk_rest(s__9565__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),null);
}
} else
{var x = cljs.core.first(s__9565__$2);return cljs.core.cons((tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9668 = (i__9630 + 1);
i__9630 = G__9668;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9669 = (i__9630 + 1);
i__9630 = G__9669;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())),iter__9564(cljs.core.rest(s__9565__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.table.call(null,(function (){var iter__7992__auto__ = (function iter__9564(s__9565){return (new cljs.core.LazySeq(null,(function (){var s__9565__$1 = s__9565;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9565__$1);if(temp__4092__auto__)
{var s__9565__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9565__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9565__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9567 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9566 = 0;while(true){
if((i__9566 < size__7991__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9566);cljs.core.chunk_append(b__9567,(tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9670 = (i__9610 + 1);
i__9610 = G__9670;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9671 = (i__9610 + 1);
i__9610 = G__9671;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())));
{
var G__9672 = (i__9566 + 1);
i__9566 = G__9672;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),iter__9564(cljs.core.chunk_rest(s__9565__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),null);
}
} else
{var x = cljs.core.first(s__9565__$2);return cljs.core.cons((tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9673 = (i__9630 + 1);
i__9630 = G__9673;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9674 = (i__9630 + 1);
i__9630 = G__9674;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())),iter__9564(cljs.core.rest(s__9565__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()));return G__9563;
})(),(function (){var G__9649 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$43,"https://github.com/tailrecursion/hoplon-demos/tree/master/hoplife","Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$43,"https://github.com/tailrecursion/hoplon-demos/tree/master/hoplife","Source Code"));var G__9648 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__9649) : tailrecursion.hoplon.p.call(null,G__9649));return G__9648;
})()))) : tailrecursion.hoplon.html.call(null,(tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplife") : tailrecursion.hoplon.title.call(null,"Hoplife")),(tailrecursion.hoplon.style.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.style.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"text/css","table,th,td { margin:0; padding:0; border-spacing:0; }\ntable       { border:1px solid black; }\ntd          { width:16px; height:16px; cursor:pointer; }\ntd.alive    { background-color: black; }") : tailrecursion.hoplon.style.call(null,cljs.core.constant$keyword$39,"text/css","table,th,td { margin:0; padding:0; border-spacing:0; }\ntable       { border:1px solid black; }\ntd          { width:16px; height:16px; cursor:pointer; }\ntd.alive    { background-color: black; }"))], null);
})()) : tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplife") : tailrecursion.hoplon.title.call(null,"Hoplife")),(tailrecursion.hoplon.style.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.style.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"text/css","table,th,td { margin:0; padding:0; border-spacing:0; }\ntable       { border:1px solid black; }\ntd          { width:16px; height:16px; cursor:pointer; }\ntd.alive    { background-color: black; }") : tailrecursion.hoplon.style.call(null,cljs.core.constant$keyword$39,"text/css","table,th,td { margin:0; padding:0; border-spacing:0; }\ntable       { border:1px solid black; }\ntd          { width:16px; height:16px; cursor:pointer; }\ntd.alive    { background-color: black; }"))], null);
})())),(tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9560 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_,cljs.core.not);
}),cljs.core.constant$keyword$33,tailrecursion.javelin.lift((function (G__9561){if(cljs.core.truth_(G__9561))
{return "Stop";
} else
{return "Start";
}
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_)) : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_,cljs.core.not);
}),cljs.core.constant$keyword$33,tailrecursion.javelin.lift((function (G__9561){if(cljs.core.truth_(G__9561))
{return "Stop";
} else
{return "Start";
}
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_)));return G__9560;
})(),(function (){var G__9562 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,cljs.core.into,tailrecursion.hoplon.app_pages._index_DOT_html.default$);
}),"Reset") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,cljs.core.into,tailrecursion.hoplon.app_pages._index_DOT_html.default$);
}),"Reset"));return G__9562;
})(),(function (){var G__9563 = (tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = (function iter__9564(s__9565){return (new cljs.core.LazySeq(null,(function (){var s__9565__$1 = s__9565;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9565__$1);if(temp__4092__auto__)
{var s__9565__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9565__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9565__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9567 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9566 = 0;while(true){
if((i__9566 < size__7991__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9566);cljs.core.chunk_append(b__9567,(tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9675 = (i__9610 + 1);
i__9610 = G__9675;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9676 = (i__9610 + 1);
i__9610 = G__9676;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())));
{
var G__9677 = (i__9566 + 1);
i__9566 = G__9677;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),iter__9564(cljs.core.chunk_rest(s__9565__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),null);
}
} else
{var x = cljs.core.first(s__9565__$2);return cljs.core.cons((tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9678 = (i__9630 + 1);
i__9630 = G__9678;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9679 = (i__9630 + 1);
i__9630 = G__9679;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())),iter__9564(cljs.core.rest(s__9565__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.table.call(null,(function (){var iter__7992__auto__ = (function iter__9564(s__9565){return (new cljs.core.LazySeq(null,(function (){var s__9565__$1 = s__9565;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9565__$1);if(temp__4092__auto__)
{var s__9565__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9565__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9565__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9567 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9566 = 0;while(true){
if((i__9566 < size__7991__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9566);cljs.core.chunk_append(b__9567,(tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9680 = (i__9610 + 1);
i__9610 = G__9680;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9681 = (i__9610 + 1);
i__9610 = G__9681;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())));
{
var G__9682 = (i__9566 + 1);
i__9566 = G__9682;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),iter__9564(cljs.core.chunk_rest(s__9565__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),null);
}
} else
{var x = cljs.core.first(s__9565__$2);return cljs.core.cons((tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9683 = (i__9630 + 1);
i__9630 = G__9683;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9684 = (i__9630 + 1);
i__9630 = G__9684;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())),iter__9564(cljs.core.rest(s__9565__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()));return G__9563;
})(),(function (){var G__9649 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$43,"https://github.com/tailrecursion/hoplon-demos/tree/master/hoplife","Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$43,"https://github.com/tailrecursion/hoplon-demos/tree/master/hoplife","Source Code"));var G__9648 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__9649) : tailrecursion.hoplon.p.call(null,G__9649));return G__9648;
})()) : tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9560 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_,cljs.core.not);
}),cljs.core.constant$keyword$33,tailrecursion.javelin.lift((function (G__9561){if(cljs.core.truth_(G__9561))
{return "Stop";
} else
{return "Start";
}
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_)) : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_,cljs.core.not);
}),cljs.core.constant$keyword$33,tailrecursion.javelin.lift((function (G__9561){if(cljs.core.truth_(G__9561))
{return "Stop";
} else
{return "Start";
}
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.running_QMARK_)));return G__9560;
})(),(function (){var G__9562 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,cljs.core.into,tailrecursion.hoplon.app_pages._index_DOT_html.default$);
}),"Reset") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$44,(function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,cljs.core.into,tailrecursion.hoplon.app_pages._index_DOT_html.default$);
}),"Reset"));return G__9562;
})(),(function (){var G__9563 = (tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = (function iter__9564(s__9565){return (new cljs.core.LazySeq(null,(function (){var s__9565__$1 = s__9565;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9565__$1);if(temp__4092__auto__)
{var s__9565__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9565__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9565__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9567 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9566 = 0;while(true){
if((i__9566 < size__7991__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9566);cljs.core.chunk_append(b__9567,(tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9685 = (i__9610 + 1);
i__9610 = G__9685;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9686 = (i__9610 + 1);
i__9610 = G__9686;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())));
{
var G__9687 = (i__9566 + 1);
i__9566 = G__9687;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),iter__9564(cljs.core.chunk_rest(s__9565__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),null);
}
} else
{var x = cljs.core.first(s__9565__$2);return cljs.core.cons((tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9688 = (i__9630 + 1);
i__9630 = G__9688;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9689 = (i__9630 + 1);
i__9630 = G__9689;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())),iter__9564(cljs.core.rest(s__9565__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.table.call(null,(function (){var iter__7992__auto__ = (function iter__9564(s__9565){return (new cljs.core.LazySeq(null,(function (){var s__9565__$1 = s__9565;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9565__$1);if(temp__4092__auto__)
{var s__9565__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9565__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9565__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9567 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9566 = 0;while(true){
if((i__9566 < size__7991__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9566);cljs.core.chunk_append(b__9567,(tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9690 = (i__9610 + 1);
i__9610 = G__9690;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function iter__9608(s__9609){return (new cljs.core.LazySeq(null,((function (i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){var s__9609__$1 = s__9609;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9609__$1);if(temp__4092__auto____$1)
{var s__9609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9609__$2))
{var c__7990__auto____$1 = cljs.core.chunk_first(s__9609__$2);var size__7991__auto____$1 = cljs.core.count(c__7990__auto____$1);var b__9611 = cljs.core.chunk_buffer(size__7991__auto____$1);if((function (){var i__9610 = 0;while(true){
if((i__9610 < size__7991__auto____$1))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto____$1,i__9610);cljs.core.chunk_append(b__9611,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9621,G__9623,G__9622,G__9620){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9620.cljs$core$IFn$_invoke$arity$2 ? G__9620.cljs$core$IFn$_invoke$arity$2(G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)) : G__9620.call(null,G__9621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9622,G__9623], null)))], null);
});})(i__9610,i__9566,y,c__7990__auto____$1,size__7991__auto____$1,b__9611,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9691 = (i__9610 + 1);
i__9610 = G__9691;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),iter__9608(cljs.core.chunk_rest(s__9609__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9611),null);
}
} else
{var y = cljs.core.first(s__9609__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__){
return (function (G__9625,G__9627,G__9626,G__9624){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9624.cljs$core$IFn$_invoke$arity$2 ? G__9624.cljs$core$IFn$_invoke$arity$2(G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)) : G__9624.call(null,G__9625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9626,G__9627], null)))], null);
});})(i__9566,y,s__9609__$2,temp__4092__auto____$1,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9608(cljs.core.rest(s__9609__$2)));
}
} else
{return null;
}
break;
}
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
,null,null));
});})(i__9566,x,c__7990__auto__,size__7991__auto__,b__9567,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())));
{
var G__9692 = (i__9566 + 1);
i__9566 = G__9692;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),iter__9564(cljs.core.chunk_rest(s__9565__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9567),null);
}
} else
{var x = cljs.core.first(s__9565__$2);return cljs.core.cons((tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1((function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9693 = (i__9630 + 1);
i__9630 = G__9693;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()) : tailrecursion.hoplon.tr.call(null,(function (){var iter__7992__auto__ = ((function (x,s__9565__$2,temp__4092__auto__){
return (function iter__9628(s__9629){return (new cljs.core.LazySeq(null,((function (x,s__9565__$2,temp__4092__auto__){
return (function (){var s__9629__$1 = s__9629;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9629__$1);if(temp__4092__auto____$1)
{var s__9629__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9629__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9629__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9631 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9630 = 0;while(true){
if((i__9630 < size__7991__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9630);cljs.core.chunk_append(b__9631,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9641,G__9643,G__9642,G__9640){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9640.cljs$core$IFn$_invoke$arity$2 ? G__9640.cljs$core$IFn$_invoke$arity$2(G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)) : G__9640.call(null,G__9641,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9642,G__9643], null)))], null);
});})(i__9630,y,c__7990__auto__,size__7991__auto__,b__9631,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))));
{
var G__9694 = (i__9630 + 1);
i__9630 = G__9694;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),iter__9628(cljs.core.chunk_rest(s__9629__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9631),null);
}
} else
{var y = cljs.core.first(s__9629__$2);return cljs.core.cons((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_)) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$44,((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.alive,tailrecursion.hoplon.app_pages._index_DOT_html.click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
,cljs.core.constant$keyword$25,tailrecursion.javelin.lift(((function (y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__){
return (function (G__9645,G__9647,G__9646,G__9644){return new cljs.core.PersistentArrayMap(null, 1, ["alive",(G__9644.cljs$core$IFn$_invoke$arity$2 ? G__9644.cljs$core$IFn$_invoke$arity$2(G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)) : G__9644.call(null,G__9645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9646,G__9647], null)))], null);
});})(y,s__9629__$2,temp__4092__auto____$1,x,s__9565__$2,temp__4092__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.alive,y,x,cljs.core.contains_QMARK_))),iter__9628(cljs.core.rest(s__9629__$2)));
}
} else
{return null;
}
break;
}
});})(x,s__9565__$2,temp__4092__auto__))
,null,null));
});})(x,s__9565__$2,temp__4092__auto__))
;return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})())),iter__9564(cljs.core.rest(s__9565__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7992__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.app_pages._index_DOT_html._PLUS_size_PLUS_));
})()));return G__9563;
})(),(function (){var G__9649 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$43,"https://github.com/tailrecursion/hoplon-demos/tree/master/hoplife","Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$43,"https://github.com/tailrecursion/hoplon-demos/tree/master/hoplife","Source Code"));var G__9648 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1(G__9649) : tailrecursion.hoplon.p.call(null,G__9649));return G__9648;
})()))));
return tailrecursion.hoplon.init();
});
goog.exportSymbol('tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit', tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit);
