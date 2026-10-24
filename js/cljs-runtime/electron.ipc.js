goog.provide('electron.ipc');
electron.ipc.maybe_read_transit = (function electron$ipc$maybe_read_transit(result){
if(typeof result === 'string'){
return logseq.db.sqlite.util.read_transit_str(result);
} else {
return result;
}
});
electron.ipc.js_pure_object_QMARK_ = (function electron$ipc$js_pure_object_QMARK_(x){
var or__5142__auto__ = cljs.core.array_QMARK_(x);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = (!((x == null)));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[object Object]",Object.prototype.toString.call(x));
if(and__5140__auto____$1){
var prototype = Object.getPrototypeOf(x);
return (((prototype == null)) || ((Object.getPrototypeOf(prototype) == null)));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
electron.ipc.has_js_obj_QMARK_ = (function electron$ipc$has_js_obj_QMARK_(args){
return cljs.core.some(electron.ipc.js_pure_object_QMARK_,args);
});
electron.ipc.ipc = (function electron$ipc$ipc(var_args){
var args__5882__auto__ = [];
var len__5876__auto___40974 = arguments.length;
var i__5877__auto___40975 = (0);
while(true){
if((i__5877__auto___40975 < len__5876__auto___40974)){
args__5882__auto__.push((arguments[i__5877__auto___40975]));

var G__40976 = (i__5877__auto___40975 + (1));
i__5877__auto___40975 = G__40976;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
var temp__5823__auto__ = (function (){var and__5140__auto__ = electron.ipc.has_js_obj_QMARK_(args);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(args),new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var args__$1 = temp__5823__auto__;
return window.apis.doAction(cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(args__$1));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(logseq.db.sqlite.util.write_transit_str(args)),(function (payload){
return promesa.protocols._mcat(promesa.protocols._promise(window.apis.doAction(payload)),(function (maybe_result_str){
return promesa.protocols._promise(electron.ipc.maybe_read_transit(maybe_result_str));
}));
}));
}));
}
} else {
return null;
}
}));

(electron.ipc.ipc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(electron.ipc.ipc.cljs$lang$applyTo = (function (seq40968){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40968));
}));

electron.ipc.invoke = (function electron$ipc$invoke(var_args){
var args__5882__auto__ = [];
var len__5876__auto___40977 = arguments.length;
var i__5877__auto___40978 = (0);
while(true){
if((i__5877__auto___40978 < len__5876__auto___40977)){
args__5882__auto__.push((arguments[i__5877__auto___40978]));

var G__40980 = (i__5877__auto___40978 + (1));
i__5877__auto___40978 = G__40980;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return electron.ipc.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(electron.ipc.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (channel,args){
if(cljs.core.truth_(frontend.util.electron_QMARK_())){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___27466__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(window.apis.invoke(channel,cljs_bean.core.__GT_js.cljs$core$IFn$_invoke$arity$1(args))),(function (result){
return promesa.protocols._promise(result);
}));
}));
} else {
return null;
}
}));

(electron.ipc.invoke.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(electron.ipc.invoke.cljs$lang$applyTo = (function (seq40971){
var G__40972 = cljs.core.first(seq40971);
var seq40971__$1 = cljs.core.next(seq40971);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40972,seq40971__$1);
}));


//# sourceMappingURL=electron.ipc.js.map
