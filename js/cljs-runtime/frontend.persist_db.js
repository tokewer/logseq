goog.provide('frontend.persist_db');
frontend.persist_db.db_worker_recovery_failure_threshold = (1);
if((typeof frontend !== 'undefined') && (typeof frontend.persist_db !== 'undefined') && (typeof frontend.persist_db.opfs_db !== 'undefined')){
} else {
frontend.persist_db.opfs_db = frontend.persist_db.browser.__GT_InBrowser();
}
if((typeof frontend !== 'undefined') && (typeof frontend.persist_db !== 'undefined') && (typeof frontend.persist_db.remote_db !== 'undefined')){
} else {
frontend.persist_db.remote_db = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.persist_db !== 'undefined') && (typeof frontend.persist_db.remote_repo !== 'undefined')){
} else {
frontend.persist_db.remote_repo = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.persist_db !== 'undefined') && (typeof frontend.persist_db.remote_runtime_state !== 'undefined')){
} else {
frontend.persist_db.remote_runtime_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.persist_db !== 'undefined') && (typeof frontend.persist_db._STAR_ensure_remote_chain !== 'undefined')){
} else {
frontend.persist_db._STAR_ensure_remote_chain = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.persist_db !== 'undefined') && (typeof frontend.persist_db._STAR_remote_ensure_epoch !== 'undefined')){
} else {
frontend.persist_db._STAR_remote_ensure_epoch = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof frontend !== 'undefined') && (typeof frontend.persist_db !== 'undefined') && (typeof frontend.persist_db._STAR_pending_remote_session !== 'undefined')){
} else {
frontend.persist_db._STAR_pending_remote_session = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.persist_db !== 'undefined') && (typeof frontend.persist_db._STAR_repo_generations !== 'undefined')){
} else {
frontend.persist_db._STAR_repo_generations = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
frontend.persist_db.clear_remote_runtime_BANG_ = (function frontend$persist_db$clear_remote_runtime_BANG_(){
cljs.core.reset_BANG_(frontend.persist_db.remote_runtime_state,null);

cljs.core.reset_BANG_(frontend.persist_db.remote_db,null);

cljs.core.reset_BANG_(frontend.persist_db.remote_repo,null);

cljs.core.reset_BANG_(frontend.persist_db._STAR_pending_remote_session,null);

return cljs.core.reset_BANG_(frontend.state._STAR_db_worker,null);
});
frontend.persist_db.same_remote_repo_QMARK_ = (function frontend$persist_db$same_remote_repo_QMARK_(repo,runtime_repo){
return logseq.common.graph_dir.same_repo_QMARK_(repo,runtime_repo);
});
/**
 * Cancels clients and pending recovery for the removed graph instance.
 */
frontend.persist_db._LT_invalidate_remote_repo_BANG_ = (function frontend$persist_db$_LT_invalidate_remote_repo_BANG_(var_args){
var G__67250 = arguments.length;
switch (G__67250) {
case 2:
return frontend.persist_db._LT_invalidate_remote_repo_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.persist_db._LT_invalidate_remote_repo_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.persist_db._LT_invalidate_remote_repo_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo,phase){
return frontend.persist_db._LT_invalidate_remote_repo_BANG_.cljs$core$IFn$_invoke$arity$3(repo,phase,null);
}));

(frontend.persist_db._LT_invalidate_remote_repo_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (repo,phase,generation){
if(cljs.core.truth_((function (){var and__5140__auto__ = generation;
if(cljs.core.truth_(and__5140__auto__)){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.persist_db._STAR_repo_generations),logseq.common.graph_dir.repo_identity(repo));
if(cljs.core.truth_(temp__5825__auto__)){
var current = temp__5825__auto__;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(generation,current);
} else {
return null;
}
} else {
return and__5140__auto__;
}
})())){
return promesa.core.resolved(null);
} else {
var client = ((frontend.persist_db.same_remote_repo_QMARK_(repo,cljs.core.deref(frontend.persist_db.remote_repo)))?cljs.core.deref(frontend.persist_db.remote_db):null);
if(((frontend.persist_db.same_remote_repo_QMARK_(repo,cljs.core.deref(frontend.persist_db.remote_repo))) || (frontend.persist_db.same_remote_repo_QMARK_(repo,new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.persist_db._STAR_pending_remote_session)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.persist_db._STAR_remote_ensure_epoch,cljs.core.inc);

frontend.persist_db.clear_remote_runtime_BANG_();
} else {
}

if(frontend.persist_db.same_remote_repo_QMARK_(repo,frontend.state.get_current_repo())){
frontend.state.set_current_repo_BANG_(null);

frontend.db.subs.reset_graph_BANG_(null);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(phase,"deleted")){
frontend.state.delete_repo_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),repo], null));
} else {
}

if(cljs.core.truth_(client)){
return frontend.persist_db.remote.stop_BANG_(client);
} else {
return promesa.core.resolved(null);
}
}
}));

