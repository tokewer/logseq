goog.provide('frontend.components.objects');
frontend.components.objects.add_new_class_object_BANG_ = (function frontend$components$objects$add_new_class_object_BANG_(class$,properties){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.api_insert_new_block_BANG_("",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(class$),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$)], null)], 0)),new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false], null))),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__53314 = block;
var G__53315 = (0);
var G__53316 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473)], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__53314,G__53315,G__53316) : frontend.handler.editor.edit_block_BANG_.call(null,G__53314,G__53315,G__53316));
})()),(function (___21901__auto__){
return promesa.protocols._promise(block);
}));
}));
}));
});
frontend.components.objects.build_asset_file_column = (function frontend$components$objects$build_asset_file_column(config){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"name","name",1843675177),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file","label","file/label",1746726320)], 0)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"header","header",119441134),frontend.components.views.header_cp,new cljs.core.Keyword(null,"cell","cell",764245084),(function (_table,row,_column){
var temp__5825__auto__ = frontend.state.get_component(new cljs.core.Keyword("block","asset-cp","block/asset-cp",1438941908));
if(cljs.core.truth_(temp__5825__auto__)){
var asset_cp = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-content.overflow-hidden","div.block-content.overflow-hidden",-1798181932),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),(30)], null)], null),(function (){var G__53322 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"disable-resize?","disable-resize?",-1998248527),true);
var G__53323 = row;
return (asset_cp.cljs$core$IFn$_invoke$arity$2 ? asset_cp.cljs$core$IFn$_invoke$arity$2(G__53322,G__53323) : asset_cp.call(null,G__53322,G__53323));
})()], null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"disable-hide?","disable-hide?",-1203602151),true], null);
});
frontend.components.objects.build_class_object_columns = (function frontend$components$objects$build_class_object_columns(config,class$,properties){
var properties_SINGLEQUOTE_ = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,properties);
var columns_STAR_ = frontend.components.views.build_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"view-parent","view-parent",675596601),class$),properties_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"add-tags-column?","add-tags-column?",708044916),true,new cljs.core.Keyword(null,"add-page-column?","add-page-column?",266377061),true], null)], 0));
var columns = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(class$),new cljs.core.Keyword("logseq.class","Pdf-annotation","logseq.class/Pdf-annotation",-504959620)))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53325_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property","ls-type","logseq.property/ls-type",326979345),null], null), null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__53325_SHARP_));
}),columns_STAR_):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(class$),new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970)))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53328_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("logseq.property.asset","checksum","logseq.property.asset/checksum",-1011416979),null], null), null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__53328_SHARP_));
}),columns_STAR_):columns_STAR_
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(class$),new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970))){
var vec__53336 = cljs.core.split_with((function (p1__53329_SHARP_){
return (!(logseq.db.frontend.property.logseq_property_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__53329_SHARP_))));
}),columns);
var before_cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53336,(0),null);
var after_cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53336,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before_cols,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.objects.build_asset_file_column(config)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([after_cols], 0));
} else {
return columns;
}
});
frontend.components.objects.build_property_object_columns = (function frontend$components$objects$build_property_object_columns(config,property,properties){
var tags_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","tags","block/tags",1814948340),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property));
return frontend.components.views.build_columns.cljs$core$IFn$_invoke$arity$variadic(config,properties,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__53349 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add-page-column?","add-page-column?",266377061),true], null);
if(tags_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53349,new cljs.core.Keyword(null,"add-tags-column?","add-tags-column?",708044916),false);
} else {
return G__53349;
}
})()], 0));
});
frontend.components.objects.class_objects_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$objects$class_objects_inner(config,class$,properties,p__53352){
var map__53353 = p__53352;
var map__53353__$1 = cljs.core.__destructure_map(map__53353);
var on_first_table_paint_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53353__$1,new cljs.core.Keyword(null,"on-first-table-paint!","on-first-table-paint!",1107280735));
var _STAR_ref = (logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null) : logseq.shui.hooks.use_ref.call(null,null));
var db_ident = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(class$);
var asset_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db_ident,new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970));
var config_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"view-parent","view-parent",675596601),class$);
var columns = frontend.components.objects.build_class_object_columns(config_SINGLEQUOTE_,class$,properties);
var add_new_object_BANG_ = ((((asset_QMARK_) || (cljs.core.not((function (){var G__53362 = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(class$);
return (logseq.db.private_tags.cljs$core$IFn$_invoke$arity$1 ? logseq.db.private_tags.cljs$core$IFn$_invoke$arity$1(G__53362) : logseq.db.private_tags.call(null,G__53362));
})()))))?(function (_view,_table,p__53363){
var map__53364 = p__53363;
var map__53364__$1 = cljs.core.__destructure_map(map__53364);
var properties__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53364__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("logseq.class","Asset","logseq.class/Asset",-797502970),new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(class$))){
var G__53368 = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.gap-2","div.flex.flex-col.gap-2",1564729900),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-medium","div.font-medium",-70133240),frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("asset","add-assets","asset/add-assets",-239692904)], 0))], null),frontend.components.filepicker.picker(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_e,files){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.assets.upload_asset_BANG_(null,files,new cljs.core.Keyword(null,"markdown","markdown",1227225089),frontend.handler.editor._STAR_asset_uploading_QMARK_,true)),(function (_){
return promesa.protocols._promise((logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0 ? logseq.shui.ui.dialog_close_BANG_.cljs$core$IFn$_invoke$arity$0() : logseq.shui.ui.dialog_close_BANG_.call(null)));
}));
}));
})], null))], null);
});
return (logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1 ? logseq.shui.ui.dialog_open_BANG_.cljs$core$IFn$_invoke$arity$1(G__53368) : logseq.shui.ui.dialog_open_BANG_.call(null,G__53368));
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.objects.add_new_class_object_BANG_(class$,properties__$1)),(function (block){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))?frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"block","block",664686210)):null));
}));
}));
}
}):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_STAR_ref], null),frontend.components.views.view(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"show-items-count?","show-items-count?",-1022363900),new cljs.core.Keyword(null,"view-parent-uuid","view-parent-uuid",1853863877),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"add-new-object!","add-new-object!",622560106),new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610),new cljs.core.Keyword(null,"show-add-property?","show-add-property?",2062685338),new cljs.core.Keyword(null,"add-property!","add-property!",1318392926),new cljs.core.Keyword(null,"on-first-table-paint!","on-first-table-paint!",1107280735)],[true,new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(class$),config_SINGLEQUOTE_,columns,add_new_object_BANG_,new cljs.core.Keyword(null,"class-objects","class-objects",1489112646),true,(function (e){
return frontend.state.pub_event_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editor","new-property","editor/new-property",-1370252491),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"block","block",664686210),class$,new cljs.core.Keyword(null,"class-schema?","class-schema?",508813900),true,new cljs.core.Keyword(null,"target","target",253001721),e.target], null)], null));
}),on_first_table_paint_BANG_]))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$objects$class_objects_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53373 = cljs.core.first(args__31746__auto__);
var G__53374 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53373,G__53374) : io.factorhouse.hsx.core.obj_get.call(null,G__53373,G__53374));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"class-objects-inner","class-objects-inner",1735865550,null),args__31746__auto__),frontend$components$objects$class_objects_inner,args__31746__auto__,null);
}
};
var frontend$components$objects$class_objects_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53443__i = 0, G__53443__a = new Array(arguments.length -  0);
while (G__53443__i < G__53443__a.length) {G__53443__a[G__53443__i] = arguments[G__53443__i + 0]; ++G__53443__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53443__a,0,null);
} 
return frontend$components$objects$class_objects_inner__delegate.call(this,args__31746__auto__);};
frontend$components$objects$class_objects_inner.cljs$lang$maxFixedArity = 0;
frontend$components$objects$class_objects_inner.cljs$lang$applyTo = (function (arglist__53444){
var args__31746__auto__ = cljs.core.seq(arglist__53444);
return frontend$components$objects$class_objects_inner__delegate(args__31746__auto__);
});
frontend$components$objects$class_objects_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$objects$class_objects_inner__delegate;
return frontend$components$objects$class_objects_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53375 = comp__31745__auto__;
var G__53376 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53375,G__53376) : io.factorhouse.hsx.core.react_memo.call(null,G__53375,G__53376));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"class-objects-inner");

