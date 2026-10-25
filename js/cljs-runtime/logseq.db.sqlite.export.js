goog.provide('logseq.db.sqlite.export$');
logseq.db.sqlite.export$.__GT_build_tags = (function logseq$db$sqlite$export$__GT_build_tags(block_tags){
return cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),null,new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),block_tags)));
});
/**
 * Get an entity's original title
 */
logseq.db.sqlite.export$.block_title = (function logseq$db$sqlite$export$block_title(ent){
var or__5142__auto__ = new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(ent);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ent);
}
});
logseq.db.sqlite.export$.property_value_content = (function logseq$db$sqlite$export$property_value_content(pvalue){
var or__5142__auto__ = logseq.db.sqlite.export$.block_title(pvalue);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865).cljs$core$IFn$_invoke$arity$1(pvalue);
}
});
logseq.db.sqlite.export$.referenced_property_value_contents = (function logseq$db$sqlite$export$referenced_property_value_contents(db,property){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(property))){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (datom){
var G__58789 = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
var G__58789__$1 = (((G__58789 == null))?null:(datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,G__58789) : datascript.core.entity.call(null,db,G__58789)));
if((G__58789__$1 == null)){
return null;
} else {
return logseq.db.sqlite.export$.property_value_content(G__58789__$1);
}
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property))));
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
logseq.db.sqlite.export$.closed_values_for_export = (function logseq$db$sqlite$export$closed_values_for_export(db,property){
var referenced_contents = logseq.db.sqlite.export$.referenced_property_value_contents(db,property);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (closed_values,value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(closed_values,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value),value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(logseq.db.common.entity_plus.lookup_kv_then_entity.cljs$core$IFn$_invoke$arity$2(property,new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58790_SHARP_){
return cljs.core.contains_QMARK_(referenced_contents,logseq.db.sqlite.export$.property_value_content(p1__58790_SHARP_));
}),new cljs.core.Keyword("block","_closed-value-property","block/_closed-value-property",-1361451442).cljs$core$IFn$_invoke$arity$1(property))))));
});
/**
 * Given a page or journal entity, shallow copies it e.g. no properties or tags info included.
 * Pages that are shallow copied are at the edges of export and help keep the export size reasonable and
 * avoid exporting unexpected info
 */
logseq.db.sqlite.export$.shallow_copy_page = (function logseq$db$sqlite$export$shallow_copy_page(page_entity){
if(cljs.core.truth_(logseq.db.frontend.entity_util.journal_QMARK_(page_entity))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("build","journal","build/journal",1781180096),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page_entity)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","title","block/title",710445684),logseq.db.sqlite.export$.block_title(page_entity)], null);
}
});
logseq.db.sqlite.export$.build_pvalue_entity_for_build_page = (function logseq$db$sqlite$export$build_pvalue_entity_for_build_page(pvalue){
if(cljs.core.truth_(logseq.db.frontend.entity_util.internal_page_QMARK_(pvalue))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","page","build/page",822051483),(function (){var G__58794 = logseq.db.sqlite.export$.shallow_copy_page(pvalue);
if(cljs.core.seq(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(pvalue))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58794,new cljs.core.Keyword("build","tags","build/tags",1814686611),logseq.db.sqlite.export$.__GT_build_tags(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(pvalue)));
} else {
return G__58794;
}
})()], null);
} else {
if(cljs.core.truth_(logseq.db.frontend.entity_util.journal_QMARK_(pvalue))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","page","build/page",822051483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("build","journal","build/journal",1781180096),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(pvalue)], null)], null);
} else {
return null;
}
}
});
logseq.db.sqlite.export$.build_pvalue_entity_default = (function logseq$db$sqlite$export$build_pvalue_entity_default(ent_properties,build_children,pvalue,p__58795){
var map__58796 = p__58795;
var map__58796__$1 = cljs.core.__destructure_map(map__58796);
var options = map__58796__$1;
var include_pvalue_uuid_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58796__$1,new cljs.core.Keyword(null,"include-pvalue-uuid-fn","include-pvalue-uuid-fn",-1252023763),cljs.core.constantly(false));
var property_value_content_SINGLEQUOTE_ = logseq.db.sqlite.export$.property_value_content(pvalue);
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.seq(ent_properties);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.seq(build_children);
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = cljs.core.seq(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(pvalue));
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
var G__58797 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(pvalue);
return (include_pvalue_uuid_fn.cljs$core$IFn$_invoke$arity$1 ? include_pvalue_uuid_fn.cljs$core$IFn$_invoke$arity$1(G__58797) : include_pvalue_uuid_fn.call(null,G__58797));
}
}
}
})())){
var G__58798 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("build","property-value","build/property-value",1425188701),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","title","block/title",710445684),property_value_content_SINGLEQUOTE_], null);
var G__58798__$1 = ((cljs.core.seq(build_children))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58798,new cljs.core.Keyword("build","children","build/children",-1040452432),build_children):G__58798);
var G__58798__$2 = ((cljs.core.seq(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(pvalue)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58798__$1,new cljs.core.Keyword("build","tags","build/tags",1814686611),logseq.db.sqlite.export$.__GT_build_tags(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(pvalue))):G__58798__$1);
var G__58798__$3 = ((cljs.core.seq(ent_properties))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58798__$2,new cljs.core.Keyword("build","properties","build/properties",708607786),ent_properties):G__58798__$2);
var G__58798__$4 = (cljs.core.truth_((function (){var G__58799 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(pvalue);
return (include_pvalue_uuid_fn.cljs$core$IFn$_invoke$arity$1 ? include_pvalue_uuid_fn.cljs$core$IFn$_invoke$arity$1(G__58799) : include_pvalue_uuid_fn.call(null,G__58799));
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__58798__$3,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(pvalue),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954),true], 0)):G__58798__$3);
if(cljs.core.truth_(new cljs.core.Keyword(null,"include-timestamps?","include-timestamps?",158216918).cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__58798__$4,cljs.core.select_keys(pvalue,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], null))], 0));
} else {
return G__58798__$4;
}
} else {
return property_value_content_SINGLEQUOTE_;
}
});
if((typeof logseq !== 'undefined') && (typeof logseq.db !== 'undefined') && (typeof logseq.db.sqlite !== 'undefined') && (typeof logseq.db.sqlite.export$ !== 'undefined') && (typeof logseq.db.sqlite.export$.ignored_properties !== 'undefined')){
} else {
logseq.db.sqlite.export$.ignored_properties = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property","created-by-ref","logseq.property/created-by-ref",854433908),new cljs.core.Keyword("logseq.property.embedding","hnsw-label-updated-at","logseq.property.embedding/hnsw-label-updated-at",1339611305)], null);
}
/**
 * Originally copied from db-test/readable-properties. Modified so that property values are
 * valid sqlite.build EDN
 */
logseq.db.sqlite.export$.buildable_properties = (function logseq$db$sqlite$export$buildable_properties(db,ent_properties,properties_config,options){
var build_pvalue_entity = (function logseq$db$sqlite$export$buildable_properties_$_build_pvalue_entity(db_SINGLEQUOTE_,property_ent,pvalue,properties_config_SINGLEQUOTE_,p__58808){
var map__58809 = p__58808;
var map__58809__$1 = cljs.core.__destructure_map(map__58809);
var options_SINGLEQUOTE_ = map__58809__$1;
var property_value_uuids_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58809__$1,new cljs.core.Keyword(null,"property-value-uuids?","property-value-uuids?",-339905445));
var temp__5823__auto__ = (function (){var and__5140__auto__ = cljs.core.not(property_value_uuids_QMARK_);
if(and__5140__auto__){
return logseq.db.sqlite.export$.build_pvalue_entity_for_build_page(pvalue);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var build_page = temp__5823__auto__;
return build_page;
} else {
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"entity","entity",-450970276),null], null), null),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property_ent))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property_ent))))){
if(cljs.core.truth_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(pvalue))){
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(pvalue);
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(pvalue)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.db.sqlite.export","existing-property-value?","logseq.db.sqlite.export/existing-property-value?",-2009560134),true], null));
}
} else {
var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(pvalue);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var ent_properties_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.dissoc,logseq.db.frontend.property.properties(pvalue),new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865),new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267),logseq.db.frontend.property.public_db_attribute_properties);
var child_blocks = cljs.core.rest(logseq.db.get_block_and_children(db_SINGLEQUOTE_,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(pvalue)));
var build_children = ((cljs.core.seq(child_blocks))?new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1((function (){var G__58812 = db_SINGLEQUOTE_;
var G__58813 = child_blocks;
var G__58814 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options_SINGLEQUOTE_,new cljs.core.Keyword(null,"include-uuid-fn","include-uuid-fn",-291819511),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-pvalue-uuid-fn","include-pvalue-uuid-fn",-1252023763)], 0));
return (logseq.db.sqlite.export$.build_blocks_export.cljs$core$IFn$_invoke$arity$3 ? logseq.db.sqlite.export$.build_blocks_export.cljs$core$IFn$_invoke$arity$3(G__58812,G__58813,G__58814) : logseq.db.sqlite.export$.build_blocks_export.call(null,G__58812,G__58813,G__58814));
})()):null);
var ent_properties__$1 = ((((cljs.core.not(new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813).cljs$core$IFn$_invoke$arity$1(pvalue))) && (cljs.core.seq(ent_properties_STAR_))))?(logseq.db.sqlite.export$.buildable_properties.cljs$core$IFn$_invoke$arity$4 ? logseq.db.sqlite.export$.buildable_properties.cljs$core$IFn$_invoke$arity$4(db_SINGLEQUOTE_,ent_properties_STAR_,properties_config_SINGLEQUOTE_,options_SINGLEQUOTE_) : logseq.db.sqlite.export$.buildable_properties.call(null,db_SINGLEQUOTE_,ent_properties_STAR_,properties_config_SINGLEQUOTE_,options_SINGLEQUOTE_)):null);
return logseq.db.sqlite.export$.build_pvalue_entity_default(ent_properties__$1,build_children,pvalue,options_SINGLEQUOTE_);
}
}
}
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58815){
var vec__58816 = p__58815;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58816,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58816,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_((function (){var and__5140__auto__ = (!(logseq.db.frontend.property.logseq_property_QMARK_(k)));
if(and__5140__auto__){
var or__5142__auto__ = new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto____$1 = cljs.core.set_QMARK_(v);
if(and__5140__auto____$1){
return new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813).cljs$core$IFn$_invoke$arity$1(cljs.core.first(v));
} else {
return and__5140__auto____$1;
}
}
} else {
return and__5140__auto__;
}
})())?(function (){var find_closed_uuid = (function (val){
var or__5142__auto__ = cljs.core.some((function (p1__58800_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__58800_SHARP_),logseq.db.frontend.property.property_value_content(val))){
return new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(p1__58800_SHARP_);
} else {
return null;
}
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(properties_config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("build","closed-values","build/closed-values",190285321)], null)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"No closed value found for content: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.frontend.property.property_value_content(val)], 0)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),properties_config], null));
}
});
if(cljs.core.set_QMARK_(v)){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58801_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),find_closed_uuid(p1__58801_SHARP_)],null));
}),v));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),find_closed_uuid(v)], null);
}
})():((datascript.impl.entity.entity_QMARK_(v))?build_pvalue_entity(db,(datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,k) : datascript.core.entity.call(null,db,k)),v,properties_config,options):((((cljs.core.set_QMARK_(v)) && (cljs.core.every_QMARK_(datascript.impl.entity.entity_QMARK_,v))))?(function (){var property_ent = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,k) : datascript.core.entity.call(null,db,k));
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58802_SHARP_){
return build_pvalue_entity(db,property_ent,p1__58802_SHARP_,properties_config,options);
}),v));
})():v
)))], null);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,ent_properties,logseq.db.sqlite.export$.ignored_properties)));
});
/**
 * The caller of this fn is responsible for building :build/:property-classes unless shallow-copy?
 */
logseq.db.sqlite.export$.build_export_properties = (function logseq$db$sqlite$export$build_export_properties(db,user_property_idents,p__58821){
var map__58822 = p__58821;
var map__58822__$1 = cljs.core.__destructure_map(map__58822);
var options = map__58822__$1;
var include_properties_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58822__$1,new cljs.core.Keyword(null,"include-properties?","include-properties?",1631601018));
var include_timestamps_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58822__$1,new cljs.core.Keyword(null,"include-timestamps?","include-timestamps?",158216918));
var include_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58822__$1,new cljs.core.Keyword(null,"include-uuid?","include-uuid?",-167629975));
var shallow_copy_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58822__$1,new cljs.core.Keyword(null,"shallow-copy?","shallow-copy?",-99881020));
var include_alias_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58822__$1,new cljs.core.Keyword(null,"include-alias?","include-alias?",746737871));
var properties_config_by_ent = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ident){
var property = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,ident) : datascript.core.entity.call(null,db,ident));
var closed_values = logseq.db.sqlite.export$.closed_values_for_export(db,property);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property,(function (){var G__58823 = cljs.core.select_keys(property,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.schema_properties,new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991)], null)));
var G__58823__$1 = (cljs.core.truth_(include_uuid_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__58823,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954),true], 0)):G__58823);
var G__58823__$2 = (cljs.core.truth_(include_timestamps_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__58823__$1,cljs.core.select_keys(property,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], null))], 0)):G__58823__$1);
var G__58823__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(shallow_copy_QMARK_);
if(and__5140__auto__){
var and__5140__auto____$1 = include_alias_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(property);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58823__$2,new cljs.core.Keyword("block","alias","block/alias",-2112644699),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58819_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__58819_SHARP_)],null));
}),new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(property)))):G__58823__$2);
var G__58823__$4 = (cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(shallow_copy_QMARK_);
if(and__5140__auto__){
return new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486).cljs$core$IFn$_invoke$arity$1(property);
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58823__$3,new cljs.core.Keyword("build","property-classes","build/property-classes",1099271032),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("logseq.property","classes","logseq.property/classes",913750486).cljs$core$IFn$_invoke$arity$1(property)))):G__58823__$3);
if(cljs.core.seq(closed_values)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58823__$4,new cljs.core.Keyword("build","closed-values","build/closed-values",190285321),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58820_SHARP_){
var G__58824 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),logseq.db.frontend.property.property_value_content(p1__58820_SHARP_),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__58820_SHARP_)], null);
if(cljs.core.truth_(new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(p1__58820_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58824,new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285).cljs$core$IFn$_invoke$arity$1(p1__58820_SHARP_));
} else {
return G__58824;
}
}),closed_values));
} else {
return G__58823__$4;
}
})()], null);
}),user_property_idents));
var properties_config = cljs.core.update_keys(properties_config_by_ent,new cljs.core.Keyword("db","ident","db/ident",-737096));
if(cljs.core.truth_(include_properties_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58825){
var vec__58826 = p__58825;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58826,(0),null);
var build_property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58826,(1),null);
var ent_properties = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,logseq.db.frontend.property.properties(ent),cljs.core.into.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.schema_properties,logseq.db.frontend.property.public_db_attribute_properties));
var build_properties = logseq.db.sqlite.export$.buildable_properties(db,ent_properties,properties_config,options);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(ent),(function (){var G__58829 = build_property;
if(cljs.core.seq(build_properties)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58829,new cljs.core.Keyword("build","properties","build/properties",708607786),build_properties);
} else {
return G__58829;
}
})()], null);
}),properties_config_by_ent));
} else {
return properties_config;
}
});
/**
 * The caller of this fn is responsible for building any classes or properties from this fn
 * unless shallow-copy?
 */
