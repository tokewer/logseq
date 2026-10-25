goog.provide('frontend.handler.export$');
frontend.handler.export$.publishing_export_options = (function frontend$handler$export$publishing_export_options(repo){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","theme","ui/theme",-1247877132),new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921)], null)),new cljs.core.Keyword("git","current-repo","git/current-repo",107438825),repo),new cljs.core.Keyword(null,"repo-config","repo-config",1551936565),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),repo], null))], null);
});
/**
 * download public pages as html
 */
frontend.handler.export$.download_repo_as_html_BANG_ = (function frontend$handler$export$download_repo_as_html_BANG_(repo){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","build-publishing-html","thread-api/build-publishing-html",-1797953544),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,frontend.handler.export$.publishing_export_options(repo)], 0))),(function (p__37109){
var map__37110 = p__37109;
var map__37110__$1 = cljs.core.__destructure_map(map__37110);
var asset_filenames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37110__$1,new cljs.core.Keyword(null,"asset-filenames","asset-filenames",-2076716428));
var html = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37110__$1,new cljs.core.Keyword(null,"html","html",-998796897));
return promesa.protocols._promise((cljs.core.truth_(html)?(function (){var html_str = (""+"data:text/html;charset=UTF-8,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(html)));
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return window.apis.exportPublishAssets(html,frontend.config.get_repo_dir(repo),cljs.core.clj__GT_js(asset_filenames),frontend.util.mocked_open_dir_path());
} else {
var temp__5825__auto__ = goog.dom.getElement("download-as-html");
if(cljs.core.truth_(temp__5825__auto__)){
var anchor = temp__5825__auto__;
anchor.setAttribute("href",html_str);

anchor.setAttribute("download","index.html");

return anchor.click();
} else {
return null;
}
}
})():null));
}));
}));
});
frontend.handler.export$.file_name = (function frontend$handler$export$file_name(repo,extension){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(repo,/^\/+/,""))+"_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.quot((frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null)),(1000)))))+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.name(extension))));
});
frontend.handler.export$.normalize_zip_entry = (function frontend$handler$export$normalize_zip_entry(p__37111){
var vec__37112 = p__37111;
var filename = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37112,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37112,(1),null);
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,frontend.handler.assets.__GT_uint8(data)], null);
}catch (e37115){var e = e37115;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("unsupported zip entry payload",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__5142__auto__ = cljs.core.ex_data(e);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"filename","filename",-1428840783),filename),e);
}});
frontend.handler.export$._LT_export_db_binary_for_zip = (function frontend$handler$export$_LT_export_db_binary_for_zip(repo){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","export-db-binary","thread-api/export-db-binary",1743488500),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0));
} else {
return frontend.persist_db._LT_export_db(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return-data?","return-data?",-956653504),true], null));
}
});
frontend.handler.export$.graph_backup_folder_key = new cljs.core.Keyword("logseq.kv","graph-backup-folder","logseq.kv/graph-backup-folder",-1042314532);
frontend.handler.export$.web_graph_handle_prefix = "web-graph/";
frontend.handler.export$.safe_btoa = (function frontend$handler$export$safe_btoa(s){
try{return btoa(unescape(encodeURIComponent(s)));
}catch (e37116){var _ = e37116;
return null;
}});
frontend.handler.export$.web_graph_handle_key = (function frontend$handler$export$web_graph_handle_key(repo){
if(typeof repo === 'string'){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.export$.web_graph_handle_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(repo)));
} else {
return null;
}
});
frontend.handler.export$.backup_handle_key = (function frontend$handler$export$backup_handle_key(repo,folder_name){
return (""+"handle/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo))))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(folder_name)))));
});
frontend.handler.export$.legacy_backup_handle_key = (function frontend$handler$export$legacy_backup_handle_key(repo,folder_name){
return (""+"handle/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(repo))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(folder_name));
});
frontend.handler.export$._LT_get_stored_backup_handle = (function frontend$handler$export$_LT_get_stored_backup_handle(repo,folder_name){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$.backup_handle_key(repo,folder_name)),(function (key1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(key1)?frontend.common.idb.get_item(key1):null)),(function (h1){
return promesa.protocols._promise((cljs.core.truth_(h1)?h1:(function (){var key2 = frontend.handler.export$.legacy_backup_handle_key(repo,folder_name);
var temp__5823__auto__ = (cljs.core.truth_((function (){var and__5140__auto__ = key2;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key1,key2);
} else {
return and__5140__auto__;
}
})())?frontend.common.idb.get_item(key2):null);
if(cljs.core.truth_(temp__5823__auto__)){
var h2 = temp__5823__auto__;
return h2;
} else {
var key3 = (function (){var temp__5825__auto__ = frontend.handler.export$.safe_btoa(repo);
if(cljs.core.truth_(temp__5825__auto__)){
var b = temp__5825__auto__;
return (""+"handle/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(folder_name));
} else {
return null;
}
})();
var temp__5823__auto____$1 = (cljs.core.truth_((function (){var and__5140__auto__ = key3;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key1,key3)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key2,key3)));
} else {
return and__5140__auto__;
}
})())?frontend.common.idb.get_item(key3):null);
if(cljs.core.truth_(temp__5823__auto____$1)){
var h3 = temp__5823__auto____$1;
return h3;
} else {
return frontend.common.idb.get_item(frontend.handler.export$.web_graph_handle_key(repo));
}
}
})()));
}));
}));
}));
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.export$ !== 'undefined') && (typeof frontend.handler.export$._STAR_server_storage_state !== 'undefined')){
} else {
frontend.handler.export$._STAR_server_storage_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Check if local storage server (/api/storage/config) is active and return config map.
 */
frontend.handler.export$._LT_get_server_storage_config = (function frontend$handler$export$_LT_get_server_storage_config(){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(fetch("/api/storage/config",({"method": "GET"})),(function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
return null;
}
})),(function (json){
if(cljs.core.truth_((function (){var and__5140__auto__ = json;
if(cljs.core.truth_(and__5140__auto__)){
return json.ok;
} else {
return and__5140__auto__;
}
})())){
var cfg = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
cljs.core.reset_BANG_(frontend.handler.export$._STAR_server_storage_state,cfg);

return cfg;
} else {
cljs.core.reset_BANG_(frontend.handler.export$._STAR_server_storage_state,false);

return null;
}
})),(function (_){
cljs.core.reset_BANG_(frontend.handler.export$._STAR_server_storage_state,false);

return null;
}));
});
/**
 * Persist SQLite database directly to local physical disk folder via local server API.
 */
