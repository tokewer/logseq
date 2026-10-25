goog.provide('logseq.outliner.page');
/**
 * Collect entities that reference `page-entity` via node refs and need title rewrite.
 */
logseq.outliner.page.page_ref_rewrite_targets = (function logseq$outliner$page$page_ref_rewrite_targets(page_entity){
var refs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (ref){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(ref)),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity))));
}),new cljs.core.Keyword("block","_refs","block/_refs",830218531).cljs$core$IFn$_invoke$arity$1(page_entity));
var id_ref__GT_page = (function (p1__59421_SHARP_){
return logseq.db.frontend.content.content_id_ref__GT_page(p1__59421_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_entity], null));
});
return cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (ref){
var raw_title = new cljs.core.Keyword("block","raw-title","block/raw-title",1833669090).cljs$core$IFn$_invoke$arity$1(ref);
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(ref);
if(cljs.core.truth_(raw_title)){
var content_SINGLEQUOTE_ = id_ref__GT_page(raw_title);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(raw_title,content_SINGLEQUOTE_)){
var remaining_refs = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (ref_SINGLEQUOTE_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref_SINGLEQUOTE_),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity));
}),new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(ref)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ref),new cljs.core.Keyword(null,"ref-uuid","ref-uuid",1176722901),block_uuid,new cljs.core.Keyword(null,"title","title",636505583),content_SINGLEQUOTE_,new cljs.core.Keyword(null,"refs","refs",-1560051448),remaining_refs], null);
} else {
return null;
}
} else {
return null;
}
}),refs));
});
/**
 * Replace [[page name]] with page name.
 */
logseq.outliner.page.db_refs__GT_page = (function logseq$outliner$page$db_refs__GT_page(page_entity){
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page_entity);
var G__59472 = logseq.outliner.page.page_ref_rewrite_targets(page_entity);
if((G__59472 == null)){
return null;
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__59473){
var map__59478 = p__59473;
var map__59478__$1 = cljs.core.__destructure_map(map__59478);
var ref_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59478__$1,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59478__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),ref_id,new cljs.core.Keyword("block","refs","block/refs",-1214495349),page_id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),ref_id,new cljs.core.Keyword("block","title","block/title",710445684),title], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__59472], 0));
}
});
logseq.outliner.page.db_refs__GT_page_save_ops = (function logseq$outliner$page$db_refs__GT_page_save_ops(page_entity){
var G__59491 = logseq.outliner.page.page_ref_rewrite_targets(page_entity);
var G__59491__$1 = (((G__59491 == null))?null:cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__59492){
var map__59493 = p__59492;
var map__59493__$1 = cljs.core.__destructure_map(map__59493);
var ref_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59493__$1,new cljs.core.Keyword(null,"ref-uuid","ref-uuid",1176722901));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59493__$1,new cljs.core.Keyword(null,"title","title",636505583));
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59493__$1,new cljs.core.Keyword(null,"refs","refs",-1560051448));
if(cljs.core.truth_(ref_uuid)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-block","save-block",591532560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),ref_uuid,new cljs.core.Keyword("block","title","block/title",710445684),title,new cljs.core.Keyword("block","refs","block/refs",-1214495349),refs], null),cljs.core.PersistentArrayMap.EMPTY], null)], null);
} else {
return null;
}
}),G__59491));
var G__59491__$2 = (((G__59491__$1 == null))?null:cljs.core.seq(G__59491__$1));
if((G__59491__$2 == null)){
return null;
} else {
return cljs.core.vec(G__59491__$2);
}
});
/**
 * Build cleanup tx-data for deleting a schema page.
 * This is pure and can be reused by sync repair.
 */
logseq.outliner.page.build_page_retract_tx = (function logseq$outliner$page$build_page_retract_tx(var_args){
var args__5882__auto__ = [];
var len__5876__auto___59648 = arguments.length;
var i__5877__auto___59649 = (0);
while(true){
if((i__5877__auto___59649 < len__5876__auto___59648)){
args__5882__auto__.push((arguments[i__5877__auto___59649]));

var G__59650 = (i__5877__auto___59649 + (1));
i__5877__auto___59649 = G__59650;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.outliner.page.build_page_retract_tx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.outliner.page.build_page_retract_tx.cljs$core$IFn$_invoke$arity$variadic = (function (db,page,p__59497){
var vec__59498 = p__59497;
var map__59501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59498,(0),null);
var map__59501__$1 = cljs.core.__destructure_map(map__59501);
var include_page_retract_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59501__$1,new cljs.core.Keyword(null,"include-page-retract?","include-page-retract?",-239495196),true);
var today_page_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59501__$1,new cljs.core.Keyword(null,"today-page?","today-page?",1178933913));
var page_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(page);
var page_blocks_tx_data = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (block){
if(cljs.core.truth_((function (){var G__59504 = db;
var G__59505 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59504,G__59505) : datascript.core.entity.call(null,G__59504,G__59505));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block)], null)], null);
} else {
return null;
}
}),new cljs.core.Keyword("block","_page","block/_page",1150043350).cljs$core$IFn$_invoke$arity$1(page));
var property_pair_tx_data = (cljs.core.truth_((logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.property_QMARK_.call(null,page)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(d)], null);
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(page))):null);
var restore_class_parent_tx = (cljs.core.truth_((logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.class_QMARK_.call(null,page)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),new cljs.core.Keyword("logseq.class","Root","logseq.class/Root",273783827)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(logseq.db.class_QMARK_,new cljs.core.Keyword("logseq.property.class","_extends","logseq.property.class/_extends",1427752343).cljs$core$IFn$_invoke$arity$1(page))):null);
var page_tx = (cljs.core.truth_((function (){var and__5140__auto__ = include_page_retract_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,page_id) : datascript.core.entity.call(null,db,page_id));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),page_id], null)], null):null);
if(cljs.core.truth_(today_page_QMARK_)){
return page_blocks_tx_data;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(page_blocks_tx_data,property_pair_tx_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restore_class_parent_tx,logseq.outliner.page.db_refs__GT_page(page),page_tx], 0));
}
}));

