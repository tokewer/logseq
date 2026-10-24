goog.provide('expound.paths');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("expound","path","expound/path",-1026376555),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.sequential_QMARK_,null));

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
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
expound.paths.KeyPathSegment = (function (key,__meta,__extmap,__hash){
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(expound.paths.KeyPathSegment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k91632,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__91636 = k91632;
var G__91636__$1 = (((G__91636 instanceof cljs.core.Keyword))?G__91636.fqn:null);
switch (G__91636__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k91632,else__5451__auto__);

}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__91637){
var vec__91638 = p__91637;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91638,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91638,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#expound.paths.KeyPathSegment{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__91631){
var self__ = this;
var G__91631__$1 = this;
return (new cljs.core.RecordIter((0),G__91631__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (233526946 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this91633,other91634){
var self__ = this;
var this91633__$1 = this;
return (((!((other91634 == null)))) && ((((this91633__$1.constructor === other91634.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91633__$1.key,other91634.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91633__$1.__extmap,other91634.__extmap)))))));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k91632){
var self__ = this;
var this__5455__auto____$1 = this;
var G__91650 = k91632;
var G__91650__$1 = (((G__91650 instanceof cljs.core.Keyword))?G__91650.fqn:null);
switch (G__91650__$1) {
case "key":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k91632);

}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__91631){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__91652 = cljs.core.keyword_identical_QMARK_;
var expr__91653 = k__5457__auto__;
if(cljs.core.truth_((pred__91652.cljs$core$IFn$_invoke$arity$2 ? pred__91652.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__91653) : pred__91652.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__91653)))){
return (new expound.paths.KeyPathSegment(G__91631,self__.__meta,self__.__extmap,null));
} else {
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__91631),null));
}
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null))], null),self__.__extmap));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__91631){
var self__ = this;
var this__5447__auto____$1 = this;
return (new expound.paths.KeyPathSegment(self__.key,G__91631,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyPathSegment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(expound.paths.KeyPathSegment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(expound.paths.KeyPathSegment.cljs$lang$type = true);

(expound.paths.KeyPathSegment.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"expound.paths/KeyPathSegment",null,(1),null));
}));

(expound.paths.KeyPathSegment.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"expound.paths/KeyPathSegment");
}));

/**
 * Positional factory function for expound.paths/KeyPathSegment.
 */
expound.paths.__GT_KeyPathSegment = (function expound$paths$__GT_KeyPathSegment(key){
return (new expound.paths.KeyPathSegment(key,null,null,null));
});

/**
 * Factory function for expound.paths/KeyPathSegment, taking a map of keywords to field values.
 */
expound.paths.map__GT_KeyPathSegment = (function expound$paths$map__GT_KeyPathSegment(G__91635){
var extmap__5490__auto__ = (function (){var G__91659 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__91635,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.record_QMARK_(G__91635)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__91659);
} else {
return G__91659;
}
})();
return (new expound.paths.KeyPathSegment(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__91635),null,cljs.core.not_empty(extmap__5490__auto__),null));
});


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
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
expound.paths.KeyValuePathSegment = (function (idx,__meta,__extmap,__hash){
this.idx = idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(expound.paths.KeyValuePathSegment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k91661,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__91668 = k91661;
var G__91668__$1 = (((G__91668 instanceof cljs.core.Keyword))?G__91668.fqn:null);
switch (G__91668__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k91661,else__5451__auto__);

}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__91670){
var vec__91671 = p__91670;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91671,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91671,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#expound.paths.KeyValuePathSegment{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__91660){
var self__ = this;
var G__91660__$1 = this;
return (new cljs.core.RecordIter((0),G__91660__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (1269438429 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this91662,other91663){
var self__ = this;
var this91662__$1 = this;
return (((!((other91663 == null)))) && ((((this91662__$1.constructor === other91663.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91662__$1.idx,other91663.idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this91662__$1.__extmap,other91663.__extmap)))))));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k91661){
var self__ = this;
var this__5455__auto____$1 = this;
var G__91692 = k91661;
var G__91692__$1 = (((G__91692 instanceof cljs.core.Keyword))?G__91692.fqn:null);
switch (G__91692__$1) {
case "idx":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k91661);

}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__91660){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__91696 = cljs.core.keyword_identical_QMARK_;
var expr__91697 = k__5457__auto__;
if(cljs.core.truth_((pred__91696.cljs$core$IFn$_invoke$arity$2 ? pred__91696.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx","idx",1053688473),expr__91697) : pred__91696.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),expr__91697)))){
return (new expound.paths.KeyValuePathSegment(G__91660,self__.__meta,self__.__extmap,null));
} else {
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__91660),null));
}
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx,null))], null),self__.__extmap));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__91660){
var self__ = this;
var this__5447__auto____$1 = this;
return (new expound.paths.KeyValuePathSegment(self__.idx,G__91660,self__.__extmap,self__.__hash));
}));

