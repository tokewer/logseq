goog.provide('sci.impl.macroexpand');
sci.impl.macroexpand.macroexpand_1 = (function sci$impl$macroexpand$macroexpand_1(ctx,expr){
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true);
var original_expr = expr;
var _STAR_ctx_STAR__orig_val__73296 = sci.ctx_store._STAR_ctx_STAR_;
var _STAR_ctx_STAR__temp_val__73297 = ctx__$1;
(sci.ctx_store._STAR_ctx_STAR_ = _STAR_ctx_STAR__temp_val__73297);

try{if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.special_syms,op))){
return expr;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","defrecord","clojure.core/defrecord",581689476,null),op)){
return expr;
} else {
var f = (function (){try{return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx__$1,op,true);
}catch (e73304){var _ = e73304;
return new cljs.core.Keyword("sci.impl.macroexpand","unresolved","sci.impl.macroexpand/unresolved",-1337804580);
}})();
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.macroexpand","unresolved","sci.impl.macroexpand/unresolved",-1337804580),f)){
return expr;
} else {
var var_QMARK_ = sci.impl.utils.var_QMARK_(f);
var macro_var_QMARK_ = (function (){var and__5140__auto__ = var_QMARK_;
if(and__5140__auto__){
return sci.impl.vars.isMacro(f);
} else {
return and__5140__auto__;
}
})();
var f__$1 = (cljs.core.truth_(macro_var_QMARK_)?cljs.core.deref(f):f);
if(cljs.core.truth_((function (){var or__5142__auto__ = macro_var_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return sci.impl.utils.macro_QMARK_(f__$1);
}
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1),cljs.core.rest(expr));
} else {
if(clojure.string.starts_with_QMARK_((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)),".")){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,".",".",1975675962,null),cljs.core.second(expr),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)),(1))),cljs.core.nnext(expr));
} else {
return expr;
}
}
}

}
}
} else {
return expr;
}
} else {
return expr;
}
}finally {(sci.ctx_store._STAR_ctx_STAR_ = _STAR_ctx_STAR__orig_val__73296);
}});
sci.impl.macroexpand.macroexpand = (function sci$impl$macroexpand$macroexpand(ctx,form){
var ex = sci.impl.macroexpand.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.macroexpand.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macroexpand.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.macroexpand.macroexpand.call(null,ctx,ex));
}
});

//# sourceMappingURL=sci.impl.macroexpand.js.map
