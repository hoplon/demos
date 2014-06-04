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
return (function (p1__9591_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",p1__9591_SHARP_.getResponseHeader("X-Dev-Mode"));
});})(last_mod,xhr_opts))
;var do_ajax = ((function (last_mod,xhr_opts,xhr_dev_QMARK_){
return (function (p1__9592_SHARP_,p2__9593_SHARP_){return jQuery.ajax(cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9592_SHARP_,cljs.core.constant$keyword$41,p2__9593_SHARP_)));
});})(last_mod,xhr_opts,xhr_dev_QMARK_))
;var xhr_mod = ((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax){
return (function (p1__9594_SHARP_){return Date.parse(p1__9594_SHARP_.getResponseHeader("Last-Modified"));
});})(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax))
;((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function() { 
var do_poll__delegate = function (p__9598){var vec__9600 = p__9598;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9600,0,null);var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9600,1,null);var xhr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9600,2,null);if(cljs.core.truth_(xhr))
{cljs.core.reset_BANG_(last_mod,xhr_mod(xhr));
} else
{}
if((cljs.core.not(xhr)) || (xhr_dev_QMARK_(xhr)))
{return setTimeout(((function (vec__9600,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function (){return do_ajax(xhr_opts,do_poll);
});})(vec__9600,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod))
,interval);
} else
{return null;
}
};
var do_poll = function (var_args){
var p__9598 = null;if (arguments.length > 0) {
  p__9598 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do_poll__delegate.call(this,p__9598);};
do_poll.cljs$lang$maxFixedArity = 0;
do_poll.cljs$lang$applyTo = (function (arglist__9601){
var p__9598 = cljs.core.seq(arglist__9601);
return do_poll__delegate(p__9598);
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
tailrecursion.hoplon.reload.on_modified = (function on_modified(url,interval,callback){return cljs.core.add_watch(tailrecursion.hoplon.reload.file_modified_atom(url,(function (){var or__7269__auto__ = interval;if(cljs.core.truth_(or__7269__auto__))
{return or__7269__auto__;
} else
{return 100;
}
})()),null,(function (p1__9604_SHARP_,p2__9605_SHARP_,p3__9602_SHARP_,p4__9603_SHARP_){if(cljs.core.truth_((function (){var and__7257__auto__ = p3__9602_SHARP_;if(cljs.core.truth_(and__7257__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p3__9602_SHARP_,p4__9603_SHARP_);
} else
{return and__7257__auto__;
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
var reload_js__delegate = function (p__9606){var vec__9608 = p__9606;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9608,0,null);return tailrecursion.hoplon.reload.on_modified("main.js",interval,((function (vec__9608,interval){
return (function (){return window.location.reload();
});})(vec__9608,interval))
);
};
var reload_js = function (var_args){
var p__9606 = null;if (arguments.length > 0) {
  p__9606 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_js__delegate.call(this,p__9606);};
reload_js.cljs$lang$maxFixedArity = 0;
reload_js.cljs$lang$applyTo = (function (arglist__9609){
var p__9606 = cljs.core.seq(arglist__9609);
return reload_js__delegate(p__9606);
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
var reload_css__delegate = function (p__9611){var vec__9629 = p__9611;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9629,0,null);return ((function (vec__9629,interval){
return (function wait_css(){var css = document.styleSheets;var each = cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length);var css_seq = cljs.core.keep(((function (css,each,vec__9629,interval){
return (function (p1__9610_SHARP_){return p1__9610_SHARP_.href;
});})(css,each,vec__9629,interval))
,(function (){var iter__7994__auto__ = ((function (css,each,vec__9629,interval){
return (function iter__9638(s__9639){return (new cljs.core.LazySeq(null,((function (css,each,vec__9629,interval){
return (function (){var s__9639__$1 = s__9639;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9639__$1);if(temp__4092__auto__)
{var s__9639__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9639__$2))
{var c__7992__auto__ = cljs.core.chunk_first(s__9639__$2);var size__7993__auto__ = cljs.core.count(c__7992__auto__);var b__9641 = cljs.core.chunk_buffer(size__7993__auto__);if((function (){var i__9640 = 0;while(true){
if((i__9640 < size__7993__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7992__auto__,i__9640);cljs.core.chunk_append(b__9641,(css[s]));
{
var G__9646 = (i__9640 + 1);
i__9640 = G__9646;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9641),iter__9638(cljs.core.chunk_rest(s__9639__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9641),null);
}
} else
{var s = cljs.core.first(s__9639__$2);return cljs.core.cons((css[s]),iter__9638(cljs.core.rest(s__9639__$2)));
}
} else
{return null;
}
break;
}
});})(css,each,vec__9629,interval))
,null,null));
});})(css,each,vec__9629,interval))
;return iter__7994__auto__(each);
})());if(cljs.core.not(cljs.core.seq(css_seq)))
{return setTimeout(wait_css,(function (){var or__7269__auto__ = interval;if(cljs.core.truth_(or__7269__auto__))
{return or__7269__auto__;
} else
{return 100;
}
})());
} else
{var seq__9642 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length));var chunk__9643 = null;var count__9644 = 0;var i__9645 = 0;while(true){
if((i__9645 < count__9644))
{var s = chunk__9643.cljs$core$IIndexed$_nth$arity$2(null,i__9645);var temp__4092__auto___9647 = (css[s]);if(cljs.core.truth_(temp__4092__auto___9647))
{var sheet_9648 = temp__4092__auto___9647;var temp__4092__auto___9649__$1 = sheet_9648.href;if(cljs.core.truth_(temp__4092__auto___9649__$1))
{var href_9650 = temp__4092__auto___9649__$1;tailrecursion.hoplon.reload.on_modified(href_9650,interval,((function (seq__9642,chunk__9643,count__9644,i__9645,href_9650,temp__4092__auto___9649__$1,sheet_9648,temp__4092__auto___9647,s,css,each,css_seq,vec__9629,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__9642,chunk__9643,count__9644,i__9645,href_9650,temp__4092__auto___9649__$1,sheet_9648,temp__4092__auto___9647,s,css,each,css_seq,vec__9629,interval))
);
} else
{}
} else
{}
{
var G__9651 = seq__9642;
var G__9652 = chunk__9643;
var G__9653 = count__9644;
var G__9654 = (i__9645 + 1);
seq__9642 = G__9651;
chunk__9643 = G__9652;
count__9644 = G__9653;
i__9645 = G__9654;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9642);if(temp__4092__auto__)
{var seq__9642__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9642__$1))
{var c__8025__auto__ = cljs.core.chunk_first(seq__9642__$1);{
var G__9655 = cljs.core.chunk_rest(seq__9642__$1);
var G__9656 = c__8025__auto__;
var G__9657 = cljs.core.count(c__8025__auto__);
var G__9658 = 0;
seq__9642 = G__9655;
chunk__9643 = G__9656;
count__9644 = G__9657;
i__9645 = G__9658;
continue;
}
} else
{var s = cljs.core.first(seq__9642__$1);var temp__4092__auto___9659__$1 = (css[s]);if(cljs.core.truth_(temp__4092__auto___9659__$1))
{var sheet_9660 = temp__4092__auto___9659__$1;var temp__4092__auto___9661__$2 = sheet_9660.href;if(cljs.core.truth_(temp__4092__auto___9661__$2))
{var href_9662 = temp__4092__auto___9661__$2;tailrecursion.hoplon.reload.on_modified(href_9662,interval,((function (seq__9642,chunk__9643,count__9644,i__9645,href_9662,temp__4092__auto___9661__$2,sheet_9660,temp__4092__auto___9659__$1,s,seq__9642__$1,temp__4092__auto__,css,each,css_seq,vec__9629,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__9642,chunk__9643,count__9644,i__9645,href_9662,temp__4092__auto___9661__$2,sheet_9660,temp__4092__auto___9659__$1,s,seq__9642__$1,temp__4092__auto__,css,each,css_seq,vec__9629,interval))
);
} else
{}
} else
{}
{
var G__9663 = cljs.core.next(seq__9642__$1);
var G__9664 = null;
var G__9665 = 0;
var G__9666 = 0;
seq__9642 = G__9663;
chunk__9643 = G__9664;
count__9644 = G__9665;
i__9645 = G__9666;
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
});})(vec__9629,interval))
.call(null);
};
var reload_css = function (var_args){
var p__9611 = null;if (arguments.length > 0) {
  p__9611 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_css__delegate.call(this,p__9611);};
reload_css.cljs$lang$maxFixedArity = 0;
reload_css.cljs$lang$applyTo = (function (arglist__9667){
var p__9611 = cljs.core.seq(arglist__9667);
return reload_css__delegate(p__9611);
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
var reload_all__delegate = function (p__9668){var vec__9670 = p__9668;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9670,0,null);tailrecursion.hoplon.reload.reload_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
return tailrecursion.hoplon.reload.reload_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
};
var reload_all = function (var_args){
var p__9668 = null;if (arguments.length > 0) {
  p__9668 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_all__delegate.call(this,p__9668);};
reload_all.cljs$lang$maxFixedArity = 0;
reload_all.cljs$lang$applyTo = (function (arglist__9671){
var p__9668 = cljs.core.seq(arglist__9671);
return reload_all__delegate(p__9668);
});
reload_all.cljs$core$IFn$_invoke$arity$variadic = reload_all__delegate;
return reload_all;
})()
;
