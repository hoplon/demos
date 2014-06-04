// Compiled by ClojureScript 0.0-2227
goog.provide('tailrecursion.hoplon.storage_atom');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
tailrecursion.hoplon.storage_atom.IStorageBackend = (function (){var obj11099 = {};return obj11099;
})();
tailrecursion.hoplon.storage_atom._get = (function _get(this$,not_found){if((function (){var and__7257__auto__ = this$;if(and__7257__auto__)
{return this$.tailrecursion$hoplon$storage_atom$IStorageBackend$_get$arity$2;
} else
{return and__7257__auto__;
}
})())
{return this$.tailrecursion$hoplon$storage_atom$IStorageBackend$_get$arity$2(this$,not_found);
} else
{var x__7896__auto__ = (((this$ == null))?null:this$);return (function (){var or__7269__auto__ = (tailrecursion.hoplon.storage_atom._get[goog.typeOf(x__7896__auto__)]);if(or__7269__auto__)
{return or__7269__auto__;
} else
{var or__7269__auto____$1 = (tailrecursion.hoplon.storage_atom._get["_"]);if(or__7269__auto____$1)
{return or__7269__auto____$1;
} else
{throw cljs.core.missing_protocol("IStorageBackend.-get",this$);
}
}
})().call(null,this$,not_found);
}
});
tailrecursion.hoplon.storage_atom._commit_BANG_ = (function _commit_BANG_(this$,value){if((function (){var and__7257__auto__ = this$;if(and__7257__auto__)
{return this$.tailrecursion$hoplon$storage_atom$IStorageBackend$_commit_BANG_$arity$2;
} else
{return and__7257__auto__;
}
})())
{return this$.tailrecursion$hoplon$storage_atom$IStorageBackend$_commit_BANG_$arity$2(this$,value);
} else
{var x__7896__auto__ = (((this$ == null))?null:this$);return (function (){var or__7269__auto__ = (tailrecursion.hoplon.storage_atom._commit_BANG_[goog.typeOf(x__7896__auto__)]);if(or__7269__auto__)
{return or__7269__auto__;
} else
{var or__7269__auto____$1 = (tailrecursion.hoplon.storage_atom._commit_BANG_["_"]);if(or__7269__auto____$1)
{return or__7269__auto____$1;
} else
{throw cljs.core.missing_protocol("IStorageBackend.-commit!",this$);
}
}
})().call(null,this$,value);
}
});

/**
* @constructor
*/
tailrecursion.hoplon.storage_atom.StorageBackend = (function (store,key){
this.store = store;
this.key = key;
})
tailrecursion.hoplon.storage_atom.StorageBackend.cljs$lang$type = true;
tailrecursion.hoplon.storage_atom.StorageBackend.cljs$lang$ctorStr = "tailrecursion.hoplon.storage-atom/StorageBackend";
tailrecursion.hoplon.storage_atom.StorageBackend.cljs$lang$ctorPrWriter = (function (this__7836__auto__,writer__7837__auto__,opt__7838__auto__){return cljs.core._write(writer__7837__auto__,"tailrecursion.hoplon.storage-atom/StorageBackend");
});
tailrecursion.hoplon.storage_atom.StorageBackend.prototype.tailrecursion$hoplon$storage_atom$IStorageBackend$ = true;
tailrecursion.hoplon.storage_atom.StorageBackend.prototype.tailrecursion$hoplon$storage_atom$IStorageBackend$_get$arity$2 = (function (this$,not_found){var self__ = this;
var this$__$1 = this;var temp__4090__auto__ = self__.store.getItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.key], 0)));if(cljs.core.truth_(temp__4090__auto__))
{var existing = temp__4090__auto__;return cljs.reader.read_string(existing);
} else
{return not_found;
}
});
tailrecursion.hoplon.storage_atom.StorageBackend.prototype.tailrecursion$hoplon$storage_atom$IStorageBackend$_commit_BANG_$arity$2 = (function (this$,value){var self__ = this;
var this$__$1 = this;return self__.store.setItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.key], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)));
});
tailrecursion.hoplon.storage_atom.__GT_StorageBackend = (function __GT_StorageBackend(store,key){return (new tailrecursion.hoplon.storage_atom.StorageBackend(store,key));
});
tailrecursion.hoplon.storage_atom.store = (function store(atom,backend){var existing = tailrecursion.hoplon.storage_atom._get(backend,cljs.core.constant$keyword$42);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$42,existing))
{tailrecursion.hoplon.storage_atom._commit_BANG_(backend,cljs.core.deref(atom));
} else
{cljs.core.reset_BANG_(atom,existing);
}
var G__11105 = atom;cljs.core.add_watch(G__11105,cljs.core.constant$keyword$43,((function (G__11105,existing){
return (function (p1__11101_SHARP_,p2__11102_SHARP_,p3__11103_SHARP_,p4__11100_SHARP_){return tailrecursion.hoplon.storage_atom._commit_BANG_(backend,p4__11100_SHARP_);
});})(G__11105,existing))
);
return G__11105;
});
tailrecursion.hoplon.storage_atom.html_storage = (function html_storage(atom,storage,k){return tailrecursion.hoplon.storage_atom.store(atom,(new tailrecursion.hoplon.storage_atom.StorageBackend(storage,k)));
});
tailrecursion.hoplon.storage_atom.local_storage = (function local_storage(atom,k){return tailrecursion.hoplon.storage_atom.html_storage(atom,localStorage,k);
});
tailrecursion.hoplon.storage_atom.session_storage = (function session_storage(atom,k){return tailrecursion.hoplon.storage_atom.html_storage(atom,sessionStorage,k);
});
