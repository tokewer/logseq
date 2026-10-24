goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47318 = arguments.length;
var i__5877__auto___47319 = (0);
while(true){
if((i__5877__auto___47319 < len__5876__auto___47318)){
args__5882__auto__.push((arguments[i__5877__auto___47319]));

var G__47320 = (i__5877__auto___47319 + (1));
i__5877__auto___47319 = G__47320;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((4) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5883__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__47305){
var map__47306 = p__47305;
var map__47306__$1 = cljs.core.__destructure_map(map__47306);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47306__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5823__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5823__auto__){
var vec__47308 = temp__5823__auto__;
var seq__47309 = cljs.core.seq(vec__47308);
var first__47310 = cljs.core.first(seq__47309);
var seq__47309__$1 = cljs.core.next(seq__47309);
var first = first__47310;
var rest = seq__47309__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq47297){
var G__47298 = cljs.core.first(seq47297);
var seq47297__$1 = cljs.core.next(seq47297);
var G__47299 = cljs.core.first(seq47297__$1);
var seq47297__$2 = cljs.core.next(seq47297__$1);
var G__47300 = cljs.core.first(seq47297__$2);
var seq47297__$3 = cljs.core.next(seq47297__$2);
var G__47301 = cljs.core.first(seq47297__$3);
var seq47297__$4 = cljs.core.next(seq47297__$3);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47298,G__47299,G__47300,G__47301,seq47297__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__5142__auto__ = (function (){var G__47316 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__47316) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__47316));
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
