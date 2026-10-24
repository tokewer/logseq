goog.provide('frontend.handler.events');
var module$node_modules$$sentry$react$build$cjs$index=shadow.js.require("module$node_modules$$sentry$react$build$cjs$index", {});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.events !== 'undefined') && (typeof frontend.handler.events.event_definitions !== 'undefined')){
} else {
frontend.handler.events.event_definitions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.handler.events.capture_event_error_BANG_ = (function frontend$handler$events$capture_event_error_BANG_(event,error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.events",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-error","event-error",-1244224565),error,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"line","line",212345235),62], null)),null);
} else {
}

var type = new cljs.core.Keyword("handle-system-events","failed","handle-system-events/failed",-2079184624);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"payload","payload",-383036092),event], null)], null)], null));
});
frontend.handler.events.handle_rfx_event = (function frontend$handler$events$handle_rfx_event(handler,_coeffects,event){
try{var result = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.resolved((handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event))),(function (error){
frontend.handler.events.capture_event_error_BANG_(event,error);

return promesa.core.rejected(error);
}));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("frontend.rfx","result","frontend.rfx/result",39862539),result], null);
}catch (e46592){var error = e46592;
frontend.handler.events.capture_event_error_BANG_(event,error);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("frontend.rfx","error","frontend.rfx/error",-2019801344),error], null);
}});
frontend.handler.events.register_rfx_handler_BANG_ = (function frontend$handler$events$register_rfx_handler_BANG_(event_id,handler){
return frontend.rfx.reg_event_fx_BANG_.cljs$core$IFn$_invoke$arity$2(event_id,(function (coeffects,event){
return frontend.handler.events.handle_rfx_event(handler,coeffects,event);
}));
});
frontend.handler.events.register_event_definition_BANG_ = (function frontend$handler$events$register_event_definition_BANG_(event_id,handler){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.handler.events.event_definitions,cljs.core.assoc,event_id,handler);

frontend.handler.events.register_rfx_handler_BANG_(event_id,handler);

return null;
});
if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.events !== 'undefined') && (typeof frontend.handler.events._STAR_search_index_build_timeout !== 'undefined')){
} else {
frontend.handler.events._STAR_search_index_build_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.handler.events._LT_build_search_index_BANG_ = (function frontend$handler$events$_LT_build_search_index_BANG_(repo){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","search-build-blocks-indice-in-worker","thread-api/search-build-blocks-indice-in-worker",-1993640480),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"started","started",585705024),result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,frontend.state.get_current_repo()))))?frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","ready","graph/ready",1121782733),repo], null)):null)),(function (___21901__auto__){
return promesa.protocols._promise(result);
}));
}));
})),(function (error){
return console.error("Search index build error:",error);
}));
});
frontend.handler.events.schedule_search_index_build_BANG_ = (function frontend$handler$events$schedule_search_index_build_BANG_(repo){
var temp__5825__auto___46812 = cljs.core.deref(frontend.handler.events._STAR_search_index_build_timeout);
if(cljs.core.truth_(temp__5825__auto___46812)){
var timeout_id_46813 = temp__5825__auto___46812;
clearTimeout(timeout_id_46813);
} else {
}

return cljs.core.reset_BANG_(frontend.handler.events._STAR_search_index_build_timeout,setTimeout((function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(repo,frontend.state.get_current_repo())){
return cljs.core.reset_BANG_(frontend.handler.events._STAR_search_index_build_timeout,null);
} else {
if(cljs.core.truth_(frontend.state.input_idle_QMARK_.cljs$core$IFn$_invoke$arity$variadic(repo,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"diff","diff",2135942783),(5000)], 0)))){
cljs.core.reset_BANG_(frontend.handler.events._STAR_search_index_build_timeout,null);

return frontend.handler.events._LT_build_search_index_BANG_(repo);
} else {
return (frontend.handler.events.schedule_search_index_build_BANG_.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.events.schedule_search_index_build_BANG_.cljs$core$IFn$_invoke$arity$1(repo) : frontend.handler.events.schedule_search_index_build_BANG_.call(null,repo));

}
}
}),(1000)));
});
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("init","commands","init/commands",315507426),(function (_){
return frontend.handler.page.init_commands_BANG_();
}));
frontend.handler.events.graph_switch = (function frontend$handler$events$graph_switch(graph){
frontend.state.set_current_repo_BANG_(graph);

frontend.handler.page.init_commands_BANG_();

frontend.handler.repo_config.restore_repo_config_BANG_.cljs$core$IFn$_invoke$arity$1(graph);

frontend.modules.shortcut.core.refresh_BANG_();

frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();

return frontend.handler.graph.settle_metadata_to_local_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-seen-at","last-seen-at",1929467667),Date.now()], null));
});
/**
 * graph: the target graph to switch to
 */