logseq.db.sqlite.export$.build_export_class = (function logseq$db$sqlite$export$build_export_class(class_ent,p__58831){
var map__58832 = p__58831;
var map__58832__$1 = cljs.core.__destructure_map(map__58832);
var include_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58832__$1,new cljs.core.Keyword(null,"include-uuid?","include-uuid?",-167629975));
var shallow_copy_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58832__$1,new cljs.core.Keyword(null,"shallow-copy?","shallow-copy?",-99881020));
var include_timestamps_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58832__$1,new cljs.core.Keyword(null,"include-timestamps?","include-timestamps?",158216918));
var include_alias_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58832__$1,new cljs.core.Keyword(null,"include-alias?","include-alias?",746737871));
var class_properties = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(logseq.db.sqlite.export$.ignored_properties),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050).cljs$core$IFn$_invoke$arity$1(class_ent)))));
var G__58833 = cljs.core.select_keys(class_ent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991)], null));
var G__58833__$1 = (cljs.core.truth_(include_uuid_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__58833,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(class_ent),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954),true], 0)):G__58833);
var G__58833__$2 = (cljs.core.truth_(include_timestamps_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__58833__$1,cljs.core.select_keys(class_ent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], null))], 0)):G__58833__$1);
var G__58833__$3 = ((((cljs.core.seq(class_properties)) && (cljs.core.not(shallow_copy_QMARK_))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58833__$2,new cljs.core.Keyword("build","class-properties","build/class-properties",1278125544),class_properties):G__58833__$2);
var G__58833__$4 = (cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(shallow_copy_QMARK_);
if(and__5140__auto__){
var and__5140__auto____$1 = include_alias_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(class_ent);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58833__$3,new cljs.core.Keyword("block","alias","block/alias",-2112644699),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58830_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__58830_SHARP_)],null));
}),new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(class_ent)))):G__58833__$3);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(shallow_copy_QMARK_);
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803).cljs$core$IFn$_invoke$arity$1(class_ent);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.class","Root","logseq.class/Root",273783827)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803).cljs$core$IFn$_invoke$arity$1(class_ent)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58833__$4,new cljs.core.Keyword("build","class-extends","build/class-extends",888177458),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803).cljs$core$IFn$_invoke$arity$1(class_ent))));
} else {
return G__58833__$4;
}
});
logseq.db.sqlite.export$.build_node_classes = (function logseq$db$sqlite$export$build_node_classes(db,build_block,block_tags,properties){
var pvalue_classes = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.class$.logseq_class_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (val_or_vals){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58834_SHARP_){
if(logseq.db.sqlite.build.page_prop_value_QMARK_(p1__58834_SHARP_)){
return new cljs.core.Keyword("build","tags","build/tags",1814686611).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__58834_SHARP_));
} else {
if(cljs.core.truth_(logseq.db.sqlite.build.block_property_value_QMARK_(p1__58834_SHARP_))){
return new cljs.core.Keyword("build","tags","build/tags",1814686611).cljs$core$IFn$_invoke$arity$1(p1__58834_SHARP_);
} else {
return null;
}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.set_QMARK_(val_or_vals))?val_or_vals:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val_or_vals], null))], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(build_block))], 0)));
var property_classes = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.class$.logseq_class_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("build","property-classes","build/property-classes",1099271032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(properties)], 0))));
var new_class_ents = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58835_SHARP_){
return logseq.db.frontend.class$.logseq_class_QMARK_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__58835_SHARP_));
}),block_tags);
var shallow_classes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(property_classes,pvalue_classes),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),new_class_ents)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.seq(shallow_classes))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58837_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__58837_SHARP_),logseq.db.sqlite.export$.build_export_class(p1__58837_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shallow-copy?","shallow-copy?",-99881020),true], null))],null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58836_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__58836_SHARP_) : datascript.core.entity.call(null,db,p1__58836_SHARP_));
}),shallow_classes))):null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58838_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__58838_SHARP_),logseq.db.sqlite.export$.build_export_class(p1__58838_SHARP_,cljs.core.PersistentArrayMap.EMPTY)],null));
}),new_class_ents))], 0));
});
logseq.db.sqlite.export$.build_node_properties = (function logseq$db$sqlite$export$build_node_properties(db,entity,ent_properties,p__58840){
var map__58841 = p__58840;
var map__58841__$1 = cljs.core.__destructure_map(map__58841);
var options = map__58841__$1;
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58841__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var collect_nested_property_ids = (function logseq$db$sqlite$export$build_node_properties_$_collect_nested_property_ids(v){
if(cljs.core.truth_((function (){var and__5140__auto__ = datascript.impl.entity.entity_QMARK_(v);
if(and__5140__auto__){
return new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(v);
} else {
return and__5140__auto__;
}
})())){
var pvalue_properties = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,logseq.db.frontend.property.properties(v),logseq.db.frontend.property.public_db_attribute_properties);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(pvalue_properties),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq$db$sqlite$export$build_node_properties_$_collect_nested_property_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(pvalue_properties)], 0)));
} else {
if(cljs.core.set_QMARK_(v)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq$db$sqlite$export$build_node_properties_$_collect_nested_property_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
});
var new_user_property_ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58839_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties,p1__58839_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.logseq_property_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(collect_nested_property_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(ent_properties)], 0)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(entity)], 0))),cljs.core.keys(ent_properties)))));
return logseq.db.sqlite.export$.build_export_properties(db,new_user_property_ids,options);
});
/**
 * Given a block/page entity and optional existing properties, build an export map of its
 * tags and properties
 */
logseq.db.sqlite.export$.build_node_export = (function logseq$db$sqlite$export$build_node_export(db,entity,p__58842){
var map__58843 = p__58842;
var map__58843__$1 = cljs.core.__destructure_map(map__58843);
var options = map__58843__$1;
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58843__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var include_uuid_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58843__$1,new cljs.core.Keyword(null,"include-uuid-fn","include-uuid-fn",-291819511),cljs.core.constantly(false));
var shallow_copy_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58843__$1,new cljs.core.Keyword(null,"shallow-copy?","shallow-copy?",-99881020));
var include_timestamps_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58843__$1,new cljs.core.Keyword(null,"include-timestamps?","include-timestamps?",158216918));
var exclude_ontology_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58843__$1,new cljs.core.Keyword(null,"exclude-ontology?","exclude-ontology?",-439731608));
var ent_properties = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,logseq.db.frontend.property.properties(entity),logseq.db.frontend.property.public_db_attribute_properties);
var build_tags = ((cljs.core.seq(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(entity)))?logseq.db.sqlite.export$.__GT_build_tags(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(entity)):null);
var new_properties = (cljs.core.truth_((function (){var or__5142__auto__ = shallow_copy_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return exclude_ontology_QMARK_;
}
})())?null:logseq.db.sqlite.export$.build_node_properties(db,entity,ent_properties,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"shallow-copy?","shallow-copy?",-99881020),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-uuid-fn","include-uuid-fn",-291819511)], 0))));
var build_properties = ((((cljs.core.not(shallow_copy_QMARK_)) && (cljs.core.seq(ent_properties))))?logseq.db.sqlite.export$.buildable_properties(db,ent_properties,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties,new_properties], 0)),options):null);
var build_node = (function (){var G__58844 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","title","block/title",710445684),logseq.db.sqlite.export$.property_value_content(entity)], null);
var G__58844__$1 = (((!((new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(entity) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58844,new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(entity)):G__58844);
var G__58844__$2 = (cljs.core.truth_(new cljs.core.Keyword("block","link","block/link",-1872399993).cljs$core$IFn$_invoke$arity$1(entity))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58844__$1,new cljs.core.Keyword("block","link","block/link",-1872399993),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","link","block/link",-1872399993).cljs$core$IFn$_invoke$arity$1(entity))], null)):G__58844__$1);
var G__58844__$3 = (cljs.core.truth_((function (){var G__58845 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(entity);
return (include_uuid_fn.cljs$core$IFn$_invoke$arity$1 ? include_uuid_fn.cljs$core$IFn$_invoke$arity$1(G__58845) : include_uuid_fn.call(null,G__58845));
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__58844__$2,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(entity),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954),true], 0)):G__58844__$2);
var G__58844__$4 = (cljs.core.truth_(include_timestamps_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__58844__$3,cljs.core.select_keys(entity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], null))], 0)):G__58844__$3);
var G__58844__$5 = ((((cljs.core.not(shallow_copy_QMARK_)) && (cljs.core.seq(build_tags))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58844__$4,new cljs.core.Keyword("build","tags","build/tags",1814686611),build_tags):G__58844__$4);
if(cljs.core.seq(build_properties)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58844__$5,new cljs.core.Keyword("build","properties","build/properties",708607786),build_properties);
} else {
return G__58844__$5;
}
})();
var new_classes = (cljs.core.truth_((function (){var or__5142__auto__ = shallow_copy_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return exclude_ontology_QMARK_;
}
})())?null:logseq.db.sqlite.export$.build_node_classes(db,build_node,new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(entity),new_properties));
var G__58846 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),build_node], null);
var G__58846__$1 = ((cljs.core.seq(new_classes))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58846,new cljs.core.Keyword(null,"classes","classes",2037804510),new_classes):G__58846);
if(cljs.core.seq(new_properties)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58846__$1,new cljs.core.Keyword(null,"properties","properties",685819552),new_properties);
} else {
return G__58846__$1;
}
});
/**
 * Extracts block reference uuids from a block's property values
 */
logseq.db.sqlite.export$.get_pvalue_uuids = (function logseq$db$sqlite$export$get_pvalue_uuids(build_block){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (val_or_vals){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__58847_SHARP_){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.vector_QMARK_(p1__58847_SHARP_);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(p1__58847_SHARP_));
if(and__5140__auto____$1){
return new cljs.core.Keyword("logseq.db.sqlite.export","existing-property-value?","logseq.db.sqlite.export/existing-property-value?",-2009560134).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__58847_SHARP_));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.second(p1__58847_SHARP_);
} else {
return null;
}
}),((cljs.core.set_QMARK_(val_or_vals))?val_or_vals:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val_or_vals], null)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(build_block))], 0)));
});
/**
 * Merge export maps for partial graph exports. *Do not* use for a full graph
 *   export because it makes assumptions about page identity
 */
logseq.db.sqlite.export$.merge_export_maps = (function logseq$db$sqlite$export$merge_export_maps(var_args){
var args__5882__auto__ = [];
var len__5876__auto___59251 = arguments.length;
var i__5877__auto___59252 = (0);
while(true){
if((i__5877__auto___59252 < len__5876__auto___59251)){
args__5882__auto__.push((arguments[i__5877__auto___59252]));

var G__59253 = (i__5877__auto___59252 + (1));
i__5877__auto___59252 = G__59253;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return logseq.db.sqlite.export$.merge_export_maps.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(logseq.db.sqlite.export$.merge_export_maps.cljs$core$IFn$_invoke$arity$variadic = (function (export_maps){
var pages_and_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58849_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,(function (e1,e2){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(e1);
if(and__5140__auto__){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1(e2);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e1,e2], 0));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(e1,e2);
}
}),cljs.core.second(p1__58849_SHARP_));
}),cljs.core.group_by((function (p1__58848_SHARP_){
return cljs.core.select_keys(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(p1__58848_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("build","journal","build/journal",1781180096)], null));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([export_maps], 0))));
var properties = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.merge,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"properties","properties",685819552),export_maps));
var classes = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.merge,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"classes","classes",2037804510),export_maps));
var G__58851 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),pages_and_blocks], null);
var G__58851__$1 = ((cljs.core.seq(properties))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58851,new cljs.core.Keyword(null,"properties","properties",685819552),properties):G__58851);
if(cljs.core.seq(classes)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58851__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes);
} else {
return G__58851__$1;
}
}));

(logseq.db.sqlite.export$.merge_export_maps.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(logseq.db.sqlite.export$.merge_export_maps.cljs$lang$applyTo = (function (seq58850){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58850));
}));

/**
 * Builds an export of properties and classes from a mixed group of nodes that may both
 */
logseq.db.sqlite.export$.build_mixed_properties_and_classes_export = (function logseq$db$sqlite$export$build_mixed_properties_and_classes_export(db,ents,export_opts){
var properties = (function (){var temp__5825__auto__ = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.entity_util.property_QMARK_,ents)));
if(temp__5825__auto__){
var prop_ids = temp__5825__auto__;
return logseq.db.sqlite.export$.build_export_properties(db,prop_ids,export_opts);
} else {
return null;
}
})();
var classes = (function (){var temp__5825__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.entity_util.class_QMARK_,ents));
if(temp__5825__auto__){
var class_ents = temp__5825__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58852_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__58852_SHARP_),logseq.db.sqlite.export$.build_export_class(p1__58852_SHARP_,export_opts)],null));
}),class_ents));
} else {
return null;
}
})();
var G__58853 = cljs.core.PersistentArrayMap.EMPTY;
var G__58853__$1 = (cljs.core.truth_(properties)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58853,new cljs.core.Keyword(null,"properties","properties",685819552),properties):G__58853);
if(cljs.core.truth_(classes)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58853__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes);
} else {
return G__58853__$1;
}
});
/**
 * Builds an export config (and additional info) for refs in the given blocks. Refs are detected
 * if they are a :block/link or if a `[[UUID]]` ref in the content. All the exported
 * entities found in block refs include their uuid in order to preserve the relationship to the blocks
 */
