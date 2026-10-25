goog.provide('logseq.api.block');
logseq.api.block.plugin_property_prefix = "plugin.property.";
logseq.api.block.plugin_class_prefix = "plugin.class.";
logseq.api.block.sanitize_user_property_name = (function logseq$api$block$sanitize_user_property_name(k){
if(typeof k === 'string'){
return clojure.string.replace(clojure.string.replace(clojure.string.trim(k)," ",""),/^[:_\s]+/,"");
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
}
});
logseq.api.block.get_sanitized_plugin_id = (function logseq$api$block$get_sanitized_plugin_id(plugin){
var or__5142__auto__ = (cljs.core.truth_((function (){var G__80077 = window.LSPlugin;
if((G__80077 == null)){
return null;
} else {
return G__80077.PluginLocal;
}
})())?(function (){var G__80078 = plugin;
var G__80078__$1 = (((G__80078 == null))?null:G__80078.id);
if((G__80078__$1 == null)){
return null;
} else {
return logseq.api.block.sanitize_user_property_name(G__80078__$1);
}
})():null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "_test_plugin";
}
});
logseq.api.block.resolve_property_prefix_for_db = (function logseq$api$block$resolve_property_prefix_for_db(plugin){
var plugin_id = logseq.api.block.get_sanitized_plugin_id(plugin);
if(cljs.core.truth_(plugin_id)){
} else {
console.error("Can't get current plugin id");

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get current plugin id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plugin","plugin",-1688841923),plugin], null));
}

return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.api.block.plugin_property_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id));
});
logseq.api.block.property_name__GT_title = (function logseq$api$block$property_name__GT_title(property_name){
return clojure.string.trim(clojure.string.replace(clojure.string.trim((((!(typeof property_name === 'string')))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_name)):property_name)),/^:+/,""));
});
/**
 * Resolves a property :db/ident.
 * 
 *   Unqualified names stay in the caller's plugin namespace. Qualified idents
 *   (`user.property/…`, `logseq.property/…`, `plugin.property.<id>/…`) are used
 *   as-is so a plugin can set values on an existing property without taking over
 *   short names.
 */
logseq.api.block.get_db_ident_from_property_name = (function logseq$api$block$get_db_ident_from_property_name(property_name,plugin){
var property_name_SINGLEQUOTE_ = logseq.api.block.property_name__GT_title(property_name);
var property_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(property_name_SINGLEQUOTE_);
if(cljs.core.qualified_keyword_QMARK_(property_key)){
return property_key;
} else {
var plugin_ns = logseq.api.block.resolve_property_prefix_for_db(plugin);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(plugin_ns,logseq.db.frontend.db_ident.normalize_ident_name_part(property_name_SINGLEQUOTE_));
}
});
logseq.api.block.resolve_class_prefix_for_db = (function logseq$api$block$resolve_class_prefix_for_db(plugin){
var plugin_id = logseq.api.block.get_sanitized_plugin_id(plugin);
if(cljs.core.truth_(plugin_id)){
} else {
console.error("Can't get current plugin id");

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get current plugin id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plugin","plugin",-1688841923),plugin], null));
}

return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.api.block.plugin_class_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id));
});
logseq.api.block.plugin_property_key_QMARK_ = (function logseq$api$block$plugin_property_key_QMARK_(ident){
return ((cljs.core.qualified_keyword_QMARK_(ident)) && (clojure.string.starts_with_QMARK_(cljs.core.namespace(ident),logseq.api.block.plugin_property_prefix)));
});
logseq.api.block.into_readable_db_properties = (function logseq$api$block$into_readable_db_properties(properties){
var G__80087 = properties;
if((G__80087 == null)){
return null;
} else {
return frontend.handler.db_based.property.util.readable_properties.cljs$core$IFn$_invoke$arity$2(G__80087,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"original-key?","original-key?",-219511082),true,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.str], null));
}
});
logseq.api.block.parse_property_json_value_if_need = (function logseq$api$block$parse_property_json_value_if_need(ident,property_value){
if(((typeof property_value === 'string') && (logseq.api.block.plugin_property_key_QMARK_(ident)))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),ident,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (prop){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(prop),new cljs.core.Keyword(null,"json","json",1279968570)))?(function (){try{return JSON.parse(property_value);
}catch (e80088){if((e80088 instanceof Error)){
var _e = e80088;
return property_value;
} else {
throw e80088;

}
}})():property_value));
}));
}));
} else {
return property_value;
}
});
/**
 * Plugin should only upsert its own properties
 */
