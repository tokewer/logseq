goog.provide('logseq.db.common.initial_data');
/**
 * Return the oldest page's db id for :block/name
 */
logseq.db.common.initial_data.get_first_page_by_name = (function logseq$db$common$initial_data$get_first_page_by_name(db,page_name){
if(cljs.core.truth_((function (){var and__5140__auto__ = db;
if(cljs.core.truth_(and__5140__auto__)){
return typeof page_name === 'string';
} else {
return and__5140__auto__;
}
})())){
return cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),logseq.db.frontend.entity_util.get_pages_by_name(db,page_name))));
} else {
return null;
}
});
/**
 * Return the oldest page's db id for :block/title
 */
logseq.db.common.initial_data.get_first_page_by_title = (function logseq$db$common$initial_data$get_first_page_by_title(db,page_name){
if(typeof page_name === 'string'){
} else {
throw (new Error("Assert failed: (string? page-name)"));
}

return cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
var e = (function (){var G__42063 = db;
var G__42064 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__42063,G__42064) : datascript.core.entity.call(null,G__42063,G__42064));
})();
return logseq.db.frontend.entity_util.page_QMARK_(e);
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","title","block/title",710445684),page_name)))));
});
logseq.db.common.initial_data.get_block_alias = (function logseq$db$common$initial_data$get_block_alias(db,eid){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var G__42066 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"alias","alias",-399220103,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null))], null);
var G__42067 = db;
var G__42068 = eid;
var G__42069 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.rules.rules);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__42066,G__42067,G__42068,G__42069) : datascript.core.q.call(null,G__42066,G__42067,G__42068,G__42069));
})());
});
logseq.db.common.initial_data.datom_v = (function logseq$db$common$initial_data$datom_v(db,eid,attr){
var G__42073 = cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eid,attr));
if((G__42073 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__42073);
}
});
logseq.db.common.initial_data.datom_vs = (function logseq$db$common$initial_data$datom_vs(db,eid,attr){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eid,attr));
});
logseq.db.common.initial_data.get_block_alias_ids = (function logseq$db$common$initial_data$get_block_alias_ids(db,eid){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(logseq.db.common.initial_data.datom_vs(db,eid,new cljs.core.Keyword("block","alias","block/alias",-2112644699)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","alias","block/alias",-2112644699),eid))));
});
logseq.db.common.initial_data.hidden_eid_pred = (function logseq$db$common$initial_data$hidden_eid_pred(db){
var _STAR_cache = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var hidden_QMARK_ = (function logseq$db$common$initial_data$hidden_eid_pred_$_hidden_QMARK_(eid,seen){
if((eid == null)){
return false;
} else {
if(cljs.core.contains_QMARK_(cljs.core.deref(_STAR_cache),eid)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_cache),eid);
} else {
if(cljs.core.contains_QMARK_(seen,eid)){
return false;
} else {
var result = cljs.core.boolean$((function (){var or__5142__auto__ = logseq.db.common.initial_data.datom_v(db,eid,new cljs.core.Keyword("logseq.property","hide?","logseq.property/hide?",68365746));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = logseq.db.common.initial_data.datom_v(db,eid,new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return logseq$db$common$initial_data$hidden_eid_pred_$_hidden_QMARK_(logseq.db.common.initial_data.datom_v(db,eid,new cljs.core.Keyword("block","parent","block/parent",-918309064)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,eid));
}
}
})());
_STAR_cache.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_STAR_cache.cljs$core$IDeref$_deref$arity$1(null),eid,result));

return result;

}
}
}
});
return (function (eid){
return hidden_QMARK_(eid,cljs.core.PersistentHashSet.EMPTY);
});
});
logseq.db.common.initial_data.hidden_ref_id_pred = (function logseq$db$common$initial_data$hidden_ref_id_pred(var_args){
var G__42087 = arguments.length;
switch (G__42087) {
case 2:
return logseq.db.common.initial_data.hidden_ref_id_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.db.common.initial_data.hidden_ref_id_pred.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.db.common.initial_data.hidden_ref_id_pred.cljs$core$IFn$_invoke$arity$2 = (function (db,id){
return logseq.db.common.initial_data.hidden_ref_id_pred.cljs$core$IFn$_invoke$arity$3(db,id,logseq.db.common.initial_data.hidden_eid_pred(db));
}));

(logseq.db.common.initial_data.hidden_ref_id_pred.cljs$core$IFn$_invoke$arity$3 = (function (db,id,hidden_eid_QMARK_){
var entity = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
var entity_ident = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(entity);
var page_ids = cljs.core.set(cljs.core.cons(id,logseq.db.common.initial_data.get_block_alias_ids(db,id)));
var class_ids = (cljs.core.truth_(logseq.db.frontend.entity_util.class_QMARK_(entity))?(function (){var children = logseq.db.frontend.class$.get_structured_children(db,id);
return cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,id));
})():null);
return (function (ref_eid){
var or__5142__auto__ = cljs.core.contains_QMARK_(page_ids,ref_eid);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.contains_QMARK_(page_ids,logseq.db.common.initial_data.datom_v(db,ref_eid,new cljs.core.Keyword("block","page","block/page",822314108)));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,logseq.db.common.initial_data.datom_v(db,ref_eid,new cljs.core.Keyword("logseq.property","view-for","logseq.property/view-for",-36274319)));
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = (function (){var G__42088 = logseq.db.common.initial_data.datom_v(db,ref_eid,new cljs.core.Keyword("block","page","block/page",822314108));
return (hidden_eid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hidden_eid_QMARK_.cljs$core$IFn$_invoke$arity$1(G__42088) : hidden_eid_QMARK_.call(null,G__42088));
})();
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
var or__5142__auto____$4 = (hidden_eid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hidden_eid_QMARK_.cljs$core$IFn$_invoke$arity$1(ref_eid) : hidden_eid_QMARK_.call(null,ref_eid));
if(cljs.core.truth_(or__5142__auto____$4)){
return or__5142__auto____$4;
} else {
var or__5142__auto____$5 = (function (){var and__5140__auto__ = class_ids;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.some(class_ids,logseq.db.common.initial_data.datom_vs(db,ref_eid,new cljs.core.Keyword("block","tags","block/tags",1814948340)));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$5)){
return or__5142__auto____$5;
} else {
var and__5140__auto__ = entity_ident;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),ref_eid,entity_ident));
} else {
return and__5140__auto__;
}
}
}
}
}
}
}
});
}));

