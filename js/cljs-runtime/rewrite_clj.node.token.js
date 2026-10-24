goog.provide('rewrite_clj.node.token');
rewrite_clj.node.token.choose_qualifier = (function rewrite_clj$node$token$choose_qualifier(map_qualifier,sym_qualifier){
if(cljs.core.not((function (){var and__5140__auto__ = map_qualifier;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(sym_qualifier));
} else {
return and__5140__auto__;
}
})())){
var or__5142__auto__ = sym_qualifier;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return map_qualifier;
}
} else {
return null;
}
});
rewrite_clj.node.token.symbol_qualifier = (function rewrite_clj$node$token$symbol_qualifier(value){
if(cljs.core.truth_((function (){var and__5140__auto__ = (value instanceof cljs.core.Symbol);
if(and__5140__auto__){
return cljs.core.namespace(value);
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),cljs.core.namespace(value)], null);
} else {
return null;
}
});
rewrite_clj.node.token.symbol_sexpr = (function rewrite_clj$node$token$symbol_sexpr(value,map_qualifier,p__53275){
var map__53276 = p__53275;
var map__53276__$1 = cljs.core.__destructure_map(map__53276);
var auto_resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53276__$1,new cljs.core.Keyword(null,"auto-resolve","auto-resolve",1851201983));
var q = rewrite_clj.node.token.choose_qualifier(map_qualifier,rewrite_clj.node.token.symbol_qualifier(value));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var G__53277 = (cljs.core.truth_(new cljs.core.Keyword(null,"auto-resolved?","auto-resolved?",-1944476351).cljs$core$IFn$_invoke$arity$1(q))?(function (){var G__53283 = (function (){var or__5142__auto__ = (function (){var G__53284 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(q);
if((G__53284 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__53284);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"current","current",-1088038603);
}
})();
var fexpr__53282 = (function (){var or__5142__auto__ = auto_resolve;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return rewrite_clj.node.protocols.default_auto_resolve;
}
})();
return (fexpr__53282.cljs$core$IFn$_invoke$arity$1 ? fexpr__53282.cljs$core$IFn$_invoke$arity$1(G__53283) : fexpr__53282.call(null,G__53283));
})():new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(q));
if((G__53277 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53277));
}
})(),cljs.core.name(value));
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
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.token.TokenNode = (function (value,string_value,__meta,__extmap,__hash){
this.value = value;
this.string_value = string_value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.token.TokenNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k53290,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__53299 = k53290;
var G__53299__$1 = (((G__53299 instanceof cljs.core.Keyword))?G__53299.fqn:null);
switch (G__53299__$1) {
case "value":
return self__.value;

break;
case "string-value":
return self__.string_value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53290,else__5451__auto__);

}
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__53300){
var vec__53302 = p__53300;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53302,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53302,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#rewrite-clj.node.token.TokenNode{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value],null))], null),self__.__extmap));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53289){
var self__ = this;
var G__53289__$1 = this;
return (new cljs.core.RecordIter((0),G__53289__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"string-value","string-value",1109600561)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (1106307029 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53291,other53292){
var self__ = this;
var this53291__$1 = this;
return (((!((other53292 == null)))) && ((((this53291__$1.constructor === other53292.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53291__$1.value,other53292.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53291__$1.string_value,other53292.string_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53291__$1.__extmap,other53292.__extmap)))))))));
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_ndoe){
var self__ = this;
var _ndoe__$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
return self__.value;
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.count(self__.string_value);
}));

(rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.string_value;
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k53290){
var self__ = this;
var this__5455__auto____$1 = this;
var G__53328 = k53290;
var G__53328__$1 = (((G__53328 instanceof cljs.core.Keyword))?G__53328.fqn:null);
switch (G__53328__$1) {
case "value":
case "string-value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k53290);

}
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__53289){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__53329 = cljs.core.keyword_identical_QMARK_;
var expr__53330 = k__5457__auto__;
if(cljs.core.truth_((pred__53329.cljs$core$IFn$_invoke$arity$2 ? pred__53329.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__53330) : pred__53329.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__53330)))){
return (new rewrite_clj.node.token.TokenNode(G__53289,self__.string_value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53329.cljs$core$IFn$_invoke$arity$2 ? pred__53329.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string-value","string-value",1109600561),expr__53330) : pred__53329.call(null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),expr__53330)))){
return (new rewrite_clj.node.token.TokenNode(self__.value,G__53289,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__53289),null));
}
}
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value,null))], null),self__.__extmap));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__53289){
var self__ = this;
var this__5447__auto____$1 = this;
return (new rewrite_clj.node.token.TokenNode(self__.value,self__.string_value,G__53289,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.token.TokenNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(rewrite_clj.node.token.TokenNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"string-value","string-value",-1544835208,null)], null);
}));

