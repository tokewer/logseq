goog.provide('frontend.persist_db.remote');
frontend.persist_db.remote.normalize_base_url = (function frontend$persist_db$remote$normalize_base_url(base_url){
return clojure.string.replace((function (){var or__5142__auto__ = base_url;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),/\/$/,"");
});
frontend.persist_db.remote.invoke_url = (function frontend$persist_db$remote$invoke_url(base_url){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.persist_db.remote.normalize_base_url(base_url))+"/v1/invoke");
});
frontend.persist_db.remote.import_db_binary_url = (function frontend$persist_db$remote$import_db_binary_url(base_url,repo){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.persist_db.remote.normalize_base_url(base_url))+"/v1/import-db-binary?repo="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(repo)));
});
frontend.persist_db.remote.events_url = (function frontend$persist_db$remote$events_url(base_url){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.persist_db.remote.normalize_base_url(base_url))+"/v1/events");
});
frontend.persist_db.remote.base_headers = (function frontend$persist_db$remote$base_headers(auth_token){
var G__66730 = new cljs.core.PersistentArrayMap(null, 2, ["Content-Type","application/json","Accept","application/json"], null);
if(cljs.core.seq(auth_token)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66730,"Authorization",(""+"Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(auth_token)));
} else {
return G__66730;
}
});
frontend.persist_db.remote.binary_headers = (function frontend$persist_db$remote$binary_headers(auth_token){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frontend.persist_db.remote.base_headers(auth_token),"Content-Type","application/octet-stream");
});
frontend.persist_db.remote.parse_response_body = (function frontend$persist_db$remote$parse_response_body(body){
if(typeof body === 'string'){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(body),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
} else {
if(cljs.core.map_QMARK_(body)){
return body;
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});
frontend.persist_db.remote.normalize_code = (function frontend$persist_db$remote$normalize_code(code){
if((code instanceof cljs.core.Keyword)){
return code;
} else {
if(typeof code === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(code);
} else {
return new cljs.core.Keyword(null,"invoke-failed","invoke-failed",-1144628058);

}
}
});
frontend.persist_db.remote.decode_invoke_result = (function frontend$persist_db$remote$decode_invoke_result(result_transit){
if(typeof result_transit === 'string'){
return logseq.db.read_transit_str(result_transit);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("db-worker invoke returned no transit result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"invoke-result-missing","invoke-result-missing",1349461508)], null));
}
});
frontend.persist_db.remote.decode_event = (function frontend$persist_db$remote$decode_event(p__66740){
var map__66741 = p__66740;
var map__66741__$1 = cljs.core.__destructure_map(map__66741);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66741__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66741__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var decoded = (((!((payload == null))))?(function (){try{return logseq.db.read_transit_str(payload);
}catch (e66742){var _ = e66742;
return payload;
}})():null);
if(((cljs.core.vector_QMARK_(decoded)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(decoded))) && ((cljs.core.first(decoded) instanceof cljs.core.Keyword)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(decoded),cljs.core.second(decoded)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(type)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type):null),decoded], null);
}
});
frontend.persist_db.remote.data_line = (function frontend$persist_db$remote$data_line(event_text){
return cljs.core.some((function (line){
if(clojure.string.starts_with_QMARK_(line,"data: ")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,(6));
} else {
return null;
}
}),clojure.string.split_lines(event_text));
});
frontend.persist_db.remote.create_client = (function frontend$persist_db$remote$create_client(p__66747){
var map__66748 = p__66747;
var map__66748__$1 = cljs.core.__destructure_map(map__66748);
var opts = map__66748__$1;
var fetch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66748__$1,new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383));
var open_sse_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66748__$1,new cljs.core.Keyword(null,"open-sse-fn","open-sse-fn",1420905373));
var schedule_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66748__$1,new cljs.core.Keyword(null,"schedule-fn","schedule-fn",1204822075));
var reconnect_delay_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66748__$1,new cljs.core.Keyword(null,"reconnect-delay-ms","reconnect-delay-ms",-1611905));
var default_fetch_fn = (function (p__66749){
var map__66750 = p__66749;
var map__66750__$1 = cljs.core.__destructure_map(map__66750);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66750__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66750__$1,new cljs.core.Keyword(null,"url","url",276297046));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66750__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66750__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(fetch(url,cljs.core.clj__GT_js((function (){var G__66751 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (){var or__5142__auto__ = headers;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null);
if(cljs.core.truth_(body)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66751,new cljs.core.Keyword(null,"body","body",-2049205669),body);
} else {
return G__66751;
}
})()))),(function (res){
return promesa.protocols._mcat(promesa.protocols._promise(res.text()),(function (text){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),res.status,new cljs.core.Keyword(null,"body","body",-2049205669),text], null));
}));
}));
}));
});
var default_open_sse_fn = (function (p__66756){
var map__66757 = p__66756;
var map__66757__$1 = cljs.core.__destructure_map(map__66757);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66757__$1,new cljs.core.Keyword(null,"url","url",276297046));
var on_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66757__$1,new cljs.core.Keyword(null,"on-message","on-message",1662987808));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66757__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if((typeof EventSource !== 'undefined')){
var es = (new EventSource(url));
(es.onmessage = (function (event){
if(cljs.core.truth_(on_message)){
var G__66758 = (""+"data: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(event.data)+"\n\n");
return (on_message.cljs$core$IFn$_invoke$arity$1 ? on_message.cljs$core$IFn$_invoke$arity$1(G__66758) : on_message.call(null,G__66758));
} else {
return null;
}
}));

(es.onerror = (function (event){
if(cljs.core.truth_(on_error)){
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(event) : on_error.call(null,event));
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",-2079310498),(function (){
(es.onmessage = null);

(es.onerror = null);

return es.close();
})], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",-2079310498),(function (){
return null;
})], null);
}
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),(function (){var or__5142__auto__ = fetch_fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default_fetch_fn;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"open-sse-fn","open-sse-fn",1420905373),(function (){var or__5142__auto__ = open_sse_fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default_open_sse_fn;
}
})(),new cljs.core.Keyword(null,"schedule-fn","schedule-fn",1204822075),(function (){var or__5142__auto__ = schedule_fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (function (f,delay_ms){
return setTimeout(f,delay_ms);
});
}
})(),new cljs.core.Keyword(null,"reconnect-delay-ms","reconnect-delay-ms",-1611905),(function (){var or__5142__auto__ = reconnect_delay_ms;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1000);
}
})()], 0));
});
frontend.persist_db.remote.invoke_BANG_ = (function frontend$persist_db$remote$invoke_BANG_(p__66761,method,args){
var map__66762 = p__66761;
var map__66762__$1 = cljs.core.__destructure_map(map__66762);
var base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66762__$1,new cljs.core.Keyword(null,"base-url","base-url",9540398));
var auth_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66762__$1,new cljs.core.Keyword(null,"auth-token","auth-token",30990976));
var fetch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66762__$1,new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383));
var on_invoke_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66762__$1,new cljs.core.Keyword(null,"on-invoke-success","on-invoke-success",-871724185));
var on_invoke_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66762__$1,new cljs.core.Keyword(null,"on-invoke-failure","on-invoke-failure",-1771758228));
var payload = JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"argsTransit","argsTransit",2024593768),logseq.db.write_transit_str(args)], null)));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__66766 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"url","url",276297046),frontend.persist_db.remote.invoke_url(base_url),new cljs.core.Keyword(null,"headers","headers",-835030129),frontend.persist_db.remote.base_headers(auth_token),new cljs.core.Keyword(null,"body","body",-2049205669),payload], null);
return (fetch_fn.cljs$core$IFn$_invoke$arity$1 ? fetch_fn.cljs$core$IFn$_invoke$arity$1(G__66766) : fetch_fn.call(null,G__66766));
})()),(function (p__66767){
var map__66768 = p__66767;
var map__66768__$1 = cljs.core.__destructure_map(map__66768);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66768__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66768__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db.remote.parse_response_body(body)),(function (parsed){
return promesa.protocols._promise(((((((200) <= status)) && ((status <= (299)))))?((new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(parsed) === false)?(function (){var error = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(parsed);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "db-worker invoke failed";
}
})(),(function (){var G__66771 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"code","code",1586293142),frontend.persist_db.remote.normalize_code(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error))], null);
if(cljs.core.truth_(error)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66771,new cljs.core.Keyword(null,"error","error",-978969032),error);
} else {
return G__66771;
}
})());
})():(function (){var result = frontend.persist_db.remote.decode_invoke_result(new cljs.core.Keyword(null,"resultTransit","resultTransit",994720710).cljs$core$IFn$_invoke$arity$1(parsed));
if(cljs.core.truth_(on_invoke_success)){
(on_invoke_success.cljs$core$IFn$_invoke$arity$3 ? on_invoke_success.cljs$core$IFn$_invoke$arity$3(method,args,result) : on_invoke_success.call(null,method,args,result));
} else {
}

return result;
})()):(function (){var error = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(parsed);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "db-worker invoke failed";
}
})(),(function (){var G__66772 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"code","code",1586293142),frontend.persist_db.remote.normalize_code(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error))], null);
if(cljs.core.truth_(error)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66772,new cljs.core.Keyword(null,"error","error",-978969032),error);
} else {
return G__66772;
}
})());
})()));
}));
}));
})),(function (error){
if(cljs.core.truth_(on_invoke_failure)){
(on_invoke_failure.cljs$core$IFn$_invoke$arity$3 ? on_invoke_failure.cljs$core$IFn$_invoke$arity$3(method,args,error) : on_invoke_failure.call(null,method,args,error));
} else {
}

throw error;
}));
});
frontend.persist_db.remote.import_db_binary_BANG_ = (function frontend$persist_db$remote$import_db_binary_BANG_(p__66774,repo,data){
var map__66775 = p__66774;
var map__66775__$1 = cljs.core.__destructure_map(map__66775);
var base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66775__$1,new cljs.core.Keyword(null,"base-url","base-url",9540398));
var auth_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66775__$1,new cljs.core.Keyword(null,"auth-token","auth-token",30990976));
var fetch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66775__$1,new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383));
var on_invoke_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66775__$1,new cljs.core.Keyword(null,"on-invoke-success","on-invoke-success",-871724185));
var on_invoke_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66775__$1,new cljs.core.Keyword(null,"on-invoke-failure","on-invoke-failure",-1771758228));
var method = "thread-api/import-db-binary";
var args = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,data], null);
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__66776 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"url","url",276297046),frontend.persist_db.remote.import_db_binary_url(base_url,repo),new cljs.core.Keyword(null,"headers","headers",-835030129),frontend.persist_db.remote.binary_headers(auth_token),new cljs.core.Keyword(null,"body","body",-2049205669),data], null);
return (fetch_fn.cljs$core$IFn$_invoke$arity$1 ? fetch_fn.cljs$core$IFn$_invoke$arity$1(G__66776) : fetch_fn.call(null,G__66776));
})()),(function (p__66778){
var map__66779 = p__66778;
var map__66779__$1 = cljs.core.__destructure_map(map__66779);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66779__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66779__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return promesa.protocols._mcat(promesa.protocols._promise(frontend.persist_db.remote.parse_response_body(body)),(function (parsed){
return promesa.protocols._promise(((((((200) <= status)) && ((status <= (299)))))?(function (){var result = logseq.db.read_transit_str(new cljs.core.Keyword(null,"resultTransit","resultTransit",994720710).cljs$core$IFn$_invoke$arity$1(parsed));
if(cljs.core.truth_(on_invoke_success)){
(on_invoke_success.cljs$core$IFn$_invoke$arity$3 ? on_invoke_success.cljs$core$IFn$_invoke$arity$3(method,args,result) : on_invoke_success.call(null,method,args,result));
} else {
}

return result;
})():(function (){var error = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(parsed);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "db-worker invoke failed";
}
})(),(function (){var G__66780 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"code","code",1586293142),frontend.persist_db.remote.normalize_code(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error))], null);
if(cljs.core.truth_(error)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66780,new cljs.core.Keyword(null,"error","error",-978969032),error);
} else {
return G__66780;
}
})());
})()));
}));
}));
})),(function (error){
if(cljs.core.truth_(on_invoke_failure)){
(on_invoke_failure.cljs$core$IFn$_invoke$arity$3 ? on_invoke_failure.cljs$core$IFn$_invoke$arity$3(method,args,error) : on_invoke_failure.call(null,method,args,error));
} else {
}

throw error;
}));
});
frontend.persist_db.remote.connect_events_BANG_ = (function frontend$persist_db$remote$connect_events_BANG_(p__66781,wrapped_worker){
var map__66782 = p__66781;
var map__66782__$1 = cljs.core.__destructure_map(map__66782);
var base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66782__$1,new cljs.core.Keyword(null,"base-url","base-url",9540398));
var auth_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66782__$1,new cljs.core.Keyword(null,"auth-token","auth-token",30990976));
var event_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66782__$1,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843));
var open_sse_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66782__$1,new cljs.core.Keyword(null,"open-sse-fn","open-sse-fn",1420905373));
var schedule_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66782__$1,new cljs.core.Keyword(null,"schedule-fn","schedule-fn",1204822075));
var reconnect_delay_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66782__$1,new cljs.core.Keyword(null,"reconnect-delay-ms","reconnect-delay-ms",-1611905));
var on_event_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66782__$1,new cljs.core.Keyword(null,"on-event-error","on-event-error",635264990));
var still_active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66782__$1,new cljs.core.Keyword(null,"still-active?","still-active?",-202183977));
var connected_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var buffer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
var subscription = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var live_QMARK_ = (function (){
var and__5140__auto__ = cljs.core.deref(connected_QMARK_);
if(cljs.core.truth_(and__5140__auto__)){
if(cljs.core.truth_(still_active_QMARK_)){
return (still_active_QMARK_.cljs$core$IFn$_invoke$arity$0 ? still_active_QMARK_.cljs$core$IFn$_invoke$arity$0() : still_active_QMARK_.call(null));
} else {
return true;
}
} else {
return and__5140__auto__;
}
});
var close_subscription_BANG_ = (function (){
var temp__5825__auto___66841 = new cljs.core.Keyword(null,"close!","close!",-2079310498).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(subscription));
if(cljs.core.truth_(temp__5825__auto___66841)){
var close_BANG__66842 = temp__5825__auto___66841;
(close_BANG__66842.cljs$core$IFn$_invoke$arity$0 ? close_BANG__66842.cljs$core$IFn$_invoke$arity$0() : close_BANG__66842.call(null));
} else {
}

return cljs.core.reset_BANG_(subscription,null);
});
var dispatch_BANG_ = (function (event_str){
var temp__5825__auto__ = frontend.persist_db.remote.data_line(event_str);
if(cljs.core.truth_(temp__5825__auto__)){
var line = temp__5825__auto__;
var event = frontend.persist_db.remote.parse_response_body(line);
var vec__66784 = frontend.persist_db.remote.decode_event(event);
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66784,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66784,(1),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = event_handler;
if(cljs.core.truth_(and__5140__auto__)){
return event_type;
} else {
return and__5140__auto__;
}
})())){
return (event_handler.cljs$core$IFn$_invoke$arity$3 ? event_handler.cljs$core$IFn$_invoke$arity$3(event_type,wrapped_worker,payload) : event_handler.call(null,event_type,wrapped_worker,payload));
} else {
return null;
}
} else {
return null;
}
});
var open_BANG_ = (function frontend$persist_db$remote$connect_events_BANG__$_open_BANG_(){
if(cljs.core.truth_(live_QMARK_())){
return cljs.core.reset_BANG_(subscription,(function (){var G__66790 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),frontend.persist_db.remote.events_url(base_url),new cljs.core.Keyword(null,"headers","headers",-835030129),frontend.persist_db.remote.base_headers(auth_token),new cljs.core.Keyword(null,"on-message","on-message",1662987808),(function (chunk){
if(cljs.core.truth_(live_QMARK_())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.str,chunk);

while(true){
var temp__5825__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(buffer),"\n\n");
if(cljs.core.truth_(temp__5825__auto__)){
var idx = temp__5825__auto__;
var event_str = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(buffer),(0),idx);
var next_buffer = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(buffer),(idx + (2)));
cljs.core.reset_BANG_(buffer,next_buffer);

dispatch_BANG_(event_str);

continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (error){
if(cljs.core.truth_(cljs.core.deref(connected_QMARK_))){
close_subscription_BANG_();

if(cljs.core.truth_(live_QMARK_())){
if(cljs.core.truth_(on_event_error)){
(on_event_error.cljs$core$IFn$_invoke$arity$1 ? on_event_error.cljs$core$IFn$_invoke$arity$1(error) : on_event_error.call(null,error));
} else {
}

if(cljs.core.truth_(live_QMARK_())){
return (schedule_fn.cljs$core$IFn$_invoke$arity$2 ? schedule_fn.cljs$core$IFn$_invoke$arity$2(frontend$persist_db$remote$connect_events_BANG__$_open_BANG_,reconnect_delay_ms) : schedule_fn.call(null,frontend$persist_db$remote$connect_events_BANG__$_open_BANG_,reconnect_delay_ms));
} else {
return null;
}
} else {
return cljs.core.reset_BANG_(connected_QMARK_,false);
}
} else {
return null;
}
})], null);
return (open_sse_fn.cljs$core$IFn$_invoke$arity$1 ? open_sse_fn.cljs$core$IFn$_invoke$arity$1(G__66790) : open_sse_fn.call(null,G__66790));
})());
} else {
return null;
}
});
open_BANG_();

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disconnect!","disconnect!",-1979318032),(function (){
cljs.core.reset_BANG_(connected_QMARK_,false);

