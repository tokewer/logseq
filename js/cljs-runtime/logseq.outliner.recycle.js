goog.provide('logseq.outliner.recycle');
logseq.outliner.recycle.recycle_page_title = "Recycle";
logseq.outliner.recycle.retention_ms = ((((30) * (24)) * (3600)) * (1000));
logseq.outliner.recycle.gc_interval_ms = (((24) * (3600)) * (1000));
logseq.outliner.recycle.recycled_QMARK_ = (function logseq$outliner$recycle$recycled_QMARK_(entity){
return (!((new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751).cljs$core$IFn$_invoke$arity$1(entity) == null)));
});
logseq.outliner.recycle.build_recycle_page_tx = (function logseq$outliner$recycle$build_recycle_page_tx(db_id){
var now = logseq.common.util.time_ms();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","updated-at","block/updated-at",-1516550551),new cljs.core.Keyword("block","created-at","block/created-at",1440015),new cljs.core.Keyword("logseq.property","built-in?","logseq.property/built-in?",-1125958160),new cljs.core.Keyword("logseq.property","hide?","logseq.property/hide?",68365746),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","name","block/name",1619760316)],[logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"builtin-block-uuid","builtin-block-uuid",-652923992),logseq.outliner.recycle.recycle_page_title),now,now,true,true,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329)], null),logseq.outliner.recycle.recycle_page_title,db_id,logseq.common.util.page_name_sanity_lc(logseq.outliner.recycle.recycle_page_title)]);
});
logseq.outliner.recycle.recycle_page = (function logseq$outliner$recycle$recycle_page(db){
return (logseq.db.get_built_in_page.cljs$core$IFn$_invoke$arity$2 ? logseq.db.get_built_in_page.cljs$core$IFn$_invoke$arity$2(db,logseq.outliner.recycle.recycle_page_title) : logseq.db.get_built_in_page.call(null,db,logseq.outliner.recycle.recycle_page_title));
});
logseq.outliner.recycle.recycle_page_tag_tx = (function logseq$outliner$recycle$recycle_page_tag_tx(page){
if(cljs.core.truth_((logseq.db.internal_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.internal_page_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.internal_page_QMARK_.call(null,page)))){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329)], null)], null);
}
});
logseq.outliner.recycle.ensure_recycle_page = (function logseq$outliner$recycle$ensure_recycle_page(db){
var temp__5823__auto__ = logseq.outliner.recycle.recycle_page(db);
if(cljs.core.truth_(temp__5823__auto__)){
var page = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.vec(logseq.outliner.recycle.recycle_page_tag_tx(page))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"page-id","page-id",-872941168),"recycle-page",new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [logseq.outliner.recycle.build_recycle_page_tx("recycle-page")], null)], null);
}
});
logseq.outliner.recycle.next_child_order = (function logseq$outliner$recycle$next_child_order(parent){
var last_child = cljs.core.last(logseq.db.sort_by_order(new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(parent)));
return logseq.db.common.order.gen_key(new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(last_child),null);
});
logseq.outliner.recycle.maybe_assoc_ref = (function logseq$outliner$recycle$maybe_assoc_ref(m,k,entity){
if(cljs.core.truth_((function (){var and__5140__auto__ = entity;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity));
} else {
return m;
}
});
logseq.outliner.recycle.maybe_assoc = (function logseq$outliner$recycle$maybe_assoc(m,k,v){
if((!((v == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
});
logseq.outliner.recycle.resolve_entity = (function logseq$outliner$recycle$resolve_entity(db,value){
if(cljs.core.truth_((function (){var and__5140__auto__ = value;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(value);
} else {
return and__5140__auto__;
}
})())){
return value;
} else {
if(cljs.core.int_QMARK_(value)){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,value) : datascript.core.entity.call(null,db,value));
} else {
if(cljs.core.vector_QMARK_(value)){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,value) : datascript.core.entity.call(null,db,value));
} else {
return null;

}
}
}
});
logseq.outliner.recycle.block_subtree = (function logseq$outliner$recycle$block_subtree(db,block){
var ids = cljs.core.cons(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),logseq.db.common.initial_data.get_block_full_children_ids(db,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block)));
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__59216_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__59216_SHARP_) : datascript.core.entity.call(null,db,p1__59216_SHARP_));
}),ids);
});
logseq.outliner.recycle.block_children = (function logseq$outliner$recycle$block_children(block){
return logseq.db.common.entity_plus.lookup_kv_then_entity.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword("block","_raw-parent","block/_raw-parent",628025875));
});
logseq.outliner.recycle.page_descendants = (function logseq$outliner$recycle$page_descendants(page){
var pages = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5823__auto__ = cljs.core.first(pages);
if(cljs.core.truth_(temp__5823__auto__)){
var page_SINGLEQUOTE_ = temp__5823__auto__;
var children = logseq.db.sort_by_order(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.db.page_QMARK_,logseq.outliner.recycle.block_children(page_SINGLEQUOTE_)));
var G__59312 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(pages),children);
var G__59313 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,page_SINGLEQUOTE_);
pages = G__59312;
result = G__59313;
continue;
} else {
return result;
}
break;
}
});
logseq.outliner.recycle.page_block_subtree_ids = (function logseq$outliner$recycle$page_block_subtree_ids(db,page){
var root_blocks = logseq.db.sort_by_order(logseq.common.util.distinct_by(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","_page","block/_page",1150043350).cljs$core$IFn$_invoke$arity$1(page),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.db.page_QMARK_,logseq.outliner.recycle.block_children(page)))));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (block){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),logseq.outliner.recycle.block_subtree(db,block));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root_blocks], 0));
});
logseq.outliner.recycle.page_tree_ids = (function logseq$outliner$recycle$page_tree_ids(db,page){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (page_SINGLEQUOTE_){
return cljs.core.cons(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_),logseq.outliner.recycle.page_block_subtree_ids(db,page_SINGLEQUOTE_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.outliner.recycle.page_descendants(page)], 0)));
});
logseq.outliner.recycle.deleted_by_id = (function logseq$outliner$recycle$deleted_by_id(db,deleted_by_uuid){
var G__59220 = deleted_by_uuid;
var G__59220__$1 = (((G__59220 == null))?null:(function (p1__59219_SHARP_){
var G__59221 = db;
var G__59222 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),p1__59219_SHARP_], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59221,G__59222) : datascript.core.entity.call(null,G__59221,G__59222));
})(G__59220));
if((G__59220__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(G__59220__$1);
}
});
logseq.outliner.recycle.with_delete_cleanup_tx = (function logseq$outliner$recycle$with_delete_cleanup_tx(db,tx_data){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx_data,logseq.db.common.delete_blocks.update_refs_history(db,tx_data,cljs.core.PersistentArrayMap.EMPTY)));
});
logseq.outliner.recycle.recycle_blocks_tx_data = (function logseq$outliner$recycle$recycle_blocks_tx_data(db,blocks,p__59224){
var map__59225 = p__59224;
var map__59225__$1 = cljs.core.__destructure_map(map__59225);
var deleted_by_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59225__$1,new cljs.core.Keyword(null,"deleted-by-uuid","deleted-by-uuid",2008786548));
var now_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59225__$1,new cljs.core.Keyword(null,"now-ms","now-ms",-641991870));
var map__59226 = logseq.outliner.recycle.ensure_recycle_page(db);
var map__59226__$1 = cljs.core.__destructure_map(map__59226);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59226__$1,new cljs.core.Keyword(null,"page","page",849072397));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59226__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59226__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var deleted_by_id_SINGLEQUOTE_ = logseq.outliner.recycle.deleted_by_id(db,deleted_by_uuid);
var now_ms__$1 = (function (){var or__5142__auto__ = now_ms;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.common.util.time_ms();
}
})();
var vec__59227 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__59231,block){
var vec__59232 = p__59231;
var txs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59232,(0),null);
var previous_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59232,(1),null);
var subtree = logseq.outliner.recycle.block_subtree(db,block);
var order = logseq.db.common.order.gen_key(previous_order,null);
var root_tx = (function (){var G__59235 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","parent","block/parent",-918309064),page_id,new cljs.core.Keyword("block","page","block/page",822314108),page_id,new cljs.core.Keyword("block","order","block/order",-1429282437),order,new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751),now_ms__$1], null);
var G__59235__$1 = logseq.outliner.recycle.maybe_assoc_ref(G__59235,new cljs.core.Keyword("logseq.property","deleted-by-ref","logseq.property/deleted-by-ref",-1998043112),(datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,deleted_by_id_SINGLEQUOTE_) : datascript.core.entity.call(null,db,deleted_by_id_SINGLEQUOTE_)))
;
var G__59235__$2 = logseq.outliner.recycle.maybe_assoc_ref(G__59235__$1,new cljs.core.Keyword("logseq.property.recycle","original-parent","logseq.property.recycle/original-parent",497003994),new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(block))
;
var G__59235__$3 = logseq.outliner.recycle.maybe_assoc_ref(G__59235__$2,new cljs.core.Keyword("logseq.property.recycle","original-page","logseq.property.recycle/original-page",-1658789799),new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(block))
;
return logseq.outliner.recycle.maybe_assoc(G__59235__$3,new cljs.core.Keyword("logseq.property.recycle","original-order","logseq.property.recycle/original-order",-869925370),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(block));

})();
var subtree_page_tx = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword("block","page","block/page",822314108),page_id], null);
}),subtree);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(txs,cljs.core.cons(root_tx,cljs.core.rest(subtree_page_tx))),order], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(function (){var G__59237 = page;
var G__59237__$1 = (((G__59237 == null))?null:new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(G__59237));
var G__59237__$2 = (((G__59237__$1 == null))?null:logseq.db.sort_by_order(G__59237__$1));
var G__59237__$3 = (((G__59237__$2 == null))?null:cljs.core.last(G__59237__$2));
if((G__59237__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(G__59237__$3);
}
})()], null),blocks);
var recycle_tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59227,(0),null);
var _previous_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59227,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(tx_data,recycle_tx);
});
logseq.outliner.recycle.recycle_page_tx_data = (function logseq$outliner$recycle$recycle_page_tx_data(db,page,p__59238){
var map__59239 = p__59238;
var map__59239__$1 = cljs.core.__destructure_map(map__59239);
var deleted_by_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59239__$1,new cljs.core.Keyword(null,"deleted-by-uuid","deleted-by-uuid",2008786548));
var now_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59239__$1,new cljs.core.Keyword(null,"now-ms","now-ms",-641991870));
var map__59240 = logseq.outliner.recycle.ensure_recycle_page(db);
var map__59240__$1 = cljs.core.__destructure_map(map__59240);
var recycle_page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59240__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var recycle_page_init_tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59240__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var recycle_page_existing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59240__$1,new cljs.core.Keyword(null,"page","page",849072397));
var deleted_by_db_id = logseq.outliner.recycle.deleted_by_id(db,deleted_by_uuid);
var now_ms__$1 = (function (){var or__5142__auto__ = now_ms;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.common.util.time_ms();
}
})();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recycle_page_init_tx_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59241 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword("block","parent","block/parent",-918309064),recycle_page_id,new cljs.core.Keyword("block","order","block/order",-1429282437),(cljs.core.truth_(recycle_page_existing)?logseq.outliner.recycle.next_child_order(recycle_page_existing):logseq.db.common.order.gen_key(null,null)),new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751),now_ms__$1], null);
var G__59241__$1 = logseq.outliner.recycle.maybe_assoc_ref(G__59241,new cljs.core.Keyword("logseq.property","deleted-by-ref","logseq.property/deleted-by-ref",-1998043112),(datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,deleted_by_db_id) : datascript.core.entity.call(null,db,deleted_by_db_id)))
;
var G__59241__$2 = logseq.outliner.recycle.maybe_assoc_ref(G__59241__$1,new cljs.core.Keyword("logseq.property.recycle","original-parent","logseq.property.recycle/original-parent",497003994),new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(page))
;
var G__59241__$3 = logseq.outliner.recycle.maybe_assoc_ref(G__59241__$2,new cljs.core.Keyword("logseq.property.recycle","original-page","logseq.property.recycle/original-page",-1658789799),page)
;
return logseq.outliner.recycle.maybe_assoc(G__59241__$3,new cljs.core.Keyword("logseq.property.recycle","original-order","logseq.property.recycle/original-order",-869925370),new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(page));

})()], null));
});
logseq.outliner.recycle.restore_order = (function logseq$outliner$recycle$restore_order(target_parent){
return logseq.outliner.recycle.next_child_order(target_parent);
});
logseq.outliner.recycle.restore_target = (function logseq$outliner$recycle$restore_target(db,root){
var original_parent = logseq.outliner.recycle.resolve_entity(db,new cljs.core.Keyword("logseq.property.recycle","original-parent","logseq.property.recycle/original-parent",497003994).cljs$core$IFn$_invoke$arity$1(root));
var original_page = logseq.outliner.recycle.resolve_entity(db,new cljs.core.Keyword("logseq.property.recycle","original-page","logseq.property.recycle/original-page",-1658789799).cljs$core$IFn$_invoke$arity$1(root));
var parent_valid_QMARK_ = (function (){var and__5140__auto__ = original_parent;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = (!(logseq.outliner.recycle.recycled_QMARK_(original_parent)));
if(and__5140__auto____$1){
var G__59246 = db;
var G__59247 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(original_parent);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59246,G__59247) : datascript.core.entity.call(null,G__59246,G__59247));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
var parent_pending_QMARK_ = (function (){var and__5140__auto__ = original_parent;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(parent_valid_QMARK_);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(root) : logseq.db.page_QMARK_.call(null,root)))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"parent","parent",-878878779),(cljs.core.truth_(parent_valid_QMARK_)?original_parent:null),new cljs.core.Keyword(null,"page","page",849072397),root,new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property.recycle","original-order","logseq.property.recycle/original-order",-869925370).cljs$core$IFn$_invoke$arity$1(root);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(parent_valid_QMARK_)){
return logseq.outliner.recycle.restore_order(original_parent);
} else {
return null;
}
}
})(),new cljs.core.Keyword(null,"parent-pending?","parent-pending?",1185363191),parent_pending_QMARK_], null);
} else {
if(cljs.core.truth_(parent_valid_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parent","parent",-878878779),original_parent,new cljs.core.Keyword(null,"page","page",849072397),original_page,new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property.recycle","original-order","logseq.property.recycle/original-order",-869925370).cljs$core$IFn$_invoke$arity$1(root);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.outliner.recycle.restore_order(original_parent);
}
})()], null);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = original_page;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = (function (){var G__59249 = db;
var G__59250 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(original_page);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59249,G__59250) : datascript.core.entity.call(null,G__59249,G__59250));
})();
if(cljs.core.truth_(and__5140__auto____$1)){
return (!(logseq.outliner.recycle.recycled_QMARK_(original_page)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parent","parent",-878878779),original_page,new cljs.core.Keyword(null,"page","page",849072397),original_page,new cljs.core.Keyword(null,"order","order",-1254677256),logseq.outliner.recycle.restore_order(original_page)], null);
} else {
return null;

}
}
}
});
logseq.outliner.recycle.awaiting_original_parent_QMARK_ = (function logseq$outliner$recycle$awaiting_original_parent_QMARK_(db,child){
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(child);
var recycle = logseq.outliner.recycle.recycle_page(db);
var or__5142__auto__ = (parent == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = logseq.outliner.recycle.recycled_QMARK_(parent);
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var and__5140__auto__ = recycle;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(recycle));
} else {
return and__5140__auto__;
}
}
}
});
/**
 * Re-attach live children that still record this page as their recycle original parent.
 */
