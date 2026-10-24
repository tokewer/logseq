goog.provide('logseq.db.frontend.validate');
logseq.db.frontend.validate.db_schema_validator = malli.core.validator.cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.malli_schema.DB);
logseq.db.frontend.validate.db_schema_explainer = malli.core.explainer.cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.malli_schema.DB);
logseq.db.frontend.validate.closed_db_schema_validator = malli.core.validator.cljs$core$IFn$_invoke$arity$1(malli.util.closed_schema.cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.malli_schema.DB));
logseq.db.frontend.validate.closed_db_schema_explainer = malli.core.explainer.cljs$core$IFn$_invoke$arity$1(malli.util.closed_schema.cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.malli_schema.DB));
logseq.db.frontend.validate.get_schema_validator = (function logseq$db$frontend$validate$get_schema_validator(closed_schema_QMARK_){
if(cljs.core.truth_(closed_schema_QMARK_)){
return logseq.db.frontend.validate.closed_db_schema_validator;
} else {
return logseq.db.frontend.validate.db_schema_validator;
}
});
logseq.db.frontend.validate.get_schema_explainer = (function logseq$db$frontend$validate$get_schema_explainer(closed_schema_QMARK_){
if(cljs.core.truth_(closed_schema_QMARK_)){
return logseq.db.frontend.validate.closed_db_schema_explainer;
} else {
return logseq.db.frontend.validate.db_schema_explainer;
}
});
logseq.db.frontend.validate.bookkeeping_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),null,new cljs.core.Keyword("block","created-at","block/created-at",1440015),null], null), null);
/**
 * Entities with a semantic change in tx-data. An entity whose only changed
 *   attrs are bookkeeping timestamps didn't change semantically — validating it
 *   would let latent invalid state block unrelated writes (e.g. every tx that
 *   stamps :block/updated-at). Touches that leave a timestamp missing or
 *   non-integer still count.
 */
logseq.db.frontend.validate.changed_entity_ids = (function logseq$db$frontend$validate$changed_entity_ids(db_after,tx_data){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__50169){
var vec__50170 = p__50169;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50170,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50170,(1),null);
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.some((function (p1__50167_SHARP_){
return (!(cljs.core.contains_QMARK_(logseq.db.frontend.validate.bookkeeping_attrs,new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(p1__50167_SHARP_))));
}),datoms);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p1__50168_SHARP_){
return (!(cljs.core.int_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db_after,e) : datascript.core.entity.call(null,db_after,e)),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(p1__50168_SHARP_)))));
}),datoms);
}
})())){
return e;
} else {
return null;
}
}),cljs.core.group_by(new cljs.core.Keyword(null,"e","e",1381269198),tx_data));
});
/**
 * Validates the datascript tx-report for entities that have changed. Returns
 *   boolean indicating if db is valid
 */
logseq.db.frontend.validate.validate_tx_report = (function logseq$db$frontend$validate$validate_tx_report(p__50177,p__50178){
var map__50179 = p__50177;
var map__50179__$1 = cljs.core.__destructure_map(map__50179);
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50179__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50179__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50179__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var map__50180 = p__50178;
var map__50180__$1 = cljs.core.__destructure_map(map__50180);
var closed_schema_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50180__$1,new cljs.core.Keyword(null,"closed-schema?","closed-schema?",264902537));
var _STAR_skip_strict_url_validate_QMARK__STAR__orig_val__50181 = logseq.db.frontend.malli_schema._STAR_skip_strict_url_validate_QMARK__STAR_;
var _STAR_skip_strict_url_validate_QMARK__STAR__temp_val__50182 = true;
(logseq.db.frontend.malli_schema._STAR_skip_strict_url_validate_QMARK__STAR_ = _STAR_skip_strict_url_validate_QMARK__STAR__temp_val__50182);

try{var changed_ids = logseq.db.frontend.validate.changed_entity_ids(db_after,tx_data);
var tx_datoms = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (id){
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db_after,new cljs.core.Keyword(null,"eavt","eavt",-666437073),id);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([changed_ids], 0));
var ent_maps_STAR_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50190){
var vec__50191 = p__50190;
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50191,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50191,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("db","id","db/id",-1388397098),db_id);
}),logseq.db.frontend.malli_schema.datoms__GT_entity_maps.cljs$core$IFn$_invoke$arity$variadic(tx_datoms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity-fn","entity-fn",-432404580),(function (p1__50173_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db_after,p1__50173_SHARP_) : datascript.core.entity.call(null,db_after,p1__50173_SHARP_));
})], null)], 0)));
var ent_maps = logseq.db.frontend.malli_schema.update_properties_in_ents(db_after,ent_maps_STAR_);
var validator = logseq.db.frontend.validate.get_schema_validator(closed_schema_QMARK_);
var _STAR_db_for_validate_fns_STAR__orig_val__50203 = logseq.db.frontend.malli_schema._STAR_db_for_validate_fns_STAR_;
var _STAR_db_for_validate_fns_STAR__temp_val__50204 = db_after;
(logseq.db.frontend.malli_schema._STAR_db_for_validate_fns_STAR_ = _STAR_db_for_validate_fns_STAR__temp_val__50204);

