goog.provide('frontend.components.reference');
frontend.components.reference.references_aux = (function (){var render_fn__31744__auto__ = (function frontend$components$reference$references_aux(page_entity,config){
var filters = logseq.db.common.reference.get_filters(page_entity);
var open_blocks_level = frontend.state.get_ref_open_blocks_level();
var reference_filter = (function (p__53653){
var map__53654 = p__53653;
var map__53654__$1 = cljs.core.__destructure_map(map__53654);
var ref_pages_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53654__$1,new cljs.core.Keyword(null,"ref-pages-count","ref-pages-count",-74477634));
var G__53655 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("reference","page-filter","reference/page-filter",494388228)], 0)),new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"class","class",-2030961996),"text-muted-foreground !px-1",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var G__53657 = e.target;
var G__53658 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4","div.p-4",-165933168),frontend.components.reference_filters.filter_dialog(page_entity,ref_pages_count)], null);
});
var G__53659 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),"end"], null);
return (logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3 ? logseq.shui.ui.popup_show_BANG_.cljs$core$IFn$_invoke$arity$3(G__53657,G__53658,G__53659) : logseq.shui.ui.popup_show_BANG_.call(null,G__53657,G__53658,G__53659));
})], null);
var G__53656 = frontend.ui.icon("filter-cog",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"included","included",-1002787476).cljs$core$IFn$_invoke$arity$1(filters))) && (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(filters)))))?"":((((cljs.core.seq(new cljs.core.Keyword(null,"included","included",-1002787476).cljs$core$IFn$_invoke$arity$1(filters))) && (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(filters)))))?"text-success":((((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"included","included",-1002787476).cljs$core$IFn$_invoke$arity$1(filters))) && (cljs.core.seq(new cljs.core.Keyword(null,"excluded","excluded",-715952088).cljs$core$IFn$_invoke$arity$1(filters)))))?"text-error":"text-warning"
)))], null));
return (logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2 ? logseq.shui.ui.button.cljs$core$IFn$_invoke$arity$2(G__53655,G__53656) : logseq.shui.ui.button.call(null,G__53655,G__53656));
});
return frontend.components.views.view(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"view-parent-uuid","view-parent-uuid",1853863877),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(page_entity),new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610),new cljs.core.Keyword(null,"linked-references","linked-references",-2117592379),new cljs.core.Keyword(null,"show-items-count?","show-items-count?",-1022363900),true,new cljs.core.Keyword(null,"additional-actions","additional-actions",1699457595),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reference_filter], null),new cljs.core.Keyword(null,"columns","columns",1998437288),frontend.components.views.build_columns.cljs$core$IFn$_invoke$arity$variadic(config,cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-page-column?","add-page-column?",266377061),true], null)], 0)),new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"foldable-options","foldable-options",1611436976),(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"linked-refs-section?","linked-refs-section?",1054563452).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5140__auto__)){
return (open_blocks_level === (0));
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-collapsed?","default-collapsed?",-1350393823),true], null):null)], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$reference$references_aux__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53660 = cljs.core.first(args__31746__auto__);
var G__53661 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53660,G__53661) : io.factorhouse.hsx.core.obj_get.call(null,G__53660,G__53661));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"references-aux","references-aux",1371535280,null),args__31746__auto__),frontend$components$reference$references_aux,args__31746__auto__,null);
}
};
var frontend$components$reference$references_aux = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53672__i = 0, G__53672__a = new Array(arguments.length -  0);
while (G__53672__i < G__53672__a.length) {G__53672__a[G__53672__i] = arguments[G__53672__i + 0]; ++G__53672__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53672__a,0,null);
} 
return frontend$components$reference$references_aux__delegate.call(this,args__31746__auto__);};
frontend$components$reference$references_aux.cljs$lang$maxFixedArity = 0;
frontend$components$reference$references_aux.cljs$lang$applyTo = (function (arglist__53673){
var args__31746__auto__ = cljs.core.seq(arglist__53673);
return frontend$components$reference$references_aux__delegate(args__31746__auto__);
});
frontend$components$reference$references_aux.cljs$core$IFn$_invoke$arity$variadic = frontend$components$reference$references_aux__delegate;
return frontend$components$reference$references_aux;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53662 = comp__31745__auto__;
var G__53663 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53662,G__53663) : io.factorhouse.hsx.core.react_memo.call(null,G__53662,G__53663));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"references-aux");