(expound.paths.KeyValuePathSegment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(expound.paths.KeyValuePathSegment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
}));

(expound.paths.KeyValuePathSegment.cljs$lang$type = true);

(expound.paths.KeyValuePathSegment.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"expound.paths/KeyValuePathSegment",null,(1),null));
}));

(expound.paths.KeyValuePathSegment.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"expound.paths/KeyValuePathSegment");
}));

/**
 * Positional factory function for expound.paths/KeyValuePathSegment.
 */
expound.paths.__GT_KeyValuePathSegment = (function expound$paths$__GT_KeyValuePathSegment(idx){
return (new expound.paths.KeyValuePathSegment(idx,null,null,null));
});

/**
 * Factory function for expound.paths/KeyValuePathSegment, taking a map of keywords to field values.
 */
expound.paths.map__GT_KeyValuePathSegment = (function expound$paths$map__GT_KeyValuePathSegment(G__91664){
var extmap__5490__auto__ = (function (){var G__91706 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__91664,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(cljs.core.record_QMARK_(G__91664)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__91706);
} else {
return G__91706;
}
})();
return (new expound.paths.KeyValuePathSegment(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__91664),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

expound.paths.kps_QMARK_ = (function expound$paths$kps_QMARK_(x){
return (x instanceof expound.paths.KeyPathSegment);
});
expound.paths.kvps_QMARK_ = (function expound$paths$kvps_QMARK_(x){
return (x instanceof expound.paths.KeyValuePathSegment);
});
expound.paths.fn_equal = (function expound$paths$fn_equal(x,y){
return ((cljs.core.fn_QMARK_(x)) && (((cljs.core.fn_QMARK_(y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y], 0)))))));
});
expound.paths.both_nan_QMARK_ = (function expound$paths$both_nan_QMARK_(x,y){
var and__5140__auto__ = expound.util.nan_QMARK_(x);
if(cljs.core.truth_(and__5140__auto__)){
return expound.util.nan_QMARK_(y);
} else {
return and__5140__auto__;
}
});
expound.paths.equalish_QMARK_ = (function expound$paths$equalish_QMARK_(x,y){
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = expound.paths.fn_equal(x,y);
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
return expound.paths.both_nan_QMARK_(x,y);
}
}
});
expound.paths.in_with_kps_maps_as_seqs = (function expound$paths$in_with_kps_maps_as_seqs(form,val,in$,in_SINGLEQUOTE_){
var vec__91723 = in$;
var seq__91724 = cljs.core.seq(vec__91723);
var first__91725 = cljs.core.first(seq__91724);
var seq__91724__$1 = cljs.core.next(seq__91724);
var k = first__91725;
var rst = seq__91724__$1;
var vec__91726 = rst;
var seq__91727 = cljs.core.seq(vec__91726);
var first__91728 = cljs.core.first(seq__91727);
var seq__91727__$1 = cljs.core.next(seq__91727);
var idx = first__91728;
var rst2 = seq__91727__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),form)){
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.empty_QMARK_(in$);
if(and__5140__auto__){
return expound.paths.equalish_QMARK_(form,val);
} else {
return and__5140__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.map_QMARK_(form)) && (((cljs.core.nat_int_QMARK_(k)) && ((cljs.core.long$(k) < cljs.core.count(cljs.core.seq(form)))))))){
var G__91729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__91730 = val;
var G__91731 = rst;
var G__91732 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,expound.paths.__GT_KeyValuePathSegment(k));
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__91729,G__91730,G__91731,G__91732) : expound.paths.in_with_kps_STAR_.call(null,G__91729,G__91730,G__91731,G__91732));
} else {
if(((cljs.core.map_QMARK_(form)) && (((cljs.core.nat_int_QMARK_(k)) && (((cljs.core.int_QMARK_(idx)) && ((((cljs.core.long$(k) < cljs.core.count(cljs.core.seq(form)))) && ((cljs.core.long$(idx) < cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k)))))))))))){
var G__91733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k),idx);
var G__91734 = val;
var G__91735 = rst2;
var G__91736 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(in_SINGLEQUOTE_,expound.paths.__GT_KeyValuePathSegment(k),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([idx], 0));
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__91733,G__91734,G__91735,G__91736) : expound.paths.in_with_kps_STAR_.call(null,G__91733,G__91734,G__91735,G__91736));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_fuzzy_match_for_regex_failures = (function expound$paths$in_with_kps_fuzzy_match_for_regex_failures(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795))){
return form;
} else {
var vec__91737 = in$;
var seq__91738 = cljs.core.seq(vec__91737);
var first__91739 = cljs.core.first(seq__91738);
var seq__91738__$1 = cljs.core.next(seq__91738);
var k = first__91739;
var rst = seq__91738__$1;
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.empty_QMARK_(in$);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.seqable_QMARK_(form);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,cljs.core.List.EMPTY);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.empty_QMARK_(in$)) && (((cljs.core.seq_QMARK_(val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.first(val))))))){
return in_SINGLEQUOTE_;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.nat_int_QMARK_(k);
if(and__5140__auto__){
return cljs.core.seqable_QMARK_(form);
} else {
return and__5140__auto__;
}
})())){
var G__91747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.seq(form),k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795));
var G__91748 = val;
var G__91749 = rst;
var G__91750 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,k);
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__91747,G__91748,G__91749,G__91750) : expound.paths.in_with_kps_STAR_.call(null,G__91747,G__91748,G__91749,G__91750));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_ints_are_keys = (function expound$paths$in_with_kps_ints_are_keys(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795))){
return form;
} else {
var vec__91751 = in$;
var seq__91752 = cljs.core.seq(vec__91751);
var first__91753 = cljs.core.first(seq__91752);
var seq__91752__$1 = cljs.core.next(seq__91752);
var k = first__91753;
var rst = seq__91752__$1;
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.empty_QMARK_(in$);
if(and__5140__auto__){
return expound.paths.equalish_QMARK_(form,val);
} else {
return and__5140__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(cljs.core.associative_QMARK_(form)){
var G__91754 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(form,k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795));
var G__91755 = val;
var G__91756 = rst;
var G__91757 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,k);
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__91754,G__91755,G__91756,G__91757) : expound.paths.in_with_kps_STAR_.call(null,G__91754,G__91755,G__91756,G__91757));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.int_QMARK_(k);
if(and__5140__auto__){
return cljs.core.seqable_QMARK_(form);
} else {
return and__5140__auto__;
}
})())){
var G__91758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.seq(form),k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795));
var G__91759 = val;
var G__91760 = rst;
var G__91761 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,k);
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__91758,G__91759,G__91760,G__91761) : expound.paths.in_with_kps_STAR_.call(null,G__91758,G__91759,G__91760,G__91761));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_ints_are_key_value_indicators = (function expound$paths$in_with_kps_ints_are_key_value_indicators(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795))){
return form;
} else {
var vec__91765 = in$;
var seq__91766 = cljs.core.seq(vec__91765);
var first__91767 = cljs.core.first(seq__91766);
var seq__91766__$1 = cljs.core.next(seq__91766);
var k = first__91767;
var rst = seq__91766__$1;
var vec__91768 = rst;
var seq__91769 = cljs.core.seq(vec__91768);
var first__91770 = cljs.core.first(seq__91769);
var seq__91769__$1 = cljs.core.next(seq__91769);
var idx = first__91770;
var rst2 = seq__91769__$1;
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.empty_QMARK_(in$);
if(and__5140__auto__){
return expound.paths.equalish_QMARK_(form,val);
} else {
return and__5140__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.map_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),idx)))){
var G__91774 = k;
var G__91775 = val;
var G__91776 = rst2;
var G__91777 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,expound.paths.__GT_KeyPathSegment(k));
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__91774,G__91775,G__91776,G__91777) : expound.paths.in_with_kps_STAR_.call(null,G__91774,G__91775,G__91776,G__91777));
} else {
if(((cljs.core.map_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),idx)))){
var G__91778 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(form,k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795));
var G__91779 = val;
var G__91780 = rst2;
var G__91781 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in_SINGLEQUOTE_,k);
return (expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4 ? expound.paths.in_with_kps_STAR_.cljs$core$IFn$_invoke$arity$4(G__91778,G__91779,G__91780,G__91781) : expound.paths.in_with_kps_STAR_.call(null,G__91778,G__91779,G__91780,G__91781));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_STAR_ = (function expound$paths$in_with_kps_STAR_(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core.fn_QMARK_(form)){
return in_SINGLEQUOTE_;
} else {
var br1 = expound.paths.in_with_kps_ints_are_key_value_indicators(form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br1)){
return br1;
} else {
var br2 = expound.paths.in_with_kps_maps_as_seqs(form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br2)){
return br2;
} else {
var br3 = expound.paths.in_with_kps_ints_are_keys(form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br3)){
return br3;
} else {
var br4 = expound.paths.in_with_kps_fuzzy_match_for_regex_failures(form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br4)){
return br4;
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);
}
}
}
}
}
});
expound.paths.paths_to_value = (function expound$paths$paths_to_value(form,val,path,paths){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,val)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(paths,path);
} else {
if(((cljs.core.sequential_QMARK_(form)) || (cljs.core.set_QMARK_(form)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ps,p__91798){
var vec__91799 = p__91798;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91799,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91799,(1),null);
var G__91802 = x;
var G__91803 = val;
var G__91804 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
var G__91805 = ps;
return (expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4 ? expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4(G__91802,G__91803,G__91804,G__91805) : expound.paths.paths_to_value.call(null,G__91802,G__91803,G__91804,G__91805));
}),paths,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,form,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
} else {
if(cljs.core.map_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ps,p__91806){
var vec__91807 = p__91806;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91807,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91807,(1),null);
var G__91810 = v;
var G__91811 = val;
var G__91812 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
var G__91813 = (function (){var G__91817 = k;
var G__91818 = val;
var G__91819 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,expound.paths.__GT_KeyPathSegment(k));
var G__91820 = ps;
return (expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4 ? expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4(G__91817,G__91818,G__91819,G__91820) : expound.paths.paths_to_value.call(null,G__91817,G__91818,G__91819,G__91820));
})();
return (expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4 ? expound.paths.paths_to_value.cljs$core$IFn$_invoke$arity$4(G__91810,G__91811,G__91812,G__91813) : expound.paths.paths_to_value.call(null,G__91810,G__91811,G__91812,G__91813));
}),paths,form);
} else {
return paths;

}
}
}
});
expound.paths.in_with_kps = (function expound$paths$in_with_kps(form,val,in$,in_SINGLEQUOTE_){
var res = expound.paths.in_with_kps_STAR_(form,val,in$,in_SINGLEQUOTE_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),res)){
return null;
} else {
return res;
}
});
expound.paths.compare_path_segment = (function expound$paths$compare_path_segment(x,y){
if(((cljs.core.int_QMARK_(x)) && (expound.paths.kvps_QMARK_(y)))){
return cljs.core.compare(x,new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(y));
} else {
if(((expound.paths.kvps_QMARK_(x)) && (cljs.core.int_QMARK_(y)))){
return cljs.core.compare(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(x),y);
} else {
if(((expound.paths.kps_QMARK_(x)) && ((!(expound.paths.kps_QMARK_(y)))))){
return (-1);
} else {
if((((!(expound.paths.kps_QMARK_(x)))) && (expound.paths.kps_QMARK_(y)))){
return (1);
} else {
if(((cljs.core.vector_QMARK_(x)) && (cljs.core.vector_QMARK_(y)))){
return (expound.paths.compare_paths.cljs$core$IFn$_invoke$arity$2 ? expound.paths.compare_paths.cljs$core$IFn$_invoke$arity$2(x,y) : expound.paths.compare_paths.call(null,x,y));
} else {
return cljs.core.compare(x,y);

}
}
}
}
}
});
expound.paths.compare_paths = (function expound$paths$compare_paths(path1,path2){
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(expound.paths.compare_path_segment,path1,path2)));
});
/**
 * Similar to get-in, but works with paths that reference map keys
 */