logseq.api.block.ensure_property_upsert_control = (function logseq$api$block$ensure_property_upsert_control(plugin,property_ident,property_name){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.api.block.resolve_property_prefix_for_db(plugin),cljs.core.namespace(property_ident))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Plugins can only upsert its own properties",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property","property",-1114278232),property_name,new cljs.core.Keyword(null,"property-ident","property-ident",697145839),property_ident], null));
}
});
logseq.api.block.convert_json_and_string = (function logseq$api$block$convert_json_and_string(property_type,value){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),property_type)) && ((!(typeof value === 'string'))))){
return JSON.stringify(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(value));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string","string",-1989541586),property_type)) && ((!(typeof value === 'string'))))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
} else {
return value;

}
}
});
logseq.api.block.infer_property_type = (function logseq$api$block$infer_property_type(value){
if(cljs.core.boolean_QMARK_(value)){
return new cljs.core.Keyword(null,"checkbox","checkbox",1612615655);
} else {
if(((typeof value === 'number') || (((cljs.core.sequential_QMARK_(value)) && (cljs.core.every_QMARK_(cljs.core.number_QMARK_,value)))))){
return new cljs.core.Keyword(null,"number","number",1570378438);
} else {
if(((logseq.db.frontend.property.type.url_QMARK_(value)) || (((cljs.core.sequential_QMARK_(value)) && (cljs.core.every_QMARK_(logseq.db.frontend.property.type.url_QMARK_,value)))))){
return new cljs.core.Keyword(null,"url","url",276297046);
} else {
if(cljs.core.map_QMARK_(value)){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
});
logseq.api.block.set_block_properties_BANG_ = (function logseq$api$block$set_block_properties_BANG_(plugin,block_id,properties,p__80096){
var map__80097 = p__80096;
var map__80097__$1 = cljs.core.__destructure_map(map__80097);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80097__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var reset_property_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80097__$1,new cljs.core.Keyword(null,"reset-property-values","reset-property-values",-1471461256));
var entity_id_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80097__$1,new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382));
var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
var seq__80102 = cljs.core.seq(properties);
var chunk__80103 = null;
var count__80104 = (0);
var i__80105 = (0);
while(true){
if((i__80105 < count__80104)){
var vec__80150 = chunk__80103.cljs$core$IIndexed$_nth$arity$2(null,i__80105);
var property_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80150,(0),null);
var property_ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80150,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80150,(2),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80150,(3),null);
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80150,(4),null);
if(cljs.core.qualified_keyword_QMARK_(property_ident)){
} else {
console.error((""+"Invalid property id: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_id)));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid property id",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id,new cljs.core.Keyword(null,"property-ident","property-ident",697145839),property_ident], null));
}

var property_type_80334 = (function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__80153 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(schema);
if((G__80153 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__80153);
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var and__5140__auto__ = (property == null);
if(and__5140__auto__){
return logseq.api.block.infer_property_type(value);
} else {
return and__5140__auto__;
}
}
}
})();
var cardinality_80335 = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("many",new cljs.core.Keyword(null,"cardinality","cardinality",-104971109).cljs$core$IFn$_invoke$arity$1(schema))) || (cljs.core.sequential_QMARK_(value)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cardinality","cardinality",-104971109).cljs$core$IFn$_invoke$arity$1(schema),"one")))){
return new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234);
} else {
return new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190);
}
}
})();
var __80336 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cardinality_80335,new cljs.core.Keyword(null,"many","many",1092119164))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_type_80334,new cljs.core.Keyword(null,"json","json",1279968570)))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(":json type doesn't support multiple values",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_ident], null))})():null);
var error_data_80337 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id,new cljs.core.Keyword(null,"property-ident","property-ident",697145839),property_ident,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"value","value",305978217),value], null);
var schema_SINGLEQUOTE__80338 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),property_type_80334,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),cardinality_80335], null);
var many_QMARK__80339 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cardinality_80335,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
var value_SINGLEQUOTE__80340 = ((((many_QMARK__80339) && ((!(cljs.core.sequential_QMARK_(value))))))?(cljs.core.truth_(value)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null):null):value);
if(cljs.core.truth_((function (){var and__5140__auto__ = property;
if(cljs.core.truth_(and__5140__auto__)){
return schema;
} else {
return and__5140__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Use `upsert_property` to modify existing property's schema",error_data_80337);
} else {
}

if(cljs.core.truth_(property_type_80334)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Missing `type` in schema for property: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_id)),error_data_80337);
}

if((((!(many_QMARK__80339))) && (cljs.core.sequential_QMARK_(value)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("Property %s has cardinality `one` but passed multiple values",property_id) : frontend.util.format.call(null,"Property %s has cardinality `one` but passed multiple values",property_id)),error_data_80337);
} else {
}

if(cljs.core.truth_(property)){
} else {
logseq.api.block.ensure_property_upsert_control(plugin,property_ident,property_id);

frontend.modules.outliner.op.upsert_property_BANG_(property_ident,schema_SINGLEQUOTE__80338,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-name","property-name",-1399851434),property_id], null));
}

if(cljs.core.truth_((function (){var and__5140__auto__ = property;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = (function (){var and__5140__auto____$1 = many_QMARK__80339;
if(and__5140__auto____$1){
return reset_property_values;
} else {
return and__5140__auto____$1;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (value_SINGLEQUOTE__80340 == null);
}
} else {
return and__5140__auto__;
}
})())){
frontend.modules.outliner.op.remove_block_property_BANG_(block_id,property_ident);
} else {
}

var set_property_BANG__80351 = ((function (seq__80102,chunk__80103,count__80104,i__80105,property_type_80334,cardinality_80335,__80336,error_data_80337,schema_SINGLEQUOTE__80338,many_QMARK__80339,value_SINGLEQUOTE__80340,vec__80150,property_id,property_ident,value,schema,property,test_QMARK___61309__auto__,ops__61310__auto__,editor_info__61311__auto__,map__80097,map__80097__$1,page_id,reset_property_values,entity_id_QMARK_){
return (function (value__$1){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),property_type_80334)) && ((!((value__$1 == null)))))){
return frontend.modules.outliner.op.batch_set_property_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),property_ident,value__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),entity_id_QMARK_ === true], null));
} else {
return frontend.modules.outliner.op.set_block_property_BANG_(block_id,property_ident,logseq.api.block.convert_json_and_string(property_type_80334,value__$1));
}
});})(seq__80102,chunk__80103,count__80104,i__80105,property_type_80334,cardinality_80335,__80336,error_data_80337,schema_SINGLEQUOTE__80338,many_QMARK__80339,value_SINGLEQUOTE__80340,vec__80150,property_id,property_ident,value,schema,property,test_QMARK___61309__auto__,ops__61310__auto__,editor_info__61311__auto__,map__80097,map__80097__$1,page_id,reset_property_values,entity_id_QMARK_))
;
var values_80352 = ((cljs.core.sequential_QMARK_(value_SINGLEQUOTE__80340))?value_SINGLEQUOTE__80340:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_SINGLEQUOTE__80340], null));
var seq__80172_80353 = cljs.core.seq(values_80352);
var chunk__80173_80354 = null;
var count__80174_80355 = (0);
var i__80175_80356 = (0);
while(true){
if((i__80175_80356 < count__80174_80355)){
var value_80357__$1 = chunk__80173_80354.cljs$core$IIndexed$_nth$arity$2(null,i__80175_80356);
set_property_BANG__80351(value_80357__$1);


var G__80358 = seq__80172_80353;
var G__80359 = chunk__80173_80354;
var G__80360 = count__80174_80355;
var G__80361 = (i__80175_80356 + (1));
seq__80172_80353 = G__80358;
chunk__80173_80354 = G__80359;
count__80174_80355 = G__80360;
i__80175_80356 = G__80361;
continue;
} else {
var temp__5825__auto___80362 = cljs.core.seq(seq__80172_80353);
if(temp__5825__auto___80362){
var seq__80172_80363__$1 = temp__5825__auto___80362;
if(cljs.core.chunked_seq_QMARK_(seq__80172_80363__$1)){
var c__5673__auto___80364 = cljs.core.chunk_first(seq__80172_80363__$1);
var G__80365 = cljs.core.chunk_rest(seq__80172_80363__$1);
var G__80366 = c__5673__auto___80364;
var G__80367 = cljs.core.count(c__5673__auto___80364);
var G__80368 = (0);
seq__80172_80353 = G__80365;
chunk__80173_80354 = G__80366;
count__80174_80355 = G__80367;
i__80175_80356 = G__80368;
continue;
} else {
var value_80370__$1 = cljs.core.first(seq__80172_80363__$1);
set_property_BANG__80351(value_80370__$1);


var G__80371 = cljs.core.next(seq__80172_80363__$1);
var G__80372 = null;
var G__80373 = (0);
var G__80374 = (0);
seq__80172_80353 = G__80371;
chunk__80173_80354 = G__80372;
count__80174_80355 = G__80373;
i__80175_80356 = G__80374;
continue;
}
} else {
}
}
break;
}


