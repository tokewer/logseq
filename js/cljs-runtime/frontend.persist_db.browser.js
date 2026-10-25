goog.provide('frontend.persist_db.browser');
var module$node_modules$comlink$dist$umd$comlink=shadow.js.require("module$node_modules$comlink$dist$umd$comlink", {});
if((typeof frontend !== 'undefined') && (typeof frontend.persist_db !== 'undefined') && (typeof frontend.persist_db.browser !== 'undefined') && (typeof frontend.persist_db.browser._STAR_search_index_progress_hide_timeout !== 'undefined')){
} else {
frontend.persist_db.browser._STAR_search_index_progress_hide_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.persist_db.browser.clear_search_index_progress_hide_timeout_BANG_ = (function frontend$persist_db$browser$clear_search_index_progress_hide_timeout_BANG_(){
var temp__5825__auto__ = cljs.core.deref(frontend.persist_db.browser._STAR_search_index_progress_hide_timeout);
if(cljs.core.truth_(temp__5825__auto__)){
var timeout_id = temp__5825__auto__;
clearTimeout(timeout_id);

return cljs.core.reset_BANG_(frontend.persist_db.browser._STAR_search_index_progress_hide_timeout,null);
} else {
return null;
}
});
frontend.persist_db.browser.hide_search_index_progress_later_BANG_ = (function frontend$persist_db$browser$hide_search_index_progress_later_BANG_(repo,build_id){
frontend.persist_db.browser.clear_search_index_progress_hide_timeout_BANG_();

return cljs.core.reset_BANG_(frontend.persist_db.browser._STAR_search_index_progress_hide_timeout,setTimeout((function (){
var map__66722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("search","index-build","search/index-build",-900651803));
var map__66722__$1 = cljs.core.__destructure_map(map__66722);
var current_repo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66722__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var current_build_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66722__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,current_repo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(build_id,current_build_id)))){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("search","index-build","search/index-build",-900651803),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("search","index-build","search/index-build",-900651803)),new cljs.core.Keyword(null,"visible?","visible?",2129863715),false));
} else {
return null;
}
}),(1500)));
});
frontend.persist_db.browser.maybe_notify_search_index_rebuilt_BANG_ = (function frontend$persist_db$browser$maybe_notify_search_index_rebuilt_BANG_(repo){
if(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","index-build-notify-repos","search/index-build-notify-repos",248727980),repo], null)) === true){
frontend.state.set_state_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","index-build-notify-repos","search/index-build-notify-repos",248727980),repo], null),false);

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("search","indices-rebuilt-success","search/indices-rebuilt-success",2094042388)], 0)),new cljs.core.Keyword(null,"success","success",1890645906));
} else {
return null;
}
});
frontend.common.thread_api._STAR_thread_apis.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.common.thread_api._STAR_thread_apis.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword("thread-api","set-ui-state","thread-api/set-ui-state",-1077821946),(function frontend$persist_db$browser$thread_api__set_ui_state(path,value){
frontend.state.set_state_BANG_(path,value);

return null;
})));
frontend.common.thread_api._STAR_thread_apis.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.common.thread_api._STAR_thread_apis.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword("thread-api","search-index-build-progress","thread-api/search-index-build-progress",-1351606820),(function frontend$persist_db$browser$thread_api__search_index_build_progress(repo,p__66728){
var map__66729 = p__66728;
var map__66729__$1 = cljs.core.__destructure_map(map__66729);
var input_stage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66729__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var build_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66729__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66729__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66729__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var processed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66729__$1,new cljs.core.Keyword(null,"processed","processed",800622264));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66729__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var prev_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("search","index-build","search/index-build",-900651803));
var current_repo = frontend.state.get_current_repo();
var stage = new cljs.core.Keyword(null,"search-index","search-index",1817399128);
var visible_repo_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,current_repo)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(prev_state))));
if(((visible_repo_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vector-index","vector-index",-358333155),input_stage)))){
var G__66732_66831 = status;
var G__66732_66832__$1 = (((G__66732_66831 instanceof cljs.core.Keyword))?G__66732_66831.fqn:null);
switch (G__66732_66832__$1) {
case "idle":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(prev_state))){
} else {
frontend.persist_db.browser.clear_search_index_progress_hide_timeout_BANG_();

frontend.state.set_state_BANG_(new cljs.core.Keyword("search","index-build","search/index-build",-900651803),(function (){var G__66734 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var or__5142__auto__ = prev_state;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"visible?","visible?",2129863715),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"running?","running?",-257884763),false,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"stage","stage",1843544772),stage,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], 0));
if(cljs.core.truth_(build_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66734,new cljs.core.Keyword(null,"build-id","build-id",1642831089),build_id);
} else {
return G__66734;
}
})());
}