(rewrite_clj.node.token.TokenNode.cljs$lang$type = true);

(rewrite_clj.node.token.TokenNode.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.token/TokenNode",null,(1),null));
}));

(rewrite_clj.node.token.TokenNode.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"rewrite-clj.node.token/TokenNode");
}));

/**
 * Positional factory function for rewrite-clj.node.token/TokenNode.
 */
rewrite_clj.node.token.__GT_TokenNode = (function rewrite_clj$node$token$__GT_TokenNode(value,string_value){
return (new rewrite_clj.node.token.TokenNode(value,string_value,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.token/TokenNode, taking a map of keywords to field values.
 */
rewrite_clj.node.token.map__GT_TokenNode = (function rewrite_clj$node$token$map__GT_TokenNode(G__53298){
var extmap__5490__auto__ = (function (){var G__53340 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53298,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"string-value","string-value",1109600561)], 0));
if(cljs.core.record_QMARK_(G__53298)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53340);
} else {
return G__53340;
}
})();
return (new rewrite_clj.node.token.TokenNode(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__53298),new cljs.core.Keyword(null,"string-value","string-value",1109600561).cljs$core$IFn$_invoke$arity$1(G__53298),null,cljs.core.not_empty(extmap__5490__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {rewrite_clj.node.protocols.MapQualifiable}
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
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.token.SymbolNode = (function (value,string_value,map_qualifier,__meta,__extmap,__hash){
this.value = value;
this.string_value = string_value;
this.map_qualifier = map_qualifier;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.token.SymbolNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k53344,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__53349 = k53344;
var G__53349__$1 = (((G__53349 instanceof cljs.core.Keyword))?G__53349.fqn:null);
switch (G__53349__$1) {
case "value":
return self__.value;

break;
case "string-value":
return self__.string_value;

break;
case "map-qualifier":
return self__.map_qualifier;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53344,else__5451__auto__);

}
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__53350){
var vec__53351 = p__53350;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53351,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53351,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$MapQualifiable$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$MapQualifiable$map_context_apply$arity$2 = (function (node,map_qualifier__$1){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),map_qualifier__$1);
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$MapQualifiable$map_context_clear$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),null);
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#rewrite-clj.node.token.SymbolNode{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),self__.map_qualifier],null))], null),self__.__extmap));
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53343){
var self__ = this;
var G__53343__$1 = this;
return (new cljs.core.RecordIter((0),G__53343__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"string-value","string-value",1109600561),new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new rewrite_clj.node.token.SymbolNode(self__.value,self__.string_value,self__.map_qualifier,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (2093419088 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53345,other53346){
var self__ = this;
var this53345__$1 = this;
return (((!((other53346 == null)))) && ((((this53345__$1.constructor === other53346.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53345__$1.value,other53346.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53345__$1.string_value,other53346.string_value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53345__$1.map_qualifier,other53346.map_qualifier)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53345__$1.__extmap,other53346.__extmap)))))))))));
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.token.symbol_sexpr(self__.value,self__.map_qualifier,opts);
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.count(self__.string_value);
}));

