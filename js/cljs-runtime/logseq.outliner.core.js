goog.provide('logseq.outliner.core');
logseq.outliner.core.direct_op_entry = (function logseq$outliner$core$direct_op_entry(outliner_op,args){
var __GT_block_id = (function logseq$outliner$core$direct_op_entry_$___GT_block_id(block){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
});
var G__59682 = outliner_op;
var G__59682__$1 = (((G__59682 instanceof cljs.core.Keyword))?G__59682.fqn:null);
switch (G__59682__$1) {
case "save-block":
var vec__59683 = args;
var _conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59683,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59683,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59683,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-block","save-block",591532560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,opts], null)], null);

break;
case "insert-blocks":
var vec__59690 = args;
var _conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59690,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59690,(1),null);
var target_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59690,(2),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59690,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blocks,__GT_block_id(target_block),opts], null)], null);

break;
case "delete-blocks":
var vec__59693 = args;
var _conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59693,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59693,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59693,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(__GT_block_id,blocks),opts], null)], null);

break;
case "move-blocks":
var vec__59699 = args;
var _conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59699,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59699,(1),null);
var target_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59699,(2),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59699,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(__GT_block_id,blocks),__GT_block_id(target_block),opts], null)], null);

break;
case "move-blocks-up-down":
var vec__59705 = args;
var _conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59705,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59705,(1),null);
var up_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59705,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-blocks-up-down","move-blocks-up-down",1370411060),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(__GT_block_id,blocks),up_QMARK_], null)], null);

break;
case "indent-outdent-blocks":
var vec__59708 = args;
var _conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59708,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59708,(1),null);
var indent_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59708,(2),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59708,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent-outdent-blocks","indent-outdent-blocks",-104352713),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(__GT_block_id,blocks),indent_QMARK_,opts], null)], null);

break;
default:
return null;

}
});
logseq.outliner.core.block_map = malli.util.optional_keys.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null));
logseq.outliner.core.block_map_or_entity = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),datascript.impl.entity.entity_QMARK_], null),logseq.outliner.core.block_map], null);
logseq.outliner.core.block_with_timestamps = (function logseq$outliner$core$block_with_timestamps(block){
var updated_at = logseq.common.util.time_ms();
var block__$1 = (function (){var G__59711 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),updated_at);
if((new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(block) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59711,new cljs.core.Keyword("block","created-at","block/created-at",1440015),updated_at);
} else {
return G__59711;
}
})();
return block__$1;
});
logseq.outliner.core.block_with_updated_at = (function logseq$outliner$core$block_with_updated_at(block){
var updated_at = logseq.common.util.time_ms();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),updated_at);
});
logseq.outliner.core.filter_top_level_blocks = (function logseq$outliner$core$filter_top_level_blocks(var_args){
var G__59725 = arguments.length;
switch (G__59725) {
case 2:
return logseq.outliner.core.filter_top_level_blocks.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.outliner.core.filter_top_level_blocks.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.outliner.core.filter_top_level_blocks.cljs$core$IFn$_invoke$arity$2 = (function (db,blocks){
return logseq.outliner.core.filter_top_level_blocks.cljs$core$IFn$_invoke$arity$3(db,blocks,cljs.core.constantly(true));
}));

(logseq.outliner.core.filter_top_level_blocks.cljs$core$IFn$_invoke$arity$3 = (function (db,blocks,cover_ancestor_QMARK_){
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
if(datascript.impl.entity.entity_QMARK_(block)){
return block;
} else {
var G__59736 = db;
var G__59737 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59736,G__59737) : datascript.core.entity.call(null,G__59736,G__59737));
}
}),blocks);
var selected_ids = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks__$1));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (block){
var G__59738 = block;
var G__59739 = (function (parent){
var and__5140__auto__ = cljs.core.contains_QMARK_(selected_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
if(and__5140__auto__){
return (cover_ancestor_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cover_ancestor_QMARK_.cljs$core$IFn$_invoke$arity$2(block,parent) : cover_ancestor_QMARK_.call(null,block,parent));
} else {
return and__5140__auto__;
}
});
return (logseq.db.some_parent.cljs$core$IFn$_invoke$arity$2 ? logseq.db.some_parent.cljs$core$IFn$_invoke$arity$2(G__59738,G__59739) : logseq.db.some_parent.call(null,G__59738,G__59739));
}),blocks__$1);
}));

(logseq.outliner.core.filter_top_level_blocks.cljs$lang$maxFixedArity = 3);

/**
 * A selected ancestor covers a block for delete when it is the direct parent
 * (a page parent only detaches, so its selected children must not also be
 * deleted) or a non-page ancestor whose delete retracts the subtree.
 */
logseq.outliner.core.delete_covers_selected_ancestor_QMARK_ = (function logseq$outliner$core$delete_covers_selected_ancestor_QMARK_(block,ancestor){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ancestor),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)))) || (cljs.core.not((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(ancestor) : logseq.db.page_QMARK_.call(null,ancestor)))));
});
logseq.outliner.core.remove_orphaned_page_refs_BANG_ = (function logseq$outliner$core$remove_orphaned_page_refs_BANG_(db,p__59744,txs_state,old_refs,new_refs){
var map__59745 = p__59744;
var map__59745__$1 = cljs.core.__destructure_map(map__59745);
var db_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59745__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_refs,new_refs)){
var new_refs__$1 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ref){
var or__5142__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref);
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1((function (){var G__59746 = db;
var G__59747 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59746,G__59747) : datascript.core.entity.call(null,G__59746,G__59747));
})());
} else {
return and__5140__auto__;
}
}
}),new_refs));
var old_pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core.contains_QMARK_(new_refs__$1,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(e));
}),(function (){var G__59748 = db;
var G__59749 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__59750 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),old_refs);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__59748,G__59749,G__59750) : datascript.core.pull_many.call(null,G__59748,G__59749,G__59750));
})())));
var orphaned_pages = ((cljs.core.seq(old_pages))?logseq.db.get_orphaned_pages(db,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pages","pages",-285406513),old_pages,new cljs.core.Keyword(null,"built-in-pages-names","built-in-pages-names",-104089994),logseq.db.sqlite.create_graph.built_in_pages_names,new cljs.core.Keyword(null,"empty-ref-f","empty-ref-f",666507359),(function (page){
var refs = new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(page);
return (((((cljs.core.count(refs) === (0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([db_id]),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),refs)))))) && (((cljs.core.not((logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.class_QMARK_.call(null,page)))) && (cljs.core.not((logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.property_QMARK_.call(null,page)))))));
})], null)):null);
if(cljs.core.seq(orphaned_pages)){
var tx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (page){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)], null);
}),orphaned_pages);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(txs_state,(function (state){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(state,tx));
}));
} else {
return null;
}
} else {
return null;
}
});
logseq.outliner.core.page_updated_at_tx = (function logseq$outliner$core$page_updated_at_tx(db,page_eid){
var temp__5825__auto__ = (cljs.core.truth_(page_eid)?(datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,page_eid) : datascript.core.entity.call(null,db,page_eid)):null);
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
var G__59752 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),page_eid,new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),logseq.common.util.time_ms()], null);
if(cljs.core.not(new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(page))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59752,new cljs.core.Keyword("block","created-at","block/created-at",1440015),logseq.common.util.time_ms());
} else {
return G__59752;
}
} else {
return null;
}
});
/**
 * Page-like entities (pages, tags, properties) are contained via :block/parent;
 * ordinary blocks via :block/page.
 */
logseq.outliner.core.container_page_eid = (function logseq$outliner$core$container_page_eid(block){
if(cljs.core.truth_((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.page_QMARK_.call(null,block)))){
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_((function (){var and__5140__auto__ = parent;
if(cljs.core.truth_(and__5140__auto__)){
return (logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(parent) : logseq.db.page_QMARK_.call(null,parent));
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
} else {
return null;
}
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block));
}
});
/**
 * Identity-preserving inserts can reparent a live block. Stamp the pages that
 *   lose those blocks, excluding the destination page.
 */
logseq.outliner.core.live_insert_source_page_eids = (function logseq$outliner$core$live_insert_source_page_eids(db,blocks,dest_page_eid){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (block){
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var uuid_SINGLEQUOTE_ = temp__5825__auto__;
var temp__5825__auto____$1 = (function (){var G__59754 = db;
var G__59755 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid_SINGLEQUOTE_], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59754,G__59755) : datascript.core.entity.call(null,G__59754,G__59755));
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var live = temp__5825__auto____$1;
return logseq.outliner.core.container_page_eid(live);
} else {
return null;
}
} else {
return null;
}
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([dest_page_eid])),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()),blocks);
});
logseq.outliner.core.update_page_when_save_block = (function logseq$outliner$core$update_page_when_save_block(db,txs_state,block_entity){
var temp__5825__auto__ = new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_entity);
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
var temp__5825__auto____$1 = logseq.outliner.core.page_updated_at_tx(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e));
if(cljs.core.truth_(temp__5825__auto____$1)){
var m_SINGLEQUOTE_ = temp__5825__auto____$1;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(txs_state,cljs.core.conj,m_SINGLEQUOTE_);
} else {
return null;
}
} else {
return null;
}
});
logseq.outliner.core.remove_orphaned_refs_when_save = (function logseq$outliner$core$remove_orphaned_refs_when_save(db,txs_state,block_entity,m){
var remove_self_page = (function (p1__59756_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block_entity)));
}),p1__59756_SHARP_);
});
var old_refs = (function (){var content_refs = cljs.core.set(logseq.outliner.pipeline.block_content_refs(db,block_entity));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59757_SHARP_){
return cljs.core.contains_QMARK_(content_refs,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__59757_SHARP_));
}),new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block_entity));
})();
var new_refs = remove_self_page(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(m));
return logseq.outliner.core.remove_orphaned_page_refs_BANG_(db,block_entity,txs_state,old_refs,new_refs);
});
logseq.outliner.core.get_last_child_or_self = (function logseq$outliner$core$get_last_child_or_self(db,block){
var last_child = (function (){var G__59758 = logseq.db.get_block_last_direct_child_id.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),true);
if((G__59758 == null)){
return null;
} else {
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,G__59758) : datascript.core.entity.call(null,db,G__59758));
}
})();
var target = (function (){var or__5142__auto__ = last_child;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,(!((last_child == null)))], null);
});
logseq.outliner.core.rebuild_block_refs = (function logseq$outliner$core$rebuild_block_refs(db,block){
return logseq.outliner.pipeline.db_rebuild_block_refs(db,block);
});
/**
 * Class titles are case-sensitive while :block/name is not, so among same-name
 *   refs prefer the one whose :block/title equals the tag's.
 */
logseq.outliner.core.matching_ref_for_tag = (function logseq$outliner$core$matching_ref_for_tag(tag,candidates){
var or__5142__auto__ = cljs.core.some((function (r){
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(tag);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(tag));
} else {
return and__5140__auto__;
}
})())){
return r;
} else {
return null;
}
}),candidates);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.first(candidates);
}
});
/**
 * Fix or remove tags related when entered via `Escape`
 */
logseq.outliner.core.fix_tag_ids = (function logseq$outliner$core$fix_tag_ids(m,db){
var refs = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316),cljs.core.seq(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(m))));
var tags = cljs.core.seq(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(m));
if(((cljs.core.seq(refs)) && (tags))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("block","tags","block/tags",1814948340),(function (tags__$1){
var tags__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tag){
var or__5142__auto__ = (function (){var and__5140__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag);
if(cljs.core.truth_(and__5140__auto__)){
var e = (function (){var G__59760 = db;
var G__59761 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59760,G__59761) : datascript.core.entity.call(null,G__59760,G__59761));
})();
return cljs.core.select_keys(e,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","name","block/name",1619760316)], null));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return tag;
}
}),tags__$1);
var G__59762 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tag){
if(cljs.core.contains_QMARK_(refs,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(tag))){
var matched_ref = logseq.outliner.core.matching_ref_for_tag(tag,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59759_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(tag),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(p1__59759_SHARP_));
}),new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(m)));
var G__59763 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tag,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(matched_ref));
if(cljs.core.truth_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(matched_ref))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59763,new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(matched_ref));
} else {
return G__59763;
}
} else {
return tag;
}
}),tags__$2);
return (function (tags_SINGLEQUOTE_){
var ref_titles = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(m))));
var lc_ref_titles = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,ref_titles));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (tag){
var temp__5825__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(tag);
if(cljs.core.truth_(temp__5825__auto__)){
var title = temp__5825__auto__;
return (((!(cljs.core.contains_QMARK_(ref_titles,title)))) && (cljs.core.contains_QMARK_(lc_ref_titles,clojure.string.lower_case(title))));
} else {
return null;
}
}),tags_SINGLEQUOTE_);
})(G__59762);

}));
} else {
return m;
}
});
logseq.outliner.core.ref_tags = (function logseq$outliner$core$ref_tags(ref){
var tags = new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(ref);
if((tags instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tags], null);
} else {
if(((cljs.core.sequential_QMARK_(tags)) || (cljs.core.set_QMARK_(tags)))){
return tags;
} else {
return null;

}
}
});
logseq.outliner.core.ref_tag_idents = (function logseq$outliner$core$ref_tag_idents(ref){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (tag){
if((tag instanceof cljs.core.Keyword)){
return tag;
} else {
if(cljs.core.map_QMARK_(tag)){
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(tag);
} else {
return null;

}
}
}),logseq.outliner.core.ref_tags(ref)));
});
logseq.outliner.core.new_page_ref_QMARK_ = (function logseq$outliner$core$new_page_ref_QMARK_(ref){
return ((cljs.core.map_QMARK_(ref)) && ((((new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref) == null)) && ((((new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(ref) == null)) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["page",null,"journal",null], null), null),new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(ref))) || (cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(logseq.outliner.core.ref_tag_idents(ref),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),null,new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081),null], null), null)))))))))));
});
logseq.outliner.core.resolve_page_ref = (function logseq$outliner$core$resolve_page_ref(db,ref,tag_names){
if(logseq.outliner.core.new_page_ref_QMARK_(ref)){
var class_QMARK_ = cljs.core.contains_QMARK_(tag_names,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref));
var temp__5823__auto__ = (function (){var and__5140__auto__ = (!(class_QMARK_));
if(and__5140__auto__){
return logseq.db.get_page(db,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var page = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(page,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("db","ident","db/ident",-737096)], null)),cljs.core.select_keys(ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block.temp","original-page-name","block.temp/original-page-name",1371358508)], null))], 0)),null], null);
} else {
var map__59764 = logseq.outliner.page.create(db,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref),new cljs.core.Keyword(null,"class?","class?",385834571),class_QMARK_,new cljs.core.Keyword(null,"journal?","journal?",-897756522),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("journal",new cljs.core.Keyword("block","type","block/type",1537584409).cljs$core$IFn$_invoke$arity$1(ref))) || (cljs.core.contains_QMARK_(logseq.outliner.core.ref_tag_idents(ref),new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081))))], null));
var map__59764__$1 = cljs.core.__destructure_map(map__59764);
var page_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59764__$1,new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59764__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59765 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(ref,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Keyword("block.temp","original-page-name","block.temp/original-page-name",1371358508)], null)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),page_uuid);
if(class_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59765,new cljs.core.Keyword("db","ident","db/ident",-737096),(function (){var or__5142__auto__ = cljs.core.some(new cljs.core.Keyword("db","ident","db/ident",-737096),tx_data);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1((function (){var G__59766 = db;
var G__59767 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),page_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59766,G__59767) : datascript.core.entity.call(null,G__59766,G__59767));
})());
}
})());
} else {
return G__59765;
}
})(),tx_data], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,null], null);
}
});
/**
 * Resolve new-page refs, deduping pages created during the pass: db doesn't
 *   see them yet, so a repeated [[same name]] ref would otherwise create a
 *   duplicate page. Class titles are case-sensitive (#Movie and #movie are
 *   distinct classes), so class refs dedupe by :block/title instead.
 */
