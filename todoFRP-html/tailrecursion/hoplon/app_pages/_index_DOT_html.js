// Compiled by ClojureScript 0.0-2227
goog.provide('tailrecursion.hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon.reload');
goog.require('tailrecursion.hoplon.util');
goog.require('tailrecursion.hoplon.storage_atom');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon.storage_atom');
goog.require('tailrecursion.hoplon.util');
goog.require('tailrecursion.hoplon.reload');
tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit = (function hoploninit(){tailrecursion.hoplon.reload.reload_all();
tailrecursion.hoplon.app_pages._index_DOT_html.mapvi = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.map_indexed);
tailrecursion.hoplon.app_pages._index_DOT_html.dissocv = (function dissocv(v,i){var z = ((cljs.core.count(v) - 1) - i);if((z < 0))
{return v;
} else
{if((z === 0))
{return cljs.core.pop(v);
} else
{if((z > 0))
{return cljs.core.into(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,0,i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(i + 1)));
} else
{return null;
}
}
}
});
tailrecursion.hoplon.app_pages._index_DOT_html.decorate = (function decorate(todo,route,editing,i){var map__9512 = todo;var map__9512__$1 = ((cljs.core.seq_QMARK_(map__9512))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9512):map__9512);var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9512__$1,cljs.core.constant$keyword$45);var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9512__$1,cljs.core.constant$keyword$33);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(todo,cljs.core.constant$keyword$46,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing,i),cljs.core.array_seq([cljs.core.constant$keyword$47,(function (){var and__7257__auto__ = !(cljs.core.empty_QMARK_(text));if(and__7257__auto__)
{var or__7269__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#/",route);if(or__7269__auto__)
{return or__7269__auto__;
} else
{var or__7269__auto____$1 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#/active",route)) && (cljs.core.not(done_QMARK_));if(or__7269__auto____$1)
{return or__7269__auto____$1;
} else
{var and__7257__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#/completed",route);if(and__7257__auto____$1)
{return done_QMARK_;
} else
{return and__7257__auto____$1;
}
}
}
} else
{return and__7257__auto__;
}
})()], 0));
});
tailrecursion.hoplon.app_pages._index_DOT_html.state = tailrecursion.hoplon.storage_atom.local_storage(tailrecursion.javelin.cell(cljs.core.PersistentVector.EMPTY),cljs.core.constant$keyword$48);
tailrecursion.hoplon.app_pages._index_DOT_html.loaded_QMARK_ = tailrecursion.javelin.cell(false);
tailrecursion.hoplon.app_pages._index_DOT_html.editing = tailrecursion.javelin.cell(null);
tailrecursion.hoplon.app_pages._index_DOT_html.route = tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$1("#/");
tailrecursion.hoplon.app_pages._index_DOT_html.completed = tailrecursion.javelin.lift((function (G__9514,G__9513){return (G__9513.cljs$core$IFn$_invoke$arity$2 ? G__9513.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$45,G__9514) : G__9513.call(null,cljs.core.constant$keyword$45,G__9514));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.state,cljs.core.filter);
tailrecursion.hoplon.app_pages._index_DOT_html.active = tailrecursion.javelin.lift((function (G__9516,G__9515){return (G__9515.cljs$core$IFn$_invoke$arity$2 ? G__9515.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$45,G__9516) : G__9515.call(null,cljs.core.constant$keyword$45,G__9516));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.state,cljs.core.remove);
tailrecursion.hoplon.app_pages._index_DOT_html.plural_item = tailrecursion.javelin.lift((function (G__9518,G__9519,G__9517){return (G__9517.cljs$core$IFn$_invoke$arity$2 ? G__9517.cljs$core$IFn$_invoke$arity$2("item",(G__9518.cljs$core$IFn$_invoke$arity$1 ? G__9518.cljs$core$IFn$_invoke$arity$1(G__9519) : G__9518.call(null,G__9519))) : G__9517.call(null,"item",(G__9518.cljs$core$IFn$_invoke$arity$1 ? G__9518.cljs$core$IFn$_invoke$arity$1(G__9519) : G__9518.call(null,G__9519))));
})).call(null,cljs.core.count,tailrecursion.hoplon.app_pages._index_DOT_html.active,tailrecursion.hoplon.util.pluralize);
tailrecursion.hoplon.app_pages._index_DOT_html.todos = tailrecursion.javelin.lift((function (G__9523,G__9524,G__9525,G__9522,G__9520,G__9521){return (G__9520.cljs$core$IFn$_invoke$arity$2 ? G__9520.cljs$core$IFn$_invoke$arity$2((function (p1__5373_SHARP_,p2__5374_SHARP_){return cljs.core._conj(cljs.core._conj(G__9521,(G__9522.cljs$core$IFn$_invoke$arity$4 ? G__9522.cljs$core$IFn$_invoke$arity$4(p2__5374_SHARP_,G__9523,G__9524,p1__5373_SHARP_) : G__9522.call(null,p2__5374_SHARP_,G__9523,G__9524,p1__5373_SHARP_))),p1__5373_SHARP_);
}),G__9525) : G__9520.call(null,(function (p1__5373_SHARP_,p2__5374_SHARP_){return cljs.core._conj(cljs.core._conj(G__9521,(G__9522.cljs$core$IFn$_invoke$arity$4 ? G__9522.cljs$core$IFn$_invoke$arity$4(p2__5374_SHARP_,G__9523,G__9524,p1__5373_SHARP_) : G__9522.call(null,p2__5374_SHARP_,G__9523,G__9524,p1__5373_SHARP_))),p1__5373_SHARP_);
}),G__9525));
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,tailrecursion.hoplon.app_pages._index_DOT_html.editing,tailrecursion.hoplon.app_pages._index_DOT_html.state,tailrecursion.hoplon.app_pages._index_DOT_html.decorate,tailrecursion.hoplon.app_pages._index_DOT_html.mapvi,cljs.core.List.EMPTY);
tailrecursion.hoplon.app_pages._index_DOT_html.todo = (function todo(t){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,false,cljs.core.constant$keyword$33,t], null);
});
tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_ = (function destroy_BANG_(i){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.state,tailrecursion.hoplon.app_pages._index_DOT_html.dissocv,i);
});
tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_ = (function done_BANG_(i,v){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tailrecursion.hoplon.app_pages._index_DOT_html.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.constant$keyword$45], null),v);
});
/**
* @param {...*} var_args
*/
tailrecursion.hoplon.app_pages._index_DOT_html.clear_done_BANG_ = (function() { 
var clear_done_BANG___delegate = function (_){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.state,(function (p1__5375_SHARP_){return cljs.core.vec(cljs.core.remove(cljs.core.constant$keyword$45,p1__5375_SHARP_));
}));
};
var clear_done_BANG_ = function (var_args){
var _ = null;if (arguments.length > 0) {
  _ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return clear_done_BANG___delegate.call(this,_);};
clear_done_BANG_.cljs$lang$maxFixedArity = 0;
clear_done_BANG_.cljs$lang$applyTo = (function (arglist__9590){
var _ = cljs.core.seq(arglist__9590);
return clear_done_BANG___delegate(_);
});
clear_done_BANG_.cljs$core$IFn$_invoke$arity$variadic = clear_done_BANG___delegate;
return clear_done_BANG_;
})()
;
tailrecursion.hoplon.app_pages._index_DOT_html.new_BANG_ = (function new_BANG_(t){if(!(cljs.core.empty_QMARK_(t)))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.state,cljs.core.conj,tailrecursion.hoplon.app_pages._index_DOT_html.todo(t));
} else
{return null;
}
});
tailrecursion.hoplon.app_pages._index_DOT_html.all_done_BANG_ = (function all_done_BANG_(v){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.state,(function (p1__5376_SHARP_){return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,cljs.core.constant$keyword$45,v);
}),p1__5376_SHARP_);
}));
});
tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_ = (function editing_BANG_(i,v){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.editing,(cljs.core.truth_(v)?i:null));
});
tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_ = (function text_BANG_(i,v){if(cljs.core.empty_QMARK_(v))
{return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(i);
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tailrecursion.hoplon.app_pages._index_DOT_html.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.constant$keyword$33], null),v);
}
});
(tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,"en"], null),(tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$51,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$51,(window["_hoplon_main_css"]))),(meta.cljs$core$IFn$_invoke$arity$1 ? meta.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,"utf8"], null)) : meta.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,"utf8"], null))),(meta.cljs$core$IFn$_invoke$arity$1 ? meta.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$53,"X-UA-Compatible",cljs.core.constant$keyword$54,"IE=edge,chrome=1"], null)) : meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$53,"X-UA-Compatible",cljs.core.constant$keyword$54,"IE=edge,chrome=1"], null))),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$51,"base.css"], null)) : tailrecursion.hoplon.link.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$51,"base.css"], null))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 TodoMVC") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 TodoMVC"))], null);
})()) : tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$51,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$51,(window["_hoplon_main_css"]))),(meta.cljs$core$IFn$_invoke$arity$1 ? meta.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,"utf8"], null)) : meta.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,"utf8"], null))),(meta.cljs$core$IFn$_invoke$arity$1 ? meta.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$53,"X-UA-Compatible",cljs.core.constant$keyword$54,"IE=edge,chrome=1"], null)) : meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$53,"X-UA-Compatible",cljs.core.constant$keyword$54,"IE=edge,chrome=1"], null))),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$51,"base.css"], null)) : tailrecursion.hoplon.link.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$51,"base.css"], null))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 TodoMVC") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 TodoMVC"))], null);
})())),(tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9528 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Javascript is required to view this page.") : tailrecursion.hoplon.p.call(null,"Javascript is required to view this page."));var G__9527 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"noscript"], null),G__9528) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"noscript"], null),G__9528));var G__9526 = (tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1(G__9527) : tailrecursion.hoplon.noscript.call(null,G__9527));return G__9526;
})(),(function (){var G__9532 = (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1("todos") : tailrecursion.hoplon.h1.call(null,"todos"));var G__9534 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$55,"new-todo",cljs.core.constant$keyword$56,tailrecursion.hoplon.app_pages._index_DOT_html.loaded_QMARK_,cljs.core.constant$keyword$57,"autofocus",cljs.core.constant$keyword$58,"What needs to be done?",cljs.core.constant$keyword$59,((function (G__9532){
return (function (){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$55,"new-todo",cljs.core.constant$keyword$56,tailrecursion.hoplon.app_pages._index_DOT_html.loaded_QMARK_,cljs.core.constant$keyword$57,"autofocus",cljs.core.constant$keyword$58,"What needs to be done?",cljs.core.constant$keyword$59,((function (G__9532){
return (function (){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532))
], null)));var G__9533 = (tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (G__9532,G__9534){
return (function (){tailrecursion.hoplon.app_pages._index_DOT_html.new_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$60));
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532,G__9534))
], null),G__9534) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (G__9532,G__9534){
return (function (){tailrecursion.hoplon.app_pages._index_DOT_html.new_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$60));
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532,G__9534))
], null),G__9534));var G__9531 = (tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"header"], null),G__9532,G__9533) : tailrecursion.hoplon.header.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"header"], null),G__9532,G__9533));var G__9536 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$55,"toggle-all",cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531){
return (function (G__9555,G__9556){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,(G__9555.cljs$core$IFn$_invoke$arity$1 ? G__9555.cljs$core$IFn$_invoke$arity$1(G__9556) : G__9555.call(null,G__9556))], null);
});})(G__9532,G__9534,G__9533,G__9531))
).call(null,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active),cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.all_done_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$67));
});})(G__9532,G__9534,G__9533,G__9531))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$55,"toggle-all",cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531){
return (function (G__9555,G__9556){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,(G__9555.cljs$core$IFn$_invoke$arity$1 ? G__9555.cljs$core$IFn$_invoke$arity$1(G__9556) : G__9555.call(null,G__9556))], null);
});})(G__9532,G__9534,G__9533,G__9531))
).call(null,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active),cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.all_done_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$67));
});})(G__9532,G__9534,G__9533,G__9531))
], null)));var G__9537 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,"toggle-all"], null),"Mark all as complete") : tailrecursion.hoplon.label.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,"toggle-all"], null),"Mark all as complete"));var G__9538 = (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-list"], null),tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.todos,true,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (item__8319__auto__){var hl_auto_9557 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var hl_auto_9558 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var vec__9559 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9562){var vec__9560 = G__9562;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,0,null);var map__9561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,1,null);var map__9561__$1 = ((cljs.core.seq_QMARK_(map__9561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9561):map__9561);var edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$46);var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$45);var todo_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$33);var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$47);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_], null);
});})(hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,item__8319__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,0,null);var edit_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,1,null);var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,2,null);var todo_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,3,null);var show_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,4,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))) : tailrecursion.hoplon.li.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
)) : tailrecursion.hoplon.ul.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-list"], null),tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.todos,true,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (item__8319__auto__){var hl_auto_9557 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var hl_auto_9558 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var vec__9559 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9562){var vec__9560 = G__9562;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,0,null);var map__9561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,1,null);var map__9561__$1 = ((cljs.core.seq_QMARK_(map__9561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9561):map__9561);var edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$46);var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$45);var todo_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$33);var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$47);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_], null);
});})(hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,item__8319__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,0,null);var edit_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,1,null);var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,2,null);var todo_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,3,null);var show_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,4,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))) : tailrecursion.hoplon.li.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
)));var G__9535 = (tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"main",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538){
return (function (G__9571,G__9569,G__9570,G__9568){return (G__9568.cljs$core$IFn$_invoke$arity$1 ? G__9568.cljs$core$IFn$_invoke$arity$1(((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))) : G__9568.call(null,((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9536,G__9537,G__9538) : tailrecursion.hoplon.section.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"main",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538){
return (function (G__9571,G__9569,G__9570,G__9568){return (G__9568.cljs$core$IFn$_invoke$arity$1 ? G__9568.cljs$core$IFn$_invoke$arity$1(((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))) : G__9568.call(null,((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9536,G__9537,G__9538));var G__9541 = (tailrecursion.hoplon.strong.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.strong.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535){
return (function (G__9573,G__9574,G__9572){return G__9572.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9573.cljs$core$IFn$_invoke$arity$1 ? G__9573.cljs$core$IFn$_invoke$arity$1(G__9574) : G__9573.call(null,G__9574)))+" ");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535))
).call(null,cljs.core.count,tailrecursion.hoplon.app_pages._index_DOT_html.active,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.strong.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535){
return (function (G__9573,G__9574,G__9572){return G__9572.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9573.cljs$core$IFn$_invoke$arity$1 ? G__9573.cljs$core$IFn$_invoke$arity$1(G__9574) : G__9573.call(null,G__9574)))+" ");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535))
).call(null,cljs.core.count,tailrecursion.hoplon.app_pages._index_DOT_html.active,t__8333__auto__);
return t__8333__auto__;
})()));var G__9542 = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541){
return (function (G__9576,G__9575){return G__9575.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9576)+" left");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.plural_item,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.span.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541){
return (function (G__9576,G__9575){return G__9575.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9576)+" left");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.plural_item,t__8333__auto__);
return t__8333__auto__;
})()));var G__9540 = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-count"], null),G__9541,G__9542) : tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-count"], null),G__9541,G__9542));var G__9545 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540){
return (function (G__9578,G__9577){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9577.cljs$core$IFn$_invoke$arity$2 ? G__9577.cljs$core$IFn$_invoke$arity$2("#/",G__9578) : G__9577.call(null,"#/",G__9578))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"All") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540){
return (function (G__9578,G__9577){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9577.cljs$core$IFn$_invoke$arity$2 ? G__9577.cljs$core$IFn$_invoke$arity$2("#/",G__9578) : G__9577.call(null,"#/",G__9578))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"All"));var G__9544 = (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__9545) : tailrecursion.hoplon.li.call(null,G__9545));var G__9547 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/active",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544){
return (function (G__9580,G__9579){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9579.cljs$core$IFn$_invoke$arity$2 ? G__9579.cljs$core$IFn$_invoke$arity$2("#/active",G__9580) : G__9579.call(null,"#/active",G__9580))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Active") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/active",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544){
return (function (G__9580,G__9579){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9579.cljs$core$IFn$_invoke$arity$2 ? G__9579.cljs$core$IFn$_invoke$arity$2("#/active",G__9580) : G__9579.call(null,"#/active",G__9580))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Active"));var G__9546 = (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__9547) : tailrecursion.hoplon.li.call(null,G__9547));var G__9549 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/completed",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546){
return (function (G__9582,G__9581){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9581.cljs$core$IFn$_invoke$arity$2 ? G__9581.cljs$core$IFn$_invoke$arity$2("#/completed",G__9582) : G__9581.call(null,"#/completed",G__9582))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Completed") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/completed",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546){
return (function (G__9582,G__9581){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9581.cljs$core$IFn$_invoke$arity$2 ? G__9581.cljs$core$IFn$_invoke$arity$2("#/completed",G__9582) : G__9581.call(null,"#/completed",G__9582))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Completed"));var G__9548 = (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__9549) : tailrecursion.hoplon.li.call(null,G__9549));var G__9543 = (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"filters"], null),G__9544,G__9546,G__9548) : tailrecursion.hoplon.ul.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"filters"], null),G__9544,G__9546,G__9548));var G__9550 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$55,"clear-completed",cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.clear_done_BANG_();
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
], null),(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (G__9585,G__9584,G__9583){return G__9583.nodeValue = ("Clear completed ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9584.cljs$core$IFn$_invoke$arity$1 ? G__9584.cljs$core$IFn$_invoke$arity$1(G__9585) : G__9584.call(null,G__9585)))+")");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.count,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$55,"clear-completed",cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.clear_done_BANG_();
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
], null),(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (G__9585,G__9584,G__9583){return G__9583.nodeValue = ("Clear completed ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9584.cljs$core$IFn$_invoke$arity$1 ? G__9584.cljs$core$IFn$_invoke$arity$1(G__9585) : G__9584.call(null,G__9585)))+")");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.count,t__8333__auto__);
return t__8333__auto__;
})()));var G__9539 = (tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"footer",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550){
return (function (G__9589,G__9587,G__9588,G__9586){return (G__9586.cljs$core$IFn$_invoke$arity$1 ? G__9586.cljs$core$IFn$_invoke$arity$1(((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))) : G__9586.call(null,((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9540,G__9543,G__9550) : tailrecursion.hoplon.footer.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"footer",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550){
return (function (G__9589,G__9587,G__9588,G__9586){return (G__9586.cljs$core$IFn$_invoke$arity$1 ? G__9586.cljs$core$IFn$_invoke$arity$1(((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))) : G__9586.call(null,((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9540,G__9543,G__9550));var G__9530 = (tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todoapp"], null),G__9531,G__9535,G__9539) : tailrecursion.hoplon.section.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todoapp"], null),G__9531,G__9535,G__9539));var G__9552 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Double-click to edit a todo") : tailrecursion.hoplon.p.call(null,"Double-click to edit a todo"));var G__9554 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"http://github.com/tailrecursion/hoplon-demos/"], null),"hoplon-demos") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"http://github.com/tailrecursion/hoplon-demos/"], null),"hoplon-demos"));var G__9553 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2("Part of ",G__9554) : tailrecursion.hoplon.p.call(null,"Part of ",G__9554));var G__9551 = (tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"info"], null),G__9552,G__9553) : tailrecursion.hoplon.footer.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"info"], null),G__9552,G__9553));var G__9529 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__9530,G__9551) : tailrecursion.hoplon.div.call(null,G__9530,G__9551));return G__9529;
})()) : tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9528 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Javascript is required to view this page.") : tailrecursion.hoplon.p.call(null,"Javascript is required to view this page."));var G__9527 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"noscript"], null),G__9528) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"noscript"], null),G__9528));var G__9526 = (tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1(G__9527) : tailrecursion.hoplon.noscript.call(null,G__9527));return G__9526;
})(),(function (){var G__9532 = (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1("todos") : tailrecursion.hoplon.h1.call(null,"todos"));var G__9534 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$55,"new-todo",cljs.core.constant$keyword$56,tailrecursion.hoplon.app_pages._index_DOT_html.loaded_QMARK_,cljs.core.constant$keyword$57,"autofocus",cljs.core.constant$keyword$58,"What needs to be done?",cljs.core.constant$keyword$59,((function (G__9532){
return (function (){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$55,"new-todo",cljs.core.constant$keyword$56,tailrecursion.hoplon.app_pages._index_DOT_html.loaded_QMARK_,cljs.core.constant$keyword$57,"autofocus",cljs.core.constant$keyword$58,"What needs to be done?",cljs.core.constant$keyword$59,((function (G__9532){
return (function (){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532))
], null)));var G__9533 = (tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (G__9532,G__9534){
return (function (){tailrecursion.hoplon.app_pages._index_DOT_html.new_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$60));
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532,G__9534))
], null),G__9534) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (G__9532,G__9534){
return (function (){tailrecursion.hoplon.app_pages._index_DOT_html.new_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$60));
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532,G__9534))
], null),G__9534));var G__9531 = (tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"header"], null),G__9532,G__9533) : tailrecursion.hoplon.header.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"header"], null),G__9532,G__9533));var G__9536 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$55,"toggle-all",cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531){
return (function (G__9555,G__9556){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,(G__9555.cljs$core$IFn$_invoke$arity$1 ? G__9555.cljs$core$IFn$_invoke$arity$1(G__9556) : G__9555.call(null,G__9556))], null);
});})(G__9532,G__9534,G__9533,G__9531))
).call(null,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active),cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.all_done_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$67));
});})(G__9532,G__9534,G__9533,G__9531))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$55,"toggle-all",cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531){
return (function (G__9555,G__9556){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,(G__9555.cljs$core$IFn$_invoke$arity$1 ? G__9555.cljs$core$IFn$_invoke$arity$1(G__9556) : G__9555.call(null,G__9556))], null);
});})(G__9532,G__9534,G__9533,G__9531))
).call(null,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active),cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.all_done_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$67));
});})(G__9532,G__9534,G__9533,G__9531))
], null)));var G__9537 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,"toggle-all"], null),"Mark all as complete") : tailrecursion.hoplon.label.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,"toggle-all"], null),"Mark all as complete"));var G__9538 = (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-list"], null),tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.todos,true,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (item__8319__auto__){var hl_auto_9557 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var hl_auto_9558 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var vec__9559 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9562){var vec__9560 = G__9562;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,0,null);var map__9561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,1,null);var map__9561__$1 = ((cljs.core.seq_QMARK_(map__9561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9561):map__9561);var edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$46);var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$45);var todo_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$33);var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$47);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_], null);
});})(hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,item__8319__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,0,null);var edit_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,1,null);var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,2,null);var todo_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,3,null);var show_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,4,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))) : tailrecursion.hoplon.li.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
)) : tailrecursion.hoplon.ul.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-list"], null),tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.todos,true,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (item__8319__auto__){var hl_auto_9557 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var hl_auto_9558 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var vec__9559 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9562){var vec__9560 = G__9562;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,0,null);var map__9561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,1,null);var map__9561__$1 = ((cljs.core.seq_QMARK_(map__9561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9561):map__9561);var edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$46);var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$45);var todo_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$33);var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$47);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_], null);
});})(hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,item__8319__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,0,null);var edit_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,1,null);var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,2,null);var todo_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,3,null);var show_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,4,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))) : tailrecursion.hoplon.li.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
)));var G__9535 = (tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"main",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538){
return (function (G__9571,G__9569,G__9570,G__9568){return (G__9568.cljs$core$IFn$_invoke$arity$1 ? G__9568.cljs$core$IFn$_invoke$arity$1(((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))) : G__9568.call(null,((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9536,G__9537,G__9538) : tailrecursion.hoplon.section.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"main",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538){
return (function (G__9571,G__9569,G__9570,G__9568){return (G__9568.cljs$core$IFn$_invoke$arity$1 ? G__9568.cljs$core$IFn$_invoke$arity$1(((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))) : G__9568.call(null,((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9536,G__9537,G__9538));var G__9541 = (tailrecursion.hoplon.strong.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.strong.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535){
return (function (G__9573,G__9574,G__9572){return G__9572.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9573.cljs$core$IFn$_invoke$arity$1 ? G__9573.cljs$core$IFn$_invoke$arity$1(G__9574) : G__9573.call(null,G__9574)))+" ");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535))
).call(null,cljs.core.count,tailrecursion.hoplon.app_pages._index_DOT_html.active,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.strong.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535){
return (function (G__9573,G__9574,G__9572){return G__9572.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9573.cljs$core$IFn$_invoke$arity$1 ? G__9573.cljs$core$IFn$_invoke$arity$1(G__9574) : G__9573.call(null,G__9574)))+" ");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535))
).call(null,cljs.core.count,tailrecursion.hoplon.app_pages._index_DOT_html.active,t__8333__auto__);
return t__8333__auto__;
})()));var G__9542 = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541){
return (function (G__9576,G__9575){return G__9575.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9576)+" left");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.plural_item,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.span.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541){
return (function (G__9576,G__9575){return G__9575.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9576)+" left");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.plural_item,t__8333__auto__);
return t__8333__auto__;
})()));var G__9540 = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-count"], null),G__9541,G__9542) : tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-count"], null),G__9541,G__9542));var G__9545 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540){
return (function (G__9578,G__9577){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9577.cljs$core$IFn$_invoke$arity$2 ? G__9577.cljs$core$IFn$_invoke$arity$2("#/",G__9578) : G__9577.call(null,"#/",G__9578))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"All") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540){
return (function (G__9578,G__9577){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9577.cljs$core$IFn$_invoke$arity$2 ? G__9577.cljs$core$IFn$_invoke$arity$2("#/",G__9578) : G__9577.call(null,"#/",G__9578))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"All"));var G__9544 = (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__9545) : tailrecursion.hoplon.li.call(null,G__9545));var G__9547 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/active",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544){
return (function (G__9580,G__9579){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9579.cljs$core$IFn$_invoke$arity$2 ? G__9579.cljs$core$IFn$_invoke$arity$2("#/active",G__9580) : G__9579.call(null,"#/active",G__9580))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Active") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/active",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544){
return (function (G__9580,G__9579){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9579.cljs$core$IFn$_invoke$arity$2 ? G__9579.cljs$core$IFn$_invoke$arity$2("#/active",G__9580) : G__9579.call(null,"#/active",G__9580))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Active"));var G__9546 = (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__9547) : tailrecursion.hoplon.li.call(null,G__9547));var G__9549 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/completed",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546){
return (function (G__9582,G__9581){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9581.cljs$core$IFn$_invoke$arity$2 ? G__9581.cljs$core$IFn$_invoke$arity$2("#/completed",G__9582) : G__9581.call(null,"#/completed",G__9582))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Completed") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/completed",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546){
return (function (G__9582,G__9581){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9581.cljs$core$IFn$_invoke$arity$2 ? G__9581.cljs$core$IFn$_invoke$arity$2("#/completed",G__9582) : G__9581.call(null,"#/completed",G__9582))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Completed"));var G__9548 = (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__9549) : tailrecursion.hoplon.li.call(null,G__9549));var G__9543 = (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"filters"], null),G__9544,G__9546,G__9548) : tailrecursion.hoplon.ul.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"filters"], null),G__9544,G__9546,G__9548));var G__9550 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$55,"clear-completed",cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.clear_done_BANG_();
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
], null),(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (G__9585,G__9584,G__9583){return G__9583.nodeValue = ("Clear completed ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9584.cljs$core$IFn$_invoke$arity$1 ? G__9584.cljs$core$IFn$_invoke$arity$1(G__9585) : G__9584.call(null,G__9585)))+")");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.count,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$55,"clear-completed",cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.clear_done_BANG_();
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
], null),(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (G__9585,G__9584,G__9583){return G__9583.nodeValue = ("Clear completed ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9584.cljs$core$IFn$_invoke$arity$1 ? G__9584.cljs$core$IFn$_invoke$arity$1(G__9585) : G__9584.call(null,G__9585)))+")");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.count,t__8333__auto__);
return t__8333__auto__;
})()));var G__9539 = (tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"footer",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550){
return (function (G__9589,G__9587,G__9588,G__9586){return (G__9586.cljs$core$IFn$_invoke$arity$1 ? G__9586.cljs$core$IFn$_invoke$arity$1(((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))) : G__9586.call(null,((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9540,G__9543,G__9550) : tailrecursion.hoplon.footer.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"footer",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550){
return (function (G__9589,G__9587,G__9588,G__9586){return (G__9586.cljs$core$IFn$_invoke$arity$1 ? G__9586.cljs$core$IFn$_invoke$arity$1(((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))) : G__9586.call(null,((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9540,G__9543,G__9550));var G__9530 = (tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todoapp"], null),G__9531,G__9535,G__9539) : tailrecursion.hoplon.section.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todoapp"], null),G__9531,G__9535,G__9539));var G__9552 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Double-click to edit a todo") : tailrecursion.hoplon.p.call(null,"Double-click to edit a todo"));var G__9554 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"http://github.com/tailrecursion/hoplon-demos/"], null),"hoplon-demos") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"http://github.com/tailrecursion/hoplon-demos/"], null),"hoplon-demos"));var G__9553 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2("Part of ",G__9554) : tailrecursion.hoplon.p.call(null,"Part of ",G__9554));var G__9551 = (tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"info"], null),G__9552,G__9553) : tailrecursion.hoplon.footer.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"info"], null),G__9552,G__9553));var G__9529 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__9530,G__9551) : tailrecursion.hoplon.div.call(null,G__9530,G__9551));return G__9529;
})()))) : tailrecursion.hoplon.html.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,"en"], null),(tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$51,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$51,(window["_hoplon_main_css"]))),(meta.cljs$core$IFn$_invoke$arity$1 ? meta.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,"utf8"], null)) : meta.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,"utf8"], null))),(meta.cljs$core$IFn$_invoke$arity$1 ? meta.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$53,"X-UA-Compatible",cljs.core.constant$keyword$54,"IE=edge,chrome=1"], null)) : meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$53,"X-UA-Compatible",cljs.core.constant$keyword$54,"IE=edge,chrome=1"], null))),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$51,"base.css"], null)) : tailrecursion.hoplon.link.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$51,"base.css"], null))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 TodoMVC") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 TodoMVC"))], null);
})()) : tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$51,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$39,"text/css",cljs.core.constant$keyword$51,(window["_hoplon_main_css"]))),(meta.cljs$core$IFn$_invoke$arity$1 ? meta.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,"utf8"], null)) : meta.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,"utf8"], null))),(meta.cljs$core$IFn$_invoke$arity$1 ? meta.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$53,"X-UA-Compatible",cljs.core.constant$keyword$54,"IE=edge,chrome=1"], null)) : meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$53,"X-UA-Compatible",cljs.core.constant$keyword$54,"IE=edge,chrome=1"], null))),(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$51,"base.css"], null)) : tailrecursion.hoplon.link.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$50,"stylesheet",cljs.core.constant$keyword$51,"base.css"], null))),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 TodoMVC") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 TodoMVC"))], null);
})())),(tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9528 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Javascript is required to view this page.") : tailrecursion.hoplon.p.call(null,"Javascript is required to view this page."));var G__9527 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"noscript"], null),G__9528) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"noscript"], null),G__9528));var G__9526 = (tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1(G__9527) : tailrecursion.hoplon.noscript.call(null,G__9527));return G__9526;
})(),(function (){var G__9532 = (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1("todos") : tailrecursion.hoplon.h1.call(null,"todos"));var G__9534 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$55,"new-todo",cljs.core.constant$keyword$56,tailrecursion.hoplon.app_pages._index_DOT_html.loaded_QMARK_,cljs.core.constant$keyword$57,"autofocus",cljs.core.constant$keyword$58,"What needs to be done?",cljs.core.constant$keyword$59,((function (G__9532){
return (function (){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$55,"new-todo",cljs.core.constant$keyword$56,tailrecursion.hoplon.app_pages._index_DOT_html.loaded_QMARK_,cljs.core.constant$keyword$57,"autofocus",cljs.core.constant$keyword$58,"What needs to be done?",cljs.core.constant$keyword$59,((function (G__9532){
return (function (){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532))
], null)));var G__9533 = (tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (G__9532,G__9534){
return (function (){tailrecursion.hoplon.app_pages._index_DOT_html.new_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$60));
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532,G__9534))
], null),G__9534) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (G__9532,G__9534){
return (function (){tailrecursion.hoplon.app_pages._index_DOT_html.new_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$60));
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532,G__9534))
], null),G__9534));var G__9531 = (tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"header"], null),G__9532,G__9533) : tailrecursion.hoplon.header.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"header"], null),G__9532,G__9533));var G__9536 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$55,"toggle-all",cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531){
return (function (G__9555,G__9556){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,(G__9555.cljs$core$IFn$_invoke$arity$1 ? G__9555.cljs$core$IFn$_invoke$arity$1(G__9556) : G__9555.call(null,G__9556))], null);
});})(G__9532,G__9534,G__9533,G__9531))
).call(null,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active),cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.all_done_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$67));
});})(G__9532,G__9534,G__9533,G__9531))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$55,"toggle-all",cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531){
return (function (G__9555,G__9556){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,(G__9555.cljs$core$IFn$_invoke$arity$1 ? G__9555.cljs$core$IFn$_invoke$arity$1(G__9556) : G__9555.call(null,G__9556))], null);
});})(G__9532,G__9534,G__9533,G__9531))
).call(null,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active),cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.all_done_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$67));
});})(G__9532,G__9534,G__9533,G__9531))
], null)));var G__9537 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,"toggle-all"], null),"Mark all as complete") : tailrecursion.hoplon.label.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,"toggle-all"], null),"Mark all as complete"));var G__9538 = (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-list"], null),tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.todos,true,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (item__8319__auto__){var hl_auto_9557 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var hl_auto_9558 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var vec__9559 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9562){var vec__9560 = G__9562;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,0,null);var map__9561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,1,null);var map__9561__$1 = ((cljs.core.seq_QMARK_(map__9561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9561):map__9561);var edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$46);var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$45);var todo_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$33);var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$47);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_], null);
});})(hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,item__8319__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,0,null);var edit_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,1,null);var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,2,null);var todo_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,3,null);var show_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,4,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))) : tailrecursion.hoplon.li.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
)) : tailrecursion.hoplon.ul.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-list"], null),tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.todos,true,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (item__8319__auto__){var hl_auto_9557 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var hl_auto_9558 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var vec__9559 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9562){var vec__9560 = G__9562;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,0,null);var map__9561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,1,null);var map__9561__$1 = ((cljs.core.seq_QMARK_(map__9561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9561):map__9561);var edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$46);var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$45);var todo_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$33);var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$47);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_], null);
});})(hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,item__8319__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,0,null);var edit_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,1,null);var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,2,null);var todo_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,3,null);var show_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,4,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))) : tailrecursion.hoplon.li.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
)));var G__9535 = (tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"main",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538){
return (function (G__9571,G__9569,G__9570,G__9568){return (G__9568.cljs$core$IFn$_invoke$arity$1 ? G__9568.cljs$core$IFn$_invoke$arity$1(((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))) : G__9568.call(null,((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9536,G__9537,G__9538) : tailrecursion.hoplon.section.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"main",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538){
return (function (G__9571,G__9569,G__9570,G__9568){return (G__9568.cljs$core$IFn$_invoke$arity$1 ? G__9568.cljs$core$IFn$_invoke$arity$1(((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))) : G__9568.call(null,((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9536,G__9537,G__9538));var G__9541 = (tailrecursion.hoplon.strong.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.strong.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535){
return (function (G__9573,G__9574,G__9572){return G__9572.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9573.cljs$core$IFn$_invoke$arity$1 ? G__9573.cljs$core$IFn$_invoke$arity$1(G__9574) : G__9573.call(null,G__9574)))+" ");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535))
).call(null,cljs.core.count,tailrecursion.hoplon.app_pages._index_DOT_html.active,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.strong.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535){
return (function (G__9573,G__9574,G__9572){return G__9572.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9573.cljs$core$IFn$_invoke$arity$1 ? G__9573.cljs$core$IFn$_invoke$arity$1(G__9574) : G__9573.call(null,G__9574)))+" ");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535))
).call(null,cljs.core.count,tailrecursion.hoplon.app_pages._index_DOT_html.active,t__8333__auto__);
return t__8333__auto__;
})()));var G__9542 = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541){
return (function (G__9576,G__9575){return G__9575.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9576)+" left");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.plural_item,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.span.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541){
return (function (G__9576,G__9575){return G__9575.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9576)+" left");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.plural_item,t__8333__auto__);
return t__8333__auto__;
})()));var G__9540 = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-count"], null),G__9541,G__9542) : tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-count"], null),G__9541,G__9542));var G__9545 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540){
return (function (G__9578,G__9577){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9577.cljs$core$IFn$_invoke$arity$2 ? G__9577.cljs$core$IFn$_invoke$arity$2("#/",G__9578) : G__9577.call(null,"#/",G__9578))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"All") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540){
return (function (G__9578,G__9577){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9577.cljs$core$IFn$_invoke$arity$2 ? G__9577.cljs$core$IFn$_invoke$arity$2("#/",G__9578) : G__9577.call(null,"#/",G__9578))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"All"));var G__9544 = (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__9545) : tailrecursion.hoplon.li.call(null,G__9545));var G__9547 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/active",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544){
return (function (G__9580,G__9579){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9579.cljs$core$IFn$_invoke$arity$2 ? G__9579.cljs$core$IFn$_invoke$arity$2("#/active",G__9580) : G__9579.call(null,"#/active",G__9580))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Active") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/active",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544){
return (function (G__9580,G__9579){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9579.cljs$core$IFn$_invoke$arity$2 ? G__9579.cljs$core$IFn$_invoke$arity$2("#/active",G__9580) : G__9579.call(null,"#/active",G__9580))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Active"));var G__9546 = (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__9547) : tailrecursion.hoplon.li.call(null,G__9547));var G__9549 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/completed",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546){
return (function (G__9582,G__9581){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9581.cljs$core$IFn$_invoke$arity$2 ? G__9581.cljs$core$IFn$_invoke$arity$2("#/completed",G__9582) : G__9581.call(null,"#/completed",G__9582))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Completed") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/completed",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546){
return (function (G__9582,G__9581){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9581.cljs$core$IFn$_invoke$arity$2 ? G__9581.cljs$core$IFn$_invoke$arity$2("#/completed",G__9582) : G__9581.call(null,"#/completed",G__9582))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Completed"));var G__9548 = (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__9549) : tailrecursion.hoplon.li.call(null,G__9549));var G__9543 = (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"filters"], null),G__9544,G__9546,G__9548) : tailrecursion.hoplon.ul.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"filters"], null),G__9544,G__9546,G__9548));var G__9550 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$55,"clear-completed",cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.clear_done_BANG_();
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
], null),(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (G__9585,G__9584,G__9583){return G__9583.nodeValue = ("Clear completed ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9584.cljs$core$IFn$_invoke$arity$1 ? G__9584.cljs$core$IFn$_invoke$arity$1(G__9585) : G__9584.call(null,G__9585)))+")");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.count,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$55,"clear-completed",cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.clear_done_BANG_();
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
], null),(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (G__9585,G__9584,G__9583){return G__9583.nodeValue = ("Clear completed ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9584.cljs$core$IFn$_invoke$arity$1 ? G__9584.cljs$core$IFn$_invoke$arity$1(G__9585) : G__9584.call(null,G__9585)))+")");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.count,t__8333__auto__);
return t__8333__auto__;
})()));var G__9539 = (tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"footer",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550){
return (function (G__9589,G__9587,G__9588,G__9586){return (G__9586.cljs$core$IFn$_invoke$arity$1 ? G__9586.cljs$core$IFn$_invoke$arity$1(((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))) : G__9586.call(null,((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9540,G__9543,G__9550) : tailrecursion.hoplon.footer.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"footer",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550){
return (function (G__9589,G__9587,G__9588,G__9586){return (G__9586.cljs$core$IFn$_invoke$arity$1 ? G__9586.cljs$core$IFn$_invoke$arity$1(((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))) : G__9586.call(null,((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9540,G__9543,G__9550));var G__9530 = (tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todoapp"], null),G__9531,G__9535,G__9539) : tailrecursion.hoplon.section.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todoapp"], null),G__9531,G__9535,G__9539));var G__9552 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Double-click to edit a todo") : tailrecursion.hoplon.p.call(null,"Double-click to edit a todo"));var G__9554 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"http://github.com/tailrecursion/hoplon-demos/"], null),"hoplon-demos") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"http://github.com/tailrecursion/hoplon-demos/"], null),"hoplon-demos"));var G__9553 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2("Part of ",G__9554) : tailrecursion.hoplon.p.call(null,"Part of ",G__9554));var G__9551 = (tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"info"], null),G__9552,G__9553) : tailrecursion.hoplon.footer.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"info"], null),G__9552,G__9553));var G__9529 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__9530,G__9551) : tailrecursion.hoplon.div.call(null,G__9530,G__9551));return G__9529;
})()) : tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9528 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Javascript is required to view this page.") : tailrecursion.hoplon.p.call(null,"Javascript is required to view this page."));var G__9527 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"noscript"], null),G__9528) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"noscript"], null),G__9528));var G__9526 = (tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.noscript.cljs$core$IFn$_invoke$arity$1(G__9527) : tailrecursion.hoplon.noscript.call(null,G__9527));return G__9526;
})(),(function (){var G__9532 = (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1("todos") : tailrecursion.hoplon.h1.call(null,"todos"));var G__9534 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$55,"new-todo",cljs.core.constant$keyword$56,tailrecursion.hoplon.app_pages._index_DOT_html.loaded_QMARK_,cljs.core.constant$keyword$57,"autofocus",cljs.core.constant$keyword$58,"What needs to be done?",cljs.core.constant$keyword$59,((function (G__9532){
return (function (){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$55,"new-todo",cljs.core.constant$keyword$56,tailrecursion.hoplon.app_pages._index_DOT_html.loaded_QMARK_,cljs.core.constant$keyword$57,"autofocus",cljs.core.constant$keyword$58,"What needs to be done?",cljs.core.constant$keyword$59,((function (G__9532){
return (function (){return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532))
], null)));var G__9533 = (tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (G__9532,G__9534){
return (function (){tailrecursion.hoplon.app_pages._index_DOT_html.new_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$60));
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532,G__9534))
], null),G__9534) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (G__9532,G__9534){
return (function (){tailrecursion.hoplon.app_pages._index_DOT_html.new_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$60));
return (tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.do_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null) : tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id(cljs.core.constant$keyword$60),cljs.core.constant$keyword$11,null));
});})(G__9532,G__9534))
], null),G__9534));var G__9531 = (tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.header.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"header"], null),G__9532,G__9533) : tailrecursion.hoplon.header.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"header"], null),G__9532,G__9533));var G__9536 = (tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$55,"toggle-all",cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531){
return (function (G__9555,G__9556){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,(G__9555.cljs$core$IFn$_invoke$arity$1 ? G__9555.cljs$core$IFn$_invoke$arity$1(G__9556) : G__9555.call(null,G__9556))], null);
});})(G__9532,G__9534,G__9533,G__9531))
).call(null,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active),cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.all_done_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$67));
});})(G__9532,G__9534,G__9533,G__9531))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$55,"toggle-all",cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531){
return (function (G__9555,G__9556){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,(G__9555.cljs$core$IFn$_invoke$arity$1 ? G__9555.cljs$core$IFn$_invoke$arity$1(G__9556) : G__9555.call(null,G__9556))], null);
});})(G__9532,G__9534,G__9533,G__9531))
).call(null,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active),cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.all_done_BANG_(tailrecursion.hoplon.val_id(cljs.core.constant$keyword$67));
});})(G__9532,G__9534,G__9533,G__9531))
], null)));var G__9537 = (tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,"toggle-all"], null),"Mark all as complete") : tailrecursion.hoplon.label.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$68,"toggle-all"], null),"Mark all as complete"));var G__9538 = (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-list"], null),tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.todos,true,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (item__8319__auto__){var hl_auto_9557 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var hl_auto_9558 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var vec__9559 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9562){var vec__9560 = G__9562;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,0,null);var map__9561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,1,null);var map__9561__$1 = ((cljs.core.seq_QMARK_(map__9561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9561):map__9561);var edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$46);var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$45);var todo_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$33);var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$47);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_], null);
});})(hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,item__8319__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,0,null);var edit_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,1,null);var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,2,null);var todo_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,3,null);var show_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,4,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))) : tailrecursion.hoplon.li.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
)) : tailrecursion.hoplon.ul.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-list"], null),tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.todos,true,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (item__8319__auto__){var hl_auto_9557 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var hl_auto_9558 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("hl-auto-")));var vec__9559 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9562){var vec__9560 = G__9562;var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,0,null);var map__9561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9560,1,null);var map__9561__$1 = ((cljs.core.seq_QMARK_(map__9561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9561):map__9561);var edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$46);var done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$45);var todo_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$33);var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9561__$1,cljs.core.constant$keyword$47);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_], null);
});})(hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,item__8319__auto__));var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,0,null);var edit_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,1,null);var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,2,null);var todo_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,3,null);var show_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9559,4,null);return (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))) : tailrecursion.hoplon.li.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9564,G__9563){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$45,G__9563,cljs.core.constant$keyword$46,G__9564], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,edit_QMARK_,done_QMARK_),cljs.core.constant$keyword$37,show_QMARK_], null),(tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,"view",cljs.core.constant$keyword$70,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),true);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$39,"checkbox",cljs.core.constant$keyword$25,"toggle",cljs.core.constant$keyword$55,hl_auto_9557,cljs.core.constant$keyword$64,tailrecursion.javelin.lift(((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9565){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,G__9565], null);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,done_QMARK_),cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.done_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9557));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))),(tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.label.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.label.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (G__9567,G__9566){return G__9566.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9567));
});})(t__8333__auto__,vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
).call(null,todo_text,t__8333__auto__);
return t__8333__auto__;
})())),(tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$25,"destroy",cljs.core.constant$keyword$65,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.destroy_BANG_(cljs.core.deref(i));
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null))))),(tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.form.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))) : tailrecursion.hoplon.form.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,"application/x-www-form-urlencoded",cljs.core.constant$keyword$62,"get",cljs.core.constant$keyword$63,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null),(tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.input.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)) : tailrecursion.hoplon.input.call(null,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$39,"text",cljs.core.constant$keyword$25,"edit",cljs.core.constant$keyword$55,hl_auto_9558,cljs.core.constant$keyword$71,todo_text,cljs.core.constant$keyword$56,edit_QMARK_,cljs.core.constant$keyword$59,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.editing_BANG_(cljs.core.deref(i),false);
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
,cljs.core.constant$keyword$72,((function (vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537){
return (function (){if(cljs.core.truth_(cljs.core.deref(edit_QMARK_)))
{return tailrecursion.hoplon.app_pages._index_DOT_html.text_BANG_(cljs.core.deref(i),tailrecursion.hoplon.val_id(hl_auto_9558));
} else
{return null;
}
});})(vec__9559,i,edit_QMARK_,done_QMARK_,todo_text,show_QMARK_,hl_auto_9557,hl_auto_9558,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
], null)))))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537))
)));var G__9535 = (tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"main",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538){
return (function (G__9571,G__9569,G__9570,G__9568){return (G__9568.cljs$core$IFn$_invoke$arity$1 ? G__9568.cljs$core$IFn$_invoke$arity$1(((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))) : G__9568.call(null,((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9536,G__9537,G__9538) : tailrecursion.hoplon.section.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"main",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538){
return (function (G__9571,G__9569,G__9570,G__9568){return (G__9568.cljs$core$IFn$_invoke$arity$1 ? G__9568.cljs$core$IFn$_invoke$arity$1(((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))) : G__9568.call(null,((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9570) : G__9569.call(null,G__9570))) && ((G__9569.cljs$core$IFn$_invoke$arity$1 ? G__9569.cljs$core$IFn$_invoke$arity$1(G__9571) : G__9569.call(null,G__9571)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9536,G__9537,G__9538));var G__9541 = (tailrecursion.hoplon.strong.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.strong.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535){
return (function (G__9573,G__9574,G__9572){return G__9572.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9573.cljs$core$IFn$_invoke$arity$1 ? G__9573.cljs$core$IFn$_invoke$arity$1(G__9574) : G__9573.call(null,G__9574)))+" ");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535))
).call(null,cljs.core.count,tailrecursion.hoplon.app_pages._index_DOT_html.active,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.strong.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535){
return (function (G__9573,G__9574,G__9572){return G__9572.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9573.cljs$core$IFn$_invoke$arity$1 ? G__9573.cljs$core$IFn$_invoke$arity$1(G__9574) : G__9573.call(null,G__9574)))+" ");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535))
).call(null,cljs.core.count,tailrecursion.hoplon.app_pages._index_DOT_html.active,t__8333__auto__);
return t__8333__auto__;
})()));var G__9542 = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$1((function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541){
return (function (G__9576,G__9575){return G__9575.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9576)+" left");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.plural_item,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.span.call(null,(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541){
return (function (G__9576,G__9575){return G__9575.nodeValue = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9576)+" left");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.plural_item,t__8333__auto__);
return t__8333__auto__;
})()));var G__9540 = (tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.span.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-count"], null),G__9541,G__9542) : tailrecursion.hoplon.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todo-count"], null),G__9541,G__9542));var G__9545 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540){
return (function (G__9578,G__9577){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9577.cljs$core$IFn$_invoke$arity$2 ? G__9577.cljs$core$IFn$_invoke$arity$2("#/",G__9578) : G__9577.call(null,"#/",G__9578))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"All") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540){
return (function (G__9578,G__9577){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9577.cljs$core$IFn$_invoke$arity$2 ? G__9577.cljs$core$IFn$_invoke$arity$2("#/",G__9578) : G__9577.call(null,"#/",G__9578))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"All"));var G__9544 = (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__9545) : tailrecursion.hoplon.li.call(null,G__9545));var G__9547 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/active",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544){
return (function (G__9580,G__9579){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9579.cljs$core$IFn$_invoke$arity$2 ? G__9579.cljs$core$IFn$_invoke$arity$2("#/active",G__9580) : G__9579.call(null,"#/active",G__9580))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Active") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/active",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544){
return (function (G__9580,G__9579){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9579.cljs$core$IFn$_invoke$arity$2 ? G__9579.cljs$core$IFn$_invoke$arity$2("#/active",G__9580) : G__9579.call(null,"#/active",G__9580))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Active"));var G__9546 = (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__9547) : tailrecursion.hoplon.li.call(null,G__9547));var G__9549 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/completed",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546){
return (function (G__9582,G__9581){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9581.cljs$core$IFn$_invoke$arity$2 ? G__9581.cljs$core$IFn$_invoke$arity$2("#/completed",G__9582) : G__9581.call(null,"#/completed",G__9582))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Completed") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"#/completed",cljs.core.constant$keyword$69,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546){
return (function (G__9582,G__9581){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$74,(G__9581.cljs$core$IFn$_invoke$arity$2 ? G__9581.cljs$core$IFn$_invoke$arity$2("#/completed",G__9582) : G__9581.call(null,"#/completed",G__9582))], null);
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.route,cljs.core._EQ_)], null),"Completed"));var G__9548 = (tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.li.cljs$core$IFn$_invoke$arity$1(G__9549) : tailrecursion.hoplon.li.call(null,G__9549));var G__9543 = (tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.ul.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"filters"], null),G__9544,G__9546,G__9548) : tailrecursion.hoplon.ul.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"filters"], null),G__9544,G__9546,G__9548));var G__9550 = (tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.button.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$55,"clear-completed",cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.clear_done_BANG_();
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
], null),(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (G__9585,G__9584,G__9583){return G__9583.nodeValue = ("Clear completed ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9584.cljs$core$IFn$_invoke$arity$1 ? G__9584.cljs$core$IFn$_invoke$arity$1(G__9585) : G__9584.call(null,G__9585)))+")");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.count,t__8333__auto__);
return t__8333__auto__;
})()) : tailrecursion.hoplon.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,"submit",cljs.core.constant$keyword$55,"clear-completed",cljs.core.constant$keyword$65,((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (){return tailrecursion.hoplon.app_pages._index_DOT_html.clear_done_BANG_();
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
], null),(function (){var t__8333__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543){
return (function (G__9585,G__9584,G__9583){return G__9583.nodeValue = ("Clear completed ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9584.cljs$core$IFn$_invoke$arity$1 ? G__9584.cljs$core$IFn$_invoke$arity$1(G__9585) : G__9584.call(null,G__9585)))+")");
});})(t__8333__auto__,G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.count,t__8333__auto__);
return t__8333__auto__;
})()));var G__9539 = (tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"footer",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550){
return (function (G__9589,G__9587,G__9588,G__9586){return (G__9586.cljs$core$IFn$_invoke$arity$1 ? G__9586.cljs$core$IFn$_invoke$arity$1(((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))) : G__9586.call(null,((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9540,G__9543,G__9550) : tailrecursion.hoplon.footer.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,"footer",cljs.core.constant$keyword$37,tailrecursion.javelin.lift(((function (G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550){
return (function (G__9589,G__9587,G__9588,G__9586){return (G__9586.cljs$core$IFn$_invoke$arity$1 ? G__9586.cljs$core$IFn$_invoke$arity$1(((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))) : G__9586.call(null,((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9588) : G__9587.call(null,G__9588))) && ((G__9587.cljs$core$IFn$_invoke$arity$1 ? G__9587.cljs$core$IFn$_invoke$arity$1(G__9589) : G__9587.call(null,G__9589)))));
});})(G__9532,G__9534,G__9533,G__9531,G__9536,G__9537,G__9538,G__9535,G__9541,G__9542,G__9540,G__9545,G__9544,G__9547,G__9546,G__9549,G__9548,G__9543,G__9550))
).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.completed,cljs.core.empty_QMARK_,tailrecursion.hoplon.app_pages._index_DOT_html.active,cljs.core.not)], null),G__9540,G__9543,G__9550));var G__9530 = (tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.section.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todoapp"], null),G__9531,G__9535,G__9539) : tailrecursion.hoplon.section.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"todoapp"], null),G__9531,G__9535,G__9539));var G__9552 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Double-click to edit a todo") : tailrecursion.hoplon.p.call(null,"Double-click to edit a todo"));var G__9554 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"http://github.com/tailrecursion/hoplon-demos/"], null),"hoplon-demos") : tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,"rect",cljs.core.constant$keyword$51,"http://github.com/tailrecursion/hoplon-demos/"], null),"hoplon-demos"));var G__9553 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$2("Part of ",G__9554) : tailrecursion.hoplon.p.call(null,"Part of ",G__9554));var G__9551 = (tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.footer.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"info"], null),G__9552,G__9553) : tailrecursion.hoplon.footer.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,"info"], null),G__9552,G__9553));var G__9529 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$2(G__9530,G__9551) : tailrecursion.hoplon.div.call(null,G__9530,G__9551));return G__9529;
})()))));
return tailrecursion.hoplon.init();
});
goog.exportSymbol('tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit', tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit);
