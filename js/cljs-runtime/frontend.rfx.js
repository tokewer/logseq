goog.provide('frontend.rfx');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof frontend !== 'undefined') && (typeof frontend.rfx !== 'undefined') && (typeof frontend.rfx._BANG_context !== 'undefined')){
} else {
frontend.rfx._BANG_context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.rfx !== 'undefined') && (typeof frontend.rfx._BANG_state_listeners !== 'undefined')){
} else {
frontend.rfx._BANG_state_listeners = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof frontend !== 'undefined') && (typeof frontend.rfx !== 'undefined') && (typeof frontend.rfx._BANG_init_once_called_QMARK_ !== 'undefined')){
} else {
frontend.rfx._BANG_init_once_called_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
frontend.rfx.pub_event_deferred = (function frontend$rfx$pub_event_deferred(event){
return new cljs.core.Keyword("frontend.rfx","deferred","frontend.rfx/deferred",1136640632).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(event));
});
frontend.rfx.errors__GT_exception = (function frontend$rfx$errors__GT_exception(errors,origin){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.first(errors));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "RFX event failed.";
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),errors,new cljs.core.Keyword(null,"origin","origin",1037372088),origin], null));
});
frontend.rfx.error_handler = (function frontend$rfx$error_handler(p__28061){
var map__28063 = p__28061;
var map__28063__$1 = cljs.core.__destructure_map(map__28063);
var ctx = map__28063__$1;
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28063__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28063__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var temp__5823__auto__ = frontend.rfx.pub_event_deferred(origin);
if(cljs.core.truth_(temp__5823__auto__)){
var deferred = temp__5823__auto__;
return promesa.core.reject_BANG_(deferred,frontend.rfx.errors__GT_exception(errors,origin));
} else {
return io.factorhouse.rfx.core.log_and_continue_error_handler(ctx);
}
});
frontend.rfx.register_built_in_fx_BANG_ = (function frontend$rfx$register_built_in_fx_BANG_(rfx_registry){
io.factorhouse.rfx.registry.reg_fx(rfx_registry,new cljs.core.Keyword("frontend.rfx","resolve-pub-event","frontend.rfx/resolve-pub-event",-325054610),(function (_,p__28067){
var map__28068 = p__28067;
var map__28068__$1 = cljs.core.__destructure_map(map__28068);
var deferred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28068__$1,new cljs.core.Keyword(null,"deferred","deferred",-1976960688));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28068__$1,new cljs.core.Keyword(null,"value","value",305978217));
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(deferred,value);
}));

return io.factorhouse.rfx.registry.reg_fx(rfx_registry,new cljs.core.Keyword("frontend.rfx","reject-pub-event","frontend.rfx/reject-pub-event",1473427656),(function (_,p__28069){
var map__28070 = p__28069;
var map__28070__$1 = cljs.core.__destructure_map(map__28070);
var deferred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28070__$1,new cljs.core.Keyword(null,"deferred","deferred",-1976960688));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28070__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return promesa.core.reject_BANG_(deferred,error);
}));
});
frontend.rfx.new_context = (function frontend$rfx$new_context(opts){
var ctx = io.factorhouse.rfx.core.init(cljs.core.update.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__28073_SHARP_){
var or__5142__auto__ = p1__28073_SHARP_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.rfx.error_handler;
}
})));
frontend.rfx.register_built_in_fx_BANG_(new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(ctx));

return ctx;
});
frontend.rfx.context = (function frontend$rfx$context(){
var or__5142__auto__ = cljs.core.deref(frontend.rfx._BANG_context);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.reset_BANG_(frontend.rfx._BANG_context,frontend.rfx.new_context(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-value","initial-value",470619381),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"registry","registry",1021159018),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null)));
}
});
frontend.rfx.init_BANG_ = (function frontend$rfx$init_BANG_(p__28082){
var map__28083 = p__28082;
var map__28083__$1 = cljs.core.__destructure_map(map__28083);
var opts = map__28083__$1;
var initial_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28083__$1,new cljs.core.Keyword(null,"initial-value","initial-value",470619381));
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28083__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var ctx = frontend.rfx.new_context(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"initial-value","initial-value",470619381),(function (){var or__5142__auto__ = initial_value;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"registry","registry",1021159018),(function (){var or__5142__auto__ = registry;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})()], 0)));
cljs.core.reset_BANG_(frontend.rfx._BANG_context,ctx);

