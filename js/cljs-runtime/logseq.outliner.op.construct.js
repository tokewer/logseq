goog.provide('logseq.outliner.op.construct');
logseq.outliner.op.construct.semantic_outliner_ops = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"upsert-property","upsert-property",1682220994),null,new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),null,new cljs.core.Keyword(null,"create-page","create-page",-1352656443),null,new cljs.core.Keyword(null,"rename-page","rename-page",-2094129371),null,new cljs.core.Keyword(null,"apply-template","apply-template",169070311),null,new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),null,new cljs.core.Keyword(null,"save-block","save-block",591532560),null,new cljs.core.Keyword(null,"move-blocks-up-down","move-blocks-up-down",1370411060),null,new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),null,new cljs.core.Keyword(null,"restore-recycled","restore-recycled",-2050992683),null,new cljs.core.Keyword(null,"delete-page","delete-page",-1371381770),null,new cljs.core.Keyword(null,"indent-outdent-blocks","indent-outdent-blocks",-104352713),null,new cljs.core.Keyword(null,"recycle-delete-permanently","recycle-delete-permanently",-1939194401),null], null), null);
logseq.outliner.op.construct.transient_block_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword("block","tx-id","block/tx-id",547556161),null,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),null,new cljs.core.Keyword("block.temp","ast-body","block.temp/ast-body",-464258035),null,new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725),null,new cljs.core.Keyword("block","created-at","block/created-at",1440015),null,new cljs.core.Keyword("block","meta","block/meta",1064819153),null,new cljs.core.Keyword("block","level","block/level",1182509971),null,new cljs.core.Keyword("logseq.property","created-by-ref","logseq.property/created-by-ref",854433908),null,new cljs.core.Keyword("db","id","db/id",-1388397098),null,new cljs.core.Keyword("block.temp","load-status","block.temp/load-status",-1066723049),null,new cljs.core.Keyword("block","unordered","block/unordered",-772044101),null,new cljs.core.Keyword("block.temp","ast-title","block.temp/ast-title",-940352067),null], null), null);
logseq.outliner.op.construct.delete_restore_transient_block_keys = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(logseq.outliner.op.construct.transient_block_keys,new cljs.core.Keyword("logseq.property","created-by-ref","logseq.property/created-by-ref",854433908));
logseq.outliner.op.construct.rebase_refs_key = new cljs.core.Keyword("block.temp","sync-rebase-refs","block.temp/sync-rebase-refs",-502776474);
logseq.outliner.op.construct.rebase_created_refs_key = new cljs.core.Keyword("block.temp","sync-created-refs","block.temp/sync-created-refs",-2081995887);
logseq.outliner.op.construct.stable_entity_ref = (function logseq$outliner$op$construct$stable_entity_ref(db,x){
if(((cljs.core.map_QMARK_(x)) || (datascript.impl.entity.entity_QMARK_(x)))){
var eid = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__59819 = db;
var G__59820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59819,G__59820) : datascript.core.entity.call(null,G__59819,G__59820));
})());
} else {
return null;
}
}
})();
return (logseq.outliner.op.construct.stable_entity_ref.cljs$core$IFn$_invoke$arity$2 ? logseq.outliner.op.construct.stable_entity_ref.cljs$core$IFn$_invoke$arity$2(db,eid) : logseq.outliner.op.construct.stable_entity_ref.call(null,db,eid));
} else {
if(cljs.core.uuid_QMARK_(x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),x], null);
} else {
if(((cljs.core.integer_QMARK_(x)) && ((!((x < (0))))))){
var temp__5823__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,x) : datascript.core.entity.call(null,db,x));
if(cljs.core.truth_(temp__5823__auto__)){
var ent = temp__5823__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ent))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ent)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(ent))){
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(ent);
} else {
return x;

}
}
} else {
return x;
}
} else {
return x;

}
}
}
});
logseq.outliner.op.construct.tx_data_block_uuid_ref = (function logseq$outliner$op$construct$tx_data_block_uuid_ref(tx_data,entity_ref){
return cljs.core.some((function (item){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(entity_ref,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(item))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(item))) && (cljs.core.uuid_QMARK_(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(item))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(item)], null);
} else {
return null;
}
}),tx_data);
});
logseq.outliner.op.construct.stable_entity_ref_with_tx_data = (function logseq$outliner$op$construct$stable_entity_ref_with_tx_data(db,tx_data,x){
var entity_ref = logseq.outliner.op.construct.stable_entity_ref(db,x);
if(((cljs.core.integer_QMARK_(entity_ref)) && ((!((entity_ref < (0))))))){
var or__5142__auto__ = logseq.outliner.op.construct.tx_data_block_uuid_ref(tx_data,entity_ref);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return entity_ref;
}
} else {
return entity_ref;
}
});
logseq.outliner.op.construct.stable_block_ref_with_tx_data = (function logseq$outliner$op$construct$stable_block_ref_with_tx_data(db,tx_data,x){
return logseq.outliner.op.construct.stable_entity_ref_with_tx_data(db,tx_data,x);
});
logseq.outliner.op.construct.sanitize_ref_value = (function logseq$outliner$op$construct$sanitize_ref_value(var_args){
var G__59827 = arguments.length;
switch (G__59827) {
case 2:
return logseq.outliner.op.construct.sanitize_ref_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.outliner.op.construct.sanitize_ref_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.outliner.op.construct.sanitize_ref_value.cljs$core$IFn$_invoke$arity$2 = (function (db,v){
return logseq.outliner.op.construct.sanitize_ref_value.cljs$core$IFn$_invoke$arity$3(db,null,v);
}));

(logseq.outliner.op.construct.sanitize_ref_value.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,v){
if(cljs.core.vector_QMARK_(v)){
return logseq.outliner.op.construct.stable_entity_ref_with_tx_data(db,tx_data,v);
} else {
if(((cljs.core.set_QMARK_(v)) || (cljs.core.sequential_QMARK_(v)))){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59825_SHARP_){
return logseq.outliner.op.construct.stable_entity_ref_with_tx_data(db,tx_data,p1__59825_SHARP_);
}),v));
} else {
return logseq.outliner.op.construct.stable_entity_ref_with_tx_data(db,tx_data,v);

}
}
}));

(logseq.outliner.op.construct.sanitize_ref_value.cljs$lang$maxFixedArity = 3);

logseq.outliner.op.construct.sanitize_upsert_property_schema = (function logseq$outliner$op$construct$sanitize_upsert_property_schema(db,schema){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486),k))?logseq.outliner.op.construct.sanitize_ref_value.cljs$core$IFn$_invoke$arity$2(db,v):v));
}),cljs.core.PersistentArrayMap.EMPTY,schema);
});
/**
 * Restore the previous schema, except :db/cardinality when that would revert
 * :many to :one while values exist.
 */
logseq.outliner.op.construct.inverse_upsert_property_schema = (function logseq$outliner$op$construct$inverse_upsert_property_schema(db_before,db_after,property){
var schema = logseq.outliner.op.construct.sanitize_upsert_property_schema(db_before,logseq.db.frontend.property.get_property_schema(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,property)));
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"one","one",935007904),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema))) && ((((!(((function (){var G__59832 = db_after;
var G__59833 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59832,G__59833) : datascript.core.entity.call(null,G__59832,G__59833));
})() == null)))) && (cljs.core.seq(datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db_after,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)))))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659));
} else {
return schema;
}
});
logseq.outliner.op.construct.sanitize_block_refs = (function logseq$outliner$op$construct$sanitize_block_refs(refs){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (ref_entity){
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref_entity))){
return cljs.core.select_keys(ref_entity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("db","ident","db/ident",-737096)], null));
} else {
return null;
}
}),refs));
});
logseq.outliner.op.construct.ref_attr_QMARK_ = (function logseq$outliner$op$construct$ref_attr_QMARK_(db,a){
return (((a instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,a) : datascript.core.entity.call(null,db,a))))));
});
logseq.outliner.op.construct.sanitize_block_payload = (function logseq$outliner$op$construct$sanitize_block_payload(var_args){
var G__59839 = arguments.length;
switch (G__59839) {
case 2:
return logseq.outliner.op.construct.sanitize_block_payload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.outliner.op.construct.sanitize_block_payload.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.outliner.op.construct.sanitize_block_payload.cljs$core$IFn$_invoke$arity$2 = (function (db,block){
return logseq.outliner.op.construct.sanitize_block_payload.cljs$core$IFn$_invoke$arity$3(db,block,null);
}));

(logseq.outliner.op.construct.sanitize_block_payload.cljs$core$IFn$_invoke$arity$3 = (function (db,block,p__59842){
var map__59843 = p__59842;
var map__59843__$1 = cljs.core.__destructure_map(map__59843);
var created_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59843__$1,new cljs.core.Keyword(null,"created-uuids","created-uuids",-19198407));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59843__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
if(cljs.core.map_QMARK_(block)){
var refs = logseq.outliner.op.construct.sanitize_block_refs(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block));
var created_ref_uuids = ((((cljs.core.seq(created_uuids)) && (cljs.core.seq(refs))))?cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(created_uuids),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),refs)))):null);
var m = cljs.core.reduce_kv((function (m,k,v){
if(cljs.core.contains_QMARK_(logseq.outliner.op.construct.transient_block_keys,k)){
return m;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("block.temp",cljs.core.namespace(k))){
return m;
} else {
if(logseq.outliner.op.construct.ref_attr_QMARK_(db,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,logseq.outliner.op.construct.sanitize_ref_value.cljs$core$IFn$_invoke$arity$3(db,tx_data,v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);

}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,block);
var G__59846 = m;
var G__59846__$1 = ((cljs.core.seq(refs))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59846,logseq.outliner.op.construct.rebase_refs_key,refs):G__59846);
if(cljs.core.seq(created_ref_uuids)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59846__$1,logseq.outliner.op.construct.rebase_created_refs_key,created_ref_uuids);
} else {
return G__59846__$1;
}
} else {
return block;
}
}));

(logseq.outliner.op.construct.sanitize_block_payload.cljs$lang$maxFixedArity = 3);