(frontend.persist_db._LT_invalidate_remote_repo_BANG_.cljs$lang$maxFixedArity = 3);

frontend.persist_db._LT_stop_remote_if_current_BANG_ = (function frontend$persist_db$_LT_stop_remote_if_current_BANG_(repo){
if(cljs.core.truth_((function (){var and__5140__auto__ = repo;
if(cljs.core.truth_(and__5140__auto__)){
return frontend.persist_db.same_remote_repo_QMARK_(repo,cljs.core.deref(frontend.persist_db.remote_repo));
} else {
return and__5140__auto__;
}
})())){
var temp__5823__auto__ = cljs.core.deref(frontend.persist_db.remote_db);
if(cljs.core.truth_(temp__5823__auto__)){
var remote_client = temp__5823__auto__;
return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(frontend.persist_db.remote.stop_BANG_(remote_client),(function (){
if(frontend.persist_db.same_remote_repo_QMARK_(repo,cljs.core.deref(frontend.persist_db.remote_repo))){
return frontend.persist_db.clear_remote_runtime_BANG_();
} else {
return null;
}
}));
} else {
frontend.persist_db.clear_remote_runtime_BANG_();

return promesa.core.resolved(true);
}
} else {
return promesa.core.resolved(false);
}
});
frontend.persist_db.set_remote_runtime_BANG_ = (function frontend$persist_db$set_remote_runtime_BANG_(repo,client,session_id){
cljs.core.reset_BANG_(frontend.persist_db.remote_runtime_state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"client","client",-1323448117),client,new cljs.core.Keyword(null,"session-id","session-id",-1147060351),session_id,new cljs.core.Keyword(null,"request-failures","request-failures",-1823803853),(0),new cljs.core.Keyword(null,"recovery-triggered?","recovery-triggered?",618551990),false], null));

cljs.core.reset_BANG_(frontend.persist_db.remote_db,client);

cljs.core.reset_BANG_(frontend.persist_db.remote_repo,repo);

return cljs.core.reset_BANG_(frontend.state._STAR_db_worker,new cljs.core.Keyword(null,"wrapped-worker","wrapped-worker",1361994802).cljs$core$IFn$_invoke$arity$1(client));
});
frontend.persist_db.active_runtime_session_QMARK_ = (function frontend$persist_db$active_runtime_session_QMARK_(state,repo,session_id){
return ((frontend.persist_db.same_remote_repo_QMARK_(repo,new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(state))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(session_id,new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(state))));
});
frontend.persist_db.active_runtime_client_QMARK_ = (function frontend$persist_db$active_runtime_client_QMARK_(state,repo,session_id,client){
return ((frontend.persist_db.active_runtime_session_QMARK_(state,repo,session_id)) && ((client === new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(state))));
});
frontend.persist_db.pending_remote_session_QMARK_ = (function frontend$persist_db$pending_remote_session_QMARK_(repo,session_id){
var pending = cljs.core.deref(frontend.persist_db._STAR_pending_remote_session);
return (((!((pending == null)))) && (((frontend.persist_db.same_remote_repo_QMARK_(repo,new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(pending))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(session_id,new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(pending))))));
});
frontend.persist_db.remote_session_live_QMARK_ = (function frontend$persist_db$remote_session_live_QMARK_(repo,session_id){
return ((frontend.persist_db.active_runtime_session_QMARK_(cljs.core.deref(frontend.persist_db.remote_runtime_state),repo,session_id)) || (frontend.persist_db.pending_remote_session_QMARK_(repo,session_id)));
});
frontend.persist_db._LT_enqueue_ensure_remote_BANG_ = (function frontend$persist_db$_LT_enqueue_ensure_remote_BANG_(f){
var out = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.persist_db._STAR_ensure_remote_chain,(function (prev){
var p = promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = prev;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return promesa.core.resolved(null);
}
})(),(function (_){
return null;
})),(function (_){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}));
cljs.core.reset_BANG_(out,p);

return p;
}));

return cljs.core.deref(out);
});
frontend.persist_db.reset_active_request_failures_BANG_ = (function frontend$persist_db$reset_active_request_failures_BANG_(repo,session_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.persist_db.remote_runtime_state,(function (state){
if(frontend.persist_db.active_runtime_session_QMARK_(state,repo,session_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"request-failures","request-failures",-1823803853),(0));
} else {
return state;
}
}));
});
frontend.persist_db.server_unavailable_error_QMARK_ = (function frontend$persist_db$server_unavailable_error_QMARK_(error){
var map__67251 = cljs.core.ex_data(error);
var map__67251__$1 = cljs.core.__destructure_map(map__67251);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67251__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67251__$1,new cljs.core.Keyword(null,"code","code",1586293142));
return (((cljs.core.ex_data(error) == null)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"server-unavailable","server-unavailable",1967766937),code)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-worker-unavailable","db-worker-unavailable",1175358627),code)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"connection-refused","connection-refused",1314029637),code)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fetch-failed","fetch-failed",990490079),code)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"network-error","network-error",-1095989517),code)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),status)))))))))))));
});
frontend.persist_db.event_stream_error_loggable_QMARK_ = (function frontend$persist_db$event_stream_error_loggable_QMARK_(failure_count){
return ((cljs.core.pos_int_QMARK_(failure_count)) && ((((((failure_count <= (64))) && (((failure_count & (failure_count - (1))) === (0))))) || ((((failure_count > (64))) && ((cljs.core.mod(failure_count,(64)) === (0))))))));
});
/**
 * Asks the main process for the graph's worker runtime. The main process probes
 *   the worker over Node HTTP and restarts it only when it is not healthy.
 */