logseq.outliner.core.resolve_refs_dedup = (function logseq$outliner$core$resolve_refs_dedup(db,refs,tag_names){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__59768,ref){
var vec__59769 = p__59768;
var resolved = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59769,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59769,(1),null);
var new_page_QMARK_ = logseq.outliner.core.new_page_ref_QMARK_(ref);
var dedup_key = ((cljs.core.contains_QMARK_(tag_names,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref)], null));
var temp__5823__auto__ = (function (){var and__5140__auto__ = new_page_QMARK_;
if(and__5140__auto__){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,dedup_key);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var seen_ref = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(resolved,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([seen_ref,cljs.core.select_keys(ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block.temp","original-page-name","block.temp/original-page-name",1371358508)], null))], 0)),null], null)),seen], null);
} else {
var vec__59772 = logseq.outliner.core.resolve_page_ref(db,ref,tag_names);
var ref_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59772,(0),null);
var tx_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59772,(1),null);
var resolved_ref = vec__59772;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(resolved,resolved_ref),((((new_page_QMARK_) && (cljs.core.seq(tx_data))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,dedup_key,ref_SINGLEQUOTE_):seen)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),refs));
});
/**
 * A uuid-named page ref that matches no entity resolves to a nil :block/uuid
 *   because no page is created for it; the typed [[uuid]] renders as a broken ref.
 */
logseq.outliner.core.broken_page_map_QMARK_ = (function logseq$outliner$core$broken_page_map_QMARK_(ref_SINGLEQUOTE_){
return ((cljs.core.map_QMARK_(ref_SINGLEQUOTE_)) && ((((new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref_SINGLEQUOTE_) == null)) && ((((new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref_SINGLEQUOTE_) == null)) && ((((new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(ref_SINGLEQUOTE_) == null)) && (logseq.common.util.uuid_string_QMARK_((function (){var or__5142__auto__ = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref_SINGLEQUOTE_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})())))))))));
});
/**
 * A [:block/uuid id] lookup whose entity doesn't exist and isn't created by
 *   this transaction would fail the transaction, so it's dropped.
 */
logseq.outliner.core.missing_uuid_ref_QMARK_ = (function logseq$outliner$core$missing_uuid_ref_QMARK_(db,created_uuids,p__59775){
var vec__59776 = p__59775;
var _ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59776,(0),null);
var ref_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59776,(1),null);
var _tx_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59776,(2),null);
return ((cljs.core.vector_QMARK_(ref_SINGLEQUOTE_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(ref_SINGLEQUOTE_))) && (((cljs.core.uuid_QMARK_(cljs.core.second(ref_SINGLEQUOTE_))) && (((cljs.core.not((function (){var G__59779 = db;
var G__59780 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.second(ref_SINGLEQUOTE_)], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59779,G__59780) : datascript.core.entity.call(null,G__59779,G__59780));
})())) && ((!(cljs.core.contains_QMARK_(created_uuids,cljs.core.second(ref_SINGLEQUOTE_))))))))))));
});
logseq.outliner.core.resolve_page_refs = (function logseq$outliner$core$resolve_page_refs(var_args){
var G__59783 = arguments.length;
switch (G__59783) {
case 2:
return logseq.outliner.core.resolve_page_refs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.outliner.core.resolve_page_refs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.outliner.core.resolve_page_refs.cljs$core$IFn$_invoke$arity$2 = (function (db,block){
return logseq.outliner.core.resolve_page_refs.cljs$core$IFn$_invoke$arity$3(db,block,null);
}));

(logseq.outliner.core.resolve_page_refs.cljs$core$IFn$_invoke$arity$3 = (function (db,block,p__59784){
var map__59785 = p__59784;
var map__59785__$1 = cljs.core.__destructure_map(map__59785);
var batch_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59785__$1,new cljs.core.Keyword(null,"batch-uuids","batch-uuids",2027175720),cljs.core.PersistentHashSet.EMPTY);
var temp__5823__auto__ = cljs.core.seq(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block));
if(temp__5823__auto__){
var refs = temp__5823__auto__;
var tag_names = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","name","block/name",1619760316)),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block));
var resolved_refs = logseq.outliner.core.resolve_refs_dedup(db,refs,tag_names);
var pairs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (ref,p__59786){
var vec__59787 = p__59786;
var ref_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59787,(0),null);
var tx_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59787,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,ref_SINGLEQUOTE_,tx_data], null);
}),refs,resolved_refs);
var created_uuids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(batch_uuids,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__59790){
var vec__59791 = p__59790;
var _ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59791,(0),null);
var ref_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59791,(1),null);
var _tx_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59791,(2),null);
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref_SINGLEQUOTE_);
})),pairs);
var drop_pair_QMARK_ = (function (pair){
return ((logseq.outliner.core.broken_page_map_QMARK_(cljs.core.second(pair))) || (logseq.outliner.core.missing_uuid_ref_QMARK_(db,created_uuids,pair)));
});
var resolved_pairs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(drop_pair_QMARK_),pairs);
var broken_pairs = cljs.core.filterv(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(logseq.outliner.core.broken_page_map_QMARK_,cljs.core.second),pairs);
var refs_SINGLEQUOTE_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,resolved_pairs);
var page_txs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__59781_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__59781_SHARP_,(2));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resolved_pairs], 0));
var tag_refs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,ref){
if(cljs.core.truth_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(ref))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(ref),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),ref);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,refs_SINGLEQUOTE_);
var tags_SINGLEQUOTE_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (tag){
var temp__5823__auto____$1 = logseq.outliner.core.matching_ref_for_tag(tag,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tag_refs,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(tag)));
if(cljs.core.truth_(temp__5823__auto____$1)){
var ref = temp__5823__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword("block","type","block/type",1537584409)),cljs.core.select_keys(ref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("db","ident","db/ident",-737096)], null))], 0));
} else {
return tag;
}
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block));
var replacements = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__59794){
var vec__59795 = p__59794;
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59795,(0),null);
var ref_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59795,(1),null);
var _tx_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59795,(2),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref_SINGLEQUOTE_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref_SINGLEQUOTE_)], null);
} else {
return null;
}
}),resolved_pairs),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__59798){
var vec__59799 = p__59798;
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59799,(0),null);
var _ref_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59799,(1),null);
var _tx_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59799,(2),null);
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(ref)], null);
} else {
return null;
}
}),broken_pairs));
var replace_refs = (function (title){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (title__$1,p__59802){
var vec__59803 = p__59802;
var old_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59803,(0),null);
var new_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59803,(1),null);
return clojure.string.replace(title__$1,logseq.common.util.page_ref.__GT_page_ref(old_uuid),logseq.common.util.page_ref.__GT_page_ref(new_uuid));
}),title,replacements);
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),(function (){var G__59806 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("block","refs","block/refs",-1214495349),refs_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","tags","block/tags",1814948340),tags_SINGLEQUOTE_], 0));
var G__59806__$1 = ((((cljs.core.seq(replacements)) && (typeof new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block) === 'string')))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59806,new cljs.core.Keyword("block","title","block/title",710445684),replace_refs):G__59806);
if(((cljs.core.seq(replacements)) && (typeof new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(block) === 'string'))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59806__$1,new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090),replace_refs);
} else {
return G__59806__$1;
}
})(),new cljs.core.Keyword(null,"page-txs","page-txs",-30929875),page_txs], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),block], null);
}
}));

(logseq.outliner.core.resolve_page_refs.cljs$lang$maxFixedArity = 3);

logseq.outliner.core.remove_tags_when_title_changed = (function logseq$outliner$core$remove_tags_when_title_changed(block,new_content){
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5140__auto__)){
return new_content;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tag){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (tag){
var and__5140__auto__ = (function (){var G__59807 = new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(block);
var G__59808 = tag;
return (logseq.db.inline_tag_QMARK_.cljs$core$IFn$_invoke$arity$2 ? logseq.db.inline_tag_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59807,G__59808) : logseq.db.inline_tag_QMARK_.call(null,G__59807,G__59808));
})();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((logseq.db.inline_tag_QMARK_.cljs$core$IFn$_invoke$arity$2 ? logseq.db.inline_tag_QMARK_.cljs$core$IFn$_invoke$arity$2(new_content,tag) : logseq.db.inline_tag_QMARK_.call(null,new_content,tag)));
} else {
return and__5140__auto__;
}
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block)));
} else {
return null;
}
});
logseq.outliner.core.add_missing_tag_idents = (function logseq$outliner$core$add_missing_tag_idents(db,tags){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (t){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(t));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.not(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(t));
if(and__5140__auto____$1){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(t);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var eid = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(t)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("db","ident","db/ident",-737096),logseq.db.frontend.class$.create_user_class_ident_from_name(db,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(t))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),new cljs.core.Keyword("logseq.class","Root","logseq.class/Root",273783827)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),eid,new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329)], null)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tags], 0));
});
logseq.outliner.core.inline_tag_disallowed_QMARK_ = (function logseq$outliner$core$inline_tag_disallowed_QMARK_(db,t){
var disallowed_idents = cljs.core.into.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.class$.disallowed_inline_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property","query","logseq.property/query",-97414126),null,new cljs.core.Keyword("logseq.property","asset","logseq.property/asset",876856790),null], null), null));
return ((cljs.core.map_QMARK_(t)) && (((cljs.core.contains_QMARK_(disallowed_idents,(function (){var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1((function (){var G__59809 = db;
var G__59810 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59809,G__59810) : datascript.core.entity.call(null,G__59809,G__59810));
})());
} else {
return null;
}
}
})())) || (cljs.core.contains_QMARK_(logseq.db.sqlite.create_graph.built_in_pages_names,(function (){var or__5142__auto____$1 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1((function (){var G__59811 = db;
var G__59812 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59811,G__59812) : datascript.core.entity.call(null,G__59811,G__59812));
})());
} else {
return null;
}
}
})())))));
});
logseq.outliner.core.remove_disallowed_inline_classes = (function logseq$outliner$core$remove_disallowed_inline_classes(db,p__59814){
var map__59815 = p__59814;
var map__59815__$1 = cljs.core.__destructure_map(map__59815);
var block = map__59815__$1;
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59815__$1,new cljs.core.Keyword("block","tags","block/tags",1814948340));
if(cljs.core.truth_((function (){var or__5142__auto__ = (function (){var G__59816 = (function (){var G__59817 = db;
var G__59818 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59817,G__59818) : datascript.core.entity.call(null,G__59817,G__59818));
})();
return (logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(G__59816) : logseq.db.page_QMARK_.call(null,G__59816));
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block);
}
})())){
return block;
} else {
var tags_SINGLEQUOTE_ = ((((cljs.core.integer_QMARK_(tags)) || (((cljs.core.qualified_keyword_QMARK_(tags)) || (((cljs.core.vector_QMARK_(tags)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(tags)))))))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,tags) : datascript.core.entity.call(null,db,tags))], null):((cljs.core.every_QMARK_(cljs.core.qualified_keyword_QMARK_,tags))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59813_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__59813_SHARP_) : datascript.core.entity.call(null,db,p1__59813_SHARP_));
}),tags):tags
));
var block__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","tags","block/tags",1814948340),tags_SINGLEQUOTE_);
var disallowed_tag_QMARK_ = (function (tag){
return logseq.outliner.core.inline_tag_disallowed_QMARK_(db,tag);
});
var disallowed_tags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(disallowed_tag_QMARK_,tags_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.seq(disallowed_tags);
if(and__5140__auto__){
return cljs.core.some((function (tag){
return clojure.string.includes_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block__$1),(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.page_ref.__GT_page_ref(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(tag)))));
}),disallowed_tags);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(block__$1,new cljs.core.Keyword("block","tags","block/tags",1814948340),(function (tags__$1){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(disallowed_tag_QMARK_,tags__$1));
})),new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (refs){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(disallowed_tag_QMARK_,refs));
})),new cljs.core.Keyword("block","title","block/title",710445684),(function (title){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (title__$1,tag){
return clojure.string.trim(clojure.string.replace(title__$1,(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.common.util.page_ref.__GT_page_ref(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(tag)))),(""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(tag)))));
}),title,disallowed_tags);
}));
} else {
return block__$1;
}
}
});
(datascript.impl.entity.Entity.prototype.logseq$outliner$tree$INode$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.impl.entity.Entity.prototype.logseq$outliner$tree$INode$_save$arity$4 = (function (this$,_STAR_txs_state,db,p__59821){
var map__59822 = p__59821;
var map__59822__$1 = cljs.core.__destructure_map(map__59822);
var retract_attributes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59822__$1,new cljs.core.Keyword(null,"retract-attributes?","retract-attributes?",188593703),true);
var retract_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59822__$1,new cljs.core.Keyword(null,"retract-attributes","retract-attributes",-1598740703));
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59822__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
var encrypted_title_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59822__$1,new cljs.core.Keyword(null,"encrypted-title?","encrypted-title?",-805291042));
var encrypted_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59822__$1,new cljs.core.Keyword(null,"encrypted-name","encrypted-name",1444156139));
var this$__$1 = this;
if(logseq.outliner.datascript.outliner_txs_state_QMARK_(_STAR_txs_state)){
} else {
throw (new Error((""+"Assert failed: "+"db should be satisfied outliner-tx-state?"+"\n"+"(ds/outliner-txs-state? *txs-state)")));
}

