goog.provide('frontend.handler.db_based.import$');
var module$node_modules$jszip$dist$jszip_min=shadow.js.require("module$node_modules$jszip$dist$jszip_min", {});
frontend.handler.db_based.import$._LT_transact_import_marker_BANG_ = (function frontend$handler$db_based$import$_LT_transact_import_marker_BANG_(graph,import_type){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","transact","thread-api/transact",917721609),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,logseq.db.sqlite.util.import_tx(import_type),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"import-db?","import-db?",-1667640326),true], null),null], 0));
});
frontend.handler.db_based.import$.zip_entries = (function frontend$handler$db_based$import$zip_entries(zip){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (name){
var entry = (zip.files[name]);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"entry","entry",505168823),entry,new cljs.core.Keyword(null,"dir?","dir?",121338325),entry.dir === true], null);
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(Object.keys(zip.files))));
});
frontend.handler.db_based.import$.sqlite_entry = (function frontend$handler$db_based$import$sqlite_entry(entries){
var candidates = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__99521){
var map__99522 = p__99521;
var map__99522__$1 = cljs.core.__destructure_map(map__99522);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99522__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var dir_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99522__$1,new cljs.core.Keyword(null,"dir?","dir?",121338325));
var name__$1 = clojure.string.lower_case(clojure.string.replace(name,/\+/,"/"));
return ((cljs.core.not(dir_QMARK_)) && (clojure.string.ends_with_QMARK_(name__$1,"db.sqlite")));
}),entries);
return cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"name","name",1843675177)),candidates));
});
frontend.handler.db_based.import$.asset_entry_QMARK_ = (function frontend$handler$db_based$import$asset_entry_QMARK_(name){
var name__$1 = clojure.string.lower_case(clojure.string.replace(name,/\+/,"/"));
return ((clojure.string.starts_with_QMARK_(name__$1,"assets/")) || (clojure.string.includes_QMARK_(name__$1,"/assets/")));
});
frontend.handler.db_based.import$.asset_file_name = (function frontend$handler$db_based$import$asset_file_name(name){
var name__$1 = clojure.string.replace(name,/\+/,"/");
var name__$2 = (function (){var temp__5823__auto__ = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(name__$1,"/assets/");
if(cljs.core.truth_(temp__5823__auto__)){
var idx = temp__5823__auto__;
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name__$1,(idx + (("/assets/").length)));
} else {
return clojure.string.replace_first(name__$1,/^assets\//,"");
}
})();
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(name__$2,/\//));
});
frontend.handler.db_based.import$._LT_copy_zip_assets_BANG_ = (function frontend$handler$db_based$import$_LT_copy_zip_assets_BANG_(repo,entries,p__99523){
var map__99524 = p__99523;
var map__99524__$1 = cljs.core.__destructure_map(map__99524);
var progress_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99524__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99524__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var assets = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__99525){
var map__99526 = p__99525;
var map__99526__$1 = cljs.core.__destructure_map(map__99526);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99526__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var dir_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99526__$1,new cljs.core.Keyword(null,"dir?","dir?",121338325));
return ((cljs.core.not(dir_QMARK_)) && (frontend.handler.db_based.import$.asset_entry_QMARK_(name)));
}),entries));
if(cljs.core.empty_QMARK_(assets)){
return promesa.core.resolved(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"copied","copied",991643975),(0),new cljs.core.Keyword(null,"failed","failed",-1397425762),cljs.core.PersistentVector.EMPTY], null));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.config.get_repo_dir(repo)),(function (repo_dir){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(repo_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.common.config.local_assets_dir], 0))),(function (assets_dir){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.mkdir_if_not_exists(assets_dir)),(function (_){
return promesa.protocols._promise(promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve_fn_99531,reject_fn_99530){
var loop_fn_99527 = (function frontend$handler$db_based$import$_LT_copy_zip_assets_BANG__$_loop_fn_99527(remaining,count,failed){
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (res_99528,err_99529){
if((!((err_99529 == null)))){
return (reject_fn_99530.cljs$core$IFn$_invoke$arity$1 ? reject_fn_99530.cljs$core$IFn$_invoke$arity$1(err_99529) : reject_fn_99530.call(null,err_99529));
} else {
if(promesa.core.recur_QMARK_(res_99528)){
promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(frontend$handler$db_based$import$_LT_copy_zip_assets_BANG__$_loop_fn_99527,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(res_99528));
})));

return null;
} else {
return (resolve_fn_99531.cljs$core$IFn$_invoke$arity$1 ? resolve_fn_99531.cljs$core$IFn$_invoke$arity$1(res_99528) : resolve_fn_99531.call(null,res_99528));
}
}
}),promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(remaining),(function (remaining__$1){
return promesa.protocols._mcat(promesa.protocols._promise(count),(function (count__$1){
return promesa.protocols._mcat(promesa.protocols._promise(failed),(function (failed__$1){
return promesa.protocols._promise(((cljs.core.empty_QMARK_(remaining__$1))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"copied","copied",991643975),count__$1,new cljs.core.Keyword(null,"failed","failed",-1397425762),failed__$1], null):(function (){var map__99532 = cljs.core.first(remaining__$1);
var map__99532__$1 = cljs.core.__destructure_map(map__99532);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99532__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99532__$1,new cljs.core.Keyword(null,"entry","entry",505168823));
var file_name = frontend.handler.db_based.import$.asset_file_name(name);
if(clojure.string.blank_QMARK_(file_name)){
return promesa.core.__GT_Recur(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(remaining__$1,(1)),count__$1,failed__$1], null));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(entry.async("uint8array")),(function (data){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.fs.write_asset_file_BANG_(repo,file_name,data),(function (e){
console.error(e);

return new cljs.core.Keyword("frontend.handler.db-based.import","write-failed","frontend.handler.db-based.import/write-failed",-1236786640);
}))),(function (write_result){
return promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.handler.db-based.import","write-failed","frontend.handler.db-based.import/write-failed",-1236786640),write_result))?promesa.core.__GT_Recur(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(remaining__$1,(1)),count__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(failed__$1,file_name)], null)):(function (){var next_count = (count__$1 + (1));
if(cljs.core.truth_(progress_fn)){
(progress_fn.cljs$core$IFn$_invoke$arity$2 ? progress_fn.cljs$core$IFn$_invoke$arity$2(next_count,total) : progress_fn.call(null,next_count,total));
} else {
}

return promesa.core.__GT_Recur(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(remaining__$1,(1)),next_count,failed__$1], null));
})()));
}));
}));
}));
}
})()));
}));
}));
}));
})));
});
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings((function (){
return loop_fn_99527(assets,(0),cljs.core.PersistentVector.EMPTY);
})));
})));
}));
}));
}));
}));
}
});
frontend.handler.db_based.import$.import_from_sqlite_db_BANG_ = (function frontend$handler$db_based$import$import_from_sqlite_db_BANG_(buffer,bare_graph_name,finished_ok_handler){
var graph = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.db_version_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(bare_graph_name));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_import_db(graph,buffer)),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.add_repo_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),graph], null))),(function (___27434__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$core$IFn$_invoke$arity$variadic(graph,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"import-type","import-type",-499283032),new cljs.core.Keyword(null,"sqlite-db","sqlite-db",-17073529)], null)], 0))),(function (___27434__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_current_repo_BANG_(graph)),(function (___27434__auto____$3){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_export_db(graph,cljs.core.PersistentArrayMap.EMPTY)),(function (___27434__auto____$4){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.import$._LT_transact_import_marker_BANG_(graph,new cljs.core.Keyword(null,"sqlite-db","sqlite-db",-17073529))),(function (___27434__auto____$5){
return promesa.protocols._promise((finished_ok_handler.cljs$core$IFn$_invoke$arity$0 ? finished_ok_handler.cljs$core$IFn$_invoke$arity$0() : finished_ok_handler.call(null)));
}));
}));
}));
}));
}));
}));
})),(function (e){
console.error(e);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)),new cljs.core.Keyword(null,"error","error",-978969032));
}));
});
frontend.handler.db_based.import$.import_from_sqlite_zip_BANG_ = (function frontend$handler$db_based$import$import_from_sqlite_zip_BANG_(file,bare_graph_name,finished_ok_handler){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(file.arrayBuffer()),(function (zip_buffer){
return promesa.protocols._mcat(promesa.protocols._promise(module$node_modules$jszip$dist$jszip_min.loadAsync(zip_buffer)),(function (zip){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.import$.zip_entries(zip)),(function (entries){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.import$.sqlite_entry(entries)),(function (entry){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__99533){
var map__99534 = p__99533;
var map__99534__$1 = cljs.core.__destructure_map(map__99534);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99534__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var dir_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99534__$1,new cljs.core.Keyword(null,"dir?","dir?",121338325));
return ((cljs.core.not(dir_QMARK_)) && (frontend.handler.db_based.import$.asset_entry_QMARK_(name)));
}),entries))),(function (asset_total){
return promesa.protocols._mcat(promesa.protocols._promise((((asset_total > (0)))?(function (){
frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617),new cljs.core.Keyword(null,"sqlite-zip","sqlite-zip",-1771865595));

return frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"total","total",1916810418),asset_total,new cljs.core.Keyword(null,"current-idx","current-idx",1734114444),(0),new cljs.core.Keyword(null,"current-page","current-page",-101294180),"Assets"], null));
})()
:null)),(function (_){
return promesa.protocols._promise(((cljs.core.not(entry))?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","zip-missing-db-sqlite","import/zip-missing-db-sqlite",204096205)], 0)),new cljs.core.Keyword(null,"error","error",-978969032)):(function (){
(logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(entry).async("arraybuffer")),(function (sqlite_buffer){
return promesa.protocols._promise(frontend.handler.db_based.import$.import_from_sqlite_db_BANG_(sqlite_buffer,bare_graph_name,(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.import$._LT_copy_zip_assets_BANG_(repo,entries,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"total","total",1916810418),asset_total,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855),(function (current,total){
if((total > (0))){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"current-idx","current-idx",1734114444),current,new cljs.core.Keyword(null,"current-page","current-page",-101294180),"Assets"], null));
} else {
return null;
}
})], null))),(function (p__99535){
var map__99536 = p__99535;
var map__99536__$1 = cljs.core.__destructure_map(map__99536);
var copied = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99536__$1,new cljs.core.Keyword(null,"copied","copied",991643975));
var failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99536__$1,new cljs.core.Keyword(null,"failed","failed",-1397425762));
return promesa.protocols._mcat(promesa.protocols._promise((((copied > (0)))?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","assets-imported","import/assets-imported",-1291473938),copied], 0)),new cljs.core.Keyword(null,"success","success",1890645906)):null)),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(failed))?(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","assets-skipped","import/assets-skipped",-1060977037),cljs.core.count(failed)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

return console.warn("Zip import skipped assets:",cljs.core.clj__GT_js(failed));
})()
:null)),(function (___27434__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((((((asset_total > (0))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(asset_total,(copied + cljs.core.count(failed))))))?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","assets-import-partial","import/assets-import-partial",-1797628209),copied,asset_total], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false):null)),(function (___27434__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617),null)),(function (___27434__auto____$3){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),null)),(function (___27434__auto____$4){
return promesa.protocols._promise((finished_ok_handler.cljs$core$IFn$_invoke$arity$0 ? finished_ok_handler.cljs$core$IFn$_invoke$arity$0() : finished_ok_handler.call(null)));
}));
}));
}));
}));
}));
}));
}));
}));
})));
}));
}));
})()
));
}));
}));
}));
}));
}));
}));
})),(function (e){
console.error(e);

frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617),null);

frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing-state","graph/importing-state",34918559),null);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","zip-import-error","import/zip-import-error",498245994),e.message], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
}));
});
frontend.handler.db_based.import$.import_from_debug_transit_BANG_ = (function frontend$handler$db_based$import$import_from_debug_transit_BANG_(bare_graph_name,raw,finished_ok_handler){
var graph = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.db_version_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(bare_graph_name));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_new(graph,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import-type","import-type",-499283032),new cljs.core.Keyword(null,"debug-transit","debug-transit",1290387396),new cljs.core.Keyword(null,"debug-transit-raw","debug-transit-raw",1539936173),raw], null))),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.add_repo_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),graph], null))),(function (___27434__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$core$IFn$_invoke$arity$variadic(graph,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"import-type","import-type",-499283032),new cljs.core.Keyword(null,"debug-transit","debug-transit",1290387396)], null)], 0))),(function (___27434__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.import$._LT_transact_import_marker_BANG_(graph,new cljs.core.Keyword(null,"debug-transit","debug-transit",1290387396))),(function (___27434__auto____$3){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_current_repo_BANG_(graph)),(function (___27434__auto____$4){
return promesa.protocols._promise((finished_ok_handler.cljs$core$IFn$_invoke$arity$0 ? finished_ok_handler.cljs$core$IFn$_invoke$arity$0() : finished_ok_handler.call(null)));
}));
}));
}));
}));
}));
}));
});
/**
 * Creates a new DB graph and imports sqlite.build EDN file
 */
