goog.provide('frontend.db.transact');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
frontend.db.transact.worker_call = (function frontend$db$transact$worker_call(request_f){
return (new Promise((function (resolve,reject){
return (request_f.cljs$core$IFn$_invoke$arity$0 ? request_f.cljs$core$IFn$_invoke$arity$0() : request_f.call(null)).then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ex-data","ex-data",-309040259).cljs$core$IFn$_invoke$arity$1(result))){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.db.transact",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"worker-request-failed","worker-request-failed",-790319360),result,new cljs.core.Keyword(null,"line","line",212345235),19], null)),null);
} else {
}

var G__61107 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Worker request failed",result);
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__61107) : reject.call(null,G__61107));
} else {
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(result) : resolve.call(null,result));
}
})).catch(reject);
})));
});
if((typeof frontend !== 'undefined') && (typeof frontend.db !== 'undefined') && (typeof frontend.db.transact !== 'undefined') && (typeof frontend.db.transact._STAR_repo__GT_outliner_mutation_tail !== 'undefined')){
} else {
frontend.db.transact._STAR_repo__GT_outliner_mutation_tail = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.db.transact.enqueue_outliner_mutation_BANG_ = (function frontend$db$transact$enqueue_outliner_mutation_BANG_(repo,request_f){
var previous = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.db.transact._STAR_repo__GT_outliner_mutation_tail),repo,promesa.core.resolved(null));
var result = promesa.core.then.cljs$core$IFn$_invoke$arity$2(previous,(function (_){
return (request_f.cljs$core$IFn$_invoke$arity$0 ? request_f.cljs$core$IFn$_invoke$arity$0() : request_f.call(null));
}));
var tail = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(result,cljs.core.constantly(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.db.transact._STAR_repo__GT_outliner_mutation_tail,cljs.core.assoc,repo,tail);

promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(tail,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.db.transact._STAR_repo__GT_outliner_mutation_tail,(function (repo__GT_tail){
if((tail === cljs.core.get.cljs$core$IFn$_invoke$arity$2(repo__GT_tail,repo))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(repo__GT_tail,repo);
} else {
return repo__GT_tail;
}
}));
}));

return result;
});
frontend.db.transact.ensure_local_op_tx_id = (function frontend$db$transact$ensure_local_op_tx_id(tx_meta){
var G__61131 = (function (){var or__5142__auto__ = tx_meta;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if((new cljs.core.Keyword("db-sync","tx-id","db-sync/tx-id",-1839143618).cljs$core$IFn$_invoke$arity$1(tx_meta) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61131,new cljs.core.Keyword("db-sync","tx-id","db-sync/tx-id",-1839143618),cljs.core.random_uuid());
} else {
return G__61131;
}
});
frontend.db.transact.now_ms = (function frontend$db$transact$now_ms(){
if(cljs.core.truth_((function (){var and__5140__auto__ = (typeof performance !== 'undefined');
if(and__5140__auto__){
return performance.now;
} else {
return and__5140__auto__;
}
})())){
return performance.now();
} else {
return Date.now();
}
});
frontend.db.transact.log_outliner_op_perf_BANG_ = (function frontend$db$transact$log_outliner_op_perf_BANG_(data){
if(cljs.core.truth_(goog.DEBUG)){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.db.transact",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","outliner-op-perf","db/outliner-op-perf",2000452292),data,new cljs.core.Keyword(null,"line","line",212345235),56], null)),null);
} else {
return null;
}
} else {
return null;
}
});
frontend.db.transact.on_next_frame_BANG_ = (function frontend$db$transact$on_next_frame_BANG_(f){
var run_61297 = (function (){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e61133){var error = e61133;
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.db.transact",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","editor-frame-callback-failed","db/editor-frame-callback-failed",2060076206),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),64], null)),null);
} else {
return null;
}
}});
if((typeof requestAnimationFrame !== 'undefined')){
requestAnimationFrame(run_61297);
} else {
setTimeout(run_61297,(0));
}

return null;
});
frontend.db.transact.run_edit_block_fn_BANG_ = (function frontend$db$transact$run_edit_block_fn_BANG_(tx_meta,rows){
var temp__5825__auto__ = new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801).cljs$core$IFn$_invoke$arity$1(tx_meta);
if(cljs.core.truth_(temp__5825__auto__)){
var edit_block_f = temp__5825__auto__;
try{return (edit_block_f.cljs$core$IFn$_invoke$arity$1 ? edit_block_f.cljs$core$IFn$_invoke$arity$1(rows) : edit_block_f.call(null,rows));
}catch (e61138){var error = e61138;
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.db.transact",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","editor-callback-failed","db/editor-callback-failed",1468951357),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),76], null)),null);
} else {
return null;
}
}} else {
return null;
}
});
frontend.db.transact.operation_row_uuids = (function frontend$db$transact$operation_row_uuids(ops){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__61143){
var vec__61144 = p__61143;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61144,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61144,(1),null);
var G__61147 = op;
var G__61147__$1 = (((G__61147 instanceof cljs.core.Keyword))?G__61147.fqn:null);
switch (G__61147__$1) {
case "save-block":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61148 = args;
var G__61148__$1 = (((G__61148 == null))?null:cljs.core.first(G__61148));
if((G__61148__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(G__61148__$1);
}
})()], null);