logseq.outliner.recycle.relink_waiting_children_tx = (function logseq$outliner$recycle$relink_waiting_children_tx(db,parent){
var children = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59261_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p1__59261_SHARP_),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(logseq.outliner.recycle.recycled_QMARK_,new cljs.core.Keyword("logseq.property.recycle","_original-parent","logseq.property.recycle/_original-parent",1700984782).cljs$core$IFn$_invoke$arity$1(parent)));
if(cljs.core.seq(children)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__59262,child){
var vec__59263 = p__59262;
var txs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59263,(0),null);
var last_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59263,(1),null);
var awaiting_QMARK_ = logseq.outliner.recycle.awaiting_original_parent_QMARK_(db,child);
var order = (cljs.core.truth_(awaiting_QMARK_)?(function (){var or__5142__auto__ = new cljs.core.Keyword("logseq.property.recycle","original-order","logseq.property.recycle/original-order",-869925370).cljs$core$IFn$_invoke$arity$1(child);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.common.order.gen_key(last_order,null);
}
})():null);
var clear = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword("logseq.property.recycle","original-parent","logseq.property.recycle/original-parent",497003994)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword("logseq.property.recycle","original-page","logseq.property.recycle/original-page",-1658789799)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword("logseq.property.recycle","original-order","logseq.property.recycle/original-order",-869925370)], null)], null);
var attach = (cljs.core.truth_(awaiting_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword("block","order","block/order",-1429282437),order], null)], null):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(txs,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attach,clear)),(function (){var or__5142__auto__ = order;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return last_order;
}
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(function (){var G__59268 = parent;
var G__59268__$1 = (((G__59268 == null))?null:new cljs.core.Keyword("block","_parent","block/_parent",-639389670).cljs$core$IFn$_invoke$arity$1(G__59268));
var G__59268__$2 = (((G__59268__$1 == null))?null:logseq.db.sort_by_order(G__59268__$1));
var G__59268__$3 = (((G__59268__$2 == null))?null:cljs.core.last(G__59268__$2));
if((G__59268__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(G__59268__$3);
}
})()], null),children));
} else {
return null;
}
});
logseq.outliner.recycle.restore_tx_data = (function logseq$outliner$recycle$restore_tx_data(db,root){
var temp__5825__auto__ = logseq.outliner.recycle.restore_target(db,root);
if(cljs.core.truth_(temp__5825__auto__)){
var map__59270 = temp__5825__auto__;
var map__59270__$1 = cljs.core.__destructure_map(map__59270);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59270__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59270__$1,new cljs.core.Keyword(null,"page","page",849072397));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59270__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var parent_pending_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59270__$1,new cljs.core.Keyword(null,"parent-pending?","parent-pending?",1185363191));
var subtree = (cljs.core.truth_((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(root) : logseq.db.page_QMARK_.call(null,root)))?null:logseq.outliner.recycle.block_subtree(db,root));
var clear_structure = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root),new cljs.core.Keyword("block","parent","block/parent",-918309064)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root),new cljs.core.Keyword("block","order","block/order",-1429282437)], null),(cljs.core.truth_((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(root) : logseq.db.page_QMARK_.call(null,root)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root),new cljs.core.Keyword("block","page","block/page",822314108)], null))], null);
var clear_meta = (function (){var G__59272 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root),new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root),new cljs.core.Keyword("logseq.property","deleted-by-ref","logseq.property/deleted-by-ref",-1998043112)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root),new cljs.core.Keyword("logseq.property.recycle","original-page","logseq.property.recycle/original-page",-1658789799)], null)], null);
if(cljs.core.not(parent_pending_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__59272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root),new cljs.core.Keyword("logseq.property.recycle","original-parent","logseq.property.recycle/original-parent",497003994)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root),new cljs.core.Keyword("logseq.property.recycle","original-order","logseq.property.recycle/original-order",-869925370)], null)], null));
} else {
return G__59272;
}
})();
var root_tx = (function (){var G__59273 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(root)], null);
var G__59273__$1 = (cljs.core.truth_(parent)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59273,new cljs.core.Keyword("block","parent","block/parent",-918309064),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(parent)):G__59273);
var G__59273__$2 = (cljs.core.truth_(order)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59273__$1,new cljs.core.Keyword("block","order","block/order",-1429282437),order):G__59273__$1);
if(cljs.core.not((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(root) : logseq.db.page_QMARK_.call(null,root)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59273__$2,new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page));
} else {
return G__59273__$2;
}
})();
var subtree_page_tx = ((cljs.core.seq(subtree))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page)], null);
}),subtree):null);
var relink_tx = (cljs.core.truth_((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(root) : logseq.db.page_QMARK_.call(null,root)))?logseq.outliner.recycle.relink_waiting_children_tx(db,root):null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(clear_structure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_tx], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subtree_page_tx,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,clear_meta),relink_tx], 0));
} else {
return null;
}
});
logseq.outliner.recycle.restore_BANG_ = (function logseq$outliner$recycle$restore_BANG_(conn,root_uuid){
var temp__5825__auto__ = (function (){var G__59281 = cljs.core.deref(conn);
var G__59282 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),root_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59281,G__59282) : datascript.core.entity.call(null,G__59281,G__59282));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var root = temp__5825__auto__;
var temp__5825__auto____$1 = cljs.core.seq(logseq.outliner.recycle.restore_tx_data(cljs.core.deref(conn),root));
if(temp__5825__auto____$1){
var tx_data = temp__5825__auto____$1;
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"restore-recycled","restore-recycled",-2050992683)], null));

