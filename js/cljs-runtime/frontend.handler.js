goog.provide('frontend.handler');
goog.scope(function(){
  frontend.handler.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.handler.set_global_error_notification_BANG_ = (function frontend$handler$set_global_error_notification_BANG_(){
return (window.onerror = (function (message,_source,_lineno,_colno,error){
if(frontend.error.ignored_QMARK_(message)){
return null;
} else {
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),51], null)),error);
} else {
return null;
}
}
}));
});
frontend.handler.restore_and_setup_BANG_ = (function frontend$handler$restore_and_setup_BANG_(repo){
if(cljs.core.truth_(repo)){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.restore.restore_graph_BANG_(repo)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo._LT_restore_date_formatter_BANG_(repo)),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.graph._LT_upsert_current_graph_registry_BANG_()),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.graph.remember_current_graph_id_in_tab_BANG_()),(function (___21901__auto__){
return promesa.protocols._promise(frontend.handler.repo_config.start(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null)));
}));
}));
}));
}));
})),(function (){
frontend.handler.ui.add_style_if_exists_BANG_();

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.config.global_config_enabled_QMARK_())?frontend.handler.global_config.start(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null)):null)),(function (___21901__auto__){
return promesa.protocols._promise((cljs.core.truth_(frontend.config.plugin_config_enabled_QMARK_())?frontend.handler.plugin_config.start():null));
}));
})),(function (){
frontend.modules.shortcut.core.refresh_BANG_();

return frontend.state.set_db_restoring_BANG_(false);
}));
})),(function (){
console.log("db restored, setting up repo hooks");

frontend.handler.page.init_commands_BANG_();

return frontend.handler.page.watch_for_date_BANG_();
})),(function (error){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exception","exception",-335277064),error,new cljs.core.Keyword(null,"line","line",212345235),86], null)),error);
} else {
return null;
}
}));
} else {
return null;
}
});
frontend.handler.handle_connection_change = (function frontend$handler$handle_connection_change(e){
var online_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.handler.goog$module$goog$object.get(e,"type"),"online");
return frontend.state.set_online_BANG_(online_QMARK_);
});
frontend.handler.set_network_watcher_BANG_ = (function frontend$handler$set_network_watcher_BANG_(){
window.addEventListener("online",frontend.handler.handle_connection_change);

return window.addEventListener("offline",frontend.handler.handle_connection_change);
});
frontend.handler.register_components_fns_BANG_ = (function frontend$handler$register_components_fns_BANG_(){
frontend.state.set_page_blocks_cp_BANG_(frontend.components.page.page_cp);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","->hiccup","block/->hiccup",1095099532),frontend.components.block.__GT_hiccup);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","linked-references","block/linked-references",-2022711478),frontend.components.reference.references);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","container","block/container",510671002),frontend.components.block.block_container);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","inline-title","block/inline-title",984777401),frontend.components.block.inline_title);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","breadcrumb","block/breadcrumb",1725167425),frontend.components.block.breadcrumb.breadcrumb);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","reference","block/reference",1588749254),frontend.components.block.block_reference);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","blocks-container","block/blocks-container",409697112),frontend.components.block.blocks_container);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","properties-cp","block/properties-cp",-1663328285),frontend.components.block.db_properties_cp);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","page-cp","block/page-cp",975876274),frontend.components.block.page_cp);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","inline-text","block/inline-text",607091413),frontend.components.block.inline_text);

frontend.state.set_component_BANG_(new cljs.core.Keyword("block","asset-cp","block/asset-cp",1438941908),frontend.components.block.asset_cp);

frontend.state.set_component_BANG_(new cljs.core.Keyword("editor","box","editor/box",-1921770435),frontend.components.editor.box);

frontend.state.set_component_BANG_(new cljs.core.Keyword("selection","context-menu","selection/context-menu",1845974273),frontend.components.content.custom_context_menu_content);

return frontend.handler.command_palette.register_global_shortcut_commands();
});
frontend.handler.get_system_info = (function frontend$handler$get_system_info(){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("system","info","system/info",-1203399931)], 0))),(function (info){
return promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("system","info","system/info",-1203399931),cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(info)));
}));
}));
} else {
return null;
}
});
frontend.handler.current_url_target = (function frontend$handler$current_url_target(){
try{return frontend.util.url.parse_web_url_target(window.location.href);
}catch (e47401){if((e47401 instanceof Error)){
var e = e47401;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("url-target","parse-failed","url-target/parse-failed",-945058367),e,new cljs.core.Keyword(null,"line","line",212345235),127], null)),null);
} else {
}