(logseq.db.common.initial_data.hidden_ref_id_pred.cljs$lang$maxFixedArity = 3);

logseq.db.common.initial_data.get_all_files = (function logseq$db$common$initial_data$get_all_files(db){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (e){
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(e));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("file","path","file/path",-191335748))], 0));
});
logseq.db.common.initial_data.with_block_refs = (function logseq$db$common$initial_data$with_block_refs(db,block){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (refs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref){
var G__42090 = db;
var G__42091 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__42092 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__42090,G__42091,G__42092) : datascript.core.pull.call(null,G__42090,G__42091,G__42092));
}),refs);
}));
});
logseq.db.common.initial_data.with_parent = (function logseq$db$common$initial_data$with_parent(db,block){
if(cljs.core.truth_(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block))){
var parent = (function (){var temp__5825__auto__ = (function (){var G__42096 = db;
var G__42097 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block));
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__42096,G__42097) : datascript.core.entity.call(null,G__42096,G__42097));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
return cljs.core.select_keys(e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null));
} else {
return null;
}
})();
return logseq.db.common.initial_data.with_block_refs(db,logseq.common.util.remove_nils_non_nested(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent)));
} else {
return block;

}
});
/**
 * Returns children ids, notice the result doesn't include property value children ids.
 */
logseq.db.common.initial_data.get_block_children_ids = (function logseq$db$common$initial_data$get_block_children_ids(var_args){
var args__5882__auto__ = [];
var len__5876__auto___42361 = arguments.length;
var i__5877__auto___42362 = (0);
while(true){
if((i__5877__auto___42362 < len__5876__auto___42361)){
args__5882__auto__.push((arguments[i__5877__auto___42362]));

var G__42363 = (i__5877__auto___42362 + (1));
i__5877__auto___42362 = G__42363;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.db.common.initial_data.get_block_children_ids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.db.common.initial_data.get_block_children_ids.cljs$core$IFn$_invoke$arity$variadic = (function (db,block_eid,p__42101){
var map__42102 = p__42101;
var map__42102__$1 = cljs.core.__destructure_map(map__42102);
var include_collapsed_children_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42102__$1,new cljs.core.Keyword(null,"include-collapsed-children?","include-collapsed-children?",2120012437),true);
var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,block_eid) : datascript.core.entity.call(null,db,block_eid)));
if(cljs.core.truth_(temp__5825__auto__)){
var eid = temp__5825__auto__;
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
var eids_to_expand_42364 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null);
while(true){
if(cljs.core.seq(eids_to_expand_42364)){
var children_42365 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (eids_to_expand_42364,seen,eid,temp__5825__auto__,map__42102,map__42102__$1,include_collapsed_children_QMARK_){
return (function (eid__$1){
var e = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid__$1) : datascript.core.entity.call(null,db,eid__$1));
if(cljs.core.truth_((function (){var or__5142__auto__ = include_collapsed_children_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.not(new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(e));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
return logseq.db.frontend.entity_util.page_QMARK_(e);
}
}
})())){
return new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(e);
} else {
return null;
}
});})(eids_to_expand_42364,seen,eid,temp__5825__auto__,map__42102,map__42102__$1,include_collapsed_children_QMARK_))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eids_to_expand_42364], 0));
var ids_to_add_42366 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),children_42365);
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.conj)(seen.cljs$core$IDeref$_deref$arity$1(null),ids_to_add_42366));