return true;
} else {
return null;
}
} else {
return null;
}
});
logseq.outliner.recycle.permanently_delete_tx_data = (function logseq$outliner$recycle$permanently_delete_tx_data(db,root){
if(cljs.core.truth_((function (){var and__5140__auto__ = root;
if(cljs.core.truth_(and__5140__auto__)){
return logseq.outliner.recycle.recycled_QMARK_(root);
} else {
return and__5140__auto__;
}
})())){
var G__59285 = (cljs.core.truth_((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(root) : logseq.db.page_QMARK_.call(null,root)))?cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (id){
var G__59286 = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,id) : datascript.core.entity.call(null,db,id));
if((G__59286 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__59286);
}
}),logseq.outliner.recycle.page_tree_ids(db,root)):cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),logseq.outliner.recycle.block_subtree(db,root)));
var G__59285__$1 = (((G__59285 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (block_uuid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null)], null);
}),G__59285));
var G__59285__$2 = (((G__59285__$1 == null))?null:cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(G__59285__$1));
var G__59285__$3 = (((G__59285__$2 == null))?null:cljs.core.seq(G__59285__$2));
var G__59285__$4 = (((G__59285__$3 == null))?null:logseq.outliner.recycle.with_delete_cleanup_tx(db,G__59285__$3));
if((G__59285__$4 == null)){
return null;
} else {
return cljs.core.seq(G__59285__$4);
}
} else {
return null;
}
});
logseq.outliner.recycle.permanently_delete_BANG_ = (function logseq$outliner$recycle$permanently_delete_BANG_(conn,root_uuid){
var temp__5825__auto__ = (function (){var G__59291 = cljs.core.deref(conn);
var G__59292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),root_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59291,G__59292) : datascript.core.entity.call(null,G__59291,G__59292));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var root = temp__5825__auto__;
var temp__5825__auto____$1 = logseq.outliner.recycle.permanently_delete_tx_data(cljs.core.deref(conn),root);
if(cljs.core.truth_(temp__5825__auto____$1)){
var tx_data = temp__5825__auto____$1;
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"recycle-delete-permanently","recycle-delete-permanently",-1939194401)], null));