logseq.outliner.op.construct.get_missing_ref_by_lookup = (function logseq$outliner$op$construct$get_missing_ref_by_lookup(missing_refs,tag_lookups){
var now = logseq.common.util.time_ms();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__59847){
var map__59848 = p__59847;
var map__59848__$1 = cljs.core.__destructure_map(map__59848);
var block = map__59848__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59848__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59848__$1,new cljs.core.Keyword("db","ident","db/ident",-737096));
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
var lookup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
var tag_ref_QMARK_ = cljs.core.contains_QMARK_(tag_lookups,lookup);
var entity = (function (){var G__59849 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id,new cljs.core.Keyword("block","title","block/title",710445684),(function (){var or__5142__auto__ = title;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword("block","created-at","block/created-at",1440015),now,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),now,new cljs.core.Keyword("block","tags","block/tags",1814948340),((tag_ref_QMARK_)?new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083):new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329))], null);
var G__59849__$1 = ((typeof title === 'string')?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59849,new cljs.core.Keyword("block","name","block/name",1619760316),logseq.common.util.page_name_sanity_lc(title)):G__59849);
var G__59849__$2 = ((tag_ref_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59849__$1,new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),new cljs.core.Keyword("logseq.class","Root","logseq.class/Root",273783827)):G__59849__$1);
if(cljs.core.truth_(ident)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59849__$2,new cljs.core.Keyword("db","ident","db/ident",-737096),ident);
} else {
return G__59849__$2;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lookup,entity], null);
} else {
return null;
}
}),missing_refs));
});
logseq.outliner.op.construct.rewrite_block_title_with_retracted_refs = (function logseq$outliner$op$construct$rewrite_block_title_with_retracted_refs(db,block){
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,logseq.outliner.op.construct.rebase_refs_key);
var created_ref_uuids = cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,logseq.outliner.op.construct.rebase_created_refs_key));
var missing_refs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (ref_entity){
var G__59851 = db;
var G__59852 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref_entity)], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59851,G__59852) : datascript.core.entity.call(null,G__59851,G__59852));
}),refs);
var retracted_refs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block__$1){
return cljs.core.contains_QMARK_(created_ref_uuids,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$1));
}),missing_refs);
var tag_lookups = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (v){
return ((cljs.core.vector_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(v))));
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block)));
var missing_ref_by_lookup = logseq.outliner.op.construct.get_missing_ref_by_lookup(missing_refs,tag_lookups);
var rewrite_retracted_refs = (function (v){
var rewrite_ref = (function (block_ref){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(missing_ref_by_lookup,block_ref);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block_ref;
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_ref,v);
});
var block_SINGLEQUOTE_ = (function (){var G__59854 = block;
var G__59854__$1 = ((cljs.core.seq(retracted_refs))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59854,new cljs.core.Keyword("block","title","block/title",710445684),(function (title){
return logseq.db.frontend.content.content_id_ref__GT_page(title,retracted_refs);
})):G__59854);
if(cljs.core.seq(missing_ref_by_lookup)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59854__$1,new cljs.core.Keyword("block","refs","block/refs",-1214495349),rewrite_retracted_refs),new cljs.core.Keyword("block","tags","block/tags",1814948340),rewrite_retracted_refs);
} else {
return G__59854__$1;
}
})();
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block_SINGLEQUOTE_,logseq.outliner.op.construct.rebase_refs_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.outliner.op.construct.rebase_created_refs_key], 0));
});
logseq.outliner.op.construct.sanitize_insert_block_payload = (function logseq$outliner$op$construct$sanitize_insert_block_payload(db,tx_data,block){
var block_SINGLEQUOTE_ = logseq.outliner.op.construct.sanitize_block_payload.cljs$core$IFn$_invoke$arity$3(db,block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),tx_data], null));
if(cljs.core.map_QMARK_(block_SINGLEQUOTE_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(block_SINGLEQUOTE_,new cljs.core.Keyword("block","page","block/page",822314108),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","order","block/order",-1429282437),logseq.outliner.op.construct.rebase_refs_key], 0));
} else {
return block_SINGLEQUOTE_;
}
});
logseq.outliner.op.construct.stable_id_coll = (function logseq$outliner$op$construct$stable_id_coll(db,ids){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__59856_SHARP_){
return logseq.outliner.op.construct.stable_entity_ref(db,p1__59856_SHARP_);
}),ids);
});
logseq.outliner.op.construct.stable_block_uuid = (function logseq$outliner$op$construct$stable_block_uuid(db,x){
var entity_ref = logseq.outliner.op.construct.stable_entity_ref(db,x);
if(cljs.core.uuid_QMARK_(entity_ref)){
return entity_ref;
} else {
if(((cljs.core.vector_QMARK_(entity_ref)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(entity_ref))) && (cljs.core.uuid_QMARK_(cljs.core.second(entity_ref))))))){
return cljs.core.second(entity_ref);
} else {
return entity_ref;

}
}
});
logseq.outliner.op.construct.resolve_target_and_sibling = (function logseq$outliner$op$construct$resolve_target_and_sibling(block){
var temp__5823__auto__ = logseq.db.get_left_sibling(block);
if(cljs.core.truth_(temp__5823__auto__)){
var left_sibling = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left_sibling),true], null);
} else {
var temp__5825__auto__ = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var parent = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),false], null);
} else {
return null;
}
}
});
logseq.outliner.op.construct.resolve_move_target = (function logseq$outliner$op$construct$resolve_move_target(db,ids){
var temp__5825__auto__ = (function (){var G__59861 = ids;
var G__59861__$1 = (((G__59861 == null))?null:cljs.core.first(G__59861));
if((G__59861__$1 == null)){
return null;
} else {
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,G__59861__$1) : datascript.core.entity.call(null,db,G__59861__$1));
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var first_block = temp__5825__auto__;
return logseq.outliner.op.construct.resolve_target_and_sibling(first_block);
} else {
return null;
}
});
logseq.outliner.op.construct.created_block_uuids_from_tx_data = (function logseq$outliner$op$construct$created_block_uuids_from_tx_data(tx_data){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (item){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(item);
if(and__5140__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item);
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item);
} else {
if((((!((new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(item) == null)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(item))) && (new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(item) === true))))){
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(item);
} else {
if(((cljs.core.vector_QMARK_(item)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","add","db/add",235286841),cljs.core.first(item))) && ((((cljs.core.count(item) >= (4))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2)))))))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
} else {
return null;

}
}
}
}),tx_data)));
});
logseq.outliner.op.construct.created_page_uuid_from_tx_data = (function logseq$outliner$op$construct$created_page_uuid_from_tx_data(tx_data,title){
var or__5142__auto__ = cljs.core.some((function (item){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(item);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(title,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(item));
if(and__5140__auto____$1){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item);
} else {
return null;
}
}),tx_data);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var grouped = cljs.core.group_by(new cljs.core.Keyword(null,"e","e",1381269198),tx_data);
return cljs.core.some((function (p__59867){
var vec__59868 = p__59867;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59868,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59868,(1),null);
var title_SINGLEQUOTE_ = cljs.core.some((function (datom){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom))) && (new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(datom) === true))){
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
} else {
return null;
}
}),datoms);
var uuid_SINGLEQUOTE_ = cljs.core.some((function (datom){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom))) && (new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(datom) === true))){
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
} else {
return null;
}
}),datoms);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(title,title_SINGLEQUOTE_)) && (cljs.core.uuid_QMARK_(uuid_SINGLEQUOTE_)))){
return uuid_SINGLEQUOTE_;
} else {
return null;
}
}),grouped);
}
});
logseq.outliner.op.construct.created_db_ident_from_tx_data = (function logseq$outliner$op$construct$created_db_ident_from_tx_data(tx_data){
var or__5142__auto__ = cljs.core.some((function (item){
if(((cljs.core.map_QMARK_(item)) && (cljs.core.qualified_keyword_QMARK_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(item))))){
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(item);
} else {
return null;
}
}),tx_data);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.some((function (item){
if(((cljs.core.map_QMARK_(item)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(item))) && (cljs.core.qualified_keyword_QMARK_(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(item))))))){
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(item);
} else {
return null;
}
}),tx_data);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = cljs.core.some((function (item){
if(((cljs.core.vector_QMARK_(item)) && ((((cljs.core.nth.cljs$core$IFn$_invoke$arity$3(item,(1),null) instanceof cljs.core.Keyword)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(item,(1),null))) && (cljs.core.qualified_keyword_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(item,(2),null))))))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2));
} else {
return null;
}
}),tx_data);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return cljs.core.some((function (item){
if(((cljs.core.vector_QMARK_(item)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","add","db/add",235286841),cljs.core.first(item))) && ((((cljs.core.count(item) >= (4))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(2)))) && (cljs.core.qualified_keyword_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3)))))))))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(item,(3));
} else {
return null;
}
}),tx_data);
}
}
}
});
logseq.outliner.op.construct.property_ident_by_title = (function logseq$outliner$op$construct$property_ident_by_title(db,property_name){
var G__59875 = (function (){var G__59876 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null)], null);
var G__59877 = db;
var G__59878 = property_name;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__59876,G__59877,G__59878) : datascript.core.q.call(null,G__59876,G__59877,G__59878));
})();
if((G__59875 == null)){
return null;
} else {
var ident = G__59875;
if(cljs.core.qualified_keyword_QMARK_(ident)){
return ident;
} else {
return null;
}
}
});
logseq.outliner.op.construct.maybe_rewrite_delete_block_ids = (function logseq$outliner$op$construct$maybe_rewrite_delete_block_ids(db,tx_data,ids){
var deleted_ids_from_tx_data = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (item){
if(((cljs.core.vector_QMARK_(item)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),cljs.core.first(item))) && ((cljs.core.count(item) >= (2))))))){
return cljs.core.second(item);
} else {
if(((cljs.core.map_QMARK_(item)) && (((new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(item) === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(item))))))){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(item);
} else {
if((((!((new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(item) == null)))) && (((new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(item) === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(item))))))){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(item);
} else {
return null;

}
}
}
}),tx_data)));
var ids_from_tx_data_SINGLEQUOTE_ = (function (){var G__59883 = deleted_ids_from_tx_data;
var G__59883__$1 = (((G__59883 == null))?null:logseq.outliner.op.construct.stable_id_coll(db,G__59883));
var G__59883__$2 = (((G__59883__$1 == null))?null:cljs.core.seq(G__59883__$1));
if((G__59883__$2 == null)){
return null;
} else {
return cljs.core.vec(G__59883__$2);
}
})();
var ids_SINGLEQUOTE_ = logseq.outliner.op.construct.stable_id_coll(db,ids);
var created_uuids = logseq.outliner.op.construct.created_block_uuids_from_tx_data(tx_data);
var unresolved_created_lookups_QMARK_ = ((cljs.core.seq(created_uuids)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ids_SINGLEQUOTE_),cljs.core.count(created_uuids))) && (cljs.core.every_QMARK_((function (id){
return ((cljs.core.vector_QMARK_(id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(id))) && (((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id)) == null)))));
}),ids_SINGLEQUOTE_)))));
if(cljs.core.seq(ids_from_tx_data_SINGLEQUOTE_)){
return ids_from_tx_data_SINGLEQUOTE_;
} else {
if(unresolved_created_lookups_QMARK_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block_uuid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
}),created_uuids);
} else {
return ids_SINGLEQUOTE_;

}
}
});
logseq.outliner.op.construct.moved_block_ids_from_tx_data = (function logseq$outliner$op$construct$moved_block_ids_from_tx_data(tx_data){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__59884){
var vec__59887 = p__59884;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59887,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59887,(1),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59887,(2),null);
var _t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59887,(3),null);
var added_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59887,(4),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064),a)) && (added_QMARK_ === true))){
return e;
} else {
return null;
}
}),tx_data)));
});
logseq.outliner.op.construct.remap_lookup_ref_by_uuid_map = (function logseq$outliner$op$construct$remap_lookup_ref_by_uuid_map(uuid_map,v){
if(((cljs.core.vector_QMARK_(v)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(v))) && (cljs.core.uuid_QMARK_(cljs.core.second(v))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.get.cljs$core$IFn$_invoke$arity$3(uuid_map,cljs.core.second(v),cljs.core.second(v))], null);
} else {
if(cljs.core.set_QMARK_(v)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59891_SHARP_){
return (logseq.outliner.op.construct.remap_lookup_ref_by_uuid_map.cljs$core$IFn$_invoke$arity$2 ? logseq.outliner.op.construct.remap_lookup_ref_by_uuid_map.cljs$core$IFn$_invoke$arity$2(uuid_map,p1__59891_SHARP_) : logseq.outliner.op.construct.remap_lookup_ref_by_uuid_map.call(null,uuid_map,p1__59891_SHARP_));
}),v));
} else {
if(cljs.core.sequential_QMARK_(v)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(v),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59892_SHARP_){
return (logseq.outliner.op.construct.remap_lookup_ref_by_uuid_map.cljs$core$IFn$_invoke$arity$2 ? logseq.outliner.op.construct.remap_lookup_ref_by_uuid_map.cljs$core$IFn$_invoke$arity$2(uuid_map,p1__59892_SHARP_) : logseq.outliner.op.construct.remap_lookup_ref_by_uuid_map.call(null,uuid_map,p1__59892_SHARP_));
}),v));
} else {
return v;

}
}
}
});
logseq.outliner.op.construct.remap_block_lookup_values_by_uuid_map = (function logseq$outliner$op$construct$remap_block_lookup_values_by_uuid_map(block,uuid_map){
if(cljs.core.map_QMARK_(block)){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,logseq.outliner.op.construct.remap_lookup_ref_by_uuid_map(uuid_map,v));
}),cljs.core.PersistentArrayMap.EMPTY,block);
} else {
return block;
}
});
logseq.outliner.op.construct.template_children_blocks_for_history = (function logseq$outliner$op$construct$template_children_blocks_for_history(db,template_ref){
var temp__5825__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,template_ref) : datascript.core.entity.call(null,db,template_ref));
if(cljs.core.truth_(temp__5825__auto__)){
var template = temp__5825__auto__;
var template_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(template);
var template_blocks = (function (){var G__59895 = logseq.db.get_block_and_children.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(template),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-property-block?","include-property-block?",-211563499),true], null)], 0));
var G__59895__$1 = (((G__59895 == null))?null:cljs.core.rest(G__59895));
var G__59895__$2 = (((G__59895__$1 == null))?null:cljs.core.seq(G__59895__$1));
if((G__59895__$2 == null)){
return null;
} else {
return cljs.core.vec(G__59895__$2);
}
})();
if(cljs.core.seq(template_blocks)){
return cljs.core.vec(cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.first(template_blocks)),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(template_blocks)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("logseq.property","used-template","logseq.property/used-template",-980369906),template_id], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,block),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
}),cljs.core.rest(template_blocks))));
} else {
return null;
}
} else {
return null;
}
});
logseq.outliner.op.construct.inserted_block_uuids_from_tx_data = (function logseq$outliner$op$construct$inserted_block_uuids_from_tx_data(tx_data){
var entity_id = (function (item){
if((!((new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(item) == null)))){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(item);
} else {
if(cljs.core.vector_QMARK_(item)){
return cljs.core.second(item);
} else {
var or__5142__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(item)], null);
}

}
}
});
var parent_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (item){
var or__5142__auto__ = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(item))) && (new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(item) === true))) || (((cljs.core.vector_QMARK_(item)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","add","db/add",235286841),cljs.core.first(item))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","parent","block/parent",-918309064),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(item,(2),null))))))));
}
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(entity_id)),tx_data);
return logseq.outliner.op.construct.created_block_uuids_from_tx_data(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59900_SHARP_){
return cljs.core.contains_QMARK_(parent_ids,entity_id(p1__59900_SHARP_));
}),tx_data));
});
logseq.outliner.op.construct.replaces_empty_target_QMARK_ = (function logseq$outliner$op$construct$replaces_empty_target_QMARK_(db,tx_data,source_uuids,target_ref,opts){
var and__5140__auto__ = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__5140__auto__)){
return (cljs.core.count(source_uuids) > (1));
} else {
return and__5140__auto__;
}
}
})();
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(source_uuids),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,target_ref) : datascript.core.entity.call(null,db,target_ref))));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return cljs.core.some((function (item){
var vec__59910 = ((cljs.core.vector_QMARK_(item))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(item),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(item,(2),null),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(item,(3),null),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","add","db/add",235286841),cljs.core.first(item))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(item)], null));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59910,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59910,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59910,(2),null);
var added_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59910,(3),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),a)) && (((added_QMARK_ === false) && (((typeof v === 'string') && (((clojure.string.blank_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_ref,logseq.outliner.op.construct.stable_entity_ref(db,e))))))))));
}),tx_data);
}
} else {
return and__5140__auto__;
}
});
logseq.outliner.op.construct.canonicalize_insert_blocks_op = (function logseq$outliner$op$construct$canonicalize_insert_blocks_op(var_args){
var G__59924 = arguments.length;
switch (G__59924) {
case 3:
return logseq.outliner.op.construct.canonicalize_insert_blocks_op.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return logseq.outliner.op.construct.canonicalize_insert_blocks_op.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.outliner.op.construct.canonicalize_insert_blocks_op.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,args){
return logseq.outliner.op.construct.canonicalize_insert_blocks_op.cljs$core$IFn$_invoke$arity$4(db,tx_data,args,logseq.outliner.op.construct.inserted_block_uuids_from_tx_data(tx_data));
}));

