goog.provide('frontend.handler.db_based.rtc_background_tasks');
frontend.handler.db_based.rtc_background_tasks.add_watch_when_not_publishing_BANG_ = (function frontend$handler$db_based$rtc_background_tasks$add_watch_when_not_publishing_BANG_(atom_SINGLEQUOTE_,key_SINGLEQUOTE_,f){
if(frontend.config.publishing_QMARK_){
return null;
} else {
cljs.core.remove_watch(atom_SINGLEQUOTE_,key_SINGLEQUOTE_);

cljs.core.add_watch(atom_SINGLEQUOTE_,key_SINGLEQUOTE_,(function (_,___$1,___$2,value){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value));
}));

var temp__5829__auto__ = cljs.core.deref(atom_SINGLEQUOTE_);
if((temp__5829__auto__ == null)){
return null;
} else {
var value = temp__5829__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value));
}
}
});
frontend.handler.db_based.rtc_background_tasks.add_watch_when_not_publishing_BANG_(frontend.handler.db_based.rtc_flows.rtc_try_restart,new cljs.core.Keyword("frontend.handler.db-based.rtc-background-tasks","restart-rtc-to-reconnect","frontend.handler.db-based.rtc-background-tasks/restart-rtc-to-reconnect",1855716871),(function (p__96054){
var map__96057 = p__96054;
var map__96057__$1 = cljs.core.__destructure_map(map__96057);
var graph_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96057__$1,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96057__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
if(cljs.core.truth_((function (){var and__5140__auto__ = graph_uuid;
if(cljs.core.truth_(and__5140__auto__)){
return t;
} else {
return and__5140__auto__;
}
})())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state.get_current_repo()),(function (repo){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","get-rtc-graph-uuid","thread-api/get-rtc-graph-uuid",-249168913),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repo], 0))),(function (current_graph_uuid){
return promesa.protocols._promise(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph_uuid,(function (){var G__96073 = current_graph_uuid;
if((G__96073 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__96073));
}
})())) && (((5000) > (logseq.common.util.time_ms() - t)))))?(function (){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.db-based.rtc-background-tasks",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"trying-to-restart-rtc","trying-to-restart-rtc",-1476604561),graph_uuid,new cljs.core.Keyword(null,"t","t",-1397832519),cljs_time.core.now(),new cljs.core.Keyword(null,"line","line",212345235),29], null)),null);
} else {
}

return frontend.handler.db_based.sync._LT_rtc_start_BANG_.cljs$core$IFn$_invoke$arity$variadic(repo,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stop-before-start?","stop-before-start?",1190543403),false], 0));
})()
:null));
}));
}));
}));
} else {
return null;
}
}));
frontend.handler.db_based.rtc_background_tasks.add_watch_when_not_publishing_BANG_(frontend.handler.db_based.rtc_flows.logout,new cljs.core.Keyword("frontend.handler.db-based.rtc-background-tasks","stop-rtc-if-needed","frontend.handler.db-based.rtc-background-tasks/stop-rtc-if-needed",520711379),(function (event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logout","logout",1418564329),event)){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.db-based.rtc-background-tasks",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"try-to-stop-rtc-if-needed","try-to-stop-rtc-if-needed",-2093831810),new cljs.core.Keyword(null,"logout","logout",1418564329),new cljs.core.Keyword(null,"line","line",212345235),37], null)),null);
} else {
}

return frontend.handler.db_based.sync._LT_rtc_stop_BANG_();
} else {
return null;
}
}));
frontend.handler.db_based.rtc_background_tasks.add_watch_when_not_publishing_BANG_(frontend.handler.db_based.rtc_flows.trigger_start_rtc,new cljs.core.Keyword("frontend.handler.db-based.rtc-background-tasks","auto-start-rtc-if-possible","frontend.handler.db-based.rtc-background-tasks/auto-start-rtc-if-possible",-1681669003),(function (p__96092){
var vec__96093 = p__96092;
var start_reason = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96093,(0),null);
var repo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96093,(1),null);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.handler.db-based.rtc-background-tasks",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"try-to-start-rtc","try-to-start-rtc",-96997866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_reason,repo], null),new cljs.core.Keyword(null,"line","line",212345235),44], null)),null);
} else {
}

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27444__auto__){
return promesa.protocols._promise(frontend.handler.db_based.sync._LT_rtc_start_BANG_((function (){var or__5142__auto__ = repo;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_current_repo();
}
})()));
}));
}));

//# sourceMappingURL=frontend.handler.db_based.rtc_background_tasks.js.map
