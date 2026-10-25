goog.provide('frontend.extensions.sci');
goog.scope(function(){
  frontend.extensions.sci.goog$module$goog$object = goog.module.get('goog.object');
});
frontend.extensions.sci.sum = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core._PLUS_);
frontend.extensions.sci.average = (function frontend$extensions$sci$average(coll){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,coll) / cljs.core.count(coll));
});
/**
 * Given a fn name from logseq.api, invokes it with the given arguments
 */
frontend.extensions.sci.call_api = (function frontend$extensions$sci$call_api(var_args){
var args__5882__auto__ = [];
var len__5876__auto___79324 = arguments.length;
var i__5877__auto___79325 = (0);
while(true){
if((i__5877__auto___79325 < len__5876__auto___79324)){
args__5882__auto__.push((arguments[i__5877__auto___79325]));

var G__79326 = (i__5877__auto___79325 + (1));
i__5877__auto___79325 = G__79326;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.extensions.sci.call_api.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.extensions.sci.call_api.cljs$core$IFn$_invoke$arity$variadic = (function (fn_name,args){
if(cljs.core.truth_((window.logseq["api"][fn_name]))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Api function does not exist",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),fn_name], null));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,(window.logseq["api"]),fn_name,args);
}));

(frontend.extensions.sci.call_api.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.extensions.sci.call_api.cljs$lang$applyTo = (function (seq79295){
var G__79296 = cljs.core.first(seq79295);
var seq79295__$1 = cljs.core.next(seq79295);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79296,seq79295__$1);
}));

frontend.extensions.sci.default_user_namespace = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"sum","sum",1777518341,null),frontend.extensions.sci.sum,new cljs.core.Symbol(null,"average","average",1148175359,null),frontend.extensions.sci.average,new cljs.core.Symbol(null,"parseFloat","parseFloat",1048011182,null),parseFloat,new cljs.core.Symbol(null,"isNaN","isNaN",74904266,null),isNaN,new cljs.core.Symbol(null,"log","log",45015523,null),console.log,new cljs.core.Symbol(null,"pprint","pprint",-1434237374,null),frontend.util.pp_str,new cljs.core.Symbol(null,"call-api","call-api",1686671962,null),frontend.extensions.sci.call_api], null);
frontend.extensions.sci.normalize_sci_options = (function frontend$extensions$sci$normalize_sci_options(options){
var namespaces = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var user_namespace = (function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.Symbol(null,"user","user",-1122004413,null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(options);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,new cljs.core.Symbol(null,"user","user",-1122004413,null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.extensions.sci.default_user_namespace,user_namespace], 0))));
});
/**
 * Second arg is a map of options for sci/eval-string
 */
frontend.extensions.sci.eval_string = (function frontend$extensions$sci$eval_string(var_args){
var G__79304 = arguments.length;
switch (G__79304) {
case 1:
return frontend.extensions.sci.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.sci.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(frontend.extensions.sci.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return frontend.extensions.sci.eval_string.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.extensions.sci.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,options){
try{return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(s,frontend.extensions.sci.normalize_sci_options(options));
}catch (e79305){var e = e79305;
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.extensions.sci",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sci-eval-failed","sci-eval-failed",-741503007),e,new cljs.core.Keyword(null,"line","line",212345235),58], null)),null);
} else {
return null;
}
}}));

(frontend.extensions.sci.eval_string.cljs$lang$maxFixedArity = 2);

frontend.extensions.sci.call_fn = (function frontend$extensions$sci$call_fn(var_args){
var args__5882__auto__ = [];
var len__5876__auto___79334 = arguments.length;
var i__5877__auto___79335 = (0);
while(true){
if((i__5877__auto___79335 < len__5876__auto___79334)){
args__5882__auto__.push((arguments[i__5877__auto___79335]));

var G__79336 = (i__5877__auto___79335 + (1));
i__5877__auto___79335 = G__79336;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return frontend.extensions.sci.call_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(frontend.extensions.sci.call_fn.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));

(frontend.extensions.sci.call_fn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(frontend.extensions.sci.call_fn.cljs$lang$applyTo = (function (seq79306){
var G__79307 = cljs.core.first(seq79306);
var seq79306__$1 = cljs.core.next(seq79306);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79307,seq79306__$1);
}));

/**
 * Evaluate code with sci in a block context
 */
frontend.extensions.sci.eval_result = (function frontend$extensions$sci$eval_result(code,block){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","results","view/results",-1129796260)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.results.mt-1","div.results.mt-1",-1175435307),(function (){var result = frontend.extensions.sci.eval_string.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"block","block",-1989749559,null),block], null)], null));
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.vector_QMARK_(result);
if(and__5140__auto__){
return new cljs.core.Keyword(null,"hiccup","hiccup",1218876238).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(result));
} else {
return and__5140__auto__;
}
})())){
return result;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.code","pre.code",2043838796),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))], null);
}
})()], null)], null);
});

//# sourceMappingURL=frontend.extensions.sci.js.map
