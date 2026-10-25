goog.provide('logseq.db.sqlite.build');
logseq.db.sqlite.build.block_property_value_QMARK_ = (function logseq$db$sqlite$build$block_property_value_QMARK_(_PERCENT_){
var and__5140__auto__ = cljs.core.map_QMARK_(_PERCENT_);
if(and__5140__auto__){
return new cljs.core.Keyword("build","property-value","build/property-value",1425188701).cljs$core$IFn$_invoke$arity$1(_PERCENT_);
} else {
return and__5140__auto__;
}
});
logseq.db.sqlite.build.page_prop_value_QMARK_ = (function logseq$db$sqlite$build$page_prop_value_QMARK_(prop_value){
return ((cljs.core.vector_QMARK_(prop_value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("build","page","build/page",822051483),cljs.core.first(prop_value))));
});
/**
 * Translates a property value for create-graph edn. A value wrapped in vector
 *   may indicate a reference type e.g. [:build/page {:block/title "some page"}]
 */
logseq.db.sqlite.build.translate_property_value = (function logseq$db$sqlite$build$translate_property_value(val,page_uuids){
if(cljs.core.vector_QMARK_(val)){
var G__58344 = cljs.core.first(val);
var G__58344__$1 = (((G__58344 instanceof cljs.core.Keyword))?G__58344.fqn:null);
switch (G__58344__$1) {
case "build/page":
var page_name = (function (){var temp__5823__auto__ = new cljs.core.Keyword("build","journal","build/journal",1781180096).cljs$core$IFn$_invoke$arity$1(cljs.core.second(val));
if(cljs.core.truth_(temp__5823__auto__)){
var journal_day = temp__5823__auto__;
return logseq.common.util.date_time.int__GT_journal_title(journal_day,"MMM do, yyyy");
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(cljs.core.second(val));
}
})();
var temp__5823__auto__ = (page_uuids.cljs$core$IFn$_invoke$arity$1 ? page_uuids.cljs$core$IFn$_invoke$arity$1(page_name) : page_uuids.call(null,page_name));
if(cljs.core.truth_(temp__5823__auto__)){
var page_uuid = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),page_uuid], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"No uuid for page '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(val))+"'"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second(val)], null));
}

break;
case "block/uuid":
return val;

break;
default:
return val;

}
} else {
return val;
}
});
/**
 * Only adds timestamps to block if they don't exist
 */
logseq.db.sqlite.build.block_with_timestamps = (function logseq$db$sqlite$build$block_with_timestamps(block){
var updated_at = logseq.common.util.time_ms();
var block__$1 = (function (){var G__58346 = block;
var G__58346__$1 = (((new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(block) == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58346,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),updated_at):G__58346);
if((new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(block) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58346__$1,new cljs.core.Keyword("block","created-at","block/created-at",1440015),updated_at);
} else {
return G__58346__$1;
}
})();
return block__$1;
});
logseq.db.sqlite.build.get_ident = (function logseq$db$sqlite$build$get_ident(all_idents,kw){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.qualified_keyword_QMARK_(kw);
if(and__5140__auto__){
var or__5142__auto__ = logseq.db.frontend.property.property_QMARK_(kw);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.frontend.class$.user_class_namespace_QMARK_(cljs.core.namespace(kw));
}
} else {
return and__5140__auto__;
}
})())){
return kw;
} else {
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_idents,kw);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"No ident found for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kw], 0)))),cljs.core.PersistentArrayMap.EMPTY);
}
}
});
logseq.db.sqlite.build.__GT_block_properties = (function logseq$db$sqlite$build$__GT_block_properties(properties,page_uuids,all_idents,p__58349){
var map__58351 = p__58349;
var map__58351__$1 = cljs.core.__destructure_map(map__58351);
var translate_property_values_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58351__$1,new cljs.core.Keyword(null,"translate-property-values?","translate-property-values?",-1950851544));
var translate_property_values = (cljs.core.truth_(translate_property_values_QMARK_)?(function logseq$db$sqlite$build$__GT_block_properties_$_translate_property_values(val){
if(cljs.core.set_QMARK_(val)){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58348_SHARP_){
return logseq.db.sqlite.build.translate_property_value(p1__58348_SHARP_,page_uuids);
}),val));
} else {
return logseq.db.sqlite.build.translate_property_value(val,page_uuids);
}
}):cljs.core.identity);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58358){
var vec__58359 = p__58358;
var prop_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58359,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58359,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.db.sqlite.build.get_ident(all_idents,prop_name),(translate_property_values.cljs$core$IFn$_invoke$arity$1 ? translate_property_values.cljs$core$IFn$_invoke$arity$1(val) : translate_property_values.call(null,val))], null);
}),properties));
});
/**
 * Creates maps of unique page names, block contents and property names to their uuids. Used to
 * provide user references for translate-property-value
 */
logseq.db.sqlite.build.create_page_uuids = (function logseq$db$sqlite$build$create_page_uuids(pages_and_blocks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),pages_and_blocks)));
});
logseq.db.sqlite.build.current_db_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
/**
 * Provides the next temp :db/id to use in a create-graph transact!
 */
logseq.db.sqlite.build.new_db_id = (function logseq$db$sqlite$build$new_db_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(logseq.db.sqlite.build.current_db_id,cljs.core.dec);
});
/**
 * Returns a property map if the given property pair should have a property value entity constructured
 * or nil if it should not. Property maps must at least contain the :db/ident and :logseq.property/type keys
 */
logseq.db.sqlite.build.build_property_map_for_pvalue_tx = (function logseq$db$sqlite$build$build_property_map_for_pvalue_tx(k,v,new_block,properties_config,all_idents){
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.built_in_properties,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"type","type",1174270348)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var built_in_type = temp__5823__auto__;
if(cljs.core.truth_((function (){var and__5140__auto__ = (logseq.db.frontend.property.type.value_ref_property_types.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.property.type.value_ref_property_types.cljs$core$IFn$_invoke$arity$1(built_in_type) : logseq.db.frontend.property.type.value_ref_property_types.call(null,built_in_type));
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.built_in_properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"closed-values","closed-values",364658811)], null)));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),k,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),built_in_type], null);
} else {
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = new cljs.core.Keyword("build","properties-ref-types","build/properties-ref-types",-1991321370).cljs$core$IFn$_invoke$arity$1(new_block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"number","number",1570378438)], null);
}
})(),built_in_type);
if(cljs.core.truth_(temp__5825__auto__)){
var built_in_type_SINGLEQUOTE_ = temp__5825__auto__;
if(((cljs.core.set_QMARK_(v))?(!(cljs.core.vector_QMARK_(cljs.core.first(v)))):(!(cljs.core.vector_QMARK_(v))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),k,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),built_in_type_SINGLEQUOTE_], null);
} else {
return null;
}
} else {
return null;
}
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = (function (){var G__58363 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties_config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404)], null));
return (logseq.db.frontend.property.type.value_ref_property_types.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.property.type.value_ref_property_types.cljs$core$IFn$_invoke$arity$1(G__58363) : logseq.db.frontend.property.type.value_ref_property_types.call(null,G__58363));
})();
if(cljs.core.truth_(and__5140__auto__)){
if(cljs.core.set_QMARK_(v)){
return (!(cljs.core.vector_QMARK_(cljs.core.first(v))));
} else {
return (!(cljs.core.vector_QMARK_(v)));
}
} else {
return and__5140__auto__;
}
})())){
var prop_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties_config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404)], null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","ident","db/ident",-737096),logseq.db.sqlite.build.get_ident(all_idents,k),new cljs.core.Keyword(null,"original-property-id","original-property-id",-123524497),k,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),prop_type], null);
} else {
return null;
}
}
});
logseq.db.sqlite.build.build_pvalue = (function logseq$db$sqlite$build$build_pvalue(properties_config,all_idents,closed_value_id,v){
var pvalue_uuid = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.random_uuid();
}
})();
var nested_pvalue_tx_m = ((cljs.core.seq(new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(v)))?(function (){var G__58370 = (function (){var G__58371 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),pvalue_uuid], null);
var G__58372 = new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(v);
var G__58373 = properties_config;
var G__58374 = all_idents;
return (logseq.db.sqlite.build.__GT_property_value_tx_m.cljs$core$IFn$_invoke$arity$4 ? logseq.db.sqlite.build.__GT_property_value_tx_m.cljs$core$IFn$_invoke$arity$4(G__58371,G__58372,G__58373,G__58374) : logseq.db.sqlite.build.__GT_property_value_tx_m.call(null,G__58371,G__58372,G__58373,G__58374));
})();
if((G__58370 == null)){
return null;
} else {
return cljs.core.update_vals(G__58370,(function (prop_val){
if(cljs.core.map_QMARK_(prop_val)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prop_val,new cljs.core.Keyword("db","id","db/id",-1388397098),logseq.db.sqlite.build.new_db_id());
} else {
if(cljs.core.set_QMARK_(prop_val)){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58368_SHARP_){
if(cljs.core.map_QMARK_(p1__58368_SHARP_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58368_SHARP_,new cljs.core.Keyword("db","id","db/id",-1388397098),logseq.db.sqlite.build.new_db_id());
} else {
return p1__58368_SHARP_;
}
}),prop_val));
} else {
return prop_val;

}
}
}));
}
})():null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),(cljs.core.truth_(new cljs.core.Keyword("build","property-value","build/property-value",1425188701).cljs$core$IFn$_invoke$arity$1(v))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(v),nested_pvalue_tx_m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58369_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("db","ident","db/ident",-737096)],[logseq.db.sqlite.build.get_ident(all_idents,p1__58369_SHARP_)]);
}),new cljs.core.Keyword("build","tags","build/tags",1814686611).cljs$core$IFn$_invoke$arity$1(v))], null),cljs.core.select_keys(v,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword("build","children","build/children",-1040452432)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),pvalue_uuid], null)], 0)):null),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(closed_value_id)?closed_value_id:(cljs.core.truth_(new cljs.core.Keyword("build","property-value","build/property-value",1425188701).cljs$core$IFn$_invoke$arity$1(v))?(function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(v);
}
})():v
))], null);
});
/**
 * Given a new block and its properties, creates a map of properties which have values of property value tx.
 * This map is used for both creating the new property values and then adding them to a block.
 * This fn is similar to sqlite-create-graph/->property-value-tx-m and we may want to reuse it from here later.
 */