try{var invalid_ent_maps = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50174_SHARP_){
var G__50205 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50174_SHARP_,new cljs.core.Keyword("db","id","db/id",-1388397098))], null);
return (validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(G__50205) : validator.call(null,G__50205));
}),ent_maps);
var schema_errors = ((cljs.core.seq(invalid_ent_maps))?(function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid datascript entities detected amongst changed entity ids:",changed_ids,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], 0));

var explainer = logseq.db.frontend.validate.get_schema_explainer(closed_schema_QMARK_);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
var m_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("block","properties","block/properties",708347145),(function (properties){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50208){
var vec__50209 = p__50208;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50209,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50209,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p),v], null);
}),properties);
}));
var data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-map","entity-map",238028540),m_SINGLEQUOTE_,new cljs.core.Keyword(null,"errors","errors",-908790718),malli.error.humanize.cljs$core$IFn$_invoke$arity$1((function (){var G__50214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("db","id","db/id",-1388397098))], null);
return (explainer.cljs$core$IFn$_invoke$arity$1 ? explainer.cljs$core$IFn$_invoke$arity$1(G__50214) : explainer.call(null,G__50214));
})())], null);
try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(data);
}catch (e50215){var _e_50258 = e50215;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
}
return data;
}),invalid_ent_maps));
})()
:null);
var errors = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,schema_errors));
if(cljs.core.seq(errors)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,errors], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);
}
}finally {(logseq.db.frontend.malli_schema._STAR_db_for_validate_fns_STAR_ = _STAR_db_for_validate_fns_STAR__orig_val__50203);
}}finally {(logseq.db.frontend.malli_schema._STAR_skip_strict_url_validate_QMARK__STAR_ = _STAR_skip_strict_url_validate_QMARK__STAR__orig_val__50181);
}});
/**
 * Groups malli errors by entities. db is used for providing more debugging info
 */
logseq.db.frontend.validate.group_errors_by_entity = (function logseq$db$frontend$validate$group_errors_by_entity(db,ent_maps,errors){
if(cljs.core.vector_QMARK_(ent_maps)){
} else {
throw (new Error((""+"Assert failed: "+"Must be a vec for grouping to work"+"\n"+"(vector? ent-maps)")));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50217){
var vec__50218 = p__50217;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50218,(0),null);
var errors_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50218,(1),null);
var ent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ent_maps,idx);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entity","entity",-450970276),(function (){var G__50221 = ent;
if(cljs.core.truth_(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(ent))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__50221,new cljs.core.Keyword("block","page","block/page",822314108),(function (id){
var page_ent = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
var G__50222 = cljs.core.select_keys(page_ent,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","created-at","block/created-at",1440015)], null));
if(cljs.core.truth_(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page_ent))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50222,new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page_ent)));
} else {
return G__50222;
}
}));
} else {
return G__50221;
}
})(),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),logseq.db.frontend.malli_schema.entity_dispatch_key(db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ent,new cljs.core.Keyword("db","id","db/id",-1388397098))),new cljs.core.Keyword(null,"errors","errors",-908790718),errors_SINGLEQUOTE_], null);
}),cljs.core.group_by((function (p1__50216_SHARP_){
return cljs.core.first(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(p1__50216_SHARP_));
}),errors));
});
/**
 * Validates all the entities of the given db using :eavt datoms. Returns a map
 *   with info about db being validated. If there are errors, they are placed on
 *   :errors and grouped by entity
 */