break;
case "running":
frontend.persist_db.browser.clear_search_index_progress_hide_timeout_BANG_();

frontend.state.set_state_BANG_(new cljs.core.Keyword("search","index-build","search/index-build",-900651803),(function (){var G__66735 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),true,new cljs.core.Keyword(null,"running?","running?",-257884763),true,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"stage","stage",1843544772),stage,new cljs.core.Keyword(null,"progress","progress",244323547),(function (){var or__5142__auto__ = progress;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"processed","processed",800622264),(function (){var or__5142__auto__ = processed;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"total","total",1916810418),(function (){var or__5142__auto__ = total;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()], null);
if(cljs.core.truth_(build_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66735,new cljs.core.Keyword(null,"build-id","build-id",1642831089),build_id);
} else {
return G__66735;
}
})());

break;
case "completed":
frontend.state.set_state_BANG_(new cljs.core.Keyword("search","index-build","search/index-build",-900651803),(function (){var G__66737 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),true,new cljs.core.Keyword(null,"running?","running?",-257884763),false,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"stage","stage",1843544772),stage,new cljs.core.Keyword(null,"progress","progress",244323547),(function (){var or__5142__auto__ = progress;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"processed","processed",800622264),(function (){var or__5142__auto__ = processed;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"total","total",1916810418),(function (){var or__5142__auto__ = total;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()], null);
if(cljs.core.truth_(build_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66737,new cljs.core.Keyword(null,"build-id","build-id",1642831089),build_id);
} else {
return G__66737;
}
})());

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"search-index","search-index",1817399128),input_stage)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,current_repo)))){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","ready","graph/ready",1121782733),repo], null));
} else {
}

frontend.persist_db.browser.maybe_notify_search_index_rebuilt_BANG_(repo);

frontend.persist_db.browser.hide_search_index_progress_later_BANG_(repo,build_id);

break;
default:

}
} else {
}

return null;
})));
frontend.persist_db.browser.ask_persist_permission_BANG_ = (function frontend$persist_db$browser$ask_persist_permission_BANG_(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(navigator.storage.persist()),(function (persistent_QMARK_){
return promesa.protocols._promise((cljs.core.truth_(persistent_QMARK_)?((goog.debug.LOGGING_ENABLED)?lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db.browser",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"storage-persistent","storage-persistent",-2122255214),"Storage will not be cleared unless from explicit user action",new cljs.core.Keyword(null,"line","line",212345235),118], null)),null):null):((goog.debug.LOGGING_ENABLED)?lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db.browser",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opfs-storage-may-be-cleared","opfs-storage-may-be-cleared",-1035391050),"OPFS storage may be cleared by the browser under storage pressure.",new cljs.core.Keyword(null,"line","line",212345235),119], null)),null):null)));
}));
}));
});
frontend.persist_db.browser.get_route_data = (function frontend$persist_db$browser$get_route_data(route_match){
if(cljs.core.seq(route_match)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"to","to",192099007),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route_match),new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route_match)], null);
} else {
return null;
}
});
frontend.persist_db.browser.sync_ui_state_BANG_ = (function frontend$persist_db$browser$sync_ui_state_BANG_(){
frontend.rfx.listen_BANG_(new cljs.core.Keyword(null,"sync-ui-state","sync-ui-state",-23416176),(function (prev,current){
if(cljs.core.truth_(frontend.state.get_state(new cljs.core.Keyword("history","paused?","history/paused?",-21834005)))){
return null;
} else {
var f = (function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","sidebar-open?","ui/sidebar-open?",-1099744887),new cljs.core.Keyword("ui","sidebar-collapsed-blocks","ui/sidebar-collapsed-blocks",395046921),new cljs.core.Keyword("sidebar","blocks","sidebar/blocks",1063715475)], null)),new cljs.core.Keyword(null,"route-data","route-data",626955263),frontend.persist_db.browser.get_route_data(new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(db)));
});
var old_state = f(prev);
var new_state = f(current);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_state,old_state)){
var repo = frontend.state.get_current_repo();
var ui_state_str = logseq.db.write_transit_str(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_state], null));
return frontend.undo_redo.record_ui_state_BANG_(repo,ui_state_str);
} else {
return null;
}
}
}));

