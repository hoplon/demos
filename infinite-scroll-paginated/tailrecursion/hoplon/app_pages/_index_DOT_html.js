// Compiled by ClojureScript 0.0-2227
goog.provide('tailrecursion.hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
goog.require('clojure.string');
goog.require('clojure.string');
tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit = (function hoploninit(){/**
* This generates a data vector with ten maps of sequential numbers.
* Example: [{:number "0"} {:number "1"} ... {:number "9"}]
*/
tailrecursion.hoplon.app_pages._index_DOT_html.generate_numbers = (function generate_numbers(n){return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$38,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2(((n - 1) * 10),(((n - 1) * 10) + 10))));
});
tailrecursion.hoplon.app_pages._index_DOT_html.generate_data = (function generate_data(n){return new cljs.core.PersistentArrayMap.fromArray([(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$39,n,cljs.core.constant$keyword$40,tailrecursion.hoplon.app_pages._index_DOT_html.generate_numbers(n)], null)], true, false);
});
/**
* This is a vector of pages from 1 to 99
*/
tailrecursion.hoplon.app_pages._index_DOT_html.fake_api = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.generate_data,cljs.core.range.cljs$core$IFn$_invoke$arity$2(1,100)));
/**
* The current state, a vector of loaded pages.
*/
tailrecursion.hoplon.app_pages._index_DOT_html.state = tailrecursion.javelin.cell(cljs.core.PersistentVector.EMPTY);
/**
* It will be a error message when a page is not found.
*/
tailrecursion.hoplon.app_pages._index_DOT_html.error = tailrecursion.javelin.cell(null);
/**
* When it isn't empty, something is loading.
*/
tailrecursion.hoplon.app_pages._index_DOT_html.loading = tailrecursion.javelin.cell(cljs.core.PersistentVector.EMPTY);
/**
* True when there is something loading
*/
tailrecursion.hoplon.app_pages._index_DOT_html.loading_QMARK_ = tailrecursion.javelin.lift((function (G__9383,G__9384){return (G__9383.cljs$core$IFn$_invoke$arity$1 ? G__9383.cljs$core$IFn$_invoke$arity$1(G__9384) : G__9383.call(null,G__9384));
})).call(null,cljs.core.seq,tailrecursion.hoplon.app_pages._index_DOT_html.loading);
/**
* A vector of pages sorted by page
*/
tailrecursion.hoplon.app_pages._index_DOT_html.sorted_state = tailrecursion.javelin.lift((function (G__9385,G__9387,G__9386){return (G__9385.cljs$core$IFn$_invoke$arity$1 ? G__9385.cljs$core$IFn$_invoke$arity$1((G__9386.cljs$core$IFn$_invoke$arity$2 ? G__9386.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$39,G__9387) : G__9386.call(null,cljs.core.constant$keyword$39,G__9387))) : G__9385.call(null,(G__9386.cljs$core$IFn$_invoke$arity$2 ? G__9386.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$39,G__9387) : G__9386.call(null,cljs.core.constant$keyword$39,G__9387))));
})).call(null,cljs.core.vec,tailrecursion.hoplon.app_pages._index_DOT_html.state,cljs.core.sort_by);
/**
* Page numbers of loaded pages.
*/
tailrecursion.hoplon.app_pages._index_DOT_html.pages_loaded = tailrecursion.javelin.cell(cljs.core.PersistentVector.EMPTY);
/**
* Previous page that should be loaded (when scrolling up).
*/
tailrecursion.hoplon.app_pages._index_DOT_html.prev_page = tailrecursion.javelin.lift((function (G__9390,G__9388,G__9389){return ((G__9388.cljs$core$IFn$_invoke$arity$2 ? G__9388.cljs$core$IFn$_invoke$arity$2(G__9389,G__9390) : G__9388.call(null,G__9389,G__9390)) - 1);
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.pages_loaded,cljs.core.apply,cljs.core.min);
/**
* Next page number that should be loaded.
*/
tailrecursion.hoplon.app_pages._index_DOT_html.next_page = tailrecursion.javelin.lift((function (G__9393,G__9392,G__9391){return ((G__9391.cljs$core$IFn$_invoke$arity$2 ? G__9391.cljs$core$IFn$_invoke$arity$2(G__9392,G__9393) : G__9391.call(null,G__9392,G__9393)) + 1);
})).call(null,tailrecursion.hoplon.app_pages._index_DOT_html.pages_loaded,cljs.core.max,cljs.core.apply);
/**
* Last scroll position
*/
tailrecursion.hoplon.app_pages._index_DOT_html.last_scroll = tailrecursion.javelin.cell(0);
/**
* When false disable the handler to scroll on hashchange.
*/
tailrecursion.hoplon.app_pages._index_DOT_html.hash_scroll = tailrecursion.javelin.cell(true);
/**
* Last setTimeout id so we can cancel it if needed.
*/
tailrecursion.hoplon.app_pages._index_DOT_html.timeout_id = tailrecursion.javelin.cell(0);
/**
* Get a page from the fake api and run a callback on the result.
*/
tailrecursion.hoplon.app_pages._index_DOT_html.get_page = (function get_page(p,callback){return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1((tailrecursion.hoplon.app_pages._index_DOT_html.fake_api.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.app_pages._index_DOT_html.fake_api.cljs$core$IFn$_invoke$arity$1(p) : tailrecursion.hoplon.app_pages._index_DOT_html.fake_api.call(null,p))) : callback.call(null,(tailrecursion.hoplon.app_pages._index_DOT_html.fake_api.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.app_pages._index_DOT_html.fake_api.cljs$core$IFn$_invoke$arity$1(p) : tailrecursion.hoplon.app_pages._index_DOT_html.fake_api.call(null,p))));
});
/**
* Put the page p on the state and on the pages-loaded.
*/
tailrecursion.hoplon.app_pages._index_DOT_html.fetch_page_BANG_ = (function fetch_page_BANG_(p){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.app_pages._index_DOT_html.loading_QMARK_)))
{return null;
} else
{cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.error,null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.loading,cljs.core.conj,cljs.core.constant$keyword$41);
var q = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p));return tailrecursion.hoplon.app_pages._index_DOT_html.get_page(q,((function (q){
return (function (p1__5373_SHARP_){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.app_pages._index_DOT_html.loading,cljs.core.pop);
if(cljs.core.truth_(p1__5373_SHARP_))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.state,cljs.core.conj,p1__5373_SHARP_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tailrecursion.hoplon.app_pages._index_DOT_html.pages_loaded,cljs.core.conj,p);
} else
{}
if(cljs.core.truth_(p1__5373_SHARP_))
{return null;
} else
{return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.error,"Sem mais p\u00E1ginas");
}
});})(q))
);
}
});
/**
* Put the next page on the state and pages-loaded.
*/
tailrecursion.hoplon.app_pages._index_DOT_html.fetch_next_page_BANG_ = (function fetch_next_page_BANG_(){return tailrecursion.hoplon.app_pages._index_DOT_html.fetch_page_BANG_(cljs.core.deref(tailrecursion.hoplon.app_pages._index_DOT_html.next_page));
});
/**
* Put the previous page on the state and pages-loaded and fix the scroll
* position.
*/
tailrecursion.hoplon.app_pages._index_DOT_html.fetch_prev_page_BANG_ = (function fetch_prev_page_BANG_(){var p = cljs.core.deref(tailrecursion.hoplon.app_pages._index_DOT_html.prev_page);tailrecursion.hoplon.app_pages._index_DOT_html.fetch_page_BANG_(p);
return jQuery(window).scrollTop((jQuery(window).scrollTop() + jQuery(("#page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p))).height()));
});
/**
* Returns true if the element is the most visible on screen.
*/
tailrecursion.hoplon.app_pages._index_DOT_html.mostly_visible = (function mostly_visible(el){var w = jQuery(window);var vertical_scroll = w.scrollTop();var window_height = w.height();var el_top = jQuery(el).offset().top;var el_height = jQuery(el).height();var el_bottom = (el_top + el_height);return (((el_bottom - (el_height * 0.25)) > vertical_scroll)) && ((el_top < (vertical_scroll + (0.5 * window_height))));
});
tailrecursion.hoplon.add_initfn_BANG_((function (){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.location.hash.length,0))
{tailrecursion.hoplon.app_pages._index_DOT_html.fetch_page_BANG_(1);
} else
{tailrecursion.hoplon.app_pages._index_DOT_html.fetch_page_BANG_(parseInt(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(window.location.hash,/\//))));
}
(tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(window,cljs.core.constant$keyword$42,(function (){var w = jQuery(window);var vertical_scroll = w.scrollTop();var window_height = w.height();var document_height = jQuery(document).height();var at_end_QMARK_ = (vertical_scroll >= (0.9 * (document_height - window_height)));var header_height = jQuery("#header").height();var at_begin_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(vertical_scroll,0);if((Math.abs((vertical_scroll - cljs.core.deref(tailrecursion.hoplon.app_pages._index_DOT_html.last_scroll))) > (0.1 * window_height)))
{cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.last_scroll,vertical_scroll);
jQuery(".item-page").each(((function (w,vertical_scroll,window_height,document_height,at_end_QMARK_,header_height,at_begin_QMARK_){
return (function (i,v){if(tailrecursion.hoplon.app_pages._index_DOT_html.mostly_visible(v))
{clearTimeout(cljs.core.deref(tailrecursion.hoplon.app_pages._index_DOT_html.timeout_id));
cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.hash_scroll,false);
window.location.hash = jQuery(v).attr("data-url");
return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.timeout_id,setTimeout(((function (w,vertical_scroll,window_height,document_height,at_end_QMARK_,header_height,at_begin_QMARK_){
return (function (){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.hash_scroll,true);
});})(w,vertical_scroll,window_height,document_height,at_end_QMARK_,header_height,at_begin_QMARK_))
,500));
} else
{return null;
}
});})(w,vertical_scroll,window_height,document_height,at_end_QMARK_,header_height,at_begin_QMARK_))
);
} else
{}
if(at_end_QMARK_)
{return tailrecursion.hoplon.app_pages._index_DOT_html.fetch_next_page_BANG_();
} else
{if(at_begin_QMARK_)
{return tailrecursion.hoplon.app_pages._index_DOT_html.fetch_prev_page_BANG_();
} else
{return null;
}
}
})) : tailrecursion.hoplon.on_BANG_.call(null,window,cljs.core.constant$keyword$42,(function (){var w = jQuery(window);var vertical_scroll = w.scrollTop();var window_height = w.height();var document_height = jQuery(document).height();var at_end_QMARK_ = (vertical_scroll >= (0.9 * (document_height - window_height)));var header_height = jQuery("#header").height();var at_begin_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(vertical_scroll,0);if((Math.abs((vertical_scroll - cljs.core.deref(tailrecursion.hoplon.app_pages._index_DOT_html.last_scroll))) > (0.1 * window_height)))
{cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.last_scroll,vertical_scroll);
jQuery(".item-page").each(((function (w,vertical_scroll,window_height,document_height,at_end_QMARK_,header_height,at_begin_QMARK_){
return (function (i,v){if(tailrecursion.hoplon.app_pages._index_DOT_html.mostly_visible(v))
{clearTimeout(cljs.core.deref(tailrecursion.hoplon.app_pages._index_DOT_html.timeout_id));
cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.hash_scroll,false);
window.location.hash = jQuery(v).attr("data-url");
return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.timeout_id,setTimeout(((function (w,vertical_scroll,window_height,document_height,at_end_QMARK_,header_height,at_begin_QMARK_){
return (function (){return cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.hash_scroll,true);
});})(w,vertical_scroll,window_height,document_height,at_end_QMARK_,header_height,at_begin_QMARK_))
,500));
} else
{return null;
}
});})(w,vertical_scroll,window_height,document_height,at_end_QMARK_,header_height,at_begin_QMARK_))
);
} else
{}
if(at_end_QMARK_)
{return tailrecursion.hoplon.app_pages._index_DOT_html.fetch_next_page_BANG_();
} else
{if(at_begin_QMARK_)
{return tailrecursion.hoplon.app_pages._index_DOT_html.fetch_prev_page_BANG_();
} else
{return null;
}
}
})));
return (tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.on_BANG_.cljs$core$IFn$_invoke$arity$3(window,cljs.core.constant$keyword$43,(function (){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.app_pages._index_DOT_html.hash_scroll)))
{var p = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(window.location.hash,/\//));var el = jQuery(("#page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)));if((el.length > 0))
{var position = el.position();var tp = position.top;var b = jQuery("html,body");return b.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,tp], null)));
} else
{cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.last_scroll,0);
return window.location.reload(true);
}
} else
{return null;
}
})) : tailrecursion.hoplon.on_BANG_.call(null,window,cljs.core.constant$keyword$43,(function (){if(cljs.core.truth_(cljs.core.deref(tailrecursion.hoplon.app_pages._index_DOT_html.hash_scroll)))
{var p = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(window.location.hash,/\//));var el = jQuery(("#page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)));if((el.length > 0))
{var position = el.position();var tp = position.top;var b = jQuery("html,body");return b.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,tp], null)));
} else
{cljs.core.reset_BANG_(tailrecursion.hoplon.app_pages._index_DOT_html.last_scroll,0);
return window.location.reload(true);
}
} else
{return null;
}
})));
}));
(tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$44,"en",(tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$45,"stylesheet",cljs.core.constant$keyword$46,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$45,"stylesheet",cljs.core.constant$keyword$46,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"]))),(meta.cljs$core$IFn$_invoke$arity$2 ? meta.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$48,"utf-8") : meta.call(null,cljs.core.constant$keyword$48,"utf-8")),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Infinite Scroll Paginated Demo") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Infinite Scroll Paginated Demo"))], null);
})()) : tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$45,"stylesheet",cljs.core.constant$keyword$46,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$45,"stylesheet",cljs.core.constant$keyword$46,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"]))),(meta.cljs$core$IFn$_invoke$arity$2 ? meta.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$48,"utf-8") : meta.call(null,cljs.core.constant$keyword$48,"utf-8")),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Infinite Scroll Paginated Demo") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Infinite Scroll Paginated Demo"))], null);
})())),(tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9395 = (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1("Infinite Scrolling") : tailrecursion.hoplon.h1.call(null,"Infinite Scrolling"));var G__9396 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Scroll down to see more pages...") : tailrecursion.hoplon.p.call(null,"Scroll down to see more pages..."));var G__9394 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$49,"header",G__9395,G__9396) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"header",G__9395,G__9396));return G__9394;
})(),(function (){var G__9398 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$49,"loading",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.loading_QMARK_,"LOADING IMAGES...") : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"loading",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.loading_QMARK_,"LOADING IMAGES..."));var G__9401 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$47,"javascript:void(0)",cljs.core.constant$keyword$50,tailrecursion.hoplon.app_pages._index_DOT_html.fetch_next_page_BANG_,"try again") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$47,"javascript:void(0)",cljs.core.constant$keyword$50,tailrecursion.hoplon.app_pages._index_DOT_html.fetch_next_page_BANG_,"try again"));var G__9399 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$49,"error",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.error,"No more pages: ",G__9401) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"error",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.error,"No more pages: ",G__9401));var G__9400 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.sorted_state,null,((function (G__9398,G__9401,G__9399){
return (function (item__8316__auto__){var vec__9402 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (G__9398,G__9401,G__9399){
return (function (G__9404){var map__9403 = G__9404;var map__9403__$1 = ((cljs.core.seq_QMARK_(map__9403))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9403):map__9403);var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$39);var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$40);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
});})(G__9398,G__9401,G__9399))
).call(null,item__8316__auto__));var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,0,null);var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,1,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)));
});})(G__9398,G__9401,G__9399))
)) : tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.sorted_state,null,((function (G__9398,G__9401,G__9399){
return (function (item__8316__auto__){var vec__9402 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (G__9398,G__9401,G__9399){
return (function (G__9404){var map__9403 = G__9404;var map__9403__$1 = ((cljs.core.seq_QMARK_(map__9403))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9403):map__9403);var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$39);var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$40);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
});})(G__9398,G__9401,G__9399))
).call(null,item__8316__auto__));var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,0,null);var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,1,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)));
});})(G__9398,G__9401,G__9399))
)));var G__9397 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$49,"wrapper",G__9398,G__9399,G__9400) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"wrapper",G__9398,G__9399,G__9400));return G__9397;
})()) : tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9395 = (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1("Infinite Scrolling") : tailrecursion.hoplon.h1.call(null,"Infinite Scrolling"));var G__9396 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Scroll down to see more pages...") : tailrecursion.hoplon.p.call(null,"Scroll down to see more pages..."));var G__9394 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$49,"header",G__9395,G__9396) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"header",G__9395,G__9396));return G__9394;
})(),(function (){var G__9398 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$49,"loading",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.loading_QMARK_,"LOADING IMAGES...") : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"loading",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.loading_QMARK_,"LOADING IMAGES..."));var G__9401 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$47,"javascript:void(0)",cljs.core.constant$keyword$50,tailrecursion.hoplon.app_pages._index_DOT_html.fetch_next_page_BANG_,"try again") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$47,"javascript:void(0)",cljs.core.constant$keyword$50,tailrecursion.hoplon.app_pages._index_DOT_html.fetch_next_page_BANG_,"try again"));var G__9399 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$49,"error",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.error,"No more pages: ",G__9401) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"error",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.error,"No more pages: ",G__9401));var G__9400 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.sorted_state,null,((function (G__9398,G__9401,G__9399){
return (function (item__8316__auto__){var vec__9402 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (G__9398,G__9401,G__9399){
return (function (G__9404){var map__9403 = G__9404;var map__9403__$1 = ((cljs.core.seq_QMARK_(map__9403))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9403):map__9403);var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$39);var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$40);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
});})(G__9398,G__9401,G__9399))
).call(null,item__8316__auto__));var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,0,null);var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,1,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)));
});})(G__9398,G__9401,G__9399))
)) : tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.sorted_state,null,((function (G__9398,G__9401,G__9399){
return (function (item__8316__auto__){var vec__9402 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (G__9398,G__9401,G__9399){
return (function (G__9404){var map__9403 = G__9404;var map__9403__$1 = ((cljs.core.seq_QMARK_(map__9403))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9403):map__9403);var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$39);var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$40);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
});})(G__9398,G__9401,G__9399))
).call(null,item__8316__auto__));var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,0,null);var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,1,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)));
});})(G__9398,G__9401,G__9399))
)));var G__9397 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$49,"wrapper",G__9398,G__9399,G__9400) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"wrapper",G__9398,G__9399,G__9400));return G__9397;
})()))) : tailrecursion.hoplon.html.call(null,cljs.core.constant$keyword$44,"en",(tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.html_head.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$45,"stylesheet",cljs.core.constant$keyword$46,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$45,"stylesheet",cljs.core.constant$keyword$46,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"]))),(meta.cljs$core$IFn$_invoke$arity$2 ? meta.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$48,"utf-8") : meta.call(null,cljs.core.constant$keyword$48,"utf-8")),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Infinite Scroll Paginated Demo") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Infinite Scroll Paginated Demo"))], null);
})()) : tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var meta = tailrecursion.hoplon.html_meta;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.link.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$45,"stylesheet",cljs.core.constant$keyword$46,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"])) : tailrecursion.hoplon.link.call(null,cljs.core.constant$keyword$45,"stylesheet",cljs.core.constant$keyword$46,"text/css",cljs.core.constant$keyword$47,(window["_hoplon_main_css"]))),(meta.cljs$core$IFn$_invoke$arity$2 ? meta.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$48,"utf-8") : meta.call(null,cljs.core.constant$keyword$48,"utf-8")),(tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.title.cljs$core$IFn$_invoke$arity$1("Hoplon \u2022 Infinite Scroll Paginated Demo") : tailrecursion.hoplon.title.call(null,"Hoplon \u2022 Infinite Scroll Paginated Demo"))], null);
})())),(tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.html_body.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9395 = (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1("Infinite Scrolling") : tailrecursion.hoplon.h1.call(null,"Infinite Scrolling"));var G__9396 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Scroll down to see more pages...") : tailrecursion.hoplon.p.call(null,"Scroll down to see more pages..."));var G__9394 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$49,"header",G__9395,G__9396) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"header",G__9395,G__9396));return G__9394;
})(),(function (){var G__9398 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$49,"loading",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.loading_QMARK_,"LOADING IMAGES...") : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"loading",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.loading_QMARK_,"LOADING IMAGES..."));var G__9401 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$47,"javascript:void(0)",cljs.core.constant$keyword$50,tailrecursion.hoplon.app_pages._index_DOT_html.fetch_next_page_BANG_,"try again") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$47,"javascript:void(0)",cljs.core.constant$keyword$50,tailrecursion.hoplon.app_pages._index_DOT_html.fetch_next_page_BANG_,"try again"));var G__9399 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$49,"error",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.error,"No more pages: ",G__9401) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"error",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.error,"No more pages: ",G__9401));var G__9400 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.sorted_state,null,((function (G__9398,G__9401,G__9399){
return (function (item__8316__auto__){var vec__9402 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (G__9398,G__9401,G__9399){
return (function (G__9404){var map__9403 = G__9404;var map__9403__$1 = ((cljs.core.seq_QMARK_(map__9403))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9403):map__9403);var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$39);var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$40);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
});})(G__9398,G__9401,G__9399))
).call(null,item__8316__auto__));var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,0,null);var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,1,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)));
});})(G__9398,G__9401,G__9399))
)) : tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.sorted_state,null,((function (G__9398,G__9401,G__9399){
return (function (item__8316__auto__){var vec__9402 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (G__9398,G__9401,G__9399){
return (function (G__9404){var map__9403 = G__9404;var map__9403__$1 = ((cljs.core.seq_QMARK_(map__9403))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9403):map__9403);var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$39);var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$40);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
});})(G__9398,G__9401,G__9399))
).call(null,item__8316__auto__));var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,0,null);var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,1,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)));
});})(G__9398,G__9401,G__9399))
)));var G__9397 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$49,"wrapper",G__9398,G__9399,G__9400) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"wrapper",G__9398,G__9399,G__9400));return G__9397;
})()) : tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var G__9395 = (tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$1("Infinite Scrolling") : tailrecursion.hoplon.h1.call(null,"Infinite Scrolling"));var G__9396 = (tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.p.cljs$core$IFn$_invoke$arity$1("Scroll down to see more pages...") : tailrecursion.hoplon.p.call(null,"Scroll down to see more pages..."));var G__9394 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$49,"header",G__9395,G__9396) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"header",G__9395,G__9396));return G__9394;
})(),(function (){var G__9398 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$49,"loading",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.loading_QMARK_,"LOADING IMAGES...") : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"loading",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.loading_QMARK_,"LOADING IMAGES..."));var G__9401 = (tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.a.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$47,"javascript:void(0)",cljs.core.constant$keyword$50,tailrecursion.hoplon.app_pages._index_DOT_html.fetch_next_page_BANG_,"try again") : tailrecursion.hoplon.a.call(null,cljs.core.constant$keyword$47,"javascript:void(0)",cljs.core.constant$keyword$50,tailrecursion.hoplon.app_pages._index_DOT_html.fetch_next_page_BANG_,"try again"));var G__9399 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$6(cljs.core.constant$keyword$49,"error",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.error,"No more pages: ",G__9401) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"error",cljs.core.constant$keyword$27,tailrecursion.hoplon.app_pages._index_DOT_html.error,"No more pages: ",G__9401));var G__9400 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.sorted_state,null,((function (G__9398,G__9401,G__9399){
return (function (item__8316__auto__){var vec__9402 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (G__9398,G__9401,G__9399){
return (function (G__9404){var map__9403 = G__9404;var map__9403__$1 = ((cljs.core.seq_QMARK_(map__9403))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9403):map__9403);var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$39);var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$40);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
});})(G__9398,G__9401,G__9399))
).call(null,item__8316__auto__));var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,0,null);var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,1,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)));
});})(G__9398,G__9401,G__9399))
)) : tailrecursion.hoplon.div.call(null,tailrecursion.hoplon.loop_tpl_STAR_(tailrecursion.hoplon.app_pages._index_DOT_html.sorted_state,null,((function (G__9398,G__9401,G__9399){
return (function (item__8316__auto__){var vec__9402 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (G__9398,G__9401,G__9399){
return (function (G__9404){var map__9403 = G__9404;var map__9403__$1 = ((cljs.core.seq_QMARK_(map__9403))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9403):map__9403);var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$39);var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9403__$1,cljs.core.constant$keyword$40);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
});})(G__9398,G__9401,G__9399))
).call(null,item__8316__auto__));var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,0,null);var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9402,1,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$8(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9405){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9405));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),cljs.core.constant$keyword$25,"item-page",cljs.core.constant$keyword$51,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9406){return ("#/page/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9406));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.h1.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h1.call(null,cljs.core.constant$keyword$49,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9407){return ("page-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9407));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,p),(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9408,G__9409){return G__9408.nodeValue = ("Page: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9409));
});})(t__8330__auto__,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,p);
return t__8330__auto__;
})())),tailrecursion.hoplon.loop_tpl_STAR_(d,null,((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (item__8316__auto____$1){var vec__9410 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9412){var map__9411 = G__9412;var map__9411__$1 = ((cljs.core.seq_QMARK_(map__9411))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9411):map__9411);var it = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9411__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [it], null);
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,item__8316__auto____$1));var it = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9410,0,null);return (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$26,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,100], null),(tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.h2.cljs$core$IFn$_invoke$arity$1((function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()) : tailrecursion.hoplon.h2.call(null,(function (){var t__8330__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399){
return (function (G__9413,G__9414){return G__9413.nodeValue = ("Number: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9414));
});})(t__8330__auto__,vec__9410,it,vec__9402,p,d,G__9398,G__9401,G__9399))
).call(null,t__8330__auto__,it);
return t__8330__auto__;
})()))));
});})(vec__9402,p,d,G__9398,G__9401,G__9399))
)));
});})(G__9398,G__9401,G__9399))
)));var G__9397 = (tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5 ? tailrecursion.hoplon.div.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$49,"wrapper",G__9398,G__9399,G__9400) : tailrecursion.hoplon.div.call(null,cljs.core.constant$keyword$49,"wrapper",G__9398,G__9399,G__9400));return G__9397;
})()))));
return tailrecursion.hoplon.init();
});
goog.exportSymbol('tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit', tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit);
