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
return (function (p1__9695_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",p1__9695_SHARP_.getResponseHeader("X-Dev-Mode"));
});})(last_mod,xhr_opts))
;var do_ajax = ((function (last_mod,xhr_opts,xhr_dev_QMARK_){
return (function (p1__9696_SHARP_,p2__9697_SHARP_){return jQuery.ajax(cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9696_SHARP_,cljs.core.constant$keyword$41,p2__9697_SHARP_)));
});})(last_mod,xhr_opts,xhr_dev_QMARK_))
;var xhr_mod = ((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax){
return (function (p1__9698_SHARP_){return Date.parse(p1__9698_SHARP_.getResponseHeader("Last-Modified"));
});})(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax))
;((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function() { 
var do_poll__delegate = function (p__9702){var vec__9704 = p__9702;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9704,0,null);var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9704,1,null);var xhr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9704,2,null);if(cljs.core.truth_(xhr))
{cljs.core.reset_BANG_(last_mod,xhr_mod(xhr));
} else
{}
if((cljs.core.not(xhr)) || (xhr_dev_QMARK_(xhr)))
{return setTimeout(((function (vec__9704,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function (){return do_ajax(xhr_opts,do_poll);
});})(vec__9704,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod))
,interval);
} else
{return null;
}
};
var do_poll = function (var_args){
var p__9702 = null;if (arguments.length > 0) {
  p__9702 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do_poll__delegate.call(this,p__9702);};
do_poll.cljs$lang$maxFixedArity = 0;
do_poll.cljs$lang$applyTo = (function (arglist__9705){
var p__9702 = cljs.core.seq(arglist__9705);
return do_poll__delegate(p__9702);
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
tailrecursion.hoplon.reload.on_modified = (function on_modified(url,interval,callback){return cljs.core.add_watch(tailrecursion.hoplon.reload.file_modified_atom(url,(function (){var or__7267__auto__ = interval;if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return 100;
}
})()),null,(function (p1__9708_SHARP_,p2__9709_SHARP_,p3__9706_SHARP_,p4__9707_SHARP_){if(cljs.core.truth_((function (){var and__7255__auto__ = p3__9706_SHARP_;if(cljs.core.truth_(and__7255__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p3__9706_SHARP_,p4__9707_SHARP_);
} else
{return and__7255__auto__;
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
var reload_js__delegate = function (p__9710){var vec__9712 = p__9710;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9712,0,null);return tailrecursion.hoplon.reload.on_modified("main.js",interval,((function (vec__9712,interval){
return (function (){return window.location.reload();
});})(vec__9712,interval))
);
};
var reload_js = function (var_args){
var p__9710 = null;if (arguments.length > 0) {
  p__9710 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_js__delegate.call(this,p__9710);};
reload_js.cljs$lang$maxFixedArity = 0;
reload_js.cljs$lang$applyTo = (function (arglist__9713){
var p__9710 = cljs.core.seq(arglist__9713);
return reload_js__delegate(p__9710);
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
var reload_css__delegate = function (p__9715){var vec__9733 = p__9715;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9733,0,null);return ((function (vec__9733,interval){
return (function wait_css(){var css = document.styleSheets;var each = cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length);var css_seq = cljs.core.keep(((function (css,each,vec__9733,interval){
return (function (p1__9714_SHARP_){return p1__9714_SHARP_.href;
});})(css,each,vec__9733,interval))
,(function (){var iter__7992__auto__ = ((function (css,each,vec__9733,interval){
return (function iter__9742(s__9743){return (new cljs.core.LazySeq(null,((function (css,each,vec__9733,interval){
return (function (){var s__9743__$1 = s__9743;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9743__$1);if(temp__4092__auto__)
{var s__9743__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9743__$2))
{var c__7990__auto__ = cljs.core.chunk_first(s__9743__$2);var size__7991__auto__ = cljs.core.count(c__7990__auto__);var b__9745 = cljs.core.chunk_buffer(size__7991__auto__);if((function (){var i__9744 = 0;while(true){
if((i__9744 < size__7991__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7990__auto__,i__9744);cljs.core.chunk_append(b__9745,(css[s]));
{
var G__9750 = (i__9744 + 1);
i__9744 = G__9750;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9745),iter__9742(cljs.core.chunk_rest(s__9743__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9745),null);
}
} else
{var s = cljs.core.first(s__9743__$2);return cljs.core.cons((css[s]),iter__9742(cljs.core.rest(s__9743__$2)));
}
} else
{return null;
}
break;
}
});})(css,each,vec__9733,interval))
,null,null));
});})(css,each,vec__9733,interval))
;return iter__7992__auto__(each);
})());if(cljs.core.not(cljs.core.seq(css_seq)))
{return setTimeout(wait_css,(function (){var or__7267__auto__ = interval;if(cljs.core.truth_(or__7267__auto__))
{return or__7267__auto__;
} else
{return 100;
}
})());
} else
{var seq__9746 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length));var chunk__9747 = null;var count__9748 = 0;var i__9749 = 0;while(true){
if((i__9749 < count__9748))
{var s = chunk__9747.cljs$core$IIndexed$_nth$arity$2(null,i__9749);var temp__4092__auto___9751 = (css[s]);if(cljs.core.truth_(temp__4092__auto___9751))
{var sheet_9752 = temp__4092__auto___9751;var temp__4092__auto___9753__$1 = sheet_9752.href;if(cljs.core.truth_(temp__4092__auto___9753__$1))
{var href_9754 = temp__4092__auto___9753__$1;tailrecursion.hoplon.reload.on_modified(href_9754,interval,((function (seq__9746,chunk__9747,count__9748,i__9749,href_9754,temp__4092__auto___9753__$1,sheet_9752,temp__4092__auto___9751,s,css,each,css_seq,vec__9733,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__9746,chunk__9747,count__9748,i__9749,href_9754,temp__4092__auto___9753__$1,sheet_9752,temp__4092__auto___9751,s,css,each,css_seq,vec__9733,interval))
);
} else
{}
} else
{}
{
var G__9755 = seq__9746;
var G__9756 = chunk__9747;
var G__9757 = count__9748;
var G__9758 = (i__9749 + 1);
seq__9746 = G__9755;
chunk__9747 = G__9756;
count__9748 = G__9757;
i__9749 = G__9758;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9746);if(temp__4092__auto__)
{var seq__9746__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9746__$1))
{var c__8023__auto__ = cljs.core.chunk_first(seq__9746__$1);{
var G__9759 = cljs.core.chunk_rest(seq__9746__$1);
var G__9760 = c__8023__auto__;
var G__9761 = cljs.core.count(c__8023__auto__);
var G__9762 = 0;
seq__9746 = G__9759;
chunk__9747 = G__9760;
count__9748 = G__9761;
i__9749 = G__9762;
continue;
}
} else
{var s = cljs.core.first(seq__9746__$1);var temp__4092__auto___9763__$1 = (css[s]);if(cljs.core.truth_(temp__4092__auto___9763__$1))
{var sheet_9764 = temp__4092__auto___9763__$1;var temp__4092__auto___9765__$2 = sheet_9764.href;if(cljs.core.truth_(temp__4092__auto___9765__$2))
{var href_9766 = temp__4092__auto___9765__$2;tailrecursion.hoplon.reload.on_modified(href_9766,interval,((function (seq__9746,chunk__9747,count__9748,i__9749,href_9766,temp__4092__auto___9765__$2,sheet_9764,temp__4092__auto___9763__$1,s,seq__9746__$1,temp__4092__auto__,css,each,css_seq,vec__9733,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__9746,chunk__9747,count__9748,i__9749,href_9766,temp__4092__auto___9765__$2,sheet_9764,temp__4092__auto___9763__$1,s,seq__9746__$1,temp__4092__auto__,css,each,css_seq,vec__9733,interval))
);
} else
{}
} else
{}
{
var G__9767 = cljs.core.next(seq__9746__$1);
var G__9768 = null;
var G__9769 = 0;
var G__9770 = 0;
seq__9746 = G__9767;
chunk__9747 = G__9768;
count__9748 = G__9769;
i__9749 = G__9770;
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
});})(vec__9733,interval))
.call(null);
};
var reload_css = function (var_args){
var p__9715 = null;if (arguments.length > 0) {
  p__9715 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_css__delegate.call(this,p__9715);};
reload_css.cljs$lang$maxFixedArity = 0;
reload_css.cljs$lang$applyTo = (function (arglist__9771){
var p__9715 = cljs.core.seq(arglist__9771);
return reload_css__delegate(p__9715);
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
var reload_all__delegate = function (p__9772){var vec__9774 = p__9772;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9774,0,null);tailrecursion.hoplon.reload.reload_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
return tailrecursion.hoplon.reload.reload_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
};
var reload_all = function (var_args){
var p__9772 = null;if (arguments.length > 0) {
  p__9772 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_all__delegate.call(this,p__9772);};
reload_all.cljs$lang$maxFixedArity = 0;
reload_all.cljs$lang$applyTo = (function (arglist__9775){
var p__9772 = cljs.core.seq(arglist__9775);
return reload_all__delegate(p__9772);
});
reload_all.cljs$core$IFn$_invoke$arity$variadic = reload_all__delegate;
return reload_all;
})()
;
