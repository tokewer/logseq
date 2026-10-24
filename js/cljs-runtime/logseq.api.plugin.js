goog.provide('logseq.api.plugin');
goog.scope(function(){
  logseq.api.plugin.goog$module$goog$object = goog.module.get('goog.object');
});
logseq.api.plugin.get_caller_plugin_id = (function logseq$api$plugin$get_caller_plugin_id(){
return logseq.api.plugin.goog$module$goog$object.get(window,"$$callerPluginID");
});
logseq.api.plugin.install_plugin_hook = (function logseq$api$plugin$install_plugin_hook(pid,hook,opts){
return frontend.state.install_plugin_hook.cljs$core$IFn$_invoke$arity$3(pid,hook,cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts));
});
logseq.api.plugin.uninstall_plugin_hook = (function logseq$api$plugin$uninstall_plugin_hook(pid,hook_or_all){
return frontend.state.uninstall_plugin_hook(pid,hook_or_all);
});
logseq.api.plugin.should_exec_plugin_hook = (function logseq$api$plugin$should_exec_plugin_hook(pid,hook){
return frontend.handler.plugin.plugin_hook_installed_QMARK_(pid,hook);
});
logseq.api.plugin.load_plugin_config = (function logseq$api$plugin$load_plugin_config(path){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(null,(frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,"package.json") : frontend.util.node_path.join.call(null,path,"package.json")));
} else {
return console.log("TODO: load plugin package.json from web plugin.");
}
});
logseq.api.plugin.load_plugin_readme = (function logseq$api$plugin$load_plugin_readme(path){
return frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(null,(frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,"readme.md") : frontend.util.node_path.join.call(null,path,"readme.md")));
});
logseq.api.plugin.save_plugin_package_json = (function logseq$api$plugin$save_plugin_package_json(path,data){
var repo = "";
var path__$1 = (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,"package.json") : frontend.util.node_path.join.call(null,path,"package.json"));
return frontend.fs.write_plain_text_file_BANG_(repo,null,path__$1,JSON.stringify(data,null,(2)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null));
});
logseq.api.plugin.storage_dir = (function logseq$api$plugin$storage_dir(root_dir,sub_root){
var G__46494 = (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(root_dir,sub_root) : frontend.util.node_path.join.call(null,root_dir,sub_root));
return (frontend.util.node_path.normalize.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.normalize.cljs$core$IFn$_invoke$arity$1(G__46494) : frontend.util.node_path.normalize.call(null,G__46494));
});
logseq.api.plugin.sub_path_QMARK_ = (function logseq$api$plugin$sub_path_QMARK_(root_dir,path){
var relative = frontend.util.node_path.relative(root_dir,path);
var parent_dir_segment_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(relative,"..")) || (clojure.string.starts_with_QMARK_(relative,(""+".."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.node_path.sep)))));
return ((clojure.string.blank_QMARK_(relative)) || ((((!(parent_dir_segment_QMARK_))) && (cljs.core.not(frontend.util.node_path.isAbsolute(relative))))));
});
logseq.api.plugin.assert_storage_path_BANG_ = (function logseq$api$plugin$assert_storage_path_BANG_(root_dir,path,action){
if(logseq.api.plugin.sub_path_QMARK_(root_dir,path)){
return null;
} else {
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.api.plugin",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),path,new cljs.core.Keyword(null,"line","line",212345235),73], null)),null);
} else {
}

throw (new Error((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)+" file denied")));
}
});
logseq.api.plugin.storage_file_path = (function logseq$api$plugin$storage_file_path(root_dir,file,action){
var path = (function (){var G__46495 = (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(root_dir,file) : frontend.util.node_path.join.call(null,root_dir,file));
return (frontend.util.node_path.normalize.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.normalize.cljs$core$IFn$_invoke$arity$1(G__46495) : frontend.util.node_path.normalize.call(null,G__46495));
})();
logseq.api.plugin.assert_storage_path_BANG_(root_dir,path,action);

return path;
});
logseq.api.plugin.plugin_storage_root = (function logseq$api$plugin$plugin_storage_root(assets_QMARK_){
if(assets_QMARK_ === true){
return frontend.config.get_current_repo_assets_root();
} else {
return frontend.handler.plugin.get_ls_dotdir_root();
}
});
logseq.api.plugin.plugin_storage_sub_root = (function logseq$api$plugin$plugin_storage_sub_root(plugin_id){
var G__46496 = "storages";
var G__46497 = (frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.basename.cljs$core$IFn$_invoke$arity$1(plugin_id) : frontend.util.node_path.basename.call(null,plugin_id));
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__46496,G__46497) : frontend.util.node_path.join.call(null,G__46496,G__46497));
});
/**
 * Detect payload shapes that can't be transit-serialized through ipc/ipc.
 * Mirrors assets-handler/->uint8 — anything it accepts as binary, we route
 * through writeFileBytes instead of write-plain-text-file!.
 */