var data = ((datascript.impl.entity.entity_QMARK_(this$__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1.kv,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(this$__$1)):this$__$1);
var data_SINGLEQUOTE_ = logseq.outliner.core.remove_disallowed_inline_classes(db,data);
var map__59823 = logseq.outliner.core.resolve_page_refs.cljs$core$IFn$_invoke$arity$2(db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data_SINGLEQUOTE_,new cljs.core.Keyword("block","children","block/children",-1040716209),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","meta","block/meta",1064819153),new cljs.core.Keyword("block","unordered","block/unordered",-772044101),new cljs.core.Keyword("block.temp","ast-title","block.temp/ast-title",-940352067),new cljs.core.Keyword("block.temp","ast-body","block.temp/ast-body",-464258035),new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block.temp","load-status","block.temp/load-status",-1066723049),new cljs.core.Keyword("block.temp","has-children?","block.temp/has-children?",935519725)], 0)));
var map__59823__$1 = cljs.core.__destructure_map(map__59823);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59823__$1,new cljs.core.Keyword(null,"block","block",664686210));
var page_txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59823__$1,new cljs.core.Keyword(null,"page-txs","page-txs",-30929875));
var collapse_or_expand_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outliner_op,new cljs.core.Keyword(null,"collapse-expand-blocks","collapse-expand-blocks",-868833367));
var m_STAR_ = (function (){var G__59824 = logseq.outliner.core.fix_tag_ids(block,db);
if((!(collapse_or_expand_QMARK_))){
return logseq.outliner.core.block_with_updated_at(G__59824);
} else {
return G__59824;
}
})();
var db_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(this$__$1);
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(this$__$1);
var eid = (function (){var or__5142__auto__ = db_id;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(block_uuid)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
} else {
return null;
}
}
})();
var block_entity = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
var page_QMARK_ = (logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(block_entity) : logseq.db.page_QMARK_.call(null,block_entity));
var m_STAR___$1 = (cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m_STAR_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(block_entity));
} else {
return and__5140__auto__;
}
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$3(m_STAR_,new cljs.core.Keyword("block","title","block/title",710445684),logseq.common.util.clear_markdown_heading):m_STAR_);
var block_title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m_STAR___$1);
var page_title_changed_QMARK_ = (function (){var and__5140__auto__ = page_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = block_title;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(block_title,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_entity));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
var _ = (cljs.core.truth_((function (){var and__5140__auto__ = page_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = block_title;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not(encrypted_title_QMARK_);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?logseq.outliner.validate.validate_page_title_characters(block_title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),m_STAR___$1], null)):null);
var m = (cljs.core.truth_(page_title_changed_QMARK_)?(function (){var ___$1 = (cljs.core.truth_(encrypted_title_QMARK_)?null:logseq.outliner.validate.validate_page_title(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m_STAR___$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),m_STAR___$1], null)));
var page_name = (cljs.core.truth_(encrypted_title_QMARK_)?encrypted_name:(function (){var temp__5823__auto__ = new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(block_entity);
if(cljs.core.truth_(temp__5823__auto__)){
var journal_day = temp__5823__auto__;
return logseq.common.util.page_name_sanity_lc(logseq.common.util.date_time.int__GT_journal_title(journal_day,logseq.common.util.date_time.default_journal_title_formatter));
} else {
return logseq.common.util.page_name_sanity_lc(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m_STAR___$1));
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m_STAR___$1,new cljs.core.Keyword("block","name","block/name",1619760316),page_name);
})():m_STAR___$1);
var ___$1 = (cljs.core.truth_((function (){var and__5140__auto__ = (function (){var or__5142__auto__ = (logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(block_entity) : logseq.db.page_QMARK_.call(null,block_entity));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (logseq.db.object_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.object_QMARK_.cljs$core$IFn$_invoke$arity$1(block_entity) : logseq.db.object_QMARK_.call(null,block_entity));
}
})();
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_entity));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?logseq.outliner.validate.validate_block_title(db,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m),block_entity):null);
var e_60404 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,db_id) : datascript.core.entity.call(null,db,db_id));
if(cljs.core.truth_((function (){var and__5140__auto__ = e_60404;
if(cljs.core.truth_(and__5140__auto__)){
return block_uuid;
} else {
return and__5140__auto__;
}
})())){
var uuid_not_changed_QMARK__60405 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(block_uuid,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(e_60404));
if(uuid_not_changed_QMARK__60405){
} else {
console.error("Block UUID shouldn't be changed once created");
}

if(uuid_not_changed_QMARK__60405){
} else {
throw (new Error((""+"Assert failed: "+"Block UUID changed"+"\n"+"uuid-not-changed?")));
}
} else {
}

if(cljs.core.seq(page_txs)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_txs_state,cljs.core.into,page_txs);
} else {
}

if(cljs.core.truth_(eid)){
if(cljs.core.truth_((function (){var or__5142__auto__ = (function (){var and__5140__auto__ = retract_attributes_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.seq(retract_attributes);
}
})())){
var retract_attributes_60406__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.schema.retract_attributes,retract_attributes);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_txs_state,(function (txs){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (attribute){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),eid,attribute], null);
}),retract_attributes_60406__$1)));
}));
} else {
}

if(collapse_or_expand_QMARK_){
} else {
logseq.outliner.core.update_page_when_save_block(db,_STAR_txs_state,block_entity);
}

if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block_entity));
} else {
return and__5140__auto__;
}
})())){
logseq.outliner.core.remove_orphaned_refs_when_save(db,_STAR_txs_state,block_entity,m);
} else {
}
} else {
}

var other_tx_60407 = new cljs.core.Keyword("db","other-tx","db/other-tx",337296620).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.seq(other_tx_60407)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_txs_state,(function (txs){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs,other_tx_60407));
}));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_txs_state,cljs.core.conj,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("db","other-tx","db/other-tx",337296620)));

if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block_entity);
if(cljs.core.truth_(and__5140__auto__)){
return block_entity;
} else {
return and__5140__auto__;
}
})())){
var tx_data_60410 = logseq.outliner.core.remove_tags_when_title_changed(block_entity,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(m));
if(cljs.core.seq(tx_data_60410)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_txs_state,(function (txs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs,tx_data_60410);
}));
} else {
}
} else {
}

var tx_data_60411 = logseq.outliner.core.add_missing_tag_idents(db,new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(m));
if(cljs.core.seq(tx_data_60411)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_txs_state,(function (txs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(txs,tx_data_60411);
}));
} else {
}

return this$__$1;
}));

(datascript.impl.entity.Entity.prototype.logseq$outliner$tree$INode$_del$arity$3 = (function (this$,_STAR_txs_state,db){
var this$__$1 = this;
if(logseq.outliner.datascript.outliner_txs_state_QMARK_(_STAR_txs_state)){
} else {
throw (new Error((""+"Assert failed: "+"db should be satisfied outliner-tx-state?"+"\n"+"(ds/outliner-txs-state? *txs-state)")));
}

var block_id = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(this$__$1);
var block = (function (){var G__59828 = db;
var G__59829 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59828,G__59829) : datascript.core.entity.call(null,G__59828,G__59829));
})();
if(cljs.core.truth_((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.page_QMARK_.call(null,block)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_txs_state,cljs.core.concat,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","parent","block/parent",-918309064)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","order","block/order",-1429282437)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","page","block/page",822314108)], null)], null));
} else {
var ids = cljs.core.cons(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(this$__$1),(function (){var G__59830 = db;
var G__59831 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (logseq.db.get_block_full_children_ids.cljs$core$IFn$_invoke$arity$2 ? logseq.db.get_block_full_children_ids.cljs$core$IFn$_invoke$arity$2(G__59830,G__59831) : logseq.db.get_block_full_children_ids.call(null,G__59830,G__59831));
})());
var txs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),id], null);
}),ids);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_txs_state,cljs.core.concat,txs);

return block_id;
}
}));
logseq.outliner.core.assoc_level_aux = (function logseq$outliner$core$assoc_level_aux(tree_vec,children_key,init_level){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,children_key);
var children_SINGLEQUOTE_ = (function (){var G__59834 = children;
var G__59835 = children_key;
var G__59836 = (init_level + (1));
return (logseq.outliner.core.assoc_level_aux.cljs$core$IFn$_invoke$arity$3 ? logseq.outliner.core.assoc_level_aux.cljs$core$IFn$_invoke$arity$3(G__59834,G__59835,G__59836) : logseq.outliner.core.assoc_level_aux.call(null,G__59834,G__59835,G__59836));
})();
var G__59837 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","level","block/level",1182509971),init_level);
if(cljs.core.seq(children_SINGLEQUOTE_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59837,children_key,children_SINGLEQUOTE_);
} else {
return G__59837;
}
}),tree_vec);
});
logseq.outliner.core.assoc_level = (function logseq$outliner$core$assoc_level(children_key,tree_vec){
return logseq.outliner.core.assoc_level_aux(tree_vec,children_key,(1));
});
logseq.outliner.core.assign_temp_id = (function logseq$outliner$core$assign_temp_id(blocks,target_block,replace_empty_target_QMARK_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,block){
var replacing_block_QMARK_ = (function (){var and__5140__auto__ = replace_empty_target_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (idx === (0));
} else {
return and__5140__auto__;
}
})();
var db_id = (function (){var or__5142__auto__ = (cljs.core.truth_(new cljs.core.Keyword("block.temp","use-old-db-id?","block.temp/use-old-db-id?",-604106713).cljs$core$IFn$_invoke$arity$1(block))?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((- idx) - (1));
}
})();
if(cljs.core.truth_(replacing_block_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(block,new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target_block)], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("db","id","db/id",-1388397098),db_id)], null);
}
}),blocks));
});
logseq.outliner.core.get_id = (function logseq$outliner$core$get_id(x){
if(cljs.core.map_QMARK_(x)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;

}
}
});
logseq.outliner.core.compute_block_parent = (function logseq$outliner$core$compute_block_parent(block,parent,target_block,top_level_QMARK_,sibling_QMARK_,get_new_id,outliner_op,replace_empty_target_QMARK_,idx){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),null,new cljs.core.Keyword(null,"paste","paste",1975741548),null], null), null),outliner_op);
if(and__5140__auto__){
var and__5140__auto____$1 = replace_empty_target_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return ((clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(target_block))) && ((idx === (0))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return logseq.outliner.core.get_id(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block));
} else {
if(cljs.core.truth_(top_level_QMARK_)){
if(cljs.core.truth_(sibling_QMARK_)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block));
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block);
}
} else {
return (get_new_id.cljs$core$IFn$_invoke$arity$2 ? get_new_id.cljs$core$IFn$_invoke$arity$2(block,parent) : get_new_id.call(null,block,parent));

}
}
});
/**
 * Converts a `tree-vec` to blocks with `:block/level`.
 *   A `tree-vec` example:
 *   [{:id 1, :children [{:id 2,
 *                     :children [{:id 3}]}]}
 * {:id 4, :children [{:id 5}
 *                    {:id 6}]}]
 */
logseq.outliner.core.tree_vec_flatten = (function logseq$outliner$core$tree_vec_flatten(var_args){
var G__59845 = arguments.length;
switch (G__59845) {
case 1:
return logseq.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$1 = (function (tree_vec){
return logseq.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$2(tree_vec,new cljs.core.Keyword(null,"children","children",-940561982));
}));

(logseq.outliner.core.tree_vec_flatten.cljs$core$IFn$_invoke$arity$2 = (function (tree_vec,children_key){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59841_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59841_SHARP_,new cljs.core.Keyword("block","children","block/children",-1040716209));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__59840_SHARP_){
return cljs.core.tree_seq(cljs.core.map_QMARK_,children_key,p1__59840_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.outliner.core.assoc_level(children_key,tree_vec)], 0)));
}));

(logseq.outliner.core.tree_vec_flatten.cljs$lang$maxFixedArity = 2);

/**
 * Save the `block`.
 */
logseq.outliner.core.save_block = (function logseq$outliner$core$save_block(db,block,opts){
if(cljs.core.map_QMARK_(block)){
} else {
throw (new Error("Assert failed: (map? block)"));
}

var eid = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
} else {
return null;
}
}
})();
if((eid == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Block eid doesn't exist",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"block","block",664686210),block], null));
} else {
}

var temp__5825__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid));
if(cljs.core.truth_(temp__5825__auto__)){
var entity = temp__5825__auto__;
if(cljs.core.truth_(logseq.outliner.validate.built_in_entity_QMARK_(entity))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Built-in nodes can't be modified",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Built-in nodes can't be modified",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
} else {
}

var _STAR_txs_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var block_SINGLEQUOTE_ = ((datascript.impl.entity.entity_QMARK_(block))?block:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity,block], 0)));
logseq.outliner.tree._save(block_SINGLEQUOTE_,_STAR_txs_state,db,opts);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.deref(_STAR_txs_state)], null);
} else {
return null;
}
});
/**
 * Get `node`'s right siblings.
 */