var G__80376 = seq__80102;
var G__80377 = chunk__80103;
var G__80378 = count__80104;
var G__80379 = (i__80105 + (1));
seq__80102 = G__80376;
chunk__80103 = G__80377;
count__80104 = G__80378;
i__80105 = G__80379;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__80102);
if(temp__5825__auto__){
var seq__80102__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80102__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__80102__$1);
var G__80381 = cljs.core.chunk_rest(seq__80102__$1);
var G__80382 = c__5673__auto__;
var G__80383 = cljs.core.count(c__5673__auto__);
var G__80384 = (0);
seq__80102 = G__80381;
chunk__80103 = G__80382;
count__80104 = G__80383;
i__80105 = G__80384;
continue;
} else {
var vec__80178 = cljs.core.first(seq__80102__$1);
var property_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80178,(0),null);
var property_ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80178,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80178,(2),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80178,(3),null);
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80178,(4),null);
if(cljs.core.qualified_keyword_QMARK_(property_ident)){
} else {
console.error((""+"Invalid property id: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_id)));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid property id",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id,new cljs.core.Keyword(null,"property-ident","property-ident",697145839),property_ident], null));
}

var property_type_80386 = (function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__80185 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(schema);
if((G__80185 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__80185);
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var and__5140__auto__ = (property == null);
if(and__5140__auto__){
return logseq.api.block.infer_property_type(value);
} else {
return and__5140__auto__;
}
}
}
})();
var cardinality_80387 = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("many",new cljs.core.Keyword(null,"cardinality","cardinality",-104971109).cljs$core$IFn$_invoke$arity$1(schema))) || (cljs.core.sequential_QMARK_(value)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cardinality","cardinality",-104971109).cljs$core$IFn$_invoke$arity$1(schema),"one")))){
return new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234);
} else {
return new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190);
}
}
})();
var __80388 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cardinality_80387,new cljs.core.Keyword(null,"many","many",1092119164))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_type_80386,new cljs.core.Keyword(null,"json","json",1279968570)))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(":json type doesn't support multiple values",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_ident], null))})():null);
var error_data_80389 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id,new cljs.core.Keyword(null,"property-ident","property-ident",697145839),property_ident,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"value","value",305978217),value], null);
var schema_SINGLEQUOTE__80390 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),property_type_80386,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),cardinality_80387], null);
var many_QMARK__80391 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cardinality_80387,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
var value_SINGLEQUOTE__80392 = ((((many_QMARK__80391) && ((!(cljs.core.sequential_QMARK_(value))))))?(cljs.core.truth_(value)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null):null):value);
if(cljs.core.truth_((function (){var and__5140__auto__ = property;
if(cljs.core.truth_(and__5140__auto__)){
return schema;
} else {
return and__5140__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Use `upsert_property` to modify existing property's schema",error_data_80389);
} else {
}

if(cljs.core.truth_(property_type_80386)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Missing `type` in schema for property: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_id)),error_data_80389);
}

if((((!(many_QMARK__80391))) && (cljs.core.sequential_QMARK_(value)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("Property %s has cardinality `one` but passed multiple values",property_id) : frontend.util.format.call(null,"Property %s has cardinality `one` but passed multiple values",property_id)),error_data_80389);
} else {
}

if(cljs.core.truth_(property)){
} else {
logseq.api.block.ensure_property_upsert_control(plugin,property_ident,property_id);

frontend.modules.outliner.op.upsert_property_BANG_(property_ident,schema_SINGLEQUOTE__80390,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-name","property-name",-1399851434),property_id], null));
}

if(cljs.core.truth_((function (){var and__5140__auto__ = property;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = (function (){var and__5140__auto____$1 = many_QMARK__80391;
if(and__5140__auto____$1){
return reset_property_values;
} else {
return and__5140__auto____$1;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (value_SINGLEQUOTE__80392 == null);
}
} else {
return and__5140__auto__;
}
})())){
frontend.modules.outliner.op.remove_block_property_BANG_(block_id,property_ident);
} else {
}

var set_property_BANG__80397 = ((function (seq__80102,chunk__80103,count__80104,i__80105,property_type_80386,cardinality_80387,__80388,error_data_80389,schema_SINGLEQUOTE__80390,many_QMARK__80391,value_SINGLEQUOTE__80392,vec__80178,property_id,property_ident,value,schema,property,seq__80102__$1,temp__5825__auto__,test_QMARK___61309__auto__,ops__61310__auto__,editor_info__61311__auto__,map__80097,map__80097__$1,page_id,reset_property_values,entity_id_QMARK_){
return (function (value__$1){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),property_type_80386)) && ((!((value__$1 == null)))))){
return frontend.modules.outliner.op.batch_set_property_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),property_ident,value__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),entity_id_QMARK_ === true], null));
} else {
return frontend.modules.outliner.op.set_block_property_BANG_(block_id,property_ident,logseq.api.block.convert_json_and_string(property_type_80386,value__$1));
}
});})(seq__80102,chunk__80103,count__80104,i__80105,property_type_80386,cardinality_80387,__80388,error_data_80389,schema_SINGLEQUOTE__80390,many_QMARK__80391,value_SINGLEQUOTE__80392,vec__80178,property_id,property_ident,value,schema,property,seq__80102__$1,temp__5825__auto__,test_QMARK___61309__auto__,ops__61310__auto__,editor_info__61311__auto__,map__80097,map__80097__$1,page_id,reset_property_values,entity_id_QMARK_))
;
var values_80398 = ((cljs.core.sequential_QMARK_(value_SINGLEQUOTE__80392))?value_SINGLEQUOTE__80392:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_SINGLEQUOTE__80392], null));
var seq__80193_80399 = cljs.core.seq(values_80398);
var chunk__80194_80400 = null;
var count__80195_80401 = (0);
var i__80196_80402 = (0);
while(true){
if((i__80196_80402 < count__80195_80401)){
var value_80403__$1 = chunk__80194_80400.cljs$core$IIndexed$_nth$arity$2(null,i__80196_80402);
set_property_BANG__80397(value_80403__$1);


var G__80404 = seq__80193_80399;
var G__80405 = chunk__80194_80400;
var G__80406 = count__80195_80401;
var G__80407 = (i__80196_80402 + (1));
seq__80193_80399 = G__80404;
chunk__80194_80400 = G__80405;
count__80195_80401 = G__80406;
i__80196_80402 = G__80407;
continue;
} else {
var temp__5825__auto___80408__$1 = cljs.core.seq(seq__80193_80399);
if(temp__5825__auto___80408__$1){
var seq__80193_80409__$1 = temp__5825__auto___80408__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80193_80409__$1)){
var c__5673__auto___80410 = cljs.core.chunk_first(seq__80193_80409__$1);
var G__80411 = cljs.core.chunk_rest(seq__80193_80409__$1);
var G__80412 = c__5673__auto___80410;
var G__80413 = cljs.core.count(c__5673__auto___80410);
var G__80414 = (0);
seq__80193_80399 = G__80411;
chunk__80194_80400 = G__80412;
count__80195_80401 = G__80413;
i__80196_80402 = G__80414;
continue;
} else {
var value_80415__$1 = cljs.core.first(seq__80193_80409__$1);
set_property_BANG__80397(value_80415__$1);


var G__80416 = cljs.core.next(seq__80193_80409__$1);
var G__80417 = null;
var G__80418 = (0);
var G__80419 = (0);
seq__80193_80399 = G__80416;
chunk__80194_80400 = G__80417;
count__80195_80401 = G__80418;
i__80196_80402 = G__80419;
continue;
}
} else {
}
}
break;
}