logseq.db.sqlite.export$.build_content_ref_export = (function logseq$db$sqlite$export$build_content_ref_export(db,blocks_STAR_){
var blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865),blocks_STAR_);
var block_links = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58854_SHARP_){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","link","block/link",-1872399993).cljs$core$IFn$_invoke$arity$1(p1__58854_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","link","block/link",-1872399993),blocks));
var content_ref_uuids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.content.get_matched_ids,logseq.db.sqlite.export$.block_title),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks], 0))),block_links);
var content_ref_ents = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58855_SHARP_){
var G__58861 = db;
var G__58862 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),p1__58855_SHARP_], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__58861,G__58862) : datascript.core.entity.call(null,G__58861,G__58862));
}),content_ref_uuids);
var content_ref_pages = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58856_SHARP_){
var or__5142__auto__ = logseq.db.frontend.entity_util.internal_page_QMARK_(p1__58856_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.frontend.entity_util.journal_QMARK_(p1__58856_SHARP_);
}
}),content_ref_ents);
var map__58860 = logseq.db.sqlite.export$.build_mixed_properties_and_classes_export(db,content_ref_ents,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-uuid?","include-uuid?",-167629975),true,new cljs.core.Keyword(null,"shallow-copy?","shallow-copy?",-99881020),true], null));
var map__58860__$1 = cljs.core.__destructure_map(map__58860);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58860__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58860__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"content-ref-uuids","content-ref-uuids",1465823717),content_ref_uuids,new cljs.core.Keyword(null,"content-ref-ents","content-ref-ents",853626936),content_ref_ents,new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.update_vals(properties,(function (p1__58857_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__58857_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954),true], null)], 0));
})),new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.update_vals(classes,(function (p1__58858_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__58858_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954),true], null)], 0));
})),new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58859_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"page","page",849072397)],[cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.sqlite.export$.shallow_copy_page(p1__58859_SHARP_),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__58859_SHARP_),new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954),true], null)], 0))]);
}),content_ref_pages)], null);
});
logseq.db.sqlite.export$.build_class_parents_export = (function logseq$db$sqlite$export$build_class_parents_export(db,classes_config){
var class_parent_ents = logseq.db.frontend.db.get_classes_parents(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58864_SHARP_){
var G__58867 = db;
var G__58868 = cljs.core.key(p1__58864_SHARP_);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__58867,G__58868) : datascript.core.entity.call(null,G__58867,G__58868));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58863_SHARP_){
return new cljs.core.Keyword("build","class-extends","build/class-extends",888177458).cljs$core$IFn$_invoke$arity$1(cljs.core.val(p1__58863_SHARP_));
}),classes_config)));
var classes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58866_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__58866_SHARP_),logseq.db.sqlite.export$.build_export_class(p1__58866_SHARP_,cljs.core.PersistentArrayMap.EMPTY)],null));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58865_SHARP_){
return logseq.db.frontend.class$.logseq_class_QMARK_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__58865_SHARP_));
}),class_parent_ents)));
var class_parent_properties = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.logseq_property_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class_parent_ents], 0))));
var properties = logseq.db.sqlite.export$.build_export_properties(db,class_parent_properties,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shallow-copy?","shallow-copy?",-99881020),true], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes,new cljs.core.Keyword(null,"properties","properties",685819552),properties], null);
});
/**
 * Given a vec of block entities, returns the blocks in a sqlite.build EDN format
 * and all properties and classes used in these blocks
 */
logseq.db.sqlite.export$.build_blocks_export = (function logseq$db$sqlite$export$build_blocks_export(db,blocks,p__58871){
var map__58872 = p__58871;
var map__58872__$1 = cljs.core.__destructure_map(map__58872);
var opts = map__58872__$1;
var include_children_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58872__$1,new cljs.core.Keyword(null,"include-children?","include-children?",1544050422),true);
var _STAR_properties = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-ontology","graph-ontology",-1663150820),new cljs.core.Keyword(null,"properties","properties",685819552)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var _STAR_classes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-ontology","graph-ontology",-1663150820),new cljs.core.Keyword(null,"classes","classes",2037804510)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var _STAR_pvalue_uuids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var id_map = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.identity)),blocks);
var children = (cljs.core.truth_(include_children_QMARK_)?cljs.core.group_by((function (p1__58869_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__58869_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
}),blocks):cljs.core.PersistentArrayMap.EMPTY);
var build_block = (function logseq$db$sqlite$export$build_blocks_export_$_build_block(block_STAR_){
var child_nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(logseq$db$sqlite$export$build_blocks_export_$_build_block,cljs.core.get.cljs$core$IFn$_invoke$arity$3(children,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_STAR_),cljs.core.PersistentVector.EMPTY));
var map__58873 = logseq.db.sqlite.export$.build_node_export(db,block_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"graph-ontology","graph-ontology",-1663150820)),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.deref(_STAR_properties)));
var map__58873__$1 = cljs.core.__destructure_map(map__58873);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58873__$1,new cljs.core.Keyword(null,"node","node",581201198));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58873__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58873__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var new_pvalue_uuids = logseq.db.sqlite.export$.get_pvalue_uuids(node);
if(cljs.core.seq(properties)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_properties,cljs.core.merge,properties);
} else {
}

if(cljs.core.seq(classes)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_classes,cljs.core.merge,classes);
} else {
}

if(cljs.core.seq(new_pvalue_uuids)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_pvalue_uuids,cljs.core.into,new_pvalue_uuids);
} else {
}

var G__58874 = node;
if(cljs.core.seq(child_nodes)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58874,new cljs.core.Keyword("build","children","build/children",-1040452432),child_nodes);
} else {
return G__58874;
}
});
var roots = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58870_SHARP_){
return cljs.core.contains_QMARK_(id_map,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__58870_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)));
}),blocks);
var exported_blocks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(build_block,roots);
var G__58875 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),exported_blocks,new cljs.core.Keyword(null,"pvalue-uuids","pvalue-uuids",-471206294),cljs.core.deref(_STAR_pvalue_uuids)], null);
var G__58875__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_properties),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-ontology","graph-ontology",-1663150820),new cljs.core.Keyword(null,"properties","properties",685819552)], null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58875,new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.deref(_STAR_properties)):G__58875);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_classes),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-ontology","graph-ontology",-1663150820),new cljs.core.Keyword(null,"classes","classes",2037804510)], null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58875__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.deref(_STAR_classes));
} else {
return G__58875__$1;
}
});
logseq.db.sqlite.export$.build_uuid_block_export = (function logseq$db$sqlite$export$build_uuid_block_export(db,pvalue_uuids,content_ref_ents,p__58878){
var map__58879 = p__58878;
var map__58879__$1 = cljs.core.__destructure_map(map__58879);
var page_entity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58879__$1,new cljs.core.Keyword(null,"page-entity","page-entity",1168837897));
var content_ref_blocks = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.entity_util.page_QMARK_,content_ref_ents));
var uuid_block_ents_to_export = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58876_SHARP_){
var G__58880 = db;
var G__58881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),p1__58876_SHARP_], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__58880,G__58881) : datascript.core.entity.call(null,G__58880,G__58881));
}),pvalue_uuids),content_ref_blocks);
var uuid_block_pages = ((cljs.core.seq(uuid_block_ents_to_export))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58882){
var vec__58883 = p__58882;
var parent_page_ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58883,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58883,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.sqlite.export$.build_blocks_export(db,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),blocks),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-uuid-fn","include-uuid-fn",-291819511),cljs.core.constantly(true),new cljs.core.Keyword(null,"shallow-copy?","shallow-copy?",-99881020),true], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),logseq.db.sqlite.export$.shallow_copy_page(parent_page_ent)], null)], 0));
}),(function (m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,page_entity);
})(cljs.core.group_by(new cljs.core.Keyword("block","page","block/page",822314108),uuid_block_ents_to_export))):null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"properties","properties",685819552),uuid_block_pages)),new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"classes","classes",2037804510),uuid_block_pages)),new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58877_SHARP_){
return cljs.core.select_keys(p1__58877_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null));
}),uuid_block_pages)], null);
});
/**
 * Provide a reliable sort order since this tends to be large. Helps with diffing
 * and readability
 */
logseq.db.sqlite.export$.sort_pages_and_blocks = (function logseq$db$sqlite$export$sort_pages_and_blocks(pages_and_blocks){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__58886_SHARP_){
var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__58886_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","title","block/title",710445684)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__58890 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__58886_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("build","journal","build/journal",1781180096)], null));
if((G__58890 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58890));
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__58886_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null))));
}
}
}),pages_and_blocks));
});
/**
 * Given final export maps, merges them, adds any missing class parents and merges those in.
 * If :pages-and-blocks exist, sorts them in order to have reliable sort order
 */
logseq.db.sqlite.export$.finalize_export_maps = (function logseq$db$sqlite$export$finalize_export_maps(var_args){
var args__5882__auto__ = [];
var len__5876__auto___59288 = arguments.length;
var i__5877__auto___59289 = (0);
while(true){
if((i__5877__auto___59289 < len__5876__auto___59288)){
args__5882__auto__.push((arguments[i__5877__auto___59289]));

var G__59290 = (i__5877__auto___59289 + (1));
i__5877__auto___59289 = G__59290;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.db.sqlite.export$.finalize_export_maps.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(logseq.db.sqlite.export$.finalize_export_maps.cljs$core$IFn$_invoke$arity$variadic = (function (db,export_maps){
var final_export_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(logseq.db.sqlite.export$.merge_export_maps,export_maps);
var class_parents_export = (function (){var G__58895 = new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(final_export_STAR_);
if((G__58895 == null)){
return null;
} else {
return logseq.db.sqlite.export$.build_class_parents_export(db,G__58895);
}
})();
var merged_map = logseq.db.sqlite.export$.merge_export_maps.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([final_export_STAR_,class_parents_export], 0));
var G__58898 = merged_map;
if(cljs.core.truth_(new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185).cljs$core$IFn$_invoke$arity$1(merged_map))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__58898,new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),logseq.db.sqlite.export$.sort_pages_and_blocks);
} else {
return G__58898;
}
}));

(logseq.db.sqlite.export$.finalize_export_maps.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.db.sqlite.export$.finalize_export_maps.cljs$lang$applyTo = (function (seq58891){
var G__58892 = cljs.core.first(seq58891);
var seq58891__$1 = cljs.core.next(seq58891);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58892,seq58891__$1);
}));

/**
 * Exports block for given block eid
 */
logseq.db.sqlite.export$.build_block_export = (function logseq$db$sqlite$export$build_block_export(db,eid){
var block_entity = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
var property_value_ents = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity_QMARK_,cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.properties(block_entity),new cljs.core.Keyword("block","tags","block/tags",1814948340))));
var map__58902 = logseq.db.sqlite.export$.build_content_ref_export(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_entity], null),property_value_ents));
var map__58902__$1 = cljs.core.__destructure_map(map__58902);
var content_ref_export = map__58902__$1;
var content_ref_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58902__$1,new cljs.core.Keyword(null,"content-ref-uuids","content-ref-uuids",1465823717));
var content_ref_ents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58902__$1,new cljs.core.Keyword(null,"content-ref-ents","content-ref-ents",853626936));
var node_export = logseq.db.sqlite.export$.build_node_export(db,block_entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-uuid-fn","include-uuid-fn",-291819511),content_ref_uuids], null));
var pvalue_uuids = logseq.db.sqlite.export$.get_pvalue_uuids(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(node_export));
var uuid_block_export = logseq.db.sqlite.export$.build_uuid_block_export(db,pvalue_uuids,content_ref_ents,cljs.core.PersistentArrayMap.EMPTY);
var block_export = logseq.db.sqlite.export$.finalize_export_maps.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_export,uuid_block_export,content_ref_export], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.db.sqlite.export","block","logseq.db.sqlite.export/block",469582025),new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(node_export)], null),block_export], 0));
});
/**
 * If :include-alias? option is set, the caller fn is responsible for defining alias pages
 */
logseq.db.sqlite.export$.build_page_blocks_export = (function logseq$db$sqlite$export$build_page_blocks_export(db,page_entity,p__58906){
var map__58908 = p__58906;
var map__58908__$1 = cljs.core.__destructure_map(map__58908);
var options = map__58908__$1;
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58908__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58908__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58908__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var ontology_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58908__$1,new cljs.core.Keyword(null,"ontology-page?","ontology-page?",-908026596));
var include_alias_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58908__$1,new cljs.core.Keyword(null,"include-alias?","include-alias?",746737871));
var options_SINGLEQUOTE_ = (function (){var G__58909 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"graph-ontology","graph-ontology",-1663150820)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"exclude-ontology?","exclude-ontology?",-439731608).cljs$core$IFn$_invoke$arity$1(options))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58909,new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-ontology","graph-ontology",-1663150820),new cljs.core.Keyword(null,"properties","properties",685819552)], null)));
} else {
return G__58909;
}
})();
var page_ent_export = (cljs.core.truth_(ontology_page_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),cljs.core.select_keys(page_entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null))], null):logseq.db.sqlite.export$.build_node_export(db,page_entity,options_SINGLEQUOTE_));
var page_pvalue_uuids = logseq.db.sqlite.export$.get_pvalue_uuids(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(page_ent_export));
var page = (cljs.core.truth_(ontology_page_QMARK_)?new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(page_ent_export):cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(page_ent_export),new cljs.core.Keyword("block","title","block/title",710445684)),logseq.db.sqlite.export$.shallow_copy_page(page_entity),(cljs.core.truth_((function (){var and__5140__auto__ = include_alias_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(page_entity);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","alias","block/alias",-2112644699),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58903_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__58903_SHARP_)],null));
}),new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(page_entity)))], null):null)], 0)));
var page_blocks_export = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"blocks","blocks",-610462153),(function (){var or__5142__auto__ = blocks;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()], null)], null),new cljs.core.Keyword(null,"properties","properties",685819552),properties,new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logseq.db.sqlite.export$.merge_export_maps.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_blocks_export,page_ent_export], 0)),new cljs.core.Keyword(null,"pvalue-uuids","pvalue-uuids",-471206294),page_pvalue_uuids);
});
logseq.db.sqlite.export$.get_page_blocks = (function logseq$db$sqlite$export$get_page_blocks(db,eid){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58917_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__58917_SHARP_) : datascript.core.entity.call(null,db,p1__58917_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","page","block/page",822314108),eid)));
});
/**
 * Cleans up blocks that have uuids that are not referenced elsewhere.
 * Handles a block map and its properties' value blocks (one level deep). For property
 * value blocks also handles reverting the value back to its concise form as needed
 */
logseq.db.sqlite.export$.remove_uuid_if_not_ref_given_uuids = (function logseq$db$sqlite$export$remove_uuid_if_not_ref_given_uuids(ref_uuids,m){
var G__58925 = m;
var G__58925__$1 = (((!(cljs.core.contains_QMARK_(ref_uuids,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(m)))))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58925,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954)], 0)):G__58925);
if(cljs.core.truth_(new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__58925__$1,new cljs.core.Keyword("build","properties","build/properties",708607786),(function (props){
var shrink_property_value = (function logseq$db$sqlite$export$remove_uuid_if_not_ref_given_uuids_$_shrink_property_value(v){
if(cljs.core.truth_(logseq.db.sqlite.build.block_property_value_QMARK_(v))){
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.contains_QMARK_(ref_uuids,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(v));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("build","tags","build/tags",1814686611),new cljs.core.Keyword("build","properties","build/properties",708607786),new cljs.core.Keyword("build","children","build/children",-1040452432))(v);
}
})())){
return v;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(v);
}
} else {
return v;
}
});
return cljs.core.update_vals(props,(function (v){
if(cljs.core.set_QMARK_(v)){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shrink_property_value,v));
} else {
return shrink_property_value(v);
}
}));
}));
} else {
return G__58925__$1;
}
});
logseq.db.sqlite.export$.pvalue_descendant_QMARK_ = (function logseq$db$sqlite$export$pvalue_descendant_QMARK_(block){
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
while(true){
if(cljs.core.not(parent)){
return false;
} else {
if(cljs.core.truth_(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(parent))){
return true;
} else {
var G__59304 = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__59304;
continue;
}
}
break;
}
});
/**
 * When given the :handle-block-uuids option, handle uuid references between
 *   blocks including property value blocks
 */
