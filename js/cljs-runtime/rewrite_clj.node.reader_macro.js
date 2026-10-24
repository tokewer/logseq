goog.provide('rewrite_clj.node.reader_macro');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
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
rewrite_clj.node.reader_macro.ReaderNode = (function (tag,prefix,suffix,sexpr_fn,sexpr_count,children,__meta,__extmap,__hash){
this.tag = tag;
this.prefix = prefix;
this.suffix = suffix;
this.sexpr_fn = sexpr_fn;
this.sexpr_count = sexpr_count;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.reader_macro.ReaderNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k53247,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__53254 = k53247;
var G__53254__$1 = (((G__53254 instanceof cljs.core.Keyword))?G__53254.fqn:null);
switch (G__53254__$1) {
case "tag":
return self__.tag;

break;
case "prefix":
return self__.prefix;

break;
case "suffix":
return self__.suffix;

break;
case "sexpr-fn":
return self__.sexpr_fn;

break;
case "sexpr-count":
return self__.sexpr_count;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53247,else__5451__auto__);

}
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__53259){
var vec__53260 = p__53259;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53260,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53260,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#rewrite-clj.node.reader-macro.ReaderNode{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),self__.sexpr_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),self__.sexpr_count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53246){
var self__ = this;
var G__53246__$1 = this;
return (new cljs.core.RecordIter((0),G__53246__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (1051800113 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53248,other53249){
var self__ = this;
var this53248__$1 = this;
return (((!((other53249 == null)))) && ((((this53248__$1.constructor === other53249.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53248__$1.tag,other53249.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53248__$1.prefix,other53249.prefix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53248__$1.suffix,other53249.suffix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53248__$1.sexpr_fn,other53249.sexpr_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53248__$1.sexpr_count,other53249.sexpr_count)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53248__$1.children,other53249.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53248__$1.__extmap,other53249.__extmap)))))))))))))))));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.tag;
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"reader","reader",169660853);
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.not(self__.sexpr_fn);
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
if(cljs.core.truth_(self__.sexpr_fn)){
var G__53286 = rewrite_clj.node.protocols.sexprs.cljs$core$IFn$_invoke$arity$2(self__.children,opts);
return (self__.sexpr_fn.cljs$core$IFn$_invoke$arity$1 ? self__.sexpr_fn.cljs$core$IFn$_invoke$arity$1(G__53286) : self__.sexpr_fn.call(null,G__53286));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported operation",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (((rewrite_clj.node.protocols.sum_lengths(self__.children) + (1)) + cljs.core.count(self__.prefix)) + cljs.core.count(self__.suffix));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings(self__.children))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.suffix));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.children;
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.sexpr_count)){
rewrite_clj.node.protocols.assert_sexpr_count(children_SINGLEQUOTE_,self__.sexpr_count);
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$InnerNode$leader_length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (cljs.core.count(self__.prefix) + (1));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k53247){
var self__ = this;
var this__5455__auto____$1 = this;
var G__53301 = k53247;
var G__53301__$1 = (((G__53301 instanceof cljs.core.Keyword))?G__53301.fqn:null);
switch (G__53301__$1) {
case "tag":
case "prefix":
case "suffix":
case "sexpr-fn":
case "sexpr-count":
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k53247);

}
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__53246){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__53305 = cljs.core.keyword_identical_QMARK_;
var expr__53306 = k__5457__auto__;
if(cljs.core.truth_((pred__53305.cljs$core$IFn$_invoke$arity$2 ? pred__53305.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__53306) : pred__53305.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__53306)))){
return (new rewrite_clj.node.reader_macro.ReaderNode(G__53246,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53305.cljs$core$IFn$_invoke$arity$2 ? pred__53305.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__53306) : pred__53305.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__53306)))){
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,G__53246,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53305.cljs$core$IFn$_invoke$arity$2 ? pred__53305.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__53306) : pred__53305.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__53306)))){
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,G__53246,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53305.cljs$core$IFn$_invoke$arity$2 ? pred__53305.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),expr__53306) : pred__53305.call(null,new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),expr__53306)))){
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,G__53246,self__.sexpr_count,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53305.cljs$core$IFn$_invoke$arity$2 ? pred__53305.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),expr__53306) : pred__53305.call(null,new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),expr__53306)))){
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,G__53246,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53305.cljs$core$IFn$_invoke$arity$2 ? pred__53305.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__53306) : pred__53305.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__53306)))){
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,G__53246,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__53246),null));
}
}
}
}
}
}
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),self__.sexpr_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),self__.sexpr_count,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__53246){
var self__ = this;
var this__5447__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.ReaderNode(self__.tag,self__.prefix,self__.suffix,self__.sexpr_fn,self__.sexpr_count,self__.children,G__53246,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.reader_macro.ReaderNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(rewrite_clj.node.reader_macro.ReaderNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"sexpr-fn","sexpr-fn",425590113,null),new cljs.core.Symbol(null,"sexpr-count","sexpr-count",-1763900812,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.reader_macro.ReaderNode.cljs$lang$type = true);

(rewrite_clj.node.reader_macro.ReaderNode.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.reader-macro/ReaderNode",null,(1),null));
}));

