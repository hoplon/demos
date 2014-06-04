// Compiled by ClojureScript 0.0-2227
goog.provide('tailrecursion.hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon.reload');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon.reload');
tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit = (function hoploninit(){tailrecursion.hoplon.reload.reload_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([1000], 0));
tailrecursion.hoplon.app_pages._index_DOT_html.text_input = tailrecursion.javelin.cell("");
tailrecursion.hoplon.app_pages._index_DOT_html.range_input = tailrecursion.javelin.cell(20);
tailrecursion.hoplon.app_pages._index_DOT_html.select_input = tailrecursion.javelin.cell("green");
tailrecursion.hoplon.app_pages._index_DOT_html.multi_select = tailrecursion.javelin.cell(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["green",null], null), null));
tailrecursion.hoplon.app_pages._index_DOT_html.check_box = tailrecursion.javelin.cell(false);
tailrecursion.hoplon.app_pages._index_DOT_html.radio_input = tailrecursion.javelin.cell("b");
(tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Inputs") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Inputs"))], null);
})()) : tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Inputs") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Inputs"))], null);
})())),(tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$25 ? tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$25(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9470 = (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1("Inputs and state in Hoplon") : tailrecursion.hoplon.h1.call(null,"Inputs and state in Hoplon"));return G__9470;
})(),(function (){var G__9471 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Each input example has a corresponding Javelin cell.\n      When you change the input its cell is updated.") : tailrecursion.hoplon.p.call(null,"Each input example has a corresponding Javelin cell.\n      When you change the input its cell is updated."));return G__9471;
})(),(function (){var G__9472 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A simple text input") : tailrecursion.hoplon.h2.call(null,"A simple text input"));return G__9472;
})(),(function (){var G__9473 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("This shows that you can have more than one field pointing to the same\n      cell. Edit one input and see everything change in sync.") : tailrecursion.hoplon.p.call(null,"This shows that you can have more than one field pointing to the same\n      cell. Edit one input and see everything change in sync."));return G__9473;
})(),(function (){var G__9474 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5371_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5371_SHARP_.target.value);
})) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5371_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5371_SHARP_.target.value);
})));return G__9474;
})(),(function (){var G__9475 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5372_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5372_SHARP_.target.value);
})) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5372_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5372_SHARP_.target.value);
})));return G__9475;
})(),(function (){var G__9476 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9478,G__9477){return G__9477.nodeValue = ("Value of text input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9478));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9478,G__9477){return G__9477.nodeValue = ("Value of text input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9478));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9476;
})(),(function (){var G__9479 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A range input") : tailrecursion.hoplon.h2.call(null,"A range input"));return G__9479;
})(),(function (){var G__9480 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Every example gets the value from a cell and updates it when it changes.") : tailrecursion.hoplon.p.call(null,"Every example gets the value from a cell and updates it when it changes."));return G__9480;
})(),(function (){var G__9481 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$14 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$14(cljs.core.constant$keyword$46,"width:400px",cljs.core.constant$keyword$39,"range",cljs.core.constant$keyword$47,0,cljs.core.constant$keyword$48,100,cljs.core.constant$keyword$49,1,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,cljs.core.constant$keyword$50,(function (p1__5373_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.range_input,p1__5373_SHARP_.target.value);
})) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$46,"width:400px",cljs.core.constant$keyword$39,"range",cljs.core.constant$keyword$47,0,cljs.core.constant$keyword$48,100,cljs.core.constant$keyword$49,1,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,cljs.core.constant$keyword$50,(function (p1__5373_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.range_input,p1__5373_SHARP_.target.value);
})));return G__9481;
})(),(function (){var G__9482 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9484,G__9483){return G__9483.nodeValue = ("Value of range input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9484));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9484,G__9483){return G__9483.nodeValue = ("Value of range input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9484));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9482;
})(),(function (){var G__9485 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A select input") : tailrecursion.hoplon.h2.call(null,"A select input"));return G__9485;
})(),(function (){var G__9487 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"blue","blue") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"blue","blue"));var G__9488 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"green","green") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"green","green"));var G__9489 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"gold","gold") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"gold","gold"));var G__9490 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"indigo","indigo") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"indigo","indigo"));var G__9486 = (tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$50,((function (G__9487,G__9488,G__9489,G__9490){
return (function (p1__5374_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.select_input,p1__5374_SHARP_.target.value);
});})(G__9487,G__9488,G__9489,G__9490))
,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,G__9487,G__9488,G__9489,G__9490) : tailrecursion.hoplon.select.call(null,cljs.core.constant$keyword$50,((function (G__9487,G__9488,G__9489,G__9490){
return (function (p1__5374_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.select_input,p1__5374_SHARP_.target.value);
});})(G__9487,G__9488,G__9489,G__9490))
,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,G__9487,G__9488,G__9489,G__9490));return G__9486;
})(),(function (){var G__9491 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9493,G__9492){return G__9492.nodeValue = ("Value of select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9493));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9493,G__9492){return G__9492.nodeValue = ("Value of select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9493));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9491;
})(),(function (){var G__9494 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Multiple select input") : tailrecursion.hoplon.h2.call(null,"Multiple select input"));return G__9494;
})(),(function (){var G__9496 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift((function (G__9500){return (G__9500.cljs$core$IFn$_invoke$arity$1 ? G__9500.cljs$core$IFn$_invoke$arity$1("blue") : G__9500.call(null,"blue"));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"blue","blue") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift((function (G__9500){return (G__9500.cljs$core$IFn$_invoke$arity$1 ? G__9500.cljs$core$IFn$_invoke$arity$1("blue") : G__9500.call(null,"blue"));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"blue","blue"));var G__9497 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496){
return (function (G__9501){return (G__9501.cljs$core$IFn$_invoke$arity$1 ? G__9501.cljs$core$IFn$_invoke$arity$1("green") : G__9501.call(null,"green"));
});})(G__9496))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"green","green") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496){
return (function (G__9501){return (G__9501.cljs$core$IFn$_invoke$arity$1 ? G__9501.cljs$core$IFn$_invoke$arity$1("green") : G__9501.call(null,"green"));
});})(G__9496))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"green","green"));var G__9498 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497){
return (function (G__9502){return (G__9502.cljs$core$IFn$_invoke$arity$1 ? G__9502.cljs$core$IFn$_invoke$arity$1("gold") : G__9502.call(null,"gold"));
});})(G__9496,G__9497))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"gold","gold") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497){
return (function (G__9502){return (G__9502.cljs$core$IFn$_invoke$arity$1 ? G__9502.cljs$core$IFn$_invoke$arity$1("gold") : G__9502.call(null,"gold"));
});})(G__9496,G__9497))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"gold","gold"));var G__9499 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497,G__9498){
return (function (G__9503){return (G__9503.cljs$core$IFn$_invoke$arity$1 ? G__9503.cljs$core$IFn$_invoke$arity$1("indigo") : G__9503.call(null,"indigo"));
});})(G__9496,G__9497,G__9498))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"indigo","indigo") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497,G__9498){
return (function (G__9503){return (G__9503.cljs$core$IFn$_invoke$arity$1 ? G__9503.cljs$core$IFn$_invoke$arity$1("indigo") : G__9503.call(null,"indigo"));
});})(G__9496,G__9497,G__9498))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"indigo","indigo"));var G__9495 = (tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$50,((function (G__9496,G__9497,G__9498,G__9499){
return (function (p1__5375_SHARP_){var options = p1__5375_SHARP_.target.selectedOptions;var l = options.length;return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,cljs.core.set((function (){var iter__7995__auto__ = ((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function iter__9504(s__9505){return (new cljs.core.LazySeq(null,((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function (){var s__9505__$1 = s__9505;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9505__$1);if(temp__4092__auto__)
{var s__9505__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9505__$2))
{var c__7993__auto__ = cljs.core.chunk_first(s__9505__$2);var size__7994__auto__ = cljs.core.count(c__7993__auto__);var b__9507 = cljs.core.chunk_buffer(size__7994__auto__);if((function (){var i__9506 = 0;while(true){
if((i__9506 < size__7994__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7993__auto__,i__9506);cljs.core.chunk_append(b__9507,options.item(i).value);
{
var G__9529 = (i__9506 + 1);
i__9506 = G__9529;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),iter__9504(cljs.core.chunk_rest(s__9505__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),null);
}
} else
{var i = cljs.core.first(s__9505__$2);return cljs.core.cons(options.item(i).value,iter__9504(cljs.core.rest(s__9505__$2)));
}
} else
{return null;
}
break;
}
});})(options,l,G__9496,G__9497,G__9498,G__9499))
,null,null));
});})(options,l,G__9496,G__9497,G__9498,G__9499))
;return iter__7995__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(l));
})()));
});})(G__9496,G__9497,G__9498,G__9499))
,cljs.core.constant$keyword$52,"true",G__9496,G__9497,G__9498,G__9499) : tailrecursion.hoplon.select.call(null,cljs.core.constant$keyword$50,((function (G__9496,G__9497,G__9498,G__9499){
return (function (p1__5375_SHARP_){var options = p1__5375_SHARP_.target.selectedOptions;var l = options.length;return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,cljs.core.set((function (){var iter__7995__auto__ = ((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function iter__9504(s__9505){return (new cljs.core.LazySeq(null,((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function (){var s__9505__$1 = s__9505;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9505__$1);if(temp__4092__auto__)
{var s__9505__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9505__$2))
{var c__7993__auto__ = cljs.core.chunk_first(s__9505__$2);var size__7994__auto__ = cljs.core.count(c__7993__auto__);var b__9507 = cljs.core.chunk_buffer(size__7994__auto__);if((function (){var i__9506 = 0;while(true){
if((i__9506 < size__7994__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7993__auto__,i__9506);cljs.core.chunk_append(b__9507,options.item(i).value);
{
var G__9530 = (i__9506 + 1);
i__9506 = G__9530;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),iter__9504(cljs.core.chunk_rest(s__9505__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),null);
}
} else
{var i = cljs.core.first(s__9505__$2);return cljs.core.cons(options.item(i).value,iter__9504(cljs.core.rest(s__9505__$2)));
}
} else
{return null;
}
break;
}
});})(options,l,G__9496,G__9497,G__9498,G__9499))
,null,null));
});})(options,l,G__9496,G__9497,G__9498,G__9499))
;return iter__7995__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(l));
})()));
});})(G__9496,G__9497,G__9498,G__9499))
,cljs.core.constant$keyword$52,"true",G__9496,G__9497,G__9498,G__9499));return G__9495;
})(),(function (){var G__9508 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9510,G__9509){return G__9509.nodeValue = ("Value of multiple select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9510));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9510,G__9509){return G__9509.nodeValue = ("Value of multiple select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9510));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,t__8334__auto__);
return t__8334__auto__;
})()));return G__9508;
})(),(function (){var G__9511 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A checkbox") : tailrecursion.hoplon.h2.call(null,"A checkbox"));return G__9511;
})(),(function (){var G__9513 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$53,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.check_box,cljs.core.not);
return true;
}),cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.check_box) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$53,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.check_box,cljs.core.not);
return true;
}),cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.check_box));var G__9512 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(G__9513,"Checkbox") : tailrecursion.hoplon.label.call(null,G__9513,"Checkbox"));return G__9512;
})(),(function (){var G__9514 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9516,G__9515){return G__9515.nodeValue = ("Value of checkbox: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9516));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.check_box,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9516,G__9515){return G__9515.nodeValue = ("Value of checkbox: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9516));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.check_box,t__8334__auto__);
return t__8334__auto__;
})()));return G__9514;
})(),(function (){var G__9517 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A radio button") : tailrecursion.hoplon.h2.call(null,"A radio button"));return G__9517;
})(),(function (){var G__9519 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10(cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5376_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5376_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9521,G__9520){return (G__9520.cljs$core$IFn$_invoke$arity$2 ? G__9520.cljs$core$IFn$_invoke$arity$2("a",G__9521) : G__9520.call(null,"a",G__9521));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"a") : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5376_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5376_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9521,G__9520){return (G__9520.cljs$core$IFn$_invoke$arity$2 ? G__9520.cljs$core$IFn$_invoke$arity$2("a",G__9521) : G__9520.call(null,"a",G__9521));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"a"));var G__9518 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(G__9519,"a") : tailrecursion.hoplon.label.call(null,G__9519,"a"));return G__9518;
})(),(function (){var G__9523 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10(cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5377_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5377_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9525,G__9524){return (G__9524.cljs$core$IFn$_invoke$arity$2 ? G__9524.cljs$core$IFn$_invoke$arity$2("b",G__9525) : G__9524.call(null,"b",G__9525));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"b") : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5377_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5377_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9525,G__9524){return (G__9524.cljs$core$IFn$_invoke$arity$2 ? G__9524.cljs$core$IFn$_invoke$arity$2("b",G__9525) : G__9524.call(null,"b",G__9525));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"b"));var G__9522 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(G__9523,"b") : tailrecursion.hoplon.label.call(null,G__9523,"b"));return G__9522;
})(),(function (){var G__9526 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9528,G__9527){return G__9527.nodeValue = ("Selected radio: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9528));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9528,G__9527){return G__9527.nodeValue = ("Selected radio: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9528));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9526;
})()) : tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9470 = (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1("Inputs and state in Hoplon") : tailrecursion.hoplon.h1.call(null,"Inputs and state in Hoplon"));return G__9470;
})(),(function (){var G__9471 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Each input example has a corresponding Javelin cell.\n      When you change the input its cell is updated.") : tailrecursion.hoplon.p.call(null,"Each input example has a corresponding Javelin cell.\n      When you change the input its cell is updated."));return G__9471;
})(),(function (){var G__9472 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A simple text input") : tailrecursion.hoplon.h2.call(null,"A simple text input"));return G__9472;
})(),(function (){var G__9473 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("This shows that you can have more than one field pointing to the same\n      cell. Edit one input and see everything change in sync.") : tailrecursion.hoplon.p.call(null,"This shows that you can have more than one field pointing to the same\n      cell. Edit one input and see everything change in sync."));return G__9473;
})(),(function (){var G__9474 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5371_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5371_SHARP_.target.value);
})) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5371_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5371_SHARP_.target.value);
})));return G__9474;
})(),(function (){var G__9475 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5372_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5372_SHARP_.target.value);
})) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5372_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5372_SHARP_.target.value);
})));return G__9475;
})(),(function (){var G__9476 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9478,G__9477){return G__9477.nodeValue = ("Value of text input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9478));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9478,G__9477){return G__9477.nodeValue = ("Value of text input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9478));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9476;
})(),(function (){var G__9479 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A range input") : tailrecursion.hoplon.h2.call(null,"A range input"));return G__9479;
})(),(function (){var G__9480 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Every example gets the value from a cell and updates it when it changes.") : tailrecursion.hoplon.p.call(null,"Every example gets the value from a cell and updates it when it changes."));return G__9480;
})(),(function (){var G__9481 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$14 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$14(cljs.core.constant$keyword$46,"width:400px",cljs.core.constant$keyword$39,"range",cljs.core.constant$keyword$47,0,cljs.core.constant$keyword$48,100,cljs.core.constant$keyword$49,1,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,cljs.core.constant$keyword$50,(function (p1__5373_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.range_input,p1__5373_SHARP_.target.value);
})) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$46,"width:400px",cljs.core.constant$keyword$39,"range",cljs.core.constant$keyword$47,0,cljs.core.constant$keyword$48,100,cljs.core.constant$keyword$49,1,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,cljs.core.constant$keyword$50,(function (p1__5373_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.range_input,p1__5373_SHARP_.target.value);
})));return G__9481;
})(),(function (){var G__9482 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9484,G__9483){return G__9483.nodeValue = ("Value of range input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9484));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9484,G__9483){return G__9483.nodeValue = ("Value of range input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9484));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9482;
})(),(function (){var G__9485 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A select input") : tailrecursion.hoplon.h2.call(null,"A select input"));return G__9485;
})(),(function (){var G__9487 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"blue","blue") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"blue","blue"));var G__9488 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"green","green") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"green","green"));var G__9489 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"gold","gold") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"gold","gold"));var G__9490 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"indigo","indigo") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"indigo","indigo"));var G__9486 = (tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$50,((function (G__9487,G__9488,G__9489,G__9490){
return (function (p1__5374_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.select_input,p1__5374_SHARP_.target.value);
});})(G__9487,G__9488,G__9489,G__9490))
,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,G__9487,G__9488,G__9489,G__9490) : tailrecursion.hoplon.select.call(null,cljs.core.constant$keyword$50,((function (G__9487,G__9488,G__9489,G__9490){
return (function (p1__5374_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.select_input,p1__5374_SHARP_.target.value);
});})(G__9487,G__9488,G__9489,G__9490))
,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,G__9487,G__9488,G__9489,G__9490));return G__9486;
})(),(function (){var G__9491 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9493,G__9492){return G__9492.nodeValue = ("Value of select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9493));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9493,G__9492){return G__9492.nodeValue = ("Value of select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9493));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9491;
})(),(function (){var G__9494 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Multiple select input") : tailrecursion.hoplon.h2.call(null,"Multiple select input"));return G__9494;
})(),(function (){var G__9496 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift((function (G__9500){return (G__9500.cljs$core$IFn$_invoke$arity$1 ? G__9500.cljs$core$IFn$_invoke$arity$1("blue") : G__9500.call(null,"blue"));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"blue","blue") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift((function (G__9500){return (G__9500.cljs$core$IFn$_invoke$arity$1 ? G__9500.cljs$core$IFn$_invoke$arity$1("blue") : G__9500.call(null,"blue"));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"blue","blue"));var G__9497 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496){
return (function (G__9501){return (G__9501.cljs$core$IFn$_invoke$arity$1 ? G__9501.cljs$core$IFn$_invoke$arity$1("green") : G__9501.call(null,"green"));
});})(G__9496))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"green","green") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496){
return (function (G__9501){return (G__9501.cljs$core$IFn$_invoke$arity$1 ? G__9501.cljs$core$IFn$_invoke$arity$1("green") : G__9501.call(null,"green"));
});})(G__9496))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"green","green"));var G__9498 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497){
return (function (G__9502){return (G__9502.cljs$core$IFn$_invoke$arity$1 ? G__9502.cljs$core$IFn$_invoke$arity$1("gold") : G__9502.call(null,"gold"));
});})(G__9496,G__9497))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"gold","gold") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497){
return (function (G__9502){return (G__9502.cljs$core$IFn$_invoke$arity$1 ? G__9502.cljs$core$IFn$_invoke$arity$1("gold") : G__9502.call(null,"gold"));
});})(G__9496,G__9497))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"gold","gold"));var G__9499 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497,G__9498){
return (function (G__9503){return (G__9503.cljs$core$IFn$_invoke$arity$1 ? G__9503.cljs$core$IFn$_invoke$arity$1("indigo") : G__9503.call(null,"indigo"));
});})(G__9496,G__9497,G__9498))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"indigo","indigo") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497,G__9498){
return (function (G__9503){return (G__9503.cljs$core$IFn$_invoke$arity$1 ? G__9503.cljs$core$IFn$_invoke$arity$1("indigo") : G__9503.call(null,"indigo"));
});})(G__9496,G__9497,G__9498))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"indigo","indigo"));var G__9495 = (tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$50,((function (G__9496,G__9497,G__9498,G__9499){
return (function (p1__5375_SHARP_){var options = p1__5375_SHARP_.target.selectedOptions;var l = options.length;return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,cljs.core.set((function (){var iter__7995__auto__ = ((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function iter__9504(s__9505){return (new cljs.core.LazySeq(null,((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function (){var s__9505__$1 = s__9505;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9505__$1);if(temp__4092__auto__)
{var s__9505__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9505__$2))
{var c__7993__auto__ = cljs.core.chunk_first(s__9505__$2);var size__7994__auto__ = cljs.core.count(c__7993__auto__);var b__9507 = cljs.core.chunk_buffer(size__7994__auto__);if((function (){var i__9506 = 0;while(true){
if((i__9506 < size__7994__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7993__auto__,i__9506);cljs.core.chunk_append(b__9507,options.item(i).value);
{
var G__9531 = (i__9506 + 1);
i__9506 = G__9531;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),iter__9504(cljs.core.chunk_rest(s__9505__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),null);
}
} else
{var i = cljs.core.first(s__9505__$2);return cljs.core.cons(options.item(i).value,iter__9504(cljs.core.rest(s__9505__$2)));
}
} else
{return null;
}
break;
}
});})(options,l,G__9496,G__9497,G__9498,G__9499))
,null,null));
});})(options,l,G__9496,G__9497,G__9498,G__9499))
;return iter__7995__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(l));
})()));
});})(G__9496,G__9497,G__9498,G__9499))
,cljs.core.constant$keyword$52,"true",G__9496,G__9497,G__9498,G__9499) : tailrecursion.hoplon.select.call(null,cljs.core.constant$keyword$50,((function (G__9496,G__9497,G__9498,G__9499){
return (function (p1__5375_SHARP_){var options = p1__5375_SHARP_.target.selectedOptions;var l = options.length;return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,cljs.core.set((function (){var iter__7995__auto__ = ((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function iter__9504(s__9505){return (new cljs.core.LazySeq(null,((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function (){var s__9505__$1 = s__9505;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9505__$1);if(temp__4092__auto__)
{var s__9505__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9505__$2))
{var c__7993__auto__ = cljs.core.chunk_first(s__9505__$2);var size__7994__auto__ = cljs.core.count(c__7993__auto__);var b__9507 = cljs.core.chunk_buffer(size__7994__auto__);if((function (){var i__9506 = 0;while(true){
if((i__9506 < size__7994__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7993__auto__,i__9506);cljs.core.chunk_append(b__9507,options.item(i).value);
{
var G__9532 = (i__9506 + 1);
i__9506 = G__9532;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),iter__9504(cljs.core.chunk_rest(s__9505__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),null);
}
} else
{var i = cljs.core.first(s__9505__$2);return cljs.core.cons(options.item(i).value,iter__9504(cljs.core.rest(s__9505__$2)));
}
} else
{return null;
}
break;
}
});})(options,l,G__9496,G__9497,G__9498,G__9499))
,null,null));
});})(options,l,G__9496,G__9497,G__9498,G__9499))
;return iter__7995__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(l));
})()));
});})(G__9496,G__9497,G__9498,G__9499))
,cljs.core.constant$keyword$52,"true",G__9496,G__9497,G__9498,G__9499));return G__9495;
})(),(function (){var G__9508 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9510,G__9509){return G__9509.nodeValue = ("Value of multiple select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9510));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9510,G__9509){return G__9509.nodeValue = ("Value of multiple select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9510));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,t__8334__auto__);
return t__8334__auto__;
})()));return G__9508;
})(),(function (){var G__9511 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A checkbox") : tailrecursion.hoplon.h2.call(null,"A checkbox"));return G__9511;
})(),(function (){var G__9513 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$53,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.check_box,cljs.core.not);
return true;
}),cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.check_box) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$53,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.check_box,cljs.core.not);
return true;
}),cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.check_box));var G__9512 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(G__9513,"Checkbox") : tailrecursion.hoplon.label.call(null,G__9513,"Checkbox"));return G__9512;
})(),(function (){var G__9514 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9516,G__9515){return G__9515.nodeValue = ("Value of checkbox: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9516));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.check_box,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9516,G__9515){return G__9515.nodeValue = ("Value of checkbox: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9516));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.check_box,t__8334__auto__);
return t__8334__auto__;
})()));return G__9514;
})(),(function (){var G__9517 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A radio button") : tailrecursion.hoplon.h2.call(null,"A radio button"));return G__9517;
})(),(function (){var G__9519 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10(cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5376_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5376_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9521,G__9520){return (G__9520.cljs$core$IFn$_invoke$arity$2 ? G__9520.cljs$core$IFn$_invoke$arity$2("a",G__9521) : G__9520.call(null,"a",G__9521));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"a") : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5376_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5376_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9521,G__9520){return (G__9520.cljs$core$IFn$_invoke$arity$2 ? G__9520.cljs$core$IFn$_invoke$arity$2("a",G__9521) : G__9520.call(null,"a",G__9521));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"a"));var G__9518 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(G__9519,"a") : tailrecursion.hoplon.label.call(null,G__9519,"a"));return G__9518;
})(),(function (){var G__9523 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10(cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5377_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5377_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9525,G__9524){return (G__9524.cljs$core$IFn$_invoke$arity$2 ? G__9524.cljs$core$IFn$_invoke$arity$2("b",G__9525) : G__9524.call(null,"b",G__9525));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"b") : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5377_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5377_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9525,G__9524){return (G__9524.cljs$core$IFn$_invoke$arity$2 ? G__9524.cljs$core$IFn$_invoke$arity$2("b",G__9525) : G__9524.call(null,"b",G__9525));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"b"));var G__9522 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(G__9523,"b") : tailrecursion.hoplon.label.call(null,G__9523,"b"));return G__9522;
})(),(function (){var G__9526 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9528,G__9527){return G__9527.nodeValue = ("Selected radio: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9528));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9528,G__9527){return G__9527.nodeValue = ("Selected radio: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9528));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9526;
})()))) : tailrecursion.hoplon.html.call(null,(tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Inputs") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Inputs"))], null);
})()) : tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$42,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$43,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Inputs") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Inputs"))], null);
})())),(tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$25 ? tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$25(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9470 = (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1("Inputs and state in Hoplon") : tailrecursion.hoplon.h1.call(null,"Inputs and state in Hoplon"));return G__9470;
})(),(function (){var G__9471 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Each input example has a corresponding Javelin cell.\n      When you change the input its cell is updated.") : tailrecursion.hoplon.p.call(null,"Each input example has a corresponding Javelin cell.\n      When you change the input its cell is updated."));return G__9471;
})(),(function (){var G__9472 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A simple text input") : tailrecursion.hoplon.h2.call(null,"A simple text input"));return G__9472;
})(),(function (){var G__9473 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("This shows that you can have more than one field pointing to the same\n      cell. Edit one input and see everything change in sync.") : tailrecursion.hoplon.p.call(null,"This shows that you can have more than one field pointing to the same\n      cell. Edit one input and see everything change in sync."));return G__9473;
})(),(function (){var G__9474 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5371_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5371_SHARP_.target.value);
})) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5371_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5371_SHARP_.target.value);
})));return G__9474;
})(),(function (){var G__9475 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5372_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5372_SHARP_.target.value);
})) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5372_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5372_SHARP_.target.value);
})));return G__9475;
})(),(function (){var G__9476 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9478,G__9477){return G__9477.nodeValue = ("Value of text input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9478));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9478,G__9477){return G__9477.nodeValue = ("Value of text input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9478));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9476;
})(),(function (){var G__9479 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A range input") : tailrecursion.hoplon.h2.call(null,"A range input"));return G__9479;
})(),(function (){var G__9480 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Every example gets the value from a cell and updates it when it changes.") : tailrecursion.hoplon.p.call(null,"Every example gets the value from a cell and updates it when it changes."));return G__9480;
})(),(function (){var G__9481 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$14 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$14(cljs.core.constant$keyword$46,"width:400px",cljs.core.constant$keyword$39,"range",cljs.core.constant$keyword$47,0,cljs.core.constant$keyword$48,100,cljs.core.constant$keyword$49,1,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,cljs.core.constant$keyword$50,(function (p1__5373_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.range_input,p1__5373_SHARP_.target.value);
})) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$46,"width:400px",cljs.core.constant$keyword$39,"range",cljs.core.constant$keyword$47,0,cljs.core.constant$keyword$48,100,cljs.core.constant$keyword$49,1,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,cljs.core.constant$keyword$50,(function (p1__5373_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.range_input,p1__5373_SHARP_.target.value);
})));return G__9481;
})(),(function (){var G__9482 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9484,G__9483){return G__9483.nodeValue = ("Value of range input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9484));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9484,G__9483){return G__9483.nodeValue = ("Value of range input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9484));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9482;
})(),(function (){var G__9485 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A select input") : tailrecursion.hoplon.h2.call(null,"A select input"));return G__9485;
})(),(function (){var G__9487 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"blue","blue") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"blue","blue"));var G__9488 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"green","green") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"green","green"));var G__9489 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"gold","gold") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"gold","gold"));var G__9490 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"indigo","indigo") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"indigo","indigo"));var G__9486 = (tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$50,((function (G__9487,G__9488,G__9489,G__9490){
return (function (p1__5374_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.select_input,p1__5374_SHARP_.target.value);
});})(G__9487,G__9488,G__9489,G__9490))
,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,G__9487,G__9488,G__9489,G__9490) : tailrecursion.hoplon.select.call(null,cljs.core.constant$keyword$50,((function (G__9487,G__9488,G__9489,G__9490){
return (function (p1__5374_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.select_input,p1__5374_SHARP_.target.value);
});})(G__9487,G__9488,G__9489,G__9490))
,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,G__9487,G__9488,G__9489,G__9490));return G__9486;
})(),(function (){var G__9491 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9493,G__9492){return G__9492.nodeValue = ("Value of select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9493));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9493,G__9492){return G__9492.nodeValue = ("Value of select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9493));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9491;
})(),(function (){var G__9494 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Multiple select input") : tailrecursion.hoplon.h2.call(null,"Multiple select input"));return G__9494;
})(),(function (){var G__9496 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift((function (G__9500){return (G__9500.cljs$core$IFn$_invoke$arity$1 ? G__9500.cljs$core$IFn$_invoke$arity$1("blue") : G__9500.call(null,"blue"));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"blue","blue") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift((function (G__9500){return (G__9500.cljs$core$IFn$_invoke$arity$1 ? G__9500.cljs$core$IFn$_invoke$arity$1("blue") : G__9500.call(null,"blue"));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"blue","blue"));var G__9497 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496){
return (function (G__9501){return (G__9501.cljs$core$IFn$_invoke$arity$1 ? G__9501.cljs$core$IFn$_invoke$arity$1("green") : G__9501.call(null,"green"));
});})(G__9496))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"green","green") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496){
return (function (G__9501){return (G__9501.cljs$core$IFn$_invoke$arity$1 ? G__9501.cljs$core$IFn$_invoke$arity$1("green") : G__9501.call(null,"green"));
});})(G__9496))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"green","green"));var G__9498 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497){
return (function (G__9502){return (G__9502.cljs$core$IFn$_invoke$arity$1 ? G__9502.cljs$core$IFn$_invoke$arity$1("gold") : G__9502.call(null,"gold"));
});})(G__9496,G__9497))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"gold","gold") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497){
return (function (G__9502){return (G__9502.cljs$core$IFn$_invoke$arity$1 ? G__9502.cljs$core$IFn$_invoke$arity$1("gold") : G__9502.call(null,"gold"));
});})(G__9496,G__9497))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"gold","gold"));var G__9499 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497,G__9498){
return (function (G__9503){return (G__9503.cljs$core$IFn$_invoke$arity$1 ? G__9503.cljs$core$IFn$_invoke$arity$1("indigo") : G__9503.call(null,"indigo"));
});})(G__9496,G__9497,G__9498))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"indigo","indigo") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497,G__9498){
return (function (G__9503){return (G__9503.cljs$core$IFn$_invoke$arity$1 ? G__9503.cljs$core$IFn$_invoke$arity$1("indigo") : G__9503.call(null,"indigo"));
});})(G__9496,G__9497,G__9498))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"indigo","indigo"));var G__9495 = (tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$50,((function (G__9496,G__9497,G__9498,G__9499){
return (function (p1__5375_SHARP_){var options = p1__5375_SHARP_.target.selectedOptions;var l = options.length;return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,cljs.core.set((function (){var iter__7995__auto__ = ((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function iter__9504(s__9505){return (new cljs.core.LazySeq(null,((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function (){var s__9505__$1 = s__9505;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9505__$1);if(temp__4092__auto__)
{var s__9505__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9505__$2))
{var c__7993__auto__ = cljs.core.chunk_first(s__9505__$2);var size__7994__auto__ = cljs.core.count(c__7993__auto__);var b__9507 = cljs.core.chunk_buffer(size__7994__auto__);if((function (){var i__9506 = 0;while(true){
if((i__9506 < size__7994__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7993__auto__,i__9506);cljs.core.chunk_append(b__9507,options.item(i).value);
{
var G__9533 = (i__9506 + 1);
i__9506 = G__9533;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),iter__9504(cljs.core.chunk_rest(s__9505__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),null);
}
} else
{var i = cljs.core.first(s__9505__$2);return cljs.core.cons(options.item(i).value,iter__9504(cljs.core.rest(s__9505__$2)));
}
} else
{return null;
}
break;
}
});})(options,l,G__9496,G__9497,G__9498,G__9499))
,null,null));
});})(options,l,G__9496,G__9497,G__9498,G__9499))
;return iter__7995__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(l));
})()));
});})(G__9496,G__9497,G__9498,G__9499))
,cljs.core.constant$keyword$52,"true",G__9496,G__9497,G__9498,G__9499) : tailrecursion.hoplon.select.call(null,cljs.core.constant$keyword$50,((function (G__9496,G__9497,G__9498,G__9499){
return (function (p1__5375_SHARP_){var options = p1__5375_SHARP_.target.selectedOptions;var l = options.length;return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,cljs.core.set((function (){var iter__7995__auto__ = ((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function iter__9504(s__9505){return (new cljs.core.LazySeq(null,((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function (){var s__9505__$1 = s__9505;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9505__$1);if(temp__4092__auto__)
{var s__9505__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9505__$2))
{var c__7993__auto__ = cljs.core.chunk_first(s__9505__$2);var size__7994__auto__ = cljs.core.count(c__7993__auto__);var b__9507 = cljs.core.chunk_buffer(size__7994__auto__);if((function (){var i__9506 = 0;while(true){
if((i__9506 < size__7994__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7993__auto__,i__9506);cljs.core.chunk_append(b__9507,options.item(i).value);
{
var G__9534 = (i__9506 + 1);
i__9506 = G__9534;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),iter__9504(cljs.core.chunk_rest(s__9505__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),null);
}
} else
{var i = cljs.core.first(s__9505__$2);return cljs.core.cons(options.item(i).value,iter__9504(cljs.core.rest(s__9505__$2)));
}
} else
{return null;
}
break;
}
});})(options,l,G__9496,G__9497,G__9498,G__9499))
,null,null));
});})(options,l,G__9496,G__9497,G__9498,G__9499))
;return iter__7995__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(l));
})()));
});})(G__9496,G__9497,G__9498,G__9499))
,cljs.core.constant$keyword$52,"true",G__9496,G__9497,G__9498,G__9499));return G__9495;
})(),(function (){var G__9508 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9510,G__9509){return G__9509.nodeValue = ("Value of multiple select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9510));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9510,G__9509){return G__9509.nodeValue = ("Value of multiple select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9510));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,t__8334__auto__);
return t__8334__auto__;
})()));return G__9508;
})(),(function (){var G__9511 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A checkbox") : tailrecursion.hoplon.h2.call(null,"A checkbox"));return G__9511;
})(),(function (){var G__9513 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$53,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.check_box,cljs.core.not);
return true;
}),cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.check_box) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$53,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.check_box,cljs.core.not);
return true;
}),cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.check_box));var G__9512 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(G__9513,"Checkbox") : tailrecursion.hoplon.label.call(null,G__9513,"Checkbox"));return G__9512;
})(),(function (){var G__9514 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9516,G__9515){return G__9515.nodeValue = ("Value of checkbox: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9516));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.check_box,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9516,G__9515){return G__9515.nodeValue = ("Value of checkbox: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9516));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.check_box,t__8334__auto__);
return t__8334__auto__;
})()));return G__9514;
})(),(function (){var G__9517 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A radio button") : tailrecursion.hoplon.h2.call(null,"A radio button"));return G__9517;
})(),(function (){var G__9519 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10(cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5376_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5376_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9521,G__9520){return (G__9520.cljs$core$IFn$_invoke$arity$2 ? G__9520.cljs$core$IFn$_invoke$arity$2("a",G__9521) : G__9520.call(null,"a",G__9521));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"a") : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5376_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5376_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9521,G__9520){return (G__9520.cljs$core$IFn$_invoke$arity$2 ? G__9520.cljs$core$IFn$_invoke$arity$2("a",G__9521) : G__9520.call(null,"a",G__9521));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"a"));var G__9518 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(G__9519,"a") : tailrecursion.hoplon.label.call(null,G__9519,"a"));return G__9518;
})(),(function (){var G__9523 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10(cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5377_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5377_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9525,G__9524){return (G__9524.cljs$core$IFn$_invoke$arity$2 ? G__9524.cljs$core$IFn$_invoke$arity$2("b",G__9525) : G__9524.call(null,"b",G__9525));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"b") : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5377_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5377_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9525,G__9524){return (G__9524.cljs$core$IFn$_invoke$arity$2 ? G__9524.cljs$core$IFn$_invoke$arity$2("b",G__9525) : G__9524.call(null,"b",G__9525));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"b"));var G__9522 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(G__9523,"b") : tailrecursion.hoplon.label.call(null,G__9523,"b"));return G__9522;
})(),(function (){var G__9526 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9528,G__9527){return G__9527.nodeValue = ("Selected radio: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9528));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9528,G__9527){return G__9527.nodeValue = ("Selected radio: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9528));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9526;
})()) : tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9470 = (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1("Inputs and state in Hoplon") : tailrecursion.hoplon.h1.call(null,"Inputs and state in Hoplon"));return G__9470;
})(),(function (){var G__9471 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Each input example has a corresponding Javelin cell.\n      When you change the input its cell is updated.") : tailrecursion.hoplon.p.call(null,"Each input example has a corresponding Javelin cell.\n      When you change the input its cell is updated."));return G__9471;
})(),(function (){var G__9472 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A simple text input") : tailrecursion.hoplon.h2.call(null,"A simple text input"));return G__9472;
})(),(function (){var G__9473 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("This shows that you can have more than one field pointing to the same\n      cell. Edit one input and see everything change in sync.") : tailrecursion.hoplon.p.call(null,"This shows that you can have more than one field pointing to the same\n      cell. Edit one input and see everything change in sync."));return G__9473;
})(),(function (){var G__9474 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5371_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5371_SHARP_.target.value);
})) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5371_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5371_SHARP_.target.value);
})));return G__9474;
})(),(function (){var G__9475 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5372_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5372_SHARP_.target.value);
})) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$44,"Type something here",cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,cljs.core.constant$keyword$45,(function (p1__5372_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.text_input,p1__5372_SHARP_.target.value);
})));return G__9475;
})(),(function (){var G__9476 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9478,G__9477){return G__9477.nodeValue = ("Value of text input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9478));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9478,G__9477){return G__9477.nodeValue = ("Value of text input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9478));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.text_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9476;
})(),(function (){var G__9479 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A range input") : tailrecursion.hoplon.h2.call(null,"A range input"));return G__9479;
})(),(function (){var G__9480 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Every example gets the value from a cell and updates it when it changes.") : tailrecursion.hoplon.p.call(null,"Every example gets the value from a cell and updates it when it changes."));return G__9480;
})(),(function (){var G__9481 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$14 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$14(cljs.core.constant$keyword$46,"width:400px",cljs.core.constant$keyword$39,"range",cljs.core.constant$keyword$47,0,cljs.core.constant$keyword$48,100,cljs.core.constant$keyword$49,1,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,cljs.core.constant$keyword$50,(function (p1__5373_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.range_input,p1__5373_SHARP_.target.value);
})) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$46,"width:400px",cljs.core.constant$keyword$39,"range",cljs.core.constant$keyword$47,0,cljs.core.constant$keyword$48,100,cljs.core.constant$keyword$49,1,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,cljs.core.constant$keyword$50,(function (p1__5373_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.range_input,p1__5373_SHARP_.target.value);
})));return G__9481;
})(),(function (){var G__9482 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9484,G__9483){return G__9483.nodeValue = ("Value of range input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9484));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9484,G__9483){return G__9483.nodeValue = ("Value of range input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9484));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.range_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9482;
})(),(function (){var G__9485 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A select input") : tailrecursion.hoplon.h2.call(null,"A select input"));return G__9485;
})(),(function (){var G__9487 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"blue","blue") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"blue","blue"));var G__9488 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"green","green") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"green","green"));var G__9489 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"gold","gold") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"gold","gold"));var G__9490 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$11,"indigo","indigo") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$11,"indigo","indigo"));var G__9486 = (tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$50,((function (G__9487,G__9488,G__9489,G__9490){
return (function (p1__5374_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.select_input,p1__5374_SHARP_.target.value);
});})(G__9487,G__9488,G__9489,G__9490))
,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,G__9487,G__9488,G__9489,G__9490) : tailrecursion.hoplon.select.call(null,cljs.core.constant$keyword$50,((function (G__9487,G__9488,G__9489,G__9490){
return (function (p1__5374_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.select_input,p1__5374_SHARP_.target.value);
});})(G__9487,G__9488,G__9489,G__9490))
,cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,G__9487,G__9488,G__9489,G__9490));return G__9486;
})(),(function (){var G__9491 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9493,G__9492){return G__9492.nodeValue = ("Value of select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9493));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9493,G__9492){return G__9492.nodeValue = ("Value of select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9493));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.select_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9491;
})(),(function (){var G__9494 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("Multiple select input") : tailrecursion.hoplon.h2.call(null,"Multiple select input"));return G__9494;
})(),(function (){var G__9496 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift((function (G__9500){return (G__9500.cljs$core$IFn$_invoke$arity$1 ? G__9500.cljs$core$IFn$_invoke$arity$1("blue") : G__9500.call(null,"blue"));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"blue","blue") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift((function (G__9500){return (G__9500.cljs$core$IFn$_invoke$arity$1 ? G__9500.cljs$core$IFn$_invoke$arity$1("blue") : G__9500.call(null,"blue"));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"blue","blue"));var G__9497 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496){
return (function (G__9501){return (G__9501.cljs$core$IFn$_invoke$arity$1 ? G__9501.cljs$core$IFn$_invoke$arity$1("green") : G__9501.call(null,"green"));
});})(G__9496))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"green","green") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496){
return (function (G__9501){return (G__9501.cljs$core$IFn$_invoke$arity$1 ? G__9501.cljs$core$IFn$_invoke$arity$1("green") : G__9501.call(null,"green"));
});})(G__9496))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"green","green"));var G__9498 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497){
return (function (G__9502){return (G__9502.cljs$core$IFn$_invoke$arity$1 ? G__9502.cljs$core$IFn$_invoke$arity$1("gold") : G__9502.call(null,"gold"));
});})(G__9496,G__9497))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"gold","gold") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497){
return (function (G__9502){return (G__9502.cljs$core$IFn$_invoke$arity$1 ? G__9502.cljs$core$IFn$_invoke$arity$1("gold") : G__9502.call(null,"gold"));
});})(G__9496,G__9497))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"gold","gold"));var G__9499 = (tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.option.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497,G__9498){
return (function (G__9503){return (G__9503.cljs$core$IFn$_invoke$arity$1 ? G__9503.cljs$core$IFn$_invoke$arity$1("indigo") : G__9503.call(null,"indigo"));
});})(G__9496,G__9497,G__9498))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"indigo","indigo") : tailrecursion.hoplon.option.call(null,cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (G__9496,G__9497,G__9498){
return (function (G__9503){return (G__9503.cljs$core$IFn$_invoke$arity$1 ? G__9503.cljs$core$IFn$_invoke$arity$1("indigo") : G__9503.call(null,"indigo"));
});})(G__9496,G__9497,G__9498))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select),cljs.core.constant$keyword$11,"indigo","indigo"));var G__9495 = (tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.select.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$50,((function (G__9496,G__9497,G__9498,G__9499){
return (function (p1__5375_SHARP_){var options = p1__5375_SHARP_.target.selectedOptions;var l = options.length;return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,cljs.core.set((function (){var iter__7995__auto__ = ((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function iter__9504(s__9505){return (new cljs.core.LazySeq(null,((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function (){var s__9505__$1 = s__9505;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9505__$1);if(temp__4092__auto__)
{var s__9505__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9505__$2))
{var c__7993__auto__ = cljs.core.chunk_first(s__9505__$2);var size__7994__auto__ = cljs.core.count(c__7993__auto__);var b__9507 = cljs.core.chunk_buffer(size__7994__auto__);if((function (){var i__9506 = 0;while(true){
if((i__9506 < size__7994__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7993__auto__,i__9506);cljs.core.chunk_append(b__9507,options.item(i).value);
{
var G__9535 = (i__9506 + 1);
i__9506 = G__9535;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),iter__9504(cljs.core.chunk_rest(s__9505__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),null);
}
} else
{var i = cljs.core.first(s__9505__$2);return cljs.core.cons(options.item(i).value,iter__9504(cljs.core.rest(s__9505__$2)));
}
} else
{return null;
}
break;
}
});})(options,l,G__9496,G__9497,G__9498,G__9499))
,null,null));
});})(options,l,G__9496,G__9497,G__9498,G__9499))
;return iter__7995__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(l));
})()));
});})(G__9496,G__9497,G__9498,G__9499))
,cljs.core.constant$keyword$52,"true",G__9496,G__9497,G__9498,G__9499) : tailrecursion.hoplon.select.call(null,cljs.core.constant$keyword$50,((function (G__9496,G__9497,G__9498,G__9499){
return (function (p1__5375_SHARP_){var options = p1__5375_SHARP_.target.selectedOptions;var l = options.length;return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,cljs.core.set((function (){var iter__7995__auto__ = ((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function iter__9504(s__9505){return (new cljs.core.LazySeq(null,((function (options,l,G__9496,G__9497,G__9498,G__9499){
return (function (){var s__9505__$1 = s__9505;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9505__$1);if(temp__4092__auto__)
{var s__9505__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9505__$2))
{var c__7993__auto__ = cljs.core.chunk_first(s__9505__$2);var size__7994__auto__ = cljs.core.count(c__7993__auto__);var b__9507 = cljs.core.chunk_buffer(size__7994__auto__);if((function (){var i__9506 = 0;while(true){
if((i__9506 < size__7994__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7993__auto__,i__9506);cljs.core.chunk_append(b__9507,options.item(i).value);
{
var G__9536 = (i__9506 + 1);
i__9506 = G__9536;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),iter__9504(cljs.core.chunk_rest(s__9505__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9507),null);
}
} else
{var i = cljs.core.first(s__9505__$2);return cljs.core.cons(options.item(i).value,iter__9504(cljs.core.rest(s__9505__$2)));
}
} else
{return null;
}
break;
}
});})(options,l,G__9496,G__9497,G__9498,G__9499))
,null,null));
});})(options,l,G__9496,G__9497,G__9498,G__9499))
;return iter__7995__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(l));
})()));
});})(G__9496,G__9497,G__9498,G__9499))
,cljs.core.constant$keyword$52,"true",G__9496,G__9497,G__9498,G__9499));return G__9495;
})(),(function (){var G__9508 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9510,G__9509){return G__9509.nodeValue = ("Value of multiple select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9510));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9510,G__9509){return G__9509.nodeValue = ("Value of multiple select input: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9510));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.multi_select,t__8334__auto__);
return t__8334__auto__;
})()));return G__9508;
})(),(function (){var G__9511 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A checkbox") : tailrecursion.hoplon.h2.call(null,"A checkbox"));return G__9511;
})(),(function (){var G__9513 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$53,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.check_box,cljs.core.not);
return true;
}),cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.check_box) : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$53,(function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.check_box,cljs.core.not);
return true;
}),cljs.core.constant$keyword$11,tailrecursion.hoplon.app_pages._index_DOT_html.check_box));var G__9512 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(G__9513,"Checkbox") : tailrecursion.hoplon.label.call(null,G__9513,"Checkbox"));return G__9512;
})(),(function (){var G__9514 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9516,G__9515){return G__9515.nodeValue = ("Value of checkbox: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9516));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.check_box,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9516,G__9515){return G__9515.nodeValue = ("Value of checkbox: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9516));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.check_box,t__8334__auto__);
return t__8334__auto__;
})()));return G__9514;
})(),(function (){var G__9517 = (tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1("A radio button") : tailrecursion.hoplon.h2.call(null,"A radio button"));return G__9517;
})(),(function (){var G__9519 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10(cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5376_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5376_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9521,G__9520){return (G__9520.cljs$core$IFn$_invoke$arity$2 ? G__9520.cljs$core$IFn$_invoke$arity$2("a",G__9521) : G__9520.call(null,"a",G__9521));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"a") : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5376_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5376_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9521,G__9520){return (G__9520.cljs$core$IFn$_invoke$arity$2 ? G__9520.cljs$core$IFn$_invoke$arity$2("a",G__9521) : G__9520.call(null,"a",G__9521));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"a"));var G__9518 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(G__9519,"a") : tailrecursion.hoplon.label.call(null,G__9519,"a"));return G__9518;
})(),(function (){var G__9523 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$10(cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5377_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5377_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9525,G__9524){return (G__9524.cljs$core$IFn$_invoke$arity$2 ? G__9524.cljs$core$IFn$_invoke$arity$2("b",G__9525) : G__9524.call(null,"b",G__9525));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"b") : tailrecursion.hoplon.input.call(null,cljs.core.constant$keyword$39,"radio",cljs.core.constant$keyword$53,(function (p1__5377_SHARP_){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,p1__5377_SHARP_.target.value);
}),cljs.core.constant$keyword$54,tailrecursion.javelin.lift((function (G__9525,G__9524){return (G__9524.cljs$core$IFn$_invoke$arity$2 ? G__9524.cljs$core$IFn$_invoke$arity$2("b",G__9525) : G__9524.call(null,"b",G__9525));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,cljs.core._EQ_),cljs.core.constant$keyword$55,"radio-group",cljs.core.constant$keyword$11,"b"));var G__9522 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(G__9523,"b") : tailrecursion.hoplon.label.call(null,G__9523,"b"));return G__9522;
})(),(function (){var G__9526 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9528,G__9527){return G__9527.nodeValue = ("Selected radio: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9528));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,t__8334__auto__);
return t__8334__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8334__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8334__auto__){
return (function (G__9528,G__9527){return G__9527.nodeValue = ("Selected radio: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9528));
});})(t__8334__auto__))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.radio_input,t__8334__auto__);
return t__8334__auto__;
})()));return G__9526;
})()))));
return tailrecursion.hoplon.init();
});
goog.exportSymbol('tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit', tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit);
