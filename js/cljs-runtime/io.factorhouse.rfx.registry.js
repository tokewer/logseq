goog.provide('io.factorhouse.rfx.registry');
io.factorhouse.rfx.registry.reg_cofx = (function io$factorhouse$rfx$registry$reg_cofx(registry,cofx_id,cofx_fn){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(registry,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),cofx_id], null),cofx_fn);
});
io.factorhouse.rfx.registry.reg_sub = (function io$factorhouse$rfx$registry$reg_sub(registry,sub_id,signals,sub_f){
var sub = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sub-f","sub-f",-1746056474),sub_f,new cljs.core.Keyword(null,"signals","signals",1732137021),signals], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(registry,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),sub_id], null),sub);
});
io.factorhouse.rfx.registry.reg_fx = (function io$factorhouse$rfx$registry$reg_fx(registry,fx_id,f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(registry,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),fx_id], null),f);
});
io.factorhouse.rfx.registry.reg_event_fx = (function io$factorhouse$rfx$registry$reg_event_fx(registry,event_fx_id,interceptors,f){
var fx = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-f","event-f",114235466),f,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(registry,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),event_fx_id], null),fx);
});
io.factorhouse.rfx.registry.reg_event_db = (function io$factorhouse$rfx$registry$reg_event_db(registry,event_id,interceptors,event_f){
var event = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-f","event-f",114235466),(function (p__27597,event){
var map__27599 = p__27597;
var map__27599__$1 = cljs.core.__destructure_map(map__27599);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27599__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(event_f.cljs$core$IFn$_invoke$arity$2 ? event_f.cljs$core$IFn$_invoke$arity$2(db,event) : event_f.call(null,db,event))], null);
}),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(registry,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),event_id], null),event);
});

//# sourceMappingURL=io.factorhouse.rfx.registry.js.map