(logseq.outliner.page.build_page_retract_tx.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.outliner.page.build_page_retract_tx.cljs$lang$applyTo = (function (seq59494){
var G__59495 = cljs.core.first(seq59494);
var seq59494__$1 = cljs.core.next(seq59494);
var G__59496 = cljs.core.first(seq59494__$1);
var seq59494__$2 = cljs.core.next(seq59494__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59495,G__59496,seq59494__$2);
}));

/**
 * Deletes a page. Returns true if able to delete page. If unable to delete,
 *   calls error-handler fn and returns false.
 *   Rules:
 *   1. today page content is truncated but the page itself can't be deleted
 *   2. properties and tags will be hard retracted
 *   3. other pages will be moved to Recycle
 */
logseq.outliner.page.delete_BANG_ = (function logseq$outliner$page$delete_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___59656 = arguments.length;
var i__5877__auto___59657 = (0);
while(true){
if((i__5877__auto___59657 < len__5876__auto___59656)){
args__5882__auto__.push((arguments[i__5877__auto___59657]));

var G__59658 = (i__5877__auto___59657 + (1));
i__5877__auto___59657 = G__59658;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.outliner.page.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.outliner.page.delete_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conn,page_uuid,p__59543){
var map__59544 = p__59543;
var map__59544__$1 = cljs.core.__destructure_map(map__59544);
var persist_op_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59544__$1,new cljs.core.Keyword(null,"persist-op?","persist-op?",-531287534),true);
var rename_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59544__$1,new cljs.core.Keyword(null,"rename?","rename?",-1728043099));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59544__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p__59545){
var map__59546 = p__59545;
var map__59546__$1 = cljs.core.__destructure_map(map__59546);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59546__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
return console.error(msg);
}));
var deleted_by_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59544__$1,new cljs.core.Keyword(null,"deleted-by-uuid","deleted-by-uuid",2008786548));
var now_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59544__$1,new cljs.core.Keyword(null,"now-ms","now-ms",-641991870));
if(cljs.core.uuid_QMARK_(page_uuid)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+new cljs.core.Keyword("logseq.outliner.page","delete!","logseq.outliner.page/delete!",-642598805)+" wrong page-uuid: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(page_uuid)?page_uuid:"nil"))))+"\n"+"(uuid? page-uuid)")));
}

if(cljs.core.truth_(page_uuid)){
var temp__5825__auto__ = (function (){var G__59553 = cljs.core.deref(conn);
var G__59554 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),page_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59553,G__59554) : datascript.core.entity.call(null,G__59553,G__59554));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var page = temp__5825__auto__;
var today_page_QMARK_ = (function (){var temp__5825__auto____$1 = new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page);
if(cljs.core.truth_(temp__5825__auto____$1)){
var day = temp__5825__auto____$1;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(logseq.common.util.date_time.ms__GT_journal_day((new Date())),day);
} else {
return null;
}
})();
var tx_meta = (function (){var G__59555 = logseq.outliner.tx_meta.ensure_outliner_ops(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"delete-page","delete-page",-1371381770),new cljs.core.Keyword(null,"deleted-page","deleted-page",-665410015),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"persist-op?","persist-op?",-531287534),persist_op_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-page","delete-page",-1371381770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_uuid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deleted-by-uuid","deleted-by-uuid",2008786548),deleted_by_uuid,new cljs.core.Keyword(null,"now-ms","now-ms",-641991870),now_ms], null)], null)], null));
if(cljs.core.truth_(rename_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59555,new cljs.core.Keyword(null,"source-outliner-op","source-outliner-op",725708356),new cljs.core.Keyword(null,"rename-page","rename-page",-2094129371));
} else {
return G__59555;
}
})();
if(cljs.core.truth_((function (){var or__5142__auto__ = (logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.built_in_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.built_in_QMARK_.call(null,page));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (logseq.db.hidden_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.hidden_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.hidden_QMARK_.call(null,page));
}
})())){
var G__59559_59659 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Built-in page cannot be deleted"], null);
(error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__59559_59659) : error_handler.call(null,G__59559_59659));

