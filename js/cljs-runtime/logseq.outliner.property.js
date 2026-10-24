goog.provide('logseq.outliner.property');
logseq.outliner.property.throw_error_if_read_only_property = (function logseq$outliner$property$throw_error_if_read_only_property(property_ident){
if(cljs.core.truth_((logseq.db.frontend.property.read_only_properties.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.property.read_only_properties.cljs$core$IFn$_invoke$arity$1(property_ident) : logseq.db.frontend.property.read_only_properties.call(null,property_ident)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Read-only property value shouldn't be edited",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property","property",-1114278232),property_ident], null));
} else {
return null;
}
});
logseq.outliner.property.db_ident__GT_eid = (function logseq$outliner$property$db_ident__GT_eid(db,db_ident){
if(cljs.core.qualified_keyword_QMARK_(db_ident)){
} else {
throw (new Error("Assert failed: (qualified-keyword? db-ident)"));
}

var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,db_ident) : datascript.core.entity.call(null,db,db_ident)));
if(cljs.core.truth_(id)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Wrong property db/ident",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db-ident","db-ident",-992686073),db_ident], null));
}

return id;
});
if((typeof logseq !== 'undefined') && (typeof logseq.outliner !== 'undefined') && (typeof logseq.outliner.property !== 'undefined') && (typeof logseq.outliner.property.built_in_class_property__GT_properties !== 'undefined')){
} else {
logseq.outliner.property.built_in_class_property__GT_properties = cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__60379){
var vec__60381 = p__60379;
var property_ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60381,(0),null);
var map__60384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60381,(1),null);
var map__60384__$1 = cljs.core.__destructure_map(map__60384);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60384__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (property){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property_ident,property], null);
}),cljs.core.cons(new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.keys(properties)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.frontend.property.built_in_properties], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__60386){
var vec__60387 = p__60386;
var class_ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60387,(0),null);
var map__60390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60387,(1),null);
var map__60390__$1 = cljs.core.__destructure_map(map__60390);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60390__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (property){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_ident,property], null);
}),cljs.core.cons(new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.keys(properties)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.frontend.class$.built_in_classes], 0))));
}
logseq.outliner.property.throw_error_if_deleting_protected_property = (function logseq$outliner$property$throw_error_if_deleting_protected_property(entity_idents,property_ident){
if(cljs.core.truth_(cljs.core.some((function (p1__60391_SHARP_){
var G__60393 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60391_SHARP_,property_ident], null);
return (logseq.outliner.property.built_in_class_property__GT_properties.cljs$core$IFn$_invoke$arity$1 ? logseq.outliner.property.built_in_class_property__GT_properties.cljs$core$IFn$_invoke$arity$1(G__60393) : logseq.outliner.property.built_in_class_property__GT_properties.call(null,G__60393));
}),entity_idents))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Property is protected and can't be deleted",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Property is protected and can't be deleted.",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("property.validation","protected","property.validation/protected",2078656985),new cljs.core.Keyword(null,"entity-idents","entity-idents",765471438),entity_idents,new cljs.core.Keyword(null,"property","property",-1114278232),property_ident], null)], null));
} else {
return null;
}
});
logseq.outliner.property.throw_error_if_removing_private_tag = (function logseq$outliner$property$throw_error_if_removing_private_tag(entities){
var temp__5825__auto__ = cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__60394_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(p1__60394_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entities], 0))),logseq.db.private_tags));
if(temp__5825__auto__){
var private_tags = temp__5825__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't remove private tags",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),(""+"Can't remove private tags: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",private_tags))+"."),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("class.validation","cant-remove-private-tags","class.validation/cant-remove-private-tags",-558442595),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",private_tags)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.Keyword(null,"property-id","property-id",404996975),new cljs.core.Keyword("block","tags","block/tags",1814948340)], null));
} else {
return null;
}
});
logseq.outliner.property.throw_error_if_deleting_required_property = (function logseq$outliner$property$throw_error_if_deleting_required_property(property_ident){
if(cljs.core.contains_QMARK_(logseq.db.frontend.malli_schema.required_properties,property_ident)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't remove required property",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Can't remove required property.",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("property.validation","cant-remove-required","property.validation/cant-remove-required",1104031100),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.Keyword(null,"property-id","property-id",404996975),property_ident], null));
} else {
return null;
}
});
/**
 * Validates that the given property can be batch deleted from multiple nodes
 */
logseq.outliner.property.validate_batch_deletion_of_property = (function logseq$outliner$property$validate_batch_deletion_of_property(entities,property_ident){
logseq.outliner.property.throw_error_if_deleting_protected_property(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),entities),property_ident);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","tags","block/tags",1814948340),property_ident)){
logseq.outliner.property.throw_error_if_removing_private_tag(entities);
} else {
}

logseq.outliner.validate.disallow_editing_private_built_in_nodes(entities);

return logseq.outliner.property.throw_error_if_deleting_required_property(property_ident);
});
logseq.outliner.property.block_classes_provide_property_QMARK_ = (function logseq$outliner$property$block_classes_provide_property_QMARK_(db,block,property_id){
return cljs.core.boolean$(cljs.core.some((function (p1__60396_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__60396_SHARP_));
}),new cljs.core.Keyword(null,"classes-properties","classes-properties",1920679577).cljs$core$IFn$_invoke$arity$1((function (){var G__60397 = db;
var G__60398 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (logseq.outliner.property.get_block_classes_properties.cljs$core$IFn$_invoke$arity$2 ? logseq.outliner.property.get_block_classes_properties.cljs$core$IFn$_invoke$arity$2(G__60397,G__60398) : logseq.outliner.property.get_block_classes_properties.call(null,G__60397,G__60398));
})())));
});
/**
 * Add #Task when setting status/scheduled/deadline unless a class already
 *   provides that property. Pages are not special-cased: #Page does not provide
 *   task properties, so a plain page still gets #Task, while a page tagged with a
 *   Task child class does not.
 */
logseq.outliner.property.should_add_task_tag_for_property_QMARK_ = (function logseq$outliner$property$should_add_task_tag_for_property_QMARK_(conn,block,property_id){
return ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("logseq.property","deadline","logseq.property/deadline",1685901604),null,new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853),null,new cljs.core.Keyword("logseq.property","scheduled","logseq.property/scheduled",1644520943),null], null), null),property_id)) && (((cljs.core.empty_QMARK_(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block))) || ((!(logseq.outliner.property.block_classes_provide_property_QMARK_(cljs.core.deref(conn),block,property_id)))))));
});
logseq.outliner.property.class_lookup_ref_QMARK_ = (function logseq$outliner$property$class_lookup_ref_QMARK_(value){
return ((cljs.core.vector_QMARK_(value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(value))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),null,new cljs.core.Keyword("db","ident","db/ident",-737096),null], null), null),cljs.core.first(value))))));
});
logseq.outliner.property.single_entity_ref_QMARK_ = (function logseq$outliner$property$single_entity_ref_QMARK_(value){
return ((datascript.impl.entity.entity_QMARK_(value)) || (((cljs.core.integer_QMARK_(value)) || ((((value instanceof cljs.core.Keyword)) || (logseq.outliner.property.class_lookup_ref_QMARK_(value)))))));
});
logseq.outliner.property.__GT_entity_ids = (function logseq$outliner$property$__GT_entity_ids(db,value){
var entity_id = (function logseq$outliner$property$__GT_entity_ids_$_entity_id(item){
var or__5142__auto__ = ((datascript.impl.entity.entity_QMARK_(item))?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item):((cljs.core.integer_QMARK_(item))?item:(((item instanceof cljs.core.Keyword))?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,item) : datascript.core.entity.call(null,db,item))):((logseq.outliner.property.class_lookup_ref_QMARK_(item))?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,item) : datascript.core.entity.call(null,db,item))):null))));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unsupported class extends entity reference",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),item], null));
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(entity_id,(((value == null))?cljs.core.PersistentVector.EMPTY:((logseq.outliner.property.single_entity_ref_QMARK_(value))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null):((cljs.core.coll_QMARK_(value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)
))));
});
logseq.outliner.property.class_ancestor_ids = (function logseq$outliner$property$class_ancestor_ids(db,class_ids){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (class_id){
var G__60402 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,class_id) : datascript.core.entity.call(null,db,class_id));
var G__60402__$1 = (((G__60402 == null))?null:(logseq.db.get_class_extends.cljs$core$IFn$_invoke$arity$1 ? logseq.db.get_class_extends.cljs$core$IFn$_invoke$arity$1(G__60402) : logseq.db.get_class_extends.call(null,G__60402)));
if((G__60402__$1 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),G__60402__$1);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class_ids], 0)));
});
logseq.outliner.property.direct_extends_retraction_tx_data = (function logseq$outliner$property$direct_extends_retraction_tx_data(class$,redundant_parent_ids){
if(cljs.core.truth_((function (){var and__5140__auto__ = (logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(class$) : logseq.db.class_QMARK_.call(null,class$));
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(redundant_parent_ids);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (parent){
if(cljs.core.contains_QMARK_(redundant_parent_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent)], null);
} else {
return null;
}
}),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803).cljs$core$IFn$_invoke$arity$1(class$));
} else {
return null;
}
});
logseq.outliner.property.canonical_extends_ids = (function logseq$outliner$property$canonical_extends_ids(db,value){
var parent_ids = cljs.core.vec(logseq.outliner.property.__GT_entity_ids(db,value));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.outliner.property.class_ancestor_ids(db,parent_ids),parent_ids);
});
logseq.outliner.property.normalize_extends_value = (function logseq$outliner$property$normalize_extends_value(db,value){
var ids = cljs.core.vec(logseq.outliner.property.canonical_extends_ids(db,value));
if(logseq.outliner.property.single_entity_ref_QMARK_(value)){
return cljs.core.first(ids);
} else {
return ids;
}
});
logseq.outliner.property.redundant_extends_retraction_tx_data = (function logseq$outliner$property$redundant_extends_retraction_tx_data(db,class$,value){
var parent_ids = cljs.core.set(logseq.outliner.property.__GT_entity_ids(db,value));
var ancestor_ids = logseq.outliner.property.class_ancestor_ids(db,parent_ids);
var inherited_parent_ids = clojure.set.union.cljs$core$IFn$_invoke$arity$2(parent_ids,ancestor_ids);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(logseq.outliner.property.direct_extends_retraction_tx_data(class$,ancestor_ids),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__60403_SHARP_){
return logseq.outliner.property.direct_extends_retraction_tx_data((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__60403_SHARP_) : datascript.core.entity.call(null,db,p1__60403_SHARP_)),inherited_parent_ids);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.frontend.class$.get_structured_children(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$))], 0)));
});
logseq.outliner.property.build_property_value_tx_data = (function logseq$outliner$property$build_property_value_tx_data(conn,block,property_id,value){
if((!((value == null)))){
var old_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,property_id);
var property = (function (){var G__60408 = cljs.core.deref(conn);
var G__60409 = property_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60408,G__60409) : datascript.core.entity.call(null,G__60408,G__60409));
})();
var multiple_values_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(property));
var retract_multiple_values_QMARK_ = ((multiple_values_QMARK_) && (cljs.core.sequential_QMARK_(value)));
var multiple_values_empty_QMARK_ = ((cljs.core.sequential_QMARK_(old_value)) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),old_value)),new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837))));
var extends_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803));
var tx_value = ((extends_QMARK_)?(function (){var value_SINGLEQUOTE_ = logseq.outliner.property.normalize_extends_value(cljs.core.deref(conn),value);
if(cljs.core.coll_QMARK_(value_SINGLEQUOTE_)){
return cljs.core.set(value_SINGLEQUOTE_);
} else {
return value_SINGLEQUOTE_;
}
})():value);
var update_block_tx = (function (){var G__60412 = logseq.outliner.core.block_with_updated_at(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null));
var G__60412__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60412,property_id,tx_value)
;
var G__60412__$2 = ((logseq.outliner.property.should_add_task_tag_for_property_QMARK_(conn,block,property_id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60412__$1,new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Task","logseq.class/Task",-1282181457)):G__60412__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","template-applied-to","logseq.property/template-applied-to",-429124322),property_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60412__$2,new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Template","logseq.class/Template",1720854846));
} else {
return G__60412__$2;
}
})();
var G__60413 = cljs.core.PersistentVector.EMPTY;
var G__60413__$1 = ((multiple_values_empty_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60413,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(update_block_tx),property_id,new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837)], null)):G__60413);
var G__60413__$2 = ((retract_multiple_values_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60413__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(update_block_tx),property_id], null)):G__60413__$1);
var G__60413__$3 = ((extends_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__60413__$2,logseq.outliner.property.redundant_extends_retraction_tx_data(cljs.core.deref(conn),block,value)):G__60413__$2);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60413__$3,update_block_tx);

} else {
return null;
}
});
/**
 * Gets a malli schema to validate the property value for the given property type and builds
 * it with additional args like datascript db
 */
