goog.provide('logseq.db.common.view');
logseq.db.common.view.valid_type_for_sort_QMARK_ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.boolean_QMARK_);
logseq.db.common.view.get_property_value_for_search = (function logseq$db$common$view$get_property_value_for_search(block,property){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
if(cljs.core.truth_(logseq.db.common.view.valid_type_for_sort_QMARK_(v))){
return v;
} else {
var typ = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var many_QMARK_ = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),cljs.core.get.cljs$core$IFn$_invoke$arity$2(property,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)));
var number_type_QMARK_ = ((cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"number","number",1570378438),typ)) || (cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"datetime","datetime",494675702),typ)));
if(many_QMARK_){
var col = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(cljs.core.truth_((logseq.db.frontend.property.type.all_ref_property_types.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.property.type.all_ref_property_types.cljs$core$IFn$_invoke$arity$1(typ) : logseq.db.frontend.property.type.all_ref_property_types.call(null,typ)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.property_value_content,v):v));
if(number_type_QMARK_){
var nums = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,col);
if(cljs.core.seq(nums)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,nums);
} else {
return null;
}
} else {
if(cljs.core.seq(col)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",col);
} else {
return null;
}
}
} else {
var v_SINGLEQUOTE_ = (cljs.core.truth_((logseq.db.frontend.property.type.all_ref_property_types.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.property.type.all_ref_property_types.cljs$core$IFn$_invoke$arity$1(typ) : logseq.db.frontend.property.type.all_ref_property_types.call(null,typ)))?logseq.db.frontend.property.property_value_content(v):v);
if(((number_type_QMARK_) && (typeof v_SINGLEQUOTE_ === 'number'))){
return v_SINGLEQUOTE_;
} else {
return v_SINGLEQUOTE_;

}
}
}
});
logseq.db.common.view.get_value_for_sort = (function logseq$db$common$view$get_value_for_sort(property){
var db_ident = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(property);
}
})();
var closed_values = cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property));
var closed_value__GT_sort_number = ((closed_values)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),closed_values),((cljs.core.every_QMARK_(new cljs.core.Keyword("block","order","block/order",-1429282437),closed_values))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),closed_values):cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(closed_values))))):null);
var get_property_value_fn = (function (entity){
if(datascript.impl.entity.entity_QMARK_(property)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property))){
return new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,db_ident));
} else {
return logseq.db.common.view.get_property_value_for_search(entity,property);
}
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,db_ident);
}
});
return (function (entity){
if(closed_values){
var G__81364 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,db_ident));
return (closed_value__GT_sort_number.cljs$core$IFn$_invoke$arity$1 ? closed_value__GT_sort_number.cljs$core$IFn$_invoke$arity$1(G__81364) : closed_value__GT_sort_number.call(null,G__81364));
} else {
var v = get_property_value_fn(entity);
if(cljs.core.truth_(logseq.db.common.view.valid_type_for_sort_QMARK_(v))){
return v;
} else {
return null;
}

}
});
});
logseq.db.common.view.compare_sort_values = (function logseq$db$common$view$compare_sort_values(va,vb,asc_QMARK_){
if((((va == null)) && ((vb == null)))){
return (0);
} else {
if((va == null)){
return (1);
} else {
if((vb == null)){
return (-1);
} else {
var c = cljs.core.compare(va,vb);
if(cljs.core.truth_(asc_QMARK_)){
return c;
} else {
return (- c);
}

}
}
}
});
logseq.db.common.view.by_sorting = (function logseq$db$common$view$by_sorting(sorting){
return (function (a,b){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (order,p__81378){
var map__81379 = p__81378;
var map__81379__$1 = cljs.core.__destructure_map(map__81379);
var get_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81379__$1,new cljs.core.Keyword(null,"get-value","get-value",2108514284));
var asc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81379__$1,new cljs.core.Keyword(null,"asc?","asc?",891093427));
if((order === (0))){
return logseq.db.common.view.compare_sort_values((get_value.cljs$core$IFn$_invoke$arity$1 ? get_value.cljs$core$IFn$_invoke$arity$1(a) : get_value.call(null,a)),(get_value.cljs$core$IFn$_invoke$arity$1 ? get_value.cljs$core$IFn$_invoke$arity$1(b) : get_value.call(null,b)),asc_QMARK_);
} else {
return cljs.core.reduced(order);
}
}),(0),sorting);
});
});
/**
 * get all entities sorted by `major-sorting`
 */
logseq.db.common.view.sort_ref_entities_by_single_property = (function logseq$db$common$view$sort_ref_entities_by_single_property(entities,p__81380,get_value_fn){
var map__81381 = p__81380;
var map__81381__$1 = cljs.core.__destructure_map(map__81381);
var _id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81381__$1,new cljs.core.Keyword(null,"_id","_id",-789960287));
var asc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81381__$1,new cljs.core.Keyword(null,"asc?","asc?",891093427));
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(logseq.db.common.view.by_sorting(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asc?","asc?",891093427),asc_QMARK_,new cljs.core.Keyword(null,"get-value","get-value",2108514284),get_value_fn], null)], null)),entities);
});
logseq.db.common.view.sort_by_single_property = (function logseq$db$common$view$sort_by_single_property(db,p__81384,entities,partition_QMARK_){
var map__81385 = p__81384;
var map__81385__$1 = cljs.core.__destructure_map(map__81385);
var sorting = map__81385__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81385__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var asc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81385__$1,new cljs.core.Keyword(null,"asc?","asc?",891093427));
var property = (function (){var or__5142__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),id], null);
}
})();
var get_value_fn = cljs.core.memoize(logseq.db.common.view.get_value_for_sort(property));
var entities_SINGLEQUOTE_ = ((cljs.core.vector_QMARK_(entities))?entities:cljs.core.vec(entities));
var datom_sort_supported_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),null,new cljs.core.Keyword("block","created-at","block/created-at",1440015),null,new cljs.core.Keyword("block","title","block/title",710445684),null], null), null),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
var use_datom_sort_QMARK_ = ((datom_sort_supported_QMARK_) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(property))) && ((cljs.core.count(entities_SINGLEQUOTE_) > (10000))))));
var sorted_entities = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499)))?cljs.core.sort.cljs$core$IFn$_invoke$arity$2(logseq.db.common.view.by_sorting(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asc?","asc?",891093427),asc_QMARK_,new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499)], null)], null)),entities_SINGLEQUOTE_):((use_datom_sort_QMARK_)?(function (){var datoms = (function (){var G__81386 = cljs.core.vec(logseq.common.util.distinct_by(new cljs.core.Keyword(null,"e","e",1381269198),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),id)));
if(cljs.core.not(asc_QMARK_)){
return cljs.core.rseq(G__81386);
} else {
return G__81386;
}
})();
var row_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),entities_SINGLEQUOTE_));
var id__GT_row = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),entities_SINGLEQUOTE_),entities_SINGLEQUOTE_);
var sorted_eids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(row_ids)),datoms);
var missing_eids = cljs.core.sort.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(asc_QMARK_)?cljs.core.compare:(function (p1__81383_SHARP_,p2__81382_SHARP_){
return cljs.core.compare(p2__81382_SHARP_,p1__81383_SHARP_);
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(sorted_eids),row_ids));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(id__GT_row,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sorted_eids,missing_eids));
})():logseq.db.common.view.sort_ref_entities_by_single_property(entities_SINGLEQUOTE_,sorting,get_value_fn)
)));
if(cljs.core.truth_(partition_QMARK_)){
return cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(get_value_fn,sorted_entities);
} else {
return sorted_entities;
}
});
/**
 * minor-sorting - [{:keys [id asc?]} ...]
 */
logseq.db.common.view.sort_entities_by_minor_sorting = (function logseq$db$common$view$sort_entities_by_minor_sorting(db,partitioned_entities_by_major_sorting,minor_sorting){
var sorting = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81387){
var map__81388 = p__81387;
var map__81388__$1 = cljs.core.__destructure_map(map__81388);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81388__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var asc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81388__$1,new cljs.core.Keyword(null,"asc?","asc?",891093427));
var property = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asc?","asc?",891093427),asc_QMARK_,new cljs.core.Keyword(null,"get-value","get-value",2108514284),cljs.core.memoize(logseq.db.common.view.get_value_for_sort(property))], null);
}),minor_sorting);
var sort_cmp = logseq.db.common.view.by_sorting(sorting);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (entities){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(sort_cmp,entities);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([partitioned_entities_by_major_sorting], 0));
});
logseq.db.common.view.sort_entities = (function logseq$db$common$view$sort_entities(db,sorting,entities){
var major_sorting = (function (){var or__5142__auto__ = cljs.core.first(sorting);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword(null,"asc?","asc?",891093427),false], null);
}
})();
var minor_sorting = cljs.core.seq(cljs.core.rest(sorting));
var major_sorted_entities = logseq.db.common.view.sort_by_single_property(db,major_sorting,entities,cljs.core.not_empty(minor_sorting));
if(minor_sorting){
return logseq.db.common.view.sort_entities_by_minor_sorting(db,major_sorted_entities,minor_sorting);
} else {
return major_sorted_entities;
}
});
logseq.db.common.view.get_property_value_content = (function logseq$db$common$view$get_property_value_content(db,value){
if(cljs.core.truth_(value)){
if(cljs.core.uuid_QMARK_(value)){
return logseq.db.frontend.property.property_value_content((function (){var G__81389 = db;
var G__81390 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),value], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__81389,G__81390) : datascript.core.entity.call(null,G__81389,G__81390));
})());
} else {
if(datascript.impl.entity.entity_QMARK_(value)){
return logseq.db.frontend.property.property_value_content(value);
} else {
if((value instanceof cljs.core.Keyword)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
} else {
return value;

}
}
}
} else {
return null;
}
});
/**
 * Determines if the property value entity should be treated as an entity. For some property types
 * like :default, we want match on the entity's content as that is what the user sees and interacts with
 */