(rewrite_clj.node.reader_macro.ReaderNode.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"rewrite-clj.node.reader-macro/ReaderNode");
}));

/**
 * Positional factory function for rewrite-clj.node.reader-macro/ReaderNode.
 */
rewrite_clj.node.reader_macro.__GT_ReaderNode = (function rewrite_clj$node$reader_macro$__GT_ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children){
return (new rewrite_clj.node.reader_macro.ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.reader-macro/ReaderNode, taking a map of keywords to field values.
 */
rewrite_clj.node.reader_macro.map__GT_ReaderNode = (function rewrite_clj$node$reader_macro$map__GT_ReaderNode(G__53250){
var extmap__5490__auto__ = (function (){var G__53317 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53250,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__53250)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53317);
} else {
return G__53317;
}
})();
return (new rewrite_clj.node.reader_macro.ReaderNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__53250),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__53250),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__53250),new cljs.core.Keyword(null,"sexpr-fn","sexpr-fn",-1214941414).cljs$core$IFn$_invoke$arity$1(G__53250),new cljs.core.Keyword(null,"sexpr-count","sexpr-count",890534957).cljs$core$IFn$_invoke$arity$1(G__53250),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__53250),null,cljs.core.not_empty(extmap__5490__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
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
rewrite_clj.node.reader_macro.ReaderMacroNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k53321,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__53332 = k53321;
var G__53332__$1 = (((G__53332 instanceof cljs.core.Keyword))?G__53332.fqn:null);
switch (G__53332__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53321,else__5451__auto__);

}
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__53334){
var vec__53335 = p__53334;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53335,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53335,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#rewrite-clj.node.reader-macro.ReaderMacroNode{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53320){
var self__ = this;
var G__53320__$1 = this;
return (new cljs.core.RecordIter((0),G__53320__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (856986356 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53324,other53325){
var self__ = this;
var this53324__$1 = this;
return (((!((other53325 == null)))) && ((((this53324__$1.constructor === other53325.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53324__$1.children,other53325.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53324__$1.__extmap,other53325.__extmap)))))));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422);
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422);
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (node,_opts){
var self__ = this;
var node__$1 = this;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),(new cljs.core.List(null,node__$1.rewrite_clj$node$protocols$Node$string$arity$1(null),null,(1),null)),(2),null));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (rewrite_clj.node.protocols.sum_lengths(self__.children) + (1));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings(self__.children)));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.children;
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_clj.node.protocols.assert_sexpr_count(children_SINGLEQUOTE_,(2));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$InnerNode$leader_length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (1);
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k53321){
var self__ = this;
var this__5455__auto____$1 = this;
var G__53355 = k53321;
var G__53355__$1 = (((G__53355 instanceof cljs.core.Keyword))?G__53355.fqn:null);
switch (G__53355__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k53321);

}
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__53320){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__53356 = cljs.core.keyword_identical_QMARK_;
var expr__53357 = k__5457__auto__;
if(cljs.core.truth_((pred__53356.cljs$core$IFn$_invoke$arity$2 ? pred__53356.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__53357) : pred__53356.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__53357)))){
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(G__53320,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__53320),null));
}
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__53320){
var self__ = this;
var this__5447__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(self__.children,G__53320,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.cljs$lang$type = true);

(rewrite_clj.node.reader_macro.ReaderMacroNode.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.reader-macro/ReaderMacroNode",null,(1),null));
}));

(rewrite_clj.node.reader_macro.ReaderMacroNode.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"rewrite-clj.node.reader-macro/ReaderMacroNode");
}));

/**
 * Positional factory function for rewrite-clj.node.reader-macro/ReaderMacroNode.
 */