frontend.handler.db_based.import$.import_from_edn_file_BANG_ = (function frontend$handler$db_based$import$import_from_edn_file_BANG_(bare_graph_name,file_body,finished_ok_handler){
var graph = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.db_version_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(bare_graph_name));
var finished_error_handler = (function (){
frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","importing","graph/importing",1647644617),null);

return (logseq.shui.ui.dialog_close_all_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_all_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_all_BANG_.call(null));
});
var edn_data = (function (){try{return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(file_body);
}catch (e99537){var e = e99537;
console.error(e);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","invalid-edn-file","import/invalid-edn-file",1645542181)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

finished_error_handler();

return null;
}})();
if((!((edn_data == null)))){
var temp__5823__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(logseq.db.sqlite.export$.validate_export(edn_data));
if(cljs.core.truth_(temp__5823__auto__)){
var error = temp__5823__auto__;
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.Keyword(null,"error","error",-978969032));

return finished_error_handler();
} else {
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_new(graph,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"import-type","import-type",-499283032),new cljs.core.Keyword(null,"edn","edn",1317840885)], null))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.add_repo_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),graph], null))),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo.restore_and_setup_repo_BANG_.cljs$core$IFn$_invoke$arity$variadic(graph,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"import-type","import-type",-499283032),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)], 0))),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_current_repo_BANG_(graph)),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.batch_import_edn_BANG_(edn_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"import-db?","import-db?",-1667640326),true], null)], null));
} else {
var _STAR_outliner_ops_STAR__orig_val__99538 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__99539 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__99539);