close_subscription_BANG_();

return null;
})], null);
});
frontend.persist_db.remote.method__GT_str = (function frontend$persist_db$remote$method__GT_str(qkw){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qkw))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(qkw)));
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
frontend.persist_db.remote.InRemote = (function (client,wrapped_worker,disconnect_BANG_,__meta,__extmap,__hash){
this.client = client;
this.wrapped_worker = wrapped_worker;
this.disconnect_BANG_ = disconnect_BANG_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.persist_db.remote.InRemote.prototype.frontend$persist_db$protocol$PersistentDB$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.persist_db.remote.InRemote.prototype.frontend$persist_db$protocol$PersistentDB$_LT_new$arity$3 = (function (_this,repo,opts){
var self__ = this;
var _this__$1 = this;
return frontend.persist_db.remote.invoke_BANG_(self__.client,"thread-api/create-or-open-db",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,opts], null));
}));

(frontend.persist_db.remote.InRemote.prototype.frontend$persist_db$protocol$PersistentDB$_LT_list_db$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return frontend.persist_db.remote.invoke_BANG_(self__.client,"thread-api/list-db",cljs.core.PersistentVector.EMPTY);
}));

(frontend.persist_db.remote.InRemote.prototype.frontend$persist_db$protocol$PersistentDB$_LT_unsafe_delete$arity$2 = (function (_this,repo){
var self__ = this;
var _this__$1 = this;
return frontend.persist_db.remote.invoke_BANG_(self__.client,"thread-api/unsafe-unlink-db",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo], null));
}));