logseq.db.sqlite.build.__GT_property_value_tx_m = (function logseq$db$sqlite$build$__GT_property_value_tx_m(new_block,properties,properties_config,all_idents){
return (function (x){
return logseq.db.frontend.property.build.build_property_values_tx_m.cljs$core$IFn$_invoke$arity$variadic(new_block,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pvalue-map?","pvalue-map?",768650232),true], null)], 0));
})(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__58376){
var vec__58377 = p__58376;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58377,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58377,(1),null);
var temp__5825__auto__ = logseq.db.sqlite.build.build_property_map_for_pvalue_tx(k,v,new_block,properties_config,all_idents);
if(cljs.core.truth_(temp__5825__auto__)){
var property_map = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property_map,(function (){var property = (((k instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties_config,k):null);
var closed_value_id = (cljs.core.truth_(property)?cljs.core.some((function (item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),v)){
return new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(item);
} else {
return null;
}
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(property,new cljs.core.Keyword("build","closed-values","build/closed-values",190285321))):null);
var build_pvalue_SINGLEQUOTE_ = (function (p1__58375_SHARP_){
return logseq.db.sqlite.build.build_pvalue(properties_config,all_idents,closed_value_id,p1__58375_SHARP_);
});
if(cljs.core.set_QMARK_(v)){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(build_pvalue_SINGLEQUOTE_,v));
} else {
return build_pvalue_SINGLEQUOTE_(v);
}
})()], null);
} else {
return null;
}
}),properties));
});
/**
 * Extracts basic refs from :block/title like `[[foo]]` or `[[UUID]]`. Can't
 *   use db-content/get-matched-ids because of named ref support.  Adding more ref
 *   support would require parsing each block with mldoc and extracting with
 *   text/extract-refs-from-mldoc-ast
 */
logseq.db.sqlite.build.extract_basic_content_refs = (function logseq$db$sqlite$build$extract_basic_content_refs(s){
if(clojure.string.starts_with_QMARK_(s,"{{")){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.re_seq(logseq.common.util.page_ref.page_ref_re,s));
}
});
/**
 * Expands any blocks with :build/children to return a flattened vec with
 *   children having correct :block/parent. Also ensures all blocks have a :block/uuid
 */
logseq.db.sqlite.build.expand_build_children = (function logseq$db$sqlite$build$expand_build_children(var_args){
var G__58381 = arguments.length;
switch (G__58381) {
case 1:
return logseq.db.sqlite.build.expand_build_children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.db.sqlite.build.expand_build_children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.db.sqlite.build.expand_build_children.cljs$core$IFn$_invoke$arity$1 = (function (data){
return logseq.db.sqlite.build.expand_build_children.cljs$core$IFn$_invoke$arity$2(data,null);
}));

(logseq.db.sqlite.build.expand_build_children.cljs$core$IFn$_invoke$arity$2 = (function (data,parent_id){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (block){
var block_SINGLEQUOTE_ = (cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))?cljs.core.with_meta(block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.db.sqlite.build","existing-block?","logseq.db.sqlite.build/existing-block?",-1579774117),true], null)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.random_uuid()));
var block_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var G__58387 = block_SINGLEQUOTE_;
var G__58387__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__58387,new cljs.core.Keyword("build","children","build/children",-1040452432))
;
if(cljs.core.truth_(parent_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58387__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),parent_id], null)], null));
} else {
return G__58387__$1;
}
})();
var children = new cljs.core.Keyword("build","children","build/children",-1040452432).cljs$core$IFn$_invoke$arity$1(block);
var child_maps = (cljs.core.truth_(children)?logseq.db.sqlite.build.expand_build_children.cljs$core$IFn$_invoke$arity$2(children,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE__SINGLEQUOTE_)):null);
return cljs.core.cons(block_SINGLEQUOTE__SINGLEQUOTE_,child_maps);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)));
}));

(logseq.db.sqlite.build.expand_build_children.cljs$lang$maxFixedArity = 2);

/**
 * Builds tx maps from property value tx maps and handles nested property value children.
 */
