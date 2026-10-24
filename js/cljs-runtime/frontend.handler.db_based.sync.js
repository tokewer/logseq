goog.provide('frontend.handler.db_based.sync');
frontend.handler.db_based.sync.ws__GT_http_base = (function frontend$handler$db_based$sync$ws__GT_http_base(ws_url){
if(typeof ws_url === 'string'){
var base = ((clojure.string.starts_with_QMARK_(ws_url,"wss://"))?(""+"https://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ws_url,(("wss://").length)))):((clojure.string.starts_with_QMARK_(ws_url,"ws://"))?(""+"http://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ws_url,(("ws://").length)))):ws_url
));
var base__$1 = clojure.string.replace(base,/\/sync\/%s$/,"");
return base__$1;
} else {
return null;
}
});
frontend.handler.db_based.sync.http_base = (function frontend$handler$db_based$sync$http_base(){
var or__5142__auto__ = frontend.config.db_sync_http_base();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.handler.db_based.sync.ws__GT_http_base(frontend.config.db_sync_ws_url());
}
});
frontend.handler.db_based.sync.auth_headers = (function frontend$handler$db_based$sync$auth_headers(){
var temp__5825__auto__ = frontend.state.get_auth_id_token();
if(cljs.core.truth_(temp__5825__auto__)){
var token = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 1, ["authorization",(""+"Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token))], null);
} else {
return null;
}
});
frontend.handler.db_based.sync.with_auth_headers = (function frontend$handler$db_based$sync$with_auth_headers(opts){
var temp__5823__auto__ = frontend.handler.db_based.sync.auth_headers();
if(cljs.core.truth_(temp__5823__auto__)){
var auth = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),auth], 0)));
} else {
return opts;
}
});
frontend.handler.db_based.sync.fetch_json = (function frontend$handler$db_based$sync$fetch_json(url,opts,p__79472){
var map__79473 = p__79472;
var map__79473__$1 = cljs.core.__destructure_map(map__79473);
var response_schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79473__$1,new cljs.core.Keyword(null,"response-schema","response-schema",-1275515525));
var error_schema = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__79473__$1,new cljs.core.Keyword(null,"error-schema","error-schema",1518568094),new cljs.core.Keyword(null,"error","error",-978969032));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(fetch(url,cljs.core.clj__GT_js(frontend.handler.db_based.sync.with_auth_headers(opts)))),(function (resp){
return promesa.protocols._mcat(promesa.protocols._promise(resp.text()),(function (text){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core.seq(text))?JSON.parse(text):null)),(function (data){
return promesa.protocols._promise((cljs.core.truth_(resp.ok)?(function (){var body = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var body__$1 = (cljs.core.truth_(response_schema)?(frontend.handler.db_based.sync.coerce_http_response.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.db_based.sync.coerce_http_response.cljs$core$IFn$_invoke$arity$2(response_schema,body) : frontend.handler.db_based.sync.coerce_http_response.call(null,response_schema,body)):body);
if(cljs.core.truth_((function (){var or__5142__auto__ = (response_schema == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return body__$1;
}
})())){
return body__$1;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("db-sync invalid response",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),resp.status,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null));
}
})():(function (){var body = (cljs.core.truth_(data)?cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)):null);
var body__$1 = (cljs.core.truth_(error_schema)?(frontend.handler.db_based.sync.coerce_http_response.cljs$core$IFn$_invoke$arity$2 ? frontend.handler.db_based.sync.coerce_http_response.cljs$core$IFn$_invoke$arity$2(error_schema,body) : frontend.handler.db_based.sync.coerce_http_response.call(null,error_schema,body)):body);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("db-sync request failed",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),resp.status,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null));
})()));
}));
}));
}));
}));
});
frontend.handler.db_based.sync.invalid_coerce = new cljs.core.Keyword("frontend.handler.db-based.sync","invalid-coerce","frontend.handler.db-based.sync/invalid-coerce",-1664191382);
frontend.handler.db_based.sync.coerce = (function frontend$handler$db_based$sync$coerce(coercer,value,context){
try{return (coercer.cljs$core$IFn$_invoke$arity$1 ? coercer.cljs$core$IFn$_invoke$arity$1(value) : coercer.call(null,value));
}catch (e79474){var e = e79474;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.db-based.sync",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","malli-coerce-failed","db-sync/malli-coerce-failed",-2140286978),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword(null,"value","value",305978217),value], null)], 0)),new cljs.core.Keyword(null,"line","line",212345235),79], null)),null);
} else {
}