logseq.db.frontend.validate.validate_db = (function logseq$db$frontend$validate$validate_db(db){
var datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073));
var ent_maps_STAR_ = logseq.db.frontend.malli_schema.datoms__GT_entities(datoms);
var ent_maps = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50223_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__50223_SHARP_,new cljs.core.Keyword("block.temp","load-status","block.temp/load-status",-1066723049),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725)], 0));
}),logseq.db.frontend.malli_schema.update_properties_in_ents(db,ent_maps_STAR_));
var errors = (function (){var _STAR_db_for_validate_fns_STAR__orig_val__50225 = logseq.db.frontend.malli_schema._STAR_db_for_validate_fns_STAR_;
var _STAR_db_for_validate_fns_STAR__temp_val__50226 = db;
(logseq.db.frontend.malli_schema._STAR_db_for_validate_fns_STAR_ = _STAR_db_for_validate_fns_STAR__temp_val__50226);

try{return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1((function (){var G__50227 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword("db","id","db/id",-1388397098));
}),ent_maps);
return (logseq.db.frontend.validate.closed_db_schema_explainer.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.validate.closed_db_schema_explainer.cljs$core$IFn$_invoke$arity$1(G__50227) : logseq.db.frontend.validate.closed_db_schema_explainer.call(null,G__50227));
})());
}finally {(logseq.db.frontend.malli_schema._STAR_db_for_validate_fns_STAR_ = _STAR_db_for_validate_fns_STAR__orig_val__50225);
}})();
var G__50228 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datom-count","datom-count",515794351),cljs.core.count(datoms),new cljs.core.Keyword(null,"entities","entities",1940967403),ent_maps_STAR_], null);
if((!((errors == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50228,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50224_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__50224_SHARP_,new cljs.core.Keyword(null,"errors","errors",-908790718),(function (errs){
return malli.error.humanize.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
}));
}),logseq.db.frontend.validate.group_errors_by_entity(db,ent_maps,errors)));
} else {
return G__50228;
}
});
/**
 * Calculates graph-wide counts given a graph's db and its entities from :eavt datoms
 */
logseq.db.frontend.validate.graph_counts = (function logseq$db$frontend$validate$graph_counts(db,entities){
var classes_count = cljs.core.count(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083)));
var properties_count = cljs.core.count(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.count(entities),new cljs.core.Keyword(null,"pages","pages",-285406513),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),entities)),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","page","block/page",822314108),entities)),new cljs.core.Keyword(null,"classes","classes",2037804510),classes_count,new cljs.core.Keyword(null,"properties","properties",685819552),properties_count,new cljs.core.Keyword(null,"objects","objects",2099713734),((cljs.core.count(datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","tags","block/tags",1814948340))) - classes_count) - properties_count),new cljs.core.Keyword(null,"property-pairs","property-pairs",1375546878),cljs.core.count(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__50229_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.properties(p1__50229_SHARP_),new cljs.core.Keyword("block","tags","block/tags",1814948340));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entities], 0)))], null);
});
logseq.db.frontend.validate.entity_datoms = (function logseq$db$frontend$validate$entity_datoms(db,entity_ids){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__50230_SHARP_){
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),p1__50230_SHARP_);
})),entity_ids);
});
/**
 * Validates a local (non-RTC) DB like validate-db! but with default behavior,
 *   options and logging specific to a local DB. Used by CLI, importer and tests.
 * When :entity-ids is provided, only those entities are validated.
 */