frontend.handler.events.graph_switch_on_persisted = (function frontend$handler$events$graph_switch_on_persisted(graph,opts){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo.restore_and_setup_repo_BANG_(graph)),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.events.graph_switch(graph)),(function (___21901__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.graph._LT_upsert_current_graph_registry_BANG_()),(function (___21901__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.graph.remember_current_graph_id_in_tab_BANG_()),(function (___21901__auto____$3){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("sync-graph","init?","sync-graph/init?",608792103),false)),(function (___21901__auto____$4){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"rtc-download?","rtc-download?",453352962).cljs$core$IFn$_invoke$arity$1(opts))?(function (){
frontend.handler.repo.refresh_repos_BANG_();

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((5000))),(function (___21901__auto____$5){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.events._LT_build_search_index_BANG_(repo)),(function (_){
return promesa.protocols._promise((cljs.core.truth_(frontend.state.lsp_enabled_QMARK_)?(function (){var seq__46593 = cljs.core.seq(frontend.state.get_all_plugin_services_with_type(new cljs.core.Keyword(null,"search","search",1564939822)));
var chunk__46594 = null;
var count__46595 = (0);
var i__46596 = (0);
while(true){
if((i__46596 < count__46595)){
var service = chunk__46594.cljs$core$IIndexed$_nth$arity$2(null,i__46596);
frontend.search.plugin.call_service_BANG_.cljs$core$IFn$_invoke$arity$3(service,"search:rebuildPagesIndice",cljs.core.PersistentArrayMap.EMPTY);

frontend.search.plugin.call_service_BANG_.cljs$core$IFn$_invoke$arity$3(service,"search:rebuildBlocksIndice",cljs.core.PersistentArrayMap.EMPTY);


var G__46814 = seq__46593;
var G__46815 = chunk__46594;
var G__46816 = count__46595;
var G__46817 = (i__46596 + (1));
seq__46593 = G__46814;
chunk__46594 = G__46815;
count__46595 = G__46816;
i__46596 = G__46817;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__46593);
if(temp__5825__auto__){
var seq__46593__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46593__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__46593__$1);
var G__46818 = cljs.core.chunk_rest(seq__46593__$1);
var G__46819 = c__5673__auto__;
var G__46820 = cljs.core.count(c__5673__auto__);
var G__46821 = (0);
seq__46593 = G__46818;
chunk__46594 = G__46819;
count__46595 = G__46820;
i__46596 = G__46821;
continue;
} else {
var service = cljs.core.first(seq__46593__$1);
frontend.search.plugin.call_service_BANG_.cljs$core$IFn$_invoke$arity$3(service,"search:rebuildPagesIndice",cljs.core.PersistentArrayMap.EMPTY);

frontend.search.plugin.call_service_BANG_.cljs$core$IFn$_invoke$arity$3(service,"search:rebuildBlocksIndice",cljs.core.PersistentArrayMap.EMPTY);


var G__46822 = cljs.core.next(seq__46593__$1);
var G__46823 = null;
var G__46824 = (0);
var G__46825 = (0);
seq__46593 = G__46822;
chunk__46594 = G__46823;
count__46595 = G__46824;
i__46596 = G__46825;
continue;
}
} else {
return null;
}
}
break;
}
})():null));
}));
}));
})));
}));
}));
})()
:null));
}));
}));
}));
}));
}));
}));
});
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("graph","switch","graph/switch",178853840),(function (p__46597){
var vec__46598 = p__46597;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46598,(0),null);
var graph = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46598,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46598,(2),null);
var t1 = cljs_time.core.now();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.auto_save.flush_save_BANG_.cljs$core$IFn$_invoke$arity$0()),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.auto_save.cancel_auto_save_BANG_.cljs$core$IFn$_invoke$arity$0()),(function (___21901__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.export$.cancel_db_backup_BANG_()),(function (___21901__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.clear_async_queries_BANG_()),(function (___21901__auto____$3){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.events.graph_switch_on_persisted(graph,opts)),(function (___21901__auto____$4){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.auto_save.flush_save_BANG_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo())),(function (___21901__auto____$5){
return promesa.protocols._promise((function (){var t2 = cljs_time.core.now();
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.events",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("frontend.handler.events","graph-switch-spent","frontend.handler.events/graph-switch-spent",-748244671),(t2 - t1),new cljs.core.Keyword(null,"line","line",212345235),166], null)),null);
} else {
return null;
}
})());
}));
}));
}));
}));
}));
}));
}));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("graph","open-new-window","graph/open-new-window",-397266781),(function (p__46601){
var vec__46602 = p__46601;
var _ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46602,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46602,(1),null);
return frontend.handler.ui.open_new_window_or_tab_BANG_(target);
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("page","create","page/create",-1304816391),(function (p__46605){
var vec__46606 = p__46605;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46606,(0),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46606,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46606,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_name,frontend.date.today())){
return frontend.handler.page.create_today_journal_BANG_();
} else {
return (frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.page._LT_create_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,opts) : frontend.handler.page._LT_create_BANG_.call(null,page_name,opts));
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("page","deleted","page/deleted",-523428622),(function (p__46609){
var vec__46610 = p__46609;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46610,(0),null);
var page_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46610,(1),null);
var _tx_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46610,(2),null);
if(cljs.core.truth_(page_name)){
if(cljs.core.truth_(frontend.util.mobile_QMARK_())){
return null;
} else {
return frontend.handler.common.page.after_page_deleted_BANG_(page_name);
}
} else {
return null;
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("page","renamed","page/renamed",-1655115736),(function (p__46613){
var vec__46614 = p__46613;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46614,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46614,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46614,(2),null);
if(cljs.core.truth_(frontend.util.mobile_QMARK_())){
return null;
} else {
return frontend.handler.common.page.after_page_renamed_BANG_(repo,data);
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("graph","sync-context","graph/sync-context",1484639785),(function (_event){
var context = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dev?","dev?",-613971064),new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),new cljs.core.Keyword(null,"importing?","importing?",-656840367),new cljs.core.Keyword(null,"node-test?","node-test?",-171079151),new cljs.core.Keyword(null,"export-bullet-indentation","export-bullet-indentation",-248047595),new cljs.core.Keyword(null,"web-platform?","web-platform?",-865960427),new cljs.core.Keyword(null,"validate-db-options","validate-db-options",89965176),new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709),new cljs.core.Keyword(null,"preferred-format","preferred-format",-1784393121)],[frontend.config.dev_QMARK_,frontend.util.mobile_QMARK_(),new cljs.core.Keyword("graph","importing","graph/importing",1647644617).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()),frontend.util.node_test_QMARK_,frontend.state.get_export_bullet_indentation(),frontend.util.web_platform_QMARK_,new cljs.core.Keyword("dev","validate-db-options","dev/validate-db-options",89933411).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()),frontend.state.get_date_formatter(),frontend.state.get_preferred_format()]);
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","set-context","thread-api/set-context",241806017),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context], 0));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("graph","ready","graph/ready",1121782733),(function (p__46617){
var vec__46618 = p__46617;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46618,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46618,(1),null);
return frontend.handler.repo.graph_ready_BANG_(repo);
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword(null,"instrument","instrument",-960698844),(function (p__46621){
var vec__46622 = p__46621;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46622,(0),null);
var map__46625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46622,(1),null);
var map__46625__$1 = cljs.core.__destructure_map(map__46625);
var opts = map__46625__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46625__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46625__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
if(cljs.core.empty_QMARK_(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"payload","payload",-383036092)], 0)))){
} else {
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.events",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"invalid-instrument-payload-keys","invalid-instrument-payload-keys",-257706085),new cljs.core.Keyword(null,"message","message",-406056002),"instrument data-map should only contain [:type :payload]",new cljs.core.Keyword(null,"payload","payload",-383036092),opts,new cljs.core.Keyword(null,"line","line",212345235),207], null)),null);
} else {
}
}