return frontend.handler.db_based.sync.invalid_coerce;
}});
frontend.handler.db_based.sync.coerce_http_request = (function frontend$handler$db_based$sync$coerce_http_request(schema_key,body){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(logseq.db_sync.malli_schema.http_request_coercers,schema_key);
if(cljs.core.truth_(temp__5823__auto__)){
var coercer = temp__5823__auto__;
var coerced = frontend.handler.db_based.sync.coerce(coercer,body,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema_key,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"request","request",1772954723)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coerced,frontend.handler.db_based.sync.invalid_coerce)){
return null;
} else {
return coerced;
}
} else {
return body;
}
});
frontend.handler.db_based.sync.coerce_http_response = (function frontend$handler$db_based$sync$coerce_http_response(schema_key,body){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(logseq.db_sync.malli_schema.http_response_coercers,schema_key);
if(cljs.core.truth_(temp__5823__auto__)){
var coercer = temp__5823__auto__;
var coerced = frontend.handler.db_based.sync.coerce(coercer,body,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema_key,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"response","response",-1068424192)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coerced,frontend.handler.db_based.sync.invalid_coerce)){
return null;
} else {
return coerced;
}
} else {
return body;
}
});
frontend.handler.db_based.sync.remote_graph = (function frontend$handler$db_based$sync$remote_graph(repo){
return cljs.core.some((function (p1__79475_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__79475_SHARP_))){
return p1__79475_SHARP_;
} else {
return null;
}
}),frontend.state.get_rtc_graphs());
});
frontend.handler.db_based.sync._LT_get_rtc_graph_uuid = (function frontend$handler$db_based$sync$_LT_get_rtc_graph_uuid(repo){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-rtc-graph-uuid","thread-api/get-rtc-graph-uuid",-249168913),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0))),(function (graph_uuid){
return promesa.protocols._promise((function (){var G__79476 = graph_uuid;
if((G__79476 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79476));
}
})());
}));
}));
});
frontend.handler.db_based.sync._LT_get_rtc_graph_e2ee_QMARK_ = (function frontend$handler$db_based$sync$_LT_get_rtc_graph_e2ee_QMARK_(repo){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-key-value","thread-api/get-key-value",940412851),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.Keyword("logseq.kv","graph-rtc-e2ee?","logseq.kv/graph-rtc-e2ee?",1988827753)], 0));
});
frontend.handler.db_based.sync._LT_ensure_invite_auth_BANG_ = (function frontend$handler$db_based$sync$_LT_ensure_invite_auth_BANG_(){
return frontend.handler.user._LT_ensure_id_AMPERSAND_access_token_BANG_();
});
frontend.handler.db_based.sync._LT_grant_graph_access_for_invite_BANG_ = (function frontend$handler$db_based$sync$_LT_grant_graph_access_for_invite_BANG_(repo,graph_uuid,email){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(repo)?frontend.handler.db_based.sync._LT_get_rtc_graph_e2ee_QMARK_(repo):null)),(function (e2ee_QMARK_){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = repo;
if(cljs.core.truth_(and__5140__auto__)){
return e2ee_QMARK_;
} else {
return and__5140__auto__;
}
})())?frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","db-sync-grant-graph-access","thread-api/db-sync-grant-graph-access",16681757),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,graph_uuid,email], 0)):null));
}));
}));
});
frontend.handler.db_based.sync.should_start_rtc_QMARK_ = (function frontend$handler$db_based$sync$should_start_rtc_QMARK_(repo){
var and__5140__auto__ = (!(new cljs.core.Keyword("rtc","uploading?","rtc/uploading?",316154315).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0()) === true));
if(and__5140__auto__){
var graph = frontend.handler.db_based.sync.remote_graph(repo);
return (((!((graph == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword(null,"graph-ready-for-use?","graph-ready-for-use?",-1081605254).cljs$core$IFn$_invoke$arity$1(graph))));
} else {
return and__5140__auto__;
}
});
frontend.handler.db_based.sync.normalize_graph_e2ee_QMARK_ = (function frontend$handler$db_based$sync$normalize_graph_e2ee_QMARK_(graph_e2ee_QMARK_){
if((graph_e2ee_QMARK_ == null)){
return true;
} else {
return graph_e2ee_QMARK_ === true;
}
});
frontend.handler.db_based.sync.active_graph_operation = (function frontend$handler$db_based$sync$active_graph_operation(){
var map__79477 = frontend.state.get_state.cljs$core$IFn$_invoke$arity$0();
var map__79477__$1 = cljs.core.__destructure_map(map__79477);
var downloading_graph_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79477__$1,new cljs.core.Keyword("rtc","downloading-graph-uuid","rtc/downloading-graph-uuid",460109193));
var uploading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79477__$1,new cljs.core.Keyword("rtc","uploading?","rtc/uploading?",316154315));
if(cljs.core.truth_(downloading_graph_uuid)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-operation","active-operation",46329814),new cljs.core.Keyword(null,"download","download",-300081668),new cljs.core.Keyword(null,"active-graph-uuid","active-graph-uuid",-1394990710),downloading_graph_uuid], null);
} else {
if(uploading_QMARK_ === true){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-operation","active-operation",46329814),new cljs.core.Keyword(null,"upload","upload",-255769218)], null);
} else {
return null;
}
}
});
frontend.handler.db_based.sync.reject_graph_operation_in_progress = (function frontend$handler$db_based$sync$reject_graph_operation_in_progress(requested_operation,active_operation){
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("graph operation already in progress",cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(active_operation,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("db-sync","graph-operation-in-progress","db-sync/graph-operation-in-progress",802427531),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"requested-operation","requested-operation",1704556291),requested_operation], 0))));
});
frontend.handler.db_based.sync._LT_ensure_download_runtime_bound_BANG_ = (function frontend$handler$db_based$sync$_LT_ensure_download_runtime_bound_BANG_(repo){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_open_and_fetch_schema.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sync-download-graph?","sync-download-graph?",276560941),true], null))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.handler.db_based.sync._LT_sync_auth_state_to_db_worker_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.db_based.sync._LT_sync_auth_state_to_db_worker_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.db_based.sync._LT_sync_auth_state_to_db_worker_BANG_.call(null))),(function (___$1){
return promesa.protocols._promise(null);
}));
}));
}));
} else {
return promesa.core.resolved(null);
}
});
frontend.handler.db_based.sync._LT_ensure_user_rsa_keys_on_server_BANG_ = (function frontend$handler$db_based$sync$_LT_ensure_user_rsa_keys_on_server_BANG_(p__79478){
var map__79479 = p__79478;
var map__79479__$1 = cljs.core.__destructure_map(map__79479);
var server_rsa_keys_exists_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79479__$1,new cljs.core.Keyword(null,"server-rsa-keys-exists?","server-rsa-keys-exists?",2085850669));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,server_rsa_keys_exists_QMARK_)){
return promesa.core.resolved(null);
} else {
if(cljs.core.truth_(cljs.core.deref(frontend.state._STAR_db_worker))){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((frontend.handler.db_based.sync._LT_sync_auth_state_to_db_worker_BANG_.cljs$core$IFn$_invoke$arity$0 ? frontend.handler.db_based.sync._LT_sync_auth_state_to_db_worker_BANG_.cljs$core$IFn$_invoke$arity$0() : frontend.handler.db_based.sync._LT_sync_auth_state_to_db_worker_BANG_.call(null))),(function (_){
return promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","db-sync-ensure-user-rsa-keys","thread-api/db-sync-ensure-user-rsa-keys",973720503),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ensure-server?","ensure-server?",1052045522),true,new cljs.core.Keyword(null,"server-rsa-keys-exists?","server-rsa-keys-exists?",2085850669),false], null)], 0)));
}));
})),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.db-based.sync",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","ensure-user-rsa-keys-failed","db-sync/ensure-user-rsa-keys-failed",-1415114600),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"server-rsa-keys-missing","server-rsa-keys-missing",-1905915455)], null),new cljs.core.Keyword(null,"line","line",212345235),169], null)),null);
} else {
}