logseq.outliner.property.get_property_value_schema = (function logseq$outliner$property$get_property_value_schema(var_args){
var args__5882__auto__ = [];
var len__5876__auto___60812 = arguments.length;
var i__5877__auto___60813 = (0);
while(true){
if((i__5877__auto___60813 < len__5876__auto___60812)){
args__5882__auto__.push((arguments[i__5877__auto___60813]));

var G__60814 = (i__5877__auto___60813 + (1));
i__5877__auto___60813 = G__60814;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return logseq.outliner.property.get_property_value_schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(logseq.outliner.property.get_property_value_schema.cljs$core$IFn$_invoke$arity$variadic = (function (db,property_type,property,p__60419){
var map__60421 = p__60419;
var map__60421__$1 = cljs.core.__destructure_map(map__60421);
var new_closed_value_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60421__$1,new cljs.core.Keyword(null,"new-closed-value?","new-closed-value?",773408852),false);
var property_val_schema = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.type.built_in_validation_schemas,property_type);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"No validation for property type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([property_type], 0)))),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var vec__60422 = ((cljs.core.vector_QMARK_(property_val_schema))?cljs.core.rest(property_val_schema):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,property_val_schema], null));
var schema_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60422,(0),null);
var schema_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60422,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),schema_opts,(function logseq$outliner$property$property_value_schema(property_val){
return logseq.db.frontend.malli_schema.validate_property_value.cljs$core$IFn$_invoke$arity$variadic(db,schema_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property,property_val], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-closed-value?","new-closed-value?",773408852),new_closed_value_QMARK_], null)], 0));
})], null);
}));

(logseq.outliner.property.get_property_value_schema.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(logseq.outliner.property.get_property_value_schema.cljs$lang$applyTo = (function (seq60415){
var G__60416 = cljs.core.first(seq60415);
var seq60415__$1 = cljs.core.next(seq60415);
var G__60417 = cljs.core.first(seq60415__$1);
var seq60415__$2 = cljs.core.next(seq60415__$1);
var G__60418 = cljs.core.first(seq60415__$2);
var seq60415__$3 = cljs.core.next(seq60415__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60416,G__60417,G__60418,seq60415__$3);
}));

logseq.outliner.property.fail_parse_double = (function logseq$outliner$property$fail_parse_double(v_str){
var result = cljs.core.parse_double(v_str);
var or__5142__auto__ = result;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Can't convert \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_str)+"\" to a number"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),(""+"Can't convert \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_str)+"\" to a number."),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("property.validation","cant-convert-to-number","property.validation/cant-convert-to-number",-1996670735),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v_str], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
}
});
logseq.outliner.property.convert_property_input_string = (function logseq$outliner$property$convert_property_input_string(block_type,property,v_str){
var schema_type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),schema_type)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),block_type)))))) && (typeof v_str === 'string'))){
return logseq.outliner.property.fail_parse_double(v_str);
} else {
return v_str;
}
});
logseq.outliner.property.resolve_update_cardinality = (function logseq$outliner$property$resolve_update_cardinality(property,schema){
var new_type = (function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(schema);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = new_type;
if(cljs.core.truth_(and__5140__auto__)){
return (!(cljs.core.contains_QMARK_(logseq.db.frontend.property.type.cardinality_property_types,new_type)));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190);
} else {
if(cljs.core.contains_QMARK_(schema,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659))){
if(cljs.core.truth_((function (){var G__60427 = new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema);
var fexpr__60426 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword(null,"many","many",1092119164),null], null), null);
return (fexpr__60426.cljs$core$IFn$_invoke$arity$1 ? fexpr__60426.cljs$core$IFn$_invoke$arity$1(G__60427) : fexpr__60426.call(null,G__60427));
})())){
return new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234);
} else {
return new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190);
}
} else {
var or__5142__auto__ = new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190);
}

}
}
});
/**
 * Updates property type and cardinality
 */
logseq.outliner.property.update_datascript_schema = (function logseq$outliner$property$update_datascript_schema(property,schema){
var new_type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(schema);
var ident = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property);
var cardinality = logseq.outliner.property.resolve_update_cardinality(property,schema);
var old_type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var old_ref_type_QMARK_ = (logseq.db.frontend.property.type.user_ref_property_types.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.property.type.user_ref_property_types.cljs$core$IFn$_invoke$arity$1(old_type) : logseq.db.frontend.property.type.user_ref_property_types.call(null,old_type));
var ref_type_QMARK_ = (logseq.db.frontend.property.type.user_ref_property_types.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.property.type.user_ref_property_types.cljs$core$IFn$_invoke$arity$1(new_type) : logseq.db.frontend.property.type.user_ref_property_types.call(null,new_type));
var G__60428 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60429 = logseq.outliner.core.block_with_updated_at(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),ident,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),cardinality], null));
if(cljs.core.truth_(ref_type_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60429,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return G__60429;
}
})()], null);
if(cljs.core.truth_((function (){var and__5140__auto__ = new_type;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = old_ref_type_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(ref_type_QMARK_);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60428,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null));
} else {
return G__60428;
}
});
logseq.outliner.property.validate_property_name_update = (function logseq$outliner$property$validate_property_name_update(conn,property,property_name,p__60431){
var map__60432 = p__60431;
var map__60432__$1 = cljs.core.__destructure_map(map__60432);
var e2ee_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60432__$1,new cljs.core.Keyword(null,"e2ee?","e2ee?",1272351286));
if((((!((property_name == null)))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(property_name,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(property))) && (cljs.core.not(e2ee_QMARK_)))))){
logseq.outliner.validate.validate_page_title(property_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),property], null));

logseq.outliner.validate.validate_page_title_characters(property_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),property], null));

logseq.outliner.validate.validate_block_title(cljs.core.deref(conn),property_name,property);

return logseq.outliner.validate.validate_property_title.cljs$core$IFn$_invoke$arity$1(property_name);
} else {
return null;
}
});
logseq.outliner.property.throw_disallowed_many_to_one_BANG_ = (function logseq$outliner$property$throw_disallowed_many_to_one_BANG_(){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Disallowed many to one conversion",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"This property can't change from multiple values to one value because it has existing data.",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("property.validation","many-to-one","property.validation/many-to-one",-1877624040),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null)], null));
});
/**
 * Drop an unsafe many→one cardinality restore when other schema fields are
 * being replayed. A cardinality-only many→one with data still throws.
 */
logseq.outliner.property.schema_for_update = (function logseq$outliner$property$schema_for_update(db,db_ident,property,schema){
var many__GT_one_QMARK_ = ((logseq.db.frontend.property.many_QMARK_(property)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"one","one",935007904),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema))));
var has_values_QMARK_ = cljs.core.seq(datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),db_ident));
if(((many__GT_one_QMARK_) && (has_values_QMARK_))){
if(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659));
} else {
return logseq.outliner.property.throw_disallowed_many_to_one_BANG_();
}
} else {
return schema;
}
});
logseq.outliner.property.update_property = (function logseq$outliner$property$update_property(conn,db_ident,property,schema,p__60441){
var map__60442 = p__60441;
var map__60442__$1 = cljs.core.__destructure_map(map__60442);
var opts = map__60442__$1;
var property_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60442__$1,new cljs.core.Keyword(null,"property-name","property-name",-1399851434));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60442__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var e2ee_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60442__$1,new cljs.core.Keyword(null,"e2ee?","e2ee?",1272351286));
var encrypted_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60442__$1,new cljs.core.Keyword(null,"encrypted-name","encrypted-name",1444156139));
logseq.outliner.property.validate_property_name_update(conn,property,property_name,opts);

logseq.outliner.validate.validate_editing_built_in_property(property,schema);

var schema__$1 = logseq.outliner.property.schema_for_update(cljs.core.deref(conn),db_ident,property,schema);
var changed_property_attrs = (function (){var G__60443 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__60444){
var vec__60445 = p__60444;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60445,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60445,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(property,k),v)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema__$1,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659))));
if((((!((property_name == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(property_name,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(property))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__60443,new cljs.core.Keyword("block","title","block/title",710445684),property_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","name","block/name",1619760316),(cljs.core.truth_(e2ee_QMARK_)?encrypted_name:logseq.common.util.page_name_sanity_lc(property_name))], 0));
} else {
return G__60443;
}
})();
var property_tx_data = (function (){var G__60448 = cljs.core.PersistentVector.EMPTY;
var G__60448__$1 = ((cljs.core.seq(changed_property_attrs))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60448,logseq.outliner.core.block_with_updated_at(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),db_ident], null),changed_property_attrs], 0)))):G__60448);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.seq(schema__$1);
if(and__5140__auto__){
var or__5142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(schema__$1),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var and__5140__auto____$1 = new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$1);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema__$1),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(property))));
} else {
return and__5140__auto____$1;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(schema__$1))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(property))))) || (cljs.core.seq(logseq.db.common.entity_plus.lookup_kv_then_entity.cljs$core$IFn$_invoke$arity$2(property,new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952)))));
}
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__60448__$1,logseq.outliner.property.update_datascript_schema(property,schema__$1));
} else {
return G__60448__$1;
}
})();
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(property_tx_data,((cljs.core.seq(properties))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__60453){
var vec__60456 = p__60453;
var property_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60456,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60456,(1),null);
return logseq.outliner.property.build_property_value_tx_data(conn,property,property_id,v);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties], 0)):null));
if(((cljs.core.contains_QMARK_(changed_property_attrs,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404))) && (cljs.core.seq(datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(conn),new cljs.core.Keyword(null,"avet","avet",1383857032),db_ident))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Disallowed type change with existing data",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"This property's type can't be changed because it has existing data.",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
} else {
}

if(cljs.core.seq(tx_data)){
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"update-property","update-property",348681633),new cljs.core.Keyword(null,"property-id","property-id",404996975),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property)], null));
} else {
}

return property;
});
logseq.outliner.property.validate_property_value_aux = (function logseq$outliner$property$validate_property_value_aux(schema,value,p__60461){
var map__60462 = p__60461;
var map__60462__$1 = cljs.core.__destructure_map(map__60462);
var many_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60462__$1,new cljs.core.Keyword(null,"many?","many?",-605360673));
var value_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__5140__auto__ = many_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(cljs.core.sequential_QMARK_(value)));
} else {
return and__5140__auto__;
}
})())?cljs.core.PersistentHashSet.createAsIfByAssoc([value]):value);
return malli.error.humanize.cljs$core$IFn$_invoke$arity$1(malli.util.explain_data.cljs$core$IFn$_invoke$arity$2(schema,value_SINGLEQUOTE_));
});
logseq.outliner.property.validate_property_value = (function logseq$outliner$property$validate_property_value(db,property,value){
var property_type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var many_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(property));
var schema = logseq.outliner.property.get_property_value_schema(db,property_type,property);
return logseq.outliner.property.validate_property_value_aux(schema,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"many?","many?",-605360673),many_QMARK_], null));
});
/**
 * Validates `data` against `schema`.
 * Throws an ex-info with readable message if validation fails.
 */
logseq.outliner.property.validate_BANG_ = (function logseq$outliner$property$validate_BANG_(property,schema,value){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(property))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837))))){
return null;
} else {
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(schema,value))){
return null;
} else {
var errors = malli.error.humanize.cljs$core$IFn$_invoke$arity$1(malli.core.explain.cljs$core$IFn$_invoke$arity$2(schema,value));
var error_msg = (""+"Property validation failed: \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(property))+"\" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.coll_QMARK_(errors))?cljs.core.first(errors):errors)));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Schema validation failed",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),error_msg,new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("property.validation","invalid-value","property.validation/invalid-value",616425868),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(property),((cljs.core.coll_QMARK_(errors))?cljs.core.first(errors):errors)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"errors","errors",-908790718),errors], null));
}
}
});
logseq.outliner.property.throw_error_if_invalid_property_value = (function logseq$outliner$property$throw_error_if_invalid_property_value(db,property,value){
var property_type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var many_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(property));
var schema = logseq.outliner.property.get_property_value_schema(db,property_type,property);
var value_SINGLEQUOTE_ = ((((many_QMARK_) && ((!(cljs.core.sequential_QMARK_(value))))))?cljs.core.PersistentHashSet.createAsIfByAssoc([value]):value);
return logseq.outliner.property.validate_BANG_(property,schema,value_SINGLEQUOTE_);
});
logseq.outliner.property.throw_error_if_invalid_new_property_value = (function logseq$outliner$property$throw_error_if_invalid_new_property_value(db,property,value){
var property_type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var many_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(property));
var schema = logseq.outliner.property.get_property_value_schema.cljs$core$IFn$_invoke$arity$variadic(db,property_type,property,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"new-closed-value?","new-closed-value?",773408852),true], 0));
var value_SINGLEQUOTE_ = ((((many_QMARK_) && ((!(((cljs.core.sequential_QMARK_(value)) || (cljs.core.set_QMARK_(value))))))))?cljs.core.PersistentHashSet.createAsIfByAssoc([value]):value);
return logseq.outliner.property.validate_BANG_(property,schema,value_SINGLEQUOTE_);
});
logseq.outliner.property.__GT_eid = (function logseq$outliner$property$__GT_eid(id){
if(cljs.core.uuid_QMARK_(id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
} else {
return id;
}
});
/**
 * Adds the raw property pair (value not modified) to the given block if the property value is valid
 */
logseq.outliner.property.raw_set_block_property_BANG_ = (function logseq$outliner$property$raw_set_block_property_BANG_(conn,block,property,new_value){
logseq.outliner.property.throw_error_if_read_only_property(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));

logseq.outliner.property.throw_error_if_invalid_property_value(cljs.core.deref(conn),property,new_value);

var property_id = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property);
var tx_data = logseq.outliner.property.build_property_value_tx_data(conn,block,property_id,new_value);
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
});
/**
 * Creates a property value block for the given property and value.
 * 
 *   Adds it to `block-id` unless `:set-block-property?` is false.
 */