logseq.db.sqlite.build.pvalue_tx__GT_txs = (function logseq$db$sqlite$build$pvalue_tx__GT_txs(pvalue_tx_m,page_uuids,all_idents,options){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (pvalue){
if(cljs.core.map_QMARK_(pvalue)){
var children_tx = (function (){var temp__5825__auto__ = cljs.core.seq(new cljs.core.Keyword("build","children","build/children",-1040452432).cljs$core$IFn$_invoke$arity$1(pvalue));
if(temp__5825__auto__){
var children = temp__5825__auto__;
var children_SINGLEQUOTE_ = logseq.db.sqlite.build.expand_build_children.cljs$core$IFn$_invoke$arity$2(children,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(pvalue));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58388_SHARP_){
var G__58390 = p1__58388_SHARP_;
var G__58391 = page_uuids;
var G__58392 = all_idents;
var G__58393 = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(pvalue);
var G__58394 = options;
return (logseq.db.sqlite.build.__GT_block_tx.cljs$core$IFn$_invoke$arity$5 ? logseq.db.sqlite.build.__GT_block_tx.cljs$core$IFn$_invoke$arity$5(G__58390,G__58391,G__58392,G__58393,G__58394) : logseq.db.sqlite.build.__GT_block_tx.call(null,G__58390,G__58391,G__58392,G__58393,G__58394));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children_SINGLEQUOTE_], 0));
} else {
return null;
}
})();
var G__58395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(pvalue,new cljs.core.Keyword("build","children","build/children",-1040452432))], null);
if(cljs.core.seq(children_tx)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__58395,children_tx);
} else {
return G__58395;
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pvalue], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58389_SHARP_){
if(cljs.core.set_QMARK_(p1__58389_SHARP_)){
return p1__58389_SHARP_;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58389_SHARP_], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(pvalue_tx_m)], 0))], 0));
});
logseq.db.sqlite.build.__GT_block_tx = (function logseq$db$sqlite$build$__GT_block_tx(p__58402,page_uuids,all_idents,page_id,p__58403){
var map__58404 = p__58402;
var map__58404__$1 = cljs.core.__destructure_map(map__58404);
var m = map__58404__$1;
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58404__$1,new cljs.core.Keyword("build","properties","build/properties",708607786));
var map__58405 = p__58403;
var map__58405__$1 = cljs.core.__destructure_map(map__58405);
var options = map__58405__$1;
var properties_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58405__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var build_existing_tx_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58405__$1,new cljs.core.Keyword(null,"build-existing-tx?","build-existing-tx?",-2032344658));
var extract_content_refs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58405__$1,new cljs.core.Keyword(null,"extract-content-refs?","extract-content-refs?",-1224729418));
var build_existing_tx_QMARK__SINGLEQUOTE_ = (function (){var and__5140__auto__ = build_existing_tx_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = new cljs.core.Keyword("logseq.db.sqlite.build","existing-block?","logseq.db.sqlite.build/existing-block?",-1579774117).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m));
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954).cljs$core$IFn$_invoke$arity$1(m));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
var block = (cljs.core.truth_(build_existing_tx_QMARK__SINGLEQUOTE_)?cljs.core.select_keys(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)):new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),logseq.db.sqlite.build.new_db_id(),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),page_id], null),new cljs.core.Keyword("block","order","block/order",-1429282437),logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword("block","parent","block/parent",-918309064),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),page_id], null);
}
})()], null));
var pvalue_tx_m = logseq.db.sqlite.build.__GT_property_value_tx_m(block,properties,properties_config,all_idents);
var ref_strings = (cljs.core.truth_(extract_content_refs_QMARK_)?logseq.db.sqlite.build.extract_basic_content_refs(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m)):null);
var G__58406 = cljs.core.PersistentVector.EMPTY;
var G__58406__$1 = ((cljs.core.seq(pvalue_tx_m))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__58406,logseq.db.sqlite.build.pvalue_tx__GT_txs(pvalue_tx_m,page_uuids,all_idents,options)):G__58406);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58406__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(build_existing_tx_QMARK__SINGLEQUOTE_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),logseq.common.util.time_ms()], null):logseq.db.sqlite.build.block_with_timestamps(block)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword("build","properties","build/properties",708607786),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("build","tags","build/tags",1814686611),new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954)], 0)),((cljs.core.seq(properties))?logseq.db.sqlite.build.__GT_block_properties(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties,logseq.db.frontend.property.build.build_properties_with_ref_values(pvalue_tx_m)], 0)),page_uuids,all_idents,options):null),(function (){var temp__5825__auto__ = new cljs.core.Keyword("build","tags","build/tags",1814686611).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var tags = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58400_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("db","ident","db/ident",-737096)],[logseq.db.sqlite.build.get_ident(all_idents,p1__58400_SHARP_)]);
}),tags)], null);
} else {
return null;
}
})(),((cljs.core.seq(ref_strings))?(function (){var block_refs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58401_SHARP_){
var temp__5823__auto__ = cljs.core.parse_uuid(p1__58401_SHARP_);
if(cljs.core.truth_(temp__5823__auto__)){
var uuid_SINGLEQUOTE_ = temp__5823__auto__;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)],[uuid_SINGLEQUOTE_]);
} else {
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684)],[(function (){var or__5142__auto__ = (page_uuids.cljs$core$IFn$_invoke$arity$1 ? page_uuids.cljs$core$IFn$_invoke$arity$1(p1__58401_SHARP_) : page_uuids.call(null,p1__58401_SHARP_));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"No uuid for page ref name"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__58401_SHARP_], 0)))),cljs.core.PersistentArrayMap.EMPTY);
}
})(),p1__58401_SHARP_]);
}
}),ref_strings);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","title","block/title",710445684),logseq.db.frontend.content.title_ref__GT_id_ref.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m),block_refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"replace-tag?","replace-tag?",-1653793949),false], null)], 0)),new cljs.core.Keyword("block","refs","block/refs",-1214495349),block_refs], null);
})():null)], 0)));

});
logseq.db.sqlite.build.build_property_tx = (function logseq$db$sqlite$build$build_property_tx(properties,page_uuids,all_idents,property_db_ids,class_property_orders,options,p__58413){
var vec__58414 = p__58413;
var prop_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58414,(0),null);
var map__58417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58414,(1),null);
var map__58417__$1 = cljs.core.__destructure_map(map__58417);
var prop_m = map__58417__$1;
var property_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58417__$1,new cljs.core.Keyword("build","property-classes","build/property-classes",1099271032));
var class_property_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class_property_orders,prop_name);
var vec__58418 = (function (){var temp__5823__auto__ = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58411_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.random_uuid()], null),p1__58411_SHARP_], 0));
}),new cljs.core.Keyword("build","closed-values","build/closed-values",190285321).cljs$core$IFn$_invoke$arity$1(prop_m)));
if(temp__5823__auto__){
var closed_values = temp__5823__auto__;
var db_ident = logseq.db.sqlite.build.get_ident(all_idents,prop_name);
return logseq.db.frontend.property.build.build_closed_values(db_ident,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(prop_m),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(prop_m,new cljs.core.Keyword("db","ident","db/ident",-737096),db_ident,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closed-values","closed-values",364658811),closed_values], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-attributes","property-attributes",-1673390672),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(function (){var or__5142__auto__ = (property_db_ids.cljs$core$IFn$_invoke$arity$1 ? property_db_ids.cljs$core$IFn$_invoke$arity$1(prop_name) : property_db_ids.call(null,prop_name));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :db/id for property",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property","property",-1114278232),prop_name], null));
}
})()], null),(cljs.core.truth_(class_property_order)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","order","block/order",-1429282437),class_property_order], null):null),cljs.core.select_keys(prop_m,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","properties-ref-types","build/properties-ref-types",-1991321370),new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),new cljs.core.Keyword("block","alias","block/alias",-2112644699)], null))], 0))], null));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58427 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.sqlite.util.build_new_property.cljs$core$IFn$_invoke$arity$3(logseq.db.sqlite.build.get_ident(all_idents,prop_name),logseq.db.frontend.property.get_property_schema(prop_m),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(prop_m),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(prop_m)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),(function (){var or__5142__auto__ = (property_db_ids.cljs$core$IFn$_invoke$arity$1 ? property_db_ids.cljs$core$IFn$_invoke$arity$1(prop_name) : property_db_ids.call(null,prop_name));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :db/id for property",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property","property",-1114278232),prop_name], null));
}
})()], null),cljs.core.select_keys(prop_m,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","properties-ref-types","build/properties-ref-types",-1991321370),new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),new cljs.core.Keyword("block","alias","block/alias",-2112644699)], null))], 0));
if(cljs.core.truth_(class_property_order)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58427,new cljs.core.Keyword("block","order","block/order",-1429282437),class_property_order);
} else {
return G__58427;
}
})()], null);
}
})();
var seq__58419 = cljs.core.seq(vec__58418);
var first__58420 = cljs.core.first(seq__58419);
var seq__58419__$1 = cljs.core.next(seq__58419);
var new_block = first__58420;
var additional_tx = seq__58419__$1;
var pvalue_tx_m = logseq.db.sqlite.build.__GT_property_value_tx_m(new_block,new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(prop_m),properties,all_idents);
var G__58429 = cljs.core.PersistentVector.EMPTY;
var G__58429__$1 = ((cljs.core.seq(pvalue_tx_m))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__58429,logseq.db.sqlite.build.pvalue_tx__GT_txs(pvalue_tx_m,page_uuids,all_idents,options)):G__58429);
var G__58429__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58429__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_block,new cljs.core.Keyword("build","properties-ref-types","build/properties-ref-types",-1991321370)),(function (){var temp__5825__auto__ = cljs.core.not_empty(new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(prop_m));
if(cljs.core.truth_(temp__5825__auto__)){
var props = temp__5825__auto__;
return logseq.db.sqlite.build.__GT_block_properties(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,logseq.db.frontend.property.build.build_properties_with_ref_values(pvalue_tx_m)], 0)),page_uuids,all_idents,options);
} else {
return null;
}
})(),((cljs.core.seq(property_classes))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58412_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("db","ident","db/ident",-737096)],[logseq.db.sqlite.build.get_ident(all_idents,p1__58412_SHARP_)]);
}),property_classes)], null):null)], 0)))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__58429__$2,additional_tx);

});
/**
 * Returns a deterministic property order inferred from :build/class-properties, using topological sorting
 */
logseq.db.sqlite.build.class_properties__GT_ordered_properties = (function logseq$db$sqlite$build$class_properties__GT_ordered_properties(classes){
var class_properties = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("build","class-properties","build/class-properties",1278125544),cljs.core.vals(classes)));
var all_properties = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class_properties], 0))));
var property_index = cljs.core.zipmap(all_properties,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var sort_by_input_order = (function (p1__58430_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(property_index,p1__58430_SHARP_);
});
var edges = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58433){
var vec__58434 = p__58433;
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58434,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58434,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left,right);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58431_SHARP_){
return cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),p1__58431_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class_properties], 0))));
var outgoing = cljs.core.group_by(cljs.core.first,edges);
var incoming_counts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__58443){
var vec__58444 = p__58443;
var _left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58444,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58444,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,right,cljs.core.inc);
}),cljs.core.zipmap(all_properties,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0))),edges);
var ordered_properties = cljs.core.PersistentVector.EMPTY;
var queue = cljs.core.vec(sort_by_input_order(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (ordered_properties,class_properties,all_properties,property_index,sort_by_input_order,edges,outgoing,incoming_counts){
return (function (p1__58432_SHARP_){
return ((incoming_counts.cljs$core$IFn$_invoke$arity$1 ? incoming_counts.cljs$core$IFn$_invoke$arity$1(p1__58432_SHARP_) : incoming_counts.call(null,p1__58432_SHARP_)) === (0));
});})(ordered_properties,class_properties,all_properties,property_index,sort_by_input_order,edges,outgoing,incoming_counts))
,all_properties)));
var remaining_incoming = incoming_counts;
while(true){
var temp__5823__auto__ = cljs.core.first(queue);
if(cljs.core.truth_(temp__5823__auto__)){
var property = temp__5823__auto__;
var vec__58458 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ordered_properties,queue,remaining_incoming,property,temp__5823__auto__,class_properties,all_properties,property_index,sort_by_input_order,edges,outgoing,incoming_counts){
return (function (p__58461,p__58462){
var vec__58463 = p__58461;
var incoming = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58463,(0),null);
var unlocked_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58463,(1),null);
var vec__58466 = p__58462;
var _left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58466,(0),null);
var next_property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58466,(1),null);
var next_count = ((incoming.cljs$core$IFn$_invoke$arity$1 ? incoming.cljs$core$IFn$_invoke$arity$1(next_property) : incoming.call(null,next_property)) - (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(incoming,next_property,next_count),(((next_count === (0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(unlocked_STAR_,next_property):unlocked_STAR_)], null);
});})(ordered_properties,queue,remaining_incoming,property,temp__5823__auto__,class_properties,all_properties,property_index,sort_by_input_order,edges,outgoing,incoming_counts))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remaining_incoming,cljs.core.PersistentVector.EMPTY], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(outgoing,property));
var next_incoming = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58458,(0),null);
var unlocked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58458,(1),null);
var next_queue = cljs.core.vec(sort_by_input_order(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(queue),unlocked)));
var G__58748 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ordered_properties,property);
var G__58749 = next_queue;
var G__58750 = next_incoming;
ordered_properties = G__58748;
queue = G__58749;
remaining_incoming = G__58750;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ordered_properties),cljs.core.count(all_properties))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Cycle detected in :build/class-properties constraints. Ordered "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ordered_properties))+" of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(all_properties))+" properties."))+"\n"+"(= (count ordered-properties) (count all-properties))")));
}