logseq.db.common.view.match_property_value_as_entity_QMARK_ = (function logseq$db$common$view$match_property_value_as_entity_QMARK_(property_value_entity,property_entity){
var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property_value_entity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!(cljs.core.contains_QMARK_(logseq.db.frontend.property.type.closed_value_property_types,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property_entity))));
}
});
logseq.db.common.view.empty_value_QMARK_ = (function logseq$db$common$view$empty_value_QMARK_(v){
return (((v == null)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837),v)) || (((((typeof v === 'string') && (clojure.string.blank_QMARK_(v)))) || (((cljs.core.coll_QMARK_(v)) && (cljs.core.empty_QMARK_(v)))))))));
});
logseq.db.common.view.text_contains_QMARK_ = (function logseq$db$common$view$text_contains_QMARK_(value,match){
return (((!((value == null)))) && (clojure.string.includes_QMARK_(clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value))),clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(match))))));
});
logseq.db.common.view.row_matched_QMARK_ = (function logseq$db$common$view$row_matched_QMARK_(db,row,filters,input){
var or_QMARK_ = new cljs.core.Keyword(null,"or?","or?",-1226532173).cljs$core$IFn$_invoke$arity$1(filters);
var check_f = (cljs.core.truth_(or_QMARK_)?cljs.core.some:cljs.core.every_QMARK_);
var and__5140__auto__ = ((clojure.string.blank_QMARK_(input))?true:clojure.string.includes_QMARK_(clojure.string.lower_case(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(row)),clojure.string.lower_case(input)));
if(and__5140__auto__){
var G__81399 = (function (p__81401){
var vec__81402 = p__81401;
var property_ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81402,(0),null);
var operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81402,(1),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81402,(2),null);
if((match == null)){
return true;
} else {
return cljs.core.boolean$((function (){var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,property_ident);
var value_SINGLEQUOTE_ = ((cljs.core.set_QMARK_(value))?value:(((value == null))?null:cljs.core.PersistentHashSet.createAsIfByAssoc([value])
));
var entity_QMARK_ = datascript.impl.entity.entity_QMARK_(cljs.core.first(value_SINGLEQUOTE_));
var result = (function (){var G__81405 = operator;
var G__81405__$1 = (((G__81405 instanceof cljs.core.Keyword))?G__81405.fqn:null);
switch (G__81405__$1) {
case "is":
if(cljs.core.boolean_QMARK_(match)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$(logseq.db.common.view.get_property_value_content(db,cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,property_ident))),match);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"empty","empty",767870958),match)){
return logseq.db.common.view.empty_value_QMARK_(value);
} else {
if(cljs.core.empty_QMARK_(match)){
return true;
} else {
if(((cljs.core.empty_QMARK_(match)) && (cljs.core.empty_QMARK_(value_SINGLEQUOTE_)))){
return true;
} else {
if(entity_QMARK_){
var property = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,property_ident) : datascript.core.entity.call(null,db,property_ident));
if(cljs.core.truth_(logseq.db.common.view.match_property_value_as_entity_QMARK_(cljs.core.first(value_SINGLEQUOTE_),property))){
return cljs.core.boolean$(cljs.core.some(match,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),value_SINGLEQUOTE_)));
} else {
return cljs.core.boolean$(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.property_value_content,value_SINGLEQUOTE_)),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.property_value_content,(function (p1__81391_SHARP_){
var G__81406 = db;
var G__81407 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),p1__81391_SHARP_], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__81406,G__81407) : datascript.core.entity.call(null,G__81406,G__81407));
})),match)))));
}
} else {
return cljs.core.boolean$(cljs.core.some(match,value_SINGLEQUOTE_));
}

}
}
}
}

break;
case "is-not":
if(cljs.core.boolean_QMARK_(match)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$(logseq.db.common.view.get_property_value_content(db,cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,property_ident))),match);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"empty","empty",767870958),match)){
return (!(logseq.db.common.view.empty_value_QMARK_(value)));
} else {
if(((cljs.core.empty_QMARK_(match)) && (cljs.core.seq(value_SINGLEQUOTE_)))){
return true;
} else {
if(((cljs.core.seq(match)) && (cljs.core.empty_QMARK_(value_SINGLEQUOTE_)))){
return true;
} else {
if(entity_QMARK_){
var property = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,property_ident) : datascript.core.entity.call(null,db,property_ident));
if(cljs.core.truth_(logseq.db.common.view.match_property_value_as_entity_QMARK_(cljs.core.first(value_SINGLEQUOTE_),property))){
return cljs.core.not(cljs.core.some(match,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),value_SINGLEQUOTE_)));
} else {
return cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.property_value_content,value_SINGLEQUOTE_)),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.property_value_content,(function (p1__81392_SHARP_){
var G__81408 = db;
var G__81409 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),p1__81392_SHARP_], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__81408,G__81409) : datascript.core.entity.call(null,G__81408,G__81409));
})),match))));
}
} else {
return cljs.core.not(cljs.core.some(match,value_SINGLEQUOTE_));
}

}
}
}
}

break;
case "text-contains":
return cljs.core.some((function (v){
return logseq.db.common.view.text_contains_QMARK_(logseq.db.common.view.get_property_value_content(db,v),match);
}),value_SINGLEQUOTE_);

break;
case "text-not-contains":
return cljs.core.not_any_QMARK_((function (v){
return logseq.db.common.view.text_contains_QMARK_(logseq.db.common.view.get_property_value_content(db,v),match);
}),value_SINGLEQUOTE_);

break;
case "number-gt":
if(cljs.core.truth_(value)){
if(cljs.core.truth_(match)){
return cljs.core.some((function (p1__81393_SHARP_){
return (logseq.db.common.view.get_property_value_content(db,p1__81393_SHARP_) > match);
}),value_SINGLEQUOTE_);
} else {
return true;
}
} else {
return null;
}

break;
case "number-gte":
if(cljs.core.truth_(value)){
if(cljs.core.truth_(match)){
return cljs.core.some((function (p1__81394_SHARP_){
return (logseq.db.common.view.get_property_value_content(db,p1__81394_SHARP_) >= match);
}),value_SINGLEQUOTE_);
} else {
return true;
}
} else {
return null;
}

break;
case "number-lt":
if(cljs.core.truth_(value)){
if(cljs.core.truth_(match)){
return cljs.core.some((function (p1__81395_SHARP_){
return (logseq.db.common.view.get_property_value_content(db,p1__81395_SHARP_) < match);
}),value_SINGLEQUOTE_);
} else {
return true;
}
} else {
return null;
}

break;
case "number-lte":
if(cljs.core.truth_(value)){
if(cljs.core.truth_(match)){
return cljs.core.some((function (p1__81396_SHARP_){
return (logseq.db.common.view.get_property_value_content(db,p1__81396_SHARP_) <= match);
}),value_SINGLEQUOTE_);
} else {
return true;
}
} else {
return null;
}

break;
case "between":
if(cljs.core.seq(match)){
return cljs.core.some((function (value_entity){
var vec__81410 = match;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81410,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81410,(1),null);
var value__$1 = logseq.db.common.view.get_property_value_content(db,value_entity);
var conditions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(start)?(start <= value__$1):true),(cljs.core.truth_(end)?(value__$1 <= end):true)], null);
if(cljs.core.seq(match)){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,conditions);
} else {
return true;
}
}),value_SINGLEQUOTE_);
} else {
return true;
}

break;
case "date-before":
if(cljs.core.truth_(value)){
if(cljs.core.truth_(match)){
return cljs.core.some((function (p1__81397_SHARP_){
return (new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(p1__81397_SHARP_) < new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(match));
}),value_SINGLEQUOTE_);
} else {
return true;
}
} else {
return null;
}

break;
case "date-after":
if(cljs.core.truth_(value)){
if(cljs.core.truth_(match)){
return cljs.core.some((function (p1__81398_SHARP_){
return (new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(p1__81398_SHARP_) > new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(match));
}),value_SINGLEQUOTE_);
} else {
return true;
}
} else {
return null;
}

break;
case "before":
if(cljs.core.truth_(value)){
var search_value = logseq.common.util.get_timestamp(match);
if(cljs.core.truth_(search_value)){
return (value <= search_value);
} else {
return true;
}
} else {
return null;
}

break;
case "after":
if(cljs.core.truth_(value)){
var search_value = logseq.common.util.get_timestamp(match);
if(cljs.core.truth_(search_value)){
return (value >= search_value);
} else {
return true;
}
} else {
return null;
}

break;
default:
return true;

}
})();
return result;
})());
}
});
var G__81400 = new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(filters);
return (check_f.cljs$core$IFn$_invoke$arity$2 ? check_f.cljs$core$IFn$_invoke$arity$2(G__81399,G__81400) : check_f.call(null,G__81399,G__81400));
} else {
return and__5140__auto__;
}
});
logseq.db.common.view.__GT_filter_match_id = (function logseq$db$common$view$__GT_filter_match_id(db,v){
if((v == null)){
return null;
} else {
if(typeof v === 'number'){
return v;
} else {
if(cljs.core.uuid_QMARK_(v)){
var G__81413 = (function (){var G__81414 = db;
var G__81415 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),v], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__81414,G__81415) : datascript.core.entity.call(null,G__81414,G__81415));
})();
if((G__81413 == null)){
return null;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__81413);
}
} else {
if(datascript.impl.entity.entity_QMARK_(v)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v);
} else {
if(((cljs.core.map_QMARK_(v)) && (cljs.core.contains_QMARK_(v,new cljs.core.Keyword("db","id","db/id",-1388397098))))){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v);
} else {
return null;

}
}
}
}
}
});
/**
 * Build a faster matcher for common filter shapes while preserving semantics.
 * Currently optimized for a single ref property filter with :is/:is-not.
 */
logseq.db.common.view.build_fast_filter_pred = (function logseq$db$common$view$build_fast_filter_pred(db,filters,input){
if(((clojure.string.blank_QMARK_(input)) && (((cljs.core.map_QMARK_(filters)) && (cljs.core.not(new cljs.core.Keyword(null,"or?","or?",-1226532173).cljs$core$IFn$_invoke$arity$1(filters))))))){
var clauses = new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(filters);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(clauses))){
var vec__81418 = cljs.core.first(clauses);
var property_ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81418,(0),null);
var operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81418,(1),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81418,(2),null);
var property = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,property_ident) : datascript.core.entity.call(null,db,property_ident));
var ref_property_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(property));
if(cljs.core.truth_((function (){var and__5140__auto__ = ref_property_QMARK_;
if(and__5140__auto__){
var and__5140__auto____$1 = (function (){var fexpr__81421 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is","is",369128998),null,new cljs.core.Keyword(null,"is-not","is-not",-677962855),null], null), null);
return (fexpr__81421.cljs$core$IFn$_invoke$arity$1 ? fexpr__81421.cljs$core$IFn$_invoke$arity$1(operator) : fexpr__81421.call(null,operator));
})();
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core.set_QMARK_(match)) && (((cljs.core.seq(match)) && ((!(cljs.core.contains_QMARK_(match,new cljs.core.Keyword(null,"empty","empty",767870958))))))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var match_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__81416_SHARP_){
return logseq.db.common.view.__GT_filter_match_id(db,p1__81416_SHARP_);
}),match));
if(cljs.core.seq(match_ids)){
return (function (row){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,property_ident);
var value_col = ((cljs.core.set_QMARK_(v))?v:(((v == null))?null:cljs.core.PersistentHashSet.createAsIfByAssoc([v])
));
var hit_QMARK_ = cljs.core.boolean$(cljs.core.some(match_ids,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__81417_SHARP_){
return logseq.db.common.view.__GT_filter_match_id(db,p1__81417_SHARP_);
}),value_col)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(operator,new cljs.core.Keyword(null,"is","is",369128998))){
return hit_QMARK_;
} else {
return (!(hit_QMARK_));
}
});
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
logseq.db.common.view.ident_eid = (function logseq$db$common$view$ident_eid(db,ident){
var temp__5825__auto__ = cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("db","ident","db/ident",-737096),ident));
if(cljs.core.truth_(temp__5825__auto__)){
var datom = temp__5825__auto__;
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom);
} else {
return null;
}
});
if((typeof logseq !== 'undefined') && (typeof logseq.db !== 'undefined') && (typeof logseq.db.common !== 'undefined') && (typeof logseq.db.common.view !== 'undefined') && (typeof logseq.db.common.view.exclude_page_ids_cache !== 'undefined')){
} else {
logseq.db.common.view.exclude_page_ids_cache = (new WeakMap());
}
/**
 * Each eid plus every :block/parent descendant. Recycled/hidden parents
 *   must also drop nested child pages from All Pages.
 */