return comp__31745__auto__;
})();
frontend.components.objects.class_objects = (function (){var render_fn__31744__auto__ = (function frontend$components$objects$class_objects(class$,config,on_first_table_paint_BANG_){
var container_key = cljs.core.select_keys(config,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword(null,"embed?","embed?",-922305920),new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"table?","table?",-1064705406),new cljs.core.Keyword(null,"block?","block?",1102479923),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"page-name","page-name",974981762)], null));
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"container-id","container-id",1274665684),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_container_id(container_key);
}
})());
var live_class = frontend.db.hooks.use_block(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(class$));
var class_properties = new cljs.core.Keyword("logseq.property.class","properties","logseq.property.class/properties",-2123712050).cljs$core$IFn$_invoke$arity$1(live_class);
var vec__53389 = logseq.shui.hooks.use_state(null);
var fetched = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53389,(0),null);
var set_fetched_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53389,(1),null);
var vec__53392 = logseq.shui.hooks.use_state(false);
var first_paint_done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53392,(0),null);
var set_first_paint_done_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53392,(1),null);
var properties = frontend.components.views.first_paint_class_properties(fetched,first_paint_done_QMARK_);
var _ = logseq.shui.hooks.use_effect_BANG_((function (){
if(cljs.core.truth_(first_paint_done_QMARK_)){
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.db.async._LT_get_class_properties(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$))),(function (result){
return promesa.protocols._promise((function (){var G__53395 = (function (){var or__5142__auto__ = result;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return (set_fetched_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_fetched_BANG_.cljs$core$IFn$_invoke$arity$1(G__53395) : set_fetched_BANG_.call(null,G__53395));
})());
}));
}));
} else {
}

