goog.provide('frontend.components.handbooks');
frontend.components.handbooks.handbooks_popup = (function (){var render_fn__31744__auto__ = (function frontend$components$handbooks$handbooks_popup(){
var popup_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
logseq.shui.hooks.use_effect_BANG_((function (){
var temp__5825__auto__ = logseq.shui.hooks.deref(popup_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var popup_el = temp__5825__auto__;
return cljs.core.comp.cljs$core$IFn$_invoke$arity$1(frontend.modules.layout.core.setup_draggable_container_BANG_(popup_el,null));
} else {
return null;
}
}),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__handbooks-popup","div.cp__handbooks-popup",263895738),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-identity","data-identity",-408563214),"logseq-handbooks",new cljs.core.Keyword(null,"ref","ref",1289896967),popup_ref], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cp__handbooks-content-wrap","div.cp__handbooks-content-wrap",1578299301),frontend.extensions.handbooks.core.content()], null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$handbooks$handbooks_popup__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__57111 = cljs.core.first(args__31746__auto__);
var G__57112 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__57111,G__57112) : io.factorhouse.hsx.core.obj_get.call(null,G__57111,G__57112));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"handbooks-popup","handbooks-popup",-1594251688,null),args__31746__auto__),frontend$components$handbooks$handbooks_popup,args__31746__auto__,null);
}
};
var frontend$components$handbooks$handbooks_popup = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__57119__i = 0, G__57119__a = new Array(arguments.length -  0);
while (G__57119__i < G__57119__a.length) {G__57119__a[G__57119__i] = arguments[G__57119__i + 0]; ++G__57119__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__57119__a,0,null);
} 
return frontend$components$handbooks$handbooks_popup__delegate.call(this,args__31746__auto__);};
frontend$components$handbooks$handbooks_popup.cljs$lang$maxFixedArity = 0;
frontend$components$handbooks$handbooks_popup.cljs$lang$applyTo = (function (arglist__57120){
var args__31746__auto__ = cljs.core.seq(arglist__57120);
return frontend$components$handbooks$handbooks_popup__delegate(args__31746__auto__);
});
frontend$components$handbooks$handbooks_popup.cljs$core$IFn$_invoke$arity$variadic = frontend$components$handbooks$handbooks_popup__delegate;
return frontend$components$handbooks$handbooks_popup;
})()
;
var memo_comp__31747__auto__ = (function (){var G__57113 = comp__31745__auto__;
var G__57114 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__57113,G__57114) : io.factorhouse.hsx.core.react_memo.call(null,G__57113,G__57114));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"handbooks-popup");

return comp__31745__auto__;
})();
frontend.components.handbooks.toggle_handbooks = (function frontend$components$handbooks$toggle_handbooks(){
return frontend.state.toggle_BANG_(new cljs.core.Keyword("ui","handbooks-open?","ui/handbooks-open?",1677401058));
});

//# sourceMappingURL=frontend.components.handbooks.js.map