rewrite_clj.node.reader_macro.__GT_ReaderMacroNode = (function rewrite_clj$node$reader_macro$__GT_ReaderMacroNode(children){
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.reader-macro/ReaderMacroNode, taking a map of keywords to field values.
 */
rewrite_clj.node.reader_macro.map__GT_ReaderMacroNode = (function rewrite_clj$node$reader_macro$map__GT_ReaderMacroNode(G__53327){
var extmap__5490__auto__ = (function (){var G__53359 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53327,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_(G__53327)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53359);
} else {
return G__53359;
}
})();
return (new rewrite_clj.node.reader_macro.ReaderMacroNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__53327),null,cljs.core.not_empty(extmap__5490__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
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
rewrite_clj.node.reader_macro.DerefNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.reader_macro.DerefNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k53361,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__53369 = k53361;
var G__53369__$1 = (((G__53369 instanceof cljs.core.Keyword))?G__53369.fqn:null);
switch (G__53369__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53361,else__5451__auto__);

}
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__53370){
var vec__53371 = p__53370;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53371,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53371,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#rewrite-clj.node.reader-macro.DerefNode{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53360){
var self__ = this;
var G__53360__$1 = this;
return (new cljs.core.RecordIter((0),G__53360__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1560233006 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53362,other53363){
var self__ = this;
var this53362__$1 = this;
return (((!((other53363 == null)))) && ((((this53362__$1.constructor === other53363.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53362__$1.children,other53363.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53362__$1.__extmap,other53363.__extmap)))))));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"deref","deref",-145586795);
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"deref","deref",-145586795);
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),rewrite_clj.node.protocols.sexprs.cljs$core$IFn$_invoke$arity$2(self__.children,opts));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (rewrite_clj.node.protocols.sum_lengths(self__.children) + (1));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (""+"@"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings(self__.children)));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.children;
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_clj.node.protocols.assert_sexpr_count(children_SINGLEQUOTE_,(1));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$InnerNode$leader_length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (1);
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k53361){
var self__ = this;
var this__5455__auto____$1 = this;
var G__53378 = k53361;
var G__53378__$1 = (((G__53378 instanceof cljs.core.Keyword))?G__53378.fqn:null);
switch (G__53378__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k53361);

}
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__53360){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__53380 = cljs.core.keyword_identical_QMARK_;
var expr__53381 = k__5457__auto__;
if(cljs.core.truth_((pred__53380.cljs$core$IFn$_invoke$arity$2 ? pred__53380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__53381) : pred__53380.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__53381)))){
return (new rewrite_clj.node.reader_macro.DerefNode(G__53360,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__53360),null));
}
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__53360){
var self__ = this;
var this__5447__auto____$1 = this;
return (new rewrite_clj.node.reader_macro.DerefNode(self__.children,G__53360,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.reader_macro.DerefNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(rewrite_clj.node.reader_macro.DerefNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.reader_macro.DerefNode.cljs$lang$type = true);

(rewrite_clj.node.reader_macro.DerefNode.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.reader-macro/DerefNode",null,(1),null));
}));

(rewrite_clj.node.reader_macro.DerefNode.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"rewrite-clj.node.reader-macro/DerefNode");
}));

/**
 * Positional factory function for rewrite-clj.node.reader-macro/DerefNode.
 */