(frontend.persist_db.remote.InRemote.prototype.frontend$persist_db$protocol$PersistentDB$_LT_release_access_handles$arity$2 = (function (_this,repo){
var self__ = this;
var _this__$1 = this;
return frontend.persist_db.remote.invoke_BANG_(self__.client,"thread-api/release-access-handles",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo], null));
}));

(frontend.persist_db.remote.InRemote.prototype.frontend$persist_db$protocol$PersistentDB$_LT_open_and_fetch_schema$arity$3 = (function (_this,repo,opts){
var self__ = this;
var _this__$1 = this;
return frontend.persist_db.remote.invoke_BANG_(self__.client,"thread-api/create-or-open-db",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo,opts], null));
}));

(frontend.persist_db.remote.InRemote.prototype.frontend$persist_db$protocol$PersistentDB$_LT_export_db$arity$3 = (function (_this,repo,_opts){
var self__ = this;
var _this__$1 = this;
return frontend.persist_db.remote.invoke_BANG_(self__.client,"thread-api/export-db-binary",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [repo], null));
}));

(frontend.persist_db.remote.InRemote.prototype.frontend$persist_db$protocol$PersistentDB$_LT_import_db$arity$3 = (function (_this,repo,data){
var self__ = this;
var _this__$1 = this;
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(frontend.persist_db.remote.import_db_binary_BANG_(self__.client,repo,data),(function (error){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.persist-db.remote",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"import-db-error","import-db-error",-1453566776),repo,error,"SQLiteDB import error",new cljs.core.Keyword(null,"line","line",212345235),254])),null);
} else {
}

frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("storage","sqlitedb-import-error","storage/sqlitedb-import-error",-1012630538),error], 0)),new cljs.core.Keyword(null,"error","error",-978969032));

return cljs.core.PersistentArrayMap.EMPTY;
}));
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k66793,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__66807 = k66793;
var G__66807__$1 = (((G__66807 instanceof cljs.core.Keyword))?G__66807.fqn:null);
switch (G__66807__$1) {
case "client":
return self__.client;

break;
case "wrapped-worker":
return self__.wrapped_worker;

break;
case "disconnect!":
return self__.disconnect_BANG_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66793,else__5451__auto__);

}
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__66808){
var vec__66809 = p__66808;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66809,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66809,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#frontend.persist-db.remote.InRemote{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client","client",-1323448117),self__.client],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wrapped-worker","wrapped-worker",1361994802),self__.wrapped_worker],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"disconnect!","disconnect!",-1979318032),self__.disconnect_BANG_],null))], null),self__.__extmap));
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66792){
var self__ = this;
var G__66792__$1 = this;
return (new cljs.core.RecordIter((0),G__66792__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"wrapped-worker","wrapped-worker",1361994802),new cljs.core.Keyword(null,"disconnect!","disconnect!",-1979318032)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new frontend.persist_db.remote.InRemote(self__.client,self__.wrapped_worker,self__.disconnect_BANG_,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1011458004 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66794,other66795){
var self__ = this;
var this66794__$1 = this;
return (((!((other66795 == null)))) && ((((this66794__$1.constructor === other66795.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66794__$1.client,other66795.client)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66794__$1.wrapped_worker,other66795.wrapped_worker)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66794__$1.disconnect_BANG_,other66795.disconnect_BANG_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66794__$1.__extmap,other66795.__extmap)))))))))));
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"client","client",-1323448117),null,new cljs.core.Keyword(null,"disconnect!","disconnect!",-1979318032),null,new cljs.core.Keyword(null,"wrapped-worker","wrapped-worker",1361994802),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new frontend.persist_db.remote.InRemote(self__.client,self__.wrapped_worker,self__.disconnect_BANG_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k66793){
var self__ = this;
var this__5455__auto____$1 = this;
var G__66819 = k66793;
var G__66819__$1 = (((G__66819 instanceof cljs.core.Keyword))?G__66819.fqn:null);
switch (G__66819__$1) {
case "client":
case "wrapped-worker":
case "disconnect!":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k66793);

}
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__66792){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__66820 = cljs.core.keyword_identical_QMARK_;
var expr__66821 = k__5457__auto__;
if(cljs.core.truth_((pred__66820.cljs$core$IFn$_invoke$arity$2 ? pred__66820.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client","client",-1323448117),expr__66821) : pred__66820.call(null,new cljs.core.Keyword(null,"client","client",-1323448117),expr__66821)))){
return (new frontend.persist_db.remote.InRemote(G__66792,self__.wrapped_worker,self__.disconnect_BANG_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66820.cljs$core$IFn$_invoke$arity$2 ? pred__66820.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wrapped-worker","wrapped-worker",1361994802),expr__66821) : pred__66820.call(null,new cljs.core.Keyword(null,"wrapped-worker","wrapped-worker",1361994802),expr__66821)))){
return (new frontend.persist_db.remote.InRemote(self__.client,G__66792,self__.disconnect_BANG_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66820.cljs$core$IFn$_invoke$arity$2 ? pred__66820.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"disconnect!","disconnect!",-1979318032),expr__66821) : pred__66820.call(null,new cljs.core.Keyword(null,"disconnect!","disconnect!",-1979318032),expr__66821)))){
return (new frontend.persist_db.remote.InRemote(self__.client,self__.wrapped_worker,G__66792,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.persist_db.remote.InRemote(self__.client,self__.wrapped_worker,self__.disconnect_BANG_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__66792),null));
}
}
}
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client","client",-1323448117),self__.client,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wrapped-worker","wrapped-worker",1361994802),self__.wrapped_worker,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"disconnect!","disconnect!",-1979318032),self__.disconnect_BANG_,null))], null),self__.__extmap));
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__66792){
var self__ = this;
var this__5447__auto____$1 = this;
return (new frontend.persist_db.remote.InRemote(self__.client,self__.wrapped_worker,self__.disconnect_BANG_,G__66792,self__.__extmap,self__.__hash));
}));