logseq.outliner.core.get_right_siblings = (function logseq$outliner$core$get_right_siblings(node){
var temp__5825__auto__ = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5825__auto__)){
var parent = temp__5825__auto__;
var children = logseq.db.sort_by_order(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(parent));
return cljs.core.rest(cljs.core.last(cljs.core.split_with((function (p1__59850_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__59850_SHARP_));
}),children)));
} else {
return null;
}
});
logseq.outliner.core.blocks_with_ordered_list_props = (function logseq$outliner$core$blocks_with_ordered_list_props(blocks,target_block,sibling_QMARK_){
var target_block__$1 = (cljs.core.truth_(sibling_QMARK_)?target_block:(cljs.core.truth_(target_block)?logseq.db.get_down(target_block):null));
var list_type_fn = (function (block){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property","order-list-type","logseq.property/order-list-type",607817111).cljs$core$IFn$_invoke$arity$1(block));
});
var temp__5823__auto__ = (function (){var and__5140__auto__ = target_block__$1;
if(cljs.core.truth_(and__5140__auto__)){
return list_type_fn(target_block__$1);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var list_type = temp__5823__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
var list_QMARK__SINGLEQUOTE_ = (((!((new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block) == null)))) && ((list_type_fn(block) == null)));
var G__59853 = block;
if(list_QMARK__SINGLEQUOTE_){
return (function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,new cljs.core.Keyword("logseq.property","order-list-type","logseq.property/order-list-type",607817111),list_type);
})(G__59853);
} else {
return G__59853;
}
}),blocks);
} else {
return blocks;
}
});
logseq.outliner.core.get_block_orders = (function logseq$outliner$core$get_block_orders(blocks,target_block,sibling_QMARK_,keep_block_order_QMARK_){
var target_order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target_block);
var start_order = (cljs.core.truth_(sibling_QMARK_)?target_order:null);
var end_order = (cljs.core.truth_(sibling_QMARK_)?new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(logseq.db.get_right_sibling(target_block)):(function (){var first_child = logseq.db.get_down(target_block);
return new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(first_child);
})());
var top_level_QMARK_ = (function (p1__59855_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(p1__59855_SHARP_));
});
var at_target_QMARK_ = (function (order){
return (((((start_order == null)) || ((cljs.core.compare(order,start_order) > (0))))) && ((((end_order == null)) || ((cljs.core.compare(order,end_order) < (0))))));
});
if(cljs.core.truth_((function (){var and__5140__auto__ = keep_block_order_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.every_QMARK_(new cljs.core.Keyword("block","order","block/order",-1429282437),blocks);
} else {
return and__5140__auto__;
}
})())){
var top_level_blocks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(top_level_QMARK_,blocks);
if(cljs.core.every_QMARK_(at_target_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),top_level_blocks))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),blocks);
} else {
var top_level_orders = logseq.db.common.order.gen_n_keys(cljs.core.count(top_level_blocks),start_order,end_order);
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__59857,block){
var vec__59858 = p__59857;
var orders = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59858,(0),null);
var top_level_orders__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59858,(1),null);
if(top_level_QMARK_(block)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(orders,cljs.core.first(top_level_orders__$1)),cljs.core.rest(top_level_orders__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(orders,new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block)),top_level_orders__$1], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,top_level_orders], null),blocks));
}
} else {
return logseq.db.common.order.gen_n_keys(cljs.core.count(blocks),start_order,end_order);
}
});
logseq.outliner.core.update_property_ref_when_paste = (function logseq$outliner$core$update_property_ref_when_paste(block,uuids){
var id_lookup = (function (v){
return ((cljs.core.vector_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(v))));
});
var resolve_id = (function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.get.cljs$core$IFn$_invoke$arity$3(uuids,cljs.core.last(v),cljs.core.last(v))], null);
});
return cljs.core.reduce_kv((function (r,k,v){
var v_SINGLEQUOTE_ = ((id_lookup(v))?resolve_id(v):((((cljs.core.coll_QMARK_(v)) && (cljs.core.every_QMARK_(id_lookup,v))))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve_id,v):v
));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,v_SINGLEQUOTE_);
}),cljs.core.PersistentArrayMap.EMPTY,block);
});
logseq.outliner.core.get_target_block_page = (function logseq$outliner$core$get_target_block_page(target_block,sibling_QMARK_){
var or__5142__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(target_block));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (cljs.core.truth_(sibling_QMARK_)?(function (){var temp__5825__auto__ = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block);
if(cljs.core.truth_(temp__5825__auto__)){
var parent = temp__5825__auto__;
if(cljs.core.truth_((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(parent) : logseq.db.page_QMARK_.call(null,parent)))){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent);
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block);
}
}
});
logseq.outliner.core.build_insert_block_tx = (function logseq$outliner$core$build_insert_block_tx(db,block,result_STAR_,p__59862){
var map__59863 = p__59862;
var map__59863__$1 = cljs.core.__destructure_map(map__59863);
var uuid_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59863__$1,new cljs.core.Keyword(null,"uuid'","uuid'",-861601579));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59863__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59863__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var target_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59863__$1,new cljs.core.Keyword(null,"target-page","target-page",-920102649));
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59863__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
var page_QMARK_ = (function (){var or__5142__auto__ = (logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.page_QMARK_.call(null,block));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block);
}
})();
var existing_page = (cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paste","paste",1975741548),outliner_op);
if(and__5140__auto__){
return new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block);
} else {
return and__5140__auto__;
}
})())?logseq.db.get_page(db,new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(block)):null);
if(cljs.core.truth_(existing_page)){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid_SINGLEQUOTE_,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent,new cljs.core.Keyword("block","order","block/order",-1429282437),order,new cljs.core.Keyword("block","page","block/page",822314108),target_page,new cljs.core.Keyword("block","title","block/title",710445684),"",new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("block","created-at","block/created-at",1440015).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","link","block/link",-1872399993),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(existing_page)], null);
} else {
var G__59864 = result_STAR_;
var G__59864__$1 = ((cljs.core.not(page_QMARK_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59864,new cljs.core.Keyword("block","page","block/page",822314108),target_page):G__59864);
if(cljs.core.truth_(page_QMARK_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59864__$1,new cljs.core.Keyword("block","page","block/page",822314108));
} else {
return G__59864__$1;
}
}
});
logseq.outliner.core.build_insert_blocks_tx = (function logseq$outliner$core$build_insert_blocks_tx(db,target_block,blocks,uuids,get_new_id,p__59865){
var map__59866 = p__59865;
var map__59866__$1 = cljs.core.__destructure_map(map__59866);
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59866__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59866__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59866__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var insert_template_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59866__$1,new cljs.core.Keyword(null,"insert-template?","insert-template?",-583901597));
var keep_block_order_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59866__$1,new cljs.core.Keyword(null,"keep-block-order?","keep-block-order?",1077761724));
var block_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks));
var target_page = logseq.outliner.core.get_target_block_page(target_block,sibling_QMARK_);
var orders = logseq.outliner.core.get_block_orders(blocks,target_block,sibling_QMARK_,keep_block_order_QMARK_);
var batch_uuids = cljs.core.set(cljs.core.vals(uuids));
var db__$1 = db;
var idx = (0);
var blocks__$1 = blocks;
var entries = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5823__auto__ = cljs.core.first(blocks__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var map__59879 = temp__5823__auto__;
var map__59879__$1 = cljs.core.__destructure_map(map__59879);
var block = map__59879__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59879__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuids,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block));
if(cljs.core.truth_(temp__5823__auto____$1)){
var uuid_SINGLEQUOTE_ = temp__5823__auto____$1;
var map__59880 = logseq.outliner.core.resolve_page_refs.cljs$core$IFn$_invoke$arity$3(db__$1,logseq.outliner.core.remove_disallowed_inline_classes(db__$1,block),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"batch-uuids","batch-uuids",2027175720),batch_uuids], null));
var map__59880__$1 = cljs.core.__destructure_map(map__59880);
var block__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59880__$1,new cljs.core.Keyword(null,"block","block",664686210));
var page_txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59880__$1,new cljs.core.Keyword(null,"page-txs","page-txs",-30929875));
var top_level_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block__$1),(1));
var parent__$1 = logseq.outliner.core.compute_block_parent(block__$1,parent,target_block,top_level_QMARK_,sibling_QMARK_,get_new_id,outliner_op,replace_empty_target_QMARK_,idx);
var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(orders,idx);
var _ = (cljs.core.truth_((function (){var and__5140__auto__ = parent__$1;
if(cljs.core.truth_(and__5140__auto__)){
return order;
} else {
return and__5140__auto__;
}
})())?null:(function(){throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Parent or order is nil: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),parent__$1,new cljs.core.Keyword(null,"order","order",-1254677256),order], null))))+"\n"+"(and parent order)")))})());
var template_ref_block_ids = (cljs.core.truth_(insert_template_QMARK_)?(function (){var temp__5825__auto__ = (function (){var G__59881 = db__$1;
var G__59882 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59881,G__59882) : datascript.core.entity.call(null,G__59881,G__59882));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var block__$2 = temp__5825__auto__;
var ref_ids = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block__$2)));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block__$2)]),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(block_ids,ref_ids));
} else {
return null;
}
})():null);
var m = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid_SINGLEQUOTE_,new cljs.core.Keyword("block","parent","block/parent",-918309064),parent__$1,new cljs.core.Keyword("block","order","block/order",-1429282437),order], null);
var result_STAR_ = cljs.core.update.cljs$core$IFn$_invoke$arity$3(((datascript.impl.entity.entity_QMARK_(block__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("block","level","block/level",1182509971),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block__$1)):cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$1,m], 0))),new cljs.core.Keyword("block","title","block/title",710445684),((function (db__$1,idx,blocks__$1,entries,map__59880,map__59880__$1,block__$1,page_txs,top_level_QMARK_,parent__$1,order,_,template_ref_block_ids,m,uuid_SINGLEQUOTE_,temp__5823__auto____$1,map__59879,map__59879__$1,block,parent,temp__5823__auto__,block_ids,target_page,orders,batch_uuids,map__59866,map__59866__$1,sibling_QMARK_,outliner_op,replace_empty_target_QMARK_,insert_template_QMARK_,keep_block_order_QMARK_){
return (function (value){
if(cljs.core.seq(template_ref_block_ids)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (db__$1,idx,blocks__$1,entries,map__59880,map__59880__$1,block__$1,page_txs,top_level_QMARK_,parent__$1,order,_,template_ref_block_ids,m,uuid_SINGLEQUOTE_,temp__5823__auto____$1,map__59879,map__59879__$1,block,parent,temp__5823__auto__,block_ids,target_page,orders,batch_uuids,map__59866,map__59866__$1,sibling_QMARK_,outliner_op,replace_empty_target_QMARK_,insert_template_QMARK_,keep_block_order_QMARK_){
return (function (value__$1,id){
return clojure.string.replace(value__$1,logseq.common.util.page_ref.__GT_page_ref(id),logseq.common.util.page_ref.__GT_page_ref((uuids.cljs$core$IFn$_invoke$arity$1 ? uuids.cljs$core$IFn$_invoke$arity$1(id) : uuids.call(null,id))));
});})(db__$1,idx,blocks__$1,entries,map__59880,map__59880__$1,block__$1,page_txs,top_level_QMARK_,parent__$1,order,_,template_ref_block_ids,m,uuid_SINGLEQUOTE_,temp__5823__auto____$1,map__59879,map__59879__$1,block,parent,temp__5823__auto__,block_ids,target_page,orders,batch_uuids,map__59866,map__59866__$1,sibling_QMARK_,outliner_op,replace_empty_target_QMARK_,insert_template_QMARK_,keep_block_order_QMARK_))
,value,template_ref_block_ids);
} else {
return value;
}
});})(db__$1,idx,blocks__$1,entries,map__59880,map__59880__$1,block__$1,page_txs,top_level_QMARK_,parent__$1,order,_,template_ref_block_ids,m,uuid_SINGLEQUOTE_,temp__5823__auto____$1,map__59879,map__59879__$1,block,parent,temp__5823__auto__,block_ids,target_page,orders,batch_uuids,map__59866,map__59866__$1,sibling_QMARK_,outliner_op,replace_empty_target_QMARK_,insert_template_QMARK_,keep_block_order_QMARK_))
);
var result_STAR___$1 = (cljs.core.truth_(new cljs.core.Keyword("block.temp","use-old-db-id?","block.temp/use-old-db-id?",-604106713).cljs$core$IFn$_invoke$arity$1(result_STAR_))?result_STAR_:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(result_STAR_,new cljs.core.Keyword("db","id","db/id",-1388397098)));
var result = logseq.outliner.core.build_insert_block_tx(db__$1,block__$1,result_STAR___$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid'","uuid'",-861601579),uuid_SINGLEQUOTE_,new cljs.core.Keyword(null,"parent","parent",-878878779),parent__$1,new cljs.core.Keyword(null,"order","order",-1254677256),order,new cljs.core.Keyword(null,"target-page","target-page",-920102649),target_page,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),outliner_op], null));
var G__60433 = ((cljs.core.seq(page_txs))?new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1((datascript.core.with$.cljs$core$IFn$_invoke$arity$2 ? datascript.core.with$.cljs$core$IFn$_invoke$arity$2(db__$1,page_txs) : datascript.core.with$.call(null,db__$1,page_txs))):db__$1);
var G__60434 = (idx + (1));
var G__60435 = cljs.core.rest(blocks__$1);
var G__60436 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entries,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.core.update_property_ref_when_paste(result,uuids),page_txs], null));
db__$1 = G__60433;
idx = G__60434;
blocks__$1 = G__60435;
entries = G__60436;
continue;
} else {
var G__60437 = db__$1;
var G__60438 = (idx + (1));
var G__60439 = cljs.core.rest(blocks__$1);
var G__60440 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entries,null);
db__$1 = G__60437;
idx = G__60438;
blocks__$1 = G__60439;
entries = G__60440;
continue;
}
} else {
return entries;
}
break;
}
});
/**
 * Keep a uuid when insert is restoring identity.
 *   Paste remints live (non-recycled) uuids so copied trees cannot reparent
 *   existing children. Non-paste keep-uuid inserts, including undo restore,
 *   must reuse live identities.
 */
logseq.outliner.core.uuid_for_insert = (function logseq$outliner$core$uuid_for_insert(db,keep_uuid_QMARK_,outliner_op,block_uuid){
if(cljs.core.truth_((function (){var and__5140__auto__ = keep_uuid_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return block_uuid;
} else {
return and__5140__auto__;
}
})())){
var entity = (function (){var G__59885 = db;
var G__59886 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59885,G__59886) : datascript.core.entity.call(null,G__59885,G__59886));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paste","paste",1975741548),outliner_op);
if(and__5140__auto__){
var and__5140__auto____$1 = entity;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not((logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1(entity) : logseq.db.recycled_QMARK_.call(null,entity)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$0();
} else {
return block_uuid;
}
} else {
return logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$0();
}
});
logseq.outliner.core.insert_blocks_aux = (function logseq$outliner$core$insert_blocks_aux(db,blocks,target_block,p__59893){
var map__59894 = p__59893;
var map__59894__$1 = cljs.core.__destructure_map(map__59894);
var opts = map__59894__$1;
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59894__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var keep_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59894__$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028));
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59894__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
var block_uuids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks);
var uuids = cljs.core.zipmap(block_uuids,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59890_SHARP_){
return logseq.outliner.core.uuid_for_insert(db,keep_uuid_QMARK_,outliner_op,p1__59890_SHARP_);
}),block_uuids));
var uuids__$1 = (cljs.core.truth_(replace_empty_target_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(uuids,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block)):uuids);
var id__GT_new_uuid = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuids__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))], null);
} else {
return null;
}
}),blocks));
var get_new_id = (function (block,lookup){
if(((cljs.core.map_QMARK_(lookup)) || (((cljs.core.vector_QMARK_(lookup)) || (datascript.impl.entity.entity_QMARK_(lookup)))))){
var temp__5825__auto__ = ((((cljs.core.vector_QMARK_(lookup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(lookup),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)))))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuids__$1,cljs.core.last(lookup)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_new_uuid,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(lookup)));
if(cljs.core.truth_(temp__5825__auto__)){
var uuid_SINGLEQUOTE_ = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid_SINGLEQUOTE_], null);
} else {
return null;
}
} else {
if(cljs.core.integer_QMARK_(lookup)){
return lookup;
} else {
throw (new Error((""+"[insert-blocks] illegal lookup: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lookup)+", block: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(block))));

}
}
});
var entries = logseq.outliner.core.build_insert_blocks_tx(db,target_block,blocks,uuids__$1,get_new_id,opts);
var blocks_tx = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,entries);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"blocks-tx","blocks-tx",-1349877329),blocks_tx,new cljs.core.Keyword(null,"page-txs","page-txs",-30929875),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.second,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entries], 0)),new cljs.core.Keyword(null,"id->new-uuid","id->new-uuid",310950620),id__GT_new_uuid,new cljs.core.Keyword(null,"uuid->new-uuid","uuid->new-uuid",202853291),uuids__$1], null);
});
logseq.outliner.core.get_target_block = (function logseq$outliner$core$get_target_block(db,blocks,target_block,p__59896){
var map__59897 = p__59896;
var map__59897__$1 = cljs.core.__destructure_map(map__59897);
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59897__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
var bottom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59897__$1,new cljs.core.Keyword(null,"bottom?","bottom?",-1926481628));
var top_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59897__$1,new cljs.core.Keyword(null,"top?","top?",-1883283796));
var indent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59897__$1,new cljs.core.Keyword(null,"indent?","indent?",1381429379));
var sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59897__$1,new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060));
var up_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59897__$1,new cljs.core.Keyword(null,"up?","up?",77854972));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59897__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var temp__5825__auto__ = (cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block))?(function (){var G__59898 = db;
var G__59899 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59898,G__59899) : datascript.core.entity.call(null,G__59898,G__59899));
})():(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block))?(function (){var G__59901 = db;
var G__59902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block)], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59901,G__59902) : datascript.core.entity.call(null,G__59901,G__59902));
})():null));
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
var linked = new cljs.core.Keyword("block","link","block/link",-1872399993).cljs$core$IFn$_invoke$arity$1(block);
var library_QMARK_ = (logseq.db.library_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.library_QMARK_.cljs$core$IFn$_invoke$arity$1(block) : logseq.db.library_QMARK_.call(null,block));
var up_down_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outliner_op,new cljs.core.Keyword(null,"move-blocks-up-down","move-blocks-up-down",1370411060));
var vec__59903 = ((up_down_QMARK_)?(cljs.core.truth_(sibling_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,sibling_QMARK_], null):(function (){var target = (function (){var or__5142__auto__ = linked;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return block;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = up_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks))),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1((function (){var G__59906 = db;
var G__59907 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(cljs.core.first(blocks)));
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59906,G__59907) : datascript.core.entity.call(null,G__59906,G__59907));
})())),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target))));
} else {
return and__5140__auto__;
}
})())){
return logseq.outliner.core.get_last_child_or_self(db,target);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,false], null);
}
})()):(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outliner_op,new cljs.core.Keyword(null,"indent-outdent-blocks","indent-outdent-blocks",-104352713));
if(and__5140__auto__){
var or__5142__auto__ = cljs.core.not(indent_QMARK_);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto____$1 = indent_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return sibling_QMARK_;
} else {
return and__5140__auto____$1;
}
}
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,sibling_QMARK_], null):((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),null,new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),null], null), null),outliner_op))?(cljs.core.truth_(top_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,false], null):(cljs.core.truth_((function (){var and__5140__auto__ = bottom_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(replace_empty_target_QMARK_);
} else {
return and__5140__auto__;
}
})())?(function (){var temp__5823__auto__ = cljs.core.last(logseq.db.sort_by_order(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(block)));
if(cljs.core.truth_(temp__5823__auto__)){
var last_child = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_child,true], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,false], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,(cljs.core.truth_(library_QMARK_)?false:sibling_QMARK_)], null)
)):(cljs.core.truth_(linked)?logseq.outliner.core.get_last_child_or_self(db,linked):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block,sibling_QMARK_], null)
))));
var block__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59903,(0),null);
var sibling_QMARK___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59903,(1),null);
var block__$2 = ((datascript.impl.entity.entity_QMARK_(block__$1))?block__$1:(function (){var G__59908 = db;
var G__59909 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59908,G__59909) : datascript.core.entity.call(null,G__59908,G__59909));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [block__$2,sibling_QMARK___$1], null);
} else {
return null;
}
});
/**
 * Calculate `:block/level` for all the `blocks`. Blocks should be sorted already.
 */
