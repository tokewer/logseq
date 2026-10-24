goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__101941 = (line + (1));
var G__101942 = (1);
var G__101943 = (counter + (1));
line = G__101941;
col = G__101942;
counter = G__101943;
continue;
} else {
var G__101944 = line;
var G__101945 = (col + (1));
var G__101946 = (counter + (1));
line = G__101944;
col = G__101945;
counter = G__101946;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__101947 = cljs.core.next(chars);
var G__101948 = (n__$1 - (1));
chars = G__101947;
n__$1 = G__101948;
continue;
} else {
var G__101949 = cljs.core.next(chars);
var G__101950 = n__$1;
chars = G__101949;
n__$1 = G__101950;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 * and accounts for horizontal tabs which might change
 * the alignment of the '^' to the error location.
 */
instaparse.failure.marker = (function instaparse$failure$marker(text,n){
if(cljs.core.truth_((function (){var and__5140__auto__ = text;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.integer_QMARK_(n);
} else {
return and__5140__auto__;
}
})())){
var marker_text = clojure.string.replace(text,/[^\s]/," ");
if((n <= (1))){
return "^";
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(marker_text,(0),(n - (1))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__101921){
var map__101922 = p__101921;
var map__101922__$1 = cljs.core.__destructure_map(map__101922);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101922__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101922__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101922__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__101922__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"Parse error at line "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)+", column "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)+":")], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(text,column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__101925_101953 = cljs.core.seq(full_reasons);
var chunk__101926_101954 = null;
var count__101927_101955 = (0);
var i__101928_101956 = (0);
while(true){
if((i__101928_101956 < count__101927_101955)){
var r_101957 = chunk__101926_101954.cljs$core$IIndexed$_nth$arity$2(null,i__101928_101956);
instaparse.failure.print_reason(r_101957);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__101958 = seq__101925_101953;
var G__101959 = chunk__101926_101954;
var G__101960 = count__101927_101955;
var G__101961 = (i__101928_101956 + (1));
seq__101925_101953 = G__101958;
chunk__101926_101954 = G__101959;
count__101927_101955 = G__101960;
i__101928_101956 = G__101961;
continue;
} else {
var temp__5825__auto___101962 = cljs.core.seq(seq__101925_101953);
if(temp__5825__auto___101962){
var seq__101925_101963__$1 = temp__5825__auto___101962;
if(cljs.core.chunked_seq_QMARK_(seq__101925_101963__$1)){
var c__5673__auto___101964 = cljs.core.chunk_first(seq__101925_101963__$1);
var G__101965 = cljs.core.chunk_rest(seq__101925_101963__$1);
var G__101966 = c__5673__auto___101964;
var G__101967 = cljs.core.count(c__5673__auto___101964);
var G__101968 = (0);
seq__101925_101953 = G__101965;
chunk__101926_101954 = G__101966;
count__101927_101955 = G__101967;
i__101928_101956 = G__101968;
continue;
} else {
var r_101969 = cljs.core.first(seq__101925_101963__$1);
instaparse.failure.print_reason(r_101969);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__101970 = cljs.core.next(seq__101925_101963__$1);
var G__101971 = null;
var G__101972 = (0);
var G__101973 = (0);
seq__101925_101953 = G__101970;
chunk__101926_101954 = G__101971;
count__101927_101955 = G__101972;
i__101928_101956 = G__101973;
continue;
}
} else {
}
}
break;
}

var seq__101934 = cljs.core.seq(partial_reasons);
var chunk__101935 = null;
var count__101936 = (0);
var i__101937 = (0);
while(true){
if((i__101937 < count__101936)){
var r = chunk__101935.cljs$core$IIndexed$_nth$arity$2(null,i__101937);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__101974 = seq__101934;
var G__101975 = chunk__101935;
var G__101976 = count__101936;
var G__101977 = (i__101937 + (1));
seq__101934 = G__101974;
chunk__101935 = G__101975;
count__101936 = G__101976;
i__101937 = G__101977;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__101934);
if(temp__5825__auto__){
var seq__101934__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__101934__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__101934__$1);
var G__101978 = cljs.core.chunk_rest(seq__101934__$1);
var G__101979 = c__5673__auto__;
var G__101980 = cljs.core.count(c__5673__auto__);
var G__101981 = (0);
seq__101934 = G__101978;
chunk__101935 = G__101979;
count__101936 = G__101980;
i__101937 = G__101981;
continue;
} else {
var r = cljs.core.first(seq__101934__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__101982 = cljs.core.next(seq__101934__$1);
var G__101983 = null;
var G__101984 = (0);
var G__101985 = (0);
seq__101934 = G__101982;
chunk__101935 = G__101983;
count__101936 = G__101984;
i__101937 = G__101985;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