return null;
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(class$),class_properties,first_paint_done_QMARK_], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-1","div.ml-1",-809469015),frontend.components.objects.class_objects_inner(config__$1,class$,properties,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-first-table-paint!","on-first-table-paint!",1107280735),(function (){
(set_first_paint_done_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_first_paint_done_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_first_paint_done_BANG_.call(null,true));

if(cljs.core.truth_(on_first_table_paint_BANG_)){
return (on_first_table_paint_BANG_.cljs$core$IFn$_invoke$arity$0 ? on_first_table_paint_BANG_.cljs$core$IFn$_invoke$arity$0() : on_first_table_paint_BANG_.call(null));
} else {
return null;
}
})], null))], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$objects$class_objects__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53396 = cljs.core.first(args__31746__auto__);
var G__53397 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53396,G__53397) : io.factorhouse.hsx.core.obj_get.call(null,G__53396,G__53397));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"class-objects","class-objects",-1165323123,null),args__31746__auto__),frontend$components$objects$class_objects,args__31746__auto__,null);
}
};
var frontend$components$objects$class_objects = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53458__i = 0, G__53458__a = new Array(arguments.length -  0);
while (G__53458__i < G__53458__a.length) {G__53458__a[G__53458__i] = arguments[G__53458__i + 0]; ++G__53458__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53458__a,0,null);
} 
return frontend$components$objects$class_objects__delegate.call(this,args__31746__auto__);};
frontend$components$objects$class_objects.cljs$lang$maxFixedArity = 0;
frontend$components$objects$class_objects.cljs$lang$applyTo = (function (arglist__53459){
var args__31746__auto__ = cljs.core.seq(arglist__53459);
return frontend$components$objects$class_objects__delegate(args__31746__auto__);
});
frontend$components$objects$class_objects.cljs$core$IFn$_invoke$arity$variadic = frontend$components$objects$class_objects__delegate;
return frontend$components$objects$class_objects;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53399 = comp__31745__auto__;
var G__53400 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53399,G__53400) : io.factorhouse.hsx.core.react_memo.call(null,G__53399,G__53400));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"class-objects");