break;
case "insert-blocks":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(args));

break;
case "move-blocks":
return cljs.core.first(args);

break;
case "move-blocks-up-down":
return cljs.core.first(args);

break;
case "indent-outdent-blocks":
return cljs.core.first(args);

break;
case "apply-template":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(args)], null);

break;
case "set-block-property":
case "set-block-properties":
case "remove-block-property":
case "delete-property-value":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args)], null);

break;
case "batch-set-property":
case "batch-remove-property":
case "batch-delete-property-value":
return cljs.core.first(args);

break;
case "create-property-text-block":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args)], null);

break;
case "class-add-property":
case "class-remove-property":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args)], null);

break;
case "delete-closed-value":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(args)], null);

break;
case "delete-blocks":
return cljs.core.PersistentVector.EMPTY;

break;
case "collapse-expand-blocks":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.first(args));

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ops], 0)))));
});
frontend.db.transact.canonical_editor_rows_BANG_ = (function frontend$db$transact$canonical_editor_rows_BANG_(editor_rows,row_uuids){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block_uuid){
if(cljs.core.contains_QMARK_(editor_rows,block_uuid)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Missing canonical editor row in worker response",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),block_uuid,new cljs.core.Keyword(null,"row-uuids","row-uuids",214457045),row_uuids], null));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(editor_rows,block_uuid);
}),row_uuids);
});
frontend.db.transact.run_response_editor_callback_BANG_ = (function frontend$db$transact$run_response_editor_callback_BANG_(tx_meta,editor_rows,row_uuids){
var started_at = frontend.db.transact.now_ms();
var rows = frontend.db.transact.canonical_editor_rows_BANG_(editor_rows,cljs.core.vec((function (){var or__5142__auto__ = row_uuids;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
var rows_ready_at = frontend.db.transact.now_ms();
module$node_modules$react_dom$index.flushSync((function (){
return frontend.db.transact.run_edit_block_fn_BANG_(tx_meta,rows);
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"canonical-rows-ms","canonical-rows-ms",-2107665328),(rows_ready_at - started_at),new cljs.core.Keyword(null,"edit-block-flush-ms","edit-block-flush-ms",-1464748514),(frontend.db.transact.now_ms() - rows_ready_at)], null);
});
frontend.db.transact.publish_worker_response_BANG_ = (function frontend$db$transact$publish_worker_response_BANG_(tx_meta,delta,editor_rows,row_uuids,run_editor_callback_QMARK_){
var started_at = frontend.db.transact.now_ms();
if(cljs.core.truth_(delta)){
module$node_modules$react_dom$index.flushSync((function (){
return frontend.db.subs.apply_delta_BANG_(delta);
}));
} else {
}

var delta_flushed_at = frontend.db.transact.now_ms();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(run_editor_callback_QMARK_)?frontend.db.transact.run_response_editor_callback_BANG_(tx_meta,editor_rows,row_uuids):null)),(function (editor_callback_perf){
return promesa.protocols._promise((function (){var completed_at = frontend.db.transact.now_ms();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"delta-flush-ms","delta-flush-ms",1009621571),(delta_flushed_at - started_at),new cljs.core.Keyword(null,"editor-callback-ms","editor-callback-ms",974812162),(completed_at - delta_flushed_at),new cljs.core.Keyword(null,"editor-callback","editor-callback",455299731),editor_callback_perf,new cljs.core.Keyword(null,"total-ms","total-ms",889647655),(completed_at - started_at)], null);
})());
}));
}));
});
frontend.db.transact.transact = (function frontend$db$transact$transact(worker_transact,repo,tx_data,tx_meta){
var tx_meta_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.db.transact.ensure_local_op_tx_id(tx_meta),new cljs.core.Keyword(null,"local-tx?","local-tx?",-891534872),true);
return frontend.db.transact.worker_call((function frontend$db$transact$transact_$_async_request(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","undo-redo-set-pending-editor-info","thread-api/undo-redo-set-pending-editor-info",-590891552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,frontend.state.get_editor_info()], 0))),(function (___27434__auto__){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((worker_transact.cljs$core$IFn$_invoke$arity$3 ? worker_transact.cljs$core$IFn$_invoke$arity$3(repo,tx_data,tx_meta_SINGLEQUOTE_) : worker_transact.call(null,repo,tx_data,tx_meta_SINGLEQUOTE_))),(function (res){
return promesa.protocols._mcat(promesa.protocols._promise(((frontend.util.web_platform_QMARK_)?frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","data-changed","graph/data-changed",-569340822),repo], null)):null)),(function (___27434__auto____$1){
return promesa.protocols._promise(res);
}));
}));
})));
}));
}));
}));
});
frontend.db.transact.apply_outliner_ops = (function frontend$db$transact$apply_outliner_ops(conn,ops,opts){
if(cljs.core.seq(ops)){
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.node_test_QMARK_;
if(and__5140__auto__){
return conn;
} else {
return and__5140__auto__;
}
})())){
return logseq.outliner.op.apply_ops_BANG_(conn,ops,opts);
} else {
var started_at = frontend.db.transact.now_ms();
var perf_id = cljs.core.random_uuid();
var request_repo = frontend.state.get_current_repo();
var request_route = frontend.state.get_route_match();
var request_editor_info = frontend.state.get_editor_info();
var opts_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frontend.db.transact.ensure_local_op_tx_id(opts),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","perf-id","ui/perf-id",-1628037537),perf_id,new cljs.core.Keyword(null,"local-tx?","local-tx?",-891534872),true], 0));
var worker_opts = (function (){var G__61294 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts_SINGLEQUOTE_,new cljs.core.Keyword("ui","page-id","ui/page-id",-872945956),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801)], 0));
var G__61294__$1 = (cljs.core.truth_(new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801).cljs$core$IFn$_invoke$arity$1(opts_SINGLEQUOTE_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61294,new cljs.core.Keyword(null,"editor-row-uuids","editor-row-uuids",-1224811875),frontend.db.transact.operation_row_uuids(ops)):G__61294);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61294__$1,new cljs.core.Keyword(null,"pending-editor-info","pending-editor-info",-1525483044),request_editor_info);

})();
var request = (function (){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","apply-outliner-ops","thread-api/apply-outliner-ops",654139693),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([request_repo,ops,worker_opts], 0));
});
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.transact.enqueue_outliner_mutation_BANG_(request_repo,request)),(function (response){
return promesa.protocols._mcat(promesa.protocols._promise(response),(function (p__61295){
var map__61296 = p__61295;
var map__61296__$1 = cljs.core.__destructure_map(map__61296);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61296__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61296__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
var editor_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61296__$1,new cljs.core.Keyword(null,"editor-rows","editor-rows",2007825475));
var editor_row_uuids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61296__$1,new cljs.core.Keyword(null,"editor-row-uuids","editor-row-uuids",-1224811875));
var perf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61296__$1,new cljs.core.Keyword(null,"perf","perf",650881412));
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.transact.now_ms()),(function (mutation_returned_at){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.transact.now_ms()),(function (worker_returned_at){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_repo,frontend.state.get_current_repo())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_route,frontend.state.get_route_match())))),(function (current_context_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = delta;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = current_context_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword("editor","edit-block-fn","editor/edit-block-fn",-42933801).cljs$core$IFn$_invoke$arity$1(opts_SINGLEQUOTE_);
} else {
return and__5140__auto__;
}
}
})()),(function (publish_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(publish_QMARK_)?frontend.db.transact.publish_worker_response_BANG_(opts_SINGLEQUOTE_,delta,editor_rows,editor_row_uuids,current_context_QMARK_):null)),(function (ui_refresh_perf){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.transact.now_ms()),(function (ui_updated_at){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(publish_QMARK_)?frontend.db.transact.on_next_frame_BANG_((function (){
return frontend.db.transact.log_outliner_op_perf_BANG_(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"worker-to-ui-ms","worker-to-ui-ms",102556064),new cljs.core.Keyword(null,"perf-id","perf-id",-1628033853),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"worker-listener","worker-listener",-1590385433),new cljs.core.Keyword(null,"ui-refresh","ui-refresh",-1671817111),new cljs.core.Keyword(null,"total-to-next-frame-ms","total-to-next-frame-ms",-629603728),new cljs.core.Keyword(null,"op-count","op-count",-1218914478),new cljs.core.Keyword(null,"worker-roundtrip-ms","worker-roundtrip-ms",-435279501),new cljs.core.Keyword(null,"state-update-ms","state-update-ms",-72070924),new cljs.core.Keyword(null,"worker-perf","worker-perf",-1605010851),new cljs.core.Keyword(null,"worker-apply-ms","worker-apply-ms",-1303462115),new cljs.core.Keyword(null,"op-names","op-names",-944205955)],[(worker_returned_at - mutation_returned_at),perf_id,new cljs.core.Keyword(null,"ui-updated","ui-updated",904415436),new cljs.core.Keyword(null,"listener","listener",882147248).cljs$core$IFn$_invoke$arity$1(perf),ui_refresh_perf,(frontend.db.transact.now_ms() - started_at),cljs.core.count(ops),(mutation_returned_at - started_at),(ui_updated_at - worker_returned_at),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(perf,new cljs.core.Keyword(null,"listener","listener",882147248)),new cljs.core.Keyword(null,"apply-ms","apply-ms",-255508463).cljs$core$IFn$_invoke$arity$1(perf),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ops)]));
})):null)),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((frontend.util.web_platform_QMARK_)?frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","data-changed","graph/data-changed",-569340822),request_repo], null)):null)),(function (___27434__auto____$1){
return promesa.protocols._promise(result);
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}
} else {
return null;
}
});

//# sourceMappingURL=frontend.db.transact.js.map
