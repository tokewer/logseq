goog.provide('logseq.outliner.pipeline');
logseq.outliner.pipeline.filter_deleted_blocks = (function logseq$outliner$pipeline$filter_deleted_blocks(datoms){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (d){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(d))) && (new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(d) === false))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(d)], null);
} else {
return null;
}
}),datoms);
});
/**
 * ref: entity, map, int, eid
 */
logseq.outliner.pipeline.ref__GT_eid = (function logseq$outliner$pipeline$ref__GT_eid(ref){
if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref))){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref)], null);
} else {
if(((cljs.core.vector_QMARK_(ref)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ref),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(ref))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.second(ref)], null);
} else {
if(cljs.core.int_QMARK_(ref)){
return ref;
} else {
throw (new Error((""+"invalid ref "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ref))));

}
}
}
}
});
/**
 * Return ref block ids for given block
 */
logseq.outliner.pipeline.block_content_refs = (function logseq$outliner$pipeline$block_content_refs(db,block){
var content = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
}
})();
if(typeof content === 'string'){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
var temp__5825__auto__ = (function (){var G__59502 = db;
var G__59503 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59502,G__59503) : datascript.core.entity.call(null,G__59502,G__59503));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e);
} else {
return null;
}
}),logseq.db.frontend.content.get_matched_ids(content));
} else {
return null;
}
});
logseq.outliner.pipeline.get_journal_day_from_long = (function logseq$outliner$pipeline$get_journal_day_from_long(db,v){
if(typeof v === 'number'){
var temp__5825__auto__ = logseq.common.util.date_time.ms__GT_journal_day(v);
if(cljs.core.truth_(temp__5825__auto__)){
var day = temp__5825__auto__;
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),day)));
} else {
return null;
}
} else {
return null;
}
});
logseq.outliner.pipeline.private_built_in_props = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__59520){
var vec__59521 = p__59520;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59521,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59521,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"public?","public?",786025269)], null)))){
return null;
} else {
return k;
}
}),logseq.db.frontend.property.built_in_properties));
/**
 * For a given property pair, builds a coll of journal refs for select built-in
 *   :datetime properties and all user :datetime properties. Otherwise returns nil
 */