(logseq.outliner.op.construct.canonicalize_insert_blocks_op.cljs$core$IFn$_invoke$arity$4 = (function (db,tx_data,args,available_uuids){
var vec__59925 = args;
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59925,(0),null);
var target_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59925,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59925,(2),null);
var source_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__59917_SHARP_){
return logseq.outliner.op.construct.sanitize_insert_block_payload(db,tx_data,p1__59917_SHARP_);
}),blocks);
var source_uuids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),source_blocks);
var target_ref = logseq.outliner.op.construct.stable_entity_ref(db,target_id);
var target = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,target_ref) : datascript.core.entity.call(null,db,target_ref));
var available_set = cljs.core.set(available_uuids);
var replaced_target_QMARK_ = (function (){var and__5140__auto__ = (!(cljs.core.every_QMARK_(available_set,source_uuids)));
if(and__5140__auto__){
return logseq.outliner.op.construct.replaces_empty_target_QMARK_(db,tx_data,source_uuids,target_ref,opts);
} else {
return and__5140__auto__;
}
})();
var new_source_uuids = (cljs.core.truth_(replaced_target_QMARK_)?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(source_uuids,(1)):source_uuids);
var created_uuids = ((cljs.core.every_QMARK_(available_set,new_source_uuids))?new_source_uuids:cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new_source_uuids),available_uuids)));
var block_with_new_id = (function (block,block_uuid){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","parent","block/parent",-918309064),(function (){var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1((function (){var G__59928 = db;
var G__59929 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59928,G__59929) : datascript.core.entity.call(null,G__59928,G__59929));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent)], null);
})()], 0));
});
var blocks_STAR_ = (cljs.core.truth_((function (){var or__5142__auto__ = replaced_target_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.seq(created_uuids);
}
})())?(cljs.core.truth_((function (){var or__5142__auto__ = replaced_target_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.count(created_uuids) + (1)),cljs.core.count(source_blocks));
} else {
return and__5140__auto__;
}
}
})())?(function (){var vec__59930 = source_blocks;
var seq__59931 = cljs.core.seq(vec__59930);
var first__59932 = cljs.core.first(seq__59931);
var seq__59931__$1 = cljs.core.next(seq__59931);
var fst_block = first__59932;
var rst_blocks = seq__59931__$1;
var created_rst_uuids = created_uuids;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fst_block,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target))], null),((cljs.core.seq(created_rst_uuids))?cljs.core.map.cljs$core$IFn$_invoke$arity$3(block_with_new_id,rst_blocks,created_rst_uuids):rst_blocks));
})():cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(block_with_new_id,source_blocks,created_uuids)):source_blocks);
var uuid_remap = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__59933){
var vec__59934 = p__59933;
var old_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59934,(0),null);
var new_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59934,(1),null);
if(((cljs.core.uuid_QMARK_(old_uuid)) && (((cljs.core.uuid_QMARK_(new_uuid)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_uuid,new_uuid)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_uuid,new_uuid], null);
} else {
return null;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,source_uuids,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks_STAR_))));
var blocks_STAR___$1 = ((cljs.core.seq(uuid_remap))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__59920_SHARP_){
return logseq.outliner.op.construct.remap_block_lookup_values_by_uuid_map(p1__59920_SHARP_,uuid_remap);
}),blocks_STAR_):blocks_STAR_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blocks_STAR___$1,target_ref,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = opts;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450)),new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true)], null);
}));

(logseq.outliner.op.construct.canonicalize_insert_blocks_op.cljs$lang$maxFixedArity = 4);

logseq.outliner.op.construct.canonicalize_template_op = (function logseq$outliner$op$construct$canonicalize_template_op(db,tx_data,args,available_uuids){
var vec__59938 = args;
var template_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59938,(0),null);
var target_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59938,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59938,(2),null);
var template_ref = logseq.outliner.op.construct.stable_entity_ref(db,template_id);
var target_ref = logseq.outliner.op.construct.stable_entity_ref(db,target_id);
var template_blocks = (function (){var or__5142__auto__ = (function (){var G__59941 = new cljs.core.Keyword(null,"template-blocks","template-blocks",1008232170).cljs$core$IFn$_invoke$arity$1(opts);
var G__59941__$1 = (((G__59941 == null))?null:cljs.core.seq(G__59941));
if((G__59941__$1 == null)){
return null;
} else {
return cljs.core.vec(G__59941__$1);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.outliner.op.construct.template_children_blocks_for_history(db,template_ref);
}
})();
var opts_base = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"template-id","template-id",1952916477),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450)], 0));
var opts_SINGLEQUOTE_ = ((cljs.core.seq(template_blocks))?(function (){var vec__59942 = logseq.outliner.op.construct.canonicalize_insert_blocks_op.cljs$core$IFn$_invoke$arity$4(db,tx_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [template_blocks,target_id,opts_base], null),available_uuids);
var blocks_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59942,(0),null);
var _target_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59942,(1),null);
var insert_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59942,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(insert_opts,new cljs.core.Keyword(null,"template-blocks","template-blocks",1008232170),blocks_STAR_);
})():cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts_base,new cljs.core.Keyword(null,"template-blocks","template-blocks",1008232170)));
if(cljs.core.truth_((function (){var and__5140__auto__ = template_ref;
if(cljs.core.truth_(and__5140__auto__)){
return target_ref;
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid apply-template args",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-template","apply-template",169070311),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [template_ref,target_ref,opts_SINGLEQUOTE_], null)], null);
});
logseq.outliner.op.construct.canonicalize_insert_ops = (function logseq$outliner$op$construct$canonicalize_insert_ops(db,tx_data,ops){
return new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__59949,p__59950){
var map__59951 = p__59949;
var map__59951__$1 = cljs.core.__destructure_map(map__59951);
var result = map__59951__$1;
var available = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59951__$1,new cljs.core.Keyword(null,"available","available",-1470697127));
var vec__59952 = p__59950;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59952,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59952,(1),null);
var entry = vec__59952;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),null,new cljs.core.Keyword(null,"apply-template","apply-template",169070311),null], null), null),op)){
var vec__59955 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),op))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,logseq.outliner.op.construct.canonicalize_insert_blocks_op.cljs$core$IFn$_invoke$arity$4(db,tx_data,args,available)], null):logseq.outliner.op.construct.canonicalize_template_op(db,tx_data,args,available));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59955,(0),null);
var args_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59955,(1),null);
var entry_SINGLEQUOTE_ = vec__59955;
var blocks = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),op))?cljs.core.first(args_SINGLEQUOTE_):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.Keyword(null,"template-blocks","template-blocks",1008232170)], null)));
var inserted_uuids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.conj,entry_SINGLEQUOTE_),new cljs.core.Keyword(null,"available","available",-1470697127),cljs.core.filterv((function (p1__59946_SHARP_){
return (!(cljs.core.contains_QMARK_(inserted_uuids,p1__59946_SHARP_)));
}),available));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.conj,entry);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"available","available",-1470697127),logseq.outliner.op.construct.inserted_block_uuids_from_tx_data(tx_data)], null),ops));
});
logseq.outliner.op.construct.canonical_move_op_for_block = (function logseq$outliner$op$construct$canonical_move_op_for_block(db,block_id,opts){
var temp__5825__auto__ = logseq.outliner.op.construct.resolve_move_target(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null));
if(cljs.core.truth_(temp__5825__auto__)){
var vec__59964 = temp__5825__auto__;
var target_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59964,(0),null);
var sibling_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59964,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.op.construct.stable_entity_ref(db,block_id)], null),logseq.outliner.op.construct.stable_entity_ref(db,target_id),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = opts;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450)),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_)], null)], null);
} else {
return null;
}
});
logseq.outliner.op.construct.canonicalize_indent_outdent_op = (function logseq$outliner$op$construct$canonicalize_indent_outdent_op(db,tx_data,ids,indent_QMARK_,opts){
var moved_ids = logseq.outliner.op.construct.moved_block_ids_from_tx_data(tx_data);
if(cljs.core.seq(moved_ids)){
var move_ops = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__59967_SHARP_){
return logseq.outliner.op.construct.canonical_move_op_for_block(db,p1__59967_SHARP_,opts);
}),moved_ids));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(moved_ids),cljs.core.count(move_ops))){
return move_ops;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent-outdent-blocks","indent-outdent-blocks",-104352713),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.op.construct.stable_id_coll(db,ids),indent_QMARK_,opts], null)], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent-outdent-blocks","indent-outdent-blocks",-104352713),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.op.construct.stable_id_coll(db,ids),indent_QMARK_,opts], null)], null)], null);
}
});
logseq.outliner.op.construct.canonicalize_semantic_outliner_op = (function logseq$outliner$op$construct$canonicalize_semantic_outliner_op(db,tx_data,p__59969){
var vec__59971 = p__59969;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59971,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59971,(1),null);
var G__59974 = op;
var G__59974__$1 = (((G__59974 instanceof cljs.core.Keyword))?G__59974.fqn:null);
switch (G__59974__$1) {
case "save-block":
var vec__59975 = args;
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59975,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59975,(1),null);
var created_uuids = logseq.outliner.op.construct.created_block_uuids_from_tx_data(tx_data);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-block","save-block",591532560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.op.construct.sanitize_block_payload.cljs$core$IFn$_invoke$arity$3(db,block,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"created-uuids","created-uuids",-19198407),created_uuids,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),tx_data], null)),opts], null)], null);

break;
case "insert-blocks":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),logseq.outliner.op.construct.canonicalize_insert_blocks_op.cljs$core$IFn$_invoke$arity$3(db,tx_data,args)], null);

break;
case "apply-template":
return logseq.outliner.op.construct.canonicalize_template_op(db,tx_data,args,logseq.outliner.op.construct.inserted_block_uuids_from_tx_data(tx_data));

