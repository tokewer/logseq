goog.provide('frontend.debug');
frontend.debug.pprint = (function frontend$debug$pprint(var_args){
var args__5882__auto__ = [];
var len__5876__auto___57261 = arguments.length;
var i__5877__auto___57262 = (0);
while(true){
if((i__5877__auto___57262 < len__5876__auto___57261)){
args__5882__auto__.push((arguments[i__5877__auto___57262]));

var G__57265 = (i__5877__auto___57262 + (1));
i__5877__auto___57262 = G__57265;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
if(cljs.core.truth_(frontend.state.developer_mode_QMARK_())){
var seq__57232 = cljs.core.seq(xs);
var chunk__57233 = null;
var count__57234 = (0);
var i__57235 = (0);
while(true){
if((i__57235 < count__57234)){
var x = chunk__57233.cljs$core$IIndexed$_nth$arity$2(null,i__57235);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__57267 = seq__57232;
var G__57268 = chunk__57233;
var G__57269 = count__57234;
var G__57270 = (i__57235 + (1));
seq__57232 = G__57267;
chunk__57233 = G__57268;
count__57234 = G__57269;
i__57235 = G__57270;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__57232);
if(temp__5825__auto__){
var seq__57232__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57232__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__57232__$1);
var G__57271 = cljs.core.chunk_rest(seq__57232__$1);
var G__57272 = c__5673__auto__;
var G__57273 = cljs.core.count(c__5673__auto__);
var G__57274 = (0);
seq__57232 = G__57271;
chunk__57233 = G__57272;
count__57234 = G__57273;
i__57235 = G__57274;
continue;
} else {
var x = cljs.core.first(seq__57232__$1);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);


var G__57275 = cljs.core.next(seq__57232__$1);
var G__57276 = null;
var G__57277 = (0);
var G__57278 = (0);
seq__57232 = G__57275;
chunk__57233 = G__57276;
count__57234 = G__57277;
i__57235 = G__57278;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(frontend.debug.pprint.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(frontend.debug.pprint.cljs$lang$applyTo = (function (seq57231){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57231));
}));


//# sourceMappingURL=frontend.debug.js.map