logseq.db.sqlite.export$.build_page_export_STAR_ = (function logseq$db$sqlite$export$build_page_export_STAR_(db,eid,page_blocks_STAR_,p__58928){
var map__58929 = p__58928;
var map__58929__$1 = cljs.core.__destructure_map(map__58929);
var options = map__58929__$1;
var handle_block_uuids_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58929__$1,new cljs.core.Keyword(null,"handle-block-uuids?","handle-block-uuids?",-2113227728));
var page_entity = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
var page_blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58926_SHARP_){
var or__5142__auto__ = new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(p1__58926_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.sqlite.export$.pvalue_descendant_QMARK_(p1__58926_SHARP_);
}
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),page_blocks_STAR_));
var map__58930 = logseq.db.sqlite.export$.build_blocks_export(db,page_blocks,(function (){var G__58931 = options;
if(cljs.core.truth_(handle_block_uuids_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58931,new cljs.core.Keyword(null,"include-uuid-fn","include-uuid-fn",-291819511),cljs.core.constantly(true));
} else {
return G__58931;
}
})());
var map__58930__$1 = cljs.core.__destructure_map(map__58930);
var blocks_export_STAR_ = map__58930__$1;
var pvalue_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58930__$1,new cljs.core.Keyword(null,"pvalue-uuids","pvalue-uuids",-471206294));
var blocks_export = (cljs.core.truth_(handle_block_uuids_QMARK_)?(function (){var remove_uuid_if_not_ref = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(logseq.db.sqlite.export$.remove_uuid_if_not_ref_given_uuids,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(pvalue_uuids),((cljs.core.set_QMARK_(new cljs.core.Keyword(null,"include-uuid-fn","include-uuid-fn",-291819511).cljs$core$IFn$_invoke$arity$1(options)))?new cljs.core.Keyword(null,"include-uuid-fn","include-uuid-fn",-291819511).cljs$core$IFn$_invoke$arity$1(options):null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(blocks_export_STAR_,new cljs.core.Keyword(null,"blocks","blocks",-610462153),(function (p1__58927_SHARP_){
return logseq.db.sqlite.build.update_each_block(p1__58927_SHARP_,remove_uuid_if_not_ref);
}));
})():blocks_export_STAR_);
var ontology_page_export = (cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(new cljs.core.Keyword(null,"ontology-page?","ontology-page?",-908026596).cljs$core$IFn$_invoke$arity$1(options));
if(and__5140__auto__){
var or__5142__auto__ = logseq.db.frontend.entity_util.class_QMARK_(page_entity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.frontend.entity_util.property_QMARK_(page_entity);
}
} else {
return and__5140__auto__;
}
})())?logseq.db.sqlite.export$.build_mixed_properties_and_classes_export(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_entity], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-uuid?","include-uuid?",-167629975),true], null)):null);
var class_page_properties_export = (function (){var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.not(new cljs.core.Keyword(null,"ontology-page?","ontology-page?",-908026596).cljs$core$IFn$_invoke$arity$1(options));
if(and__5140__auto__){
var and__5140__auto____$1 = logseq.db.frontend.entity_util.class_QMARK_(page_entity);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050).cljs$core$IFn$_invoke$arity$1(page_entity)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var props = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),logseq.db.sqlite.export$.build_export_properties(db,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shallow-copy?","shallow-copy?",-99881020),true], null))], null);
} else {
return null;
}
})();
var page_block_options = (function (){var G__58932 = blocks_export;
var G__58932__$1 = (cljs.core.truth_(ontology_page_export)?logseq.db.sqlite.export$.merge_export_maps.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__58932,ontology_page_export,class_page_properties_export], 0)):G__58932);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__58932__$1,options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(blocks_export)], null),(cljs.core.truth_(ontology_page_export)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ontology-page?","ontology-page?",-908026596),true], null):null)], 0));

})();
var page_blocks_export = logseq.db.sqlite.export$.build_page_blocks_export(db,page_entity,page_block_options);
var page_block_uuids = clojure.set.union.cljs$core$IFn$_invoke$arity$2(pvalue_uuids,new cljs.core.Keyword(null,"pvalue-uuids","pvalue-uuids",-471206294).cljs$core$IFn$_invoke$arity$1(page_blocks_export));
var page_export = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page_blocks_export,new cljs.core.Keyword(null,"pvalue-uuids","pvalue-uuids",-471206294),page_block_uuids);
return page_export;
});
/**
 * Exports page for given page eid
 */
logseq.db.sqlite.export$.build_page_export = (function logseq$db$sqlite$export$build_page_export(db,eid){
var page_blocks_STAR_ = logseq.db.sqlite.export$.get_page_blocks(db,eid);
var map__58935 = logseq.db.sqlite.export$.build_content_ref_export(db,page_blocks_STAR_);
var map__58935__$1 = cljs.core.__destructure_map(map__58935);
var content_ref_export = map__58935__$1;
var content_ref_ents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58935__$1,new cljs.core.Keyword(null,"content-ref-ents","content-ref-ents",853626936));
var map__58936 = logseq.db.sqlite.export$.build_page_export_STAR_(db,eid,page_blocks_STAR_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"include-uuid-fn","include-uuid-fn",-291819511),new cljs.core.Keyword(null,"content-ref-uuids","content-ref-uuids",1465823717).cljs$core$IFn$_invoke$arity$1(content_ref_export),new cljs.core.Keyword(null,"include-pvalue-uuid-fn","include-pvalue-uuid-fn",-1252023763),new cljs.core.Keyword(null,"content-ref-uuids","content-ref-uuids",1465823717).cljs$core$IFn$_invoke$arity$1(content_ref_export),new cljs.core.Keyword(null,"handle-block-uuids?","handle-block-uuids?",-2113227728),true,new cljs.core.Keyword(null,"include-alias?","include-alias?",746737871),true], null));
var map__58936__$1 = cljs.core.__destructure_map(map__58936);
var page_export_STAR_ = map__58936__$1;
var pvalue_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58936__$1,new cljs.core.Keyword(null,"pvalue-uuids","pvalue-uuids",-471206294));
var page_entity = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
var uuid_block_export = logseq.db.sqlite.export$.build_uuid_block_export(db,pvalue_uuids,content_ref_ents,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-entity","page-entity",1168837897),page_entity], null));
var alias_export = (cljs.core.truth_(new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(page_entity))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58933_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"page","page",849072397)],[cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.sqlite.export$.shallow_copy_page(p1__58933_SHARP_),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__58933_SHARP_),new cljs.core.Keyword("build","keep-uuid?","build/keep-uuid?",705498954),true], null)], 0))]);
}),new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(page_entity))], null):null);
var page_export = logseq.db.sqlite.export$.finalize_export_maps.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_export_STAR_,uuid_block_export,content_ref_export,alias_export], 0));
return page_export;
});
/**
 * Export a mix of pages and blocks
 */
logseq.db.sqlite.export$.build_nodes_export = (function logseq$db$sqlite$export$build_nodes_export(db,nodes,opts){
var node_pages = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.entity_util.page_QMARK_,nodes);
var pages_export = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.sqlite.export$.build_mixed_properties_and_classes_export(db,node_pages,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shallow-copy?","shallow-copy?",-99881020),true], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58937_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"page","page",849072397)],[logseq.db.sqlite.export$.shallow_copy_page(p1__58937_SHARP_)]);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58938_SHARP_){
var or__5142__auto__ = logseq.db.frontend.entity_util.internal_page_QMARK_(p1__58938_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.frontend.entity_util.journal_QMARK_(p1__58938_SHARP_);
}
}),node_pages))], null)], 0));
var node_blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.entity_util.page_QMARK_,nodes);
var pages_to_blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58947){
var vec__58948 = p__58947;
var parent_page_ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58948,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58948,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.sqlite.export$.build_blocks_export(db,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),blocks),opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),logseq.db.sqlite.export$.shallow_copy_page(parent_page_ent)], null)], 0));
}),cljs.core.group_by(new cljs.core.Keyword("block","page","block/page",822314108),node_blocks));
var pages_to_blocks_export = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"properties","properties",685819552),pages_to_blocks)),new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"classes","classes",2037804510),pages_to_blocks)),new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58939_SHARP_){
return cljs.core.select_keys(p1__58939_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null));
}),pages_to_blocks)], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.sqlite.export$.merge_export_maps.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_export,pages_to_blocks_export], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pvalue-uuids","pvalue-uuids",-471206294),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pvalue-uuids","pvalue-uuids",-471206294),pages_to_blocks))], null)], 0));
});
/**
 * Exports given nodes from a view. Nodes are a random mix of blocks and pages
 */
logseq.db.sqlite.export$.build_view_nodes_export = (function logseq$db$sqlite$export$build_view_nodes_export(db,rows,p__58955){
var map__58956 = p__58955;
var map__58956__$1 = cljs.core.__destructure_map(map__58956);
var group_by_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58956__$1,new cljs.core.Keyword(null,"group-by?","group-by?",732997650));
var eids = (cljs.core.truth_(group_by_QMARK_)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.second,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rows], 0)):rows);
var nodes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58953_SHARP_){
var G__58959 = db;
var G__58960 = ((cljs.core.uuid_QMARK_(p1__58953_SHARP_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),p1__58953_SHARP_], null):p1__58953_SHARP_);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__58959,G__58960) : datascript.core.entity.call(null,G__58959,G__58960));
}),eids);
var property_value_ents = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58954_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity_QMARK_,cljs.core.vals(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,logseq.db.frontend.property.properties(p1__58954_SHARP_),logseq.db.frontend.property.public_db_attribute_properties)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
var map__58957 = logseq.db.sqlite.export$.build_content_ref_export(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(nodes,property_value_ents));
var map__58957__$1 = cljs.core.__destructure_map(map__58957);
var content_ref_export = map__58957__$1;
var content_ref_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58957__$1,new cljs.core.Keyword(null,"content-ref-uuids","content-ref-uuids",1465823717));
var content_ref_ents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58957__$1,new cljs.core.Keyword(null,"content-ref-ents","content-ref-ents",853626936));
var map__58958 = logseq.db.sqlite.export$.build_nodes_export(db,nodes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-uuid-fn","include-uuid-fn",-291819511),content_ref_uuids,new cljs.core.Keyword(null,"include-children?","include-children?",1544050422),false], null));
var map__58958__$1 = cljs.core.__destructure_map(map__58958);
var nodes_export = map__58958__$1;
var pvalue_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58958__$1,new cljs.core.Keyword(null,"pvalue-uuids","pvalue-uuids",-471206294));
var uuid_block_export = logseq.db.sqlite.export$.build_uuid_block_export(db,pvalue_uuids,content_ref_ents,cljs.core.PersistentArrayMap.EMPTY);
var view_nodes_export = logseq.db.sqlite.export$.finalize_export_maps.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes_export,uuid_block_export,content_ref_export], 0));
return view_nodes_export;
});
/**
 * Exports given nodes selected by a user. Nodes can be a mix of blocks and pages
 */
logseq.db.sqlite.export$.build_selected_nodes_export = (function logseq$db$sqlite$export$build_selected_nodes_export(db,eids){
var top_level_nodes = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__58968_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__58968_SHARP_) : datascript.core.entity.call(null,db,p1__58968_SHARP_));
}),eids);
var children_nodes = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58969_SHARP_){
return cljs.core.rest(logseq.db.get_block_and_children(db,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__58969_SHARP_)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.entity_util.page_QMARK_,top_level_nodes)], 0)));
var nodes = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(top_level_nodes,children_nodes);
var property_value_ents = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58970_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity_QMARK_,cljs.core.vals(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,logseq.db.frontend.property.properties(p1__58970_SHARP_),logseq.db.frontend.property.public_db_attribute_properties)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
var map__58971 = logseq.db.sqlite.export$.build_content_ref_export(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(nodes,property_value_ents));
var map__58971__$1 = cljs.core.__destructure_map(map__58971);
var content_ref_export = map__58971__$1;
var content_ref_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58971__$1,new cljs.core.Keyword(null,"content-ref-uuids","content-ref-uuids",1465823717));
var content_ref_ents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58971__$1,new cljs.core.Keyword(null,"content-ref-ents","content-ref-ents",853626936));
var map__58972 = logseq.db.sqlite.export$.build_nodes_export(db,nodes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-uuid-fn","include-uuid-fn",-291819511),content_ref_uuids,new cljs.core.Keyword(null,"include-children?","include-children?",1544050422),true], null));
var map__58972__$1 = cljs.core.__destructure_map(map__58972);
var nodes_export = map__58972__$1;
var pvalue_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58972__$1,new cljs.core.Keyword(null,"pvalue-uuids","pvalue-uuids",-471206294));
var uuid_block_export = logseq.db.sqlite.export$.build_uuid_block_export(db,pvalue_uuids,content_ref_ents,cljs.core.PersistentArrayMap.EMPTY);
var view_nodes_export = logseq.db.sqlite.export$.finalize_export_maps.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes_export,uuid_block_export,content_ref_export], 0));
return view_nodes_export;
});
/**
 * Exports a graph's tags and properties
 */