return null;
});
frontend.persist_db.browser.transact_BANG_ = (function frontend$persist_db$browser$transact_BANG_(repo,tx_data,tx_meta){
var context = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dev?","dev?",-613971064),new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),new cljs.core.Keyword(null,"importing?","importing?",-656840367),new cljs.core.Keyword(null,"node-test?","node-test?",-171079151),new cljs.core.Keyword(null,"export-bullet-indentation","export-bullet-indentation",-248047595),new cljs.core.Keyword(null,"web-platform?","web-platform?",-865960427),new cljs.core.Keyword(null,"validate-db-options","validate-db-options",89965176),new cljs.core.Keyword(null,"date-formatter","date-formatter",-223324709),new cljs.core.Keyword(null,"preferred-format","preferred-format",-1784393121)],[frontend.config.dev_QMARK_,frontend.util.mobile_QMARK_(),new cljs.core.Keyword("graph","importing","graph/importing",1647644617).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()),frontend.util.node_test_QMARK_,frontend.state.get_export_bullet_indentation(),frontend.util.web_platform_QMARK_,new cljs.core.Keyword("dev","validate-db-options","dev/validate-db-options",89933411).cljs$core$IFn$_invoke$arity$1(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0()),frontend.state.get_date_formatter(),frontend.state.get_preferred_format()]);
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","transact","thread-api/transact",917721609),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,tx_data,tx_meta,context], 0));
});
frontend.persist_db.browser.set_worker_fs = (function frontend$persist_db$browser$set_worker_fs(worker){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((new MagicPortal(worker))),(function (portal){
return promesa.protocols._mcat(promesa.protocols._promise(portal.get("fs")),(function (fs){
return promesa.protocols._mcat(promesa.protocols._promise(portal.get("pfs")),(function (pfs){
return promesa.protocols._mcat(promesa.protocols._promise(portal.get("workerThread")),(function (worker_thread){
return promesa.protocols._mcat(promesa.protocols._promise((window.fs = fs)),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((window.pfs = pfs)),(function (___27434__auto____$1){
return promesa.protocols._promise((window.workerThread = worker_thread));
}));
}));
}));
}));
}));
}));
}));
});
frontend.persist_db.browser.reload_app_if_old_db_worker_exists = (function frontend$persist_db$browser$reload_app_if_old_db_worker_exists(){
if(cljs.core.truth_(frontend.util.capacitor_QMARK_())){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db.browser",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("frontend.persist-db.browser","reload-app","frontend.persist-db.browser/reload-app",-1961847563),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.deref(frontend.state._STAR_db_worker_client_id)], null),new cljs.core.Keyword(null,"line","line",212345235),172], null)),null);
} else {
}

var temp__5825__auto__ = cljs.core.deref(frontend.state._STAR_db_worker_client_id);
if(cljs.core.truth_(temp__5825__auto__)){
var client_id = temp__5825__auto__;
return navigator.locks.request(client_id,({"mode": "exclusive", "ifAvailable": true}),(function (lock){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db.browser",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("frontend.persist-db.browser","reload-app-lock","frontend.persist-db.browser/reload-app-lock",-936808679),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"acquired?","acquired?",72197132),(!((lock == null)))], null),new cljs.core.Keyword(null,"line","line",212345235),177], null)),null);
} else {
}

if(cljs.core.truth_(lock)){
return null;
} else {
return window.location.reload();
}
}));
} else {
return null;
}
} else {
return null;
}
});
frontend.persist_db.browser.stop_db_worker_BANG_ = (function frontend$persist_db$browser$stop_db_worker_BANG_(){
if(cljs.core.truth_(cljs.core.deref(frontend.state._STAR_db_worker))){
promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","cancel-ui-requests","thread-api/cancel-ui-requests",1573561527),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"stop-db-worker","stop-db-worker",622824279)], null)], 0)),cljs.core.constantly(null));
} else {
}

var temp__5825__auto___66836 = cljs.core.deref(frontend.state._STAR_db_worker_thread);
if(cljs.core.truth_(temp__5825__auto___66836)){
var worker_66837 = temp__5825__auto___66836;
(worker_66837.onmessage = null);

worker_66837.terminate();
} else {
}

(window.fs = null);

(window.pfs = null);

(window.workerThread = null);

cljs.core.reset_BANG_(frontend.state._STAR_db_worker_thread,null);

return cljs.core.reset_BANG_(frontend.state._STAR_db_worker,null);
});
frontend.persist_db.browser.start_db_worker_BANG_ = (function frontend$persist_db$browser$start_db_worker_BANG_(){
if(frontend.util.node_test_QMARK_){
return null;
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db.browser.reload_app_if_old_db_worker_exists()),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db.browser.stop_db_worker_BANG_()),(function (___27434__auto____$1){
return promesa.protocols._promise((function (){var worker_url = ((frontend.config.publishing_QMARK_)?"static/js/db-worker.js":"js/db-worker.js");
var worker = (new Worker((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(worker_url)+"?electron="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.electron_QMARK_())+"&capacitor="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.util.capacitor_QMARK_())+"&publishing="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.publishing_QMARK_))));
var _ = frontend.persist_db.browser.set_worker_fs(worker);
var wrapped_worker_STAR_ = module$node_modules$comlink$dist$umd$comlink.wrap(worker);
var wrapped_worker = (function() { 
var G__66838__delegate = function (qkw,args){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("thread-api","import-db-binary","thread-api/import-db-binary",1835975426),null,new cljs.core.Keyword("thread-api","export-client-ops-db-binary","thread-api/export-client-ops-db-binary",-2127974770),null,new cljs.core.Keyword("thread-api","export-db-binary","thread-api/export-db-binary",1743488500),null], null), null),qkw)){
var method = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qkw))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(qkw)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("thread-api","import-db-binary","thread-api/import-db-binary",1835975426),qkw)){
return wrapped_worker_STAR_.remoteInvokeBinary(method,cljs.core.first(args),cljs.core.second(args));
} else {
return wrapped_worker_STAR_.remoteInvokeBinary(method,cljs.core.first(args));
}
} else {
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(wrapped_worker_STAR_.remoteInvoke((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qkw))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(qkw))),logseq.db.write_transit_str(args))),(function (result){
return promesa.protocols._promise(logseq.db.read_transit_str(result));
}));
})),(function (error){
console.error("DB worker API failed:",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(qkw)),error);

throw error;
}));

}
};
var G__66838 = function (qkw,var_args){
var args = null;
if (arguments.length > 1) {
var G__66839__i = 0, G__66839__a = new Array(arguments.length -  1);
while (G__66839__i < G__66839__a.length) {G__66839__a[G__66839__i] = arguments[G__66839__i + 1]; ++G__66839__i;}
  args = new cljs.core.IndexedSeq(G__66839__a,0,null);
} 
return G__66838__delegate.call(this,qkw,args);};
G__66838.cljs$lang$maxFixedArity = 1;
G__66838.cljs$lang$applyTo = (function (arglist__66840){
var qkw = cljs.core.first(arglist__66840);
var args = cljs.core.rest(arglist__66840);
return G__66838__delegate(qkw,args);
});
G__66838.cljs$core$IFn$_invoke$arity$variadic = G__66838__delegate;
return G__66838;
})()
;
var t1 = (frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null));
cljs.core.reset_BANG_(frontend.state._STAR_db_worker_thread,worker);

