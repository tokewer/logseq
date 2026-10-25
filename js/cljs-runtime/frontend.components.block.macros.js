goog.provide('frontend.components.block.macros');
/**
 * Given a block from a query result, returns a map of its properties indexed by
 *   property idents and titles
 */
frontend.components.block.macros.properties_by_name = (function frontend$components$block$macros$properties_by_name(block){
if((!(cljs.core.map_QMARK_(block)))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__79337){
var vec__79338 = p__79337;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79338,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79338,(1),null);
if(cljs.core.set_QMARK_(v)){
return null;
} else {
var prop_val = ((cljs.core.map_QMARK_(v))?logseq.db.frontend.property.property_value_content(v):v);
var property_title = (function (){var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(logseq.db.frontend.property.built_in_properties,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"title","title",636505583)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.name(k);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(property_title),prop_val], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,prop_val], null)], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([logseq.db.frontend.property.properties(block)], 0)));
}
});
frontend.components.block.macros.normalize_query_function = (function frontend$components$block$macros$normalize_query_function(ast_STAR_,result){
var ast = clojure.walk.prewalk((function (f){
if(((cljs.core.list_QMARK_(f)) && ((((cljs.core.second(f) instanceof cljs.core.Keyword)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"average","average",1148175359,null),null,new cljs.core.Symbol(null,"count","count",-514511684,null),null,new cljs.core.Symbol(null,"sum","sum",1777518341,null),null,new cljs.core.Symbol(null,"min","min",2085523049,null),null,new cljs.core.Symbol(null,"max","max",1701898075,null),null], null), null),cljs.core.first(f))))))){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"min","min",2085523049,null),null,new cljs.core.Symbol(null,"max","max",1701898075,null),null], null), null),cljs.core.first(f))){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"apply","apply",-1334050276,null),(new cljs.core.List(null,cljs.core.first(f),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"map","map",-1282745308,null),(new cljs.core.List(null,cljs.core.second(f),(new cljs.core.List(null,new cljs.core.Symbol(null,"result","result",-1239343558,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null));
} else {
return (new cljs.core.List(null,cljs.core.first(f),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"map","map",-1282745308,null),(new cljs.core.List(null,cljs.core.second(f),(new cljs.core.List(null,new cljs.core.Symbol(null,"result","result",-1239343558,null),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null));
}
} else {
return f;
}
}),ast_STAR_);
return clojure.walk.postwalk((function (f){
if((f instanceof cljs.core.Keyword)){
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79341_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__79341_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","properties","block/properties",708347145),f], null));
}),result);
var int_QMARK_ = cljs.core.some(cljs.core.integer_QMARK_,vals);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"b","b",-1172211299,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"result-str","result-str",977122937,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"b","b",-1172211299,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("block","properties","block/properties",708347145),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"result-num","result-num",1133657783,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"parseFloat","parseFloat",1048011182,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result-str","result-str",977122937,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result","result",-1239343558,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"isNaN","isNaN",74904266,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result-num","result-num",1133657783,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"result-str","result-str",977122937,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result-num","result-num",1133657783,null),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"or","or",1876275696,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result","result",-1239343558,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"when","when",1064114221,null),null,(1),null)),(new cljs.core.List(null,int_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return f;

}
}),ast);
});
/**
 * Convert a {{function}} SCI value into React-safe hiccup.
 * 
 *   Primitives render as text. Explicit hiccup vectors are passed through.
 *   Maps, sets, seqs, and other objects are pretty-printed so they cannot be
 *   mounted as React children.
 */
frontend.components.block.macros.function_result__GT_hiccup = (function frontend$components$block$macros$function_result__GT_hiccup(result){
if((result == null)){
return null;
} else {
if(((typeof result === 'string') || (typeof result === 'number'))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.function-macro-result","span.function-macro-result",23485812),result], null);
} else {
if(cljs.core.boolean_QMARK_(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.function-macro-result","span.function-macro-result",23485812),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result))], null);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.vector_QMARK_(result);
if(and__5140__auto__){
var or__5142__auto__ = (cljs.core.first(result) instanceof cljs.core.Keyword);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.fn_QMARK_(cljs.core.first(result));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"hiccup","hiccup",1218876238).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(result));
}
}
} else {
return and__5140__auto__;
}
})())){
return result;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.function-macro-result.whitespace-pre-wrap","span.function-macro-result.whitespace-pre-wrap",264154919),(function (){try{return clojure.string.trimr(frontend.util.pp_str(result));
}catch (e79345){var _ = e79345;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(result));
}})()], null);

}
}
}
}
});
/**
 * Provides functionality for {{function}}
 */
frontend.components.block.macros.function_macro = (function frontend$components$block$macros$function_macro(query_result_STAR_,arguments$){
try{var query_result = ((cljs.core.map_QMARK_(query_result_STAR_))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query_result_STAR_], 0)):query_result_STAR_);
var query_result_SINGLEQUOTE_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__79346_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("block","properties","block/properties",708347145)],[frontend.components.block.macros.properties_by_name(p1__79346_SHARP_)]);
}),query_result);
var fn_string = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.components.block.macros.normalize_query_function(frontend.handler.common.safe_read_string(goog.string.format("(fn [result] %s)",cljs.core.first(arguments$)),"failed to parse function"),query_result_SINGLEQUOTE_)));
var f = frontend.extensions.sci.eval_string.cljs$core$IFn$_invoke$arity$1(fn_string);
if(cljs.core.fn_QMARK_(f)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(query_result_SINGLEQUOTE_) : f.call(null,query_result_SINGLEQUOTE_));
} else {
return null;
}
}catch (e79347){var e = e79347;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("frontend.components.block.macros",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function-macro-failed","function-macro-failed",9538573),e,new cljs.core.Keyword(null,"line","line",212345235),113], null)),null);
} else {
}

return null;
}});

//# sourceMappingURL=frontend.components.block.macros.js.map