return comp__31745__auto__;
})();
frontend.components.objects._LT_property_object_default_value = (function frontend$components$objects$_LT_property_object_default_value(property){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword("logseq.property","type","logseq.property/type",83842404).cljs$core$IFn$_invoke$arity$1(property))){
return promesa.core.resolved(false);
} else {
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.state._LT_invoke_db_worker.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("thread-api","pull","thread-api/pull",861948100),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.state.get_current_repo(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null),new cljs.core.Keyword("logseq.property","empty-placeholder","logseq.property/empty-placeholder",-1595021837)], 0))),(function (placeholder){
return promesa.protocols._promise(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(placeholder));
}));
}));
}
});
frontend.components.objects.add_new_property_object_BANG_ = (function frontend$components$objects$add_new_property_object_BANG_(property,properties){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.objects._LT_property_object_default_value(property)),(function (default_value){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.handler.editor.api_insert_new_block_BANG_("",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(property),default_value]),properties], 0)),new cljs.core.Keyword(null,"edit-block?","edit-block?",-310383789),false], null))),(function (block){
return promesa.protocols._mcat(promesa.protocols._promise((function (){var G__53407 = block;
var G__53408 = (0);
var G__53409 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"unknown-container","unknown-container",1739831473)], null);
return (frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3 ? frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(G__53407,G__53408,G__53409) : frontend.handler.editor.edit_block_BANG_.call(null,G__53407,G__53408,G__53409));
})()),(function (___21901__auto__){
return promesa.protocols._promise(block);
}));
}));
}));
}));
});
frontend.components.objects.property_related_objects_inner = (function (){var render_fn__31744__auto__ = (function frontend$components$objects$property_related_objects_inner(config,property,properties){
var columns = frontend.components.objects.build_property_object_columns(config,property,properties);
return frontend.components.views.view(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"view-parent-uuid","view-parent-uuid",1853863877),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(property),new cljs.core.Keyword(null,"view-feature-type","view-feature-type",-945869610),new cljs.core.Keyword(null,"property-objects","property-objects",-1410914822),new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"add-new-object!","add-new-object!",622560106),(function (_view,_table,p__53413){
var map__53414 = p__53413;
var map__53414__$1 = cljs.core.__destructure_map(map__53414);
var properties__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53414__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___21933__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(frontend.components.objects.add_new_property_object_BANG_(property,properties__$1)),(function (block){
return promesa.protocols._promise((cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))?frontend.state.sidebar_add_block_BANG_(frontend.state.get_current_repo(),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"block","block",664686210)):null));
}));
}));
}),new cljs.core.Keyword(null,"show-add-property?","show-add-property?",2062685338),false], null));
});
var comp__31745__auto__ = (function() { 
var frontend$components$objects$property_related_objects_inner__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53416 = cljs.core.first(args__31746__auto__);
var G__53417 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53416,G__53417) : io.factorhouse.hsx.core.obj_get.call(null,G__53416,G__53417));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-related-objects-inner","property-related-objects-inner",-78279971,null),args__31746__auto__),frontend$components$objects$property_related_objects_inner,args__31746__auto__,null);
}
};
var frontend$components$objects$property_related_objects_inner = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53468__i = 0, G__53468__a = new Array(arguments.length -  0);
while (G__53468__i < G__53468__a.length) {G__53468__a[G__53468__i] = arguments[G__53468__i + 0]; ++G__53468__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53468__a,0,null);
} 
return frontend$components$objects$property_related_objects_inner__delegate.call(this,args__31746__auto__);};
frontend$components$objects$property_related_objects_inner.cljs$lang$maxFixedArity = 0;
frontend$components$objects$property_related_objects_inner.cljs$lang$applyTo = (function (arglist__53469){
var args__31746__auto__ = cljs.core.seq(arglist__53469);
return frontend$components$objects$property_related_objects_inner__delegate(args__31746__auto__);
});
frontend$components$objects$property_related_objects_inner.cljs$core$IFn$_invoke$arity$variadic = frontend$components$objects$property_related_objects_inner__delegate;
return frontend$components$objects$property_related_objects_inner;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53418 = comp__31745__auto__;
var G__53419 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53418,G__53419) : io.factorhouse.hsx.core.react_memo.call(null,G__53418,G__53419));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-related-objects-inner");