logseq.db.sqlite.export$.build_graph_ontology_export = (function logseq$db$sqlite$export$build_graph_ontology_export(db,p__58977){
var map__58978 = p__58977;
var map__58978__$1 = cljs.core.__destructure_map(map__58978);
var options = map__58978__$1;
var exclude_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58978__$1,new cljs.core.Keyword(null,"exclude-namespaces","exclude-namespaces",-1345442365));
var exclude_regex = ((cljs.core.seq(exclude_namespaces))?cljs.core.re_pattern((""+"^("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,exclude_namespaces)))+")(\\.|$)")):null);
var user_property_idents = (function (){var G__58979 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?db-ident","?db-ident",1440943734,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?db-ident","?db-ident",1440943734,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160)], null))], null);
var G__58980 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__58979,G__58980) : datascript.core.q.call(null,G__58979,G__58980));
})();
var user_property_idents_SINGLEQUOTE_ = ((cljs.core.seq(exclude_namespaces))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58973_SHARP_){
return cljs.core.re_find(exclude_regex,cljs.core.namespace(p1__58973_SHARP_));
}),user_property_idents):user_property_idents);
var properties = logseq.db.sqlite.export$.build_export_properties(db,user_property_idents_SINGLEQUOTE_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-properties?","include-properties?",1631601018),true], null)], 0)));
var class_ents = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58975_SHARP_){
var and__5140__auto__ = cljs.core.seq(exclude_namespaces);
if(and__5140__auto__){
return cljs.core.re_find(exclude_regex,cljs.core.namespace(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__58975_SHARP_)));
} else {
return and__5140__auto__;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58974_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__58974_SHARP_) : datascript.core.entity.call(null,db,p1__58974_SHARP_));
}),(function (){var G__58981 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?class","?class",919269736,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?class","?class",919269736,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?class","?class",919269736,null),new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160)], null))], null);
var G__58982 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__58981,G__58982) : datascript.core.q.call(null,G__58981,G__58982));
})()));
var classes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ent){
var ent_properties = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc,logseq.db.frontend.property.properties(ent),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),logseq.db.frontend.property.public_db_attribute_properties);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(ent),(function (){var build_properties = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(logseq.db.sqlite.export$.buildable_properties(db,ent_properties,properties,options),new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050));
var G__58983 = logseq.db.sqlite.export$.build_export_class(ent,options);
if(cljs.core.seq(build_properties)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58983,new cljs.core.Keyword("build","properties","build/properties",708607786),build_properties);
} else {
return G__58983;
}
})()],null));
}),class_ents));
var G__58984 = cljs.core.PersistentArrayMap.EMPTY;
var G__58984__$1 = ((cljs.core.seq(properties))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58984,new cljs.core.Keyword(null,"properties","properties",685819552),properties):G__58984);
if(cljs.core.seq(classes)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58984__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes);
} else {
return G__58984__$1;
}
});
logseq.db.sqlite.export$.get_graph_content_ref_uuids = (function logseq$db$sqlite$export$get_graph_content_ref_uuids(db,p__58987){
var map__58988 = p__58987;
var map__58988__$1 = cljs.core.__destructure_map(map__58988);
var exclude_built_in_pages_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58988__$1,new cljs.core.Keyword(null,"exclude-built-in-pages?","exclude-built-in-pages?",-932040737));
var block_titles = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","title","block/title",710445684)));
var block_links = (cljs.core.truth_(exclude_built_in_pages_QMARK_)?cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__58985_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1((function (){var G__58989 = db;
var G__58990 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p1__58985_SHARP_);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__58989,G__58990) : datascript.core.entity.call(null,G__58989,G__58990));
})())))){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1((function (){var G__58991 = db;
var G__58992 = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p1__58985_SHARP_);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__58991,G__58992) : datascript.core.entity.call(null,G__58991,G__58992));
})());
}
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","link","block/link",-1872399993))):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58986_SHARP_){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1((function (){var G__58993 = db;
var G__58994 = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p1__58986_SHARP_);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__58993,G__58994) : datascript.core.entity.call(null,G__58993,G__58994));
})());
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","link","block/link",-1872399993))));
var content_ref_uuids = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq.db.frontend.content.get_matched_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,block_titles)], 0)),block_links);
return cljs.core.set(content_ref_uuids);
});
/**
 * Handles pages, journals and their blocks
 */
logseq.db.sqlite.export$.build_graph_pages_export = (function logseq$db$sqlite$export$build_graph_pages_export(db,graph_ontology,options_STAR_){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph-ontology","graph-ontology",-1663150820),graph_ontology], null),((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"exclude-namespaces","exclude-namespaces",-1345442365).cljs$core$IFn$_invoke$arity$1(options_STAR_)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exclude-ontology?","exclude-ontology?",-439731608),true], null):null)], 0));
var page_ids = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081))));
var ontology_ids = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083)))),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048)))));
var page_exports = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (eid){
var page_blocks = logseq.db.sqlite.export$.get_page_blocks(db,eid);
return logseq.db.sqlite.export$.build_page_export_STAR_(db,eid,page_blocks,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-uuid-fn","include-uuid-fn",-291819511),cljs.core.constantly(true),new cljs.core.Keyword(null,"include-pvalue-uuid-fn","include-pvalue-uuid-fn",-1252023763),cljs.core.constantly(true)], null)], 0)));
}),page_ids);
var ontology_page_exports = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (eid){
var temp__5825__auto__ = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267),logseq.db.sqlite.export$.get_page_blocks(db,eid)));
if(temp__5825__auto__){
var page_blocks = temp__5825__auto__;
return logseq.db.sqlite.export$.build_page_export_STAR_(db,eid,page_blocks,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"include-uuid-fn","include-uuid-fn",-291819511),cljs.core.constantly(true),new cljs.core.Keyword(null,"include-pvalue-uuid-fn","include-pvalue-uuid-fn",-1252023763),cljs.core.constantly(true),new cljs.core.Keyword(null,"ontology-page?","ontology-page?",-908026596),true], null)], 0)));
} else {
return null;
}
}),ontology_ids));
var page_exports_SINGLEQUOTE_ = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (page_export){
var and__5140__auto__ = new cljs.core.Keyword(null,"exclude-built-in-pages?","exclude-built-in-pages?",-932040737).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(page_export,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),(0),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("build","properties","build/properties",708607786),new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160)], null));
} else {
return and__5140__auto__;
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(page_exports,ontology_page_exports));
var alias_uuids = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__59002){
var map__59003 = p__59002;
var map__59003__$1 = cljs.core.__destructure_map(map__59003);
var pages_and_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59003__$1,new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58995_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__58995_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","alias","block/alias",-2112644699)], null)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_and_blocks], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_exports_SINGLEQUOTE_], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58996_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(p1__58996_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(graph_ontology))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58997_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(p1__58997_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(graph_ontology))], 0))], 0));
var uuids_to_keep = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"pvalue-uuids","pvalue-uuids",-471206294),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_exports_SINGLEQUOTE_], 0))),cljs.core.set(alias_uuids),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58998_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__58998_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),(0),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null));
}),ontology_page_exports))], 0));
var pages_export = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_exports_SINGLEQUOTE_], 0))),new cljs.core.Keyword(null,"pvalue-uuids","pvalue-uuids",-471206294),uuids_to_keep], null);
return pages_export;
});
logseq.db.sqlite.export$.build_graph_files = (function logseq$db$sqlite$export$build_graph_files(db,p__59005){
var map__59006 = p__59005;
var map__59006__$1 = cljs.core.__destructure_map(map__59006);
var include_timestamps_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59006__$1,new cljs.core.Keyword(null,"include-timestamps?","include-timestamps?",158216918));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__59004_SHARP_){
if(cljs.core.truth_(include_timestamps_QMARK_)){
return cljs.core.select_keys(p1__59004_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Keyword("file","content","file/content",12680964),new cljs.core.Keyword("file","created-at","file/created-at",-92397056),new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310)], null));
} else {
return cljs.core.select_keys(p1__59004_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Keyword("file","content","file/content",12680964)], null));
}
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("file","path","file/path",-191335748),(function (){var G__59007 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","path","file/path",-191335748),new cljs.core.Keyword("file","content","file/content",12680964),new cljs.core.Keyword("file","created-at","file/created-at",-92397056),new cljs.core.Keyword("file","last-modified-at","file/last-modified-at",473527310)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("file","path","file/path",-191335748)], null)], null);
var G__59008 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__59007,G__59008) : datascript.core.q.call(null,G__59007,G__59008));
})()));
});
logseq.db.sqlite.export$.build_kv_values = (function logseq$db$sqlite$export$build_kv_values(db){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59009_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.kv","schema-version","logseq.kv/schema-version",-1467606676),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__59009_SHARP_));
}),(function (){var G__59010 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("kv","value","kv/value",305981670)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("kv","value","kv/value",305981670)], null)], null);
var G__59011 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__59010,G__59011) : datascript.core.q.call(null,G__59010,G__59011));
})()));
});
/**
 * Builds property history. Always include timestamps regardless of :include-timestamps? because
 * timestamps are a necessary part of history
 */
logseq.db.sqlite.export$.build_property_history = (function logseq$db$sqlite$export$build_property_history(db){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (history){
var G__59012 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(history,new cljs.core.Keyword("logseq.property.history","block","logseq.property.history/block",114255416),(function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(m)], null);
})),new cljs.core.Keyword("logseq.property.history","property","logseq.property.history/property",1600409082),new cljs.core.Keyword("db","ident","db/ident",-737096)),new cljs.core.Keyword("logseq.property.history","ref-value","logseq.property.history/ref-value",-513136037),(function (m){
if(cljs.core.truth_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(m))){
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(m);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(m)], null);
}
}));
var G__59012__$1 = (((new cljs.core.Keyword("logseq.property.history","ref-value","logseq.property.history/ref-value",-513136037).cljs$core$IFn$_invoke$arity$1(history) == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59012,new cljs.core.Keyword("logseq.property.history","ref-value","logseq.property.history/ref-value",-513136037)):G__59012);
if((!(cljs.core.contains_QMARK_(history,new cljs.core.Keyword("logseq.property.history","scalar-value","logseq.property.history/scalar-value",239337775))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59012__$1,new cljs.core.Keyword("logseq.property.history","scalar-value","logseq.property.history/scalar-value",239337775));
} else {
return G__59012__$1;
}
}),(function (){var G__59013 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property.history","block","logseq.property.history/block",114255416),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property.history","property","logseq.property.history/property",1600409082),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property.history","ref-value","logseq.property.history/ref-value",-513136037),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)], null),new cljs.core.Keyword("logseq.property.history","scalar-value","logseq.property.history/scalar-value",239337775)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("logseq.property.history","block","logseq.property.history/block",114255416)], null)], null);
var G__59014 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__59013,G__59014) : datascript.core.q.call(null,G__59013,G__59014));
})()));
});
logseq.db.sqlite.export$.remove_uuids_if_not_ref = (function logseq$db$sqlite$export$remove_uuids_if_not_ref(export_map,all_ref_uuids){
var remove_uuid_if_not_ref = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(logseq.db.sqlite.export$.remove_uuid_if_not_ref_given_uuids,all_ref_uuids);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(export_map,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.update_vals,remove_uuid_if_not_ref),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.update_vals,remove_uuid_if_not_ref),new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),(function (pages_and_blocks){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__59015){
var map__59016 = p__59015;
var map__59016__$1 = cljs.core.__destructure_map(map__59016);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59016__$1,new cljs.core.Keyword(null,"page","page",849072397));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59016__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var page_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),remove_uuid_if_not_ref(page),new cljs.core.Keyword(null,"blocks","blocks",-610462153),logseq.db.sqlite.build.update_each_block(blocks,remove_uuid_if_not_ref)], null);
var page_map_SINGLEQUOTE_ = clojure.walk.postwalk((function (f){
if(cljs.core.truth_(logseq.db.sqlite.build.block_property_value_QMARK_(f))){
return remove_uuid_if_not_ref(f);
} else {
return f;
}
}),page_map);
return page_map_SINGLEQUOTE_;
}),pages_and_blocks);
}));
});
/**
 * Adds :properties to export for given namespace parents. Current use case is for :exclude-namespaces
 * so no need to add :classes yet
 */
logseq.db.sqlite.export$.add_ontology_for_include_namespaces = (function logseq$db$sqlite$export$add_ontology_for_include_namespaces(db,p__59019){
var map__59020 = p__59019;
var map__59020__$1 = cljs.core.__destructure_map(map__59020);
var graph_export = map__59020__$1;
var auto_include_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59020__$1,new cljs.core.Keyword("logseq.db.sqlite.export","auto-include-namespaces","logseq.db.sqlite.export/auto-include-namespaces",394890806));
var include_regex = cljs.core.re_pattern((""+"^("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,auto_include_namespaces)))+")(\\.|$)"));
var used_properties = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59018_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__59018_SHARP_,cljs.core.select_keys((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__59018_SHARP_) : datascript.core.entity.call(null,db,p1__59018_SHARP_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null))],null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59017_SHARP_){
return cljs.core.re_find(include_regex,cljs.core.namespace(p1__59017_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.internal_property_QMARK_,cljs.core.keys(logseq.db.sqlite.build.get_used_properties_from_options(graph_export))))));
return cljs.core.select_keys(logseq.db.sqlite.export$.merge_export_maps.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(graph_export,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),used_properties], null)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552)], null));
});
logseq.db.sqlite.export$.datom_export_QMARK_ = (function logseq$db$sqlite$export$datom_export_QMARK_(export_map){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),new cljs.core.Keyword("logseq.db.sqlite.export","graph-format","logseq.db.sqlite.export/graph-format",1997995299).cljs$core$IFn$_invoke$arity$1(export_map));
});
logseq.db.sqlite.export$.graph_datom_export_excluded_kvs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword("logseq.kv","import-type","logseq.kv/import-type",-1734132414),null,new cljs.core.Keyword("logseq.kv","imported-at","logseq.kv/imported-at",1693773096),null,new cljs.core.Keyword("logseq.kv","graph-git-sha","logseq.kv/graph-git-sha",-1509491768),null,new cljs.core.Keyword("logseq.kv","graph-remote?","logseq.kv/graph-remote?",103246217),null,new cljs.core.Keyword("logseq.kv","local-graph-uuid","logseq.kv/local-graph-uuid",1789980105),null,new cljs.core.Keyword("logseq.kv","graph-rtc-e2ee?","logseq.kv/graph-rtc-e2ee?",1988827753),null,new cljs.core.Keyword("logseq.kv","graph-local-tx","logseq.kv/graph-local-tx",-337271478),null,new cljs.core.Keyword("logseq.kv","remote-schema-version","logseq.kv/remote-schema-version",988970829),null,new cljs.core.Keyword("logseq.kv","graph-last-gc-at","logseq.kv/graph-last-gc-at",13146990),null,new cljs.core.Keyword("logseq.kv","graph-uuid","logseq.kv/graph-uuid",339522676),null,new cljs.core.Keyword("logseq.kv","graph-backup-folder","logseq.kv/graph-backup-folder",-1042314532),null], null), null);
logseq.db.sqlite.export$.graph_datom_export_excluded_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("logseq.property.user","name","logseq.property.user/name",-1360026016),null,new cljs.core.Keyword("block","tx-id","block/tx-id",547556161),null,new cljs.core.Keyword("logseq.property.user","avatar","logseq.property.user/avatar",-416548858),null,new cljs.core.Keyword("logseq.property.embedding","hnsw-label-updated-at","logseq.property.embedding/hnsw-label-updated-at",1339611305),null,new cljs.core.Keyword("logseq.property.user","email","logseq.property.user/email",-1655206063),null,new cljs.core.Keyword("logseq.property","created-by-ref","logseq.property/created-by-ref",854433908),null,new cljs.core.Keyword("logseq.property.embedding","hnsw-label","logseq.property.embedding/hnsw-label",-565487818),null], null), null);
logseq.db.sqlite.export$.graph_datom_export_excluded_eids = (function logseq$db$sqlite$export$graph_datom_export_excluded_eids(db){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__59021_SHARP_){
var G__59022 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__59021_SHARP_) : datascript.core.entity.call(null,db,p1__59021_SHARP_));
if((G__59022 == null)){
return null;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__59022);
}
})),logseq.db.sqlite.export$.graph_datom_export_excluded_kvs);
});
logseq.db.sqlite.export$.exportable_graph_datom_QMARK_ = (function logseq$db$sqlite$export$exportable_graph_datom_QMARK_(excluded_eids,datom){
return (((!(cljs.core.contains_QMARK_(excluded_eids,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom))))) && ((!(cljs.core.contains_QMARK_(logseq.db.sqlite.export$.graph_datom_export_excluded_attrs,new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom))))));
});
logseq.db.sqlite.export$.lookup_ref_QMARK_ = (function logseq$db$sqlite$export$lookup_ref_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(v))) && ((cljs.core.first(v) instanceof cljs.core.Keyword)))));
});
logseq.db.sqlite.export$.export_datom = (function logseq$db$sqlite$export$export_datom(db,datom){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom),(function (){var v = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
if(logseq.db.sqlite.export$.lookup_ref_QMARK_(v)){
var or__5142__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,v) : datascript.core.entity.call(null,db,v)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return v;
}
} else {
return v;
}
})()], null);
});
logseq.db.sqlite.export$.build_graph_datoms_export = (function logseq$db$sqlite$export$build_graph_datoms_export(db){
var excluded_eids = logseq.db.sqlite.export$.graph_datom_export_excluded_eids(db);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("logseq.db.sqlite.export","schema-version","logseq.db.sqlite.export/schema-version",641955265),logseq.db.frontend.schema.version,new cljs.core.Keyword("logseq.db.sqlite.export","graph-format","logseq.db.sqlite.export/graph-format",1997995299),new cljs.core.Keyword(null,"datoms","datoms",-290874434),new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59024_SHARP_){
return logseq.db.sqlite.export$.export_datom(db,p1__59024_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59023_SHARP_){
return logseq.db.sqlite.export$.exportable_graph_datom_QMARK_(excluded_eids,p1__59023_SHARP_);
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))))))], null);
});
/**
 * Exports whole graph. Has the following options:
 * * :include-timestamps? - When set, timestamps are included on all blocks except for property value blocks
 * * :exclude-namespaces - A set of parent namespaces to exclude from properties and classes.
 *   This is useful for graphs seeded with an ontology e.g. schema.org as it eliminates noisy and needless
 *   export+import
 * * :exclude-built-in-pages? - When set, built-in pages are excluded from export
 * * :exclude-files? - When set, files are excluded from export
 */