logseq.db.frontend.validate.validate_local_db_BANG_ = (function logseq$db$frontend$validate$validate_local_db_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___50265 = arguments.length;
var i__5877__auto___50266 = (0);
while(true){
if((i__5877__auto___50266 < len__5876__auto___50265)){
args__5882__auto__.push((arguments[i__5877__auto___50266]));

var G__50268 = (i__5877__auto___50266 + (1));
i__5877__auto___50266 = G__50268;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.db.frontend.validate.validate_local_db_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(logseq.db.frontend.validate.validate_local_db_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (db,p__50237){
var map__50238 = p__50237;
var map__50238__$1 = cljs.core.__destructure_map(map__50238);
var db_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50238__$1,new cljs.core.Keyword(null,"db-name","db-name",1157928745));
var open_schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50238__$1,new cljs.core.Keyword(null,"open-schema","open-schema",516029113));
var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50238__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060));
var entity_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50238__$1,new cljs.core.Keyword(null,"entity-ids","entity-ids",-963844196));
var datoms = (cljs.core.truth_(entity_ids)?logseq.db.frontend.validate.entity_datoms(db,entity_ids):datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073)));
var ent_maps_STAR_ = logseq.db.frontend.malli_schema.datoms__GT_entities(datoms);
var _ = (cljs.core.truth_(verbose)?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Read graph",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(db_name)+" with counts: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logseq.db.frontend.validate.graph_counts(db,ent_maps_STAR_),new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.count(datoms))], 0))))], 0)):null);
var ent_maps = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50231_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__50231_SHARP_,new cljs.core.Keyword("block.temp","load-status","block.temp/load-status",-1066723049),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725)], 0));
}),logseq.db.frontend.malli_schema.update_properties_in_ents(db,ent_maps_STAR_));
var explainer = logseq.db.frontend.validate.get_schema_explainer(cljs.core.not(open_schema));
var temp__5825__auto__ = (function (){var _STAR_db_for_validate_fns_STAR__orig_val__50241 = logseq.db.frontend.malli_schema._STAR_db_for_validate_fns_STAR_;
var _STAR_closed_values_validate_QMARK__STAR__orig_val__50242 = logseq.db.frontend.malli_schema._STAR_closed_values_validate_QMARK__STAR_;
var _STAR_db_for_validate_fns_STAR__temp_val__50243 = db;
var _STAR_closed_values_validate_QMARK__STAR__temp_val__50244 = true;
(logseq.db.frontend.malli_schema._STAR_db_for_validate_fns_STAR_ = _STAR_db_for_validate_fns_STAR__temp_val__50243);

(logseq.db.frontend.malli_schema._STAR_closed_values_validate_QMARK__STAR_ = _STAR_closed_values_validate_QMARK__STAR__temp_val__50244);

try{return cljs.core.not_empty((function (){var G__50246 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword("db","id","db/id",-1388397098));
}),ent_maps);
return (explainer.cljs$core$IFn$_invoke$arity$1 ? explainer.cljs$core$IFn$_invoke$arity$1(G__50246) : explainer.call(null,G__50246));
})());
}finally {(logseq.db.frontend.malli_schema._STAR_closed_values_validate_QMARK__STAR_ = _STAR_closed_values_validate_QMARK__STAR__orig_val__50242);

(logseq.db.frontend.malli_schema._STAR_db_for_validate_fns_STAR_ = _STAR_db_for_validate_fns_STAR__orig_val__50241);
}})();
if(cljs.core.truth_(temp__5825__auto__)){
var explanation = temp__5825__auto__;
var ent_errors = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50232_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__50232_SHARP_,new cljs.core.Keyword(null,"errors","errors",-908790718),(function (errs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.into,cljs.core.vals(malli.error.humanize.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null))));
}));
}),logseq.db.frontend.validate.group_errors_by_entity(db,ent_maps,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(explanation)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),ent_errors], null);
} else {
return null;
}
}));

(logseq.db.frontend.validate.validate_local_db_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.db.frontend.validate.validate_local_db_BANG_.cljs$lang$applyTo = (function (seq50233){
var G__50234 = cljs.core.first(seq50233);
var seq50233__$1 = cljs.core.next(seq50233);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50234,seq50233__$1);
}));


//# sourceMappingURL=logseq.db.frontend.validate.js.map