return comp__31745__auto__;
})();
frontend.components.objects.property_related_objects = (function (){var render_fn__31744__auto__ = (function frontend$components$objects$property_related_objects(property,config){
var container_key = cljs.core.select_keys(config,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sidebar?","sidebar?",-534999672),new cljs.core.Keyword(null,"embed?","embed?",-922305920),new cljs.core.Keyword(null,"custom-query?","custom-query?",-999245951),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"table?","table?",-1064705406),new cljs.core.Keyword(null,"block?","block?",1102479923),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"page-name","page-name",974981762)], null));
var config__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"container-id","container-id",1274665684),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"container-id","container-id",1274665684).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return frontend.state.get_container_id(container_key);
}
})());
var properties = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [property], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-1","div.ml-1",-809469015),frontend.components.objects.property_related_objects_inner(config__$1,property,properties)], null);
});
var comp__31745__auto__ = (function() { 
var frontend$components$objects$property_related_objects__delegate = function (args__31746__auto__){
if(io.factorhouse.hsx.core.callable_component_props_QMARK_(cljs.core.first(args__31746__auto__))){
return io.factorhouse.hsx.core.create_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn__31744__auto__,(function (){var G__53425 = cljs.core.first(args__31746__auto__);
var G__53426 = "args";
return (io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.obj_get.cljs$core$IFn$_invoke$arity$2(G__53425,G__53426) : io.factorhouse.hsx.core.obj_get.call(null,G__53425,G__53426));
})()));
} else {
return io.factorhouse.hsx.core.create_callable_component_element(cljs.core.cons(new cljs.core.Symbol(null,"property-related-objects","property-related-objects",-349857673,null),args__31746__auto__),frontend$components$objects$property_related_objects,args__31746__auto__,null);
}
};
var frontend$components$objects$property_related_objects = function (var_args){
var args__31746__auto__ = null;
if (arguments.length > 0) {
var G__53476__i = 0, G__53476__a = new Array(arguments.length -  0);
while (G__53476__i < G__53476__a.length) {G__53476__a[G__53476__i] = arguments[G__53476__i + 0]; ++G__53476__i;}
  args__31746__auto__ = new cljs.core.IndexedSeq(G__53476__a,0,null);
} 
return frontend$components$objects$property_related_objects__delegate.call(this,args__31746__auto__);};
frontend$components$objects$property_related_objects.cljs$lang$maxFixedArity = 0;
frontend$components$objects$property_related_objects.cljs$lang$applyTo = (function (arglist__53477){
var args__31746__auto__ = cljs.core.seq(arglist__53477);
return frontend$components$objects$property_related_objects__delegate(args__31746__auto__);
});
frontend$components$objects$property_related_objects.cljs$core$IFn$_invoke$arity$variadic = frontend$components$objects$property_related_objects__delegate;
return frontend$components$objects$property_related_objects;
})()
;
var memo_comp__31747__auto__ = (function (){var G__53428 = comp__31745__auto__;
var G__53429 = io.factorhouse.hsx.core.are_props_equal_QMARK_(cljs.core._EQ_);
return (io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2 ? io.factorhouse.hsx.core.react_memo.cljs$core$IFn$_invoke$arity$2(G__53428,G__53429) : io.factorhouse.hsx.core.react_memo.call(null,G__53428,G__53429));
})();
io.factorhouse.hsx.core.mark_callable_component_BANG_(comp__31745__auto__,memo_comp__31747__auto__,"property-related-objects");

return comp__31745__auto__;
})();

//# sourceMappingURL=frontend.components.objects.js.map