break;
case "move-blocks-up-down":
var vec__59978 = args;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59978,(0),null);
var up_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59978,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-blocks-up-down","move-blocks-up-down",1370411060),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.op.construct.stable_id_coll(db,ids),up_QMARK_], null)], null);

break;
case "indent-outdent-blocks":
var vec__59981 = args;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59981,(0),null);
var indent_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59981,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59981,(2),null);
return logseq.outliner.op.construct.canonicalize_indent_outdent_op(db,tx_data,ids,indent_QMARK_,opts);

break;
case "move-blocks":
var vec__59984 = args;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59984,(0),null);
var target_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59984,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59984,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.op.construct.stable_id_coll(db,ids),logseq.outliner.op.construct.stable_block_ref_with_tx_data(db,tx_data,target_id),opts], null)], null);

break;
case "delete-blocks":
var vec__59987 = args;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59987,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59987,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.op.construct.maybe_rewrite_delete_block_ids(db,tx_data,ids),opts], null)], null);

break;
case "create-page":
var vec__59990 = args;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59990,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59990,(1),null);
var page_uuid = logseq.outliner.op.construct.created_page_uuid_from_tx_data(tx_data,title);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-page","create-page",-1352656443),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,(function (){var G__59993 = (function (){var or__5142__auto__ = opts;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(cljs.core.truth_(page_uuid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59993,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),page_uuid);
} else {
return G__59993;
}
})()], null)], null);

break;
case "rename-page":
var vec__59994 = args;
var page_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59994,(0),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59994,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-block","save-block",591532560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.outliner.op.construct.stable_block_uuid(db,page_uuid),new cljs.core.Keyword("block","title","block/title",710445684),new_title], null),cljs.core.PersistentArrayMap.EMPTY], null)], null);

break;
case "delete-page":
var vec__59997 = args;
var page_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59997,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59997,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-page","delete-page",-1371381770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.op.construct.stable_block_uuid(db,page_uuid),opts], null)], null);

break;
case "restore-recycled":
var vec__60002 = args;
var root_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60002,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-recycled","restore-recycled",-2050992683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.op.construct.stable_block_uuid(db,root_id)], null)], null);

break;
case "recycle-delete-permanently":
var vec__60007 = args;
var root_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60007,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recycle-delete-permanently","recycle-delete-permanently",-1939194401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.op.construct.stable_block_uuid(db,root_id)], null)], null);

break;
case "upsert-property":
var vec__60010 = args;
var property_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60010,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60010,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60010,(2),null);
var property_id_SINGLEQUOTE_ = (function (){var or__5142__auto__ = logseq.outliner.op.construct.stable_entity_ref(db,property_id);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = logseq.outliner.op.construct.property_ident_by_title(db,new cljs.core.Keyword(null,"property-name","property-name",-1399851434).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return logseq.outliner.op.construct.created_db_ident_from_tx_data(tx_data);
}
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert-property","upsert-property",1682220994),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [property_id_SINGLEQUOTE_,schema,opts], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,args], null);

}
});
logseq.outliner.op.construct.save_block_keys = (function logseq$outliner$op$construct$save_block_keys(var_args){
var G__60016 = arguments.length;
switch (G__60016) {
case 1:
return logseq.outliner.op.construct.save_block_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.outliner.op.construct.save_block_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.outliner.op.construct.save_block_keys.cljs$core$IFn$_invoke$arity$1 = (function (block){
return logseq.outliner.op.construct.save_block_keys.cljs$core$IFn$_invoke$arity$2(block,logseq.outliner.op.construct.transient_block_keys);
}));

(logseq.outliner.op.construct.save_block_keys.cljs$core$IFn$_invoke$arity$2 = (function (block,transient_keys){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__60014_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","other-tx","db/other-tx",337296620),p1__60014_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(transient_keys,cljs.core.keys(block))));
}));

(logseq.outliner.op.construct.save_block_keys.cljs$lang$maxFixedArity = 2);

logseq.outliner.op.construct.worker_ref_attr_QMARK_ = (function logseq$outliner$op$construct$worker_ref_attr_QMARK_(db,a){
return (((a instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,a) : datascript.core.entity.call(null,db,a))))));
});
logseq.outliner.op.construct.block_entity = (function logseq$outliner$op$construct$block_entity(db,block){
if(cljs.core.map_QMARK_(block)){
var or__5142__auto__ = (function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid = temp__5825__auto__;
var G__60017 = db;
var G__60018 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60017,G__60018) : datascript.core.entity.call(null,G__60017,G__60018));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var db_id = temp__5825__auto__;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,db_id) : datascript.core.entity.call(null,db,db_id));
} else {
return null;
}
}
} else {
if(cljs.core.integer_QMARK_(block)){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,block) : datascript.core.entity.call(null,db,block));
} else {
if(cljs.core.uuid_QMARK_(block)){
var G__60027 = db;
var G__60028 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60027,G__60028) : datascript.core.entity.call(null,G__60027,G__60028));
} else {
if(cljs.core.vector_QMARK_(block)){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,block) : datascript.core.entity.call(null,db,block));
} else {
return null;

}
}
}
}
});
logseq.outliner.op.construct.build_inverse_save_block = (function logseq$outliner$op$construct$build_inverse_save_block(db_before,block,opts){
var temp__5825__auto__ = logseq.outliner.op.construct.block_entity(db_before,block);
if(cljs.core.truth_(temp__5825__auto__)){
var before_ent = temp__5825__auto__;
var keys_to_restore = logseq.outliner.op.construct.save_block_keys.cljs$core$IFn$_invoke$arity$1(block);
var inverse_block = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
var v = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),k))?new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(before_ent):cljs.core.get.cljs$core$IFn$_invoke$arity$2(before_ent,k));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((logseq.outliner.op.construct.worker_ref_attr_QMARK_(db_before,k))?logseq.outliner.op.construct.sanitize_ref_value.cljs$core$IFn$_invoke$arity$2(db_before,v):v));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(before_ent)], null),keys_to_restore);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-block","save-block",591532560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inverse_block,opts], null)], null);
} else {
return null;
}
});
logseq.outliner.op.construct.build_insert_block_payload = (function logseq$outliner$op$construct$build_insert_block_payload(db_before,ent){
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ent);
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid = temp__5825__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ent,k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((logseq.outliner.op.construct.worker_ref_attr_QMARK_(db_before,k))?logseq.outliner.op.construct.sanitize_ref_value.cljs$core$IFn$_invoke$arity$2(db_before,v):v));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__60029_SHARP_){
return clojure.string.starts_with_QMARK_(cljs.core.name(p1__60029_SHARP_),"_");
}),logseq.outliner.op.construct.save_block_keys.cljs$core$IFn$_invoke$arity$2(ent,logseq.outliner.op.construct.delete_restore_transient_block_keys)));
} else {
return null;
}
});
/**
 * The selected blocks that are not descendants of another selected block.
 */
logseq.outliner.op.construct.selected_block_roots = (function logseq$outliner$op$construct$selected_block_roots(db_before,ids){
var resolved_entities = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60030_SHARP_){
return logseq.outliner.op.construct.block_entity(db_before,p1__60030_SHARP_);
}),ids);
var unresolved_id_QMARK_ = cljs.core.some(cljs.core.nil_QMARK_,resolved_entities);
var entities = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,ent){
if(cljs.core.truth_(cljs.core.some((function (p1__60031_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__60031_SHARP_),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ent));
}),acc))){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,ent);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,resolved_entities));
var selected_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),entities));
var has_selected_ancestor_QMARK_ = (function (ent){
var G__60033 = ent;
var G__60034 = (function (p1__60032_SHARP_){
return cljs.core.contains_QMARK_(selected_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__60032_SHARP_));
});
return (logseq.db.some_parent.cljs$core$IFn$_invoke$arity$2 ? logseq.db.some_parent.cljs$core$IFn$_invoke$arity$2(G__60033,G__60034) : logseq.db.some_parent.call(null,G__60033,G__60034));
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"roots","roots",-1088919250),cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(has_selected_ancestor_QMARK_,entities)),new cljs.core.Keyword(null,"incomplete?","incomplete?",-2126127275),cljs.core.boolean$(unresolved_id_QMARK_)], null);
});
logseq.outliner.op.construct.block_restore_target = (function logseq$outliner$op$construct$block_restore_target(ent){
var temp__5823__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(logseq.db.get_left_sibling(ent));
if(cljs.core.truth_(temp__5823__auto__)){
var left_sibling_id = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_sibling_id,true], null);
} else {
var temp__5825__auto__ = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(ent));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(ent));
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var parent_id = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,false], null);
} else {
return null;
}
}
});
logseq.outliner.op.construct.created_from_property_ref = (function logseq$outliner$op$construct$created_from_property_ref(db_before,root){
var temp__5825__auto__ = new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(root);
if(cljs.core.truth_(temp__5825__auto__)){
var prop = temp__5825__auto__;
var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(prop);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.outliner.op.construct.stable_entity_ref(db_before,prop);
}
} else {
return null;
}
});
logseq.outliner.op.construct.to_insert_op = (function logseq$outliner$op$construct$to_insert_op(db_before,p__60040){
var map__60041 = p__60040;
var map__60041__$1 = cljs.core.__destructure_map(map__60041);
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60041__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var target_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60041__$1,new cljs.core.Keyword(null,"target-id","target-id",-1438159155));
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60041__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var created_from_property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60041__$1,new cljs.core.Keyword(null,"created-from-property","created-from-property",-1952326387));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blocks,logseq.outliner.op.construct.stable_entity_ref(db_before,target_id),(function (){var G__60042 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),cljs.core.boolean$(sibling_QMARK_),new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true,new cljs.core.Keyword(null,"keep-block-order?","keep-block-order?",1077761724),true], null);
if(cljs.core.truth_(created_from_property)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60042,new cljs.core.Keyword(null,"created-from-property","created-from-property",-1952326387),created_from_property);
} else {
return G__60042;
}
})()], null)], null);
});
logseq.outliner.op.construct.delete_root__GT_restore_plan = (function logseq$outliner$op$construct$delete_root__GT_restore_plan(db_before,root){
var root_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root);
var root_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root);
var blocks = (cljs.core.truth_(root_uuid)?cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__60043_SHARP_){
return logseq.outliner.op.construct.build_insert_block_payload(db_before,p1__60043_SHARP_);
}),logseq.db.get_block_and_children.cljs$core$IFn$_invoke$arity$variadic(db_before,root_uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-property-block?","include-property-block?",-211563499),true], null)], 0)))):null);
var vec__60045 = logseq.outliner.op.construct.block_restore_target(root);
var target_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60045,(0),null);
var sibling_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60045,(1),null);
var vec__60048 = (cljs.core.truth_((function (){var and__5140__auto__ = target_id;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_id,root_id);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5142__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(root));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(root));
}
})(),false], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_id,sibling_QMARK_], null));
var target_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60048,(0),null);
var sibling_QMARK___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60048,(1),null);
var created_from_property = logseq.outliner.op.construct.created_from_property_ref(db_before,root);
if(((cljs.core.seq(blocks)) && ((!((target_id__$1 == null)))))){
var G__60052 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks,new cljs.core.Keyword(null,"target-id","target-id",-1438159155),logseq.outliner.op.construct.stable_entity_ref(db_before,target_id__$1),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK___$1], null);
if(cljs.core.truth_(created_from_property)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60052,new cljs.core.Keyword(null,"created-from-property","created-from-property",-1952326387),created_from_property);
} else {
return G__60052;
}
} else {
return null;
}
});
/**
 * Splits the ref values of the insert payload `block` into those pointing at a
 *   block in `uuids` and the rest: [block without them, map of them].
 */
logseq.outliner.op.construct.split_block_refs = (function logseq$outliner$op$construct$split_block_refs(db_before,uuids,block){
var in_uuids_QMARK_ = (function (v){
return ((cljs.core.vector_QMARK_(v)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(v))) && (cljs.core.contains_QMARK_(uuids,cljs.core.second(v))))));
});
return cljs.core.reduce_kv((function (p__60057,k,v){
var vec__60058 = p__60057;
var block_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60058,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60058,(1),null);
var acc = vec__60058;
if(logseq.outliner.op.construct.worker_ref_attr_QMARK_(db_before,k)){
if(cljs.core.set_QMARK_(v)){
var map__60061 = cljs.core.group_by(in_uuids_QMARK_,v);
var map__60061__$1 = cljs.core.__destructure_map(map__60061);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60061__$1,true);
var out = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60061__$1,false);
if(cljs.core.seq(in$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(out))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block_SINGLEQUOTE_,k,cljs.core.set(out)):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block_SINGLEQUOTE_,k)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(refs,k,cljs.core.set(in$))], null);
} else {
return acc;
}
} else {
if(in_uuids_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block_SINGLEQUOTE_,k),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(refs,k,v)], null);
} else {
return acc;
}
}
} else {
return acc;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,cljs.core.PersistentArrayMap.EMPTY], null),block);
});
/**
 * Each restore plan is inserted by its own op, so a block that refers to a
 *   block of a later plan (a node property value, a used template) fails to
 *   insert: the later block doesn't exist yet. Takes those refs out of the
 *   plans and returns [plans, :save-block ops that set them after all inserts].
 */