logseq.api.plugin.binary_content_QMARK_ = (function logseq$api$plugin$binary_content_QMARK_(content){
var or__5142__auto__ = (content instanceof ArrayBuffer);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (content instanceof Uint8Array);
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (function (){var and__5140__auto__ = (typeof ArrayBuffer !== 'undefined');
if(and__5140__auto__){
return ArrayBuffer.isView(content);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var and__5140__auto__ = cljs.core.object_QMARK_(content);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Buffer",(content["type"]));
if(and__5140__auto____$1){
return cljs.core.array_QMARK_((content["data"]));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
}
}
});
logseq.api.plugin.write_rootdir_file = (function logseq$api$plugin$write_rootdir_file(file,content,sub_root,root_dir){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(""),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.plugin.storage_dir(root_dir,sub_root)),(function (path){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(path,"")),(function (exist_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(exist_QMARK_)?null:frontend.fs.mkdir_recur_BANG_(path))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.plugin.storage_file_path(path,file,"write")),(function (user_path){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.util.node_path.dirname.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.dirname.cljs$core$IFn$_invoke$arity$1(user_path) : frontend.util.node_path.dirname.call(null,user_path))),(function (user_path_root){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2(user_path_root,"")),(function (exist_QMARK___$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(exist_QMARK___$1)?null:frontend.fs.mkdir_recur_BANG_(user_path_root))),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = logseq.api.plugin.binary_content_QMARK_(content);
if(cljs.core.truth_(and__5140__auto__)){
return frontend.util.electron_QMARK_();
} else {
return and__5140__auto__;
}
})())?window.apis.writeFileBytes(user_path,frontend.handler.assets.__GT_uint8(content)):frontend.fs.write_plain_text_file_BANG_(repo,null,user_path,content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null)))),(function (___$2){
return promesa.protocols._promise(user_path);
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
});
logseq.api.plugin.write_dotdir_file = (function logseq$api$plugin$write_dotdir_file(file,content,sub_root){
var G__46499 = frontend.handler.plugin.get_ls_dotdir_root();
if((G__46499 == null)){
return null;
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(G__46499,(function (p1__46498_SHARP_){
return logseq.api.plugin.write_rootdir_file(file,content,sub_root,p1__46498_SHARP_);
}));
}
});
logseq.api.plugin.write_assetsdir_file = (function logseq$api$plugin$write_assetsdir_file(file,content,sub_root){
var temp__5823__auto__ = frontend.config.get_current_repo_assets_root();
if(cljs.core.truth_(temp__5823__auto__)){
var assets_dir = temp__5823__auto__;
return logseq.api.plugin.write_rootdir_file(file,content,sub_root,assets_dir);
} else {
return false;
}
});
logseq.api.plugin.read_rootdir_file = (function logseq$api$plugin$read_rootdir_file(file,sub_root,root_dir){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.plugin.storage_dir(root_dir,sub_root)),(function (path){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.plugin.storage_file_path(path,file,"read")),(function (user_path){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2("",user_path)),(function (exist_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(exist_QMARK_)?null:(function (){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.api.plugin",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),user_path,new cljs.core.Keyword(null,"line","line",212345235),139], null)),null);
} else {
}

throw (new Error("file not existed"));
})()
)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2("",user_path)),(function (content){
return promesa.protocols._promise(content);
}));
}));
}));
}));
}));
}));
});
logseq.api.plugin.read_dotdir_file = (function logseq$api$plugin$read_dotdir_file(file,sub_root){
var G__46501 = frontend.handler.plugin.get_ls_dotdir_root();
if((G__46501 == null)){
return null;
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(G__46501,(function (p1__46500_SHARP_){
return logseq.api.plugin.read_rootdir_file(file,sub_root,p1__46500_SHARP_);
}));
}
});
logseq.api.plugin.read_assetsdir_file = (function logseq$api$plugin$read_assetsdir_file(file,sub_root){
var temp__5825__auto__ = frontend.config.get_current_repo_assets_root();
if(cljs.core.truth_(temp__5825__auto__)){
var root_dir = temp__5825__auto__;
return logseq.api.plugin.read_rootdir_file(file,sub_root,root_dir);
} else {
return null;
}
});
logseq.api.plugin.unlink_rootdir_file_BANG_ = (function logseq$api$plugin$unlink_rootdir_file_BANG_(file,sub_root,root_dir){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(""),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.plugin.storage_dir(root_dir,sub_root)),(function (path){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.plugin.storage_file_path(path,file,"access")),(function (user_path){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2("",user_path)),(function (exist_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(exist_QMARK_)?null:(function (){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("logseq.api.plugin",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),user_path,new cljs.core.Keyword(null,"line","line",212345235),159], null)),null);
} else {
}

throw (new Error("file not existed"));
})()
)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.unlink_BANG_(repo,user_path,cljs.core.PersistentArrayMap.EMPTY)),(function (___$1){
return promesa.impl.resolved(null);
}));
}));
}));
}));
}));
}));
}));
});
logseq.api.plugin.unlink_dotdir_file_BANG_ = (function logseq$api$plugin$unlink_dotdir_file_BANG_(file,sub_root){
var G__46503 = frontend.handler.plugin.get_ls_dotdir_root();
if((G__46503 == null)){
return null;
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(G__46503,(function (p1__46502_SHARP_){
return logseq.api.plugin.unlink_rootdir_file_BANG_(file,sub_root,p1__46502_SHARP_);
}));
}
});
logseq.api.plugin.unlink_assetsdir_file_BANG_ = (function logseq$api$plugin$unlink_assetsdir_file_BANG_(file,sub_root){
var temp__5825__auto__ = frontend.config.get_current_repo_assets_root();
if(cljs.core.truth_(temp__5825__auto__)){
var root_dir = temp__5825__auto__;
return logseq.api.plugin.unlink_rootdir_file_BANG_(file,sub_root,root_dir);
} else {
return null;
}
});
logseq.api.plugin.clear_rootdir_files_BANG_ = (function logseq$api$plugin$clear_rootdir_files_BANG_(sub_root,root_dir){
var path = logseq.api.plugin.storage_dir(root_dir,sub_root);
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(path)),(function (exist_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(exist_QMARK_)?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"listdir","listdir",-609252713),path], 0)):null)),(function (files){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.js_iterable_QMARK_(files))?cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(files):null)),(function (files__$1){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (file_path){
var file_path__$1 = (frontend.util.node_path.normalize.cljs$core$IFn$_invoke$arity$1 ? frontend.util.node_path.normalize.cljs$core$IFn$_invoke$arity$1(file_path) : frontend.util.node_path.normalize.call(null,file_path));
logseq.api.plugin.assert_storage_path_BANG_(path,file_path__$1,"access");

return frontend.fs.unlink_BANG_("",file_path__$1,cljs.core.PersistentArrayMap.EMPTY);
}),files__$1))),(function (_){
return promesa.protocols._promise(null);
}));
}));
}));
}));
}));
} else {
return frontend.fs.rmdir_BANG_(path);
}
});
logseq.api.plugin.write_user_tmp_file = (function logseq$api$plugin$write_user_tmp_file(file,content){
return logseq.api.plugin.write_dotdir_file(file,content,"tmp");
});
logseq.api.plugin.write_plugin_storage_file = (function logseq$api$plugin$write_plugin_storage_file(plugin_id,file,content,assets_QMARK_){
var sub_root = logseq.api.plugin.plugin_storage_sub_root(plugin_id);
if(assets_QMARK_ === true){
return logseq.api.plugin.write_assetsdir_file(file,content,sub_root);
} else {
return logseq.api.plugin.write_dotdir_file(file,content,sub_root);
}
});
logseq.api.plugin.read_plugin_storage_file = (function logseq$api$plugin$read_plugin_storage_file(plugin_id,file,assets_QMARK_){
var sub_root = logseq.api.plugin.plugin_storage_sub_root(plugin_id);
if(assets_QMARK_ === true){
return logseq.api.plugin.read_assetsdir_file(file,sub_root);
} else {
return logseq.api.plugin.read_dotdir_file(file,sub_root);
}
});
logseq.api.plugin.unlink_plugin_storage_file = (function logseq$api$plugin$unlink_plugin_storage_file(plugin_id,file,assets_QMARK_){
var sub_root = logseq.api.plugin.plugin_storage_sub_root(plugin_id);
if(assets_QMARK_ === true){
return logseq.api.plugin.unlink_assetsdir_file_BANG_(file,sub_root);
} else {
return logseq.api.plugin.unlink_dotdir_file_BANG_(file,sub_root);
}
});
logseq.api.plugin.exist_plugin_storage_file = (function logseq$api$plugin$exist_plugin_storage_file(plugin_id,file,assets_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.plugin.plugin_storage_root(assets_QMARK_)),(function (root){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.plugin.plugin_storage_sub_root(plugin_id)),(function (sub_root){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(root)?(function (){var path = logseq.api.plugin.storage_dir(root,sub_root);
var user_path = logseq.api.plugin.storage_file_path(path,file,"access");
return frontend.fs.file_exists_QMARK_.cljs$core$IFn$_invoke$arity$2("",user_path);
})():null)),(function (exist_QMARK_){
return promesa.protocols._promise(cljs.core.boolean$(exist_QMARK_));
}));
}));
}));
}));
});
logseq.api.plugin.clear_plugin_storage_files = (function logseq$api$plugin$clear_plugin_storage_files(plugin_id,assets_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.plugin.plugin_storage_root(assets_QMARK_)),(function (root){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.plugin.plugin_storage_sub_root(plugin_id)),(function (sub_root){
return promesa.protocols._promise((cljs.core.truth_(root)?logseq.api.plugin.clear_rootdir_files_BANG_(sub_root,root):null));
}));
}));
}));
});
logseq.api.plugin.list_plugin_storage_files = (function logseq$api$plugin$list_plugin_storage_files(plugin_id,assets_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.plugin.plugin_storage_root(assets_QMARK_)),(function (root){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.api.plugin.plugin_storage_sub_root(plugin_id)),(function (sub_root){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(root)?logseq.api.plugin.storage_dir(root,sub_root):null)),(function (files_path){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(files_path)?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"listdir","listdir",-609252713),files_path], 0)):null)),(function (files){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = files_path;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.js_iterable_QMARK_(files);
} else {
return and__5140__auto__;
}
})())?cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46504_SHARP_){
return frontend.util.node_path.relative(files_path,p1__46504_SHARP_);
}),files)):null));
}));
}));
}));
}));
}));
});
logseq.api.plugin.load_user_preferences = (function logseq$api$plugin$load_user_preferences(){
var repo = "";
var path = frontend.handler.plugin.get_ls_dotdir_root();
var path__$1 = (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,"preferences.json") : frontend.util.node_path.join.call(null,path,"preferences.json"));
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.create_if_not_exists.cljs$core$IFn$_invoke$arity$3(repo,null,path__$1)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2(null,path__$1)),(function (json){
return promesa.protocols._mcat(promesa.protocols._promise(((clojure.string.blank_QMARK_(json))?"{}":json)),(function (json__$1){
return promesa.protocols._promise(JSON.parse(json__$1));
}));
}));
}));
}));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.idb.get_item(path__$1)),(function (json){
return promesa.protocols._promise((function (){var or__5142__auto__ = json;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ({});
}
})());
}));
}));
}
});
logseq.api.plugin.save_user_preferences = (function logseq$api$plugin$save_user_preferences(data){
if(cljs.core.truth_(data)){
var repo = "";
var path = frontend.handler.plugin.get_ls_dotdir_root();
var path__$1 = (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(path,"preferences.json") : frontend.util.node_path.join.call(null,path,"preferences.json"));
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.fs.write_plain_text_file_BANG_(repo,null,path__$1,JSON.stringify(data,null,(2)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-compare?","skip-compare?",82692960),true], null));
} else {
return frontend.common.idb.set_item_BANG_(path__$1,data);
}
} else {
return null;
}
});
logseq.api.plugin.load_plugin_user_settings = frontend.handler.plugin.make_fn_to_load_dotdir_json("settings",({}));
logseq.api.plugin.save_plugin_user_settings = (function logseq$api$plugin$save_plugin_user_settings(key,data){
return frontend.handler.plugin.make_fn_to_save_dotdir_json("settings")(key,data);
});
logseq.api.plugin.load_installed_web_plugins = (function logseq$api$plugin$load_installed_web_plugins(){
var getter = frontend.handler.plugin.make_fn_to_load_dotdir_json("installed-plugins-for-web",({}));
var G__46505 = getter(new cljs.core.Keyword(null,"all","all",892129742));
if((G__46505 == null)){
return null;
} else {
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(G__46505,cljs.core.second);
}
});
logseq.api.plugin.save_installed_web_plugin = (function logseq$api$plugin$save_installed_web_plugin(var_args){
var G__46507 = arguments.length;
switch (G__46507) {
case 1:
return logseq.api.plugin.save_installed_web_plugin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.api.plugin.save_installed_web_plugin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.api.plugin.save_installed_web_plugin.cljs$core$IFn$_invoke$arity$1 = (function (plugin){
return logseq.api.plugin.save_installed_web_plugin.cljs$core$IFn$_invoke$arity$2(plugin,false);
}));

(logseq.api.plugin.save_installed_web_plugin.cljs$core$IFn$_invoke$arity$2 = (function (plugin,remove_QMARK_){
var temp__5825__auto__ = (function (){var G__46508 = plugin;
var G__46508__$1 = (((G__46508 == null))?null:G__46508.key);
if((G__46508__$1 == null)){
return null;
} else {
return cljs.core.name(G__46508__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
var setter = frontend.handler.plugin.make_fn_to_save_dotdir_json("installed-plugins-for-web");
var plugin__$1 = JSON.parse(JSON.stringify(plugin));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var or__5142__auto__ = logseq.api.plugin.load_installed_web_plugins();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ({});
}
})()),(function (plugins){
return promesa.protocols._mcat(promesa.protocols._promise(((remove_QMARK_ === true)?(cljs.core.truth_((plugins[id]))?delete plugins[id]:null):logseq.api.plugin.goog$module$goog$object.set(plugins,id,plugin__$1))),(function (___21901__auto__){
return promesa.protocols._promise(setter(new cljs.core.Keyword(null,"all","all",892129742),plugins));
}));
}));
}));
} else {
return null;
}
}));