return null;
}));
} else {
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.db-based.sync",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","ensure-user-rsa-keys-skipped","db-sync/ensure-user-rsa-keys-skipped",105776020),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"db-worker-not-ready","db-worker-not-ready",1184245201),new cljs.core.Keyword(null,"server-rsa-keys-exists?","server-rsa-keys-exists?",2085850669),server_rsa_keys_exists_QMARK_], null),new cljs.core.Keyword(null,"line","line",212345235),174], null)),null);
} else {
}

return promesa.core.resolved(null);
}
}
});
frontend.handler.db_based.sync._LT_wait_for_db_worker_ready_BANG_ = (function frontend$handler$db_based$sync$_LT_wait_for_db_worker_ready_BANG_(){
if(cljs.core.truth_(cljs.core.deref(frontend.state._STAR_db_worker))){
return promesa.core.resolved(true);
} else {
var ready = promesa.core.deferred();
var watch_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("frontend.handler.db-based.sync",(""+"wait-db-worker-ready-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())));
cljs.core.add_watch(frontend.state._STAR_db_worker,watch_key,(function (_,___$1,___$2,worker){
if(cljs.core.truth_(worker)){
cljs.core.remove_watch(frontend.state._STAR_db_worker,watch_key);

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(ready,true);
} else {
return null;
}
}));

if(cljs.core.truth_(cljs.core.deref(frontend.state._STAR_db_worker))){
cljs.core.remove_watch(frontend.state._STAR_db_worker,watch_key);

promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(ready,true);
} else {
}

return ready;
}
});
frontend.handler.db_based.sync._LT_rtc_stop_BANG_ = (function frontend$handler$db_based$sync$_LT_rtc_stop_BANG_(){
if(cljs.core.truth_(cljs.core.deref(frontend.state._STAR_db_worker))){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.db-based.sync",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","stop","db-sync/stop",-1120995172),true,new cljs.core.Keyword(null,"line","line",212345235),201], null)),null);
} else {
}

return frontend.state._LT_invoke_db_worker(new cljs.core.Keyword("thread-api","db-sync-stop","thread-api/db-sync-stop",-2124977097));
} else {
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.db-based.sync",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","stop-skipped","db-sync/stop-skipped",-293852652),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"db-worker-not-ready","db-worker-not-ready",1184245201)], null),new cljs.core.Keyword(null,"line","line",212345235),204], null)),null);
} else {
}

