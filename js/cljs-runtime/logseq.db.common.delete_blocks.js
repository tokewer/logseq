goog.provide('logseq.db.common.delete_blocks');
logseq.db.common.delete_blocks.replace_ref_with_deleted_block_title = (function logseq$db$common$delete_blocks$replace_ref_with_deleted_block_title(block,ref_raw_title){
var block_content = ((logseq.db.frontend.entity_util.asset_QMARK_(block))?"":new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block));
var G__41807 = ref_raw_title;
var G__41807__$1 = (((G__41807 == null))?null:clojure.string.replace(G__41807,cljs.core.re_pattern(logseq.common.util.format.cljs$core$IFn$_invoke$arity$variadic("(?i){{embed \\(\\(%s\\)\\)\\s?}}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)))], 0))),block_content));
var G__41807__$2 = (((G__41807__$1 == null))?null:clojure.string.replace(G__41807__$1,logseq.common.util.block_ref.__GT_block_ref((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)))),block_content));
if((G__41807__$2 == null)){
return null;
} else {
return clojure.string.replace(G__41807__$2,logseq.common.util.page_ref.__GT_page_ref((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)))),block_content);
}
});
logseq.db.common.delete_blocks.build_retracted_tx = (function logseq$db$common$delete_blocks$build_retracted_tx(var_args){
var G__41809 = arguments.length;
switch (G__41809) {
case 1:
return logseq.db.common.delete_blocks.build_retracted_tx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.db.common.delete_blocks.build_retracted_tx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.db.common.delete_blocks.build_retracted_tx.cljs$core$IFn$_invoke$arity$1 = (function (retracted_blocks){
return logseq.db.common.delete_blocks.build_retracted_tx.cljs$core$IFn$_invoke$arity$2(retracted_blocks,cljs.core.PersistentHashSet.EMPTY);
}));

(logseq.db.common.delete_blocks.build_retracted_tx.cljs$core$IFn$_invoke$arity$2 = (function (retracted_blocks,extra_retract_ids){
var refs = logseq.common.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (block){
return new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(block);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([retracted_blocks], 0)));
var retract_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),retracted_blocks)),extra_retract_ids);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (ref){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref);
var replaced_title = ((cljs.core.contains_QMARK_(retract_ids,id))?null:(function (){var temp__5825__auto__ = new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(ref);
if(cljs.core.truth_(temp__5825__auto__)){
var raw_title = temp__5825__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (raw_title__$1,block){
return logseq.db.common.delete_blocks.replace_ref_with_deleted_block_title(block,raw_title__$1);
}),raw_title,retracted_blocks);
} else {
return null;
}
})());
var tx = (function (){var G__41810 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (block){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref),new cljs.core.Keyword("block","refs","block/refs",-1214495349),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([retracted_blocks], 0));
if(cljs.core.truth_(replaced_title)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41810,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("block","title","block/title",710445684),replaced_title], null));
} else {
return G__41810;
}
})();
return tx;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([refs], 0));
}));

(logseq.db.common.delete_blocks.build_retracted_tx.cljs$lang$maxFixedArity = 2);