return false;
} else {
if(cljs.core.truth_(today_page_QMARK_)){
var tx_data = logseq.outliner.page.build_page_retract_tx.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(conn),page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"today-page?","today-page?",1178933913),true], null)], 0));
if(cljs.core.seq(tx_data)){
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,tx_meta);
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"truncated?","truncated?",1556855098),true], null);
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = (logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.class_QMARK_.call(null,page));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.property_QMARK_.cljs$core$IFn$_invoke$arity$1(page) : logseq.db.property_QMARK_.call(null,page));
}
})())){
var tx_data = logseq.outliner.page.build_page_retract_tx.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(conn),page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY], 0));
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,tx_meta);

return true;
} else {
var ref_rewrite_tx_data = logseq.outliner.page.db_refs__GT_page(page);
var ref_rewrite_save_ops = logseq.outliner.page.db_refs__GT_page_save_ops(page);
var tx_data = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ref_rewrite_tx_data,logseq.outliner.recycle.recycle_page_tx_data(cljs.core.deref(conn),page,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deleted-by-uuid","deleted-by-uuid",2008786548),deleted_by_uuid,new cljs.core.Keyword(null,"now-ms","now-ms",-641991870),now_ms], null)));
var tx_meta_SINGLEQUOTE_ = (function (){var G__59564 = tx_meta;
if(cljs.core.seq(ref_rewrite_save_ops)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__59564,new cljs.core.Keyword(null,"outliner-ops","outliner-ops",-1565194389),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),ref_rewrite_save_ops);
} else {
return G__59564;
}
})();
if(cljs.core.seq(tx_data)){
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,tx_meta_SINGLEQUOTE_);
} else {
}

return true;

}
}
}
} else {
return null;
}
} else {
return null;
}
}));

(logseq.outliner.page.delete_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.outliner.page.delete_BANG_.cljs$lang$applyTo = (function (seq59539){
var G__59541 = cljs.core.first(seq59539);
var seq59539__$1 = cljs.core.next(seq59539);
var G__59542 = cljs.core.first(seq59539__$1);
var seq59539__$2 = cljs.core.next(seq59539__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59541,G__59542,seq59539__$2);
}));

logseq.outliner.page.throw_private_create_page_tag = (function logseq$outliner$page$throw_private_create_page_tag(tag_title){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"New page can't set built-in tags: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_title], 0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),(""+"New page can't set built-in tags: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_title], 0)))),new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.validation","cant-set-built-in-tags","page.validation/cant-set-built-in-tags",1562340345),new cljs.core.Keyword(null,"i18n-args","i18n-args",-1847411217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_title], 0))], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], null));
});
/**
 * Private tags cannot be applied to a new page. #Page is allowed because new
 *   pages already have it as their type tag.
 */
logseq.outliner.page.disallowed_private_create_page_tag_QMARK_ = (function logseq$outliner$page$disallowed_private_create_page_tag_QMARK_(ent){
return cljs.core.contains_QMARK_(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(logseq.db.private_tags,new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329)),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(ent));
});
logseq.outliner.page.existing_class_for_title = (function logseq$outliner$page$existing_class_for_title(db,title){
if(typeof title === 'string'){
var G__59574 = logseq.db.page_exists_QMARK_(db,title,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083),null], null), null));
var G__59574__$1 = (((G__59574 == null))?null:cljs.core.first(G__59574));
if((G__59574__$1 == null)){
return null;
} else {
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,G__59574__$1) : datascript.core.entity.call(null,db,G__59574__$1));
}
} else {
return null;
}
});
/**
 * Resolve a tag passed to page create.
 * 
 *   Ctrl-K `Foo #Tag` parses the tag without a db, so the tag map has a new uuid
 *   and no :db/ident. Creating a user class from that map would duplicate the
 *   built-in Tag class and fail graph validation. Look up an existing class by
 *   uuid or ident first; fall back to title only when ident is missing; reject
 *   private built-in tags; reuse public classes.
 */