var G__42368 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),children_42365);
eids_to_expand_42364 = G__42368;
continue;
} else {
}
break;
}

return cljs.core.deref(seen);
} else {
return null;
}
}));

(logseq.db.common.initial_data.get_block_children_ids.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.db.common.initial_data.get_block_children_ids.cljs$lang$applyTo = (function (seq42098){
var G__42099 = cljs.core.first(seq42098);
var seq42098__$1 = cljs.core.next(seq42098);
var G__42100 = cljs.core.first(seq42098__$1);
var seq42098__$2 = cljs.core.next(seq42098__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42099,G__42100,seq42098__$2);
}));

/**
 * Including nested children, notice the result doesn't include property values.
 */
logseq.db.common.initial_data.get_block_children = (function logseq$db$common$initial_data$get_block_children(var_args){
var args__5882__auto__ = [];
var len__5876__auto___42369 = arguments.length;
var i__5877__auto___42370 = (0);
while(true){
if((i__5877__auto___42370 < len__5876__auto___42369)){
args__5882__auto__.push((arguments[i__5877__auto___42370]));

var G__42371 = (i__5877__auto___42370 + (1));
i__5877__auto___42370 = G__42371;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.db.common.initial_data.get_block_children.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.db.common.initial_data.get_block_children.cljs$core$IFn$_invoke$arity$variadic = (function (db,eid,p__42114){
var map__42115 = p__42114;
var map__42115__$1 = cljs.core.__destructure_map(map__42115);
var opts = map__42115__$1;
var ids = logseq.db.common.initial_data.get_block_children_ids.cljs$core$IFn$_invoke$arity$variadic(db,eid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
if(cljs.core.seq(ids)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
}),ids);
} else {
return null;
}
}));

(logseq.db.common.initial_data.get_block_children.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.db.common.initial_data.get_block_children.cljs$lang$applyTo = (function (seq42111){
var G__42112 = cljs.core.first(seq42111);
var seq42111__$1 = cljs.core.next(seq42111);
var G__42113 = cljs.core.first(seq42111__$1);
var seq42111__$2 = cljs.core.next(seq42111__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42112,G__42113,seq42111__$2);
}));

/**
 * Including nested, collapsed and property value children.
 */
logseq.db.common.initial_data.get_block_full_children_ids = (function logseq$db$common$initial_data$get_block_full_children_ids(db,block_eid){
var G__42119 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?c","?c",870679775,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?c","?c",870679775,null))], null);
var G__42120 = db;
var G__42121 = block_eid;
var G__42122 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.rules.rules);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__42119,G__42120,G__42121,G__42122) : datascript.core.q.call(null,G__42119,G__42120,G__42121,G__42122));
});
logseq.db.common.initial_data.with_raw_title = (function logseq$db$common$initial_data$with_raw_title(m,entity){
var temp__5823__auto__ = new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(temp__5823__auto__)){
var raw_title = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("block","title","block/title",710445684),raw_title);
} else {
return m;
}
});
logseq.db.common.initial_data.entity__GT_map = (function logseq$db$common$initial_data$entity__GT_map(var_args){
var args__5882__auto__ = [];
var len__5876__auto___42373 = arguments.length;
var i__5877__auto___42374 = (0);
while(true){
if((i__5877__auto___42374 < len__5876__auto___42373)){
args__5882__auto__.push((arguments[i__5877__auto___42374]));

var G__42375 = (i__5877__auto___42374 + (1));
i__5877__auto___42374 = G__42375;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return logseq.db.common.initial_data.entity__GT_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(logseq.db.common.initial_data.entity__GT_map.cljs$core$IFn$_invoke$arity$variadic = (function (entity,p__42131){
var map__42132 = p__42131;
var map__42132__$1 = cljs.core.__destructure_map(map__42132);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42132__$1,new cljs.core.Keyword(null,"level","level",1290497552),(0));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42132__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),(level + (1))], null);
var f = (((level > (0)))?cljs.core.identity:(function (e){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__42135){
var vec__42136 = p__42135;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42136,(1),null);
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.empty_QMARK_(properties);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return (properties.cljs$core$IFn$_invoke$arity$1 ? properties.cljs$core$IFn$_invoke$arity$1(k) : properties.call(null,k));
}
})())){
var v_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("block","parent","block/parent",-918309064)))?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("block","tags","block/tags",1814948340)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42125_SHARP_){
return cljs.core.select_keys(p1__42125_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
}),v):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("logseq.property","created-by-ref","logseq.property/created-by-ref",854433908)))?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v):((datascript.impl.entity.entity_QMARK_(v))?logseq.db.common.initial_data.entity__GT_map.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0)):((((cljs.core.coll_QMARK_(v)) && (cljs.core.every_QMARK_(datascript.impl.entity.entity_QMARK_,v))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42126_SHARP_){
return logseq.db.common.initial_data.entity__GT_map.cljs$core$IFn$_invoke$arity$variadic(p1__42126_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
}),v):v
)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v_SINGLEQUOTE_], null);
} else {
return null;
}
}),e);
}));
var m = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(entity) : f.call(null,entity)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(logseq.db.common.initial_data.with_raw_title(m,entity),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity));
}));