logseq.outliner.property.create_property_text_block_BANG_ = (function logseq$outliner$property$create_property_text_block_BANG_(conn,block_id,property_id,value,p__60471){
var map__60472 = p__60471;
var map__60472__$1 = cljs.core.__destructure_map(map__60472);
var new_block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60472__$1,new cljs.core.Keyword(null,"new-block-id","new-block-id",2138942695));
var set_block_property_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60472__$1,new cljs.core.Keyword(null,"set-block-property?","set-block-property?",1347766485),true);
var property = (function (){var G__60474 = cljs.core.deref(conn);
var G__60475 = property_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60474,G__60475) : datascript.core.entity.call(null,G__60474,G__60475));
})();
var block = (cljs.core.truth_(block_id)?(function (){var G__60476 = cljs.core.deref(conn);
var G__60477 = block_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60476,G__60477) : datascript.core.entity.call(null,G__60476,G__60477));
})():null);
var _ = (((!((property == null))))?null:(function(){throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Property "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_id)+" doesn't exist yet"))+"\n"+"(some? property)")))})());
var value_SINGLEQUOTE_ = logseq.outliner.property.convert_property_input_string(new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(block),property,value);
var ___$1 = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"number","number",1570378438))) && ((!(typeof value === 'string')))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("value should be a string",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_id,new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id,new cljs.core.Keyword(null,"value","value",305978217),value_SINGLEQUOTE_], null))})():null);
var new_value_block = (function (){var G__60479 = logseq.db.frontend.property.build.build_property_value_block((function (){var or__5142__auto__ = block;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return property;
}
})(),property,value_SINGLEQUOTE_);
if(cljs.core.truth_(new_block_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60479,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new_block_id);
} else {
return G__60479;
}
})();
logseq.db.batch_transact_with_temp_conn_BANG_(conn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"create-property-text-block","create-property-text-block",1772697260)], null),(function (conn__$1){
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_value_block], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null));

var property_id__$1 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_((function (){var and__5140__auto__ = property_id__$1;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = block;
if(cljs.core.truth_(and__5140__auto____$1)){
return set_block_property_QMARK_;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__60484 = cljs.core.deref(conn__$1);
var G__60485 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new_value_block)], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60484,G__60485) : datascript.core.entity.call(null,G__60484,G__60485));
})());
if(cljs.core.truth_(temp__5825__auto__)){
var block_id__$1 = temp__5825__auto__;
return logseq.outliner.property.raw_set_block_property_BANG_(conn__$1,block,property,block_id__$1);
} else {
return null;
}
} else {
return null;
}
}));

return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(new_value_block);
});
logseq.outliner.property.get_property_value_eid = (function logseq$outliner$property$get_property_value_eid(db,property_id,raw_value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("block","tags","block/tags",1814948340))){
return cljs.core.first((function (){var G__60510 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083)], null)], null);
var G__60511 = db;
var G__60512 = raw_value;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__60510,G__60511,G__60512) : datascript.core.q.call(null,G__60510,G__60511,G__60512));
})());
} else {
return cljs.core.first((function (){var G__60513 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?property-id","?property-id",1609045570,null),new cljs.core.Symbol(null,"?raw-value","?raw-value",-1541028400,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"?property-id","?property-id",1609045570,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Symbol(null,"?raw-value","?raw-value",-1541028400,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865),new cljs.core.Symbol(null,"?raw-value","?raw-value",-1541028400,null)], null))], null);
var G__60514 = db;
var G__60515 = property_id;
var G__60516 = raw_value;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__60513,G__60514,G__60515,G__60516) : datascript.core.q.call(null,G__60513,G__60514,G__60515,G__60516));
})());
}
});
/**
 * Find or create a property value. Only to be used with properties that have ref types
 */
logseq.outliner.property.find_or_create_property_value = (function logseq$outliner$property$find_or_create_property_value(conn,property_id,v,block_id){
var property = (function (){var G__60517 = cljs.core.deref(conn);
var G__60518 = property_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60517,G__60518) : datascript.core.entity.call(null,G__60517,G__60518));
})();
var closed_values_QMARK_ = cljs.core.seq(logseq.db.common.entity_plus.lookup_kv_then_entity.cljs$core$IFn$_invoke$arity$2(property,new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952)));
var default_or_url_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property));
if(closed_values_QMARK_){
return cljs.core.some((function (item){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(item),v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865).cljs$core$IFn$_invoke$arity$1(item),v)))){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item);
} else {
return null;
}
}),new cljs.core.Keyword("block","_closed-value-property","block/_closed-value-property",-1361451442).cljs$core$IFn$_invoke$arity$1(property));
} else {
if(((default_or_url_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("logseq.property","order-list-type","logseq.property/order-list-type",607817111))))){
var _ = logseq.outliner.property.throw_error_if_invalid_new_property_value(cljs.core.deref(conn),property,v);
var v_uuid = logseq.outliner.property.create_property_text_block_BANG_(conn,block_id,property_id,v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-block-property?","set-block-property?",1347766485),false], null));
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__60520 = cljs.core.deref(conn);
var G__60521 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),v_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60520,G__60521) : datascript.core.entity.call(null,G__60520,G__60521));
})());
} else {
var or__5142__auto__ = logseq.outliner.property.get_property_value_eid(cljs.core.deref(conn),property_id,v);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var v_uuid = logseq.outliner.property.create_property_text_block_BANG_(conn,null,property_id,v,cljs.core.PersistentArrayMap.EMPTY);
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__60522 = cljs.core.deref(conn);
var G__60523 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),v_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60522,G__60523) : datascript.core.entity.call(null,G__60522,G__60523));
})());
}

}
}
});
/**
 * Converts a ref property's value whether it's an integer or a string. Creates
 * a property ref value for a string value if necessary
 */
logseq.outliner.property.convert_ref_property_value = (function logseq$outliner$property$convert_ref_property_value(conn,property_id,v,property_type,p__60530){
var map__60535 = p__60530;
var map__60535__$1 = cljs.core.__destructure_map(map__60535);
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60535__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var entity_id_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60535__$1,new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382));
var number_property_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_type,new cljs.core.Keyword(null,"number","number",1570378438));
if(((cljs.core.qualified_keyword_QMARK_(v)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keyword","keyword",811389747),property_type)))){
return logseq.outliner.property.db_ident__GT_eid(cljs.core.deref(conn),v);
} else {
if(((cljs.core.coll_QMARK_(v)) && (((cljs.core.every_QMARK_(cljs.core.integer_QMARK_,v)) && ((!(number_property_QMARK_))))))){
return v;
} else {
if(((cljs.core.integer_QMARK_(v)) && ((((!(number_property_QMARK_))) || ((((!(entity_id_QMARK_ === false))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1((function (){var G__60550 = cljs.core.deref(conn);
var G__60551 = v;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60550,G__60551) : datascript.core.entity.call(null,G__60550,G__60551));
})())))))))))){
return v;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_type,new cljs.core.Keyword(null,"page","page",849072397))){
var error_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id,new cljs.core.Keyword(null,"property-type","property-type",-261678582),property_type,new cljs.core.Keyword(null,"v","v",21465059),v], null);
if(((clojure.string.blank_QMARK_(v)) || ((!(typeof v === 'string'))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Value should be non-empty string",error_data);
} else {
var page = logseq.db.get_page(cljs.core.deref(conn),v);
if(cljs.core.truth_(logseq.db.frontend.entity_util.page_QMARK_(page))){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
} else {
var vec__60558 = logseq.outliner.page.create_BANG_(conn,v,error_data);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60558,(0),null);
var page_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60558,(1),null);
if(cljs.core.not(page_uuid)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Failed to create page",cljs.core.PersistentArrayMap.EMPTY);
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__60572 = cljs.core.deref(conn);
var G__60573 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),page_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60572,G__60573) : datascript.core.entity.call(null,G__60572,G__60573));
})());
}
}
}
} else {
var temp__5825__auto__ = ((((number_property_QMARK_) && (typeof v === 'string')))?cljs.core.parse_double(v):v);
if(cljs.core.truth_(temp__5825__auto__)){
var v_SINGLEQUOTE_ = temp__5825__auto__;
return logseq.outliner.property.find_or_create_property_value(conn,property_id,v_SINGLEQUOTE_,block_id);
} else {
return null;
}

}
}
}
}
});
logseq.outliner.property.convert_ref_property_values = (function logseq$outliner$property$convert_ref_property_values(conn,property_id,value,property_type,p__60581){
var map__60582 = p__60581;
var map__60582__$1 = cljs.core.__destructure_map(map__60582);
var options = map__60582__$1;
var many_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60582__$1,new cljs.core.Keyword(null,"many?","many?",-605360673));
if(cljs.core.not((function (){var and__5140__auto__ = many_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.sequential_QMARK_(value)) || (cljs.core.set_QMARK_(value)));
} else {
return and__5140__auto__;
}
})())){
return logseq.outliner.property.convert_ref_property_value(conn,property_id,value,property_type,options);
} else {
try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60580_SHARP_){
return logseq.outliner.property.convert_ref_property_value(conn,property_id,p1__60580_SHARP_,property_type,options);
}),value);
}catch (e60583){var e = e60583;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to convert many property values",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id,new cljs.core.Keyword(null,"property-type","property-type",-261678582),property_type,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"many?","many?",-605360673),many_QMARK_,new cljs.core.Keyword(null,"value-shape","value-shape",565052946),((cljs.core.vector_QMARK_(value))?new cljs.core.Keyword(null,"vector","vector",1902966158):((cljs.core.set_QMARK_(value))?new cljs.core.Keyword(null,"set","set",304602554):((cljs.core.sequential_QMARK_(value))?new cljs.core.Keyword(null,"seq","seq",-1817803783):new cljs.core.Keyword(null,"single","single",1551466437)
)))], null),cljs.core.ex_data(e)], 0)),e);
}}
});
logseq.outliner.property.throw_error_if_self_value = (function logseq$outliner$property$throw_error_if_self_value(block,value,ref_QMARK_){
var values = ((((cljs.core.sequential_QMARK_(value)) || (cljs.core.set_QMARK_(value))))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null));
if(cljs.core.truth_((function (){var and__5140__auto__ = ref_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.some((function (p1__60584_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__60584_SHARP_,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
}),values);
} else {
return and__5140__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't set this block itself as own property value",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Can't set this block itself as own property value.",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("property.validation","cant-set-self-value","property.validation/cant-set-self-value",-1769384585),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
} else {
return null;
}
});
logseq.outliner.property.remove_status_BANG_ = (function logseq$outliner$property$remove_status_BANG_(conn,block_ids,p__60591,tx_meta){
var map__60592 = p__60591;
var map__60592__$1 = cljs.core.__destructure_map(map__60592);
var preserve_task_tag_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60592__$1,new cljs.core.Keyword(null,"preserve-task-tag?","preserve-task-tag?",422655630));
var blocks = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__60585_SHARP_){
var G__60593 = cljs.core.deref(conn);
var G__60594 = logseq.outliner.property.__GT_eid(p1__60585_SHARP_);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60593,G__60594) : datascript.core.entity.call(null,G__60593,G__60594));
}),block_ids);
var task_properties = new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050).cljs$core$IFn$_invoke$arity$1((function (){var G__60596 = cljs.core.deref(conn);
var G__60597 = new cljs.core.Keyword("logseq.class","Task","logseq.class/Task",-1282181457);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60596,G__60597) : datascript.core.entity.call(null,G__60596,G__60597));
})());
var other_task_properties = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),task_properties)),new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853));
logseq.outliner.property.validate_batch_deletion_of_property(blocks,new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853));