return ordered_properties;
}
break;
}
});
logseq.db.sqlite.build.build_properties_tx = (function logseq$db$sqlite$build$build_properties_tx(properties,classes,page_uuids,all_idents,p__58472){
var map__58473 = p__58472;
var map__58473__$1 = cljs.core.__destructure_map(map__58473);
var options = map__58473__$1;
var build_existing_tx_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword(null,"build-existing-tx?","build-existing-tx?",-2032344658));
var properties_SINGLEQUOTE_ = (cljs.core.truth_(build_existing_tx_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58474){
var vec__58475 = p__58474;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58475,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58475,(1),null);
var and__5140__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954).cljs$core$IFn$_invoke$arity$1(v));
} else {
return and__5140__auto__;
}
}),properties)):properties);
var class_property_orders = (function (p1__58470_SHARP_){
return cljs.core.zipmap(p1__58470_SHARP_,logseq.db.common.order.gen_n_keys(cljs.core.count(p1__58470_SHARP_),null,null));
})(logseq.db.sqlite.build.class_properties__GT_ordered_properties(classes));
var property_db_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58471_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__58471_SHARP_,logseq.db.sqlite.build.new_db_id()],null));
}),cljs.core.keys(properties_SINGLEQUOTE_)));
var new_properties_tx = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(logseq.db.sqlite.build.build_property_tx,properties,page_uuids,all_idents,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([property_db_ids,class_property_orders,options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties_SINGLEQUOTE_], 0)));
var existing_property_orders_tx = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__58478){
var vec__58479 = p__58478;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58479,(0),null);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58479,(1),null);
if(cljs.core.contains_QMARK_(properties_SINGLEQUOTE_,ident)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),ident,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
}
}),class_property_orders);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new_properties_tx,existing_property_orders_tx);
});
logseq.db.sqlite.build.effective_class_extends = (function logseq$db$sqlite$build$effective_class_extends(p__58482){
var map__58483 = p__58482;
var map__58483__$1 = cljs.core.__destructure_map(map__58483);
var class_parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58483__$1,new cljs.core.Keyword("build","class-parent","build/class-parent",1092120922));
var class_extends = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58483__$1,new cljs.core.Keyword("build","class-extends","build/class-extends",888177458));
if(cljs.core.truth_(class_parent)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_parent], null);
} else {
return class_extends;
}
});
logseq.db.sqlite.build.build_class_extends = (function logseq$db$sqlite$build$build_class_extends(class_config,class_db_ids){
if(cljs.core.truth_(new cljs.core.Keyword("build","class-parent","build/class-parent",1092120922).cljs$core$IFn$_invoke$arity$1(class_config))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Warning: :build/class-parent is deprecated and will be removed soon."], 0));
} else {
}

var temp__5825__auto__ = logseq.db.sqlite.build.effective_class_extends(class_config);
if(cljs.core.truth_(temp__5825__auto__)){
var class_extends_SINGLEQUOTE_ = temp__5825__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var or__5142__auto__ = (class_db_ids.cljs$core$IFn$_invoke$arity$1 ? class_db_ids.cljs$core$IFn$_invoke$arity$1(c) : class_db_ids.call(null,c));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(logseq.db.frontend.malli_schema.class_QMARK_(c)){
return c;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"No :db/id for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)),cljs.core.PersistentArrayMap.EMPTY);
}
}
}),class_extends_SINGLEQUOTE_);
} else {
return null;
}
});
logseq.db.sqlite.build.validate_class_extends_acyclic_BANG_ = (function logseq$db$sqlite$build$validate_class_extends_acyclic_BANG_(classes,all_idents){
if(cljs.core.truth_(cljs.core.some((function (p__58486){
var vec__58487 = p__58486;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58487,(0),null);
var class_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58487,(1),null);
return cljs.core.seq(logseq.db.sqlite.build.effective_class_extends(class_config));
}),classes))){
var class_idents = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58484_SHARP_){
return logseq.db.sqlite.build.get_ident(all_idents,p1__58484_SHARP_);
}),cljs.core.keys(classes)));
var edges = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__58496){
var vec__58498 = p__58496;
var class_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58498,(0),null);
var class_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58498,(1),null);
var class_ident = logseq.db.sqlite.build.get_ident(all_idents,class_name);
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (parent){
var parent_ident = logseq.db.sqlite.build.get_ident(all_idents,parent);
if(cljs.core.contains_QMARK_(class_idents,parent_ident)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_ident,parent_ident], null);
} else {
return null;
}
}),logseq.db.sqlite.build.effective_class_extends(class_config));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([classes], 0));
var vec__58493 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__58501,p__58502){
var vec__58503 = p__58501;
var outgoing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58503,(0),null);
var counts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58503,(1),null);
var vec__58506 = p__58502;
var class_ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58506,(0),null);
var parent_ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58506,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$4(outgoing,class_ident,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),parent_ident),cljs.core.update.cljs$core$IFn$_invoke$arity$3(counts,parent_ident,cljs.core.inc)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.zipmap(class_idents,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)))], null),edges);
var outgoing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58493,(0),null);
var incoming_counts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58493,(1),null);
var initial_queue = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__58485_SHARP_){
return ((incoming_counts.cljs$core$IFn$_invoke$arity$1 ? incoming_counts.cljs$core$IFn$_invoke$arity$1(p1__58485_SHARP_) : incoming_counts.call(null,p1__58485_SHARP_)) === (0));
})),class_idents);
var queue = initial_queue;
var queue_index = (0);
var remaining_incoming = incoming_counts;
while(true){
if((queue_index < cljs.core.count(queue))){
var class_ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(queue,queue_index);
var vec__58519 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (queue,queue_index,remaining_incoming,class_ident,class_idents,edges,vec__58493,outgoing,incoming_counts,initial_queue){
return (function (p__58522,parent_ident){
var vec__58523 = p__58522;
var counts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58523,(0),null);
var unlocked_idents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58523,(1),null);
var next_count = ((counts.cljs$core$IFn$_invoke$arity$1 ? counts.cljs$core$IFn$_invoke$arity$1(parent_ident) : counts.call(null,parent_ident)) - (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(counts,parent_ident,next_count),(function (){var G__58526 = unlocked_idents;
if((next_count === (0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58526,parent_ident);
} else {
return G__58526;
}
})()], null);
});})(queue,queue_index,remaining_incoming,class_ident,class_idents,edges,vec__58493,outgoing,incoming_counts,initial_queue))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remaining_incoming,cljs.core.PersistentVector.EMPTY], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(outgoing,class_ident));
var next_incoming = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58519,(0),null);
var unlocked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58519,(1),null);
var G__58759 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(queue,unlocked);
var G__58760 = (queue_index + (1));
var G__58761 = next_incoming;
queue = G__58759;
queue_index = G__58760;
remaining_incoming = G__58761;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(queue_index,cljs.core.count(class_idents))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cycle detected in :build/class-extends",cljs.core.PersistentArrayMap.EMPTY);
}
}
break;
}
} else {
return null;
}
});
logseq.db.sqlite.build.build_classes_tx = (function logseq$db$sqlite$build$build_classes_tx(classes,properties_config,uuid_maps,all_idents,p__58531){
var map__58532 = p__58531;
var map__58532__$1 = cljs.core.__destructure_map(map__58532);
var options = map__58532__$1;
var build_existing_tx_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58532__$1,new cljs.core.Keyword(null,"build-existing-tx?","build-existing-tx?",-2032344658));
var classes_SINGLEQUOTE_ = (cljs.core.truth_(build_existing_tx_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__58533){
var vec__58534 = p__58533;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58534,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58534,(1),null);
var and__5140__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954).cljs$core$IFn$_invoke$arity$1(v));
} else {
return and__5140__auto__;
}
}),classes)):classes);
var class_db_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58527_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__58527_SHARP_,logseq.db.sqlite.build.new_db_id()],null));
}),cljs.core.keys(classes_SINGLEQUOTE_)));
var classes_tx = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__58538){
var vec__58540 = p__58538;
var class_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58540,(0),null);
var map__58543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58540,(1),null);
var map__58543__$1 = cljs.core.__destructure_map(map__58543);
var class_m = map__58543__$1;
var class_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58543__$1,new cljs.core.Keyword("build","class-properties","build/class-properties",1278125544));
var db_ident = logseq.db.sqlite.build.get_ident(all_idents,class_name);
var title = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(class_m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.name(class_name);
}
})();
var new_block = logseq.db.sqlite.util.build_new_class(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("block","name","block/name",1619760316),logseq.common.util.page_name_sanity_lc(title),new cljs.core.Keyword("block","title","block/title",710445684),title,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(class_m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-ident-block-uuid","db-ident-block-uuid",-2020167291),db_ident);
}
})(),new cljs.core.Keyword("db","ident","db/ident",-737096),db_ident,new cljs.core.Keyword("db","id","db/id",-1388397098),(function (){var or__5142__auto__ = (class_db_ids.cljs$core$IFn$_invoke$arity$1 ? class_db_ids.cljs$core$IFn$_invoke$arity$1(class_name) : class_db_ids.call(null,class_name));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :db/id for class",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class_name], null));
}
})()], null));
var pvalue_tx_m = logseq.db.sqlite.build.__GT_property_value_tx_m(new_block,new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(class_m),properties_config,all_idents);
var G__58544 = cljs.core.PersistentVector.EMPTY;
var G__58544__$1 = ((cljs.core.seq(pvalue_tx_m))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__58544,logseq.db.sqlite.build.pvalue_tx__GT_txs(pvalue_tx_m,uuid_maps,all_idents,options)):G__58544);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58544__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_block,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(class_m,new cljs.core.Keyword("build","properties","build/properties",708607786),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("build","class-extends","build/class-extends",888177458),new cljs.core.Keyword("build","class-parent","build/class-parent",1092120922),new cljs.core.Keyword("build","class-properties","build/class-properties",1278125544),new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954)], 0)),(function (){var temp__5825__auto__ = cljs.core.not_empty(new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(class_m));
if(cljs.core.truth_(temp__5825__auto__)){
var props = temp__5825__auto__;
return logseq.db.sqlite.build.__GT_block_properties(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,logseq.db.frontend.property.build.build_properties_with_ref_values(pvalue_tx_m)], 0)),uuid_maps,all_idents,options);
} else {
return null;
}
})(),(function (){var temp__5825__auto__ = logseq.db.sqlite.build.build_class_extends(class_m,class_db_ids);
if(cljs.core.truth_(temp__5825__auto__)){
var class_extends = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),class_extends], null);
} else {
return null;
}
})(),(cljs.core.truth_(class_properties)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58529_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("db","ident","db/ident",-737096)],[logseq.db.sqlite.build.get_ident(all_idents,p1__58529_SHARP_)]);
}),class_properties)], null):null)], 0)));

}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([classes_SINGLEQUOTE_], 0)));
return classes_tx;
});
logseq.db.sqlite.build.Class = new cljs.core.Keyword(null,"keyword","keyword",811389747);
logseq.db.sqlite.build.Property = new cljs.core.Keyword(null,"keyword","keyword",811389747);
logseq.db.sqlite.build.Page = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","journal","build/journal",1781180096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","properties","build/properties",708607786),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("logseq.db.sqlite.build","user-properties","logseq.db.sqlite.build/user-properties",367684178)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","tags","build/tags",1814686611),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),logseq.db.sqlite.build.Class], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),logseq.db.sqlite.build.Class], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),":block/title, :block/uuid or :build/journal required",new cljs.core.Keyword("error","path","error/path",-419192760),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684)], null)], null),(function (m){
var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("build","journal","build/journal",1781180096).cljs$core$IFn$_invoke$arity$1(m);
}
}
})], null)], null);
/**
 * This registry contains block and properties related definitions which reference each other
 */