frontend.persist_db._LT_request_remote_runtime_BANG_ = (function frontend$persist_db$_LT_request_remote_runtime_BANG_(repo,generation){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["db-worker-runtime",repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"generation","generation",-2132542044),generation], null)], 0))),(function (runtime){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.persist_db._STAR_repo_generations,cljs.core.assoc,logseq.common.graph_dir.repo_identity(repo),new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(runtime))),(function (___27434__auto__){
return promesa.protocols._promise(runtime);
}));
}));
}));
});
frontend.persist_db.same_runtime_endpoint_QMARK_ = (function frontend$persist_db$same_runtime_endpoint_QMARK_(remote_client,runtime){
var client = new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(remote_client);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-url","base-url",9540398).cljs$core$IFn$_invoke$arity$1(client),new cljs.core.Keyword(null,"base-url","base-url",9540398).cljs$core$IFn$_invoke$arity$1(runtime))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(client),new cljs.core.Keyword(null,"auth-token","auth-token",30990976).cljs$core$IFn$_invoke$arity$1(runtime))));
});
frontend.persist_db._LT_stop_remote_client_BANG_ = (function frontend$persist_db$_LT_stop_remote_client_BANG_(repo,remote_client){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.persist_db.remote.stop_BANG_(remote_client),(function (error){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"db-worker-runtime-stop-error","db-worker-runtime-stop-error",-1826599902),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"line","line",212345235),171], null)),null);
} else {
return null;
}
}));
});
/**
 * Renderer transport failures (fetch/SSE) also happen while the worker is healthy,
 *   e.g. Chromium suspends its network stack around system sleep. The main process
 *   decides whether the worker must be replaced; a healthy worker keeps the current
 *   client so its SSE reconnect path and in-flight invokes continue.
 */
frontend.persist_db._LT_recover_remote_impl_BANG_ = (function frontend$persist_db$_LT_recover_remote_impl_BANG_(repo,remote_client,session_id){
var active_QMARK_ = (function (){
return frontend.persist_db.active_runtime_client_QMARK_(cljs.core.deref(frontend.persist_db.remote_runtime_state),repo,session_id,remote_client);
});
var skip_BANG_ = (function (reason){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"db-worker-runtime-recovery-skipped","db-worker-runtime-recovery-skipped",1781379025),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason,new cljs.core.Keyword(null,"line","line",212345235),183], null)),null);
} else {
}

return null;
});
if((!(active_QMARK_()))){
return skip_BANG_(new cljs.core.Keyword(null,"runtime-changed","runtime-changed",1626254770));
} else {
if((!(frontend.persist_db.same_remote_repo_QMARK_(repo,frontend.state.get_current_repo())))){
return skip_BANG_(new cljs.core.Keyword(null,"repo-changed","repo-changed",-1958067171));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_request_remote_runtime_BANG_(repo,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.persist_db._STAR_repo_generations),logseq.common.graph_dir.repo_identity(repo)))),(function (runtime){
return promesa.protocols._promise((((!(active_QMARK_())))?skip_BANG_(new cljs.core.Keyword(null,"runtime-changed","runtime-changed",1626254770)):((frontend.persist_db.same_runtime_endpoint_QMARK_(remote_client,runtime))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.persist_db.remote_runtime_state,(function (state){
if(frontend.persist_db.active_runtime_client_QMARK_(state,repo,session_id,remote_client)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"request-failures","request-failures",-1823803853),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recovery-triggered?","recovery-triggered?",618551990),false], 0));
} else {
return state;
}
}));

if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"db-worker-runtime-recovered","db-worker-runtime-recovered",1694408239),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"worker","worker",938239996),new cljs.core.Keyword(null,"reused","reused",-1146063140),new cljs.core.Keyword(null,"line","line",212345235),209], null)),null);
} else {
}

