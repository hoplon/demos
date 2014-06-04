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
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__7837__auto__,writer__7838__auto__,opt__7839__auto__){return cljs.core._write(writer__7838__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__7681__auto__ = self__.__hash;if(!((h__7681__auto__ == null)))
{return h__7681__auto__;
} else
{var h__7681__auto____$1 = cljs.core.hash_imap(this$__$1);self__.__hash = h__7681__auto____$1;
return h__7681__auto____$1;
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
var G__9875 = null;
var G__9875__2 = (function (self__,item){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__9875__3 = (function (self__,item,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__9875 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__9875__2.call(this,self__,item);
case 3:
return G__9875__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__9875;
})()
;
tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args9850){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args9850)));
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
var coll__$1 = this;return cljs.core.seq((function (){var iter__7995__auto__ = ((function (coll__$1){
return (function iter__9851(s__9852){return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){var s__9852__$1 = s__9852;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9852__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__9858 = cljs.core.first(xs__4579__auto__);var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9858,0,null);var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9858,1,null);var iterys__7991__auto__ = ((function (s__9852__$1,vec__9858,priority,item_set,xs__4579__auto__,temp__4092__auto__,coll__$1){
return (function iter__9853(s__9854){return (new cljs.core.LazySeq(null,((function (s__9852__$1,vec__9858,priority,item_set,xs__4579__auto__,temp__4092__auto__,coll__$1){
return (function (){var s__9854__$1 = s__9854;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9854__$1);if(temp__4092__auto____$1)
{var s__9854__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9854__$2))
{var c__7993__auto__ = cljs.core.chunk_first(s__9854__$2);var size__7994__auto__ = cljs.core.count(c__7993__auto__);var b__9856 = cljs.core.chunk_buffer(size__7994__auto__);if((function (){var i__9855 = 0;while(true){
if((i__9855 < size__7994__auto__))
{var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7993__auto__,i__9855);cljs.core.chunk_append(b__9856,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__9876 = (i__9855 + 1);
i__9855 = G__9876;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9856),iter__9853(cljs.core.chunk_rest(s__9854__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9856),null);
}
} else
{var item = cljs.core.first(s__9854__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__9853(cljs.core.rest(s__9854__$2)));
}
} else
{return null;
}
break;
}
});})(s__9852__$1,vec__9858,priority,item_set,xs__4579__auto__,temp__4092__auto__,coll__$1))
,null,null));
});})(s__9852__$1,vec__9858,priority,item_set,xs__4579__auto__,temp__4092__auto__,coll__$1))
;var fs__7992__auto__ = cljs.core.seq(iterys__7991__auto__(item_set));if(fs__7992__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7992__auto__,iter__9851(cljs.core.rest(s__9852__$1)));
} else
{{
var G__9877 = cljs.core.rest(s__9852__$1);
s__9852__$1 = G__9877;
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
;return iter__7995__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){var self__ = this;
var this$__$1 = this;return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){var self__ = this;
var this$__$1 = this;var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));return cljs.core.seq((function (){var iter__7995__auto__ = ((function (sets,this$__$1){
return (function iter__9859(s__9860){return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){var s__9860__$1 = s__9860;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9860__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__9866 = cljs.core.first(xs__4579__auto__);var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9866,0,null);var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9866,1,null);var iterys__7991__auto__ = ((function (s__9860__$1,vec__9866,priority,item_set,xs__4579__auto__,temp__4092__auto__,sets,this$__$1){
return (function iter__9861(s__9862){return (new cljs.core.LazySeq(null,((function (s__9860__$1,vec__9866,priority,item_set,xs__4579__auto__,temp__4092__auto__,sets,this$__$1){
return (function (){var s__9862__$1 = s__9862;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9862__$1);if(temp__4092__auto____$1)
{var s__9862__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9862__$2))
{var c__7993__auto__ = cljs.core.chunk_first(s__9862__$2);var size__7994__auto__ = cljs.core.count(c__7993__auto__);var b__9864 = cljs.core.chunk_buffer(size__7994__auto__);if((function (){var i__9863 = 0;while(true){
if((i__9863 < size__7994__auto__))
{var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7993__auto__,i__9863);cljs.core.chunk_append(b__9864,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__9878 = (i__9863 + 1);
i__9863 = G__9878;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9864),iter__9861(cljs.core.chunk_rest(s__9862__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9864),null);
}
} else
{var item = cljs.core.first(s__9862__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__9861(cljs.core.rest(s__9862__$2)));
}
} else
{return null;
}
break;
}
});})(s__9860__$1,vec__9866,priority,item_set,xs__4579__auto__,temp__4092__auto__,sets,this$__$1))
,null,null));
});})(s__9860__$1,vec__9866,priority,item_set,xs__4579__auto__,temp__4092__auto__,sets,this$__$1))
;var fs__7992__auto__ = cljs.core.seq(iterys__7991__auto__(item_set));if(fs__7992__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7992__auto__,iter__9859(cljs.core.rest(s__9860__$1)));
} else
{{
var G__9879 = cljs.core.rest(s__9860__$1);
s__9860__$1 = G__9879;
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
;return iter__7995__auto__(sets);
})());
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){var self__ = this;
var this$__$1 = this;return cljs.core.val(entry);
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.compare;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.seq((function (){var iter__7995__auto__ = ((function (this$__$1){
return (function iter__9867(s__9868){return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){var s__9868__$1 = s__9868;while(true){
var temp__4092__auto__ = cljs.core.seq(s__9868__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var vec__9874 = cljs.core.first(xs__4579__auto__);var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9874,0,null);var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9874,1,null);var iterys__7991__auto__ = ((function (s__9868__$1,vec__9874,priority,item_set,xs__4579__auto__,temp__4092__auto__,this$__$1){
return (function iter__9869(s__9870){return (new cljs.core.LazySeq(null,((function (s__9868__$1,vec__9874,priority,item_set,xs__4579__auto__,temp__4092__auto__,this$__$1){
return (function (){var s__9870__$1 = s__9870;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__9870__$1);if(temp__4092__auto____$1)
{var s__9870__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__9870__$2))
{var c__7993__auto__ = cljs.core.chunk_first(s__9870__$2);var size__7994__auto__ = cljs.core.count(c__7993__auto__);var b__9872 = cljs.core.chunk_buffer(size__7994__auto__);if((function (){var i__9871 = 0;while(true){
if((i__9871 < size__7994__auto__))
{var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7993__auto__,i__9871);cljs.core.chunk_append(b__9872,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));
{
var G__9880 = (i__9871 + 1);
i__9871 = G__9880;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__9872),iter__9869(cljs.core.chunk_rest(s__9870__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__9872),null);
}
} else
{var item = cljs.core.first(s__9870__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),iter__9869(cljs.core.rest(s__9870__$2)));
}
} else
{return null;
}
break;
}
});})(s__9868__$1,vec__9874,priority,item_set,xs__4579__auto__,temp__4092__auto__,this$__$1))
,null,null));
});})(s__9868__$1,vec__9874,priority,item_set,xs__4579__auto__,temp__4092__auto__,this$__$1))
;var fs__7992__auto__ = cljs.core.seq(iterys__7991__auto__(item_set));if(fs__7992__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7992__auto__,iter__9867(cljs.core.rest(s__9868__$1)));
} else
{{
var G__9881 = cljs.core.rest(s__9868__$1);
s__9868__$1 = G__9881;
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
;return iter__7995__auto__(self__.priority__GT_set_of_items);
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
var G__9882 = cljs.core.nnext(in$);
var G__9883 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__9882;
out = G__9883;
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
priority_map.cljs$lang$applyTo = (function (arglist__9884){
var keyvals = cljs.core.seq(arglist__9884);
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
var G__9885 = cljs.core.nnext(in$);
var G__9886 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__9885;
out = G__9886;
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
priority_map_by.cljs$lang$applyTo = (function (arglist__9887){
var comparator = cljs.core.first(arglist__9887);
var keyvals = cljs.core.rest(arglist__9887);
return priority_map_by__delegate(comparator,keyvals);
});
priority_map_by.cljs$core$IFn$_invoke$arity$variadic = priority_map_by__delegate;
return priority_map_by;
})()
;
