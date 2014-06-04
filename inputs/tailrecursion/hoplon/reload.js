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
tailrecursion.hoplon.reload.file_modified_atom = (function file_modified_atom(url,interval){var last_mod = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var xhr_opts = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$38,url,cljs.core.constant$keyword$39,"HEAD",cljs.core.constant$keyword$40,"text"], null);var xhr_dev_QMARK_ = ((function (last_mod,xhr_opts){
return (function (p1__9537_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",p1__9537_SHARP_.getResponseHeader("X-Dev-Mode"));
});})(last_mod,xhr_opts))
;var do_ajax = ((function (last_mod,xhr_opts,xhr_dev_QMARK_){
return (function (p1__9538_SHARP_,p2__9539_SHARP_){return jQuery.ajax(cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9538_SHARP_,cljs.core.constant$keyword$41,p2__9539_SHARP_)));
});})(last_mod,xhr_opts,xhr_dev_QMARK_))
;var xhr_mod = ((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax){
return (function (p1__9540_SHARP_){return Date.parse(p1__9540_SHARP_.getResponseHeader("Last-Modified"));
});})(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax))
;((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function() { 
var do_poll__delegate = function (p__9544){var vec__9546 = p__9544;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9546,0,null);var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9546,1,null);var xhr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9546,2,null);if(cljs.core.truth_(xhr))
{cljs.core.reset_BANG_(last_mod,xhr_mod(xhr));
} else
{}
if((cljs.core.not(xhr)) || (xhr_dev_QMARK_(xhr)))
{return setTimeout(((function (vec__9546,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function (){return do_ajax(xhr_opts,do_poll);
});})(vec__9546,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod))
,interval);
} else
{return null;
}
};
var do_poll = function (var_args){
var p__9544 = null;if (arguments.length > 0) {
  p__9544 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do_poll__delegate.call(this,p__9544);};
do_poll.cljs$lang$maxFixedArity = 0;
do_poll.cljs$lang$applyTo = (function (arglist__9547){
var p__9544 = cljs.core.seq(arglist__9547);
return do_poll__delegate(p__9544);
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
tailrecursion.hoplon.reload.on_modified = (function on_modified(url,interval,callback){return cljs.core.add_watch(tailrecursion.hoplon.reload.file_modified_atom(url,(function (){var or__7270__auto__ = interval;if(cljs.core.truth_(or__7270__auto__))
{return or__7270__auto__;
} else
{return 100;
}
})()),null,(function (p1__9550_SHARP_,p2__9551_SHARP_,p3__9548_SHARP_,p4__9549_SHARP_){if(cljs.core.truth_((function (){var and__7258__auto__ = p3__9548_SHARP_;if(cljs.core.truth_(and__7258__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p3__9548_SHARP_,p4__9549_SHARP_);
} else
{return and__7258__auto__;
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
var reload_js__delegate = function (p__9552){var vec__9554 = p__9552;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9554,0,null);return tailrecursion.hoplon.reload.on_modified("main.js",interval,((function (vec__9554,interval){
return (function (){return window.location.reload();
});})(vec__9554,interval))
);
};
var reload_js = function (var_args){
var p__9552 = null;if (arguments.length > 0) {
  p__9552 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_js__delegate.call(this,p__9552);};
reload_js.cljs$lang$maxFixedArity = 0;
reload_js.cljs$lang$applyTo = (function (arglist__9555){
var p__9552 = cljs.core.seq(arglist__9555);
return reload_js__delegate(p__9552);
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
var reload_css__delegate = function (p__9557){var vec__9575 = p__9557;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9575,0,null);return ((function (vec__9575,interval){
return (function wait_css(){var css = document.styleSheets;var each = cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length);var css_seq = cljs.core.keep(((function (css,each,vec__9575,interval){
return (function (p1__9556_SHARP_){return p1__9556_SHARP_.href;
});})(css,each,vec__9575,interval))
,(function (){var iter__7995__auto__ = ((function (css,each,vec__9575,interval){
return (function iter__9584(s__9585){return (new cljs.core.LazySeq(null,((function (css,each,vec__9575,interval){
return (function (){var s__9585__$1 = s__9585;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9585__$1);if(temp__4092__auto__)
{var s__9585__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9585__$2))
{var c__7993__auto__ = cljs.core.chunk_first(s__9585__$2);var size__7994__auto__ = cljs.core.count(c__7993__auto__);var b__9587 = cljs.core.chunk_buffer(size__7994__auto__);if((function (){var i__9586 = 0;while(true){
if((i__9586 < size__7994__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7993__auto__,i__9586);cljs.core.chunk_append(b__9587,(css[s]));
{
var G__9592 = (i__9586 + 1);
i__9586 = G__9592;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9587),iter__9584(cljs.core.chunk_rest(s__9585__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9587),null);
}
} else
{var s = cljs.core.first(s__9585__$2);return cljs.core.cons((css[s]),iter__9584(cljs.core.rest(s__9585__$2)));
}
} else
{return null;
}
break;
}
});})(css,each,vec__9575,interval))
,null,null));
});})(css,each,vec__9575,interval))
;return iter__7995__auto__(each);
})());if(cljs.core.not(cljs.core.seq(css_seq)))
{return setTimeout(wait_css,(function (){var or__7270__auto__ = interval;if(cljs.core.truth_(or__7270__auto__))
{return or__7270__auto__;
} else
{return 100;
}
})());
} else
{var seq__9588 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length));var chunk__9589 = null;var count__9590 = 0;var i__9591 = 0;while(true){
if((i__9591 < count__9590))
{var s = chunk__9589.cljs$core$IIndexed$_nth$arity$2(null,i__9591);var temp__4092__auto___9593 = (css[s]);if(cljs.core.truth_(temp__4092__auto___9593))
{var sheet_9594 = temp__4092__auto___9593;var temp__4092__auto___9595__$1 = sheet_9594.href;if(cljs.core.truth_(temp__4092__auto___9595__$1))
{var href_9596 = temp__4092__auto___9595__$1;tailrecursion.hoplon.reload.on_modified(href_9596,interval,((function (seq__9588,chunk__9589,count__9590,i__9591,href_9596,temp__4092__auto___9595__$1,sheet_9594,temp__4092__auto___9593,s,css,each,css_seq,vec__9575,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__9588,chunk__9589,count__9590,i__9591,href_9596,temp__4092__auto___9595__$1,sheet_9594,temp__4092__auto___9593,s,css,each,css_seq,vec__9575,interval))
);
} else
{}
} else
{}
{
var G__9597 = seq__9588;
var G__9598 = chunk__9589;
var G__9599 = count__9590;
var G__9600 = (i__9591 + 1);
seq__9588 = G__9597;
chunk__9589 = G__9598;
count__9590 = G__9599;
i__9591 = G__9600;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9588);if(temp__4092__auto__)
{var seq__9588__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9588__$1))
{var c__8026__auto__ = cljs.core.chunk_first(seq__9588__$1);{
var G__9601 = cljs.core.chunk_rest(seq__9588__$1);
var G__9602 = c__8026__auto__;
var G__9603 = cljs.core.count(c__8026__auto__);
var G__9604 = 0;
seq__9588 = G__9601;
chunk__9589 = G__9602;
count__9590 = G__9603;
i__9591 = G__9604;
continue;
}
} else
{var s = cljs.core.first(seq__9588__$1);var temp__4092__auto___9605__$1 = (css[s]);if(cljs.core.truth_(temp__4092__auto___9605__$1))
{var sheet_9606 = temp__4092__auto___9605__$1;var temp__4092__auto___9607__$2 = sheet_9606.href;if(cljs.core.truth_(temp__4092__auto___9607__$2))
{var href_9608 = temp__4092__auto___9607__$2;tailrecursion.hoplon.reload.on_modified(href_9608,interval,((function (seq__9588,chunk__9589,count__9590,i__9591,href_9608,temp__4092__auto___9607__$2,sheet_9606,temp__4092__auto___9605__$1,s,seq__9588__$1,temp__4092__auto__,css,each,css_seq,vec__9575,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__9588,chunk__9589,count__9590,i__9591,href_9608,temp__4092__auto___9607__$2,sheet_9606,temp__4092__auto___9605__$1,s,seq__9588__$1,temp__4092__auto__,css,each,css_seq,vec__9575,interval))
);
} else
{}
} else
{}
{
var G__9609 = cljs.core.next(seq__9588__$1);
var G__9610 = null;
var G__9611 = 0;
var G__9612 = 0;
seq__9588 = G__9609;
chunk__9589 = G__9610;
count__9590 = G__9611;
i__9591 = G__9612;
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
});})(vec__9575,interval))
.call(null);
};
var reload_css = function (var_args){
var p__9557 = null;if (arguments.length > 0) {
  p__9557 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_css__delegate.call(this,p__9557);};
reload_css.cljs$lang$maxFixedArity = 0;
reload_css.cljs$lang$applyTo = (function (arglist__9613){
var p__9557 = cljs.core.seq(arglist__9613);
return reload_css__delegate(p__9557);
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
var reload_all__delegate = function (p__9614){var vec__9616 = p__9614;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9616,0,null);tailrecursion.hoplon.reload.reload_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
return tailrecursion.hoplon.reload.reload_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
};
var reload_all = function (var_args){
var p__9614 = null;if (arguments.length > 0) {
  p__9614 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_all__delegate.call(this,p__9614);};
reload_all.cljs$lang$maxFixedArity = 0;
reload_all.cljs$lang$applyTo = (function (arglist__9617){
var p__9614 = cljs.core.seq(arglist__9617);
return reload_all__delegate(p__9614);
});
reload_all.cljs$core$IFn$_invoke$arity$variadic = reload_all__delegate;
return reload_all;
})()
;