return promesa.core.resolved(null);
}
});
frontend.handler.db_based.sync.sync_app_state_payload = (function frontend$handler$db_based$sync$sync_app_state_payload(){
var payload = cljs.core.select_keys(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("git","current-repo","git/current-repo",107438825),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946),new cljs.core.Keyword("auth","access-token","auth/access-token",-657486615),new cljs.core.Keyword("auth","refresh-token","auth/refresh-token",-1024820760),new cljs.core.Keyword("auth","oauth-token-url","auth/oauth-token-url",-75786009),new cljs.core.Keyword("auth","oauth-domain","auth/oauth-domain",-1446567608),new cljs.core.Keyword("auth","oauth-client-id","auth/oauth-client-id",174297597),new cljs.core.Keyword("user","info","user/info",-345834271)], null));
var G__79480 = (((new cljs.core.Keyword("git","current-repo","git/current-repo",107438825).cljs$core$IFn$_invoke$arity$1(payload) == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(payload,new cljs.core.Keyword("git","current-repo","git/current-repo",107438825)):payload);
var G__79480__$1 = ((cljs.core.seq(frontend.config.OAUTH_DOMAIN))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79480,new cljs.core.Keyword("auth","oauth-domain","auth/oauth-domain",-1446567608),frontend.config.OAUTH_DOMAIN):G__79480);
if(cljs.core.seq(frontend.config.COGNITO_CLIENT_ID)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79480__$1,new cljs.core.Keyword("auth","oauth-client-id","auth/oauth-client-id",174297597),frontend.config.COGNITO_CLIENT_ID);
} else {
return G__79480__$1;
}
});
frontend.handler.db_based.sync._LT_sync_auth_state_to_db_worker_BANG_ = (function frontend$handler$db_based$sync$_LT_sync_auth_state_to_db_worker_BANG_(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.user._LT_ensure_id_AMPERSAND_access_token_BANG_()),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync.sync_app_state_payload()),(function (payload){
return promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","sync-app-state","thread-api/sync-app-state",1507174044),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([payload], 0)));
}));
}));
}));
});
frontend.handler.db_based.sync._LT_rtc_start_BANG_ = (function frontend$handler$db_based$sync$_LT_rtc_start_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___79509 = arguments.length;
var i__5877__auto___79510 = (0);
while(true){
if((i__5877__auto___79510 < len__5876__auto___79509)){
args__5882__auto__.push((arguments[i__5877__auto___79510]));

var G__79511 = (i__5877__auto___79510 + (1));
i__5877__auto___79510 = G__79511;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.handler.db_based.sync._LT_rtc_start_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.handler.db_based.sync._LT_rtc_start_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (repo,p__79483){
var map__79484 = p__79483;
var map__79484__$1 = cljs.core.__destructure_map(map__79484);
var _opts = map__79484__$1;
var _stop_before_start_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79484__$1,new cljs.core.Keyword(null,"_stop-before-start?","_stop-before-start?",-989386072));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_wait_for_db_worker_ready_BANG_()),(function (_){
return promesa.protocols._promise(((frontend.handler.db_based.sync.should_start_rtc_QMARK_(repo))?(function (){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.db-based.sync",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","start","db-sync/start",-1649787003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null),new cljs.core.Keyword(null,"line","line",212345235),233], null)),null);
} else {
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_sync_auth_state_to_db_worker_BANG_()),(function (___$1){
return promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","db-sync-start","thread-api/db-sync-start",169610925),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0)));
}));
}));
})()
:(function (){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.db-based.sync",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","skip-start","db-sync/skip-start",1570116988),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"graph-not-in-remote-list","graph-not-in-remote-list",1055009439),new cljs.core.Keyword(null,"remote-graphs-loading?","remote-graphs-loading?",130941441),new cljs.core.Keyword("rtc","loading-graphs?","rtc/loading-graphs?",493247976).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0())], null),new cljs.core.Keyword(null,"line","line",212345235),237], null)),null);
} else {
}

return frontend.handler.db_based.sync._LT_rtc_stop_BANG_();
})()
));
}));
}));
}));

(frontend.handler.db_based.sync._LT_rtc_start_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.handler.db_based.sync._LT_rtc_start_BANG_.cljs$lang$applyTo = (function (seq79481){
var G__79482 = cljs.core.first(seq79481);
var seq79481__$1 = cljs.core.next(seq79481);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79482,seq79481__$1);
}));

if((typeof frontend !== 'undefined') && (typeof frontend.handler !== 'undefined') && (typeof frontend.handler.db_based !== 'undefined') && (typeof frontend.handler.db_based.sync !== 'undefined') && (typeof frontend.handler.db_based.sync.debounced_update_presence !== 'undefined')){
} else {
frontend.handler.db_based.sync.debounced_update_presence = (function (){var G__79485 = (function (editing_block_uuid){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","db-sync-update-presence","thread-api/db-sync-update-presence",1640960620),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([editing_block_uuid], 0));
});
var G__79486 = (1000);
return (frontend.util.debounce.cljs$core$IFn$_invoke$arity$2 ? frontend.util.debounce.cljs$core$IFn$_invoke$arity$2(G__79485,G__79486) : frontend.util.debounce.call(null,G__79485,G__79486));
})();
}
frontend.handler.db_based.sync._LT_rtc_update_presence_BANG_ = (function frontend$handler$db_based$sync$_LT_rtc_update_presence_BANG_(editing_block_uuid){
return (frontend.handler.db_based.sync.debounced_update_presence.cljs$core$IFn$_invoke$arity$1 ? frontend.handler.db_based.sync.debounced_update_presence.cljs$core$IFn$_invoke$arity$1(editing_block_uuid) : frontend.handler.db_based.sync.debounced_update_presence.call(null,editing_block_uuid));
});
frontend.handler.db_based.sync._LT_rtc_get_users_info = (function frontend$handler$db_based$sync$_LT_rtc_get_users_info(var_args){
var G__79488 = arguments.length;
switch (G__79488) {
case 0:
return frontend.handler.db_based.sync._LT_rtc_get_users_info.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.handler.db_based.sync._LT_rtc_get_users_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.db_based.sync._LT_rtc_get_users_info.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.handler.db_based.sync._LT_rtc_get_users_info.cljs$core$IFn$_invoke$arity$1(false);
}));