return frontend.modules.instrumentation.posthog.capture(type,payload);
}));
frontend.handler.events._LT_current_graph_schema_version = (function frontend$handler$events$_LT_current_graph_schema_version(){
if(cljs.core.truth_(cljs.core.deref(frontend.state.db_worker_ready_QMARK_))){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-key-value","thread-api/get-key-value",940412851),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.Keyword("logseq.kv","schema-version","logseq.kv/schema-version",-1467606676)], 0))),(function (version){
return promesa.protocols._promise((function (){var G__46626 = version;
if((G__46626 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46626));
}
})());
}));
}));
} else {
return promesa.core.resolved(null);
}
});
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword(null,"capture-error","capture-error",583122432),(function (p__46627){
var vec__46628 = p__46627;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46628,(0),null);
var map__46631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46628,(1),null);
var map__46631__$1 = cljs.core.__destructure_map(map__46631);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46631__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46631__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46631__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.events._LT_current_graph_schema_version()),(function (db_schema_version){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema-version","schema-version",1117939594),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.schema.version)),new cljs.core.Keyword(null,"db-schema-version","db-schema-version",-1168427088),db_schema_version,new cljs.core.Keyword(null,"db-based","db-based",-738284547),true], null),payload], 0))),(function (payload__$1){
return promesa.protocols._promise(module$node_modules$$sentry$react$build$cjs$index.captureException(error,cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tags","tags",1771418977),payload__$1,new cljs.core.Keyword(null,"extra","extra",1612569067),extra], null))));
}));
}));
}));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword(null,"exec-plugin-cmd","exec-plugin-cmd",1049730302),(function (p__46632){
var vec__46633 = p__46632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46633,(0),null);
var map__46636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46633,(1),null);
var map__46636__$1 = cljs.core.__destructure_map(map__46636);
var pid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46636__$1,new cljs.core.Keyword(null,"pid","pid",1018387698));
var cmd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46636__$1,new cljs.core.Keyword(null,"cmd","cmd",-302931143));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46636__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return frontend.commands.exec_plugin_simple_command_BANG_(pid,cmd,action);
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword(null,"shortcut-handler-refreshed","shortcut-handler-refreshed",1293579011),(function (p__46637){
var vec__46638 = p__46637;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46638,(0),null);
if(cljs.core.truth_(cljs.core.deref(frontend.modules.shortcut.core._STAR_pending_inited_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(frontend.modules.shortcut.core._STAR_pending_inited_QMARK_,true);

return frontend.modules.shortcut.core.consume_pending_shortcuts_BANG_();
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("mobile","keyboard-will-show","mobile/keyboard-will-show",2010922836),(function (p__46641){
var vec__46642 = p__46641;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46642,(0),null);
var keyboard_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46642,(1),null);
var _main_node = frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0();
var temp__5825__auto___46826 = document.querySelector(":root");
if(cljs.core.truth_(temp__5825__auto___46826)){
var html_46827 = temp__5825__auto___46826;
html_46827.style.setProperty("--ls-native-kb-height",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyboard_height)+"px"));

html_46827.classList.add("has-mobile-keyboard");

html_46827.style.setProperty("--ls-native-toolbar-opacity",(1));
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())){
cljs.core.reset_BANG_(frontend.util.keyboard_height,keyboard_height);

var G__46645 = (function (){
var G__46646 = frontend.state.get_input();
if((G__46646 == null)){
return null;
} else {
return frontend.util.scroll_editor_cursor.cljs$core$IFn$_invoke$arity$2(G__46646,false);
}
});
return (frontend.util.schedule.cljs$core$IFn$_invoke$arity$1 ? frontend.util.schedule.cljs$core$IFn$_invoke$arity$1(G__46645) : frontend.util.schedule.call(null,G__46645));
} else {
return null;
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("mobile","keyboard-will-hide","mobile/keyboard-will-hide",-1974048806),(function (p__46647){
var vec__46648 = p__46647;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46648,(0),null);
var main_node = frontend.util.app_scroll_container_node.cljs$core$IFn$_invoke$arity$0();
var temp__5825__auto___46828 = document.querySelector(":root");
if(cljs.core.truth_(temp__5825__auto___46828)){
var html_46829 = temp__5825__auto___46828;
html_46829.style.removeProperty("--ls-native-kb-height");

html_46829.style.setProperty("--ls-native-toolbar-opacity",(0));

html_46829.classList.remove("has-mobile-keyboard");
} else {
}

if(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())){
var temp__5825__auto___46830 = document.querySelector(".cards-review");
if(cljs.core.truth_(temp__5825__auto___46830)){
var card_preview_el_46831 = temp__5825__auto___46830;
(card_preview_el_46831.style.marginBottom = "0px");
} else {
}

(main_node.style.marginBottom = "0px");

var temp__5825__auto___46832 = goog.dom.getElement("left-sidebar");
if(cljs.core.truth_(temp__5825__auto___46832)){
var left_sidebar_node_46833 = temp__5825__auto___46832;
(left_sidebar_node_46833.style.bottom = "0px");
} else {
}

var temp__5825__auto__ = goog.dom.getElementByClass("sidebar-item-list");
if(cljs.core.truth_(temp__5825__auto__)){
var right_sidebar_node = temp__5825__auto__;
return (right_sidebar_node.style.paddingBottom = "150px");
} else {
return null;
}
} else {
return null;
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("plugin","hook-db-tx","plugin/hook-db-tx",1065547419),(function (p__46652){
var vec__46653 = p__46652;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46653,(0),null);
var map__46656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46653,(1),null);
var map__46656__$1 = cljs.core.__destructure_map(map__46656);
var payload = map__46656__$1;
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46656__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46656__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var temp__5825__auto__ = (function (){var and__5140__auto__ = cljs.core.seq(blocks);
if(and__5140__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46651_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__46651_SHARP_);
}),tx_data)], null)], 0));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var payload__$1 = temp__5825__auto__;
frontend.handler.plugin.hook_plugin_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"changed","changed",570724917),payload__$1);

