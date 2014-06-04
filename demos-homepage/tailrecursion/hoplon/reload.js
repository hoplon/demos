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
return (function (p1__9801_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",p1__9801_SHARP_.getResponseHeader("X-Dev-Mode"));
});})(last_mod,xhr_opts))
;var do_ajax = ((function (last_mod,xhr_opts,xhr_dev_QMARK_){
return (function (p1__9802_SHARP_,p2__9803_SHARP_){return jQuery.ajax(cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9802_SHARP_,cljs.core.constant$keyword$41,p2__9803_SHARP_)));
});})(last_mod,xhr_opts,xhr_dev_QMARK_))
;var xhr_mod = ((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax){
return (function (p1__9804_SHARP_){return Date.parse(p1__9804_SHARP_.getResponseHeader("Last-Modified"));
});})(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax))
;((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function() { 
var do_poll__delegate = function (p__9808){var vec__9810 = p__9808;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9810,0,null);var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9810,1,null);var xhr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9810,2,null);if(cljs.core.truth_(xhr))
{cljs.core.reset_BANG_(last_mod,xhr_mod(xhr));
} else
{}
if((cljs.core.not(xhr)) || (xhr_dev_QMARK_(xhr)))
{return setTimeout(((function (vec__9810,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function (){return do_ajax(xhr_opts,do_poll);
});})(vec__9810,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod))
,interval);
} else
{return null;
}
};
var do_poll = function (var_args){
var p__9808 = null;if (arguments.length > 0) {
  p__9808 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do_poll__delegate.call(this,p__9808);};
do_poll.cljs$lang$maxFixedArity = 0;
do_poll.cljs$lang$applyTo = (function (arglist__9811){
var p__9808 = cljs.core.seq(arglist__9811);
return do_poll__delegate(p__9808);
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
tailrecursion.hoplon.reload.on_modified = (function on_modified(url,interval,callback){return cljs.core.add_watch(tailrecursion.hoplon.reload.file_modified_atom(url,(function (){var or__7454__auto__ = interval;if(cljs.core.truth_(or__7454__auto__))
{return or__7454__auto__;
} else
{return 100;
}
})()),null,(function (p1__9814_SHARP_,p2__9815_SHARP_,p3__9812_SHARP_,p4__9813_SHARP_){if(cljs.core.truth_((function (){var and__7442__auto__ = p3__9812_SHARP_;if(cljs.core.truth_(and__7442__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p3__9812_SHARP_,p4__9813_SHARP_);
} else
{return and__7442__auto__;
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
var reload_js__delegate = function (p__9816){var vec__9818 = p__9816;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9818,0,null);return tailrecursion.hoplon.reload.on_modified("main.js",interval,((function (vec__9818,interval){
return (function (){return window.location.reload();
});})(vec__9818,interval))
);
};
var reload_js = function (var_args){
var p__9816 = null;if (arguments.length > 0) {
  p__9816 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_js__delegate.call(this,p__9816);};
reload_js.cljs$lang$maxFixedArity = 0;
reload_js.cljs$lang$applyTo = (function (arglist__9819){
var p__9816 = cljs.core.seq(arglist__9819);
return reload_js__delegate(p__9816);
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
var reload_css__delegate = function (p__9821){var vec__9839 = p__9821;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9839,0,null);return ((function (vec__9839,interval){
return (function wait_css(){var css = document.styleSheets;var each = cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length);var css_seq = cljs.core.keep(((function (css,each,vec__9839,interval){
return (function (p1__9820_SHARP_){return p1__9820_SHARP_.href;
});})(css,each,vec__9839,interval))
,(function (){var iter__8179__auto__ = ((function (css,each,vec__9839,interval){
return (function iter__9848(s__9849){return (new cljs.core.LazySeq(null,((function (css,each,vec__9839,interval){
return (function (){var s__9849__$1 = s__9849;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9849__$1);if(temp__4092__auto__)
{var s__9849__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9849__$2))
{var c__8177__auto__ = cljs.core.chunk_first(s__9849__$2);var size__8178__auto__ = cljs.core.count(c__8177__auto__);var b__9851 = cljs.core.chunk_buffer(size__8178__auto__);if((function (){var i__9850 = 0;while(true){
if((i__9850 < size__8178__auto__))
{var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8177__auto__,i__9850);cljs.core.chunk_append(b__9851,(css[s]));
{
var G__9856 = (i__9850 + 1);
i__9850 = G__9856;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9851),iter__9848(cljs.core.chunk_rest(s__9849__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9851),null);
}
} else
{var s = cljs.core.first(s__9849__$2);return cljs.core.cons((css[s]),iter__9848(cljs.core.rest(s__9849__$2)));
}
} else
{return null;
}
break;
}
});})(css,each,vec__9839,interval))
,null,null));
});})(css,each,vec__9839,interval))
;return iter__8179__auto__(each);
})());if(cljs.core.not(cljs.core.seq(css_seq)))
{return setTimeout(wait_css,(function (){var or__7454__auto__ = interval;if(cljs.core.truth_(or__7454__auto__))
{return or__7454__auto__;
} else
{return 100;
}
})());
} else
{var seq__9852 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(0,css.length));var chunk__9853 = null;var count__9854 = 0;var i__9855 = 0;while(true){
if((i__9855 < count__9854))
{var s = chunk__9853.cljs$core$IIndexed$_nth$arity$2(null,i__9855);var temp__4092__auto___9857 = (css[s]);if(cljs.core.truth_(temp__4092__auto___9857))
{var sheet_9858 = temp__4092__auto___9857;var temp__4092__auto___9859__$1 = sheet_9858.href;if(cljs.core.truth_(temp__4092__auto___9859__$1))
{var href_9860 = temp__4092__auto___9859__$1;tailrecursion.hoplon.reload.on_modified(href_9860,interval,((function (seq__9852,chunk__9853,count__9854,i__9855,href_9860,temp__4092__auto___9859__$1,sheet_9858,temp__4092__auto___9857,s,css,each,css_seq,vec__9839,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__9852,chunk__9853,count__9854,i__9855,href_9860,temp__4092__auto___9859__$1,sheet_9858,temp__4092__auto___9857,s,css,each,css_seq,vec__9839,interval))
);
} else
{}
} else
{}
{
var G__9861 = seq__9852;
var G__9862 = chunk__9853;
var G__9863 = count__9854;
var G__9864 = (i__9855 + 1);
seq__9852 = G__9861;
chunk__9853 = G__9862;
count__9854 = G__9863;
i__9855 = G__9864;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__9852);if(temp__4092__auto__)
{var seq__9852__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__9852__$1))
{var c__8210__auto__ = cljs.core.chunk_first(seq__9852__$1);{
var G__9865 = cljs.core.chunk_rest(seq__9852__$1);
var G__9866 = c__8210__auto__;
var G__9867 = cljs.core.count(c__8210__auto__);
var G__9868 = 0;
seq__9852 = G__9865;
chunk__9853 = G__9866;
count__9854 = G__9867;
i__9855 = G__9868;
continue;
}
} else
{var s = cljs.core.first(seq__9852__$1);var temp__4092__auto___9869__$1 = (css[s]);if(cljs.core.truth_(temp__4092__auto___9869__$1))
{var sheet_9870 = temp__4092__auto___9869__$1;var temp__4092__auto___9871__$2 = sheet_9870.href;if(cljs.core.truth_(temp__4092__auto___9871__$2))
{var href_9872 = temp__4092__auto___9871__$2;tailrecursion.hoplon.reload.on_modified(href_9872,interval,((function (seq__9852,chunk__9853,count__9854,i__9855,href_9872,temp__4092__auto___9871__$2,sheet_9870,temp__4092__auto___9869__$1,s,seq__9852__$1,temp__4092__auto__,css,each,css_seq,vec__9839,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_((css[s]));
});})(seq__9852,chunk__9853,count__9854,i__9855,href_9872,temp__4092__auto___9871__$2,sheet_9870,temp__4092__auto___9869__$1,s,seq__9852__$1,temp__4092__auto__,css,each,css_seq,vec__9839,interval))
);
} else
{}
} else
{}
{
var G__9873 = cljs.core.next(seq__9852__$1);
var G__9874 = null;
var G__9875 = 0;
var G__9876 = 0;
seq__9852 = G__9873;
chunk__9853 = G__9874;
count__9854 = G__9875;
i__9855 = G__9876;
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
});})(vec__9839,interval))
.call(null);
};
var reload_css = function (var_args){
var p__9821 = null;if (arguments.length > 0) {
  p__9821 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_css__delegate.call(this,p__9821);};
reload_css.cljs$lang$maxFixedArity = 0;
reload_css.cljs$lang$applyTo = (function (arglist__9877){
var p__9821 = cljs.core.seq(arglist__9877);
return reload_css__delegate(p__9821);
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
var reload_all__delegate = function (p__9878){var vec__9880 = p__9878;var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9880,0,null);tailrecursion.hoplon.reload.reload_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
return tailrecursion.hoplon.reload.reload_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([interval], 0));
};
var reload_all = function (var_args){
var p__9878 = null;if (arguments.length > 0) {
  p__9878 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_all__delegate.call(this,p__9878);};
reload_all.cljs$lang$maxFixedArity = 0;
reload_all.cljs$lang$applyTo = (function (arglist__9881){
var p__9878 = cljs.core.seq(arglist__9881);
return reload_all__delegate(p__9878);
});
reload_all.cljs$core$IFn$_invoke$arity$variadic = reload_all__delegate;
return reload_all;
})()
;