rewrite_clj.node.reader_macro.__GT_DerefNode = (function rewrite_clj$node$reader_macro$__GT_DerefNode(children){
return (new rewrite_clj.node.reader_macro.DerefNode(children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.reader-macro/DerefNode, taking a map of keywords to field values.
 */
rewrite_clj.node.reader_macro.map__GT_DerefNode = (function rewrite_clj$node$reader_macro$map__GT_DerefNode(G__53364){
var extmap__5490__auto__ = (function (){var G__53384 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53364,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_(G__53364)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53384);
} else {
return G__53384;
}
})();
return (new rewrite_clj.node.reader_macro.DerefNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__53364),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.reader_macro.ReaderNode);
rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.reader_macro.ReaderMacroNode);
rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.reader_macro.DerefNode);
rewrite_clj.node.reader_macro.__GT_node = (function rewrite_clj$node$reader_macro$__GT_node(tag,prefix,suffix,sexpr_fn,sexpr_count,children){
if(cljs.core.truth_(sexpr_count)){
rewrite_clj.node.protocols.assert_sexpr_count(children,sexpr_count);
} else {
}

return rewrite_clj.node.reader_macro.__GT_ReaderNode(tag,prefix,suffix,sexpr_fn,sexpr_count,children);
});
/**
 * Create node representing a var where `children` is either a
 * sequence of nodes or a single node.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/var-node (n/token-node 'my-var))
 *     n/string)
 * ;; => "#'my-var"
 * 
 * ;; specifying a sequence allows for whitespace between the
 * ;; prefix and the var
 * (-> (n/var-node [(n/spaces 2)
 *                  (n/token-node 'my-var)])
 *     n/string)
 * ;; => "#'  my-var"
 * ```
 */
rewrite_clj.node.reader_macro.var_node = (function rewrite_clj$node$reader_macro$var_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_clj.node.reader_macro.__GT_node(new cljs.core.Keyword(null,"var","var",-769682797),"'","",((function (children){
return (function (p1__53385_SHARP_){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),p1__53385_SHARP_);
});})(children))
,(1),children);
} else {
var G__53398 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__53398;
continue;
}
break;
}
});
/**
 * Create node representing an inline evaluation
 * where `children` is either a sequence of nodes or a single node.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/eval-node (n/list-node [(n/token-node 'inc)
 *                                (n/spaces 1)
 *                                (n/token-node 1)]))
 *     n/string)
 * ;; => "#=(inc 1)"
 * 
 * ;; specifying a sequence allows for whitespace between the
 * ;; prefix and the form
 * (-> (n/eval-node [(n/spaces 3)
 *                   (n/list-node [(n/token-node 'inc)
 *                                 (n/spaces 1)
 *                                 (n/token-node 1)])])
 *     n/string)
 * ;; => "#=   (inc 1)"
 * ```
 */
rewrite_clj.node.reader_macro.eval_node = (function rewrite_clj$node$reader_macro$eval_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_clj.node.reader_macro.__GT_node(new cljs.core.Keyword(null,"eval","eval",-1103567905),"=","",((function (children){
return (function (p1__53387_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"eval","eval",536963622,null),(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),p1__53387_SHARP_),null,(1),null)),(2),null));
});})(children))
,(1),children);
} else {
var G__53399 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__53399;
continue;
}
break;
}
});
/**
 * Create node representing a reader macro with `macro-node` and `form-node` or `children`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * ;; here we call with macro-node and form-node
 * (-> (n/reader-macro-node (n/token-node 'my-macro)
 *                          (n/token-node 42))
 *     n/string)
 * ;; => "#my-macro 42"
 * 
 * ;; calling with a sequence of children gives us control over whitespace
 * (-> (n/reader-macro-node [(n/token-node 'my-macro)
 *                           (n/spaces 4)
 *                           (n/token-node 42)])
 *     n/string)
 * ;; => "#my-macro    42"
 * ```
 */
rewrite_clj.node.reader_macro.reader_macro_node = (function rewrite_clj$node$reader_macro$reader_macro_node(var_args){
var G__53389 = arguments.length;
switch (G__53389) {
case 1:
return rewrite_clj.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(rewrite_clj.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$1 = (function (children){
return rewrite_clj.node.reader_macro.__GT_ReaderMacroNode(children);
}));

(rewrite_clj.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$2 = (function (macro_node,form_node){
return rewrite_clj.node.reader_macro.__GT_ReaderMacroNode(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [macro_node,rewrite_clj.node.whitespace.spaces((1)),form_node], null));
}));

(rewrite_clj.node.reader_macro.reader_macro_node.cljs$lang$maxFixedArity = 2);

/**
 * Create node representing the dereferencing of a form
 * where `children` is either a sequence of nodes or a single node.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/deref-node (n/token-node 'my-var))
 *     n/string)
 * ;; => "@my-var"
 * 
 * ;; specifying a sequence allows for whitespace between @ and form
 * (-> (n/deref-node [(n/spaces 2)
 *                    (n/token-node 'my-var)])
 *     n/string)
 * ;; => "@  my-var"
 * ```
 */
rewrite_clj.node.reader_macro.deref_node = (function rewrite_clj$node$reader_macro$deref_node(children){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_clj.node.reader_macro.__GT_DerefNode(children);
} else {
return rewrite_clj.node.reader_macro.__GT_DerefNode(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null));
}
});

//# sourceMappingURL=rewrite_clj.node.reader_macro.js.map