frontend.handler.export$._LT_save_db_to_server_BANG_ = (function frontend$handler$export$_LT_save_db_to_server_BANG_(repo,data){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(fetch("/api/storage/save",({"method": "POST", "headers": ({"Content-Type": "application/octet-stream", "X-Logseq-Repo": encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo)))}), "body": data})),(function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Server save failed",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),res.status], null)));
}
})),(function (json){
var path = json.saved_path;
console.log((""+"[ServerStorage] Successfully saved "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo)+" to disk: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));

return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));
});
frontend.handler.export$.web_graph_folder_supported_QMARK_ = (function frontend$handler$export$web_graph_folder_supported_QMARK_(){
return cljs.core.fn_QMARK_(window.showDirectoryPicker);
});
frontend.handler.export$._LT_get_web_graph_folder_name = (function frontend$handler$export$_LT_get_web_graph_folder_name(repo){
if(typeof repo === 'string'){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = frontend.common.idb.get_item(frontend.handler.export$.web_graph_handle_key(repo));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5825__auto__ = (function (){try{return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.export$.web_graph_handle_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(btoa(repo)));
}catch (e37117){var _ = e37117;
return null;
}})();
if(cljs.core.truth_(temp__5825__auto__)){
var legacy_key = temp__5825__auto__;
return frontend.common.idb.get_item(legacy_key);
} else {
return null;
}
}
})()),(function (handle){
return promesa.protocols._promise((function (){var G__37118 = handle;
if((G__37118 == null)){
return null;
} else {
return G__37118.name;
}
})());
}));
}));
} else {
return null;
}
});
frontend.handler.export$.choose_web_graph_folder_BANG_ = (function frontend$handler$export$choose_web_graph_folder_BANG_(repo){
if(typeof repo === 'string'){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("A graph must be selected before choosing a Web Graph folder",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null));
}

if(frontend.handler.export$.web_graph_folder_supported_QMARK_()){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("This browser does not support the File System Access API",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.Keyword(null,"web-graph-folder","web-graph-folder",1886012282)], null));
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(window.showDirectoryPicker(({"mode": "readwrite"}))),(function (handle){
return promesa.protocols._mcat(promesa.protocols._promise(module$frontend$utils.verifyPermission(handle,true)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(handle.name),(function (folder_name){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.idb.set_item_BANG_(frontend.handler.export$.web_graph_handle_key(repo),handle)),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.idb.set_item_BANG_(frontend.handler.export$.backup_handle_key(repo,folder_name),handle)),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","transact","thread-api/transact",917721609),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(logseq.db.kv.cljs$core$IFn$_invoke$arity$2 ? logseq.db.kv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.graph_backup_folder_key,folder_name) : logseq.db.kv.call(null,frontend.handler.export$.graph_backup_folder_key,folder_name))], null),null,null], 0))),(function (___$3){
return promesa.protocols._promise(folder_name);
}));
}));
}));
}));
}));
}));
}));
});
frontend.handler.export$._LT_get_key_value = (function frontend$handler$export$_LT_get_key_value(repo,key){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-key-value","thread-api/get-key-value",940412851),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,key], 0));
});
frontend.handler.export$._LT_export_zipfile_to_desktop_BANG_ = (function frontend$handler$export$_LT_export_zipfile_to_desktop_BANG_(repo,zipfile){
var repo_name = logseq.db.common.sqlite.sanitize_db_name(repo);
var export_dir = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(frontend.config.get_repo_dir(repo),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["export"], 0));
var export_path = logseq.common.path.path_join.cljs$core$IFn$_invoke$arity$variadic(export_dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.handler.export$.file_name(repo_name,"zip")], 0));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(zipfile.arrayBuffer()),(function (content){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.mkdir_if_not_exists(export_dir)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(window.apis.writeFileBytes(export_path,content)),(function (___$1){
return promesa.protocols._promise(export_path);
}));
}));
}));
}));
});
frontend.handler.export$.db_based_export_repo_as_zip_BANG_ = (function frontend$handler$export$db_based_export_repo_as_zip_BANG_(repo){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dialog","export-zip","dialog/export-zip",-1816696992),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","preparing-zip","export/preparing-zip",395733790)], 0))], null));

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$._LT_export_db_binary_for_zip(repo)),(function (db_data){
return promesa.protocols._mcat(promesa.protocols._promise("db.sqlite"),(function (filename){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.db.common.sqlite.sanitize_db_name(repo)),(function (repo_name){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","exporting-state","graph/exporting-state",-650713812),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"total","total",1916810418),(100),new cljs.core.Keyword(null,"current-idx","current-idx",1734114444),(20),new cljs.core.Keyword(null,"current-page","current-page",-101294180),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","collecting-assets","export/collecting-assets",1444474009)], 0)),new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","exporting","export/exporting",952032247)], 0))], null))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.assets._LT_get_all_assets()),(function (assets){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.normalize_zip_entry,cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,db_data], null),assets))),(function (files){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","exporting-state","graph/exporting-state",-650713812),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"total","total",1916810418),(100),new cljs.core.Keyword(null,"current-idx","current-idx",1734114444),(40),new cljs.core.Keyword(null,"current-page","current-page",-101294180),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","creating-zip","export/creating-zip",-80643361)], 0)),new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","exporting","export/exporting",952032247)], 0))], null))),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.extensions.zip.make_zip.cljs$core$IFn$_invoke$arity$variadic(repo_name,files,repo,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"compression","compression",-506303443),"STORE",new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855),(function (percent){
var scaled = ((40) + (0.6 * percent));
return frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","exporting-state","graph/exporting-state",-650713812),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"total","total",1916810418),(100),new cljs.core.Keyword(null,"current-idx","current-idx",1734114444),Math.round(scaled),new cljs.core.Keyword(null,"current-page","current-page",-101294180),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","creating-zip","export/creating-zip",-80643361)], 0)),new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","exporting","export/exporting",952032247)], 0))], null));
})], null)], 0))),(function (zipfile){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("graph","exporting-state","graph/exporting-state",-650713812),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"total","total",1916810418),(100),new cljs.core.Keyword(null,"current-idx","current-idx",1734114444),(100),new cljs.core.Keyword(null,"current-page","current-page",-101294180),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","finalizing","export/finalizing",-1680679668)], 0)),new cljs.core.Keyword(null,"label","label",1718410804),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","exporting","export/exporting",952032247)], 0))], null))),(function (___21901__auto__){
return promesa.protocols._promise((cljs.core.truth_(frontend.util.electron_QMARK_())?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$._LT_export_zipfile_to_desktop_BANG_(repo,zipfile)),(function (export_path){
return promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","zip-exported","export/zip-exported",-1948545251),export_path], 0)),new cljs.core.Keyword(null,"success","success",1890645906),false));
}));
})):(function (){var temp__5825__auto__ = goog.dom.getElement("download-as-zip");
if(cljs.core.truth_(temp__5825__auto__)){
var anchor = temp__5825__auto__;
anchor.setAttribute("href",window.URL.createObjectURL(zipfile));

anchor.setAttribute("download",zipfile.name);

return anchor.click();
} else {
return null;
}
})()));
}));
}));
}));
}));
}));
}));
}));
}));
}));
})),(function (error){
console.error(error);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","zip-error","export/zip-error",1847071641)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
})),(function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dialog","close-export-zip","dialog/close-export-zip",317970357)], null));
}));
});
frontend.handler.export$.export_repo_as_zip_BANG_ = (function frontend$handler$export$export_repo_as_zip_BANG_(repo){
return frontend.handler.export$.db_based_export_repo_as_zip_BANG_(repo);
});
frontend.handler.export$.export_repo_as_debug_transit_BANG_ = (function frontend$handler$export$export_repo_as_debug_transit_BANG_(repo){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$.common._LT_get_debug_datoms(repo)),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$.file_name((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo)+"-debug-datoms"),new cljs.core.Keyword(null,"transit","transit",359458387))),(function (filename){
return promesa.protocols._mcat(promesa.protocols._promise((""+"data:text/transit;charset=utf-8,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(logseq.db.write_transit_str(result))))),(function (data_str){
return promesa.protocols._promise((function (){var temp__5825__auto__ = goog.dom.getElement("download-as-transit-debug");
if(cljs.core.truth_(temp__5825__auto__)){
var anchor = temp__5825__auto__;
anchor.setAttribute("href",data_str);

anchor.setAttribute("download",filename);

return anchor.click();
} else {
return null;
}
})());
}));
}));
}));
}));
});
frontend.handler.export$.export_repo_as_sqlite_db_BANG_ = (function frontend$handler$export$export_repo_as_sqlite_db_BANG_(repo){
var filename = frontend.handler.export$.file_name(repo,"sqlite");
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.util.electron_QMARK_())?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"db-export-as","db-export-as",513621819),repo,filename], 0))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__37119 = result;
if((G__37119 == null)){
return null;
} else {
return G__37119.path;
}
}
})()),(function (path){
return promesa.protocols._promise((cljs.core.truth_(path)?frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","sqlite-db-exported","export/sqlite-db-exported",-1701230536),path], 0)),new cljs.core.Keyword(null,"success","success",1890645906),false):null));
}));
}));
})):promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_export_db(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return-data?","return-data?",-956653504),true], null))),(function (data){
return promesa.protocols._promise(((cljs.core.fn_QMARK_(window.showSaveFilePicker))?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(window.showSaveFilePicker(({"suggestedName": filename, "types": [({"description": "SQLite", "accept": ({"application/vnd.sqlite3": [".sqlite"]})})]}))),(function (handle){
return promesa.protocols._mcat(promesa.protocols._promise(handle.createWritable()),(function (writable){
return promesa.protocols._mcat(promesa.protocols._promise(writable.write(data)),(function (_){
return promesa.protocols._promise(writable.close());
}));
}));
}));
})):(function (){var url = URL.createObjectURL((new Blob([data])));
var temp__5825__auto__ = goog.dom.getElement("download-as-sqlite-db");
if(cljs.core.truth_(temp__5825__auto__)){
var anchor = temp__5825__auto__;
anchor.setAttribute("href",url);

anchor.setAttribute("download",filename);

return anchor.click();
} else {
return null;
}
})()));
}));
}))),(function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("AbortError",error.name)){
return null;
} else {
return console.error(error);
}
}));
});
frontend.handler.export$.same_binary_content_QMARK_ = (function frontend$handler$export$same_binary_content_QMARK_(buf1,buf2){
if((((buf1 == null)) || ((buf2 == null)))){
return false;
} else {
var u1 = (((buf1 instanceof Uint8Array))?buf1:(new Uint8Array(buf1)));
var u2 = (((buf2 instanceof Uint8Array))?buf2:(new Uint8Array(buf2)));
var len1 = u1.byteLength;
var len2 = u2.byteLength;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(len1,len2)){
return false;
} else {
var d1 = (new DataView(u1.buffer,u1.byteOffset,len1));
var d2 = (new DataView(u2.buffer,u2.byteOffset,len2));
var words = cljs.core.quot(len1,(4));
var rem = cljs.core.rem(len1,(4));
var i = (0);
while(true){
if((i < words)){
var offset = (i * (4));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(d1.getUint32(offset,true),d2.getUint32(offset,true))){
return false;
} else {
var G__37135 = (i + (1));
i = G__37135;
continue;
}
} else {
var j = (len1 - rem);
while(true){
if((j < len1)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((u1[j]),(u2[j]))){
return false;
} else {
var G__37136 = (j + (1));
j = G__37136;
continue;
}
} else {
return true;
}
break;
}
}
break;
}
}
}
});
/**
 * reserve the latest 12 version files
 */
