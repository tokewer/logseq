goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47921 = arguments.length;
var i__5877__auto___47922 = (0);
while(true){
if((i__5877__auto___47922 < len__5876__auto___47921)){
args__5882__auto__.push((arguments[i__5877__auto___47922]));

var G__47923 = (i__5877__auto___47922 + (1));
i__5877__auto___47922 = G__47923;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((4) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq47660){
var G__47661 = cljs.core.first(seq47660);
var seq47660__$1 = cljs.core.next(seq47660);
var G__47662 = cljs.core.first(seq47660__$1);
var seq47660__$2 = cljs.core.next(seq47660__$1);
var G__47663 = cljs.core.first(seq47660__$2);
var seq47660__$3 = cljs.core.next(seq47660__$2);
var G__47664 = cljs.core.first(seq47660__$3);
var seq47660__$4 = cljs.core.next(seq47660__$3);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47661,G__47662,G__47663,G__47664,seq47660__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47927 = arguments.length;
var i__5877__auto___47928 = (0);
while(true){
if((i__5877__auto___47928 < len__5876__auto___47927)){
args__5882__auto__.push((arguments[i__5877__auto___47928]));

var G__47929 = (i__5877__auto___47928 + (1));
i__5877__auto___47928 = G__47929;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__47617__auto__,rest__47618__auto__){
var convert_case__47619__auto__ = (function (p1__47616__47620__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__47616__47620__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47618__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47617__auto__,convert_case__47619__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq47672){
var G__47673 = cljs.core.first(seq47672);
var seq47672__$1 = cljs.core.next(seq47672);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47673,seq47672__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47930 = arguments.length;
var i__5877__auto___47932 = (0);
while(true){
if((i__5877__auto___47932 < len__5876__auto___47930)){
args__5882__auto__.push((arguments[i__5877__auto___47932]));

var G__47946 = (i__5877__auto___47932 + (1));
i__5877__auto___47932 = G__47946;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq47677){
var G__47678 = cljs.core.first(seq47677);
var seq47677__$1 = cljs.core.next(seq47677);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47678,seq47677__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47952 = arguments.length;
var i__5877__auto___47953 = (0);
while(true){
if((i__5877__auto___47953 < len__5876__auto___47952)){
args__5882__auto__.push((arguments[i__5877__auto___47953]));

var G__47956 = (i__5877__auto___47953 + (1));
i__5877__auto___47953 = G__47956;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq47679){
var G__47680 = cljs.core.first(seq47679);
var seq47679__$1 = cljs.core.next(seq47679);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47680,seq47679__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47958 = arguments.length;
var i__5877__auto___47959 = (0);
while(true){
if((i__5877__auto___47959 < len__5876__auto___47958)){
args__5882__auto__.push((arguments[i__5877__auto___47959]));

var G__47960 = (i__5877__auto___47959 + (1));
i__5877__auto___47959 = G__47960;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq47689){
var G__47690 = cljs.core.first(seq47689);
var seq47689__$1 = cljs.core.next(seq47689);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47690,seq47689__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47964 = arguments.length;
var i__5877__auto___47965 = (0);
while(true){
if((i__5877__auto___47965 < len__5876__auto___47964)){
args__5882__auto__.push((arguments[i__5877__auto___47965]));

var G__47966 = (i__5877__auto___47965 + (1));
i__5877__auto___47965 = G__47966;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47617__auto__,rest__47618__auto__){
var convert_case__47619__auto__ = (function (p1__47616__47620__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__47616__47620__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47618__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47617__auto__,convert_case__47619__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq47691){
var G__47692 = cljs.core.first(seq47691);
var seq47691__$1 = cljs.core.next(seq47691);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47692,seq47691__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47969 = arguments.length;
var i__5877__auto___47970 = (0);
while(true){
if((i__5877__auto___47970 < len__5876__auto___47969)){
args__5882__auto__.push((arguments[i__5877__auto___47970]));

var G__47971 = (i__5877__auto___47970 + (1));
i__5877__auto___47970 = G__47971;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq47696){
var G__47697 = cljs.core.first(seq47696);
var seq47696__$1 = cljs.core.next(seq47696);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47697,seq47696__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47974 = arguments.length;
var i__5877__auto___47975 = (0);
while(true){
if((i__5877__auto___47975 < len__5876__auto___47974)){
args__5882__auto__.push((arguments[i__5877__auto___47975]));

var G__47980 = (i__5877__auto___47975 + (1));
i__5877__auto___47975 = G__47980;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq47701){
var G__47702 = cljs.core.first(seq47701);
var seq47701__$1 = cljs.core.next(seq47701);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47702,seq47701__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47984 = arguments.length;
var i__5877__auto___47985 = (0);
while(true){
if((i__5877__auto___47985 < len__5876__auto___47984)){
args__5882__auto__.push((arguments[i__5877__auto___47985]));

var G__47986 = (i__5877__auto___47985 + (1));
i__5877__auto___47985 = G__47986;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq47703){
var G__47704 = cljs.core.first(seq47703);
var seq47703__$1 = cljs.core.next(seq47703);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47704,seq47703__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47988 = arguments.length;
var i__5877__auto___47989 = (0);
while(true){
if((i__5877__auto___47989 < len__5876__auto___47988)){
args__5882__auto__.push((arguments[i__5877__auto___47989]));

var G__47990 = (i__5877__auto___47989 + (1));
i__5877__auto___47989 = G__47990;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__47617__auto__,rest__47618__auto__){
var convert_case__47619__auto__ = (function (p1__47616__47620__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__47616__47620__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47618__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47617__auto__,convert_case__47619__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq47708){
var G__47709 = cljs.core.first(seq47708);
var seq47708__$1 = cljs.core.next(seq47708);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47709,seq47708__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47994 = arguments.length;
var i__5877__auto___47995 = (0);
while(true){
if((i__5877__auto___47995 < len__5876__auto___47994)){
args__5882__auto__.push((arguments[i__5877__auto___47995]));

var G__47996 = (i__5877__auto___47995 + (1));
i__5877__auto___47995 = G__47996;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq47717){
var G__47718 = cljs.core.first(seq47717);
var seq47717__$1 = cljs.core.next(seq47717);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47718,seq47717__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5882__auto__ = [];
var len__5876__auto___47997 = arguments.length;
var i__5877__auto___47998 = (0);
while(true){
if((i__5877__auto___47998 < len__5876__auto___47997)){
args__5882__auto__.push((arguments[i__5877__auto___47998]));

var G__47999 = (i__5877__auto___47998 + (1));
i__5877__auto___47998 = G__47999;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq47729){
var G__47730 = cljs.core.first(seq47729);
var seq47729__$1 = cljs.core.next(seq47729);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47730,seq47729__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48002 = arguments.length;
var i__5877__auto___48003 = (0);
while(true){
if((i__5877__auto___48003 < len__5876__auto___48002)){
args__5882__auto__.push((arguments[i__5877__auto___48003]));

var G__48004 = (i__5877__auto___48003 + (1));
i__5877__auto___48003 = G__48004;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq47736){
var G__47737 = cljs.core.first(seq47736);
var seq47736__$1 = cljs.core.next(seq47736);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47737,seq47736__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48005 = arguments.length;
var i__5877__auto___48006 = (0);
while(true){
if((i__5877__auto___48006 < len__5876__auto___48005)){
args__5882__auto__.push((arguments[i__5877__auto___48006]));

var G__48008 = (i__5877__auto___48006 + (1));
i__5877__auto___48006 = G__48008;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__47617__auto__,rest__47618__auto__){
var convert_case__47619__auto__ = (function (p1__47616__47620__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__47616__47620__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47618__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47617__auto__,convert_case__47619__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq47743){
var G__47744 = cljs.core.first(seq47743);
var seq47743__$1 = cljs.core.next(seq47743);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47744,seq47743__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48009 = arguments.length;
var i__5877__auto___48010 = (0);
while(true){
if((i__5877__auto___48010 < len__5876__auto___48009)){
args__5882__auto__.push((arguments[i__5877__auto___48010]));

var G__48011 = (i__5877__auto___48010 + (1));
i__5877__auto___48010 = G__48011;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq47755){
var G__47756 = cljs.core.first(seq47755);
var seq47755__$1 = cljs.core.next(seq47755);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47756,seq47755__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48012 = arguments.length;
var i__5877__auto___48013 = (0);
while(true){
if((i__5877__auto___48013 < len__5876__auto___48012)){
args__5882__auto__.push((arguments[i__5877__auto___48013]));

var G__48014 = (i__5877__auto___48013 + (1));
i__5877__auto___48013 = G__48014;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq47763){
var G__47764 = cljs.core.first(seq47763);
var seq47763__$1 = cljs.core.next(seq47763);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47764,seq47763__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48015 = arguments.length;
var i__5877__auto___48016 = (0);
while(true){
if((i__5877__auto___48016 < len__5876__auto___48015)){
args__5882__auto__.push((arguments[i__5877__auto___48016]));

var G__48017 = (i__5877__auto___48016 + (1));
i__5877__auto___48016 = G__48017;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq47769){
var G__47770 = cljs.core.first(seq47769);
var seq47769__$1 = cljs.core.next(seq47769);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47770,seq47769__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48019 = arguments.length;
var i__5877__auto___48020 = (0);
while(true){
if((i__5877__auto___48020 < len__5876__auto___48019)){
args__5882__auto__.push((arguments[i__5877__auto___48020]));

var G__48021 = (i__5877__auto___48020 + (1));
i__5877__auto___48020 = G__48021;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47617__auto__,rest__47618__auto__){
var convert_case__47619__auto__ = (function (p1__47616__47620__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__47616__47620__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47618__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47617__auto__,convert_case__47619__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq47783){
var G__47784 = cljs.core.first(seq47783);
var seq47783__$1 = cljs.core.next(seq47783);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47784,seq47783__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48022 = arguments.length;
var i__5877__auto___48023 = (0);
while(true){
if((i__5877__auto___48023 < len__5876__auto___48022)){
args__5882__auto__.push((arguments[i__5877__auto___48023]));

var G__48024 = (i__5877__auto___48023 + (1));
i__5877__auto___48023 = G__48024;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq47788){
var G__47789 = cljs.core.first(seq47788);
var seq47788__$1 = cljs.core.next(seq47788);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47789,seq47788__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48025 = arguments.length;
var i__5877__auto___48026 = (0);
while(true){
if((i__5877__auto___48026 < len__5876__auto___48025)){
args__5882__auto__.push((arguments[i__5877__auto___48026]));

var G__48027 = (i__5877__auto___48026 + (1));
i__5877__auto___48026 = G__48027;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq47792){
var G__47793 = cljs.core.first(seq47792);
var seq47792__$1 = cljs.core.next(seq47792);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47793,seq47792__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48028 = arguments.length;
var i__5877__auto___48029 = (0);
while(true){
if((i__5877__auto___48029 < len__5876__auto___48028)){
args__5882__auto__.push((arguments[i__5877__auto___48029]));

var G__48030 = (i__5877__auto___48029 + (1));
i__5877__auto___48029 = G__48030;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq47803){
var G__47804 = cljs.core.first(seq47803);
var seq47803__$1 = cljs.core.next(seq47803);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47804,seq47803__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48032 = arguments.length;
var i__5877__auto___48033 = (0);
while(true){
if((i__5877__auto___48033 < len__5876__auto___48032)){
args__5882__auto__.push((arguments[i__5877__auto___48033]));

var G__48034 = (i__5877__auto___48033 + (1));
i__5877__auto___48033 = G__48034;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47617__auto__,rest__47618__auto__){
var convert_case__47619__auto__ = (function (p1__47616__47620__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__47616__47620__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47618__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47617__auto__,convert_case__47619__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq47814){
var G__47815 = cljs.core.first(seq47814);
var seq47814__$1 = cljs.core.next(seq47814);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47815,seq47814__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48035 = arguments.length;
var i__5877__auto___48036 = (0);
while(true){
if((i__5877__auto___48036 < len__5876__auto___48035)){
args__5882__auto__.push((arguments[i__5877__auto___48036]));

var G__48037 = (i__5877__auto___48036 + (1));
i__5877__auto___48036 = G__48037;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq47832){
var G__47833 = cljs.core.first(seq47832);
var seq47832__$1 = cljs.core.next(seq47832);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47833,seq47832__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48038 = arguments.length;
var i__5877__auto___48039 = (0);
while(true){
if((i__5877__auto___48039 < len__5876__auto___48038)){
args__5882__auto__.push((arguments[i__5877__auto___48039]));

var G__48040 = (i__5877__auto___48039 + (1));
i__5877__auto___48039 = G__48040;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq47840){
var G__47844 = cljs.core.first(seq47840);
var seq47840__$1 = cljs.core.next(seq47840);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47844,seq47840__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48041 = arguments.length;
var i__5877__auto___48042 = (0);
while(true){
if((i__5877__auto___48042 < len__5876__auto___48041)){
args__5882__auto__.push((arguments[i__5877__auto___48042]));

var G__48043 = (i__5877__auto___48042 + (1));
i__5877__auto___48042 = G__48043;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq47849){
var G__47850 = cljs.core.first(seq47849);
var seq47849__$1 = cljs.core.next(seq47849);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47850,seq47849__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48044 = arguments.length;
var i__5877__auto___48045 = (0);
while(true){
if((i__5877__auto___48045 < len__5876__auto___48044)){
args__5882__auto__.push((arguments[i__5877__auto___48045]));

var G__48046 = (i__5877__auto___48045 + (1));
i__5877__auto___48045 = G__48046;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47617__auto__,rest__47618__auto__){
var convert_case__47619__auto__ = (function (p1__47616__47620__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__47616__47620__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47618__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47617__auto__,convert_case__47619__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq47881){
var G__47882 = cljs.core.first(seq47881);
var seq47881__$1 = cljs.core.next(seq47881);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47882,seq47881__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48047 = arguments.length;
var i__5877__auto___48048 = (0);
while(true){
if((i__5877__auto___48048 < len__5876__auto___48047)){
args__5882__auto__.push((arguments[i__5877__auto___48048]));

var G__48049 = (i__5877__auto___48048 + (1));
i__5877__auto___48048 = G__48049;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq47890){
var G__47891 = cljs.core.first(seq47890);
var seq47890__$1 = cljs.core.next(seq47890);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47891,seq47890__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48050 = arguments.length;
var i__5877__auto___48051 = (0);
while(true){
if((i__5877__auto___48051 < len__5876__auto___48050)){
args__5882__auto__.push((arguments[i__5877__auto___48051]));

var G__48052 = (i__5877__auto___48051 + (1));
i__5877__auto___48051 = G__48052;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq47897){
var G__47898 = cljs.core.first(seq47897);
var seq47897__$1 = cljs.core.next(seq47897);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47898,seq47897__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5882__auto__ = [];
var len__5876__auto___48053 = arguments.length;
var i__5877__auto___48054 = (0);
while(true){
if((i__5877__auto___48054 < len__5876__auto___48053)){
args__5882__auto__.push((arguments[i__5877__auto___48054]));

var G__48055 = (i__5877__auto___48054 + (1));
i__5877__auto___48054 = G__48055;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47626__auto__,rest__47627__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__47626__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47627__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq47906){
var G__47907 = cljs.core.first(seq47906);
var seq47906__$1 = cljs.core.next(seq47906);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47907,seq47906__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