(logseq.api.plugin.save_installed_web_plugin.cljs$lang$maxFixedArity = 2);

logseq.api.plugin.unlink_installed_web_plugin = (function logseq$api$plugin$unlink_installed_web_plugin(key){
return logseq.api.plugin.save_installed_web_plugin.cljs$core$IFn$_invoke$arity$2(({"key": key}),true);
});
logseq.api.plugin.unlink_plugin_user_settings = frontend.handler.plugin.make_fn_to_unlink_dotdir_json("settings");
logseq.api.plugin.register_plugin_slash_command = (function logseq$api$plugin$register_plugin_slash_command(pid,cmd_actions){
var temp__5825__auto__ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(cmd_actions);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__46510 = temp__5825__auto__;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46510,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46510,(1),null);
return frontend.handler.plugin.register_plugin_slash_command(pid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmd,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__46509_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__46509_SHARP_))], null),cljs.core.rest(p1__46509_SHARP_));
}),actions)], null));
} else {
return null;
}
});
logseq.api.plugin.unregister_plugin_slash_command = (function logseq$api$plugin$unregister_plugin_slash_command(var_args){
var G__46514 = arguments.length;
switch (G__46514) {
case 1:
return logseq.api.plugin.unregister_plugin_slash_command.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.api.plugin.unregister_plugin_slash_command.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.api.plugin.unregister_plugin_slash_command.cljs$core$IFn$_invoke$arity$1 = (function (pid){
return frontend.handler.plugin.unregister_plugin_slash_command.cljs$core$IFn$_invoke$arity$1(pid);
}));

(logseq.api.plugin.unregister_plugin_slash_command.cljs$core$IFn$_invoke$arity$2 = (function (pid,cmd){
return frontend.handler.plugin.unregister_plugin_slash_command.cljs$core$IFn$_invoke$arity$2(pid,cmd);
}));

(logseq.api.plugin.unregister_plugin_slash_command.cljs$lang$maxFixedArity = 2);

logseq.api.plugin.register_plugin_simple_command = (function logseq$api$plugin$register_plugin_simple_command(pid,cmd_action,palette_QMARK_){
var temp__5825__auto__ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(cmd_action);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__46515 = temp__5825__auto__;
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46515,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46515,(1),null);
var action__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(action,(0),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(action)));
var cmd__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cmd,new cljs.core.Keyword(null,"key","key",-1516042587),clojure.string.replace(clojure.string.replace(clojure.string.trim(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cmd)),":","-"),/^([0-9])/,"_$1"));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cmd__$1);
var keybinding = new cljs.core.Keyword(null,"keybinding","keybinding",1090151579).cljs$core$IFn$_invoke$arity$1(cmd__$1);
var palette_cmd = frontend.handler.plugin.simple_cmd__GT_palette_cmd(pid,cmd__$1,action__$1);
var action_SINGLEQUOTE_ = (function (){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exec-plugin-cmd","exec-plugin-cmd",1049730302),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type,new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"cmd","cmd",-302931143),cmd__$1,new cljs.core.Keyword(null,"action","action",-811238024),action__$1], null)], null));
});
frontend.handler.plugin.register_plugin_simple_command(pid,cmd__$1,action__$1);