frontend.handler.export$.truncate_old_versioned_files_BANG_ = (function frontend$handler$export$truncate_old_versioned_files_BANG_(backups_handle){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(module$frontend$utils.getFiles(backups_handle,false)),(function (files){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((12),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (file){
return file.name;
}),files)))),(function (old_files){
return promesa.protocols._promise(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(backups_handle.removeEntry(file.name),(function (err){
return console.warn("Failed to remove old backup file:",file.name,err);
}));
}),old_files)));
}));
}));
})),(function (err){
return console.warn("Failed to truncate old versioned files:",err);
}));
});
frontend.handler.export$.choose_backup_folder = (function frontend$handler$export$choose_backup_folder(repo){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(module$frontend$utils.openDirectory(({"mode": "readwrite"}))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.first(result)),(function (handle){
return promesa.protocols._mcat(promesa.protocols._promise(handle.name),(function (folder_name){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.idb.set_item_BANG_(frontend.handler.export$.web_graph_handle_key(repo),handle)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.idb.set_item_BANG_(frontend.handler.export$.backup_handle_key(repo,folder_name),handle)),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","transact","thread-api/transact",917721609),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(logseq.db.kv.cljs$core$IFn$_invoke$arity$2 ? logseq.db.kv.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$.graph_backup_folder_key,folder_name) : logseq.db.kv.call(null,frontend.handler.export$.graph_backup_folder_key,folder_name))], null),null,null], 0))),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(console.dir(handle)),(function (___21901__auto__){
return promesa.protocols._promise(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [folder_name,handle], null));
}));
}));
}));
}));
}));
}));
}));
}));
});
/**
 * Resolve a writable directory handle for `backup-folder`.
 * Re-prompts the user to pick the folder again when the stored handle is
 * missing or its permission has expired (e.g. after the page origin
 * changed or the browser revoked access).
 */