try{frontend.modules.outliner.op.batch_import_edn_BANG_(edn_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"import-db?","import-db?",-1667640326),true], null)], null));

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"batch-import-edn","batch-import-edn",-1179589020)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__99538);
}}
})()),(function (p__99540){
var map__99541 = p__99540;
var map__99541__$1 = cljs.core.__destructure_map(map__99541);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99541__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return promesa.protocols._promise((cljs.core.truth_(error)?(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.Keyword(null,"error","error",-978969032));

return finished_error_handler();
})()
:(finished_ok_handler.cljs$core$IFn$_invoke$arity$0 ? finished_ok_handler.cljs$core$IFn$_invoke$arity$0() : finished_ok_handler.call(null))));
}));
}));
}));
}));
}));
})),(function (e){
console.error(e);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","unexpected-error","import/unexpected-error",734336150),e.message], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

return finished_error_handler();
}));
}
} else {
return null;
}
});
frontend.handler.db_based.import$._LT_current_import_block = (function frontend$handler$db_based$import$_LT_current_import_block(){
var temp__5823__auto__ = new cljs.core.Keyword(null,"block-id","block-id",-70582834).cljs$core$IFn$_invoke$arity$1(cljs.core.first(frontend.state.get_editor_args()));
if(cljs.core.truth_(temp__5823__auto__)){
var eid = temp__5823__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","page","block/page",822314108),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),eid], null)], 0))),(function (ent){
return promesa.protocols._promise(((cljs.core.not(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(ent)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","cannot-import-block-into-non-block-entity","import/cannot-import-block-into-non-block-entity",1863401201)], 0))], null):cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(ent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","page","block/page",822314108),cljs.core.select_keys(new cljs.core.Keyword("block","page","block/page",822314108).cljs$core$IFn$_invoke$arity$1(ent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null))], null)], 0))));
}));
}));
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("block","not-found-warning","block/not-found-warning",1111887794)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));