return null;
} else {
throw e47401;

}
}});
frontend.handler.apply_url_target_route_BANG_ = (function frontend$handler$apply_url_target_route_BANG_(url_target){
var map__47402 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(url_target);
var map__47402__$1 = cljs.core.__destructure_map(map__47402);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47402__$1,new cljs.core.Keyword(null,"to","to",192099007));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47402__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var block_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47402__$1,new cljs.core.Keyword(null,"block-id","block-id",-70582834));
var G__47403 = to;
var G__47403__$1 = (((G__47403 instanceof cljs.core.Keyword))?G__47403.fqn:null);
switch (G__47403__$1) {
case "page":
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(page_id);

break;
case "block":
return frontend.handler.route.redirect_to_page_BANG_.cljs$core$IFn$_invoke$arity$1(block_id);

break;
default:
return null;

}
});
frontend.handler.start_BANG_ = (function frontend$handler$start_BANG_(render){
frontend.state.set_db_restoring_BANG_(true);

var t1 = (frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null));
var ui_ready = promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.idb.start()),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.get_system_info()),(function (___21901__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.plugin.setup_BANG_()),(function (___21901__auto____$2){
return promesa.protocols._promise((render.cljs$core$IFn$_invoke$arity$0 ? render.cljs$core$IFn$_invoke$arity$0() : render.call(null)));
}));
}));
}));
}));
frontend.handler.set_global_error_notification_BANG_();

frontend.handler.register_components_fns_BANG_();

frontend.handler.user.restore_tokens_from_localstorage();

frontend.components.user.login.setup_configure_BANG_();

if(cljs.core.truth_(frontend.util.electron_QMARK_())){
electron.listener.listen_BANG_();
} else {
}

frontend.context.i18n.start();

frontend.modules.instrumentation.core.init();

frontend.handler.events.run_BANG_();

if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("frontend.handler","start-web-worker","frontend.handler/start-web-worker",-1473999897),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"line","line",212345235),165], null)),null);
} else {
}

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(ui_ready,(function (){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null))),(function (t2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_start_runtime_BANG_()),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(((goog.debug.LOGGING_ENABLED)?lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("frontend.handler","db-worker-spent-time","frontend.handler/db-worker-spent-time",-560120422),((frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null)) - t2),new cljs.core.Keyword(null,"line","line",212345235),172], null)),null):null)),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo.get_repos()),(function (repos){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_repos_BANG_(repos)),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.mobile.util.hide_splash()),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.current_url_target()),(function (url_target){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.graph._LT_get_graph_registry()),(function (registry){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(url_target))?new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1((function (){var G__47404 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(registry,frontend.handler.graph.registry_from_repo_summaries(repos));
var G__47405 = url_target;
return (frontend.handler.graph.resolve_registry_target.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.graph.resolve_registry_target.cljs$core$IFn$_invoke$arity$2(G__47404,G__47405) : frontend.handler.graph.resolve_registry_target.call(null,G__47404,G__47405));
})()):null)),(function (target_repo){
return promesa.protocols._mcat(promesa.protocols._promise(((((cljs.core.seq(new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(url_target))) && ((target_repo == null))))?((goog.debug.LOGGING_ENABLED)?lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("url-target","unresolved-graph-id","url-target/unresolved-graph-id",-2092849063),url_target,new cljs.core.Keyword(null,"line","line",212345235),184], null)),null):null):null)),(function (___$4){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.graph.resolve_startup_repo(registry,repos,url_target,(frontend.handler.graph.get_tab_graph.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.graph.get_tab_graph.cljs$core$IFn$_invoke$arity$0() : frontend.handler.graph.get_tab_graph.call(null)),frontend.state.get_current_repo())),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.empty_QMARK_(repos))?frontend.handler.repo.new_db_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.config.demo_repo):frontend.handler.restore_and_setup_BANG_(repo))),(function (___$5){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(target_repo)?frontend.handler.apply_url_target_route_BANG_(url_target):null)),(function (___$6){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.set_network_watcher_BANG_()),(function (___21901__auto__){
return promesa.protocols._promise((cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?frontend.state.restore_mobile_theme_BANG_():null));
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
}));
}));
}));
}));
})),(function (e){
return console.error("Error while restoring repos: ",e);
})),(function (){
frontend.state.set_db_restoring_BANG_(false);

promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.app_ready_promise,true);

if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("frontend.handler","app-init-spent-time","frontend.handler/app-init-spent-time",-881163940),((frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null)) - t1),new cljs.core.Keyword(null,"line","line",212345235),204], null)),null);
} else {
return null;
}
}));
});
frontend.handler.quit_and_install_new_version_BANG_ = (function frontend$handler$quit_and_install_new_version_BANG_(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(electron.ipc.invoke.cljs$core$IFn$_invoke$arity$variadic("set-quit-dirty-state",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0))),(function (_){
return promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"quitAndInstall","quitAndInstall",-856751624)], 0)));
}));
}));
});

//# sourceMappingURL=frontend.handler.js.map