logseq.outliner.core.blocks_with_level = (function logseq$outliner$core$blocks_with_level(blocks){
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

var blocks__$1 = ((cljs.core.sequential_QMARK_(blocks))?blocks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [blocks], null));
var root = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(blocks__$1),new cljs.core.Keyword("block","level","block/level",1182509971),(1));
var result = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root], null);
var id__GT_level = (function (){var G__59918 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59918,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root),(1));
} else {
return G__59918;
}
})();
var uuid__GT_level = (function (){var G__59919 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59919,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(root),(1));
} else {
return G__59919;
}
})();
var blocks__$2 = cljs.core.rest(blocks__$1);
while(true){
if(cljs.core.empty_QMARK_(blocks__$2)){
return result;
} else {
var block = cljs.core.first(blocks__$2);
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
var parent_level = ((cljs.core.map_QMARK_(parent))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_level,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent)):((cljs.core.vector_QMARK_(parent))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(uuid__GT_level,cljs.core.second(parent)):null));
var level = (cljs.core.truth_(parent_level)?(parent_level + (1)):(1));
var block_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","level","block/level",1182509971),level);
var G__60449 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,block_SINGLEQUOTE_);
var G__60450 = (function (){var G__59921 = id__GT_level;
if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59921,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_),level);
} else {
return G__59921;
}
})();
var G__60451 = (function (){var G__59922 = uuid__GT_level;
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59922,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_),level);
} else {
return G__59922;
}
})();
var G__60452 = cljs.core.rest(blocks__$2);
result = G__60449;
id__GT_level = G__60450;
uuid__GT_level = G__60451;
blocks__$2 = G__60452;
continue;
}
break;
}
});
/**
 * URL-type property values are leaves; they must not have child blocks.
 */
logseq.outliner.core.url_property_value_QMARK_ = (function logseq$outliner$core$url_property_value_QMARK_(block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block)));
});
/**
 * A property's :logseq.property/default-value block is a leaf.
 */
logseq.outliner.core.default_value_block_QMARK_ = (function logseq$outliner$core$default_value_block_QMARK_(block){
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block);
var default$ = new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662).cljs$core$IFn$_invoke$arity$1(parent);
return cljs.core.boolean$((function (){var and__5140__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = default$;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(default$));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})());
});
/**
 * True when insertion or movement would create a URL child or a single-value sibling.
 */
logseq.outliner.core.url_property_value_forbidden_target_QMARK_ = (function logseq$outliner$core$url_property_value_forbidden_target_QMARK_(target_block,sibling_QMARK_){
var or__5142__auto__ = ((logseq.outliner.core.url_property_value_QMARK_(target_block)) && (((cljs.core.not(sibling_QMARK_)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(target_block)))))));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = sibling_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return logseq.outliner.core.url_property_value_QMARK_(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block));
} else {
return and__5140__auto__;
}
}
});
/**
 * True when insertion or movement would create a child of a leaf property value
 *   (URL values and property default-value blocks).
 */
logseq.outliner.core.leaf_property_value_forbidden_target_QMARK_ = (function logseq$outliner$core$leaf_property_value_forbidden_target_QMARK_(target_block,sibling_QMARK_){
var or__5142__auto__ = logseq.outliner.core.url_property_value_forbidden_target_QMARK_(target_block,sibling_QMARK_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = logseq.outliner.core.default_value_block_QMARK_(target_block);
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var and__5140__auto__ = sibling_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return logseq.outliner.core.default_value_block_QMARK_(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block));
} else {
return and__5140__auto__;
}
}
}
});
logseq.outliner.core.insert_history_blocks = (function logseq$outliner$core$insert_history_blocks(blocks,page_txs,id__GT_new_uuid){
var pages = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (pages,tx){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(tx);
if(and__5140__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(tx);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(pages,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(tx),cljs.core.merge,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tx,new cljs.core.Keyword("db","id","db/id",-1388397098)));
} else {
return pages;
}
}),cljs.core.PersistentArrayMap.EMPTY,page_txs);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
var G__59937 = block;
if(cljs.core.seq(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(block))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59937,new cljs.core.Keyword("block","refs","block/refs",-1214495349),(function (refs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ref){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pages,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref));
if(cljs.core.truth_(temp__5823__auto__)){
var page = temp__5823__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page,ref], 0));
} else {
return ref;
}
}),refs);
}));
} else {
return G__59937;
}
}),clojure.walk.prewalk((function (value){
if(datascript.impl.entity.entity_QMARK_(value)){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(id__GT_new_uuid,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value));
if(cljs.core.truth_(temp__5823__auto__)){
var uuid_SINGLEQUOTE_ = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid_SINGLEQUOTE_], null);
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
}
} else {
return value;
}
}),blocks));
});
logseq.outliner.core.resolve_created_from_property = (function logseq$outliner$core$resolve_created_from_property(db,created_from_property){
if(datascript.impl.entity.entity_QMARK_(created_from_property)){
return created_from_property;
} else {
if((!((created_from_property == null)))){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,created_from_property) : datascript.core.entity.call(null,db,created_from_property));
} else {
return null;
}
}
});
/**
 * Insert blocks as children (or siblings) of target-node.
 *   Args:
 *  `db`: db
 *  `blocks`: blocks should be sorted already.
 *  `target-block`: where `blocks` will be inserted.
 *  Options:
 *    `sibling?`: as siblings (true) or children (false).
 *    `bottom?`: inserts block to the bottom.
 *    `top?`: inserts block to the top.
 *    `keep-uuid?`: whether to replace `:block/uuid` from the parameter `blocks`.
 *                  For example, if `blocks` are from internal copy, the uuids
 *                  need to be changed, but there's no need for internal cut or drag & drop.
 *                  On paste, live (non-recycled) uuids are still reminted so
 *                  copied trees cannot move existing blocks.
 *                  Undo restore keeps live uuids.
 *    `keep-block-order?`: whether to replace `:block/order` from the parameter `blocks`.
 *                         A top-level block keeps its order only while that
 *                         order falls at `target-block`.
 *    `outliner-op`: what's the current outliner operation.
 *    `created-from-property`: property ident/ref used to restore a deleted property
 *                             value as a property value instead of a child block.
 *    `replace-empty-target?`: If the `target-block` is an empty block, whether
 *                             to replace it, it defaults to be `false`.
 *    `update-timestamps?`: whether to update `blocks` timestamps.
 *  ``
 */
logseq.outliner.core.insert_blocks = (function logseq$outliner$core$insert_blocks(db,blocks,target_block,p__59958){
var map__59959 = p__59958;
var map__59959__$1 = cljs.core.__destructure_map(map__59959);
var opts = map__59959__$1;
var update_timestamps_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59959__$1,new cljs.core.Keyword(null,"update-timestamps?","update-timestamps?",-2028869223),true);
var keep_block_order_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59959__$1,new cljs.core.Keyword(null,"keep-block-order?","keep-block-order?",1077761724));
var keep_uuid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59959__$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028));
var _sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59959__$1,new cljs.core.Keyword(null,"_sibling?","_sibling?",1875730144));
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59959__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
var insert_template_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59959__$1,new cljs.core.Keyword(null,"insert-template?","insert-template?",-583901597));
var replace_empty_target_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59959__$1,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440));
var created_from_property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59959__$1,new cljs.core.Keyword(null,"created-from-property","created-from-property",-1952326387));
var outliner_real_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59959__$1,new cljs.core.Keyword(null,"outliner-real-op","outliner-real-op",1093934358));
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(logseq.outliner.core.block_map_or_entity,target_block))){
var blocks__$1 = (function (){var G__59963 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (b){
var temp__5823__auto__ = (function (){var or__5142__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var eid = temp__5823__auto__;
var b_SINGLEQUOTE_ = (function (){var temp__5823__auto____$1 = ((datascript.impl.entity.entity_QMARK_(b))?b:(datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,eid) : datascript.core.entity.call(null,db,eid)));
if(cljs.core.truth_(temp__5823__auto____$1)){
var e = temp__5823__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,e),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("block","title","block/title",710445684),(function (){var or__5142__auto__ = new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(e);
}
})()], null),b], 0));
} else {
return b;
}
})();
var dissoc_keys = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","tx-id","block/tx-id",547556161)], null),((((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paste","paste",1975741548),null,new cljs.core.Keyword(null,"insert-template-blocks","insert-template-blocks",1838351349),null], null), null),outliner_op)) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paste-text","paste-text",103138595),null], null), null),outliner_real_op))))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","refs","block/refs",-1214495349)], null):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,b_SINGLEQUOTE_,dissoc_keys);
} else {
return b;
}
}),blocks);
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outliner_op,new cljs.core.Keyword(null,"paste","paste",1975741548));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return insert_template_QMARK_;
}
})())){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.asset_QMARK_,G__59963);
} else {
return G__59963;
}
})();
var vec__59960 = logseq.outliner.core.get_target_block(db,blocks__$1,target_block,opts);
var target_block__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59960,(0),null);
var sibling_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59960,(1),null);
var _ = (((!((target_block__$1 == null))))?null:(function(){throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Invalid target: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_block__$1)))+"\n"+"(some? target-block)")))})());
var replace_empty_target_QMARK___$1 = (cljs.core.truth_((function (){var and__5140__auto__ = (!((replace_empty_target_QMARK_ == null)));
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(target_block__$1);
if(cljs.core.truth_(and__5140__auto____$1)){
return clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(target_block__$1));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?replace_empty_target_QMARK_:(function (){var and__5140__auto__ = sibling_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(target_block__$1);
if(cljs.core.truth_(and__5140__auto____$1)){
return ((clojure.string.blank_QMARK_(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(target_block__$1))) && ((cljs.core.count(blocks__$1) > (1))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})());
if(((cljs.core.seq(blocks__$1)) && (cljs.core.not(logseq.outliner.core.leaf_property_value_forbidden_target_QMARK_(target_block__$1,sibling_QMARK_))))){
var from_property = new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(target_block__$1);
var paste_as_property_values_QMARK_ = (function (){var and__5140__auto__ = sibling_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = from_property;
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(from_property));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
var blocks_SINGLEQUOTE_ = (function (){var blocks_SINGLEQUOTE_ = logseq.outliner.core.blocks_with_level(blocks__$1);
var G__59970 = logseq.outliner.core.blocks_with_ordered_list_props(blocks_SINGLEQUOTE_,target_block__$1,sibling_QMARK_);
var G__59970__$1 = (cljs.core.truth_(update_timestamps_QMARK_)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__59945_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__59945_SHARP_,new cljs.core.Keyword("block","created-at","block/created-at",1440015),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551)], 0));
}),G__59970):G__59970);
var G__59970__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(logseq.outliner.core.block_with_timestamps,G__59970__$1)
;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outliner_op,new cljs.core.Keyword(null,"paste","paste",1975741548))) && (cljs.core.not(paste_as_property_values_QMARK_)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(block))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267));
} else {
return block;
}
}),G__59970__$2);
} else {
return G__59970__$2;
}
})();
var insert_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"replace-empty-target?","replace-empty-target?",-923732440),replace_empty_target_QMARK___$1,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),keep_uuid_QMARK_,new cljs.core.Keyword(null,"keep-block-order?","keep-block-order?",1077761724),keep_block_order_QMARK_,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),outliner_op,new cljs.core.Keyword(null,"insert-template?","insert-template?",-583901597),insert_template_QMARK_], null);
var map__59968 = logseq.outliner.core.insert_blocks_aux(db,blocks_SINGLEQUOTE_,target_block__$1,insert_opts);
var map__59968__$1 = cljs.core.__destructure_map(map__59968);
var id__GT_new_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59968__$1,new cljs.core.Keyword(null,"id->new-uuid","id->new-uuid",310950620));
var uuid__GT_new_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59968__$1,new cljs.core.Keyword(null,"uuid->new-uuid","uuid->new-uuid",202853291));
var blocks_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59968__$1,new cljs.core.Keyword(null,"blocks-tx","blocks-tx",-1349877329));
var page_txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59968__$1,new cljs.core.Keyword(null,"page-txs","page-txs",-30929875));
if(cljs.core.truth_(cljs.core.some((function (b){
return (((new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(b) == null)) || ((new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(b) == null)));
}),blocks_tx))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid outliner data",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),insert_opts,new cljs.core.Keyword(null,"tx","tx",466630418),cljs.core.vec(blocks_tx),new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.vec(blocks__$1),new cljs.core.Keyword(null,"target-block","target-block",348392017),target_block__$1], null));
} else {
var tx = logseq.outliner.core.assign_temp_id(blocks_tx,target_block__$1,replace_empty_target_QMARK___$1);
var old_db_id_blocks = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block.temp","use-old-db-id?","block.temp/use-old-db-id?",-604106713),tx)));
var uuids_tx = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (uuid_SINGLEQUOTE_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid_SINGLEQUOTE_], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(old_db_id_blocks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),blocks_tx))));
var restore_from_property = (function (){var or__5142__auto__ = (cljs.core.truth_(paste_as_property_values_QMARK_)?from_property:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.outliner.core.resolve_created_from_property(db,created_from_property);
}
})();
var property_values_tx = (cljs.core.truth_(restore_from_property)?(function (){var owner_id = (cljs.core.truth_(sibling_QMARK_)?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block__$1)):new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block__$1));
var top_level_blocks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59947_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("block","level","block/level",1182509971).cljs$core$IFn$_invoke$arity$1(p1__59947_SHARP_));
}),blocks_SINGLEQUOTE_);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (block){
var temp__5825__auto__ = (function (){var or__5142__auto__ = (function (){var G__60000 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (id__GT_new_uuid.cljs$core$IFn$_invoke$arity$1 ? id__GT_new_uuid.cljs$core$IFn$_invoke$arity$1(G__60000) : id__GT_new_uuid.call(null,G__60000));
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var G__60001 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
return (uuid__GT_new_uuid.cljs$core$IFn$_invoke$arity$1 ? uuid__GT_new_uuid.cljs$core$IFn$_invoke$arity$1(G__60001) : uuid__GT_new_uuid.call(null,G__60001));
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
}
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var new_id = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new_id,new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(restore_from_property)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),owner_id,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1((function (){var G__60005 = db;
var G__60006 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(restore_from_property);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60005,G__60006) : datascript.core.entity.call(null,G__60005,G__60006));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new_id], null)], null)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([top_level_blocks], 0));
})():null);
var dest_page_eid = logseq.outliner.core.get_target_block_page(target_block__$1,sibling_QMARK_);
var page_updated_txs = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__59948_SHARP_){
return logseq.outliner.core.page_updated_at_tx(db,p1__59948_SHARP_);
}),cljs.core.cons(dest_page_eid,logseq.outliner.core.live_insert_source_page_eids(db,blocks_SINGLEQUOTE_,dest_page_eid)));
var full_tx = logseq.common.util.concat_without_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_txs,(cljs.core.truth_((function (){var and__5140__auto__ = keep_uuid_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return replace_empty_target_QMARK___$1;
} else {
return and__5140__auto__;
}
})())?cljs.core.rest(uuids_tx):uuids_tx),tx,property_values_tx,page_updated_txs], 0));
var full_tx_SINGLEQUOTE_ = clojure.walk.prewalk((function (f){
if(datascript.impl.entity.entity_QMARK_(f)){
var temp__5823__auto__ = (function (){var G__60013 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(f);
return (id__GT_new_uuid.cljs$core$IFn$_invoke$arity$1 ? id__GT_new_uuid.cljs$core$IFn$_invoke$arity$1(G__60013) : id__GT_new_uuid.call(null,G__60013));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(f);
}
} else {
if(cljs.core.map_QMARK_(f)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword("block","level","block/level",1182509971));
} else {
return f;

}
}
}),full_tx);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),full_tx_SINGLEQUOTE_,new cljs.core.Keyword(null,"blocks","blocks",-610462153),tx,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-ops","outliner-ops",-1565194389),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.core.insert_history_blocks(tx,page_txs,id__GT_new_uuid),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(insert_opts,new cljs.core.Keyword(null,"keep-uuid?","keep-uuid?",528472028),true)], null)], null)], null)], null)], null);
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * The :block/order keys from a root ancestor down to `block`, root-first.
 * Anchored at the root rather than a :block/page, so entities without
 * :block/page (e.g. nested pages) sort alongside ordinary blocks in outline
 * position. Returns nil for property-created blocks.
 */
