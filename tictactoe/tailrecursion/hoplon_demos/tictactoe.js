// Compiled by ClojureScript 0.0-2227
goog.provide('tailrecursion.hoplon_demos.tictactoe');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon_demos.tictactoe.transpose = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,cljs.core.map,cljs.core.vector);
tailrecursion.hoplon_demos.tictactoe.diagonal = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.drop),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
tailrecursion.hoplon_demos.tictactoe.indexed = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed,cljs.core.vector);
tailrecursion.hoplon_demos.tictactoe.new_game = (function new_game(p1__6917_SHARP_){return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__6917_SHARP_,null));
});
/**
* @param {...*} var_args
*/
tailrecursion.hoplon_demos.tictactoe.scoreboard = (function() { 
var scoreboard__delegate = function (args__8849__auto__){var vec__10234 = tailrecursion.hoplon.parse_args(args__8849__auto__);var map__10235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10234,0,null);var map__10235__$1 = ((cljs.core.seq_QMARK_(map__10235))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10235):map__10235);var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10235__$1,cljs.core.constant$keyword$38);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10234,1,null);var sorted = tailrecursion.javelin.lift(((function (vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10239,G__10236,G__10240,G__10237,G__10238){return (G__10236.cljs$core$IFn$_invoke$arity$1 ? G__10236.cljs$core$IFn$_invoke$arity$1((G__10237.cljs$core$IFn$_invoke$arity$1 ? G__10237.cljs$core$IFn$_invoke$arity$1((G__10238.cljs$core$IFn$_invoke$arity$2 ? G__10238.cljs$core$IFn$_invoke$arity$2(G__10239,G__10240) : G__10238.call(null,G__10239,G__10240))) : G__10237.call(null,(G__10238.cljs$core$IFn$_invoke$arity$2 ? G__10238.cljs$core$IFn$_invoke$arity$2(G__10239,G__10240) : G__10238.call(null,G__10239,G__10240))))) : G__10236.call(null,(G__10237.cljs$core$IFn$_invoke$arity$1 ? G__10237.cljs$core$IFn$_invoke$arity$1((G__10238.cljs$core$IFn$_invoke$arity$2 ? G__10238.cljs$core$IFn$_invoke$arity$2(G__10239,G__10240) : G__10238.call(null,G__10239,G__10240))) : G__10237.call(null,(G__10238.cljs$core$IFn$_invoke$arity$2 ? G__10238.cljs$core$IFn$_invoke$arity$2(G__10239,G__10240) : G__10238.call(null,G__10239,G__10240))))));
});})(vec__10234,map__10235,map__10235__$1,history,_))
).call(null,cljs.core.second,tailrecursion.hoplon_demos.tictactoe.indexed,history,cljs.core.reverse,cljs.core.sort_by);return (tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$25,"score",(tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1("rank") : tailrecursion.hoplon.th.call(null,"rank")),(tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1("player") : tailrecursion.hoplon.th.call(null,"player")),(tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1("score") : tailrecursion.hoplon.th.call(null,"score"))) : tailrecursion.hoplon.tr.call(null,(tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1("rank") : tailrecursion.hoplon.th.call(null,"rank")),(tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1("player") : tailrecursion.hoplon.th.call(null,"player")),(tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1("score") : tailrecursion.hoplon.th.call(null,"score")))),tailrecursion.hoplon.loop_tpl_STAR_(sorted,null,((function (sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (item__8860__auto__){var vec__10241 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10244){var vec__10242 = G__10244;var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10242,0,null);var vec__10243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10242,1,null);var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10243,0,null);var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10243,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rank,player,score], null);
});})(sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,item__8860__auto__));var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10241,0,null);var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10241,1,null);var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10241,2,null);return (tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10246,G__10245){return G__10245.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__10246 + 1)));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,rank,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10246,G__10245){return G__10245.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__10246 + 1)));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,rank,t__8874__auto__);
return t__8874__auto__;
})())),(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10248,G__10247){return G__10247.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10248));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,player,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10248,G__10247){return G__10247.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10248));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,player,t__8874__auto__);
return t__8874__auto__;
})())),(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10250,G__10249){return G__10249.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10250));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,score,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10250,G__10249){return G__10249.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10250));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,score,t__8874__auto__);
return t__8874__auto__;
})()))) : tailrecursion.hoplon.tr.call(null,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10246,G__10245){return G__10245.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__10246 + 1)));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,rank,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10246,G__10245){return G__10245.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__10246 + 1)));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,rank,t__8874__auto__);
return t__8874__auto__;
})())),(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10248,G__10247){return G__10247.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10248));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,player,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10248,G__10247){return G__10247.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10248));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,player,t__8874__auto__);
return t__8874__auto__;
})())),(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10250,G__10249){return G__10249.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10250));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,score,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10250,G__10249){return G__10249.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10250));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,score,t__8874__auto__);
return t__8874__auto__;
})()))));
});})(sorted,vec__10234,map__10235,map__10235__$1,history,_))
)) : tailrecursion.hoplon.table.call(null,cljs.core.constant$keyword$25,"score",(tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1("rank") : tailrecursion.hoplon.th.call(null,"rank")),(tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1("player") : tailrecursion.hoplon.th.call(null,"player")),(tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1("score") : tailrecursion.hoplon.th.call(null,"score"))) : tailrecursion.hoplon.tr.call(null,(tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1("rank") : tailrecursion.hoplon.th.call(null,"rank")),(tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1("player") : tailrecursion.hoplon.th.call(null,"player")),(tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.th.cljs$core$IFn$_invoke$arity$1("score") : tailrecursion.hoplon.th.call(null,"score")))),tailrecursion.hoplon.loop_tpl_STAR_(sorted,null,((function (sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (item__8860__auto__){var vec__10241 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10244){var vec__10242 = G__10244;var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10242,0,null);var vec__10243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10242,1,null);var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10243,0,null);var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10243,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rank,player,score], null);
});})(sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,item__8860__auto__));var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10241,0,null);var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10241,1,null);var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10241,2,null);return (tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$3((tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10246,G__10245){return G__10245.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__10246 + 1)));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,rank,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10246,G__10245){return G__10245.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__10246 + 1)));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,rank,t__8874__auto__);
return t__8874__auto__;
})())),(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10248,G__10247){return G__10247.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10248));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,player,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10248,G__10247){return G__10247.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10248));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,player,t__8874__auto__);
return t__8874__auto__;
})())),(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10250,G__10249){return G__10249.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10250));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,score,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10250,G__10249){return G__10249.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10250));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,score,t__8874__auto__);
return t__8874__auto__;
})()))) : tailrecursion.hoplon.tr.call(null,(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10246,G__10245){return G__10245.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__10246 + 1)));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,rank,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10246,G__10245){return G__10245.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__10246 + 1)));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,rank,t__8874__auto__);
return t__8874__auto__;
})())),(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10248,G__10247){return G__10247.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10248));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,player,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10248,G__10247){return G__10247.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10248));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,player,t__8874__auto__);
return t__8874__auto__;
})())),(tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10250,G__10249){return G__10249.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10250));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,score,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$39,"center",(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_){
return (function (G__10250,G__10249){return G__10249.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10250));
});})(t__8874__auto__,vec__10241,rank,player,score,sorted,vec__10234,map__10235,map__10235__$1,history,_))
).call(null,score,t__8874__auto__);
return t__8874__auto__;
})()))));
});})(sorted,vec__10234,map__10235,map__10235__$1,history,_))
)));
};
var scoreboard = function (var_args){
var args__8849__auto__ = null;if (arguments.length > 0) {
  args__8849__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return scoreboard__delegate.call(this,args__8849__auto__);};
scoreboard.cljs$lang$maxFixedArity = 0;
scoreboard.cljs$lang$applyTo = (function (arglist__10251){
var args__8849__auto__ = cljs.core.seq(arglist__10251);
return scoreboard__delegate(args__8849__auto__);
});
scoreboard.cljs$core$IFn$_invoke$arity$variadic = scoreboard__delegate;
return scoreboard;
})()
;
/**
* @param {...*} var_args
*/
tailrecursion.hoplon_demos.tictactoe.game = (function() { 
var game__delegate = function (args__8849__auto__){var vec__10309 = tailrecursion.hoplon.parse_args(args__8849__auto__);var map__10310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10309,0,null);var map__10310__$1 = ((cljs.core.seq_QMARK_(map__10310))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10310):map__10310);var attr = map__10310__$1;var history = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10310__$1,cljs.core.constant$keyword$38,tailrecursion.javelin.cell(cljs.core.PersistentVector.EMPTY));var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10310__$1,cljs.core.constant$keyword$40,3);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10309,1,null);var rowsize = parseInt(size);var sizen = (rowsize * rowsize);var game__$1 = tailrecursion.javelin.cell(tailrecursion.hoplon_demos.tictactoe.new_game(sizen));var rows = tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10313,G__10312,G__10311){return (G__10311.cljs$core$IFn$_invoke$arity$2 ? G__10311.cljs$core$IFn$_invoke$arity$2(G__10312,G__10313) : G__10311.call(null,G__10312,G__10313));
});})(rowsize,sizen,game__$1,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,game__$1,rowsize,cljs.core.partition);var columns = tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10315,G__10314){return (G__10314.cljs$core$IFn$_invoke$arity$1 ? G__10314.cljs$core$IFn$_invoke$arity$1(G__10315) : G__10314.call(null,G__10315));
});})(rowsize,sizen,game__$1,rows,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,rows,tailrecursion.hoplon_demos.tictactoe.transpose);var diagonals = tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,columns,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10318,G__10319,G__10316,G__10317){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__10316.cljs$core$IFn$_invoke$arity$1 ? G__10316.cljs$core$IFn$_invoke$arity$1(G__10317) : G__10316.call(null,G__10317)),(G__10316.cljs$core$IFn$_invoke$arity$1 ? G__10316.cljs$core$IFn$_invoke$arity$1((G__10318.cljs$core$IFn$_invoke$arity$2 ? G__10318.cljs$core$IFn$_invoke$arity$2(G__10319,G__10317) : G__10318.call(null,G__10319,G__10317))) : G__10316.call(null,(G__10318.cljs$core$IFn$_invoke$arity$2 ? G__10318.cljs$core$IFn$_invoke$arity$2(G__10319,G__10317) : G__10318.call(null,G__10319,G__10317))))], null);
});})(rowsize,sizen,game__$1,rows,columns,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,cljs.core.map,cljs.core.reverse,tailrecursion.hoplon_demos.tictactoe.diagonal,rows);var runs = tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,columns,diagonals,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10320,G__10322,G__10323,G__10321){return (G__10320.cljs$core$IFn$_invoke$arity$3 ? G__10320.cljs$core$IFn$_invoke$arity$3(G__10321,G__10322,G__10323) : G__10320.call(null,G__10321,G__10322,G__10323));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,cljs.core.concat,columns,diagonals,rows);var winner = tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10332,G__10330,G__10325,G__10324,G__10327,G__10331,G__10326,G__10329,G__10328){return (G__10324.cljs$core$IFn$_invoke$arity$1 ? G__10324.cljs$core$IFn$_invoke$arity$1((G__10325.cljs$core$IFn$_invoke$arity$2 ? G__10325.cljs$core$IFn$_invoke$arity$2(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (p1__6919_SHARP_){return (G__10326.cljs$core$IFn$_invoke$arity$2 ? G__10326.cljs$core$IFn$_invoke$arity$2(1,(G__10327.cljs$core$IFn$_invoke$arity$1 ? G__10327.cljs$core$IFn$_invoke$arity$1(p1__6919_SHARP_) : G__10327.call(null,p1__6919_SHARP_))) : G__10326.call(null,1,(G__10327.cljs$core$IFn$_invoke$arity$1 ? G__10327.cljs$core$IFn$_invoke$arity$1(p1__6919_SHARP_) : G__10327.call(null,p1__6919_SHARP_))));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(G__10328.cljs$core$IFn$_invoke$arity$2 ? G__10328.cljs$core$IFn$_invoke$arity$2(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (p1__6918_SHARP_){return (G__10329.cljs$core$IFn$_invoke$arity$2 ? G__10329.cljs$core$IFn$_invoke$arity$2(p1__6918_SHARP_,null) : G__10329.call(null,p1__6918_SHARP_,null));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(G__10330.cljs$core$IFn$_invoke$arity$2 ? G__10330.cljs$core$IFn$_invoke$arity$2(G__10331,G__10332) : G__10330.call(null,G__10331,G__10332))) : G__10328.call(null,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (p1__6918_SHARP_){return (G__10329.cljs$core$IFn$_invoke$arity$2 ? G__10329.cljs$core$IFn$_invoke$arity$2(p1__6918_SHARP_,null) : G__10329.call(null,p1__6918_SHARP_,null));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(G__10330.cljs$core$IFn$_invoke$arity$2 ? G__10330.cljs$core$IFn$_invoke$arity$2(G__10331,G__10332) : G__10330.call(null,G__10331,G__10332))))) : G__10325.call(null,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (p1__6919_SHARP_){return (G__10326.cljs$core$IFn$_invoke$arity$2 ? G__10326.cljs$core$IFn$_invoke$arity$2(1,(G__10327.cljs$core$IFn$_invoke$arity$1 ? G__10327.cljs$core$IFn$_invoke$arity$1(p1__6919_SHARP_) : G__10327.call(null,p1__6919_SHARP_))) : G__10326.call(null,1,(G__10327.cljs$core$IFn$_invoke$arity$1 ? G__10327.cljs$core$IFn$_invoke$arity$1(p1__6919_SHARP_) : G__10327.call(null,p1__6919_SHARP_))));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(G__10328.cljs$core$IFn$_invoke$arity$2 ? G__10328.cljs$core$IFn$_invoke$arity$2(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (p1__6918_SHARP_){return (G__10329.cljs$core$IFn$_invoke$arity$2 ? G__10329.cljs$core$IFn$_invoke$arity$2(p1__6918_SHARP_,null) : G__10329.call(null,p1__6918_SHARP_,null));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(G__10330.cljs$core$IFn$_invoke$arity$2 ? G__10330.cljs$core$IFn$_invoke$arity$2(G__10331,G__10332) : G__10330.call(null,G__10331,G__10332))) : G__10328.call(null,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (p1__6918_SHARP_){return (G__10329.cljs$core$IFn$_invoke$arity$2 ? G__10329.cljs$core$IFn$_invoke$arity$2(p1__6918_SHARP_,null) : G__10329.call(null,p1__6918_SHARP_,null));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(G__10330.cljs$core$IFn$_invoke$arity$2 ? G__10330.cljs$core$IFn$_invoke$arity$2(G__10331,G__10332) : G__10330.call(null,G__10331,G__10332))))))) : G__10324.call(null,(G__10325.cljs$core$IFn$_invoke$arity$2 ? G__10325.cljs$core$IFn$_invoke$arity$2(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (p1__6919_SHARP_){return (G__10326.cljs$core$IFn$_invoke$arity$2 ? G__10326.cljs$core$IFn$_invoke$arity$2(1,(G__10327.cljs$core$IFn$_invoke$arity$1 ? G__10327.cljs$core$IFn$_invoke$arity$1(p1__6919_SHARP_) : G__10327.call(null,p1__6919_SHARP_))) : G__10326.call(null,1,(G__10327.cljs$core$IFn$_invoke$arity$1 ? G__10327.cljs$core$IFn$_invoke$arity$1(p1__6919_SHARP_) : G__10327.call(null,p1__6919_SHARP_))));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(G__10328.cljs$core$IFn$_invoke$arity$2 ? G__10328.cljs$core$IFn$_invoke$arity$2(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (p1__6918_SHARP_){return (G__10329.cljs$core$IFn$_invoke$arity$2 ? G__10329.cljs$core$IFn$_invoke$arity$2(p1__6918_SHARP_,null) : G__10329.call(null,p1__6918_SHARP_,null));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(G__10330.cljs$core$IFn$_invoke$arity$2 ? G__10330.cljs$core$IFn$_invoke$arity$2(G__10331,G__10332) : G__10330.call(null,G__10331,G__10332))) : G__10328.call(null,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (p1__6918_SHARP_){return (G__10329.cljs$core$IFn$_invoke$arity$2 ? G__10329.cljs$core$IFn$_invoke$arity$2(p1__6918_SHARP_,null) : G__10329.call(null,p1__6918_SHARP_,null));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(G__10330.cljs$core$IFn$_invoke$arity$2 ? G__10330.cljs$core$IFn$_invoke$arity$2(G__10331,G__10332) : G__10330.call(null,G__10331,G__10332))))) : G__10325.call(null,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (p1__6919_SHARP_){return (G__10326.cljs$core$IFn$_invoke$arity$2 ? G__10326.cljs$core$IFn$_invoke$arity$2(1,(G__10327.cljs$core$IFn$_invoke$arity$1 ? G__10327.cljs$core$IFn$_invoke$arity$1(p1__6919_SHARP_) : G__10327.call(null,p1__6919_SHARP_))) : G__10326.call(null,1,(G__10327.cljs$core$IFn$_invoke$arity$1 ? G__10327.cljs$core$IFn$_invoke$arity$1(p1__6919_SHARP_) : G__10327.call(null,p1__6919_SHARP_))));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(G__10328.cljs$core$IFn$_invoke$arity$2 ? G__10328.cljs$core$IFn$_invoke$arity$2(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (p1__6918_SHARP_){return (G__10329.cljs$core$IFn$_invoke$arity$2 ? G__10329.cljs$core$IFn$_invoke$arity$2(p1__6918_SHARP_,null) : G__10329.call(null,p1__6918_SHARP_,null));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(G__10330.cljs$core$IFn$_invoke$arity$2 ? G__10330.cljs$core$IFn$_invoke$arity$2(G__10331,G__10332) : G__10330.call(null,G__10331,G__10332))) : G__10328.call(null,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (p1__6918_SHARP_){return (G__10329.cljs$core$IFn$_invoke$arity$2 ? G__10329.cljs$core$IFn$_invoke$arity$2(p1__6918_SHARP_,null) : G__10329.call(null,p1__6918_SHARP_,null));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(G__10330.cljs$core$IFn$_invoke$arity$2 ? G__10330.cljs$core$IFn$_invoke$arity$2(G__10331,G__10332) : G__10330.call(null,G__10331,G__10332))))))));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,runs,cljs.core.map,cljs.core.filter,cljs.core.ffirst,cljs.core.count,cljs.core.set,cljs.core._EQ_,cljs.core.contains_QMARK_,cljs.core.remove);var moves = tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10337,G__10338,G__10339,G__10340,G__10333,G__10335,G__10336,G__10334){return (G__10333.cljs$core$IFn$_invoke$arity$2 ? G__10333.cljs$core$IFn$_invoke$arity$2(G__10334,(G__10335.cljs$core$IFn$_invoke$arity$2 ? G__10335.cljs$core$IFn$_invoke$arity$2((G__10336.cljs$core$IFn$_invoke$arity$2 ? G__10336.cljs$core$IFn$_invoke$arity$2(G__10337,G__10338) : G__10336.call(null,G__10337,G__10338)),(G__10339.cljs$core$IFn$_invoke$arity$1 ? G__10339.cljs$core$IFn$_invoke$arity$1(G__10340) : G__10339.call(null,G__10340))) : G__10335.call(null,(G__10336.cljs$core$IFn$_invoke$arity$2 ? G__10336.cljs$core$IFn$_invoke$arity$2(G__10337,G__10338) : G__10336.call(null,G__10337,G__10338)),(G__10339.cljs$core$IFn$_invoke$arity$1 ? G__10339.cljs$core$IFn$_invoke$arity$1(G__10340) : G__10339.call(null,G__10340))))) : G__10333.call(null,G__10334,(G__10335.cljs$core$IFn$_invoke$arity$2 ? G__10335.cljs$core$IFn$_invoke$arity$2((G__10336.cljs$core$IFn$_invoke$arity$2 ? G__10336.cljs$core$IFn$_invoke$arity$2(G__10337,G__10338) : G__10336.call(null,G__10337,G__10338)),(G__10339.cljs$core$IFn$_invoke$arity$1 ? G__10339.cljs$core$IFn$_invoke$arity$1(G__10340) : G__10339.call(null,G__10340))) : G__10335.call(null,(G__10336.cljs$core$IFn$_invoke$arity$2 ? G__10336.cljs$core$IFn$_invoke$arity$2(G__10337,G__10338) : G__10336.call(null,G__10337,G__10338)),(G__10339.cljs$core$IFn$_invoke$arity$1 ? G__10339.cljs$core$IFn$_invoke$arity$1(G__10340) : G__10339.call(null,G__10340))))));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,cljs.core.nil_QMARK_,cljs.core.second,tailrecursion.hoplon_demos.tictactoe.indexed,game__$1,cljs.core.map,cljs.core.filter,cljs.core.comp,cljs.core.first);var no_moves_QMARK_ = tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10343,G__10342,G__10341){return (G__10341.cljs$core$IFn$_invoke$arity$1 ? G__10341.cljs$core$IFn$_invoke$arity$1((G__10342.cljs$core$IFn$_invoke$arity$1 ? G__10342.cljs$core$IFn$_invoke$arity$1(G__10343) : G__10342.call(null,G__10343))) : G__10341.call(null,(G__10342.cljs$core$IFn$_invoke$arity$1 ? G__10342.cljs$core$IFn$_invoke$arity$1(G__10343) : G__10342.call(null,G__10343))));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,moves,cljs.core.seq,cljs.core.not);var over = tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10345,G__10344){if(cljs.core.truth_(G__10344))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10344)+" won!");
} else
{if(cljs.core.truth_(G__10345))
{return "Cat's game.";
} else
{return null;
}
}
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,no_moves_QMARK_,winner);var ai_BANG_ = ((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){if(cljs.core.truth_(cljs.core.deref(over)))
{return null;
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(game__$1,cljs.core.assoc,cljs.core.rand_nth(cljs.core.deref(moves)),"O");
}
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
;var play_BANG_ = ((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (i,j){var idx = ((i * rowsize) + j);if((cljs.core.not(cljs.core.deref(over))) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(game__$1),idx) == null)))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(game__$1,cljs.core.assoc,idx,"X");
} else
{return null;
}
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
;cljs.core.reset_BANG_(history,new cljs.core.PersistentArrayMap(null, 3, ["X",0,"O",0,"cat",0], null));
tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10349,G__10347,G__10350,G__10351,G__10346,G__10348){if(cljs.core.truth_((function (){var or__7810__auto__ = G__10346;if(cljs.core.truth_(or__7810__auto__))
{return or__7810__auto__;
} else
{return G__10347;
}
})()))
{return (G__10348.cljs$core$IFn$_invoke$arity$4 ? G__10348.cljs$core$IFn$_invoke$arity$4(G__10349,G__10350,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__7810__auto__ = G__10346;if(cljs.core.truth_(or__7810__auto__))
{return or__7810__auto__;
} else
{return "cat";
}
})()], null),G__10351) : G__10348.call(null,G__10349,G__10350,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__7810__auto__ = G__10346;if(cljs.core.truth_(or__7810__auto__))
{return or__7810__auto__;
} else
{return "cat";
}
})()], null),G__10351));
} else
{return null;
}
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,tailrecursion.javelin.cell(history),no_moves_QMARK_,cljs.core.update_in,cljs.core.inc,winner,cljs.core.swap_BANG_);
return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.constant$keyword$40,cljs.core.array_seq([cljs.core.constant$keyword$38], 0)),(tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"tictac",tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10352,G__10353){return (G__10352.cljs$core$IFn$_invoke$arity$1 ? G__10352.cljs$core$IFn$_invoke$arity$1(G__10353) : G__10352.call(null,G__10353));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,tailrecursion.hoplon_demos.tictactoe.indexed,rows),null,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (item__8860__auto__){var vec__10354 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10356){var vec__10355 = G__10356;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10355,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10355,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null);
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,item__8860__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10354,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10354,1,null);return (tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10357,G__10358){return (G__10357.cljs$core$IFn$_invoke$arity$1 ? G__10357.cljs$core$IFn$_invoke$arity$1(G__10358) : G__10357.call(null,G__10358));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,tailrecursion.hoplon_demos.tictactoe.indexed,row),null,((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (item__8860__auto____$1){var vec__10359 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10361){var vec__10360 = G__10361;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
)) : tailrecursion.hoplon.tr.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10357,G__10358){return (G__10357.cljs$core$IFn$_invoke$arity$1 ? G__10357.cljs$core$IFn$_invoke$arity$1(G__10358) : G__10357.call(null,G__10358));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,tailrecursion.hoplon_demos.tictactoe.indexed,row),null,((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (item__8860__auto____$1){var vec__10359 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10361){var vec__10360 = G__10361;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
)));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
)) : tailrecursion.hoplon.table.call(null,cljs.core.constant$keyword$25,"tictac",tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10352,G__10353){return (G__10352.cljs$core$IFn$_invoke$arity$1 ? G__10352.cljs$core$IFn$_invoke$arity$1(G__10353) : G__10352.call(null,G__10353));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,tailrecursion.hoplon_demos.tictactoe.indexed,rows),null,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (item__8860__auto__){var vec__10354 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10356){var vec__10355 = G__10356;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10355,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10355,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null);
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,item__8860__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10354,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10354,1,null);return (tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10357,G__10358){return (G__10357.cljs$core$IFn$_invoke$arity$1 ? G__10357.cljs$core$IFn$_invoke$arity$1(G__10358) : G__10357.call(null,G__10358));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,tailrecursion.hoplon_demos.tictactoe.indexed,row),null,((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (item__8860__auto____$1){var vec__10359 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10361){var vec__10360 = G__10361;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
)) : tailrecursion.hoplon.tr.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10357,G__10358){return (G__10357.cljs$core$IFn$_invoke$arity$1 ? G__10357.cljs$core$IFn$_invoke$arity$1(G__10358) : G__10357.call(null,G__10358));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,tailrecursion.hoplon_demos.tictactoe.indexed,row),null,((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (item__8860__auto____$1){var vec__10359 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10361){var vec__10360 = G__10361;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
)));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
))),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$37,over,(tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10364,G__10365){return G__10364.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10365));
});})(t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,t__8874__auto__,over);
return t__8874__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10364,G__10365){return G__10364.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10365));
});})(t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,t__8874__auto__,over);
return t__8874__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){return cljs.core.reset_BANG_(game__$1,tailrecursion.hoplon_demos.tictactoe.new_game(sizen));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,"Play Again") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$41,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){return cljs.core.reset_BANG_(game__$1,tailrecursion.hoplon_demos.tictactoe.new_game(sizen));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,"Play Again"))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$37,over,(tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10364,G__10365){return G__10364.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10365));
});})(t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,t__8874__auto__,over);
return t__8874__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10364,G__10365){return G__10364.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10365));
});})(t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,t__8874__auto__,over);
return t__8874__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){return cljs.core.reset_BANG_(game__$1,tailrecursion.hoplon_demos.tictactoe.new_game(sizen));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,"Play Again") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$41,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){return cljs.core.reset_BANG_(game__$1,tailrecursion.hoplon_demos.tictactoe.new_game(sizen));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,"Play Again"))))) : tailrecursion.hoplon.div.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.constant$keyword$40,cljs.core.array_seq([cljs.core.constant$keyword$38], 0)),(tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"tictac",tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10352,G__10353){return (G__10352.cljs$core$IFn$_invoke$arity$1 ? G__10352.cljs$core$IFn$_invoke$arity$1(G__10353) : G__10352.call(null,G__10353));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,tailrecursion.hoplon_demos.tictactoe.indexed,rows),null,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (item__8860__auto__){var vec__10354 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10356){var vec__10355 = G__10356;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10355,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10355,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null);
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,item__8860__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10354,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10354,1,null);return (tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10357,G__10358){return (G__10357.cljs$core$IFn$_invoke$arity$1 ? G__10357.cljs$core$IFn$_invoke$arity$1(G__10358) : G__10357.call(null,G__10358));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,tailrecursion.hoplon_demos.tictactoe.indexed,row),null,((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (item__8860__auto____$1){var vec__10359 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10361){var vec__10360 = G__10361;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
)) : tailrecursion.hoplon.tr.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10357,G__10358){return (G__10357.cljs$core$IFn$_invoke$arity$1 ? G__10357.cljs$core$IFn$_invoke$arity$1(G__10358) : G__10357.call(null,G__10358));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,tailrecursion.hoplon_demos.tictactoe.indexed,row),null,((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (item__8860__auto____$1){var vec__10359 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10361){var vec__10360 = G__10361;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
)));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
)) : tailrecursion.hoplon.table.call(null,cljs.core.constant$keyword$25,"tictac",tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10352,G__10353){return (G__10352.cljs$core$IFn$_invoke$arity$1 ? G__10352.cljs$core$IFn$_invoke$arity$1(G__10353) : G__10352.call(null,G__10353));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,tailrecursion.hoplon_demos.tictactoe.indexed,rows),null,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (item__8860__auto__){var vec__10354 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10356){var vec__10355 = G__10356;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10355,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10355,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null);
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,item__8860__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10354,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10354,1,null);return (tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10357,G__10358){return (G__10357.cljs$core$IFn$_invoke$arity$1 ? G__10357.cljs$core$IFn$_invoke$arity$1(G__10358) : G__10357.call(null,G__10358));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,tailrecursion.hoplon_demos.tictactoe.indexed,row),null,((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (item__8860__auto____$1){var vec__10359 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10361){var vec__10360 = G__10361;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
)) : tailrecursion.hoplon.tr.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10357,G__10358){return (G__10357.cljs$core$IFn$_invoke$arity$1 ? G__10357.cljs$core$IFn$_invoke$arity$1(G__10358) : G__10357.call(null,G__10358));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,tailrecursion.hoplon_demos.tictactoe.indexed,row),null,((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (item__8860__auto____$1){var vec__10359 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10361){var vec__10360 = G__10361;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10360,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){var and__7798__auto__ = play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10363,G__10362){return G__10362.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10363));
});})(t__8874__auto__,vec__10359,j,x,vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10354,i,row,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
)));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
))),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$37,over,(tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10364,G__10365){return G__10364.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10365));
});})(t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,t__8874__auto__,over);
return t__8874__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10364,G__10365){return G__10364.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10365));
});})(t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,t__8874__auto__,over);
return t__8874__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){return cljs.core.reset_BANG_(game__$1,tailrecursion.hoplon_demos.tictactoe.new_game(sizen));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,"Play Again") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$41,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){return cljs.core.reset_BANG_(game__$1,tailrecursion.hoplon_demos.tictactoe.new_game(sizen));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,"Play Again"))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$37,over,(tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10364,G__10365){return G__10364.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10365));
});})(t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,t__8874__auto__,over);
return t__8874__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (G__10364,G__10365){return G__10364.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10365));
});})(t__8874__auto__,rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
).call(null,t__8874__auto__,over);
return t__8874__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){return cljs.core.reset_BANG_(game__$1,tailrecursion.hoplon_demos.tictactoe.new_game(sizen));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,"Play Again") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$41,((function (rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_){
return (function (){return cljs.core.reset_BANG_(game__$1,tailrecursion.hoplon_demos.tictactoe.new_game(sizen));
});})(rowsize,sizen,game__$1,rows,columns,diagonals,runs,winner,moves,no_moves_QMARK_,over,ai_BANG_,play_BANG_,vec__10309,map__10310,map__10310__$1,attr,history,size,_))
,"Play Again"))))));
};
var game = function (var_args){
var args__8849__auto__ = null;if (arguments.length > 0) {
  args__8849__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return game__delegate.call(this,args__8849__auto__);};
game.cljs$lang$maxFixedArity = 0;
game.cljs$lang$applyTo = (function (arglist__10366){
var args__8849__auto__ = cljs.core.seq(arglist__10366);
return game__delegate(args__8849__auto__);
});
game.cljs$core$IFn$_invoke$arity$variadic = game__delegate;
return game;
})()
;