(frontend.handler.db_based.sync._LT_rtc_get_users_info.cljs$core$IFn$_invoke$arity$1 = (function (force_QMARK_){
var repo = frontend.state.get_current_repo();
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_get_rtc_graph_uuid(repo)),(function (graph_uuid){
return promesa.protocols._promise((cljs.core.truth_(graph_uuid)?(function (){var base = frontend.handler.db_based.sync.http_base();
var users_info = frontend.state.get_state(new cljs.core.Keyword("rtc","users-info","rtc/users-info",8288930));
var cached_users = cljs.core.get.cljs$core$IFn$_invoke$arity$2(users_info,repo);
if(((cljs.core.not(force_QMARK_)) && (cljs.core.contains_QMARK_(users_info,repo)))){
return promesa.core.resolved(cached_users);
} else {
if(cljs.core.truth_(base)){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.user._LT_ensure_id_AMPERSAND_access_token_BANG_()),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)+"/graphs/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_uuid)+"/members"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-schema","response-schema",-1275515525),new cljs.core.Keyword("graph-members","list","graph-members/list",-1059934571)], null))),(function (resp){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(resp)),(function (members){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__79489){
var map__79490 = p__79489;
var map__79490__$1 = cljs.core.__destructure_map(map__79490);
var user_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79490__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79490__$1,new cljs.core.Keyword(null,"role","role",-736691072));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79490__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79490__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var name = (function (){var or__5142__auto__ = username;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = email;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return user_id;
}
}
})();
var user_type = (function (){var G__79491 = role;
if((G__79491 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__79491);
}
})();
var G__79492 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("user","uuid","user/uuid",2146253734),user_id,new cljs.core.Keyword("user","name","user/name",1848814598),name,new cljs.core.Keyword("graph<->user","user-type","graph<->user/user-type",-237330466),user_type], null);
if(typeof email === 'string'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79492,new cljs.core.Keyword("user","email","user/email",1419686391),email);
} else {
return G__79492;
}
}),members)),(function (users){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("rtc","users-info","rtc/users-info",8288930),users,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),repo], 0))),(function (___27434__auto__){
return promesa.protocols._promise(users);
}));
}));
}));
}));
}));
}));
} else {
return promesa.core.resolved(null);

}
}
})():null));
}));
}));
}));

(frontend.handler.db_based.sync._LT_rtc_get_users_info.cljs$lang$maxFixedArity = 1);

frontend.handler.db_based.sync._LT_rtc_create_graph_BANG_ = (function frontend$handler$db_based$sync$_LT_rtc_create_graph_BANG_(var_args){
var G__79494 = arguments.length;
switch (G__79494) {
case 1:
return frontend.handler.db_based.sync._LT_rtc_create_graph_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.handler.db_based.sync._LT_rtc_create_graph_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.db_based.sync._LT_rtc_create_graph_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.db_based.sync._LT_rtc_create_graph_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return frontend.handler.db_based.sync._LT_rtc_create_graph_BANG_.cljs$core$IFn$_invoke$arity$3(repo,true,true);
}));

(frontend.handler.db_based.sync._LT_rtc_create_graph_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo,graph_e2ee_QMARK_){
return frontend.handler.db_based.sync._LT_rtc_create_graph_BANG_.cljs$core$IFn$_invoke$arity$3(repo,graph_e2ee_QMARK_,true);
}));

(frontend.handler.db_based.sync._LT_rtc_create_graph_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (repo,graph_e2ee_QMARK_,graph_ready_for_use_QMARK_){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","db-sync-create-remote-graph","thread-api/db-sync-create-remote-graph",-2111581037),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,graph_e2ee_QMARK_,graph_ready_for_use_QMARK_], 0));
}));

