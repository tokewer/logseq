goog.provide('logseq.common.log');
logseq.common.log.error = (function logseq$common$log$error(var_args){
var args__5882__auto__ = [];
var len__5876__auto___32627 = arguments.length;
var i__5877__auto___32628 = (0);
while(true){
if((i__5877__auto___32628 < len__5876__auto___32627)){
args__5882__auto__.push((arguments[i__5877__auto___32628]));

var G__32630 = (i__5877__auto___32628 + (1));
i__5877__auto___32628 = G__32630;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return logseq.common.log.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(logseq.common.log.error.cljs$core$IFn$_invoke$arity$variadic = (function (msgs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.error,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,msgs));
}));

(logseq.common.log.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(logseq.common.log.error.cljs$lang$applyTo = (function (seq32624){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32624));
}));


//# sourceMappingURL=logseq.common.log.js.map