logseq.db.common.view.with_descendant_eids = (function logseq$db$common$view$with_descendant_eids(db,eids){
var queue = cljs.core.vec(eids);
var seen = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
var temp__5823__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
if(cljs.core.contains_QMARK_(seen,id)){
var G__81544 = cljs.core.pop(queue);
var G__81545 = seen;
queue = G__81544;
seen = G__81545;
continue;
} else {
var G__81546 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","parent","block/parent",-918309064),id)));
var G__81547 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,id);
queue = G__81546;
seen = G__81547;
continue;
}
} else {
return cljs.core.persistent_BANG_(seen);
}
break;
}
});
/**
 * Hidden/deleted (including descendants)/built-in/property-page ids only
 *   change when the snapshot changes, so cache them per immutable db value
 *   instead of rescanning AVET slices per request.
 */
logseq.db.common.view.get_exclude_page_ids = (function logseq$db$common$view$get_exclude_page_ids(db){
var or__5142__auto__ = logseq.db.common.view.exclude_page_ids_cache.get(db);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var property_tag_id = logseq.db.common.view.ident_eid(db,new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048));
var hidden_or_deleted = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,d){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("logseq.property","hide?","logseq.property/hide?",68365746),true),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751)))));
var exclude_ids = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,d){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.transient$(logseq.db.common.view.with_descendant_eids(db,hidden_or_deleted)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160),true),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","tags","block/tags",1814948340),property_tag_id))));
logseq.db.common.view.exclude_page_ids_cache.set(db,exclude_ids);

return exclude_ids;
}
});
logseq.db.common.view.get_entities_for_all_pages = (function logseq$db$common$view$get_entities_for_all_pages(db,sorting,property_ident){
var refs_count_QMARK_ = (function (){var and__5140__auto__ = cljs.core.coll_QMARK_(sorting);
if(and__5140__auto__){
return cljs.core.some((function (m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499));
}),sorting);
} else {
return and__5140__auto__;
}
})();
var exclude_ids = logseq.db.common.view.get_exclude_page_ids(db);
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,d){
var eid = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.contains_QMARK_(exclude_ids,eid)){
return result;
} else {
var e = logseq.db.common.entity_plus.unsafe__GT_Entity(db,eid);
if(logseq.db.frontend.entity_util.hidden_QMARK_(e)){
return result;
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,(function (){var G__81422 = e;
if(cljs.core.truth_(refs_count_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__81422,new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499),logseq.db.common.initial_data.get_block_refs_count.cljs$core$IFn$_invoke$arity$2(db,eid));
} else {
return G__81422;
}
})());
}
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),property_ident)));
});
logseq.db.common.view.indexed_attr_value = (function logseq$db$common$view$indexed_attr_value(db,eid,attr){
var temp__5825__auto__ = cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eid,attr));
if(cljs.core.truth_(temp__5825__auto__)){
var datom = temp__5825__auto__;
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
} else {
return null;
}
});
logseq.db.common.view.indexed_attr_values = (function logseq$db$common$view$indexed_attr_values(db,eid,attr){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eid,attr));
});
logseq.db.common.view.attr_keyword = (function logseq$db$common$view$attr_keyword(db,eid,attr){
var temp__5825__auto__ = logseq.db.common.view.indexed_attr_value(db,eid,attr);
if(cljs.core.truth_(temp__5825__auto__)){
var v = temp__5825__auto__;
if(cljs.core.integer_QMARK_(v)){
return logseq.db.common.view.indexed_attr_value(db,v,new cljs.core.Keyword("db","ident","db/ident",-737096));
} else {
return v;
}
} else {
return null;
}
});
logseq.db.common.view.uuid__GT_eid = (function logseq$db$common$view$uuid__GT_eid(db,block_uuid){
var temp__5825__auto__ = cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid));
if(cljs.core.truth_(temp__5825__auto__)){
var datom = temp__5825__auto__;
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom);
} else {
return null;
}
});
logseq.db.common.view.ref_value_content = (function logseq$db$common$view$ref_value_content(db,value_eid){
var or__5142__auto__ = logseq.db.common.view.indexed_attr_value(db,value_eid,new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.common.view.indexed_attr_value(db,value_eid,new cljs.core.Keyword("block","title","block/title",710445684));
}
});
logseq.db.common.view.view_sort_groups_desc_QMARK_ = (function logseq$db$common$view$view_sort_groups_desc_QMARK_(view){
if((new cljs.core.Keyword("logseq.property.view","sort-groups-desc?","logseq.property.view/sort-groups-desc?",-1081407387).cljs$core$IFn$_invoke$arity$1(view) == null)){
return true;
} else {
return cljs.core.boolean$(new cljs.core.Keyword("logseq.property.view","sort-groups-desc?","logseq.property.view/sort-groups-desc?",-1081407387).cljs$core$IFn$_invoke$arity$1(view));
}
});
logseq.db.common.view.comparable_ref_content = (function logseq$db$common$view$comparable_ref_content(db,value){
if(datascript.impl.entity.entity_QMARK_(value)){
var or__5142__auto__ = new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = logseq.db.common.view.ref_value_content(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
}
}
}
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(value);
if(and__5140__auto__){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
} else {
return and__5140__auto__;
}
})())){
var or__5142__auto__ = new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = logseq.db.common.view.ref_value_content(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
}
}
}
}
} else {
if(cljs.core.integer_QMARK_(value)){
return value;
} else {
return value;

}
}
}
});
logseq.db.common.view.comparable_sort_value = (function logseq$db$common$view$comparable_sort_value(db,value){
if(((cljs.core.coll_QMARK_(value)) && ((((!(typeof value === 'string'))) && ((!(cljs.core.map_QMARK_(value)))))))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81423_SHARP_){
return logseq.db.common.view.comparable_ref_content(db,p1__81423_SHARP_);
}),value))));
} else {
return logseq.db.common.view.comparable_ref_content(db,value);

}
});
logseq.db.common.view.match_item__GT_id = (function logseq$db$common$view$match_item__GT_id(db,v){
if((v == null)){
return null;
} else {
if(cljs.core.uuid_QMARK_(v)){
return logseq.db.common.view.uuid__GT_eid(db,v);
} else {
if((v instanceof cljs.core.Keyword)){
return logseq.db.common.view.ident_eid(db,v);
} else {
if(typeof v === 'number'){
return v;
} else {
if(datascript.impl.entity.entity_QMARK_(v)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v);
} else {
if(((cljs.core.map_QMARK_(v)) && (cljs.core.contains_QMARK_(v,new cljs.core.Keyword("db","id","db/id",-1388397098))))){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v);
} else {
return null;

}
}
}
}
}
}
});
logseq.db.common.view.match_item_content = (function logseq$db$common$view$match_item_content(db,v){
if(cljs.core.uuid_QMARK_(v)){
var G__81424 = logseq.db.common.view.uuid__GT_eid(db,v);
if((G__81424 == null)){
return null;
} else {
return logseq.db.common.view.ref_value_content(db,G__81424);
}
} else {
if((v instanceof cljs.core.Keyword)){
var G__81425 = logseq.db.common.view.ident_eid(db,v);
if((G__81425 == null)){
return null;
} else {
return logseq.db.common.view.ref_value_content(db,G__81425);
}
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.integer_QMARK_(v);
if(and__5140__auto__){
return logseq.db.common.view.indexed_attr_value(db,v,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
} else {
return and__5140__auto__;
}
})())){
return logseq.db.common.view.ref_value_content(db,v);
} else {
if(datascript.impl.entity.entity_QMARK_(v)){
var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865).cljs$core$IFn$_invoke$arity$1(v);
}
} else {
if(cljs.core.map_QMARK_(v)){
var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865).cljs$core$IFn$_invoke$arity$1(v);
}
} else {
return v;

}
}
}
}
}
});
logseq.db.common.view.match_journal_day = (function logseq$db$common$view$match_journal_day(db,match){
if(((cljs.core.map_QMARK_(match)) && (cljs.core.contains_QMARK_(match,new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366))))){
return new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(match);
} else {
if(datascript.impl.entity.entity_QMARK_(match)){
return new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(match);
} else {
if(cljs.core.uuid_QMARK_(match)){
return logseq.db.common.view.indexed_attr_value(db,logseq.db.common.view.uuid__GT_eid(db,match),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366));
} else {
if(cljs.core.integer_QMARK_(match)){
var or__5142__auto__ = logseq.db.common.view.indexed_attr_value(db,match,new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return match;
}
} else {
return null;

}
}
}
}
});
logseq.db.common.view.property_attr_schema = (function logseq$db$common$view$property_attr_schema(db,property_ident){
var prop_eid = logseq.db.common.view.ident_eid(db,property_ident);
var value_type = (cljs.core.truth_(prop_eid)?logseq.db.common.view.attr_keyword(db,prop_eid,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)):null);
var cardinality = (cljs.core.truth_(prop_eid)?logseq.db.common.view.attr_keyword(db,prop_eid,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)):null);
var prop_type = (cljs.core.truth_(prop_eid)?logseq.db.common.view.attr_keyword(db,prop_eid,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404)):null);
var built_in_ref_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","refs","block/refs",-1214495349),null,new cljs.core.Keyword("block","tags","block/tags",1814948340),null,new cljs.core.Keyword("block","parent","block/parent",-918309064),null,new cljs.core.Keyword("block","page","block/page",822314108),null], null), null),property_ident);
var ref_QMARK_ = ((built_in_ref_QMARK_) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value_type,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079))) || (cljs.core.contains_QMARK_(logseq.db.frontend.property.type.all_ref_property_types,prop_type)))));
var closed_eids = (cljs.core.truth_(prop_eid)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813),prop_eid)):null);
var closed_order = ((cljs.core.seq(closed_eids))?((cljs.core.every_QMARK_((function (p1__81426_SHARP_){
return logseq.db.common.view.indexed_attr_value(db,p1__81426_SHARP_,new cljs.core.Keyword("block","order","block/order",-1429282437));
}),closed_eids))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,logseq.db.common.view.indexed_attr_value(db,eid,new cljs.core.Keyword("block","order","block/order",-1429282437))], null);
}),closed_eids)):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,eid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,idx], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__81427_SHARP_){
var or__5142__auto__ = logseq.db.common.view.indexed_attr_value(db,p1__81427_SHARP_,new cljs.core.Keyword("block","order","block/order",-1429282437));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
}),closed_eids)))):null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ident","ident",-742346),property_ident,new cljs.core.Keyword(null,"type","type",1174270348),prop_type,new cljs.core.Keyword(null,"ref?","ref?",1932693720),ref_QMARK_,new cljs.core.Keyword(null,"many?","many?",-605360673),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_ident,new cljs.core.Keyword("block","tags","block/tags",1814948340))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cardinality,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)))),new cljs.core.Keyword(null,"closed-order","closed-order",223734592),closed_order], null);
});
logseq.db.common.view.eid_sort_value = (function logseq$db$common$view$eid_sort_value(db,p__81428,eid){
var map__81429 = p__81428;
var map__81429__$1 = cljs.core.__destructure_map(map__81429);
var schema = map__81429__$1;
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81429__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var ref_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81429__$1,new cljs.core.Keyword(null,"ref?","ref?",1932693720));
var many_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81429__$1,new cljs.core.Keyword(null,"many?","many?",-605360673));
var closed_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81429__$1,new cljs.core.Keyword(null,"closed-order","closed-order",223734592));
var prop_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(schema);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ident,new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499))){
return logseq.db.common.initial_data.get_block_refs_count.cljs$core$IFn$_invoke$arity$2(db,eid);
} else {
var vs = logseq.db.common.view.indexed_attr_values(db,eid,ident);
if(cljs.core.empty_QMARK_(vs)){
return null;
} else {
if(cljs.core.truth_(closed_order)){
var G__81430 = cljs.core.first(vs);
return (closed_order.cljs$core$IFn$_invoke$arity$1 ? closed_order.cljs$core$IFn$_invoke$arity$1(G__81430) : closed_order.call(null,G__81430));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = ref_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop_type,new cljs.core.Keyword(null,"date","date",-1463434462));
} else {
return and__5140__auto__;
}
})())){
return logseq.db.common.view.indexed_attr_value(db,cljs.core.first(vs),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = many_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop_type,new cljs.core.Keyword(null,"number","number",1570378438))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop_type,new cljs.core.Keyword(null,"datetime","datetime",494675702))));
} else {
return and__5140__auto__;
}
})())){
var nums = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (v){
var n = (cljs.core.truth_(ref_QMARK_)?(function (){var or__5142__auto__ = logseq.db.common.view.indexed_attr_value(db,v,new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.common.view.ref_value_content(db,v);
}
})():v);
if(typeof n === 'number'){
return n;
} else {
return null;
}
}),vs);
if(cljs.core.seq(nums)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,nums);
} else {
return null;
}
} else {
if(cljs.core.truth_(many_QMARK_)){
var col = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (v){
if(cljs.core.truth_(ref_QMARK_)){
return logseq.db.common.view.ref_value_content(db,v);
} else {
return v;
}
}),vs);
if(cljs.core.seq(col)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",col);
} else {
return null;
}
} else {
if(cljs.core.truth_(ref_QMARK_)){
var v = cljs.core.first(vs);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop_type,new cljs.core.Keyword(null,"number","number",1570378438))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop_type,new cljs.core.Keyword(null,"datetime","datetime",494675702))))){
var or__5142__auto__ = logseq.db.common.view.indexed_attr_value(db,v,new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.common.view.ref_value_content(db,v);
}
} else {
return logseq.db.common.view.ref_value_content(db,v);
}
} else {
return cljs.core.first(vs);

}
}
}
}
}
}

}
});
logseq.db.common.view.avet_first_window_sort_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),null,new cljs.core.Keyword("block","created-at","block/created-at",1440015),null,new cljs.core.Keyword("block","title","block/title",710445684),null,new cljs.core.Keyword("block","name","block/name",1619760316),null], null), null);
/**
 * AVET is a sorted-set slice. `nth` from the high end is O(n) per
 *   step and took 1719ms to pick 26 All Pages rows.
 */