return remote_client;
})()
:promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_stop_remote_client_BANG_(repo,remote_client)),(function (_){
return promesa.protocols._promise(((active_QMARK_())?(function (){
frontend.persist_db.clear_remote_runtime_BANG_();

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__67252 = repo;
var G__67253 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"only-if-current?","only-if-current?",-2146078905),true], null);
return (frontend.persist_db._LT_ensure_remote_impl_BANG_.cljs$core$IFn$_invoke$arity$2 ? frontend.persist_db._LT_ensure_remote_impl_BANG_.cljs$core$IFn$_invoke$arity$2(G__67252,G__67253) : frontend.persist_db._LT_ensure_remote_impl_BANG_.call(null,G__67252,G__67253));
})()),(function (client){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(client)?((goog.debug.LOGGING_ENABLED)?lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"db-worker-runtime-recovered","db-worker-runtime-recovered",1694408239),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"worker","worker",938239996),new cljs.core.Keyword(null,"replaced","replaced",-1012337505),new cljs.core.Keyword(null,"line","line",212345235),219], null)),null):null):null)),(function (___27434__auto__){
return promesa.protocols._promise(client);
}));
}));
}));
})()
:skip_BANG_(new cljs.core.Keyword(null,"runtime-changed","runtime-changed",1626254770))));
}));
}))
)));
}));
}));

}
}
});
frontend.persist_db._LT_trigger_db_worker_runtime_recovery_BANG_ = (function frontend$persist_db$_LT_trigger_db_worker_runtime_recovery_BANG_(repo,remote_client,session_id){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"db-worker-runtime-recovering","db-worker-runtime-recovering",497218670),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"line","line",212345235),225], null)),null);
} else {
}

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.persist_db._LT_enqueue_ensure_remote_BANG_((function (){
return frontend.persist_db._LT_recover_remote_impl_BANG_(repo,remote_client,session_id);
})),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"db-worker-runtime-recovery-failed","db-worker-runtime-recovery-failed",-296763909),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"line","line",212345235),228], null)),null);
} else {
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((frontend.persist_db.active_runtime_client_QMARK_(cljs.core.deref(frontend.persist_db.remote_runtime_state),repo,session_id,remote_client))?(function (){
frontend.persist_db.clear_remote_runtime_BANG_();

return frontend.persist_db._LT_stop_remote_client_BANG_(repo,remote_client);
})()
:null)),(function (_){
return promesa.protocols._promise(frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("graph","db-worker-recovery-failed-error","graph/db-worker-recovery-failed-error",-802402862),frontend.util.text.get_graph_name_from_path(repo)], 0)),new cljs.core.Keyword(null,"error","error",-978969032)));
}));
}));
}));
});
frontend.persist_db.record_active_request_failure_BANG_ = (function frontend$persist_db$record_active_request_failure_BANG_(repo,session_id,error){
if(((frontend.persist_db.server_unavailable_error_QMARK_(error)) && (cljs.core.not(frontend.state.get_state(new cljs.core.Keyword("graph","importing","graph/importing",1647644617)))))){
var triggered_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var remote_client = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.persist_db.remote_runtime_state,(function (state){
if(((frontend.persist_db.active_runtime_session_QMARK_(state,repo,session_id)) && (cljs.core.not(new cljs.core.Keyword(null,"recovery-triggered?","recovery-triggered?",618551990).cljs$core$IFn$_invoke$arity$1(state))))){
var failures = ((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"request-failures","request-failures",-1823803853).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() + (1));
if((failures >= frontend.persist_db.db_worker_recovery_failure_threshold)){
cljs.core.reset_BANG_(triggered_QMARK_,true);

cljs.core.reset_BANG_(remote_client,new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(state));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"request-failures","request-failures",-1823803853),failures,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recovery-triggered?","recovery-triggered?",618551990),true], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"request-failures","request-failures",-1823803853),failures);
}
} else {
return state;
}
}));

if(cljs.core.truth_(cljs.core.deref(triggered_QMARK_))){
frontend.persist_db._LT_trigger_db_worker_runtime_recovery_BANG_(repo,cljs.core.deref(remote_client),session_id);
} else {
}

return null;
} else {
return null;
}
});
frontend.persist_db.node_runtime_QMARK_ = (function frontend$persist_db$node_runtime_QMARK_(){
return (((typeof process !== 'undefined')) && ((!((typeof window !== 'undefined')))));
});
frontend.persist_db.electron_runtime_QMARK_ = (function frontend$persist_db$electron_runtime_QMARK_(){
var and__5140__auto__ = (!(frontend.persist_db.node_runtime_QMARK_()));
if(and__5140__auto__){
return frontend.util.electron_QMARK_();
} else {
return and__5140__auto__;
}
});
frontend.persist_db.current_db_sync_config = (function frontend$persist_db$current_db_sync_config(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"ws-url","ws-url",-1466481235),frontend.config.db_sync_ws_url(),new cljs.core.Keyword(null,"http-base","http-base",2042022955),frontend.config.db_sync_http_base()], null);
});
frontend.persist_db._LT_sync_markdown_mirror_setting_BANG_ = (function frontend$persist_db$_LT_sync_markdown_mirror_setting_BANG_(repo){
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","markdown-mirror-set-enabled","thread-api/markdown-mirror-set-enabled",-181757882),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new cljs.core.Keyword("feature","markdown-mirror?","feature/markdown-mirror?",1870052778).cljs$core$IFn$_invoke$arity$1(frontend.state.get_graph_config.cljs$core$IFn$_invoke$arity$1(repo)) === true], 0));
});
frontend.persist_db.graph_markdown_mirror_enabled_QMARK_ = (function frontend$persist_db$graph_markdown_mirror_enabled_QMARK_(state,repo){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),repo,new cljs.core.Keyword("feature","markdown-mirror?","feature/markdown-mirror?",1870052778)], null)) === true;
});
frontend.persist_db.sync_markdown_mirror_setting_watch_BANG_ = (function frontend$persist_db$sync_markdown_mirror_setting_watch_BANG_(){
frontend.rfx.unlisten_BANG_(new cljs.core.Keyword(null,"sync-markdown-mirror-setting","sync-markdown-mirror-setting",-490190591));

frontend.rfx.listen_BANG_(new cljs.core.Keyword(null,"sync-markdown-mirror-setting","sync-markdown-mirror-setting",-490190591),(function (old_state,new_state){
var repo = new cljs.core.Keyword("git","current-repo","git/current-repo",107438825).cljs$core$IFn$_invoke$arity$1(new_state);
var old_enabled_QMARK_ = frontend.persist_db.graph_markdown_mirror_enabled_QMARK_(old_state,repo);
var new_enabled_QMARK_ = frontend.persist_db.graph_markdown_mirror_enabled_QMARK_(new_state,repo);
if(cljs.core.truth_((function (){var and__5140__auto__ = repo;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.deref(frontend.state._STAR_db_worker);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_enabled_QMARK_,new_enabled_QMARK_);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","markdown-mirror-set-enabled","thread-api/markdown-mirror-set-enabled",-181757882),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo,new_enabled_QMARK_], 0)),(function (error){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("markdown-mirror","settings-watch-sync-failed","markdown-mirror/settings-watch-sync-failed",1667683567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),new_enabled_QMARK_,new cljs.core.Keyword(null,"error","error",-978969032),error], null),new cljs.core.Keyword(null,"line","line",212345235),305], null)),null);
} else {
return null;
}
}));
} else {
return null;
}
}));