frontend.handler.export$._LT_resolve_backup_handle = (function frontend$handler$export$_LT_resolve_backup_handle(var_args){
var G__37122 = arguments.length;
switch (G__37122) {
case 2:
return frontend.handler.export$._LT_resolve_backup_handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.export$._LT_resolve_backup_handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.export$._LT_resolve_backup_handle.cljs$core$IFn$_invoke$arity$2 = (function (repo,backup_folder){
return frontend.handler.export$._LT_resolve_backup_handle.cljs$core$IFn$_invoke$arity$3(repo,backup_folder,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
}));

(frontend.handler.export$._LT_resolve_backup_handle.cljs$core$IFn$_invoke$arity$3 = (function (repo,backup_folder,p__37123){
var map__37124 = p__37123;
var map__37124__$1 = cljs.core.__destructure_map(map__37124);
var interactive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37124__$1,new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$._LT_get_stored_backup_handle(repo,backup_folder)),(function (handle){
return promesa.protocols._promise((cljs.core.truth_(handle)?(cljs.core.truth_(interactive_QMARK_)?promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(module$frontend$utils.verifyPermission(handle,true),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backup_folder,handle], null);
})),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("AbortError",e.name)){
return null;
} else {
console.warn("Backup folder permission expired, requesting re-selection:",e);

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export.backup","permission-expired","export.backup/permission-expired",337754400)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));

return frontend.handler.export$.choose_backup_folder(repo);
}
})):promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(handle.queryPermission(({"mode": "readwrite"})),(function (perm){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(perm,"granted")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backup_folder,handle], null);
} else {
console.warn("Backup folder permission not granted in background:",perm);

return null;
}
})),(function (e){
console.warn("Failed to query permission in background:",e);

return null;
}))):(cljs.core.truth_(interactive_QMARK_)?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(console.warn("Backup folder handle not found in IndexedDB")),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export.backup","handle-not-found","export.backup/handle-not-found",-382483295)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671))),(function (___21901__auto____$1){
return promesa.protocols._promise(frontend.handler.export$.choose_backup_folder(repo));
}));
}));
})):(function (){
console.warn("Backup folder handle not found in background");

return null;
})()
)));
}));
}));
}));