logseq.db.common.delete_blocks.block_entity_QMARK_ = (function logseq$db$common$delete_blocks$block_entity_QMARK_(entity){
var and__5140__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(logseq.db.frontend.entity_util.page_QMARK_(entity));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
logseq.db.common.delete_blocks.retracted_entities = (function logseq$db$common$delete_blocks$retracted_entities(db,txs){
return logseq.common.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (tx){
if(((cljs.core.vector_QMARK_(tx)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),null,new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),null], null), null),cljs.core.first(tx))))){
var G__41824 = db;
var G__41825 = cljs.core.second(tx);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__41824,G__41825) : datascript.core.entity.call(null,G__41824,G__41825));
} else {
return null;
}
}),txs));
});
logseq.db.common.delete_blocks.property_history_ref_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("logseq.property.history","block","logseq.property.history/block",114255416),null,new cljs.core.Keyword("logseq.property.history","property","logseq.property.history/property",1600409082),null,new cljs.core.Keyword("logseq.property.history","ref-value","logseq.property.history/ref-value",-513136037),null], null), null);
logseq.db.common.delete_blocks.property_history_entity_QMARK_ = (function logseq$db$common$delete_blocks$property_history_entity_QMARK_(entity){
return cljs.core.boolean$((function (){var and__5140__auto__ = entity;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = new cljs.core.Keyword("logseq.property.history","block","logseq.property.history/block",114255416).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("logseq.property.history","property","logseq.property.history/property",1600409082).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = new cljs.core.Keyword("logseq.property.history","ref-value","logseq.property.history/ref-value",-513136037).cljs$core$IFn$_invoke$arity$1(entity);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return cljs.core.contains_QMARK_(entity,new cljs.core.Keyword("logseq.property.history","scalar-value","logseq.property.history/scalar-value",239337775));
}
}
}
} else {
return and__5140__auto__;
}
})());
});
logseq.db.common.delete_blocks.property_history_ref_retracted_entities = (function logseq$db$common$delete_blocks$property_history_ref_retracted_entities(db,txs){
return logseq.common.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (tx){
if(((cljs.core.vector_QMARK_(tx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","retract","db/retract",-1549825231),cljs.core.first(tx))) && (cljs.core.contains_QMARK_(logseq.db.common.delete_blocks.property_history_ref_attrs,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(tx,(2),null))))))){
var entity = (function (){var G__41827 = db;
var G__41828 = cljs.core.second(tx);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__41827,G__41828) : datascript.core.entity.call(null,G__41827,G__41828));
})();
if(logseq.db.common.delete_blocks.property_history_entity_QMARK_(entity)){
return entity;
} else {
return null;
}
} else {
return null;
}
}),txs));
});
logseq.db.common.delete_blocks.tx_entity_id = (function logseq$db$common$delete_blocks$tx_entity_id(db,eid){
if(cljs.core.integer_QMARK_(eid)){
return eid;
} else {
if(cljs.core.vector_QMARK_(eid)){
var G__41830 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
if((G__41830 == null)){
return null;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__41830);
}
} else {
return null;
}
}
});
logseq.db.common.delete_blocks.vector_adds_by_eid = (function logseq$db$common$delete_blocks$vector_adds_by_eid(txs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,tx){
if(((cljs.core.vector_QMARK_(tx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","add","db/add",235286841),cljs.core.first(tx))) && (cljs.core.integer_QMARK_(cljs.core.second(tx))))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(result,cljs.core.second(tx),cljs.core.assoc,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tx,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tx,(3)));
} else {
return result;
}
}),cljs.core.PersistentArrayMap.EMPTY,txs);
});
logseq.db.common.delete_blocks.property_history_ref_retracted_ids = (function logseq$db$common$delete_blocks$property_history_ref_retracted_ids(txs){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (tx){
if(((cljs.core.vector_QMARK_(tx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","retract","db/retract",-1549825231),cljs.core.first(tx))) && (((cljs.core.integer_QMARK_(cljs.core.second(tx))) && (cljs.core.contains_QMARK_(logseq.db.common.delete_blocks.property_history_ref_attrs,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(tx,(2),null))))))))){
return cljs.core.second(tx);
} else {
return null;
}
}),txs));
});
logseq.db.common.delete_blocks.new_property_history_retract_tx = (function logseq$db$common$delete_blocks$new_property_history_retract_tx(db,txs,retracted_ids){
var referencing_retracted_entity_QMARK_ = (function (history){
return ((cljs.core.contains_QMARK_(retracted_ids,logseq.db.common.delete_blocks.tx_entity_id(db,new cljs.core.Keyword("logseq.property.history","block","logseq.property.history/block",114255416).cljs$core$IFn$_invoke$arity$1(history)))) || (((cljs.core.contains_QMARK_(retracted_ids,logseq.db.common.delete_blocks.tx_entity_id(db,new cljs.core.Keyword("logseq.property.history","property","logseq.property.history/property",1600409082).cljs$core$IFn$_invoke$arity$1(history)))) || (cljs.core.contains_QMARK_(retracted_ids,logseq.db.common.delete_blocks.tx_entity_id(db,new cljs.core.Keyword("logseq.property.history","ref-value","logseq.property.history/ref-value",-513136037).cljs$core$IFn$_invoke$arity$1(history)))))));
});
var map_retract_tx = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (tx){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(tx);
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(tx);
if(cljs.core.truth_(and__5140__auto____$1)){
return ((logseq.db.common.delete_blocks.property_history_entity_QMARK_(tx)) && (referencing_retracted_entity_QMARK_(tx)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(tx)], null)], null);
} else {
return null;
}
}),txs);
var retracted_history_ref_ids = logseq.db.common.delete_blocks.property_history_ref_retracted_ids(txs);
var vector_retract_tx = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__41831){
var vec__41832 = p__41831;
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41832,(0),null);
var tx_entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41832,(1),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(tx_entity);
if(cljs.core.truth_(and__5140__auto__)){
return ((logseq.db.common.delete_blocks.property_history_entity_QMARK_(tx_entity)) && (((cljs.core.contains_QMARK_(retracted_history_ref_ids,eid)) || (referencing_retracted_entity_QMARK_(tx_entity)))));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),eid], null);
} else {
return null;
}
}),logseq.db.common.delete_blocks.vector_adds_by_eid(txs));
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(map_retract_tx,vector_retract_tx));
});
logseq.db.common.delete_blocks.block_subtree_entities = (function logseq$db$common$delete_blocks$block_subtree_entities(root){
var pending = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root], null);
var seen_ids = cljs.core.PersistentHashSet.EMPTY;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5823__auto__ = cljs.core.first(pending);
if(cljs.core.truth_(temp__5823__auto__)){
var entity = temp__5823__auto__;
if((((new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity) == null)) || (cljs.core.contains_QMARK_(seen_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity))))){
var G__41863 = cljs.core.rest(pending);
var G__41864 = seen_ids;
var G__41865 = result;
pending = G__41863;
seen_ids = G__41864;
result = G__41865;
continue;
} else {
var G__41866 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(pending),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.db.common.delete_blocks.block_entity_QMARK_,logseq.db.common.entity_plus.lookup_kv_then_entity.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("block","_raw-parent","block/_raw-parent",628025875))));
var G__41867 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity));
var G__41868 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,entity);
pending = G__41866;
seen_ids = G__41867;
result = G__41868;
continue;
}
} else {
return result;
}
break;
}
});
/**
 * Expands delete-blocks retracts to the current DB subtree before transacting.
 */