logseq.db.sqlite.export$.build_graph_export = (function logseq$db$sqlite$export$build_graph_export(db,p__59026){
var map__59027 = p__59026;
var map__59027__$1 = cljs.core.__destructure_map(map__59027);
var options_STAR_ = map__59027__$1;
var exclude_files_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59027__$1,new cljs.core.Keyword(null,"exclude-files?","exclude-files?",-1565120899));
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property-value-uuids?","property-value-uuids?",-339905445),true,new cljs.core.Keyword(null,"include-alias?","include-alias?",746737871),true], null)], 0));
var content_ref_uuids = logseq.db.sqlite.export$.get_graph_content_ref_uuids(db,options);
var ontology_options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-uuid?","include-uuid?",-167629975),true], null)], 0));
var ontology_export = logseq.db.sqlite.export$.build_graph_ontology_export(db,ontology_options);
var ontology_pvalue_uuids = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq.db.sqlite.export$.get_pvalue_uuids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(ontology_export))], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq.db.sqlite.export$.get_pvalue_uuids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(ontology_export))], 0))));
var pages_export = logseq.db.sqlite.export$.build_graph_pages_export(db,ontology_export,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"include-pvalue-uuid-fn","include-pvalue-uuid-fn",-1252023763),content_ref_uuids));
var graph_export_STAR_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ontology_export,pages_export], 0)),new cljs.core.Keyword(null,"pvalue-uuids","pvalue-uuids",-471206294));
var graph_export = ((cljs.core.seq(new cljs.core.Keyword(null,"exclude-namespaces","exclude-namespaces",-1345442365).cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(graph_export_STAR_,new cljs.core.Keyword("logseq.db.sqlite.export","auto-include-namespaces","logseq.db.sqlite.export/auto-include-namespaces",394890806),new cljs.core.Keyword(null,"exclude-namespaces","exclude-namespaces",-1345442365).cljs$core$IFn$_invoke$arity$1(options)):graph_export_STAR_);
var property_history = logseq.db.sqlite.export$.build_property_history(db);
var property_history_ref_uuids = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (history){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__59025_SHARP_){
if(cljs.core.vector_QMARK_(p1__59025_SHARP_)){
return cljs.core.second(p1__59025_SHARP_);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property.history","block","logseq.property.history/block",114255416).cljs$core$IFn$_invoke$arity$1(history),new cljs.core.Keyword("logseq.property.history","ref-value","logseq.property.history/ref-value",-513136037).cljs$core$IFn$_invoke$arity$1(history)], null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([property_history], 0)));
var all_ref_uuids = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(content_ref_uuids,ontology_pvalue_uuids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pvalue-uuids","pvalue-uuids",-471206294).cljs$core$IFn$_invoke$arity$1(pages_export),property_history_ref_uuids], 0));
var files = (cljs.core.truth_(exclude_files_QMARK_)?null:logseq.db.sqlite.export$.build_graph_files(db,options));
var kv_values = logseq.db.sqlite.export$.build_kv_values(db);
var graph_export_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(logseq.db.sqlite.export$.remove_uuids_if_not_ref(graph_export,all_ref_uuids),new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),logseq.db.sqlite.export$.sort_pages_and_blocks),new cljs.core.Keyword("logseq.db.sqlite.export","schema-version","logseq.db.sqlite.export/schema-version",641955265),logseq.db.frontend.schema.version);
var G__59028 = graph_export_SINGLEQUOTE_;
var G__59028__$1 = ((cljs.core.not(exclude_files_QMARK_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59028,new cljs.core.Keyword("logseq.db.sqlite.export","graph-files","logseq.db.sqlite.export/graph-files",-1710476749),files):G__59028);
var G__59028__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59028__$1,new cljs.core.Keyword("logseq.db.sqlite.export","kv-values","logseq.db.sqlite.export/kv-values",-658674363),kv_values)
;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59028__$2,new cljs.core.Keyword("logseq.db.sqlite.export","property-history","logseq.db.sqlite.export/property-history",736802015),property_history);

});
logseq.db.sqlite.export$.find_undefined_classes_and_properties = (function logseq$db$sqlite$export$find_undefined_classes_and_properties(p__59031){
var map__59032 = p__59031;
var map__59032__$1 = cljs.core.__destructure_map(map__59032);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59032__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59032__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var pages_and_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59032__$1,new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185));
var referenced_classes = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.class$.logseq_class_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("build","property-classes","build/property-classes",1099271032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(properties)], 0)),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("class","parent","class/parent",-917401011),cljs.core.vals(classes)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword(null,"page","page",849072397)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_and_blocks], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__59029_SHARP_){
return logseq.db.sqlite.build.extract_from_blocks(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(p1__59029_SHARP_),new cljs.core.Keyword("build","tags","build/tags",1814686611));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_and_blocks], 0))], 0))));
var undefined_classes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(referenced_classes,cljs.core.set(cljs.core.keys(classes)));
var referenced_properties = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.internal_property_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("build","class-properties","build/class-properties",1278125544),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(classes)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.keys,new cljs.core.Keyword("build","properties","build/properties",708607786),new cljs.core.Keyword(null,"page","page",849072397)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_and_blocks], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__59030_SHARP_){
return logseq.db.sqlite.build.extract_from_blocks(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(p1__59030_SHARP_),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,new cljs.core.Keyword("build","properties","build/properties",708607786)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_and_blocks], 0))], 0))));
var undefined_properties = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(referenced_properties,cljs.core.set(cljs.core.keys(properties)));
var undefined = (function (){var G__59033 = cljs.core.PersistentArrayMap.EMPTY;
var G__59033__$1 = ((cljs.core.seq(undefined_classes))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59033,new cljs.core.Keyword(null,"classes","classes",2037804510),undefined_classes):G__59033);
if(cljs.core.seq(undefined_properties)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59033__$1,new cljs.core.Keyword(null,"properties","properties",685819552),undefined_properties);
} else {
return G__59033__$1;
}
})();
return undefined;
});
logseq.db.sqlite.export$.find_undefined_uuids = (function logseq$db$sqlite$export$find_undefined_uuids(db,p__59040){
var map__59041 = p__59040;
var map__59041__$1 = cljs.core.__destructure_map(map__59041);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59041__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59041__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var pages_and_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59041__$1,new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185));
var pvalue_known_uuids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var _ = clojure.walk.postwalk((function (f){
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.db.sqlite.build.block_property_value_QMARK_(f);
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(f);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pvalue_known_uuids,cljs.core.conj,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(f));
} else {
return f;
}
}),pages_and_blocks);
var known_uuids = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.vals(classes)),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.vals(properties)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__59034_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__59034_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null));
}),pages_and_blocks),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__59035_SHARP_){
return logseq.db.sqlite.build.extract_from_blocks(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(p1__59035_SHARP_),(function (m){
var G__59042 = m;
var G__59042__$1 = (((G__59042 == null))?null:new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__59042));
if((G__59042__$1 == null)){
return null;
} else {
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__59042__$1],null));
}
}));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_and_blocks], 0)),cljs.core.deref(pvalue_known_uuids)], 0)));
var ref_uuids = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (id){
var eid = (cljs.core.truth_(id)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null):null);
var G__59043 = eid;
var G__59043__$1 = (((G__59043 == null))?null:(datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,G__59043) : datascript.core.entity.call(null,db,G__59043)));
if((G__59043__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(G__59043__$1);
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__59036_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(p1__59036_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(classes)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__59037_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(p1__59037_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(properties)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__59038_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(p1__59038_SHARP_)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_and_blocks], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq.db.sqlite.export$.get_pvalue_uuids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(classes)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq.db.sqlite.export$.get_pvalue_uuids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(properties)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(logseq.db.sqlite.export$.get_pvalue_uuids,new cljs.core.Keyword(null,"page","page",849072397)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_and_blocks], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__59039_SHARP_){
return logseq.db.sqlite.build.extract_from_blocks(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(p1__59039_SHARP_),logseq.db.sqlite.export$.get_pvalue_uuids);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages_and_blocks], 0))], 0))));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(ref_uuids,known_uuids);
});
/**
 * Removes keys from this ns for maps passed sqlite.build fns as they don't need to validate or use them
 */
logseq.db.sqlite.export$.remove_namespaced_keys = (function logseq$db$sqlite$export$remove_namespaced_keys(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59051){
var vec__59052 = p__59051;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59052,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59052,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("logseq.db.sqlite.export",cljs.core.namespace(k));
}),m));
});
/**
 * Fixes invalids keywords whose name start with a number e.g. :user.property/2ndsomething
 */
logseq.db.sqlite.export$.patch_invalid_keywords = (function logseq$db$sqlite$export$patch_invalid_keywords(m){
var initial_version = new cljs.core.Keyword("kv","value","kv/value",305981670).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59055_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.kv","graph-initial-schema-version","logseq.kv/graph-initial-schema-version",91284097),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__59055_SHARP_));
}),new cljs.core.Keyword("logseq.db.sqlite.export","kv-values","logseq.db.sqlite.export/kv-values",-658674363).cljs$core$IFn$_invoke$arity$1(m))));
if(cljs.core.truth_((function (){var G__59057 = initial_version;
var G__59057__$1 = (((G__59057 == null))?null:logseq.db.frontend.schema.compare_schema_version(G__59057,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"major","major",-27376078),(64),new cljs.core.Keyword(null,"minor","minor",-608536071),(8)], null)));
if((G__59057__$1 == null)){
return null;
} else {
return (G__59057__$1 > (0));
}
})())){
return m;
} else {
return clojure.walk.postwalk((function (e){
if(cljs.core.truth_((function (){var and__5140__auto__ = (e instanceof cljs.core.Keyword);
if(and__5140__auto__){
var G__59058 = cljs.core.namespace(e);
if((G__59058 == null)){
return null;
} else {
return clojure.string.starts_with_QMARK_(G__59058,"user.");
}
} else {
return and__5140__auto__;
}
})())){
var sanitized_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(e),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59056_SHARP_){
return cljs.core.re_find(/[0-9a-zA-Z*+!_'?<>=-]{1}/,p1__59056_SHARP_);
}),clojure.string.replace_first(cljs.core.name(e),/^(\d)/,"NUM-$1"))));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sanitized_kw,e)){
return sanitized_kw;
} else {
return e;
}
} else {
return e;
}
}),m);
}
});
/**
 * Checks that export map is usable by sqlite.build including checking that
 * all referenced properties and classes are defined. This validation is not as robust
 * as validate-export. Checks related to properties and
 * classes are disabled when :exclude-namespaces is set because those checks can't be done
 */
logseq.db.sqlite.export$.basic_validate_export = (function logseq$db$sqlite$export$basic_validate_export(db,export_map_STAR_,p__59059){
var map__59060 = p__59059;
var map__59060__$1 = cljs.core.__destructure_map(map__59060);
var graph_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59060__$1,new cljs.core.Keyword(null,"graph-options","graph-options",1082521635));
if(logseq.db.sqlite.export$.datom_export_QMARK_(export_map_STAR_)){
return null;
} else {
var export_map = logseq.db.sqlite.export$.remove_namespaced_keys(export_map_STAR_);
if(cljs.core.seq(new cljs.core.Keyword(null,"exclude-namespaces","exclude-namespaces",-1345442365).cljs$core$IFn$_invoke$arity$1(graph_options))){
} else {
logseq.db.sqlite.build.validate_options(export_map);
}

var undefined_uuids = logseq.db.sqlite.export$.find_undefined_uuids(db,export_map);
var undefined = (function (){var G__59062 = cljs.core.PersistentArrayMap.EMPTY;
var G__59062__$1 = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"exclude-namespaces","exclude-namespaces",-1345442365).cljs$core$IFn$_invoke$arity$1(graph_options)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__59062,logseq.db.sqlite.export$.find_undefined_classes_and_properties(export_map)], 0)):G__59062);
if(cljs.core.seq(undefined_uuids)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59062__$1,new cljs.core.Keyword(null,"uuids","uuids",1487183590),undefined_uuids);
} else {
return G__59062__$1;
}
})();
if(cljs.core.seq(undefined)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"The following classes, uuids and properties are not defined: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([undefined], 0)))),undefined);
} else {
return null;
}
}
});
/**
 * Handles exporting db by given export-type. Most export options are meant for
 *   a human to edit and read except for :graph with :datoms.  There are two
 *   graph-wide exports, :graph and :graph-human. :graph is designed to be simple,
 *   reliable and for machines. :graph-human is designed for humans to read, edit
 *   and instill confidence that their full graph's data is accessible to them.
 *   :graph-human comes with a number of options to customize the export's
 *   granularity including toggling export of timestamps, files and certain
 *   namespaces. See build-graph-export for more
 */