logseq.outliner.page.resolve_create_page_tag = (function logseq$outliner$page$resolve_create_page_tag(db,tag){
var v = ((cljs.core.uuid_QMARK_(tag))?(function (){var G__59575 = db;
var G__59576 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),tag], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59575,G__59576) : datascript.core.entity.call(null,G__59575,G__59576));
})():(((tag instanceof cljs.core.Keyword))?(datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,tag) : datascript.core.entity.call(null,db,tag)):tag
));
if(datascript.impl.entity.entity_QMARK_(v)){
if(logseq.outliner.page.disallowed_private_create_page_tag_QMARK_(v)){
logseq.outliner.page.throw_private_create_page_tag(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(v));
} else {
}

return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v);
} else {
if(cljs.core.map_QMARK_(v)){
var by_uuid = (cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(v))?(function (){var G__59577 = db;
var G__59578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(v)], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59577,G__59578) : datascript.core.entity.call(null,G__59577,G__59578));
})():null);
var by_ident = (function (){var temp__5825__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(temp__5825__auto__)){
var ident = temp__5825__auto__;
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,ident) : datascript.core.entity.call(null,db,ident));
} else {
return null;
}
})();
var existing = (function (){var or__5142__auto__ = by_uuid;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = by_ident;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
if((new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(v) == null)){
return logseq.outliner.page.existing_class_for_title(db,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(v));
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(existing)){
if(logseq.outliner.page.disallowed_private_create_page_tag_QMARK_(existing)){
logseq.outliner.page.throw_private_create_page_tag(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(existing));
} else {
}

if(cljs.core.truth_(by_uuid)){
return v;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(existing);
}
} else {
return logseq.db.frontend.class$.build_new_class(db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword("block","type","block/type",1537584409)));

}
} else {
return v;

}
}
});
logseq.outliner.page.resolved_tag_ident = (function logseq$outliner$page$resolved_tag_ident(db,tag){
if((tag instanceof cljs.core.Keyword)){
return tag;
} else {
if(cljs.core.integer_QMARK_(tag)){
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1((datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,tag) : datascript.core.entity.call(null,db,tag)));
} else {
if(cljs.core.map_QMARK_(tag)){
var or__5142__auto__ = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(tag);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1((function (){var G__59584 = db;
var G__59585 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tag);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59584,G__59585) : datascript.core.entity.call(null,G__59584,G__59585));
})());
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(tag);
if(cljs.core.truth_(temp__5825__auto__)){
var block_uuid = temp__5825__auto__;
return new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1((function (){var G__59586 = db;
var G__59587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59586,G__59587) : datascript.core.entity.call(null,G__59586,G__59587));
})());
} else {
return null;
}
}
}
} else {
return null;

}
}
}
});
logseq.outliner.page.resolve_create_page_tags = (function logseq$outliner$page$resolve_create_page_tags(db,tags){
var normalized_tags = (((tags == null))?cljs.core.PersistentVector.EMPTY:((((cljs.core.seq(tags)) && (cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,tags))))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (id){
var G__59589 = db;
var G__59590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59589,G__59590) : datascript.core.entity.call(null,G__59589,G__59590));
}),tags):cljs.core.vec(tags)
));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__59588_SHARP_){
return logseq.outliner.page.resolve_create_page_tag(db,p1__59588_SHARP_);
}),normalized_tags);
});
logseq.outliner.page.build_page_tx = (function logseq$outliner$page$build_page_tx(db,properties,page,p__59591){
var map__59592 = p__59591;
var map__59592__$1 = cljs.core.__destructure_map(map__59592);
var class_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59592__$1,new cljs.core.Keyword(null,"class?","class?",385834571));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59592__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var class_ident_namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59592__$1,new cljs.core.Keyword(null,"class-ident-namespace","class-ident-namespace",1608586491));
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page))){
var type_tag = (cljs.core.truth_(class_QMARK_)?new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083):new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329));
var tags_SINGLEQUOTE_ = (cljs.core.truth_(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page))?(function (){var or__5142__auto__ = tags;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})():cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec((function (){var or__5142__auto__ = tags;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()),type_tag));
var page_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(page,new cljs.core.Keyword("block","tags","block/tags",1814948340),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),tags_SINGLEQUOTE_);
var property_vals_tx_m = logseq.db.frontend.property.build.build_property_values_tx_m(page_SINGLEQUOTE_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__59596){
var vec__59597 = p__59596;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59597,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59597,(1),null);
if(logseq.db.frontend.property.built_in_has_ref_value_QMARK_(k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return null;
}
}),properties)));
var G__59600 = (cljs.core.truth_(class_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.frontend.class$.build_new_class.cljs$core$IFn$_invoke$arity$variadic(db,page_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ident-namespace","ident-namespace",2103796218),class_ident_namespace], null)], 0)),cljs.core.select_keys(page_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null))], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)], null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_SINGLEQUOTE_], null));
var G__59600__$1 = ((cljs.core.seq(property_vals_tx_m))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__59600,cljs.core.vals(property_vals_tx_m)):G__59600);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__59600__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page)], null),properties,logseq.db.frontend.property.build.build_properties_with_ref_values(property_vals_tx_m)], 0)));

} else {
return null;
}
});
logseq.outliner.page.sanitize_title = (function logseq$outliner$page$sanitize_title(title){
var title__$1 = (function (){var G__59601 = clojure.string.trim(title);
return (logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.page_ref_un_brackets_BANG_.cljs$core$IFn$_invoke$arity$1(G__59601) : logseq.graph_parser.text.page_ref_un_brackets_BANG_.call(null,G__59601));
})();
var title__$2 = logseq.common.util.remove_boundary_slashes(title__$1);
return title__$2;
});
logseq.outliner.page.get_page_by_parent_name = (function logseq$outliner$page$get_page_by_parent_name(db,parent_title,child_title,class_QMARK_){
var G__59602 = (function (){var G__59603 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attribute","?attribute",-816404733,null),new cljs.core.Symbol(null,"?parent-name","?parent-name",2146483276,null),new cljs.core.Symbol(null,"?child-name","?child-name",-436072934,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Symbol(null,"?attribute","?attribute",-816404733,null),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?b","?b",1575118075,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?child-name","?child-name",-436072934,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("block","name","block/name",1619760316),new cljs.core.Symbol(null,"?parent-name","?parent-name",2146483276,null)], null)], null);
var G__59604 = db;
var G__59605 = (cljs.core.truth_(class_QMARK_)?new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803):new cljs.core.Keyword("block","parent","block/parent",-918309064));
var G__59606 = logseq.common.util.page_name_sanity_lc(parent_title);
var G__59607 = logseq.common.util.page_name_sanity_lc(child_title);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__59603,G__59604,G__59605,G__59606,G__59607) : datascript.core.q.call(null,G__59603,G__59604,G__59605,G__59606,G__59607));
})();
var G__59602__$1 = (((G__59602 == null))?null:cljs.core.first(G__59602));
if((G__59602__$1 == null)){
return null;
} else {
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,G__59602__$1) : datascript.core.entity.call(null,db,G__59602__$1));
}
});
/**
 * Apply to namespace pages
 */