(rewrite_clj.node.token.SymbolNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.string_value;
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new rewrite_clj.node.token.SymbolNode(self__.value,self__.string_value,self__.map_qualifier,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k53344){
var self__ = this;
var this__5455__auto____$1 = this;
var G__53365 = k53344;
var G__53365__$1 = (((G__53365 instanceof cljs.core.Keyword))?G__53365.fqn:null);
switch (G__53365__$1) {
case "value":
case "string-value":
case "map-qualifier":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k53344);

}
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__53343){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__53366 = cljs.core.keyword_identical_QMARK_;
var expr__53367 = k__5457__auto__;
if(cljs.core.truth_((pred__53366.cljs$core$IFn$_invoke$arity$2 ? pred__53366.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__53367) : pred__53366.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__53367)))){
return (new rewrite_clj.node.token.SymbolNode(G__53343,self__.string_value,self__.map_qualifier,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53366.cljs$core$IFn$_invoke$arity$2 ? pred__53366.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string-value","string-value",1109600561),expr__53367) : pred__53366.call(null,new cljs.core.Keyword(null,"string-value","string-value",1109600561),expr__53367)))){
return (new rewrite_clj.node.token.SymbolNode(self__.value,G__53343,self__.map_qualifier,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53366.cljs$core$IFn$_invoke$arity$2 ? pred__53366.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),expr__53367) : pred__53366.call(null,new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),expr__53367)))){
return (new rewrite_clj.node.token.SymbolNode(self__.value,self__.string_value,G__53343,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.token.SymbolNode(self__.value,self__.string_value,self__.map_qualifier,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__53343),null));
}
}
}
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"string-value","string-value",1109600561),self__.string_value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720),self__.map_qualifier,null))], null),self__.__extmap));
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__53343){
var self__ = this;
var this__5447__auto____$1 = this;
return (new rewrite_clj.node.token.SymbolNode(self__.value,self__.string_value,self__.map_qualifier,G__53343,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.token.SymbolNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(rewrite_clj.node.token.SymbolNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"string-value","string-value",-1544835208,null),new cljs.core.Symbol(null,"map-qualifier","map-qualifier",392413807,null)], null);
}));

(rewrite_clj.node.token.SymbolNode.cljs$lang$type = true);

(rewrite_clj.node.token.SymbolNode.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.token/SymbolNode",null,(1),null));
}));

(rewrite_clj.node.token.SymbolNode.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"rewrite-clj.node.token/SymbolNode");
}));

/**
 * Positional factory function for rewrite-clj.node.token/SymbolNode.
 */
rewrite_clj.node.token.__GT_SymbolNode = (function rewrite_clj$node$token$__GT_SymbolNode(value,string_value,map_qualifier){
return (new rewrite_clj.node.token.SymbolNode(value,string_value,map_qualifier,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.token/SymbolNode, taking a map of keywords to field values.
 */
rewrite_clj.node.token.map__GT_SymbolNode = (function rewrite_clj$node$token$map__GT_SymbolNode(G__53347){
var extmap__5490__auto__ = (function (){var G__53374 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53347,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"string-value","string-value",1109600561),new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720)], 0));
if(cljs.core.record_QMARK_(G__53347)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53374);
} else {
return G__53374;
}
})();
return (new rewrite_clj.node.token.SymbolNode(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__53347),new cljs.core.Keyword(null,"string-value","string-value",1109600561).cljs$core$IFn$_invoke$arity$1(G__53347),new cljs.core.Keyword(null,"map-qualifier","map-qualifier",-1248117720).cljs$core$IFn$_invoke$arity$1(G__53347),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.token.TokenNode);
rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.token.SymbolNode);
/**
 * Returns true if `n` is a node representing a symbol.
 */
rewrite_clj.node.token.symbol_node_QMARK_ = (function rewrite_clj$node$token$symbol_node_QMARK_(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),rewrite_clj.node.protocols.node_type(n));
});
/**
 * Create node for an unspecified token of `value`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/token-node 'sym) n/string)
 * ;; => "sym"
 * 
 * (-> (n/token-node 42) n/string)
 * ;; => "42"
 * 
 * (-> (n/token-node "astring") n/string)
 * ;; => "\"astring\""
 * ```
 * 
 * To construct strings appearing over multiple lines, see [[string-node]].
 */
rewrite_clj.node.token.token_node = (function rewrite_clj$node$token$token_node(var_args){
var G__53376 = arguments.length;
switch (G__53376) {
case 1:
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$1 = (function (value){
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2(value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}));

(rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2 = (function (value,string_value){
if((value instanceof cljs.core.Symbol)){
return rewrite_clj.node.token.__GT_SymbolNode(value,string_value,null);
} else {
return rewrite_clj.node.token.__GT_TokenNode(value,string_value);
}
}));

(rewrite_clj.node.token.token_node.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=rewrite_clj.node.token.js.map