(logseq.db.common.initial_data.entity__GT_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(logseq.db.common.initial_data.entity__GT_map.cljs$lang$applyTo = (function (seq42128){
var G__42129 = cljs.core.first(seq42128);
var seq42128__$1 = cljs.core.next(seq42128);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42129,seq42128__$1);
}));

/**
 * Build a predicate that determines if a ref block should be hidden for `id`.
 * Reuses cached class/tag context so callers can check many refs efficiently.
 */
logseq.db.common.initial_data.hidden_ref_pred = (function logseq$db$common$initial_data$hidden_ref_pred(db,id){
var entity = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
var entity_ident = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(entity);
var page_ids = cljs.core.set(cljs.core.cons(id,logseq.db.common.initial_data.get_block_alias(db,id)));
var class_ids = (cljs.core.truth_(logseq.db.frontend.entity_util.class_QMARK_(entity))?(function (){var children = logseq.db.frontend.class$.get_structured_children(db,id);
return cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,id));
})():null);
return (function (ref_block){
var or__5142__auto__ = cljs.core.contains_QMARK_(page_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref_block));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.contains_QMARK_(page_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(ref_block)));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property","view-for","logseq.property/view-for",-36274319).cljs$core$IFn$_invoke$arity$1(ref_block)));
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = logseq.db.frontend.entity_util.hidden_QMARK_(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(ref_block));
if(or__5142__auto____$3){
return or__5142__auto____$3;
} else {
var or__5142__auto____$4 = logseq.db.frontend.entity_util.hidden_QMARK_(ref_block);
if(or__5142__auto____$4){
return or__5142__auto____$4;
} else {
var or__5142__auto____$5 = (function (){var and__5140__auto__ = class_ids;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.some(class_ids,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(ref_block)));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$5)){
return or__5142__auto____$5;
} else {
var and__5140__auto__ = entity_ident;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(ref_block,entity_ident) == null)));
} else {
return and__5140__auto__;
}
}
}
}
}
}
}
});
});
logseq.db.common.initial_data.get_block_refs = (function logseq$db$common$initial_data$get_block_refs(db,id){
var with_alias = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(id,logseq.db.common.initial_data.get_block_alias(db,id)));
var hidden_ref_QMARK__STAR_ = logseq.db.common.initial_data.hidden_ref_pred(db,id);
var G__42160 = with_alias;
var G__42160__$1 = (((G__42160 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42142_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__42142_SHARP_) : datascript.core.entity.call(null,db,p1__42142_SHARP_));
}),G__42160));
var G__42160__$2 = (((G__42160__$1 == null))?null:cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("block","_refs","block/_refs",830218531),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__42160__$1], 0)));
if((G__42160__$2 == null)){
return null;
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(hidden_ref_QMARK__STAR_,G__42160__$2);
}
});
/**
 * Exact inbound refs count. With `limit`, returns nil once the count would
 * exceed it, so callers can defer heavy pages to an on-demand count instead
 * of scanning the block's whole inbound ref set during rendering.
 */
