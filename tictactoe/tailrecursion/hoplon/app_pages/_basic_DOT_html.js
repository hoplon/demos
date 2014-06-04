// Compiled by ClojureScript 0.0-2227
goog.provide('tailrecursion.hoplon.app_pages._basic_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.app_pages._basic_DOT_html.hoploninit = (function hoploninit(){tailrecursion.hoplon.app_pages._basic_DOT_html.transpose = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,cljs.core.map,cljs.core.vector);
tailrecursion.hoplon.app_pages._basic_DOT_html.diagonal = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.drop),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
tailrecursion.hoplon.app_pages._basic_DOT_html.indexed = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed,cljs.core.vector);
tailrecursion.hoplon.app_pages._basic_DOT_html.new_game = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(9,null));
tailrecursion.hoplon.app_pages._basic_DOT_html.game = tailrecursion.javelin.cell(tailrecursion.hoplon.app_pages._basic_DOT_html.new_game);
tailrecursion.hoplon.app_pages._basic_DOT_html.undos = tailrecursion.javelin.cell(cljs.core.List.EMPTY);
tailrecursion.hoplon.app_pages._basic_DOT_html.rows = tailrecursion.javelin.lift((function (G__10137,G__10136){return (G__10136.cljs$core$IFn$_invoke$arity$2 ? G__10136.cljs$core$IFn$_invoke$arity$2(3,G__10137) : G__10136.call(null,3,G__10137));
})).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.game,cljs.core.partition);
tailrecursion.hoplon.app_pages._basic_DOT_html.columns = tailrecursion.javelin.lift((function (G__10139,G__10138){return (G__10138.cljs$core$IFn$_invoke$arity$1 ? G__10138.cljs$core$IFn$_invoke$arity$1(G__10139) : G__10138.call(null,G__10139));
})).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.rows,tailrecursion.hoplon.app_pages._basic_DOT_html.transpose);
tailrecursion.hoplon.app_pages._basic_DOT_html.diagonals = tailrecursion.javelin.lift((function (G__10142,G__10143,G__10140,G__10141){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(G__10140.cljs$core$IFn$_invoke$arity$1 ? G__10140.cljs$core$IFn$_invoke$arity$1(G__10141) : G__10140.call(null,G__10141)),(G__10140.cljs$core$IFn$_invoke$arity$1 ? G__10140.cljs$core$IFn$_invoke$arity$1((G__10142.cljs$core$IFn$_invoke$arity$2 ? G__10142.cljs$core$IFn$_invoke$arity$2(G__10143,G__10141) : G__10142.call(null,G__10143,G__10141))) : G__10140.call(null,(G__10142.cljs$core$IFn$_invoke$arity$2 ? G__10142.cljs$core$IFn$_invoke$arity$2(G__10143,G__10141) : G__10142.call(null,G__10143,G__10141))))], null);
})).call(null,cljs.core.map,cljs.core.reverse,tailrecursion.hoplon.app_pages._basic_DOT_html.diagonal,tailrecursion.hoplon.app_pages._basic_DOT_html.rows);
tailrecursion.hoplon.app_pages._basic_DOT_html.runs = tailrecursion.javelin.lift((function (G__10144,G__10146,G__10147,G__10145){return (G__10144.cljs$core$IFn$_invoke$arity$3 ? G__10144.cljs$core$IFn$_invoke$arity$3(G__10145,G__10146,G__10147) : G__10144.call(null,G__10145,G__10146,G__10147));
})).call(null,cljs.core.concat,tailrecursion.hoplon.app_pages._basic_DOT_html.columns,tailrecursion.hoplon.app_pages._basic_DOT_html.diagonals,tailrecursion.hoplon.app_pages._basic_DOT_html.rows);
tailrecursion.hoplon.app_pages._basic_DOT_html.winner = tailrecursion.javelin.lift((function (G__10156,G__10154,G__10149,G__10148,G__10151,G__10155,G__10150,G__10153,G__10152){return (G__10148.cljs$core$IFn$_invoke$arity$1 ? G__10148.cljs$core$IFn$_invoke$arity$1((G__10149.cljs$core$IFn$_invoke$arity$2 ? G__10149.cljs$core$IFn$_invoke$arity$2((function (p1__6556_SHARP_){return (G__10150.cljs$core$IFn$_invoke$arity$2 ? G__10150.cljs$core$IFn$_invoke$arity$2(1,(G__10151.cljs$core$IFn$_invoke$arity$1 ? G__10151.cljs$core$IFn$_invoke$arity$1(p1__6556_SHARP_) : G__10151.call(null,p1__6556_SHARP_))) : G__10150.call(null,1,(G__10151.cljs$core$IFn$_invoke$arity$1 ? G__10151.cljs$core$IFn$_invoke$arity$1(p1__6556_SHARP_) : G__10151.call(null,p1__6556_SHARP_))));
}),(G__10152.cljs$core$IFn$_invoke$arity$2 ? G__10152.cljs$core$IFn$_invoke$arity$2((function (p1__6555_SHARP_){return (G__10153.cljs$core$IFn$_invoke$arity$2 ? G__10153.cljs$core$IFn$_invoke$arity$2(p1__6555_SHARP_,null) : G__10153.call(null,p1__6555_SHARP_,null));
}),(G__10154.cljs$core$IFn$_invoke$arity$2 ? G__10154.cljs$core$IFn$_invoke$arity$2(G__10155,G__10156) : G__10154.call(null,G__10155,G__10156))) : G__10152.call(null,(function (p1__6555_SHARP_){return (G__10153.cljs$core$IFn$_invoke$arity$2 ? G__10153.cljs$core$IFn$_invoke$arity$2(p1__6555_SHARP_,null) : G__10153.call(null,p1__6555_SHARP_,null));
}),(G__10154.cljs$core$IFn$_invoke$arity$2 ? G__10154.cljs$core$IFn$_invoke$arity$2(G__10155,G__10156) : G__10154.call(null,G__10155,G__10156))))) : G__10149.call(null,(function (p1__6556_SHARP_){return (G__10150.cljs$core$IFn$_invoke$arity$2 ? G__10150.cljs$core$IFn$_invoke$arity$2(1,(G__10151.cljs$core$IFn$_invoke$arity$1 ? G__10151.cljs$core$IFn$_invoke$arity$1(p1__6556_SHARP_) : G__10151.call(null,p1__6556_SHARP_))) : G__10150.call(null,1,(G__10151.cljs$core$IFn$_invoke$arity$1 ? G__10151.cljs$core$IFn$_invoke$arity$1(p1__6556_SHARP_) : G__10151.call(null,p1__6556_SHARP_))));
}),(G__10152.cljs$core$IFn$_invoke$arity$2 ? G__10152.cljs$core$IFn$_invoke$arity$2((function (p1__6555_SHARP_){return (G__10153.cljs$core$IFn$_invoke$arity$2 ? G__10153.cljs$core$IFn$_invoke$arity$2(p1__6555_SHARP_,null) : G__10153.call(null,p1__6555_SHARP_,null));
}),(G__10154.cljs$core$IFn$_invoke$arity$2 ? G__10154.cljs$core$IFn$_invoke$arity$2(G__10155,G__10156) : G__10154.call(null,G__10155,G__10156))) : G__10152.call(null,(function (p1__6555_SHARP_){return (G__10153.cljs$core$IFn$_invoke$arity$2 ? G__10153.cljs$core$IFn$_invoke$arity$2(p1__6555_SHARP_,null) : G__10153.call(null,p1__6555_SHARP_,null));
}),(G__10154.cljs$core$IFn$_invoke$arity$2 ? G__10154.cljs$core$IFn$_invoke$arity$2(G__10155,G__10156) : G__10154.call(null,G__10155,G__10156))))))) : G__10148.call(null,(G__10149.cljs$core$IFn$_invoke$arity$2 ? G__10149.cljs$core$IFn$_invoke$arity$2((function (p1__6556_SHARP_){return (G__10150.cljs$core$IFn$_invoke$arity$2 ? G__10150.cljs$core$IFn$_invoke$arity$2(1,(G__10151.cljs$core$IFn$_invoke$arity$1 ? G__10151.cljs$core$IFn$_invoke$arity$1(p1__6556_SHARP_) : G__10151.call(null,p1__6556_SHARP_))) : G__10150.call(null,1,(G__10151.cljs$core$IFn$_invoke$arity$1 ? G__10151.cljs$core$IFn$_invoke$arity$1(p1__6556_SHARP_) : G__10151.call(null,p1__6556_SHARP_))));
}),(G__10152.cljs$core$IFn$_invoke$arity$2 ? G__10152.cljs$core$IFn$_invoke$arity$2((function (p1__6555_SHARP_){return (G__10153.cljs$core$IFn$_invoke$arity$2 ? G__10153.cljs$core$IFn$_invoke$arity$2(p1__6555_SHARP_,null) : G__10153.call(null,p1__6555_SHARP_,null));
}),(G__10154.cljs$core$IFn$_invoke$arity$2 ? G__10154.cljs$core$IFn$_invoke$arity$2(G__10155,G__10156) : G__10154.call(null,G__10155,G__10156))) : G__10152.call(null,(function (p1__6555_SHARP_){return (G__10153.cljs$core$IFn$_invoke$arity$2 ? G__10153.cljs$core$IFn$_invoke$arity$2(p1__6555_SHARP_,null) : G__10153.call(null,p1__6555_SHARP_,null));
}),(G__10154.cljs$core$IFn$_invoke$arity$2 ? G__10154.cljs$core$IFn$_invoke$arity$2(G__10155,G__10156) : G__10154.call(null,G__10155,G__10156))))) : G__10149.call(null,(function (p1__6556_SHARP_){return (G__10150.cljs$core$IFn$_invoke$arity$2 ? G__10150.cljs$core$IFn$_invoke$arity$2(1,(G__10151.cljs$core$IFn$_invoke$arity$1 ? G__10151.cljs$core$IFn$_invoke$arity$1(p1__6556_SHARP_) : G__10151.call(null,p1__6556_SHARP_))) : G__10150.call(null,1,(G__10151.cljs$core$IFn$_invoke$arity$1 ? G__10151.cljs$core$IFn$_invoke$arity$1(p1__6556_SHARP_) : G__10151.call(null,p1__6556_SHARP_))));
}),(G__10152.cljs$core$IFn$_invoke$arity$2 ? G__10152.cljs$core$IFn$_invoke$arity$2((function (p1__6555_SHARP_){return (G__10153.cljs$core$IFn$_invoke$arity$2 ? G__10153.cljs$core$IFn$_invoke$arity$2(p1__6555_SHARP_,null) : G__10153.call(null,p1__6555_SHARP_,null));
}),(G__10154.cljs$core$IFn$_invoke$arity$2 ? G__10154.cljs$core$IFn$_invoke$arity$2(G__10155,G__10156) : G__10154.call(null,G__10155,G__10156))) : G__10152.call(null,(function (p1__6555_SHARP_){return (G__10153.cljs$core$IFn$_invoke$arity$2 ? G__10153.cljs$core$IFn$_invoke$arity$2(p1__6555_SHARP_,null) : G__10153.call(null,p1__6555_SHARP_,null));
}),(G__10154.cljs$core$IFn$_invoke$arity$2 ? G__10154.cljs$core$IFn$_invoke$arity$2(G__10155,G__10156) : G__10154.call(null,G__10155,G__10156))))))));
})).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.runs,cljs.core.map,cljs.core.filter,cljs.core.ffirst,cljs.core.count,cljs.core.set,cljs.core._EQ_,cljs.core.contains_QMARK_,cljs.core.remove);
tailrecursion.hoplon.app_pages._basic_DOT_html.moves = tailrecursion.javelin.lift((function (G__10161,G__10162,G__10163,G__10164,G__10157,G__10159,G__10160,G__10158){return (G__10157.cljs$core$IFn$_invoke$arity$2 ? G__10157.cljs$core$IFn$_invoke$arity$2(G__10158,(G__10159.cljs$core$IFn$_invoke$arity$2 ? G__10159.cljs$core$IFn$_invoke$arity$2((G__10160.cljs$core$IFn$_invoke$arity$2 ? G__10160.cljs$core$IFn$_invoke$arity$2(G__10161,G__10162) : G__10160.call(null,G__10161,G__10162)),(G__10163.cljs$core$IFn$_invoke$arity$1 ? G__10163.cljs$core$IFn$_invoke$arity$1(G__10164) : G__10163.call(null,G__10164))) : G__10159.call(null,(G__10160.cljs$core$IFn$_invoke$arity$2 ? G__10160.cljs$core$IFn$_invoke$arity$2(G__10161,G__10162) : G__10160.call(null,G__10161,G__10162)),(G__10163.cljs$core$IFn$_invoke$arity$1 ? G__10163.cljs$core$IFn$_invoke$arity$1(G__10164) : G__10163.call(null,G__10164))))) : G__10157.call(null,G__10158,(G__10159.cljs$core$IFn$_invoke$arity$2 ? G__10159.cljs$core$IFn$_invoke$arity$2((G__10160.cljs$core$IFn$_invoke$arity$2 ? G__10160.cljs$core$IFn$_invoke$arity$2(G__10161,G__10162) : G__10160.call(null,G__10161,G__10162)),(G__10163.cljs$core$IFn$_invoke$arity$1 ? G__10163.cljs$core$IFn$_invoke$arity$1(G__10164) : G__10163.call(null,G__10164))) : G__10159.call(null,(G__10160.cljs$core$IFn$_invoke$arity$2 ? G__10160.cljs$core$IFn$_invoke$arity$2(G__10161,G__10162) : G__10160.call(null,G__10161,G__10162)),(G__10163.cljs$core$IFn$_invoke$arity$1 ? G__10163.cljs$core$IFn$_invoke$arity$1(G__10164) : G__10163.call(null,G__10164))))));
})).call(null,cljs.core.nil_QMARK_,cljs.core.second,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,tailrecursion.hoplon.app_pages._basic_DOT_html.game,cljs.core.map,cljs.core.filter,cljs.core.comp,cljs.core.first);
tailrecursion.hoplon.app_pages._basic_DOT_html.no_moves_QMARK_ = tailrecursion.javelin.lift((function (G__10167,G__10166,G__10165){return (G__10165.cljs$core$IFn$_invoke$arity$1 ? G__10165.cljs$core$IFn$_invoke$arity$1((G__10166.cljs$core$IFn$_invoke$arity$1 ? G__10166.cljs$core$IFn$_invoke$arity$1(G__10167) : G__10166.call(null,G__10167))) : G__10165.call(null,(G__10166.cljs$core$IFn$_invoke$arity$1 ? G__10166.cljs$core$IFn$_invoke$arity$1(G__10167) : G__10166.call(null,G__10167))));
})).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.moves,cljs.core.seq,cljs.core.not);
tailrecursion.hoplon.app_pages._basic_DOT_html.over = tailrecursion.javelin.lift((function (G__10169,G__10168){if(cljs.core.truth_(G__10168))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10168)+" won!");
} else
{if(cljs.core.truth_(G__10169))
{return "Cat's game.";
} else
{return null;
}
}
})).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.no_moves_QMARK_,tailrecursion.hoplon.app_pages._basic_DOT_html.winner);
tailrecursion.hoplon.app_pages._basic_DOT_html.undo_BANG_ = (function undo_BANG_(){if(cljs.core.seq(cljs.core.deref(tailrecursion.hoplon.app_pages._basic_DOT_html.undos)))
{cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._basic_DOT_html.game,cljs.core.peek(cljs.core.deref(tailrecursion.hoplon.app_pages._basic_DOT_html.undos)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._basic_DOT_html.undos,cljs.core.pop);
} else
{return null;
}
});
tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_ = (function ai_BANG_(){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.app_pages._basic_DOT_html.over)))
{return null;
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tailrecursion.hoplon.app_pages._basic_DOT_html.game,cljs.core.assoc,cljs.core.rand_nth(cljs.core.deref(tailrecursion.hoplon.app_pages._basic_DOT_html.moves)),"O");
}
});
tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_ = (function play_BANG_(i,j){var idx = ((i * 3) + j);if((cljs.core.not(cljs.core.deref(tailrecursion.hoplon.app_pages._basic_DOT_html.over))) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tailrecursion.hoplon.app_pages._basic_DOT_html.game),idx) == null)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._basic_DOT_html.undos,cljs.core.conj,cljs.core.deref(tailrecursion.hoplon.app_pages._basic_DOT_html.game));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tailrecursion.hoplon.app_pages._basic_DOT_html.game,cljs.core.assoc,idx,"X");
} else
{return null;
}
});
tailrecursion.hoplon.app_pages._basic_DOT_html.reset_game_BANG_ = (function reset_game_BANG_(){cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._basic_DOT_html.game,tailrecursion.hoplon.app_pages._basic_DOT_html.new_game);
return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._basic_DOT_html.undos,cljs.core.List.EMPTY);
});
(tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$2((tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$44,"text/css",cljs.core.constant$keyword$45,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$44,"text/css",cljs.core.constant$keyword$45,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Tic Tac Toe") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Tic Tac Toe")),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$45,"screen.css") : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$45,"screen.css"))], null);
})()) : tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$44,"text/css",cljs.core.constant$keyword$45,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$44,"text/css",cljs.core.constant$keyword$45,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Tic Tac Toe") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Tic Tac Toe")),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$45,"screen.css") : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$45,"screen.css"))], null);
})())),(tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__10170 = (tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"tictac",tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift((function (G__10171,G__10172){return (G__10171.cljs$core$IFn$_invoke$arity$1 ? G__10171.cljs$core$IFn$_invoke$arity$1(G__10172) : G__10171.call(null,G__10172));
})).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,tailrecursion.hoplon.app_pages._basic_DOT_html.rows),null,(function (item__8860__auto__){var vec__10173 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift((function (G__10175){var vec__10174 = G__10175;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null);
})).call(null,item__8860__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,1,null);return (tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)) : tailrecursion.hoplon.tr.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)));
}))) : tailrecursion.hoplon.table.call(null,cljs.core.constant$keyword$25,"tictac",tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift((function (G__10171,G__10172){return (G__10171.cljs$core$IFn$_invoke$arity$1 ? G__10171.cljs$core$IFn$_invoke$arity$1(G__10172) : G__10171.call(null,G__10172));
})).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,tailrecursion.hoplon.app_pages._basic_DOT_html.rows),null,(function (item__8860__auto__){var vec__10173 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift((function (G__10175){var vec__10174 = G__10175;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null);
})).call(null,item__8860__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,1,null);return (tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)) : tailrecursion.hoplon.tr.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)));
}))));return G__10170;
})(),(function (){var G__10184 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.undo_BANG_,"Undo") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.undo_BANG_,"Undo"));var G__10183 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__10184){
return (function (G__10187,G__10188,G__10186,G__10185){return ((G__10185.cljs$core$IFn$_invoke$arity$1 ? G__10185.cljs$core$IFn$_invoke$arity$1(G__10186) : G__10185.call(null,G__10186))) && ((G__10187.cljs$core$IFn$_invoke$arity$1 ? G__10187.cljs$core$IFn$_invoke$arity$1(G__10188) : G__10187.call(null,G__10188)));
});})(G__10184))
).call(null,cljs.core.seq,tailrecursion.hoplon.app_pages._basic_DOT_html.undos,tailrecursion.hoplon.app_pages._basic_DOT_html.over,cljs.core.not),G__10184) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__10184){
return (function (G__10187,G__10188,G__10186,G__10185){return ((G__10185.cljs$core$IFn$_invoke$arity$1 ? G__10185.cljs$core$IFn$_invoke$arity$1(G__10186) : G__10185.call(null,G__10186))) && ((G__10187.cljs$core$IFn$_invoke$arity$1 ? G__10187.cljs$core$IFn$_invoke$arity$1(G__10188) : G__10187.call(null,G__10188)));
});})(G__10184))
).call(null,cljs.core.seq,tailrecursion.hoplon.app_pages._basic_DOT_html.undos,tailrecursion.hoplon.app_pages._basic_DOT_html.over,cljs.core.not),G__10184));return G__10183;
})(),(function (){var G__10190 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__){
return (function (G__10192,G__10193){return G__10192.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10193));
});})(t__8874__auto__))
).call(null,t__8874__auto__,tailrecursion.hoplon.app_pages._basic_DOT_html.over);
return t__8874__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__){
return (function (G__10192,G__10193){return G__10192.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10193));
});})(t__8874__auto__))
).call(null,t__8874__auto__,tailrecursion.hoplon.app_pages._basic_DOT_html.over);
return t__8874__auto__;
})()));var G__10191 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.reset_game_BANG_,"Play Again") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.reset_game_BANG_,"Play Again"));var G__10189 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$37,tailrecursion.hoplon.app_pages._basic_DOT_html.over,G__10190,G__10191) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$37,tailrecursion.hoplon.app_pages._basic_DOT_html.over,G__10190,G__10191));return G__10189;
})(),(function (){var G__10194 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$45,"https://github.com/tailrecursion/hoplon-demos/blob/master/tictactoe/src/basic.cljs.hl","Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$45,"https://github.com/tailrecursion/hoplon-demos/blob/master/tictactoe/src/basic.cljs.hl","Source Code"));return G__10194;
})()) : tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var G__10170 = (tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"tictac",tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift((function (G__10171,G__10172){return (G__10171.cljs$core$IFn$_invoke$arity$1 ? G__10171.cljs$core$IFn$_invoke$arity$1(G__10172) : G__10171.call(null,G__10172));
})).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,tailrecursion.hoplon.app_pages._basic_DOT_html.rows),null,(function (item__8860__auto__){var vec__10173 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift((function (G__10175){var vec__10174 = G__10175;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null);
})).call(null,item__8860__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,1,null);return (tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)) : tailrecursion.hoplon.tr.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)));
}))) : tailrecursion.hoplon.table.call(null,cljs.core.constant$keyword$25,"tictac",tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift((function (G__10171,G__10172){return (G__10171.cljs$core$IFn$_invoke$arity$1 ? G__10171.cljs$core$IFn$_invoke$arity$1(G__10172) : G__10171.call(null,G__10172));
})).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,tailrecursion.hoplon.app_pages._basic_DOT_html.rows),null,(function (item__8860__auto__){var vec__10173 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift((function (G__10175){var vec__10174 = G__10175;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null);
})).call(null,item__8860__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,1,null);return (tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)) : tailrecursion.hoplon.tr.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)));
}))));return G__10170;
})(),(function (){var G__10184 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.undo_BANG_,"Undo") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.undo_BANG_,"Undo"));var G__10183 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__10184){
return (function (G__10187,G__10188,G__10186,G__10185){return ((G__10185.cljs$core$IFn$_invoke$arity$1 ? G__10185.cljs$core$IFn$_invoke$arity$1(G__10186) : G__10185.call(null,G__10186))) && ((G__10187.cljs$core$IFn$_invoke$arity$1 ? G__10187.cljs$core$IFn$_invoke$arity$1(G__10188) : G__10187.call(null,G__10188)));
});})(G__10184))
).call(null,cljs.core.seq,tailrecursion.hoplon.app_pages._basic_DOT_html.undos,tailrecursion.hoplon.app_pages._basic_DOT_html.over,cljs.core.not),G__10184) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__10184){
return (function (G__10187,G__10188,G__10186,G__10185){return ((G__10185.cljs$core$IFn$_invoke$arity$1 ? G__10185.cljs$core$IFn$_invoke$arity$1(G__10186) : G__10185.call(null,G__10186))) && ((G__10187.cljs$core$IFn$_invoke$arity$1 ? G__10187.cljs$core$IFn$_invoke$arity$1(G__10188) : G__10187.call(null,G__10188)));
});})(G__10184))
).call(null,cljs.core.seq,tailrecursion.hoplon.app_pages._basic_DOT_html.undos,tailrecursion.hoplon.app_pages._basic_DOT_html.over,cljs.core.not),G__10184));return G__10183;
})(),(function (){var G__10190 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__){
return (function (G__10192,G__10193){return G__10192.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10193));
});})(t__8874__auto__))
).call(null,t__8874__auto__,tailrecursion.hoplon.app_pages._basic_DOT_html.over);
return t__8874__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__){
return (function (G__10192,G__10193){return G__10192.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10193));
});})(t__8874__auto__))
).call(null,t__8874__auto__,tailrecursion.hoplon.app_pages._basic_DOT_html.over);
return t__8874__auto__;
})()));var G__10191 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.reset_game_BANG_,"Play Again") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.reset_game_BANG_,"Play Again"));var G__10189 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$37,tailrecursion.hoplon.app_pages._basic_DOT_html.over,G__10190,G__10191) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$37,tailrecursion.hoplon.app_pages._basic_DOT_html.over,G__10190,G__10191));return G__10189;
})(),(function (){var G__10194 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$45,"https://github.com/tailrecursion/hoplon-demos/blob/master/tictactoe/src/basic.cljs.hl","Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$45,"https://github.com/tailrecursion/hoplon-demos/blob/master/tictactoe/src/basic.cljs.hl","Source Code"));return G__10194;
})()))) : tailrecursion.hoplon.html.call(null,(tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$44,"text/css",cljs.core.constant$keyword$45,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$44,"text/css",cljs.core.constant$keyword$45,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Tic Tac Toe") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Tic Tac Toe")),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$45,"screen.css") : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$45,"screen.css"))], null);
})()) : tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$44,"text/css",cljs.core.constant$keyword$45,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$44,"text/css",cljs.core.constant$keyword$45,(window["_hoplon_main_css"]))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Tic Tac Toe") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Tic Tac Toe")),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$45,"screen.css") : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$43,"stylesheet",cljs.core.constant$keyword$45,"screen.css"))], null);
})())),(tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__10170 = (tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"tictac",tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift((function (G__10171,G__10172){return (G__10171.cljs$core$IFn$_invoke$arity$1 ? G__10171.cljs$core$IFn$_invoke$arity$1(G__10172) : G__10171.call(null,G__10172));
})).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,tailrecursion.hoplon.app_pages._basic_DOT_html.rows),null,(function (item__8860__auto__){var vec__10173 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift((function (G__10175){var vec__10174 = G__10175;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null);
})).call(null,item__8860__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,1,null);return (tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)) : tailrecursion.hoplon.tr.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)));
}))) : tailrecursion.hoplon.table.call(null,cljs.core.constant$keyword$25,"tictac",tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift((function (G__10171,G__10172){return (G__10171.cljs$core$IFn$_invoke$arity$1 ? G__10171.cljs$core$IFn$_invoke$arity$1(G__10172) : G__10171.call(null,G__10172));
})).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,tailrecursion.hoplon.app_pages._basic_DOT_html.rows),null,(function (item__8860__auto__){var vec__10173 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift((function (G__10175){var vec__10174 = G__10175;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null);
})).call(null,item__8860__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,1,null);return (tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)) : tailrecursion.hoplon.tr.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)));
}))));return G__10170;
})(),(function (){var G__10184 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.undo_BANG_,"Undo") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.undo_BANG_,"Undo"));var G__10183 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__10184){
return (function (G__10187,G__10188,G__10186,G__10185){return ((G__10185.cljs$core$IFn$_invoke$arity$1 ? G__10185.cljs$core$IFn$_invoke$arity$1(G__10186) : G__10185.call(null,G__10186))) && ((G__10187.cljs$core$IFn$_invoke$arity$1 ? G__10187.cljs$core$IFn$_invoke$arity$1(G__10188) : G__10187.call(null,G__10188)));
});})(G__10184))
).call(null,cljs.core.seq,tailrecursion.hoplon.app_pages._basic_DOT_html.undos,tailrecursion.hoplon.app_pages._basic_DOT_html.over,cljs.core.not),G__10184) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__10184){
return (function (G__10187,G__10188,G__10186,G__10185){return ((G__10185.cljs$core$IFn$_invoke$arity$1 ? G__10185.cljs$core$IFn$_invoke$arity$1(G__10186) : G__10185.call(null,G__10186))) && ((G__10187.cljs$core$IFn$_invoke$arity$1 ? G__10187.cljs$core$IFn$_invoke$arity$1(G__10188) : G__10187.call(null,G__10188)));
});})(G__10184))
).call(null,cljs.core.seq,tailrecursion.hoplon.app_pages._basic_DOT_html.undos,tailrecursion.hoplon.app_pages._basic_DOT_html.over,cljs.core.not),G__10184));return G__10183;
})(),(function (){var G__10190 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__){
return (function (G__10192,G__10193){return G__10192.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10193));
});})(t__8874__auto__))
).call(null,t__8874__auto__,tailrecursion.hoplon.app_pages._basic_DOT_html.over);
return t__8874__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__){
return (function (G__10192,G__10193){return G__10192.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10193));
});})(t__8874__auto__))
).call(null,t__8874__auto__,tailrecursion.hoplon.app_pages._basic_DOT_html.over);
return t__8874__auto__;
})()));var G__10191 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.reset_game_BANG_,"Play Again") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.reset_game_BANG_,"Play Again"));var G__10189 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$37,tailrecursion.hoplon.app_pages._basic_DOT_html.over,G__10190,G__10191) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$37,tailrecursion.hoplon.app_pages._basic_DOT_html.over,G__10190,G__10191));return G__10189;
})(),(function (){var G__10194 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$45,"https://github.com/tailrecursion/hoplon-demos/blob/master/tictactoe/src/basic.cljs.hl","Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$45,"https://github.com/tailrecursion/hoplon-demos/blob/master/tictactoe/src/basic.cljs.hl","Source Code"));return G__10194;
})()) : tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var G__10170 = (tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.table.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$25,"tictac",tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift((function (G__10171,G__10172){return (G__10171.cljs$core$IFn$_invoke$arity$1 ? G__10171.cljs$core$IFn$_invoke$arity$1(G__10172) : G__10171.call(null,G__10172));
})).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,tailrecursion.hoplon.app_pages._basic_DOT_html.rows),null,(function (item__8860__auto__){var vec__10173 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift((function (G__10175){var vec__10174 = G__10175;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null);
})).call(null,item__8860__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,1,null);return (tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)) : tailrecursion.hoplon.tr.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)));
}))) : tailrecursion.hoplon.table.call(null,cljs.core.constant$keyword$25,"tictac",tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift((function (G__10171,G__10172){return (G__10171.cljs$core$IFn$_invoke$arity$1 ? G__10171.cljs$core$IFn$_invoke$arity$1(G__10172) : G__10171.call(null,G__10172));
})).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,tailrecursion.hoplon.app_pages._basic_DOT_html.rows),null,(function (item__8860__auto__){var vec__10173 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift((function (G__10175){var vec__10174 = G__10175;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10174,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,row], null);
})).call(null,item__8860__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,0,null);var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10173,1,null);return (tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.tr.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)) : tailrecursion.hoplon.tr.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10176,G__10177){return (G__10176.cljs$core$IFn$_invoke$arity$1 ? G__10176.cljs$core$IFn$_invoke$arity$1(G__10177) : G__10176.call(null,G__10177));
});})(vec__10173,i,row))
).call(null,tailrecursion.hoplon.app_pages._basic_DOT_html.indexed,row),null,((function (vec__10173,i,row){
return (function (item__8860__auto____$1){var vec__10178 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__10173,i,row){
return (function (G__10180){var vec__10179 = G__10180;var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,x], null);
});})(vec__10173,i,row))
).call(null,item__8860__auto____$1));var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,0,null);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,1,null);return (tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.td.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()) : tailrecursion.hoplon.td.call(null,cljs.core.constant$keyword$41,((function (vec__10178,j,x,vec__10173,i,row){
return (function (){var and__7798__auto__ = tailrecursion.hoplon.app_pages._basic_DOT_html.play_BANG_(cljs.core.deref(i),cljs.core.deref(j));if(cljs.core.truth_(and__7798__auto__))
{return tailrecursion.hoplon.app_pages._basic_DOT_html.ai_BANG_();
} else
{return and__7798__auto__;
}
});})(vec__10178,j,x,vec__10173,i,row))
,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__,vec__10178,j,x,vec__10173,i,row){
return (function (G__10182,G__10181){return G__10181.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10182));
});})(t__8874__auto__,vec__10178,j,x,vec__10173,i,row))
).call(null,x,t__8874__auto__);
return t__8874__auto__;
})()));
});})(vec__10173,i,row))
)));
}))));return G__10170;
})(),(function (){var G__10184 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.undo_BANG_,"Undo") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.undo_BANG_,"Undo"));var G__10183 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__10184){
return (function (G__10187,G__10188,G__10186,G__10185){return ((G__10185.cljs$core$IFn$_invoke$arity$1 ? G__10185.cljs$core$IFn$_invoke$arity$1(G__10186) : G__10185.call(null,G__10186))) && ((G__10187.cljs$core$IFn$_invoke$arity$1 ? G__10187.cljs$core$IFn$_invoke$arity$1(G__10188) : G__10187.call(null,G__10188)));
});})(G__10184))
).call(null,cljs.core.seq,tailrecursion.hoplon.app_pages._basic_DOT_html.undos,tailrecursion.hoplon.app_pages._basic_DOT_html.over,cljs.core.not),G__10184) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__10184){
return (function (G__10187,G__10188,G__10186,G__10185){return ((G__10185.cljs$core$IFn$_invoke$arity$1 ? G__10185.cljs$core$IFn$_invoke$arity$1(G__10186) : G__10185.call(null,G__10186))) && ((G__10187.cljs$core$IFn$_invoke$arity$1 ? G__10187.cljs$core$IFn$_invoke$arity$1(G__10188) : G__10187.call(null,G__10188)));
});})(G__10184))
).call(null,cljs.core.seq,tailrecursion.hoplon.app_pages._basic_DOT_html.undos,tailrecursion.hoplon.app_pages._basic_DOT_html.over,cljs.core.not),G__10184));return G__10183;
})(),(function (){var G__10190 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1((function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__){
return (function (G__10192,G__10193){return G__10192.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10193));
});})(t__8874__auto__))
).call(null,t__8874__auto__,tailrecursion.hoplon.app_pages._basic_DOT_html.over);
return t__8874__auto__;
})()) : tailrecursion.hoplon.p.call(null,(function (){var t__8874__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8874__auto__){
return (function (G__10192,G__10193){return G__10192.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10193));
});})(t__8874__auto__))
).call(null,t__8874__auto__,tailrecursion.hoplon.app_pages._basic_DOT_html.over);
return t__8874__auto__;
})()));var G__10191 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.reset_game_BANG_,"Play Again") : tailrecursion.hoplon.button.call(null,cljs.core.constant$keyword$41,tailrecursion.hoplon.app_pages._basic_DOT_html.reset_game_BANG_,"Play Again"));var G__10189 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$37,tailrecursion.hoplon.app_pages._basic_DOT_html.over,G__10190,G__10191) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$37,tailrecursion.hoplon.app_pages._basic_DOT_html.over,G__10190,G__10191));return G__10189;
})(),(function (){var G__10194 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$45,"https://github.com/tailrecursion/hoplon-demos/blob/master/tictactoe/src/basic.cljs.hl","Source Code") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$45,"https://github.com/tailrecursion/hoplon-demos/blob/master/tictactoe/src/basic.cljs.hl","Source Code"));return G__10194;
})()))));
return tailrecursion.hoplon.init();
});
goog.exportSymbol('tailrecursion.hoplon.app_pages._basic_DOT_html.hoploninit', tailrecursion.hoplon.app_pages._basic_DOT_html.hoploninit);