logseq.db.sqlite.export$.build_export = (function logseq$db$sqlite$export$build_export(db,p__59063){
var map__59064 = p__59063;
var map__59064__$1 = cljs.core.__destructure_map(map__59064);
var options = map__59064__$1;
var export_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59064__$1,new cljs.core.Keyword(null,"export-type","export-type",-2087639167));
var export_map_STAR_ = (function (){var G__59065 = export_type;
var G__59065__$1 = (((G__59065 instanceof cljs.core.Keyword))?G__59065.fqn:null);
switch (G__59065__$1) {
case "block":
return logseq.db.sqlite.export$.build_block_export(db,new cljs.core.Keyword(null,"block-id","block-id",-70582834).cljs$core$IFn$_invoke$arity$1(options));

break;
case "page":
return logseq.db.sqlite.export$.build_page_export(db,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(options));

break;
case "view-nodes":
return logseq.db.sqlite.export$.build_view_nodes_export(db,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(options),cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group-by?","group-by?",732997650)], null)));

break;
case "selected-nodes":
return logseq.db.sqlite.export$.build_selected_nodes_export(db,new cljs.core.Keyword(null,"node-ids","node-ids",2015830052).cljs$core$IFn$_invoke$arity$1(options));

break;
case "graph-ontology":
return logseq.db.sqlite.export$.build_graph_ontology_export(db,cljs.core.PersistentArrayMap.EMPTY);

break;
case "graph":
return logseq.db.sqlite.export$.build_graph_datoms_export(db);

break;
case "graph-human":
return logseq.db.sqlite.export$.build_graph_export(db,new cljs.core.Keyword(null,"graph-options","graph-options",1082521635).cljs$core$IFn$_invoke$arity$1(options));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([export_type], 0)))+" is an invalid export-type"),cljs.core.PersistentArrayMap.EMPTY);

}
})();
var export_map = logseq.db.sqlite.export$.patch_invalid_keywords(export_map_STAR_);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-options","graph-options",1082521635),new cljs.core.Keyword(null,"catch-validation-errors?","catch-validation-errors?",-557303845)], null)))){
try{logseq.db.sqlite.export$.basic_validate_export(db,export_map,options);
}catch (e59066){if((e59066 instanceof cljs.core.ExceptionInfo)){
var e_59380 = e59066;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Caught error:",e_59380], 0));
} else {
throw e59066;

}
}} else {
logseq.db.sqlite.export$.basic_validate_export(db,export_map,options);
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(export_map,new cljs.core.Keyword("logseq.db.sqlite.export","export-type","logseq.db.sqlite.export/export-type",796276698),export_type);
});
logseq.db.sqlite.export$.add_uuid_to_page_if_exists = (function logseq$db$sqlite$export$add_uuid_to_page_if_exists(db,import_to_existing_page_uuids,p__59068,m){
var map__59069 = p__59068;
var map__59069__$1 = cljs.core.__destructure_map(map__59069);
var existing_pages_keep_properties_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59069__$1,new cljs.core.Keyword(null,"existing-pages-keep-properties?","existing-pages-keep-properties?",1888231509));
var temp__5823__auto__ = (cljs.core.truth_(new cljs.core.Keyword("build","journal","build/journal",1781180096).cljs$core$IFn$_invoke$arity$1(m))?(function (){var G__59071 = new cljs.core.Keyword("build","journal","build/journal",1781180096).cljs$core$IFn$_invoke$arity$1(m);
var G__59071__$1 = (((G__59071 == null))?null:datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),G__59071));
var G__59071__$2 = (((G__59071__$1 == null))?null:cljs.core.first(G__59071__$1));
var G__59071__$3 = (((G__59071__$2 == null))?null:new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(G__59071__$2));
if((G__59071__$3 == null)){
return null;
} else {
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,G__59071__$3) : datascript.core.entity.call(null,db,G__59071__$3));
}
})():(function (){var G__59072 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m);
if((G__59072 == null)){
return null;
} else {
return logseq.db.get_case_page(db,G__59072);
}
})());
if(cljs.core.truth_(temp__5823__auto__)){
var ent = temp__5823__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(import_to_existing_page_uuids,cljs.core.assoc,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ent));

var G__59073 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ent));
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("build","properties","build/properties",708607786).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(and__5140__auto__)){
return existing_pages_keep_properties_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59073,new cljs.core.Keyword("build","properties","build/properties",708607786),(function (props){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59074){
var vec__59075 = p__59074;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59075,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59075,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ent,k);
}),props));
}));
} else {
return G__59073;
}
} else {
return m;
}
});
/**
 * Updates existing properties by ident. Also check imported and existing properties have
 * the same cardinality and type to avoid failure after import
 */
logseq.db.sqlite.export$.update_existing_properties = (function logseq$db$sqlite$export$update_existing_properties(db,property_conflicts,properties){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59080){
var vec__59081 = p__59080;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59081,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59081,(1),null);
var temp__5823__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,k) : datascript.core.entity.call(null,db,k));
if(cljs.core.truth_(temp__5823__auto__)){
var ent = temp__5823__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(ent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),cljs.core.select_keys(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(property_conflicts,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"property-id","property-id",404996975),k,new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.select_keys(v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.select_keys(ent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null))], null));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ent))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
}),properties));
});
/**
 * Checks export map for existing entities and adds :block/uuid to them if they exist in graph to import.
 * Also checks for property conflicts between existing properties and properties to be imported
 */
logseq.db.sqlite.export$.check_for_existing_entities = (function logseq$db$sqlite$export$check_for_existing_entities(db,p__59088,property_conflicts){
var map__59089 = p__59088;
var map__59089__$1 = cljs.core.__destructure_map(map__59089);
var export_map = map__59089__$1;
var pages_and_blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59089__$1,new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59089__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59089__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var export_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59089__$1,new cljs.core.Keyword("logseq.db.sqlite.export","export-type","logseq.db.sqlite.export/export-type",796276698));
var import_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59089__$1,new cljs.core.Keyword("logseq.db.sqlite.export","import-options","logseq.db.sqlite.export/import-options",-685976386));
var import_to_existing_page_uuids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var export_map__$1 = (function (){var G__59090 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"build-existing-tx?","build-existing-tx?",-2032344658),true,new cljs.core.Keyword(null,"extract-content-refs?","extract-content-refs?",-1224729418),false], null);
var G__59090__$1 = ((cljs.core.seq(pages_and_blocks))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59090,new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"page","page",849072397),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(logseq.db.sqlite.export$.add_uuid_to_page_if_exists,db,import_to_existing_page_uuids,import_options));
}),pages_and_blocks)):G__59090);
var G__59090__$2 = ((cljs.core.seq(classes))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59090__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59095){
var vec__59096 = p__59095;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59096,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59096,(1),null);
var temp__5823__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,k) : datascript.core.entity.call(null,db,k));
if(cljs.core.truth_(temp__5823__auto__)){
var ent = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ent))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
}),classes))):G__59090__$1);
var G__59090__$3 = ((cljs.core.seq(properties))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59090__$2,new cljs.core.Keyword(null,"properties","properties",685819552),logseq.db.sqlite.export$.update_existing_properties(db,property_conflicts,properties)):G__59090__$2);
var G__59090__$4 = (cljs.core.truth_((function (){var fexpr__59099 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-human","graph-human",453173153),null,new cljs.core.Keyword(null,"graph","graph",1558099509),null], null), null);
return (fexpr__59099.cljs$core$IFn$_invoke$arity$1 ? fexpr__59099.cljs$core$IFn$_invoke$arity$1(export_type) : fexpr__59099.call(null,export_type));
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59090__$3,new cljs.core.Keyword(null,"translate-property-values?","translate-property-values?",-1950851544),false):G__59090__$3);
if(cljs.core.truth_((function (){var fexpr__59101 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-human","graph-human",453173153),null,new cljs.core.Keyword(null,"graph","graph",1558099509),null], null), null);
return (fexpr__59101.cljs$core$IFn$_invoke$arity$1 ? fexpr__59101.cljs$core$IFn$_invoke$arity$1(export_type) : fexpr__59101.call(null,export_type));
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__59090__$4,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(export_map,new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.Keyword(null,"properties","properties",685819552)], 0))], 0));
} else {
return G__59090__$4;
}
})();
var export_map_SINGLEQUOTE_ = (cljs.core.truth_((function (){var fexpr__59102 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-human","graph-human",453173153),null,new cljs.core.Keyword(null,"graph","graph",1558099509),null], null), null);
return (fexpr__59102.cljs$core$IFn$_invoke$arity$1 ? fexpr__59102.cljs$core$IFn$_invoke$arity$1(export_type) : fexpr__59102.call(null,export_type));
})())?export_map__$1:clojure.walk.postwalk((function (f){
if(((cljs.core.vector_QMARK_(f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("build","page","build/page",822051483),cljs.core.first(f))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("build","page","build/page",822051483),logseq.db.sqlite.export$.add_uuid_to_page_if_exists(db,import_to_existing_page_uuids,import_options,cljs.core.second(f))], null);
} else {
return f;
}
}),export_map__$1));
var export_map_SINGLEQUOTE__SINGLEQUOTE_ = clojure.walk.postwalk((function (f){
var temp__5823__auto__ = (function (){var and__5140__auto__ = cljs.core.vector_QMARK_(f);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(f));
if(and__5140__auto____$1){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(import_to_existing_page_uuids),cljs.core.second(f));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var new_uuid = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new_uuid], null);
} else {
return f;
}
}),export_map_SINGLEQUOTE_);
return export_map_SINGLEQUOTE__SINGLEQUOTE_;
});
/**
 * Builds options for sqlite-build to import into current-block
 */
logseq.db.sqlite.export$.build_block_import_options = (function logseq$db$sqlite$export$build_block_import_options(current_block,export_map){
var block = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("logseq.db.sqlite.export","block","logseq.db.sqlite.export/block",469582025).cljs$core$IFn$_invoke$arity$1(export_map),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(current_block),new cljs.core.Keyword("block","page","block/page",822314108),cljs.core.select_keys(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(current_block),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null))], null)], 0));
var pages_and_blocks = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),cljs.core.select_keys(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)),new cljs.core.Keyword(null,"blocks","blocks",-610462153),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("block","page","block/page",822314108))], null)], null)], null);
return logseq.db.sqlite.export$.merge_export_maps.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([export_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pages-and-blocks","pages-and-blocks",-214876185),pages_and_blocks], null)], 0));
});
logseq.db.sqlite.export$.current_db_retract_tx = (function logseq$db$sqlite$export$current_db_retract_tx(db){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),e], null);
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073)))));
});
logseq.db.sqlite.export$.datom_schema_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","index","db/index",-1531680669),null,new cljs.core.Keyword("db","unique","db/unique",329396388),null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),null,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),null,new cljs.core.Keyword("db","ident","db/ident",-737096),null], null), null);
logseq.db.sqlite.export$.schema_datom_eids = (function logseq$db$sqlite$export$schema_datom_eids(datoms){
var ident_eids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__59115){
var vec__59116 = p__59115;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59116,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59116,(1),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59116,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),a)){
return e;
} else {
return null;
}
})),datoms);
var schema_eids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__59119){
var vec__59121 = p__59119;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59121,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59121,(1),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59121,(2),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),a);
if(and__5140__auto__){
return (logseq.db.sqlite.export$.datom_schema_attrs.cljs$core$IFn$_invoke$arity$1 ? logseq.db.sqlite.export$.datom_schema_attrs.cljs$core$IFn$_invoke$arity$1(a) : logseq.db.sqlite.export$.datom_schema_attrs.call(null,a));
} else {
return and__5140__auto__;
}
})())){
return e;
} else {
return null;
}
})),datoms);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(ident_eids,schema_eids);
});
logseq.db.sqlite.export$.resolve_lookup_refs = (function logseq$db$sqlite$export$resolve_lookup_refs(datoms){
var lookup_ref__GT_eid = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__59124){
var vec__59125 = p__59124;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59125,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59125,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59125,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null),e);
}),cljs.core.PersistentArrayMap.EMPTY,datoms);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59130){
var vec__59132 = p__59130;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59132,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59132,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59132,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,((logseq.db.sqlite.export$.lookup_ref_QMARK_(v))?cljs.core.get.cljs$core$IFn$_invoke$arity$3(lookup_ref__GT_eid,v,v):v)], null);
}),datoms);
});
logseq.db.sqlite.export$.datoms_for_import = (function logseq$db$sqlite$export$datoms_for_import(datoms){
var datoms__$1 = logseq.db.sqlite.export$.resolve_lookup_refs(datoms);
var schema_eids = logseq.db.sqlite.export$.schema_datom_eids(datoms__$1);
var schema_datoms = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59136){
var vec__59137 = p__59136;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59137,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59137,(1),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59137,(2),null);
var and__5140__auto__ = (schema_eids.cljs$core$IFn$_invoke$arity$1 ? schema_eids.cljs$core$IFn$_invoke$arity$1(e) : schema_eids.call(null,e));
if(cljs.core.truth_(and__5140__auto__)){
return (logseq.db.sqlite.export$.datom_schema_attrs.cljs$core$IFn$_invoke$arity$1 ? logseq.db.sqlite.export$.datom_schema_attrs.cljs$core$IFn$_invoke$arity$1(a) : logseq.db.sqlite.export$.datom_schema_attrs.call(null,a));
} else {
return and__5140__auto__;
}
}),datoms__$1);
var schema_datoms_SINGLEQUOTE_ = cljs.core.set(schema_datoms);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(schema_datoms,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema_datoms_SINGLEQUOTE_,datoms__$1));
});
logseq.db.sqlite.export$.build_datom_import = (function logseq$db$sqlite$export$build_datom_import(export_map,db){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-tx","init-tx",191693574),cljs.core.into.cljs$core$IFn$_invoke$arity$3(logseq.db.sqlite.export$.current_db_retract_tx(db),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__59142){
var vec__59146 = p__59142;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59146,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59146,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59146,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v], null);
})),logseq.db.sqlite.export$.datoms_for_import(new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(export_map))),new cljs.core.Keyword(null,"block-props-tx","block-props-tx",414649),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"misc-tx","misc-tx",-622781628),cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Given an export map, build the import tx to create it. In addition to standard sqlite.build keys,
 * an export map can have the following namespaced keys:
 * * ::export-type - Keyword indicating export type
 * * ::block - Block map for a :block export
 * * :datoms - Vec of [e a v] datom tuples for a :graph export
 * * ::graph-files - Vec of files for a :graph-human export
 * * ::kv-values - Vec of :kv/value maps for a :graph-human export
 * * ::property-history - Set of property history blocks for a :graph-human export
 * * ::auto-include-namespaces - A set of parent namespaces to include from properties and classes
 *   for a :graph-human export. See :exclude-namespaces in build-graph-export for a similar option
 * * ::import-options - A map of options that alters importing behavior. Has the following keys:
 *   * :existing-pages-keep-properties? - Boolean which allows existing pages to keep existing properties
 * 
 * This fn then returns a map of txs to transact with the following keys:
 * * :init-tx - Txs that must be transacted first, usually because they define new properties
 * * :block-props-tx - Txs to transact after :init-tx, usually because they use newly defined properties
 * * :misc-tx - Txs to transact unrelated to other txs
 */