var G__80420 = cljs.core.next(seq__80102__$1);
var G__80421 = null;
var G__80422 = (0);
var G__80423 = (0);
seq__80102 = G__80420;
chunk__80103 = G__80421;
count__80104 = G__80422;
i__80105 = G__80423;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var _STAR_outliner_ops_STAR__orig_val__80198 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__80199 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__80199);

try{var seq__80202_80424 = cljs.core.seq(properties);
var chunk__80203_80425 = null;
var count__80204_80426 = (0);
var i__80205_80427 = (0);
while(true){
if((i__80205_80427 < count__80204_80426)){
var vec__80245_80428 = chunk__80203_80425.cljs$core$IIndexed$_nth$arity$2(null,i__80205_80427);
var property_id_80429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80245_80428,(0),null);
var property_ident_80430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80245_80428,(1),null);
var value_80431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80245_80428,(2),null);
var schema_80432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80245_80428,(3),null);
var property_80433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80245_80428,(4),null);
if(cljs.core.qualified_keyword_QMARK_(property_ident_80430)){
} else {
console.error((""+"Invalid property id: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_id_80429)));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid property id",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id_80429,new cljs.core.Keyword(null,"property-ident","property-ident",697145839),property_ident_80430], null));
}

var property_type_80437 = (function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property_80433);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__80251 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(schema_80432);
if((G__80251 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__80251);
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var and__5140__auto__ = (property_80433 == null);
if(and__5140__auto__){
return logseq.api.block.infer_property_type(value_80431);
} else {
return and__5140__auto__;
}
}
}
})();
var cardinality_80438 = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(property_80433);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("many",new cljs.core.Keyword(null,"cardinality","cardinality",-104971109).cljs$core$IFn$_invoke$arity$1(schema_80432))) || (cljs.core.sequential_QMARK_(value_80431)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cardinality","cardinality",-104971109).cljs$core$IFn$_invoke$arity$1(schema_80432),"one")))){
return new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234);
} else {
return new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190);
}
}
})();
var __80439 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cardinality_80438,new cljs.core.Keyword(null,"many","many",1092119164))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_type_80437,new cljs.core.Keyword(null,"json","json",1279968570)))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(":json type doesn't support multiple values",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_ident_80430], null))})():null);
var error_data_80440 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id_80429,new cljs.core.Keyword(null,"property-ident","property-ident",697145839),property_ident_80430,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema_80432,new cljs.core.Keyword(null,"value","value",305978217),value_80431], null);
var schema_SINGLEQUOTE__80441 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),property_type_80437,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),cardinality_80438], null);
var many_QMARK__80442 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cardinality_80438,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
var value_SINGLEQUOTE__80443 = ((((many_QMARK__80442) && ((!(cljs.core.sequential_QMARK_(value_80431))))))?(cljs.core.truth_(value_80431)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_80431], null):null):value_80431);
if(cljs.core.truth_((function (){var and__5140__auto__ = property_80433;
if(cljs.core.truth_(and__5140__auto__)){
return schema_80432;
} else {
return and__5140__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Use `upsert_property` to modify existing property's schema",error_data_80440);
} else {
}

if(cljs.core.truth_(property_type_80437)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Missing `type` in schema for property: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_id_80429)),error_data_80440);
}

if((((!(many_QMARK__80442))) && (cljs.core.sequential_QMARK_(value_80431)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("Property %s has cardinality `one` but passed multiple values",property_id_80429) : frontend.util.format.call(null,"Property %s has cardinality `one` but passed multiple values",property_id_80429)),error_data_80440);
} else {
}

if(cljs.core.truth_(property_80433)){
} else {
logseq.api.block.ensure_property_upsert_control(plugin,property_ident_80430,property_id_80429);

frontend.modules.outliner.op.upsert_property_BANG_(property_ident_80430,schema_SINGLEQUOTE__80441,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-name","property-name",-1399851434),property_id_80429], null));
}

if(cljs.core.truth_((function (){var and__5140__auto__ = property_80433;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = (function (){var and__5140__auto____$1 = many_QMARK__80442;
if(and__5140__auto____$1){
return reset_property_values;
} else {
return and__5140__auto____$1;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (value_SINGLEQUOTE__80443 == null);
}
} else {
return and__5140__auto__;
}
})())){
frontend.modules.outliner.op.remove_block_property_BANG_(block_id,property_ident_80430);
} else {
}

var set_property_BANG__80445 = ((function (seq__80202_80424,chunk__80203_80425,count__80204_80426,i__80205_80427,property_type_80437,cardinality_80438,__80439,error_data_80440,schema_SINGLEQUOTE__80441,many_QMARK__80442,value_SINGLEQUOTE__80443,vec__80245_80428,property_id_80429,property_ident_80430,value_80431,schema_80432,property_80433,_STAR_outliner_ops_STAR__orig_val__80198,_STAR_outliner_ops_STAR__temp_val__80199,test_QMARK___61309__auto__,ops__61310__auto__,editor_info__61311__auto__,map__80097,map__80097__$1,page_id,reset_property_values,entity_id_QMARK_){
return (function (value__$1){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),property_type_80437)) && ((!((value__$1 == null)))))){
return frontend.modules.outliner.op.batch_set_property_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),property_ident_80430,value__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),entity_id_QMARK_ === true], null));
} else {
return frontend.modules.outliner.op.set_block_property_BANG_(block_id,property_ident_80430,logseq.api.block.convert_json_and_string(property_type_80437,value__$1));
}
});})(seq__80202_80424,chunk__80203_80425,count__80204_80426,i__80205_80427,property_type_80437,cardinality_80438,__80439,error_data_80440,schema_SINGLEQUOTE__80441,many_QMARK__80442,value_SINGLEQUOTE__80443,vec__80245_80428,property_id_80429,property_ident_80430,value_80431,schema_80432,property_80433,_STAR_outliner_ops_STAR__orig_val__80198,_STAR_outliner_ops_STAR__temp_val__80199,test_QMARK___61309__auto__,ops__61310__auto__,editor_info__61311__auto__,map__80097,map__80097__$1,page_id,reset_property_values,entity_id_QMARK_))
;
var values_80446 = ((cljs.core.sequential_QMARK_(value_SINGLEQUOTE__80443))?value_SINGLEQUOTE__80443:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_SINGLEQUOTE__80443], null));
var seq__80258_80447 = cljs.core.seq(values_80446);
var chunk__80259_80448 = null;
var count__80260_80449 = (0);
var i__80261_80450 = (0);
while(true){
if((i__80261_80450 < count__80260_80449)){
var value_80451__$1 = chunk__80259_80448.cljs$core$IIndexed$_nth$arity$2(null,i__80261_80450);
set_property_BANG__80445(value_80451__$1);


var G__80452 = seq__80258_80447;
var G__80453 = chunk__80259_80448;
var G__80454 = count__80260_80449;
var G__80455 = (i__80261_80450 + (1));
seq__80258_80447 = G__80452;
chunk__80259_80448 = G__80453;
count__80260_80449 = G__80454;
i__80261_80450 = G__80455;
continue;
} else {
var temp__5825__auto___80456 = cljs.core.seq(seq__80258_80447);
if(temp__5825__auto___80456){
var seq__80258_80457__$1 = temp__5825__auto___80456;
if(cljs.core.chunked_seq_QMARK_(seq__80258_80457__$1)){
var c__5673__auto___80458 = cljs.core.chunk_first(seq__80258_80457__$1);
var G__80459 = cljs.core.chunk_rest(seq__80258_80457__$1);
var G__80460 = c__5673__auto___80458;
var G__80461 = cljs.core.count(c__5673__auto___80458);
var G__80462 = (0);
seq__80258_80447 = G__80459;
chunk__80259_80448 = G__80460;
count__80260_80449 = G__80461;
i__80261_80450 = G__80462;
continue;
} else {
var value_80463__$1 = cljs.core.first(seq__80258_80457__$1);
set_property_BANG__80445(value_80463__$1);


var G__80464 = cljs.core.next(seq__80258_80457__$1);
var G__80465 = null;
var G__80466 = (0);
var G__80467 = (0);
seq__80258_80447 = G__80464;
chunk__80259_80448 = G__80465;
count__80260_80449 = G__80466;
i__80261_80450 = G__80467;
continue;
}
} else {
}
}
break;
}