if(cljs.core.truth_(palette_QMARK_)){
frontend.handler.command_palette.register(palette_cmd);
} else {
}

var temp__5825__auto____$1 = (function (){var and__5140__auto__ = keybinding;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.handler.plugin.simple_cmd_keybinding__GT_shortcut_args(pid,key,keybinding);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto____$1)){
var shortcut_args = temp__5825__auto____$1;
var dispatch_cmd = (function (_e){
if(cljs.core.truth_(palette_QMARK_)){
return frontend.handler.command_palette.invoke_command(palette_cmd);
} else {
return action_SINGLEQUOTE_();
}
});
var vec__46518 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(shortcut_args,(2),cljs.core.merge,cmd__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),dispatch_cmd,new cljs.core.Keyword(null,"cmd","cmd",-302931143),palette_cmd], null));
var mode_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46518,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46518,(1),null);
var shortcut_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46518,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode_id,new cljs.core.Keyword("shortcut.handler","block-editing-only","shortcut.handler/block-editing-only",794342449))){
return frontend.modules.shortcut.config.add_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(mode_id,id,shortcut_map);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shortcut","register-shortcut","shortcut/register-shortcut",-1487318401),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mode_id,id,shortcut_map], null)], 0));

return frontend.modules.shortcut.core.register_shortcut_BANG_.cljs$core$IFn$_invoke$arity$3(mode_id,id,shortcut_map);

}
} else {
return null;
}
} else {
return null;
}
});
logseq.api.plugin.plugin_command_id = (function logseq$api$plugin$plugin_command_id(pid_name,key){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"plugin."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pid_name)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)));
});
logseq.api.plugin.unregister_plugin_command_entry_BANG_ = (function logseq$api$plugin$unregister_plugin_command_entry_BANG_(id){
frontend.handler.command_palette.unregister(id);

var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.modules.shortcut.config._STAR_shortcut_cmds),id);
if(cljs.core.truth_(temp__5825__auto__)){
var cmd = temp__5825__auto__;
if(cljs.core.seq(new cljs.core.Keyword(null,"shortcut","shortcut",-431647697).cljs$core$IFn$_invoke$arity$1(cmd))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shortcut","unregister-shortcut","shortcut/unregister-shortcut",-1191227358),cmd], 0));

return frontend.modules.shortcut.core.unregister_shortcut_BANG_(new cljs.core.Keyword(null,"handler-id","handler-id",1160395333).cljs$core$IFn$_invoke$arity$1(cmd),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cmd));
} else {
return null;
}
} else {
return null;
}
});
logseq.api.plugin.unregister_plugin_simple_command = (function logseq$api$plugin$unregister_plugin_simple_command(var_args){
var G__46522 = arguments.length;
switch (G__46522) {
case 1:
return logseq.api.plugin.unregister_plugin_simple_command.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return logseq.api.plugin.unregister_plugin_simple_command.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.api.plugin.unregister_plugin_simple_command.cljs$core$IFn$_invoke$arity$1 = (function (pid){
var pid_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
var pid_name = cljs.core.name(pid_key);
var command_ids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__46523){
var vec__46524 = p__46523;
var _type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46524,(0),null);
var map__46527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46524,(1),null);
var map__46527__$1 = cljs.core.__destructure_map(map__46527);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46527__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var _action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46524,(2),null);
var _pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46524,(3),null);
if(cljs.core.truth_(key)){
return logseq.api.plugin.plugin_command_id(pid_name,key);
} else {
return null;
}
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("plugin","simple-commands","plugin/simple-commands",234820996),pid_key], null))));
frontend.handler.plugin.unregister_plugin_simple_command.cljs$core$IFn$_invoke$arity$1(pid_key);