if(cljs.core.seq(blocks)){
var txs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (block){
var status = new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853).cljs$core$IFn$_invoke$arity$1(block);
var direct_status_QMARK_ = cljs.core.contains_QMARK_((function (){var G__60603 = cljs.core.deref(conn);
var G__60604 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853)], null);
var G__60605 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__60603,G__60604,G__60605) : datascript.core.pull.call(null,G__60603,G__60604,G__60605));
})(),new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853));
var empty_placeholder_QMARK_ = ((direct_status_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(status))));
var task_QMARK_ = cljs.core.some((function (p1__60588_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Task","logseq.class/Task",-1282181457),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__60588_SHARP_));
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block));
var status_provided_QMARK_ = (function (){var or__5142__auto__ = task_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.outliner.property.block_classes_provide_property_QMARK_(cljs.core.deref(conn),block,new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853));
}
})();
var remove_task_QMARK_ = (function (){var and__5140__auto__ = task_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (((!(empty_placeholder_QMARK_))) && (((cljs.core.not(preserve_task_tag_QMARK_)) && (cljs.core.not_any_QMARK_((function (p1__60589_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,p1__60589_SHARP_);
}),other_task_properties)))));
} else {
return and__5140__auto__;
}
})();
if(empty_placeholder_QMARK_){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(remove_task_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Task","logseq.class/Task",-1282181457)], null)], null);
} else {
if(cljs.core.truth_(status_provided_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853),new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837)], null)], null);
} else {
if(direct_status_QMARK_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853)], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks], 0));
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,txs,tx_meta);
} else {
return null;
}
});
logseq.outliner.property.batch_remove_property_BANG_ = (function logseq$outliner$property$batch_remove_property_BANG_(var_args){
var G__60612 = arguments.length;
switch (G__60612) {
case 3:
return logseq.outliner.property.batch_remove_property_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return logseq.outliner.property.batch_remove_property_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.outliner.property.batch_remove_property_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,block_ids,property_id){
return logseq.outliner.property.batch_remove_property_BANG_.cljs$core$IFn$_invoke$arity$4(conn,block_ids,property_id,cljs.core.PersistentArrayMap.EMPTY);
}));

(logseq.outliner.property.batch_remove_property_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (conn,block_ids,property_id,opts){
logseq.outliner.property.throw_error_if_read_only_property(property_id);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853),property_id)){
return logseq.outliner.property.remove_status_BANG_(conn,block_ids,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"batch-remove-property","batch-remove-property",-1380335108)], null));
} else {
var block_eids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.outliner.property.__GT_eid,block_ids);
var blocks = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (id){
var G__60625 = cljs.core.deref(conn);
var G__60626 = id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60625,G__60626) : datascript.core.entity.call(null,G__60625,G__60626));
}),block_eids);
var block_id_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks));
logseq.outliner.property.validate_batch_deletion_of_property(blocks,property_id);

if(cljs.core.seq(blocks)){
var temp__5825__auto__ = (function (){var G__60633 = cljs.core.deref(conn);
var G__60634 = property_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60633,G__60634) : datascript.core.entity.call(null,G__60633,G__60634));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var property = temp__5825__auto__;
var txs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (block){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,property_id);
var entities = ((datascript.impl.entity.entity_QMARK_(value))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null):((((cljs.core.sequential_QMARK_(value)) && (cljs.core.every_QMARK_(datascript.impl.entity.entity_QMARK_,value))))?value:null
));
var deleting_entities = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (value__$1){
var value_referrers_STAR_ = (function (){var G__60638 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?property-id","?property-id",1609045570,null),new cljs.core.Symbol(null,"?value-id","?value-id",76240493,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?property-id","?property-id",1609045570,null),new cljs.core.Symbol(null,"?value-id","?value-id",76240493,null)], null)], null);
var G__60639 = cljs.core.deref(conn);
var G__60640 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property);
var G__60641 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value__$1);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__60638,G__60639,G__60640,G__60641) : datascript.core.q.call(null,G__60638,G__60639,G__60640,G__60641));
})();
var value_referrers = (((value_referrers_STAR_ == null))?cljs.core.PersistentHashSet.EMPTY:((cljs.core.coll_QMARK_(value_referrers_STAR_))?cljs.core.set(value_referrers_STAR_):cljs.core.PersistentHashSet.createAsIfByAssoc([value_referrers_STAR_])
));
var and__5140__auto__ = new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(value__$1);
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not((function (){var or__5142__auto__ = logseq.db.frontend.entity_util.page_QMARK_(value__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (logseq.db.closed_value_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.closed_value_QMARK_.cljs$core$IFn$_invoke$arity$1(value__$1) : logseq.db.closed_value_QMARK_.call(null,value__$1));
}
})())) && (cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(value_referrers,block_id_set))));
} else {
return and__5140__auto__;
}
}),entities);
var retract_blocks_tx = ((cljs.core.seq(deleting_entities))?new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(logseq.outliner.core.delete_blocks(cljs.core.deref(conn),deleting_entities,cljs.core.PersistentArrayMap.EMPTY)):null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property)], null)], null),retract_blocks_tx);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([blocks], 0));
if(cljs.core.seq(txs)){
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,txs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"batch-remove-property","batch-remove-property",-1380335108)], null));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}
}));

(logseq.outliner.property.batch_remove_property_BANG_.cljs$lang$maxFixedArity = 4);

logseq.outliner.property.validate_batch_set_property = (function logseq$outliner$property$validate_batch_set_property(conn,block_eids,property_id,v){
logseq.outliner.validate.disallow_editing_private_built_in_nodes(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60642_SHARP_){
var G__60646 = cljs.core.deref(conn);
var G__60647 = p1__60642_SHARP_;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60646,G__60647) : datascript.core.entity.call(null,G__60646,G__60647));
}),block_eids));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("block","tags","block/tags",1814948340))){
logseq.outliner.validate.validate_tags_property(cljs.core.deref(conn),block_eids,v);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803))){
var seq__60651 = cljs.core.seq(logseq.outliner.property.__GT_entity_ids(cljs.core.deref(conn),v));
var chunk__60652 = null;
var count__60653 = (0);
var i__60654 = (0);
while(true){
if((i__60654 < count__60653)){
var parent_id = chunk__60652.cljs$core$IIndexed$_nth$arity$2(null,i__60654);
logseq.outliner.validate.validate_extends_property(cljs.core.deref(conn),(function (){var G__60669 = cljs.core.deref(conn);
var G__60670 = parent_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60669,G__60670) : datascript.core.entity.call(null,G__60669,G__60670));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__60651,chunk__60652,count__60653,i__60654,parent_id){
return (function (p1__60643_SHARP_){
var G__60671 = cljs.core.deref(conn);
var G__60672 = p1__60643_SHARP_;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60671,G__60672) : datascript.core.entity.call(null,G__60671,G__60672));
});})(seq__60651,chunk__60652,count__60653,i__60654,parent_id))
,block_eids));


var G__60816 = seq__60651;
var G__60817 = chunk__60652;
var G__60818 = count__60653;
var G__60819 = (i__60654 + (1));
seq__60651 = G__60816;
chunk__60652 = G__60817;
count__60653 = G__60818;
i__60654 = G__60819;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__60651);
if(temp__5825__auto__){
var seq__60651__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60651__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__60651__$1);
var G__60820 = cljs.core.chunk_rest(seq__60651__$1);
var G__60821 = c__5673__auto__;
var G__60822 = cljs.core.count(c__5673__auto__);
var G__60823 = (0);
seq__60651 = G__60820;
chunk__60652 = G__60821;
count__60653 = G__60822;
i__60654 = G__60823;
continue;
} else {
var parent_id = cljs.core.first(seq__60651__$1);
logseq.outliner.validate.validate_extends_property(cljs.core.deref(conn),(function (){var G__60673 = cljs.core.deref(conn);
var G__60674 = parent_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60673,G__60674) : datascript.core.entity.call(null,G__60673,G__60674));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__60651,chunk__60652,count__60653,i__60654,parent_id,seq__60651__$1,temp__5825__auto__){
return (function (p1__60643_SHARP_){
var G__60675 = cljs.core.deref(conn);
var G__60676 = p1__60643_SHARP_;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60675,G__60676) : datascript.core.entity.call(null,G__60675,G__60676));
});})(seq__60651,chunk__60652,count__60653,i__60654,parent_id,seq__60651__$1,temp__5825__auto__))
,block_eids));


var G__60824 = cljs.core.next(seq__60651__$1);
var G__60825 = null;
var G__60826 = (0);
var G__60827 = (0);
seq__60651 = G__60824;
chunk__60652 = G__60825;
count__60653 = G__60826;
i__60654 = G__60827;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
logseq.outliner.property.normalize_default_url_property_value = (function logseq$outliner$property$normalize_default_url_property_value(conn,property,value){
if(typeof value === 'number'){
logseq.outliner.property.throw_error_if_invalid_property_value(cljs.core.deref(conn),property,value);

return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1((function (){var G__60677 = cljs.core.deref(conn);
var G__60678 = value;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60677,G__60678) : datascript.core.entity.call(null,G__60677,G__60678));
})());
} else {
return value;
}
});
logseq.outliner.property.normalize_and_validate_default_url_property_value = (function logseq$outliner$property$normalize_and_validate_default_url_property_value(conn,property,value){
var value_SINGLEQUOTE_ = logseq.outliner.property.normalize_default_url_property_value(conn,property,value);
if(cljs.core.qualified_keyword_QMARK_(value_SINGLEQUOTE_)){
} else {
logseq.outliner.property.throw_error_if_invalid_new_property_value(cljs.core.deref(conn),property,value_SINGLEQUOTE_);
}

return value_SINGLEQUOTE_;
});
logseq.outliner.property.normalize_and_validate_default_url_property_values = (function logseq$outliner$property$normalize_and_validate_default_url_property_values(conn,property,value,many_QMARK_){
if(cljs.core.truth_((function (){var and__5140__auto__ = many_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.sequential_QMARK_(value)) || (cljs.core.set_QMARK_(value)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__60681_SHARP_){
return logseq.outliner.property.normalize_and_validate_default_url_property_value(conn,property,p1__60681_SHARP_);
}),value);
} else {
return logseq.outliner.property.normalize_and_validate_default_url_property_value(conn,property,value);
}
});
/**
 * Validate alias ownership invariants when adding a :block/alias value.
 */
logseq.outliner.property.throw_error_if_invalid_alias = (function logseq$outliner$property$throw_error_if_invalid_alias(db,source_block,alias_id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(alias_id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_block))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Alias can't be the page itself",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.validation","alias-self","page.validation/alias-self",712208594),new cljs.core.Keyword(null,"message","message",-406056002),"Alias can't be the page itself."], null)], null));
} else {
}

var alias_entity_60828 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,alias_id) : datascript.core.entity.call(null,db,alias_id));
var temp__5825__auto___60829 = cljs.core.first(new cljs.core.Keyword("block","_alias","block/_alias",444442061).cljs$core$IFn$_invoke$arity$1(alias_entity_60828));
if(cljs.core.truth_(temp__5825__auto___60829)){
var existing_owner_60830 = temp__5825__auto___60829;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(existing_owner_60830),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_block))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Page is already an alias of another page",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.validation","alias-duplicate-owner","page.validation/alias-duplicate-owner",2127914163),new cljs.core.Keyword(null,"message","message",-406056002),"This page is already an alias of another page."], null)], null));
} else {
}
} else {
}

if(cljs.core.seq(new cljs.core.Keyword("block","alias","block/alias",-2112644699).cljs$core$IFn$_invoke$arity$1(alias_entity_60828))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("A page that has aliases can't be used as an alias",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.validation","alias-owns-aliases","page.validation/alias-owns-aliases",1903976434),new cljs.core.Keyword(null,"message","message",-406056002),"A page that has aliases can't be used as an alias."], null)], null));
} else {
}

if(cljs.core.seq(new cljs.core.Keyword("block","_alias","block/_alias",444442061).cljs$core$IFn$_invoke$arity$1((function (){var G__60682 = db;
var G__60683 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(source_block);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60682,G__60683) : datascript.core.entity.call(null,G__60682,G__60683));
})()))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("A page that is an alias of another page can't have its own aliases",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.validation","alias-source-is-alias","page.validation/alias-source-is-alias",1275872271),new cljs.core.Keyword(null,"message","message",-406056002),"A page that is an alias of another page can't have its own aliases."], null)], null));
} else {
return null;
}
});
logseq.outliner.property.throw_error_if_batch_alias_targets = (function logseq$outliner$property$throw_error_if_batch_alias_targets(block_eids,property_id){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("block","alias","block/alias",-2112644699))) && ((cljs.core.count(block_eids) > (1))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Aliases can't be batch-set on multiple pages",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.validation","alias-batch-multiple-owners","page.validation/alias-batch-multiple-owners",-1922188934),new cljs.core.Keyword(null,"message","message",-406056002),"Aliases can't be batch-set on multiple pages."], null)], null));
} else {
return null;
}
});
/**
 * Sets properties for multiple blocks. Automatically handles property value refs.
 * Does no validation of property values. For :many properties, passing a collection
 * replaces existing values in one call, while passing a scalar preserves add-single-value behavior.
 * For numbers, :entity-id? true forces a ref, false forces a literal for :number
 * properties, and omission preserves automatic value/ref resolution.
 */