var G__80468 = seq__80202_80424;
var G__80469 = chunk__80203_80425;
var G__80470 = count__80204_80426;
var G__80471 = (i__80205_80427 + (1));
seq__80202_80424 = G__80468;
chunk__80203_80425 = G__80469;
count__80204_80426 = G__80470;
i__80205_80427 = G__80471;
continue;
} else {
var temp__5825__auto___80472 = cljs.core.seq(seq__80202_80424);
if(temp__5825__auto___80472){
var seq__80202_80473__$1 = temp__5825__auto___80472;
if(cljs.core.chunked_seq_QMARK_(seq__80202_80473__$1)){
var c__5673__auto___80474 = cljs.core.chunk_first(seq__80202_80473__$1);
var G__80475 = cljs.core.chunk_rest(seq__80202_80473__$1);
var G__80476 = c__5673__auto___80474;
var G__80477 = cljs.core.count(c__5673__auto___80474);
var G__80478 = (0);
seq__80202_80424 = G__80475;
chunk__80203_80425 = G__80476;
count__80204_80426 = G__80477;
i__80205_80427 = G__80478;
continue;
} else {
var vec__80269_80479 = cljs.core.first(seq__80202_80473__$1);
var property_id_80480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80269_80479,(0),null);
var property_ident_80481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80269_80479,(1),null);
var value_80482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80269_80479,(2),null);
var schema_80483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80269_80479,(3),null);
var property_80484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80269_80479,(4),null);
if(cljs.core.qualified_keyword_QMARK_(property_ident_80481)){
} else {
console.error((""+"Invalid property id: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_id_80480)));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid property id",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id_80480,new cljs.core.Keyword(null,"property-ident","property-ident",697145839),property_ident_80481], null));
}