logseq.outliner.core.outline_order_path = (function logseq$outliner$core$outline_order_path(block){
var block__$1 = block;
var path = cljs.core.List.EMPTY;
while(true){
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813).cljs$core$IFn$_invoke$arity$1(block__$1);
}
})())){
return null;
} else {
if((block__$1 == null)){
return cljs.core.vec(path);
} else {
var G__60467 = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block__$1);
var G__60468 = cljs.core.cons(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block__$1),path);
block__$1 = G__60467;
path = G__60468;
continue;

}
}
break;
}
});
logseq.outliner.core.compare_order_paths = (function logseq$outliner$core$compare_order_paths(path_1,path_2){
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
var G__60469 = cljs.core.next(path_1__$1);
var G__60470 = cljs.core.next(path_2__$1);
path_1__$1 = G__60469;
path_2__$1 = G__60470;
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
logseq.outliner.core.sort_non_consecutive_blocks = (function logseq$outliner$core$sort_non_consecutive_blocks(_db,blocks){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p__60019,p__60020){
var vec__60021 = p__60019;
var path_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60021,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60021,(1),null);
var vec__60024 = p__60020;
var path_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60024,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60024,(1),null);
return logseq.outliner.core.compare_order_paths(path_1,path_2);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (block){
var temp__5825__auto__ = logseq.outliner.core.outline_order_path(block);
if(cljs.core.truth_(temp__5825__auto__)){
var path = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,block], null);
} else {
return null;
}
}),blocks))));
});
logseq.outliner.core.get_top_level_blocks = (function logseq$outliner$core$get_top_level_blocks(top_level_blocks,non_consecutive_QMARK_){
var reversed_QMARK_ = (function (){var and__5140__auto__ = cljs.core.not(non_consecutive_QMARK_);
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(cljs.core.first(top_level_blocks));
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(cljs.core.second(top_level_blocks));
if(cljs.core.truth_(and__5140__auto____$2)){
return (cljs.core.compare(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(cljs.core.first(top_level_blocks)),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(cljs.core.second(top_level_blocks))) > (0));
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(reversed_QMARK_)){
return cljs.core.reverse(top_level_blocks);
} else {
return top_level_blocks;
}
});
logseq.outliner.core.comments_tag_ident = new cljs.core.Keyword("logseq.class","Comments","logseq.class/Comments",255691615);
logseq.outliner.core.comment_tag_ident = new cljs.core.Keyword("logseq.class","Comment","logseq.class/Comment",132306954);
logseq.outliner.core.comments_blocks_property = new cljs.core.Keyword("logseq.property.comments","blocks","logseq.property.comments/blocks",2143956109);
logseq.outliner.core.tagged_with_QMARK_ = (function logseq$outliner$core$tagged_with_QMARK_(block,tag_ident){
return cljs.core.boolean$(cljs.core.some((function (tag){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_ident,(((tag instanceof cljs.core.Keyword))?tag:new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(tag)));
}),new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(block)));
});
logseq.outliner.core.comments_area_QMARK_ = (function logseq$outliner$core$comments_area_QMARK_(block){
return logseq.outliner.core.tagged_with_QMARK_(block,logseq.outliner.core.comments_tag_ident);
});
logseq.outliner.core.comment_block_QMARK_ = (function logseq$outliner$core$comment_block_QMARK_(block){
return ((logseq.outliner.core.tagged_with_QMARK_(block,logseq.outliner.core.comment_tag_ident)) || (logseq.outliner.core.comments_area_QMARK_(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block))));
});
logseq.outliner.core.protected_comment_block_QMARK_ = (function logseq$outliner$core$protected_comment_block_QMARK_(block){
return ((logseq.outliner.core.comments_area_QMARK_(block)) || (logseq.outliner.core.comment_block_QMARK_(block)));
});
logseq.outliner.core.move_source_allowed_for_comments_QMARK_ = (function logseq$outliner$core$move_source_allowed_for_comments_QMARK_(block,sibling_QMARK_){
var and__5140__auto__ = (!(logseq.outliner.core.comment_block_QMARK_(block)));
if(and__5140__auto__){
var or__5142__auto__ = sibling_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!(logseq.outliner.core.comments_area_QMARK_(block)));
}
} else {
return and__5140__auto__;
}
});
logseq.outliner.core.move_target_allowed_for_comments_QMARK_ = (function logseq$outliner$core$move_target_allowed_for_comments_QMARK_(target_block,sibling_QMARK_){
var and__5140__auto__ = (!(logseq.outliner.core.comment_block_QMARK_(target_block)));
if(and__5140__auto__){
var or__5142__auto__ = sibling_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!(logseq.outliner.core.comments_area_QMARK_(target_block)));
}
} else {
return and__5140__auto__;
}
});
logseq.outliner.core.block_subtree_ids = (function logseq$outliner$core$block_subtree_ids(db,block){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)]),(function (){var G__60035 = db;
var G__60036 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (logseq.db.get_block_full_children_ids.cljs$core$IFn$_invoke$arity$2 ? logseq.db.get_block_full_children_ids.cljs$core$IFn$_invoke$arity$2(G__60035,G__60036) : logseq.db.get_block_full_children_ids.call(null,G__60035,G__60036));
})());
});
logseq.outliner.core.datom_value_ids = (function logseq$outliner$core$datom_value_ids(value){
if(cljs.core.set_QMARK_(value)){
return value;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([value]);
}
});
logseq.outliner.core.orphaned_range_comments_areas = (function logseq$outliner$core$orphaned_range_comments_areas(db,deleted_block_ids){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.core.comments_blocks_property,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)))){
var candidate_comments_areas = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__60038_SHARP_){
return cljs.core.contains_QMARK_(deleted_block_ids,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__60038_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.outliner.core.comments_area_QMARK_,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__60037_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__60037_SHARP_) : datascript.core.entity.call(null,db,p1__60037_SHARP_));
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (id){
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),logseq.outliner.core.comments_blocks_property,id);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deleted_block_ids], 0)))))));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (comments_area){
var targets = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),logseq.outliner.core.datom_value_ids(cljs.core.get.cljs$core$IFn$_invoke$arity$2(comments_area,logseq.outliner.core.comments_blocks_property))));
return ((targets) && (cljs.core.every_QMARK_((function (p1__60039_SHARP_){
return cljs.core.contains_QMARK_(deleted_block_ids,p1__60039_SHARP_);
}),targets)));
}),candidate_comments_areas);
} else {
return null;
}
});
/**
 * Delete blocks from the tree.
 */
logseq.outliner.core.delete_blocks = (function logseq$outliner$core$delete_blocks(db,blocks,_opts){
var top_level_blocks = logseq.outliner.core.filter_top_level_blocks.cljs$core$IFn$_invoke$arity$3(db,blocks,logseq.outliner.core.delete_covers_selected_ancestor_QMARK_);
var non_consecutive_QMARK_ = (((cljs.core.count(top_level_blocks) > (1))) && (cljs.core.seq(logseq.db.get_non_consecutive_blocks(db,top_level_blocks))));
var top_level_blocks_STAR_ = logseq.outliner.core.get_top_level_blocks(top_level_blocks,non_consecutive_QMARK_);
var top_level_blocks__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.outliner.validate.built_in_entity_QMARK_,top_level_blocks_STAR_);
var deleted_block_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__60044_SHARP_){
return logseq.outliner.core.block_subtree_ids(db,p1__60044_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([top_level_blocks__$1], 0)));
var orphaned_comments_areas = logseq.outliner.core.orphaned_range_comments_areas(db,deleted_block_ids);
var top_level_blocks__$2 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(top_level_blocks__$1,orphaned_comments_areas);
var txs_state = logseq.outliner.datascript.new_outliner_txs_state();
var block_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(b)], null);
}),top_level_blocks__$2);
var start_block = cljs.core.first(top_level_blocks__$2);
var end_block = cljs.core.last(top_level_blocks__$2);
var delete_one_block_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(top_level_blocks__$2))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_block,end_block)));
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.outliner.validate.built_in_entity_QMARK_,top_level_blocks_STAR_))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Built-in nodes can't be deleted",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Built-in nodes can't be deleted.",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("node","built-in-cant-delete-error","node/built-in-cant-delete-error",372597551),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
} else {
}

if(cljs.core.seq(top_level_blocks__$2)){
var from_property_60480 = new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(start_block);
var default_value_property_QMARK__60481 = (function (){var and__5140__auto__ = new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662).cljs$core$IFn$_invoke$arity$1(from_property_60480);
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(start_block),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662).cljs$core$IFn$_invoke$arity$1(from_property_60480)))) && (cljs.core.not(new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813).cljs$core$IFn$_invoke$arity$1(start_block))));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = delete_one_block_QMARK_;
if(and__5140__auto__){
return default_value_property_QMARK__60481;
} else {
return and__5140__auto__;
}
})())){
var datoms_60482 = datascript.core.datoms.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(from_property_60480),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(start_block));
var tx_data_60483 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(from_property_60480),new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837)]);
}),datoms_60482);
if(cljs.core.seq(tx_data_60483)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(txs_state,cljs.core.concat,tx_data_60483);
} else {
}
} else {
var seq__60053_60486 = cljs.core.seq(block_ids);
var chunk__60054_60487 = null;
var count__60055_60488 = (0);
var i__60056_60489 = (0);
while(true){
if((i__60056_60489 < count__60055_60488)){
var id_60490 = chunk__60054_60487.cljs$core$IIndexed$_nth$arity$2(null,i__60056_60489);
var node_60491 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id_60490) : datascript.core.entity.call(null,db,id_60490));
logseq.outliner.tree._del(node_60491,txs_state,db);


var G__60492 = seq__60053_60486;
var G__60493 = chunk__60054_60487;
var G__60494 = count__60055_60488;
var G__60495 = (i__60056_60489 + (1));
seq__60053_60486 = G__60492;
chunk__60054_60487 = G__60493;
count__60055_60488 = G__60494;
i__60056_60489 = G__60495;
continue;
} else {
var temp__5825__auto___60496 = cljs.core.seq(seq__60053_60486);
if(temp__5825__auto___60496){
var seq__60053_60497__$1 = temp__5825__auto___60496;
if(cljs.core.chunked_seq_QMARK_(seq__60053_60497__$1)){
var c__5673__auto___60498 = cljs.core.chunk_first(seq__60053_60497__$1);
var G__60499 = cljs.core.chunk_rest(seq__60053_60497__$1);
var G__60500 = c__5673__auto___60498;
var G__60501 = cljs.core.count(c__5673__auto___60498);
var G__60502 = (0);
seq__60053_60486 = G__60499;
chunk__60054_60487 = G__60500;
count__60055_60488 = G__60501;
i__60056_60489 = G__60502;
continue;
} else {
var id_60503 = cljs.core.first(seq__60053_60497__$1);
var node_60504 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id_60503) : datascript.core.entity.call(null,db,id_60503));
logseq.outliner.tree._del(node_60504,txs_state,db);


var G__60505 = cljs.core.next(seq__60053_60497__$1);
var G__60506 = null;
var G__60507 = (0);
var G__60508 = (0);
seq__60053_60486 = G__60505;
chunk__60054_60487 = G__60506;
count__60055_60488 = G__60507;
i__60056_60489 = G__60508;
continue;
}
} else {
}
}
break;
}

}

