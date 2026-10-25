goog.provide('logseq.graph_parser.import_profile');
logseq.graph_parser.import_profile.now_ms = (function logseq$graph_parser$import_profile$now_ms(){
return Date.now();
});
logseq.graph_parser.import_profile.elapsed_ms = (function logseq$graph_parser$import_profile$elapsed_ms(start_ms){
return (logseq.graph_parser.import_profile.now_ms() - start_ms);
});
logseq.graph_parser.import_profile.log_phase_BANG_ = (function logseq$graph_parser$import_profile$log_phase_BANG_(var_args){
var G__83241 = arguments.length;
switch (G__83241) {
case 3:
return logseq.graph_parser.import_profile.log_phase_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return logseq.graph_parser.import_profile.log_phase_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.graph_parser.import_profile.log_phase_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (log_fn,phase,start_ms){
return logseq.graph_parser.import_profile.log_phase_BANG_.cljs$core$IFn$_invoke$arity$4(log_fn,phase,start_ms,null);
}));

(logseq.graph_parser.import_profile.log_phase_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (log_fn,phase,start_ms,extra){
if(cljs.core.truth_(log_fn)){
var G__83243 = new cljs.core.Keyword(null,"import-profile","import-profile",-871143301);
var G__83244 = (function (){var G__83245 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"phase","phase",575722892),phase,new cljs.core.Keyword(null,"ms","ms",-1152709733),logseq.graph_parser.import_profile.elapsed_ms(start_ms)], null);
if(cljs.core.map_QMARK_(extra)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__83245,extra], 0));
} else {
return G__83245;
}
})();
return (log_fn.cljs$core$IFn$_invoke$arity$2 ? log_fn.cljs$core$IFn$_invoke$arity$2(G__83243,G__83244) : log_fn.call(null,G__83243,G__83244));
} else {
return null;
}
}));

(logseq.graph_parser.import_profile.log_phase_BANG_.cljs$lang$maxFixedArity = 4);