return ctx;
});
frontend.rfx.init_once_BANG_ = (function frontend$rfx$init_once_BANG_(opts){
if(cljs.core.compare_and_set_BANG_(frontend.rfx._BANG_init_once_called_QMARK_,false,true)){
return frontend.rfx.init_BANG_(opts);
} else {
return frontend.rfx.context();
}
});
frontend.rfx.current_registry = (function frontend$rfx$current_registry(){
return new cljs.core.Keyword(null,"registry","registry",1021159018).cljs$core$IFn$_invoke$arity$1(frontend.rfx.context());
});
frontend.rfx.snapshot = (function frontend$rfx$snapshot(){
return io.factorhouse.rfx.store.snapshot(new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(frontend.rfx.context()));
});
frontend.rfx.notify_state_listeners_BANG_ = (function frontend$rfx$notify_state_listeners_BANG_(prev_db,next_db){
var seq__28112 = cljs.core.seq(cljs.core.vals(cljs.core.deref(frontend.rfx._BANG_state_listeners)));
var chunk__28113 = null;
var count__28114 = (0);
var i__28115 = (0);
while(true){
if((i__28115 < count__28114)){
var listener = chunk__28113.cljs$core$IIndexed$_nth$arity$2(null,i__28115);
(listener.cljs$core$IFn$_invoke$arity$2 ? listener.cljs$core$IFn$_invoke$arity$2(prev_db,next_db) : listener.call(null,prev_db,next_db));


var G__28155 = seq__28112;
var G__28156 = chunk__28113;
var G__28157 = count__28114;
var G__28158 = (i__28115 + (1));
seq__28112 = G__28155;
chunk__28113 = G__28156;
count__28114 = G__28157;
i__28115 = G__28158;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28112);
if(temp__5825__auto__){
var seq__28112__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28112__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__28112__$1);
var G__28159 = cljs.core.chunk_rest(seq__28112__$1);
var G__28160 = c__5673__auto__;
var G__28161 = cljs.core.count(c__5673__auto__);
var G__28162 = (0);
seq__28112 = G__28159;
chunk__28113 = G__28160;
count__28114 = G__28161;
i__28115 = G__28162;
continue;
} else {
var listener = cljs.core.first(seq__28112__$1);
(listener.cljs$core$IFn$_invoke$arity$2 ? listener.cljs$core$IFn$_invoke$arity$2(prev_db,next_db) : listener.call(null,prev_db,next_db));


var G__28163 = cljs.core.next(seq__28112__$1);
var G__28164 = null;
var G__28165 = (0);
var G__28166 = (0);
seq__28112 = G__28163;
chunk__28113 = G__28164;
count__28114 = G__28165;
i__28115 = G__28166;
continue;
}
} else {
return null;
}
}
break;
}
});
frontend.rfx.replace_state_paths_BANG_ = (function frontend$rfx$replace_state_paths_BANG_(db,_changed_paths){
var prev_db = frontend.rfx.snapshot();
var next_db = io.factorhouse.rfx.store.next_state_BANG_(new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(frontend.rfx.context()),db);
frontend.rfx.notify_state_listeners_BANG_(prev_db,next_db);

return next_db;
});
frontend.rfx.replace_state_BANG_ = (function frontend$rfx$replace_state_BANG_(var_args){
var G__28131 = arguments.length;
switch (G__28131) {
case 1:
return frontend.rfx.replace_state_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.rfx.replace_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.rfx.replace_state_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (db){
return frontend.rfx.replace_state_BANG_.cljs$core$IFn$_invoke$arity$2(db,null);
}));

(frontend.rfx.replace_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (db,changed_path){
return frontend.rfx.replace_state_paths_BANG_(db,(cljs.core.truth_(changed_path)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [changed_path], null):null));
}));

