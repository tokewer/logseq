goog.provide('rewrite_clj.parser.token');
rewrite_clj.parser.token.read_to_boundary = (function rewrite_clj$parser$token$read_to_boundary(var_args){
var args__5882__auto__ = [];
var len__5876__auto___53443 = arguments.length;
var i__5877__auto___53444 = (0);
while(true){
if((i__5877__auto___53444 < len__5876__auto___53443)){
args__5882__auto__.push((arguments[i__5877__auto___53444]));

var G__53445 = (i__5877__auto___53444 + (1));
i__5877__auto___53444 = G__53445;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return rewrite_clj.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(rewrite_clj.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (reader,p__53435){
var vec__53436 = p__53435;
var allowed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53436,(0),null);
var allowed_QMARK_ = cljs.core.set(allowed);
return rewrite_clj.reader.read_until(reader,(function (p1__53432_SHARP_){
var and__5140__auto__ = cljs.core.not((allowed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? allowed_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__53432_SHARP_) : allowed_QMARK_.call(null,p1__53432_SHARP_)));
if(and__5140__auto__){
return rewrite_clj.reader.whitespace_or_boundary_QMARK_(p1__53432_SHARP_);
} else {
return and__5140__auto__;
}
}));
}));

(rewrite_clj.parser.token.read_to_boundary.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_clj.parser.token.read_to_boundary.cljs$lang$applyTo = (function (seq53433){
var G__53434 = cljs.core.first(seq53433);
var seq53433__$1 = cljs.core.next(seq53433);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53434,seq53433__$1);
}));

rewrite_clj.parser.token.read_to_char_boundary = (function rewrite_clj$parser$token$read_to_char_boundary(reader){
var c = rewrite_clj.reader.next(reader);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,"\\"))?rewrite_clj.parser.token.read_to_boundary(reader):"")));
});
/**
 * Symbols allow for certain boundary characters that have
 * to be handled explicitly.
 */
rewrite_clj.parser.token.symbol_node = (function rewrite_clj$parser$token$symbol_node(reader,value,value_string){
var suffix = rewrite_clj.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'",":"], null)], 0));
if(cljs.core.empty_QMARK_(suffix)){
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2(value,value_string);
} else {
var s = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_string)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix));
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2(rewrite_clj.reader.read_symbol(s),s);
}
});
/**
 * Checks whether the reader is at the start of a number literal
 * 
 *   Cribbed and adapted from clojure.tools.reader.impl.commons
 */
rewrite_clj.parser.token.number_literal_QMARK_ = (function rewrite_clj$parser$token$number_literal_QMARK_(p__53439){
var vec__53440 = p__53439;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53440,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53440,(1),null);
var or__5142__auto__ = rewrite_clj.interop.numeric_QMARK_(c1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = ((("+" === c1)) || (("-" === c1)));
if(and__5140__auto__){
return rewrite_clj.interop.numeric_QMARK_(c2);
} else {
return and__5140__auto__;
}
}
});
/**
 * Parse a single token. For example: symbol, number or character.
 */
rewrite_clj.parser.token.parse_token = (function rewrite_clj$parser$token$parse_token(reader){
var first_char = rewrite_clj.reader.next(reader);
var s = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_char)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_char,"\\"))?rewrite_clj.parser.token.read_to_char_boundary(reader):rewrite_clj.parser.token.read_to_boundary(reader))));
var v = (cljs.core.truth_((function (){var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_char,"\\");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_char,"#");
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
return rewrite_clj.parser.token.number_literal_QMARK_(s);
}
}
})())?rewrite_clj.reader.string__GT_edn(s):rewrite_clj.reader.read_symbol(s));
if((v instanceof cljs.core.Symbol)){
return rewrite_clj.parser.token.symbol_node(reader,v,s);
} else {
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2(v,s);
}
});

//# sourceMappingURL=rewrite_clj.parser.token.js.map