return frontend.handler.plugin.hook_plugin_block_changes(payload__$1);
} else {
return null;
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword(null,"rebuild-slash-commands-list","rebuild-slash-commands-list",-639662306),(function (p__46657){
var vec__46658 = p__46657;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46658,(0),null);
return (frontend.handler.page.rebuild_slash_commands_list_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.page.rebuild_slash_commands_list_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.page.rebuild_slash_commands_list_BANG_.call(null));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("shortcut","refresh","shortcut/refresh",-1755508577),(function (p__46661){
var vec__46662 = p__46661;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46662,(0),null);
return frontend.modules.shortcut.core.refresh_BANG_();
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","set-heading","editor/set-heading",-2004750659),(function (p__46665){
var vec__46666 = p__46665;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46666,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46666,(1),null);
var heading = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46666,(2),null);
var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return frontend.handler.editor.set_heading_BANG_(id,heading);
} else {
return null;
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("graph","restored","graph/restored",1296384092),(function (p__46669){
var vec__46670 = p__46669;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46670,(0),null);
var graph = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46670,(1),null);
if(cljs.core.truth_(graph)){
frontend.handler.assets.ensure_assets_dir_BANG_(graph);
} else {
}

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","sync-context","graph/sync-context",1484639785)], null));

if(cljs.core.truth_((function (){var and__5140__auto__ = graph;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(new cljs.core.Keyword("graph","importing","graph/importing",1647644617).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()));
} else {
return and__5140__auto__;
}
})())){
frontend.handler.events.schedule_search_index_build_BANG_(graph);
} else {
}

frontend.handler.export$.auto_db_backup_BANG_(graph);

frontend.handler.db_based.rtc_flows.trigger_rtc_start(graph);

frontend.extensions.fsrs.update_due_cards_count();

return null;
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("graph","data-changed","graph/data-changed",-569340822),(function (p__46673){
var vec__46674 = p__46673;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46674,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46674,(1),null);
if(cljs.core.truth_(repo)){
return frontend.handler.auto_save.schedule_auto_save_BANG_.cljs$core$IFn$_invoke$arity$1(repo);
} else {
return null;
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("graph","save-db-to-disk","graph/save-db-to-disk",-1288279162),(function (p__46677){
var vec__46678 = p__46677;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46678,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46678,(1),null);
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return frontend.persist_db.export_current_graph_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"succ-notification?","succ-notification?",-1467312225),true], 0));
} else {
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(frontend.handler.auto_save.flush_save_BANG_.cljs$core$IFn$_invoke$arity$1(repo),(function (result){
var G__46681 = result;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__46681)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","backup-successful","export/backup-successful",124382285)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-not-changed","graph-not-changed",1463753852),G__46681)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","no-updates-since-last-export","export/no-updates-since-last-export",755382276)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
} else {
return null;

}
}
})),(function (err){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("AbortError",err.name)){
return null;
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("export","db-backup-error","export/db-backup-error",-1357865057)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
}
}));
} else {
return null;
}
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("graph","db-save-shortcut","graph/db-save-shortcut",907478443),(function (p__46682){
var vec__46683 = p__46682;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46683,(0),null);
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","save-db-to-disk","graph/save-db-to-disk",-1288279162),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697)], null)], null));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("ui","re-render-root","ui/re-render-root",-1358783476),(function (p__46686){
var vec__46687 = p__46686;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46687,(0),null);
return frontend.handler.ui.re_render_root_BANG_.cljs$core$IFn$_invoke$arity$0();
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("run","cli-command","run/cli-command",503686384),(function (p__46690){
var vec__46691 = p__46690;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46691,(0),null);
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46691,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46691,(2),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = command;
if(cljs.core.truth_(and__5140__auto__)){
return (!(clojure.string.blank_QMARK_(content)));
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.shell.run_cli_command_wrapper_BANG_(command,content);
} else {
return null;
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","quick-capture","editor/quick-capture",799865811),(function (p__46694){
var vec__46695 = p__46694;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46695,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46695,(1),null);
return frontend.quick_capture.quick_capture(args);
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","invoke-command","editor/invoke-command",-185441947),(function (p__46698){
var vec__46699 = p__46698;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46699,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46699,(1),null);
var temp__5825__auto__ = cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5825__auto__)){
var map__46702 = temp__5825__auto__;
var map__46702__$1 = cljs.core.__destructure_map(map__46702);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46702__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46702__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var keys_SINGLEQUOTE_ = clojure.string.split.cljs$core$IFn$_invoke$arity$2(action,/\./);
var vec__46703 = keys_SINGLEQUOTE_;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46703,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46703,(1),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46703,(2),null);
var action__$1 = cljs.core.last(keys_SINGLEQUOTE_);
var G__46706 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
var G__46706__$1 = (((G__46706 instanceof cljs.core.Keyword))?G__46706.fqn:null);
switch (G__46706__$1) {
case "plugin":
return logseq.api.plugin.invoke_external_plugin_cmd(id,group,action__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [payload], null));