logseq.db.sqlite.build.Build_schema_registry = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("logseq.db.sqlite.build","block","logseq.db.sqlite.build/block",-330338855),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","children","build/children",-1040452432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("logseq.db.sqlite.build","block","logseq.db.sqlite.build/block",-330338855)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","properties","build/properties",708607786),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("logseq.db.sqlite.build","user-properties","logseq.db.sqlite.build/user-properties",367684178)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","tags","build/tags",1814686611),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),logseq.db.sqlite.build.Class], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),logseq.db.sqlite.build.Class], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword("logseq.db.sqlite.build","block-property-value","logseq.db.sqlite.build/block-property-value",-710674787),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("logseq.db.sqlite.build","block","logseq.db.sqlite.build/block",-330338855)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","property-value","build/property-value",1425188701),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"block","block",664686210)], null)], null)], null)], null),new cljs.core.Keyword("logseq.db.sqlite.build","block-uuid-property-value","logseq.db.sqlite.build/block-uuid-property-value",-999905280),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null),new cljs.core.Keyword("logseq.db.sqlite.build","build-page-property-value","logseq.db.sqlite.build/build-page-property-value",1022467908),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("build","page","build/page",822051483)], null),logseq.db.sqlite.build.Page], null),new cljs.core.Keyword("logseq.db.sqlite.build","property-value","logseq.db.sqlite.build/property-value",2137911588),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("logseq.db.sqlite.build","build-page-property-value","logseq.db.sqlite.build/build-page-property-value",1022467908)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("logseq.db.sqlite.build","block-uuid-property-value","logseq.db.sqlite.build/block-uuid-property-value",-999905280)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("logseq.db.sqlite.build","block-property-value","logseq.db.sqlite.build/block-property-value",-710674787)], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.Keyword("logseq.db.sqlite.build","property-values","logseq.db.sqlite.build/property-values",-1718656955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("logseq.db.sqlite.build","property-value","logseq.db.sqlite.build/property-value",2137911588)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("logseq.db.sqlite.build","property-value","logseq.db.sqlite.build/property-value",2137911588)], null)], null)], null),new cljs.core.Keyword("logseq.db.sqlite.build","user-properties","logseq.db.sqlite.build/user-properties",367684178),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),logseq.db.sqlite.build.Property,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("logseq.db.sqlite.build","property-values","logseq.db.sqlite.build/property-values",-1718656955)], null)], null)], null);
logseq.db.sqlite.build.User_properties = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),logseq.db.sqlite.build.Build_schema_registry], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("logseq.db.sqlite.build","user-properties","logseq.db.sqlite.build/user-properties",367684178)], null)], null);
logseq.db.sqlite.build.Page_blocks = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),logseq.db.sqlite.build.Build_schema_registry], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),logseq.db.sqlite.build.Page], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("logseq.db.sqlite.build","block","logseq.db.sqlite.build/block",-330338855)], null)], null)], null)], null)], null);
logseq.db.sqlite.build.Properties = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),logseq.db.sqlite.build.Property,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","properties","build/properties",708607786),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),logseq.db.sqlite.build.User_properties], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","properties-ref-types","build/properties-ref-types",-1991321370),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","closed-values","build/closed-values",190285321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"double","double",884886883)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","property-classes","build/property-classes",1099271032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),logseq.db.sqlite.build.Class], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),logseq.db.sqlite.build.Class], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null);
logseq.db.sqlite.build.Classes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),logseq.db.sqlite.build.Class,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","properties","build/properties",708607786),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),logseq.db.sqlite.build.User_properties], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","class-extends","build/class-extends",888177458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),logseq.db.sqlite.build.Class], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),logseq.db.sqlite.build.Class], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","class-properties","build/class-properties",1278125544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),logseq.db.sqlite.build.Property], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null);
/**
 * Main malli schema that validates a sqlite.build EDN map. If an inner schema
 *   uses :vector e.g. :blocks, it's to preserve :block/order-ing for that node's
 *   attribute. If an inner schema uses :vector or :set e.g. :build/class-extends,
 *   it's to indicate it is order-less and also allow users to write the more
 *   familiar vector syntax
 */
logseq.db.sqlite.build.Options = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),logseq.db.sqlite.build.Page_blocks], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),logseq.db.sqlite.build.Properties], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),logseq.db.sqlite.build.Classes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-namespace","graph-namespace",-317059511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id-fn","page-id-fn",242471299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auto-create-ontology?","auto-create-ontology?",1327966901),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"build-existing-tx?","build-existing-tx?",-2032344658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extract-content-refs?","extract-content-refs?",-1224729418),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translate-property-values?","translate-property-values?",-1950851544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
/**
 * Extracts all used properties as a map of properties to their property values. Looks at properties
 * from :build/properties and :build/class-properties. Properties from :build/class-properties have
 * a ::no-value value
 */
logseq.db.sqlite.build.get_used_properties_from_options = (function logseq$db$sqlite$build$get_used_properties_from_options(p__58555){
var map__58556 = p__58555;
var map__58556__$1 = cljs.core.__destructure_map(map__58556);
var pages_and_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58556__$1,new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58556__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58556__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var page_block_properties = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function logseq$db$sqlite$build$get_used_properties_from_options_$_build_node_props_vec(nodes){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (m){
var nested_pvalue_pages = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__58550_SHARP_){
if(logseq.db.sqlite.build.page_prop_value_QMARK_(p1__58550_SHARP_)){
return cljs.core.second(p1__58550_SHARP_);
} else {
if(cljs.core.truth_(logseq.db.sqlite.build.block_property_value_QMARK_(p1__58550_SHARP_))){
return p1__58550_SHARP_;
} else {
return null;

}
}
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58549_SHARP_){
if(cljs.core.set_QMARK_(p1__58549_SHARP_)){
return p1__58549_SHARP_;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58549_SHARP_], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(m))], 0))));
if(nested_pvalue_pages){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(m)),logseq$db$sqlite$build$get_used_properties_from_options_$_build_node_props_vec(nested_pvalue_pages));
} else {
return new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58547_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(p1__58547_SHARP_)),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(p1__58547_SHARP_));
}),pages_and_blocks)], 0)));
var property_properties = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58552_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(p1__58552_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(properties)], 0));
var class_properties = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58553_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,new cljs.core.Keyword("logseq.db.sqlite.build","no-value","logseq.db.sqlite.build/no-value",745233686)], null);
}),new cljs.core.Keyword("build","class-properties","build/class-properties",1278125544).cljs$core$IFn$_invoke$arity$1(p1__58553_SHARP_)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(p1__58553_SHARP_)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(classes)], 0)));
var props_to_values = (function (x){
return cljs.core.update_vals(x,(function (p1__58554_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__58554_SHARP_);
}));
})(cljs.core.group_by(cljs.core.first,clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(class_properties,page_block_properties,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([property_properties], 0))));
return props_to_values;
});
logseq.db.sqlite.build.create_all_idents = (function logseq$db$sqlite$build$create_all_idents(properties,classes,p__58563){
var map__58564 = p__58563;
var map__58564__$1 = cljs.core.__destructure_map(map__58564);
var graph_namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58564__$1,new cljs.core.Keyword(null,"graph-namespace","graph-namespace",-317059511));
var create_property_ident = (cljs.core.truth_(graph_namespace)?(function logseq$db$sqlite$build$create_all_idents_$_create_property_ident(kw){
return logseq.db.frontend.db_ident.create_db_ident_from_name((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(graph_namespace))+".property"),cljs.core.name(kw));
}):(function logseq$db$sqlite$build$create_all_idents_$_create_property_ident(kw){
if(cljs.core.qualified_keyword_QMARK_(kw)){
if(logseq.db.frontend.property.user_property_namespace_QMARK_(cljs.core.namespace(kw))){
} else {
throw (new Error((""+"Assert failed: "+"Property ident must have valid namespace"+"\n"+"(db-property/user-property-namespace? (namespace kw))")));
}

return logseq.db.frontend.db_ident.create_db_ident_from_name(cljs.core.namespace(kw),cljs.core.name(kw));
} else {
return logseq.db.frontend.property.create_user_property_ident_from_name.cljs$core$IFn$_invoke$arity$1(cljs.core.name(kw));
}
}));
var property_idents = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58561_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__58561_SHARP_,create_property_ident(p1__58561_SHARP_)],null));
}),cljs.core.keys(properties)));
var _ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.set(cljs.core.vals(property_idents))),cljs.core.count(properties)))?null:(function(){throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"All property db-idents must be unique but the following are duplicates: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__58578){
var vec__58579 = p__58578;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58579,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58579,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),cljs.core.frequencies(cljs.core.vals(property_idents))))))+"\n"+"(= (count (set (vals property-idents))) (count properties))")))})());
var create_class_ident = (cljs.core.truth_(graph_namespace)?(function logseq$db$sqlite$build$create_all_idents_$_create_class_ident(kw){
return logseq.db.frontend.db_ident.create_db_ident_from_name((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(graph_namespace))+".class"),cljs.core.name(kw));
}):(function logseq$db$sqlite$build$create_all_idents_$_create_class_ident(kw){
if(cljs.core.qualified_keyword_QMARK_(kw)){
if(logseq.db.frontend.class$.user_class_namespace_QMARK_(cljs.core.namespace(kw))){
} else {
throw (new Error((""+"Assert failed: "+"Class ident must have valid namespace"+"\n"+"(db-class/user-class-namespace? (namespace kw))")));
}

return logseq.db.frontend.db_ident.create_db_ident_from_name(cljs.core.namespace(kw),cljs.core.name(kw));
} else {
return logseq.db.frontend.class$.create_user_class_ident_from_name(null,cljs.core.name(kw));
}
}));
var class_idents = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58562_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__58562_SHARP_,create_class_ident(p1__58562_SHARP_)],null));
}),cljs.core.keys(classes)));
var ___$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.set(cljs.core.vals(class_idents))),cljs.core.count(classes)))?null:(function(){throw (new Error((""+"Assert failed: "+"All class db-idents must be unique"+"\n"+"(= (count (set (vals class-idents))) (count classes))")))})());
var all_idents = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([property_idents,class_idents], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(all_idents),(cljs.core.count(property_idents) + cljs.core.count(class_idents)))){
} else {
throw (new Error((""+"Assert failed: "+"Class and property db-idents are unique and do not overlap"+"\n"+"(= (count all-idents) (+ (count property-idents) (count class-idents)))")));
}

