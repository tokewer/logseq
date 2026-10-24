goog.provide('frontend.search.browser');

/**
* @constructor
 * @implements {frontend.search.protocol.Engine}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.search.browser.Browser = (function (repo,__meta,__extmap,__hash){
this.repo = repo;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.search.browser.Browser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(frontend.search.browser.Browser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k60920,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__60931 = k60920;
var G__60931__$1 = (((G__60931 instanceof cljs.core.Keyword))?G__60931.fqn:null);
switch (G__60931__$1) {
case "repo":
return self__.repo;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60920,else__5451__auto__);

}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__60932){
var vec__60933 = p__60932;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60933,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60933,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(frontend.search.browser.Browser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#frontend.search.browser.Browser{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo],null))], null),self__.__extmap));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60919){
var self__ = this;
var G__60919__$1 = this;
return (new cljs.core.RecordIter((0),G__60919__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repo","repo",-1999060679)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(frontend.search.browser.Browser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new frontend.search.browser.Browser(self__.repo,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.search.browser.Browser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1998111184 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60921,other60922){
var self__ = this;
var this60921__$1 = this;
return (((!((other60922 == null)))) && ((((this60921__$1.constructor === other60922.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60921__$1.repo,other60922.repo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60921__$1.__extmap,other60922.__extmap)))))));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new frontend.search.browser.Browser(self__.repo,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k60920){
var self__ = this;
var this__5455__auto____$1 = this;
var G__60945 = k60920;
var G__60945__$1 = (((G__60945 instanceof cljs.core.Keyword))?G__60945.fqn:null);
switch (G__60945__$1) {
case "repo":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60920);

}
}));

(frontend.search.browser.Browser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__60919){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__60948 = cljs.core.keyword_identical_QMARK_;
var expr__60949 = k__5457__auto__;
if(cljs.core.truth_((pred__60948.cljs$core$IFn$_invoke$arity$2 ? pred__60948.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__60949) : pred__60948.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__60949)))){
return (new frontend.search.browser.Browser(G__60919,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.search.browser.Browser(self__.repo,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__60919),null));
}
}));

(frontend.search.browser.Browser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo,null))], null),self__.__extmap));
}));

(frontend.search.browser.Browser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__60919){
var self__ = this;
var this__5447__auto____$1 = this;
return (new frontend.search.browser.Browser(self__.repo,G__60919,self__.__extmap,self__.__hash));
}));

(frontend.search.browser.Browser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$query$arity$3 = (function (_this,q,option){
var self__ = this;
var _this__$1 = this;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","search-blocks","thread-api/search-blocks",1217984294),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),q,option], 0));
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$rebuild_pages_indice_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","search-build-pages-indice","thread-api/search-build-pages-indice",-658848803),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.repo], 0));
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$rebuild_blocks_indice_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","search-build-blocks-indice-in-worker","thread-api/search-build-blocks-indice-in-worker",-1993640480),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),true], 0));
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$transact_blocks_BANG_$arity$2 = (function (_this,p__60986){
var self__ = this;
var map__60989 = p__60986;
var map__60989__$1 = cljs.core.__destructure_map(map__60989);
var blocks_to_remove_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60989__$1,new cljs.core.Keyword(null,"blocks-to-remove-set","blocks-to-remove-set",266406009));
var blocks_to_add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60989__$1,new cljs.core.Keyword(null,"blocks-to-add","blocks-to-add",-814061792));
var _this__$1 = this;
var repo__$1 = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(blocks_to_remove_set))?frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","search-delete-blocks","thread-api/search-delete-blocks",2049847839),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo__$1,blocks_to_remove_set], 0)):null)),(function (_){
return promesa.protocols._promise(((cljs.core.seq(blocks_to_add))?frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","search-upsert-blocks","thread-api/search-upsert-blocks",802527035),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo__$1,blocks_to_add], 0)):null));
}));
}));
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$truncate_blocks_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","search-truncate-tables","thread-api/search-truncate-tables",-2046581559),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo()], 0));
}));

(frontend.search.browser.Browser.prototype.frontend$search$protocol$Engine$remove_db_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return promesa.core.resolved(null);
}));

(frontend.search.browser.Browser.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"repo","repo",-358529152,null)], null);
}));

(frontend.search.browser.Browser.cljs$lang$type = true);

(frontend.search.browser.Browser.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"frontend.search.browser/Browser",null,(1),null));
}));

(frontend.search.browser.Browser.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"frontend.search.browser/Browser");
}));

/**
 * Positional factory function for frontend.search.browser/Browser.
 */
frontend.search.browser.__GT_Browser = (function frontend$search$browser$__GT_Browser(repo){
return (new frontend.search.browser.Browser(repo,null,null,null));
});

/**
 * Factory function for frontend.search.browser/Browser, taking a map of keywords to field values.
 */
frontend.search.browser.map__GT_Browser = (function frontend$search$browser$map__GT_Browser(G__60925){
var extmap__5490__auto__ = (function (){var G__61012 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60925,new cljs.core.Keyword(null,"repo","repo",-1999060679));
if(cljs.core.record_QMARK_(G__60925)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61012);
} else {
return G__61012;
}
})();
return (new frontend.search.browser.Browser(new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__60925),null,cljs.core.not_empty(extmap__5490__auto__),null));
});


//# sourceMappingURL=frontend.search.browser.js.map