logseq.outliner.page.page_with_parent_and_order = (function logseq$outliner$page$page_with_parent_and_order(var_args){
var args__5882__auto__ = [];
var len__5876__auto___59671 = arguments.length;
var i__5877__auto___59672 = (0);
while(true){
if((i__5877__auto___59672 < len__5876__auto___59671)){
args__5882__auto__.push((arguments[i__5877__auto___59672]));

var G__59673 = (i__5877__auto___59672 + (1));
i__5877__auto___59672 = G__59673;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return logseq.outliner.page.page_with_parent_and_order.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(logseq.outliner.page.page_with_parent_and_order.cljs$core$IFn$_invoke$arity$variadic = (function (db,page,p__59611){
var map__59612 = p__59611;
var map__59612__$1 = cljs.core.__destructure_map(map__59612);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59612__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var library = (logseq.db.get_built_in_page.cljs$core$IFn$_invoke$arity$2 ? logseq.db.get_built_in_page.cljs$core$IFn$_invoke$arity$2(db,logseq.common.config.library_page_name) : logseq.db.get_built_in_page.call(null,db,logseq.common.config.library_page_name));
if((library == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Library page doesn't exist",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(page,new cljs.core.Keyword("block","parent","block/parent",-918309064),(function (){var or__5142__auto__ = parent;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(library);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","order","block/order",-1429282437),logseq.db.common.order.gen_key.cljs$core$IFn$_invoke$arity$0()], 0));
}));

(logseq.outliner.page.page_with_parent_and_order.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(logseq.outliner.page.page_with_parent_and_order.cljs$lang$applyTo = (function (seq59608){
var G__59609 = cljs.core.first(seq59608);
var seq59608__$1 = cljs.core.next(seq59608);
var G__59610 = cljs.core.first(seq59608__$1);
var seq59608__$2 = cljs.core.next(seq59608__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59609,G__59610,seq59608__$2);
}));

logseq.outliner.page.split_namespace_pages = (function logseq$outliner$page$split_namespace_pages(db,page,date_formatter,create_class_QMARK_){
var map__59613 = page;
var map__59613__$1 = cljs.core.__destructure_map(map__59613);
var block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59613__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59613__$1,new cljs.core.Keyword("block","title","block/title",710445684));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(cljs.core.truth_((function (){var and__5140__auto__ = (function (){var or__5142__auto__ = logseq.db.frontend.entity_util.class_QMARK_(page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.db.frontend.entity_util.page_QMARK_(page);
}
})();
if(cljs.core.truth_(and__5140__auto__)){
return logseq.common.util.namespace.namespace_page_QMARK_(title);
} else {
return and__5140__auto__;
}
})())?(function (){var class_QMARK_ = logseq.db.frontend.entity_util.class_QMARK_(page);
var parts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(title,logseq.common.util.namespace.parent_re)));
var pages = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,part){
var last_part_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(cljs.core.count(parts) - (1)));
var page__$1 = (((idx === (0)))?logseq.db.get_page(db,part):logseq.outliner.page.get_page_by_parent_name(db,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(idx - (1))),part,create_class_QMARK_));
var result = (function (){var or__5142__auto__ = page__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return logseq.graph_parser.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$variadic(part,db,true,date_formatter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915),((last_part_QMARK_)?block_uuid:null),new cljs.core.Keyword(null,"skip-existing-page-check?","skip-existing-page-check?",1358622588),true,new cljs.core.Keyword(null,"class?","class?",385834571),class_QMARK_], null)], 0));
}
})();
return result;
}),parts);
if(((cljs.core.not(class_QMARK_)) && ((!(cljs.core.every_QMARK_(logseq.db.internal_page_QMARK_,pages)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot create this page unless all parents are pages",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Cannot create this page unless all parents are pages.",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("page.validation","parents-must-be-pages","page.validation/parents-must-be-pages",433673066),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null)], null));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = class_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(cljs.core.every_QMARK_(logseq.db.class_QMARK_,pages)));
} else {
return and__5140__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot create this tag unless all parents are tags",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Cannot create this tag unless all parents are tags.",new cljs.core.Keyword(null,"i18n-key","i18n-key",361340124),new cljs.core.Keyword("class.validation","parents-must-be-tags","class.validation/parents-must-be-tags",1169114484),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"warning","warning",-1685650671)], null)], null));
} else {
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,page__$1){
var parent_eid = (((idx > (0)))?(function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pages,(idx - (1))));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),id], null);
} else {
return null;
}
})():null);
if(cljs.core.truth_(class_QMARK_)){
if(cljs.core.truth_((function (){var and__5140__auto__ = datascript.impl.entity.entity_QMARK_(page__$1);
if(and__5140__auto__){
return (logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(page__$1) : logseq.db.class_QMARK_.call(null,page__$1));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page__$1,new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),parent_eid);
} else {
if(datascript.impl.entity.entity_QMARK_(page__$1)){
return null;
} else {
if((idx === (0))){
return logseq.db.frontend.class$.build_new_class(db,page__$1);
} else {
return logseq.db.frontend.class$.build_new_class(db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page__$1,new cljs.core.Keyword("logseq.property.class","extends","logseq.property.class/extends",747593803),parent_eid));

}
}
}
} else {
if(datascript.impl.entity.entity_QMARK_(page__$1)){
return page__$1;
} else {
return logseq.outliner.page.page_with_parent_and_order.cljs$core$IFn$_invoke$arity$variadic(db,page__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),parent_eid], null)], 0));
}
}
}),pages);

}
}
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null)));
});
/**
 * Pure function without side effects
 */