var seq__46528 = cljs.core.seq(command_ids);
var chunk__46529 = null;
var count__46530 = (0);
var i__46531 = (0);
while(true){
if((i__46531 < count__46530)){
var id = chunk__46529.cljs$core$IIndexed$_nth$arity$2(null,i__46531);
logseq.api.plugin.unregister_plugin_command_entry_BANG_(id);


var G__46537 = seq__46528;
var G__46538 = chunk__46529;
var G__46539 = count__46530;
var G__46540 = (i__46531 + (1));
seq__46528 = G__46537;
chunk__46529 = G__46538;
count__46530 = G__46539;
i__46531 = G__46540;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__46528);
if(temp__5825__auto__){
var seq__46528__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46528__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__46528__$1);
var G__46541 = cljs.core.chunk_rest(seq__46528__$1);
var G__46542 = c__5673__auto__;
var G__46543 = cljs.core.count(c__5673__auto__);
var G__46544 = (0);
seq__46528 = G__46541;
chunk__46529 = G__46542;
count__46530 = G__46543;
i__46531 = G__46544;
continue;
} else {
var id = cljs.core.first(seq__46528__$1);
logseq.api.plugin.unregister_plugin_command_entry_BANG_(id);


var G__46545 = cljs.core.next(seq__46528__$1);
var G__46546 = null;
var G__46547 = (0);
var G__46548 = (0);
seq__46528 = G__46545;
chunk__46529 = G__46546;
count__46530 = G__46547;
i__46531 = G__46548;
continue;
}
} else {
return null;
}
}
break;
}
}));