var property_type_80485 = (function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property_80484);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__80275 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(schema_80483);
if((G__80275 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__80275);
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var and__5140__auto__ = (property_80484 == null);
if(and__5140__auto__){
return logseq.api.block.infer_property_type(value_80482);
} else {
return and__5140__auto__;
}
}
}
})();
var cardinality_80486 = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(property_80484);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("many",new cljs.core.Keyword(null,"cardinality","cardinality",-104971109).cljs$core$IFn$_invoke$arity$1(schema_80483))) || (cljs.core.sequential_QMARK_(value_80482)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cardinality","cardinality",-104971109).cljs$core$IFn$_invoke$arity$1(schema_80483),"one")))){
return new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234);
} else {
return new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190);
}
}
})();
var __80487 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cardinality_80486,new cljs.core.Keyword(null,"many","many",1092119164))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_type_80485,new cljs.core.Keyword(null,"json","json",1279968570)))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(":json type doesn't support multiple values",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_ident_80481], null))})():null);
var error_data_80488 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id_80480,new cljs.core.Keyword(null,"property-ident","property-ident",697145839),property_ident_80481,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema_80483,new cljs.core.Keyword(null,"value","value",305978217),value_80482], null);
var schema_SINGLEQUOTE__80489 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),property_type_80485,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),cardinality_80486], null);
var many_QMARK__80490 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cardinality_80486,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
var value_SINGLEQUOTE__80491 = ((((many_QMARK__80490) && ((!(cljs.core.sequential_QMARK_(value_80482))))))?(cljs.core.truth_(value_80482)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_80482], null):null):value_80482);
if(cljs.core.truth_((function (){var and__5140__auto__ = property_80484;
if(cljs.core.truth_(and__5140__auto__)){
return schema_80483;
} else {
return and__5140__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Use `upsert_property` to modify existing property's schema",error_data_80488);
} else {
}

if(cljs.core.truth_(property_type_80485)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Missing `type` in schema for property: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_id_80480)),error_data_80488);
}

if((((!(many_QMARK__80490))) && (cljs.core.sequential_QMARK_(value_80482)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((frontend.util.format.cljs$core$IFn$_invoke$arity$2 ? frontend.util.format.cljs$core$IFn$_invoke$arity$2("Property %s has cardinality `one` but passed multiple values",property_id_80480) : frontend.util.format.call(null,"Property %s has cardinality `one` but passed multiple values",property_id_80480)),error_data_80488);
} else {
}

if(cljs.core.truth_(property_80484)){
} else {
logseq.api.block.ensure_property_upsert_control(plugin,property_ident_80481,property_id_80480);

frontend.modules.outliner.op.upsert_property_BANG_(property_ident_80481,schema_SINGLEQUOTE__80489,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-name","property-name",-1399851434),property_id_80480], null));
}

if(cljs.core.truth_((function (){var and__5140__auto__ = property_80484;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = (function (){var and__5140__auto____$1 = many_QMARK__80490;
if(and__5140__auto____$1){
return reset_property_values;
} else {
return and__5140__auto____$1;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (value_SINGLEQUOTE__80491 == null);
}
} else {
return and__5140__auto__;
}
})())){
frontend.modules.outliner.op.remove_block_property_BANG_(block_id,property_ident_80481);
} else {
}

var set_property_BANG__80492 = ((function (seq__80202_80424,chunk__80203_80425,count__80204_80426,i__80205_80427,property_type_80485,cardinality_80486,__80487,error_data_80488,schema_SINGLEQUOTE__80489,many_QMARK__80490,value_SINGLEQUOTE__80491,vec__80269_80479,property_id_80480,property_ident_80481,value_80482,schema_80483,property_80484,seq__80202_80473__$1,temp__5825__auto___80472,_STAR_outliner_ops_STAR__orig_val__80198,_STAR_outliner_ops_STAR__temp_val__80199,test_QMARK___61309__auto__,ops__61310__auto__,editor_info__61311__auto__,map__80097,map__80097__$1,page_id,reset_property_values,entity_id_QMARK_){
return (function (value__$1){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),property_type_80485)) && ((!((value__$1 == null)))))){
return frontend.modules.outliner.op.batch_set_property_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_id], null),property_ident_80481,value__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),entity_id_QMARK_ === true], null));
} else {
return frontend.modules.outliner.op.set_block_property_BANG_(block_id,property_ident_80481,logseq.api.block.convert_json_and_string(property_type_80485,value__$1));
}
});})(seq__80202_80424,chunk__80203_80425,count__80204_80426,i__80205_80427,property_type_80485,cardinality_80486,__80487,error_data_80488,schema_SINGLEQUOTE__80489,many_QMARK__80490,value_SINGLEQUOTE__80491,vec__80269_80479,property_id_80480,property_ident_80481,value_80482,schema_80483,property_80484,seq__80202_80473__$1,temp__5825__auto___80472,_STAR_outliner_ops_STAR__orig_val__80198,_STAR_outliner_ops_STAR__temp_val__80199,test_QMARK___61309__auto__,ops__61310__auto__,editor_info__61311__auto__,map__80097,map__80097__$1,page_id,reset_property_values,entity_id_QMARK_))
;
var values_80493 = ((cljs.core.sequential_QMARK_(value_SINGLEQUOTE__80491))?value_SINGLEQUOTE__80491:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_SINGLEQUOTE__80491], null));
var seq__80280_80494 = cljs.core.seq(values_80493);
var chunk__80281_80495 = null;
var count__80282_80496 = (0);
var i__80283_80497 = (0);
while(true){
if((i__80283_80497 < count__80282_80496)){
var value_80498__$1 = chunk__80281_80495.cljs$core$IIndexed$_nth$arity$2(null,i__80283_80497);
set_property_BANG__80492(value_80498__$1);


var G__80499 = seq__80280_80494;
var G__80500 = chunk__80281_80495;
var G__80501 = count__80282_80496;
var G__80502 = (i__80283_80497 + (1));
seq__80280_80494 = G__80499;
chunk__80281_80495 = G__80500;
count__80282_80496 = G__80501;
i__80283_80497 = G__80502;
continue;
} else {
var temp__5825__auto___80503__$1 = cljs.core.seq(seq__80280_80494);
if(temp__5825__auto___80503__$1){
var seq__80280_80504__$1 = temp__5825__auto___80503__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80280_80504__$1)){
var c__5673__auto___80505 = cljs.core.chunk_first(seq__80280_80504__$1);
var G__80506 = cljs.core.chunk_rest(seq__80280_80504__$1);
var G__80507 = c__5673__auto___80505;
var G__80508 = cljs.core.count(c__5673__auto___80505);
var G__80509 = (0);
seq__80280_80494 = G__80506;
chunk__80281_80495 = G__80507;
count__80282_80496 = G__80508;
i__80283_80497 = G__80509;
continue;
} else {
var value_80510__$1 = cljs.core.first(seq__80280_80504__$1);
set_property_BANG__80492(value_80510__$1);


var G__80511 = cljs.core.next(seq__80280_80504__$1);
var G__80512 = null;
var G__80513 = (0);
var G__80514 = (0);
seq__80280_80494 = G__80511;
chunk__80281_80495 = G__80512;
count__80282_80496 = G__80513;
i__80283_80497 = G__80514;
continue;
}
} else {
}
}
break;
}


