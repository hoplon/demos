// Compiled by ClojureScript 0.0-2227
goog.provide('tailrecursion.hoplon.reload');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('clojure.string');
goog.require('clojure.string');
tailrecursion.hoplon.reload.reload_BANG_ = (function reload_BANG_(sheet){var temp__4092__auto__ = sheet.href;if(cljs.core.truth_(temp__4092__auto__))
{var h = temp__4092__auto__;var k = "___tailrecursion_hoplon_reload___=";var q = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));return sheet.ownerNode.href = (((h.indexOf("?") < 0))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)):(((h.indexOf(k) < 0))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)+"&"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)):((cljs.core.constant$keyword$6)?clojure.string.replace(h,cljs.core.re_pattern((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)+"\\d+")),q):null)));
} else
{return null;
}
});
/**
* Returns an atom whose value reflects the last modified time of the resource
* at the given `url`. The last modified time is obtained by polling the server
* with the given `interval` (in msec) with `HEAD` requests. If the response does
* not contain the special `X-Dev-Mode` header with the value `true` polling is
* then disabled.
*/
tailrecursion.hoplon.reload.file_modified_atom = (function file_modified_atom(url,interval){var last_mod = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var xhr_opts = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$63,url,cljs.core.constant$keyword$42,"HEAD",cljs.core.constant$keyword$64,"text"], null);var xhr_dev_QMARK_ = ((function (last_mod,xhr_opts){
return (function (p1__11666_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",p1__11666_SHARP_.getResponseHeader("X-Dev-Mode"));
});})(last_mod,xhr_opts))
;var do_ajax = ((function (last_mod,xhr_opts,xhr_dev_QMARK_){
return (function (p1__11667_SHARP_,p2__11668_SHARP_){return jQuery.ajax(cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11667_SHARP_,cljs.core.constant$keyword$52,p2__11668_SHARP_)));
});})(last_mod,xhr_opts,xhr_dev_QMARK_))
;var xhr_mod = ((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax){
return (function (p1__11669_SHARP_){return Date.parse(p1__11669_SHARP_.getResponseHeader("Last-Modified"));
});})(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax))
;((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function() { 
var do_poll__delegate = function (p__11673){var vec__11675 = p__11673;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11675,0,null);var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11675,1,null);var xhr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11675,2,null);if(cljs.core.truth_(xhr))
{cljs.core.reset_BANG_(last_mod,xhr_mod(xhr));
} else
{}
if((cljs.core.not(xhr)) || (xhr_dev_QMARK_(xhr)))
{return setTimeout(((function (vec__11675,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function (){return do_ajax(xhr_opts,do_poll);
});})(vec__11675,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod))
,interval);
} else
{return null;
}
};
var do_poll = function (var_args){
var p__11673 = null;if (arguments.length > 0) {
  p__11673 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do_poll__delegate.call(this,p__11673);};
do_poll.cljs$lang$maxFixedArity = 0;
do_poll.cljs$lang$applyTo = (function (arglist__11676){
var p__11673 = cljs.core.seq(arglist__11676);
return do_poll__delegate(p__11673);
});
do_poll.cljs$core$IFn$_invoke$arity$variadic = do_poll__delegate;
return do_poll;
})()
;})(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod))
.call(null);
return last_mod;
});
/**
* Runs the given `callback` whenever the last modified time of the resource at
* the given `url` changes, polling with the given `interval` in milliseconds.
*/
tailrecursion.hoplon.reload.on_modified = (function on_modified(url,interval,callback){return cljs.core.add_watch(tailrecursion.hoplon.reload.file_modified_atom(url,(function (){var or__7636__auto__ = interval;if(cljs.core.truth_(or__7636__auto__))
{return or__7636__auto__;
} else
{return 100;
}
})()),null,(function (p1__11679_SHARP_,p2__11680_SHARP_,p3__11677_SHARP_,p4__11678_SHARP_){if(cljs.core.truth_((function (){var and__7624__auto__ = p3__11677_SHARP_;if(cljs.core.truth_(and__7624__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p3__11677_SHARP_,p4__11678_SHARP_);
} else
{return and__7624__auto__;
}
})()))
{return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else
{return null;
}
}));
});
/**
* Reloads the page whenever the `main.js` file is modified. The optional
* `interval` argument specifies how often to poll the server for changes, in
* milliseconds.
* @param {...*} var_args
*/
tailrecursion.hoplon.reload.reload_js = (function() { 
var reload_js__delegate = function (p__11681){var vec__11683 = p__11681;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11683,0,null);return tailrecursion.hoplon.reload.on_modified("main.js",interval,((function (vec__11683,interval){
return (function (){return window.location.reload();
});})(vec__11683,interval))
);
};
var reload_js = function (var_args){
var p__11681 = null;if (arguments.length > 0) {
  p__11681 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_js__delegate.call(this,p__11681);};
reload_js.cljs$lang$maxFixedArity = 0;
reload_js.cljs$lang$applyTo = (function (arglist__11684){
var p__11681 = cljs.core.seq(arglist__11684);
return reload_js__delegate(p__11681);
});
reload_js.cljs$core$IFn$_invoke$arity$variadic = reload_js__delegate;
return reload_js;
})()
;
/**
* Reloads CSS stylesheets whenever they are modified. The page itself is not
* reloaded, just the stylesheets. The optional `interval` argument specifies
* how often to poll the server for changes, in milliseconds.
* @param {...*} var_args
*/
tailrecursion.hoplon.reload.reload_css = (function() { 
var reload_css__delegate = function (p__11686){var vec__11704 = p__11686;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11704,0,null);return ((function (vec__11704,interval){
return (function wait_css(){var css = document.styleSheets;var each = cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length);var css_seq = cljs.core.keep(((function (css,each,vec__11704,interval){
return (function (p1__11685_SHARP_){return p1__11685_SHARP_.href;
});})(css,each,vec__11704,interval))
,(function (){var iter__8361__auto__ = ((function (css,each,vec__11704,interval){
return (function iter__11713(s__11714){return (new cljs.core.LazySeq(null,((function (css,each,vec__11704,interval){
return (function (){var s__11714__$1 = s__11714;while(true){
var temp__4092__auto__ = cljs.core.seq(s__11714__$1);if(temp__4092__auto__)
{var s__11714__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__11714__$2))
{var c__8359__auto__ = cljs.core.chunk_first(s__11714__$2);var size__8360__auto__ = cljs.core.count(c__8359__auto__);var b__11716 = cljs.core.chunk_buffer(size__8360__auto__);if((function (){var i__11715 = 0;while(true){
if((i__11715 < size__8360__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8359__auto__,i__11715);cljs.core.chunk_append(b__11716,(css[s]));
{
var G__11721 = (i__11715 + 1);
i__11715 = G__11721;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__11716),iter__11713(cljs.core.chunk_rest(s__11714__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__11716),null);
}
} else
{var s = cljs.core.first(s__11714__$2);return cljs.core.cons((css[s]),iter__11713(cljs.core.rest(s__11714__$2)));
}
} else
{return null;
}
break;
}
});})(css,each,vec__11704,interval))
,null,null));
});})(css,each,vec__11704,interval))
;return iter__8361__auto__(each);
})());if(cljs.core.not(cljs.core.seq(css_seq)))
{return setTimeout(wait_css,(function (){var or__7636__auto__ = interval;if(cljs.core.truth_(or__7636__auto__))
{return or__7636__auto__;
} else
{return 100;
}
})());
} else
{var seq__11717 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length));var chunk__11718 = null;var count__11719 = 0;var i__11720 = 0;while(true){
if((i__11720 < count__11719))
{var s = chunk__11718.cljs$core$IIndexed$_nth$arity$2(null,i__11720);var temp__4092__auto___11722 = (css[s]);if(cljs.core.truth_(temp__4092__auto___11722))
{var sheet_11723 = temp__4092__auto___11722;var temp__4092__auto___11724__$1 = sheet_11723.href;if(cljs.core.truth_(temp__4092__auto___11724__$1))
{var href_11725 = temp__4092__auto___11724__$1;tailrecursion.hoplon.reload.on_modified(href_11725,interval,((function (seq__11717,chunk__11718,count__11719,i__11720,href_11725,temp__4092__auto___11724__$1,sheet_11723,temp__4092__auto___11722,s,css,each,css_seq,vec__11704,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__11717,chunk__11718,count__11719,i__11720,href_11725,temp__4092__auto___11724__$1,sheet_11723,temp__4092__auto___11722,s,css,each,css_seq,vec__11704,interval))
);
} else
{}
} else
{}
{
var G__11726 = seq__11717;
var G__11727 = chunk__11718;
var G__11728 = count__11719;
var G__11729 = (i__11720 + 1);
seq__11717 = G__11726;
chunk__11718 = G__11727;
count__11719 = G__11728;
i__11720 = G__11729;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11717);if(temp__4092__auto__)
{var seq__11717__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11717__$1))
{var c__8392__auto__ = cljs.core.chunk_first(seq__11717__$1);{
var G__11730 = cljs.core.chunk_rest(seq__11717__$1);
var G__11731 = c__8392__auto__;
var G__11732 = cljs.core.count(c__8392__auto__);
var G__11733 = 0;
seq__11717 = G__11730;
chunk__11718 = G__11731;
count__11719 = G__11732;
i__11720 = G__11733;
continue;
}
} else
{var s = cljs.core.first(seq__11717__$1);var temp__4092__auto___11734__$1 = (css[s]);if(cljs.core.truth_(temp__4092__auto___11734__$1))
{var sheet_11735 = temp__4092__auto___11734__$1;var temp__4092__auto___11736__$2 = sheet_11735.href;if(cljs.core.truth_(temp__4092__auto___11736__$2))
{var href_11737 = temp__4092__auto___11736__$2;tailrecursion.hoplon.reload.on_modified(href_11737,interval,((function (seq__11717,chunk__11718,count__11719,i__11720,href_11737,temp__4092__auto___11736__$2,sheet_11735,temp__4092__auto___11734__$1,s,seq__11717__$1,temp__4092__auto__,css,each,css_seq,vec__11704,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__11717,chunk__11718,count__11719,i__11720,href_11737,temp__4092__auto___11736__$2,sheet_11735,temp__4092__auto___11734__$1,s,seq__11717__$1,temp__4092__auto__,css,each,css_seq,vec__11704,interval))
);
} else
{}
} else
{}
{
var G__11738 = cljs.core.next(seq__11717__$1);
var G__11739 = null;
var G__11740 = 0;
var G__11741 = 0;
seq__11717 = G__11738;
chunk__11718 = G__11739;
count__11719 = G__11740;
i__11720 = G__11741;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});})(vec__11704,interval))
.call(null);
};
var reload_css = function (var_args){
var p__11686 = null;if (arguments.length > 0) {
  p__11686 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_css__delegate.call(this,p__11686);};
reload_css.cljs$lang$maxFixedArity = 0;
reload_css.cljs$lang$applyTo = (function (arglist__11742){
var p__11686 = cljs.core.seq(arglist__11742);
return reload_css__delegate(p__11686);
});
reload_css.cljs$core$IFn$_invoke$arity$variadic = reload_css__delegate;
return reload_css;
})()
;
/**
* Reload the page when `main.js` is modified, and CSS stylesheets as needed.
* The optional `interval` argument specifies how often to poll the server for
* changes, in milliseconds.
* @param {...*} var_args
*/
tailrecursion.hoplon.reload.reload_all = (function() { 
var reload_all__delegate = function (p__11743){var vec__11745 = p__11743;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11745,0,null);tailrecursion.hoplon.reload.reload_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
return tailrecursion.hoplon.reload.reload_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
};
var reload_all = function (var_args){
var p__11743 = null;if (arguments.length > 0) {
  p__11743 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_all__delegate.call(this,p__11743);};
reload_all.cljs$lang$maxFixedArity = 0;
reload_all.cljs$lang$applyTo = (function (arglist__11746){
var p__11743 = cljs.core.seq(arglist__11746);
return reload_all__delegate(p__11743);
});
reload_all.cljs$core$IFn$_invoke$arity$variadic = reload_all__delegate;
return reload_all;
})()
;