logseq.outliner.op.construct.defer_refs_to_later_plans = (function logseq$outliner$op$construct$defer_refs_to_later_plans(db_before,plans){
var plan_uuids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60062_SHARP_){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(p1__60062_SHARP_)));
}),plans);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__60064,p__60065){
var vec__60066 = p__60064;
var plans_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60066,(0),null);
var save_ops = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60066,(1),null);
var vec__60069 = p__60065;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60069,(0),null);
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60069,(1),null);
var later_uuids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.cat,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(plan_uuids,(i + (1))));
var splits = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60063_SHARP_){
return logseq.outliner.op.construct.split_block_refs(db_before,later_uuids,p1__60063_SHARP_);
}),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(plan));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(plans_SINGLEQUOTE_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(plan,new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,splits))),cljs.core.into.cljs$core$IFn$_invoke$arity$3(save_ops,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__60072){
var vec__60073 = p__60072;
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60073,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60073,(1),null);
if(cljs.core.seq(refs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-block","save-block",591532560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(refs,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)),cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
return null;
}
})),splits)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,plans));
});
/**
 * An insert op per restore plan, then the :save-block ops that set the refs
 *   between plans.
 */
logseq.outliner.op.construct.restore_plans__GT_ops = (function logseq$outliner$op$construct$restore_plans__GT_ops(db_before,plans){
var vec__60077 = logseq.outliner.op.construct.defer_refs_to_later_plans(db_before,plans);
var plans_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60077,(0),null);
var save_ops = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60077,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60076_SHARP_){
return logseq.outliner.op.construct.to_insert_op(db_before,p1__60076_SHARP_);
}),plans_SINGLEQUOTE_),save_ops);
});
logseq.outliner.op.construct.build_inverse_delete_blocks = (function logseq$outliner$op$construct$build_inverse_delete_blocks(db_before,ids){
var map__60081 = logseq.outliner.op.construct.selected_block_roots(db_before,ids);
var map__60081__$1 = cljs.core.__destructure_map(map__60081);
var roots = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60081__$1,new cljs.core.Keyword(null,"roots","roots",-1088919250));
var incomplete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60081__$1,new cljs.core.Keyword(null,"incomplete?","incomplete?",-2126127275));
var plans = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60080_SHARP_){
return logseq.outliner.op.construct.delete_root__GT_restore_plan(db_before,p1__60080_SHARP_);
}),roots);
if(((cljs.core.not(incomplete_QMARK_)) && (((cljs.core.seq(roots)) && (cljs.core.every_QMARK_(cljs.core.some_QMARK_,plans)))))){
return cljs.core.seq(logseq.outliner.op.construct.restore_plans__GT_ops(db_before,plans));
} else {
return null;
}
});
logseq.outliner.op.construct.move_root__GT_restore_op = (function logseq$outliner$op$construct$move_root__GT_restore_op(db_before,root){
var root_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root);
var vec__60082 = logseq.outliner.op.construct.block_restore_target(root);
var target_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60082,(0),null);
var sibling_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60082,(1),null);
var created_from_property = logseq.outliner.op.construct.created_from_property_ref(db_before,root);
if((((!((root_id == null)))) && ((!((target_id == null)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.op.construct.stable_entity_ref(db_before,root_id)], null),logseq.outliner.op.construct.stable_entity_ref(db_before,target_id),(function (){var G__60085 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),cljs.core.boolean$(sibling_QMARK_)], null);
if(cljs.core.truth_(created_from_property)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60085,new cljs.core.Keyword(null,"created-from-property","created-from-property",-1952326387),created_from_property);
} else {
return G__60085;
}
})()], null)], null);
} else {
return null;
}
});
/**
 * The id of the page, then the :block/order of each block from the page down
 *   to `block`.
 */
logseq.outliner.op.construct.document_order_path = (function logseq$outliner$op$construct$document_order_path(block){
var block__$1 = block;
var path = cljs.core.List.EMPTY;
while(true){
var temp__5823__auto__ = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var parent = temp__5823__auto__;
var G__60454 = parent;
var G__60455 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block__$1));
block__$1 = G__60454;
path = G__60455;
continue;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1));
}
break;
}
});
/**
 * Compares 2 document-order-path values: blocks sort as they appear on their
 *   pages, a parent before its children.
 */
logseq.outliner.op.construct.compare_document_order = (function logseq$outliner$op$construct$compare_document_order(path_1,path_2){
var path_1__$1 = cljs.core.seq(path_1);
var path_2__$1 = cljs.core.seq(path_2);
while(true){
if((((path_1__$1 == null)) && ((path_2__$1 == null)))){
return (0);
} else {
if((path_1__$1 == null)){
return (-1);
} else {
if((path_2__$1 == null)){
return (1);
} else {
var c = cljs.core.compare(cljs.core.first(path_1__$1),cljs.core.first(path_2__$1));
if((c === (0))){
var G__60459 = cljs.core.next(path_1__$1);
var G__60460 = cljs.core.next(path_2__$1);
path_1__$1 = G__60459;
path_2__$1 = G__60460;
continue;
} else {
return c;
}

}
}
}
break;
}
});
logseq.outliner.op.construct.build_inverse_move_blocks = (function logseq$outliner$op$construct$build_inverse_move_blocks(db_before,ids){
var map__60097 = logseq.outliner.op.construct.selected_block_roots(db_before,ids);
var map__60097__$1 = cljs.core.__destructure_map(map__60097);
var roots = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60097__$1,new cljs.core.Keyword(null,"roots","roots",-1088919250));
var incomplete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60097__$1,new cljs.core.Keyword(null,"incomplete?","incomplete?",-2126127275));
var roots__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(logseq.outliner.op.construct.document_order_path,logseq.outliner.op.construct.compare_document_order,roots);
var restore_ops = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60093_SHARP_){
return logseq.outliner.op.construct.move_root__GT_restore_op(db_before,p1__60093_SHARP_);
}),roots__$1);
if(((cljs.core.not(incomplete_QMARK_)) && (((cljs.core.seq(roots__$1)) && (cljs.core.every_QMARK_(cljs.core.some_QMARK_,restore_ops)))))){
return cljs.core.seq(restore_ops);
} else {
return null;
}
});
/**
 * Whether moving `ids` the other way undoes moving them up (`up?`) or down:
 *   the top-level blocks among `ids` are adjacent siblings in order, and a
 *   sibling on the side they move to keeps them under their parent. A move
 *   past the first or last child takes the blocks into another parent, and
 *   the opposite move need not bring them back: moving a, b up in `P(Q(a, b))`
 *   gives `P(a, b, Q)`, and moving them down again gives `P(Q, a, b)`.
 */
