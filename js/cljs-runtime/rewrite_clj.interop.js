goog.provide('rewrite_clj.interop');
/**
 * Interop version of string format
 *   Note that there a big differences between Java's format and Google Closure's format - we don't address them.
 *   %d and %s are known to work in both.
 */
rewrite_clj.interop.simple_format = (function rewrite_clj$interop$simple_format(var_args){
var args__5882__auto__ = [];
var len__5876__auto___52282 = arguments.length;
var i__5877__auto___52283 = (0);
while(true){
if((i__5877__auto___52283 < len__5876__auto___52282)){
args__5882__auto__.push((arguments[i__5877__auto___52283]));

var G__52284 = (i__5877__auto___52283 + (1));
i__5877__auto___52283 = G__52284;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return rewrite_clj.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(rewrite_clj.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,template,args);
}));

(rewrite_clj.interop.simple_format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_clj.interop.simple_format.cljs$lang$applyTo = (function (seq52279){
var G__52280 = cljs.core.first(seq52279);
var seq52279__$1 = cljs.core.next(seq52279);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52280,seq52279__$1);
}));

rewrite_clj.interop.str__GT_int = (function rewrite_clj$interop$str__GT_int(s){
return parseInt(s);
});
rewrite_clj.interop.int__GT_str = (function rewrite_clj$interop$int__GT_str(n,base){
return n.toString(base);
});
rewrite_clj.interop.min_int = (function rewrite_clj$interop$min_int(){
return Number.MIN_SAFE_INTEGER;
});
rewrite_clj.interop.max_int = (function rewrite_clj$interop$max_int(){
return Number.MAX_SAFE_INTEGER;
});
rewrite_clj.interop.clojure_whitespace_QMARK_ = (function rewrite_clj$interop$clojure_whitespace_QMARK_(c){
var and__5140__auto__ = c;
if(cljs.core.truth_(and__5140__auto__)){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(c));
} else {
return and__5140__auto__;
}
});
rewrite_clj.interop.meta_available_QMARK_ = (function rewrite_clj$interop$meta_available_QMARK_(data){
if((!((data == null)))){
if((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Checks whether a given character is numeric
 * 
 *   Cribbed from clojure/cljs.tools.reader.impl.util.
 */
rewrite_clj.interop.numeric_QMARK_ = (function rewrite_clj$interop$numeric_QMARK_(ch){
if(cljs.core.truth_(ch)){
return goog.string.isNumeric(ch);
} else {
return null;
}
});

//# sourceMappingURL=rewrite_clj.interop.js.map