(frontend.handler.db_based.sync._LT_rtc_create_graph_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.db_based.sync._LT_rtc_delete_graph_BANG_ = (function frontend$handler$db_based$sync$_LT_rtc_delete_graph_BANG_(graph_uuid,_schema_version){
var base = frontend.handler.db_based.sync.http_base();
if(cljs.core.truth_((function (){var and__5140__auto__ = graph_uuid;
if(cljs.core.truth_(and__5140__auto__)){
return base;
} else {
return and__5140__auto__;
}
})())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.user._LT_ensure_id_AMPERSAND_access_token_BANG_()),(function (_){
return promesa.protocols._promise(frontend.handler.db_based.sync.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)+"/graphs/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_uuid)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"DELETE"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-schema","response-schema",-1275515525),new cljs.core.Keyword("graphs","delete","graphs/delete",1077756941)], null)));
}));
}));
} else {
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("db-sync missing graph id",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("db-sync","invalid-graph","db-sync/invalid-graph",1928556010),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),graph_uuid,new cljs.core.Keyword(null,"base","base",185279322),base], null)));
}
});
frontend.handler.db_based.sync._LT_rtc_download_graph_BANG_ = (function frontend$handler$db_based$sync$_LT_rtc_download_graph_BANG_(var_args){
var G__79496 = arguments.length;
switch (G__79496) {
case 2:
return frontend.handler.db_based.sync._LT_rtc_download_graph_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.handler.db_based.sync._LT_rtc_download_graph_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.handler.db_based.sync._LT_rtc_download_graph_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (graph_name,graph_uuid){
return frontend.handler.db_based.sync._LT_rtc_download_graph_BANG_.cljs$core$IFn$_invoke$arity$3(graph_name,graph_uuid,true);
}));

(frontend.handler.db_based.sync._LT_rtc_download_graph_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (graph_name,graph_uuid,graph_e2ee_QMARK_){
var temp__5823__auto__ = frontend.handler.db_based.sync.active_graph_operation();
if(cljs.core.truth_(temp__5823__auto__)){
var operation = temp__5823__auto__;
return frontend.handler.db_based.sync.reject_graph_operation_in_progress(new cljs.core.Keyword(null,"download","download",-300081668),operation);
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","downloading-graph-uuid","rtc/downloading-graph-uuid",460109193),graph_uuid);

frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rtc","log","rtc/log",-1596481285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("rtc.log","download","rtc.log/download",-2144210573),new cljs.core.Keyword(null,"sub-type","sub-type",-997954412),new cljs.core.Keyword(null,"download-progress","download-progress",371056648),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),graph_uuid,new cljs.core.Keyword(null,"message","message",-406056002),"Preparing graph snapshot download"], null)], null));

var graph_e2ee_QMARK___$1 = frontend.handler.db_based.sync.normalize_graph_e2ee_QMARK_(graph_e2ee_QMARK_);
var base = frontend.handler.db_based.sync.http_base();
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__5140__auto__ = graph_uuid;
if(cljs.core.truth_(and__5140__auto__)){
return base;
} else {
return and__5140__auto__;
}
})())?promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.user._LT_ensure_id_AMPERSAND_access_token_BANG_()),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.db_version_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_name))),(function (graph){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_ensure_download_runtime_bound_BANG_(graph)),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","db-sync-download-graph-by-id","thread-api/db-sync-download-graph-by-id",-1680505559),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,graph_uuid,graph_e2ee_QMARK___$1], 0))),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","db-sync-download-missing-assets","thread-api/db-sync-download-missing-assets",1872230756),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph,graph_uuid], 0)):null)),(function (___$3){
return promesa.protocols._promise(true);
}));
}));
}));
}));
}));
})):promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("db-sync missing graph info",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("db-sync","invalid-graph","db-sync/invalid-graph",1928556010),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),graph_uuid,new cljs.core.Keyword(null,"base","base",185279322),base], null)))),(function (error){
throw error;
})),(function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","downloading-graph-uuid","rtc/downloading-graph-uuid",460109193),null);
}));
}
}));

(frontend.handler.db_based.sync._LT_rtc_download_graph_BANG_.cljs$lang$maxFixedArity = 3);