return null;
});
frontend.persist_db._LT_discard_stale_started_client_BANG_ = (function frontend$persist_db$_LT_discard_stale_started_client_BANG_(repo,client){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"db-worker-ensure-remote-stale","db-worker-ensure-remote-stale",932078930),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"after-start","after-start",-1873218151),new cljs.core.Keyword(null,"line","line",212345235),313], null)),null);
} else {
}

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.persist_db.remote.stop_BANG_(client),(function (e){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"db-worker-stale-client-stop-error","db-worker-stale-client-stop-error",2076602438),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword(null,"line","line",212345235),317], null)),null);
} else {
return null;
}
})),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(((frontend.persist_db.same_remote_repo_QMARK_(repo,cljs.core.deref(frontend.persist_db.remote_repo)))?((goog.debug.LOGGING_ENABLED)?lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"db-worker-stale-release-skipped","db-worker-stale-release-skipped",-464128371),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"runtime-changed","runtime-changed",1626254770),new cljs.core.Keyword(null,"line","line",212345235),321], null)),null):null):electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["releaseDbWorkerRuntime",repo], 0)))),(function (___$1){
return promesa.protocols._promise(null);
}));
}));
})),(function (e){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"db-worker-stale-release-error","db-worker-stale-release-error",-2105347789),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"error","error",-978969032),e,new cljs.core.Keyword(null,"line","line",212345235),327], null)),null);
} else {
return null;
}
}));
});
frontend.persist_db.install_remote_runtime_BANG_ = (function frontend$persist_db$install_remote_runtime_BANG_(repo,client,session_id){
frontend.persist_db.set_remote_runtime_BANG_(repo,client,session_id);

promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","set-db-sync-config","thread-api/set-db-sync-config",-619924056),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.persist_db.current_db_sync_config()], 0))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_sync_markdown_mirror_setting_BANG_(repo)),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db.sync_markdown_mirror_setting_watch_BANG_()),(function (___27434__auto__){
return promesa.protocols._promise(null);
}));
}));
}));
}));

logseq.db.register_transact_fn_BANG_((function frontend$persist_db$install_remote_runtime_BANG__$_remote_transact_BANG_(repo__$1,tx_data,tx_meta){
return frontend.db.transact.transact(frontend.persist_db.browser.transact_BANG_,((typeof repo__$1 === 'string')?repo__$1:frontend.state.get_current_repo()),tx_data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_meta,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(frontend.state.get_state.cljs$core$IFn$_invoke$arity$0())));
}));

