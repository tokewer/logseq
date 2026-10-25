goog.provide('io.factorhouse.rfx.store');

/**
 * Protocol for interacting with a shared state store, supporting both React component access
 * and external access methods.
 * @interface
 */
io.factorhouse.rfx.store.IStore = function(){};

var io$factorhouse$rfx$store$IStore$subscribe$dyn_25991 = (function (this$,subscription){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.store.subscribe[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,subscription) : m__5499__auto__.call(null,this$,subscription));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.store.subscribe["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,subscription) : m__5497__auto__.call(null,this$,subscription));
} else {
throw cljs.core.missing_protocol("IStore.subscribe",this$);
}
}
});
/**
 * Returns the current value of the subscription. Intended to be called outside a React context.
 */
io.factorhouse.rfx.store.subscribe = (function io$factorhouse$rfx$store$subscribe(this$,subscription){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$store$IStore$subscribe$arity$2 == null)))))){
return this$.io$factorhouse$rfx$store$IStore$subscribe$arity$2(this$,subscription);
} else {
return io$factorhouse$rfx$store$IStore$subscribe$dyn_25991(this$,subscription);
}
});

var io$factorhouse$rfx$store$IStore$use_sub$dyn_25992 = (function (this$,subscription){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.store.use_sub[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,subscription) : m__5499__auto__.call(null,this$,subscription));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.store.use_sub["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,subscription) : m__5497__auto__.call(null,this$,subscription));
} else {
throw cljs.core.missing_protocol("IStore.use-sub",this$);
}
}
});
/**
 * Returns a React hook to access the subscription within a React component.
 *   Usage: `(let [state (use-sub store [:subscription-id] ...)`
 * 
 *   The returned hook allows components to reactively subscribe to changes in the store.
 */
io.factorhouse.rfx.store.use_sub = (function io$factorhouse$rfx$store$use_sub(this$,subscription){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$store$IStore$use_sub$arity$2 == null)))))){
return this$.io$factorhouse$rfx$store$IStore$use_sub$arity$2(this$,subscription);
} else {
return io$factorhouse$rfx$store$IStore$use_sub$dyn_25992(this$,subscription);
}
});

var io$factorhouse$rfx$store$IStore$next_state_BANG_$dyn_25993 = (function (_,inputs){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (io.factorhouse.rfx.store.next_state_BANG_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(_,inputs) : m__5499__auto__.call(null,_,inputs));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.store.next_state_BANG_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(_,inputs) : m__5497__auto__.call(null,_,inputs));
} else {
throw cljs.core.missing_protocol("IStore.next-state!",_);
}
}
});
/**
 * Transitions the store to its next state based on some inputs.
 */
io.factorhouse.rfx.store.next_state_BANG_ = (function io$factorhouse$rfx$store$next_state_BANG_(_,inputs){
if((((!((_ == null)))) && ((!((_.io$factorhouse$rfx$store$IStore$next_state_BANG_$arity$2 == null)))))){
return _.io$factorhouse$rfx$store$IStore$next_state_BANG_$arity$2(_,inputs);
} else {
return io$factorhouse$rfx$store$IStore$next_state_BANG_$dyn_25993(_,inputs);
}
});

var io$factorhouse$rfx$store$IStore$snapshot$dyn_25994 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.store.snapshot[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.store.snapshot["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStore.snapshot",this$);
}
}
});
/**
 * Returns the current internal state of the store for inspection or debugging purposes. Intended to be called outside a React context.
 */
io.factorhouse.rfx.store.snapshot = (function io$factorhouse$rfx$store$snapshot(this$){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$store$IStore$snapshot$arity$1 == null)))))){
return this$.io$factorhouse$rfx$store$IStore$snapshot$arity$1(this$);
} else {
return io$factorhouse$rfx$store$IStore$snapshot$dyn_25994(this$);
}
});

var io$factorhouse$rfx$store$IStore$clear_subscription_cache_BANG_$dyn_25995 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (io.factorhouse.rfx.store.clear_subscription_cache_BANG_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (io.factorhouse.rfx.store.clear_subscription_cache_BANG_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStore.clear-subscription-cache!",this$);
}
}
});
/**
 * Clears the subscription cache. Useful for hot-reloading, etc.
 */
io.factorhouse.rfx.store.clear_subscription_cache_BANG_ = (function io$factorhouse$rfx$store$clear_subscription_cache_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.io$factorhouse$rfx$store$IStore$clear_subscription_cache_BANG_$arity$1 == null)))))){
return this$.io$factorhouse$rfx$store$IStore$clear_subscription_cache_BANG_$arity$1(this$);
} else {
return io$factorhouse$rfx$store$IStore$clear_subscription_cache_BANG_$dyn_25995(this$);
}
});


//# sourceMappingURL=io.factorhouse.rfx.store.js.map
