goog.provide('frontend.components.query.view');
frontend.components.query.view.query_result = (function (){var render_fn__31744__auto__ = (function frontend$components$query$view$query_result(config,view_entity,result_STAR_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.query-result.w-full","div.query-result.w-full",-956832330),frontend.ui.catch_error(frontend.ui.block_error(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("query","error","query/error",-1139340960)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(config)], 0))], null)),frontend.components.views.view(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951),true,new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672).cljs$core$IFn$_invoke$arity$1(config)], null),new cljs.core.Keyword(null,"title-key","title-key",830482796),new cljs.core.Keyword("view.table","live-query-title","view.table/live-query-title",-911685534),new cljs.core.Keyword(null,"view-uuid","view-uuid",2029101620),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(view_entity),new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610),new cljs.core.Keyword(null,"query-result","query-result",-833644142),new cljs.core.Keyword(null,"query-row-uuids","query-row-uuids",-820908054),result_STAR_], null)))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$query$view$query_result__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__47667 = cljs.core.first(args__31746__auto__);
var G__47668 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__47667,G__47668) : io.factorhouse.hsx.core.obj_get.call(null,G__47667,G__47668));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"query-result","query-result",806887385,null),args__31746__auto__),frontend$components$query$view$query_result,args__31746__auto__,null);
}
};
var frontend$components$query$view$query_result = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__47673__i = 0, G__47673__a = new Array(arguments.length -  0);
while (G__47673__i < G__47673__a.length) {G__47673__a[G__47673__i] = arguments[G__47673__i + 0]; ++G__47673__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__47673__a,0,null);
} 
return frontend$components$query$view$query_result__delegate.call(this,args__31746__auto__);};
frontend$components$query$view$query_result.cljs$lang$maxFixedArity = 0;
frontend$components$query$view$query_result.cljs$lang$applyTo = (function (arglist__47674){
var args__31746__auto__ = cljs.core.seq(arglist__47674);
return frontend$components$query$view$query_result__delegate(args__31746__auto__);
});
frontend$components$query$view$query_result.cljs$core$IFn$_invoke$arity$variadic = frontend$components$query$view$query_result__delegate;
return frontend$components$query$view$query_result;
})()
;
var memo_comp__31747__auto__ = (function (){var G__47671 = comp__31745__auto__;
var G__47672 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__47671,G__47672) : io.factorhouse.hsx.core.react_memo.call(null,G__47671,G__47672));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"query-result");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.query.view.js.map