logseq.db.common.initial_data.get_block_refs_count = (function logseq$db$common$initial_data$get_block_refs_count(var_args){
var G__42183 = arguments.length;
switch (G__42183) {
case 2:
return logseq.db.common.initial_data.get_block_refs_count.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.db.common.initial_data.get_block_refs_count.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.db.common.initial_data.get_block_refs_count.cljs$core$IFn$_invoke$arity$2 = (function (db,id){
return logseq.db.common.initial_data.get_block_refs_count.cljs$core$IFn$_invoke$arity$3(db,id,null);
}));

(logseq.db.common.initial_data.get_block_refs_count.cljs$core$IFn$_invoke$arity$3 = (function (db,id,limit){
var with_alias = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(id,logseq.db.common.initial_data.get_block_alias_ids(db,id)));
var hidden_ref_QMARK__STAR_ = logseq.db.common.initial_data.hidden_ref_id_pred.cljs$core$IFn$_invoke$arity$2(db,id);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (total,alias_id){
var n = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,datom){
if(cljs.core.truth_((function (){var and__5140__auto__ = limit;
if(cljs.core.truth_(and__5140__auto__)){
return (n > limit);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.reduced(n);
} else {
if(cljs.core.truth_((function (){var G__42216 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom);
return (hidden_ref_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hidden_ref_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(G__42216) : hidden_ref_QMARK__STAR_.call(null,G__42216));
})())){
return n;
} else {
return (n + (1));
}
}
}),total,datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","refs","block/refs",-1214495349),alias_id));
if(cljs.core.truth_((function (){var and__5140__auto__ = limit;
if(cljs.core.truth_(and__5140__auto__)){
return (n > limit);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.reduced(null);
} else {
return n;
}
}),(0),with_alias);
}));

(logseq.db.common.initial_data.get_block_refs_count.cljs$lang$maxFixedArity = 3);

logseq.db.common.initial_data.get_block_and_children = (function logseq$db$common$initial_data$get_block_and_children(db,id_or_page_name,p__42245){
var map__42246 = p__42245;
var map__42246__$1 = cljs.core.__destructure_map(map__42246);
var children_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42246__$1,new cljs.core.Keyword(null,"children?","children?",-1199594108));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42246__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var include_collapsed_children_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42246__$1,new cljs.core.Keyword(null,"include-collapsed-children?","include-collapsed-children?",2120012437),false);
var block = (function (){var eid = ((cljs.core.uuid_QMARK_(id_or_page_name))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id_or_page_name], null):((cljs.core.integer_QMARK_(id_or_page_name))?id_or_page_name:null
));
if(cljs.core.truth_(eid)){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
} else {
if(typeof id_or_page_name === 'string'){
var G__42248 = db;
var G__42249 = logseq.db.common.initial_data.get_first_page_by_name(db,cljs.core.name(id_or_page_name));
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__42248,G__42249) : datascript.core.entity.call(null,G__42248,G__42249));
} else {
return null;

}
}
})();
var block_refs_count_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499),null], null), null),properties);
if(cljs.core.truth_(block)){
var children = (cljs.core.truth_(children_QMARK_)?(function (){var children_blocks = logseq.db.common.initial_data.get_block_children.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-collapsed-children?","include-collapsed-children?",2120012437),include_collapsed_children_QMARK_], null)], 0));
var large_page_QMARK_ = (cljs.core.count(children_blocks) >= (100));
var children = (function (){var children_SINGLEQUOTE_ = ((large_page_QMARK_)?new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block):children_blocks);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (e){
return new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813).cljs$core$IFn$_invoke$arity$1(e);
}),children_SINGLEQUOTE_);
})();
var children_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),children));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block__$1){
var collapsed_QMARK_ = new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(block__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(logseq.db.common.initial_data.entity__GT_map(block__$1),new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725),(!((new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block__$1) == null))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","load-status","block.temp/load-status",-1066723049),((((cljs.core.not(collapsed_QMARK_)) && (((((large_page_QMARK_) && (cljs.core.every_QMARK_(children_ids,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block__$1)))))) || ((!(large_page_QMARK_)))))))?new cljs.core.Keyword(null,"full","full",436801220):new cljs.core.Keyword(null,"self","self",-1547428899))], 0));
}),children);
})():null);
var block_SINGLEQUOTE_ = (function (){var G__42254 = logseq.db.common.initial_data.entity__GT_map.cljs$core$IFn$_invoke$arity$variadic(block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.set(properties)], null)], 0));
var G__42254__$1 = (cljs.core.truth_(block_refs_count_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42254,new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499),logseq.db.common.initial_data.get_block_refs_count.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))):G__42254);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__42254__$1,new cljs.core.Keyword("block.temp","load-status","block.temp/load-status",-1066723049),(cljs.core.truth_((function (){var and__5140__auto__ = children_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = include_collapsed_children_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.empty_QMARK_(properties);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?new cljs.core.Keyword(null,"full","full",436801220):(cljs.core.truth_((function (){var and__5140__auto__ = children_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.empty_QMARK_(properties);
} else {
return and__5140__auto__;
}
})())?new cljs.core.Keyword(null,"children","children",-940561982):new cljs.core.Keyword(null,"self","self",-1547428899)
)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725),(!((cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))) == null)))], 0));

})();
var G__42267 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),block_SINGLEQUOTE_], null);
if(cljs.core.truth_(children_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42267,new cljs.core.Keyword(null,"children","children",-940561982),children);
} else {
return G__42267;
}
} else {
return null;
}
});
/**
 * Returns journal entities ordered by journal-day descending, lazily.
 * Callers can `(take n)` to bound the work to the requested page size.
 */