break;
default:
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.events",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unknown-invoke-command-type","unknown-invoke-command-type",161721324),action__$1,new cljs.core.Keyword(null,"line","line",212345235),332], null)),null);
} else {
return null;
}

}
} else {
return null;
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("modal","keymap","modal/keymap",-57371819),(function (p__46707){
var vec__46708 = p__46707;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46708,(0),null);
return frontend.state.open_settings_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keymap","keymap",-499605268));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","toggle-own-number-list","editor/toggle-own-number-list",835416153),(function (p__46712){
var vec__46713 = p__46712;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46713,(0),null);
var blocks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46713,(1),null);
var batch_QMARK_ = cljs.core.sequential_QMARK_(blocks);
var repo = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((batch_QMARK_)?promesa.core.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46711_SHARP_){
if(((cljs.core.uuid_QMARK_(p1__46711_SHARP_)) || (typeof p1__46711_SHARP_ === 'string'))){
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,p1__46711_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children?","children?",-1199594108),false], null)], 0));
} else {
return p1__46711_SHARP_;
}
}),blocks)):blocks)),(function (blocks__$1){
return promesa.protocols._promise(((((batch_QMARK_) && ((cljs.core.count(blocks__$1) > (1)))))?frontend.handler.editor.toggle_blocks_as_own_order_list_BANG_(blocks__$1):(function (){var temp__5825__auto__ = (function (){var G__46716 = blocks__$1;
if(batch_QMARK_){
return cljs.core.first(G__46716);
} else {
return G__46716;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var block = temp__5825__auto__;
if(frontend.handler.editor.own_order_number_list_QMARK_(block)){
return frontend.handler.editor.remove_block_own_order_list_type_BANG_(block);
} else {
return frontend.handler.editor.make_block_as_own_order_list_BANG_(block);
}
} else {
return null;
}
})()));
}));
}));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","remove-own-number-list","editor/remove-own-number-list",-492965226),(function (p__46717){
var vec__46718 = p__46717;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46718,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46718,(1),null);
if(cljs.core.truth_((function (){var G__46721 = block;
if((G__46721 == null)){
return null;
} else {
return frontend.handler.editor.own_order_number_list_QMARK_(G__46721);
}
})())){
return frontend.handler.editor.remove_block_own_order_list_type_BANG_(block);
} else {
return null;
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","save-current-block","editor/save-current-block",1864275336),(function (_){
return frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","add-comment","editor/add-comment",-1940865903),(function (_){
return frontend.handler.comments.add_comment_to_current_context_BANG_();
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","save-code-editor","editor/save-code-editor",-1356475475),(function (_){
return frontend.handler.code.save_code_editor_BANG_();
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","focus-code-editor","editor/focus-code-editor",-682196012),(function (p__46722){
var vec__46723 = p__46722;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46723,(0),null);
var editing_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46723,(1),null);
var container = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46723,(2),null);
var temp__5825__auto__ = frontend.util.get_cm_instance(container);
if(cljs.core.truth_(temp__5825__auto__)){
var cm = temp__5825__auto__;
if(cljs.core.truth_(cm.hasFocus())){
return null;
} else {
var cursor_pos = (function (){var G__46726 = frontend.state.get_state(new cljs.core.Keyword("editor","cursor-range","editor/cursor-range",1691491127));
if((G__46726 == null)){
return null;
} else {
return cljs.core.count(G__46726);
}
})();
var direction = new cljs.core.Keyword("block.editing","direction","block.editing/direction",-1821464148).cljs$core$IFn$_invoke$arity$1(editing_block);
var pos = new cljs.core.Keyword("block.editing","pos","block.editing/pos",-1255653791).cljs$core$IFn$_invoke$arity$1(editing_block);
var to_line = (function (){var G__46727 = direction;
var G__46727__$1 = (((G__46727 instanceof cljs.core.Keyword))?G__46727.fqn:null);
switch (G__46727__$1) {
case "up":
return cm.lastLine();

break;
default:
var G__46728 = pos;
var G__46728__$1 = (((G__46728 instanceof cljs.core.Keyword))?G__46728.fqn:null);
switch (G__46728__$1) {
case "max":
return cm.lastLine();

break;
default:
return (0);

}

}
})();
var G__46729 = cm;
G__46729.focus();

G__46729.setCursor(to_line,(function (){var or__5142__auto__ = cursor_pos;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})());

return G__46729;
}
} else {
return null;
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","toggle-children-number-list","editor/toggle-children-number-list",-1804483433),(function (p__46730){
var vec__46731 = p__46730;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46731,(0),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46731,(1),null);
if(cljs.core.truth_(block)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_block_immediate_children(frontend.state.get_current_repo(),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block))),(function (blocks){
return promesa.protocols._promise(((cljs.core.seq(blocks))?frontend.handler.editor.toggle_blocks_as_own_order_list_BANG_(blocks):null));
}));
}));
} else {
return null;
}
}));
frontend.handler.events._LT_get_upsert_type_block = (function frontend$handler$events$_LT_get_upsert_type_block(repo,id){
return frontend.db.async._LT_get_block.cljs$core$IFn$_invoke$arity$variadic(repo,id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children?","children?",-1199594108),false], 0));
});
frontend.handler.events._LT_latest_code_lang = (function frontend$handler$events$_LT_latest_code_lang(repo,lang){
if(cljs.core.truth_(lang)){
return promesa.core.resolved(lang);
} else {
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-key-value","thread-api/get-key-value",940412851),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.Keyword("logseq.kv","latest-code-lang","logseq.kv/latest-code-lang",-73570328)], 0));
}
});
frontend.handler.events.refocus_upsert_type_block_BANG_ = (function frontend$handler$events$refocus_upsert_type_block_BANG_(source_block,converted_block,update_current_block_QMARK_){
if(((cljs.core.not(update_current_block_QMARK_)) || ((((frontend.state.get_state(new cljs.core.Keyword("editor","pending-new-block","editor/pending-new-block",893096339)) == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(source_block),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()))))))){
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$2(converted_block,new cljs.core.Keyword(null,"max","max",61366548)) : frontend.handler.editor.edit_block_BANG_.call(null,converted_block,new cljs.core.Keyword(null,"max","max",61366548)));
} else {
return null;
}
});
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","upsert-type-block","editor/upsert-type-block",-1673621559),(function (p__46736){
var vec__46737 = p__46736;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46737,(0),null);
var map__46740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46737,(1),null);
var map__46740__$1 = cljs.core.__destructure_map(map__46740);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46740__$1,new cljs.core.Keyword(null,"block","block",664686210));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46740__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46740__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var update_current_block_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46740__$1,new cljs.core.Keyword(null,"update-current-block?","update-current-block?",-507726186));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(update_current_block_QMARK_)?null:frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0())),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(update_current_block_QMARK_)?null:promesa.core.delay.cljs$core$IFn$_invoke$arity$1((16)))),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.events._LT_get_upsert_type_block(repo,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))),(function (db_block){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.events._LT_latest_code_lang(repo,lang)),(function (latest_code_lang){
return promesa.protocols._promise((function (){var block_type = new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189).cljs$core$IFn$_invoke$arity$1(db_block);
var block_title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(db_block);
var requested_title_QMARK_ = cljs.core.contains_QMARK_(block,new cljs.core.Keyword("block","title","block/title",710445684));
var requested_title = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(block);
var turn_type_BANG_ = (function (p1__46734_SHARP_){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.Keyword(null,"code","code",1586293142));
if(and__5140__auto__){
return latest_code_lang;
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.db_based.property.set_block_properties_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__46734_SHARP_),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.Keyword("logseq.property.code","lang","logseq.property.code/lang",-857897165),latest_code_lang], null));
} else {
return frontend.handler.db_based.property.set_block_property_BANG_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(p1__46734_SHARP_),new cljs.core.Keyword("logseq.property.node","display-type","logseq.property.node/display-type",442446189),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type));
}
});
var apply_requested_title_BANG_ = (function (p1__46735_SHARP_){
if(cljs.core.truth_((function (){var and__5140__auto__ = update_current_block_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return ((requested_title_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(requested_title,new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(p1__46735_SHARP_))));
} else {
return and__5140__auto__;
}
})())){
return frontend.handler.editor.save_block_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.state.get_current_repo(),p1__46735_SHARP_,requested_title);
} else {
return null;
}
});
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise((((((!((block_type == null)))) || (((cljs.core.not(update_current_block_QMARK_)) && ((!(clojure.string.blank_QMARK_(block_title))))))))?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var test_QMARK___35655__auto__ = frontend.util.node_test_QMARK_;
var ops__35656__auto__ = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var editor_info__35657__auto__ = frontend.state.get_editor_info();
cljs.core.reset_BANG_(frontend.state._STAR_editor_info,editor_info__35657__auto__);

if(cljs.core.truth_(ops__35656__auto__)){
var vec__46741 = frontend.handler.editor.insert_new_block_aux_BANG_(cljs.core.PersistentArrayMap.EMPTY,db_block,"");
var _p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46741,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46741,(1),null);
var block_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46741,(2),null);
return turn_type_BANG_(block_SINGLEQUOTE_);
} else {
var _STAR_outliner_ops_STAR__orig_val__46744 = frontend.modules.outliner.op._STAR_outliner_ops_STAR_;
var _STAR_outliner_ops_STAR__temp_val__46745 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__temp_val__46745);