return comp__31745__auto__;
})();
frontend.components.reference.references = (function (){var render_fn__31744__auto__ = (function frontend$components$reference$references(page_uuid,config){
var page_entity = frontend.db.hooks.use_block(page_uuid);
var refs_total_count = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-ref-count","block-ref-count",524096085),page_uuid], null));
if(cljs.core.truth_((function (){var and__5140__auto__ = page_entity;
if(cljs.core.truth_(and__5140__auto__)){
return ((typeof refs_total_count === 'number') && ((refs_total_count > (0))));
} else {
return and__5140__auto__;
}
})())){
return frontend.ui.catch_error(frontend.ui.component_error("Linked References: Unexpected error."),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.references","div.references",-1591327565),frontend.components.reference.references_aux(page_entity,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"refs-total-count","refs-total-count",-255123706),refs_total_count))], null));
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$reference$references__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53664 = cljs.core.first(args__31746__auto__);
var G__53665 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53664,G__53665) : io.factorhouse.hsx.core.obj_get.call(null,G__53664,G__53665));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"references","references",-1771873260,null),args__31746__auto__),frontend$components$reference$references,args__31746__auto__,null);
}
};
var frontend$components$reference$references = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53674__i = 0, G__53674__a = new Array(arguments.length -  0);
while (G__53674__i < G__53674__a.length) {G__53674__a[G__53674__i] = arguments[G__53674__i + 0]; ++G__53674__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53674__a,0,null);
} 
return frontend$components$reference$references__delegate.call(this,args__31746__auto__);};
frontend$components$reference$references.cljs$lang$maxFixedArity = 0;
frontend$components$reference$references.cljs$lang$applyTo = (function (arglist__53675){
var args__31746__auto__ = cljs.core.seq(arglist__53675);
return frontend$components$reference$references__delegate(args__31746__auto__);
});
frontend$components$reference$references.cljs$core$IFn$_invoke$arity$variadic = frontend$components$reference$references__delegate;
return frontend$components$reference$references;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53666 = comp__31745__auto__;
var G__53667 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53666,G__53667) : io.factorhouse.hsx.core.react_memo.call(null,G__53666,G__53667));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"references");

return comp__31745__auto__;
})();
frontend.components.reference.unlinked_references = (function (){var render_fn__31744__auto__ = (function frontend$components$reference$unlinked_references(page_uuid,config){
var page_entity = frontend.db.hooks.use_block(page_uuid);
var has_references_QMARK_ = frontend.db.hooks.use_resource(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block-unlinked-ref-exists","block-unlinked-ref-exists",-1967983008),page_uuid], null));
if(cljs.core.truth_((function (){var and__5140__auto__ = page_entity;
if(cljs.core.truth_(and__5140__auto__)){
return has_references_QMARK_;
} else {
return and__5140__auto__;
}
})())){
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"highlight-query","highlight-query",1703850880),new cljs.core.Keyword("block","title","block/title",710445684).cljs$core$IFn$_invoke$arity$1(page_entity));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.unlinked-references","div.unlinked-references",-1224143755),frontend.components.views.view(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"view-parent-uuid","view-parent-uuid",1853863877),page_uuid,new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610),new cljs.core.Keyword(null,"unlinked-references","unlinked-references",1918870007),new cljs.core.Keyword(null,"columns","columns",1998437288),frontend.components.views.build_columns.cljs$core$IFn$_invoke$arity$variadic(config__$1,cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-page-column?","add-page-column?",266377061),true], null)], 0)),new cljs.core.Keyword(null,"defer-resource?","defer-resource?",-1805519751),true,new cljs.core.Keyword(null,"config","config",994861415),config__$1], null))], null);
} else {
return null;
}
});
var comp__31745__auto__ = (function() { 
var frontend$components$reference$unlinked_references__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53668 = cljs.core.first(args__31746__auto__);
var G__53669 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53668,G__53669) : io.factorhouse.hsx.core.obj_get.call(null,G__53668,G__53669));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"unlinked-references","unlinked-references",-735565762,null),args__31746__auto__),frontend$components$reference$unlinked_references,args__31746__auto__,null);
}
};
var frontend$components$reference$unlinked_references = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53676__i = 0, G__53676__a = new Array(arguments.length -  0);
while (G__53676__i < G__53676__a.length) {G__53676__a[G__53676__i] = arguments[G__53676__i + 0]; ++G__53676__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53676__a,0,null);
} 
return frontend$components$reference$unlinked_references__delegate.call(this,args__31746__auto__);};
frontend$components$reference$unlinked_references.cljs$lang$maxFixedArity = 0;
frontend$components$reference$unlinked_references.cljs$lang$applyTo = (function (arglist__53677){
var args__31746__auto__ = cljs.core.seq(arglist__53677);
return frontend$components$reference$unlinked_references__delegate(args__31746__auto__);
});
frontend$components$reference$unlinked_references.cljs$core$IFn$_invoke$arity$variadic = frontend$components$reference$unlinked_references__delegate;
return frontend$components$reference$unlinked_references;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53670 = comp__31745__auto__;
var G__53671 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53670,G__53671) : io.factorhouse.hsx.core.react_memo.call(null,G__53670,G__53671));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"unlinked-references");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.reference.js.map