logseq.db.common.view.avet_ordered_datoms = (function logseq$db$common$view$avet_ordered_datoms(db,attr,asc_QMARK_){
if(cljs.core.truth_(asc_QMARK_)){
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),attr);
} else {
return datascript.core.rseek_datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),attr);
}
});
logseq.db.common.view.avet_take_eids = (function logseq$db$common$view$avet_take_eids(datoms,match_QMARK_,row_limit,row_offset){
var xf = (function (){var G__81431 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(match_QMARK_),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0());
var G__81431__$1 = ((((function (){var or__5142__auto__ = row_offset;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() > (0)))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(G__81431,cljs.core.drop.cljs$core$IFn$_invoke$arity$1(row_offset)):G__81431);
if(cljs.core.truth_(row_limit)){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(G__81431__$1,cljs.core.take.cljs$core$IFn$_invoke$arity$1(row_limit));
} else {
return G__81431__$1;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xf,datoms);
});
/**
 * Walk one AVET attr instead of reading a sort value per row. A 40k All
 *   Pages first window was spending ~2s in sort-eids-by-sorting.
 */
logseq.db.common.view.sort_eids_from_avet = (function logseq$db$common$view$sort_eids_from_avet(db,match_QMARK_,sorting,row_limit,leftover_eids,row_offset){
var sorts = (function (){var or__5142__auto__ = cljs.core.seq(sorting);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword(null,"asc?","asc?",891093427),false], null)], null);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(sorts))){
var map__81434 = cljs.core.first(sorts);
var map__81434__$1 = cljs.core.__destructure_map(map__81434);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81434__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var asc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81434__$1,new cljs.core.Keyword(null,"asc?","asc?",891093427));
if(cljs.core.contains_QMARK_(logseq.db.common.view.avet_first_window_sort_attrs,id)){
var use_rseek_window_QMARK_ = cljs.core.boolean$(row_limit);
var datoms = ((use_rseek_window_QMARK_)?logseq.db.common.view.avet_ordered_datoms(db,id,cljs.core.boolean$(asc_QMARK_)):(function (){var all = cljs.core.vec(datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),id));
if(cljs.core.truth_(asc_QMARK_)){
return all;
} else {
return cljs.core.rseq(all);
}
})());
if(cljs.core.seq(datoms)){
var matched = logseq.db.common.view.avet_take_eids(datoms,match_QMARK_,row_limit,row_offset);
if(cljs.core.truth_((function (){var and__5140__auto__ = row_limit;
if(cljs.core.truth_(and__5140__auto__)){
return (cljs.core.count(matched) < row_limit);
} else {
return and__5140__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = row_limit;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (leftover_eids == null);
}
})())){
return matched;
} else {
var seen = cljs.core.set(matched);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(matched,cljs.core.sort.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(asc_QMARK_)?cljs.core.compare:(function (p1__81433_SHARP_,p2__81432_SHARP_){
return cljs.core.compare(p2__81432_SHARP_,p1__81433_SHARP_);
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen,leftover_eids)));

}
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
logseq.db.common.view.sort_eids_by_sorting = (function logseq$db$common$view$sort_eids_by_sorting(db,eids,sorting){
var sorts = (function (){var or__5142__auto__ = cljs.core.seq(sorting);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword(null,"asc?","asc?",891093427),false], null)], null);
}
})();
var schemas = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__81435){
var map__81436 = p__81435;
var map__81436__$1 = cljs.core.__destructure_map(map__81436);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81436__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var asc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81436__$1,new cljs.core.Keyword(null,"asc?","asc?",891093427));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logseq.db.common.view.property_attr_schema(db,id),new cljs.core.Keyword(null,"asc?","asc?",891093427),cljs.core.boolean$(asc_QMARK_));
}),sorts);
var eid_vec = cljs.core.vec(eids);
var value_maps = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (schema){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,eid){
var temp__5827__auto__ = logseq.db.common.view.eid_sort_value(db,schema,eid);
if((temp__5827__auto__ == null)){
return acc;
} else {
var v = temp__5827__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,eid,v);
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),eid_vec));
}),schemas);
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (a,b){
var i = (0);
while(true){
if((i >= cljs.core.count(schemas))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"asc?","asc?",891093427).cljs$core$IFn$_invoke$arity$1(cljs.core.first(schemas)))){
return cljs.core.compare(a,b);
} else {
return cljs.core.compare(b,a);
}
} else {
var c = logseq.db.common.view.compare_sort_values(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value_maps,i),a),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value_maps,i),b),new cljs.core.Keyword(null,"asc?","asc?",891093427).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(schemas,i)));
if((c === (0))){
var G__81548 = (i + (1));
i = G__81548;
continue;
} else {
return c;
}
}
break;
}
}),eid_vec);
});
/**
 * Without a row limit, sets up to this size sort their own eids. The AVET
 *   walk would copy the whole index of the sort attribute (79034 updated-at
 *   datoms took 132-165ms), while sorting reads one value per eid (a 40k All
 *   Pages window spent ~2s, about 50us per eid).
 */
logseq.db.common.view.unlimited_eid_sort_max = (1000);
logseq.db.common.view.take_sorted_eids = (function logseq$db$common$view$take_sorted_eids(db,eids,sorting,row_limit,row_offset){
var eid_vec = cljs.core.vec(eids);
var wanted = cljs.core.set(eid_vec);
var match_QMARK_ = (function (p1__81437_SHARP_){
return cljs.core.contains_QMARK_(wanted,p1__81437_SHARP_);
});
var use_eid_sort_QMARK_ = (cljs.core.truth_(row_limit)?(cljs.core.count(eid_vec) <= row_limit):(cljs.core.count(eid_vec) <= logseq.db.common.view.unlimited_eid_sort_max));
var avet = ((use_eid_sort_QMARK_)?null:logseq.db.common.view.sort_eids_from_avet(db,match_QMARK_,sorting,row_limit,eid_vec,row_offset));
var sorted = (function (){var or__5142__auto__ = avet;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.common.view.sort_eids_by_sorting(db,eid_vec,sorting);
}
})();
if(cljs.core.truth_(avet)){
return cljs.core.vec(sorted);
} else {
if(cljs.core.truth_(row_limit)){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(row_limit,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = row_offset;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),sorted)));
} else {
return cljs.core.vec(sorted);
}
}
});
logseq.db.common.view.feature_filters_QMARK_ = (function logseq$db$common$view$feature_filters_QMARK_(filters,input){
return (((!(clojure.string.blank_QMARK_(input)))) || (cljs.core.seq((function (){var or__5142__auto____$1 = new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(filters);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())));
});
/**
 * Exact visible-page count. BTSet est-count is a tree distance; on a
 *   56-page graph compiled ClojureScript reported 98 first-window rows
 *   and the table painted empty placeholders. Walk :block/name once; do
 *   not allocate the id vector. nbb has no est-count, so nbb tests cannot
 *   catch this.
 */
logseq.db.common.view.count_all_page_ids = (function logseq$db$common$view$count_all_page_ids(db,exclude_ids){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,datom){
if(cljs.core.contains_QMARK_(exclude_ids,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom))){
return n;
} else {
return (n + (1));
}
}),(0),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","name","block/name",1619760316)));
});
logseq.db.common.view.all_pages_eid_QMARK_ = (function logseq$db$common$view$all_pages_eid_QMARK_(db,exclude_ids,eid){
return (((!(cljs.core.contains_QMARK_(exclude_ids,eid)))) && ((!((logseq.db.common.view.indexed_attr_value(db,eid,new cljs.core.Keyword("block","name","block/name",1619760316)) == null)))));
});
/**
 * A 26-row All Pages window does not need the 40938-id vector. Count
 *   pages, then walk AVET until the window is full. Returns nil when the
 *   sort attr is not an AVET first-window attr so the collect path runs.
 */
