goog.provide('frontend.components.all_pages');
frontend.components.all_pages.page_title_cell = (function frontend$components$all_pages$page_title_cell(row){
var title = (function (){var G__58868 = new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(row);
if((G__58868 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58868));
}
})();
var page_name = (function (){var or__5142__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = new cljs.core.Keyword("block","name","block/name",1619760316).cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return title;
}
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.h-full.min-w-0.items-center","div.flex.h-full.min-w-0.items-center",-1335526048),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.page-ref.truncate","a.page-ref.truncate",639960880),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),page_name], null)),new cljs.core.Keyword(null,"title","title",636505583),title], null),title], null)], null);
});
/**
 * Backlinks count cell. Rows whose count exceeded the worker's bounded scan
 * arrive without :block.temp/refs-count; those fetch the exact count through
 * the shared :block-ref-count resource only while the cell is mounted.
 */
frontend.components.all_pages.page_refs_count_cell = (function (){var render_fn__31744__auto__ = (function frontend$components$all_pages$page_refs_count_cell(row){
var bundled = new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499).cljs$core$IFn$_invoke$arity$1(row);
var fetched = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(frontend.db.hooks.use_resource_snapshot((cljs.core.truth_((function (){var and__5140__auto__ = (bundled == null);
if(and__5140__auto__){
return new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(row);
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-ref-count","block-ref-count",524096085),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(row)], null):null)));
var or__5142__auto__ = bundled;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = fetched;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (0);
}
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$all_pages$page_refs_count_cell__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58869 = cljs.core.first(args__31746__auto__);
var G__58870 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58869,G__58870) : io.factorhouse.hsx.core.obj_get.call(null,G__58869,G__58870));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"page-refs-count-cell","page-refs-count-cell",1678511387,null),args__31746__auto__),frontend$components$all_pages$page_refs_count_cell,args__31746__auto__,null);
}
};
var frontend$components$all_pages$page_refs_count_cell = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58877__i = 0, G__58877__a = new Array(arguments.length -  0);
while (G__58877__i < G__58877__a.length) {G__58877__a[G__58877__i] = arguments[G__58877__i + 0]; ++G__58877__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58877__a,0,null);
} 
return frontend$components$all_pages$page_refs_count_cell__delegate.call(this,args__31746__auto__);};
frontend$components$all_pages$page_refs_count_cell.cljs$lang$maxFixedArity = 0;
frontend$components$all_pages$page_refs_count_cell.cljs$lang$applyTo = (function (arglist__58878){
var args__31746__auto__ = cljs.core.seq(arglist__58878);
return frontend$components$all_pages$page_refs_count_cell__delegate(args__31746__auto__);
});
frontend$components$all_pages$page_refs_count_cell.cljs$core$IFn$_invoke$arity$variadic = frontend$components$all_pages$page_refs_count_cell__delegate;
return frontend$components$all_pages$page_refs_count_cell;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58871 = comp__31745__auto__;
var G__58872 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58871,G__58872) : io.factorhouse.hsx.core.react_memo.call(null,G__58871,G__58872));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"page-refs-count-cell");

return comp__31745__auto__;
})();
frontend.components.all_pages.columns = (function frontend$components$all_pages$columns(){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("block","title","block/title",710445684),new cljs.core.Keyword(null,"name","name",1843675177),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","name","page/name",1848652474)], 0)),new cljs.core.Keyword(null,"cell","cell",764245084),(function (_table,row,_column){
return frontend.components.all_pages.page_title_cell(row);
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("block.temp","refs-count","block.temp/refs-count",-598132499),new cljs.core.Keyword(null,"name","name",1843675177),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("page","backlinks","page/backlinks",1645776383)], 0)),new cljs.core.Keyword(null,"cell","cell",764245084),(function (_table,row,_column){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.all_pages.page_refs_count_cell,row], null);
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)));
});
frontend.components.all_pages.all_pages = (function (){var render_fn__31744__auto__ = (function frontend$components$all_pages$all_pages(){
var view_parent_uuid = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-identity","page-identity",-899314184),logseq.common.config.views_page_name], null));
var columns_SINGLEQUOTE_ = frontend.components.views.build_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,frontend.components.all_pages.columns(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-object-name?","with-object-name?",1288972903),false,new cljs.core.Keyword(null,"with-id?","with-id?",1405069912),false], null)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ls-all-pages.w-full.mx-auto","div.ls-all-pages.w-full.mx-auto",1652072983),(cljs.core.truth_(view_parent_uuid)?frontend.components.views.view(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"view-parent-uuid","view-parent-uuid",1853863877),view_parent_uuid,new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610),new cljs.core.Keyword(null,"all-pages","all-pages",1017563062),new cljs.core.Keyword(null,"show-items-count?","show-items-count?",-1022363900),true,new cljs.core.Keyword(null,"columns","columns",1998437288),columns_SINGLEQUOTE_], null)):null)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$all_pages$all_pages__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__58873 = cljs.core.first(args__31746__auto__);
var G__58874 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__58873,G__58874) : io.factorhouse.hsx.core.obj_get.call(null,G__58873,G__58874));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"all-pages","all-pages",-1636872707,null),args__31746__auto__),frontend$components$all_pages$all_pages,args__31746__auto__,null);
}
};
var frontend$components$all_pages$all_pages = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__58879__i = 0, G__58879__a = new Array(arguments.length -  0);
while (G__58879__i < G__58879__a.length) {G__58879__a[G__58879__i] = arguments[G__58879__i + 0]; ++G__58879__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__58879__a,0,null);
} 
return frontend$components$all_pages$all_pages__delegate.call(this,args__31746__auto__);};
frontend$components$all_pages$all_pages.cljs$lang$maxFixedArity = 0;
frontend$components$all_pages$all_pages.cljs$lang$applyTo = (function (arglist__58880){
var args__31746__auto__ = cljs.core.seq(arglist__58880);
return frontend$components$all_pages$all_pages__delegate(args__31746__auto__);
});
frontend$components$all_pages$all_pages.cljs$core$IFn$_invoke$arity$variadic = frontend$components$all_pages$all_pages__delegate;
return frontend$components$all_pages$all_pages;
})()
;
var memo_comp__31747__auto__ = (function (){var G__58875 = comp__31745__auto__;
var G__58876 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__58875,G__58876) : io.factorhouse.hsx.core.react_memo.call(null,G__58875,G__58876));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"all-pages");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.all_pages.js.map