var G__80515 = cljs.core.next(seq__80202_80473__$1);
var G__80516 = null;
var G__80517 = (0);
var G__80518 = (0);
seq__80202_80424 = G__80515;
chunk__80203_80425 = G__80516;
count__80204_80426 = G__80517;
i__80205_80427 = G__80518;
continue;
}
} else {
}
}
break;
}

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"set-block-properties","set-block-properties",-1338069568),new cljs.core.Keyword("ui","page-id","ui/page-id",-872945956),page_id], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__80198);
}}
});
logseq.api.block.db_based_save_block_properties_BANG_ = (function logseq$api$block$db_based_save_block_properties_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___80519 = arguments.length;
var i__5877__auto___80520 = (0);
while(true){
if((i__5877__auto___80520 < len__5876__auto___80519)){
args__5882__auto__.push((arguments[i__5877__auto___80520]));

var G__80521 = (i__5877__auto___80520 + (1));
i__5877__auto___80520 = G__80521;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.api.block.db_based_save_block_properties_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.api.block.db_based_save_block_properties_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (block,properties,p__80292){
var map__80293 = p__80292;
var map__80293__$1 = cljs.core.__destructure_map(map__80293);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80293__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var plugin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80293__$1,new cljs.core.Keyword(null,"plugin","plugin",-1688841923));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80293__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var reset_property_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80293__$1,new cljs.core.Keyword(null,"reset-property-values","reset-property-values",-1471461256));
var entity_id_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80293__$1,new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382));
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.seq(properties);
if(and__5140__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var block_id = temp__5825__auto__;
var properties__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__80297){
var vec__80298 = p__80297;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80298,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80298,(1),null);
var ident = logseq.api.block.get_db_ident_from_property_name(k,plugin);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,ident,v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)], null);
}),properties);
var property_idents = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,properties__$1);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_blocks.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),property_idents,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (property_results){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p__80301,result){
var vec__80302 = p__80301;
var property_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80302,(0),null);
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80302,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80302,(2),null);
var property_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80302,(3),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [property_id,ident,value,property_schema,new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(result)], null);
}),properties__$1,(function (){var or__5142__auto__ = property_results;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())),(function (properties__$2){
return promesa.protocols._promise(logseq.api.block.set_block_properties_BANG_(plugin,block_id,properties__$2,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"reset-property-values","reset-property-values",-1471461256),reset_property_values,new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),entity_id_QMARK_], null)));
}));
}));
}));
} else {
return null;
}
}));