return client;
});
frontend.persist_db._LT_ensure_remote_impl_BANG_ = (function frontend$persist_db$_LT_ensure_remote_impl_BANG_(repo,p__67254){
var map__67255 = p__67254;
var map__67255__$1 = cljs.core.__destructure_map(map__67255);
var only_if_current_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67255__$1,new cljs.core.Keyword(null,"only-if-current?","only-if-current?",-2146078905));
var generation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67255__$1,new cljs.core.Keyword(null,"generation","generation",-2132542044));
var current_for_repo_QMARK_ = (function (){
return frontend.persist_db.same_remote_repo_QMARK_(repo,frontend.state.get_current_repo());
});
if((repo == null)){
return promesa.core.resolved(cljs.core.deref(frontend.persist_db.remote_db));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = only_if_current_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(current_for_repo_QMARK_()));
} else {
return and__5140__auto__;
}
})())){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"db-worker-ensure-remote-stale","db-worker-ensure-remote-stale",932078930),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"before-stop","before-stop",-1037057177),new cljs.core.Keyword(null,"line","line",212345235),356], null)),null);
} else {
}

return promesa.core.resolved(null);
} else {
if(frontend.persist_db.same_remote_repo_QMARK_(repo,cljs.core.deref(frontend.persist_db.remote_repo))){
if(cljs.core.truth_((function (){var and__5140__auto__ = generation;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(generation,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.persist_db._STAR_repo_generations),logseq.common.graph_dir.repo_identity(repo)));
} else {
return and__5140__auto__;
}
})())){
return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Graph generation changed",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"graph-not-exists","graph-not-exists",2022452078),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo], null)));
} else {
return promesa.core.resolved(cljs.core.deref(frontend.persist_db.remote_db));
}
} else {
var epoch = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.persist_db._STAR_remote_ensure_epoch,cljs.core.inc);
var session_id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
var event_stream_failures = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
cljs.core.reset_BANG_(frontend.persist_db._STAR_pending_remote_session,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"session-id","session-id",-1147060351),session_id,new cljs.core.Keyword(null,"epoch","epoch",1435633666),epoch], null));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(cljs.core.deref(frontend.persist_db.remote_db))?frontend.persist_db.remote.stop_BANG_(cljs.core.deref(frontend.persist_db.remote_db)):null)),(function (_){
return promesa.protocols._promise((cljs.core.truth_((function (){var and__5140__auto__ = only_if_current_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(current_for_repo_QMARK_()));
} else {
return and__5140__auto__;
}
})())?(function (){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"db-worker-ensure-remote-stale","db-worker-ensure-remote-stale",932078930),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"before-runtime","before-runtime",-1443721875),new cljs.core.Keyword(null,"line","line",212345235),377], null)),null);
} else {
}

if(frontend.persist_db.pending_remote_session_QMARK_(repo,session_id)){
cljs.core.reset_BANG_(frontend.persist_db._STAR_pending_remote_session,null);
} else {
}

return null;
})()
:promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_request_remote_runtime_BANG_(repo,(function (){var or__5142__auto__ = generation;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(only_if_current_QMARK_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.persist_db._STAR_repo_generations),logseq.common.graph_dir.repo_identity(repo));
} else {
return null;
}
}
})())),(function (runtime){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db.remote.start_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event-handler","event-handler",-487718843),frontend.handler.worker.handle,new cljs.core.Keyword(null,"still-active?","still-active?",-202183977),(function (){
return frontend.persist_db.remote_session_live_QMARK_(repo,session_id);
}),new cljs.core.Keyword(null,"on-invoke-success","on-invoke-success",-871724185),(function (_method,_args,_result){
return frontend.persist_db.reset_active_request_failures_BANG_(repo,session_id);
}),new cljs.core.Keyword(null,"on-invoke-failure","on-invoke-failure",-1771758228),(function (_method,_args,error){
return frontend.persist_db.record_active_request_failure_BANG_(repo,session_id,error);
}),new cljs.core.Keyword(null,"on-event-error","on-event-error",635264990),(function (error){
var failure_count = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(event_stream_failures,cljs.core.inc);
if(frontend.persist_db.event_stream_error_loggable_QMARK_(failure_count)){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"db-worker-event-stream-error","db-worker-event-stream-error",-482394288),new cljs.core.Keyword(null,"repo","repo",-1999060679),repo,new cljs.core.Keyword(null,"failures","failures",-912916356),failure_count,new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"line","line",212345235),398], null)),null);
} else {
}
} else {
}

return frontend.persist_db.record_active_request_failure_BANG_(repo,session_id,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("db-worker event stream unavailable",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"db-worker-unavailable","db-worker-unavailable",1175358627),new cljs.core.Keyword(null,"event-stream?","event-stream?",497215406),true,new cljs.core.Keyword(null,"cause","cause",231901252),error], null)));
})], 0)))),(function (client){
return promesa.protocols._promise((cljs.core.truth_((function (){var or__5142__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(epoch,cljs.core.deref(frontend.persist_db._STAR_remote_ensure_epoch));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = only_if_current_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return (!(current_for_repo_QMARK_()));
} else {
return and__5140__auto__;
}
}
})())?(function (){
if(frontend.persist_db.pending_remote_session_QMARK_(repo,session_id)){
cljs.core.reset_BANG_(frontend.persist_db._STAR_pending_remote_session,null);
} else {
}

return frontend.persist_db._LT_discard_stale_started_client_BANG_(repo,client);
})()
:frontend.persist_db.install_remote_runtime_BANG_(repo,client,session_id)));
}));
}));
}))));
}));
}));

}
}
}
});
frontend.persist_db._LT_ensure_remote_BANG_ = (function frontend$persist_db$_LT_ensure_remote_BANG_(var_args){
var G__67257 = arguments.length;
switch (G__67257) {
case 1:
return frontend.persist_db._LT_ensure_remote_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.persist_db._LT_ensure_remote_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.persist_db._LT_ensure_remote_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return frontend.persist_db._LT_ensure_remote_BANG_.cljs$core$IFn$_invoke$arity$2(repo,null);
}));

