goog.provide('frontend.components.onboarding.setups');
frontend.components.onboarding.setups.setups_container = (function (){var render_fn__47251__auto__ = (function frontend$components$onboarding$setups$setups_container(flag,content){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__onboarding-setups.flex.flex-1","div.cp__onboarding-setups.flex.flex-1",963941677),(function (){var picker_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flag,new cljs.core.Keyword(null,"picker","picker",-659389603));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner-card.flex.flex-col.items-center","div.inner-card.flex.flex-col.items-center",-382934969),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-xl","h1.text-xl",-128714254),((picker_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("onboarding.setup","title","onboarding.setup/title",509834001)], 0))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("onboarding.import-option","title","onboarding.import-option/title",-830841103)], 0))], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),((picker_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("onboarding.setup","desc","onboarding.setup/desc",2050617302)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("onboarding.import-option","desc","onboarding.import-option/desc",1251001334)], 0)))], null),content], null);
})()], null);
});
var comp__47252__auto__ = (function() { 
var frontend$components$onboarding$setups$setups_container__delegate = function (args__47253__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__47253__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__47251__auto__,(function (){var G__99515 = cljs.core.first(args__47253__auto__);
var G__99516 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__99515,G__99516) : io.factorhouse.hsx.core.obj_get.call(null,G__99515,G__99516));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"setups-container","setups-container",986926913,null),args__47253__auto__),frontend$components$onboarding$setups$setups_container,args__47253__auto__,null);
}
};
var frontend$components$onboarding$setups$setups_container = function (var_args){
var args__47253__auto__ = null;
if (arguments.length > 0) {
var G__99519__i = 0, G__99519__a = new Array(arguments.length -  0);
while (G__99519__i < G__99519__a.length) {G__99519__a[G__99519__i] = arguments[G__99519__i + 0]; ++G__99519__i;}
  args__47253__auto__ = new cljs.core.IndexedSeq(G__99519__a,0,null);
} 
return frontend$components$onboarding$setups$setups_container__delegate.call(this,args__47253__auto__);};
frontend$components$onboarding$setups$setups_container.cljs$lang$maxFixedArity = 0;
frontend$components$onboarding$setups$setups_container.cljs$lang$applyTo = (function (arglist__99520){
var args__47253__auto__ = cljs.core.seq(arglist__99520);
return frontend$components$onboarding$setups$setups_container__delegate(args__47253__auto__);
});
frontend$components$onboarding$setups$setups_container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$onboarding$setups$setups_container__delegate;
return frontend$components$onboarding$setups$setups_container;
})()
;
var memo_comp__47254__auto__ = (function (){var G__99517 = comp__47252__auto__;
var G__99518 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__99517,G__99518) : io.factorhouse.hsx.core.react_memo.call(null,G__99517,G__99518));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__47252__auto__,memo_comp__47254__auto__,"setups-container");

return comp__47252__auto__;
})();

//# sourceMappingURL=frontend.components.onboarding.setups.js.map