logseq.db.common.initial_data.get_latest_journals = (function logseq$db$common$initial_data$get_latest_journals(db){
var today = logseq.common.util.date_time.date__GT_int((new Date()));
return logseq.common.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (d){
if((new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(d) <= today)){
var e = (function (){var G__42271 = db;
var G__42272 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__42271,G__42272) : datascript.core.entity.call(null,G__42271,G__42272));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.db.frontend.entity_util.journal_QMARK_(e);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(and__5140__auto____$1)){
return (!(logseq.db.frontend.entity_util.recycled_QMARK_(e)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return e;
} else {
return null;
}
} else {
return null;
}
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__42268_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(p1__42268_SHARP_));
}),datascript.core.rseek_datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366),today))));
});
logseq.db.common.initial_data.get_structured_datoms = (function logseq$db$common$initial_data$get_structured_datoms(db){
var class_property_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048)) : datascript.core.entity.call(null,db,new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048))));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (d){
var block_datoms = datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d));
var property_description_datoms = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(d),class_property_id))?(function (){var temp__5825__auto__ = new cljs.core.Keyword("logseq.property","description","logseq.property/description",-336236200).cljs$core$IFn$_invoke$arity$1((function (){var G__42286 = db;
var G__42287 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__42286,G__42287) : datascript.core.entity.call(null,G__42286,G__42287));
})());
if(cljs.core.truth_(temp__5825__auto__)){
var desc = temp__5825__auto__;
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(desc));
} else {
return null;
}
})():null);
if(cljs.core.seq(property_description_datoms)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(block_datoms,property_description_datoms);
} else {
return block_datoms;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083)),datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Property","logseq.class/Property",1038767048)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813))], 0))], 0));
});
/**
 * Favorites page and its blocks
 */
