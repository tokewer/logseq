goog.provide('frontend.handler.common.developer');
frontend.handler.common.developer._LT_invoke_db_worker = frontend.state._LT_invoke_db_worker;
frontend.handler.common.developer.debug_pull_result = (function frontend$handler$common$developer$debug_pull_result(result){
var G__79500 = result;
var G__79500__$1 = ((cljs.core.seq(new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(result)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79500,new cljs.core.Keyword("block.debug","properties","block.debug/properties",1532223470),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("block","properties","block/properties",708347145).cljs$core$IFn$_invoke$arity$1(result))):G__79500);
if(cljs.core.seq(new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(result))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79500__$1,new cljs.core.Keyword("block.debug","refs","block.debug/refs",-1504277838),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__79499_SHARP_){
var or__5142__auto__ = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(p1__79499_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return p1__79499_SHARP_;
}
}),new cljs.core.Keyword("block","refs","block/refs",-1214495349).cljs$core$IFn$_invoke$arity$1(result)));
} else {
return G__79500__$1;
}
});
frontend.handler.common.developer.show_entity_data = (function frontend$handler$common$developer$show_entity_data(eid){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__79501 = new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100);
var G__79502 = frontend.state.get_current_repo();
var G__79503 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__79504 = eid;
return (frontend.handler.common.developer._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$4 ? frontend.handler.common.developer._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$4(G__79501,G__79502,G__79503,G__79504) : frontend.handler.common.developer._LT_invoke_db_worker.call(null,G__79501,G__79502,G__79503,G__79504));
})()),(function (result_STAR_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.common.developer.debug_pull_result(result_STAR_)),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__79505_79534 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__79506_79535 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__79507_79536 = true;
var _STAR_print_fn_STAR__temp_val__79508_79537 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__79507_79536);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__79508_79537);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(result);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__79506_79535);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__79505_79534);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})()),(function (pull_data){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pull_data], 0))),(function (___27434__auto__){
return promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-wrap-widen","div.ls-wrap-widen",-1882036990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code","pre.code",2043838796),(""+"ID: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(result))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pull_data))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var G__79512 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return navigator.clipboard.writeText(pull_data);
})], null);
var G__79513 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","copy-to-clipboard","ui/copy-to-clipboard",-1375472471)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__79512,G__79513) : logseq.shui.ui.button.call(null,G__79512,G__79513));
})()], null),new cljs.core.Keyword(null,"success","success",1890645906),false));
}));
}));
}));
}));
}));
});
frontend.handler.common.developer.show_content_ast = (function frontend$handler$common$developer$show_content_ast(content,format){
var ast_data = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__79514_79538 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__79515_79539 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__79516_79540 = true;
var _STAR_print_fn_STAR__temp_val__79517_79541 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__79516_79540);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__79517_79541);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(frontend.format.mldoc.__GT_edn(content,format));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__79515_79539);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__79514_79538);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast_data], 0));

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-wrap-widen","div.ls-wrap-widen",-1882036990),(function (){var G__79519 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return navigator.clipboard.writeText(ast_data);
})], null);
var G__79520 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("ui","copy-to-clipboard","ui/copy-to-clipboard",-1375472471)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__79519,G__79520) : logseq.shui.ui.button.call(null,G__79519,G__79520));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code","pre.code",2043838796),ast_data], null)], null),new cljs.core.Keyword(null,"success","success",1890645906),false);
});
frontend.handler.common.developer.show_block_data = (function frontend$handler$common$developer$show_block_data(){
var temp__5823__auto__ = new cljs.core.Keyword(null,"block-id","block-id",-70582834).cljs$core$IFn$_invoke$arity$1(cljs.core.first(frontend.state.get_editor_args()));
if(cljs.core.truth_(temp__5823__auto__)){
var block_uuid = temp__5823__auto__;
return frontend.handler.common.developer.show_entity_data(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_uuid], null));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","not-found-warning","block/not-found-warning",1111887794)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
goog.exportSymbol('frontend.handler.common.developer.show_block_data', frontend.handler.common.developer.show_block_data);
frontend.handler.common.developer.show_block_ast = (function frontend$handler$common$developer$show_block_ast(){
var temp__5823__auto__ = new cljs.core.Keyword(null,"block","block",664686210).cljs$core$IFn$_invoke$arity$1(cljs.core.first(frontend.state.get_editor_args()));
if(cljs.core.truth_(temp__5823__auto__)){
var map__79522 = temp__5823__auto__;
var map__79522__$1 = cljs.core.__destructure_map(map__79522);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79522__$1,new cljs.core.Keyword("block","title","block/title",710445684));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79522__$1,new cljs.core.Keyword("block","format","block/format",-1212045901));
return frontend.handler.common.developer.show_content_ast(title,(function (){var or__5142__auto__ = format;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"markdown","markdown",1227225089);
}
})());
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","not-found-warning","block/not-found-warning",1111887794)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
goog.exportSymbol('frontend.handler.common.developer.show_block_ast', frontend.handler.common.developer.show_block_ast);
frontend.handler.common.developer.show_page_data = (function frontend$handler$common$developer$show_page_data(){
var temp__5823__auto__ = frontend.util.page.get_current_page_id();
if(cljs.core.truth_(temp__5823__auto__)){
var page_id = temp__5823__auto__;
return frontend.handler.common.developer.show_entity_data(page_id);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","not-found-warning","page/not-found-warning",1109504384)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
goog.exportSymbol('frontend.handler.common.developer.show_page_data', frontend.handler.common.developer.show_page_data);
frontend.handler.common.developer.validate_db = (function frontend$handler$common$developer$validate_db(){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","validate-db","thread-api/validate-db",2061031012),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo()], 0));
});
goog.exportSymbol('frontend.handler.common.developer.validate_db', frontend.handler.common.developer.validate_db);
frontend.handler.common.developer.checksum_export_file_name = (function frontend$handler$common$developer$checksum_export_file_name(repo){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.replace((function (){var or__5142__auto__ = repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "graph";
}
})(),/^\/+/,""),/[\\\/]+/,"_"))+"_checksum_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.quot((frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null)),(1000))));
});
frontend.handler.common.developer.client_ops_export_file_name = (function frontend$handler$common$developer$client_ops_export_file_name(repo){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.replace((function (){var or__5142__auto__ = repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "graph";
}
})(),/^\/+/,""),/[\\\/]+/,"_"))+"_client_ops_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.quot((frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null)),(1000))));
});
frontend.handler.common.developer._LT_fetch_server_checksum_diagnostics = (function frontend$handler$common$developer$_LT_fetch_server_checksum_diagnostics(repo){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync.http_base()),(function (base){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-rtc-graph-uuid","thread-api/get-rtc-graph-uuid",-249168913),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0))),(function (graph_id_SINGLEQUOTE_){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__79524 = graph_id_SINGLEQUOTE_;
if((G__79524 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79524));
}
})()),(function (graph_id){
return promesa.protocols._promise(((((cljs.core.seq(base)) && (cljs.core.seq(graph_id))))?frontend.handler.db_based.sync.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)+"/sync/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_id)+"/checksum/diagnostics"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error-schema","error-schema",1518568094),new cljs.core.Keyword(null,"error","error",-978969032)], null)):promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("missing sync diagnostics context",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"base","base",185279322),base,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),graph_id], null)))));
}));
}));
}));
}));
});
frontend.handler.common.developer.normalize_diff_block = (function frontend$handler$common$developer$normalize_diff_block(p__79525){
var map__79526 = p__79525;
var map__79526__$1 = cljs.core.__destructure_map(map__79526);
var block = map__79526__$1;
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79526__$1,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79526__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79526__$1,new cljs.core.Keyword("block","page","block/page",822314108));
var G__79527 = block;
var G__79527__$1 = (cljs.core.truth_(uuid)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79527,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid))):G__79527);
var G__79527__$2 = (cljs.core.truth_(parent)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79527__$1,new cljs.core.Keyword("block","parent","block/parent",-918309064),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent))):G__79527__$1);
if(cljs.core.truth_(page)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79527__$2,new cljs.core.Keyword("block","page","block/page",822314108),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)));
} else {
return G__79527__$2;
}
});
frontend.handler.common.developer.blocks_by_uuid = (function frontend$handler$common$developer$blocks_by_uuid(blocks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (block){
var block_SINGLEQUOTE_ = frontend.handler.common.developer.normalize_diff_block(block);
var uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block_SINGLEQUOTE_);
if(cljs.core.seq(uuid)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uuid,block_SINGLEQUOTE_], null);
} else {
return null;
}
})),blocks);
});
frontend.handler.common.developer.different_blocks = (function frontend$handler$common$developer$different_blocks(local_blocks,server_blocks){
var local_by_uuid = frontend.handler.common.developer.blocks_by_uuid(local_blocks);
var server_by_uuid = frontend.handler.common.developer.blocks_by_uuid(server_blocks);
var block_uuids = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(local_by_uuid)),cljs.core.set(cljs.core.keys(server_by_uuid))));
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (uuid){
var local_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(local_by_uuid,uuid);
var server_block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(server_by_uuid,uuid);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(local_block,server_block)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),uuid,new cljs.core.Keyword(null,"local-block","local-block",-721032093),local_block,new cljs.core.Keyword(null,"server-block","server-block",1688474977),server_block], null);
} else {
return null;
}
}),block_uuids));
});
frontend.handler.common.developer._LT_log_checksum_mismatch_diff_BANG_ = (function frontend$handler$common$developer$_LT_log_checksum_mismatch_diff_BANG_(repo,export_edn){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.common.developer._LT_fetch_server_checksum_diagnostics(repo)),(function (server_diagnostics){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),cljs.core.uuid(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(b)),new cljs.core.Keyword("block","parent","block/parent",-918309064),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return cljs.core.uuid(id);
} else {
return null;
}
})(),new cljs.core.Keyword("block","page","block/page",822314108),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return cljs.core.uuid(id);
} else {
return null;
}
})(),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(b)], null);
}),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(server_diagnostics))),(function (server_blocks){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.common.developer.different_blocks(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(export_edn),server_blocks)),(function (diff_blocks){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"local-checksum","local-checksum",-629254768),new cljs.core.Keyword(null,"local-checksum","local-checksum",-629254768).cljs$core$IFn$_invoke$arity$1(export_edn),new cljs.core.Keyword(null,"remote-checksum","remote-checksum",363753456),new cljs.core.Keyword(null,"remote-checksum","remote-checksum",363753456).cljs$core$IFn$_invoke$arity$1(export_edn),new cljs.core.Keyword(null,"recomputed-checksum","recomputed-checksum",70414490),new cljs.core.Keyword(null,"recomputed-checksum","recomputed-checksum",70414490).cljs$core$IFn$_invoke$arity$1(export_edn),new cljs.core.Keyword(null,"server-checksum","server-checksum",74982053),new cljs.core.Keyword(null,"checksum","checksum",549736371).cljs$core$IFn$_invoke$arity$1(server_diagnostics),new cljs.core.Keyword(null,"different-blocks","different-blocks",1120156872),diff_blocks], null)),(function (diff_data){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(diff_data)),(function (___27434__auto__){
return promesa.protocols._promise(((cljs.core.seq(diff_blocks))?console.warn("Checksum mismatch between client and server. Diff data:",diff_data):null));
}));
}));
}));
}));
}));
}));
});
frontend.handler.common.developer.recompute_checksum_diagnostics = (function frontend$handler$common$developer$recompute_checksum_diagnostics(){
var temp__5823__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5823__auto__)){
var repo = temp__5823__auto__;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","recompute-checksum-diagnostics","thread-api/recompute-checksum-diagnostics",1552611383),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0)),(function (p__79528){
var map__79529 = p__79528;
var map__79529__$1 = cljs.core.__destructure_map(map__79529);
var result = map__79529__$1;
var recomputed_checksum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79529__$1,new cljs.core.Keyword(null,"recomputed-checksum","recomputed-checksum",70414490));
var local_checksum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79529__$1,new cljs.core.Keyword(null,"local-checksum","local-checksum",-629254768));
var remote_checksum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79529__$1,new cljs.core.Keyword(null,"remote-checksum","remote-checksum",363753456));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79529__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var checksum_attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79529__$1,new cljs.core.Keyword(null,"checksum-attrs","checksum-attrs",1428168607));
var e2ee_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79529__$1,new cljs.core.Keyword(null,"e2ee?","e2ee?",1272351286));
if(cljs.core.map_QMARK_(result)){
var export_edn = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"generated-at","generated-at",-567727583),(new Date()).toISOString(),new cljs.core.Keyword(null,"e2ee?","e2ee?",1272351286),e2ee_QMARK_,new cljs.core.Keyword(null,"recomputed-checksum","recomputed-checksum",70414490),recomputed_checksum,new cljs.core.Keyword(null,"local-checksum","local-checksum",-629254768),local_checksum,new cljs.core.Keyword(null,"remote-checksum","remote-checksum",363753456),remote_checksum,new cljs.core.Keyword(null,"checksum-attrs","checksum-attrs",1428168607),checksum_attrs,new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks], null);
var content = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__79530_79542 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__79531_79543 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__79532_79544 = true;
var _STAR_print_fn_STAR__temp_val__79533_79545 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__79532_79544);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__79533_79545);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(export_edn);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__79531_79543);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__79530_79542);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
var blob = (new Blob([content],cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text/edn;charset=utf-8"], null))));
var filename = frontend.handler.common.developer.checksum_export_file_name(repo);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.handler.common.developer._LT_log_checksum_mismatch_diff_BANG_(repo,export_edn),(function (error){
console.error("checksum mismatch diff fetch failed:",error);

return null;
}))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(module$frontend$utils.saveToFile(blob,filename,"edn")),(function (___27434__auto__){
return promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.diagnostics","checksum-recomputed-success","graph.diagnostics/checksum-recomputed-success",-1320971675),recomputed_checksum,(function (){var or__5142__auto__ = local_checksum;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "<nil>";
}
})(),(function (){var or__5142__auto__ = remote_checksum;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "<nil>";
}
})(),filename,cljs.core.count(blocks),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([checksum_attrs], 0))], 0)),new cljs.core.Keyword(null,"success","success",1890645906),false));
}));
}));
}));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.diagnostics","checksum-unavailable-warning","graph.diagnostics/checksum-unavailable-warning",1294296916)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
})),(function (error){
console.error("recompute-checksum-diagnostics failed:",error);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.diagnostics","checksum-failed-error","graph.diagnostics/checksum-failed-error",-278222099)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
}));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.diagnostics","no-graph-warning","graph.diagnostics/no-graph-warning",-54500152)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
goog.exportSymbol('frontend.handler.common.developer.recompute_checksum_diagnostics', frontend.handler.common.developer.recompute_checksum_diagnostics);
frontend.handler.common.developer.export_client_ops_sqlite = (function frontend$handler$common$developer$export_client_ops_sqlite(){
if(((frontend.util.web_platform_QMARK_) && (cljs.core.not(frontend.util.electron_QMARK_())))){
var temp__5823__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5823__auto__)){
var repo = temp__5823__auto__;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","export-client-ops-db-binary","thread-api/export-client-ops-db-binary",-2127974770),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0)),(function (data){
if((data instanceof Uint8Array)){
var filename = frontend.handler.common.developer.client_ops_export_file_name(repo);
var blob = (new Blob([data],cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"application/octet-stream"], null))));
module$frontend$utils.saveToFile(blob,filename,"sqlite");

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.diagnostics","client-ops-export-success","graph.diagnostics/client-ops-export-success",-2016960769),filename], 0)),new cljs.core.Keyword(null,"success","success",1890645906),false);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.diagnostics","client-ops-export-invalid-payload-warning","graph.diagnostics/client-ops-export-invalid-payload-warning",1503815412),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(data)], 0))], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
})),(function (error){
console.error("export-client-ops-sqlite failed:",error);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.diagnostics","client-ops-export-failed-error","graph.diagnostics/client-ops-export-failed-error",-351369976)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
}));
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.diagnostics","no-graph-warning","graph.diagnostics/no-graph-warning",-54500152)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph.diagnostics","client-ops-export-invalid-payload-warning","graph.diagnostics/client-ops-export-invalid-payload-warning",1503815412),"web app only"], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
}
});
goog.exportSymbol('frontend.handler.common.developer.export_client_ops_sqlite', frontend.handler.common.developer.export_client_ops_sqlite);
frontend.handler.common.developer.import_chosen_graph = (function frontend$handler$common$developer$import_chosen_graph(repo){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_unsafe_delete(repo)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","updated-switching","graph/updated-switching",-867543127)], 0)),new cljs.core.Keyword(null,"success","success",1890645906))),(function (___27434__auto__){
return promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),repo], null)));
}));
}));
}));
});
frontend.handler.common.developer.replace_graph_with_db_file = (function frontend$handler$common$developer$replace_graph_with_db_file(){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dialog-select","db-graph-replace","dialog-select/db-graph-replace",1491312407)], null));
});
goog.exportSymbol('frontend.handler.common.developer.replace_graph_with_db_file', frontend.handler.common.developer.replace_graph_with_db_file);
frontend.handler.common.developer.rtc_stop = (function frontend$handler$common$developer$rtc_stop(){
return frontend.handler.db_based.sync._LT_rtc_stop_BANG_();
});
goog.exportSymbol('frontend.handler.common.developer.rtc_stop', frontend.handler.common.developer.rtc_stop);
frontend.handler.common.developer.rtc_start = (function frontend$handler$common$developer$rtc_start(){
return frontend.handler.db_based.sync._LT_rtc_start_BANG_(frontend.state.get_current_repo());
});
goog.exportSymbol('frontend.handler.common.developer.rtc_start', frontend.handler.common.developer.rtc_start);

//# sourceMappingURL=frontend.handler.common.developer.js.map