return all_idents;
});
logseq.db.sqlite.build.build_page_tx = (function logseq$db$sqlite$build$build_page_tx(page,all_idents,page_uuids,properties,p__58596){
var map__58597 = p__58596;
var map__58597__$1 = cljs.core.__destructure_map(map__58597);
var options = map__58597__$1;
var build_existing_tx_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58597__$1,new cljs.core.Keyword(null,"build-existing-tx?","build-existing-tx?",-2032344658));
var page_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(page,new cljs.core.Keyword("build","tags","build/tags",1814686611),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("build","properties","build/properties",708607786),new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954)], 0));
var pvalue_tx_m = logseq.db.sqlite.build.__GT_property_value_tx_m(page_SINGLEQUOTE_,new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(page),properties,all_idents);
var G__58598 = cljs.core.PersistentVector.EMPTY;
var G__58598__$1 = ((cljs.core.seq(pvalue_tx_m))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__58598,logseq.db.sqlite.build.pvalue_tx__GT_txs(pvalue_tx_m,page_uuids,all_idents,options)):G__58598);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58598__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(build_existing_tx_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),logseq.common.util.time_ms()], null):cljs.core.select_keys(logseq.db.sqlite.build.block_with_timestamps(page_SINGLEQUOTE_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], null))),page_SINGLEQUOTE_,((cljs.core.seq(new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(page)))?logseq.db.sqlite.build.__GT_block_properties(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(page),logseq.db.frontend.property.build.build_properties_with_ref_values(pvalue_tx_m)], 0)),page_uuids,all_idents,options):null),(function (){var temp__5825__auto__ = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58582_SHARP_){
return logseq.db.sqlite.build.get_ident(all_idents,p1__58582_SHARP_);
}),new cljs.core.Keyword("build","tags","build/tags",1814686611).cljs$core$IFn$_invoke$arity$1(page)));
if(temp__5825__auto__){
var tag_idents = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","tags","block/tags",1814948340),(function (){var G__58599 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58583_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("db","ident","db/ident",-737096)],[p1__58583_SHARP_]);
}),tag_idents);
if(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(tag_idents),logseq.db.frontend.class$.page_classes))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__58599,new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329));
} else {
return G__58599;
}
})()], null);
} else {
return null;
}
})()], 0)));

});
logseq.db.sqlite.build.build_pages_and_blocks_tx = (function logseq$db$sqlite$build$build_pages_and_blocks_tx(pages_and_blocks,all_idents,page_uuids,p__58601){
var map__58602 = p__58601;
var map__58602__$1 = cljs.core.__destructure_map(map__58602);
var options = map__58602__$1;
var page_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58602__$1,new cljs.core.Keyword(null,"page-id-fn","page-id-fn",242471299),new cljs.core.Keyword("db","id","db/id",-1388397098));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58602__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var build_existing_tx_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58602__$1,new cljs.core.Keyword(null,"build-existing-tx?","build-existing-tx?",-2032344658));
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__58603){
var map__58604 = p__58603;
var map__58604__$1 = cljs.core.__destructure_map(map__58604);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58604__$1,new cljs.core.Keyword(null,"page","page",849072397));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58604__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var build_existing_tx_QMARK__SINGLEQUOTE_ = (function (){var and__5140__auto__ = build_existing_tx_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(new cljs.core.Keyword("logseq.db.sqlite.build","new-page?","logseq.db.sqlite.build/new-page?",1825442436).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(page)))) && (cljs.core.not(new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954).cljs$core$IFn$_invoke$arity$1(page))));
} else {
return and__5140__auto__;
}
})();
var page_SINGLEQUOTE_ = (cljs.core.truth_(build_existing_tx_QMARK__SINGLEQUOTE_)?page:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),(function (){var or__5142__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.sqlite.build.new_db_id();
}
})(),new cljs.core.Keyword("block","title","block/title",710445684),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return clojure.string.capitalize(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page));
}
})(),new cljs.core.Keyword("block","name","block/name",1619760316),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.common.util.page_name_sanity_lc(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page));
}
})(),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),null], null), null)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(page,new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","title","block/title",710445684)], 0))], 0)));
var page_id_fn_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__5140__auto__ = build_existing_tx_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword("logseq.db.sqlite.build","new-page?","logseq.db.sqlite.build/new-page?",1825442436).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(page)));
} else {
return and__5140__auto__;
}
})())?(function (p1__58600_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__58600_SHARP_)],null));
}):page_id_fn);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__5140__auto__ = build_existing_tx_QMARK__SINGLEQUOTE_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not(new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_))) && (cljs.core.not(new cljs.core.Keyword("build","tags","build/tags",1814686611).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_))));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.select_keys(page,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], null))], null):logseq.db.sqlite.build.build_page_tx(page_SINGLEQUOTE_,all_idents,page_uuids,properties,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"build-existing-tx?","build-existing-tx?",-2032344658),build_existing_tx_QMARK__SINGLEQUOTE_))),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,logseq.db.sqlite.build.__GT_block_tx(m,page_uuids,all_idents,(page_id_fn_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? page_id_fn_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_) : page_id_fn_SINGLEQUOTE_.call(null,page_SINGLEQUOTE_)),options));
}),cljs.core.PersistentVector.EMPTY,blocks));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_and_blocks], 0)));
});
/**
 * Splits a vec of maps tx into maps that can immediately be transacted,
 *   :init-tx, and maps that need to be transacted after :init-tx, :block-props-tx, in order to use
 * the correct schema e.g. user properties with :db/cardinality
 */
logseq.db.sqlite.build.split_blocks_tx = (function logseq$db$sqlite$build$split_blocks_tx(blocks_tx,properties){
var property_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__58606_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(p1__58606_SHARP_))){
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__58606_SHARP_);
} else {
return null;
}
}),blocks_tx),cljs.core.keys(properties));
var vec__58628 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__58631,m){
var vec__58632 = p__58631;
var init_tx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58632,(0),null);
var block_props_tx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58632,(1),null);
var props = cljs.core.select_keys(m,property_idents);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.map_QMARK_(m))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(init_tx_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,property_idents)):init_tx_STAR_),((cljs.core.seq(props))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block_props_tx_STAR_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :block/uuid for block",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),m], null));
}
})()], null),props], 0))):block_props_tx_STAR_)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),blocks_tx);
var init_tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58628,(0),null);
var block_props_tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58628,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-tx","init-tx",191693574),init_tx,new cljs.core.Keyword(null,"block-props-tx","block-props-tx",414649),block_props_tx], null);
});
/**
 * This allows top-level page blocks to contain [[named]] refs and auto create
 *   those pages.  This is for convenience. For robust EDN it's recommended
 *   to use [[UUID]] refs and handle page creation with initial build-blocks-tx options
 */
logseq.db.sqlite.build.add_new_pages_from_refs = (function logseq$db$sqlite$build$add_new_pages_from_refs(pages_and_blocks){
var existing_pages = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__58636_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__58636_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","title","block/title",710445684)], null));
}),pages_and_blocks));
var new_pages_from_refs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58638_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"page","page",849072397)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","title","block/title",710445684),p1__58638_SHARP_], null)]);
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__58641){
var map__58642 = p__58641;
var map__58642__$1 = cljs.core.__destructure_map(map__58642);
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(existing_pages,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.common.util.uuid_string_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58637_SHARP_){
return logseq.db.sqlite.build.extract_basic_content_refs(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(p1__58637_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks], 0))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_and_blocks], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new_pages_from_refs,pages_and_blocks);
});
logseq.db.sqlite.build.add_new_pages_from_properties = (function logseq$db$sqlite$build$add_new_pages_from_properties(properties,pages_and_blocks){
var used_properties = logseq.db.sqlite.build.get_used_properties_from_options(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),pages_and_blocks,new cljs.core.Keyword(null,"properties","properties",685819552),properties], null));
var existing_pages = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__58643_SHARP_){
return cljs.core.select_keys(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(p1__58643_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","journal","build/journal",1781180096),new cljs.core.Keyword("block","title","block/title",710445684)], null));
}),pages_and_blocks));
var new_pages = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58645_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"page","page",849072397)],[p1__58645_SHARP_]);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(existing_pages,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (val_or_vals){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__58644_SHARP_){
if(logseq.db.sqlite.build.page_prop_value_QMARK_(p1__58644_SHARP_)){
return cljs.core.second(p1__58644_SHARP_);
} else {
return null;
}
}),((cljs.core.set_QMARK_(val_or_vals))?val_or_vals:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val_or_vals], null)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([used_properties], 0))], 0)))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new_pages,pages_and_blocks);
});
/**
 * Pre builds :pages-and-blocks before any indexes like page-uuids are made
 */