frontend.handler.db_based.sync._LT_get_remote_graphs = (function frontend$handler$db_based$sync$_LT_get_remote_graphs(){
var base = frontend.handler.db_based.sync.http_base();
if(cljs.core.not(base)){
return promesa.core.resolved(cljs.core.PersistentVector.EMPTY);
} else {
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","loading-graphs?","rtc/loading-graphs?",493247976),true)),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.user._LT_ensure_id_AMPERSAND_access_token_BANG_()),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)+"/graphs"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-schema","response-schema",-1275515525),new cljs.core.Keyword("graphs","list","graphs/list",1868883776)], null))),(function (resp){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_ensure_user_rsa_keys_on_server_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"server-rsa-keys-exists?","server-rsa-keys-exists?",2085850669),new cljs.core.Keyword(null,"user-rsa-keys-exists?","user-rsa-keys-exists?",1493320479).cljs$core$IFn$_invoke$arity$1(resp)], null))),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(new cljs.core.Keyword(null,"graphs","graphs",-1584479112).cljs$core$IFn$_invoke$arity$1(resp)),(function (graphs){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (graph){
var graph_e2ee_QMARK_ = ((cljs.core.contains_QMARK_(graph,new cljs.core.Keyword(null,"graph-e2ee?","graph-e2ee?",-1495428226)))?frontend.handler.db_based.sync.normalize_graph_e2ee_QMARK_(new cljs.core.Keyword(null,"graph-e2ee?","graph-e2ee?",-1495428226).cljs$core$IFn$_invoke$arity$1(graph)):true);
var graph_ready_for_use_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword(null,"graph-ready-for-use?","graph-ready-for-use?",-1081605254).cljs$core$IFn$_invoke$arity$1(graph));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rtc-graph?","rtc-graph?",-203036448),new cljs.core.Keyword(null,"graph<->user-user-type","graph<->user-user-type",1524958981),new cljs.core.Keyword(null,"GraphName","GraphName",-960661337),new cljs.core.Keyword(null,"GraphSchemaVersion","GraphSchemaVersion",1094848752),new cljs.core.Keyword(null,"graph<->user-grant-by-user","graph<->user-grant-by-user",642397936),new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"graph-ready-for-use?","graph-ready-for-use?",-1081605254),new cljs.core.Keyword(null,"graph-e2ee?","graph-e2ee?",-1495428226)],[true,new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(graph),new cljs.core.Keyword(null,"graph-name","graph-name",416773857).cljs$core$IFn$_invoke$arity$1(graph),new cljs.core.Keyword(null,"schema-version","schema-version",1117939594).cljs$core$IFn$_invoke$arity$1(graph),new cljs.core.Keyword(null,"invited-by","invited-by",-530277396).cljs$core$IFn$_invoke$arity$1(graph),new cljs.core.Keyword(null,"graph-id","graph-id",-205404489).cljs$core$IFn$_invoke$arity$1(graph),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.db_version_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graph-name","graph-name",416773857).cljs$core$IFn$_invoke$arity$1(graph))),graph_ready_for_use_QMARK_,graph_e2ee_QMARK_]),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(graph,new cljs.core.Keyword(null,"graph-id","graph-id",-205404489),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph-name","graph-name",416773857),new cljs.core.Keyword(null,"schema-version","schema-version",1117939594),new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"invited-by","invited-by",-530277396),new cljs.core.Keyword(null,"graph-ready-for-use?","graph-ready-for-use?",-1081605254)], 0))], 0));
}),graphs)),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","graphs","rtc/graphs",-1584628267),result)),(function (___27434__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.repo.refresh_repos_BANG_()),(function (___27434__auto____$1){
return promesa.protocols._promise(result);
}));
}));
}));
}));
}));
}));
}));
}));
})),(function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","loading-graphs?","rtc/loading-graphs?",493247976),false);
}));
}
});
frontend.handler.db_based.sync.personal_access_tokens_path = "/api/v1/personal-access-tokens";
frontend.handler.db_based.sync._LT_personal_access_tokens = (function frontend$handler$db_based$sync$_LT_personal_access_tokens(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.user._LT_ensure_id_AMPERSAND_access_token_BANG_()),(function (_){
return promesa.protocols._promise(frontend.handler.db_based.sync.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.db_based.sync.http_base())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.db_based.sync.personal_access_tokens_path)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null),cljs.core.PersistentArrayMap.EMPTY));
}));
}));
});
frontend.handler.db_based.sync._LT_create_personal_access_token_BANG_ = (function frontend$handler$db_based$sync$_LT_create_personal_access_token_BANG_(request){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.user._LT_ensure_id_AMPERSAND_access_token_BANG_()),(function (_){
return promesa.protocols._promise(frontend.handler.db_based.sync.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.db_based.sync.http_base())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.db_based.sync.personal_access_tokens_path)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(request))], null),cljs.core.PersistentArrayMap.EMPTY));
}));
}));
});
frontend.handler.db_based.sync._LT_revoke_personal_access_token_BANG_ = (function frontend$handler$db_based$sync$_LT_revoke_personal_access_token_BANG_(token_id){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.user._LT_ensure_id_AMPERSAND_access_token_BANG_()),(function (_){
return promesa.protocols._promise(frontend.handler.db_based.sync.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.db_based.sync.http_base())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.handler.db_based.sync.personal_access_tokens_path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token_id)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"DELETE"], null),cljs.core.PersistentArrayMap.EMPTY));
}));
}));
});
frontend.handler.db_based.sync._LT_rtc_invite_email = (function frontend$handler$db_based$sync$_LT_rtc_invite_email(graph_uuid,email){
var base = frontend.handler.db_based.sync.http_base();
var graph_uuid__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_uuid));
if(cljs.core.truth_((function (){var and__5140__auto__ = base;
if(cljs.core.truth_(and__5140__auto__)){
return ((typeof graph_uuid__$1 === 'string') && (typeof email === 'string'));
} else {
return and__5140__auto__;
}
})())){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_ensure_invite_auth_BANG_()),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync.coerce_http_request(new cljs.core.Keyword("graph-members","create","graph-members/create",1356984878),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"role","role",-736691072),"member"], null))),(function (body){
return promesa.protocols._mcat(promesa.protocols._promise((((body == null))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("db-sync invalid invite body",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),graph_uuid__$1,new cljs.core.Keyword(null,"email","email",1415816706),email], null))})():null)),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)+"/graphs/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_uuid__$1)+"/members"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(body))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-schema","response-schema",-1275515525),new cljs.core.Keyword("graph-members","create","graph-members/create",1356984878)], null))),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_grant_graph_access_for_invite_BANG_(repo,graph_uuid__$1,email)),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_rtc_get_users_info.cljs$core$IFn$_invoke$arity$1(true)),(function (___$4){
return promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","invitation-sent","sync/invitation-sent",2066031451)], 0)),new cljs.core.Keyword(null,"success","success",1890645906)));
}));
}));
}));
}));
}));
}));
}));
})),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("user not found",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.ex_data(e),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"error","error",-978969032)], null)))){
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","user-doesnt-exist-yet","sync/user-doesnt-exist-yet",1997142692)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671));
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sync","something-wrong","sync/something-wrong",-1023459588)], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.db-based.sync",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-sync","invite-email-failed","db-sync/invite-email-failed",809362380),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),graph_uuid__$1,new cljs.core.Keyword(null,"email","email",1415816706),email], null),new cljs.core.Keyword(null,"line","line",212345235),431], null)),null);
} else {
return null;
}
}
}));
} else {
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("db-sync missing invite info",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("db-sync","invalid-invite","db-sync/invalid-invite",-2139992773),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),graph_uuid__$1,new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"base","base",185279322),base], null)));
}
});
frontend.handler.db_based.sync._LT_rtc_remove_member_BANG_ = (function frontend$handler$db_based$sync$_LT_rtc_remove_member_BANG_(graph_uuid,member_id){
var base = frontend.handler.db_based.sync.http_base();
var graph_uuid__$1 = (function (){var G__79497 = graph_uuid;
if((G__79497 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79497));
}
})();
var member_id__$1 = (function (){var G__79498 = member_id;
if((G__79498 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79498));
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = base;
if(cljs.core.truth_(and__5140__auto__)){
return ((typeof graph_uuid__$1 === 'string') && (typeof member_id__$1 === 'string'));
} else {
return and__5140__auto__;
}
})())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.user._LT_ensure_id_AMPERSAND_access_token_BANG_()),(function (_){
return promesa.protocols._promise(frontend.handler.db_based.sync.fetch_json((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)+"/graphs/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(graph_uuid__$1)+"/members/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(member_id__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"DELETE"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-schema","response-schema",-1275515525),new cljs.core.Keyword("graph-members","delete","graph-members/delete",-249361854)], null)));
}));
}));
} else {
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("db-sync missing member info",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("db-sync","invalid-member","db-sync/invalid-member",-50794868),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),graph_uuid__$1,new cljs.core.Keyword(null,"member-id","member-id",606659713),member_id__$1,new cljs.core.Keyword(null,"base","base",185279322),base], null)));
}
});
frontend.handler.db_based.sync._LT_rtc_leave_graph_BANG_ = (function frontend$handler$db_based$sync$_LT_rtc_leave_graph_BANG_(graph_uuid){
var temp__5823__auto__ = frontend.handler.user.user_uuid();
if(cljs.core.truth_(temp__5823__auto__)){
var member_id = temp__5823__auto__;
return frontend.handler.db_based.sync._LT_rtc_remove_member_BANG_(graph_uuid,member_id);
} else {
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("db-sync missing user id",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("db-sync","invalid-member","db-sync/invalid-member",-50794868),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),graph_uuid], null)));
}
});
frontend.handler.db_based.sync._LT_rtc_upload_graph_BANG_ = (function frontend$handler$db_based$sync$_LT_rtc_upload_graph_BANG_(repo,_graph_e2ee_QMARK_){
var temp__5823__auto__ = frontend.handler.db_based.sync.active_graph_operation();
if(cljs.core.truth_(temp__5823__auto__)){
var operation = temp__5823__auto__;
return frontend.handler.db_based.sync.reject_graph_operation_in_progress(new cljs.core.Keyword(null,"upload","upload",-255769218),operation);
} else {
frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","uploading?","rtc/uploading?",316154315),true);

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_sync_auth_state_to_db_worker_BANG_()),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","db-sync-upload-graph","thread-api/db-sync-upload-graph",1148204855),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0))),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_get_remote_graphs()),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","uploading?","rtc/uploading?",316154315),false)),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_rtc_start_BANG_(repo)),(function (___$4){
return promesa.protocols._promise(true);
}));
}));
}));
}));
}));
})),(function (){
return frontend.state.set_state_BANG_(new cljs.core.Keyword("rtc","uploading?","rtc/uploading?",316154315),false);
}));
}
});
frontend.handler.db_based.sync._LT_rtc_create_graph_and_start_sync_BANG_ = (function frontend$handler$db_based$sync$_LT_rtc_create_graph_and_start_sync_BANG_(repo,graph_e2ee_QMARK_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_rtc_create_graph_BANG_.cljs$core$IFn$_invoke$arity$3(repo,graph_e2ee_QMARK_,true)),(function (graph_id){
return promesa.protocols._mcat(promesa.protocols._promise((((graph_id == null))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("graph id doesn't exist when creating remote graph",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null))})():null)),(function (___27434__auto__){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.db_based.sync._LT_get_remote_graphs()),(function (___27434__auto____$1){
return promesa.protocols._promise(frontend.handler.db_based.sync._LT_rtc_start_BANG_(repo));
}));
})));
}));
}));
}));
});

//# sourceMappingURL=frontend.handler.db_based.sync.js.map
