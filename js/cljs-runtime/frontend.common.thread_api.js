goog.provide('frontend.common.thread_api');
frontend.common.thread_api._STAR_thread_apis = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
frontend.common.thread_api._STAR_profile = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
if((typeof frontend !== 'undefined') && (typeof frontend.common !== 'undefined') && (typeof frontend.common.thread_api !== 'undefined') && (typeof frontend.common.thread_api._STAR_worker_thread_api_call_id !== 'undefined')){
} else {
frontend.common.thread_api._STAR_worker_thread_api_call_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
frontend.common.thread_api.log_worker_thread_api_call_BANG_ = (function frontend$common$thread_api$log_worker_thread_api_call_BANG_(data){
if(cljs.core.truth_((function (){var and__5140__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5140__auto__)){
return (new cljs.core.Keyword(null,"total-ms","total-ms",889647655).cljs$core$IFn$_invoke$arity$1(data) > (10));
} else {
return and__5140__auto__;
}
})())){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.common.thread-api",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db-worker","thread-api-handler","db-worker/thread-api-handler",1188556667),data,new cljs.core.Keyword(null,"line","line",212345235),33], null)),null);
} else {
return null;
}
} else {
return null;
}
});
frontend.common.thread_api.write_transit_str_with_catch = (function frontend$common$thread_api$write_transit_str_with_catch(v,qualified_kw_str){
try{return logseq.db.write_transit_str(v);
}catch (e57207){var e = e57207;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.common.thread-api",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"thread-api-write-transit-failed","thread-api-write-transit-failed",-1624772669),qualified_kw_str,new cljs.core.Keyword(null,"line","line",212345235),41], null)),null);
} else {
}

throw e;
}});
/**
 * Return a promise whose value is a transit string.
 */
frontend.common.thread_api.remote_function = (function frontend$common$thread_api$remote_function(qualified_kw_str,args_transit_str){
var qkw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(qualified_kw_str);
var call_id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.common.thread_api._STAR_worker_thread_api_call_id,cljs.core.inc);
var started_at = performance.now();
frontend.common.thread_api._STAR_profile.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$3(frontend.common.thread_api._STAR_profile.cljs$core$IDeref$_deref$arity$1(null),qkw,cljs.core.inc));

var temp__5823__auto__ = (function (){var fexpr__57210 = cljs.core.deref(frontend.common.thread_api._STAR_thread_apis);
return (fexpr__57210.cljs$core$IFn$_invoke$arity$1 ? fexpr__57210.cljs$core$IFn$_invoke$arity$1(qkw) : fexpr__57210.call(null,qkw));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
var args = logseq.db.read_transit_str(args_transit_str);
var handler_started_at = performance.now();
try{var result_promise = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(result_promise),(function (result){
return promesa.protocols._mcat(promesa.protocols._promise(performance.now()),(function (handler_completed_at){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.thread_api.write_transit_str_with_catch(result,qualified_kw_str)),(function (result_transit_str){
return promesa.protocols._mcat(promesa.protocols._promise(performance.now()),(function (completed_at){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.common.thread_api.log_worker_thread_api_call_BANG_(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"worker-call-id","worker-call-id",1340832),call_id,new cljs.core.Keyword(null,"api","api",-899839580),qkw,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"deserialize-ms","deserialize-ms",-610080108),(handler_started_at - started_at),new cljs.core.Keyword(null,"handler-ms","handler-ms",-769006363),(handler_completed_at - handler_started_at),new cljs.core.Keyword(null,"serialize-ms","serialize-ms",1274465531),(completed_at - handler_completed_at),new cljs.core.Keyword(null,"total-ms","total-ms",889647655),(completed_at - started_at)], null))),(function (___27434__auto__){
return promesa.protocols._promise(result_transit_str);
}));
}));
}));
}));
}));
})),(function (error){
var handler_completed_at = performance.now();
var error_transit_str = frontend.common.thread_api.write_transit_str_with_catch(error,qualified_kw_str);
var completed_at = performance.now();
frontend.common.thread_api.log_worker_thread_api_call_BANG_(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"worker-call-id","worker-call-id",1340832),call_id,new cljs.core.Keyword(null,"api","api",-899839580),qkw,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"deserialize-ms","deserialize-ms",-610080108),(handler_started_at - started_at),new cljs.core.Keyword(null,"handler-ms","handler-ms",-769006363),(handler_completed_at - handler_started_at),new cljs.core.Keyword(null,"serialize-ms","serialize-ms",1274465531),(completed_at - handler_completed_at),new cljs.core.Keyword(null,"total-ms","total-ms",889647655),(completed_at - started_at)], null));

return error_transit_str;
}));
}catch (e57211){var error = e57211;
frontend.common.thread_api.log_worker_thread_api_call_BANG_(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"worker-call-id","worker-call-id",1340832),call_id,new cljs.core.Keyword(null,"api","api",-899839580),qkw,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"deserialize-ms","deserialize-ms",-610080108),(handler_started_at - started_at),new cljs.core.Keyword(null,"handler-ms","handler-ms",-769006363),(performance.now() - handler_started_at),new cljs.core.Keyword(null,"serialize-ms","serialize-ms",1274465531),(0),new cljs.core.Keyword(null,"total-ms","total-ms",889647655),(performance.now() - started_at)], null));

throw error;
}} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"not found thread-api: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(qualified_kw_str)),cljs.core.PersistentArrayMap.EMPTY);
}
});

//# sourceMappingURL=frontend.common.thread_api.js.map