module$node_modules$comlink$dist$umd$comlink.expose(({"remoteInvoke": frontend.common.thread_api.remote_function}),worker);

frontend.handler.worker.handle_message_BANG_(worker,wrapped_worker);

cljs.core.reset_BANG_(frontend.state._STAR_db_worker,wrapped_worker);

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker(new cljs.core.Keyword("thread-api","init","thread-api/init",-589216819))),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","set-db-sync-config","thread-api/set-db-sync-config",-619924056),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"ws-url","ws-url",-1466481235),frontend.config.db_sync_ws_url(),new cljs.core.Keyword(null,"http-base","http-base",2042022955),frontend.config.db_sync_http_base()], null)], 0))),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","sync-app-state","rtc/sync-app-state",-1693789406)], null))),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise(((goog.debug.LOGGING_ENABLED)?lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db.browser",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, ["init worker spent",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0 ? frontend.util.time_ms.cljs$core$IFn$_invoke$arity$0() : frontend.util.time_ms.call(null)) - t1))+"ms"),new cljs.core.Keyword(null,"line","line",212345235),239], null)),null):null)),(function (___$4){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db.browser.sync_ui_state_BANG_()),(function (___$5){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db.browser.ask_persist_permission_BANG_()),(function (___$6){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","sync-context","graph/sync-context",1484639785)], null))),(function (___$7){
return promesa.protocols._promise(logseq.db.register_transact_fn_BANG_((function frontend$persist_db$browser$start_db_worker_BANG__$_worker_transact_BANG_(repo,tx_data,tx_meta){
return frontend.db.transact.transact(frontend.persist_db.browser.transact_BANG_,((typeof repo === 'string')?repo:frontend.state.get_current_repo()),tx_data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_meta,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0())));
})));
}));
}));
}));
}));
}));
}));
}));
})),(function (error){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db.browser",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-sqlite-wasm-error","init-sqlite-wasm-error",1296811534),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Can't init SQLite wasm",error], null),new cljs.core.Keyword(null,"line","line",212345235),251], null)),null);
} else {
return null;
}
}));
})());
}));
}));
}));
}
});
frontend.persist_db.browser._LT_export_db_BANG_ = (function frontend$persist_db$browser$_LT_export_db_BANG_(repo){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"db-export","db-export",-1136086824),repo,false], 0));
} else {
return null;
}
});
frontend.persist_db.browser.sqlite_error_handler = (function frontend$persist_db$browser$sqlite_error_handler(error){
frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capture-error","capture-error",583122432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sqlite-error","sqlite-error",-41764386)], null)], null)], null));

