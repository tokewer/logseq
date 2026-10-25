goog.provide('frontend.components.property.default_value');
/**
 * Pull pattern for the built-in :logseq.property/default-value entity.
 * 
 *   :property/closed-values is a virtual entity-plus attribute, not a datascript
 *   ref. Including it in a pull map spec throws and leaves the default-value
 *   submenu empty.
 */
frontend.components.property.default_value.default_value_property_pull_pattern = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
frontend.components.property.default_value.default_value_config = (function (){var render_fn__31744__auto__ = (function frontend$components$property$default_value$default_value_config(property_STAR_){
var property = (function (){var or__5142__auto__ = frontend.db.hooks.use_block(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property_STAR_));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return property_STAR_;
}
})();
var vec__45477 = logseq.shui.hooks.use_state(null);
var default_value_property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45477,(0),null);
var set_default_value_property_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45477,(1),null);
logseq.shui.hooks.use_effect_BANG_((function (){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),frontend.components.property.default_value.default_value_property_pull_pattern,new cljs.core.Keyword("logseq.property","default-value","logseq.property/default-value",-892079662)], 0))),(function (loaded){
return promesa.protocols._promise((set_default_value_property_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_default_value_property_BANG_.cljs$core$IFn$_invoke$arity$1(loaded) : set_default_value_property_BANG_.call(null,loaded)));
}));
}));

return null;
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-property-default-value-pane","div.ls-property-default-value-pane",334509920),(cljs.core.truth_((function (){var and__5140__auto__ = property;
if(cljs.core.truth_(and__5140__auto__)){
return default_value_property;
} else {
return and__5140__auto__;
}
})())?frontend.components.property.value.property_value(property,default_value_property,cljs.core.PersistentArrayMap.EMPTY):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$property$default_value$default_value_config__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__45483 = cljs.core.first(args__31746__auto__);
var G__45484 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__45483,G__45484) : io.factorhouse.hsx.core.obj_get.call(null,G__45483,G__45484));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"default-value-config","default-value-config",-377068686,null),args__31746__auto__),frontend$components$property$default_value$default_value_config,args__31746__auto__,null);
}
};
var frontend$components$property$default_value$default_value_config = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__45489__i = 0, G__45489__a = new Array(arguments.length -  0);
while (G__45489__i < G__45489__a.length) {G__45489__a[G__45489__i] = arguments[G__45489__i + 0]; ++G__45489__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__45489__a,0,null);
} 
return frontend$components$property$default_value$default_value_config__delegate.call(this,args__31746__auto__);};
frontend$components$property$default_value$default_value_config.cljs$lang$maxFixedArity = 0;
frontend$components$property$default_value$default_value_config.cljs$lang$applyTo = (function (arglist__45490){
var args__31746__auto__ = cljs.core.seq(arglist__45490);
return frontend$components$property$default_value$default_value_config__delegate(args__31746__auto__);
});
frontend$components$property$default_value$default_value_config.cljs$core$IFn$_invoke$arity$variadic = frontend$components$property$default_value$default_value_config__delegate;
return frontend$components$property$default_value$default_value_config;
})()
;
var memo_comp__31747__auto__ = (function (){var G__45485 = comp__31745__auto__;
var G__45486 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__45485,G__45486) : io.factorhouse.hsx.core.react_memo.call(null,G__45485,G__45486));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"default-value-config");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.property.default_value.js.map
