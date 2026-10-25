goog.provide('frontend.undo_redo');
frontend.undo_redo.worker_not_initialized_QMARK_ = (function frontend$undo_redo$worker_not_initialized_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("db-worker has not been initialized",cljs.core.ex_message(e));
});
frontend.undo_redo.normalize_empty_result = (function frontend$undo_redo$normalize_empty_result(result){
var G__66647 = result;
var G__66647__$1 = (((G__66647 instanceof cljs.core.Keyword))?G__66647.fqn:null);
switch (G__66647__$1) {
case "frontend.worker.undo-redo/empty-undo-stack":
return new cljs.core.Keyword("frontend.undo-redo","empty-undo-stack","frontend.undo-redo/empty-undo-stack",2108284741);

break;
case "frontend.worker.undo-redo/empty-redo-stack":
return new cljs.core.Keyword("frontend.undo-redo","empty-redo-stack","frontend.undo-redo/empty-redo-stack",-1539018639);

break;
default:
return result;

}
});
frontend.undo_redo.invoke_db_worker = (function frontend$undo_redo$invoke_db_worker(var_args){
var args__5882__auto__ = [];
var len__5876__auto___66670 = arguments.length;
var i__5877__auto___66671 = (0);
while(true){
if((i__5877__auto___66671 < len__5876__auto___66670)){
args__5882__auto__.push((arguments[i__5877__auto___66671]));

var G__66672 = (i__5877__auto___66671 + (1));
i__5877__auto___66671 = G__66672;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.undo_redo.invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.undo_redo.invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic = (function (thread_api,args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(frontend.state._LT_invoke_db_worker,thread_api,args);
}catch (e66650){var e = e66650;
if(frontend.undo_redo.worker_not_initialized_QMARK_(e)){
return null;
} else {
throw e;
}
}}));

(frontend.undo_redo.invoke_db_worker.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.undo_redo.invoke_db_worker.cljs$lang$applyTo = (function (seq66648){
var G__66649 = cljs.core.first(seq66648);
var seq66648__$1 = cljs.core.next(seq66648);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66649,seq66648__$1);
}));

frontend.undo_redo.clear_history_BANG_ = (function frontend$undo_redo$clear_history_BANG_(repo){
if(frontend.util.node_test_QMARK_){
return null;
} else {
return frontend.undo_redo.invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","undo-redo-clear-history","thread-api/undo-redo-clear-history",649167483),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0));
}
});
frontend.undo_redo.undo = (function frontend$undo_redo$undo(repo){
if(frontend.util.node_test_QMARK_){
return new cljs.core.Keyword("frontend.undo-redo","empty-undo-stack","frontend.undo-redo/empty-undo-stack",2108284741);
} else {
var or__5142__auto__ = (function (){var G__66656 = frontend.undo_redo.invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","undo-redo-undo","thread-api/undo-redo-undo",-1150708709),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0));
if((G__66656 == null)){
return null;
} else {
return frontend.undo_redo.normalize_empty_result(G__66656);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("frontend.undo-redo","empty-undo-stack","frontend.undo-redo/empty-undo-stack",2108284741);
}
}
});
frontend.undo_redo.redo = (function frontend$undo_redo$redo(repo){
if(frontend.util.node_test_QMARK_){
return new cljs.core.Keyword("frontend.undo-redo","empty-redo-stack","frontend.undo-redo/empty-redo-stack",-1539018639);
} else {
var or__5142__auto__ = (function (){var G__66658 = frontend.undo_redo.invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","undo-redo-redo","thread-api/undo-redo-redo",-173277310),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0));
if((G__66658 == null)){
return null;
} else {
return frontend.undo_redo.normalize_empty_result(G__66658);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("frontend.undo-redo","empty-redo-stack","frontend.undo-redo/empty-redo-stack",-1539018639);
}
}
});
frontend.undo_redo.record_editor_info_BANG_ = (function frontend$undo_redo$record_editor_info_BANG_(repo,editor_info){
if(cljs.core.truth_(editor_info)){
if(frontend.util.node_test_QMARK_){
return null;
} else {
return frontend.undo_redo.invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","undo-redo-record-editor-info","thread-api/undo-redo-record-editor-info",2076838667),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,editor_info], 0));
}
} else {
return null;
}
});
frontend.undo_redo.record_ui_state_BANG_ = (function frontend$undo_redo$record_ui_state_BANG_(repo,ui_state_str){
if(cljs.core.truth_(ui_state_str)){
if(frontend.util.node_test_QMARK_){
return null;
} else {
return frontend.undo_redo.invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","undo-redo-record-ui-state","thread-api/undo-redo-record-ui-state",-1692607651),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,ui_state_str], 0));
}
} else {
return null;
}
});
frontend.undo_redo._LT_get_debug_state = (function frontend$undo_redo$_LT_get_debug_state(repo){
if(frontend.util.node_test_QMARK_){
return null;
} else {
return frontend.undo_redo.invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","undo-redo-get-debug-state","thread-api/undo-redo-get-debug-state",-753007282),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0));
}
});

//# sourceMappingURL=frontend.undo_redo.js.map