logseq.db.common.delete_blocks.expand_delete_blocks_tx = (function logseq$db$common$delete_blocks$expand_delete_blocks_tx(db,txs,p__41838){
var map__41839 = p__41838;
var map__41839__$1 = cljs.core.__destructure_map(map__41839);
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41839__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),outliner_op)){
var subtree_tx = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (entity){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity)], null);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(logseq.db.common.delete_blocks.block_subtree_entities,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.db.common.delete_blocks.block_entity_QMARK_,logseq.db.common.delete_blocks.retracted_entities(db,txs))], 0)));
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs,subtree_tx));
} else {
return txs;
}
});
logseq.db.common.delete_blocks.direct_cleanup_tx = (function logseq$db$common$delete_blocks$direct_cleanup_tx(entities){
var retracted_blocks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.db.common.delete_blocks.block_entity_QMARK_,entities);
var retracted_history_self_entities = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.db.common.delete_blocks.property_history_entity_QMARK_,entities);
var retracted_history_self_tx = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (history){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(history)], null);
}),retracted_history_self_entities);
var reaction_entities = logseq.common.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("logseq.property.reaction","_target","logseq.property.reaction/_target",-2097954493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entities], 0)));
var retract_reactions_tx = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (reaction){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(reaction)], null);
}),reaction_entities);
var view_entities = logseq.common.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("logseq.property","_view-for","logseq.property/_view-for",427007845),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entities], 0)));
var history_entities = logseq.common.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (entity){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("logseq.property.history","_block","logseq.property.history/_block",404702816).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.Keyword("logseq.property.history","_property","logseq.property.history/_property",-420114929).cljs$core$IFn$_invoke$arity$1(entity),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("logseq.property.history","_ref-value","logseq.property.history/_ref-value",1816320753).cljs$core$IFn$_invoke$arity$1(entity)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entities], 0)));
var retract_history_tx = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (history){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(history)], null);
}),history_entities);
var cleanup_retract_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(retracted_history_self_entities,reaction_entities,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([view_entities,history_entities], 0))));
var retracted_tx = logseq.db.common.delete_blocks.build_retracted_tx.cljs$core$IFn$_invoke$arity$2(retracted_blocks,cleanup_retract_ids);
var delete_views = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (view){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(view)], null);
}),view_entities);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(retracted_tx,delete_views,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([retracted_history_self_tx,retract_history_tx,retract_reactions_tx], 0)));
});
logseq.db.common.delete_blocks.build_cleanup_tx = (function logseq$db$common$delete_blocks$build_cleanup_tx(db,txs){
var initial_entities = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(logseq.db.common.delete_blocks.retracted_entities(db,txs),logseq.db.common.delete_blocks.property_history_ref_retracted_entities(db,txs));
var pending_entities = initial_entities;
var seen_ids = cljs.core.PersistentHashSet.EMPTY;
var cleanup_tx = logseq.db.common.delete_blocks.new_property_history_retract_tx(db,txs,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),initial_entities)));
while(true){
var temp__5823__auto__ = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pending_entities,seen_ids,cleanup_tx,initial_entities){
return (function (p1__41850_SHARP_){
return cljs.core.contains_QMARK_(seen_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__41850_SHARP_));
});})(pending_entities,seen_ids,cleanup_tx,initial_entities))
,pending_entities));
if(temp__5823__auto__){
var entities = temp__5823__auto__;
var seen_ids_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(seen_ids,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098)),entities);
var next_tx = logseq.db.common.delete_blocks.direct_cleanup_tx(entities);
var G__41879 = logseq.db.common.delete_blocks.retracted_entities(db,next_tx);
var G__41880 = seen_ids_SINGLEQUOTE_;
var G__41881 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cleanup_tx,next_tx);
pending_entities = G__41879;
seen_ids = G__41880;
cleanup_tx = G__41881;
continue;
} else {
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cleanup_tx);
}
break;
}
});
/**
 * When an entity is deleted, related property history, views and reactions
 * are deleted
 */
logseq.db.common.delete_blocks.update_refs_history = (function logseq$db$common$delete_blocks$update_refs_history(db,txs,_opts){
return cljs.core.seq(logseq.db.common.delete_blocks.build_cleanup_tx(db,txs));
});

//# sourceMappingURL=logseq.db.common.delete_blocks.js.map