return true;
} else {
return null;
}
} else {
return null;
}
});
logseq.outliner.recycle.gc_tx_data = (function logseq$outliner$recycle$gc_tx_data(db,p__59295){
var map__59296 = p__59295;
var map__59296__$1 = cljs.core.__destructure_map(map__59296);
var now_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59296__$1,new cljs.core.Keyword(null,"now-ms","now-ms",-641991870),logseq.common.util.time_ms());
var cutoff = (now_ms - logseq.outliner.recycle.retention_ms);
return logseq.outliner.recycle.with_delete_cleanup_tx(db,cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (entity){
if(cljs.core.truth_((logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.page_QMARK_.cljs$core$IFn$_invoke$arity$1(entity) : logseq.db.page_QMARK_.call(null,entity)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),id], null);
}),logseq.outliner.recycle.page_tree_ids(db,entity));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(node)], null);
}),logseq.outliner.recycle.block_subtree(db,entity));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.outliner.recycle.recycled_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59294_SHARP_){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__59294_SHARP_) : datascript.core.entity.call(null,db,p1__59294_SHARP_));
}),(function (){var G__59299 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?cutoff","?cutoff",-1683279141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("logseq.property","deleted-at","logseq.property/deleted-at",685213751),new cljs.core.Symbol(null,"?deleted-at","?deleted-at",1338839815,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"?deleted-at","?deleted-at",1338839815,null),new cljs.core.Symbol(null,"?cutoff","?cutoff",-1683279141,null))], null)], null);
var G__59300 = db;
var G__59301 = cutoff;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__59299,G__59300,G__59301) : datascript.core.q.call(null,G__59299,G__59300,G__59301));
})()))], 0)))));
});
logseq.outliner.recycle.gc_BANG_ = (function logseq$outliner$recycle$gc_BANG_(conn,opts){
var temp__5825__auto__ = cljs.core.seq(logseq.outliner.recycle.gc_tx_data(cljs.core.deref(conn),opts));
if(temp__5825__auto__){
var tx_data = temp__5825__auto__;
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"recycle-gc","recycle-gc",1882424331),new cljs.core.Keyword(null,"persist-op?","persist-op?",-531287534),false], null));

return true;
} else {
return null;
}
});

//# sourceMappingURL=logseq.outliner.recycle.js.map