logseq.db.sqlite.export$.build_import = (function logseq$db$sqlite$export$build_import(export_map_STAR_,db,p__59150){
var map__59151 = p__59150;
var map__59151__$1 = cljs.core.__destructure_map(map__59151);
var current_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59151__$1,new cljs.core.Keyword(null,"current-block","current-block",1027687970));
if(logseq.db.sqlite.export$.datom_export_QMARK_(export_map_STAR_)){
return logseq.db.sqlite.export$.build_datom_import(export_map_STAR_,db);
} else {
var export_map = (cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("logseq.db.sqlite.export","block","logseq.db.sqlite.export/block",469582025).cljs$core$IFn$_invoke$arity$1(export_map_STAR_);
if(cljs.core.truth_(and__5140__auto__)){
return current_block;
} else {
return and__5140__auto__;
}
})())?logseq.db.sqlite.export$.build_block_import_options(current_block,export_map_STAR_):export_map_STAR_);
var export_map_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__5140__auto__ = (function (){var G__59156 = new cljs.core.Keyword("logseq.db.sqlite.export","export-type","logseq.db.sqlite.export/export-type",796276698).cljs$core$IFn$_invoke$arity$1(export_map_STAR_);
var fexpr__59155 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-human","graph-human",453173153),null,new cljs.core.Keyword(null,"graph","graph",1558099509),null], null), null);
return (fexpr__59155.cljs$core$IFn$_invoke$arity$1 ? fexpr__59155.cljs$core$IFn$_invoke$arity$1(G__59156) : fexpr__59155.call(null,G__59156));
})();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(new cljs.core.Keyword("logseq.db.sqlite.export","auto-include-namespaces","logseq.db.sqlite.export/auto-include-namespaces",394890806).cljs$core$IFn$_invoke$arity$1(export_map_STAR_));
} else {
return and__5140__auto__;
}
})())?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(export_map,new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("logseq.db.sqlite.export","auto-include-namespaces","logseq.db.sqlite.export/auto-include-namespaces",394890806)], 0)),logseq.db.sqlite.export$.add_ontology_for_include_namespaces(db,export_map)], 0)):export_map);
var property_conflicts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var export_map_SINGLEQUOTE__SINGLEQUOTE_ = logseq.db.sqlite.export$.check_for_existing_entities(db,export_map_SINGLEQUOTE_,property_conflicts);
if(cljs.core.seq(cljs.core.deref(property_conflicts))){
console.error(new cljs.core.Keyword(null,"property-conflicts","property-conflicts",810341766),cljs.core.deref(property_conflicts));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),(""+"The following imported properties conflict with the current graph: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"property-id","property-id",404996975),cljs.core.deref(property_conflicts))], 0))))], null);
} else {
if(cljs.core.truth_((function (){var G__59158 = new cljs.core.Keyword("logseq.db.sqlite.export","export-type","logseq.db.sqlite.export/export-type",796276698).cljs$core$IFn$_invoke$arity$1(export_map_SINGLEQUOTE__SINGLEQUOTE_);
var fexpr__59157 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-human","graph-human",453173153),null,new cljs.core.Keyword(null,"graph","graph",1558099509),null], null), null);
return (fexpr__59157.cljs$core$IFn$_invoke$arity$1 ? fexpr__59157.cljs$core$IFn$_invoke$arity$1(G__59158) : fexpr__59157.call(null,G__59158));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logseq.db.sqlite.build.build_blocks_tx(logseq.db.sqlite.export$.remove_namespaced_keys(export_map_SINGLEQUOTE__SINGLEQUOTE_)),new cljs.core.Keyword(null,"misc-tx","misc-tx",-622781628),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("logseq.db.sqlite.export","graph-files","logseq.db.sqlite.export/graph-files",-1710476749).cljs$core$IFn$_invoke$arity$1(export_map_SINGLEQUOTE__SINGLEQUOTE_),new cljs.core.Keyword("logseq.db.sqlite.export","kv-values","logseq.db.sqlite.export/kv-values",-658674363).cljs$core$IFn$_invoke$arity$1(export_map_SINGLEQUOTE__SINGLEQUOTE_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("logseq.db.sqlite.export","property-history","logseq.db.sqlite.export/property-history",736802015).cljs$core$IFn$_invoke$arity$1(export_map_SINGLEQUOTE__SINGLEQUOTE_)], 0))));
} else {
return logseq.db.sqlite.build.build_blocks_tx(logseq.db.sqlite.export$.remove_namespaced_keys(export_map_SINGLEQUOTE__SINGLEQUOTE_));
}
}

}
});
logseq.db.sqlite.export$.import_tx_data = (function logseq$db$sqlite$export$import_tx_data(p__59161){
var map__59162 = p__59161;
var map__59162__$1 = cljs.core.__destructure_map(map__59162);
var init_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59162__$1,new cljs.core.Keyword(null,"init-tx","init-tx",191693574));
var block_props_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59162__$1,new cljs.core.Keyword(null,"block-props-tx","block-props-tx",414649));
var misc_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59162__$1,new cljs.core.Keyword(null,"misc-tx","misc-tx",-622781628));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(init_tx,block_props_tx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([misc_tx], 0)));
});
logseq.db.sqlite.export$.disallowed_key_error_QMARK_ = (function logseq$db$sqlite$export$disallowed_key_error_QMARK_(error){
return cljs.core.some((function (p1__59163_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("disallowed key",p1__59163_SHARP_);
}),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,error));
});
logseq.db.sqlite.export$.disallowed_key_attrs = (function logseq$db$sqlite$export$disallowed_key_attrs(errors){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__59164){
var map__59167 = p__59164;
var map__59167__$1 = cljs.core.__destructure_map(map__59167);
var entity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59167__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var errors__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59167__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var attrs = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__59168){
var vec__59169 = p__59168;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59169,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59169,(1),null);
if(cljs.core.truth_(logseq.db.sqlite.export$.disallowed_key_error_QMARK_(error))){
return attr;
} else {
return null;
}
}),errors__$1));
if(cljs.core.seq(attrs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity),attrs], null);
} else {
return null;
}
})),errors);
});
logseq.db.sqlite.export$.all_disallowed_key_errors_QMARK_ = (function logseq$db$sqlite$export$all_disallowed_key_errors_QMARK_(errors){
return cljs.core.every_QMARK_((function (p__59177){
var map__59178 = p__59177;
var map__59178__$1 = cljs.core.__destructure_map(map__59178);
var errors__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59178__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
return ((cljs.core.seq(errors__$1)) && (cljs.core.every_QMARK_(logseq.db.sqlite.export$.disallowed_key_error_QMARK_,cljs.core.vals(errors__$1))));
}),errors);
});
logseq.db.sqlite.export$.remove_disallowed_key_datoms = (function logseq$db$sqlite$export$remove_disallowed_key_datoms(tx_data,eid__GT_attrs){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (tx){
return ((cljs.core.vector_QMARK_(tx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","add","db/add",235286841),cljs.core.first(tx))) && (cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(eid__GT_attrs,cljs.core.second(tx)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tx,(2)))))));
}),tx_data);
});
logseq.db.sqlite.export$.tx_touched_entity_ids = (function logseq$db$sqlite$export$tx_touched_entity_ids(tx_report){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report))));
});
logseq.db.sqlite.export$.validate_import_tx_data = (function logseq$db$sqlite$export$validate_import_tx_data(txs,db,edn_label,validate_scope){
var tx_data = logseq.db.sqlite.export$.import_tx_data(txs);
while(true){
var tx_report = (datascript.core.with$.cljs$core$IFn$_invoke$arity$2 ? datascript.core.with$.cljs$core$IFn$_invoke$arity$2(db,tx_data) : datascript.core.with$.call(null,db,tx_data));
var db_after = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report);
var validation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx","tx",466630418),validate_scope))?logseq.db.frontend.validate.validate_local_db_BANG_.cljs$core$IFn$_invoke$arity$variadic(db_after,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"entity-ids","entity-ids",-963844196),logseq.db.sqlite.export$.tx_touched_entity_ids(tx_report)], 0)):logseq.db.frontend.validate.validate_local_db_BANG_(db_after));
var temp__5823__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(validation));
if(temp__5823__auto__){
var errors = temp__5823__auto__;
var eid__GT_attrs = logseq.db.sqlite.export$.disallowed_key_attrs(errors);
var tx_data_SINGLEQUOTE_ = logseq.db.sqlite.export$.remove_disallowed_key_datoms(tx_data,eid__GT_attrs);
if(((logseq.db.sqlite.export$.all_disallowed_key_errors_QMARK_(errors)) && (((cljs.core.seq(eid__GT_attrs)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(tx_data),cljs.core.count(tx_data_SINGLEQUOTE_))))))){
var G__59395 = cljs.core.vec(tx_data_SINGLEQUOTE_);
tx_data = G__59395;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),(""+"The "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn_label)+" has "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(errors))+" validation error(s)"),new cljs.core.Keyword(null,"errors","errors",-908790718),errors], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db_after,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),tx_data], null);
}
break;
}
});
/**
 * Dry-runs import txs against db and validates the resulting local DB.
 * Options:
 * * :edn-label - Label used in error messages. Default "Imported EDN"
 * * :validate-scope - :graph (default) validates every entity in db-after.
 *   :tx validates only entities touched by the import tx. Use :tx for
 *   incremental API/MCP writes; keep :graph for file and graph imports.
 * Returns {:db db-after :tx-data tx-data} when valid or {:error string} when invalid.
 */
logseq.db.sqlite.export$.validate_import_txs = (function logseq$db$sqlite$export$validate_import_txs(var_args){
var G__59187 = arguments.length;
switch (G__59187) {
case 2:
return logseq.db.sqlite.export$.validate_import_txs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.db.sqlite.export$.validate_import_txs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.db.sqlite.export$.validate_import_txs.cljs$core$IFn$_invoke$arity$2 = (function (txs,db){
return logseq.db.sqlite.export$.validate_import_txs.cljs$core$IFn$_invoke$arity$3(txs,db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edn-label","edn-label",-820053220),"Imported EDN"], null));
}));

(logseq.db.sqlite.export$.validate_import_txs.cljs$core$IFn$_invoke$arity$3 = (function (txs,db,p__59192){
var map__59193 = p__59192;
var map__59193__$1 = cljs.core.__destructure_map(map__59193);
var edn_label = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59193__$1,new cljs.core.Keyword(null,"edn-label","edn-label",-820053220),"Imported EDN");
var validate_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59193__$1,new cljs.core.Keyword(null,"validate-scope","validate-scope",-933525068),new cljs.core.Keyword(null,"graph","graph",1558099509));
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx","tx",466630418),null,new cljs.core.Keyword(null,"graph","graph",1558099509),null], null), null),validate_scope)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid validate-scope",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validate-scope","validate-scope",-933525068),validate_scope], null));
}

var temp__5823__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(txs);
if(cljs.core.truth_(temp__5823__auto__)){
var error = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null);
} else {
try{var result = logseq.db.sqlite.export$.validate_import_tx_data(txs,db,edn_label,validate_scope);
var temp__5823__auto____$1 = cljs.core.seq(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(result));
if(temp__5823__auto____$1){
var errors = temp__5823__auto____$1;
console.error((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn_label)+" has "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(errors))+" validation error(s)"));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__59199){
var map__59200 = p__59199;
var map__59200__$1 = cljs.core.__destructure_map(map__59200);
var entity_errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59200__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var entity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59200__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59200__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.select_keys(entity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684)], null)),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),dispatch_key,new cljs.core.Keyword(null,"errors","errors",-908790718),entity_errors], null);
}),errors));

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword(null,"errors","errors",-908790718));
} else {
return result;
}
}catch (e59198){var e = e59198;
console.error((""+"Unexpected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn_label)+" validation error:"),e);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),(""+"The "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(edn_label)+" is unexpectedly invalid: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_message(e)], 0))))], null);
}}
}));

(logseq.db.sqlite.export$.validate_import_txs.cljs$lang$maxFixedArity = 3);

/**
 * Create a conn for a DB graph seeded with initial data
 */
logseq.db.sqlite.export$.create_conn = (function logseq$db$sqlite$export$create_conn(){
var conn = (datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 ? datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.schema.schema) : datascript.core.create_conn.call(null,logseq.db.frontend.schema.schema));
var _ = (function (){var G__59201 = conn;
var G__59202 = logseq.db.sqlite.create_graph.build_db_initial_data("{}");
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__59201,G__59202) : datascript.core.transact_BANG_.call(null,G__59201,G__59202));
})();
logseq.db.common.entity_plus.reset_immutable_entities_cache_BANG_();

return conn;
});
/**
 * Validates an export by creating an in-memory DB graph, importing the EDN and validating the graph.
 * Returns a map with a readable :error key if any error occurs
 */
logseq.db.sqlite.export$.validate_export = (function logseq$db$sqlite$export$validate_export(export_edn){
try{var import_conn = logseq.db.sqlite.export$.create_conn();
var txs = logseq.db.sqlite.export$.build_import(export_edn,cljs.core.deref(import_conn),cljs.core.PersistentArrayMap.EMPTY);
return logseq.db.sqlite.export$.validate_import_txs.cljs$core$IFn$_invoke$arity$3(txs,cljs.core.deref(import_conn),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edn-label","edn-label",-820053220),"Exported EDN"], null));
}catch (e59203){var e = e59203;
console.error("Unexpected export-edn validation error:",e);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),(""+"The exported EDN is unexpectedly invalid: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_message(e)], 0))))], null);
}});
/**
 * Prepare a graph's exported edn to be diffed with another
 */
logseq.db.sqlite.export$.prepare_export_to_diff = (function logseq$db$sqlite$export$prepare_export_to_diff(m){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("logseq.db.sqlite.export","kv-values","logseq.db.sqlite.export/kv-values",-658674363),(function (kvs){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59206_SHARP_){
var G__59208 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__59206_SHARP_);
var fexpr__59207 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("logseq.kv","import-type","logseq.kv/import-type",-1734132414),null,new cljs.core.Keyword("logseq.kv","imported-at","logseq.kv/imported-at",1693773096),null,new cljs.core.Keyword("logseq.kv","local-graph-uuid","logseq.kv/local-graph-uuid",1789980105),null], null), null);
return (fexpr__59207.cljs$core$IFn$_invoke$arity$1 ? fexpr__59207.cljs$core$IFn$_invoke$arity$1(G__59208) : fexpr__59207.call(null,G__59208));
}),kvs)));
}));
});
/**
 * Given two graph export edns, return a vector of diffs when there is a diff and nil when there is
 * no diff between the two
 */
logseq.db.sqlite.export$.diff_exports = (function logseq$db$sqlite$export$diff_exports(export_map,export_map2){
var diff = cljs.core.butlast(clojure.data.diff(logseq.db.sqlite.export$.prepare_export_to_diff(export_map),logseq.db.sqlite.export$.prepare_export_to_diff(export_map2)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null),diff)){
return null;
} else {
return diff;
}
});

//# sourceMappingURL=logseq.db.sqlite.export.js.map
