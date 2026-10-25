goog.provide('frontend.components.db_based.page');
frontend.components.db_based.page.configure_property = (function (){var render_fn__31744__auto__ = (function frontend$components$db_based$page$configure_property(page){
var G__53117 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),"configure",new cljs.core.Keyword(null,"class","class",-2030961996),"py-1 text-xs",new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
return frontend.util.stop(e);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__53119 = e.target;
var G__53120 = (function (){
return frontend.components.property.config.property_dropdown(page,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug?","debug?",-1831756173),e.altKey], null));
});
var G__53121 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-props","content-props",687449284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ls-property-dropdown as-root"], null),new cljs.core.Keyword(null,"align","align",1964212802),"start",new cljs.core.Keyword(null,"as-dropdown?","as-dropdown?",-37553558),true,new cljs.core.Keyword(null,"dropdown-menu?","dropdown-menu?",-682398029),true], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__53119,G__53120,G__53121) : logseq.shui.ui.popup_show_BANG_.call(null,G__53119,G__53120,G__53121));
})], null);
var G__53118 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("property","configure","property/configure",-1448681573)], 0));
return (logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.tabs_trigger.cljs$core$IFn$_invoke$arity$2(G__53117,G__53118) : logseq.shui.ui.tabs_trigger.call(null,G__53117,G__53118));
});
var comp__31745__auto__ = (function() { 
var frontend$components$db_based$page$configure_property__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53122 = cljs.core.first(args__31746__auto__);
var G__53123 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53122,G__53123) : io.factorhouse.hsx.core.obj_get.call(null,G__53122,G__53123));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"configure-property","configure-property",1792428028,null),args__31746__auto__),frontend$components$db_based$page$configure_property,args__31746__auto__,null);
}
};
var frontend$components$db_based$page$configure_property = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53126__i = 0, G__53126__a = new Array(arguments.length -  0);
while (G__53126__i < G__53126__a.length) {G__53126__a[G__53126__i] = arguments[G__53126__i + 0]; ++G__53126__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53126__a,0,null);
} 
return frontend$components$db_based$page$configure_property__delegate.call(this,args__31746__auto__);};
frontend$components$db_based$page$configure_property.cljs$lang$maxFixedArity = 0;
frontend$components$db_based$page$configure_property.cljs$lang$applyTo = (function (arglist__53127){
var args__31746__auto__ = cljs.core.seq(arglist__53127);
return frontend$components$db_based$page$configure_property__delegate(args__31746__auto__);
});
frontend$components$db_based$page$configure_property.cljs$core$IFn$_invoke$arity$variadic = frontend$components$db_based$page$configure_property__delegate;
return frontend$components$db_based$page$configure_property;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53124 = comp__31745__auto__;
var G__53125 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53124,G__53125) : io.factorhouse.hsx.core.react_memo.call(null,G__53124,G__53125));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"configure-property");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.db_based.page.js.map