(frontend.persist_db._LT_ensure_remote_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (repo,opts){
return frontend.persist_db._LT_enqueue_ensure_remote_BANG_((function (){
return frontend.persist_db._LT_ensure_remote_impl_BANG_(repo,opts);
}));
}));

(frontend.persist_db._LT_ensure_remote_BANG_.cljs$lang$maxFixedArity = 2);

frontend.persist_db._LT_start_runtime_BANG_ = (function frontend$persist_db$_LT_start_runtime_BANG_(){
if(cljs.core.truth_(frontend.persist_db.electron_runtime_QMARK_())){
var temp__5823__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5823__auto__)){
var repo = temp__5823__auto__;
return frontend.persist_db._LT_ensure_remote_BANG_.cljs$core$IFn$_invoke$arity$1(repo);
} else {
return promesa.core.resolved(null);
}
} else {
return frontend.persist_db.browser.start_db_worker_BANG_();

}
});
/**
 * Get the actual implementation of PersistentDB
 */
frontend.persist_db.get_impl = (function frontend$persist_db$get_impl(){
return frontend.persist_db.opfs_db;
});
frontend.persist_db._LT_list_db = (function frontend$persist_db$_LT_list_db(){
if(cljs.core.truth_(frontend.persist_db.electron_runtime_QMARK_())){
var temp__5823__auto__ = (function (){var or__5142__auto__ = cljs.core.deref(frontend.persist_db.remote_repo);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_current_repo();
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var repo = temp__5823__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_ensure_remote_BANG_.cljs$core$IFn$_invoke$arity$1(repo)),(function (client){
return promesa.protocols._promise(frontend.persist_db.protocol._LT_list_db(client));
}));
}));
} else {
return promesa.core.resolved(cljs.core.PersistentVector.EMPTY);
}
} else {
return frontend.persist_db.get_impl().frontend$persist_db$protocol$PersistentDB$_LT_list_db$arity$1(null);
}
});
frontend.persist_db._LT_unsafe_delete = (function frontend$persist_db$_LT_unsafe_delete(repo){
if(cljs.core.truth_(repo)){
if(cljs.core.truth_(frontend.persist_db.electron_runtime_QMARK_())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_ensure_remote_BANG_.cljs$core$IFn$_invoke$arity$1(repo)),(function (client){
return promesa.protocols._promise(frontend.persist_db.protocol._LT_unsafe_delete(client,repo));
}));
}));
} else {
return frontend.persist_db.get_impl().frontend$persist_db$protocol$PersistentDB$_LT_unsafe_delete$arity$2(null,repo);
}
} else {
return null;
}
});
frontend.persist_db._LT_close_db = (function frontend$persist_db$_LT_close_db(repo){
if(cljs.core.truth_(repo)){
if(cljs.core.truth_(frontend.persist_db.electron_runtime_QMARK_())){
if(frontend.persist_db.same_remote_repo_QMARK_(repo,cljs.core.deref(frontend.persist_db.remote_repo))){
var temp__5823__auto__ = cljs.core.deref(frontend.persist_db.remote_db);
if(cljs.core.truth_(temp__5823__auto__)){
var remote_client = temp__5823__auto__;
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.persist_db.remote.invoke_BANG_(new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(remote_client),"thread-api/close-db",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo], null)),(function (_){
return null;
}))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_stop_remote_if_current_BANG_(repo)),(function (___$1){
return promesa.protocols._promise(null);
}));
}));
}));
} else {
return promesa.core.resolved(null);
}
} else {
return promesa.core.resolved(null);
}
} else {
return frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","close-db","thread-api/close-db",632880978),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0));
}
} else {
return null;
}
});
frontend.persist_db._LT_export_db = (function frontend$persist_db$_LT_export_db(repo,opts){
if(cljs.core.truth_(repo)){
return frontend.persist_db.get_impl().frontend$persist_db$protocol$PersistentDB$_LT_export_db$arity$3(null,repo,opts);
} else {
return null;
}
});
frontend.persist_db._LT_import_db = (function frontend$persist_db$_LT_import_db(repo,data){
if(cljs.core.truth_(repo)){
if(cljs.core.truth_(frontend.persist_db.electron_runtime_QMARK_())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["createGraph",repo], 0))),(function (generation){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_ensure_remote_BANG_.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"generation","generation",-2132542044),generation], null))),(function (client){
return promesa.protocols._promise(frontend.persist_db.protocol._LT_import_db(client,repo,data));
}));
}));
}));
} else {
return frontend.persist_db.get_impl().frontend$persist_db$protocol$PersistentDB$_LT_import_db$arity$3(null,repo,data);
}
} else {
return null;
}
});
frontend.persist_db._LT_open_and_fetch_schema = (function frontend$persist_db$_LT_open_and_fetch_schema(var_args){
var G__67259 = arguments.length;
switch (G__67259) {
case 1:
return frontend.persist_db._LT_open_and_fetch_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.persist_db._LT_open_and_fetch_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.persist_db._LT_open_and_fetch_schema.cljs$core$IFn$_invoke$arity$1 = (function (repo){
return frontend.persist_db._LT_open_and_fetch_schema.cljs$core$IFn$_invoke$arity$2(repo,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.persist_db._LT_open_and_fetch_schema.cljs$core$IFn$_invoke$arity$2 = (function (repo,opts){
if(cljs.core.truth_(repo)){
if(cljs.core.truth_(frontend.persist_db.electron_runtime_QMARK_())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword(null,"sync-download-graph?","sync-download-graph?",276560941).cljs$core$IFn$_invoke$arity$1(opts))?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["createGraph",repo], 0)):null)),(function (generation){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db._LT_ensure_remote_BANG_.cljs$core$IFn$_invoke$arity$2(repo,(cljs.core.truth_(generation)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"generation","generation",-2132542044),generation], null):null))),(function (client){
return promesa.protocols._promise(frontend.persist_db.protocol._LT_open_and_fetch_schema(client,repo,opts));
}));
}));
}));
} else {
return frontend.persist_db.get_impl().frontend$persist_db$protocol$PersistentDB$_LT_open_and_fetch_schema$arity$3(null,repo,opts);
}
} else {
return null;
}
}));

