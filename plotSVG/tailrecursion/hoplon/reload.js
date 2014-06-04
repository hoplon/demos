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
tailrecursion.hoplon.reload.file_modified_atom = (function file_modified_atom(url,interval){var last_mod = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var xhr_opts = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$49,url,cljs.core.constant$keyword$50,"HEAD",cljs.core.constant$keyword$51,"text"], null);var xhr_dev_QMARK_ = ((function (last_mod,xhr_opts){
return (function (p1__11599_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",p1__11599_SHARP_.getResponseHeader("X-Dev-Mode"));
});})(last_mod,xhr_opts))
;var do_ajax = ((function (last_mod,xhr_opts,xhr_dev_QMARK_){
return (function (p1__11600_SHARP_,p2__11601_SHARP_){return jQuery.ajax(cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11600_SHARP_,cljs.core.constant$keyword$52,p2__11601_SHARP_)));
});})(last_mod,xhr_opts,xhr_dev_QMARK_))
;var xhr_mod = ((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax){
return (function (p1__11602_SHARP_){return Date.parse(p1__11602_SHARP_.getResponseHeader("Last-Modified"));
});})(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax))
;((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function() { 
var do_poll__delegate = function (p__11606){var vec__11608 = p__11606;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11608,0,null);var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11608,1,null);var xhr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11608,2,null);if(cljs.core.truth_(xhr))
{cljs.core.reset_BANG_(last_mod,xhr_mod(xhr));
} else
{}
if((cljs.core.not(xhr)) || (xhr_dev_QMARK_(xhr)))
{return setTimeout(((function (vec__11608,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function (){return do_ajax(xhr_opts,do_poll);
});})(vec__11608,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod))
,interval);
} else
{return null;
}
};
var do_poll = function (var_args){
var p__11606 = null;if (arguments.length > 0) {
  p__11606 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do_poll__delegate.call(this,p__11606);};
do_poll.cljs$lang$maxFixedArity = 0;
do_poll.cljs$lang$applyTo = (function (arglist__11609){
var p__11606 = cljs.core.seq(arglist__11609);
return do_poll__delegate(p__11606);
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
tailrecursion.hoplon.reload.on_modified = (function on_modified(url,interval,callback){return cljs.core.add_watch(tailrecursion.hoplon.reload.file_modified_atom(url,(function (){var or__7443__auto__ = interval;if(cljs.core.truth_(or__7443__auto__))
{return or__7443__auto__;
} else
{return 100;
}
})()),null,(function (p1__11612_SHARP_,p2__11613_SHARP_,p3__11610_SHARP_,p4__11611_SHARP_){if(cljs.core.truth_((function (){var and__7431__auto__ = p3__11610_SHARP_;if(cljs.core.truth_(and__7431__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p3__11610_SHARP_,p4__11611_SHARP_);
} else
{return and__7431__auto__;
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
var reload_js__delegate = function (p__11614){var vec__11616 = p__11614;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11616,0,null);return tailrecursion.hoplon.reload.on_modified("main.js",interval,((function (vec__11616,interval){
return (function (){return window.location.reload();
});})(vec__11616,interval))
);
};
var reload_js = function (var_args){
var p__11614 = null;if (arguments.length > 0) {
  p__11614 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_js__delegate.call(this,p__11614);};
reload_js.cljs$lang$maxFixedArity = 0;
reload_js.cljs$lang$applyTo = (function (arglist__11617){
var p__11614 = cljs.core.seq(arglist__11617);
return reload_js__delegate(p__11614);
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
var reload_css__delegate = function (p__11619){var vec__11637 = p__11619;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11637,0,null);return ((function (vec__11637,interval){
return (function wait_css(){var css = document.styleSheets;var each = cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length);var css_seq = cljs.core.keep(((function (css,each,vec__11637,interval){
return (function (p1__11618_SHARP_){return p1__11618_SHARP_.href;
});})(css,each,vec__11637,interval))
,(function (){var iter__8168__auto__ = ((function (css,each,vec__11637,interval){
return (function iter__11646(s__11647){return (new cljs.core.LazySeq(null,((function (css,each,vec__11637,interval){
return (function (){var s__11647__$1 = s__11647;while(true){
var temp__4092__auto__ = cljs.core.seq(s__11647__$1);if(temp__4092__auto__)
{var s__11647__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__11647__$2))
{var c__8166__auto__ = cljs.core.chunk_first(s__11647__$2);var size__8167__auto__ = cljs.core.count(c__8166__auto__);var b__11649 = cljs.core.chunk_buffer(size__8167__auto__);if((function (){var i__11648 = 0;while(true){
if((i__11648 < size__8167__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8166__auto__,i__11648);cljs.core.chunk_append(b__11649,(css[s]));
{
var G__11654 = (i__11648 + 1);
i__11648 = G__11654;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__11649),iter__11646(cljs.core.chunk_rest(s__11647__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__11649),null);
}
} else
{var s = cljs.core.first(s__11647__$2);return cljs.core.cons((css[s]),iter__11646(cljs.core.rest(s__11647__$2)));
}
} else
{return null;
}
break;
}
});})(css,each,vec__11637,interval))
,null,null));
});})(css,each,vec__11637,interval))
;return iter__8168__auto__(each);
})());if(cljs.core.not(cljs.core.seq(css_seq)))
{return setTimeout(wait_css,(function (){var or__7443__auto__ = interval;if(cljs.core.truth_(or__7443__auto__))
{return or__7443__auto__;
} else
{return 100;
}
})());
} else
{var seq__11650 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length));var chunk__11651 = null;var count__11652 = 0;var i__11653 = 0;while(true){
if((i__11653 < count__11652))
{var s = chunk__11651.cljs$core$IIndexed$_nth$arity$2(null,i__11653);var temp__4092__auto___11655 = (css[s]);if(cljs.core.truth_(temp__4092__auto___11655))
{var sheet_11656 = temp__4092__auto___11655;var temp__4092__auto___11657__$1 = sheet_11656.href;if(cljs.core.truth_(temp__4092__auto___11657__$1))
{var href_11658 = temp__4092__auto___11657__$1;tailrecursion.hoplon.reload.on_modified(href_11658,interval,((function (seq__11650,chunk__11651,count__11652,i__11653,href_11658,temp__4092__auto___11657__$1,sheet_11656,temp__4092__auto___11655,s,css,each,css_seq,vec__11637,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__11650,chunk__11651,count__11652,i__11653,href_11658,temp__4092__auto___11657__$1,sheet_11656,temp__4092__auto___11655,s,css,each,css_seq,vec__11637,interval))
);
} else
{}
} else
{}
{
var G__11659 = seq__11650;
var G__11660 = chunk__11651;
var G__11661 = count__11652;
var G__11662 = (i__11653 + 1);
seq__11650 = G__11659;
chunk__11651 = G__11660;
count__11652 = G__11661;
i__11653 = G__11662;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11650);if(temp__4092__auto__)
{var seq__11650__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11650__$1))
{var c__8199__auto__ = cljs.core.chunk_first(seq__11650__$1);{
var G__11663 = cljs.core.chunk_rest(seq__11650__$1);
var G__11664 = c__8199__auto__;
var G__11665 = cljs.core.count(c__8199__auto__);
var G__11666 = 0;
seq__11650 = G__11663;
chunk__11651 = G__11664;
count__11652 = G__11665;
i__11653 = G__11666;
continue;
}
} else
{var s = cljs.core.first(seq__11650__$1);var temp__4092__auto___11667__$1 = (css[s]);if(cljs.core.truth_(temp__4092__auto___11667__$1))
{var sheet_11668 = temp__4092__auto___11667__$1;var temp__4092__auto___11669__$2 = sheet_11668.href;if(cljs.core.truth_(temp__4092__auto___11669__$2))
{var href_11670 = temp__4092__auto___11669__$2;tailrecursion.hoplon.reload.on_modified(href_11670,interval,((function (seq__11650,chunk__11651,count__11652,i__11653,href_11670,temp__4092__auto___11669__$2,sheet_11668,temp__4092__auto___11667__$1,s,seq__11650__$1,temp__4092__auto__,css,each,css_seq,vec__11637,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__11650,chunk__11651,count__11652,i__11653,href_11670,temp__4092__auto___11669__$2,sheet_11668,temp__4092__auto___11667__$1,s,seq__11650__$1,temp__4092__auto__,css,each,css_seq,vec__11637,interval))
);
} else
{}
} else
{}
{
var G__11671 = cljs.core.next(seq__11650__$1);
var G__11672 = null;
var G__11673 = 0;
var G__11674 = 0;
seq__11650 = G__11671;
chunk__11651 = G__11672;
count__11652 = G__11673;
i__11653 = G__11674;
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
});})(vec__11637,interval))
.call(null);
};
var reload_css = function (var_args){
var p__11619 = null;if (arguments.length > 0) {
  p__11619 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_css__delegate.call(this,p__11619);};
reload_css.cljs$lang$maxFixedArity = 0;
reload_css.cljs$lang$applyTo = (function (arglist__11675){
var p__11619 = cljs.core.seq(arglist__11675);
return reload_css__delegate(p__11619);
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
var reload_all__delegate = function (p__11676){var vec__11678 = p__11676;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11678,0,null);tailrecursion.hoplon.reload.reload_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
return tailrecursion.hoplon.reload.reload_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
};
var reload_all = function (var_args){
var p__11676 = null;if (arguments.length > 0) {
  p__11676 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_all__delegate.call(this,p__11676);};
reload_all.cljs$lang$maxFixedArity = 0;
reload_all.cljs$lang$applyTo = (function (arglist__11679){
var p__11676 = cljs.core.seq(arglist__11679);
return reload_all__delegate(p__11676);
});
reload_all.cljs$core$IFn$_invoke$arity$variadic = reload_all__delegate;
return reload_all;
})()
;
