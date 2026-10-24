goog.provide('frontend.routes');
frontend.routes.home_route = (function (){var render_fn__31744__auto__ = (function frontend$routes$home_route(_route_match){
return frontend.components.home.home();
});
var comp__31745__auto__ = (function() { 
var frontend$routes$home_route__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48154 = cljs.core.first(args__31746__auto__);
var G__48155 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48154,G__48155) : io.factorhouse.hsx.core.obj_get.call(null,G__48154,G__48155));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"home-route","home-route",-1506835348,null),args__31746__auto__),frontend$routes$home_route,args__31746__auto__,null);
}
};
var frontend$routes$home_route = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48162__i = 0, G__48162__a = new Array(arguments.length -  0);
while (G__48162__i < G__48162__a.length) {G__48162__a[G__48162__i] = arguments[G__48162__i + 0]; ++G__48162__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48162__a,0,null);
} 
return frontend$routes$home_route__delegate.call(this,args__31746__auto__);};
frontend$routes$home_route.cljs$lang$maxFixedArity = 0;
frontend$routes$home_route.cljs$lang$applyTo = (function (arglist__48163){
var args__31746__auto__ = cljs.core.seq(arglist__48163);
return frontend$routes$home_route__delegate(args__31746__auto__);
});
frontend$routes$home_route.cljs$core$IFn$_invoke$arity$variadic = frontend$routes$home_route__delegate;
return frontend$routes$home_route;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48156 = comp__31745__auto__;
var G__48157 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48156,G__48157) : io.factorhouse.hsx.core.react_memo.call(null,G__48156,G__48157));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"home-route");

return comp__31745__auto__;
})();
frontend.routes.page_route = (function (){var render_fn__31744__auto__ = (function frontend$routes$page_route(route_match){
return frontend.components.page.page_cp(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(route_match,new cljs.core.Keyword(null,"current-page?","current-page?",-1491305079),true));
});
var comp__31745__auto__ = (function() { 
var frontend$routes$page_route__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__48158 = cljs.core.first(args__31746__auto__);
var G__48159 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__48158,G__48159) : io.factorhouse.hsx.core.obj_get.call(null,G__48158,G__48159));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-route","page-route",-1751683097,null),args__31746__auto__),frontend$routes$page_route,args__31746__auto__,null);
}
};
var frontend$routes$page_route = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__48164__i = 0, G__48164__a = new Array(arguments.length -  0);
while (G__48164__i < G__48164__a.length) {G__48164__a[G__48164__i] = arguments[G__48164__i + 0]; ++G__48164__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__48164__a,0,null);
} 
return frontend$routes$page_route__delegate.call(this,args__31746__auto__);};
frontend$routes$page_route.cljs$lang$maxFixedArity = 0;
frontend$routes$page_route.cljs$lang$applyTo = (function (arglist__48165){
var args__31746__auto__ = cljs.core.seq(arglist__48165);
return frontend$routes$page_route__delegate(args__31746__auto__);
});
frontend$routes$page_route.cljs$core$IFn$_invoke$arity$variadic = frontend$routes$page_route__delegate;
return frontend$routes$page_route;
})()
;
var memo_comp__31747__auto__ = (function (){var G__48160 = comp__31745__auto__;
var G__48161 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__48160,G__48161) : io.factorhouse.hsx.core.react_memo.call(null,G__48160,G__48161));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-route");

return comp__31745__auto__;
})();
frontend.routes.page_route_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"page-block","page-block",504302814),null], null), null);
/**
 * Page routes resolve their first-paint snapshots inside the view tree; every
 * other route paints synchronously.
 */
frontend.routes.use_route_paint = (function frontend$routes$use_route_paint(route_match){
var option = ((cljs.core.contains_QMARK_(frontend.routes.page_route_names,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null))))?route_match:null);
return frontend.components.page.use_page_paint(option);
});
/**
 * True once the route can paint; page routes wait for first-paint snapshots.
 */
frontend.routes.use_route_paint_ready_QMARK_ = (function frontend$routes$use_route_paint_ready_QMARK_(route_match){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(frontend.routes.use_route_paint(route_match)));
});
frontend.routes.routes = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"view","view",1247994814),frontend.routes.home_route], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/graphs",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"graphs","graphs",-1584479112),new cljs.core.Keyword(null,"view","view",1247994814),frontend.components.repo.repos_cp], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/page/:name",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"view","view",1247994814),frontend.routes.page_route], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/page/:name/block/:block-route-name",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"page-block","page-block",504302814),new cljs.core.Keyword(null,"view","view",1247994814),frontend.routes.page_route], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/all-pages",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"all-pages","all-pages",1017563062),new cljs.core.Keyword(null,"view","view",1247994814),frontend.components.all_pages.all_pages], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/graph",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"view","view",1247994814),frontend.components.graph.global_graph], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/settings",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"view","view",1247994814),frontend.components.settings.settings], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/import",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.Keyword(null,"view","view",1247994814),frontend.components.imports.importer], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/bug-report",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"bug-report","bug-report",-903169180),new cljs.core.Keyword(null,"view","view",1247994814),frontend.components.bug_report.bug_report], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/bug-report-tool/:tool",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"bug-report-tools","bug-report-tools",-1364232926),new cljs.core.Keyword(null,"view","view",1247994814),frontend.components.bug_report.bug_report_tool_route], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/all-journals",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"all-journals","all-journals",-347015095),new cljs.core.Keyword(null,"view","view",1247994814),frontend.components.journal.all_journals], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/plugins",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"view","view",1247994814),frontend.components.plugins.plugins_page], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/login",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"user-login","user-login",1532000569),new cljs.core.Keyword(null,"view","view",1247994814),frontend.components.user.login.page], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/all-files",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"all-files","all-files",1120339891),new cljs.core.Keyword(null,"view","view",1247994814),frontend.components.file.files], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/file/:path",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"view","view",1247994814),frontend.components.file.file], null)], null),(cljs.core.truth_(frontend.config.dev_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/ui",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"view","view",1247994814),logseq.shui.demo.page], null)], null):null)], null);

//# sourceMappingURL=frontend.routes.js.map
