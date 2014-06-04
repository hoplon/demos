// Compiled by ClojureScript 0.0-2227
goog.provide('tailrecursion.hoplon.util');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
tailrecursion.hoplon.util.nth = (function nth(coll,n){try{return nth(coll,n);
}catch (e11445){if((e11445 instanceof Error))
{var e = e11445;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11445;
} else
{return null;
}
}
}});
tailrecursion.hoplon.util.name = (function name(x){try{return name(x);
}catch (e11447){if((e11447 instanceof Error))
{var e = e11447;return null;
} else
{if(cljs.core.constant$keyword$6)
{throw e11447;
} else
{return null;
}
}
}});
tailrecursion.hoplon.util.interval = (function interval(f,msec){return window.setInterval(f,msec);
});
tailrecursion.hoplon.util.route_cell = (function route_cell(msec,default$){var hash = (function (){return window.location.hash;
});var ret = tailrecursion.javelin.cell(hash());tailrecursion.hoplon.util.interval(((function (ret,hash){
return (function (){var h = hash();return cljs.core.reset_BANG_(ret,((cljs.core.empty_QMARK_(h))?default$:h));
});})(ret,hash))
,msec);
return ret;
});
var qcache_11455 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$44);/**
* @param {...*} var_args
*/
tailrecursion.hoplon.util.query = ((function (qcache_11455){
return (function() { 
var query__delegate = function (p__11452){var vec__11454 = p__11452;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11454,0,null);var _ = cljs.core.nthnext(vec__11454,1);var args = vec__11454;if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$44,cljs.core.deref(qcache_11455))))
{if(cljs.core.truth_(k))
{return cljs.core.deref(qcache_11455).call(null,tailrecursion.hoplon.util.name(k));
} else
{return cljs.core.deref(qcache_11455);
}
} else
{var s = window.location.search;if(cljs.core.not(clojure.string.blank_QMARK_(s)))
{var v = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(s,/^\?/,""),/[&]/);var m = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (v,s,vec__11454,k,_,args,qcache_11455){
return (function (p1__11451_SHARP_){if((cljs.core.count(p1__11451_SHARP_) < 2))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__11451_SHARP_,"");
} else
{return p1__11451_SHARP_;
}
});})(v,s,vec__11454,k,_,args,qcache_11455))
,cljs.core.remove(((function (v,s,vec__11454,k,_,args,qcache_11455){
return (function (p1__11450_SHARP_){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),p1__11450_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(0,cljs.core.count(p1__11450_SHARP_))) || ((2 < cljs.core.count(p1__11450_SHARP_)));
});})(v,s,vec__11454,k,_,args,qcache_11455))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (v,s,vec__11454,k,_,args,qcache_11455){
return (function (p1__11449_SHARP_){return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(decodeURIComponent,p1__11449_SHARP_);
});})(v,s,vec__11454,k,_,args,qcache_11455))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (v,s,vec__11454,k,_,args,qcache_11455){
return (function (p1__11448_SHARP_){return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11448_SHARP_,/[=]/);
});})(v,s,vec__11454,k,_,args,qcache_11455))
,v)))));cljs.core.reset_BANG_(qcache_11455,m);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(query,args);
} else
{return null;
}
}
};
var query = function (var_args){
var p__11452 = null;if (arguments.length > 0) {
  p__11452 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return query__delegate.call(this,p__11452);};
query.cljs$lang$maxFixedArity = 0;
query.cljs$lang$applyTo = (function (arglist__11456){
var p__11452 = cljs.core.seq(arglist__11456);
return query__delegate(p__11452);
});
query.cljs$core$IFn$_invoke$arity$variadic = query__delegate;
return query;
})()
;})(qcache_11455))
;
tailrecursion.hoplon.util.pluralize = (function pluralize(word,count){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(1,count))?"s":null)));
});
tailrecursion.hoplon.util.capitalize = (function capitalize(s){if(typeof s === 'string')
{return clojure.string.capitalize(s);
} else
{return null;
}
});
tailrecursion.hoplon.util.str_partition = (function str_partition(re,s){return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.str),cljs.core.partition_by((function (p1__11457_SHARP_){if(cljs.core.truth_(cljs.core.re_matches(re,p1__11457_SHARP_)))
{return true;
} else
{return null;
}
}),s));
});
tailrecursion.hoplon.util.capitalize_name = (function capitalize_name(s){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.hoplon.util.capitalize,tailrecursion.hoplon.util.str_partition(/[a-zA-Z]/,s)));
});
tailrecursion.hoplon.util.format_date = (function format_date(date_str){var vec__11459 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(Number,clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_str,/-/));var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11459,0,null);var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11459,1,null);var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11459,2,null);var months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);var i = (m - 1);if((i < 0))
{return "<< Sorry, there was an error computing the date. >>";
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.util.nth(months,(m - 1)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y));
}
});