logseq.db.common.view.first_window_feature_row_data = (function logseq$db$common$view$first_window_feature_row_data(db,feat_type,class_id,sorting,row_limit,row_offset){
var G__81439 = feat_type;
var G__81439__$1 = (((G__81439 instanceof cljs.core.Keyword))?G__81439.fqn:null);
switch (G__81439__$1) {
case "all-pages":
var exclude_ids = logseq.db.common.view.get_exclude_page_ids(db);
var data = logseq.db.common.view.sort_eids_from_avet(db,(function (p1__81438_SHARP_){
return logseq.db.common.view.all_pages_eid_QMARK_(db,exclude_ids,p1__81438_SHARP_);
}),sorting,row_limit,null,row_offset);
if(cljs.core.truth_(data)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),logseq.db.common.view.count_all_page_ids(db,exclude_ids),new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}

break;
case "class-objects":
if(cljs.core.truth_(class_id)){
var class_ids = cljs.core.cons(class_id,logseq.db.frontend.class$.get_structured_children(db,class_id));
var tag_eids = logseq.db.frontend.class$.filter_visible_class_object_ids(db,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (id){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","tags","block/tags",1814948340),id));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class_ids], 0)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(tag_eids),new cljs.core.Keyword(null,"data","data",-232669377),logseq.db.common.view.take_sorted_eids(db,tag_eids,sorting,row_limit,row_offset)], null);
} else {
return null;
}

break;
default:
return null;

}
});
logseq.db.common.view.empty_attr_values_QMARK_ = (function logseq$db$common$view$empty_attr_values_QMARK_(raw,empty_id){
return ((cljs.core.empty_QMARK_(raw)) || (cljs.core.every_QMARK_((function (v){
return (((v == null)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,empty_id)) || (((((typeof v === 'string') && (clojure.string.blank_QMARK_(v)))) || (((cljs.core.coll_QMARK_(v)) && (cljs.core.empty_QMARK_(v)))))))));
}),raw)));
});
logseq.db.common.view.compile_filter_clause = (function logseq$db$common$view$compile_filter_clause(db,p__81442){
var vec__81443 = p__81442;
var property_ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81443,(0),null);
var operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81443,(1),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81443,(2),null);
var schema = logseq.db.common.view.property_attr_schema(db,property_ident);
var match_set_QMARK_ = cljs.core.set_QMARK_(match);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"operator","operator",-1860875338),operator,new cljs.core.Keyword(null,"match","match",1220059550),match,new cljs.core.Keyword(null,"match-eids","match-eids",-228652532),((((match_set_QMARK_) && (((cljs.core.seq(match)) && ((!(cljs.core.contains_QMARK_(match,new cljs.core.Keyword(null,"empty","empty",767870958)))))))))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__81440_SHARP_){
return logseq.db.common.view.match_item__GT_id(db,p1__81440_SHARP_);
})),match):null),new cljs.core.Keyword(null,"match-contents","match-contents",-1885112566),((((match_set_QMARK_) && (((cljs.core.seq(match)) && ((!(cljs.core.contains_QMARK_(match,new cljs.core.Keyword(null,"empty","empty",767870958)))))))))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__81441_SHARP_){
return logseq.db.common.view.match_item_content(db,p1__81441_SHARP_);
})),match):null),new cljs.core.Keyword(null,"journal-day","journal-day",-82304259),(cljs.core.truth_((function (){var fexpr__81446 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date-after","date-after",-901666462),null,new cljs.core.Keyword(null,"date-before","date-before",302148478),null], null), null);
return (fexpr__81446.cljs$core$IFn$_invoke$arity$1 ? fexpr__81446.cljs$core$IFn$_invoke$arity$1(operator) : fexpr__81446.call(null,operator));
})())?logseq.db.common.view.match_journal_day(db,match):null),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(cljs.core.truth_((function (){var fexpr__81447 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"after","after",594996914),null,new cljs.core.Keyword(null,"before","before",-1633692388),null], null), null);
return (fexpr__81447.cljs$core$IFn$_invoke$arity$1 ? fexpr__81447.cljs$core$IFn$_invoke$arity$1(operator) : fexpr__81447.call(null,operator));
})())?logseq.common.util.get_timestamp(match):null)], null);
});
logseq.db.common.view.clause_row = (function logseq$db$common$view$clause_row(db,eid,p__81448,empty_id){
var map__81449 = p__81448;
var map__81449__$1 = cljs.core.__destructure_map(map__81449);
var schema = map__81449__$1;
var ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81449__$1,new cljs.core.Keyword(null,"ident","ident",-742346));
var ref_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81449__$1,new cljs.core.Keyword(null,"ref?","ref?",1932693720));
var prop_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(schema);
var raw = logseq.db.common.view.indexed_attr_values(db,eid,ident);
var first_raw = cljs.core.first(raw);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"raw","raw",1604651272),raw,new cljs.core.Keyword(null,"ref?","ref?",1932693720),ref_QMARK_,new cljs.core.Keyword(null,"contents","contents",-1567174023),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
if(cljs.core.truth_((function (){var and__5140__auto__ = ref_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.integer_QMARK_(v);
} else {
return and__5140__auto__;
}
})())){
return logseq.db.common.view.ref_value_content(db,v);
} else {
return v;
}
}),raw),new cljs.core.Keyword(null,"treat-as-entity?","treat-as-entity?",-658035859),(function (){var and__5140__auto__ = ref_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.integer_QMARK_(first_raw);
if(and__5140__auto____$1){
var or__5142__auto__ = logseq.db.common.view.indexed_attr_value(db,first_raw,new cljs.core.Keyword("db","ident","db/ident",-737096));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!(cljs.core.contains_QMARK_(logseq.db.frontend.property.type.closed_value_property_types,prop_type)));
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})(),new cljs.core.Keyword(null,"empty-values?","empty-values?",1331196753),logseq.db.common.view.empty_attr_values_QMARK_(raw,empty_id)], null);
});
logseq.db.common.view.hits_values_QMARK_ = (function logseq$db$common$view$hits_values_QMARK_(vs,match_set){
return cljs.core.boolean$(cljs.core.some((function (p1__81450_SHARP_){
return cljs.core.contains_QMARK_(match_set,p1__81450_SHARP_);
}),vs));
});
logseq.db.common.view.match_is_clause = (function logseq$db$common$view$match_is_clause(p__81451,match,match_eids,match_contents){
var map__81452 = p__81451;
var map__81452__$1 = cljs.core.__destructure_map(map__81452);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81452__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var ref_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81452__$1,new cljs.core.Keyword(null,"ref?","ref?",1932693720));
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81452__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
var treat_as_entity_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81452__$1,new cljs.core.Keyword(null,"treat-as-entity?","treat-as-entity?",-658035859));
var empty_values_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81452__$1,new cljs.core.Keyword(null,"empty-values?","empty-values?",1331196753));
var scalar_match = ((cljs.core.set_QMARK_(match))?match:cljs.core.PersistentHashSet.createAsIfByAssoc([match]));
if(cljs.core.boolean_QMARK_(match)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$(cljs.core.first(contents)),match);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"empty","empty",767870958),match)){
return empty_values_QMARK_;
} else {
if(((cljs.core.coll_QMARK_(match)) && (cljs.core.empty_QMARK_(match)))){
return true;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = ref_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.set_QMARK_(match);
} else {
return and__5140__auto__;
}
})())){
if(cljs.core.truth_(treat_as_entity_QMARK_)){
return logseq.db.common.view.hits_values_QMARK_(raw,match_eids);
} else {
return cljs.core.boolean$(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(contents),match_contents)));
}
} else {
return logseq.db.common.view.hits_values_QMARK_((cljs.core.truth_(ref_QMARK_)?contents:raw),scalar_match);

}
}
}
}
});
logseq.db.common.view.match_is_not_clause = (function logseq$db$common$view$match_is_not_clause(p__81453,match,match_eids,match_contents){
var map__81454 = p__81453;
var map__81454__$1 = cljs.core.__destructure_map(map__81454);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81454__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var ref_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81454__$1,new cljs.core.Keyword(null,"ref?","ref?",1932693720));
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81454__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
var treat_as_entity_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81454__$1,new cljs.core.Keyword(null,"treat-as-entity?","treat-as-entity?",-658035859));
var empty_values_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81454__$1,new cljs.core.Keyword(null,"empty-values?","empty-values?",1331196753));
var scalar_match = ((cljs.core.set_QMARK_(match))?match:cljs.core.PersistentHashSet.createAsIfByAssoc([match]));
if(cljs.core.boolean_QMARK_(match)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$(cljs.core.first(contents)),match);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"empty","empty",767870958),match)){
return cljs.core.not(empty_values_QMARK_);
} else {
if(((cljs.core.coll_QMARK_(match)) && (((cljs.core.empty_QMARK_(match)) && (cljs.core.seq(raw)))))){
return true;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.coll_QMARK_(match);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.seq(match);
if(and__5140__auto____$1){
return empty_values_QMARK_;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return true;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = ref_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.set_QMARK_(match);
} else {
return and__5140__auto__;
}
})())){
if(cljs.core.truth_(treat_as_entity_QMARK_)){
return (!(logseq.db.common.view.hits_values_QMARK_(raw,match_eids)));
} else {
return cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(contents),match_contents));
}
} else {
return (!(logseq.db.common.view.hits_values_QMARK_((cljs.core.truth_(ref_QMARK_)?contents:raw),scalar_match)));

}
}
}
}
}
});
logseq.db.common.view.number_compare_match = (function logseq$db$common$view$number_compare_match(contents,match,pred){
if(cljs.core.seq(contents)){
if(cljs.core.truth_(match)){
return cljs.core.some((function (c){
var and__5140__auto__ = typeof c === 'number';
if(and__5140__auto__){
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(c,match) : pred.call(null,c,match));
} else {
return and__5140__auto__;
}
}),contents);
} else {
return true;
}
} else {
return null;
}
});
logseq.db.common.view.journal_day_of = (function logseq$db$common$view$journal_day_of(db,v){
if(cljs.core.integer_QMARK_(v)){
return logseq.db.common.view.indexed_attr_value(db,v,new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366));
} else {
return v;
}
});
logseq.db.common.view.match_text_or_number_clause = (function logseq$db$common$view$match_text_or_number_clause(p__81455,operator,match){
var map__81456 = p__81455;
var map__81456__$1 = cljs.core.__destructure_map(map__81456);
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81456__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
var G__81457 = operator;
var G__81457__$1 = (((G__81457 instanceof cljs.core.Keyword))?G__81457.fqn:null);
switch (G__81457__$1) {
case "text-contains":
return cljs.core.some((function (c){
return logseq.db.common.view.text_contains_QMARK_(c,match);
}),contents);

break;
case "text-not-contains":
return cljs.core.not_any_QMARK_((function (c){
return logseq.db.common.view.text_contains_QMARK_(c,match);
}),contents);

break;
case "number-gt":
return logseq.db.common.view.number_compare_match(contents,match,cljs.core._GT_);

break;
case "number-gte":
return logseq.db.common.view.number_compare_match(contents,match,cljs.core._GT__EQ_);

break;
case "number-lt":
return logseq.db.common.view.number_compare_match(contents,match,cljs.core._LT_);

break;
case "number-lte":
return logseq.db.common.view.number_compare_match(contents,match,cljs.core._LT__EQ_);

break;
case "between":
if(cljs.core.seq(match)){
var vec__81458 = match;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81458,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81458,(1),null);
return cljs.core.some((function (c){
var and__5140__auto__ = typeof c === 'number';
if(and__5140__auto__){
var and__5140__auto____$1 = (cljs.core.truth_(start)?(start <= c):true);
if(and__5140__auto____$1){
if(cljs.core.truth_(end)){
return (c <= end);
} else {
return true;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}),contents);
} else {
return true;
}

break;
default:
return new cljs.core.Keyword("logseq.db.common.view","unhandled","logseq.db.common.view/unhandled",1287552436);

}
});
logseq.db.common.view.match_temporal_clause = (function logseq$db$common$view$match_temporal_clause(db,p__81461,operator,match,journal_day,timestamp){
var map__81462 = p__81461;
var map__81462__$1 = cljs.core.__destructure_map(map__81462);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81462__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var ref_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81462__$1,new cljs.core.Keyword(null,"ref?","ref?",1932693720));
var contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81462__$1,new cljs.core.Keyword(null,"contents","contents",-1567174023));
var G__81463 = operator;
var G__81463__$1 = (((G__81463 instanceof cljs.core.Keyword))?G__81463.fqn:null);
switch (G__81463__$1) {
case "date-before":
if(cljs.core.seq(raw)){
if(cljs.core.truth_(match)){
return cljs.core.some((function (v){
var day = logseq.db.common.view.journal_day_of(db,v);
var and__5140__auto__ = day;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = journal_day;
if(cljs.core.truth_(and__5140__auto____$1)){
return (day < journal_day);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}),raw);
} else {
return true;
}
} else {
return null;
}

break;
case "date-after":
if(cljs.core.seq(raw)){
if(cljs.core.truth_(match)){
return cljs.core.some((function (v){
var day = logseq.db.common.view.journal_day_of(db,v);
var and__5140__auto__ = day;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = journal_day;
if(cljs.core.truth_(and__5140__auto____$1)){
return (day > journal_day);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}),raw);
} else {
return true;
}
} else {
return null;
}

break;
case "before":
if(cljs.core.seq(raw)){
if(cljs.core.truth_(timestamp)){
return cljs.core.some((function (v){
return ((typeof v === 'number') && ((v <= timestamp)));
}),(cljs.core.truth_(ref_QMARK_)?contents:raw));
} else {
return true;
}
} else {
return null;
}

break;
case "after":
if(cljs.core.seq(raw)){
if(cljs.core.truth_(timestamp)){
return cljs.core.some((function (v){
return ((typeof v === 'number') && ((v >= timestamp)));
}),(cljs.core.truth_(ref_QMARK_)?contents:raw));
} else {
return true;
}
} else {
return null;
}

break;
default:
return true;

}
});
logseq.db.common.view.match_compare_clause = (function logseq$db$common$view$match_compare_clause(db,row,operator,match,journal_day,timestamp){
var text_or_number = logseq.db.common.view.match_text_or_number_clause(row,operator,match);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.db.common.view","unhandled","logseq.db.common.view/unhandled",1287552436),text_or_number)){
return logseq.db.common.view.match_temporal_clause(db,row,operator,match,journal_day,timestamp);
} else {
return text_or_number;
}
});
logseq.db.common.view.eid_clause_match_QMARK_ = (function logseq$db$common$view$eid_clause_match_QMARK_(db,eid,p__81464,empty_id){
var map__81465 = p__81464;
var map__81465__$1 = cljs.core.__destructure_map(map__81465);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81465__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81465__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81465__$1,new cljs.core.Keyword(null,"match","match",1220059550));
var match_eids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81465__$1,new cljs.core.Keyword(null,"match-eids","match-eids",-228652532));
var match_contents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81465__$1,new cljs.core.Keyword(null,"match-contents","match-contents",-1885112566));
var journal_day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81465__$1,new cljs.core.Keyword(null,"journal-day","journal-day",-82304259));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81465__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
if((match == null)){
return true;
} else {
var row = logseq.db.common.view.clause_row(db,eid,schema,empty_id);
return cljs.core.boolean$((function (){var G__81466 = operator;
var G__81466__$1 = (((G__81466 instanceof cljs.core.Keyword))?G__81466.fqn:null);
switch (G__81466__$1) {
case "is":
return logseq.db.common.view.match_is_clause(row,match,match_eids,match_contents);

break;
case "is-not":
return logseq.db.common.view.match_is_not_clause(row,match,match_eids,match_contents);

break;
default:
return logseq.db.common.view.match_compare_clause(db,row,operator,match,journal_day,timestamp);

}
})());
}
});
logseq.db.common.view.title_matches_input_QMARK_ = (function logseq$db$common$view$title_matches_input_QMARK_(db,eid,input){
var or__5142__auto__ = clojure.string.blank_QMARK_(input);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var temp__5825__auto__ = logseq.db.common.view.indexed_attr_value(db,eid,new cljs.core.Keyword("block","title","block/title",710445684));
if(cljs.core.truth_(temp__5825__auto__)){
var title = temp__5825__auto__;
return clojure.string.includes_QMARK_(clojure.string.lower_case(title),clojure.string.lower_case(input));
} else {
return null;
}
}
});
logseq.db.common.view.filter_eids = (function logseq$db$common$view$filter_eids(db,eids,filters,input){
var clauses = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(filters);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(((clojure.string.blank_QMARK_(input)) && (cljs.core.empty_QMARK_(clauses)))){
return cljs.core.vec(eids);
} else {
var compiled = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__81467_SHARP_){
return logseq.db.common.view.compile_filter_clause(db,p1__81467_SHARP_);
}),clauses);
var empty_id = logseq.db.common.view.ident_eid(db,new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837));
var check_f = (cljs.core.truth_(new cljs.core.Keyword(null,"or?","or?",-1226532173).cljs$core$IFn$_invoke$arity$1(filters))?cljs.core.some:cljs.core.every_QMARK_);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (eid){
var and__5140__auto__ = logseq.db.common.view.title_matches_input_QMARK_(db,eid,input);
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = cljs.core.empty_QMARK_(compiled);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var G__81469 = (function (p1__81468_SHARP_){
return logseq.db.common.view.eid_clause_match_QMARK_(db,eid,p1__81468_SHARP_,empty_id);
});
var G__81470 = compiled;
return (check_f.cljs$core$IFn$_invoke$arity$2 ? check_f.cljs$core$IFn$_invoke$arity$2(G__81469,G__81470) : check_f.call(null,G__81469,G__81470));
}
} else {
return and__5140__auto__;
}
})),eids);
}
});
logseq.db.common.view.get_all_page_ids = (function logseq$db$common$view$get_all_page_ids(db){
var exclude_ids = logseq.db.common.view.get_exclude_page_ids(db);
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,datom){
var eid = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom);
if(cljs.core.contains_QMARK_(exclude_ids,eid)){
return result;
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,eid);
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","name","block/name",1619760316))));
});
/**
 * ID-only Tags/All Pages path: collect, filter, and sort without hydrating row entities.
 *   A row-limit first window must not sort every remaining id.
 */