(frontend.persist_db.remote.InRemote.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(frontend.persist_db.remote.InRemote.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client","client",317083410,null),new cljs.core.Symbol(null,"wrapped-worker","wrapped-worker",-1292440967,null),new cljs.core.Symbol(null,"disconnect!","disconnect!",-338786505,null)], null);
}));

(frontend.persist_db.remote.InRemote.cljs$lang$type = true);

(frontend.persist_db.remote.InRemote.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"frontend.persist-db.remote/InRemote",null,(1),null));
}));

(frontend.persist_db.remote.InRemote.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"frontend.persist-db.remote/InRemote");
}));

/**
 * Positional factory function for frontend.persist-db.remote/InRemote.
 */
frontend.persist_db.remote.__GT_InRemote = (function frontend$persist_db$remote$__GT_InRemote(client,wrapped_worker,disconnect_BANG_){
return (new frontend.persist_db.remote.InRemote(client,wrapped_worker,disconnect_BANG_,null,null,null));
});

/**
 * Factory function for frontend.persist-db.remote/InRemote, taking a map of keywords to field values.
 */
frontend.persist_db.remote.map__GT_InRemote = (function frontend$persist_db$remote$map__GT_InRemote(G__66801){
var extmap__5490__auto__ = (function (){var G__66826 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__66801,new cljs.core.Keyword(null,"client","client",-1323448117),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wrapped-worker","wrapped-worker",1361994802),new cljs.core.Keyword(null,"disconnect!","disconnect!",-1979318032)], 0));
if(cljs.core.record_QMARK_(G__66801)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66826);
} else {
return G__66826;
}
})();
return (new frontend.persist_db.remote.InRemote(new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(G__66801),new cljs.core.Keyword(null,"wrapped-worker","wrapped-worker",1361994802).cljs$core$IFn$_invoke$arity$1(G__66801),new cljs.core.Keyword(null,"disconnect!","disconnect!",-1979318032).cljs$core$IFn$_invoke$arity$1(G__66801),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

frontend.persist_db.remote.start_BANG_ = (function frontend$persist_db$remote$start_BANG_(p__66827){
var map__66828 = p__66827;
var map__66828__$1 = cljs.core.__destructure_map(map__66828);
var opts = map__66828__$1;
var base_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66828__$1,new cljs.core.Keyword(null,"base-url","base-url",9540398));
var auth_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66828__$1,new cljs.core.Keyword(null,"auth-token","auth-token",30990976));
var event_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66828__$1,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843));
var still_active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66828__$1,new cljs.core.Keyword(null,"still-active?","still-active?",-202183977));
var client = frontend.persist_db.remote.create_client(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"base-url","base-url",9540398),base_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auth-token","auth-token",30990976),auth_token], 0)));
var wrapped_worker = (function() { 
var G__66849__delegate = function (qkw,args){
return frontend.persist_db.remote.invoke_BANG_(client,frontend.persist_db.remote.method__GT_str(qkw),args);
};
var G__66849 = function (qkw,var_args){
var args = null;
if (arguments.length > 1) {
var G__66850__i = 0, G__66850__a = new Array(arguments.length -  1);
while (G__66850__i < G__66850__a.length) {G__66850__a[G__66850__i] = arguments[G__66850__i + 1]; ++G__66850__i;}
  args = new cljs.core.IndexedSeq(G__66850__a,0,null);
} 
return G__66849__delegate.call(this,qkw,args);};
G__66849.cljs$lang$maxFixedArity = 1;
G__66849.cljs$lang$applyTo = (function (arglist__66851){
var qkw = cljs.core.first(arglist__66851);
var args = cljs.core.rest(arglist__66851);
return G__66849__delegate(qkw,args);
});
G__66849.cljs$core$IFn$_invoke$arity$variadic = G__66849__delegate;
return G__66849;
})()
;
var map__66829 = frontend.persist_db.remote.connect_events_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(client,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843),event_handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auth-token","auth-token",30990976),auth_token,new cljs.core.Keyword(null,"still-active?","still-active?",-202183977),still_active_QMARK_], 0)),wrapped_worker);
var map__66829__$1 = cljs.core.__destructure_map(map__66829);
var disconnect_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66829__$1,new cljs.core.Keyword(null,"disconnect!","disconnect!",-1979318032));
return frontend.persist_db.remote.__GT_InRemote(client,wrapped_worker,disconnect_BANG_);
});
frontend.persist_db.remote.stop_BANG_ = (function frontend$persist_db$remote$stop_BANG_(remote_client){
var temp__5825__auto___66852 = new cljs.core.Keyword(null,"disconnect!","disconnect!",-1979318032).cljs$core$IFn$_invoke$arity$1(remote_client);
if(cljs.core.truth_(temp__5825__auto___66852)){
var disconnect_BANG__66853 = temp__5825__auto___66852;
(disconnect_BANG__66853.cljs$core$IFn$_invoke$arity$0 ? disconnect_BANG__66853.cljs$core$IFn$_invoke$arity$0() : disconnect_BANG__66853.call(null));
} else {
}

return promesa.core.resolved(true);
});

//# sourceMappingURL=frontend.persist_db.remote.js.map