logseq.outliner.property.batch_set_property_BANG_ = (function logseq$outliner$property$batch_set_property_BANG_(var_args){
var G__60688 = arguments.length;
switch (G__60688) {
case 4:
return logseq.outliner.property.batch_set_property_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return logseq.outliner.property.batch_set_property_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.outliner.property.batch_set_property_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (conn,block_ids,property_id,v){
return logseq.outliner.property.batch_set_property_BANG_.cljs$core$IFn$_invoke$arity$5(conn,block_ids,property_id,v,cljs.core.PersistentArrayMap.EMPTY);
}));

(logseq.outliner.property.batch_set_property_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (conn,block_ids,property_id,v,options){
if(cljs.core.truth_(property_id)){
} else {
throw (new Error((""+"Assert failed: "+"property-id is nil"+"\n"+"property-id")));
}

logseq.outliner.property.throw_error_if_read_only_property(property_id);

if((v == null)){
return logseq.outliner.property.batch_remove_property_BANG_.cljs$core$IFn$_invoke$arity$4(conn,block_ids,property_id,options);
} else {
var block_eids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.outliner.property.__GT_eid,block_ids);
var _ = logseq.outliner.property.throw_error_if_batch_alias_targets(block_eids,property_id);
var ___$1 = logseq.outliner.property.validate_batch_set_property(conn,block_eids,property_id,v);
var property = (function (){var G__60703 = cljs.core.deref(conn);
var G__60704 = property_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60703,G__60704) : datascript.core.entity.call(null,G__60703,G__60704));
})();
var ___$2 = (((property == null))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Property "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_id)+" doesn't exist yet"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id], null))})():null);
var property_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(property,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword(null,"default","default",-1987822328));
var many_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(property));
var entity_id_QMARK_ = (function (){var and__5140__auto__ = new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(and__5140__auto__)){
return typeof v === 'number';
} else {
return and__5140__auto__;
}
})();
var ref_QMARK_ = cljs.core.contains_QMARK_(logseq.db.frontend.property.type.all_ref_property_types,property_type);
var extends_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803));
var default_url_not_closed_QMARK_ = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null),property_type)) && ((((!(extends_QMARK_))) && (cljs.core.not(cljs.core.seq(logseq.db.common.entity_plus.lookup_kv_then_entity.cljs$core$IFn$_invoke$arity$2(property,new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952))))))));
var v_SINGLEQUOTE_ = ((extends_QMARK_)?logseq.outliner.property.normalize_extends_value(cljs.core.deref(conn),v):((((ref_QMARK_) && (cljs.core.not(entity_id_QMARK_))))?((default_url_not_closed_QMARK_)?logseq.outliner.property.normalize_and_validate_default_url_property_values(conn,property,v,many_QMARK_):logseq.outliner.property.convert_ref_property_values(conn,property_id,v,property_type,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"many?","many?",-605360673),many_QMARK_,new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382),new cljs.core.Keyword(null,"entity-id?","entity-id?",450489382).cljs$core$IFn$_invoke$arity$1(options)], null))):v
));
var ___$3 = (((v_SINGLEQUOTE_ == null))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Property value must be not nil",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),v], null))})():null);
var txs = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (eid){
var temp__5823__auto__ = (function (){var G__60709 = cljs.core.deref(conn);
var G__60710 = eid;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60709,G__60710) : datascript.core.entity.call(null,G__60709,G__60710));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var block = temp__5823__auto__;
var v_SINGLEQUOTE___$1 = ((((default_url_not_closed_QMARK_) && (cljs.core.not((function (){var and__5140__auto____$1 = (v instanceof cljs.core.Keyword);
if(and__5140__auto____$1){
return entity_id_QMARK_;
} else {
return and__5140__auto____$1;
}
})()))))?logseq.outliner.property.convert_ref_property_values(conn,property_id,v_SINGLEQUOTE_,property_type,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"many?","many?",-605360673),many_QMARK_,new cljs.core.Keyword(null,"block-id","block-id",-70582834),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null)):v_SINGLEQUOTE_);
logseq.outliner.property.throw_error_if_self_value(block,v_SINGLEQUOTE___$1,ref_QMARK_);

logseq.outliner.property.throw_error_if_invalid_property_value(cljs.core.deref(conn),property,v_SINGLEQUOTE___$1);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("block","alias","block/alias",-2112644699))){
var seq__60711_60832 = cljs.core.seq(((cljs.core.coll_QMARK_(v_SINGLEQUOTE___$1))?v_SINGLEQUOTE___$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v_SINGLEQUOTE___$1], null)));
var chunk__60712_60833 = null;
var count__60713_60834 = (0);
var i__60714_60835 = (0);
while(true){
if((i__60714_60835 < count__60713_60834)){
var alias_id_60836 = chunk__60712_60833.cljs$core$IIndexed$_nth$arity$2(null,i__60714_60835);
if(typeof alias_id_60836 === 'number'){
logseq.outliner.property.throw_error_if_invalid_alias(cljs.core.deref(conn),block,alias_id_60836);
} else {
}


var G__60837 = seq__60711_60832;
var G__60838 = chunk__60712_60833;
var G__60839 = count__60713_60834;
var G__60840 = (i__60714_60835 + (1));
seq__60711_60832 = G__60837;
chunk__60712_60833 = G__60838;
count__60713_60834 = G__60839;
i__60714_60835 = G__60840;
continue;
} else {
var temp__5825__auto___60841 = cljs.core.seq(seq__60711_60832);
if(temp__5825__auto___60841){
var seq__60711_60842__$1 = temp__5825__auto___60841;
if(cljs.core.chunked_seq_QMARK_(seq__60711_60842__$1)){
var c__5673__auto___60843 = cljs.core.chunk_first(seq__60711_60842__$1);
var G__60844 = cljs.core.chunk_rest(seq__60711_60842__$1);
var G__60845 = c__5673__auto___60843;
var G__60846 = cljs.core.count(c__5673__auto___60843);
var G__60847 = (0);
seq__60711_60832 = G__60844;
chunk__60712_60833 = G__60845;
count__60713_60834 = G__60846;
i__60714_60835 = G__60847;
continue;
} else {
var alias_id_60848 = cljs.core.first(seq__60711_60842__$1);
if(typeof alias_id_60848 === 'number'){
logseq.outliner.property.throw_error_if_invalid_alias(cljs.core.deref(conn),block,alias_id_60848);
} else {
}


var G__60849 = cljs.core.next(seq__60711_60842__$1);
var G__60850 = null;
var G__60851 = (0);
var G__60852 = (0);
seq__60711_60832 = G__60849;
chunk__60712_60833 = G__60850;
count__60713_60834 = G__60851;
i__60714_60835 = G__60852;
continue;
}
} else {
}
}
break;
}
} else {
}

return logseq.outliner.property.build_property_value_tx_data(conn,block,property_id,v_SINGLEQUOTE___$1);
} else {
return console.error("Skipping setting a block's property because the block id could not be found:",eid);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_eids], 0)));
if(cljs.core.seq(txs)){
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,txs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"batch-set-property","batch-set-property",-617851002)], null));
} else {
return null;
}
}
}));

(logseq.outliner.property.batch_set_property_BANG_.cljs$lang$maxFixedArity = 5);

logseq.outliner.property.remove_block_property_BANG_ = (function logseq$outliner$property$remove_block_property_BANG_(conn,eid,property_id){
logseq.outliner.property.throw_error_if_read_only_property(property_id);

var eid__$1 = logseq.outliner.property.__GT_eid(eid);
var block = (function (){var G__60721 = cljs.core.deref(conn);
var G__60722 = eid__$1;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60721,G__60722) : datascript.core.entity.call(null,G__60721,G__60722));
})();
var property = (function (){var G__60723 = cljs.core.deref(conn);
var G__60724 = property_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60723,G__60724) : datascript.core.entity.call(null,G__60723,G__60724));
})();
var tx_meta = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"remove-block-property","remove-block-property",-1355530334)], null);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853),null,new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),null], null), null),property_id)){
} else {
logseq.outliner.property.validate_batch_deletion_of_property(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null),property_id);
}

if(cljs.core.truth_(block)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,property_id)))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","status","logseq.property/status",-907216853),property_id)){
return logseq.outliner.property.remove_status_BANG_(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid__$1], null),cljs.core.PersistentArrayMap.EMPTY,tx_meta);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662).cljs$core$IFn$_invoke$arity$1(property),cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,property_id));
} else {
return and__5140__auto__;
}
})())){
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),property_id,new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837)])], null),tx_meta);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = (logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.class_QMARK_.call(null,block));
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803));
} else {
return and__5140__auto__;
}
})())){
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),new cljs.core.Keyword("logseq.class","Root","logseq.class/Root",273783827)], null)], null),tx_meta);
} else {
if(cljs.core.contains_QMARK_(logseq.db.frontend.property.db_attribute_properties,property_id)){
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),property_id], null)], null),tx_meta);
} else {
return logseq.outliner.property.batch_remove_property_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid__$1], null),property_id);

}
}
}
}
}
} else {
return null;
}
});
logseq.outliner.property.set_block_db_attribute_BANG_ = (function logseq$outliner$property$set_block_db_attribute_BANG_(conn,block,property,property_id,raw_v,tx_v){
var validation_db = cljs.core.deref(conn);
var validation_v = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(property))) && ((!((tx_v == null))))))?tx_v:raw_v);
logseq.outliner.property.throw_error_if_invalid_property_value(validation_db,property,validation_v);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("block","alias","block/alias",-2112644699))){
var seq__60725_60855 = cljs.core.seq(((cljs.core.coll_QMARK_(tx_v))?tx_v:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_v], null)));
var chunk__60726_60856 = null;
var count__60727_60857 = (0);
var i__60728_60858 = (0);
while(true){
if((i__60728_60858 < count__60727_60857)){
var alias_id_60859 = chunk__60726_60856.cljs$core$IIndexed$_nth$arity$2(null,i__60728_60858);
logseq.outliner.property.throw_error_if_invalid_alias(validation_db,block,alias_id_60859);


var G__60860 = seq__60725_60855;
var G__60861 = chunk__60726_60856;
var G__60862 = count__60727_60857;
var G__60863 = (i__60728_60858 + (1));
seq__60725_60855 = G__60860;
chunk__60726_60856 = G__60861;
count__60727_60857 = G__60862;
i__60728_60858 = G__60863;
continue;
} else {
var temp__5825__auto___60864 = cljs.core.seq(seq__60725_60855);
if(temp__5825__auto___60864){
var seq__60725_60865__$1 = temp__5825__auto___60864;
if(cljs.core.chunked_seq_QMARK_(seq__60725_60865__$1)){
var c__5673__auto___60868 = cljs.core.chunk_first(seq__60725_60865__$1);
var G__60869 = cljs.core.chunk_rest(seq__60725_60865__$1);
var G__60870 = c__5673__auto___60868;
var G__60871 = cljs.core.count(c__5673__auto___60868);
var G__60872 = (0);
seq__60725_60855 = G__60869;
chunk__60726_60856 = G__60870;
count__60727_60857 = G__60871;
i__60728_60858 = G__60872;
continue;
} else {
var alias_id_60873 = cljs.core.first(seq__60725_60865__$1);
logseq.outliner.property.throw_error_if_invalid_alias(validation_db,block,alias_id_60873);


var G__60874 = cljs.core.next(seq__60725_60865__$1);
var G__60875 = null;
var G__60876 = (0);
var G__60877 = (0);
seq__60725_60855 = G__60874;
chunk__60726_60856 = G__60875;
count__60727_60857 = G__60876;
i__60728_60858 = G__60877;
continue;
}
} else {
}
}
break;
}
} else {
}

var tx_data = (function (){var G__60729 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),property_id,tx_v])], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60729,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),new cljs.core.Keyword("logseq.class","Root","logseq.class/Root",273783827)], null));
} else {
return G__60729;
}
})();
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
});
/**
 * Updates a block property's value for an existing property-id and block.  If
 *   property is a ref type, automatically handles a raw property value i.e. you
 *   can pass "value" instead of the property value entity. Also handle db
 *   attributes as properties
 */