(logseq.api.plugin.unregister_plugin_simple_command.cljs$core$IFn$_invoke$arity$2 = (function (pid,key){
var pid_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
var pid_name = cljs.core.name(pid_key);
var key__$1 = clojure.string.replace(clojure.string.replace(clojure.string.trim((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key))),":","-"),/^([0-9])/,"_$1");
frontend.handler.plugin.unregister_plugin_simple_command.cljs$core$IFn$_invoke$arity$2(pid_key,key__$1);

return logseq.api.plugin.unregister_plugin_command_entry_BANG_(logseq.api.plugin.plugin_command_id(pid_name,key__$1));
}));

(logseq.api.plugin.unregister_plugin_simple_command.cljs$lang$maxFixedArity = 2);

logseq.api.plugin.register_search_service = (function logseq$api$plugin$register_search_service(pid,name,opts){
return frontend.handler.plugin.register_plugin_search_service(pid,name,cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts));
});
logseq.api.plugin.unregister_search_services = (function logseq$api$plugin$unregister_search_services(pid){
return frontend.handler.plugin.unregister_plugin_search_services(pid);
});
logseq.api.plugin.register_plugin_ui_item = (function logseq$api$plugin$register_plugin_ui_item(pid,type,opts){
var temp__5825__auto__ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto__)){
var opts__$1 = temp__5825__auto__;
return frontend.handler.plugin.register_plugin_ui_item(pid,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"type","type",1174270348),type));
} else {
return null;
}
});
logseq.api.plugin.get_external_plugin = (function logseq$api$plugin$get_external_plugin(pid){
var temp__5825__auto__ = frontend.handler.plugin.get_plugin_inst(pid);
if(cljs.core.truth_(temp__5825__auto__)){
var pl = temp__5825__auto__;
return pl.toJSON();
} else {
return null;
}
});
logseq.api.plugin.invoke_external_plugin_cmd = (function logseq$api$plugin$invoke_external_plugin_cmd(pid,cmd_group,cmd_key,cmd_args){
var G__46532 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cmd_group);
var G__46532__$1 = (((G__46532 instanceof cljs.core.Keyword))?G__46532.fqn:null);
switch (G__46532__$1) {
case "models":
return frontend.handler.plugin.call_plugin_user_model_BANG_(pid,cmd_key,cmd_args);

break;
case "commands":
return frontend.handler.plugin.call_plugin_user_command_BANG_(pid,cmd_key,cmd_args);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46532__$1))));

}
});
logseq.api.plugin.validate_external_plugins = (function logseq$api$plugin$validate_external_plugins(urls){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"validateUserExternalPlugins","validateUserExternalPlugins",-316610937),urls], 0));
});
logseq.api.plugin.__install_plugin = (function logseq$api$plugin$__install_plugin(manifest){
var temp__5825__auto__ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(manifest);
if(cljs.core.truth_(temp__5825__auto__)){
var map__46533 = temp__5825__auto__;
var map__46533__$1 = cljs.core.__destructure_map(map__46533);
var manifest__$1 = map__46533__$1;
var repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46533__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46533__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.not((function (){var and__5140__auto__ = repo;
if(cljs.core.truth_(and__5140__auto__)){
return id;
} else {
return and__5140__auto__;
}
})())){
throw (new Error("[required] :repo :id"));
} else {
return frontend.handler.common.plugin.install_marketplace_plugin_BANG_(manifest__$1);
}
} else {
return null;
}
});

//# sourceMappingURL=logseq.api.plugin.js.map