(logseq.api.block.db_based_save_block_properties_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.api.block.db_based_save_block_properties_BANG_.cljs$lang$applyTo = (function (seq80288){
var G__80289 = cljs.core.first(seq80288);
var seq80288__$1 = cljs.core.next(seq80288);
var G__80290 = cljs.core.first(seq80288__$1);
var seq80288__$2 = cljs.core.next(seq80288__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80289,G__80290,seq80288__$2);
}));

logseq.api.block._LT_sync_children_blocks_BANG_ = (function logseq$api$block$_LT_sync_children_blocks_BANG_(block){
if(cljs.core.truth_(block)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_parent(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))),(function (parent){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(temp__5825__auto__)){
var parent_uuid = temp__5825__auto__;
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(frontend.state.get_current_repo(),parent_uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),true], null)], 0));
} else {
return null;
}
})());
}));
}));
} else {
return null;
}
});
logseq.api.block.immediate_children = (function logseq$api$block$immediate_children(block,children){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__80308_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__80308_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)));
}),children);
});
logseq.api.block.compact_normalized_refs = (function logseq$api$block$compact_normalized_refs(block){
var G__80318 = block;
var G__80318__$1 = ((cljs.core.contains_QMARK_(block,"refs"))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__80318,"refs",(function (p1__80310_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ref){
return cljs.core.select_keys(ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["id"], null));
}),p1__80310_SHARP_);
})):G__80318);
if(cljs.core.truth_(new cljs.core.Keyword(null,"refs","refs",-1560051448).cljs$core$IFn$_invoke$arity$1(block))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__80318__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448),(function (p1__80314_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ref){
return cljs.core.select_keys(ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null));
}),p1__80314_SHARP_);
}));
} else {
return G__80318__$1;
}
});
logseq.api.block.get_block = (function logseq$api$block$get_block(id_or_uuid,opts){
if(cljs.core.truth_(id_or_uuid)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts)),(function (p__80325){
var map__80326 = p__80325;
var map__80326__$1 = cljs.core.__destructure_map(map__80326);
var includeChildren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80326__$1,new cljs.core.Keyword(null,"includeChildren","includeChildren",-941062106));
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(((typeof id_or_uuid === 'number')?id_or_uuid:((cljs.core.uuid_QMARK_(id_or_uuid))?id_or_uuid:logseq.sdk.utils.uuid_or_throw_error(id_or_uuid)
))),(function (id){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(includeChildren)?frontend.db.async._LT_get_block_with_children.cljs$core$IFn$_invoke$arity$variadic(repo,id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children?","children?",-1199594108),true,new cljs.core.Keyword(null,"include-collapsed-children?","include-collapsed-children?",2120012437),true], null)], 0)):promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0))),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(block)?frontend.db.async._LT_get_block_immediate_children(repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)):null)),(function (children){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
}));
}));
})))),(function (p__80327){
var map__80328 = p__80327;
var map__80328__$1 = cljs.core.__destructure_map(map__80328);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80328__$1,new cljs.core.Keyword(null,"block","block",664686210));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80328__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return (((function (){var G__80329 = opts;
if((G__80329 == null)){
return null;
} else {
return G__80329.includePage;
}
})() === true) || ((!(cljs.core.contains_QMARK_(block,new cljs.core.Keyword("block","name","block/name",1619760316))))));
} else {
return and__5140__auto__;
}
})())?(function (){var block__$1 = (cljs.core.truth_(includeChildren)?cljs.core.first(frontend.modules.outliner.tree.blocks__GT_vec_tree(cljs.core.cons(block,children),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80324_SHARP_){
return (new cljs.core.List(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(new cljs.core.List(null,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__80324_SHARP_),null,(1),null)),(2),null));
}),logseq.api.block.immediate_children(block,children))));
return cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(logseq.api.block.compact_normalized_refs(logseq.sdk.utils.normalize_keyword_for_json.cljs$core$IFn$_invoke$arity$1(block__$1)));
})():null));
}));
}));
}));
}));
}));
} else {
return null;
}
});

//# sourceMappingURL=logseq.api.block.js.map