(frontend.rfx.replace_state_BANG_.cljs$lang$maxFixedArity = 2);

frontend.rfx.listen_BANG_ = (function frontend$rfx$listen_BANG_(listener_id,f){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.rfx._BANG_state_listeners,cljs.core.assoc,listener_id,f);

return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.rfx._BANG_state_listeners,cljs.core.dissoc,listener_id);
});
});
frontend.rfx.unlisten_BANG_ = (function frontend$rfx$unlisten_BANG_(listener_id){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.rfx._BANG_state_listeners,cljs.core.dissoc,listener_id);

return null;
});
frontend.rfx.snapshot_sub = (function frontend$rfx$snapshot_sub(sub){
return io.factorhouse.rfx.core.snapshot_sub(frontend.rfx.context(),sub);
});
frontend.rfx.dispatch_sync_BANG_ = (function frontend$rfx$dispatch_sync_BANG_(event){
var prev_db = frontend.rfx.snapshot();
var result = io.factorhouse.rfx.core.dispatch_sync(frontend.rfx.context(),event);
var next_db = frontend.rfx.snapshot();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_db,next_db)){
} else {
frontend.rfx.notify_state_listeners_BANG_(prev_db,next_db);
}

return result;
});
frontend.rfx.use_sub = (function frontend$rfx$use_sub(sub){
return io.factorhouse.rfx.core.use_sub(sub);
});
frontend.rfx.provider = (function frontend$rfx$provider(child){
return module$node_modules$react$index.createElement(io.factorhouse.rfx.core.RfxContextProvider,({"value": frontend.rfx.context()}),child);
});
frontend.rfx.reg_sub_BANG_ = (function frontend$rfx$reg_sub_BANG_(var_args){
var G__28144 = arguments.length;
switch (G__28144) {
case 1:
return frontend.rfx.reg_sub_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.rfx.reg_sub_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.rfx.reg_sub_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.rfx.reg_sub_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (sub_id){
return frontend.rfx.reg_sub_BANG_.cljs$core$IFn$_invoke$arity$3(sub_id,cljs.core.PersistentVector.EMPTY,(function (db,_){
return db;
}));
}));

(frontend.rfx.reg_sub_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (sub_id,sub_f){
return frontend.rfx.reg_sub_BANG_.cljs$core$IFn$_invoke$arity$3(sub_id,cljs.core.PersistentVector.EMPTY,sub_f);
}));

(frontend.rfx.reg_sub_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (sub_id,signals,sub_f){
return io.factorhouse.rfx.registry.reg_sub(frontend.rfx.current_registry(),sub_id,signals,sub_f);
}));

(frontend.rfx.reg_sub_BANG_.cljs$lang$maxFixedArity = 3);