expound.paths.value_in = (function expound$paths$value_in(form,in$){
while(true){
if((in$ == null)){
return form;
} else {
var vec__91825 = in$;
var seq__91826 = cljs.core.seq(vec__91825);
var first__91827 = cljs.core.first(seq__91826);
var seq__91826__$1 = cljs.core.next(seq__91826);
var k = first__91827;
var rst = seq__91826__$1;
if(cljs.core.empty_QMARK_(in$)){
return form;
} else {
if(((cljs.core.map_QMARK_(form)) && (expound.paths.kps_QMARK_(k)))){
var G__91867 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(k);
var G__91868 = rst;
form = G__91867;
in$ = G__91868;
continue;
} else {
if(((cljs.core.map_QMARK_(form)) && (expound.paths.kvps_QMARK_(k)))){
var G__91869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(k));
var G__91870 = rst;
form = G__91869;
in$ = G__91870;
continue;
} else {
if(cljs.core.associative_QMARK_(form)){
var G__91871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,k);
var G__91872 = rst;
form = G__91871;
in$ = G__91872;
continue;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.int_QMARK_(k);
if(and__5140__auto__){
return cljs.core.seqable_QMARK_(form);
} else {
return and__5140__auto__;
}
})())){
var G__91873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(form),k);
var G__91874 = rst;
form = G__91873;
in$ = G__91874;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No value found",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));

}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=expound.paths.js.map
