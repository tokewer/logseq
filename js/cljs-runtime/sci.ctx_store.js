goog.provide('sci.ctx_store');
/**
 * Dynamic var in which context is stored. Don't use directly, but only
 *   via public API.
 */
sci.ctx_store._STAR_ctx_STAR_ = null;
/**
 * Store `ctx`
 */
sci.ctx_store.reset_ctx_BANG_ = (function sci$ctx_store$reset_ctx_BANG_(ctx){
return (sci.ctx_store._STAR_ctx_STAR_ = ctx);
});
/**
 * Update `ctx` using `f` and `args`
 */
sci.ctx_store.swap_ctx_BANG_ = (function sci$ctx_store$swap_ctx_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___70941 = arguments.length;
var i__5877__auto___70942 = (0);
while(true){
if((i__5877__auto___70942 < len__5876__auto___70941)){
args__5882__auto__.push((arguments[i__5877__auto___70942]));

var G__70943 = (i__5877__auto___70942 + (1));
i__5877__auto___70942 = G__70943;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return sci.ctx_store.swap_ctx_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(sci.ctx_store.swap_ctx_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (sci.ctx_store._STAR_ctx_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,sci.ctx_store._STAR_ctx_STAR_,args));
}));

(sci.ctx_store.swap_ctx_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.ctx_store.swap_ctx_BANG_.cljs$lang$applyTo = (function (seq70934){
var G__70935 = cljs.core.first(seq70934);
var seq70934__$1 = cljs.core.next(seq70934);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70935,seq70934__$1);
}));

/**
 * Retrieve stored ctx or throw an exception.
 */
sci.ctx_store.get_ctx = (function sci$ctx_store$get_ctx(){
var or__5142__auto__ = sci.ctx_store._STAR_ctx_STAR_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var msg = "No context found in: sci.ctx-store/*ctx*. Please set it using sci.ctx-store/reset-ctx!";
throw (new Error(msg));
}
});

//# sourceMappingURL=sci.ctx_store.js.map
