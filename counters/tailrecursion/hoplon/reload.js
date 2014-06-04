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
return (function (p1__9469_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",p1__9469_SHARP_.getResponseHeader("X-Dev-Mode"));
});})(last_mod,xhr_opts))
;var do_ajax = ((function (last_mod,xhr_opts,xhr_dev_QMARK_){
return (function (p1__9470_SHARP_,p2__9471_SHARP_){return jQuery.ajax(cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9470_SHARP_,cljs.core.constant$keyword$41,p2__9471_SHARP_)));
});})(last_mod,xhr_opts,xhr_dev_QMARK_))
;var xhr_mod = ((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax){
return (function (p1__9472_SHARP_){return Date.parse(p1__9472_SHARP_.getResponseHeader("Last-Modified"));
});})(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax))
;((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function() { 
var do_poll__delegate = function (p__9476){var vec__9478 = p__9476;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9478,0,null);var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9478,1,null);var xhr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9478,2,null);if(cljs.core.truth_(xhr))
{cljs.core.reset_BANG_(last_mod,xhr_mod(xhr));
} else
{}
if((cljs.core.not(xhr)) || (xhr_dev_QMARK_(xhr)))
{return setTimeout(((function (vec__9478,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function (){return do_ajax(xhr_opts,do_poll);
});})(vec__9478,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod))
,interval);
} else
{return null;
}
};
var do_poll = function (var_args){
var p__9476 = null;if (arguments.length > 0) {
  p__9476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do_poll__delegate.call(this,p__9476);};
do_poll.cljs$lang$maxFixedArity = 0;
do_poll.cljs$lang$applyTo = (function (arglist__9479){
var p__9476 = cljs.core.seq(arglist__9479);
return do_poll__delegate(p__9476);
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
tailrecursion.hoplon.reload.on_modified = (function on_modified(url,interval,callback){return cljs.core.add_watch(tailrecursion.hoplon.reload.file_modified_atom(url,(function (){var or__7263__auto__ = interval;if(cljs.core.truth_(or__7263__auto__))
{return or__7263__auto__;
} else
{return 100;
}
})()),null,(function (p1__9482_SHARP_,p2__9483_SHARP_,p3__9480_SHARP_,p4__9481_SHARP_){if(cljs.core.truth_((function (){var and__7251__auto__ = p3__9480_SHARP_;if(cljs.core.truth_(and__7251__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p3__9480_SHARP_,p4__9481_SHARP_);
} else
{return and__7251__auto__;
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
var reload_js__delegate = function (p__9484){var vec__9486 = p__9484;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9486,0,null);return tailrecursion.hoplon.reload.on_modified("main.js",interval,((function (vec__9486,interval){
return (function (){return window.location.reload();
});})(vec__9486,interval))
);
};
var reload_js = function (var_args){
var p__9484 = null;if (arguments.length > 0) {
  p__9484 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_js__delegate.call(this,p__9484);};
reload_js.cljs$lang$maxFixedArity = 0;
reload_js.cljs$lang$applyTo = (function (arglist__9487){
var p__9484 = cljs.core.seq(arglist__9487);
return reload_js__delegate(p__9484);
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
var reload_css__delegate = function (p__9489){var vec__9507 = p__9489;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9507,0,null);return ((function (vec__9507,interval){
return (function wait_css(){var css = document.styleSheets;var each = cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length);var css_seq = cljs.core.keep(((function (css,each,vec__9507,interval){
return (function (p1__9488_SHARP_){return p1__9488_SHARP_.href;
});})(css,each,vec__9507,interval))
,(function (){var iter__7988__auto__ = ((function (css,each,vec__9507,interval){
return (function iter__9516(s__9517){return (new cljs.core.LazySeq(null,((function (css,each,vec__9507,interval){
return (function (){var s__9517__$1 = s__9517;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9517__$1);if(temp__4092__auto__)
{var s__9517__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9517__$2))
{var c__7986__auto__ = cljs.core.chunk_first(s__9517__$2);var size__7987__auto__ = cljs.core.count(c__7986__auto__);var b__9519 = cljs.core.chunk_buffer(size__7987__auto__);if((function (){var i__9518 = 0;while(true){
if((i__9518 < size__7987__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7986__auto__,i__9518);cljs.core.chunk_append(b__9519,(css[s]));
{
var G__9524 = (i__9518 + 1);
i__9518 = G__9524;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9519),iter__9516(cljs.core.chunk_rest(s__9517__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9519),null);
}
} else
{var s = cljs.core.first(s__9517__$2);return cljs.core.cons((css[s]),iter__9516(cljs.core.rest(s__9517__$2)));
}
} else
{return null;
}
break;
}
});})(css,each,vec__9507,interval))
,null,null));
});})(css,each,vec__9507,interval))
;return iter__7988__auto__(each);
})());if(cljs.core.not(cljs.core.seq(css_seq)))
{return setTimeout(wait_css,(function (){var or__7263__auto__ = interval;if(cljs.core.truth_(or__7263__auto__))
{return or__7263__auto__;
} else
{return 100;
}
})());
} else
{var seq__9520 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length));var chunk__9521 = null;var count__9522 = 0;var i__9523 = 0;while(true){
if((i__9523 < count__9522))
{var s = chunk__9521.cljs$core$IIndexed$_nth$arity$2(null,i__9523);var temp__4092__auto___9525 = (css[s]);if(cljs.core.truth_(temp__4092__auto___9525))
{var sheet_9526 = temp__4092__auto___9525;var temp__4092__auto___9527__$1 = sheet_9526.href;if(cljs.core.truth_(temp__4092__auto___9527__$1))
{var href_9528 = temp__4092__auto___9527__$1;tailrecursion.hoplon.reload.on_modified(href_9528,interval,((function (seq__9520,chunk__9521,count__9522,i__9523,href_9528,temp__4092__auto___9527__$1,sheet_9526,temp__4092__auto___9525,s,css,each,css_seq,vec__9507,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__9520,chunk__9521,count__9522,i__9523,href_9528,temp__4092__auto___9527__$1,sheet_9526,temp__4092__auto___9525,s,css,each,css_seq,vec__9507,interval))
);
} else
{}
} else
{}
{
var G__9529 = seq__9520;
var G__9530 = chunk__9521;
var G__9531 = count__9522;
var G__9532 = (i__9523 + 1);
seq__9520 = G__9529;
chunk__9521 = G__9530;
count__9522 = G__9531;
i__9523 = G__9532;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9520);if(temp__4092__auto__)
{var seq__9520__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9520__$1))
{var c__8019__auto__ = cljs.core.chunk_first(seq__9520__$1);{
var G__9533 = cljs.core.chunk_rest(seq__9520__$1);
var G__9534 = c__8019__auto__;
var G__9535 = cljs.core.count(c__8019__auto__);
var G__9536 = 0;
seq__9520 = G__9533;
chunk__9521 = G__9534;
count__9522 = G__9535;
i__9523 = G__9536;
continue;
}
} else
{var s = cljs.core.first(seq__9520__$1);var temp__4092__auto___9537__$1 = (css[s]);if(cljs.core.truth_(temp__4092__auto___9537__$1))
{var sheet_9538 = temp__4092__auto___9537__$1;var temp__4092__auto___9539__$2 = sheet_9538.href;if(cljs.core.truth_(temp__4092__auto___9539__$2))
{var href_9540 = temp__4092__auto___9539__$2;tailrecursion.hoplon.reload.on_modified(href_9540,interval,((function (seq__9520,chunk__9521,count__9522,i__9523,href_9540,temp__4092__auto___9539__$2,sheet_9538,temp__4092__auto___9537__$1,s,seq__9520__$1,temp__4092__auto__,css,each,css_seq,vec__9507,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__9520,chunk__9521,count__9522,i__9523,href_9540,temp__4092__auto___9539__$2,sheet_9538,temp__4092__auto___9537__$1,s,seq__9520__$1,temp__4092__auto__,css,each,css_seq,vec__9507,interval))
);
} else
{}
} else
{}
{
var G__9541 = cljs.core.next(seq__9520__$1);
var G__9542 = null;
var G__9543 = 0;
var G__9544 = 0;
seq__9520 = G__9541;
chunk__9521 = G__9542;
count__9522 = G__9543;
i__9523 = G__9544;
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
});})(vec__9507,interval))
.call(null);
};
var reload_css = function (var_args){
var p__9489 = null;if (arguments.length > 0) {
  p__9489 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_css__delegate.call(this,p__9489);};
reload_css.cljs$lang$maxFixedArity = 0;
reload_css.cljs$lang$applyTo = (function (arglist__9545){
var p__9489 = cljs.core.seq(arglist__9545);
return reload_css__delegate(p__9489);
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
var reload_all__delegate = function (p__9546){var vec__9548 = p__9546;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9548,0,null);tailrecursion.hoplon.reload.reload_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
return tailrecursion.hoplon.reload.reload_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
};
var reload_all = function (var_args){
var p__9546 = null;if (arguments.length > 0) {
  p__9546 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_all__delegate.call(this,p__9546);};
reload_all.cljs$lang$maxFixedArity = 0;
reload_all.cljs$lang$applyTo = (function (arglist__9549){
var p__9546 = cljs.core.seq(arglist__9549);
return reload_all__delegate(p__9546);
});
reload_all.cljs$core$IFn$_invoke$arity$variadic = reload_all__delegate;
return reload_all;
})()
;