logseq.outliner.op.construct.opposite_move_restores_QMARK_ = (function logseq$outliner$op$construct$opposite_move_restores_QMARK_(db,ids,up_QMARK_){
var blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60098_SHARP_){
return logseq.outliner.op.construct.block_entity(db,p1__60098_SHARP_);
}),ids);
var selected_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks));
var has_selected_ancestor_QMARK_ = (function (ent){
var G__60104 = ent;
var G__60105 = (function (p1__60099_SHARP_){
return cljs.core.contains_QMARK_(selected_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__60099_SHARP_));
});
return (logseq.db.some_parent.cljs$core$IFn$_invoke$arity$2 ? logseq.db.some_parent.cljs$core$IFn$_invoke$arity$2(G__60104,G__60105) : logseq.db.some_parent.call(null,G__60104,G__60105));
});
var top_level_blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(has_selected_ancestor_QMARK_,blocks);
return ((cljs.core.every_QMARK_(cljs.core.some_QMARK_,blocks)) && (((cljs.core.seq(top_level_blocks)) && (((cljs.core.every_QMARK_((function (p__60111){
var vec__60114 = p__60111;
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60114,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60114,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(logseq.db.get_left_sibling(right)));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),top_level_blocks))) && ((!(((cljs.core.truth_(up_QMARK_)?logseq.db.get_left_sibling(cljs.core.first(top_level_blocks)):logseq.db.get_right_sibling(cljs.core.last(top_level_blocks))) == null)))))))));
});
logseq.outliner.op.construct.page_top_level_blocks = (function logseq$outliner$op$construct$page_top_level_blocks(page){
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
return cljs.core.vec(logseq.db.sort_by_order(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60117_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,(function (){var G__60121 = p1__60117_SHARP_;
var G__60121__$1 = (((G__60121 == null))?null:new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(G__60121));
if((G__60121__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__60121__$1);
}
})());
}),new cljs.core.Keyword("block","_page","block/_page",1150043350).cljs$core$IFn$_invoke$arity$1(page))));
});
logseq.outliner.op.construct.entity__GT_save_op = (function logseq$outliner$op$construct$entity__GT_save_op(db_before,ent){
return logseq.outliner.op.construct.build_inverse_save_block(db_before,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,ent),null);
});
logseq.outliner.op.construct.build_inverse_delete_page = (function logseq$outliner$op$construct$build_inverse_delete_page(db_before,db_after,page_uuid){
var temp__5825__auto__ = (function (){var G__60130 = db_before;
var G__60131 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),page_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60130,G__60131) : datascript.core.entity.call(null,G__60130,G__60131));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
var class_or_property_QMARK_ = (function (){var or__5142__auto__ = (logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.class_QMARK_.call(null,page));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.property_QMARK_.call(null,page));
}
})();
var today_page_QMARK_ = (function (){var temp__5825__auto____$1 = new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5825__auto____$1)){
var day = temp__5825__auto____$1;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.common.util.date_time.ms__GT_journal_day(logseq.common.util.time_ms()),day);
} else {
return null;
}
})();
var root_plans = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60126_SHARP_){
return logseq.outliner.op.construct.delete_root__GT_restore_plan(db_before,p1__60126_SHARP_);
}),logseq.outliner.op.construct.page_top_level_blocks(page));
if(cljs.core.truth_(class_or_property_QMARK_)){
var page_save_op = logseq.outliner.op.construct.entity__GT_save_op(db_before,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,page),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(page)));
var create_op = (cljs.core.truth_((logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.class_QMARK_.call(null,page)))?(function (){var class_ident_namespace = (function (){var G__60136 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(page);
if((G__60136 == null)){
return null;
} else {
return cljs.core.namespace(G__60136);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-page","create-page",-1352656443),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page),(function (){var G__60137 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),page_uuid,new cljs.core.Keyword(null,"class?","class?",385834571),true,new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"split-namespace?","split-namespace?",-1035468161),true], null);
if(cljs.core.truth_(class_ident_namespace)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60137,new cljs.core.Keyword(null,"class-ident-namespace","class-ident-namespace",1608586491),class_ident_namespace);
} else {
return G__60137;
}
})()], null)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert-property","upsert-property",1682220994),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(page),logseq.outliner.op.construct.inverse_upsert_property_schema(db_before,db_after,page),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-name","property-name",-1399851434),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page)], null)], null)], null));
var restore_root_ops = ((cljs.core.every_QMARK_(cljs.core.some_QMARK_,root_plans))?logseq.outliner.op.construct.restore_plans__GT_ops(db_before,root_plans):null);
var G__60138 = cljs.core.PersistentVector.EMPTY;
var G__60138__$1 = (cljs.core.truth_(create_op)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60138,create_op):G__60138);
var G__60138__$2 = ((cljs.core.seq(restore_root_ops))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__60138__$1,restore_root_ops):G__60138__$1);
var G__60138__$3 = (cljs.core.truth_(page_save_op)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60138__$2,page_save_op):G__60138__$2);
return cljs.core.seq(G__60138__$3);

} else {
if(cljs.core.truth_(today_page_QMARK_)){
if(cljs.core.every_QMARK_(cljs.core.some_QMARK_,root_plans)){
return cljs.core.seq(logseq.outliner.op.construct.restore_plans__GT_ops(db_before,root_plans));
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-recycled","restore-recycled",-2050992683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_uuid], null)], null);

}
}
} else {
return null;
}
});
logseq.outliner.op.construct.restore_target_insert_op = (function logseq$outliner$op$construct$restore_target_insert_op(db_before,db_after,target_id,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440).cljs$core$IFn$_invoke$arity$1(opts))){
var temp__5825__auto__ = logseq.outliner.op.construct.stable_entity_ref(db_before,target_id);
if(cljs.core.truth_(temp__5825__auto__)){
var target_ref = temp__5825__auto__;
if(cljs.core.truth_((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db_after,target_ref) : datascript.core.entity.call(null,db_after,target_ref)))){
var temp__5825__auto____$1 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db_before,target_ref) : datascript.core.entity.call(null,db_before,target_ref));
if(cljs.core.truth_(temp__5825__auto____$1)){
var target = temp__5825__auto____$1;
var insert_block = logseq.outliner.op.construct.build_insert_block_payload(db_before,target);
var vec__60146 = logseq.outliner.op.construct.resolve_target_and_sibling(target);
var target_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60146,(0),null);
var sibling_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60146,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_ref], null),cljs.core.PersistentArrayMap.EMPTY], null)], null),logseq.outliner.op.construct.to_insert_op(db_before,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [insert_block], null),new cljs.core.Keyword(null,"target-id","target-id",-1438159155),logseq.outliner.op.construct.stable_entity_ref(db_before,target_id__$1),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_], null))], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
logseq.outliner.op.construct.build_inverse_insert_like = (function logseq$outliner$op$construct$build_inverse_insert_like(db_before,db_after,tx_data,args){
var vec__60150 = args;
var _blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60150,(0),null);
var target_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60150,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60150,(2),null);
var new_block_eids = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (d){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(d));
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__5140__auto____$1)){
return ((function (){var G__60153 = db_before;
var G__60154 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60153,G__60154) : datascript.core.entity.call(null,G__60153,G__60154));
})() == null);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(d)], null);
} else {
return null;
}
}),tx_data);
var restore_op = logseq.outliner.op.construct.restore_target_insert_op(db_before,db_after,target_id,opts);
var G__60155 = cljs.core.PersistentVector.EMPTY;
var G__60155__$1 = ((cljs.core.seq(new_block_eids))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60155,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block_eids,cljs.core.PersistentArrayMap.EMPTY], null)], null)):G__60155);
var G__60155__$2 = (cljs.core.truth_(restore_op)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__60155__$1,restore_op):G__60155__$1);
return cljs.core.seq(G__60155__$2);

});
logseq.outliner.op.construct.reverse_inverse_entry_groups = (function logseq$outliner$op$construct$reverse_inverse_entry_groups(inverse_entries,forward_op_group_sizes){
var entries = inverse_entries;
var sizes = forward_op_group_sizes;
var groups = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5823__auto__ = cljs.core.first(sizes);
if(cljs.core.truth_(temp__5823__auto__)){
var group_size = temp__5823__auto__;
var vec__60167 = cljs.core.split_at(group_size,entries);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60167,(0),null);
var remaining = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60167,(1),null);
var G__60463 = remaining;
var G__60464 = cljs.core.next(sizes);
var G__60465 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,group);
entries = G__60463;
sizes = G__60464;
groups = G__60465;
continue;
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reverse(groups)], 0));
}
break;
}
});
logseq.outliner.op.construct.build_strict_inverse_outliner_ops = (function logseq$outliner$op$construct$build_strict_inverse_outliner_ops(db_before,db_after,tx_data,forward_ops,forward_op_group_sizes){
if(cljs.core.seq(forward_ops)){
var inverse_entries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__60173){
var vec__60176 = p__60173;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60176,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60176,(1),null);
var inverse_entry = (function (){var G__60179 = op;
var G__60179__$1 = (((G__60179 instanceof cljs.core.Keyword))?G__60179.fqn:null);
switch (G__60179__$1) {
case "save-block":
var vec__60180 = args;
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60180,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60180,(1),null);
return logseq.outliner.op.construct.build_inverse_save_block(db_before,block,opts);

break;
case "insert-blocks":
return logseq.outliner.op.construct.build_inverse_insert_like(db_before,db_after,tx_data,args);

break;
case "apply-template":
return logseq.outliner.op.construct.build_inverse_insert_like(db_before,db_after,tx_data,args);

break;
case "move-blocks":
var vec__60183 = args;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60183,(0),null);
var _target_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60183,(1),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60183,(2),null);
return logseq.outliner.op.construct.build_inverse_move_blocks(db_before,ids);

break;
case "indent-outdent-blocks":
var vec__60188 = args;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60188,(0),null);
var indent_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60188,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60188,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent-outdent-blocks","indent-outdent-blocks",-104352713),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.op.construct.stable_id_coll(db_before,ids),cljs.core.not(indent_QMARK_),opts], null)], null);

break;
case "move-blocks-up-down":
var vec__60191 = args;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60191,(0),null);
var up_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60191,(1),null);
if(logseq.outliner.op.construct.opposite_move_restores_QMARK_(db_before,ids,up_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-blocks-up-down","move-blocks-up-down",1370411060),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.op.construct.stable_id_coll(db_before,ids),cljs.core.not(up_QMARK_)], null)], null);
} else {
return logseq.outliner.op.construct.build_inverse_move_blocks(db_before,ids);
}

break;
case "delete-blocks":
var vec__60196 = args;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60196,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60196,(1),null);
return logseq.outliner.op.construct.build_inverse_delete_blocks(db_before,ids);

break;
case "create-page":
var vec__60199 = args;
var _title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60199,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60199,(1),null);
var temp__5825__auto__ = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto__)){
var page_uuid = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-page","delete-page",-1371381770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_uuid,cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
return null;
}

break;
case "delete-page":
var vec__60205 = args;
var page_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60205,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60205,(1),null);
return logseq.outliner.op.construct.build_inverse_delete_page(db_before,db_after,page_uuid);

break;
case "upsert-property":
var vec__60208 = args;
var property_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60208,(0),null);
var _schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60208,(1),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60208,(2),null);
if(cljs.core.qualified_keyword_QMARK_(property_id)){
var temp__5823__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db_before,property_id) : datascript.core.entity.call(null,db_before,property_id));
if(cljs.core.truth_(temp__5823__auto__)){
var property = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert-property","upsert-property",1682220994),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [property_id,logseq.outliner.op.construct.inverse_upsert_property_schema(db_before,db_after,property),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-name","property-name",-1399851434),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(property)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-page","delete-page",-1371381770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-ident-block-uuid","db-ident-block-uuid",-2020167291),property_id),cljs.core.PersistentArrayMap.EMPTY], null)], null);
}
} else {
return null;
}

break;
default:
return null;

}
})();
if(((cljs.core.sequential_QMARK_(inverse_entry)) && (cljs.core.empty_QMARK_(inverse_entry)))){
return null;
} else {
return inverse_entry;
}
}),forward_ops);
if(cljs.core.every_QMARK_(cljs.core.some_QMARK_,inverse_entries)){
var G__60215 = logseq.outliner.op.construct.reverse_inverse_entry_groups(inverse_entries,forward_op_group_sizes);
var G__60215__$1 = (((G__60215 == null))?null:cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__60170_SHARP_){
if(((cljs.core.sequential_QMARK_(p1__60170_SHARP_)) && (cljs.core.sequential_QMARK_(cljs.core.first(p1__60170_SHARP_))))){
return p1__60170_SHARP_;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60170_SHARP_], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__60215], 0)));
var G__60215__$2 = (((G__60215__$1 == null))?null:cljs.core.vec(G__60215__$1));
if((G__60215__$2 == null)){
return null;
} else {
return cljs.core.seq(G__60215__$2);
}
} else {
return null;
}
} else {
return null;
}
});
logseq.outliner.op.construct.has_replace_empty_target_insert_op_QMARK_ = (function logseq$outliner$op$construct$has_replace_empty_target_insert_op_QMARK_(forward_ops){
return cljs.core.some((function (p__60222){
var vec__60226 = p__60222;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60226,(0),null);
var vec__60230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60226,(1),null);
var _blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60230,(0),null);
var _target_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60230,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60230,(2),null);
var and__5140__auto__ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),null,new cljs.core.Keyword(null,"apply-template","apply-template",169070311),null], null), null),op);
if(and__5140__auto__){
return new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__5140__auto__;
}
}),forward_ops);
});
logseq.outliner.op.construct.contains_transact_op_QMARK_ = (function logseq$outliner$op$construct$contains_transact_op_QMARK_(ops){
var ops_SINGLEQUOTE_ = (((ops == null))?null:((((cljs.core.sequential_QMARK_(ops)) && ((cljs.core.first(ops) instanceof cljs.core.Keyword))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(ops)], null):ops
));
return cljs.core.some((function (entry){
return ((cljs.core.sequential_QMARK_(entry)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.first(entry))));
}),ops_SINGLEQUOTE_);
});
logseq.outliner.op.construct.normalize_op_entries = (function logseq$outliner$op$construct$normalize_op_entries(ops){
var ops_SINGLEQUOTE_ = (function (){var G__60236 = ops;
var G__60236__$1 = (((G__60236 == null))?null:cljs.core.seq(G__60236));
if((G__60236__$1 == null)){
return null;
} else {
return cljs.core.vec(G__60236__$1);
}
})();
if((ops_SINGLEQUOTE_ == null)){
return null;
} else {
if((((cljs.core.first(ops_SINGLEQUOTE_) instanceof cljs.core.Keyword)) && (cljs.core.vector_QMARK_(cljs.core.second(ops_SINGLEQUOTE_))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ops_SINGLEQUOTE_], null);
} else {
return ops_SINGLEQUOTE_;

}
}
});
logseq.outliner.op.construct.canonical_block_id = (function logseq$outliner$op$construct$canonical_block_id(db,block_id){
if(cljs.core.uuid_QMARK_(block_id)){
return block_id;
} else {
if(((cljs.core.vector_QMARK_(block_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(block_id))) && (cljs.core.uuid_QMARK_(cljs.core.second(block_id))))))){
return cljs.core.second(block_id);
} else {
if(((cljs.core.integer_QMARK_(block_id)) && ((!((block_id < (0))))))){
return logseq.outliner.op.construct.stable_block_uuid(db,block_id);
} else {
return block_id;

}
}
}
});
logseq.outliner.op.construct.canonical_property_id = (function logseq$outliner$op$construct$canonical_property_id(db,property_id){
if(cljs.core.qualified_keyword_QMARK_(property_id)){
return property_id;
} else {
if(((cljs.core.integer_QMARK_(property_id)) && ((!((property_id < (0))))))){
var or__5142__auto__ = (function (){var G__60240 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,property_id) : datascript.core.entity.call(null,db,property_id));
if((G__60240 == null)){
return null;
} else {
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(G__60240);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return property_id;
}
} else {
return property_id;

}
}
});
logseq.outliner.op.construct.normalize_block_op_entry_ids = (function logseq$outliner$op$construct$normalize_block_op_entry_ids(id,ids,op,args){
var G__60241 = op;
var G__60241__$1 = (((G__60241 instanceof cljs.core.Keyword))?G__60241.fqn:null);
switch (G__60241__$1) {
case "save-block":
var vec__60242 = args;
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60242,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60242,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,opts], null)], null);

break;
case "insert-blocks":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),(function (){var G__60245 = cljs.core.second(args);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__60245) : id.call(null,G__60245));
})(),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2))], null)], null);

break;
case "apply-template":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60246 = cljs.core.first(args);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__60246) : id.call(null,G__60246));
})(),(function (){var G__60247 = cljs.core.second(args);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__60247) : id.call(null,G__60247));
})(),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2))], null)], null);

break;
case "delete-blocks":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60252 = cljs.core.first(args);
return (ids.cljs$core$IFn$_invoke$arity$1 ? ids.cljs$core$IFn$_invoke$arity$1(G__60252) : ids.call(null,G__60252));
})(),cljs.core.second(args)], null)], null);

break;
case "move-blocks":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60253 = cljs.core.first(args);
return (ids.cljs$core$IFn$_invoke$arity$1 ? ids.cljs$core$IFn$_invoke$arity$1(G__60253) : ids.call(null,G__60253));
})(),(function (){var G__60254 = cljs.core.second(args);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__60254) : id.call(null,G__60254));
})(),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2))], null)], null);