logseq.db.sqlite.build.pre_build_pages_and_blocks = (function logseq$db$sqlite$build$pre_build_pages_and_blocks(pages_and_blocks,properties,p__58679){
var map__58684 = p__58679;
var map__58684__$1 = cljs.core.__destructure_map(map__58684);
var extract_content_refs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58684__$1,new cljs.core.Keyword(null,"extract-content-refs?","extract-content-refs?",-1224729418));
var ensure_page_uuids = (function (m){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)))){
return m;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null),cljs.core.random_uuid()),new cljs.core.Keyword(null,"page","page",849072397),(function (p1__58662_SHARP_){
return cljs.core.with_meta(p1__58662_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.db.sqlite.build","new-page?","logseq.db.sqlite.build/new-page?",1825442436),true], null));
}));
}
});
var expand_block_children = (function (m){
if(cljs.core.truth_(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"blocks","blocks",-610462153),logseq.db.sqlite.build.expand_build_children);
} else {
return m;
}
});
var expand_journal = (function (m){
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("build","journal","build/journal",1781180096)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var date_int = temp__5823__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"page","page",849072397),(function (page){
var page_name = logseq.common.util.date_time.int__GT_journal_title(date_int,"MMM do, yyyy");
return cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword("build","journal","build/journal",1781180096)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),date_int,new cljs.core.Keyword("block","title","block/title",710445684),page_name,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"journal-page-uuid","journal-page-uuid",1859101489),date_int);
}
})(),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081)], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.db.sqlite.build","new-page?","logseq.db.sqlite.build/new-page?",1825442436),cljs.core.not(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page))], null));
}));
} else {
return m;
}
});
var pages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(expand_block_children,cljs.core.map.cljs$core$IFn$_invoke$arity$2(expand_journal,logseq.db.sqlite.build.add_new_pages_from_properties(properties,pages_and_blocks)));
var G__58686 = pages;
var G__58686__$1 = (cljs.core.truth_(extract_content_refs_QMARK_)?logseq.db.sqlite.build.add_new_pages_from_refs(G__58686):G__58686);
var G__58686__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(ensure_page_uuids,G__58686__$1)
;
return cljs.core.vec(G__58686__$2);

});
/**
 * Infers a property schema given a collection of its a property pair values
 */
logseq.db.sqlite.build.infer_property_schema = (function logseq$db$sqlite$build$infer_property_schema(property_pair_values){
var prop_value = cljs.core.some((function (p1__58687_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.db.sqlite.build","no-value","logseq.db.sqlite.build/no-value",745233686),p1__58687_SHARP_)){
return p1__58687_SHARP_;
} else {
return null;
}
}),property_pair_values);
var prop_value_SINGLEQUOTE_ = ((cljs.core.set_QMARK_(prop_value))?cljs.core.first(prop_value):prop_value);
var prop_type = (cljs.core.truth_(prop_value_SINGLEQUOTE_)?((logseq.db.sqlite.build.page_prop_value_QMARK_(prop_value_SINGLEQUOTE_))?(cljs.core.truth_(new cljs.core.Keyword("build","journal","build/journal",1781180096).cljs$core$IFn$_invoke$arity$1(cljs.core.second(prop_value)))?new cljs.core.Keyword(null,"date","date",-1463434462):new cljs.core.Keyword(null,"node","node",581201198)):logseq.db.frontend.property.type.infer_property_type_from_value(prop_value_SINGLEQUOTE_)):new cljs.core.Keyword(null,"default","default",-1987822328));
var G__58688 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),prop_type], null);
if(cljs.core.set_QMARK_(prop_value)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58688,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword(null,"many","many",1092119164));
} else {
return G__58688;
}
});
/**
 * Auto creates properties and classes from uses of options.  Creates properties
 *   from any uses of :build/properties and :build/schema.properties. Creates classes from any uses of
 *   :build/tags
 */
logseq.db.sqlite.build.auto_create_ontology = (function logseq$db$sqlite$build$auto_create_ontology(p__58692){
var map__58693 = p__58692;
var map__58693__$1 = cljs.core.__destructure_map(map__58693);
var options = map__58693__$1;
var pages_and_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var new_classes = cljs.core.zipmap(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58689_SHARP_){
return (((p1__58689_SHARP_ instanceof cljs.core.Keyword)) && (logseq.db.frontend.class$.logseq_class_QMARK_(p1__58689_SHARP_)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58690_SHARP_){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("build","tags","build/tags",1814686611),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(p1__58690_SHARP_)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_and_blocks], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58691_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__58691_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("build","tags","build/tags",1814686611)], null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_and_blocks], 0))))),cljs.core.set(cljs.core.keys(classes))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var classes_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_classes,classes], 0));
var used_properties = logseq.db.sqlite.build.get_used_properties_from_options(options);
var new_properties = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,logseq.db.sqlite.build.infer_property_schema(cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_properties,prop))], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.internal_property_QMARK_,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(used_properties)),cljs.core.set(cljs.core.keys(properties))))));
var properties_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_properties,properties], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes_SINGLEQUOTE_,new cljs.core.Keyword(null,"properties","properties",685819552),properties_SINGLEQUOTE_], null);
});
/**
 * Gets all possible ref uuids from either [:block/uuid X] or {:build/journal X}. Uuid scraping
 * is aggressive so some uuids may not be referenced
 */
logseq.db.sqlite.build.get_possible_referenced_uuids = (function logseq$db$sqlite$build$get_possible_referenced_uuids(input_map){
var uuids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var _ = clojure.walk.postwalk((function (f){
if(((cljs.core.vector_QMARK_(f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(f))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(uuids,cljs.core.conj,cljs.core.second(f));
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(f);
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword("build","journal","build/journal",1781180096).cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(f));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(uuids,cljs.core.conj,logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"journal-page-uuid","journal-page-uuid",1859101489),new cljs.core.Keyword("build","journal","build/journal",1781180096).cljs$core$IFn$_invoke$arity$1(f)));
} else {
}

return f;
}),input_map);
return cljs.core.deref(uuids);
});
logseq.db.sqlite.build.build_blocks_tx_STAR_ = (function logseq$db$sqlite$build$build_blocks_tx_STAR_(p__58697){
var map__58698 = p__58697;
var map__58698__$1 = cljs.core.__destructure_map(map__58698);
var options = map__58698__$1;
var pages_and_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var auto_create_ontology_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword(null,"auto-create-ontology?","auto-create-ontology?",1327966901));
var build_existing_tx_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword(null,"build-existing-tx?","build-existing-tx?",-2032344658));
var pages_and_blocks_SINGLEQUOTE_ = logseq.db.sqlite.build.pre_build_pages_and_blocks(pages_and_blocks,properties,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"properties","properties",685819552)], 0)));
var page_uuids = logseq.db.sqlite.build.create_page_uuids(pages_and_blocks_SINGLEQUOTE_);
var map__58700 = (cljs.core.truth_(auto_create_ontology_QMARK_)?logseq.db.sqlite.build.auto_create_ontology(options):options);
var map__58700__$1 = cljs.core.__destructure_map(map__58700);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var properties__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var all_idents = logseq.db.sqlite.build.create_all_idents(properties__$1,classes,options);
var _ = logseq.db.sqlite.build.validate_class_extends_acyclic_BANG_(classes,all_idents);
var properties_tx = logseq.db.sqlite.build.build_properties_tx(properties__$1,classes,page_uuids,all_idents,options);
var classes_tx = logseq.db.sqlite.build.build_classes_tx(classes,properties__$1,page_uuids,all_idents,options);
var class_ident__GT_id = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","id","db/id",-1388397098)),classes_tx));
var properties_tx_SINGLEQUOTE_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (m){
if(cljs.core.truth_(new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58694_SHARP_){
if(logseq.db.frontend.class$.logseq_class_QMARK_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__58694_SHARP_))){
return p1__58694_SHARP_;
} else {
var or__5142__auto__ = (function (){var G__58701 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__58694_SHARP_);
var G__58701__$1 = (((G__58701 == null))?null:(class_ident__GT_id.cljs$core$IFn$_invoke$arity$1 ? class_ident__GT_id.cljs$core$IFn$_invoke$arity$1(G__58701) : class_ident__GT_id.call(null,G__58701)));
if((G__58701__$1 == null)){
return null;
} else {
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("db","id","db/id",-1388397098)],[G__58701__$1]);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (cljs.core.truth_((function (){var and__5140__auto__ = build_existing_tx_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var G__58702 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__58694_SHARP_);
if((G__58702 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes,G__58702);
}
} else {
return and__5140__auto__;
}
})())?new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__58694_SHARP_):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"No :db/id found for :db/ident "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__58694_SHARP_], 0)))),cljs.core.PersistentArrayMap.EMPTY);
}
}
}
}),cs);
}));
} else {
return m;
}
}),properties_tx);
var pages_and_blocks_tx = logseq.db.sqlite.build.build_pages_and_blocks_tx(pages_and_blocks_SINGLEQUOTE_,all_idents,page_uuids,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"properties","properties",685819552),properties__$1));
var split_txs = logseq.db.sqlite.build.split_blocks_tx(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(properties_tx_SINGLEQUOTE_,classes_tx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_and_blocks_tx], 0)),properties__$1);
var G__58703 = split_txs;
if(cljs.core.truth_(new cljs.core.Keyword(null,"build-existing-tx?","build-existing-tx?",-2032344658).cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__58703,new cljs.core.Keyword(null,"init-tx","init-tx",191693574),(function (init_tx){
var indices = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58695_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)],[p1__58695_SHARP_]);
}),logseq.db.sqlite.build.get_possible_referenced_uuids(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes,new cljs.core.Keyword(null,"properties","properties",685819552),properties__$1,new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),pages_and_blocks], null)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(indices,init_tx);
}));
} else {
return G__58703;
}
});
/**
 * Given a vec of blocks and a fn which applied to a block returns a coll, this
 *   returns the coll produced by applying f to all blocks including :build/children blocks
 */