logseq.outliner.property.set_block_property_BANG_ = (function logseq$outliner$property$set_block_property_BANG_(conn,block_eid,property_id,v){
return logseq.db.batch_transact_with_temp_conn_BANG_(conn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"set-block-property","set-block-property",-301154301)], null),(function (conn__$1){
logseq.outliner.property.throw_error_if_read_only_property(property_id);

var block_eid__$1 = logseq.outliner.property.__GT_eid(block_eid);
var _ = ((cljs.core.qualified_keyword_QMARK_(property_id))?null:(function(){throw (new Error((""+"Assert failed: "+"property-id should be a keyword"+"\n"+"(qualified-keyword? property-id)")))})());
var block = (function (){var G__60730 = cljs.core.deref(conn__$1);
var G__60731 = block_eid__$1;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60730,G__60731) : datascript.core.entity.call(null,G__60730,G__60731));
})();
var db_attribute_QMARK_ = (!(((logseq.db.frontend.schema.schema.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.schema.schema.cljs$core$IFn$_invoke$arity$1(property_id) : logseq.db.frontend.schema.schema.call(null,property_id)) == null)));
var property = (function (){var G__60732 = cljs.core.deref(conn__$1);
var G__60733 = property_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60732,G__60733) : datascript.core.entity.call(null,G__60732,G__60733));
})();
var property_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(property,new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404),new cljs.core.Keyword(null,"default","default",-1987822328));
var ref_QMARK_ = (logseq.db.frontend.property.type.all_ref_property_types.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.property.type.all_ref_property_types.cljs$core$IFn$_invoke$arity$1(property_type) : logseq.db.frontend.property.type.all_ref_property_types.call(null,property_type));
var extends_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803));
var v_SINGLEQUOTE_ = ((extends_QMARK_)?logseq.outliner.property.normalize_extends_value(cljs.core.deref(conn__$1),v):(cljs.core.truth_(ref_QMARK_)?logseq.outliner.property.convert_ref_property_value(conn__$1,property_id,v,property_type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block-id","block-id",-70582834),block_eid__$1], null)):v
));
if(cljs.core.truth_((function (){var and__5140__auto__ = block;
if(cljs.core.truth_(and__5140__auto__)){
return property;
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Set block property failed: block or property doesn't exist",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"block-eid","block-eid",-471800365),block_eid__$1,new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id,new cljs.core.Keyword(null,"block","block",664686210),block,new cljs.core.Keyword(null,"property","property",-1114278232),property], null));
}

if((v_SINGLEQUOTE_ == null)){
return logseq.outliner.property.remove_block_property_BANG_(conn__$1,block_eid__$1,property_id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("block","tags","block/tags",1814948340))){
logseq.outliner.validate.validate_tags_property(cljs.core.deref(conn__$1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_eid__$1], null),v_SINGLEQUOTE_);
} else {
}

if(extends_QMARK_){
var seq__60734_60881 = cljs.core.seq(logseq.outliner.property.__GT_entity_ids(cljs.core.deref(conn__$1),v_SINGLEQUOTE_));
var chunk__60735_60882 = null;
var count__60736_60883 = (0);
var i__60737_60884 = (0);
while(true){
if((i__60737_60884 < count__60736_60883)){
var parent_id_60885 = chunk__60735_60882.cljs$core$IIndexed$_nth$arity$2(null,i__60737_60884);
logseq.outliner.validate.validate_extends_property(cljs.core.deref(conn__$1),(function (){var G__60742 = cljs.core.deref(conn__$1);
var G__60743 = parent_id_60885;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60742,G__60743) : datascript.core.entity.call(null,G__60742,G__60743));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null));


var G__60888 = seq__60734_60881;
var G__60889 = chunk__60735_60882;
var G__60890 = count__60736_60883;
var G__60891 = (i__60737_60884 + (1));
seq__60734_60881 = G__60888;
chunk__60735_60882 = G__60889;
count__60736_60883 = G__60890;
i__60737_60884 = G__60891;
continue;
} else {
var temp__5825__auto___60892 = cljs.core.seq(seq__60734_60881);
if(temp__5825__auto___60892){
var seq__60734_60893__$1 = temp__5825__auto___60892;
if(cljs.core.chunked_seq_QMARK_(seq__60734_60893__$1)){
var c__5673__auto___60894 = cljs.core.chunk_first(seq__60734_60893__$1);
var G__60895 = cljs.core.chunk_rest(seq__60734_60893__$1);
var G__60896 = c__5673__auto___60894;
var G__60897 = cljs.core.count(c__5673__auto___60894);
var G__60898 = (0);
seq__60734_60881 = G__60895;
chunk__60735_60882 = G__60896;
count__60736_60883 = G__60897;
i__60737_60884 = G__60898;
continue;
} else {
var parent_id_60899 = cljs.core.first(seq__60734_60893__$1);
logseq.outliner.validate.validate_extends_property(cljs.core.deref(conn__$1),(function (){var G__60744 = cljs.core.deref(conn__$1);
var G__60745 = parent_id_60899;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60744,G__60745) : datascript.core.entity.call(null,G__60744,G__60745));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block], null));


var G__60901 = cljs.core.next(seq__60734_60893__$1);
var G__60902 = null;
var G__60903 = (0);
var G__60904 = (0);
seq__60734_60881 = G__60901;
chunk__60735_60882 = G__60902;
count__60736_60883 = G__60903;
i__60737_60884 = G__60904;
continue;
}
} else {
}
}
break;
}
} else {
}

if(db_attribute_QMARK_){
return logseq.outliner.property.set_block_db_attribute_BANG_(conn__$1,block,property,property_id,v,v_SINGLEQUOTE_);
} else {
var ___$1 = (((!((property == null))))?null:(function(){throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Property "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_id)+" doesn't exist yet"))+"\n"+"(some? property)")))})());
var ref_QMARK___$1 = (logseq.db.frontend.property.type.all_ref_property_types.cljs$core$IFn$_invoke$arity$1 ? logseq.db.frontend.property.type.all_ref_property_types.cljs$core$IFn$_invoke$arity$1(property_type) : logseq.db.frontend.property.type.all_ref_property_types.call(null,property_type));
var existing_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,property_id);
var many_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(property));
var many_ref_value_ids = (function (value){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
if(datascript.impl.entity.entity_QMARK_(item)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(item);
} else {
return item;
}
}),(((value == null))?cljs.core.PersistentVector.EMPTY:((datascript.impl.entity.entity_QMARK_(value))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null):((cljs.core.coll_QMARK_(value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)
)))));
});
var value_matches_QMARK_ = (cljs.core.truth_(ref_QMARK___$1)?((((many_QMARK_) && (cljs.core.coll_QMARK_(v_SINGLEQUOTE_))))?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(many_ref_value_ids(existing_value),many_ref_value_ids(v_SINGLEQUOTE_)):cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(existing_value,v_SINGLEQUOTE_)):cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(existing_value,v_SINGLEQUOTE_));
logseq.outliner.property.throw_error_if_self_value(block,v_SINGLEQUOTE_,ref_QMARK___$1);

if(value_matches_QMARK_){
return null;
} else {
return logseq.outliner.property.raw_set_block_property_BANG_(conn__$1,block,property,v_SINGLEQUOTE_);
}

}
}
}));
});
/**
 * Updates property if property-id is given. Otherwise creates a property
 *  with the given property-id or :property-name option. When a property is created
 *  it is ensured to have a unique :db/ident
 */
logseq.outliner.property.upsert_property_BANG_ = (function logseq$outliner$property$upsert_property_BANG_(conn,property_id,schema,p__60746){
var map__60747 = p__60746;
var map__60747__$1 = cljs.core.__destructure_map(map__60747);
var opts = map__60747__$1;
var property_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60747__$1,new cljs.core.Keyword(null,"property-name","property-name",-1399851434));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60747__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var db = cljs.core.deref(conn);
var db_ident = (function (){var or__5142__auto__ = property_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
try{return logseq.db.frontend.property.create_user_property_ident_from_name.cljs$core$IFn$_invoke$arity$1(property_name);
}catch (e60748){var e = e60748;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Property failed to create. Please try a different property name.",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("property","create-error","property/create-error",2017411406),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
}}
})();
if(cljs.core.qualified_keyword_QMARK_(db_ident)){
} else {
throw (new Error("Assert failed: (qualified-keyword? db-ident)"));
}

if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),null], null), null),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(schema))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(schema))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(":checkbox property doesn't allow multiple values",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null));
} else {
}

var temp__5823__auto__ = (function (){var and__5140__auto__ = cljs.core.qualified_keyword_QMARK_(property_id);
if(and__5140__auto__){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,db_ident) : datascript.core.entity.call(null,db,db_ident));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var property = temp__5823__auto__;
return logseq.outliner.property.update_property(conn,db_ident,property,schema,opts);
} else {
var k_name = (function (){var or__5142__auto__ = (function (){var and__5140__auto__ = property_name;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.name(property_name);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.name(property_id);
}
})();
var db_ident_SINGLEQUOTE_ = logseq.db.frontend.db_ident.ensure_unique_db_ident(cljs.core.deref(conn),db_ident);
if((!((k_name == null)))){
} else {
throw (new Error((""+"Assert failed: "+"\n"+"(some? k-name)")));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"e2ee?","e2ee?",1272351286).cljs$core$IFn$_invoke$arity$1(opts))){
} else {
logseq.outliner.validate.validate_page_title(k_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),db_ident_SINGLEQUOTE_], null)], null));

logseq.outliner.validate.validate_page_title_characters(k_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),db_ident_SINGLEQUOTE_], null)], null));

logseq.outliner.validate.validate_property_title.cljs$core$IFn$_invoke$arity$2(k_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),db_ident_SINGLEQUOTE_], null)], null));
}

var db_id_60912 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(properties);
var page_60913 = ((cljs.core.integer_QMARK_(db_id_60912))?(datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,db_id_60912) : datascript.core.entity.call(null,db,db_id_60912)):null);
var __60914 = logseq.outliner.validate.validate_page_to_property_conversion(page_60913);
var opts_SINGLEQUOTE__60915 = (function (){var G__60749 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),k_name,new cljs.core.Keyword(null,"properties","properties",685819552),properties], null);
if(cljs.core.integer_QMARK_(db_id_60912)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60749,new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_60913));
} else {
return G__60749;
}
})();
var tx_data_60916 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60750 = logseq.db.sqlite.util.build_new_property.cljs$core$IFn$_invoke$arity$3(db_ident_SINGLEQUOTE_,schema,opts_SINGLEQUOTE__60915);
if(cljs.core.truth_(new cljs.core.Keyword(null,"e2ee?","e2ee?",1272351286).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60750,new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword(null,"encrypted-name","encrypted-name",1444156139).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return G__60750;
}
})()], null),(cljs.core.truth_(db_id_60912)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),db_id_60912,new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329)], null)], null):null));
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data_60916,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"upsert-property","upsert-property",1682220994)], null));

var G__60751 = cljs.core.deref(conn);
var G__60752 = db_ident_SINGLEQUOTE_;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60751,G__60752) : datascript.core.entity.call(null,G__60751,G__60752));
}
});
/**
 * Resolves a :node property value to the id of the node it targets. Such
 * values can be hidden property value blocks whose :block/title is the
 * target's uuid. Only resolves value blocks created by property-ident
 * itself — a value block created for another property carries its own
 * content even when stored under this property.
 */
logseq.outliner.property.node_value_target_id = (function logseq$outliner$property$node_value_target_id(db,value,property_ident){
var entity = ((datascript.impl.entity.entity_QMARK_(value))?value:(datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,value) : datascript.core.entity.call(null,db,value)));
var temp__5823__auto__ = (function (){var and__5140__auto__ = entity;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_ident,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(entity)));
if(and__5140__auto____$1){
var G__60753 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(entity);
if((G__60753 == null)){
return null;
} else {
return cljs.core.parse_uuid(G__60753);
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var target_uuid = temp__5823__auto__;
var or__5142__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__60754 = db;
var G__60755 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),target_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60754,G__60755) : datascript.core.entity.call(null,G__60754,G__60755));
})());
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
}
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
}
});
/**
 * batch delete value when a property has multiple values
 */