break;
case "move-blocks-up-down":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60255 = cljs.core.first(args);
return (ids.cljs$core$IFn$_invoke$arity$1 ? ids.cljs$core$IFn$_invoke$arity$1(G__60255) : ids.call(null,G__60255));
})(),cljs.core.second(args)], null)], null);

break;
case "indent-outdent-blocks":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60256 = cljs.core.first(args);
return (ids.cljs$core$IFn$_invoke$arity$1 ? ids.cljs$core$IFn$_invoke$arity$1(G__60256) : ids.call(null,G__60256));
})(),cljs.core.second(args),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2))], null)], null);

break;
default:
return null;

}
});
logseq.outliner.op.construct.normalize_property_op_entry_ids = (function logseq$outliner$op$construct$normalize_property_op_entry_ids(id,ids,property_id,op,args){
var G__60258 = op;
var G__60258__$1 = (((G__60258 instanceof cljs.core.Keyword))?G__60258.fqn:null);
switch (G__60258__$1) {
case "set-block-property":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60260 = cljs.core.first(args);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__60260) : id.call(null,G__60260));
})(),(function (){var G__60261 = cljs.core.second(args);
return (property_id.cljs$core$IFn$_invoke$arity$1 ? property_id.cljs$core$IFn$_invoke$arity$1(G__60261) : property_id.call(null,G__60261));
})(),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2))], null)], null);

break;
case "remove-block-property":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60262 = cljs.core.first(args);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__60262) : id.call(null,G__60262));
})(),(function (){var G__60263 = cljs.core.second(args);
return (property_id.cljs$core$IFn$_invoke$arity$1 ? property_id.cljs$core$IFn$_invoke$arity$1(G__60263) : property_id.call(null,G__60263));
})()], null)], null);

break;
case "delete-property-value":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60264 = cljs.core.first(args);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__60264) : id.call(null,G__60264));
})(),(function (){var G__60265 = cljs.core.second(args);
return (property_id.cljs$core$IFn$_invoke$arity$1 ? property_id.cljs$core$IFn$_invoke$arity$1(G__60265) : property_id.call(null,G__60265));
})(),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2))], null)], null);

break;
case "create-property-text-block":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60266 = cljs.core.first(args);
if((G__60266 == null)){
return null;
} else {
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__60266) : id.call(null,G__60266));
}
})(),(function (){var G__60267 = cljs.core.second(args);
return (property_id.cljs$core$IFn$_invoke$arity$1 ? property_id.cljs$core$IFn$_invoke$arity$1(G__60267) : property_id.call(null,G__60267));
})(),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(3))], null)], null);

break;
case "batch-set-property":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60268 = cljs.core.first(args);
return (ids.cljs$core$IFn$_invoke$arity$1 ? ids.cljs$core$IFn$_invoke$arity$1(G__60268) : ids.call(null,G__60268));
})(),(function (){var G__60269 = cljs.core.second(args);
return (property_id.cljs$core$IFn$_invoke$arity$1 ? property_id.cljs$core$IFn$_invoke$arity$1(G__60269) : property_id.call(null,G__60269));
})(),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(3))], null)], null);

break;
case "batch-remove-property":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60270 = cljs.core.first(args);
return (ids.cljs$core$IFn$_invoke$arity$1 ? ids.cljs$core$IFn$_invoke$arity$1(G__60270) : ids.call(null,G__60270));
})(),(function (){var G__60271 = cljs.core.second(args);
return (property_id.cljs$core$IFn$_invoke$arity$1 ? property_id.cljs$core$IFn$_invoke$arity$1(G__60271) : property_id.call(null,G__60271));
})()], null)], null);

break;
case "batch-delete-property-value":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60274 = cljs.core.first(args);
return (ids.cljs$core$IFn$_invoke$arity$1 ? ids.cljs$core$IFn$_invoke$arity$1(G__60274) : ids.call(null,G__60274));
})(),(function (){var G__60275 = cljs.core.second(args);
return (property_id.cljs$core$IFn$_invoke$arity$1 ? property_id.cljs$core$IFn$_invoke$arity$1(G__60275) : property_id.call(null,G__60275));
})(),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2))], null)], null);

break;
case "class-add-property":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60276 = cljs.core.first(args);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__60276) : id.call(null,G__60276));
})(),(function (){var G__60277 = cljs.core.second(args);
return (property_id.cljs$core$IFn$_invoke$arity$1 ? property_id.cljs$core$IFn$_invoke$arity$1(G__60277) : property_id.call(null,G__60277));
})()], null)], null);

break;
case "class-remove-property":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60278 = cljs.core.first(args);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__60278) : id.call(null,G__60278));
})(),(function (){var G__60279 = cljs.core.second(args);
return (property_id.cljs$core$IFn$_invoke$arity$1 ? property_id.cljs$core$IFn$_invoke$arity$1(G__60279) : property_id.call(null,G__60279));
})()], null)], null);

break;
case "upsert-property":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60280 = cljs.core.first(args);
if((G__60280 == null)){
return null;
} else {
return (property_id.cljs$core$IFn$_invoke$arity$1 ? property_id.cljs$core$IFn$_invoke$arity$1(G__60280) : property_id.call(null,G__60280));
}
})(),cljs.core.second(args),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2))], null)], null);

break;
case "upsert-closed-value":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60281 = cljs.core.first(args);
return (property_id.cljs$core$IFn$_invoke$arity$1 ? property_id.cljs$core$IFn$_invoke$arity$1(G__60281) : property_id.call(null,G__60281));
})(),cljs.core.second(args)], null)], null);

break;
case "delete-closed-value":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60282 = cljs.core.first(args);
return (property_id.cljs$core$IFn$_invoke$arity$1 ? property_id.cljs$core$IFn$_invoke$arity$1(G__60282) : property_id.call(null,G__60282));
})(),(function (){var G__60283 = cljs.core.second(args);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__60283) : id.call(null,G__60283));
})()], null)], null);

break;
case "add-existing-values-to-closed-values":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60284 = cljs.core.first(args);
return (property_id.cljs$core$IFn$_invoke$arity$1 ? property_id.cljs$core$IFn$_invoke$arity$1(G__60284) : property_id.call(null,G__60284));
})(),cljs.core.second(args)], null)], null);

break;
default:
return null;

}
});
logseq.outliner.op.construct.normalize_op_entry_ids = (function logseq$outliner$op$construct$normalize_op_entry_ids(db,p__60285){
var vec__60286 = p__60285;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60286,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60286,(1),null);
var op_entry = vec__60286;
var id = (function (v){
return logseq.outliner.op.construct.canonical_block_id(db,v);
});
var property_id = (function (v){
return logseq.outliner.op.construct.canonical_property_id(db,v);
});
var ids = (function (vs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(id,vs);
});
var normalized = (function (){var or__5142__auto__ = logseq.outliner.op.construct.normalize_block_op_entry_ids(id,ids,op,args);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.outliner.op.construct.normalize_property_op_entry_ids(id,ids,property_id,op,args);
}
})();
var or__5142__auto__ = normalized;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return op_entry;
}
});
logseq.outliner.op.construct.canonicalize_explicit_outliner_op_groups = (function logseq$outliner$op$construct$canonicalize_explicit_outliner_op_groups(db,tx_data,ops){
var ops_SINGLEQUOTE_ = logseq.outliner.op.construct.normalize_op_entries(ops);
if((ops_SINGLEQUOTE_ == null)){
return null;
} else {
if(cljs.core.seq(ops_SINGLEQUOTE_)){
return cljs.core.vec(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (op){
var canonicalized_op = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),null,new cljs.core.Keyword(null,"apply-template","apply-template",169070311),null], null), null),cljs.core.first(op)))?op:logseq.outliner.op.construct.canonicalize_semantic_outliner_op(db,tx_data,op));
if(((cljs.core.sequential_QMARK_(canonicalized_op)) && (((cljs.core.sequential_QMARK_(cljs.core.first(canonicalized_op))) && ((cljs.core.ffirst(canonicalized_op) instanceof cljs.core.Keyword)))))){
return cljs.core.vec(canonicalized_op);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [canonicalized_op], null);
}
}),logseq.outliner.op.construct.canonicalize_insert_ops(db,tx_data,ops_SINGLEQUOTE_)));
} else {
return null;

}
}
});
logseq.outliner.op.construct.canonicalize_explicit_outliner_ops = (function logseq$outliner$op$construct$canonicalize_explicit_outliner_ops(db,tx_data,ops){
var G__60291 = logseq.outliner.op.construct.canonicalize_explicit_outliner_op_groups(db,tx_data,ops);
var G__60291__$1 = (((G__60291 == null))?null:cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__60291], 0)));
if((G__60291__$1 == null)){
return null;
} else {
return cljs.core.vec(G__60291__$1);
}
});
logseq.outliner.op.construct.patch_inverse_delete_block_ops = (function logseq$outliner$op$construct$patch_inverse_delete_block_ops(inverse_outliner_ops,forward_outliner_ops){
var forward_insert_ops_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60295_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),null,new cljs.core.Keyword(null,"apply-template","apply-template",169070311),null], null), null),cljs.core.first(p1__60295_SHARP_));
}),cljs.core.reverse(forward_outliner_ops))));
var op__GT_inserted_ids = (function (p__60297){
var vec__60298 = p__60297;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60298,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60298,(1),null);
var blocks = (function (){var G__60301 = op;
var G__60301__$1 = (((G__60301 instanceof cljs.core.Keyword))?G__60301.fqn:null);
switch (G__60301__$1) {
case "insert-blocks":
return cljs.core.first(args);

break;
case "apply-template":
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.Keyword(null,"template-blocks","template-blocks",1008232170)], null));

break;
default:
return null;

}
})();
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (block){
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
} else {
return null;
}
}),(function (){var or__5142__auto__ = blocks;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
});
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__60302){
var vec__60306 = p__60302;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60306,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60306,(1),null);
var inverse_op = vec__60306;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),op)) && (cljs.core.seq(cljs.core.deref(forward_insert_ops_STAR_))))){
var ids = op__GT_inserted_ids(cljs.core.first(cljs.core.deref(forward_insert_ops_STAR_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(forward_insert_ops_STAR_,cljs.core.subvec,(1));

if(cljs.core.seq(ids)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ids,cljs.core.second(args)], null)], null);
} else {
return inverse_op;
}
} else {
return inverse_op;
}
}),inverse_outliner_ops);
});
logseq.outliner.op.construct.patch_forward_delete_block_op_ids = (function logseq$outliner$op$construct$patch_forward_delete_block_op_ids(db_before,outliner_ops){
var G__60311 = outliner_ops;
var G__60311__$1 = (((G__60311 == null))?null:cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__60312){
var vec__60313 = p__60312;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60313,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60313,(1),null);
var op_entry = vec__60313;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),op)){
var vec__60316 = args;
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60316,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60316,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.op.construct.stable_id_coll(db_before,ids),opts], null)], null);
} else {
return op_entry;
}
}),G__60311));
var G__60311__$2 = (((G__60311__$1 == null))?null:cljs.core.seq(G__60311__$1));
if((G__60311__$2 == null)){
return null;
} else {
return cljs.core.vec(G__60311__$2);
}
});
logseq.outliner.op.construct.canonicalize_outliner_op_groups = (function logseq$outliner$op$construct$canonicalize_outliner_op_groups(db,tx_meta,tx_data){
var explicit_forward_ops = logseq.outliner.op.construct.normalize_op_entries(new cljs.core.Keyword("db-sync","forward-outliner-ops","db-sync/forward-outliner-ops",-1469385415).cljs$core$IFn$_invoke$arity$1(tx_meta));
var outliner_ops = logseq.outliner.op.construct.normalize_op_entries(new cljs.core.Keyword(null,"outliner-ops","outliner-ops",-1565194389).cljs$core$IFn$_invoke$arity$1(tx_meta));
if(cljs.core.seq(explicit_forward_ops)){
return logseq.outliner.op.construct.canonicalize_explicit_outliner_op_groups(db,tx_data,explicit_forward_ops);
} else {
if(cljs.core.seq(outliner_ops)){
return logseq.outliner.op.construct.canonicalize_explicit_outliner_op_groups(db,tx_data,outliner_ops);
} else {
return null;

}
}
});
logseq.outliner.op.construct.unresolved_numeric_entity_id_QMARK_ = (function logseq$outliner$op$construct$unresolved_numeric_entity_id_QMARK_(x){
return ((cljs.core.integer_QMARK_(x)) && ((!((x < (0))))));
});
logseq.outliner.op.construct.numeric_id_in_ref_value_QMARK_ = (function logseq$outliner$op$construct$numeric_id_in_ref_value_QMARK_(v){
if(logseq.outliner.op.construct.unresolved_numeric_entity_id_QMARK_(v)){
return true;
} else {
if(cljs.core.set_QMARK_(v)){
return cljs.core.some(logseq.outliner.op.construct.numeric_id_in_ref_value_QMARK_,v);
} else {
if(cljs.core.sequential_QMARK_(v)){
return cljs.core.some(logseq.outliner.op.construct.numeric_id_in_ref_value_QMARK_,v);
} else {
return false;

}
}
}
});
logseq.outliner.op.construct.numeric_id_in_block_ref_attrs_QMARK_ = (function logseq$outliner$op$construct$numeric_id_in_block_ref_attrs_QMARK_(db,block){
var and__5140__auto__ = cljs.core.map_QMARK_(block);
if(and__5140__auto__){
return cljs.core.some((function (p__60319){
var vec__60320 = p__60319;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60320,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60320,(1),null);
var and__5140__auto____$1 = logseq.outliner.op.construct.ref_attr_QMARK_(db,k);
if(and__5140__auto____$1){
return logseq.outliner.op.construct.numeric_id_in_ref_value_QMARK_(v);
} else {
return and__5140__auto____$1;
}
}),block);
} else {
return and__5140__auto__;
}
});
logseq.outliner.op.construct.stale_numeric_id_in_page_ops_QMARK_ = (function logseq$outliner$op$construct$stale_numeric_id_in_page_ops_QMARK_(db,op,args){
var G__60329 = op;
var G__60329__$1 = (((G__60329 instanceof cljs.core.Keyword))?G__60329.fqn:null);
switch (G__60329__$1) {
case "save-block":
var vec__60330 = args;
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60330,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60330,(1),null);
return logseq.outliner.op.construct.numeric_id_in_block_ref_attrs_QMARK_(db,block);

break;
case "insert-blocks":
var vec__60335 = args;
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60335,(0),null);
var target_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60335,(1),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60335,(2),null);
var or__5142__auto__ = cljs.core.some((function (p1__60327_SHARP_){
return logseq.outliner.op.construct.numeric_id_in_block_ref_attrs_QMARK_(db,p1__60327_SHARP_);
}),blocks);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.outliner.op.construct.unresolved_numeric_entity_id_QMARK_(target_id);
}

