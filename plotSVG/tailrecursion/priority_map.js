// Compiled by ClojureScript 0.0-2227
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
})
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__8010__auto__,writer__8011__auto__,opt__8012__auto__){return cljs.core._write(writer__8011__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__7854__auto__ = self__.__hash;if(!((h__7854__auto__ == null)))
{return h__7854__auto__;
} else
{var h__7854__auto____$1 = cljs.core.hash_imap(this$__$1);self__.__hash = h__7854__auto____$1;
return h__7854__auto____$1;
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){var self__ = this;
var coll__$1 = this;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,not_found);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){var self__ = this;
var this$__$1 = this;var temp__4090__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,null);if(cljs.core.truth_(temp__4090__auto__))
{var current_priority = temp__4090__auto__;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_priority,priority))
{return this$__$1;
} else
{var item_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority),priority,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.priority__GT_set_of_items,current_priority,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority),item),cljs.core.array_seq([priority,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,null));
}
}
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,null));
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;return cljs.core.contains_QMARK_(self__.item__GT_priority,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__10076 = null;
var G__10076__2 = (function (self__,item){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__10076__3 = (function (self__,item,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__10076 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__10076__2.call(this,self__,item);
case 3:
return G__10076__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10076;
})()
;
tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args10051){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args10051)));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;var pr_pair = ((function (coll__$1){
return (function (keyval){return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;return cljs.core.pr_sequential_writer(writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.seq((function (){var iter__8168__auto__ = ((function (coll__$1){
return (function iter__10052(s__10053){return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){var s__10053__$1 = s__10053;while(true){
var temp__4092__auto__ = cljs.core.seq(s__10053__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__10059 = cljs.core.first(xs__4579__auto__);var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10059,0,null);var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10059,1,null);var iterys__8164__auto__ = ((function (s__10053__$1,vec__10059,priority,item_set,xs__4579__auto__,temp__4092__auto__,coll__$1){
return (function iter__10054(s__10055){return (new cljs.core.LazySeq(null,((function (s__10053__$1,vec__10059,priority,item_set,xs__4579__auto__,temp__4092__auto__,coll__$1){
return (function (){var s__10055__$1 = s__10055;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__10055__$1);if(temp__4092__auto____$1)
{var s__10055__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__10055__$2))
{var c__8166__auto__ = cljs.core.chunk_first(s__10055__$2);var size__8167__auto__ = cljs.core.count(c__8166__auto__);var b__10057 = cljs.core.chunk_buffer(size__8167__auto__);if((function (){var i__10056 = 0;while(true){
if((i__10056 < size__8167__auto__))
{var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8166__auto__,i__10056);cljs.core.chunk_append(b__10057,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__10077 = (i__10056 + 1);
i__10056 = G__10077;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10057),iter__10054(cljs.core.chunk_rest(s__10055__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10057),null);
}
} else
{var item = cljs.core.first(s__10055__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__10054(cljs.core.rest(s__10055__$2)));
}
} else
{return null;
}
break;
}
});})(s__10053__$1,vec__10059,priority,item_set,xs__4579__auto__,temp__4092__auto__,coll__$1))
,null,null));
});})(s__10053__$1,vec__10059,priority,item_set,xs__4579__auto__,temp__4092__auto__,coll__$1))
;var fs__8165__auto__ = cljs.core.seq(iterys__8164__auto__(item_set));if(fs__8165__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8165__auto__,iter__10052(cljs.core.rest(s__10053__$1)));
} else
{{
var G__10078 = cljs.core.rest(s__10053__$1);
s__10053__$1 = G__10078;
continue;
}
}
} else
{return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;return iter__8168__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){var self__ = this;
var this$__$1 = this;return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){var self__ = this;
var this$__$1 = this;var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));return cljs.core.seq((function (){var iter__8168__auto__ = ((function (sets,this$__$1){
return (function iter__10060(s__10061){return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){var s__10061__$1 = s__10061;while(true){
var temp__4092__auto__ = cljs.core.seq(s__10061__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__10067 = cljs.core.first(xs__4579__auto__);var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10067,0,null);var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10067,1,null);var iterys__8164__auto__ = ((function (s__10061__$1,vec__10067,priority,item_set,xs__4579__auto__,temp__4092__auto__,sets,this$__$1){
return (function iter__10062(s__10063){return (new cljs.core.LazySeq(null,((function (s__10061__$1,vec__10067,priority,item_set,xs__4579__auto__,temp__4092__auto__,sets,this$__$1){
return (function (){var s__10063__$1 = s__10063;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__10063__$1);if(temp__4092__auto____$1)
{var s__10063__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__10063__$2))
{var c__8166__auto__ = cljs.core.chunk_first(s__10063__$2);var size__8167__auto__ = cljs.core.count(c__8166__auto__);var b__10065 = cljs.core.chunk_buffer(size__8167__auto__);if((function (){var i__10064 = 0;while(true){
if((i__10064 < size__8167__auto__))
{var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8166__auto__,i__10064);cljs.core.chunk_append(b__10065,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__10079 = (i__10064 + 1);
i__10064 = G__10079;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10065),iter__10062(cljs.core.chunk_rest(s__10063__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10065),null);
}
} else
{var item = cljs.core.first(s__10063__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__10062(cljs.core.rest(s__10063__$2)));
}
} else
{return null;
}
break;
}
});})(s__10061__$1,vec__10067,priority,item_set,xs__4579__auto__,temp__4092__auto__,sets,this$__$1))
,null,null));
});})(s__10061__$1,vec__10067,priority,item_set,xs__4579__auto__,temp__4092__auto__,sets,this$__$1))
;var fs__8165__auto__ = cljs.core.seq(iterys__8164__auto__(item_set));if(fs__8165__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8165__auto__,iter__10060(cljs.core.rest(s__10061__$1)));
} else
{{
var G__10080 = cljs.core.rest(s__10061__$1);
s__10061__$1 = G__10080;
continue;
}
}
} else
{return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;return iter__8168__auto__(sets);
})());
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;return cljs.core.val(entry);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.compare;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.seq((function (){var iter__8168__auto__ = ((function (this$__$1){
return (function iter__10068(s__10069){return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){var s__10069__$1 = s__10069;while(true){
var temp__4092__auto__ = cljs.core.seq(s__10069__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__10075 = cljs.core.first(xs__4579__auto__);var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10075,0,null);var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10075,1,null);var iterys__8164__auto__ = ((function (s__10069__$1,vec__10075,priority,item_set,xs__4579__auto__,temp__4092__auto__,this$__$1){
return (function iter__10070(s__10071){return (new cljs.core.LazySeq(null,((function (s__10069__$1,vec__10075,priority,item_set,xs__4579__auto__,temp__4092__auto__,this$__$1){
return (function (){var s__10071__$1 = s__10071;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__10071__$1);if(temp__4092__auto____$1)
{var s__10071__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__10071__$2))
{var c__8166__auto__ = cljs.core.chunk_first(s__10071__$2);var size__8167__auto__ = cljs.core.count(c__8166__auto__);var b__10073 = cljs.core.chunk_buffer(size__8167__auto__);if((function (){var i__10072 = 0;while(true){
if((i__10072 < size__8167__auto__))
{var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8166__auto__,i__10072);cljs.core.chunk_append(b__10073,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__10081 = (i__10072 + 1);
i__10072 = G__10081;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__10073),iter__10070(cljs.core.chunk_rest(s__10071__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__10073),null);
}
} else
{var item = cljs.core.first(s__10071__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__10070(cljs.core.rest(s__10071__$2)));
}
} else
{return null;
}
break;
}
});})(s__10069__$1,vec__10075,priority,item_set,xs__4579__auto__,temp__4092__auto__,this$__$1))
,null,null));
});})(s__10069__$1,vec__10075,priority,item_set,xs__4579__auto__,temp__4092__auto__,this$__$1))
;var fs__8165__auto__ = cljs.core.seq(iterys__8164__auto__(item_set));if(fs__8165__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8165__auto__,iter__10068(cljs.core.rest(s__10069__$1)));
} else
{{
var G__10082 = cljs.core.rest(s__10069__$1);
s__10069__$1 = G__10082;
continue;
}
}
} else
{return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;return iter__8168__auto__(self__.priority__GT_set_of_items);
})());
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count(self__.item__GT_priority);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count(self__.item__GT_priority) === 0))
{return null;
} else
{var f = cljs.core.first(self__.priority__GT_set_of_items);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljs.core.val(f)),cljs.core.key(f)], null);
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count(self__.item__GT_priority) === 0))
{throw (new Error("Can't pop empty priority map"));
} else
{var f = cljs.core.first(self__.priority__GT_set_of_items);var item_set = cljs.core.val(f);var item = cljs.core.first(item_set);var priority = cljs.core.key(f);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
}
}
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var self__ = this;
var this$__$1 = this;return cljs.core._equiv(self__.item__GT_priority,other);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){var self__ = this;
var this$__$1 = this;return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.__hash));
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.with_meta(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){var self__ = this;
var this$__$1 = this;var priority = (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(item,cljs.core.constant$keyword$17) : self__.item__GT_priority.call(null,item,cljs.core.constant$keyword$17));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,cljs.core.constant$keyword$17))
{return this$__$1;
} else
{var item_set = (self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1 ? self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1(priority) : self__.priority__GT_set_of_items.call(null,priority));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),1))
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
} else
{return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,null));
}
}
});
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function __GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash){return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash));
});
tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
tailrecursion.priority_map.pm_empty_by = (function pm_empty_by(comparator){return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
});
tailrecursion.priority_map.read_priority_map = (function read_priority_map(elems){if(cljs.core.map_QMARK_(elems))
{return cljs.core.into(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else
{return cljs.reader.reader_error.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq(["Priority map literal expects a map for its elements."], 0));
}
});
cljs.reader.register_tag_parser_BANG_("tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
* keyval => key val
* Returns a new priority map with supplied mappings.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map = (function() { 
var priority_map__delegate = function (keyvals){var in$ = cljs.core.seq(keyvals);var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;while(true){
if(in$)
{{
var G__10083 = cljs.core.nnext(in$);
var G__10084 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__10083;
out = G__10084;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return priority_map__delegate.call(this,keyvals);};
priority_map.cljs$lang$maxFixedArity = 0;
priority_map.cljs$lang$applyTo = (function (arglist__10085){
var keyvals = cljs.core.seq(arglist__10085);
return priority_map__delegate(keyvals);
});
priority_map.cljs$core$IFn$_invoke$arity$variadic = priority_map__delegate;
return priority_map;
})()
;
/**
* keyval => key val
* Returns a new priority map with supplied
* mappings, using the supplied comparator.
* @param {...*} var_args
*/
tailrecursion.priority_map.priority_map_by = (function() { 
var priority_map_by__delegate = function (comparator,keyvals){var in$ = cljs.core.seq(keyvals);var out = tailrecursion.priority_map.pm_empty_by(comparator);while(true){
if(in$)
{{
var G__10086 = cljs.core.nnext(in$);
var G__10087 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__10086;
out = G__10087;
continue;
}
} else
{return out;
}
break;
}
};
var priority_map_by = function (comparator,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return priority_map_by__delegate.call(this,comparator,keyvals);};
priority_map_by.cljs$lang$maxFixedArity = 1;
priority_map_by.cljs$lang$applyTo = (function (arglist__10088){
var comparator = cljs.core.first(arglist__10088);
var keyvals = cljs.core.rest(arglist__10088);
return priority_map_by__delegate(comparator,keyvals);
});
priority_map_by.cljs$core$IFn$_invoke$arity$variadic = priority_map_by__delegate;
return priority_map_by;
})()
;