logseq.db.common.view.get_feature_row_data = (function logseq$db$common$view$get_feature_row_data(db,feat_type,class_id,sorting,filters,input,row_limit,row_offset){
var first_window_QMARK_ = (function (){var and__5140__auto__ = row_limit;
if(cljs.core.truth_(and__5140__auto__)){
return (!(logseq.db.common.view.feature_filters_QMARK_(filters,input)));
} else {
return and__5140__auto__;
}
})();
var or__5142__auto__ = (cljs.core.truth_(first_window_QMARK_)?logseq.db.common.view.first_window_feature_row_data(db,feat_type,class_id,sorting,row_limit,row_offset):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5825__auto__ = (function (){var G__81471 = feat_type;
var G__81471__$1 = (((G__81471 instanceof cljs.core.Keyword))?G__81471.fqn:null);
switch (G__81471__$1) {
case "all-pages":
return logseq.db.common.view.get_all_page_ids(db);

break;
case "class-objects":
if(cljs.core.truth_(class_id)){
return logseq.db.frontend.class$.get_class_object_ids(db,class_id);
} else {
return null;
}

break;
default:
return null;

}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var eids = temp__5825__auto__;
var filtered = logseq.db.common.view.filter_eids(db,eids,filters,input);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(filtered),new cljs.core.Keyword(null,"data","data",-232669377),logseq.db.common.view.take_sorted_eids(db,filtered,sorting,row_limit,row_offset)], null);
} else {
return null;
}
}
});
logseq.db.common.view.maybe_limit_rows = (function logseq$db$common$view$maybe_limit_rows(rows,row_limit,row_offset){
if(cljs.core.truth_(row_limit)){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(row_limit,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = row_offset;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),rows)));
} else {
return cljs.core.vec(rows);
}
});
/**
 * entity-util/recycled? over raw datoms so a lazy scan never hydrates entities:
 *   a :logseq.property/deleted-at datom on the entity or any :block/parent ancestor.
 */
logseq.db.common.view.recycled_eid_QMARK_ = (function logseq$db$common$view$recycled_eid_QMARK_(db,eid){
var id = eid;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if((((id == null)) || (cljs.core.contains_QMARK_(seen,id)))){
return false;
} else {
if(cljs.core.seq(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),id,new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751)))){
return true;
} else {
var G__81554 = logseq.db.common.view.indexed_attr_value(db,id,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var G__81555 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,id);
id = G__81554;
seen = G__81555;
continue;

}
}
break;
}
});
/**
 * Lazy [eid journal-day] pairs, newest first, matching ldb/get-latest-journals'
 *   journal?/recycled? contract through indexed lookups only. A bounded window
 *   walks just enough :block/journal-day datoms to fill it.
 */
logseq.db.common.view.latest_journal_day_pairs = (function logseq$db$common$view$latest_journal_day_pairs(db){
var today = logseq.common.util.date_time.date__GT_int((new Date()));
var journal_tag_eid = logseq.db.common.view.ident_eid(db,new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(d)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
var eid = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d);
var and__5140__auto__ = cljs.core.some((function (p1__81473_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(journal_tag_eid,p1__81473_SHARP_);
}),logseq.db.common.view.indexed_attr_values(db,eid,new cljs.core.Keyword("block","tags","block/tags",1814948340)));
if(cljs.core.truth_(and__5140__auto__)){
return (!(logseq.db.common.view.recycled_eid_QMARK_(db,eid)));
} else {
return and__5140__auto__;
}
}),logseq.common.util.distinct_by(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__81472_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(p1__81472_SHARP_));
}),datascript.core.rseek_datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),today)))));
});
logseq.db.common.view.get_entities = (function logseq$db$common$view$get_entities(db,view,feat_type,property_ident,view_for_id_STAR_,sorting,p__81474){
var map__81475 = p__81474;
var map__81475__$1 = cljs.core.__destructure_map(map__81475);
var include_ref_pages_count_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81475__$1,new cljs.core.Keyword(null,"include-ref-pages-count?","include-ref-pages-count?",990571428),true);
var view_for = new cljs.core.Keyword("logseq.property","view-for","logseq.property/view-for",-36274319).cljs$core$IFn$_invoke$arity$1(view);
var view_for_id = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view_for);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return view_for_id_STAR_;
}
})();
var non_hidden_e = (function (id){
var e = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
if(logseq.db.frontend.entity_util.hidden_QMARK_(e)){
return null;
} else {
return e;
}
});
var G__81476 = feat_type;
var G__81476__$1 = (((G__81476 instanceof cljs.core.Keyword))?G__81476.fqn:null);
switch (G__81476__$1) {
case "all-pages":
return logseq.db.common.view.get_entities_for_all_pages(db,sorting,property_ident);

break;
case "class-objects":
return logseq.db.frontend.class$.get_class_objects(db,view_for_id);

break;
case "property-objects":
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (id){
return non_hidden_e(id);
}),(function (){var G__81477 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?prop","?prop",1880869414,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"has-property-or-object-property?","has-property-or-object-property?",866044234,null),new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"?prop","?prop",1880869414,null))], null);
var G__81478 = db;
var G__81479 = logseq.db.frontend.rules.extract_rules.cljs$core$IFn$_invoke$arity$variadic(logseq.db.frontend.rules.db_query_dsl_rules,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"has-property-or-object-property","has-property-or-object-property",-540034341)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deps","deps",1883360319),logseq.db.frontend.rules.rules_dependencies], null)], 0));
var G__81480 = property_ident;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__81477,G__81478,G__81479,G__81480) : datascript.core.q.call(null,G__81477,G__81478,G__81479,G__81480));
})());