frontend.rfx.with_pub_event_resolution = (function frontend$rfx$with_pub_event_resolution(event_f){
return (function (coeffects,event){
var effects = (event_f.cljs$core$IFn$_invoke$arity$2 ? event_f.cljs$core$IFn$_invoke$arity$2(coeffects,event) : event_f.call(null,coeffects,event));
var deferred = new cljs.core.Keyword("frontend.rfx","deferred","frontend.rfx/deferred",1136640632).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(event));
var G__28145 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(effects,new cljs.core.Keyword("frontend.rfx","result","frontend.rfx/result",39862539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.rfx","error","frontend.rfx/error",-2019801344)], 0));
var G__28145__$1 = (cljs.core.truth_((function (){var and__5140__auto__ = deferred;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(effects,new cljs.core.Keyword("frontend.rfx","result","frontend.rfx/result",39862539));
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28145,new cljs.core.Keyword("frontend.rfx","resolve-pub-event","frontend.rfx/resolve-pub-event",-325054610),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deferred","deferred",-1976960688),deferred,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword("frontend.rfx","result","frontend.rfx/result",39862539))], null)):G__28145);
var G__28145__$2 = (cljs.core.truth_((function (){var and__5140__auto__ = deferred;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(effects,new cljs.core.Keyword("frontend.rfx","error","frontend.rfx/error",-2019801344));
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28145__$1,new cljs.core.Keyword("frontend.rfx","reject-pub-event","frontend.rfx/reject-pub-event",1473427656),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deferred","deferred",-1976960688),deferred,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.get.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword("frontend.rfx","error","frontend.rfx/error",-2019801344))], null)):G__28145__$1);
if(cljs.core.truth_((function (){var and__5140__auto__ = deferred;
if(cljs.core.truth_(and__5140__auto__)){
return (((!(cljs.core.contains_QMARK_(effects,new cljs.core.Keyword("frontend.rfx","result","frontend.rfx/result",39862539))))) && ((!(cljs.core.contains_QMARK_(effects,new cljs.core.Keyword("frontend.rfx","error","frontend.rfx/error",-2019801344))))));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28145__$2,new cljs.core.Keyword("frontend.rfx","resolve-pub-event","frontend.rfx/resolve-pub-event",-325054610),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deferred","deferred",-1976960688),deferred,new cljs.core.Keyword(null,"value","value",305978217),null], null));
} else {
return G__28145__$2;
}
});
});
frontend.rfx.reg_event_fx_BANG_ = (function frontend$rfx$reg_event_fx_BANG_(var_args){
var G__28147 = arguments.length;
switch (G__28147) {
case 2:
return frontend.rfx.reg_event_fx_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.rfx.reg_event_fx_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.rfx.reg_event_fx_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (event_id,event_f){
return frontend.rfx.reg_event_fx_BANG_.cljs$core$IFn$_invoke$arity$3(event_id,cljs.core.PersistentVector.EMPTY,event_f);
}));

(frontend.rfx.reg_event_fx_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (event_id,interceptors,event_f){
return io.factorhouse.rfx.registry.reg_event_fx(frontend.rfx.current_registry(),event_id,interceptors,frontend.rfx.with_pub_event_resolution(event_f));
}));

(frontend.rfx.reg_event_fx_BANG_.cljs$lang$maxFixedArity = 3);

frontend.rfx.reg_event_db_BANG_ = (function frontend$rfx$reg_event_db_BANG_(var_args){
var G__28149 = arguments.length;
switch (G__28149) {
case 2:
return frontend.rfx.reg_event_db_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.rfx.reg_event_db_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.rfx.reg_event_db_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (event_id,event_f){
return frontend.rfx.reg_event_db_BANG_.cljs$core$IFn$_invoke$arity$3(event_id,cljs.core.PersistentVector.EMPTY,event_f);
}));

(frontend.rfx.reg_event_db_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (event_id,interceptors,event_f){
return frontend.rfx.reg_event_fx_BANG_.cljs$core$IFn$_invoke$arity$3(event_id,interceptors,(function (p__28150,event){
var map__28151 = p__28150;
var map__28151__$1 = cljs.core.__destructure_map(map__28151);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28151__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(event_f.cljs$core$IFn$_invoke$arity$2 ? event_f.cljs$core$IFn$_invoke$arity$2(db,event) : event_f.call(null,db,event))], null);
}));
}));

(frontend.rfx.reg_event_db_BANG_.cljs$lang$maxFixedArity = 3);

frontend.rfx.pub_event_BANG_ = (function frontend$rfx$pub_event_BANG_(event){
var deferred = promesa.core.deferred();
try{frontend.rfx.dispatch_sync_BANG_(cljs.core.with_meta(event,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("frontend.rfx","deferred","frontend.rfx/deferred",1136640632),deferred], null)));
}catch (e28152){var e_28179 = e28152;
promesa.core.reject_BANG_(deferred,e_28179);
}
return deferred;
});

//# sourceMappingURL=frontend.rfx.js.map