try{var vec__46746_46837 = frontend.handler.editor.insert_new_block_aux_BANG_(cljs.core.PersistentArrayMap.EMPTY,db_block,"");
var _p_46838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46746_46837,(0),null);
var __46839__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46746_46837,(1),null);
var block_SINGLEQUOTE__46840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46746_46837,(2),null);
turn_type_BANG_(block_SINGLEQUOTE__46840);

var r__35658__auto__ = cljs.core.persistent_BANG_(frontend.modules.outliner.op._STAR_outliner_ops_STAR_);
return frontend.db.transact.apply_outliner_ops(null,r__35658__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outliner-op","outliner-op",1716232450),new cljs.core.Keyword(null,"insert-blocks","insert-blocks",-1269782013)], null));
}finally {(frontend.modules.outliner.op._STAR_outliner_ops_STAR_ = _STAR_outliner_ops_STAR__orig_val__46744);
}}
})()),(function (result){
return promesa.protocols._promise((function (){var temp__5825__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(result)));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return frontend.handler.events._LT_get_upsert_type_block(repo,id);
} else {
return null;
}
})());
}));
})):promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(apply_requested_title_BANG_(db_block)),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise(turn_type_BANG_(db_block)),(function (___$4){
return promesa.protocols._promise(frontend.handler.events._LT_get_upsert_type_block(repo,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(db_block)));
}));
}));
})))),(function (converted_block){
return promesa.protocols._promise(setTimeout((function (){
return frontend.handler.events.refocus_upsert_type_block_BANG_(db_block,converted_block,update_current_block_QMARK_);
}),(100)));
}));
}));
})());
}));
}));
}));
}));
}));
}));
}));
frontend.handler.events.editing_users_by_block = (function frontend$handler$events$editing_users_by_block(online_users,current_user_uuid){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__46749){
var map__46750 = p__46749;
var map__46750__$1 = cljs.core.__destructure_map(map__46750);
var user = map__46750__$1;
var editing_block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46750__$1,new cljs.core.Keyword("user","editing-block-uuid","user/editing-block-uuid",-864121935));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46750__$1,new cljs.core.Keyword("user","uuid","user/uuid",2146253734));
if(((typeof editing_block_uuid === 'string') && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(uuid,current_user_uuid)) && ((!(cljs.core.contains_QMARK_(result,editing_block_uuid)))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,editing_block_uuid,user);
} else {
return result;
}
}),cljs.core.PersistentArrayMap.EMPTY,online_users);
});
frontend.handler.events.sync_editing_users_by_block_BANG_ = (function frontend$handler$events$sync_editing_users_by_block_BANG_(online_users){
var current_user_uuid = frontend.handler.user.user_uuid();
var old_users_by_block = (function (){var or__5142__auto__ = frontend.state.get_state(new cljs.core.Keyword("rtc","editing-users-by-block","rtc/editing-users-by-block",-1404947660));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var new_users_by_block = frontend.handler.events.editing_users_by_block(online_users,current_user_uuid);
var affected_block_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(old_users_by_block)),cljs.core.keys(new_users_by_block));
var seq__46751 = cljs.core.seq(affected_block_ids);
var chunk__46754 = null;
var count__46755 = (0);
var i__46756 = (0);
while(true){
if((i__46756 < count__46755)){
var block_id = chunk__46754.cljs$core$IIndexed$_nth$arity$2(null,i__46756);
var old_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_users_by_block,block_id);
var new_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_users_by_block,block_id);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_user,new_user)){
frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("rtc","editing-users-by-block","rtc/editing-users-by-block",-1404947660),new_user,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),block_id], 0));