break;
case "linked-references":
return logseq.db.common.reference.get_linked_references.cljs$core$IFn$_invoke$arity$3(db,view_for_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-ref-pages-count?","include-ref-pages-count?",990571428),(!(include_ref_pages_count_QMARK_ === false))], null));

break;
case "unlinked-references":
return logseq.db.common.reference.get_unlinked_references(db,view_for_id);

break;
case "query-result":
return null;

break;
default:
return null;

}
});
logseq.db.common.view.get_view_entities = (function logseq$db$common$view$get_view_entities(var_args){
var args__5882__auto__ = [];
var len__5876__auto___81557 = arguments.length;
var i__5877__auto___81558 = (0);
while(true){
if((i__5877__auto___81558 < len__5876__auto___81557)){
args__5882__auto__.push((arguments[i__5877__auto___81558]));

var G__81559 = (i__5877__auto___81558 + (1));
i__5877__auto___81558 = G__81559;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.db.common.view.get_view_entities.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.db.common.view.get_view_entities.cljs$core$IFn$_invoke$arity$variadic = (function (db,view_id,p__81484){
var map__81485 = p__81484;
var map__81485__$1 = cljs.core.__destructure_map(map__81485);
var view_for_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81485__$1,new cljs.core.Keyword(null,"view-for-id","view-for-id",-450280889));
var view_feature_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81485__$1,new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610));
var sorting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81485__$1,new cljs.core.Keyword(null,"sorting","sorting",622249690));
var include_ref_pages_count_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81485__$1,new cljs.core.Keyword(null,"include-ref-pages-count?","include-ref-pages-count?",990571428));
var view = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,view_id) : datascript.core.entity.call(null,db,view_id));
var feat_type = (function (){var or__5142__auto__ = view_feature_type;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("logseq.property.view","feature-type","logseq.property.view/feature-type",-939141871).cljs$core$IFn$_invoke$arity$1(view);
}
})();
var sorting__$1 = (function (){var or__5142__auto__ = sorting;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("logseq.property.table","sorting","logseq.property.table/sorting",208102594).cljs$core$IFn$_invoke$arity$1(view);
}
})();
var index_attr = (function (){var G__81486 = feat_type;
var G__81486__$1 = (((G__81486 instanceof cljs.core.Keyword))?G__81486.fqn:null);
switch (G__81486__$1) {
case "all-pages":
return new cljs.core.Keyword("block","name","block/name",1619760316);

break;
case "class-objects":
return new cljs.core.Keyword("block","tags","block/tags",1814948340);

break;
case "property-objects":
var view_for = new cljs.core.Keyword("logseq.property","view-for","logseq.property/view-for",-36274319).cljs$core$IFn$_invoke$arity$1(view);
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(view_for);

break;
default:
return null;

}
})();
return logseq.db.common.view.get_entities(db,view,feat_type,index_attr,view_for_id,sorting__$1,(function (){var G__81487 = cljs.core.PersistentArrayMap.EMPTY;
if((!((include_ref_pages_count_QMARK_ == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__81487,new cljs.core.Keyword(null,"include-ref-pages-count?","include-ref-pages-count?",990571428),include_ref_pages_count_QMARK_);
} else {
return G__81487;
}
})());
}));

(logseq.db.common.view.get_view_entities.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.db.common.view.get_view_entities.cljs$lang$applyTo = (function (seq81481){
var G__81482 = cljs.core.first(seq81481);
var seq81481__$1 = cljs.core.next(seq81481);
var G__81483 = cljs.core.first(seq81481__$1);
var seq81481__$2 = cljs.core.next(seq81481__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81482,G__81483,seq81481__$2);
}));

