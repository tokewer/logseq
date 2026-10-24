goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__5882__auto__ = [];
var len__5876__auto___103060 = arguments.length;
var i__5877__auto___103061 = (0);
while(true){
if((i__5877__auto___103061 < len__5876__auto___103060)){
args__5882__auto__.push((arguments[i__5877__auto___103061]));

var G__103062 = (i__5877__auto___103061 + (1));
i__5877__auto___103061 = G__103062;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq103053){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq103053));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__5882__auto__ = [];
var len__5876__auto___103065 = arguments.length;
var i__5877__auto___103066 = (0);
while(true){
if((i__5877__auto___103066 < len__5876__auto___103065)){
args__5882__auto__.push((arguments[i__5877__auto___103066]));

var G__103067 = (i__5877__auto___103066 + (1));
i__5877__auto___103066 = G__103067;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq103054){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq103054));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__103056 = "";
var G__103056__$1 = (cljs.core.truth_(re.ignoreCase)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__103056)+"i"):G__103056);
var G__103056__$2 = (cljs.core.truth_(re.multiline)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__103056__$1)+"m"):G__103056__$1);
if(cljs.core.truth_(re.unicode)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__103056__$2)+"u");
} else {
return G__103056__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