if(cljs.core.truth_(frontend.util.mobile_QMARK_())){
return window.location.reload();
} else {
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db.browser",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sqlite-error","sqlite-error",-41764386),error,new cljs.core.Keyword(null,"line","line",212345235),266], null)),null);
} else {
}

return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("storage","sqlitedb-error","storage/sqlitedb-error",29799264),error], 0)),new cljs.core.Keyword(null,"error","error",-978969032));
}
});
frontend.persist_db.browser._LT_sync_markdown_mirror_setting_BANG_ = (function frontend$persist_db$browser$_LT_sync_markdown_mirror_setting_BANG_(repo){
if(cljs.core.truth_((function (){var and__5140__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5140__auto__)){
return repo;
} else {
return and__5140__auto__;
}
})())){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","markdown-mirror-set-enabled","thread-api/markdown-mirror-set-enabled",-181757882),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.Keyword("feature","markdown-mirror?","feature/markdown-mirror?",1870052778).cljs$core$IFn$_invoke$arity$1(frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$1(repo)) === true], 0));
} else {
return promesa.core.resolved(null);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {frontend.persist_db.protocol.PersistentDB}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.persist_db.browser.InBrowser = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.persist_db.browser.InBrowser.prototype.frontend$persist_db$protocol$PersistentDB$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.persist_db.browser.InBrowser.prototype.frontend$persist_db$protocol$PersistentDB$_LT_new$arity$3 = (function (_this,repo,opts){
var self__ = this;
var _this__$1 = this;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","create-or-open-db","thread-api/create-or-open-db",1100871183),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,opts], 0))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db.browser._LT_sync_markdown_mirror_setting_BANG_(repo)),(function (_){
return promesa.protocols._promise(result);
}));
}));
}));
}));

(frontend.persist_db.browser.InBrowser.prototype.frontend$persist_db$protocol$PersistentDB$_LT_list_db$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.state._LT_invoke_db_worker(new cljs.core.Keyword("thread-api","list-db","thread-api/list-db",-1703253943)),frontend.persist_db.browser.sqlite_error_handler);
}));

(frontend.persist_db.browser.InBrowser.prototype.frontend$persist_db$protocol$PersistentDB$_LT_unsafe_delete$arity$2 = (function (_this,repo){
var self__ = this;
var _this__$1 = this;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","unsafe-unlink-db","thread-api/unsafe-unlink-db",1765912451),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0));
}));

(frontend.persist_db.browser.InBrowser.prototype.frontend$persist_db$protocol$PersistentDB$_LT_release_access_handles$arity$2 = (function (_this,repo){
var self__ = this;
var _this__$1 = this;
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","release-access-handles","thread-api/release-access-handles",892503250),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0));
}));

