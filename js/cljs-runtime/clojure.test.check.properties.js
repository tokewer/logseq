goog.provide('clojure.test.check.properties');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {clojure.test.check.results.Result}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.test.check.properties.ErrorResult = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(clojure.test.check.properties.ErrorResult.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k101683,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__101687 = k101683;
var G__101687__$1 = (((G__101687 instanceof cljs.core.Keyword))?G__101687.fqn:null);
switch (G__101687__$1) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k101683,else__5451__auto__);

}
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__101690){
var vec__101691 = p__101690;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101691,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101691,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#clojure.test.check.properties.ErrorResult{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__101682){
var self__ = this;
var G__101682__$1 = this;
return (new cljs.core.RecordIter((0),G__101682__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new clojure.test.check.properties.ErrorResult(self__.error,self__.__meta,self__.__extmap,self__.__hash));
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-12654282 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(clojure.test.check.properties.ErrorResult.prototype.clojure$test$check$results$Result$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.test.check.properties.ErrorResult.prototype.clojure$test$check$results$Result$pass_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(clojure.test.check.properties.ErrorResult.prototype.clojure$test$check$results$Result$result_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check.properties","error","clojure.test.check.properties/error",483933635),self__.error], null);
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this101684,other101685){
var self__ = this;
var this101684__$1 = this;
return (((!((other101685 == null)))) && ((((this101684__$1.constructor === other101685.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this101684__$1.error,other101685.error)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this101684__$1.__extmap,other101685.__extmap)))))));
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new clojure.test.check.properties.ErrorResult(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k101683){
var self__ = this;
var this__5455__auto____$1 = this;
var G__101712 = k101683;
var G__101712__$1 = (((G__101712 instanceof cljs.core.Keyword))?G__101712.fqn:null);
switch (G__101712__$1) {
case "error":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k101683);

}
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__101682){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__101714 = cljs.core.keyword_identical_QMARK_;
var expr__101715 = k__5457__auto__;
if(cljs.core.truth_((pred__101714.cljs$core$IFn$_invoke$arity$2 ? pred__101714.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),expr__101715) : pred__101714.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__101715)))){
return (new clojure.test.check.properties.ErrorResult(G__101682,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.properties.ErrorResult(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__101682),null));
}
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error","error",-978969032),self__.error,null))], null),self__.__extmap));
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__101682){
var self__ = this;
var this__5447__auto____$1 = this;
return (new clojure.test.check.properties.ErrorResult(self__.error,G__101682,self__.__extmap,self__.__hash));
}));

(clojure.test.check.properties.ErrorResult.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(clojure.test.check.properties.ErrorResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
}));

(clojure.test.check.properties.ErrorResult.cljs$lang$type = true);

(clojure.test.check.properties.ErrorResult.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"clojure.test.check.properties/ErrorResult",null,(1),null));
}));

(clojure.test.check.properties.ErrorResult.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"clojure.test.check.properties/ErrorResult");
}));

/**
 * Positional factory function for clojure.test.check.properties/ErrorResult.
 */
clojure.test.check.properties.__GT_ErrorResult = (function clojure$test$check$properties$__GT_ErrorResult(error){
return (new clojure.test.check.properties.ErrorResult(error,null,null,null));
});

/**
 * Factory function for clojure.test.check.properties/ErrorResult, taking a map of keywords to field values.
 */
clojure.test.check.properties.map__GT_ErrorResult = (function clojure$test$check$properties$map__GT_ErrorResult(G__101686){
var extmap__5490__auto__ = (function (){var G__101725 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__101686,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.record_QMARK_(G__101686)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__101725);
} else {
return G__101725;
}
})();
return (new clojure.test.check.properties.ErrorResult(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__101686),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

clojure.test.check.properties.exception_QMARK_ = (function clojure$test$check$properties$exception_QMARK_(x){
return (x instanceof Error);
});
clojure.test.check.properties.apply_gen = (function clojure$test$check$properties$apply_gen(function$){
return (function (args){
var result = (function (){try{var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(function$,args);
if(clojure.test.check.properties.exception_QMARK_(ret)){
throw ret;
} else {
return ret;
}
}catch (e101726){var ex = e101726;
return clojure.test.check.properties.__GT_ErrorResult(ex);
}})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
});
});
/**
 * A function version of `for-all`. Takes a sequence of N generators
 *   and a function of N args, and returns a property that calls the
 *   function with generated values and tests the return value for
 *   truthiness, like with `for-all`.
 * 
 *   Example:
 * 
 *   (for-all* [gen/large-integer gen/large-integer]
 *          (fn [a b] (>= (+ a b) a)))
 */
clojure.test.check.properties.for_all_STAR_ = (function clojure$test$check$properties$for_all_STAR_(args,function$){
return clojure.test.check.generators.fmap(clojure.test.check.properties.apply_gen(function$),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,args));
});
clojure.test.check.properties.binding_vars = (function clojure$test$check$properties$binding_vars(bindings){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
});
clojure.test.check.properties.binding_gens = (function clojure$test$check$properties$binding_gens(bindings){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
});

//# sourceMappingURL=clojure.test.check.properties.js.map