logseq.db.common.initial_data.get_favorites = (function logseq$db$common$initial_data$get_favorites(db){
var page_id = logseq.db.common.initial_data.get_first_page_by_name(db,logseq.common.config.favorites_page_name);
var block = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,page_id) : datascript.core.entity.call(null,db,page_id));
var children = new cljs.core.Keyword("block","_page","block/_page",1150043350).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(block)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (l){
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(l));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","link","block/link",-1872399993),children)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (child){
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0))], 0));
} else {
return null;
}
});
logseq.db.common.initial_data.get_recent_updated_pages = (function logseq$db$common$initial_data$get_recent_updated_pages(db){
if(cljs.core.truth_(db)){
var G__42305 = datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551));
var G__42305__$1 = (((G__42305 == null))?null:cljs.core.rseq(G__42305));
var G__42305__$2 = (((G__42305__$1 == null))?null:cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (datom){
var page = cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword("block","page","block/page",822314108)));
if(cljs.core.truth_((function (){var or__5142__auto__ = page;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var title = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword("block","title","block/title",710445684))));
return clojure.string.blank_QMARK_(title);
}
})())){
return null;
} else {
var e = (function (){var G__42311 = db;
var G__42312 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__42311,G__42312) : datascript.core.entity.call(null,G__42311,G__42312));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = logseq.db.frontend.entity_util.page_QMARK_(e);
if(cljs.core.truth_(and__5140__auto__)){
return (!(logseq.db.frontend.entity_util.hidden_QMARK_(e)));
} else {
return and__5140__auto__;
}
})())){
return e;
} else {
return null;
}
}
}),G__42305__$1));
if((G__42305__$2 == null)){
return null;
} else {
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((15),G__42305__$2);
}
} else {
return null;
}
});
logseq.db.common.initial_data.get_all_user_datoms = (function logseq$db$common$initial_data$get_all_user_datoms(db){
if(cljs.core.truth_((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("logseq.property.user","email","logseq.property.user/email",-1655206063)) : datascript.core.entity.call(null,db,new cljs.core.Keyword("logseq.property.user","email","logseq.property.user/email",-1655206063))))){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (d){
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("logseq.property.user","email","logseq.property.user/email",-1655206063))], 0));
} else {
return null;
}
});
logseq.db.common.initial_data.get_list_style_values = (function logseq$db$common$initial_data$get_list_style_values(db){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (v){
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),v);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("logseq.property","order-list-type","logseq.property/order-list-type",607817111))))], 0));
});
/**
 * Returns current database schema and initial data
 */
logseq.db.common.initial_data.get_initial_data = (function logseq$db$common$initial_data$get_initial_data(db){
var _ = cljs.core.reset_BANG_(logseq.db.common.order._STAR_max_key,logseq.db.common.order.get_max_order(db));
var schema = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db);
var idents = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (id){
var temp__5825__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.kv","db-type","logseq.kv/db-type",1106888767),new cljs.core.Keyword("logseq.kv","schema-version","logseq.kv/schema-version",-1467606676),new cljs.core.Keyword("logseq.kv","graph-uuid","logseq.kv/graph-uuid",339522676),new cljs.core.Keyword("logseq.kv","local-graph-uuid","logseq.kv/local-graph-uuid",1789980105),new cljs.core.Keyword("logseq.kv","graph-rtc-e2ee?","logseq.kv/graph-rtc-e2ee?",1988827753),new cljs.core.Keyword("logseq.kv","graph-remote?","logseq.kv/graph-remote?",103246217),new cljs.core.Keyword("logseq.kv","latest-code-lang","logseq.kv/latest-code-lang",-73570328),new cljs.core.Keyword("logseq.kv","graph-backup-folder","logseq.kv/graph-backup-folder",-1042314532),new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837)], null)], 0));
var favorites = logseq.db.common.initial_data.get_favorites(db);
var recent_updated_pages = (function (){var pages = logseq.db.common.initial_data.get_recent_updated_pages(db);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p){
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pages], 0));
})();
var all_files = logseq.db.common.initial_data.get_all_files(db);
var structured_datoms = logseq.db.common.initial_data.get_structured_datoms(db);
var user_datoms = logseq.db.common.initial_data.get_all_user_datoms(db);
var list_style_datoms = logseq.db.common.initial_data.get_list_style_values(db);
var pages_datoms = (function (){var contents_id = logseq.db.common.initial_data.get_first_page_by_title(db,"Contents");
var capture_page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.db.get_built_in_page(db,logseq.common.config.quick_add_page_name));
var views_id = logseq.db.common.initial_data.get_first_page_by_title(db,logseq.common.config.views_page_name);
var recycle_id = logseq.db.common.initial_data.get_first_page_by_title(db,"Recycle");
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__42329_SHARP_){
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),p1__42329_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [contents_id,capture_page_id,views_id,recycle_id], null))], 0));
})();
var data = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","tx-id","block/tx-id",547556161),null,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),null,new cljs.core.Keyword("block","created-at","block/created-at",1440015),null,new cljs.core.Keyword("logseq.property","created-by-ref","logseq.property/created-by-ref",854433908),null], null), null),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(d));
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(idents,structured_datoms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user_datoms,list_style_datoms,favorites,recent_updated_pages,all_files,pages_datoms], 0))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),data], null);
});

//# sourceMappingURL=logseq.db.common.initial_data.js.map