logseq.outliner.page.create = (function logseq$outliner$page$create(db,title_STAR_,p__59616){
var map__59617 = p__59616;
var map__59617__$1 = cljs.core.__destructure_map(map__59617);
var options = map__59617__$1;
var class_ident_namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59617__$1,new cljs.core.Keyword(null,"class-ident-namespace","class-ident-namespace",1608586491));
var encrypted_title_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59617__$1,new cljs.core.Keyword(null,"encrypted-title?","encrypted-title?",-805291042));
var split_namespace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59617__$1,new cljs.core.Keyword(null,"split-namespace?","split-namespace?",-1035468161));
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59617__$1,new cljs.core.Keyword(null,"properties","properties",685819552),null);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59617__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var today_journal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59617__$1,new cljs.core.Keyword(null,"today-journal?","today-journal?",-388258460));
var class_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59617__$1,new cljs.core.Keyword(null,"class?","class?",385834571));
var encrypted_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59617__$1,new cljs.core.Keyword(null,"encrypted-name","encrypted-name",1444156139));
var persist_op_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59617__$1,new cljs.core.Keyword(null,"persist-op?","persist-op?",-531287534),true);
var uuid_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59617__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var journal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59617__$1,new cljs.core.Keyword(null,"journal?","journal?",-897756522));
var date_formatter = new cljs.core.Keyword("logseq.property.journal","title-format","logseq.property.journal/title-format",-1536497954).cljs$core$IFn$_invoke$arity$1(logseq.db.common.entity_plus.entity_memoized(db,new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081)));
var resolved_tags = logseq.outliner.page.resolve_create_page_tags(db,tags);
var class_QMARK___$1 = (function (){var or__5142__auto__ = class_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (t){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083),logseq.outliner.page.resolved_tag_ident(db,t));
}),resolved_tags);
}
})();
var class_ident_namespace_QMARK_ = (function (){var and__5140__auto__ = class_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = class_ident_namespace;
if(cljs.core.truth_(and__5140__auto____$1)){
return typeof class_ident_namespace === 'string';
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
var title = (cljs.core.truth_(encrypted_title_QMARK_)?title_STAR_:logseq.outliner.page.sanitize_title(title_STAR_));
var _ = (cljs.core.truth_(encrypted_title_QMARK_)?null:logseq.outliner.validate.validate_page_title_no_hashtag(title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","title","block/title",710445684),title], null)], null)));
var types = (cljs.core.truth_(class_QMARK___$1)?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Tag","logseq.class/Tag",-538902083),null], null), null):(cljs.core.truth_((function (){var or__5142__auto__ = journal_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return today_journal_QMARK_;
}
})())?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081),null], null), null):((cljs.core.seq(resolved_tags))?cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__59614_SHARP_){
return logseq.outliner.page.resolved_tag_ident(db,p1__59614_SHARP_);
}),resolved_tags)):new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329),null], null), null)
)));
var existing_names_page = logseq.db.page_exists_QMARK_(db,title,types);
var journal_page_uuid = (function (){var G__59618 = logseq.graph_parser.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$variadic(title,db,false,date_formatter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class?","class?",385834571),class_QMARK___$1,new cljs.core.Keyword(null,"skip-existing-page-check?","skip-existing-page-check?",1358622588),true], null)], 0));
if((G__59618 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__59618);
}
})();
var existing_page_by_journal_uuid = ((cljs.core.uuid_QMARK_(journal_page_uuid))?(function (){var G__59619 = db;
var G__59620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),journal_page_uuid], null);
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(G__59619,G__59620) : datascript.core.entity.call(null,G__59619,G__59620));
})():null);
var existing_page_id = (cljs.core.truth_(class_ident_namespace_QMARK_)?(function (){var G__59621 = existing_names_page;
var G__59621__$1 = (((G__59621 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59615_SHARP_){
try{var temp__5825__auto__ = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,p1__59615_SHARP_) : datascript.core.entity.call(null,db,p1__59615_SHARP_));
if(cljs.core.truth_(temp__5825__auto__)){
var e = temp__5825__auto__;
var ns_SINGLEQUOTE_ = cljs.core.namespace(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_SINGLEQUOTE_)),class_ident_namespace);
} else {
return null;
}
}catch (e59622){var ___$1 = e59622;
return false;
}}),G__59621));
if((G__59621__$1 == null)){
return null;
} else {
return cljs.core.first(G__59621__$1);
}
})():cljs.core.first(existing_names_page));
var existing_page = (function (){var or__5142__auto__ = (function (){var G__59623 = existing_page_id;
if((G__59623 == null)){
return null;
} else {
return (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(db,G__59623) : datascript.core.entity.call(null,db,G__59623));
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return existing_page_by_journal_uuid;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = existing_page;
if(cljs.core.truth_(and__5140__auto__)){
var or__5142__auto__ = new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(existing_page);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.not(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(existing_page));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
return (logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1(existing_page) : logseq.db.recycled_QMARK_.call(null,existing_page));
}
}
} else {
return and__5140__auto__;
}
})())){
var tx_meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"persist-op?","persist-op?",-531287534),persist_op_QMARK_,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"save-block","save-block",591532560)], null);
if(cljs.core.truth_((function (){var and__5140__auto__ = class_QMARK___$1;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.not((logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.class_QMARK_.cljs$core$IFn$_invoke$arity$1(existing_page) : logseq.db.class_QMARK_.call(null,existing_page)));
if(and__5140__auto____$1){
return (logseq.db.internal_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.internal_page_QMARK_.cljs$core$IFn$_invoke$arity$1(existing_page) : logseq.db.internal_page_QMARK_.call(null,existing_page));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var tx_data = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.frontend.class$.build_new_class.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.select_keys(existing_page,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","created-at","block/created-at",1440015)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(class_ident_namespace_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ident-namespace","ident-namespace",2103796218),class_ident_namespace], null):null)], 0)),cljs.core.select_keys(existing_page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096)], null))], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(existing_page)], null),new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("logseq.class","Page","logseq.class/Page",1484340329)], null)], null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),tx_data,new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(existing_page),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(existing_page)], null);
} else {
if(cljs.core.truth_((logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.db.recycled_QMARK_.cljs$core$IFn$_invoke$arity$1(existing_page) : logseq.db.recycled_QMARK_.call(null,existing_page)))){
var options_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(existing_page));
var tx_meta_SINGLEQUOTE_ = logseq.outliner.tx_meta.ensure_outliner_ops(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"persist-op?","persist-op?",-531287534),persist_op_QMARK_,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"create-page","create-page",-1352656443)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-page","create-page",-1352656443),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,options_SINGLEQUOTE_], null)], null));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta_SINGLEQUOTE_,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),logseq.outliner.recycle.restore_tx_data(db,existing_page),new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(existing_page),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(existing_page)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(existing_page),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(existing_page)], null);

}
}
} else {
var page = (function (){var G__59627 = logseq.graph_parser.block.page_name__GT_map.cljs$core$IFn$_invoke$arity$variadic(title,db,true,date_formatter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class?","class?",385834571),class_QMARK___$1,new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915),((cljs.core.uuid_QMARK_(uuid_SINGLEQUOTE_))?uuid_SINGLEQUOTE_:null),new cljs.core.Keyword(null,"skip-existing-page-check?","skip-existing-page-check?",1358622588),true], null)], 0));
if(cljs.core.truth_(encrypted_title_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59627,new cljs.core.Keyword("block","name","block/name",1619760316),encrypted_name);
} else {
return G__59627;
}
})();
var vec__59624 = (cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.not(encrypted_title_QMARK_);
if(and__5140__auto____$1){
var and__5140__auto____$2 = (logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1 ? logseq.graph_parser.text.namespace_page_QMARK_.cljs$core$IFn$_invoke$arity$1(title) : logseq.graph_parser.text.namespace_page_QMARK_.call(null,title));
if(cljs.core.truth_(and__5140__auto____$2)){
return split_namespace_QMARK_;
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?(function (){var pages = logseq.outliner.page.split_namespace_pages(db,page,date_formatter,class_QMARK___$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(pages),cljs.core.butlast(pages)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,null], null));
var page__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59624,(0),null);
var parents_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59624,(1),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = page__$1;
if(cljs.core.truth_(and__5140__auto__)){
return (((new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(page__$1) == null)) || ((!(logseq.db.frontend.malli_schema.internal_ident_QMARK_(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(page__$1))))));
} else {
return and__5140__auto__;
}
})())){
if(cljs.core.truth_((function (){var or__5142__auto__ = encrypted_title_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core.contains_QMARK_(types,new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081))) || (cljs.core.contains_QMARK_(cljs.core.set(new cljs.core.Keyword("block","tags","block/tags",1814948340).cljs$core$IFn$_invoke$arity$1(page__$1)),new cljs.core.Keyword("logseq.class","Journal","logseq.class/Journal",1979741081))));
}
})())){
} else {
logseq.outliner.validate.validate_page_title_characters((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page__$1))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),page__$1], null));