logseq.graph_parser.import_profile.new_watchdog = (function logseq$graph_parser$import_profile$new_watchdog(p__83246){
var map__83247 = p__83246;
var map__83247__$1 = cljs.core.__destructure_map(map__83247);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83247__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(30000));
var heartbeat_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83247__$1,new cljs.core.Keyword(null,"heartbeat-ms","heartbeat-ms",-1083597683),(5000));
var log_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83247__$1,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282),cljs.core.prn);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),timeout_ms,new cljs.core.Keyword(null,"heartbeat-ms","heartbeat-ms",-1083597683),heartbeat_ms,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282),log_fn,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"start-ms","start-ms",-152764908),logseq.graph_parser.import_profile.now_ms(),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"phase","phase",575722892),null,new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"file-idx","file-idx",2008975387),null,new cljs.core.Keyword(null,"total-files","total-files",-833744967),null], null))], null);
});
logseq.graph_parser.import_profile.snapshot = (function logseq$graph_parser$import_profile$snapshot(p__83248){
var map__83249 = p__83248;
var map__83249__$1 = cljs.core.__destructure_map(map__83249);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83249__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__83250 = cljs.core.deref(state);
var map__83250__$1 = cljs.core.__destructure_map(map__83250);
var start_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83250__$1,new cljs.core.Keyword(null,"start-ms","start-ms",-152764908));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83250__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83250__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83250__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var file_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83250__$1,new cljs.core.Keyword(null,"file-idx","file-idx",2008975387));
var total_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83250__$1,new cljs.core.Keyword(null,"total-files","total-files",-833744967));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"elapsed-ms","elapsed-ms",436005978),logseq.graph_parser.import_profile.elapsed_ms(start_ms),new cljs.core.Keyword(null,"step","step",1288888124),(function (){var or__5142__auto__ = step;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
}
})(),new cljs.core.Keyword(null,"phase","phase",575722892),phase,new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"file-idx","file-idx",2008975387),file_idx,new cljs.core.Keyword(null,"total-files","total-files",-833744967),total_files], null);
});
logseq.graph_parser.import_profile.update_watchdog_BANG_ = (function logseq$graph_parser$import_profile$update_watchdog_BANG_(p__83251,m){
var map__83252 = p__83251;
var map__83252__$1 = cljs.core.__destructure_map(map__83252);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83252__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,m);
});
logseq.graph_parser.import_profile.set_import_progress_BANG_ = (function logseq$graph_parser$import_profile$set_import_progress_BANG_(options,m){
var temp__5825__auto__ = new cljs.core.Keyword(null,"import-watchdog","import-watchdog",1052593713).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5825__auto__)){
var watchdog = temp__5825__auto__;
return logseq.graph_parser.import_profile.update_watchdog_BANG_(watchdog,m);
} else {
return null;
}
});
logseq.graph_parser.import_profile.log_watchdog_event_BANG_ = (function logseq$graph_parser$import_profile$log_watchdog_event_BANG_(p__83253,event,extra){
var map__83254 = p__83253;
var map__83254__$1 = cljs.core.__destructure_map(map__83254);
var watchdog = map__83254__$1;
var log_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83254__$1,new cljs.core.Keyword(null,"log-fn","log-fn",-2003241282));
if(cljs.core.truth_(log_fn)){
var G__83257 = event;
var G__83258 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.graph_parser.import_profile.snapshot(watchdog),extra], 0));
return (log_fn.cljs$core$IFn$_invoke$arity$2 ? log_fn.cljs$core$IFn$_invoke$arity$2(G__83257,G__83258) : log_fn.call(null,G__83257,G__83258));
} else {
return null;
}
});
logseq.graph_parser.import_profile.start_watchdog_BANG_ = (function logseq$graph_parser$import_profile$start_watchdog_BANG_(p__83259){
var map__83262 = p__83259;
var map__83262__$1 = cljs.core.__destructure_map(map__83262);
var watchdog = map__83262__$1;
var heartbeat_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83262__$1,new cljs.core.Keyword(null,"heartbeat-ms","heartbeat-ms",-1083597683));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83262__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.truth_(new cljs.core.Keyword(null,"timer-id","timer-id",1622357927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return null;
} else {
var timer_id = setInterval((function (){
return logseq.graph_parser.import_profile.log_watchdog_event_BANG_(watchdog,new cljs.core.Keyword(null,"import-heartbeat","import-heartbeat",426419396),null);
}),heartbeat_ms);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"timer-id","timer-id",1622357927),timer_id);
}
});
logseq.graph_parser.import_profile.stop_watchdog_BANG_ = (function logseq$graph_parser$import_profile$stop_watchdog_BANG_(p__83263){
var map__83264 = p__83263;
var map__83264__$1 = cljs.core.__destructure_map(map__83264);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83264__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var temp__5825__auto__ = new cljs.core.Keyword(null,"timer-id","timer-id",1622357927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(temp__5825__auto__)){
var timer_id = temp__5825__auto__;
clearInterval(timer_id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,new cljs.core.Keyword(null,"timer-id","timer-id",1622357927));
} else {
return null;
}
});
logseq.graph_parser.import_profile.with_import_watchdog = (function logseq$graph_parser$import_profile$with_import_watchdog(var_args){
var G__83266 = arguments.length;
switch (G__83266) {
case 2:
return logseq.graph_parser.import_profile.with_import_watchdog.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return logseq.graph_parser.import_profile.with_import_watchdog.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(logseq.graph_parser.import_profile.with_import_watchdog.cljs$core$IFn$_invoke$arity$2 = (function (promise,watchdog){
return logseq.graph_parser.import_profile.with_import_watchdog.cljs$core$IFn$_invoke$arity$3(promise,watchdog,null);
}));

(logseq.graph_parser.import_profile.with_import_watchdog.cljs$core$IFn$_invoke$arity$3 = (function (promise,watchdog,on_timeout){
if(cljs.core.truth_(watchdog)){
logseq.graph_parser.import_profile.start_watchdog_BANG_(watchdog);

return promesa.core.finally$.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.timeout.cljs$core$IFn$_invoke$arity$2(promise,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(watchdog)),(function (e){
logseq.graph_parser.import_profile.log_watchdog_event_BANG_(watchdog,new cljs.core.Keyword(null,"import-timeout","import-timeout",1058740297),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),e.message,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(watchdog)], null));

if(cljs.core.truth_(on_timeout)){
(on_timeout.cljs$core$IFn$_invoke$arity$1 ? on_timeout.cljs$core$IFn$_invoke$arity$1(watchdog) : on_timeout.call(null,watchdog));
} else {
}

return promesa.core.rejected(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3((""+"Import timed out after "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(watchdog))+"ms at step="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.import_profile.snapshot(watchdog)))+" phase="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.import_profile.snapshot(watchdog));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "nil";
}
})())+" file="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(logseq.graph_parser.import_profile.snapshot(watchdog));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "nil";
}
})())),logseq.graph_parser.import_profile.snapshot(watchdog),e));
})),(function (){
return logseq.graph_parser.import_profile.stop_watchdog_BANG_(watchdog);
}));
} else {
return promise;
}
}));

(logseq.graph_parser.import_profile.with_import_watchdog.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=logseq.graph_parser.import_profile.js.map