(frontend.persist_db._LT_open_and_fetch_schema.cljs$lang$maxFixedArity = 2);

frontend.persist_db._LT_new = (function frontend$persist_db$_LT_new(repo,opts){
if((cljs.core.count(repo) <= (128))){
} else {
throw (new Error("Assert failed: (<= (count repo) 128)"));
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.persist_db.electron_runtime_QMARK_())?electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["createGraph",repo], 0)):null)),(function (generation){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(frontend.persist_db.electron_runtime_QMARK_())?frontend.persist_db._LT_ensure_remote_BANG_.cljs$core$IFn$_invoke$arity$2(repo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"generation","generation",-2132542044),generation], null)):promesa.core.resolved(frontend.persist_db.get_impl()))),(function (impl){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db.protocol._LT_new(impl,repo,opts)),(function (_){
return promesa.protocols._promise(frontend.persist_db._LT_export_db(repo,cljs.core.PersistentArrayMap.EMPTY));
}));
}));
}));
}));
});
frontend.persist_db.export_current_graph_BANG_ = (function frontend$persist_db$export_current_graph_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___67274 = arguments.length;
var i__5877__auto___67275 = (0);
while(true){
if((i__5877__auto___67275 < len__5876__auto___67274)){
args__5882__auto__.push((arguments[i__5877__auto___67275]));

var G__67276 = (i__5877__auto___67275 + (1));
i__5877__auto___67275 = G__67276;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.persist_db.export_current_graph_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.persist_db.export_current_graph_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__67261){
var map__67262 = p__67261;
var map__67262__$1 = cljs.core.__destructure_map(map__67262);
var succ_notification_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67262__$1,new cljs.core.Keyword(null,"succ-notification?","succ-notification?",-1467312225));
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var temp__5825__auto__ = frontend.state.get_current_repo();
if(cljs.core.truth_(temp__5825__auto__)){
var repo = temp__5825__auto__;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"backup-db","backup-db",-1771250601),new cljs.core.Keyword(null,"graph","graph",1558099509),repo,new cljs.core.Keyword(null,"line","line",212345235),507], null)),null);
} else {
}

return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"db-export","db-export",-1136086824),repo,true], 0))),(function (___27434__auto__){
return promesa.protocols._promise((cljs.core.truth_(succ_notification_QMARK_)?frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),"DB backup successfully.",new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906)], null)], null)):null));
}));
})),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"db-backup-failed","db-backup-failed",-726120306),new cljs.core.Keyword(null,"graph","graph",1558099509),repo,new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"line","line",212345235),516], null)),null);
} else {
}

return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","show","notification/show",1864741804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.getMessage())),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"clear?","clear?",1363344639),false], null)], null));
}));
} else {
return null;
}
} else {
return null;
}
}));

(frontend.persist_db.export_current_graph_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.persist_db.export_current_graph_BANG_.cljs$lang$applyTo = (function (seq67260){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67260));
}));


//# sourceMappingURL=frontend.persist_db.js.map
