goog.provide('frontend.components.window_controls');
frontend.components.window_controls.container = (function (){var render_fn__31744__auto__ = (function frontend$components$window_controls$container(){
var maximized_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","window-maximized?","electron/window-maximized?",-1905378935)], null));
var fullscreen_QMARK_ = frontend.rfx.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("electron","window-fullscreen?","electron/window-fullscreen?",-499490630)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.window-controls.flex","div.window-controls.flex",-773775304),(cljs.core.truth_(fullscreen_QMARK_)?frontend.ui.tooltip(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.icon.fullscreen-toggle","button.button.icon.fullscreen-toggle",1057106595),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.window.toggle_fullscreen_BANG_], null),frontend.ui.icon("arrows-minimize")], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("window","exit-fullscreen","window/exit-fullscreen",244547137)], 0))):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),frontend.ui.tooltip(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.icon.minimize","button.button.icon.minimize",-1899595434),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.window.minimize_BANG_], null),frontend.components.svg.window_minimize.cljs$core$IFn$_invoke$arity$0()], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("window","minimize","window/minimize",1226171686)], 0))),frontend.ui.tooltip(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.icon.maximize-toggle","button.button.icon.maximize-toggle",-1359953137),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(maximized_QMARK_)?"restore":"maximize"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.window.toggle_maximized_BANG_], null),(cljs.core.truth_(maximized_QMARK_)?frontend.components.svg.window_restore.cljs$core$IFn$_invoke$arity$0():frontend.components.svg.window_maximize.cljs$core$IFn$_invoke$arity$0())], null),(cljs.core.truth_(maximized_QMARK_)?frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("window","restore","window/restore",-1058920872)], 0)):frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("window","maximize","window/maximize",1246231170)], 0)))),frontend.ui.tooltip(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.icon.close","button.button.icon.close",-2021663638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.handler.window.close_BANG_], null),frontend.components.svg.window_close.cljs$core$IFn$_invoke$arity$0()], null),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("window","close","window/close",2123760926)], 0)))], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$window_controls$container__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58751 = cljs.core.first(args__31746__auto__);
var G__58752 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58751,G__58752) : io.factorhouse.hsx.core.obj_get.call(null,G__58751,G__58752));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"container","container",-96406180,null),args__31746__auto__),frontend$components$window_controls$container,args__31746__auto__,null);
}
};
var frontend$components$window_controls$container = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58760__i = 0, G__58760__a = new Array(arguments.length -  0);
while (G__58760__i < G__58760__a.length) {G__58760__a[G__58760__i] = arguments[G__58760__i + 0]; ++G__58760__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58760__a,0,null);
} 
return frontend$components$window_controls$container__delegate.call(this,args__31746__auto__);};
frontend$components$window_controls$container.cljs$lang$maxFixedArity = 0;
frontend$components$window_controls$container.cljs$lang$applyTo = (function (arglist__58761){
var args__31746__auto__ = cljs.core.seq(arglist__58761);
return frontend$components$window_controls$container__delegate(args__31746__auto__);
});
frontend$components$window_controls$container.cljs$core$IFn$_invoke$arity$variadic = frontend$components$window_controls$container__delegate;
return frontend$components$window_controls$container;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58756 = comp__31745__auto__;
var G__58757 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58756,G__58757) : io.factorhouse.hsx.core.react_memo.call(null,G__58756,G__58757));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"container");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.window_controls.js.map
