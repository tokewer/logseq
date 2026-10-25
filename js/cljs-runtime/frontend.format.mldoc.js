goog.provide('frontend.format.mldoc');
goog.scope(function(){
  frontend.format.mldoc.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$mldoc$index=shadow.js.require("module$node_modules$mldoc$index", {});
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc !== 'undefined') && (typeof frontend.format.mldoc.anchorLink !== 'undefined')){
} else {
frontend.format.mldoc.anchorLink = frontend.format.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"anchorLink");
}
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc !== 'undefined') && (typeof frontend.format.mldoc.parseAndExportMarkdown !== 'undefined')){
} else {
frontend.format.mldoc.parseAndExportMarkdown = frontend.format.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"parseAndExportMarkdown");
}
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc !== 'undefined') && (typeof frontend.format.mldoc.parseAndExportOPML !== 'undefined')){
} else {
frontend.format.mldoc.parseAndExportOPML = frontend.format.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"parseAndExportOPML");
}
if((typeof frontend !== 'undefined') && (typeof frontend.format !== 'undefined') && (typeof frontend.format.mldoc !== 'undefined') && (typeof frontend.format.mldoc.export$ !== 'undefined')){
} else {
frontend.format.mldoc.export$ = frontend.format.mldoc.goog$module$goog$object.get(module$node_modules$mldoc$index.Mldoc,"export");
}
frontend.format.mldoc.parse_export_markdown = (function frontend$format$mldoc$parse_export_markdown(content,config,references){
var G__51999 = content;
var G__52000 = config;
var G__52001 = (function (){var or__5142__auto__ = references;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.graph_parser.mldoc.default_references;
}
})();
return (frontend.format.mldoc.parseAndExportMarkdown.cljs$core$IFn$_invoke$arity$3 ? frontend.format.mldoc.parseAndExportMarkdown.cljs$core$IFn$_invoke$arity$3(G__51999,G__52000,G__52001) : frontend.format.mldoc.parseAndExportMarkdown.call(null,G__51999,G__52000,G__52001));
});
frontend.format.mldoc.parse_export_opml = (function frontend$format$mldoc$parse_export_opml(content,config,title,references){
var G__52039 = content;
var G__52040 = config;
var G__52041 = title;
var G__52042 = (function (){var or__5142__auto__ = references;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.graph_parser.mldoc.default_references;
}
})();
return (frontend.format.mldoc.parseAndExportOPML.cljs$core$IFn$_invoke$arity$4 ? frontend.format.mldoc.parseAndExportOPML.cljs$core$IFn$_invoke$arity$4(G__52039,G__52040,G__52041,G__52042) : frontend.format.mldoc.parseAndExportOPML.call(null,G__52039,G__52040,G__52041,G__52042));
});
frontend.format.mldoc.block_with_title_QMARK_ = logseq.graph_parser.mldoc.block_with_title_QMARK_;
frontend.format.mldoc.get_default_config = (function frontend$format$mldoc$get_default_config(format){
return logseq.graph_parser.mldoc.get_default_config(frontend.state.get_current_repo(),format);
});
frontend.format.mldoc.__GT_edn = (function frontend$format$mldoc$__GT_edn(content,format){
return logseq.graph_parser.mldoc.__GT_edn.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),content,format);
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
 * @implements {frontend.format.protocol.Format}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.format.mldoc.MldocMode = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.format.mldoc.MldocMode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k52055,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__52072 = k52055;
switch (G__52072) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52055,else__5451__auto__);

}
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__52080){
var vec__52081 = p__52080;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52081,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52081,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#frontend.format.mldoc.MldocMode{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52054){
var self__ = this;
var G__52054__$1 = this;
return (new cljs.core.RecordIter((0),G__52054__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new frontend.format.mldoc.MldocMode(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1887694766 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52056,other52057){
var self__ = this;
var this52056__$1 = this;
return (((!((other52057 == null)))) && ((((this52056__$1.constructor === other52057.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52056__$1.__extmap,other52057.__extmap)))));
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$toEdn$arity$3 = (function (_this,content,config){
var self__ = this;
var _this__$1 = this;
return logseq.graph_parser.mldoc.__GT_edn.cljs$core$IFn$_invoke$arity$2(content,config);
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$toHtml$arity$4 = (function (_this,content,config,references){
var self__ = this;
var _this__$1 = this;
return (frontend.format.mldoc.export$.cljs$core$IFn$_invoke$arity$4 ? frontend.format.mldoc.export$.cljs$core$IFn$_invoke$arity$4("html",content,config,references) : frontend.format.mldoc.export$.call(null,"html",content,config,references));
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$exportMarkdown$arity$4 = (function (_this,content,config,references){
var self__ = this;
var _this__$1 = this;
return frontend.format.mldoc.parse_export_markdown(content,config,references);
}));

(frontend.format.mldoc.MldocMode.prototype.frontend$format$protocol$Format$exportOPML$arity$5 = (function (_this,content,config,title,references){
var self__ = this;
var _this__$1 = this;
return frontend.format.mldoc.parse_export_opml(content,config,title,references);
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new frontend.format.mldoc.MldocMode(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k52055){
var self__ = this;
var this__5455__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k52055);
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__52054){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__52091 = cljs.core.keyword_identical_QMARK_;
var expr__52092 = k__5457__auto__;
return (new frontend.format.mldoc.MldocMode(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__52054),null));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__52054){
var self__ = this;
var this__5447__auto____$1 = this;
return (new frontend.format.mldoc.MldocMode(G__52054,self__.__extmap,self__.__hash));
}));

(frontend.format.mldoc.MldocMode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(frontend.format.mldoc.MldocMode.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.format.mldoc.MldocMode.cljs$lang$type = true);

(frontend.format.mldoc.MldocMode.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"frontend.format.mldoc/MldocMode",null,(1),null));
}));

(frontend.format.mldoc.MldocMode.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"frontend.format.mldoc/MldocMode");
}));

/**
 * Positional factory function for frontend.format.mldoc/MldocMode.
 */
frontend.format.mldoc.__GT_MldocMode = (function frontend$format$mldoc$__GT_MldocMode(){
return (new frontend.format.mldoc.MldocMode(null,null,null));
});

/**
 * Factory function for frontend.format.mldoc/MldocMode, taking a map of keywords to field values.
 */
frontend.format.mldoc.map__GT_MldocMode = (function frontend$format$mldoc$map__GT_MldocMode(G__52058){
var extmap__5490__auto__ = (function (){var G__52106 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__52058);
if(cljs.core.record_QMARK_(G__52058)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52106);
} else {
return G__52106;
}
})();
return (new frontend.format.mldoc.MldocMode(null,cljs.core.not_empty(extmap__5490__auto__),null));
});

frontend.format.mldoc.plain__GT_text = (function frontend$format$mldoc$plain__GT_text(plains){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,plains));
});
frontend.format.mldoc.extract_first_query_from_ast = (function frontend$format$mldoc$extract_first_query_from_ast(ast){
var _STAR_result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
clojure.walk.postwalk((function (f){
if(((cljs.core.vector_QMARK_(f)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Custom",cljs.core.first(f))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("query",cljs.core.second(f))))))){
return cljs.core.reset_BANG_(_STAR_result,cljs.core.last(f));
} else {
return f;
}
}),ast);

return cljs.core.deref(_STAR_result);
});

//# sourceMappingURL=frontend.format.mldoc.js.map
