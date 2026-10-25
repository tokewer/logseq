goog.provide('logseq.api.db_based.cli');
logseq.api.db_based.cli.list_tags = (function logseq$api$db_based$cli$list_tags(options){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","api-list-tags","thread-api/api-list-tags",1546216836),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0))),(function (resp){
return promesa.protocols._promise(cljs.core.clj__GT_js(resp));
}));
}));
});
logseq.api.db_based.cli.list_properties = (function logseq$api$db_based$cli$list_properties(options){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","api-list-properties","thread-api/api-list-properties",-901740130),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0))),(function (resp){
return promesa.protocols._promise(cljs.core.clj__GT_js(resp));
}));
}));
});
logseq.api.db_based.cli.list_pages = (function logseq$api$db_based$cli$list_pages(options){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","api-list-pages","thread-api/api-list-pages",-933479833),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0))),(function (resp){
return promesa.protocols._promise(cljs.core.clj__GT_js(resp));
}));
}));
});
/**
 * Like get_page_blocks_tree but for API clients.
 */
logseq.api.db_based.cli.get_page_data = (function logseq$api$db_based$cli$get_page_data(page_title){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","api-get-page-data","thread-api/api-get-page-data",-1569813071),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),page_title], 0))),(function (resp){
return promesa.protocols._promise((cljs.core.truth_(resp)?cljs.core.clj__GT_js(resp):({"error": (""+"Page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_title], 0)))+" not found")})));
}));
}));
});
/**
 * Given a list of API operations, batch imports with resulting EDN data
 */
logseq.api.db_based.cli.upsert_nodes = (function logseq$api$db_based$cli$upsert_nodes(operations,options_STAR_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(operations,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))),(function (ops){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(options_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))),(function (p__100288){
var map__100289 = p__100288;
var map__100289__$1 = cljs.core.__destructure_map(map__100289);
var options = map__100289__$1;
var dry_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100289__$1,new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647));
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","api-build-upsert-nodes-edn","thread-api/api-build-upsert-nodes-edn",-1861318820),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),ops], 0))),(function (edn_data){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(dry_run)?null:(function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.batch_import_edn_BANG_(edn_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validate-scope","validate-scope",-933525068),new cljs.core.Keyword(null,"tx","tx",466630418)], null));
} else {
var _STAR_outliner_ops_STAR__orig_val__100290 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__100291 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__100291);

try{frontend.modules.outliner.op.batch_import_edn_BANG_(edn_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validate-scope","validate-scope",-933525068),new cljs.core.Keyword(null,"tx","tx",466630418)], null));

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"batch-import-edn","batch-import-edn",-1179589020)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__100290);
}}
})())),(function (p__100292){
var map__100293 = p__100292;
var map__100293__$1 = cljs.core.__destructure_map(map__100293);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100293__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(error)?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(error,cljs.core.PersistentArrayMap.EMPTY)})():null)),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0()),(function (___27434__auto____$1){
return promesa.protocols._promise(logseq.api.db_based.util.summarize_upsert_operations(ops,options));
}));
}));
}));
}));
}));
}));
}));
});
/**
 * Given EDN data as a transitized string, converts to EDN and imports it.
 */
logseq.api.db_based.cli.import_edn = (function logseq$api$db_based$cli$import_edn(edn_data_STAR_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.db.sqlite.util.read_transit_str(edn_data_STAR_)),(function (edn_data){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.batch_import_edn_BANG_(edn_data,cljs.core.PersistentArrayMap.EMPTY);
} else {
var _STAR_outliner_ops_STAR__orig_val__100294 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__100295 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__100295);

try{frontend.modules.outliner.op.batch_import_edn_BANG_(edn_data,cljs.core.PersistentArrayMap.EMPTY);

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"batch-import-edn","batch-import-edn",-1179589020)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__100294);
}}
})()),(function (p__100296){
var map__100297 = p__100296;
var map__100297__$1 = cljs.core.__destructure_map(map__100297);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100297__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(error)?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(error,cljs.core.PersistentArrayMap.EMPTY)})():null)),(function (___27434__auto__){
return promesa.protocols._promise(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0());
}));
}));
}));
}));
});
/**
 * Given sqlite.export options, exports the current graph as a json map with the
 *   :export-body key containing a transit string of the export EDN
 */
logseq.api.db_based.cli.export_edn = (function logseq$api$db_based$cli$export_edn(options_STAR_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(options_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),new cljs.core.Keyword(null,"export-type","export-type",-2087639167),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,new cljs.core.Keyword(null,"graph","graph",1558099509)))),(function (options){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","export-edn","thread-api/export-edn",507686782),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),options], 0))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"export-edn-error","export-edn-error",867881458).cljs$core$IFn$_invoke$arity$1(result))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Export EDN Error: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"export-edn-error","export-edn-error",867881458).cljs$core$IFn$_invoke$arity$1(result))),cljs.core.PersistentArrayMap.EMPTY)})():null)),(function (___27434__auto__){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"export-body","export-body",1898300799),logseq.db.sqlite.util.write_transit_str(result),new cljs.core.Keyword(null,"graph","graph",1558099509),clojure.string.replace_first(frontend.state.get_current_repo(),logseq.common.config.db_version_prefix,"")], null));
}));
}));
}));
}));
});

//# sourceMappingURL=logseq.api.db_based.cli.js.map