var seq__59628_59712 = cljs.core.seq(parents_SINGLEQUOTE_);
var chunk__59629_59713 = null;
var count__59630_59714 = (0);
var i__59631_59715 = (0);
while(true){
if((i__59631_59715 < count__59630_59714)){
var parent_59716 = chunk__59629_59713.cljs$core$IIndexed$_nth$arity$2(null,i__59631_59715);
logseq.outliner.validate.validate_page_title_characters((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(parent_59716))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),parent_59716], null));


var G__59718 = seq__59628_59712;
var G__59719 = chunk__59629_59713;
var G__59720 = count__59630_59714;
var G__59721 = (i__59631_59715 + (1));
seq__59628_59712 = G__59718;
chunk__59629_59713 = G__59719;
count__59630_59714 = G__59720;
i__59631_59715 = G__59721;
continue;
} else {
var temp__5825__auto___59722 = cljs.core.seq(seq__59628_59712);
if(temp__5825__auto___59722){
var seq__59628_59723__$1 = temp__5825__auto___59722;
if(cljs.core.chunked_seq_QMARK_(seq__59628_59723__$1)){
var c__5673__auto___59724 = cljs.core.chunk_first(seq__59628_59723__$1);
var G__59726 = cljs.core.chunk_rest(seq__59628_59723__$1);
var G__59727 = c__5673__auto___59724;
var G__59728 = cljs.core.count(c__5673__auto___59724);
var G__59729 = (0);
seq__59628_59712 = G__59726;
chunk__59629_59713 = G__59727;
count__59630_59714 = G__59728;
i__59631_59715 = G__59729;
continue;
} else {
var parent_59730 = cljs.core.first(seq__59628_59723__$1);
logseq.outliner.validate.validate_page_title_characters((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(parent_59730))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),parent_59730], null));


