goog.provide('frontend.diff');
frontend.diff.inline_special_chars = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["`",null,"$",null,"*",null,"+",null,"/",null,"^",null,"~",null,"_",null], null), null);
frontend.diff.markdown_link_QMARK_ = (function frontend$diff$markdown_link_QMARK_(markup,current_line,pos){
var and__5140__auto__ = current_line;
if(cljs.core.truth_(and__5140__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(markup,pos),"]")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frontend.util.nth_safe(markup,(pos + (1))),"(")) && (((clojure.string.includes_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(current_line,(0),pos),"[")) && (clojure.string.includes_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(current_line,pos),")")))))));
} else {
return and__5140__auto__;
}
});
frontend.diff.find_position = (function frontend$diff$find_position(markup,text){
if(((typeof markup === 'string') && (typeof text === 'string'))){
try{var pos = (function (){var t1 = cljs.core.seq(clojure.string.lower_case(markup));
var t2 = cljs.core.seq(clojure.string.lower_case(text));
var i1 = (0);
var i2 = (0);
while(true){
var vec__66116 = t1;
var seq__66117 = cljs.core.seq(vec__66116);
var first__66118 = cljs.core.first(seq__66117);
var seq__66117__$1 = cljs.core.next(seq__66117);
var h1 = first__66118;
var r1 = seq__66117__$1;
var vec__66119 = t2;
var seq__66120 = cljs.core.seq(vec__66119);
var first__66121 = cljs.core.first(seq__66120);
var seq__66120__$1 = cljs.core.next(seq__66120);
var h2 = first__66121;
var r2 = seq__66120__$1;
if(((cljs.core.empty_QMARK_(t1)) || (cljs.core.empty_QMARK_(t2)))){
return i1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(h1,h2)){
var G__66130 = r1;
var G__66131 = r2;
var G__66132 = (i1 + (1));
var G__66133 = (i2 + (1));
t1 = G__66130;
t2 = G__66131;
i1 = G__66132;
i2 = G__66133;
continue;
} else {
if(cljs.core.truth_((function (){var fexpr__66122 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [" ",null,"[",null,"]",null], null), null);
return (fexpr__66122.cljs$core$IFn$_invoke$arity$1 ? fexpr__66122.cljs$core$IFn$_invoke$arity$1(h2) : fexpr__66122.call(null,h2));
})())){
var G__66134 = t1;
var G__66135 = r2;
var G__66136 = i1;
var G__66137 = (i2 + (1));
t1 = G__66134;
t2 = G__66135;
i1 = G__66136;
i2 = G__66137;
continue;
} else {
var G__66138 = r1;
var G__66139 = t2;
var G__66140 = (i1 + (1));
var G__66141 = i2;
t1 = G__66138;
t2 = G__66139;
i1 = G__66140;
i2 = G__66141;
continue;

}
}
}
break;
}
})();
var current_line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(frontend.util.text.get_current_line_by_pos(markup,pos));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(frontend.util.nth_safe(markup,pos),frontend.util.nth_safe(markup,(pos + (1))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["]"], 0))){
return (pos + (2));
} else {
if(cljs.core.contains_QMARK_(frontend.diff.inline_special_chars,frontend.util.nth_safe(markup,pos))){
var matched = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(frontend.diff.inline_special_chars,logseq.common.util.safe_subs.cljs$core$IFn$_invoke$arity$2(markup,pos)));
var matched_QMARK_ = (function (){var and__5140__auto__ = current_line;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.includes_QMARK_(current_line,clojure.string.reverse(matched));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(matched_QMARK_)){
return (pos + cljs.core.count(matched));
} else {
return pos;
}
} else {
if(cljs.core.truth_(frontend.diff.markdown_link_QMARK_(markup,current_line,pos))){
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(current_line,pos),")");
return (pos + (idx + (1)));
} else {
return pos;

}
}
}
}catch (e66103){var e = e66103;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.diff",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("diff","find-position","diff/find-position",-780421417),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e], null),new cljs.core.Keyword(null,"line","line",212345235),64], null)),null);
} else {
}

return cljs.core.count(markup);
}} else {
return null;
}
});

//# sourceMappingURL=frontend.diff.js.map