(frontend.persist_db.browser.InBrowser.prototype.frontend$persist_db$protocol$PersistentDB$_LT_open_and_fetch_schema$arity$3 = (function (_this,repo,opts){
var self__ = this;
var _this__$1 = this;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","create-or-open-db","thread-api/create-or-open-db",1100871183),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,opts], 0))),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db.browser._LT_sync_markdown_mirror_setting_BANG_(repo)),(function (_){
return promesa.protocols._promise(result);
}));
}));
})),frontend.persist_db.browser.sqlite_error_handler);
}));

(frontend.persist_db.browser.InBrowser.prototype.frontend$persist_db$protocol$PersistentDB$_LT_export_db$arity$3 = (function (_this,repo,opts){
var self__ = this;
var _this__$1 = this;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.persist_db.browser._LT_export_db_BANG_(repo):promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","export-db-binary","thread-api/export-db-binary",1743488500),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0))),(function (data){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"return-data?","return-data?",-956653504).cljs$core$IFn$_invoke$arity$1(opts))?data:null));
}));
}))),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db.browser",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"export-db-error","export-db-error",251026765),repo,error,"SQLiteDB save error",new cljs.core.Keyword(null,"line","line",212345235),307])),null);
} else {
}

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("storage","sqlitedb-save-error","storage/sqlitedb-save-error",1016876922),error], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

return cljs.core.PersistentArrayMap.EMPTY;
}));
}));

(frontend.persist_db.browser.InBrowser.prototype.frontend$persist_db$protocol$PersistentDB$_LT_import_db$arity$3 = (function (_this,repo,data){
var self__ = this;
var _this__$1 = this;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","import-db-binary","thread-api/import-db-binary",1835975426),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,data], 0)),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db.browser",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"import-db-error","import-db-error",-1453566776),repo,error,"SQLiteDB import error",new cljs.core.Keyword(null,"line","line",212345235),314])),null);
} else {
}

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("storage","sqlitedb-import-error","storage/sqlitedb-import-error",-1012630538),error], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

return cljs.core.PersistentArrayMap.EMPTY;
}));
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k66797,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__66814 = k66797;
switch (G__66814) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66797,else__5451__auto__);

}
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__66815){
var vec__66816 = p__66815;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66816,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66816,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#frontend.persist-db.browser.InBrowser{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66796){
var self__ = this;
var G__66796__$1 = this;
return (new cljs.core.RecordIter((0),G__66796__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new frontend.persist_db.browser.InBrowser(self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1039463082 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66798,other66799){
var self__ = this;
var this66798__$1 = this;
return (((!((other66799 == null)))) && ((((this66798__$1.constructor === other66799.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66798__$1.__extmap,other66799.__extmap)))));
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new frontend.persist_db.browser.InBrowser(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k66797){
var self__ = this;
var this__5455__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k66797);
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__66796){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__66823 = cljs.core.keyword_identical_QMARK_;
var expr__66824 = k__5457__auto__;
return (new frontend.persist_db.browser.InBrowser(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__66796),null));
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__66796){
var self__ = this;
var this__5447__auto____$1 = this;
return (new frontend.persist_db.browser.InBrowser(G__66796,self__.__extmap,self__.__hash));
}));

(frontend.persist_db.browser.InBrowser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(frontend.persist_db.browser.InBrowser.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.persist_db.browser.InBrowser.cljs$lang$type = true);

(frontend.persist_db.browser.InBrowser.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"frontend.persist-db.browser/InBrowser",null,(1),null));
}));

(frontend.persist_db.browser.InBrowser.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"frontend.persist-db.browser/InBrowser");
}));

/**
 * Positional factory function for frontend.persist-db.browser/InBrowser.
 */
frontend.persist_db.browser.__GT_InBrowser = (function frontend$persist_db$browser$__GT_InBrowser(){
return (new frontend.persist_db.browser.InBrowser(null,null,null));
});

/**
 * Factory function for frontend.persist-db.browser/InBrowser, taking a map of keywords to field values.
 */
frontend.persist_db.browser.map__GT_InBrowser = (function frontend$persist_db$browser$map__GT_InBrowser(G__66802){
var extmap__5490__auto__ = (function (){var G__66830 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__66802);
if(cljs.core.record_QMARK_(G__66802)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66830);
} else {
return G__66830;
}
})();
return (new frontend.persist_db.browser.InBrowser(null,cljs.core.not_empty(extmap__5490__auto__),null));
});


//# sourceMappingURL=frontend.persist_db.browser.js.map