logseq.outliner.pipeline.build_journal_refs_for_datetime_properties = (function logseq$outliner$pipeline$build_journal_refs_for_datetime_properties(db,property_ent,v){
var allowed_datetime_QMARK_ = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datetime","datetime",494675702),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property_ent));
if(and__5140__auto__){
if(cljs.core.truth_(logseq.db.frontend.property.internal_property_QMARK_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property_ent)))){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","deadline","logseq.property/deadline",1685901604),null,new cljs.core.Keyword("logseq.property","scheduled","logseq.property/scheduled",1644520943),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property_ent));
} else {
return (!(logseq.db.frontend.property.plugin_property_QMARK_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property_ent))));
}
} else {
return and__5140__auto__;
}
})();
if(((allowed_datetime_QMARK_) && (cljs.core.coll_QMARK_(v)))){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__59524_SHARP_){
return logseq.outliner.pipeline.get_journal_day_from_long(db,p1__59524_SHARP_);
}),v);
} else {
if(allowed_datetime_QMARK_){
var temp__5825__auto__ = logseq.outliner.pipeline.get_journal_day_from_long(db,v);
if(cljs.core.truth_(temp__5825__auto__)){
var journal_day = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [journal_day], null);
} else {
return null;
}
} else {
return null;

}
}
});
logseq.outliner.pipeline.page_or_object_QMARK__helper = (function logseq$outliner$pipeline$page_or_object_QMARK__helper(block){
var and__5140__auto__ = datascript.impl.entity.entity_QMARK_(block);
if(and__5140__auto__){
var and__5140__auto____$1 = (function (){var or__5142__auto__ = (logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.page_QMARK_.call(null,block));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (logseq.db.object_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.object_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.object_QMARK_.call(null,block));
}
})();
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
if((typeof logseq !== 'undefined') && (typeof logseq.outliner !== 'undefined') && (typeof logseq.outliner.pipeline !== 'undefined') && (typeof logseq.outliner.pipeline.non_ref_properties !== 'undefined')){
} else {
logseq.outliner.pipeline.non_ref_properties = clojure.set.union.cljs$core$IFn$_invoke$arity$2(logseq.outliner.pipeline.private_built_in_props,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("logseq.property.publish","published-url","logseq.property.publish/published-url",2045182501),null,new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126),null,new cljs.core.Keyword("logseq.property","exclude-from-graph-view","logseq.property/exclude-from-graph-view",-452433065),null], null), null));
}
logseq.outliner.pipeline.block_refs = (function logseq$outliner$pipeline$block_refs(db,block,properties,page_or_object_QMARK_,property_entity){
var block_db_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
var alias_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098)),new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(block));
var property_key_refs = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (ident){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((property_entity.cljs$core$IFn$_invoke$arity$1 ? property_entity.cljs$core$IFn$_invoke$arity$1(ident) : property_entity.call(null,ident)));
}),cljs.core.keys(properties));
var property_value_refs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__59549){
var vec__59550 = p__59549;
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59550,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59550,(1),null);
if(((cljs.core.coll_QMARK_(v)) && (cljs.core.every_QMARK_(page_or_object_QMARK_,v)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),v);
} else {
if(cljs.core.truth_((page_or_object_QMARK_.cljs$core$IFn$_invoke$arity$1 ? page_or_object_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : page_or_object_QMARK_.call(null,v)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
} else {
return logseq.outliner.pipeline.build_journal_refs_for_datetime_properties(db,(property_entity.cljs$core$IFn$_invoke$arity$1 ? property_entity.cljs$core$IFn$_invoke$arity$1(property) : property_entity.call(null,property)),v);

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties], 0));
var property_refs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(property_key_refs,property_value_refs);
var content_refs = logseq.outliner.pipeline.block_content_refs(db,block);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59540_SHARP_){
return (((p1__59540_SHARP_ == null)) || ((((block_db_id === p1__59540_SHARP_)) || ((((((!(cljs.core.int_QMARK_(p1__59540_SHARP_)))) && ((block_db_id === new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__59540_SHARP_) : datascript.core.entity.call(null,db,p1__59540_SHARP_))))))) || (cljs.core.contains_QMARK_(alias_ids,p1__59540_SHARP_)))))));
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.outliner.pipeline.ref__GT_eid,new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block)),(function (){var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","link","block/link",-1872399993).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null);
} else {
return null;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([property_refs,content_refs], 0))));
});
/**
 * Rebuild block refs for DB graphs, should returns ids
 */
logseq.outliner.pipeline.db_rebuild_block_refs = (function logseq$outliner$pipeline$db_rebuild_block_refs(var_args){
var args__5882__auto__ = [];
var len__5876__auto___59593 = arguments.length;
var i__5877__auto___59594 = (0);
while(true){
if((i__5877__auto___59594 < len__5876__auto___59593)){
args__5882__auto__.push((arguments[i__5877__auto___59594]));

var G__59595 = (i__5877__auto___59594 + (1));
i__5877__auto___59594 = G__59595;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.outliner.pipeline.db_rebuild_block_refs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.outliner.pipeline.db_rebuild_block_refs.cljs$core$IFn$_invoke$arity$variadic = (function (db,block,p__59565){
var map__59566 = p__59565;
var map__59566__$1 = cljs.core.__destructure_map(map__59566);
var page_or_object_QMARK__memoized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59566__$1,new cljs.core.Keyword(null,"page-or-object?-memoized","page-or-object?-memoized",1966303027));
var properties = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__59567){
var vec__59568 = p__59567;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59568,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59568,(1),null);
return (logseq.outliner.pipeline.non_ref_properties.cljs$core$IFn$_invoke$arity$1 ? logseq.outliner.pipeline.non_ref_properties.cljs$core$IFn$_invoke$arity$1(k) : logseq.outliner.pipeline.non_ref_properties.call(null,k));
})),logseq.db.common.entity_plus.lookup_kv_then_entity.cljs$core$IFn$_invoke$arity$2((function (){var G__59571 = db;
var G__59572 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59571,G__59572) : datascript.core.entity.call(null,G__59571,G__59572));
})(),new cljs.core.Keyword("block","properties","block/properties",708347145)));
return logseq.outliner.pipeline.block_refs(db,block,properties,(function (){var or__5142__auto__ = page_or_object_QMARK__memoized;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.outliner.pipeline.page_or_object_QMARK__helper;
}
})(),(function (p1__59560_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__59560_SHARP_) : datascript.core.entity.call(null,db,p1__59560_SHARP_));
}));
}));