(frontend.handler.export$._LT_resolve_backup_handle.cljs$lang$maxFixedArity = 3);

frontend.handler.export$.web_backup_db_graph = (function frontend$handler$export$web_backup_db_graph(var_args){
var G__37126 = arguments.length;
switch (G__37126) {
case 1:
return frontend.handler.export$.web_backup_db_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.export$.web_backup_db_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.export$.web_backup_db_graph.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return frontend.handler.export$.web_backup_db_graph.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
}));

(frontend.handler.export$.web_backup_db_graph.cljs$core$IFn$_invoke$arity$2 = (function (repo,p__37127){
var map__37128 = p__37127;
var map__37128__$1 = cljs.core.__destructure_map(map__37128);
var interactive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37128__$1,new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true);
if(cljs.core.truth_((function (){var and__5140__auto__ = repo;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,frontend.state.get_current_repo());
} else {
return and__5140__auto__;
}
})())){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$._LT_get_server_storage_config()),(function (server_cfg){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$._LT_get_key_value(repo,frontend.handler.export$.graph_backup_folder_key)),(function (backup_folder){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = backup_folder;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.export$._LT_get_web_graph_folder_name(repo);
}
})()),(function (folder_name){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_export_db(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return-data?","return-data?",-956653504),true], null))),(function (data){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(server_cfg)?promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.handler.export$._LT_save_db_to_server_BANG_(repo,data),(function (err){
console.warn("[ServerStorage] Server save failed:",err);

return null;
})):null)),(function (server_save_res){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(folder_name)?promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$._LT_resolve_backup_handle.cljs$core$IFn$_invoke$arity$3(repo,folder_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interactive?","interactive?",367617676),interactive_QMARK_], null))),(function (p__37129){
var vec__37130 = p__37129;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37130,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37130,(1),null);
return promesa.protocols._promise((cljs.core.truth_(handle)?(function (){var repo_name = logseq.db.common.sqlite.sanitize_db_name(repo);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$3){
return promesa.protocols._mcat(promesa.protocols._promise(handle.getDirectoryHandle(repo_name,({"create": true}))),(function (graph_dir_handle){
return promesa.protocols._mcat(promesa.protocols._promise(graph_dir_handle.getDirectoryHandle("backups",({"create": true}))),(function (backups_handle){
return promesa.protocols._mcat(promesa.protocols._promise(graph_dir_handle.getFileHandle("db.sqlite",({"create": true}))),(function (backup_handle){
return promesa.protocols._mcat(promesa.protocols._promise(backup_handle.getFile()),(function (file){
return promesa.protocols._mcat(promesa.protocols._promise(file.size),(function (file_size){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = data.byteLength;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return data.length;
}
})()),(function (data_len){
return promesa.protocols._mcat(promesa.protocols._promise((((((file_size > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_size,data_len))))?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$4){
return promesa.protocols._mcat(promesa.protocols._promise(file.arrayBuffer()),(function (file_buf){
return promesa.protocols._promise(frontend.handler.export$.same_binary_content_QMARK_(file_buf,data));
}));
})):null)),(function (unchanged_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(unchanged_QMARK_)?new cljs.core.Keyword(null,"graph-not-changed","graph-not-changed",1463753852):promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((((file_size > (0)))?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$4){
return promesa.protocols._mcat(promesa.protocols._promise((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null)))+".db.sqlite")),(function (archive_name){
return promesa.protocols._mcat(promesa.protocols._promise(backups_handle.getFileHandle(archive_name,({"create": true}))),(function (archive_file_handle){
return promesa.protocols._mcat(promesa.protocols._promise(archive_file_handle.createWritable()),(function (archive_writable){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(archive_writable.write(file)),(function (___21901__auto__){
return promesa.protocols._promise(archive_writable.close());
}));
})));
}));
}));
}));
})):null)),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$.truncate_old_versioned_files_BANG_(backups_handle)),(function (___21901__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(module$frontend$utils.writeFile(backup_handle,data)),(function (___21901__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Successfully created a backup for",repo_name,"at",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()))),"."], 0))),(function (___21901__auto____$3){
return promesa.protocols._promise(true);
}));
}));
}));
}));
}))));
}));
}));
}));
}));
}));
}));
}));
}));
})():false));
}));
})),(function (err){
console.warn("[FileSystemHandle] Database backup error:",err);

return false;
})):null)),(function (fs_save_res){
return promesa.protocols._promise((cljs.core.truth_((function (){var or__5142__auto__ = server_save_res;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return fs_save_res === true;
}
})())?(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Graph successfully persisted to local physical disk."], 0));

return true;
})()
:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fs_save_res,new cljs.core.Keyword(null,"graph-not-changed","graph-not-changed",1463753852)))?new cljs.core.Keyword(null,"graph-not-changed","graph-not-changed",1463753852):(((((server_cfg == null)) && ((folder_name == null))))?(cljs.core.truth_(interactive_QMARK_)?(function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export.backup","set-folder-first","export.backup/set-folder-first",1342330709)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));

return frontend.handler.export$.choose_web_graph_folder_BANG_(repo);
})()
:false):(function (){
if(cljs.core.truth_(interactive_QMARK_)){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","db-backup-error","export/db-backup-error",-1357865057)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
}

return false;
})()
)
)));
}));
}));
})));
}));
}));
}));
}));
})),(function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("AbortError",error.name)){
} else {
console.error("Backup failed:",error);
}

