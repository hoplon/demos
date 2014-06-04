// Compiled by ClojureScript 0.0-2227
goog.provide('chart');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon.svg');
goog.require('tailrecursion.hoplon.svg');
goog.require('clojure.string');
goog.require('clojure.string');

/**
* @constructor
* @param {*} width
* @param {*} height
* @param {*} min_x
* @param {*} max_x
* @param {*} min_y
* @param {*} max_y
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
chart.Chart = (function (width,height,min_x,max_x,min_y,max_y,__meta,__extmap){
this.width = width;
this.height = height;
this.min_x = min_x;
this.max_x = max_x;
this.min_y = min_y;
this.max_y = max_y;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>6){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
chart.Chart.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8024__auto__){var self__ = this;
var this__8024__auto____$1 = this;var h__7854__auto__ = self__.__hash;if(!((h__7854__auto__ == null)))
{return h__7854__auto__;
} else
{var h__7854__auto____$1 = cljs.core.hash_imap(this__8024__auto____$1);self__.__hash = h__7854__auto____$1;
return h__7854__auto____$1;
}
});
chart.Chart.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8029__auto__,k__8030__auto__){var self__ = this;
var this__8029__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__8029__auto____$1,k__8030__auto__,null);
});
chart.Chart.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8031__auto__,k9529,else__8032__auto__){var self__ = this;
var this__8031__auto____$1 = this;var G__9531 = (((k9529 instanceof cljs.core.Keyword))?k9529.fqn:null);var caseval__9535;
switch (G__9531){
case "max-y":
caseval__9535=self__.max_y
break;
case "min-y":
caseval__9535=self__.min_y
break;
case "max-x":
caseval__9535=self__.max_x
break;
case "min-x":
caseval__9535=self__.min_x
break;
case "height":
caseval__9535=self__.height
break;
case "width":
caseval__9535=self__.width
break;
default:
caseval__9535=cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k9529,else__8032__auto__)
}
return caseval__9535;
});
chart.Chart.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8036__auto__,k__8037__auto__,G__9528){var self__ = this;
var this__8036__auto____$1 = this;var pred__9532 = cljs.core.keyword_identical_QMARK_;var expr__9533 = k__8037__auto__;if(cljs.core.truth_((pred__9532.cljs$core$IFn$_invoke$arity$2 ? pred__9532.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$38,expr__9533) : pred__9532.call(null,cljs.core.constant$keyword$38,expr__9533))))
{return (new chart.Chart(G__9528,self__.height,self__.min_x,self__.max_x,self__.min_y,self__.max_y,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__9532.cljs$core$IFn$_invoke$arity$2 ? pred__9532.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$39,expr__9533) : pred__9532.call(null,cljs.core.constant$keyword$39,expr__9533))))
{return (new chart.Chart(self__.width,G__9528,self__.min_x,self__.max_x,self__.min_y,self__.max_y,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__9532.cljs$core$IFn$_invoke$arity$2 ? pred__9532.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$40,expr__9533) : pred__9532.call(null,cljs.core.constant$keyword$40,expr__9533))))
{return (new chart.Chart(self__.width,self__.height,G__9528,self__.max_x,self__.min_y,self__.max_y,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__9532.cljs$core$IFn$_invoke$arity$2 ? pred__9532.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$41,expr__9533) : pred__9532.call(null,cljs.core.constant$keyword$41,expr__9533))))
{return (new chart.Chart(self__.width,self__.height,self__.min_x,G__9528,self__.min_y,self__.max_y,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__9532.cljs$core$IFn$_invoke$arity$2 ? pred__9532.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$42,expr__9533) : pred__9532.call(null,cljs.core.constant$keyword$42,expr__9533))))
{return (new chart.Chart(self__.width,self__.height,self__.min_x,self__.max_x,G__9528,self__.max_y,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__9532.cljs$core$IFn$_invoke$arity$2 ? pred__9532.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$43,expr__9533) : pred__9532.call(null,cljs.core.constant$keyword$43,expr__9533))))
{return (new chart.Chart(self__.width,self__.height,self__.min_x,self__.max_x,self__.min_y,G__9528,self__.__meta,self__.__extmap,null));
} else
{return (new chart.Chart(self__.width,self__.height,self__.min_x,self__.max_x,self__.min_y,self__.max_y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8037__auto__,G__9528),null));
}
}
}
}
}
}
});
chart.Chart.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8043__auto__,writer__8044__auto__,opts__8045__auto__){var self__ = this;
var this__8043__auto____$1 = this;var pr_pair__8046__auto__ = ((function (this__8043__auto____$1){
return (function (keyval__8047__auto__){return cljs.core.pr_sequential_writer(writer__8044__auto__,cljs.core.pr_writer,""," ","",opts__8045__auto__,keyval__8047__auto__);
});})(this__8043__auto____$1))
;return cljs.core.pr_sequential_writer(writer__8044__auto__,pr_pair__8046__auto__,"#chart.Chart{",", ","}",opts__8045__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$38,self__.width],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.height],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$40,self__.min_x],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$41,self__.max_x],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$42,self__.min_y],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$43,self__.max_y],null))], null),self__.__extmap));
});
chart.Chart.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8034__auto__,entry__8035__auto__){var self__ = this;
var this__8034__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__8035__auto__))
{return cljs.core._assoc(this__8034__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8035__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8035__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8034__auto____$1,entry__8035__auto__);
}
});
chart.Chart.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8041__auto__){var self__ = this;
var this__8041__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$38,self__.width],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.height],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$40,self__.min_x],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$41,self__.max_x],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$42,self__.min_y],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$43,self__.max_y],null))], null),self__.__extmap));
});
chart.Chart.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8033__auto__){var self__ = this;
var this__8033__auto____$1 = this;return (6 + cljs.core.count(self__.__extmap));
});
chart.Chart.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8025__auto__,other__8026__auto__){var self__ = this;
var this__8025__auto____$1 = this;if(cljs.core.truth_((function (){var and__7431__auto__ = other__8026__auto__;if(cljs.core.truth_(and__7431__auto__))
{return ((this__8025__auto____$1.constructor === other__8026__auto__.constructor)) && (cljs.core.equiv_map(this__8025__auto____$1,other__8026__auto__));
} else
{return and__7431__auto__;
}
})()))
{return true;
} else
{return false;
}
});
chart.Chart.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8028__auto__,G__9528){var self__ = this;
var this__8028__auto____$1 = this;return (new chart.Chart(self__.width,self__.height,self__.min_x,self__.max_x,self__.min_y,self__.max_y,G__9528,self__.__extmap,self__.__hash));
});
chart.Chart.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8023__auto__){var self__ = this;
var this__8023__auto____$1 = this;return (new chart.Chart(self__.width,self__.height,self__.min_x,self__.max_x,self__.min_y,self__.max_y,self__.__meta,self__.__extmap,self__.__hash));
});
chart.Chart.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8027__auto__){var self__ = this;
var this__8027__auto____$1 = this;return self__.__meta;
});
chart.Chart.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8038__auto__,k__8039__auto__){var self__ = this;
var this__8038__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$38,null,cljs.core.constant$keyword$40,null,cljs.core.constant$keyword$42,null,cljs.core.constant$keyword$43,null,cljs.core.constant$keyword$41,null,cljs.core.constant$keyword$39,null], null), null),k__8039__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__8038__auto____$1),self__.__meta),k__8039__auto__);
} else
{return (new chart.Chart(self__.width,self__.height,self__.min_x,self__.max_x,self__.min_y,self__.max_y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8039__auto__)),null));
}
});
chart.Chart.cljs$lang$type = true;
chart.Chart.cljs$lang$ctorPrSeq = (function (this__8063__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"chart/Chart");
});
chart.Chart.cljs$lang$ctorPrWriter = (function (this__8063__auto__,writer__8064__auto__){return cljs.core._write(writer__8064__auto__,"chart/Chart");
});
chart.__GT_Chart = (function __GT_Chart(width,height,min_x,max_x,min_y,max_y){return (new chart.Chart(width,height,min_x,max_x,min_y,max_y));
});
chart.map__GT_Chart = (function map__GT_Chart(G__9530){return (new chart.Chart(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(G__9530),cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(G__9530),cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(G__9530),cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(G__9530),cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(G__9530),cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(G__9530),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__9530,cljs.core.constant$keyword$38,cljs.core.array_seq([cljs.core.constant$keyword$39,cljs.core.constant$keyword$40,cljs.core.constant$keyword$41,cljs.core.constant$keyword$42,cljs.core.constant$keyword$43], 0))));
});
/**
* @param {...*} var_args
*/
chart.config = (function() { 
var config__delegate = function (p__9536){var map__9538 = p__9536;var map__9538__$1 = ((cljs.core.seq_QMARK_(map__9538))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9538):map__9538);var max_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9538__$1,cljs.core.constant$keyword$43);var min_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9538__$1,cljs.core.constant$keyword$42);var max_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9538__$1,cljs.core.constant$keyword$41);var min_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9538__$1,cljs.core.constant$keyword$40);var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9538__$1,cljs.core.constant$keyword$39);var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9538__$1,cljs.core.constant$keyword$38);return (new chart.Chart(width,height,min_x,max_x,min_y,max_y));
};
var config = function (var_args){
var p__9536 = null;if (arguments.length > 0) {
  p__9536 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return config__delegate.call(this,p__9536);};
config.cljs$lang$maxFixedArity = 0;
config.cljs$lang$applyTo = (function (arglist__9539){
var p__9536 = cljs.core.seq(arglist__9539);
return config__delegate(p__9536);
});
config.cljs$core$IFn$_invoke$arity$variadic = config__delegate;
return config;
})()
;
chart.rel_coord = (function rel_coord(p__9540,x,y){var map__9542 = p__9540;var map__9542__$1 = ((cljs.core.seq_QMARK_(map__9542))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9542):map__9542);var max_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9542__$1,cljs.core.constant$keyword$43);var min_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9542__$1,cljs.core.constant$keyword$42);var max_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9542__$1,cljs.core.constant$keyword$41);var min_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9542__$1,cljs.core.constant$keyword$40);var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9542__$1,cljs.core.constant$keyword$39);var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9542__$1,cljs.core.constant$keyword$38);var w = (max_x - min_x);var h = (max_y - min_y);var dw = (x - min_x);var dh = (y - min_y);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(width * (dw / w)),(height * (1 - (dh / h)))], null);
});
/**
* @param {...*} var_args
*/
chart.container = (function() { 
var container__delegate = function (args__8482__auto__){var vec__9548 = tailrecursion.hoplon.parse_args(args__8482__auto__);var map__9549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9548,0,null);var map__9549__$1 = ((cljs.core.seq_QMARK_(map__9549))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9549):map__9549);var attr = map__9549__$1;var chart__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9549__$1,cljs.core.constant$keyword$44);var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9548,1,null);var vec__9550 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9548,map__9549,map__9549__$1,attr,chart__$1,kids){
return (function (G__9552){var map__9551 = G__9552;var map__9551__$1 = ((cljs.core.seq_QMARK_(map__9551))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9551):map__9551);var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9551__$1,cljs.core.constant$keyword$39);var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9551__$1,cljs.core.constant$keyword$38);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null);
});})(vec__9548,map__9549,map__9549__$1,attr,chart__$1,kids))
).call(null,chart__$1));var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9550,0,null);var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9550,1,null);return (tailrecursion.hoplon.svg.svg.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.svg.svg.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attr,cljs.core.constant$keyword$44),cljs.core.constant$keyword$38,width,cljs.core.array_seq([cljs.core.constant$keyword$39,height], 0)),kids) : tailrecursion.hoplon.svg.svg.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attr,cljs.core.constant$keyword$44),cljs.core.constant$keyword$38,width,cljs.core.array_seq([cljs.core.constant$keyword$39,height], 0)),kids));
};
var container = function (var_args){
var args__8482__auto__ = null;if (arguments.length > 0) {
  args__8482__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return container__delegate.call(this,args__8482__auto__);};
container.cljs$lang$maxFixedArity = 0;
container.cljs$lang$applyTo = (function (arglist__9553){
var args__8482__auto__ = cljs.core.seq(arglist__9553);
return container__delegate(args__8482__auto__);
});
container.cljs$core$IFn$_invoke$arity$variadic = container__delegate;
return container;
})()
;
/**
* @param {...*} var_args
*/
chart.point_circle = (function() { 
var point_circle__delegate = function (args__8482__auto__){var vec__9567 = tailrecursion.hoplon.parse_args(args__8482__auto__);var map__9568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9567,0,null);var map__9568__$1 = ((cljs.core.seq_QMARK_(map__9568))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9568):map__9568);var attr = map__9568__$1;var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9568__$1,cljs.core.constant$keyword$21);var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9568__$1,cljs.core.constant$keyword$20);var chart__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9568__$1,cljs.core.constant$keyword$44);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9567,1,null);var coord = tailrecursion.javelin.lift(((function (vec__9567,map__9568,map__9568__$1,attr,y,x,chart__$1,_){
return (function (G__9569,G__9572,G__9570,G__9571){return (G__9569.cljs$core$IFn$_invoke$arity$3 ? G__9569.cljs$core$IFn$_invoke$arity$3(G__9570,G__9571,G__9572) : G__9569.call(null,G__9570,G__9571,G__9572));
});})(vec__9567,map__9568,map__9568__$1,attr,y,x,chart__$1,_))
).call(null,chart.rel_coord,y,chart__$1,x);return (tailrecursion.hoplon.svg.circle.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.svg.circle.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$45,tailrecursion.javelin.lift(((function (coord,vec__9567,map__9568,map__9568__$1,attr,y,x,chart__$1,_){
return (function (G__9574,G__9573){return (G__9573.cljs$core$IFn$_invoke$arity$1 ? G__9573.cljs$core$IFn$_invoke$arity$1(G__9574) : G__9573.call(null,G__9574));
});})(coord,vec__9567,map__9568,map__9568__$1,attr,y,x,chart__$1,_))
).call(null,coord,cljs.core.first),cljs.core.constant$keyword$46,tailrecursion.javelin.lift(((function (coord,vec__9567,map__9568,map__9568__$1,attr,y,x,chart__$1,_){
return (function (G__9575,G__9576){return (G__9575.cljs$core$IFn$_invoke$arity$1 ? G__9575.cljs$core$IFn$_invoke$arity$1(G__9576) : G__9575.call(null,G__9576));
});})(coord,vec__9567,map__9568,map__9568__$1,attr,y,x,chart__$1,_))
).call(null,cljs.core.second,coord)) : tailrecursion.hoplon.svg.circle.call(null,cljs.core.constant$keyword$45,tailrecursion.javelin.lift(((function (coord,vec__9567,map__9568,map__9568__$1,attr,y,x,chart__$1,_){
return (function (G__9574,G__9573){return (G__9573.cljs$core$IFn$_invoke$arity$1 ? G__9573.cljs$core$IFn$_invoke$arity$1(G__9574) : G__9573.call(null,G__9574));
});})(coord,vec__9567,map__9568,map__9568__$1,attr,y,x,chart__$1,_))
).call(null,coord,cljs.core.first),cljs.core.constant$keyword$46,tailrecursion.javelin.lift(((function (coord,vec__9567,map__9568,map__9568__$1,attr,y,x,chart__$1,_){
return (function (G__9575,G__9576){return (G__9575.cljs$core$IFn$_invoke$arity$1 ? G__9575.cljs$core$IFn$_invoke$arity$1(G__9576) : G__9575.call(null,G__9576));
});})(coord,vec__9567,map__9568,map__9568__$1,attr,y,x,chart__$1,_))
).call(null,cljs.core.second,coord))).call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.constant$keyword$44,cljs.core.array_seq([cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], 0)),(tailrecursion.hoplon.svg.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.svg.title.cljs$core$IFn$_invoke$arity$1((function (){var t__8507__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8507__auto__,coord,vec__9567,map__9568,map__9568__$1,attr,y,x,chart__$1,_){
return (function (G__9577,G__9579,G__9578){return G__9577.nodeValue = ("["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9578)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9579)+"]");
});})(t__8507__auto__,coord,vec__9567,map__9568,map__9568__$1,attr,y,x,chart__$1,_))
).call(null,t__8507__auto__,y,x);
return t__8507__auto__;
})()) : tailrecursion.hoplon.svg.title.call(null,(function (){var t__8507__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8507__auto__,coord,vec__9567,map__9568,map__9568__$1,attr,y,x,chart__$1,_){
return (function (G__9577,G__9579,G__9578){return G__9577.nodeValue = ("["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9578)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9579)+"]");
});})(t__8507__auto__,coord,vec__9567,map__9568,map__9568__$1,attr,y,x,chart__$1,_))
).call(null,t__8507__auto__,y,x);
return t__8507__auto__;
})())));
};
var point_circle = function (var_args){
var args__8482__auto__ = null;if (arguments.length > 0) {
  args__8482__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return point_circle__delegate.call(this,args__8482__auto__);};
point_circle.cljs$lang$maxFixedArity = 0;
point_circle.cljs$lang$applyTo = (function (arglist__9580){
var args__8482__auto__ = cljs.core.seq(arglist__9580);
return point_circle__delegate(args__8482__auto__);
});
point_circle.cljs$core$IFn$_invoke$arity$variadic = point_circle__delegate;
return point_circle;
})()
;
/**
* @param {...*} var_args
*/
chart.point_rect = (function() { 
var point_rect__delegate = function (args__8482__auto__){var vec__9596 = tailrecursion.hoplon.parse_args(args__8482__auto__);var map__9597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9596,0,null);var map__9597__$1 = ((cljs.core.seq_QMARK_(map__9597))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9597):map__9597);var attr = map__9597__$1;var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9597__$1,cljs.core.constant$keyword$39);var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9597__$1,cljs.core.constant$keyword$38);var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9597__$1,cljs.core.constant$keyword$21);var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9597__$1,cljs.core.constant$keyword$20);var chart__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9597__$1,cljs.core.constant$keyword$44);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9596,1,null);var coord = tailrecursion.javelin.lift(((function (vec__9596,map__9597,map__9597__$1,attr,height,width,y,x,chart__$1,_){
return (function (G__9598,G__9601,G__9599,G__9600){return (G__9598.cljs$core$IFn$_invoke$arity$3 ? G__9598.cljs$core$IFn$_invoke$arity$3(G__9599,G__9600,G__9601) : G__9598.call(null,G__9599,G__9600,G__9601));
});})(vec__9596,map__9597,map__9597__$1,attr,height,width,y,x,chart__$1,_))
).call(null,chart.rel_coord,y,chart__$1,x);return (tailrecursion.hoplon.svg.rect.cljs$core$IFn$_invoke$arity$4 ? tailrecursion.hoplon.svg.rect.cljs$core$IFn$_invoke$arity$4(cljs.core.constant$keyword$20,tailrecursion.javelin.lift(((function (coord,vec__9596,map__9597,map__9597__$1,attr,height,width,y,x,chart__$1,_){
return (function (G__9603,G__9604,G__9602){return ((G__9602.cljs$core$IFn$_invoke$arity$1 ? G__9602.cljs$core$IFn$_invoke$arity$1(G__9603) : G__9602.call(null,G__9603)) - (G__9604 / 2));
});})(coord,vec__9596,map__9597,map__9597__$1,attr,height,width,y,x,chart__$1,_))
).call(null,coord,width,cljs.core.first),cljs.core.constant$keyword$21,tailrecursion.javelin.lift(((function (coord,vec__9596,map__9597,map__9597__$1,attr,height,width,y,x,chart__$1,_){
return (function (G__9605,G__9606,G__9607){return ((G__9605.cljs$core$IFn$_invoke$arity$1 ? G__9605.cljs$core$IFn$_invoke$arity$1(G__9606) : G__9605.call(null,G__9606)) - (G__9607 / 2));
});})(coord,vec__9596,map__9597,map__9597__$1,attr,height,width,y,x,chart__$1,_))
).call(null,cljs.core.second,coord,height)) : tailrecursion.hoplon.svg.rect.call(null,cljs.core.constant$keyword$20,tailrecursion.javelin.lift(((function (coord,vec__9596,map__9597,map__9597__$1,attr,height,width,y,x,chart__$1,_){
return (function (G__9603,G__9604,G__9602){return ((G__9602.cljs$core$IFn$_invoke$arity$1 ? G__9602.cljs$core$IFn$_invoke$arity$1(G__9603) : G__9602.call(null,G__9603)) - (G__9604 / 2));
});})(coord,vec__9596,map__9597,map__9597__$1,attr,height,width,y,x,chart__$1,_))
).call(null,coord,width,cljs.core.first),cljs.core.constant$keyword$21,tailrecursion.javelin.lift(((function (coord,vec__9596,map__9597,map__9597__$1,attr,height,width,y,x,chart__$1,_){
return (function (G__9605,G__9606,G__9607){return ((G__9605.cljs$core$IFn$_invoke$arity$1 ? G__9605.cljs$core$IFn$_invoke$arity$1(G__9606) : G__9605.call(null,G__9606)) - (G__9607 / 2));
});})(coord,vec__9596,map__9597,map__9597__$1,attr,height,width,y,x,chart__$1,_))
).call(null,cljs.core.second,coord,height))).call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.constant$keyword$44,cljs.core.array_seq([cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], 0)),(tailrecursion.hoplon.svg.title.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.svg.title.cljs$core$IFn$_invoke$arity$1((function (){var t__8507__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8507__auto__,coord,vec__9596,map__9597,map__9597__$1,attr,height,width,y,x,chart__$1,_){
return (function (G__9608,G__9610,G__9609){return G__9608.nodeValue = ("["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9609)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9610)+"]");
});})(t__8507__auto__,coord,vec__9596,map__9597,map__9597__$1,attr,height,width,y,x,chart__$1,_))
).call(null,t__8507__auto__,y,x);
return t__8507__auto__;
})()) : tailrecursion.hoplon.svg.title.call(null,(function (){var t__8507__auto__ = document.createTextNode("");tailrecursion.javelin.lift(((function (t__8507__auto__,coord,vec__9596,map__9597,map__9597__$1,attr,height,width,y,x,chart__$1,_){
return (function (G__9608,G__9610,G__9609){return G__9608.nodeValue = ("["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9609)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9610)+"]");
});})(t__8507__auto__,coord,vec__9596,map__9597,map__9597__$1,attr,height,width,y,x,chart__$1,_))
).call(null,t__8507__auto__,y,x);
return t__8507__auto__;
})())));
};
var point_rect = function (var_args){
var args__8482__auto__ = null;if (arguments.length > 0) {
  args__8482__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return point_rect__delegate.call(this,args__8482__auto__);};
point_rect.cljs$lang$maxFixedArity = 0;
point_rect.cljs$lang$applyTo = (function (arglist__9611){
var args__8482__auto__ = cljs.core.seq(arglist__9611);
return point_rect__delegate(args__8482__auto__);
});
point_rect.cljs$core$IFn$_invoke$arity$variadic = point_rect__delegate;
return point_rect;
})()
;
/**
* @param {...*} var_args
*/
chart.points_rect = (function() { 
var points_rect__delegate = function (args__8482__auto__){var vec__9617 = tailrecursion.hoplon.parse_args(args__8482__auto__);var map__9618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9617,0,null);var map__9618__$1 = ((cljs.core.seq_QMARK_(map__9618))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9618):map__9618);var attr = map__9618__$1;var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9618__$1,cljs.core.constant$keyword$39);var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9618__$1,cljs.core.constant$keyword$38);var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9618__$1,cljs.core.constant$keyword$47);var chart__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9618__$1,cljs.core.constant$keyword$44);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9617,1,null);return (tailrecursion.hoplon.svg.g.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.svg.g.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(data,null,((function (vec__9617,map__9618,map__9618__$1,attr,height,width,data,chart__$1,_){
return (function (item__8493__auto__){var vec__9619 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9617,map__9618,map__9618__$1,attr,height,width,data,chart__$1,_){
return (function (G__9621){var vec__9620 = G__9621;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9620,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9620,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});})(vec__9617,map__9618,map__9618__$1,attr,height,width,data,chart__$1,_))
).call(null,item__8493__auto__));var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9619,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9619,1,null);return chart.point_rect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$44,chart__$1,cljs.core.constant$keyword$20,x,cljs.core.constant$keyword$21,y,cljs.core.constant$keyword$38,width,cljs.core.constant$keyword$39,height], 0)).call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.constant$keyword$44,cljs.core.array_seq([cljs.core.constant$keyword$47,cljs.core.constant$keyword$38,cljs.core.constant$keyword$39], 0)));
});})(vec__9617,map__9618,map__9618__$1,attr,height,width,data,chart__$1,_))
)) : tailrecursion.hoplon.svg.g.call(null,tailrecursion.hoplon.loop_tpl_STAR_(data,null,((function (vec__9617,map__9618,map__9618__$1,attr,height,width,data,chart__$1,_){
return (function (item__8493__auto__){var vec__9619 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9617,map__9618,map__9618__$1,attr,height,width,data,chart__$1,_){
return (function (G__9621){var vec__9620 = G__9621;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9620,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9620,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});})(vec__9617,map__9618,map__9618__$1,attr,height,width,data,chart__$1,_))
).call(null,item__8493__auto__));var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9619,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9619,1,null);return chart.point_rect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$44,chart__$1,cljs.core.constant$keyword$20,x,cljs.core.constant$keyword$21,y,cljs.core.constant$keyword$38,width,cljs.core.constant$keyword$39,height], 0)).call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.constant$keyword$44,cljs.core.array_seq([cljs.core.constant$keyword$47,cljs.core.constant$keyword$38,cljs.core.constant$keyword$39], 0)));
});})(vec__9617,map__9618,map__9618__$1,attr,height,width,data,chart__$1,_))
)));
};
var points_rect = function (var_args){
var args__8482__auto__ = null;if (arguments.length > 0) {
  args__8482__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return points_rect__delegate.call(this,args__8482__auto__);};
points_rect.cljs$lang$maxFixedArity = 0;
points_rect.cljs$lang$applyTo = (function (arglist__9622){
var args__8482__auto__ = cljs.core.seq(arglist__9622);
return points_rect__delegate(args__8482__auto__);
});
points_rect.cljs$core$IFn$_invoke$arity$variadic = points_rect__delegate;
return points_rect;
})()
;
/**
* @param {...*} var_args
*/
chart.points_circle = (function() { 
var points_circle__delegate = function (args__8482__auto__){var vec__9628 = tailrecursion.hoplon.parse_args(args__8482__auto__);var map__9629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9628,0,null);var map__9629__$1 = ((cljs.core.seq_QMARK_(map__9629))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9629):map__9629);var attr = map__9629__$1;var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9629__$1,cljs.core.constant$keyword$47);var chart__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9629__$1,cljs.core.constant$keyword$44);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9628,1,null);return (tailrecursion.hoplon.svg.g.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.hoplon.svg.g.cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.loop_tpl_STAR_(data,null,((function (vec__9628,map__9629,map__9629__$1,attr,data,chart__$1,_){
return (function (item__8493__auto__){var vec__9630 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9628,map__9629,map__9629__$1,attr,data,chart__$1,_){
return (function (G__9632){var vec__9631 = G__9632;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9631,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9631,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});})(vec__9628,map__9629,map__9629__$1,attr,data,chart__$1,_))
).call(null,item__8493__auto__));var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9630,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9630,1,null);return chart.point_circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$44,chart__$1,cljs.core.constant$keyword$20,x,cljs.core.constant$keyword$21,y], 0)).call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.constant$keyword$44,cljs.core.array_seq([cljs.core.constant$keyword$47], 0)));
});})(vec__9628,map__9629,map__9629__$1,attr,data,chart__$1,_))
)) : tailrecursion.hoplon.svg.g.call(null,tailrecursion.hoplon.loop_tpl_STAR_(data,null,((function (vec__9628,map__9629,map__9629__$1,attr,data,chart__$1,_){
return (function (item__8493__auto__){var vec__9630 = tailrecursion.javelin.cell_map(cljs.core.identity,tailrecursion.javelin.lift(((function (vec__9628,map__9629,map__9629__$1,attr,data,chart__$1,_){
return (function (G__9632){var vec__9631 = G__9632;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9631,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9631,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});})(vec__9628,map__9629,map__9629__$1,attr,data,chart__$1,_))
).call(null,item__8493__auto__));var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9630,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9630,1,null);return chart.point_circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$44,chart__$1,cljs.core.constant$keyword$20,x,cljs.core.constant$keyword$21,y], 0)).call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.constant$keyword$44,cljs.core.array_seq([cljs.core.constant$keyword$47], 0)));
});})(vec__9628,map__9629,map__9629__$1,attr,data,chart__$1,_))
)));
};
var points_circle = function (var_args){
var args__8482__auto__ = null;if (arguments.length > 0) {
  args__8482__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return points_circle__delegate.call(this,args__8482__auto__);};
points_circle.cljs$lang$maxFixedArity = 0;
points_circle.cljs$lang$applyTo = (function (arglist__9633){
var args__8482__auto__ = cljs.core.seq(arglist__9633);
return points_circle__delegate(args__8482__auto__);
});
points_circle.cljs$core$IFn$_invoke$arity$variadic = points_circle__delegate;
return points_circle;
})()
;
/**
* @param {...*} var_args
*/
chart.polygon = (function() { 
var polygon__delegate = function (args__8482__auto__){var vec__9653 = tailrecursion.hoplon.parse_args(args__8482__auto__);var map__9654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9653,0,null);var map__9654__$1 = ((cljs.core.seq_QMARK_(map__9654))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9654):map__9654);var attr = map__9654__$1;var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9654__$1,cljs.core.constant$keyword$47);var chart__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9654__$1,cljs.core.constant$keyword$44);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9653,1,null);var start = tailrecursion.javelin.lift(((function (vec__9653,map__9654,map__9654__$1,attr,data,chart__$1,_){
return (function (G__9655){return ("0,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(G__9655)));
});})(vec__9653,map__9654,map__9654__$1,attr,data,chart__$1,_))
).call(null,chart__$1);var end = tailrecursion.javelin.lift(((function (start,vec__9653,map__9654,map__9654__$1,attr,data,chart__$1,_){
return (function (G__9656){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(G__9656))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(G__9656)));
});})(start,vec__9653,map__9654,map__9654__$1,attr,data,chart__$1,_))
).call(null,chart__$1);var rels = tailrecursion.javelin.lift(((function (start,end,vec__9653,map__9654,map__9654__$1,attr,data,chart__$1,_){
return (function (G__9665,G__9667,G__9666){var iter__8168__auto__ = ((function (start,end,vec__9653,map__9654,map__9654__$1,attr,data,chart__$1,_){
return (function iter__9657(s__9658){return (new cljs.core.LazySeq(null,((function (start,end,vec__9653,map__9654,map__9654__$1,attr,data,chart__$1,_){
return (function (){var s__9658__$1 = s__9658;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9658__$1);if(temp__4092__auto__)
{var s__9658__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9658__$2))
{var c__8166__auto__ = cljs.core.chunk_first(s__9658__$2);var size__8167__auto__ = cljs.core.count(c__8166__auto__);var b__9660 = cljs.core.chunk_buffer(size__8167__auto__);if(cljs.core.truth_((function (){var i__9659 = 0;while(true){
if(cljs.core.truth_((i__9659 < size__8167__auto__)))
{var vec__9661 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8166__auto__,i__9659);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9661,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9661,1,null);cljs.core.chunk_append(b__9660,(function (){var vec__9662 = (G__9665.cljs$core$IFn$_invoke$arity$3 ? G__9665.cljs$core$IFn$_invoke$arity$3(G__9666,x,y) : G__9665.call(null,G__9666,x,y));var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9662,0,null);var y_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9662,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_SINGLEQUOTE_)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_SINGLEQUOTE_));
})());
{
var G__9672 = (i__9659 + 1);
i__9659 = G__9672;
continue;
}
} else
{return true;
}
break;
}
})()))
{return cljs.core.chunk_cons(cljs.core.chunk(b__9660),iter__9657(cljs.core.chunk_rest(s__9658__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9660),null);
}
} else
{var vec__9663 = cljs.core.first(s__9658__$2);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9663,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9663,1,null);return cljs.core.cons((function (){var vec__9664 = (G__9665.cljs$core$IFn$_invoke$arity$3 ? G__9665.cljs$core$IFn$_invoke$arity$3(G__9666,x,y) : G__9665.call(null,G__9666,x,y));var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9664,0,null);var y_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9664,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_SINGLEQUOTE_)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_SINGLEQUOTE_));
})(),iter__9657(cljs.core.rest(s__9658__$2)));
}
} else
{return null;
}
break;
}
});})(start,end,vec__9653,map__9654,map__9654__$1,attr,data,chart__$1,_))
,null,null));
});})(start,end,vec__9653,map__9654,map__9654__$1,attr,data,chart__$1,_))
;return iter__8168__auto__(G__9667);
});})(start,end,vec__9653,map__9654,map__9654__$1,attr,data,chart__$1,_))
).call(null,chart.rel_coord,data,chart__$1);var points = tailrecursion.javelin.lift(((function (start,end,rels,vec__9653,map__9654,map__9654__$1,attr,data,chart__$1,_){
return (function (G__9670,G__9668,G__9671,G__9669){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9668)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__9669.cljs$core$IFn$_invoke$arity$2 ? G__9669.cljs$core$IFn$_invoke$arity$2(" ",G__9670) : G__9669.call(null," ",G__9670)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9671));
});})(start,end,rels,vec__9653,map__9654,map__9654__$1,attr,data,chart__$1,_))
).call(null,rels,start,end,clojure.string.join);return (tailrecursion.hoplon.svg.polygon.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.svg.polygon.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$48,points) : tailrecursion.hoplon.svg.polygon.call(null,cljs.core.constant$keyword$48,points)).call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.constant$keyword$44,cljs.core.array_seq([cljs.core.constant$keyword$47], 0)));
};
var polygon = function (var_args){
var args__8482__auto__ = null;if (arguments.length > 0) {
  args__8482__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__8482__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__9673){
var args__8482__auto__ = cljs.core.seq(arglist__9673);
return polygon__delegate(args__8482__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
chart.polyline = (function() { 
var polyline__delegate = function (args__8482__auto__){var vec__9689 = tailrecursion.hoplon.parse_args(args__8482__auto__);var map__9690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9689,0,null);var map__9690__$1 = ((cljs.core.seq_QMARK_(map__9690))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9690):map__9690);var attr = map__9690__$1;var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9690__$1,cljs.core.constant$keyword$47);var chart__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9690__$1,cljs.core.constant$keyword$44);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9689,1,null);var rels = tailrecursion.javelin.lift(((function (vec__9689,map__9690,map__9690__$1,attr,data,chart__$1,_){
return (function (G__9699,G__9701,G__9700){var iter__8168__auto__ = ((function (vec__9689,map__9690,map__9690__$1,attr,data,chart__$1,_){
return (function iter__9691(s__9692){return (new cljs.core.LazySeq(null,((function (vec__9689,map__9690,map__9690__$1,attr,data,chart__$1,_){
return (function (){var s__9692__$1 = s__9692;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9692__$1);if(temp__4092__auto__)
{var s__9692__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__9692__$2))
{var c__8166__auto__ = cljs.core.chunk_first(s__9692__$2);var size__8167__auto__ = cljs.core.count(c__8166__auto__);var b__9694 = cljs.core.chunk_buffer(size__8167__auto__);if(cljs.core.truth_((function (){var i__9693 = 0;while(true){
if(cljs.core.truth_((i__9693 < size__8167__auto__)))
{var vec__9695 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8166__auto__,i__9693);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9695,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9695,1,null);cljs.core.chunk_append(b__9694,(function (){var vec__9696 = (G__9699.cljs$core$IFn$_invoke$arity$3 ? G__9699.cljs$core$IFn$_invoke$arity$3(G__9700,x,y) : G__9699.call(null,G__9700,x,y));var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9696,0,null);var y_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9696,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_SINGLEQUOTE_)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_SINGLEQUOTE_));
})());
{
var G__9704 = (i__9693 + 1);
i__9693 = G__9704;
continue;
}
} else
{return true;
}
break;
}
})()))
{return cljs.core.chunk_cons(cljs.core.chunk(b__9694),iter__9691(cljs.core.chunk_rest(s__9692__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9694),null);
}
} else
{var vec__9697 = cljs.core.first(s__9692__$2);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9697,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9697,1,null);return cljs.core.cons((function (){var vec__9698 = (G__9699.cljs$core$IFn$_invoke$arity$3 ? G__9699.cljs$core$IFn$_invoke$arity$3(G__9700,x,y) : G__9699.call(null,G__9700,x,y));var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9698,0,null);var y_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9698,1,null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_SINGLEQUOTE_)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_SINGLEQUOTE_));
})(),iter__9691(cljs.core.rest(s__9692__$2)));
}
} else
{return null;
}
break;
}
});})(vec__9689,map__9690,map__9690__$1,attr,data,chart__$1,_))
,null,null));
});})(vec__9689,map__9690,map__9690__$1,attr,data,chart__$1,_))
;return iter__8168__auto__(G__9701);
});})(vec__9689,map__9690,map__9690__$1,attr,data,chart__$1,_))
).call(null,chart.rel_coord,data,chart__$1);var points = tailrecursion.javelin.lift(((function (rels,vec__9689,map__9690,map__9690__$1,attr,data,chart__$1,_){
return (function (G__9703,G__9702){return (G__9702.cljs$core$IFn$_invoke$arity$2 ? G__9702.cljs$core$IFn$_invoke$arity$2(" ",G__9703) : G__9702.call(null," ",G__9703));
});})(rels,vec__9689,map__9690,map__9690__$1,attr,data,chart__$1,_))
).call(null,rels,clojure.string.join);return (tailrecursion.hoplon.svg.polyline.cljs$core$IFn$_invoke$arity$2 ? tailrecursion.hoplon.svg.polyline.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$48,points) : tailrecursion.hoplon.svg.polyline.call(null,cljs.core.constant$keyword$48,points)).call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.constant$keyword$44,cljs.core.array_seq([cljs.core.constant$keyword$47], 0)));
};
var polyline = function (var_args){
var args__8482__auto__ = null;if (arguments.length > 0) {
  args__8482__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__8482__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__9705){
var args__8482__auto__ = cljs.core.seq(arglist__9705);
return polyline__delegate(args__8482__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