(logseq.outliner.pipeline.db_rebuild_block_refs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.outliner.pipeline.db_rebuild_block_refs.cljs$lang$applyTo = (function (seq59561){
var G__59562 = cljs.core.first(seq59561);
var seq59561__$1 = cljs.core.next(seq59561);
var G__59563 = cljs.core.first(seq59561__$1);
var seq59561__$2 = cljs.core.next(seq59561__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59562,G__59563,seq59561__$2);
}));

/**
 * Returns a ref builder for a bulk pass over the immutable `db`.
 *   Reads ref-producing properties once and shares entity lookups within the pass.
 */
logseq.outliner.pipeline.db_rebuild_block_refs_fn = (function logseq$outliner$pipeline$db_rebuild_block_refs_fn(db){
var entity = cljs.core.memoize((function (p1__59573_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__59573_SHARP_) : datascript.core.entity.call(null,db,p1__59573_SHARP_));
}));
var property_entities = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (datom){
var ident = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.db.frontend.property.property_QMARK_(ident);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((logseq.outliner.pipeline.non_ref_properties.cljs$core$IFn$_invoke$arity$1 ? logseq.outliner.pipeline.non_ref_properties.cljs$core$IFn$_invoke$arity$1(ident) : logseq.outliner.pipeline.non_ref_properties.call(null,ident)));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,entity(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom))], null);
} else {
return null;
}
})),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("db","ident","db/ident",-737096)));
var properties_by_id = cljs.core.reduce_kv((function (result,ident,_){
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db),ident);
var many_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema));
var ref_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result__$1,datom){
var v = ((ref_QMARK_)?entity(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)):new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom));
if(many_QMARK_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom),ident], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v);
} else {
return cljs.core.assoc_in(result__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom),ident], null),v);
}
}),result,datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"aevt","aevt",-585148059),ident));
}),cljs.core.PersistentArrayMap.EMPTY,property_entities);
var page_or_object_QMARK_ = cljs.core.memoize(logseq.outliner.pipeline.page_or_object_QMARK__helper);
return (function (block){
return logseq.outliner.pipeline.block_refs(db,block,cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_by_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)),page_or_object_QMARK_,property_entities);
});
});
logseq.outliner.pipeline.rebuild_block_refs_tx = (function logseq$outliner$pipeline$rebuild_block_refs_tx(p__59579,blocks){
var map__59580 = p__59579;
var map__59580__$1 = cljs.core.__destructure_map(map__59580);
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59580__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (block){
if(cljs.core.truth_((function (){var G__59581 = db_after;
var G__59582 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59581,G__59582) : datascript.core.entity.call(null,G__59581,G__59582));
})())){
var refs = logseq.outliner.pipeline.db_rebuild_block_refs(db_after,block);
if(cljs.core.seq(refs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","refs","block/refs",-1214495349)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","refs","block/refs",-1214495349),refs], null)], null);
} else {
return null;
}
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks], 0));
});
/**
 * Transacts :block/refs for a new or imported DB graph
 */
logseq.outliner.pipeline.transact_new_db_graph_refs = (function logseq$outliner$pipeline$transact_new_db_graph_refs(conn,tx_report){
var map__59583 = logseq.outliner.datascript_report.get_blocks_and_pages(tx_report);
var map__59583__$1 = cljs.core.__destructure_map(map__59583);
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59583__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var refs_tx_report = (function (){var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.seq(blocks);
if(and__5140__auto__){
return logseq.outliner.pipeline.rebuild_block_refs_tx(tx_report,blocks);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var refs_tx = temp__5825__auto__;
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,refs_tx,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(tx_report),new cljs.core.Keyword(null,"transact-new-graph-refs?","transact-new-graph-refs?",403866193),true));
} else {
return null;
}
})();
return refs_tx_report;
});

//# sourceMappingURL=logseq.outliner.pipeline.js.map