var G__59731 = cljs.core.next(seq__59628_59723__$1);
var G__59732 = null;
var G__59733 = (0);
var G__59734 = (0);
seq__59628_59712 = G__59731;
chunk__59629_59713 = G__59732;
count__59630_59714 = G__59733;
i__59631_59715 = G__59734;
continue;
}
} else {
}
}
break;
}
}

var page_uuid = (function (){var temp__5823__auto__ = new cljs.core.Keyword("block","journal-day","block/journal-day",-145748366).cljs$core$IFn$_invoke$arity$1(page__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var journal_day = temp__5823__auto__;
return logseq.common.uuid.gen_uuid.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"journal-page-uuid","journal-page-uuid",1859101489),journal_day);
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page__$1);
}
})();
var page__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),page_uuid);
var page_txs = logseq.outliner.page.build_page_tx(db,properties,page__$2,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class?","class?",385834571),class_QMARK___$1,new cljs.core.Keyword(null,"tags","tags",1771418977),resolved_tags,new cljs.core.Keyword(null,"class-ident-namespace","class-ident-namespace",1608586491),class_ident_namespace], null));
var txs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity_QMARK_,parents_SINGLEQUOTE_),page_txs);
var tx_meta = (function (){var G__59632 = logseq.outliner.tx_meta.ensure_outliner_ops(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"persist-op?","persist-op?",-531287534),persist_op_QMARK_,new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"create-page","create-page",-1352656443)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-page","create-page",-1352656443),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,options], null)], null));
if(cljs.core.truth_(today_journal_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__59632,new cljs.core.Keyword(null,"create-today-journal?","create-today-journal?",136893930),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"today-journal-name","today-journal-name",1965349294),title], 0));
} else {
return G__59632;
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),txs,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915),page_uuid], null);
} else {
return null;
}
}
});
logseq.outliner.page.create_BANG_ = (function logseq$outliner$page$create_BANG_(conn,title,opts){
var map__59635 = logseq.outliner.page.create(cljs.core.deref(conn),title,opts);
var map__59635__$1 = cljs.core.__destructure_map(map__59635);
var tx_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59635__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59635__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59635__$1,new cljs.core.Keyword(null,"title","title",636505583));
var page_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59635__$1,new cljs.core.Keyword(null,"page-uuid","page-uuid",1152600915));
if(cljs.core.seq(tx_data)){
logseq.db.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,tx_meta);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title__$1,page_uuid], null);
});

//# sourceMappingURL=logseq.outliner.page.js.map