logseq.db.sqlite.build.extract_from_blocks = (function logseq$db$sqlite$build$extract_from_blocks(blocks,f){
var apply_to_block_and_all_children = (function logseq$db$sqlite$build$extract_from_blocks_$_apply_to_block_and_all_children(m,f__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(m) : f__$1.call(null,m)),(function (){var temp__5825__auto__ = cljs.core.seq(new cljs.core.Keyword("build","children","build/children",-1040452432).cljs$core$IFn$_invoke$arity$1(m));
if(temp__5825__auto__){
var children = temp__5825__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58704_SHARP_){
return logseq$db$sqlite$build$extract_from_blocks_$_apply_to_block_and_all_children(p1__58704_SHARP_,f__$1);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0));
} else {
return null;
}
})());
});
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58705_SHARP_){
return apply_to_block_and_all_children(p1__58705_SHARP_,f);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks], 0));
});
/**
 * Calls fn f on each block including all children under :build/children
 */
logseq.db.sqlite.build.update_each_block = (function logseq$db$sqlite$build$update_each_block(blocks,f){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (m){
var updated_m = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
if(cljs.core.truth_(new cljs.core.Keyword("build","children","build/children",-1040452432).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(updated_m,new cljs.core.Keyword("build","children","build/children",-1040452432),(function (){var G__58706 = new cljs.core.Keyword("build","children","build/children",-1040452432).cljs$core$IFn$_invoke$arity$1(m);
var G__58707 = f;
return (logseq.db.sqlite.build.update_each_block.cljs$core$IFn$_invoke$arity$2 ? logseq.db.sqlite.build.update_each_block.cljs$core$IFn$_invoke$arity$2(G__58706,G__58707) : logseq.db.sqlite.build.update_each_block.call(null,G__58706,G__58707));
})());
} else {
return updated_m;
}
}),blocks);
});
logseq.db.sqlite.build.validate_options = (function logseq$db$sqlite$build$validate_options(p__58708){
var map__58709 = p__58708;
var map__58709__$1 = cljs.core.__destructure_map(map__58709);
var options = map__58709__$1;
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58709__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var temp__5825__auto___58810 = malli.core.explain.cljs$core$IFn$_invoke$arity$2(logseq.db.sqlite.build.Options,options);
if(cljs.core.truth_(temp__5825__auto___58810)){
var errors_58811 = temp__5825__auto___58810;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The build-blocks-tx has the following options errors:"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(malli.error.humanize.cljs$core$IFn$_invoke$arity$1(errors_58811));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid data for options errors:"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,e){
return cljs.core.assoc_in(m,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(e),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(e)));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(errors_58811)));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Options validation failed",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),malli.error.humanize.cljs$core$IFn$_invoke$arity$1(errors_58811)], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-create-ontology?","auto-create-ontology?",1327966901).cljs$core$IFn$_invoke$arity$1(options))){
return null;
} else {
var used_properties = logseq.db.sqlite.build.get_used_properties_from_options(options);
var undeclared_properties = (function (x){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.internal_property_QMARK_,x);
})(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(used_properties)),cljs.core.set(cljs.core.keys(properties))));
if(cljs.core.seq(undeclared_properties)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"The following properties used in EDN were not declared in :properties: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(undeclared_properties)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"used-properties","used-properties",-1443340748),cljs.core.select_keys(used_properties,undeclared_properties)], null));
} else {
return null;
}
}
});
/**
 * Given an EDN map for defining pages, blocks and properties, this creates a map
 *  with two keys of transactable data for use with d/transact!. The :init-tx key
 *  must be transacted first and the :block-props-tx can be transacted after.
 *  The blocks that can be created have the following limitations:
 * 
 *  * Only top level blocks can be easily defined. Other level blocks can be
 * defined but they require explicit setting of :block/parent
 * 
 * The EDN map has the following keys:
 * 
 * * :pages-and-blocks - This is a vector of maps containing a :page key and optionally a :blocks
 *   key when defining a page's blocks. More about each key:
 *   * :page - This is a datascript attribute map for pages with
 *     :block/title required e.g. `{:block/title "foo"}`. Additional keys available:
 *     * :build/journal - Define a journal pages as an integer e.g. 20240101 is Jan 1, 2024. :block/title
 *       is not required if using this since it generates one
 *     * :build/properties - Defines properties on a page
 *     * :build/tags - Defines tags on a page
 *     * :build/keep-uuid? - Keeps :block/uuid because another block depends on it
 *   * :blocks - This is a vec of datascript attribute maps for blocks with
 *     :block/title required. e.g. `{:block/title "bar"}`. Additional keys available:
 *     * :build/children - A vec of blocks that are nested (indented) under the current block.
 *        Allows for outlines to be expressed to whatever depth
 *     * :build/properties - Defines properties on a block
 *     * :build/tags - Defines tags on a block
 *     * :build/keep-uuid? - Keeps :block/uuid because another block depends on it
 * * :properties - This is a map to configure properties where the keys are property name keywords
 *   and the values are maps of datascript attributes e.g. `{:logseq.property/type :checkbox}`.
 *   Additional keys available:
 *   * :build/properties - Define properties on a property page.
 *   * :build/closed-values - Define closed values with a vec of maps. A map contains keys :uuid, :value and :icon.
 *   * :build/property-classes - Vec of class name keywords. Defines a property's range classes
 *   * :build/properties-ref-types - Map of internal ref types to public ref types that are valid only for this property.
 *     Useful when remapping value ref types e.g. for :logseq.property/default-value.
 *     Default is `{:entity :number}`
 *   * :build/keep-uuid? - Keeps :block/uuid because another block depends on it
 * * :classes - This is a map to configure classes where the keys are class name keywords
 *   and the values are maps of datascript attributes e.g. `{:block/title "Foo"}`.
 *   Additional keys available:
 *   * :build/properties - Define properties on a class page
 *   * :build/class-extends - Vec of class name keywords which extend a class.
 *   * :build/class-properties - Vec of property name keywords. Defines properties that a class gives to its objects
 *   * :build/keep-uuid? - Keeps :block/uuid because another block depends on it
 *   * :graph-namespace - namespace to use for db-ident creation. Useful when importing an ontology
 *   * :auto-create-ontology? - When set to true, creates properties and classes from their use.
 *  See auto-create-ontology for more details
 *   * :build-existing-tx? - When set to true, blocks, pages, properties and classes with :block/uuid are treated as
 *   existing in DB and are skipped for creation. This is useful for building tx on existing DBs e.g. for importing.
 *   Blocks and pages are updated with any attributes passed to it while all other node types are ignored for update
 *   unless :build/keep-uuid? is set.
 *   * :extract-content-refs? - When set to true, plain text refs e.g. `[[foo]]` are automatically extracted to create pages
 *  and to create refs in blocks. This is useful for testing but since it only partially works, not useful for exporting.
 *  Default is true
 *   * :translate-property-values? - When set to true, property values support special interpretation e.g. `[:build/page ..]`.
 *  Default is true
 *   * :page-id-fn - custom fn that returns ent lookup id for page refs e.g. `[:block/uuid X]`
 *  Default is :db/id
 * 
 * The :build/properties in :pages-and-blocks, :properties and :classes is a map of
 * property name keywords to property values.  Multiple property values for a many
 * cardinality property are defined as a set. The following property types are
 * supported: :default, :url, :checkbox, :number, :node and :date. :checkbox and
 * :number values are written as booleans and integers/floats. :node references
 * are written as vectors e.g. `[:build/page {:block/title "PAGE NAME"}]`
 */
logseq.db.sqlite.build.build_blocks_tx = (function logseq$db$sqlite$build$build_blocks_tx(options_STAR_){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extract-content-refs?","extract-content-refs?",-1224729418),true,new cljs.core.Keyword(null,"translate-property-values?","translate-property-values?",-1950851544),true], null),options_STAR_], 0));
logseq.db.sqlite.build.validate_options(options);

return logseq.db.sqlite.build.build_blocks_tx_STAR_(options);
});
/**
 * Builds txs with build-blocks-tx and transacts them. Also provides a shorthand
 *   version of options that are useful for testing
 */
logseq.db.sqlite.build.create_blocks = (function logseq$db$sqlite$build$create_blocks(conn,options){
var options_SINGLEQUOTE_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auto-create-ontology?","auto-create-ontology?",1327966901),true], null),((cljs.core.vector_QMARK_(options))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),options], null):options)], 0));
var map__58710 = logseq.db.sqlite.build.build_blocks_tx(options_SINGLEQUOTE_);
var map__58710__$1 = cljs.core.__destructure_map(map__58710);
var _txs = map__58710__$1;
var init_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58710__$1,new cljs.core.Keyword(null,"init-tx","init-tx",191693574));
var block_props_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58710__$1,new cljs.core.Keyword(null,"block-props-tx","block-props-tx",414649));
(datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,init_tx) : datascript.core.transact_BANG_.call(null,conn,init_tx));

if(cljs.core.seq(block_props_tx)){
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,block_props_tx) : datascript.core.transact_BANG_.call(null,conn,block_props_tx));
} else {
return null;
}
});

//# sourceMappingURL=logseq.db.sqlite.build.js.map