var G__46841 = seq__46751;
var G__46842 = chunk__46754;
var G__46843 = count__46755;
var G__46844 = (i__46756 + (1));
seq__46751 = G__46841;
chunk__46754 = G__46842;
count__46755 = G__46843;
i__46756 = G__46844;
continue;
} else {
var G__46845 = seq__46751;
var G__46846 = chunk__46754;
var G__46847 = count__46755;
var G__46848 = (i__46756 + (1));
seq__46751 = G__46845;
chunk__46754 = G__46846;
count__46755 = G__46847;
i__46756 = G__46848;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__46751);
if(temp__5825__auto__){
var seq__46751__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46751__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__46751__$1);
var G__46849 = cljs.core.chunk_rest(seq__46751__$1);
var G__46850 = c__5673__auto__;
var G__46851 = cljs.core.count(c__5673__auto__);
var G__46852 = (0);
seq__46751 = G__46849;
chunk__46754 = G__46850;
count__46755 = G__46851;
i__46756 = G__46852;
continue;
} else {
var block_id = cljs.core.first(seq__46751__$1);
var old_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_users_by_block,block_id);
var new_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_users_by_block,block_id);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_user,new_user)){
frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("rtc","editing-users-by-block","rtc/editing-users-by-block",-1404947660),new_user,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),block_id], 0));


var G__46853 = cljs.core.next(seq__46751__$1);
var G__46854 = null;
var G__46855 = (0);
var G__46856 = (0);
seq__46751 = G__46853;
chunk__46754 = G__46854;
count__46755 = G__46855;
i__46756 = G__46856;
continue;
} else {
var G__46857 = cljs.core.next(seq__46751__$1);
var G__46858 = null;
var G__46859 = (0);
var G__46860 = (0);
seq__46751 = G__46857;
chunk__46754 = G__46858;
count__46755 = G__46859;
i__46756 = G__46860;
continue;
}
}
} else {
return null;
}
}
break;
}
});
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("rtc","sync-state","rtc/sync-state",-1325028836),(function (p__46759){
var vec__46760 = p__46759;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46760,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46760,(1),null);
if(cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"online-users","online-users",-747563810))){
frontend.handler.events.sync_editing_users_by_block_BANG_(new cljs.core.Keyword(null,"online-users","online-users",-747563810).cljs$core$IFn$_invoke$arity$1(state));
} else {
}

var seq__46763 = cljs.core.seq(state);
var chunk__46764 = null;
var count__46765 = (0);
var i__46766 = (0);
while(true){
if((i__46766 < count__46765)){
var vec__46773 = chunk__46764.cljs$core$IIndexed$_nth$arity$2(null,i__46766);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46773,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46773,(1),null);
frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("rtc","state","rtc/state",-1988572624),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),k], 0));


var G__46861 = seq__46763;
var G__46862 = chunk__46764;
var G__46863 = count__46765;
var G__46864 = (i__46766 + (1));
seq__46763 = G__46861;
chunk__46764 = G__46862;
count__46765 = G__46863;
i__46766 = G__46864;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__46763);
if(temp__5825__auto__){
var seq__46763__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46763__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__46763__$1);
var G__46865 = cljs.core.chunk_rest(seq__46763__$1);
var G__46866 = c__5673__auto__;
var G__46867 = cljs.core.count(c__5673__auto__);
var G__46868 = (0);
seq__46763 = G__46865;
chunk__46764 = G__46866;
count__46765 = G__46867;
i__46766 = G__46868;
continue;
} else {
var vec__46776 = cljs.core.first(seq__46763__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46776,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46776,(1),null);
frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("rtc","state","rtc/state",-1988572624),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),k], 0));