return promesa.core.resolved(null);
}
});
frontend.handler.db_based.import$.import_edn_data_from_form = (function frontend$handler$db_based$import$import_edn_data_from_form(import_inputs,_e){
var export_map = (function (){try{return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"import-data","import-data",1112436948).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(import_inputs)));
}catch (e99542){var _err = e99542;
return new cljs.core.Keyword("frontend.handler.db-based.import","invalid-import","frontend.handler.db-based.import/invalid-import",1379978555);
}})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.handler.db-based.import","invalid-import","frontend.handler.db-based.import/invalid-import",1379978555),export_map)) || ((!(cljs.core.map_QMARK_(export_map)))))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","submitted-edn-invalid","import/submitted-edn-invalid",620030515)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("logseq.db.sqlite.export","block","logseq.db.sqlite.export/block",469582025).cljs$core$IFn$_invoke$arity$1(export_map))?frontend.handler.db_based.import$._LT_current_import_block():null)),(function (block){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(block))?(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"error","error",-978969032));

return (logseq.shui.ui.dialog_close_all_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_all_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_all_BANG_.call(null));
})()
:promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var test_QMARK___61309__auto__ = frontend.util.node_test_QMARK_;
var ops__61310__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__61311__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__61311__auto__);

if(cljs.core.truth_(ops__61310__auto__)){
return frontend.modules.outliner.op.batch_import_edn_BANG_(export_map,(cljs.core.truth_(block)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-block","current-block",1027687970),block], null):null));
} else {
var _STAR_outliner_ops_STAR__orig_val__99543 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__99544 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__99544);

try{frontend.modules.outliner.op.batch_import_edn_BANG_(export_map,(cljs.core.truth_(block)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-block","current-block",1027687970),block], null):null));

var r__61312__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__61312__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"batch-import-edn","batch-import-edn",-1179589020)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__99543);
}}
})()),(function (p__99545){
var map__99546 = p__99545;
var map__99546__$1 = cljs.core.__destructure_map(map__99546);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99546__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return promesa.protocols._mcat(promesa.protocols._promise((logseq.shui.ui.dialog_close_all_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_all_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_all_BANG_.call(null))),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0()),(function (___27434__auto____$1){
return promesa.protocols._promise((cljs.core.truth_(error)?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.Keyword(null,"error","error",-978969032)):frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","successful","import/successful",-344468382)], 0)),new cljs.core.Keyword(null,"success","success",1890645906))));
}));
}));
}));
}))));
}));
}));
}
});
/**
 * Displays dialog which allows users to paste and import sqlite.build EDN Data
 */
frontend.handler.db_based.import$.import_edn_data_dialog = (function frontend$handler$db_based$import$import_edn_data_dialog(){
var import_inputs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import-data","import-data",1112436948),"",new cljs.core.Keyword(null,"import-block?","import-block?",444201492),false], null));
var G__99547 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.flex.my-2.text-lg","label.flex.my-2.text-lg",563662984),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("command.misc","import-edn-data","command.misc/import-edn-data",-1818863656)], 0))], null),(function (){var G__99548 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"{}",new cljs.core.Keyword(null,"class","class",-2030961996),"overflow-y-auto",new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (element){
if(cljs.core.truth_(element)){
return requestAnimationFrame((function (_){
return element.focus();
}));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(import_inputs,cljs.core.assoc,new cljs.core.Keyword(null,"import-data","import-data",1112436948),frontend.util.evalue(e));
})], null);
return (logseq.shui.ui.textarea.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.textarea.cljs$core$IFn$_invoke$arity$1(G__99548) : logseq.shui.ui.textarea.call(null,G__99548));
})(),(function (){var G__99549 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.handler.db_based.import$.import_edn_data_from_form,import_inputs)], null);
var G__99550 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("import","title","import/title",1984896332)], 0));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__99549,G__99550) : logseq.shui.ui.button.call(null,G__99549,G__99550));
})()], null);
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__99547) : logseq.shui.ui.dialog_open_BANG_.call(null,G__99547));
});
goog.exportSymbol('frontend.handler.db_based.import$.import_edn_data_dialog', frontend.handler.db_based.import$.import_edn_data_dialog);

//# sourceMappingURL=frontend.handler.db_based.import.js.map