var deleted_ids_60509 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(deleted_block_ids,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098)),orphaned_comments_areas);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(txs_state,cljs.core.into,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(logseq.outliner.core.container_page_eid),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(deleted_ids_60509),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__60051_SHARP_){
return logseq.outliner.core.page_updated_at_tx(db,p1__60051_SHARP_);
}))], 0)),top_level_blocks__$2));
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.deref(txs_state)], null);
});
logseq.outliner.core.move_to_original_position_QMARK_ = (function logseq$outliner$core$move_to_original_position_QMARK_(blocks,target_block,sibling_QMARK_,non_consecutive_blocks_QMARK_){
var block = cljs.core.first(blocks);
var db = target_block.db;
var and__5140__auto__ = cljs.core.not(non_consecutive_blocks_QMARK_);
if(and__5140__auto__){
if(cljs.core.truth_(sibling_QMARK_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(logseq.db.get_left_sibling(block)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(logseq.db.get_first_child(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block))),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block));
}
} else {
return and__5140__auto__;
}
});
logseq.outliner.core.move_block_property_tx = (function logseq$outliner$core$move_block_property_tx(block,target_block,sibling_QMARK_,block_from_property,restore_from_property){
var retract_property_tx = (cljs.core.truth_(block_from_property)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block)),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(block_from_property),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267)], null)], null):null);
var add_property_tx = (cljs.core.truth_(restore_from_property)?(function (){var owner_id = (cljs.core.truth_(sibling_QMARK_)?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block)):new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(restore_from_property)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),owner_id,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(restore_from_property),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)], null)], null);
})():null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(retract_property_tx,add_property_tx);
});
logseq.outliner.core.move_block = (function logseq$outliner$core$move_block(db,block,target_block,sibling_QMARK_,p__60087){
var map__60088 = p__60087;
var map__60088__$1 = cljs.core.__destructure_map(map__60088);
var created_from_property = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60088__$1,new cljs.core.Keyword(null,"created-from-property","created-from-property",-1952326387));
var target_block__$1 = (function (){var G__60089 = db;
var G__60090 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60089,G__60090) : datascript.core.entity.call(null,G__60089,G__60090));
})();
var block__$1 = (function (){var G__60091 = db;
var G__60092 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60091,G__60092) : datascript.core.entity.call(null,G__60091,G__60092));
})();
var target_without_parent_QMARK_ = (function (){var and__5140__auto__ = sibling_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block__$1) == null);
} else {
return and__5140__auto__;
}
})();
var target_from_property = (cljs.core.truth_(sibling_QMARK_)?new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(target_block__$1):null);
var explicit_restore_from_property = logseq.outliner.core.resolve_created_from_property(db,created_from_property);
var restore_from_property = (function (){var or__5142__auto__ = target_from_property;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return explicit_restore_from_property;
}
})();
var new_parent = (cljs.core.truth_(sibling_QMARK_)?new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block__$1):target_block__$1);
var move_disallowed_QMARK_ = (cljs.core.truth_((logseq.db.library_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.library_QMARK_.cljs$core$IFn$_invoke$arity$1(new_parent) : logseq.db.library_QMARK_.call(null,new_parent)))?cljs.core.not((logseq.db.internal_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.internal_page_QMARK_.cljs$core$IFn$_invoke$arity$1(block__$1) : logseq.db.internal_page_QMARK_.call(null,block__$1))):(function (){var and__5140__auto__ = (logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(block__$1) : logseq.db.page_QMARK_.call(null,block__$1));
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(new_parent) : logseq.db.page_QMARK_.call(null,new_parent)));
} else {
return and__5140__auto__;
}
})());
if(cljs.core.truth_((function (){var or__5142__auto__ = target_without_parent_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return move_disallowed_QMARK_;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("not-allowed-move-block-page",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reason","reason",-2070751759),(cljs.core.truth_(target_without_parent_QMARK_)?new cljs.core.Keyword(null,"move-to-target-without-parent","move-to-target-without-parent",-215708794):(cljs.core.truth_((logseq.db.library_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.library_QMARK_.cljs$core$IFn$_invoke$arity$1(new_parent) : logseq.db.library_QMARK_.call(null,new_parent)))?new cljs.core.Keyword(null,"move-to-library","move-to-library",-707370941):new cljs.core.Keyword(null,"move-page-to-be-child-of-block","move-page-to-be-child-of-block",1754294006)
))], null));
} else {
var first_block_page = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block__$1));
var target_page = logseq.outliner.core.get_target_block_page(target_block__$1,sibling_QMARK_);
var not_same_page_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(first_block_page,target_page);
var page_after_move_QMARK_ = (logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(block__$1) : logseq.db.page_QMARK_.call(null,block__$1));
var block_order = (cljs.core.truth_(sibling_QMARK_)?logseq.db.common.order.gen_key(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(target_block__$1),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(logseq.db.get_right_sibling(target_block__$1))):logseq.db.common.order.gen_key(null,new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(logseq.db.get_down(target_block__$1))));
var tx_data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60094 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1),new cljs.core.Keyword("block","parent","block/parent",-918309064),(cljs.core.truth_(sibling_QMARK_)?new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(target_block__$1)):new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block__$1)),new cljs.core.Keyword("block","order","block/order",-1429282437),block_order], null);
if(cljs.core.not(page_after_move_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60094,new cljs.core.Keyword("block","page","block/page",822314108),target_page);
} else {
return G__60094;
}
})()], null);
var children_page_tx = ((((not_same_page_QMARK_) && (cljs.core.not(page_after_move_QMARK_))))?(function (){var children_ids = (function (){var G__60095 = db;
var G__60096 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block__$1);
return (logseq.db.get_block_full_children_ids.cljs$core$IFn$_invoke$arity$2 ? logseq.db.get_block_full_children_ids.cljs$core$IFn$_invoke$arity$2(G__60095,G__60096) : logseq.db.get_block_full_children_ids.call(null,G__60095,G__60096));
})();
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (id){
var child = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
if(cljs.core.truth_((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(child) : logseq.db.page_QMARK_.call(null,child)))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword("block","page","block/page",822314108),target_page], null);
}
}),children_ids);
})():null);
var block_from_property = new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(block__$1);
var property_tx = logseq.outliner.core.move_block_property_tx(block__$1,target_block__$1,sibling_QMARK_,block_from_property,restore_from_property);
var page_updated_txs = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__60086_SHARP_){
return logseq.outliner.core.page_updated_at_tx(db,p1__60086_SHARP_);
}),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.core.container_page_eid(block__$1),target_page], null)));
return logseq.common.util.concat_without_nil.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tx_data,children_page_tx,property_tx,page_updated_txs], 0));
}
});
logseq.outliner.core.transact_move_blocks_BANG_ = (function logseq$outliner$core$transact_move_blocks_BANG_(conn,blocks,target_block,sibling_QMARK_,opts,outliner_op,top_level_blocks){
return logseq.db.batch_transact_with_temp_conn_BANG_(conn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.Keyword(null,"outliner-ops","outliner-ops",-1565194389),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),top_level_blocks),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block),opts], null)], null)], null)], null),(function (conn__$1){
var seq__60100 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(blocks)),blocks));
var chunk__60101 = null;
var count__60102 = (0);
var i__60103 = (0);
while(true){
if((i__60103 < count__60102)){
var vec__60127 = chunk__60101.cljs$core$IIndexed$_nth$arity$2(null,i__60103);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60127,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60127,(1),null);
var first_block_QMARK__60525 = (idx === (0));
var sibling_QMARK__60526__$1 = ((first_block_QMARK__60525)?sibling_QMARK_:true);
var target_block_60527__$1 = ((first_block_QMARK__60525)?target_block:(function (){var G__60132 = cljs.core.deref(conn__$1);
var G__60133 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,(idx - (1))));
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60132,G__60133) : datascript.core.entity.call(null,G__60132,G__60133));
})());
var block_60528__$1 = (function (){var G__60134 = cljs.core.deref(conn__$1);
var G__60135 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60134,G__60135) : datascript.core.entity.call(null,G__60134,G__60135));
})();
if(logseq.outliner.core.move_to_original_position_QMARK_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_60528__$1], null),target_block_60527__$1,sibling_QMARK__60526__$1,false)){
} else {
var tx_data_60529 = logseq.outliner.core.move_block(cljs.core.deref(conn__$1),block_60528__$1,target_block_60527__$1,sibling_QMARK__60526__$1,opts);
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn__$1,tx_data_60529,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__60526__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),(function (){var or__5142__auto__ = outliner_op;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999);
}
})()], null));
}


var G__60531 = seq__60100;
var G__60532 = chunk__60101;
var G__60533 = count__60102;
var G__60534 = (i__60103 + (1));
seq__60100 = G__60531;
chunk__60101 = G__60532;
count__60102 = G__60533;
i__60103 = G__60534;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__60100);
if(temp__5825__auto__){
var seq__60100__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60100__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__60100__$1);
var G__60536 = cljs.core.chunk_rest(seq__60100__$1);
var G__60537 = c__5673__auto__;
var G__60538 = cljs.core.count(c__5673__auto__);
var G__60539 = (0);
seq__60100 = G__60536;
chunk__60101 = G__60537;
count__60102 = G__60538;
i__60103 = G__60539;
continue;
} else {
var vec__60139 = cljs.core.first(seq__60100__$1);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60139,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60139,(1),null);
var first_block_QMARK__60540 = (idx === (0));
var sibling_QMARK__60541__$1 = ((first_block_QMARK__60540)?sibling_QMARK_:true);
var target_block_60542__$1 = ((first_block_QMARK__60540)?target_block:(function (){var G__60142 = cljs.core.deref(conn__$1);
var G__60143 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(blocks,(idx - (1))));
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60142,G__60143) : datascript.core.entity.call(null,G__60142,G__60143));
})());
var block_60543__$1 = (function (){var G__60144 = cljs.core.deref(conn__$1);
var G__60145 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60144,G__60145) : datascript.core.entity.call(null,G__60144,G__60145));
})();
if(logseq.outliner.core.move_to_original_position_QMARK_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [block_60543__$1], null),target_block_60542__$1,sibling_QMARK__60541__$1,false)){
} else {
var tx_data_60545 = logseq.outliner.core.move_block(cljs.core.deref(conn__$1),block_60543__$1,target_block_60542__$1,sibling_QMARK__60541__$1,opts);
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn__$1,tx_data_60545,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK__60541__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),(function (){var or__5142__auto__ = outliner_op;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999);
}
})()], null));
}


var G__60546 = cljs.core.next(seq__60100__$1);
var G__60547 = null;
var G__60548 = (0);
var G__60549 = (0);
seq__60100 = G__60546;
chunk__60101 = G__60547;
count__60102 = G__60548;
i__60103 = G__60549;
continue;
}
} else {
return null;
}
}
break;
}
}));
});
/**
 * Move `blocks` to `target-block` as siblings or children.
 */
logseq.outliner.core.move_blocks = (function logseq$outliner$core$move_blocks(conn,blocks,target_block,p__60156){
var map__60157 = p__60156;
var map__60157__$1 = cljs.core.__destructure_map(map__60157);
var opts = map__60157__$1;
var _sibling_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60157__$1,new cljs.core.Keyword(null,"_sibling?","_sibling?",1875730144));
var _top_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60157__$1,new cljs.core.Keyword(null,"_top?","_top?",1380223548));
var _bottom_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60157__$1,new cljs.core.Keyword(null,"_bottom?","_bottom?",-1102514721));
var _up_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60157__$1,new cljs.core.Keyword(null,"_up?","_up?",356267002));
var outliner_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60157__$1,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450));
var _indent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60157__$1,new cljs.core.Keyword(null,"_indent?","_indent?",-1442751225));
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(logseq.outliner.core.block_map_or_entity,target_block))){
var seq__60158_60552 = cljs.core.seq(blocks);
var chunk__60159_60553 = null;
var count__60161_60554 = (0);
var i__60163_60555 = (0);
while(true){
if((i__60163_60555 < count__60161_60554)){
var b_60556 = chunk__60159_60553.cljs$core$IIndexed$_nth$arity$2(null,i__60163_60555);
var entity_60557 = (function (){var G__60174 = cljs.core.deref(conn);
var G__60175 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b_60556);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60174,G__60175) : datascript.core.entity.call(null,G__60174,G__60175));
})();
if(cljs.core.truth_(logseq.outliner.validate.built_in_entity_QMARK_(entity_60557))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Built-in nodes can't be modified",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Built-in nodes can't be modified",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
} else {
}


var G__60561 = seq__60158_60552;
var G__60562 = chunk__60159_60553;
var G__60563 = count__60161_60554;
var G__60564 = (i__60163_60555 + (1));
seq__60158_60552 = G__60561;
chunk__60159_60553 = G__60562;
count__60161_60554 = G__60563;
i__60163_60555 = G__60564;
continue;
} else {
var temp__5825__auto___60565 = cljs.core.seq(seq__60158_60552);
if(temp__5825__auto___60565){
var seq__60158_60566__$1 = temp__5825__auto___60565;
if(cljs.core.chunked_seq_QMARK_(seq__60158_60566__$1)){
var c__5673__auto___60567 = cljs.core.chunk_first(seq__60158_60566__$1);
var G__60568 = cljs.core.chunk_rest(seq__60158_60566__$1);
var G__60569 = c__5673__auto___60567;
var G__60570 = cljs.core.count(c__5673__auto___60567);
var G__60571 = (0);
seq__60158_60552 = G__60568;
chunk__60159_60553 = G__60569;
count__60161_60554 = G__60570;
i__60163_60555 = G__60571;
continue;
} else {
var b_60574 = cljs.core.first(seq__60158_60566__$1);
var entity_60575 = (function (){var G__60186 = cljs.core.deref(conn);
var G__60187 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(b_60574);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60186,G__60187) : datascript.core.entity.call(null,G__60186,G__60187));
})();
if(cljs.core.truth_(logseq.outliner.validate.built_in_entity_QMARK_(entity_60575))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Built-in nodes can't be modified",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Built-in nodes can't be modified",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
} else {
}


var G__60576 = cljs.core.next(seq__60158_60566__$1);
var G__60577 = null;
var G__60578 = (0);
var G__60579 = (0);
seq__60158_60552 = G__60576;
chunk__60159_60553 = G__60577;
count__60161_60554 = G__60578;
i__60163_60555 = G__60579;
continue;
}
} else {
}
}
break;
}

var db = cljs.core.deref(conn);
var current_blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
var G__60194 = db;
var G__60195 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60194,G__60195) : datascript.core.entity.call(null,G__60194,G__60195));
}),blocks);
var top_level_blocks = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.outliner.core.comment_block_QMARK_,logseq.outliner.core.filter_top_level_blocks.cljs$core$IFn$_invoke$arity$2(db,current_blocks));
if(cljs.core.seq(top_level_blocks)){
var vec__60202 = logseq.outliner.core.get_target_block(db,top_level_blocks,target_block,opts);
var target_block__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60202,(0),null);
var sibling_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60202,(1),null);
var non_consecutive_QMARK_ = (((cljs.core.count(top_level_blocks) > (1))) && (cljs.core.seq(logseq.db.get_non_consecutive_blocks(db,top_level_blocks))));
var top_level_blocks__$1 = logseq.outliner.core.get_top_level_blocks(top_level_blocks,non_consecutive_QMARK_);
var blocks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block){
if(datascript.impl.entity.entity_QMARK_(block)){
return block;
} else {
var G__60211 = db;
var G__60212 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60211,G__60212) : datascript.core.entity.call(null,G__60211,G__60212));
}
}),((non_consecutive_QMARK_)?logseq.outliner.core.sort_non_consecutive_blocks(db,top_level_blocks__$1):top_level_blocks__$1));
var original_position_QMARK_ = logseq.outliner.core.move_to_original_position_QMARK_(blocks__$1,target_block__$1,sibling_QMARK_,non_consecutive_QMARK_);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.every_QMARK_((function (p1__60149_SHARP_){
return logseq.outliner.core.move_source_allowed_for_comments_QMARK_(p1__60149_SHARP_,sibling_QMARK_);
}),blocks__$1);
if(and__5140__auto__){
var and__5140__auto____$1 = logseq.outliner.core.move_target_allowed_for_comments_QMARK_(target_block__$1,sibling_QMARK_);
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core.not(logseq.outliner.core.leaf_property_value_forbidden_target_QMARK_(target_block__$1,sibling_QMARK_))) && ((((!(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks__$1)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(target_block__$1))))) && ((!(original_position_QMARK_))))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var parents_SINGLEQUOTE_ = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),logseq.db.get_block_parents.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(target_block__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0))));
var move_parents_to_child_QMARK_ = cljs.core.some(parents_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),blocks__$1));
if(cljs.core.truth_(move_parents_to_child_QMARK_)){
return null;
} else {
logseq.outliner.core.transact_move_blocks_BANG_(conn,blocks__$1,target_block__$1,sibling_QMARK_,opts,outliner_op,top_level_blocks__$1);

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
/**
 * The selection's top-level blocks in page order, whatever order they were
 *   clicked in (Ctrl+click c, then b: the selection reads c, b): a move up or
 *   down takes its target from the first block (up) or the last (down).
 */
logseq.outliner.core.page_order_top_level_blocks = (function logseq$outliner$core$page_order_top_level_blocks(db,blocks){
var top_level_blocks = logseq.outliner.core.filter_top_level_blocks.cljs$core$IFn$_invoke$arity$2(db,blocks);
if((cljs.core.count(top_level_blocks) <= (1))){
return top_level_blocks;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.every_QMARK_((function (p1__60223_SHARP_){
return new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(p1__60223_SHARP_);
}),top_level_blocks);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60224_SHARP_){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(p1__60224_SHARP_));
}),top_level_blocks));
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not_any_QMARK_((function (p1__60225_SHARP_){
var or__5142__auto__ = new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(p1__60225_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("block","closed-value-property","block/closed-value-property",1157792813).cljs$core$IFn$_invoke$arity$1(p1__60225_SHARP_);
}
}),top_level_blocks);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return logseq.db.sort_page_random_blocks(db,top_level_blocks);
} else {
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60229_SHARP_){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(p1__60229_SHARP_));
}),top_level_blocks)))){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","order","block/order",-1429282437),top_level_blocks);
} else {
return top_level_blocks;

}
}
}
});
/**
 * Move blocks up/down.
 */
