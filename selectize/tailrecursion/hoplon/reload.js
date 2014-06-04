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
tailrecursion.hoplon.reload.file_modified_atom = (function file_modified_atom(url,interval){var last_mod = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var xhr_opts = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$42,url,cljs.core.constant$keyword$43,"HEAD",cljs.core.constant$keyword$44,"text"], null);var xhr_dev_QMARK_ = ((function (last_mod,xhr_opts){
return (function (p1__11409_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",p1__11409_SHARP_.getResponseHeader("X-Dev-Mode"));
});})(last_mod,xhr_opts))
;var do_ajax = ((function (last_mod,xhr_opts,xhr_dev_QMARK_){
return (function (p1__11410_SHARP_,p2__11411_SHARP_){return jQuery.ajax(cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11410_SHARP_,cljs.core.constant$keyword$45,p2__11411_SHARP_)));
});})(last_mod,xhr_opts,xhr_dev_QMARK_))
;var xhr_mod = ((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax){
return (function (p1__11412_SHARP_){return Date.parse(p1__11412_SHARP_.getResponseHeader("Last-Modified"));
});})(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax))
;((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function() { 
var do_poll__delegate = function (p__11416){var vec__11418 = p__11416;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11418,0,null);var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11418,1,null);var xhr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11418,2,null);if(cljs.core.truth_(xhr))
{cljs.core.reset_BANG_(last_mod,xhr_mod(xhr));
} else
{}
if((cljs.core.not(xhr)) || (xhr_dev_QMARK_(xhr)))
{return setTimeout(((function (vec__11418,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function (){return do_ajax(xhr_opts,do_poll);
});})(vec__11418,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod))
,interval);
} else
{return null;
}
};
var do_poll = function (var_args){
var p__11416 = null;if (arguments.length > 0) {
  p__11416 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do_poll__delegate.call(this,p__11416);};
do_poll.cljs$lang$maxFixedArity = 0;
do_poll.cljs$lang$applyTo = (function (arglist__11419){
var p__11416 = cljs.core.seq(arglist__11419);
return do_poll__delegate(p__11416);
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
tailrecursion.hoplon.reload.on_modified = (function on_modified(url,interval,callback){return cljs.core.add_watch(tailrecursion.hoplon.reload.file_modified_atom(url,(function (){var or__7452__auto__ = interval;if(cljs.core.truth_(or__7452__auto__))
{return or__7452__auto__;
} else
{return 100;
}
})()),null,(function (p1__11422_SHARP_,p2__11423_SHARP_,p3__11420_SHARP_,p4__11421_SHARP_){if(cljs.core.truth_((function (){var and__7440__auto__ = p3__11420_SHARP_;if(cljs.core.truth_(and__7440__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p3__11420_SHARP_,p4__11421_SHARP_);
} else
{return and__7440__auto__;
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
var reload_js__delegate = function (p__11424){var vec__11426 = p__11424;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11426,0,null);return tailrecursion.hoplon.reload.on_modified("main.js",interval,((function (vec__11426,interval){
return (function (){return window.location.reload();
});})(vec__11426,interval))
);
};
var reload_js = function (var_args){
var p__11424 = null;if (arguments.length > 0) {
  p__11424 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_js__delegate.call(this,p__11424);};
reload_js.cljs$lang$maxFixedArity = 0;
reload_js.cljs$lang$applyTo = (function (arglist__11427){
var p__11424 = cljs.core.seq(arglist__11427);
return reload_js__delegate(p__11424);
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
var reload_css__delegate = function (p__11429){var vec__11447 = p__11429;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11447,0,null);return ((function (vec__11447,interval){
return (function wait_css(){var css = document.styleSheets;var each = cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length);var css_seq = cljs.core.keep(((function (css,each,vec__11447,interval){
return (function (p1__11428_SHARP_){return p1__11428_SHARP_.href;
});})(css,each,vec__11447,interval))
,(function (){var iter__8177__auto__ = ((function (css,each,vec__11447,interval){
return (function iter__11456(s__11457){return (new cljs.core.LazySeq(null,((function (css,each,vec__11447,interval){
return (function (){var s__11457__$1 = s__11457;while(true){
var temp__4092__auto__ = cljs.core.seq(s__11457__$1);if(temp__4092__auto__)
{var s__11457__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__11457__$2))
{var c__8175__auto__ = cljs.core.chunk_first(s__11457__$2);var size__8176__auto__ = cljs.core.count(c__8175__auto__);var b__11459 = cljs.core.chunk_buffer(size__8176__auto__);if((function (){var i__11458 = 0;while(true){
if((i__11458 < size__8176__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8175__auto__,i__11458);cljs.core.chunk_append(b__11459,(css[s]));
{
var G__11464 = (i__11458 + 1);
i__11458 = G__11464;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__11459),iter__11456(cljs.core.chunk_rest(s__11457__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__11459),null);
}
} else
{var s = cljs.core.first(s__11457__$2);return cljs.core.cons((css[s]),iter__11456(cljs.core.rest(s__11457__$2)));
}
} else
{return null;
}
break;
}
});})(css,each,vec__11447,interval))
,null,null));
});})(css,each,vec__11447,interval))
;return iter__8177__auto__(each);
})());if(cljs.core.not(cljs.core.seq(css_seq)))
{return setTimeout(wait_css,(function (){var or__7452__auto__ = interval;if(cljs.core.truth_(or__7452__auto__))
{return or__7452__auto__;
} else
{return 100;
}
})());
} else
{var seq__11460 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length));var chunk__11461 = null;var count__11462 = 0;var i__11463 = 0;while(true){
if((i__11463 < count__11462))
{var s = chunk__11461.cljs$core$IIndexed$_nth$arity$2(null,i__11463);var temp__4092__auto___11465 = (css[s]);if(cljs.core.truth_(temp__4092__auto___11465))
{var sheet_11466 = temp__4092__auto___11465;var temp__4092__auto___11467__$1 = sheet_11466.href;if(cljs.core.truth_(temp__4092__auto___11467__$1))
{var href_11468 = temp__4092__auto___11467__$1;tailrecursion.hoplon.reload.on_modified(href_11468,interval,((function (seq__11460,chunk__11461,count__11462,i__11463,href_11468,temp__4092__auto___11467__$1,sheet_11466,temp__4092__auto___11465,s,css,each,css_seq,vec__11447,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__11460,chunk__11461,count__11462,i__11463,href_11468,temp__4092__auto___11467__$1,sheet_11466,temp__4092__auto___11465,s,css,each,css_seq,vec__11447,interval))
);
} else
{}
} else
{}
{
var G__11469 = seq__11460;
var G__11470 = chunk__11461;
var G__11471 = count__11462;
var G__11472 = (i__11463 + 1);
seq__11460 = G__11469;
chunk__11461 = G__11470;
count__11462 = G__11471;
i__11463 = G__11472;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__11460);if(temp__4092__auto__)
{var seq__11460__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11460__$1))
{var c__8208__auto__ = cljs.core.chunk_first(seq__11460__$1);{
var G__11473 = cljs.core.chunk_rest(seq__11460__$1);
var G__11474 = c__8208__auto__;
var G__11475 = cljs.core.count(c__8208__auto__);
var G__11476 = 0;
seq__11460 = G__11473;
chunk__11461 = G__11474;
count__11462 = G__11475;
i__11463 = G__11476;
continue;
}
} else
{var s = cljs.core.first(seq__11460__$1);var temp__4092__auto___11477__$1 = (css[s]);if(cljs.core.truth_(temp__4092__auto___11477__$1))
{var sheet_11478 = temp__4092__auto___11477__$1;var temp__4092__auto___11479__$2 = sheet_11478.href;if(cljs.core.truth_(temp__4092__auto___11479__$2))
{var href_11480 = temp__4092__auto___11479__$2;tailrecursion.hoplon.reload.on_modified(href_11480,interval,((function (seq__11460,chunk__11461,count__11462,i__11463,href_11480,temp__4092__auto___11479__$2,sheet_11478,temp__4092__auto___11477__$1,s,seq__11460__$1,temp__4092__auto__,css,each,css_seq,vec__11447,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__11460,chunk__11461,count__11462,i__11463,href_11480,temp__4092__auto___11479__$2,sheet_11478,temp__4092__auto___11477__$1,s,seq__11460__$1,temp__4092__auto__,css,each,css_seq,vec__11447,interval))
);
} else
{}
} else
{}
{
var G__11481 = cljs.core.next(seq__11460__$1);
var G__11482 = null;
var G__11483 = 0;
var G__11484 = 0;
seq__11460 = G__11481;
chunk__11461 = G__11482;
count__11462 = G__11483;
i__11463 = G__11484;
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
});})(vec__11447,interval))
.call(null);
};
var reload_css = function (var_args){
var p__11429 = null;if (arguments.length > 0) {
  p__11429 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_css__delegate.call(this,p__11429);};
reload_css.cljs$lang$maxFixedArity = 0;
reload_css.cljs$lang$applyTo = (function (arglist__11485){
var p__11429 = cljs.core.seq(arglist__11485);
return reload_css__delegate(p__11429);
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
var reload_all__delegate = function (p__11486){var vec__11488 = p__11486;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11488,0,null);tailrecursion.hoplon.reload.reload_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
return tailrecursion.hoplon.reload.reload_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
};
var reload_all = function (var_args){
var p__11486 = null;if (arguments.length > 0) {
  p__11486 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_all__delegate.call(this,p__11486);};
reload_all.cljs$lang$maxFixedArity = 0;
reload_all.cljs$lang$applyTo = (function (arglist__11489){
var p__11486 = cljs.core.seq(arglist__11489);
return reload_all__delegate(p__11486);
});
reload_all.cljs$core$IFn$_invoke$arity$variadic = reload_all__delegate;
return reload_all;
})()
;