logseq.db.common.view.get_view_property_values = (function logseq$db$common$view$get_view_property_values(db,property_ident,p__81489){
var map__81490 = p__81489;
var map__81490__$1 = cljs.core.__destructure_map(map__81490);
var view_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81490__$1,new cljs.core.Keyword(null,"view-id","view-id",1118263032));
var query_entity_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81490__$1,new cljs.core.Keyword(null,"query-entity-ids","query-entity-ids",2135324416));
var empty_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837)) : datascript.core.entity.call(null,db,new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837))));
var entities_result = logseq.db.common.view.get_view_entities(db,view_id);
var entities = (cljs.core.truth_(query_entity_ids)?cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__81488_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__81488_SHARP_) : datascript.core.entity.call(null,db,p1__81488_SHARP_));
}),query_entity_ids):((cljs.core.map_QMARK_(entities_result))?new cljs.core.Keyword(null,"ref-blocks","ref-blocks",-348598444).cljs$core$IFn$_invoke$arity$1(entities_result):entities_result
));
return logseq.common.util.distinct_by(new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (e){
if(((datascript.impl.entity.entity_QMARK_(e)) && (logseq.db.frontend.entity_util.recycled_QMARK_(e)))){
return null;
} else {
var temp__5825__auto__ = logseq.db.common.view.get_property_value_content(db,e);
if(cljs.core.truth_(temp__5825__auto__)){
var label = temp__5825__auto__;
if(((clojure.string.blank_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(empty_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e))))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)),new cljs.core.Keyword(null,"value","value",305978217),((datascript.impl.entity.entity_QMARK_(e))?cljs.core.select_keys(e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)):e)], null);
}
} else {
return null;
}
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (entity){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,property_ident);
if(cljs.core.set_QMARK_(v)){
return v;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([v]);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entities], 0)))));
});
logseq.db.common.view.get_property_values = (function logseq$db$common$view$get_property_values(db,property_ident,p__81491){
var map__81492 = p__81491;
var map__81492__$1 = cljs.core.__destructure_map(map__81492);
var option = map__81492__$1;
var view_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81492__$1,new cljs.core.Keyword(null,"view-id","view-id",1118263032));
var _query_entity_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81492__$1,new cljs.core.Keyword(null,"_query-entity-ids","_query-entity-ids",-993937794));
var property = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,property_ident) : datascript.core.entity.call(null,db,property_ident));
var default_value = new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662).cljs$core$IFn$_invoke$arity$1(property);
var ref_type_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(property));
var values = (cljs.core.truth_(view_id)?logseq.db.common.view.get_view_property_values(db,property_ident,option):cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (v){
var e = ((ref_type_QMARK_)?(datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,v) : datascript.core.entity.call(null,db,v)):null);
if(((ref_type_QMARK_) && (logseq.db.frontend.entity_util.recycled_QMARK_(e)))){
return null;
} else {
var vec__81493 = ((ref_type_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.db.frontend.property.property_value_content(e),cljs.core.select_keys(e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null))], null):(((!(typeof v === 'string')))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)),v], null)
));
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81493,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81493,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"value","value",305978217),value], null);
}
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(d);
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),property_ident)))));
return logseq.common.util.distinct_by(new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_((function (){var and__5140__auto__ = default_value;
if(cljs.core.truth_(and__5140__auto__)){
return (!(logseq.db.frontend.entity_util.recycled_QMARK_(default_value)));
} else {
return and__5140__auto__;
}
})())?cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),logseq.db.common.view.get_property_value_content(db,default_value),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.select_keys(default_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null))], null),values):values));
});
logseq.db.common.view.get_query_properties = (function logseq$db$common$view$get_query_properties(query,entities){
var properties = ((((cljs.core.coll_QMARK_(query)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"find","find",496279456),cljs.core.first(query)))))?(function (){var expr = cljs.core.second(query);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"pull","pull",779986722,null),cljs.core.first(expr))){
return cljs.core.last(expr);
} else {
return null;
}
})():null);
if(((cljs.core.seq(properties)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(properties,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null))))){
return properties;
} else {
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entities], 0)));
}
});
logseq.db.common.view.linked_references_page_list_view_data = (function logseq$db$common$view$linked_references_page_list_view_data(view,entities_result,entities){
var groups_sort_by_property_ident = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property.view","sort-groups-by-property","logseq.property.view/sort-groups-by-property",-625340021).cljs$core$IFn$_invoke$arity$1(view));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366);
}
})();
var desc_QMARK_ = logseq.db.common.view.view_sort_groups_desc_QMARK_(view);
var page_sorters = (function (){var G__81497 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get-value","get-value",2108514284),(function (p__81498){
var vec__81499 = p__81498;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81499,(0),null);
var _blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81499,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,groups_sort_by_property_ident);
}),new cljs.core.Keyword(null,"asc?","asc?",891093427),(!(desc_QMARK_))], null)], null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(groups_sort_by_property_ident,new cljs.core.Keyword("block","title","block/title",710445684))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__81497,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get-value","get-value",2108514284),(function (p__81502){
var vec__81503 = p__81502;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81503,(0),null);
var _blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81503,(1),null);
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page);
}),new cljs.core.Keyword(null,"asc?","asc?",891093427),(!(desc_QMARK_))], null));
} else {
return G__81497;
}
})();
var sorted_page_groups = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(logseq.db.common.view.by_sorting(page_sorters),cljs.core.group_by((function (p1__81496_SHARP_){
var or__5142__auto__ = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(p1__81496_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return p1__81496_SHARP_;
}
}),entities));
var block_row = (function (block){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block))], null);
});
var nested_group = (function (p__81506){
var vec__81507 = p__81506;
var _parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81507,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81507,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(block_row,logseq.db.sort_by_order(blocks))], null);
});
var data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81510){
var vec__81511 = p__81510;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81511,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81511,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.select_keys(page,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),new cljs.core.Keyword("block","tags","block/tags",1814948340)], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(nested_group,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__81514){
var vec__81515 = p__81514;
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81515,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81515,(1),null);
return new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent);
}),cljs.core.group_by(new cljs.core.Keyword("block","parent","block/parent",-918309064),blocks)))], null);
}),sorted_page_groups);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(entities),new cljs.core.Keyword(null,"data","data",-232669377),data], null),cljs.core.select_keys(entities_result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref-pages-count","ref-pages-count",-74477634),new cljs.core.Keyword(null,"ref-matched-children-ids","ref-matched-children-ids",1569574404)], null))], 0));
});
logseq.db.common.view.get_view_data = (function logseq$db$common$view$get_view_data(db,view_id,p__81518){
var map__81519 = p__81518;
var map__81519__$1 = cljs.core.__destructure_map(map__81519);
var opts = map__81519__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81519__$1,new cljs.core.Keyword(null,"input","input",556931961));
var sorting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81519__$1,new cljs.core.Keyword(null,"sorting","sorting",622249690));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81519__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_entity_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81519__$1,new cljs.core.Keyword(null,"query-entity-ids","query-entity-ids",2135324416));
var group_by_property_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81519__$1,new cljs.core.Keyword(null,"group-by-property-ident","group-by-property-ident",1221613316));
var view_for_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81519__$1,new cljs.core.Keyword(null,"view-for-id","view-for-id",-450280889));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81519__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var journals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81519__$1,new cljs.core.Keyword(null,"journals?","journals?",1584679180));
var row_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81519__$1,new cljs.core.Keyword(null,"row-limit","row-limit",1009814418));
var view_feature_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81519__$1,new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610));
var row_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81519__$1,new cljs.core.Keyword(null,"row-offset","row-offset",-1310990952));
if(cljs.core.truth_(journals_QMARK_)){
var journal_days = logseq.db.common.view.latest_journal_day_pairs(db);
var window__$1 = (function (){var G__81520 = journal_days;
var G__81520__$1 = ((((function (){var or__5142__auto__ = row_offset;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() > (0)))?cljs.core.drop.cljs$core$IFn$_invoke$arity$2(row_offset,G__81520):G__81520);
if(cljs.core.truth_(row_limit)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(row_limit,G__81520__$1);
} else {
return G__81520__$1;
}
})();
var index = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__81521){
var vec__81522 = p__81521;
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81522,(0),null);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81522,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid,new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),day], null);
}),window__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),(cljs.core.truth_((function (){var or__5142__auto__ = row_limit;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((function (){var or__5142__auto____$1 = row_offset;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (0);
}
})() > (0));
}
})())?cljs.core.count(journal_days):cljs.core.count(index)),new cljs.core.Keyword(null,"data","data",-232669377),index], null);
} else {
var view = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,view_id) : datascript.core.entity.call(null,db,view_id));
var group_by_property_ident__$1 = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property.view","group-by-property","logseq.property.view/group-by-property",809216236).cljs$core$IFn$_invoke$arity$1(view));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return group_by_property_ident;
}
})();
var group_by_property = (function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property.view","group-by-property","logseq.property.view/group-by-property",809216236).cljs$core$IFn$_invoke$arity$1(view);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(group_by_property_ident__$1)){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,group_by_property_ident__$1) : datascript.core.entity.call(null,db,group_by_property_ident__$1));
} else {
return null;
}
}
})();
var list_view_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property.view","type.list","logseq.property.view/type.list",-1164828502),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property.view","type","logseq.property.view/type",218237607).cljs$core$IFn$_invoke$arity$1(view)));
var group_by_closed_values_QMARK_ = (!((new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(group_by_property) == null)));
var ref_property_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(group_by_property),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
var filters__$1 = (function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property.table","filters","logseq.property.table/filters",-1702393633).cljs$core$IFn$_invoke$arity$1(view);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return filters;
}
})();
var feat_type = (function (){var or__5142__auto__ = view_feature_type;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("logseq.property.view","feature-type","logseq.property.view/feature-type",-939141871).cljs$core$IFn$_invoke$arity$1(view);
}
})();
var query_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(feat_type,new cljs.core.Keyword(null,"query-result","query-result",-833644142));
var query_entity_ids__$1 = ((cljs.core.seq(query_entity_ids))?cljs.core.set(query_entity_ids):null);
var sorting__$1 = (function (){var sorting_STAR_ = new cljs.core.Keyword("logseq.property.table","sorting","logseq.property.table/sorting",208102594).cljs$core$IFn$_invoke$arity$1(view);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sorting_STAR_,new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837))) || (cljs.core.empty_QMARK_(sorting_STAR_)))){
var or__5142__auto__ = sorting;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword(null,"asc?","asc?",891093427),false], null)], null);
}
} else {
return sorting_STAR_;
}
})();
var class_id = (function (){var or__5142__auto__ = view_for_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property","view-for","logseq.property/view-for",-36274319).cljs$core$IFn$_invoke$arity$1(view));
}
})();
var fast_row_data = ((((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-objects","class-objects",1489112646),null,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062),null], null), null),feat_type)) && ((((!(query_QMARK_))) && ((group_by_property_ident__$1 == null))))))?logseq.db.common.view.get_feature_row_data(db,feat_type,class_id,sorting__$1,filters__$1,input,row_limit,row_offset):null);
if(cljs.core.truth_(fast_row_data)){
return fast_row_data;
} else {
var entities_result = ((query_QMARK_)?cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (id){
var e = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(e)))){
return null;
} else {
return e;
}
}),query_entity_ids__$1):logseq.db.common.view.get_view_entities.cljs$core$IFn$_invoke$arity$variadic(db,view_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0)));
var entities = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(feat_type,new cljs.core.Keyword(null,"linked-references","linked-references",-2117592379)))?new cljs.core.Keyword(null,"ref-blocks","ref-blocks",-348598444).cljs$core$IFn$_invoke$arity$1(entities_result):entities_result);
var filtered_entities = ((((cljs.core.seq(filters__$1)) || ((!(clojure.string.blank_QMARK_(input))))))?(function (){var filter_pred = (function (){var or__5142__auto__ = logseq.db.common.view.build_fast_filter_pred(db,filters__$1,input);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (function (row){
return logseq.db.common.view.row_matched_QMARK_(db,row,filters__$1,input);
});
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(filter_pred),entities);
})():entities);
var nested_list_view_QMARK_ = (function (){var and__5140__auto__ = list_view_QMARK_;
if(and__5140__auto__){
return cljs.core.some(new cljs.core.Keyword("block","page","block/page",822314108),filtered_entities);
} else {
return and__5140__auto__;
}
})();
var group_by_page_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(group_by_property_ident__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var linked_references_page_list_fast_path_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(feat_type,new cljs.core.Keyword(null,"linked-references","linked-references",-2117592379))) && (((group_by_page_QMARK_) && (((list_view_QMARK_) && (((cljs.core.empty_QMARK_(filters__$1)) && (clojure.string.blank_QMARK_(input)))))))));
var group_values = (function logseq$db$common$view$get_view_data_$_group_values(ent){
var pvalue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ent,group_by_property_ident__$1);
var values = (((((!(datascript.impl.entity.entity_QMARK_(pvalue)))) && (((cljs.core.coll_QMARK_(pvalue)) && ((!(cljs.core.map_QMARK_(pvalue))))))))?cljs.core.seq(pvalue):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pvalue], null));
var or__5142__auto__ = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (value){
if(datascript.impl.entity.entity_QMARK_(value)){
if(cljs.core.truth_(logseq.db.common.view.match_property_value_as_entity_QMARK_(value,group_by_property))){
return value;
} else {
return logseq.db.frontend.property.property_value_content(value);
}
} else {
return value;
}
}),values));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}
});
var result = ((linked_references_page_list_fast_path_QMARK_)?null:(cljs.core.truth_(group_by_property_ident__$1)?(function (){var groups_sort_by_property_ident = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property.view","sort-groups-by-property","logseq.property.view/sort-groups-by-property",-625340021).cljs$core$IFn$_invoke$arity$1(view));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366);
}
})();
var desc_QMARK_ = logseq.db.common.view.view_sort_groups_desc_QMARK_(view);
var result = cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,ent){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups__$1,value){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(groups__$1,value,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),ent);
}),groups,group_values(ent));
}),cljs.core.PersistentArrayMap.EMPTY,filtered_entities));
var keyfn = (function (groups_sort_by_property_ident__$1){
return (function (p__81525){
var vec__81526 = p__81525;
var by_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81526,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81526,(1),null);
if(group_by_page_QMARK_){
return logseq.db.common.view.comparable_sort_value(db,cljs.core.get.cljs$core$IFn$_invoke$arity$2(by_value,groups_sort_by_property_ident__$1));
} else {
if(group_by_closed_values_QMARK_){
return new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(by_value);
} else {
if(ref_property_QMARK_){
return logseq.db.common.view.comparable_sort_value(db,by_value);
} else {
return logseq.db.common.view.comparable_sort_value(db,by_value);

}
}
}
});
});
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(logseq.db.common.view.by_sorting((function (){var G__81529 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get-value","get-value",2108514284),keyfn(groups_sort_by_property_ident),new cljs.core.Keyword(null,"asc?","asc?",891093427),(!(desc_QMARK_))], null)], null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(groups_sort_by_property_ident,new cljs.core.Keyword("block","title","block/title",710445684))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__81529,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get-value","get-value",2108514284),keyfn(new cljs.core.Keyword("block","title","block/title",710445684)),new cljs.core.Keyword(null,"asc?","asc?",891093427),(!(desc_QMARK_))], null));
} else {
return G__81529;
}
})()),result);
})():logseq.db.common.view.sort_entities(db,sorting__$1,filtered_entities)));
var data_SINGLEQUOTE_ = ((linked_references_page_list_fast_path_QMARK_)?null:(cljs.core.truth_(group_by_property_ident__$1)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81530){
var vec__81531 = p__81530;
var by_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81531,(0),null);
var entities__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81531,(1),null);
var by_value_SINGLEQUOTE_ = ((datascript.impl.entity.entity_QMARK_(by_value))?cljs.core.select_keys(by_value,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),new cljs.core.Keyword("block","tags","block/tags",1814948340)], null)):by_value);
var group = (cljs.core.truth_(nested_list_view_QMARK_)?(function (){var parent_groups = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__81534){
var vec__81535 = p__81534;
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81535,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81535,(1),null);
return new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(parent);
}),cljs.core.group_by(new cljs.core.Keyword("block","parent","block/parent",-918309064),entities__$1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81538){
var vec__81539 = p__81538;
var _parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81539,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81539,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(b))], null);
}),logseq.db.sort_by_order(blocks))], null);
}),parent_groups);
})():cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),logseq.db.common.view.sort_entities(db,sorting__$1,entities__$1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [by_value_SINGLEQUOTE_,group], null);
}),result):cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),result)));
var dedupe_data_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(feat_type,new cljs.core.Keyword(null,"property-objects","property-objects",-1410914822))) || (query_QMARK_));
if(linked_references_page_list_fast_path_QMARK_){
return logseq.db.common.view.linked_references_page_list_view_data(view,entities_result,entities);
} else {
var G__81542 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(filtered_entities),new cljs.core.Keyword(null,"data","data",-232669377),(function (){var rows = ((dedupe_data_QMARK_)?cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(data_SINGLEQUOTE_):data_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__5140__auto__ = row_limit;
if(cljs.core.truth_(and__5140__auto__)){
return (group_by_property_ident__$1 == null);
} else {
return and__5140__auto__;
}
})())){
return logseq.db.common.view.maybe_limit_rows(rows,row_limit,row_offset);
} else {
return rows;
}
})()], null);
var G__81542__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(feat_type,new cljs.core.Keyword(null,"linked-references","linked-references",-2117592379)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__81542,cljs.core.select_keys(entities_result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref-pages-count","ref-pages-count",-74477634),new cljs.core.Keyword(null,"ref-matched-children-ids","ref-matched-children-ids",1569574404)], null))], 0)):G__81542);
if(query_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__81542__$1,new cljs.core.Keyword(null,"properties","properties",685819552),logseq.db.common.view.get_query_properties(query,entities_result));
} else {
return G__81542__$1;
}
}
}

}
});

//# sourceMappingURL=logseq.db.common.view.js.map