logseq.outliner.property.batch_delete_property_value_BANG_ = (function logseq$outliner$property$batch_delete_property_value_BANG_(conn,block_eids,property_id,property_value){
var block_eids__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(logseq.outliner.property.__GT_eid,block_eids);
return logseq.db.batch_transact_with_temp_conn_BANG_(conn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"batch-delete-property-value","batch-delete-property-value",-1068225046)], null),(function (conn__$1){
var temp__5825__auto__ = (function (){var G__60757 = cljs.core.deref(conn__$1);
var G__60758 = property_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60757,G__60758) : datascript.core.entity.call(null,G__60757,G__60758));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var property = temp__5825__auto__;
if(((logseq.db.frontend.property.many_QMARK_(property)) && (cljs.core.not(cljs.core.some((function (p1__60756_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1((function (){var G__60759 = cljs.core.deref(conn__$1);
var G__60760 = p1__60756_SHARP_;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60759,G__60760) : datascript.core.entity.call(null,G__60759,G__60760));
})()));
}),block_eids__$1))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("block","tags","block/tags",1814948340))){
logseq.outliner.validate.validate_tags_property_deletion(cljs.core.deref(conn__$1),block_eids__$1,property_value);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_id,new cljs.core.Keyword("block","tags","block/tags",1814948340))){
var tx_data = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),id,property_id,property_value], null);
}),block_eids__$1);
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn__$1,tx_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
} else {
var seq__60761 = cljs.core.seq(block_eids__$1);
var chunk__60762 = null;
var count__60763 = (0);
var i__60764 = (0);
while(true){
if((i__60764 < count__60763)){
var block_eid = chunk__60762.cljs$core$IIndexed$_nth$arity$2(null,i__60764);
var temp__5825__auto___60951__$1 = (function (){var G__60769 = cljs.core.deref(conn__$1);
var G__60770 = block_eid;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60769,G__60770) : datascript.core.entity.call(null,G__60769,G__60770));
})();
if(cljs.core.truth_(temp__5825__auto___60951__$1)){
var block_60954 = temp__5825__auto___60951__$1;
var current_val_60956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block_60954,property_id);
var node_QMARK__60957 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property));
var match_id_60958 = cljs.core.some(((function (seq__60761,chunk__60762,count__60763,i__60764,current_val_60956,node_QMARK__60957,block_60954,temp__5825__auto___60951__$1,block_eid,property,temp__5825__auto__,block_eids__$1){
return (function (v){
var v_id = ((datascript.impl.entity.entity_QMARK_(v))?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v):v);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_value,v)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_value,v_id)) || (((node_QMARK__60957) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_value,logseq.outliner.property.node_value_target_id(cljs.core.deref(conn__$1),v,property_id))))))))){
return v_id;
} else {
return null;
}
});})(seq__60761,chunk__60762,count__60763,i__60764,current_val_60956,node_QMARK__60957,block_60954,temp__5825__auto___60951__$1,block_eid,property,temp__5825__auto__,block_eids__$1))
,((cljs.core.coll_QMARK_(current_val_60956))?current_val_60956:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_val_60956], null)));
if(cljs.core.truth_((function (){var and__5140__auto__ = match_id_60958;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(current_val_60956));
} else {
return and__5140__auto__;
}
})())){
logseq.outliner.property.remove_block_property_BANG_(conn__$1,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_60954),property_id);
} else {
if(cljs.core.truth_(match_id_60958)){
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_60954),property_id,match_id_60958], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
} else {
}
}
} else {
}


var G__60964 = seq__60761;
var G__60965 = chunk__60762;
var G__60966 = count__60763;
var G__60967 = (i__60764 + (1));
seq__60761 = G__60964;
chunk__60762 = G__60965;
count__60763 = G__60966;
i__60764 = G__60967;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__60761);
if(temp__5825__auto____$1){
var seq__60761__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__60761__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__60761__$1);
var G__60969 = cljs.core.chunk_rest(seq__60761__$1);
var G__60970 = c__5673__auto__;
var G__60971 = cljs.core.count(c__5673__auto__);
var G__60972 = (0);
seq__60761 = G__60969;
chunk__60762 = G__60970;
count__60763 = G__60971;
i__60764 = G__60972;
continue;
} else {
var block_eid = cljs.core.first(seq__60761__$1);
var temp__5825__auto___60973__$2 = (function (){var G__60771 = cljs.core.deref(conn__$1);
var G__60772 = block_eid;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60771,G__60772) : datascript.core.entity.call(null,G__60771,G__60772));
})();
if(cljs.core.truth_(temp__5825__auto___60973__$2)){
var block_60977 = temp__5825__auto___60973__$2;
var current_val_60978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block_60977,property_id);
var node_QMARK__60979 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property));
var match_id_60980 = cljs.core.some(((function (seq__60761,chunk__60762,count__60763,i__60764,current_val_60978,node_QMARK__60979,block_60977,temp__5825__auto___60973__$2,block_eid,seq__60761__$1,temp__5825__auto____$1,property,temp__5825__auto__,block_eids__$1){
return (function (v){
var v_id = ((datascript.impl.entity.entity_QMARK_(v))?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v):v);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_value,v)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_value,v_id)) || (((node_QMARK__60979) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_value,logseq.outliner.property.node_value_target_id(cljs.core.deref(conn__$1),v,property_id))))))))){
return v_id;
} else {
return null;
}
});})(seq__60761,chunk__60762,count__60763,i__60764,current_val_60978,node_QMARK__60979,block_60977,temp__5825__auto___60973__$2,block_eid,seq__60761__$1,temp__5825__auto____$1,property,temp__5825__auto__,block_eids__$1))
,((cljs.core.coll_QMARK_(current_val_60978))?current_val_60978:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_val_60978], null)));
if(cljs.core.truth_((function (){var and__5140__auto__ = match_id_60980;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(current_val_60978));
} else {
return and__5140__auto__;
}
})())){
logseq.outliner.property.remove_block_property_BANG_(conn__$1,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_60977),property_id);
} else {
if(cljs.core.truth_(match_id_60980)){
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_60977),property_id,match_id_60980], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null));
} else {
}
}
} else {
}


var G__60990 = cljs.core.next(seq__60761__$1);
var G__60991 = null;
var G__60992 = (0);
var G__60993 = (0);
seq__60761 = G__60990;
chunk__60762 = G__60991;
count__60763 = G__60992;
i__60764 = G__60993;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
} else {
return null;
}
}));
});
/**
 * Delete value if a property has multiple values
 */
logseq.outliner.property.delete_property_value_BANG_ = (function logseq$outliner$property$delete_property_value_BANG_(conn,block_eid,property_id,property_value){
return logseq.outliner.property.batch_delete_property_value_BANG_(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_eid], null),property_id,property_value);
});
logseq.outliner.property.get_classes_parents = (function logseq$outliner$property$get_classes_parents(tags){
return (logseq.db.get_classes_parents.cljs$core$IFn$_invoke$arity$1 ? logseq.db.get_classes_parents.cljs$core$IFn$_invoke$arity$1(tags) : logseq.db.get_classes_parents.call(null,tags));
});
logseq.outliner.property.get_class_properties = (function logseq$outliner$property$get_class_properties(class$){
var class_parents = logseq.outliner.property.get_classes_parents(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null));
return logseq.db.sort_by_order(logseq.common.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (class$__$1){
return new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050).cljs$core$IFn$_invoke$arity$1(class$__$1);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null),class_parents)], 0))));
});
logseq.outliner.property.get_block_classes = (function logseq$outliner$property$get_block_classes(db,eid){
var block = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
var classes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.db.class_QMARK_,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block)));
var class_parents = logseq.outliner.property.get_classes_parents(classes);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (class$){
return cljs.core.seq(new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050).cljs$core$IFn$_invoke$arity$1(class$));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(classes,class_parents));
});
logseq.outliner.property.get_block_classes_properties = (function logseq$outliner$property$get_block_classes_properties(db,eid){
var block = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
var classes = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block));
var class_parents = logseq.outliner.property.get_classes_parents(classes);
var all_classes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (class$){
return cljs.core.seq(new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050).cljs$core$IFn$_invoke$arity$1(class$));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(classes,class_parents));
var all_properties = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (class$){
return new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050).cljs$core$IFn$_invoke$arity$1(class$);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_classes], 0)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes,new cljs.core.Keyword(null,"all-classes","all-classes",-2040626813),all_classes,new cljs.core.Keyword(null,"classes-properties","classes-properties",1920679577),all_properties], null);
});
/**
 * Get block's full properties including its own and classes' properties
 */
logseq.outliner.property.get_block_full_properties = (function logseq$outliner$property$get_block_full_properties(db,eid){
var block = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
return logseq.common.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ident){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,ident) : datascript.core.entity.call(null,db,ident));
}),cljs.core.keys(logseq.db.common.entity_plus.lookup_kv_then_entity.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("block","properties","block/properties",708347145)))),new cljs.core.Keyword(null,"classes-properties","classes-properties",1920679577).cljs$core$IFn$_invoke$arity$1(logseq.outliner.property.get_block_classes_properties(db,eid))));
});
logseq.outliner.property.schema_or_tag_related_property_QMARK_ = (function logseq$outliner$property$schema_or_tag_related_property_QMARK_(property_id){
var property_ns = (function (){var G__60773 = property_id;
if((G__60773 == null)){
return null;
} else {
return cljs.core.namespace(G__60773);
}
})();
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","tags","block/tags",1814948340),property_id)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("logseq.property.class",property_ns)) || (cljs.core.contains_QMARK_(logseq.db.frontend.property.schema_properties,property_id)))));
});
logseq.outliner.property.tag_class_page_QMARK_ = (function logseq$outliner$property$tag_class_page_QMARK_(db,block){
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(block));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = db;
if(cljs.core.truth_(and__5140__auto__)){
var G__60774 = logseq.db.common.entity_plus.entity_memoized(db,new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083));
var G__60775 = block;
return (logseq.db.class_instance_QMARK_.cljs$core$IFn$_invoke$arity$2 ? logseq.db.class_instance_QMARK_.cljs$core$IFn$_invoke$arity$2(G__60774,G__60775) : logseq.db.class_instance_QMARK_.call(null,G__60774,G__60775));
} else {
return and__5140__auto__;
}
}
});
logseq.outliner.property.bottom_position_property_QMARK_ = (function logseq$outliner$property$bottom_position_property_QMARK_(_db,_block,property){
var property_id = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property);
var property_type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
var node_many_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node","node",581201198),property_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(property))));
var default_bottom_QMARK_ = (((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"asset","asset",-280274466),null], null), null),property_type)))) && (((((node_many_QMARK_) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),property_type)) || (cljs.core.seq(new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952).cljs$core$IFn$_invoke$arity$1(property))))))) && ((!(logseq.outliner.property.schema_or_tag_related_property_QMARK_(property_id)))))));
return default_bottom_QMARK_;
});
logseq.outliner.property.resolved_property_position = (function logseq$outliner$property$resolved_property_position(db,block,property){
var ui_position = new cljs.core.Keyword("logseq.property","ui-position","logseq.property/ui-position",1869200864).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"properties","properties",685819552),null,new cljs.core.Keyword(null,"block-below","block-below",1808846787),null,new cljs.core.Keyword(null,"block-left","block-left",-1266158554),null,new cljs.core.Keyword(null,"block-right","block-right",-1578897705),null], null), null),ui_position)){
return ui_position;
} else {
if(logseq.outliner.property.bottom_position_property_QMARK_(db,block,property)){
return new cljs.core.Keyword(null,"block-below","block-below",1808846787);
} else {
return new cljs.core.Keyword(null,"properties","properties",685819552);

}
}
});
logseq.outliner.property.property_with_position_QMARK_ = (function logseq$outliner$property$property_with_position_QMARK_(db,property_id,block,position,p__60776){
var map__60777 = p__60776;
var map__60777__$1 = cljs.core.__destructure_map(map__60777);
var allow_empty_block_below_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60777__$1,new cljs.core.Keyword(null,"allow-empty-block-below?","allow-empty-block-below?",791194762));
var temp__5825__auto__ = logseq.db.common.entity_plus.entity_memoized(db,property_id);
if(cljs.core.truth_(temp__5825__auto__)){
var property = temp__5825__auto__;
var property_position_SINGLEQUOTE_ = logseq.outliner.property.resolved_property_position(db,block,property);
return (((!(new cljs.core.Keyword("logseq.property","public?","logseq.property/public?",1843085149).cljs$core$IFn$_invoke$arity$1(property) === false))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_position_SINGLEQUOTE_,position)) && (((cljs.core.not((function (){var and__5140__auto____$2 = new cljs.core.Keyword("logseq.property","hide-empty-value","logseq.property/hide-empty-value",2062325899).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.truth_(and__5140__auto____$2)){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,property_id) == null);
} else {
return and__5140__auto____$2;
}
})())) && (((cljs.core.not(new cljs.core.Keyword("logseq.property","hide?","logseq.property/hide?",68365746).cljs$core$IFn$_invoke$arity$1(property))) && ((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property_position_SINGLEQUOTE_,new cljs.core.Keyword(null,"block-below","block-below",1808846787))) && ((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,property_id) == null)) && (((cljs.core.not(allow_empty_block_below_QMARK_)) && (cljs.core.not(logseq.outliner.property.tag_class_page_QMARK_(db,block))))))))))))))))));
} else {
return null;
}
});
logseq.outliner.property.property_with_other_position_QMARK_ = (function logseq$outliner$property$property_with_other_position_QMARK_(db,block,property){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"properties","properties",685819552),logseq.outliner.property.resolved_property_position(db,block,property));
});
logseq.outliner.property.get_block_positioned_properties = (function logseq$outliner$property$get_block_positioned_properties(db,eid,position){
var block = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
var own_properties = new cljs.core.Keyword("block.temp","property-keys","block.temp/property-keys",2093695024).cljs$core$IFn$_invoke$arity$1(block);
var classes_properties = (cljs.core.truth_(logseq.outliner.property.tag_class_page_QMARK_(db,block))?null:new cljs.core.Keyword(null,"classes-properties","classes-properties",1920679577).cljs$core$IFn$_invoke$arity$1(logseq.outliner.property.get_block_classes_properties(db,eid)));
var classes_properties_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),classes_properties));
var positioned_property_ids = (cljs.core.truth_(logseq.outliner.property.tag_class_page_QMARK_(db,block))?cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(own_properties):cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(own_properties,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096),classes_properties))));
return logseq.db.sort_by_order(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60778_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__60778_SHARP_) : datascript.core.entity.call(null,db,p1__60778_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (id){
return logseq.outliner.property.property_with_position_QMARK_(db,id,block,position,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-empty-block-below?","allow-empty-block-below?",791194762),cljs.core.contains_QMARK_(classes_properties_set,id)], null));
}),positioned_property_ids)));
});
logseq.outliner.property.build_closed_value_tx = (function logseq$outliner$property$build_closed_value_tx(db,property,resolved_value,p__60779){
var map__60780 = p__60779;
var map__60780__$1 = cljs.core.__destructure_map(map__60780);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60780__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60780__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var scoped_class_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60780__$1,new cljs.core.Keyword(null,"scoped-class-id","scoped-class-id",-1447241281));
var block = (cljs.core.truth_(id)?(function (){var G__60781 = db;
var G__60782 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60781,G__60782) : datascript.core.entity.call(null,G__60781,G__60782));
})():null);
var block_id = (function (){var or__5142__auto__ = id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.new_block_id();
}
})();
var icon__$1 = ((((typeof icon === 'string') && (clojure.string.blank_QMARK_(icon))))?null:icon);
var tx_data = (cljs.core.truth_(block)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60783 = logseq.outliner.core.block_with_updated_at(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id,new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property)], null),(cljs.core.truth_(logseq.db.frontend.property.type.property_value_content_QMARK_(new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(block),property))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","value","logseq.property/value",1396524865),resolved_value], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","title","block/title",710445684),resolved_value], null))], 0)));
if(cljs.core.truth_(icon__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60783,new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285),icon__$1);
} else {
return G__60783;
}
})()], null):(function (){var max_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(cljs.core.last(logseq.db.common.entity_plus.lookup_kv_then_entity.cljs$core$IFn$_invoke$arity$2(property,new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952))));
var new_block = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logseq.db.frontend.property.build.build_closed_value_block(block_id,null,resolved_value,property,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon__$1], null)),new cljs.core.Keyword("block","order","block/order",-1429282437),logseq.db.common.order.gen_key(max_order,null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_block,logseq.outliner.core.block_with_updated_at(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property)], null))], null);
})());
var tx_data_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5140__auto__)){
return (icon__$1 == null);
} else {
return and__5140__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tx_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property","icon","logseq.property/icon",589123285)], null)):tx_data);
var G__60784 = cljs.core.vec(tx_data_SINGLEQUOTE_);
if(cljs.core.truth_(scoped_class_id)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60784,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null),new cljs.core.Keyword("logseq.property","choice-classes","logseq.property/choice-classes",-762966219),scoped_class_id], null));
} else {
return G__60784;
}
});
/**
 * id should be a block UUID or nil
 */