break;
case "create-page":
var vec__60338 = args;
var _title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60338,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60338,(1),null);
return logseq.outliner.op.construct.unresolved_numeric_entity_id_QMARK_(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(opts));

break;
case "rename-page":
var vec__60341 = args;
var page_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60341,(0),null);
var _new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60341,(1),null);
return logseq.outliner.op.construct.unresolved_numeric_entity_id_QMARK_(page_uuid);

break;
case "delete-page":
var vec__60344 = args;
var page_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60344,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60344,(1),null);
return logseq.outliner.op.construct.unresolved_numeric_entity_id_QMARK_(page_uuid);

break;
case "restore-recycled":
var vec__60347 = args;
var root_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60347,(0),null);
return logseq.outliner.op.construct.unresolved_numeric_entity_id_QMARK_(root_id);

break;
case "apply-template":
var vec__60350 = args;
var template_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60350,(0),null);
var target_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60350,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60350,(2),null);
var template_blocks = new cljs.core.Keyword(null,"template-blocks","template-blocks",1008232170).cljs$core$IFn$_invoke$arity$1(opts);
var or__5142__auto__ = logseq.outliner.op.construct.unresolved_numeric_entity_id_QMARK_(template_id);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = logseq.outliner.op.construct.unresolved_numeric_entity_id_QMARK_(target_id);
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
return cljs.core.some((function (p1__60328_SHARP_){
return logseq.outliner.op.construct.numeric_id_in_block_ref_attrs_QMARK_(db,p1__60328_SHARP_);
}),template_blocks);
}
}

break;
case "recycle-delete-permanently":
var vec__60353 = args;
var root_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60353,(0),null);
return logseq.outliner.op.construct.unresolved_numeric_entity_id_QMARK_(root_id);

break;
default:
return null;

}
});
logseq.outliner.op.construct.stale_numeric_id_in_schema_ops_QMARK_ = (function logseq$outliner$op$construct$stale_numeric_id_in_schema_ops_QMARK_(op,args){
var G__60356 = op;
var G__60356__$1 = (((G__60356 instanceof cljs.core.Keyword))?G__60356.fqn:null);
switch (G__60356__$1) {
case "upsert-property":
var vec__60357 = args;
var property_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60357,(0),null);
var _schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60357,(1),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60357,(2),null);
return logseq.outliner.op.construct.unresolved_numeric_entity_id_QMARK_(property_id);

break;
default:
return null;

}
});
logseq.outliner.op.construct.stale_numeric_id_in_op_QMARK_ = (function logseq$outliner$op$construct$stale_numeric_id_in_op_QMARK_(db,p__60360){
var vec__60361 = p__60360;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60361,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60361,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transact","transact",-267998670),op)) && (cljs.core.boolean$((function (){var or__5142__auto__ = logseq.outliner.op.construct.stale_numeric_id_in_page_ops_QMARK_(db,op,args);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.outliner.op.construct.stale_numeric_id_in_schema_ops_QMARK_(op,args);
}
})())));
});
logseq.outliner.op.construct.assert_no_stale_numeric_ids_BANG_ = (function logseq$outliner$op$construct$assert_no_stale_numeric_ids_BANG_(db,ops,stage){
var temp__5825__auto__ = cljs.core.some((function (p__60365){
var vec__60366 = p__60365;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60366,(0),null);
var op_entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60366,(1),null);
if(logseq.outliner.op.construct.stale_numeric_id_in_op_QMARK_(db,op_entry)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,op_entry], null);
} else {
return null;
}
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,ops));
if(cljs.core.truth_(temp__5825__auto__)){
var vec__60369 = temp__5825__auto__;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60369,(0),null);
var op_entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60369,(1),null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Non-transact outliner ops contain numeric entity ids",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stage","stage",1843544772),stage,new cljs.core.Keyword(null,"index","index",-1531685915),idx,new cljs.core.Keyword(null,"op","op",-1882987955),op_entry,new cljs.core.Keyword(null,"ops","ops",1237330063),ops], null));
} else {
return null;
}
});
logseq.outliner.op.construct.assert_no_numeric_entity_ids_BANG_ = (function logseq$outliner$op$construct$assert_no_numeric_entity_ids_BANG_(db,ops,stage){
return logseq.outliner.op.construct.assert_no_stale_numeric_ids_BANG_(db,(function (){var G__60372 = ops;
var G__60372__$1 = (((G__60372 == null))?null:cljs.core.seq(G__60372));
if((G__60372__$1 == null)){
return null;
} else {
return cljs.core.vec(G__60372__$1);
}
})(),stage);
});
logseq.outliner.op.construct.derive_history_outliner_ops = (function logseq$outliner$op$construct$derive_history_outliner_ops(db_before,db_after,tx_data,tx_meta){
var canonical_forward_outliner_op_groups = (function (){var G__60378 = logseq.outliner.op.construct.canonicalize_outliner_op_groups(db_after,tx_meta,tx_data);
if((G__60378 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (group){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60374_SHARP_){
return logseq.outliner.op.construct.normalize_op_entry_ids(db_after,p1__60374_SHARP_);
}),logseq.outliner.op.construct.patch_forward_delete_block_op_ids(db_before,group));
}),G__60378);
}
})();
var canonical_forward_outliner_ops = (function (){var G__60380 = canonical_forward_outliner_op_groups;
var G__60380__$1 = (((G__60380 == null))?null:cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__60380], 0)));
var G__60380__$2 = (((G__60380__$1 == null))?null:cljs.core.seq(G__60380__$1));
if((G__60380__$2 == null)){
return null;
} else {
return cljs.core.vec(G__60380__$2);
}
})();
var _ = logseq.outliner.op.construct.assert_no_stale_numeric_ids_BANG_(db_after,canonical_forward_outliner_ops,new cljs.core.Keyword(null,"forward-outliner-ops","forward-outliner-ops",1146389687));
var forward_outliner_ops = canonical_forward_outliner_ops;
var forward_op_group_sizes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.count,canonical_forward_outliner_op_groups);
var built_inverse_outliner_ops = (function (){var G__60385 = logseq.outliner.op.construct.build_strict_inverse_outliner_ops(db_before,db_after,tx_data,forward_outliner_ops,forward_op_group_sizes);
var G__60385__$1 = (((G__60385 == null))?null:cljs.core.seq(G__60385));
var G__60385__$2 = (((G__60385__$1 == null))?null:cljs.core.vec(G__60385__$1));
if((G__60385__$2 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60375_SHARP_){
return logseq.outliner.op.construct.normalize_op_entry_ids(db_before,p1__60375_SHARP_);
}),G__60385__$2);
}
})();
var ___$1 = logseq.outliner.op.construct.assert_no_stale_numeric_ids_BANG_(db_before,built_inverse_outliner_ops,new cljs.core.Keyword(null,"built-inverse-outliner-ops","built-inverse-outliner-ops",-198874765));
var explicit_inverse_outliner_ops = (function (){var G__60392 = logseq.outliner.op.construct.canonicalize_explicit_outliner_ops(db_after,tx_data,new cljs.core.Keyword("db-sync","inverse-outliner-ops","db-sync/inverse-outliner-ops",635987376).cljs$core$IFn$_invoke$arity$1(tx_meta));
var G__60392__$1 = (((G__60392 == null))?null:logseq.outliner.op.construct.patch_inverse_delete_block_ops(G__60392,forward_outliner_ops));
var G__60392__$2 = (((G__60392__$1 == null))?null:cljs.core.seq(G__60392__$1));
var G__60392__$3 = (((G__60392__$2 == null))?null:cljs.core.vec(G__60392__$2));
if((G__60392__$3 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60376_SHARP_){
return logseq.outliner.op.construct.normalize_op_entry_ids(db_after,p1__60376_SHARP_);
}),G__60392__$3);
}
})();
var ___$2 = logseq.outliner.op.construct.assert_no_stale_numeric_ids_BANG_(db_after,explicit_inverse_outliner_ops,new cljs.core.Keyword(null,"explicit-inverse-outliner-ops","explicit-inverse-outliner-ops",-511120721));
var inverse_outliner_ops = (cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-template","apply-template",169070311),new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450).cljs$core$IFn$_invoke$arity$1(tx_meta));
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword(null,"undo?","undo?",85877626).cljs$core$IFn$_invoke$arity$1(tx_meta);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.seq(new cljs.core.Keyword("db-sync","inverse-outliner-ops","db-sync/inverse-outliner-ops",635987376).cljs$core$IFn$_invoke$arity$1(tx_meta));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?explicit_inverse_outliner_ops:(cljs.core.truth_(logseq.outliner.op.construct.has_replace_empty_target_insert_op_QMARK_(forward_outliner_ops))?built_inverse_outliner_ops:((cljs.core.seq(built_inverse_outliner_ops))?built_inverse_outliner_ops:(((explicit_inverse_outliner_ops == null))?null:explicit_inverse_outliner_ops
))));
var inverse_outliner_ops__$1 = (function (){var G__60395 = inverse_outliner_ops;
var G__60395__$1 = (((G__60395 == null))?null:cljs.core.seq(G__60395));
var G__60395__$2 = (((G__60395__$1 == null))?null:cljs.core.vec(G__60395__$1));
if((G__60395__$2 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60377_SHARP_){
return logseq.outliner.op.construct.normalize_op_entry_ids(db_before,p1__60377_SHARP_);
}),G__60395__$2);
}
})();
var ___$3 = logseq.outliner.op.construct.assert_no_stale_numeric_ids_BANG_(db_before,inverse_outliner_ops__$1,new cljs.core.Keyword(null,"inverse-outliner-ops","inverse-outliner-ops",-908676038));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forward-outliner-ops","forward-outliner-ops",1146389687),forward_outliner_ops,new cljs.core.Keyword(null,"inverse-outliner-ops","inverse-outliner-ops",-908676038),inverse_outliner_ops__$1], null);
});

//# sourceMappingURL=logseq.outliner.op.construct.js.map