logseq.outliner.core.move_blocks_up_down = (function logseq$outliner$core$move_blocks_up_down(conn,blocks,up_QMARK_){
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

if(cljs.core.boolean_QMARK_(up_QMARK_)){
} else {
throw (new Error("Assert failed: (boolean? up?)"));
}

var db = cljs.core.deref(conn);
var top_level_blocks = logseq.outliner.core.page_order_top_level_blocks(db,blocks);
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks-up-down","move-blocks-up-down",1370411060)], null);
if(cljs.core.truth_(up_QMARK_)){
var first_block = (function (){var G__60238 = db;
var G__60239 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(top_level_blocks));
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60238,G__60239) : datascript.core.entity.call(null,G__60238,G__60239));
})();
var first_block_parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(first_block);
var first_block_left_sibling = logseq.db.get_left_sibling(first_block);
var left_or_parent = (function (){var or__5142__auto__ = first_block_left_sibling;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return first_block_parent;
}
})();
var left_left = (function (){var or__5142__auto__ = logseq.db.get_left_sibling(left_or_parent);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return first_block_parent;
}
})();
var sibling_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(left_left)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(first_block_parent));
if(cljs.core.truth_((function (){var and__5140__auto__ = left_left;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(first_block_parent)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left_left))) && (cljs.core.not((function (){var and__5140__auto____$2 = new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(first_block);
if(cljs.core.truth_(and__5140__auto____$2)){
return (first_block_left_sibling == null);
} else {
return and__5140__auto____$2;
}
})())));
} else {
return and__5140__auto__;
}
})())){
return logseq.outliner.core.move_blocks(conn,top_level_blocks,left_left,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"up?","up?",77854972),up_QMARK_], null)], 0)));
} else {
return null;
}
} else {
var last_top_block = cljs.core.last(top_level_blocks);
var last_top_block_right = logseq.db.get_right_sibling(last_top_block);
var right = (function (){var or__5142__auto__ = last_top_block_right;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(last_top_block);
return logseq.db.get_right_sibling(parent);
}
})();
var sibling_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(last_top_block)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(right)));
if(cljs.core.truth_((function (){var and__5140__auto__ = right;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not((function (){var and__5140__auto____$1 = new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267).cljs$core$IFn$_invoke$arity$1(last_top_block);
if(cljs.core.truth_(and__5140__auto____$1)){
return (last_top_block_right == null);
} else {
return and__5140__auto____$1;
}
})());
} else {
return and__5140__auto__;
}
})())){
return logseq.outliner.core.move_blocks(conn,top_level_blocks,right,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),sibling_QMARK_,new cljs.core.Keyword(null,"up?","up?",77854972),up_QMARK_], null)], 0)));
} else {
return null;
}
}
});
/**
 * Indent or outdent `blocks`.
 */
logseq.outliner.core.indent_outdent_blocks = (function logseq$outliner$core$indent_outdent_blocks(var_args){
var args__5882__auto__ = [];
var len__5876__auto___60586 = arguments.length;
var i__5877__auto___60587 = (0);
while(true){
if((i__5877__auto___60587 < len__5876__auto___60586)){
args__5882__auto__.push((arguments[i__5877__auto___60587]));

var G__60590 = (i__5877__auto___60587 + (1));
i__5877__auto___60587 = G__60590;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return logseq.outliner.core.indent_outdent_blocks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(logseq.outliner.core.indent_outdent_blocks.cljs$core$IFn$_invoke$arity$variadic = (function (conn,blocks,indent_QMARK_,p__60257){
var map__60259 = p__60257;
var map__60259__$1 = cljs.core.__destructure_map(map__60259);
var parent_original = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60259__$1,new cljs.core.Keyword(null,"parent-original","parent-original",1770143972));
var logical_outdenting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60259__$1,new cljs.core.Keyword(null,"logical-outdenting?","logical-outdenting?",538240839));
if(cljs.core.seq(blocks)){
} else {
throw (new Error("Assert failed: (seq blocks)"));
}

if(cljs.core.boolean_QMARK_(indent_QMARK_)){
} else {
throw (new Error("Assert failed: (boolean? indent?)"));
}

var db = cljs.core.deref(conn);
var top_level_blocks = logseq.outliner.core.filter_top_level_blocks.cljs$core$IFn$_invoke$arity$2(db,blocks);
var non_consecutive_QMARK_ = (((cljs.core.count(top_level_blocks) > (1))) && (cljs.core.seq(logseq.db.get_non_consecutive_blocks(cljs.core.deref(conn),top_level_blocks))));
var top_level_blocks__$1 = logseq.outliner.core.get_top_level_blocks(top_level_blocks,non_consecutive_QMARK_);
if(cljs.core.truth_((function (){var or__5142__auto__ = non_consecutive_QMARK_;
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = cljs.core.not(indent_QMARK_);
if(and__5140__auto__){
return cljs.core.some(new cljs.core.Keyword("logseq.property","created-from-property","logseq.property/created-from-property",-861892267),top_level_blocks__$1);
} else {
return and__5140__auto__;
}
}
})())){
return null;
} else {
var first_block = (function (){var G__60272 = db;
var G__60273 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.first(top_level_blocks__$1));
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60272,G__60273) : datascript.core.entity.call(null,G__60272,G__60273));
})();
var left = logseq.db.get_left_sibling(first_block);
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(first_block);
var concat_tx_fn = (function() { 
var G__60595__delegate = function (results){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(logseq.common.util.concat_without_nil,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),results)),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(cljs.core.first(results))], null);
};
var G__60595 = function (var_args){
var results = null;
if (arguments.length > 0) {
var G__60601__i = 0, G__60601__a = new Array(arguments.length -  0);
while (G__60601__i < G__60601__a.length) {G__60601__a[G__60601__i] = arguments[G__60601__i + 0]; ++G__60601__i;}
  results = new cljs.core.IndexedSeq(G__60601__a,0,null);
} 
return G__60595__delegate.call(this,results);};
G__60595.cljs$lang$maxFixedArity = 0;
G__60595.cljs$lang$applyTo = (function (arglist__60602){
var results = cljs.core.seq(arglist__60602);
return G__60595__delegate(results);
});
G__60595.cljs$core$IFn$_invoke$arity$variadic = G__60595__delegate;
return G__60595;
})()
;
var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"indent-outdent-blocks","indent-outdent-blocks",-104352713)], null);
if(cljs.core.truth_(indent_QMARK_)){
if(cljs.core.truth_(left)){
var last_direct_child_id = logseq.db.get_block_last_direct_child_id.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left));
var blocks_SINGLEQUOTE_ = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(b)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left));
}),top_level_blocks__$1);
if(cljs.core.seq(blocks_SINGLEQUOTE_)){
if(cljs.core.truth_(last_direct_child_id)){
var last_direct_child = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,last_direct_child_id) : datascript.core.entity.call(null,db,last_direct_child_id));
var result = logseq.outliner.core.move_blocks(conn,blocks_SINGLEQUOTE_,last_direct_child,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true,new cljs.core.Keyword(null,"indent?","indent?",1381429379),true], null)], 0)));
var collapsed_tx = (cljs.core.truth_(new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991).cljs$core$IFn$_invoke$arity$1(left))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(left),new cljs.core.Keyword("block","collapsed?","block/collapsed?",2140210991),false], null)], null)], null):null);
return concat_tx_fn(result,collapsed_tx);
} else {
return logseq.outliner.core.move_blocks(conn,blocks_SINGLEQUOTE_,left,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false,new cljs.core.Keyword(null,"indent?","indent?",1381429379),true], null)], 0)));
}
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(parent_original)){
var blocks_SINGLEQUOTE_ = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(b)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(parent)));
}),top_level_blocks__$1);
return logseq.outliner.core.move_blocks(conn,blocks_SINGLEQUOTE_,parent_original,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"indent-outdent-blocks","indent-outdent-blocks",-104352713),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true,new cljs.core.Keyword(null,"indent?","indent?",1381429379),false], null)], 0)));
} else {
if(cljs.core.truth_(parent)){
var blocks_SINGLEQUOTE_ = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(b)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(parent)));
}),top_level_blocks__$1);
var result = logseq.outliner.core.move_blocks(conn,blocks_SINGLEQUOTE_,parent,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null)], 0)));
if(cljs.core.truth_(logical_outdenting_QMARK_)){
return result;
} else {
var last_top_block = (function (){var G__60289 = db;
var G__60290 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(cljs.core.last(blocks_SINGLEQUOTE_));
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__60289,G__60290) : datascript.core.entity.call(null,G__60289,G__60290));
})();
var right_siblings = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.outliner.core.protected_comment_block_QMARK_,logseq.outliner.core.get_right_siblings(last_top_block));
if(cljs.core.seq(right_siblings)){
var temp__5823__auto__ = logseq.db.get_block_last_direct_child_id.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(last_top_block));
if(cljs.core.truth_(temp__5823__auto__)){
var last_direct_child_id = temp__5823__auto__;
return logseq.outliner.core.move_blocks(conn,right_siblings,(datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,last_direct_child_id) : datascript.core.entity.call(null,db,last_direct_child_id)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),true], null)], 0)));
} else {
return logseq.outliner.core.move_blocks(conn,right_siblings,last_top_block,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null)], 0)));
}
} else {
return result;
}
}
} else {
return null;
}
}
}
}
}));

(logseq.outliner.core.indent_outdent_blocks.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(logseq.outliner.core.indent_outdent_blocks.cljs$lang$applyTo = (function (seq60248){
var G__60249 = cljs.core.first(seq60248);
var seq60248__$1 = cljs.core.next(seq60248);
var G__60250 = cljs.core.first(seq60248__$1);
var seq60248__$2 = cljs.core.next(seq60248__$1);
var G__60251 = cljs.core.first(seq60248__$2);
var seq60248__$3 = cljs.core.next(seq60248__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60249,G__60250,G__60251,seq60248__$3);
}));

logseq.outliner.core.op_transact_BANG_ = (function logseq$outliner$core$op_transact_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___60608 = arguments.length;
var i__5877__auto___60609 = (0);
while(true){
if((i__5877__auto___60609 < len__5876__auto___60608)){
args__5882__auto__.push((arguments[i__5877__auto___60609]));

var G__60610 = (i__5877__auto___60609 + (1));
i__5877__auto___60609 = G__60610;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (outliner_op,f,args){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (fn? f)"));
}

try{var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(cljs.core.truth_(result)){
var tx_meta_60613 = logseq.outliner.tx_meta.ensure_outliner_ops(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(result),logseq.outliner.core.direct_op_entry(outliner_op,args));
var tx_meta_60614__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_meta_60613,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),outliner_op);
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(args),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(result),tx_meta_60614__$1);
} else {
}

return result;
}catch (e60296){var e = e60296;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("not-allowed-move-block-page",cljs.core.ex_message(e))){
return null;
} else {
console.error(e);

throw e;
}
}}));

(logseq.outliner.core.op_transact_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.outliner.core.op_transact_BANG_.cljs$lang$applyTo = (function (seq60292){
var G__60293 = cljs.core.first(seq60292);
var seq60292__$1 = cljs.core.next(seq60292);
var G__60294 = cljs.core.first(seq60292__$1);
var seq60292__$2 = cljs.core.next(seq60292__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60293,G__60294,seq60292__$2);
}));

var f_60619 = (function (conn,block,opts){
return logseq.outliner.core.save_block(cljs.core.deref(conn),block,opts);
});
logseq.outliner.core.save_block_BANG_ = (function logseq$outliner$core$save_block_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___60620 = arguments.length;
var i__5877__auto___60621 = (0);
while(true){
if((i__5877__auto___60621 < len__5876__auto___60620)){
args__5882__auto__.push((arguments[i__5877__auto___60621]));

var G__60622 = (i__5877__auto___60621 + (1));
i__5877__auto___60621 = G__60622;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.outliner.core.save_block_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.outliner.core.save_block_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conn,block,p__60309){
var map__60310 = p__60309;
var map__60310__$1 = cljs.core.__destructure_map(map__60310);
var opts = map__60310__$1;
return logseq.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"save-block","save-block",591532560),f_60619,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn,block,(cljs.core.truth_(new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450).cljs$core$IFn$_invoke$arity$1(opts))?opts:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)))], 0));
}));

(logseq.outliner.core.save_block_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.outliner.core.save_block_BANG_.cljs$lang$applyTo = (function (seq60303){
var G__60304 = cljs.core.first(seq60303);
var seq60303__$1 = cljs.core.next(seq60303);
var G__60305 = cljs.core.first(seq60303__$1);
var seq60303__$2 = cljs.core.next(seq60303__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60304,G__60305,seq60303__$2);
}));

var f_60627 = (function (conn,blocks,target_block,opts){
return logseq.outliner.core.insert_blocks(cljs.core.deref(conn),blocks,target_block,opts);
});
logseq.outliner.core.insert_blocks_BANG_ = (function logseq$outliner$core$insert_blocks_BANG_(conn,blocks,target_block,opts){
return logseq.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013),f_60627,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn,blocks,target_block,(cljs.core.truth_(new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450).cljs$core$IFn$_invoke$arity$1(opts))?opts:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)))], 0));
});
var f_60632 = (function (conn,blocks,opts){
return logseq.outliner.core.delete_blocks(cljs.core.deref(conn),blocks,opts);
});
logseq.outliner.core.delete_blocks_BANG_ = (function logseq$outliner$core$delete_blocks_BANG_(conn,blocks,opts){
return logseq.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"delete-blocks","delete-blocks",-1868631596),f_60632,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn,blocks,opts], 0));
});
logseq.outliner.core.move_blocks_BANG_ = (function logseq$outliner$core$move_blocks_BANG_(conn,blocks,target_block,opts){
return logseq.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999),logseq.outliner.core.move_blocks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn,blocks,target_block,(cljs.core.truth_(new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450).cljs$core$IFn$_invoke$arity$1(opts))?opts:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"move-blocks","move-blocks",-955702999)))], 0));
});
logseq.outliner.core.move_blocks_up_down_BANG_ = (function logseq$outliner$core$move_blocks_up_down_BANG_(conn,blocks,up_QMARK_){
return logseq.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"move-blocks-up-down","move-blocks-up-down",1370411060),logseq.outliner.core.move_blocks_up_down,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn,blocks,up_QMARK_], 0));
});
logseq.outliner.core.indent_outdent_blocks_BANG_ = (function logseq$outliner$core$indent_outdent_blocks_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___60635 = arguments.length;
var i__5877__auto___60636 = (0);
while(true){
if((i__5877__auto___60636 < len__5876__auto___60635)){
args__5882__auto__.push((arguments[i__5877__auto___60636]));

var G__60637 = (i__5877__auto___60636 + (1));
i__5877__auto___60636 = G__60637;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return logseq.outliner.core.indent_outdent_blocks_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(logseq.outliner.core.indent_outdent_blocks_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conn,blocks,indent_QMARK_,p__60333){
var map__60334 = p__60333;
var map__60334__$1 = cljs.core.__destructure_map(map__60334);
var opts = map__60334__$1;
return logseq.outliner.core.op_transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"indent-outdent-blocks","indent-outdent-blocks",-104352713),logseq.outliner.core.indent_outdent_blocks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([conn,blocks,indent_QMARK_,opts], 0));
}));

(logseq.outliner.core.indent_outdent_blocks_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(logseq.outliner.core.indent_outdent_blocks_BANG_.cljs$lang$applyTo = (function (seq60323){
var G__60324 = cljs.core.first(seq60323);
var seq60323__$1 = cljs.core.next(seq60323);
var G__60325 = cljs.core.first(seq60323__$1);
var seq60323__$2 = cljs.core.next(seq60323__$1);
var G__60326 = cljs.core.first(seq60323__$2);
var seq60323__$3 = cljs.core.next(seq60323__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60324,G__60325,G__60326,seq60323__$3);
}));


//# sourceMappingURL=logseq.outliner.core.js.map