return false;
}));
} else {
return null;
}
}));

(frontend.handler.export$.web_backup_db_graph.cljs$lang$maxFixedArity = 2);

frontend.handler.export$.backup_db_graph = (function frontend$handler$export$backup_db_graph(var_args){
var G__37134 = arguments.length;
switch (G__37134) {
case 1:
return frontend.handler.export$.backup_db_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.export$.backup_db_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.export$.backup_db_graph.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return frontend.handler.export$.backup_db_graph.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interactive?","interactive?",367617676),true], null));
}));

(frontend.handler.export$.backup_db_graph.cljs$core$IFn$_invoke$arity$2 = (function (repo,opts){
if(frontend.util.web_platform_QMARK_){
return frontend.handler.export$.web_backup_db_graph.cljs$core$IFn$_invoke$arity$2(repo,opts);
} else {
return null;
}
}));

(frontend.handler.export$.backup_db_graph.cljs$lang$maxFixedArity = 2);

if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.export$ !== 'undefined') && (typeof frontend.handler.export$._STAR_backup_interval !== 'undefined')){
} else {
frontend.handler.export$._STAR_backup_interval = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.handler.export$.cancel_db_backup_BANG_ = (function frontend$handler$export$cancel_db_backup_BANG_(){
var temp__5825__auto__ = cljs.core.deref(frontend.handler.export$._STAR_backup_interval);
if(cljs.core.truth_(temp__5825__auto__)){
var i = temp__5825__auto__;
clearInterval(i);

return cljs.core.reset_BANG_(frontend.handler.export$._STAR_backup_interval,null);
} else {
return null;
}
});
frontend.handler.export$.auto_db_backup_BANG_ = (function frontend$handler$export$auto_db_backup_BANG_(repo){
if(((frontend.util.web_platform_QMARK_) && (cljs.core.not(frontend.util.capacitor_QMARK_())))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$._LT_get_key_value(repo,frontend.handler.export$.graph_backup_folder_key)),(function (backup_folder){
return promesa.protocols._promise((cljs.core.truth_(backup_folder)?(function (){
frontend.handler.export$.cancel_db_backup_BANG_();

var interval = setInterval((function (){
return frontend.handler.export$.backup_db_graph.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interactive?","interactive?",367617676),false], null));
}),((((1) * (60)) * (60)) * (1000)));
return cljs.core.reset_BANG_(frontend.handler.export$._STAR_backup_interval,interval);
})()
:null));
}));
}));
} else {
return null;
}
});

//# sourceMappingURL=frontend.handler.export.js.map