logseq.outliner.property.upsert_closed_value_BANG_ = (function logseq$outliner$property$upsert_closed_value_BANG_(conn,property_id,p__60786){
var map__60787 = p__60786;
var map__60787__$1 = cljs.core.__destructure_map(map__60787);
var opts = map__60787__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"value","value",305978217));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var _scoped_class_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60787__$1,new cljs.core.Keyword(null,"_scoped-class-id","_scoped-class-id",-1163623917));
if((((id == null)) || (cljs.core.uuid_QMARK_(id)))){
} else {
throw (new Error("Assert failed: (or (nil? id) (uuid? id))"));
}

var db = cljs.core.deref(conn);
var property = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,property_id) : datascript.core.entity.call(null,db,property_id));
var property_type = new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property);
if(cljs.core.contains_QMARK_(logseq.db.frontend.property.type.closed_value_property_types,property_type)){
var value_SINGLEQUOTE_ = ((typeof value === 'string')?clojure.string.trim(value):value);
var resolved_value = logseq.outliner.property.convert_property_input_string(null,property,value_SINGLEQUOTE_);
var validate_message = logseq.outliner.property.validate_property_value_aux(logseq.outliner.property.get_property_value_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(conn),property_type,property,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-closed-value?","new-closed-value?",773408852),true], null)], 0)),resolved_value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"many?","many?",-605360673),logseq.db.frontend.property.many_QMARK_(property)], null));
if(cljs.core.truth_(cljs.core.some((function (b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolved_value)),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = logseq.db.frontend.property.closed_value_content(b);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b);
}
})())))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b))));
}),logseq.db.common.entity_plus.lookup_kv_then_entity.cljs$core$IFn$_invoke$arity$2(property,new cljs.core.Keyword("property","closed-values","property/closed-values",1261280952))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Closed value choice already exists",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"value-exists","value-exists",935571771),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Choice already exists.",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("property.choice","already-exists","property.choice/already-exists",1458545863),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null)], null));
} else {
if(cljs.core.truth_(validate_message)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid property value",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"value-invalid","value-invalid",-1327576860),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),(""+"Invalid choice \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_SINGLEQUOTE_)+"\" for this property: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(validate_message)+"."),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("property.choice","invalid","property.choice/invalid",1942079406),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_SINGLEQUOTE_,validate_message], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null)], null));
} else {
if((resolved_value == null)){
return null;
} else {
var tx_data = logseq.outliner.property.build_closed_value_tx(cljs.core.deref(conn),property,resolved_value,opts);
return logseq.db.batch_transact_with_temp_conn_BANG_(conn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"upsert-closed-value","upsert-closed-value",-392689675)], null),(function (conn__$1){
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn__$1,tx_data);

if(cljs.core.seq(description)){
var temp__5823__auto__ = (function (){var and__5140__auto__ = id;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("logseq.property","description","logseq.property/description",-336236200).cljs$core$IFn$_invoke$arity$1((function (){var G__60793 = db;
var G__60794 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60793,G__60794) : datascript.core.entity.call(null,G__60793,G__60794));
})());
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var desc_ent = temp__5823__auto__;
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.core.block_with_updated_at(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(desc_ent),new cljs.core.Keyword("block","title","block/title",710445684),description], null))], null));
} else {
return logseq.outliner.property.set_block_property_BANG_(conn__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(function (){var or__5142__auto__ = id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(tx_data));
}
})()], null),new cljs.core.Keyword("logseq.property","description","logseq.property/description",-336236200),description);
}
} else {
return null;
}
}));

}
}
}
} else {
return null;
}
});
/**
 * Adds existing values as closed values and returns their new block uuids
 */
logseq.outliner.property.add_existing_values_to_closed_values_BANG_ = (function logseq$outliner$property$add_existing_values_to_closed_values_BANG_(conn,property_id,values){
var temp__5825__auto__ = (function (){var G__60796 = cljs.core.deref(conn);
var G__60797 = property_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60796,G__60797) : datascript.core.entity.call(null,G__60796,G__60797));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var property = temp__5825__auto__;
if(cljs.core.seq(values)){
var values_SINGLEQUOTE_ = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,values);
if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,values_SINGLEQUOTE_)){
} else {
throw (new Error((""+"Assert failed: "+"existing values should all be UUIDs"+"\n"+"(every? uuid? values')")));
}

var values__$1 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__60795_SHARP_){
var G__60798 = cljs.core.deref(conn);
var G__60799 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),p1__60795_SHARP_], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60798,G__60799) : datascript.core.entity.call(null,G__60798,G__60799));
}),values_SINGLEQUOTE_);
if(cljs.core.seq(values__$1)){
var property_db_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property);
var value_property_tx = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813),property_db_id,new cljs.core.Keyword("block","parent","block/parent",-918309064),property_db_id,new cljs.core.Keyword("block","page","block/page",822314108),property_db_id], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),values__$1));
var property_tx = logseq.outliner.core.block_with_updated_at(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),property_db_id], null));
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cons(property_tx,value_property_tx),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"add-existing-values-to-closed-values","add-existing-values-to-closed-values",-712668508)], null));
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
/**
 * Returns true when deleted or if not deleted displays warning and returns false
 */
logseq.outliner.property.delete_closed_value_BANG_ = (function logseq$outliner$property$delete_closed_value_BANG_(conn,property_id,value_block_id){
if((((property_id == null)) || ((value_block_id == null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("empty property-id or value-block-id when delete-closed-value!",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id,new cljs.core.Keyword(null,"value-block-id","value-block-id",144659051),value_block_id], null));
} else {
}

var property = (function (){var G__60800 = cljs.core.deref(conn);
var G__60801 = property_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60800,G__60801) : datascript.core.entity.call(null,G__60800,G__60801));
})();
if(cljs.core.truth_((logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1(property) : logseq.db.property_QMARK_.call(null,property)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid property",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id], null));
}

var temp__5825__auto__ = (function (){var G__60802 = cljs.core.deref(conn);
var G__60803 = value_block_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60802,G__60803) : datascript.core.entity.call(null,G__60802,G__60803));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var value_block = temp__5825__auto__;
if(cljs.core.truth_((logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(value_block) : logseq.db.built_in_QMARK_.call(null,value_block)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The choice can't be deleted",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"The choice can't be deleted because it's built-in.",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("property.choice","cant-delete-built-in","property.choice/cant-delete-built-in",-820186047),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null)], null));
} else {
var tx_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(logseq.outliner.core.delete_blocks(cljs.core.deref(conn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value_block], null),cljs.core.PersistentArrayMap.EMPTY)),logseq.outliner.core.block_with_updated_at(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(property)], null)));
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-closed-value","delete-closed-value",-133763456)], null));
}
} else {
return null;
}
});
logseq.outliner.property.class_add_property_BANG_ = (function logseq$outliner$property$class_add_property_BANG_(conn,class_id,property_id){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837),null], null), null),property_id)){
return null;
} else {
var temp__5825__auto__ = (function (){var G__60804 = cljs.core.deref(conn);
var G__60805 = class_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60804,G__60805) : datascript.core.entity.call(null,G__60804,G__60805));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var class$ = temp__5825__auto__;
if(cljs.core.truth_((logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(class$) : logseq.db.class_QMARK_.call(null,class$)))){
var temp__5825__auto____$1 = (function (){var G__60806 = cljs.core.deref(conn);
var G__60807 = property_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60806,G__60807) : datascript.core.entity.call(null,G__60806,G__60807));
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var property = temp__5825__auto____$1;
if(cljs.core.truth_((logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1(property) : logseq.db.property_QMARK_.call(null,property)))){
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$),new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050),property_id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"class-add-property","class-add-property",991910065)], null));
} else {
return null;
}
} else {
return null;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't add a property to a block that isn't a class",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-id","class-id",-251527949),class_id,new cljs.core.Keyword(null,"property-id","property-id",404996975),property_id], null));
}
} else {
return null;
}
}
});
logseq.outliner.property.class_remove_property_BANG_ = (function logseq$outliner$property$class_remove_property_BANG_(conn,class_id,property_id){
var temp__5825__auto__ = (function (){var G__60808 = cljs.core.deref(conn);
var G__60809 = class_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60808,G__60809) : datascript.core.entity.call(null,G__60808,G__60809));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var class$ = temp__5825__auto__;
if(cljs.core.truth_((logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(class$) : logseq.db.class_QMARK_.call(null,class$)))){
var temp__5825__auto____$1 = (function (){var G__60810 = cljs.core.deref(conn);
var G__60811 = property_id;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60810,G__60811) : datascript.core.entity.call(null,G__60810,G__60811));
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var property = temp__5825__auto____$1;
if(cljs.core.truth_((logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1(property) : logseq.db.property_QMARK_.call(null,property)))){
if(cljs.core.truth_((logseq.db.built_in_class_property_QMARK_.cljs$core$IFn$_invoke$arity$2 ? logseq.db.built_in_class_property_QMARK_.cljs$core$IFn$_invoke$arity$2(class$,property) : logseq.db.built_in_class_property_QMARK_.call(null,class$,property)))){
return null;
} else {
return logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$),new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050),property_id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"class-remove-property","class-remove-property",457070573)], null));
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
} else {
return null;
}
});

//# sourceMappingURL=logseq.outliner.property.js.map