var G__46869 = cljs.core.next(seq__46763__$1);
var G__46870 = null;
var G__46871 = (0);
var G__46872 = (0);
seq__46763 = G__46869;
chunk__46764 = G__46870;
count__46765 = G__46871;
i__46766 = G__46872;
continue;
}
} else {
return null;
}
}
break;
}
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("rtc","presence-update","rtc/presence-update",-419325405),(function (p__46779){
var vec__46780 = p__46779;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46780,(0),null);
var map__46783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46780,(1),null);
var map__46783__$1 = cljs.core.__destructure_map(map__46783);
var editing_block_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46783__$1,new cljs.core.Keyword(null,"editing-block-uuid","editing-block-uuid",-858399034));
return frontend.handler.db_based.sync._LT_rtc_update_presence_BANG_(editing_block_uuid);
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("rtc","log","rtc/log",-1596481285),(function (p__46784){
var vec__46785 = p__46784;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46785,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46785,(1),null);
return frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","log","rtc/log",-1596481285),data);
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("rtc","remote-graph-gone","rtc/remote-graph-gone",1686698503),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","removed-from-sync","graph/removed-from-sync",-902037903)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false)),(function (___21901__auto__){
return promesa.protocols._promise(frontend.handler.db_based.sync._LT_get_remote_graphs());
}));
}));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("rtc","download-remote-graph","rtc/download-remote-graph",508601916),(function (p__46788){
var vec__46789 = p__46788;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46789,(0),null);
var graph_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46789,(1),null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46789,(2),null);
var graph_schema_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46789,(3),null);
var graph_e2ee_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46789,(4),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"major","major",-27376078).cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.schema.parse_schema_version(logseq.db.frontend.schema.version)),new cljs.core.Keyword(null,"major","major",-27376078).cljs$core$IFn$_invoke$arity$1(logseq.db.frontend.schema.parse_schema_version(graph_schema_version)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",-560961707),logseq.db.frontend.schema.version,new cljs.core.Keyword(null,"remote-graph","remote-graph",-2082736629),graph_schema_version], null))+"\n"+"(= (:major (db-schema/parse-schema-version db-schema/version)) (:major (db-schema/parse-schema-version graph-schema-version)))")));
}

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21911__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.util.mobile_QMARK_())?frontend.components.rtc.download_progress.show_BANG_(graph_name):null)),(function (___21901__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_rtc_download_graph_BANG_.cljs$core$IFn$_invoke$arity$3(graph_name,graph_uuid,graph_e2ee_QMARK_)),(function (___21901__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_get_remote_graphs()),(function (___21901__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","switch","graph/switch",178853840),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.db_version_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rtc-download?","rtc-download?",453352962),true], null)], null))),(function (___21901__auto____$3){
return promesa.protocols._promise((cljs.core.truth_(frontend.util.mobile_QMARK_())?frontend.components.rtc.download_progress.hide_BANG_():null));
}));
}));
}));
}));
})),(function (e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["RTC download graph failed, error:"], 0));

if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.events",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rtc-download-graph-failed","rtc-download-graph-failed",-384598783),e,new cljs.core.Keyword(null,"line","line",212345235),500], null)),null);
} else {
}

if(cljs.core.truth_(frontend.util.mobile_QMARK_())){
frontend.components.rtc.download_progress.hide_BANG_();
} else {
}

if(frontend.handler.events.rtc_error.e2ee_decrypt_failed_QMARK_(e)){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("encryption","wrong-password","encryption/wrong-password",-1583660719)], 0)),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
return null;
}
}));
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("db","sync-changes","db/sync-changes",584814072),(function (p__46792){
var vec__46793 = p__46792;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46793,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46793,(1),null);
frontend.modules.outliner.pipeline.invoke_hooks(data);

return null;
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("db","export-sqlite","db/export-sqlite",703008892),(function (_){
frontend.handler.export$.export_repo_as_sqlite_db_BANG_(frontend.state.get_current_repo());

return null;
}));
frontend.handler.events.register_event_definition_BANG_(new cljs.core.Keyword("editor","run-query-command","editor/run-query-command",1913684864),(function (_){
return frontend.handler.editor.run_query_command_BANG_();
}));
frontend.handler.events.register_rfx_handlers_BANG_ = (function frontend$handler$events$register_rfx_handlers_BANG_(){
var seq__46796 = cljs.core.seq(cljs.core.deref(frontend.handler.events.event_definitions));
var chunk__46797 = null;
var count__46798 = (0);
var i__46799 = (0);
while(true){
if((i__46799 < count__46798)){
var vec__46806 = chunk__46797.cljs$core$IIndexed$_nth$arity$2(null,i__46799);
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46806,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46806,(1),null);
frontend.handler.events.register_rfx_handler_BANG_(event_id,handler);


var G__46873 = seq__46796;
var G__46874 = chunk__46797;
var G__46875 = count__46798;
var G__46876 = (i__46799 + (1));
seq__46796 = G__46873;
chunk__46797 = G__46874;
count__46798 = G__46875;
i__46799 = G__46876;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__46796);
if(temp__5825__auto__){
var seq__46796__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46796__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__46796__$1);
var G__46877 = cljs.core.chunk_rest(seq__46796__$1);
var G__46878 = c__5673__auto__;
var G__46879 = cljs.core.count(c__5673__auto__);
var G__46880 = (0);
seq__46796 = G__46877;
chunk__46797 = G__46878;
count__46798 = G__46879;
i__46799 = G__46880;
continue;
} else {
var vec__46809 = cljs.core.first(seq__46796__$1);
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46809,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46809,(1),null);
frontend.handler.events.register_rfx_handler_BANG_(event_id,handler);


var G__46881 = cljs.core.next(seq__46796__$1);
var G__46882 = null;
var G__46883 = (0);
var G__46884 = (0);
seq__46796 = G__46881;
chunk__46797 = G__46882;
count__46798 = G__46883;
i__46799 = G__46884;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.handler.events.run_BANG_ = (function frontend$handler$events$run_BANG_(){
return frontend.handler.events.register_rfx_handlers_BANG_();
});

//# sourceMappingURL=frontend.handler.events.js.map
